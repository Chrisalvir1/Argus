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
    'access_desc': 'Control global de seguridad, Pin de Armado y administradores.',
    'access_pin_lbl': 'Pin perfil Argus',
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
    'change_pin': 'Cambiar Pin perfil Argus',
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
    'edit_widgets': 'Config. Widgets',

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
    'first_run_pin_expl': 'Establece un Pin de Armado para controlar el sistema.',
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
    'introduce_pin': 'Introduce tu Pin perfil Argus',
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
    'log_action_access_pin_updated': 'Pin perfil Argus actualizado',
    'log_action_analysis': 'Análisis de Seguridad',
    'log_action_automation': 'Automatización Ejecutada',
    'log_action_backup_created': 'Respaldo Creado',
    'log_action_backup_restored': 'Configuración Restaurada',
    'log_action_first_run_completed': 'Configuración inicial completada',
    'log_action_fullscreen_unlocked': 'Pantalla completa desbloqueada',
    'log_action_master_pin_rejected': 'Pin de Armado incorrecto rechazado',
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
    'log_action_verify_access_pin': 'Pin perfil Argus verificado',
    'log_armed': 'ARMADO',
    'log_by': 'por',
    'log_detail_armed': 'Sistema armado',
    'log_detail_disarm': 'Sistema desarmado',
    'log_detail_pin_reset': 'Pin de Armado restablecido por admin',
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
    'master_pin_lbl': 'Pin de Armado',
    'modal_add_user': '+ Añadir Usuario',
    'modal_cancel': 'Cancelar',
    'modal_confirm': 'Confirmar',
    'modal_delete_confirm': '¿Eliminar este usuario?',
    'modal_edit_name': 'Editar Nombre',
    'modal_name_label': 'Nombre del Perfil',
    'modal_pin_help': 'Deja en blanco para no requerir PIN.',
    'modal_pin_title': 'Pin perfil Argus',
    'modal_save': 'Guardar',
    'modal_user_added': 'Usuario creado exitosamente.',
    'mode_away': 'Ausente',
    'mode_home': 'En Casa',
    'mode_night': 'Noche',
    'mode_vacation': 'Vacaciones',
    'modes': 'Modos / SOS',
    'modes_sos': 'Modos / SOS',
    'system_diagnostics': 'Diagnóstico y Resumen del Sistema',

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
    'permissions_title': 'Permisos',
    'permissions_modal_desc': 'Selecciona las acciones permitidas para este perfil estándar:',
    'perm_view_status': 'Ver Estado de Sensores / Panel',
    'perm_arm': 'Armar Alarma',
    'perm_disarm': 'Desarmar Alarma',
    'perm_sos': 'Activar SOS / Pánico',
    'perm_view_history': 'Ver Historial de Actividad',
    'perm_change_pin': 'Permitir Cambiar su Pin perfil Argus',
    'perm_change_master_pin': 'Permitir Cambiar el Pin de Armado',
    'perm_admin_access': 'Acceso a Pestañas / Ajustes de Admin',
    'perm_admin_profiles': 'Acceso a Perfiles de Admin',
    'no_pin_badge': 'SIN PIN',
    'configured_pin_badge': 'CONFIGURADO',
    'configure_btn': 'Configurar',
    'enter_new_pin': 'Introduce el nuevo PIN (4 a 8 dígitos):',
    'enter_current_pin': 'Introduce el PIN actual:',
    'confirm_remove_access_pin': '¿Estás seguro de que deseas eliminar el Pin de perfil Argus?',
    'confirm_remove_master_pin': '¿Estás seguro de que deseas eliminar el Pin de Armado del sistema?',
    'no_arm_perm_alert': 'No tienes permisos para armar la alarma.',
    'no_disarm_perm_alert': 'No tienes permisos para desarmar la alarma.',
    'no_sos_perm_alert': 'No tienes permisos para activar la alarma SOS.',
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
    'pin_master_title': 'Pin de Armado',
    'pin_mismatch': 'Los PIN no coinciden',
    'pin_modal_desc': 'Ingresa tu PIN de seguridad para continuar.',
    'pin_placeholder': '••••',
    'pin_remove_hint': 'Deja en blanco para eliminar el Pin de Armado.',
    'pin_reset_admin_only': 'Solo el administrador puede restablecer el PIN.',
    'pin_reset_confirm': '¿Restablecer el PIN?',
    'pin_updated': 'PIN actualizado exitosamente',
    'profile_is_yours': 'Tu Perfil',
    'profile_needs_pin': 'Este perfil requiere Pin perfil Argus.',
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
    'setup_access_pin': 'Pin perfil Argus al panel Argus (Opcional)',
    'setup_admin_name': 'Nombre de Administrador',
    'setup_master_pin': 'Pin de Armado para armar/desarmar (Opcional)',
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
    'user_no_pin': 'Sin Pin perfil Argus',
    'user_pin': 'Pin perfil Argus',
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
    'access_pin_lbl': 'Argus Profile PIN',
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
    'edit_widgets': 'Widget Config',

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
    'master_pin_lbl': 'Arming PIN',
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
    'system_diagnostics': 'System Diagnostics & Summary',

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
    'permissions_title': 'Permissions',
    'permissions_modal_desc': 'Select allowed actions for this standard profile:',
    'perm_view_status': 'View Sensors / Security Status',
    'perm_arm': 'Arm System',
    'perm_disarm': 'Disarm System',
    'perm_sos': 'Trigger SOS / Panic',
    'perm_view_history': 'View Activity History',
    'perm_change_pin': 'Allow Changing Argus Profile PIN',
    'perm_change_master_pin': 'Allow Changing System Arming PIN',
    'perm_admin_access': 'Access Admin Tabs & Settings',
    'perm_admin_profiles': 'Access Admin Profiles',
    'no_pin_badge': 'NO PIN',
    'configured_pin_badge': 'CONFIGURED',
    'configure_btn': 'Configure',
    'enter_new_pin': 'Enter new PIN (4 to 8 digits):',
    'enter_current_pin': 'Enter current PIN:',
    'confirm_remove_access_pin': 'Are you sure you want to remove your Argus Profile PIN?',
    'confirm_remove_master_pin': 'Are you sure you want to remove the System Arming PIN?',
    'no_arm_perm_alert': 'You do not have permission to arm the system.',
    'no_disarm_perm_alert': 'You do not have permission to disarm the system.',
    'no_sos_perm_alert': 'You do not have permission to trigger SOS.',
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
        this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent("argus-state-update"));
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
    // When a manual language has been explicitly selected (es or en), use it.
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
    // Auto mode: resolve from HA language. Fall back to 'en' for any unknown language.
    if (!raw) {
      raw = this._hass?.language || 'es';
    }
    raw = String(raw || 'es').trim();
    if (TEXTS[raw]) return raw;
    const short = raw.split(/[-_]/)[0].toLowerCase();
    if (TEXTS[short]) return short;
    // Spanish variants → es; everything else → en (universal fallback)
    return short.startsWith('es') ? 'es' : 'en';
  }

  _getLocale(): string {
    // Returns a BCP 47 locale for Intl formatting.
    // In auto mode, use HA's actual language code so dates/numbers adapt fully.
    const manual = this._manualLang && this._manualLang !== 'auto' ? this._manualLang : null;
    const stored = (() => { try { const s = localStorage.getItem('argus_lang'); return (s && s !== 'auto') ? s : null; } catch { return null; } })();
    const uiLang = (this._ui?.manual_lang && this._ui.manual_lang !== 'auto') ? this._ui.manual_lang : (this._ui?.language && this._ui.language !== 'auto') ? this._ui.language : null;
    const effectiveLang = manual || stored || uiLang;
    if (effectiveLang && effectiveLang !== 'auto') {
      return ({ es: 'es-ES', en: 'en-US' } as Record<string, string>)[effectiveLang] || effectiveLang;
    }
    // Auto: use HA's full BCP 47 tag so Intl adapts dates/numbers to the HA language
    return this._hass?.language || 'es-ES';
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
    this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent("argus-state-update"));
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
    set('edit-widgets-label', this._widgetEditing ? ('✓ ' + t('done')) : `⚙️ ${this._t('edit_widgets') || 'Config. Widgets'}`);
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
    set('system-diagnostics-txt', 'ℹ️ ' + (t('system_diagnostics') || 'Diagnóstico y Resumen del Sistema'));

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
      if (!fsEl && !this._kioskLocked && this.classList.contains('fullscreen-active')) {
        this._exitFullscreenView();
      }
    };
    document.addEventListener('fullscreenchange', this._onFsChange);
    document.addEventListener('webkitfullscreenchange', this._onFsChange);
    this._onEscape = event => {
      if (event.key === 'Escape' && this.classList.contains('fullscreen-active')) {
        this._exitFullscreenView();
      }
    };
    document.addEventListener('keydown', this._onEscape);
    if (!this._shadowClickDelegated) {
      this._shadowClickDelegated = true;
      this.shadowRoot?.addEventListener('click', async (e: Event) => {
        const target = e.target as Element;
        if (!target || typeof target.closest !== 'function') return;
        
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
        const exitFullscreenBtn = target.closest('.exit-kiosk-btn, button[data-exit-fullscreen]');
        if (exitFullscreenBtn) {
          e.preventDefault();
          e.stopPropagation();
          this._exitFullscreenView();
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
    
    this.shadowRoot.getElementById('history-export-modal')?.addEventListener('click', (e) => {
      if (e.target && (e.target as HTMLElement).id === 'history-export-modal') this._closeHistoryExportModal();
    });
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
            <img src="${window.location.origin}/api/argus_static/argus_logo.png" alt="Argus Logo" onerror="this.style.display='none'">
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

  _generateHistoryPDF(events, metadata) {
    const homeName = metadata.homeName || 'Mi Casa';
    const generatedAt = metadata.generatedAt || new Date().toLocaleString();
    const totalEvents = events.length;

    const escapePdfText = (str) => {
      return String(str || '')
        .replace(/\\/g, '\\\\')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)')
        .replace(/[^\x20-\x7E\xA0-\xFF]/g, ' ');
    };

    const PAGE_WIDTH = 612;
    const PAGE_HEIGHT = 792;
    const MARGIN_LEFT = 36;
    const MARGIN_BOTTOM = 40;
    const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT * 2;

    const itemsPerPage = 22;
    const pagesCount = Math.max(1, Math.ceil(events.length / itemsPerPage));

    const pageObjIds = [];
    for (let p = 0; p < pagesCount; p++) {
      pageObjIds.push(5 + p * 2);
    }

    const pageContents = [];
    for (let p = 0; p < pagesCount; p++) {
      const pageEvents = events.slice(p * itemsPerPage, (p + 1) * itemsPerPage);
      let stream = '';

      // Header bar
      stream += `q 0.05 0.08 0.15 rg 0 ${PAGE_HEIGHT - 65} ${PAGE_WIDTH} 65 re f Q\n`;
      stream += `BT /F2 14 Tf 1 1 1 rg ${MARGIN_LEFT} ${PAGE_HEIGHT - 32} Td (ARGUS HOME HUB - HISTORIAL DE ACTIVIDAD) Tj ET\n`;
      stream += `BT /F1 8.5 Tf 0.7 0.8 0.9 rg ${MARGIN_LEFT} ${PAGE_HEIGHT - 48} Td (${escapePdfText(`Hogar: ${homeName}   |   Generado: ${generatedAt}   |   Total Eventos: ${totalEvents}`)}) Tj ET\n`;

      // Table Header
      const tableTop = PAGE_HEIGHT - 80;
      stream += `q 0.12 0.18 0.28 rg ${MARGIN_LEFT} ${tableTop - 18} ${CONTENT_WIDTH} 20 re f Q\n`;
      stream += `BT /F2 8.5 Tf 1 1 1 rg ${MARGIN_LEFT + 6} ${tableTop - 13} Td (FECHA Y HORA) Tj ET\n`;
      stream += `BT /F2 8.5 Tf 1 1 1 rg ${MARGIN_LEFT + 130} ${tableTop - 13} Td (ACCION / EVENTO) Tj ET\n`;
      stream += `BT /F2 8.5 Tf 1 1 1 rg ${MARGIN_LEFT + 255} ${tableTop - 13} Td (ORIGEN / USUARIO) Tj ET\n`;
      stream += `BT /F2 8.5 Tf 1 1 1 rg ${MARGIN_LEFT + 365} ${tableTop - 13} Td (DETALLE) Tj ET\n`;

      let y = tableTop - 38;
      for (let i = 0; i < pageEvents.length; i++) {
        const ev = pageEvents[i];
        if (i % 2 === 0) {
          stream += `q 0.96 0.97 0.98 rg ${MARGIN_LEFT} ${y - 4} ${CONTENT_WIDTH} 20 re f Q\n`;
        }
        stream += `q 0.88 0.88 0.88 RG 0.5 w ${MARGIN_LEFT} ${y - 4} m ${MARGIN_LEFT + CONTENT_WIDTH} ${y - 4} l S Q\n`;

        const ts = escapePdfText(ev.ts || '-');
        const action = escapePdfText(ev.action || '-');
        const user = escapePdfText(ev.user || 'Argus');
        const detail = escapePdfText(ev.detail || '-');

        stream += `BT /F1 8 Tf 0.15 0.15 0.15 rg ${MARGIN_LEFT + 6} ${y + 2} Td (${ts.slice(0, 24)}) Tj ET\n`;
        stream += `BT /F2 8 Tf 0.1 0.2 0.4 rg ${MARGIN_LEFT + 130} ${y + 2} Td (${action.slice(0, 22)}) Tj ET\n`;
        stream += `BT /F1 8 Tf 0.2 0.2 0.2 rg ${MARGIN_LEFT + 255} ${y + 2} Td (${user.slice(0, 20)}) Tj ET\n`;
        stream += `BT /F1 7.5 Tf 0.3 0.3 0.3 rg ${MARGIN_LEFT + 365} ${y + 2} Td (${detail.slice(0, 35)}) Tj ET\n`;

        y -= 22;
      }

      // Footer
      stream += `q 0.8 0.8 0.8 RG 0.5 w ${MARGIN_LEFT} ${MARGIN_BOTTOM} m ${MARGIN_LEFT + CONTENT_WIDTH} ${MARGIN_BOTTOM} l S Q\n`;
      stream += `BT /F1 7.5 Tf 0.5 0.5 0.5 rg ${MARGIN_LEFT} ${MARGIN_BOTTOM - 12} Td (Argus Home Hub Security System - Documento Oficial de Auditoria) Tj ET\n`;
      stream += `BT /F1 7.5 Tf 0.5 0.5 0.5 rg ${PAGE_WIDTH - MARGIN_LEFT - 60} ${MARGIN_BOTTOM - 12} Td (${escapePdfText(`Pagina ${p + 1} de ${pagesCount}`)}) Tj ET\n`;

      pageContents.push(stream);
    }

    const pdfLines = [];
    const offsets = [];
    const addObj = (str) => {
      offsets.push(pdfLines.join('\n').length + (pdfLines.length > 0 ? 1 : 0));
      pdfLines.push(str);
    };

    pdfLines.push('%PDF-1.4');
    addObj(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj`);
    addObj(`2 0 obj\n<< /Type /Pages /Kids [${pageObjIds.map(id => `${id} 0 R`).join(' ')}] /Count ${pagesCount} /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] >>\nendobj`);
    addObj(`3 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj`);
    addObj(`4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj`);

    for (let p = 0; p < pagesCount; p++) {
      const pageObjId = pageObjIds[p];
      const contentObjId = pageObjId + 1;
      const stream = pageContents[p];
      const streamBytes = unescape(encodeURIComponent(stream)).length;

      addObj(`${pageObjId} 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObjId} 0 R >>\nendobj`);
      addObj(`${contentObjId} 0 obj\n<< /Length ${streamBytes} >>\nstream\n${stream}endstream\nendobj`);
    }

    const startxref = pdfLines.join('\n').length + 1;
    pdfLines.push('xref');
    pdfLines.push(`0 ${offsets.length + 1}`);
    pdfLines.push('0000000000 65535 f ');
    for (let i = 0; i < offsets.length; i++) {
      pdfLines.push(String(offsets[i]).padStart(10, '0') + ' 00000 n ');
    }
    pdfLines.push('trailer');
    pdfLines.push(`<< /Size ${offsets.length + 1} /Root 1 0 R >>`);
    pdfLines.push('startxref');
    pdfLines.push(String(startxref));
    pdfLines.push('%%EOF');

    return pdfLines.join('\n');
  }

  _exportHistoryPDF() {
    const rawEvents = Array.isArray(this._forensicTimeline) && this._forensicTimeline.length ? this._forensicTimeline : (this._ui?.audit_log || []);
    const events = rawEvents.map(ev => {
      const action = String(ev.action || '');
      const rawDetail = String(ev.detail || '');
      const detail = this._localizeActivityDetail ? this._localizeActivityDetail(action, rawDetail) : rawDetail;
      const user = String(ev.user || ev.actor || 'Argus');
      let ts = '';
      if (ev.ts) {
        try { ts = new Date(ev.ts).toLocaleString(this._getLocale()); } catch (e) { ts = String(ev.ts); }
      }
      return { ts, action, user, detail };
    });

    const homeName = this._homeName || 'Mi Casa';
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const timeStr = now.toTimeString().slice(0, 5).replace(':', '-');
    const generatedAt = now.toLocaleString(this._getLocale());

    const pdfData = this._generateHistoryPDF(events, { homeName, generatedAt });
    const blob = new Blob([pdfData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `argus_historial_${dateStr}_${timeStr}.pdf`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
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
      } else if (bootstrap.language && bootstrap.language !== 'auto' && LANG_LIST.some(l => l.code === bootstrap.language)) {
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
      ['away', 'home', 'night'].forEach(m => {
        const list = modes[m]?.sensors;
        if (Array.isArray(list)) list.forEach((s: string) => all.add(s));
      });
      if (this._ui?.modes?.__by_entity__) {
        Object.values(this._ui.modes.__by_entity__).forEach((mObj: any) => {
          ['away', 'home', 'night'].forEach(m => {
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
    return `<div class="battery-alerts-container" style="display:flex; flex-direction:column; align-items:center; gap:6px; width:100%; max-width:90%; margin:0 auto 10px; pointer-events:none;">${rows}</div>`;
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
    const heroClock = this.shadowRoot?.getElementById('hero-clock-time');
    const heroDate = this.shadowRoot?.getElementById('hero-clock-date');
    const heroWeather = this.shadowRoot?.getElementById('hero-weather-pill');
    const heroSecurity = this.shadowRoot?.getElementById('hero-security-pill');

    if (heroClock || heroDate || heroWeather || heroSecurity) {
      const now = new Date();
      const timeStr = this._formatTime(now);
      const weatherEnt = this._getWeatherEntity();
      const weatherState = weatherEnt.state || 'sunny';
      const isNight = this._hass?.states?.['sun.sun']?.state === 'below_horizon';
      const weather = this._weatherPresentation(weatherState, isNight);
      const entries = this._dashboard?.entries || [];
      const t = k => this._t(k);
      const isArmed = entries.some(e => {
        const s = this._hass?.states[e.entity_id]?.state || e.state;
        return String(s).startsWith('armed') || s === 'triggered' || s === 'pending';
      });

      if (heroClock) heroClock.textContent = timeStr;
      if (heroDate) heroDate.textContent = now.toLocaleDateString(this._getLocale(), { weekday: 'short', month: 'short', day: 'numeric' });
      if (heroWeather) heroWeather.textContent = `${weather.icon} ${weather.label}`;
      if (heroSecurity) heroSecurity.innerHTML = `<i class="hero-live" style="background:${isArmed ? '#ffb54d' : '#55df91'};box-shadow:0 0 9px ${isArmed ? '#ffb54d' : '#55df91'}"></i>${this._escapeHtml(isArmed ? t('system_armed') : t('system_disarmed'))}`;
    }

    if (typeof (window as any).mountSecurityConsole === 'function') {
      (window as any).mountSecurityConsole(this);
    }
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
      this.dispatchEvent(new CustomEvent('argus-fullscreen-changed', { detail: { fullscreen: false } }));
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
      if (target) {
        target.classList.remove('ios-fullscreen');
      }
      this.shadowRoot.querySelectorAll('.entry.ios-fullscreen').forEach(el => {
        el.classList.remove('ios-fullscreen');
      });
      this.classList.remove('fullscreen-active');
      this._fullscreenIdx = -1;
      this._kioskLocked = false;
      this._kioskEntryId = null;
      this._kioskTarget = null;
      document.body.style.overflow = '';
      this.dispatchEvent(new CustomEvent('argus-fullscreen-changed', { detail: { fullscreen: false } }));
      this._renderEntries(true);
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
    document.body.style.overflow = 'hidden';
    this.dispatchEvent(new CustomEvent('argus-fullscreen-changed', { detail: { fullscreen: true } }));

    this._renderEntries(true);

    const requestFS = this.requestFullscreen || this.webkitRequestFullscreen || target?.requestFullscreen || target?.webkitRequestFullscreen;
    if (requestFS) {
      requestFS.call(this).catch(() => {});
    }
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
      es:{title:'Centro de salud',healthy:'Sistema saludable',warning:'Requiere atención',critical:'Dispositivos sin conexión',devices:'dispositivos configurados',offline:'sin conexión',low:'batería baja',battery:'Batería',none:'No hay dispositivos seleccionados en los modos.',local:'Local-first activo',confirm:'Confirmación inteligente',help:'Requiere señales independientes en una ventana de tiempo. Humo, gas, CO y seguridad siempre activan inmediatamente.',save:'Guardar',saved:'Guardado'},
      en:{title:'Health center',healthy:'System healthy',warning:'Attention required',critical:'Devices offline',devices:'configured devices',offline:'offline',low:'low batteries',battery:'Battery',none:'No devices are selected in the modes.',local:'Local-first active',confirm:'Intelligent confirmation',help:'Requires independent signals within a window. Smoke, gas, CO and safety always trigger immediately.',save:'Save',saved:'Saved'},
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
    const deleteLabel = ({es:'Eliminar horario',en:'Delete schedule'} as Record<string,string>)[this._getCurrentLangCode()] || 'Delete schedule';
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
      this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent("argus-state-update"));
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
    this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent("argus-state-update"));
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
        <div class="sos-mode-stack" style="display:flex;flex-direction:column;gap:16px;width:100%">
          <!-- Card 1: Emergency Phone (Full width, styled like mode box) -->
          <div class="mode-section-card" style="width:100%;box-sizing:border-box;padding:20px 24px;border-radius:18px;">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
              <div style="flex:1;min-width:220px;">
                <div class="mode-section-title" style="font-size:15px;font-weight:900;margin-bottom:4px;">📞 ${this._t('emergency_number_label') || 'Número Local de Emergencia'}</div>
                <p class="small" style="margin:0;opacity:0.75;line-height:1.4;">${this._t('emergency_help') || 'Configura el número local de emergencia (ej. 911 o 112). Se incluirá en alertas SOS.'}</p>
              </div>
              <div style="display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.04);padding:10px 16px;border-radius:14px;border:1px solid rgba(255,255,255,0.1);">
                <span style="font-size:12px;font-weight:800;text-transform:uppercase;opacity:0.85;">TEL:</span>
                <input id="mode-emergency-number-input" class="glass-control" inputmode="tel" maxlength="16" value="${this._escapeHtml(emergencyNumber)}" style="width:130px;min-height:38px;padding:6px 10px;font-size:18px;font-weight:900;text-align:center;border-radius:10px;background:rgba(0,0,0,0.25);color:#fff;border:1px solid rgba(255,255,255,0.2);letter-spacing:1.5px">
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
                <div class="mode-section-title" style="font-size:15px;font-weight:900;margin-bottom:4px;">⚡ ${this._t('sos_actions') || 'Dispositivos y Acciones SOS'}</div>
                <p class="small" style="margin:0;opacity:0.75;">${this._t('sos_outputs_help') || 'Estos dispositivos se encenderán o ejecutarán inmediatamente al dispararse el SOS.'}</p>
              </div>
              ${readonly ? '' : `
                <button class="ghost" id="btn-mode-select-sos-outputs" style="padding:8px 16px;font-size:12px;font-weight:800;border-radius:12px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.16);cursor:pointer;">
                  ＋ ${this._t('sos_select_outputs') || 'Seleccionar Luces, Sirenas o Escenas'}
                </button>
              `}
            </div>
            <div id="sos-output-chips" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px;width:100%;">
              ${outputs.length
                ? outputs.map(id => this._chip(id, 'sos_output')).join('')
                : `<div class="mode-sensor-none" style="grid-column:1/-1;">${this._t('sos_no_outputs') || 'Ningún dispositivo configurado'}</div>`
              }
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
      this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent("argus-state-update"));
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
      this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent("argus-state-update"));
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
    this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent("argus-state-update"));
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
                ${u.access_pin_configured ? '<span class="user-badge" style="background:#0284c7;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800">🔒 PIN</span>' : ''}
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
              ? `<span class="user-badge admin" style="background:#b91c1c;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">❌ ${this._escapeHtml(this._t('expired'))} (${this._escapeHtml(formattedDate)})</span>`
              : `<span class="user-badge" style="background:#15803d;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">⏳ ${this._escapeHtml(this._t('active_until'))}: ${this._escapeHtml(formattedDate)}</span>`)
            : `<span class="user-badge" style="background:#15803d;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">♾️ ${this._t('exp_indefinite')}</span>`;

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
            ? `<span class="user-badge" style="background:#0284c7;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800">🔒 PIN</span>`
            : `<span class="user-badge" style="background:#334155;color:#ffffff!important;border:1px solid rgba(255,255,255,0.2);font-weight:800">🔓 ${this._escapeHtml(this._t('user_no_pin'))}</span>`;

          return `
          <div class="user-card" style="display:flex;flex-direction:column;align-items:stretch;gap:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;width:100%">
              <div style="flex:1">
                <div style="font-weight:700">${this._escapeHtml(u.name || '')}</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px">
                  <span class="user-badge ${u.role === 'admin' ? 'admin' : 'user'}">${roleText}</span>
                  <span class="user-badge" style="background:#581c87;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">${this._escapeHtml(haAccountText)}</span>
                  ${pinBadge}
                  ${expBadge}
                </div>
                ${u.role !== 'admin' && u.permissions ? `
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px">
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t('view_panel_perm') || this._t('instances') || 'Panel')}">👁️ ${u.permissions.view_status ? (this._t('view_panel_perm') || this._t('instances') || 'Panel') : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t('arm_perm') || this._t('system_armed') || 'Armar')}">🛡️ ${u.permissions.arm ? (this._t('arm_perm') || this._t('system_armed') || 'Armar') : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t('disarm_perm') || this._t('disarmed') || 'Desarmar')}">🔓 ${u.permissions.disarm ? (this._t('disarm_perm') || this._t('disarmed') || 'Desarmar') : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(248,113,113,0.12);color:#f87171" title="${this._escapeHtml(this._t('perm_sos') || 'SOS')}">🚨 ${u.permissions.sos ? 'SOS' : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t('view_history_perm') || this._t('activity_log') || 'Historial')}">📜 ${u.permissions.view_history ? (this._t('view_history_perm') || this._t('activity_log') || 'Historial') : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(52,199,89,0.12);color:#34c759" title="${this._escapeHtml(this._t('access_pin_lbl') || 'PIN Acceso')}">🔑 ${u.permissions.change_pin ? (this._t('access_pin_lbl') || 'PIN Acceso') : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(255,179,0,0.12);color:#ffb300" title="${this._escapeHtml(this._t('master_pin_lbl') || 'Pin de Armado')}">🔑 ${u.permissions.change_master_pin ? (this._t('master_pin_lbl') || 'Pin de Armado') : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(168,85,247,0.12);color:#a855f7" title="${this._escapeHtml(this._t('perm_admin_access') || 'Admin')}">⚙️ ${u.permissions.admin_access ? 'Admin' : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(56,189,248,0.12);color:#38bdf8" title="${this._escapeHtml(this._t('perm_admin_profiles') || 'Perfiles Admin')}">👑 ${u.permissions.admin_profiles ? 'Perfiles' : '---'}</span>
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
    if (!this._isAdmin && this._permissions?.sos === false) {
      await this._showArgusConfirmModal(this._t('no_sos_perm_alert') || 'No tienes permisos para activar la alarma SOS.', { confirmLabel: 'OK' });
      return;
    }
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
        const successMsg = '✓ Pin de Armado restablecido';
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
          
          <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px;max-height:340px;overflow-y:auto;padding-right:4px;">
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-status" ${perms.view_status ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>👁️ ${this._t('perm_view_status') || 'Ver Estado de Sensores / Panel'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-arm" ${perms.arm ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>🛡️ ${this._t('perm_arm') || 'Armar Alarma'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-disarm" ${perms.disarm ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>🔓 ${this._t('perm_disarm') || 'Desarmar Alarma'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-sos" ${perms.sos ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#f87171;font-weight:700;">🚨 ${this._t('perm_sos') || 'Activar SOS / Pánico'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-history" ${perms.view_history ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>📜 ${this._t('perm_view_history') || 'Ver Historial de Actividad'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-pin" ${perms.change_pin ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#34c759;font-weight:700;">🔑 ${this._t('perm_change_pin') || 'Permitir Cambiar su Pin perfil Argus'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-master-pin" ${perms.change_master_pin ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#ffb300;font-weight:700;">🔑 ${this._t('perm_change_master_pin') || 'Permitir Cambiar el Pin de Armado'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-admin-access" ${perms.admin_access ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#a855f7;font-weight:700;">⚙️ ${this._t('perm_admin_access') || 'Acceso a Pestañas / Ajustes de Admin'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-admin-profiles" ${perms.admin_profiles ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#38bdf8;font-weight:700;">👑 ${this._t('perm_admin_profiles') || 'Acceso a Perfiles de Admin'}</span>
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
          sos: overlay.querySelector('#chk-perm-sos').checked,
          view_history: overlay.querySelector('#chk-perm-view-history').checked,
          change_pin: overlay.querySelector('#chk-perm-change-pin').checked,
          change_master_pin: overlay.querySelector('#chk-perm-change-master-pin').checked,
          admin_access: overlay.querySelector('#chk-perm-admin-access').checked,
          admin_profiles: overlay.querySelector('#chk-perm-admin-profiles').checked,
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
        this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent("argus-state-update"));
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
    this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent("argus-state-update"));
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
      if (!this._isAdmin && this._permissions?.disarm === false) {
        await this._showArgusConfirmModal(this._t('no_disarm_perm_alert') || 'No tienes permisos para desarmar la alarma.', { confirmLabel: 'OK' });
        return;
      }
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
          setTimeout(() => { this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent("argus-state-update")); this._load(); }, 300);
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

    if (action !== 'disarm' && !this._isAdmin && this._permissions?.arm === false) {
      await this._showArgusConfirmModal(this._t('no_arm_perm_alert') || 'No tienes permisos para armar la alarma.', { confirmLabel: 'OK' });
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

    const activeUserInList = (this._users || []).find(u => u.id === prof.id);
    const hasAccessPin = Boolean(prof.access_pin_configured || activeUserInList?.access_pin_configured);
    const hasMasterPin = Boolean(this._dashboard?.entries?.[0]?.pin_configured || prof.master_pin_configured || (this._users || []).find(u => u.role === 'admin')?.pin_configured);

    container.innerHTML = `
      <div style="position: relative; display: flex; align-items: center; z-index: 10002;">
        <div class="hero-profile-pill glass liquid-glass" style="display: flex; align-items: center; gap: 8px; padding: 5px 12px 5px 7px; border-radius: 999px;">
          ${avatarHtml}
          <div style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.15;">
            <span id="hero-profile-name" style="font-size: 12.5px; font-weight: 800; color: var(--v2066-text, #f7f9ff); max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${this._escapeHtml(prof.name)}</span>
            <span id="hero-profile-role" style="font-size: 8.5px; opacity: 0.65; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">${this._escapeHtml(roleLabel)}</span>
          </div>
          <span class="profile-chevron" style="font-size: 7.5px; opacity: 0.65; margin-left: 2px;">▼</span>
        </div>

        <!-- Dropdown Card -->
        <div id="profile-dropdown" class="hero-profile-dropdown" style="display: none; position: absolute; top: calc(100% + 12px); right: 0; flex-direction: column; width: 280px; z-index: 999999; padding: 16px; border-radius: 18px; box-shadow: 0 16px 32px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); max-height: calc(100vh - 100px); overflow-y: auto;">
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
        <div style="display: flex; flex-direction: column; gap: 8px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
          <span style="font-size: 11px; font-weight: 700; opacity: 0.7;">${this._t('pin_management') || '🔑 Gestión de Pines'}</span>
          
          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 2px;">
            ${canChangePin ? `
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 11px; opacity: 0.85;">${this._t('access_pin_lbl') || 'Pin perfil Argus'}</span>
              ${hasAccessPin ? `
              <div style="display: flex; gap: 4px;">
                <button id="btn-dropdown-change-access-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase;">${this._t('change_btn') || 'Cambiar'}</button>
                <button id="btn-dropdown-remove-access-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #ff453a !important;">${this._t('remove_btn') || 'Eliminar'}</button>
              </div>
              ` : `
              <div style="display: flex; align-items: center; gap: 6px;">
                <span style="font-size: 9.5px; font-weight: 800; opacity: 0.5; background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 6px;">${this._t('no_pin_badge') || 'SIN PIN'}</span>
                <button id="btn-dropdown-set-access-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #30d158 !important;">⚙️ ${this._t('configure_btn') || 'Configurar'}</button>
              </div>
              `}
            </div>
            ` : ''}
            
            ${canChangeMasterPin ? `
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 11px; opacity: 0.85;">${this._t('master_pin_lbl') || 'Pin de Armado'}</span>
              ${hasMasterPin ? `
              <div style="display: flex; gap: 4px;">
                <button id="btn-dropdown-change-master-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase;">${this._t('change_btn') || 'Cambiar'}</button>
                <button id="btn-dropdown-remove-master-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #ff453a !important;">${this._t('remove_btn') || 'Eliminar'}</button>
              </div>
              ` : `
              <div style="display: flex; align-items: center; gap: 6px;">
                <span style="font-size: 9.5px; font-weight: 800; opacity: 0.5; background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 6px;">${this._t('no_pin_badge') || 'SIN PIN'}</span>
                <button id="btn-dropdown-set-master-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #30d158 !important;">⚙️ ${this._t('configure_btn') || 'Configurar'}</button>
              </div>
              `}
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
      </div>
    `;

    // Click handler for pill to toggle dropdown
    const pill = container.querySelector('.hero-profile-pill');
    const dropdown = container.querySelector('#profile-dropdown');
    
    if (pill && dropdown) {
      const setHostZIndex = (elevate: boolean) => {
        const heroEl = container.closest('.hero');
        if (heroEl) (heroEl as HTMLElement).style.zIndex = elevate ? '999999' : '9999';
        const wrapEl = container.closest('.wrap');
        if (wrapEl) (wrapEl as HTMLElement).style.zIndex = elevate ? '999999' : '';
        const widget = container.closest('.argus-widget') || container.closest('.react-grid-item') || container.closest('.panel');
        if (widget) (widget as HTMLElement).style.zIndex = elevate ? '999999' : '';
      };

      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.style.display === 'flex';
        dropdown.style.display = isOpen ? 'none' : 'flex';
        setHostZIndex(!isOpen);
      });

      // Close dropdown when clicking outside
      const _closeOnClickOutside = (e) => {
        const path = e.composedPath ? e.composedPath() : [e.target];
        const insideContainer = path.some(el => el === container || (el.closest && el.closest?.('#profile-dropdown')));
        if (!insideContainer) {
          dropdown.style.display = 'none';
          setHostZIndex(false);
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

    // Handle Set/Change Access PIN via liquid-glass modal:
    const handleSetAccessPin = async (e: Event) => {
      e.stopPropagation();
      dropdown.style.display = 'none';
      const newPin = await this._showArgusInputModal({
        title: `🔑 ${this._t('access_pin_lbl') || 'Pin perfil Argus'}`,
        label: this._t('enter_new_pin') || 'Introduce el nuevo PIN (4 a 8 dígitos):',
        placeholder: '••••',
        type: 'password',
        numeric: true,
      });
      if (newPin === null || !newPin.trim()) return;
      try {
        await this._send('argus/save_user_access_pin', {
          argus_user_id: prof.id,
          pin: newPin.trim(),
        });
        prof.access_pin_configured = true;
        if (this._ui?.users) {
          const uIdx = this._ui.users.findIndex(u => u.id === prof.id);
          if (uIdx !== -1) this._ui.users[uIdx].access_pin_configured = true;
        }
        await this._showArgusConfirmModal(this._t('pin_updated') || 'PIN actualizado exitosamente', { confirmLabel: 'OK' });
        this._load();
      } catch (err) {
        this._showArgusConfirmModal(err.message || this._format('generic_error', { error: err }), { confirmLabel: 'OK' });
      }
    };
    container.querySelector('#btn-dropdown-set-access-pin')?.addEventListener('click', handleSetAccessPin);
    container.querySelector('#btn-dropdown-change-access-pin')?.addEventListener('click', handleSetAccessPin);

    // Handle Remove Access PIN:
    container.querySelector('#btn-dropdown-remove-access-pin')?.addEventListener('click', async (e) => {
      e.stopPropagation();
      dropdown.style.display = 'none';
      const ok = await this._showArgusConfirmModal(
        this._t('confirm_remove_access_pin') || '¿Estás seguro de que deseas eliminar el Pin de perfil Argus?',
        {
          confirmLabel: this._t('remove_btn') || 'Eliminar',
          confirmStyle: 'background:#ef4444;color:#fff;border:none;box-shadow:0 4px 14px rgba(239,68,68,0.35);',
        }
      );
      if (!ok) return;
      try {
        await this._send('argus/save_user_access_pin', {
          argus_user_id: prof.id,
          pin: '',
        });
        prof.access_pin_configured = false;
        if (this._ui?.users) {
          const uIdx = this._ui.users.findIndex(u => u.id === prof.id);
          if (uIdx !== -1) this._ui.users[uIdx].access_pin_configured = false;
        }
        await this._showArgusConfirmModal(this._t('pin_deleted') || 'PIN eliminado', { confirmLabel: 'OK' });
        this._load();
      } catch (err) {
        this._showArgusConfirmModal(err.message || this._format('generic_error', { error: err }), { confirmLabel: 'OK' });
      }
    });

    // Handle Set/Change Master PIN via liquid-glass modal:
    const handleSetMasterPin = async (e: Event) => {
      e.stopPropagation();
      dropdown.style.display = 'none';
      const entryId = this._dashboard?.entries?.[0]?.entry_id || this._dashboard?.entry_id || this._modeEntryId;
      
      let currentPin = '';
      if (hasMasterPin && prof.role !== 'admin') {
        const enteredCurrent = await this._showArgusInputModal({
          title: `🔑 ${this._t('master_pin_lbl') || 'Pin de Armado'}`,
          label: this._t('enter_current_pin') || 'Introduce el PIN actual:',
          placeholder: '••••',
          type: 'password',
          numeric: true,
        });
        if (enteredCurrent === null) return;
        currentPin = enteredCurrent.trim();
      }

      const newPin = await this._showArgusInputModal({
        title: `🔑 ${this._t('master_pin_lbl') || 'Pin de Armado'}`,
        label: this._t('enter_new_pin') || 'Introduce el nuevo PIN (4 a 8 dígitos):',
        placeholder: '••••',
        type: 'password',
        numeric: true,
      });
      if (newPin === null || !newPin.trim()) return;

      try {
        await this._send('argus/update_master_pin', {
          entry_id: entryId,
          pin: newPin.trim(),
          current_pin: currentPin,
        });
        if (this._dashboard?.entries?.[0]) {
          this._dashboard.entries[0].pin_configured = true;
        }
        await this._showArgusConfirmModal(this._t('pin_updated') || 'PIN actualizado exitosamente', { confirmLabel: 'OK' });
        this._load();
      } catch (err) {
        this._showArgusConfirmModal(err.message || this._format('generic_error', { error: err }), { confirmLabel: 'OK' });
      }
    };
    container.querySelector('#btn-dropdown-set-master-pin')?.addEventListener('click', handleSetMasterPin);
    container.querySelector('#btn-dropdown-change-master-pin')?.addEventListener('click', handleSetMasterPin);

    // Handle Remove Master PIN:
    container.querySelector('#btn-dropdown-remove-master-pin')?.addEventListener('click', async (e) => {
      e.stopPropagation();
      dropdown.style.display = 'none';
      const entryId = this._dashboard?.entries?.[0]?.entry_id || this._dashboard?.entry_id || this._modeEntryId;
      
      let currentPin = '';
      if (hasMasterPin && prof.role !== 'admin') {
        const enteredCurrent = await this._showArgusInputModal({
          title: `🔑 ${this._t('master_pin_lbl') || 'Pin de Armado'}`,
          label: this._t('enter_current_pin') || 'Introduce el PIN actual para confirmar eliminación:',
          placeholder: '••••',
          type: 'password',
          numeric: true,
        });
        if (enteredCurrent === null) return;
        currentPin = enteredCurrent.trim();
      }

      const ok = await this._showArgusConfirmModal(
        this._t('confirm_remove_master_pin') || '¿Estás seguro de que deseas eliminar el Pin de Armado del sistema?',
        {
          confirmLabel: this._t('remove_btn') || 'Eliminar',
          confirmStyle: 'background:#ef4444;color:#fff;border:none;box-shadow:0 4px 14px rgba(239,68,68,0.35);',
        }
      );
      if (!ok) return;

      try {
        await this._send('argus/update_master_pin', {
          entry_id: entryId,
          pin: '',
          current_pin: currentPin,
        });
        if (this._dashboard?.entries?.[0]) {
          this._dashboard.entries[0].pin_configured = false;
        }
        await this._showArgusConfirmModal(this._t('pin_deleted') || 'PIN eliminado', { confirmLabel: 'OK' });
        this._load();
      } catch (err) {
        this._showArgusConfirmModal(err.message || this._format('generic_error', { error: err }), { confirmLabel: 'OK' });
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
    this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent("argus-state-update"));
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
            ${this._escapeHtml(this._t('first_run_pin_expl') || 'El Pin perfil Argus abre Argus. El Pin de Armado controla el armado y desarmado.')}
          </p>

          <label style="display:block;text-align:left;font-size:12px;opacity:0.8;margin-bottom:4px">${this._escapeHtml(this._t('setup_access_pin') || 'Pin perfil Argus al panel Argus (Opcional)')}</label>
          <div style="display:flex;gap:10px;margin-bottom:15px">
            <input type="password" id="setup-access-pin" placeholder="PIN (4-12)" style="flex:1" />
            <button id="skip-access-pin" class="btn-cancel" style="width:auto;padding:0 12px;font-size:11px">${this._escapeHtml(this._t('first_run_skip') || 'Omitir')}</button>
          </div>

          <label style="display:block;text-align:left;font-size:12px;opacity:0.8;margin-bottom:4px">${this._escapeHtml(this._t('setup_master_pin') || 'Pin de Armado para armar/desarmar (Opcional)')}</label>
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
