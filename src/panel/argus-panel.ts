// @ts-nocheck
import { showSettingsPrompt } from '../features/profile/settings-prompt';
import { clockFormat, clockTime } from '../features/profile/clock';
import { isAlarmOutput, isModeSensor } from '../features/dashboard/entity-compatibility';
import panelStyles from './panel.css?url&no-inline';

let profileDialogModule: typeof import('../features/profile/dialog') | undefined;
/**
 * Argus Home Hub – v2.0.99
 * Complete, self-contained custom element.
 * Fixes: inline CSS animated weather (rain/storm/snow/stars/moon/sun),
 *        temperature from dedicated local sensor with weather fallback,
 *        DESARMADO button active state when disarmed,
 *        per-instance fullscreen, numeric PIN dial pad,
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
    'contrast_selector_lbl': '👁️ Aspecto y Contraste',
    'contrast_standard': '✨ Estándar (Liquid Glass)',
    'contrast_high': '🖤 Alto Contraste (OLED / Oscuro)',
    'analysis_title': 'Análisis de Seguridad',
    'arm_time': 'Armado (s)',
    'arm_time_label': 'Tiempo de armado',
    'armed_away': 'Ausente',
    'armed_home': 'En Casa',
    'armed_night': 'Noche',
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
    'bg_sound_opt': 'Sonido de fondo',
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
    'clear_log_btn': '🗑️ Limpiar',
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
    'connection_lost': 'Sin conexión con Home Assistant',
    'disconnected': 'DESCONECTADO',
    'retry': 'Refrescar',
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
    'widget_edit_hint': 'Arrastra un widget o ajusta su tamaño desde la esquina.',
    'widget_size_compact': 'Compacto',
    'widget_size_medium': 'Mediano',
    'widget_size_large': 'Amplio',
    'widget_size_saved': 'Tamaño guardado',
    'emergency_call_active': 'Llamada de emergencia en curso...',
    'emergency_help': 'Configura el número local de emergencia (ej. 911 o 112). Se incluirá en alertas SOS.',
    'emergency_number_label': 'Número Local de Emergencia',
    'sos_config_title': 'CONFIGURACIÓN SOS',
    'export_history_title': 'Exportar Historial',
    'history_export_desc': 'El archivo PDF se descargará directamente; el reporte conservará el idioma seleccionado.',
    'history_from': 'Desde',
    'history_to': 'Hasta',
    'history_download_pdf': '⬇️ Descargar PDF',
    'history_download_txt': '📑 Descargar reporte (.txt)',
    'history_download_json': '💾 Descargar JSON sin procesar',
    'history_pdf_title': 'Argus Home Hub - Historial de actividad',
    'history_pdf_home': 'Hogar',
    'history_pdf_range': 'Rango',
    'history_pdf_generated': 'Generado',
    'history_pdf_total': 'Total de eventos',
    'history_pdf_date': 'Fecha y hora',
    'history_pdf_action': 'Acción / evento',
    'history_pdf_user': 'Origen / usuario',
    'history_pdf_detail': 'Detalle',
    'history_pdf_empty': 'No hay registros en el rango seleccionado.',
    'history_pdf_footer': 'Argus Home Hub - Sistema de seguridad - Reporte de auditoría',
    'history_pdf_page': 'Página {page} de {pages}',
    'history_range_all': 'Todo',
    'history_range_today': 'Hoy',
    'history_unknown_event': 'Evento',
    'log_action_arming_cancelled': 'Armado cancelado',
    'log_action_auto_arm': 'Armado automático',
    'log_action_auto_disarm': 'Desarmado automático',
    'log_action_auto_arm_cancelled': 'Armado automático cancelado',
    'log_action_arm_rejected': 'Armado rechazado',
    'export_action': 'Exportar',
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
    'github_action': 'Dar Estrella',
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
    'introduce_pin': 'Introduce el PIN de armado',
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
    'enter_new_pin': 'Nuevo PIN (4 a 12 dígitos). Deja ambos campos nuevos vacíos para eliminarlo:',
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
    'profile_needs_pin': 'Este perfil requiere PIN de perfil.',
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
    'tap_disarm': 'Desarmar',
    'tap_sos': 'Activar SOS',
    'tap_sos_stop': 'Detener SOS',
    'gesture_selector_lbl': '🕹️ Modo de Control (Accesibilidad)',
    'gesture_slide': '↔️ Deslizador Táctil (Antitoques)',
    'gesture_touch': '👆 Botón Accesible (Toque Simple)',
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
    'system_disarmed': 'DESARMADO',
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
    'wait_if_open': 'Esperar armado en espera',
    'waiting_sensors': 'Esperando sensores',
    'waiting_sensors_count': 'Esperando {count} sensor(es)',
    'welcome_greeting': '¡Hola de nuevo!',
    'welcome_profile': 'Bienvenido, {name}',
    'wrong_pin': 'PIN incorrecto',
    'walk_test': 'Prueba de Sensores (Walk Test)',
    'walk_test_btn': '🚶 Prueba de Sensores',
    'walk_test_desc': 'Camina y prueba cada sensor sin activar sirenas. Recibirás un aviso sonoro cuando responda cada detector.',
    'walk_test_active': 'Prueba de sensores en curso',
    'walk_test_completed': 'Prueba completada',
    'walk_test_stop': 'Finalizar Prueba',
    'walk_test_close': 'Cerrar',
    'walk_test_progress': '{tested} de {total} sensores verificados ({pct}%)',
    'walk_test_waiting': 'Esperando activación de sensores...',
    'walk_test_time_left': 'Tiempo restante',
    'sensor_delay_cfg_title': 'Configurar retardo del sensor',
    'sensor_delay_instant': '⚡ Instantáneo (0s - Disparo inmediato)',
    'sensor_delay_custom': '⏱️ Retardo personalizado',
    'sensor_delay_default': '🌐 Heredar retardo global del modo',
    'sensor_delay_seconds': 'Segundos de retardo',
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
    'contrast_selector_lbl': '👁️ Appearance & Contrast',
    'contrast_standard': '✨ Standard (Liquid Glass)',
    'contrast_high': '🖤 High Contrast (OLED / Dark)',
    'analysis_title': 'Security Analysis',
    'arm_time': 'Arming delay (s)',
    'arm_time_label': 'Arming Delay',
    'armed_away': 'Away',
    'armed_home': 'Home',
    'armed_night': 'Night',
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
    'bg_sound_opt': 'Background Sound',
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
    'clear_log_btn': '🗑️ Clear',
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
    'connection_lost': 'No connection to Home Assistant',
    'disconnected': 'DISCONNECTED',
    'retry': 'Reload',
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
    'widget_edit_hint': 'Drag a widget or resize it from the corner.',
    'widget_size_compact': 'Compact',
    'widget_size_medium': 'Medium',
    'widget_size_large': 'Large',
    'widget_size_saved': 'Size saved',
    'emergency_call_active': 'Emergency call in progress...',
    'emergency_help': 'Set local emergency service number (e.g. 911 or 112). Included in SOS alerts.',
    'emergency_number_label': 'Local Emergency Number',
    'sos_config_title': 'SOS CONFIGURATION',
    'export_history_title': 'Export History',
    'history_export_desc': 'The PDF will download directly and use your selected language.',
    'history_from': 'From',
    'history_to': 'To',
    'history_download_pdf': '⬇️ Download PDF',
    'history_download_txt': '📑 Download report (.txt)',
    'history_download_json': '💾 Download raw JSON',
    'history_pdf_title': 'Argus Home Hub - Activity History',
    'history_pdf_home': 'Home',
    'history_pdf_range': 'Date range',
    'history_pdf_generated': 'Generated',
    'history_pdf_total': 'Total events',
    'history_pdf_date': 'Date and time',
    'history_pdf_action': 'Action / event',
    'history_pdf_user': 'Source / user',
    'history_pdf_detail': 'Details',
    'history_pdf_empty': 'No records in the selected date range.',
    'history_pdf_footer': 'Argus Home Hub - Security system - Audit report',
    'history_pdf_page': 'Page {page} of {pages}',
    'history_range_all': 'All',
    'history_range_today': 'Today',
    'history_unknown_event': 'Event',
    'log_action_arming_cancelled': 'Arming cancelled',
    'log_action_auto_arm': 'Automatic arming',
    'log_action_auto_disarm': 'Automatic disarming',
    'log_action_auto_arm_cancelled': 'Automatic arming cancelled',
    'log_action_arm_rejected': 'Arming rejected',
    'export_action': 'Export',
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
    'github_action': 'Star',
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
    'introduce_pin': 'Enter the arming PIN',
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
    'tap_disarm': 'Disarm',
    'tap_sos': 'Trigger SOS',
    'tap_sos_stop': 'Stop SOS',
    'gesture_selector_lbl': '🕹️ Interaction Mode (Accessibility)',
    'gesture_slide': '↔️ Swipe Slider (Anti-touch)',
    'gesture_touch': '👆 Accessible Tap Button (WCAG)',
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
    'system_disarmed': 'DISARMED',
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
    'wait_if_open': 'Wait for sensors to close',
    'waiting_sensors': 'Waiting for sensors',
    'waiting_sensors_count': 'Waiting for {count} sensor(s)',
    'welcome_greeting': 'Welcome back!',
    'welcome_profile': 'Welcome, {name}',
    'wrong_pin': 'Wrong PIN',
    'walk_test': 'Walk Test (Sensor Verification)',
    'walk_test_btn': '🚶 Sensor Walk Test',
    'walk_test_desc': 'Walk and test each sensor without sounding sirens. You will hear an audio chime each time a detector triggers.',
    'walk_test_active': 'Walk test session in progress',
    'walk_test_completed': 'Walk test completed',
    'walk_test_stop': 'End Test',
    'walk_test_close': 'Close',
    'walk_test_progress': '{tested} of {total} sensors verified ({pct}%)',
    'walk_test_waiting': 'Waiting for sensor triggers...',
    'walk_test_time_left': 'Time remaining',
    'sensor_delay_cfg_title': 'Configure Sensor Delay',
    'sensor_delay_instant': '⚡ Instant (0s - Immediate trigger)',
    'sensor_delay_custom': '⏱️ Custom delay',
    'sensor_delay_default': '🌐 Inherit mode global delay',
    'sensor_delay_seconds': 'Delay seconds',
  },
};

const _tmpl = document.createElement('template');
_tmpl.innerHTML = `
<link rel="stylesheet" href="${panelStyles}">

<div id="argus-initial-curtain">
  <div class="argus-boot-container">
    <img class="argus-boot-logo" src="/api/argus_static/argus_logo.png" alt="Argus" />
    <div class="argus-apple-progressbar">
      <div id="argus-boot-fill" class="argus-apple-progressbar-fill"></div>
    </div>
    <div id="argus-boot-status" class="argus-boot-status" style="display:none;"></div>
  </div>
</div>

<div id="bootstrap-overlay" class="argus-bootstrap-layer" style="display:none"></div>

<div class="lang-modal-back" id="lang-modal" aria-hidden="true">
  <div class="lang-modal-card">
    <div class="lang-modal-title" id="lang-modal-title">🌐 Select Language</div>
    <div class="lang-grid" id="lang-grid"></div>
    <div class="lang-close-row">
      <button class="lang-close-btn" id="lang-modal-close">✕ Close</button>
    </div>
  </div>
</div>

<div class="walk-test-modal-back" id="walk-test-modal" aria-hidden="true">
  <div class="walk-test-modal-card">
    <div class="walk-test-header">
      <div class="walk-test-title">🚶 <span id="walk-test-title-text">Prueba de Sensores (Walk Test)</span></div>
      <div class="walk-test-timer" id="walk-test-timer">15:00</div>
    </div>
    <p style="margin:0;font-size:12px;opacity:0.75;line-height:1.4" id="walk-test-desc-text">
      Camina y activa cada sensor. No sonarán sirenas. Se emitirá un aviso sonoro por cada detector probado.
    </p>
    <div style="display:flex;flex-direction:column;gap:6px">
      <div style="display:flex;justify-content:space-between;font-size:11.5px;font-weight:700">
        <span id="walk-test-progress-text">0 de 0 sensores verificados (0%)</span>
        <span id="walk-test-status-badge" style="color:#38bdf8">En curso</span>
      </div>
      <div class="walk-test-progress-bar">
        <div class="walk-test-progress-fill" id="walk-test-progress-fill" style="width:0%"></div>
      </div>
    </div>
    <div class="walk-test-sensor-list" id="walk-test-sensor-list"></div>
    <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:4px">
      <button class="ghost" id="walk-test-close-btn" style="padding:9px 18px;border-radius:12px;font-size:12px;font-weight:700">Cerrar</button>
      <button class="primary" id="walk-test-stop-btn" style="padding:9px 20px;border-radius:12px;font-size:12px;font-weight:700;background:linear-gradient(135deg,#ef4444,#dc2626)">Finalizar Prueba</button>
    </div>
  </div>
</div>

<div class="walk-test-modal-back" id="sensor-delay-modal" aria-hidden="true">
  <div class="walk-test-modal-card" style="width:min(420px,92vw)">
    <div class="walk-test-header">
      <div class="walk-test-title">⏱️ <span id="sensor-delay-modal-title">Configurar retardo del sensor</span></div>
    </div>
    <div style="font-size:13px;font-weight:700;color:#38bdf8" id="sensor-delay-modal-entity">sensor.example</div>
    <div style="display:flex;flex-direction:column;gap:12px;margin:8px 0">
      <label style="display:flex;align-items:center;gap:10px;font-size:12.5px;cursor:pointer">
        <input type="radio" name="sensor-delay-mode" value="default" id="delay-opt-default" checked>
        <span id="txt-delay-opt-default">🌐 Heredar retardo global del modo</span>
      </label>
      <label style="display:flex;align-items:center;gap:10px;font-size:12.5px;cursor:pointer">
        <input type="radio" name="sensor-delay-mode" value="instant" id="delay-opt-instant">
        <span id="txt-delay-opt-instant">⚡ Instantáneo (0s - Disparo inmediato)</span>
      </label>
      <label style="display:flex;align-items:center;gap:10px;font-size:12.5px;cursor:pointer">
        <input type="radio" name="sensor-delay-mode" value="custom" id="delay-opt-custom">
        <span id="txt-delay-opt-custom">⏱️ Retardo personalizado</span>
      </label>
      <div id="delay-custom-input-wrap" style="display:none;padding-left:26px;gap:8px;align-items:center">
        <input type="number" id="sensor-delay-seconds-input" min="1" max="300" value="30" style="width:80px;padding:6px 10px;border-radius:8px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#fff;font-size:13px">
        <span style="font-size:12px;opacity:0.75" id="txt-delay-seconds-label">segundos</span>
      </div>
    </div>
    <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:6px">
      <button class="ghost" id="sensor-delay-cancel-btn" style="padding:8px 16px;border-radius:12px;font-size:12px">Cancelar</button>
      <button class="primary" id="sensor-delay-save-btn" style="padding:8px 20px;border-radius:12px;font-size:12px;font-weight:700">Guardar</button>
    </div>
  </div>
</div>

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


<div class="wrap" style="display:none !important;">
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

  <div class="grid hide-legacy" id="widget-grid" data-layout-owner="react-v3-staging">

    <section class="glass panel liquid-glass dashboard-instances" id="w-instances" style="grid-column: 1 / -1;">
        <div class="panel-head">
          <h2 id="h-instances"></h2>
          <div style="display:flex;align-items:center;gap:12px">
            <div id="global-status"></div>
          </div>
        </div>
        <div id="entries"></div>
      </section>

      <section class="glass panel liquid-glass activity-panel" id="w-activity">
        <div class="panel-head">
          <h2 id="h-activity-log">📋 Historial de Actividad</h2>
          <div class="panel-actions">
            <button class="ghost" id="btn-refresh-history" aria-label="Actualizar Historial" title="Actualizar">🔄 Actualizar</button>
            <button class="ghost" id="btn-export-forensic" aria-label="Exportar Historial" title="Exportar">📄 Exportar</button>
            <button class="ghost" id="btn-clear-log" aria-label="Limpiar Historial" style="background:rgba(255,69,58,0.12);color:#ff453a !important" title="Limpiar">🗑️ Limpiar</button>
          </div>
        </div>
        <div id="activity-log" class="activity-log" style="display:grid;gap:10px;height:280px;overflow-y:auto;margin-top:10px"></div>
      </section>

      <section class="glass panel liquid-glass modes-panel" id="w-modes">
        <div class="panel-head">
           <h2 id="h-modes"></h2>
        </div>
        <div class="tabs" id="mode-tabs" style="margin-bottom:15px"></div>
        <div id="mode-view"></div>
      </section>

      <section class="glass panel liquid-glass access-panel" id="w-access">
        <div class="panel-head">
          <div>
            <h2 id="h-access-title">Control de Acceso y Usuarios</h2>
            <p class="access-summary" id="p-access-desc">PIN desactivado · Sin usuarios adicionales</p>
          </div>
        </div>

        <div class="access-workspace" id="access-workspace" style="display:contents">
          <div class="access-section" id="access-users-section">
            <h3 id="h-users"></h3>
            <p class="small" id="p-admin-only" style="margin-bottom:14px;color:#fb8c00;font-weight:600"></p>
            <div id="users-list" style="display:grid;gap:12px;margin-bottom:16px"></div>
          </div>

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

        </div>
      </section>

          <div id="access-pin-settings" style="position:fixed;inset:0;z-index:999999999;display:none;align-items:center;justify-content:center;padding:12px;box-sizing:border-box;background:rgba(0,0,0,.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)" aria-hidden="true">
            <div role="dialog" aria-modal="true" aria-labelledby="h-settings-pin" style="position:relative;width:min(380px,90vw);max-height:calc(100dvh - 24px);overflow:auto;box-sizing:border-box;background:rgba(30,30,45,.96);color:white;border:1px solid rgba(255,255,255,.18);border-radius:20px;padding:28px 24px 22px;box-shadow:0 24px 64px rgba(0,0,0,.7);display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
            <h3 id="h-settings-pin" style="margin:0;font-size:16px;font-weight:700">PIN de armado</h3>
            <div class="subsection" style="padding:0;margin:0">
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
            <button type="button" id="btn-close-arming-pin" class="secondary" style="width:100%;min-height:42px">Cancelar</button>
            </div>
          </div>

<section class="glass panel liquid-glass automations-panel" id="w-automations">
        <h2 id="h-automations"></h2>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <span class="small" id="p-linked-rules" style="opacity:0.7"></span>
          <button class="primary" id="btn-new-auto" style="padding:6px 12px;font-size:11px"></button>
        </div>
        <div id="auto-view"></div>
      </section>

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

      <section class="glass panel liquid-glass github-panel" id="w-github">
        <div class="github-header">
          <h3 id="github-title" style="margin:0; font-size:14px; font-weight:700"></h3>
          <p id="github-desc" style="margin:4px 0 0; font-size:12px; opacity:0.75"></p>
        </div>
        <div class="support-actions-grid">
          <a id="github-action" class="support-link-btn star" href="https://github.com/Chrisalvir1/Argus" target="_blank" rel="noopener noreferrer">⭐ GitHub</a>
          <a id="paypal-action" class="support-link-btn paypal" href="https://paypal.me/CEstradaAlvir" target="_blank" rel="noopener noreferrer">☕ PayPal</a>
          <a id="email-action" class="support-link-btn email" href="mailto:chrisalvir01@gmail.com">✉️ Sugerencias</a>
        </div>
      </section>

  </div> <!-- /grid -->
</div>

<div class="modal-back" id="selector-modal" aria-hidden="true">
  <div class="modal">
    <div class="modal-head">
      <h3 id="selector-title">Seleccionar</h3>
      <button class="ghost" id="selector-close"></button>
    </div>
    <div class="modal-body" style="overflow:hidden;display:flex;flex-direction:column;gap:10px">
      <div class="sel-grid">
        <div class="sel-panel">
          <div class="subsection-title" id="l-available">Disponibles</div>
          <div class="search-wrap" style="margin:0"><input id="selector-search" type="search" placeholder="Buscar..."></div>
          <div class="sel-actions">
            <button class="ghost" id="selector-select-all" style="padding:5px 10px;font-size:12px">☑ Todos</button>
            <button class="ghost" id="selector-deselect-all" style="padding:5px 10px;font-size:12px">☐ Ninguno</button>
          </div>
          <div class="sel-panel-inner" id="selector-list"></div>
        </div>
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

<div class="modal-back pm" id="pin-modal" aria-hidden="true">
  <div class="modal">
    <div class="modal-head">
      <h3 id="l-introduce-pin">🔒</h3>
      <button class="ghost" id="pin-close" style="background:transparent; border:none; color:inherit; font-size:20px; cursor:pointer; padding:4px 8px;">✕</button>
    </div>
    <div style="display:grid;gap:10px;width:100%">
      <p id="l-pin-modal-desc" class="small" style="text-align:center;margin:0;opacity:0.75"></p>
      <input id="pin-input" class="pin-input" type="password" inputmode="numeric" pattern="[0-9]*" placeholder="••••" autocomplete="off" maxlength="12" readonly>
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
      <div id="pin-error" class="pin-error" role="status" aria-live="polite"></div>
      <div style="text-align:center; margin-top: 5px;">
        <a href="#" id="pin-forgot-link" style="font-size:12px; color:var(--accent-color, #ff4081); text-decoration:none; font-weight:700; display:none;"></a>
      </div>
    </div>
    <button id="pin-cancel" style="display:none"></button>
  </div>
</div>

<div class="modal-back pm" id="history-export-modal" aria-hidden="true">
  <div class="modal" style="max-width: 440px;">
    <div class="modal-head">
      <h3 id="h-history-export-title">📄 Exportar Historial</h3>
      <button class="ghost" id="history-export-close" style="background:transparent; border:none; color:inherit; font-size:20px; cursor:pointer; padding:4px 8px;">✕</button>
    </div>
    <div style="display:grid;gap:14px;padding:6px 0">
      <p class="small" id="p-history-export-desc" style="margin:0;opacity:.75">Selecciona el rango de fechas para descargar el reporte.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div class="field-group">
          <label id="l-history-export-from" style="font-size:11px;font-weight:700;opacity:0.8;">📅 Desde</label>
          <input type="date" id="export-history-from" class="glass-control" style="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;color:#fff;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12)">
        </div>
        <div class="field-group">
          <label id="l-history-export-to" style="font-size:11px;font-weight:700;opacity:0.8;">📅 Hasta</label>
          <input type="date" id="export-history-to" class="glass-control" style="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;color:#fff;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12)">
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px;">
        <button class="primary" id="btn-do-download-pdf" style="height:44px;font-size:13px;font-weight:800;cursor:pointer;border-radius:12px;box-shadow:0 6px 18px rgba(0,122,255,0.3)">
          ⬇️ Descargar PDF
        </button>
        <button class="glass-control" id="btn-do-download-txt" style="height:40px;font-size:12px;font-weight:700;cursor:pointer;border-radius:12px;background:rgba(255,255,255,0.05);color:#fff;border:1px solid rgba(255,255,255,0.15)">
          📑 Descargar reporte (.txt)
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
    this._sosCallPromptEntryIdx = null;
    this._sosBusy = false;
    this._sosSliding = false;
    this._sosStartX = 0;
    this._sosOffsetX = 0;
    this._sosConfirmed = false;

    this.attachShadow({ mode: 'open' }).appendChild(_tmpl.content.cloneNode(true));
    this._wsId = 1; this._socket = null; this._dashboard = null;
    this._ui = null; this._available = []; this._mode = 'home'; this._modeView = 'mode'; this._modeEntryId = null;
    this._zonesEnabled = false; this._zonesLoaded = false; this._zonesLoading = false; this._zoneList = [] as any[];
    this._zoneEntities = [] as any[];
    this._zoneOpenId = null as string | null; this._zoneDraft = null as any;
    this._zoneDecision = null as (() => void) | null;
    this._modeDraftBaselines = new Map();
    this._modeDecisionPending = false;
    this._selected = []; this._selectorTarget = null;
    this._hass = null; this._prevStates = {};
    this._optimisticAlarmStates = new Map();
    this._notifTargets = []; // list of notify service_ids selected
    this._users = [];        // [{name, pin, role, ha_user_id}]
    this._haUsersList = [];  // fetched HA users
    this._isAdmin = true;    // determined from hass user
    this._pinCallback = null;
    this._pinCloseTimer = null;
    this._homeName = '';     // custom home name, editable with PIN
    this._backgroundMode = 'none';
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
    this._historyPDFLogoPromise = null;
    this._lastActivityRenderSignature = null;
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

  _getClockFormat() { return clockFormat(this._ui, this._dashboard); }

  _formatTime(value) {
    return value ? clockTime(value, this._getClockFormat(), String(this._hass?.locale?.time_format || '')) : '';
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

  _updateHeroClock() {
    if (typeof this._updateLiveClocks === 'function') {
      this._updateLiveClocks();
      return;
    }
    const root = this.shadowRoot;
    if (!root) return;
    const now = new Date();
    const timeStr = typeof this._formatTime === 'function' ? this._formatTime(now) : now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateStr = now.toLocaleDateString(typeof this._getLocale === 'function' ? this._getLocale() : undefined, { weekday: 'short', month: 'short', day: 'numeric' });
    const heroClock = root.getElementById('hero-clock-time');
    const heroDate = root.getElementById('hero-clock-date');
    if (heroClock && heroClock.textContent !== timeStr) heroClock.textContent = timeStr;
    if (heroDate && heroDate.textContent !== dateStr) heroDate.textContent = dateStr;
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
      // Hub and panel use clean dark background by default
      isDark = this._hass.themes ? this._hass.themes.darkMode === true : true;
    }

    this.setAttribute('argus-dark-mode', isDark ? 'true' : 'false');
    if (isDark) {
    } else {
    }
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;
    // Keep the TTS zone checklist in sync without rebuilding its form. A full
    // mode-view render here would close the editor and discard unsaved text.
    this._updateVoiceZoneStatuses();

    this._reconcileOptimisticAlarmStates();

    // React to connection transitions while boot curtain is active
    if (oldHass && oldHass.connected !== hass.connected) {
      const c = this.shadowRoot?.getElementById('argus-initial-curtain');
      if (c && !c.classList.contains('curtain-hidden')) {
        if (hass.connected === false) {
          this._setBootProgress(15, this._t('connection_lost') || 'Sin conexión con Home Assistant', true);
        } else {
          this._setBootProgress(35);
          this._ensureInitialized();
        }
      }
    }

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

    // Home Assistant can replace config when the user changes the location
    // name. Redraw the security-console HUD immediately in that case.
    const homeLocationChanged = oldHass?.config?.location_name !== hass?.config?.location_name;
    if (homeLocationChanged) this._updateHomeNameDisplay();

    const alarmChanged = this._dashboard.entries.some(
      e => e.entity_id && oldHass?.states[e.entity_id] !== hass.states[e.entity_id]
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
    if (Array.isArray(this._sensors)) this._sensors.forEach(sensor => {
      const id = typeof sensor === 'string' ? sensor : sensor?.entity_id || sensor?.id;
      if (id) configuredSensors.add(id);
    });
    for (const zone of this._ui?.zones || []) {
      if (zone.enabled !== false) for (const id of zone.entity_ids || []) configuredSensors.add(id);
    }
    const sensorChanged = Boolean(oldHass) && [...configuredSensors].some(id => oldHass.states[id] !== hass.states[id]);

    const batteryChanged = Boolean(oldHass) && Object.values(hass.states).some(current => {
      const id = current.entity_id || '';
      const isBattery = current.attributes?.device_class === 'battery' || /_battery$/i.test(id);
      const previous = oldHass.states[id];
      return isBattery && previous?.state !== current.state;
    });

    if (oldHass?.connected !== hass.connected || alarmChanged || sensorChanged || batteryChanged || tempChanged || clockChanged || weatherChanged || homeLocationChanged || !oldHass) {
      this._renderEntries();
      this._renderActivityLog();
      // Refresh React views from the newest Home Assistant state snapshot.
      this.dispatchEvent(new CustomEvent("argus-state-update"));
      // Only re-render setup views if they are visible or if it's the first load
      if (!oldHass) {
        this._renderModeTabs();
        this._renderModeView(); this._renderEntries();
        this._renderAutomations();
        this._renderNotifications();
        if (this._activeAccessSection === 'users') this._renderUsers();
      } else if (batteryChanged && !sensorChanged) {
        if (this.shadowRoot?.getElementById('mode-view')) this._renderModeView();
      }
    }
  }
  get hass() { return this._hass; }

  _reconcileOptimisticAlarmStates() {
    // Keep the click-time projection only until Home Assistant confirms a
    // transition. Unrelated state updates can arrive before the alarm entity.
    for (const [entityId, pending] of this._optimisticAlarmStates || []) {
      const actual = this._hass?.states?.[entityId]?.state;
      if (actual === pending.state || actual === 'triggered'
          || (actual && actual.startsWith('armed_') && actual !== 'arming')) {
        this._optimisticAlarmStates.delete(entityId);
      }
    }
  }

  _setOptimisticAlarmState(entityId, state) {
    if (!entityId || !state) return;
    this._optimisticAlarmStates ||= new Map();
    this._optimisticAlarmStates.set(entityId, { state });
    if (state === "arming") this._reconcileOptimisticAlarmStates();
    this.dispatchEvent(new CustomEvent('argus-state-update'));
  }

  _clearOptimisticAlarmState(entityId) {
    if (this._optimisticAlarmStates?.delete(entityId)) {
      this.dispatchEvent(new CustomEvent('argus-state-update'));
    }
  }

  _getDisplayHass() {
    if (!this._hass || !this._optimisticAlarmStates?.size) return this._hass;
    const states = { ...this._hass.states };
    for (const [entityId, pending] of this._optimisticAlarmStates) {
      const actual = states[entityId];
      if (actual) states[entityId] = { ...actual, state: pending.state };
    }
    return { ...this._hass, states };
  }

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

  /* ── Walk Test (Sensor Verification) ────────────────────────────────── */
  _playWalkTestChime() {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.36);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  async _openWalkTest(entryId, contextual = false) {
    const modal = this.shadowRoot.getElementById('walk-test-modal');
    if (!modal) return;
    try {
      const res = await this._send('argus/start_walk_test', { timeout_seconds: 900, ...(entryId ? { entry_id: entryId } : {}) });
      this._walkTestEntryId = entryId;
      this._walkTestSession = res;
      this._renderWalkTestModal(res);
      if (!contextual) modal.classList.add('open');
      this._startWalkTestPoll();
    } catch (err: any) {
      alert(err.message || 'Error starting walk test');
    }
  }

  _closeWalkTestModal() {
    this.shadowRoot.getElementById('walk-test-modal')?.classList.remove('open');
  }

  async _stopWalkTest() {
    try {
      const res = await this._send('argus/stop_walk_test', this._walkTestEntryId ? { entry_id: this._walkTestEntryId } : {});
      this._walkTestSession = res;
      this._renderWalkTestModal(res);
      this._stopWalkTestPoll();
    } catch (err: any) {
      console.error('Error stopping walk test:', err);
    }
  }

  _startWalkTestPoll() {
    this._stopWalkTestPoll();
    const generation = this._walkTestPollGeneration;
    this._walkTestTimer = setInterval(async () => {
      if (this._walkTestPollInFlight || !this.isConnected) return;
      this._walkTestPollInFlight = true;
      const modal = this.shadowRoot.getElementById('walk-test-modal');
      if (!modal?.classList.contains('open') && !this._walkTestSession?.active) {
        this._stopWalkTestPoll();
        this._walkTestPollInFlight = false;
        return;
      }
      try {
        const status = await this._send('argus/get_walk_test_status', this._walkTestEntryId ? { entry_id: this._walkTestEntryId } : {});
        if (!this.isConnected || generation !== this._walkTestPollGeneration) return;
        const prevTested = this._walkTestSession?.tested_count || 0;
        this._walkTestSession = status;
        if (status.tested_count > prevTested) {
          this._playWalkTestChime();
        }
        this._renderWalkTestModal(status);
        if (!status.active) {
          this._stopWalkTestPoll();
        }
      } catch (e) {
        console.warn('Argus walk test status unavailable', e);
      } finally {
        this._walkTestPollInFlight = false;
      }
    }, 2000);
  }

  _stopWalkTestPoll() {
    this._walkTestPollGeneration = (this._walkTestPollGeneration || 0) + 1;
    if (this._walkTestTimer) {
      clearInterval(this._walkTestTimer);
      this._walkTestTimer = null;
    }
  }

  _renderWalkTestModal(session: any) {
    const root = this.shadowRoot;
    if (!root || !session) return;
    this.dispatchEvent(new CustomEvent('argus-state-update'));

    const timerEl = root.getElementById('walk-test-timer');
    const progTextEl = root.getElementById('walk-test-progress-text');
    const badgeEl = root.getElementById('walk-test-status-badge');
    const fillEl = root.getElementById('walk-test-progress-fill');
    const listEl = root.getElementById('walk-test-sensor-list');
    const stopBtn = root.getElementById('walk-test-stop-btn') as HTMLElement | null;

    const total = session.total_sensors || session.sensors?.length || 0;
    const tested = session.tested_count || (session.tested_sensors || []).length || 0;
    const pct = total > 0 ? Math.round((tested / total) * 100) : 0;
    const isActive = session.active !== false;

    if (stopBtn) {
      stopBtn.style.display = isActive ? 'block' : 'none';
    }

    if (timerEl) {
      const rem = session.remaining_seconds ?? 0;
      const m = Math.floor(rem / 60);
      const s = rem % 60;
      timerEl.textContent = isActive ? `${m}:${s.toString().padStart(2, '0')}` : (this._t('walk_test_completed') || 'Completado');
    }

    if (badgeEl) {
      badgeEl.textContent = isActive ? (this._t('walk_test_active') || 'En curso') : (this._t('walk_test_completed') || 'Completado');
      badgeEl.style.color = isActive ? '#38bdf8' : '#4ade80';
    }

    if (progTextEl) {
      progTextEl.textContent = this._getCurrentLangCode() === 'es'
        ? `${tested} de ${total} sensores verificados (${pct}%). Prueba de todos los modos.`
        : `${tested} of ${total} sensors verified (${pct}%). Testing all modes.`;
    }

    if (fillEl) {
      fillEl.style.width = `${pct}%`;
    }

    if (listEl) {
      const sensors: string[] = session.sensors || [];
      const testedMap = session.tested_sensors_detail || {};
      const testedList: string[] = session.tested_sensors || [];

      listEl.innerHTML = sensors.map(id => {
        const isTested = testedList.includes(id) || Boolean(testedMap[id]);
        const testInfo = testedMap[id];
        const stateObj = this._hass?.states?.[id];
        const name = stateObj?.attributes?.friendly_name || id;

        let timeStr = '';
        if (testInfo?.timestamp) {
          const d = new Date(testInfo.timestamp * 1000);
          timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        }

        return `
          <div class="walk-test-sensor-item ${isTested ? 'tested' : ''}">
            <div style="display:flex;align-items:center;gap:10px">
              <span style="font-size:18px">${isTested ? '✅' : '⏳'}</span>
              <div>
                <div style="font-size:13px;font-weight:700">${this._escapeHtml(name)}</div>
                <div style="font-size:10.5px;opacity:0.6">${this._escapeHtml(id)}</div>
              </div>
            </div>
            <div style="text-align:right">
              <span style="font-size:11px;font-weight:700;color:${isTested ? '#4ade80' : 'rgba(255,255,255,0.5)'}">
                ${isTested ? (timeStr ? `✓ ${timeStr}` : '✓ Probado') : 'Pendiente'}
              </span>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  /* ── Per-Sensor Delay Settings ────────────────────────────────────── */
  _openSensorDelayModal(entityId: string) {
    this._editingSensorDelayId = entityId;
    const modal = this.shadowRoot.getElementById('sensor-delay-modal');
    if (!modal) return;

    const stateObj = this._hass?.states?.[entityId];
    const name = stateObj?.attributes?.friendly_name || entityId;
    const entityLbl = this.shadowRoot.getElementById('sensor-delay-modal-entity');
    if (entityLbl) entityLbl.textContent = `${name} (${entityId})`;

    const cfg = this._currentModeConfig();
    const sSettings = cfg.sensor_settings?.[entityId] || {};
    const isInstant = sSettings.type === 'instant' || sSettings.delay === 0;
    const customDelay = sSettings.delay;

    const optDefault = this.shadowRoot.getElementById('delay-opt-default') as HTMLInputElement | null;
    const optInstant = this.shadowRoot.getElementById('delay-opt-instant') as HTMLInputElement | null;
    const optCustom  = this.shadowRoot.getElementById('delay-opt-custom') as HTMLInputElement | null;
    const secInp     = this.shadowRoot.getElementById('sensor-delay-seconds-input') as HTMLInputElement | null;

    if (isInstant && optInstant) {
      optInstant.checked = true;
    } else if (customDelay !== undefined && customDelay !== null && optCustom) {
      optCustom.checked = true;
      if (secInp) secInp.value = String(customDelay);
    } else if (optDefault) {
      optDefault.checked = true;
    }

    this._updateDelayOptionsUi();
    modal.classList.add('open');
  }

  _updateDelayOptionsUi() {
    const optCustom = this.shadowRoot.getElementById('delay-opt-custom') as HTMLInputElement | null;
    const wrap = this.shadowRoot.getElementById('delay-custom-input-wrap');
    if (wrap) {
      wrap.style.display = optCustom?.checked ? 'flex' : 'none';
    }
  }

  _closeSensorDelayModal() {
    this.shadowRoot.getElementById('sensor-delay-modal')?.classList.remove('open');
    this._editingSensorDelayId = null;
  }

  _saveSensorDelay() {
    const entityId = this._editingSensorDelayId;
    if (!entityId) return;

    const optDefault = this.shadowRoot.getElementById('delay-opt-default') as HTMLInputElement | null;
    const optInstant = this.shadowRoot.getElementById('delay-opt-instant') as HTMLInputElement | null;
    const optCustom  = this.shadowRoot.getElementById('delay-opt-custom') as HTMLInputElement | null;
    const secInp     = this.shadowRoot.getElementById('sensor-delay-seconds-input') as HTMLInputElement | null;

    const cfg = this._currentModeConfig();
    cfg.sensor_settings = cfg.sensor_settings || {};

    if (optInstant?.checked) {
      cfg.sensor_settings[entityId] = { type: 'instant', delay: 0 };
    } else if (optCustom?.checked) {
      const val = parseInt(secInp?.value || '30', 10);
      cfg.sensor_settings[entityId] = { delay: isNaN(val) ? 30 : Math.max(1, val) };
    } else {
      delete cfg.sensor_settings[entityId];
    }

    let eId = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || 'default';
    this._modeEntryId = eId;
    this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {};
    this._ui.modes.__by_entity__[eId] = this._ui.modes.__by_entity__[eId] || {};
    this._ui.modes.__by_entity__[eId][this._mode] = { ...cfg };

    this._closeSensorDelayModal();
    this._renderModeView();
    this._renderEntries();
    this.dispatchEvent(new CustomEvent("argus-state-update"));
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
    this._updateHeroClock?.();
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
    set('btn-close-arming-pin', t('modal_cancel'));
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
    set('lbl-panel-bg-upload',  t('lbl_load_file'));
    set('lbl-hub-bg-upload',    t('lbl_load_file'));
    set('lbl-uploaded-files-title', t('lbl_uploaded_files'));
    set('btn-edit-home-name-standalone', t('edit_btn'));
    set('btn-save-personalization-standalone', t('save_btn'));
    set('btn-refresh-history',  t('history_refresh'));
    set('btn-export-forensic',  '📄 ' + (t('export_action') || 'Exportar'));
    set('btn-clear-log',        t('clear_log_btn'));
    set('h-history-export-title', '📄 ' + (t('export_history_title') || 'Exportar Historial'));
    set('p-history-export-desc', t('history_export_desc'));
    set('l-history-export-from', `📅 ${t('history_from')}`);
    set('l-history-export-to', `📅 ${t('history_to')}`);
    set('btn-do-download-pdf', t('history_download_pdf'));
    set('btn-do-download-txt', t('history_download_txt'));
    set('btn-do-download-json', t('history_download_json'));
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
    set('walk-test-title-text', t('walk_test') || 'Prueba de Sensores (Walk Test)');
    set('walk-test-desc-text', t('walk_test_desc'));
    set('walk-test-close-btn', t('walk_test_close') || 'Cerrar');
    set('walk-test-stop-btn', t('walk_test_stop') || 'Finalizar Prueba');
    set('sensor-delay-modal-title', t('sensor_delay_cfg_title'));
    set('txt-delay-opt-default', t('sensor_delay_default'));
    set('txt-delay-opt-instant', t('sensor_delay_instant'));
    set('txt-delay-opt-custom', t('sensor_delay_custom'));
    set('txt-delay-seconds-label', t('sensor_delay_seconds') || 'segundos');
    set('sensor-delay-cancel-btn', t('cancel'));
    set('sensor-delay-save-btn', t('save_btn'));

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
        <option value="none">${t('bg_panel_none')}</option>
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
        const homeSpan = entry.querySelector('.btn-home .console-mode-label');
        if (homeSpan) homeSpan.textContent = modeLabel('btn_home');
        const awaySpan = entry.querySelector('.btn-away .console-mode-label');
        if (awaySpan) awaySpan.textContent = modeLabel('btn_away');
        const nightSpan = entry.querySelector('.btn-night .console-mode-label');
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
    try {
      this.classList.toggle('argus-perf-essential', localStorage.getItem('argus_visual_mode') === 'lite');
    } catch { /* Storage is optional for embedded panels. */ }

    // Restore persisted language
    try { this._manualLang = localStorage.getItem('argus_lang') || null; } catch(e) {}

    // Listen to Home Assistant connection-status events during boot
    this._connStatusHandler = (ev: any) => {
      const status = ev?.detail;
      const c = this.shadowRoot?.getElementById('argus-initial-curtain');
      if (c && !c.classList.contains('curtain-hidden')) {
        if (status === 'disconnected') {
          this._setBootProgress(15, this._t('connection_lost') || 'Sin conexión con Home Assistant', true);
        } else if (status === 'connected') {
          this._setBootProgress(35);
          this._ensureInitialized();
        }
      }
    };
    window.addEventListener('connection-status', this._connStatusHandler);

    this._ensureInitialized();
    this._initContrastMode();
    this._initGestureMode();
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
        const downloadPdfBtn = target.closest('#btn-do-download-pdf');
        if (downloadPdfBtn) {
          e.preventDefault();
          this._exportHistoryPDF();
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
    this._argusNightCleanup?.();
    this._argusNightCleanup = null;
    if (this._connStatusHandler) {
      window.removeEventListener('connection-status', this._connStatusHandler);
      this._connStatusHandler = null;
    }
    for (const controller of this._staControllers?.values() || []) controller.abort();
    this._staControllers?.clear();
    this._reactConsoleRoot?.unmount();
    this._reactConsoleRoot = null;
    this._argusReactRoot?.unmount();
    this._argusReactRoot = null;
    if (this._clockInterval) clearInterval(this._clockInterval);
    this._stopWalkTestPoll?.();
    if (this._loadRetryTimeout) { clearTimeout(this._loadRetryTimeout); this._loadRetryTimeout = null; }
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

  _setBootProgress(percent: number, statusText?: string, isError = false) {
    const curtain = this.shadowRoot?.getElementById('argus-initial-curtain');
    if (!curtain || curtain.classList.contains('curtain-hidden')) return;
    const fill = this.shadowRoot?.getElementById('argus-boot-fill') as HTMLElement | null;
    if (fill) {
      fill.style.width = `${Math.min(100, Math.max(0, percent))}%`;
      if (isError) {
        fill.style.backgroundColor = '#f87171';
        fill.style.boxShadow = '0 0 8px rgba(248, 113, 113, 0.7)';
      } else {
        fill.style.backgroundColor = '#ffffff';
        fill.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.75)';
      }
    }
    const status = this.shadowRoot?.getElementById('argus-boot-status') as HTMLElement | null;
    if (status) {
      if (statusText) {
        status.style.display = 'flex';
        status.className = `argus-boot-status ${isError ? 'status-error' : ''}`;
        const retryLabel = this._t('retry') || 'Refrescar';
        status.innerHTML = isError
          ? `<span>${this._escapeHtml(statusText)}</span> <button type="button" class="argus-boot-reload-btn" id="argus-boot-reload-btn">${this._escapeHtml(retryLabel)}</button>`
          : `<span>${this._escapeHtml(statusText)}</span>`;
        status.querySelector('#argus-boot-reload-btn')?.addEventListener('click', () => {
          window.location.reload();
        });
      } else {
        status.style.display = 'none';
        status.innerHTML = '';
      }
    }
  }

  async _completeBootAndReveal() {
    const curtain = this.shadowRoot?.getElementById('argus-initial-curtain');
    if (!curtain || curtain.classList.contains('curtain-hidden')) return;

    this._setBootProgress(100);
    await new Promise(r => setTimeout(r, 280));

    curtain.classList.add('curtain-hidden');
    setTimeout(() => {
      try { curtain.remove(); } catch (_) {}
    }, 400);
  }

  _hideInitialCurtain() {
    return this._completeBootAndReveal();
  }

  _ensureInitialized() {
    // Lovelace can attach the element before assigning hass.  Waiting for the
    // authenticated hass object avoids a permanent blank panel after a reload.
    if (!this.isConnected || !this._hass || this._dashboard || this._initPromise) return;

    if (this._hass.connected === false) {
      this._setBootProgress(15, this._t('connection_lost') || 'Sin conexión con Home Assistant', true);
      return;
    }

    this._setBootProgress(35);
    this._initPromise = this._init()
      .catch(err => {
        console.error('Argus initialization failed:', err);
        if (this.isConnected) {
          this._setBootProgress(15, (this._t('connection_lost') || 'Sin conexión con Home Assistant') + ': ' + (err.message || ''), true);
          setTimeout(() => {
            this._completeBootAndReveal();
            this._renderInitializationError(err);
          }, 1800);
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

    const updateOffset = (e) => {
      if (!sliding) return;
      offsetX = Math.max(0, Math.min(e.clientX - startX, maxSlide()));
      thumb.style.left = (6 + offsetX) + 'px';
      const pct = offsetX / maxSlide();
      track.style.background = 'rgba(217,4,41,' + (0.15 + pct * 0.55) + ')';
      return pct;
    };

    const onPointerUp = (e) => {
      if (!sliding) return;
      // Include the release coordinate: touch browsers can omit the final
      // pointermove when the user lifts at the end of the confirmation slider.
      const pct = updateOffset(e) || 0;
      finalize(pct >= 0.9);
    };

    const onPointerMove = (e) => {
      const pct = updateOffset(e);
      if (pct != null && pct >= 0.9) finalize(true);
    };

    const onPointerCancel = () => {
      if (sliding) finalize(false);
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

    thumb.setAttribute('role', 'button');
    thumb.setAttribute('tabindex', '0');
    thumb.setAttribute('aria-label', this._t('tap_sos') || 'Activar SOS');

    thumb.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this._triggerSOS();
      }
    });

    track.addEventListener('click', () => {
      if (this._getProfileGesture() === 'touch') {
        this._triggerSOS();
      }
    });

    thumb.addEventListener('pointerdown', onPointerDown);
    thumb.addEventListener('pointermove', onPointerMove);
    thumb.addEventListener('pointerup', onPointerUp);
    thumb.addEventListener('pointercancel', onPointerCancel);
    this._sosBound = true;
  }

  async _init() {
    this._mode = 'disarmed';
    if (!this._staticBound) {
      this._bindStatic();
      this._staticBound = true;
    }
    // The SOS confirmation modal has its own second-stage slider. Keep it
    // bound independently from the React-rendered dashboard slider so the
    // confirmation can actually dispatch the SOS action.
    this._bindSOS();
    this._setBootProgress(45);
    await this._connect();
    this._applyTranslations();
    this._setBootProgress(70);
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
    // Warm the logo while the user chooses the date range, avoiding network
    // work after the PDF button's click gesture (notably Safari).
    void Promise.all([this._prepareHistoryPDF(), import('../features/history/export')])
      .catch(error => console.warn('Argus PDF warm-up failed:', error));
    const fromDate = new Date();
    fromDate.setDate(now.getDate() - 30);
    const fromInput = this.shadowRoot.getElementById('export-history-from') as HTMLInputElement | null;
    const toInput = this.shadowRoot.getElementById('export-history-to') as HTMLInputElement | null;
    if (fromInput && !fromInput.value) fromInput.value = this._formatLocalDateInput(fromDate);
    if (toInput && !toInput.value) toInput.value = this._formatLocalDateInput(now);
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

  _formatLocalDateInput(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  _getFilteredHistory() {
    const events = Array.isArray(this._forensicTimeline) && this._forensicTimeline.length
      ? this._forensicTimeline
      : (Array.isArray(this._ui?.audit_log) ? this._ui.audit_log : []);

    const fromInput = this.shadowRoot.getElementById('export-history-from') as HTMLInputElement | null;
    const toInput = this.shadowRoot.getElementById('export-history-to') as HTMLInputElement | null;
    const fromVal = fromInput?.value ? new Date(fromInput.value + 'T00:00:00') : null;
    const toVal = toInput?.value ? new Date(toInput.value + 'T00:00:00') : null;
    if (toVal) toVal.setDate(toVal.getDate() + 1);

    return events.filter(ev => {
      if (!ev || typeof ev !== 'object') return false;
      if (!ev.ts) return true;
      const t = new Date(ev.ts);
      if (fromVal && t < fromVal) return false;
      if (toVal && t >= toVal) return false;
      return true;
    });
  }

  async _exportHistoryText() {
    try {
      const { downloadHistoryText } = await import('../features/history/export');
      downloadHistoryText(this);
    } catch (error) {
      await this._showArgusConfirmModal(String(error?.message || error), {confirmLabel: 'OK'});
    }
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

  _localizeActivityAction(rawAction) {
    const action = String(rawAction || '').trim().toLowerCase();
    const known = {
      armed: 'log_detail_armed', arm: 'manual_arm', disarmed: 'log_detail_disarm', disarm: 'manual_disarm',
      triggered: 'log_triggered', arming_cancelled: 'log_action_arming_cancelled',
      arm_rejected: 'log_action_arm_rejected', user_added: 'log_action_user_added',
      user_deleted: 'log_action_user_deleted', sos: 'log_action_sos', sos_stopped: 'log_action_sos_stopped',
      auto_arm: 'log_action_auto_arm', auto_disarm: 'log_action_auto_disarm', auto_arm_cancelled: 'log_action_auto_arm_cancelled',
      panic_stopped: 'log_action_sos_stopped', automation_executed: 'log_action_automation',
      analysis: 'log_action_analysis', mode_changed: 'log_action_mode_changed',
      state_restored: 'log_action_state_restored', audit_log_cleared: 'log_action_audit_log_cleared',
      ui_configuration_updated: 'log_action_save_ui', user_logged_in: 'log_action_user_logged_in',
      profile_selected: 'log_action_profile_selected', schedule_applied: 'log_action_schedule_applied',
    };
    const key = known[action] || (action.startsWith('auto_') ? 'log_action_automation' : action.startsWith('ai_') ? 'log_action_analysis' : `log_action_${action}`);
    const translated = this._t(key);
    return translated !== key ? translated : (rawAction || this._t('history_unknown_event'));
  }

  async _prepareHistoryPDF() {
    const pdf = await import('../features/history/pdf');
    this._historyPDFLogoPromise ||= pdf.loadHistoryLogo();
    return pdf;
  }

  async _exportHistoryPDF() {
    try {
      const report = await import('../features/history/export');
      await this._prepareHistoryPDF();
      await report.downloadHistoryPDF(this, this._historyPDFLogoPromise);
    } catch (error) {
      await this._showArgusConfirmModal(String(error?.message || error), {confirmLabel: 'OK'});
    }
  }

  async _exportForensicTimeline() {
    this._closeHistoryExportModal();
    const events = Array.isArray(this._forensicTimeline) && this._forensicTimeline.length
      ? this._forensicTimeline : (this._ui?.audit_log || []);
    try {
      const { downloadForensicTimeline } = await import('../features/history/export');
      downloadForensicTimeline(events);
    } catch (error) {
      await this._showArgusConfirmModal(String(error?.message || error), {confirmLabel: 'OK'});
    }
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
    const armingPinDialog = s('access-pin-settings');
    const closeArmingPinDialog = () => {
      armingPinDialog.style.display = 'none';
      armingPinDialog.setAttribute('aria-hidden', 'true');
    };
    s('btn-close-arming-pin').addEventListener('click', closeArmingPinDialog);
    armingPinDialog.addEventListener('click', event => {
      if (event.target === armingPinDialog) closeArmingPinDialog();
    });
    armingPinDialog.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeArmingPinDialog();
    });
    s('lnk-forgot-pin')?.addEventListener('click', e => { e.preventDefault(); this._handleForgotPin(); });
    s('pin-forgot-link')?.addEventListener('click', e => { e.preventDefault(); this._handleForgotPin(); });

    s('pin-close').addEventListener('click', () => this._closePinModal());
    s('pin-cancel').addEventListener('click', () => this._closePinModal());
    s('pin-modal').addEventListener('click', e => { if (e.target.id === 'pin-modal') this._closePinModal(); });
    s('pin-modal').addEventListener('keydown', e => {
      const dialog = e.currentTarget;
      if (!dialog.dataset.disarmPresentation) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        this._closePinModal();
      } else if (e.key === 'Tab' && dialog.dataset.disarmPresentation === 'dialog') {
        const controls = [...dialog.querySelectorAll('button, input, a[href]')]
          .filter(el => !el.disabled && el.tabIndex >= 0 && el.getClientRects().length);
        if (!controls.length) return;
        const index = controls.indexOf(this.shadowRoot.activeElement);
        const next = index < 0
          ? (e.shiftKey ? controls.length - 1 : 0)
          : (index + (e.shiftKey ? -1 : 1) + controls.length) % controls.length;
        e.preventDefault();
        controls[next].focus();
      }
    });
    s('pin-confirm').addEventListener('click', () => this._submitPin());
    s('pin-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') this._submitPin();
      if (s('pin-modal').dataset.disarmPresentation && !e.ctrlKey && !e.metaKey && !e.altKey) {
        if (/^[0-9]$/.test(e.key)) this._appendPinDigit(e.key);
        if (e.key === 'Backspace') this._backspacePin();
      }
      if (e.key === 'Escape') this._closePinModal();
    });
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
      const modal = s('sos-modal');
      modal?.classList.remove('open');
      if (modal) modal.style.display = 'none';
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

    // Walk Test & Sensor Delay
    s('walk-test-close-btn')?.addEventListener('click', () => this._closeWalkTestModal());
    s('walk-test-stop-btn')?.addEventListener('click', () => this._stopWalkTest());
    s('walk-test-modal')?.addEventListener('click', e => { if (e.target.id === 'walk-test-modal') this._closeWalkTestModal(); });

    s('delay-opt-default')?.addEventListener('change', () => this._updateDelayOptionsUi());
    s('delay-opt-instant')?.addEventListener('change', () => this._updateDelayOptionsUi());
    s('delay-opt-custom')?.addEventListener('change', () => this._updateDelayOptionsUi());
    s('sensor-delay-cancel-btn')?.addEventListener('click', () => this._closeSensorDelayModal());
    s('sensor-delay-save-btn')?.addEventListener('click', () => this._saveSensorDelay());
    s('sensor-delay-modal')?.addEventListener('click', e => { if (e.target.id === 'sensor-delay-modal') this._closeSensorDelayModal(); });
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
    const scoped = !['argus/get_media_players', 'argus/upload_file', 'argus/list_uploaded_files', 'argus/delete_uploaded_file'].includes(type);
    const entry_id = scoped && (data.entry_id || this._dashboard?.entry_id || this._cardConfig?.entry_id || this._config?.entry_id);
    return this._hass.callWS({ type, ...(entry_id ? { entry_id } : {}), ...data });
  }

  /* ── Load dashboard ──────────────────────────────────────────────── */
  async _load() {
    const wrapEl = this.shadowRoot.querySelector('.wrap') as HTMLElement | null;
    // Keep an already mounted dashboard visible while a profile refreshes.
    // Hiding it here caused a second flash immediately after profile selection.
    const preserveMountedDashboard = Boolean(wrapEl?.classList.contains('wrap-ready') && this._dashboard?.entries?.length);
    if (wrapEl && !preserveMountedDashboard) {
      wrapEl.style.setProperty('display', 'none', 'important');
      wrapEl.classList.remove('wrap-ready');
    }
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

    try {
      await this._prepareArgusDashboard?.();
    } catch (error) {
      console.error('Argus dashboard modules failed to load:', error);
    }
    if (!this.isConnected) return;
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
    const readyWrap = this.shadowRoot.querySelector('.wrap') as HTMLElement | null;
    if (readyWrap) {
      readyWrap.style.removeProperty('display');
      readyWrap.classList.add('wrap-ready');
    }
    this._hideInitialCurtain();
    this._currentProfile = dashboard.current_profile || null;
    this._initContrastMode();
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
        <option value="none">${this._t('bg_panel_none')}</option>
      `;
      bgMode.value = this._backgroundMode || 'none';
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

  /** Resolve an entity state from the live hass object.
   * Tries exact match, lowercase, common Tuya/HA naming variations,
   * friendly_name matching, and distinct token matching.
   * Returns null if not found. */
  _getEntityState(entityId: string) {
    if (!entityId || !this._hass?.states) return null;
    const rawId = String(entityId).trim();
    if (this._hass.states[rawId]) return this._hass.states[rawId];
    const lower = rawId.toLowerCase();
    if (this._hass.states[lower]) return this._hass.states[lower];

    const allStates = Object.values(this._hass.states) as any[];
    const byId = allStates.find((s: any) => String(s?.entity_id || '').toLowerCase() === lower);
    if (byId) return byId;

    return null;
  }

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
            disarm: '<path d="M12 3 20 6.5v5.2c0 5-3.4 8-8 9.8-4.6-1.8-8-4.8-8-9.8V6.5z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
      sos: '<path d="M12 3 21 20H3z"/><path d="M12 9v4.5M12 17h.01"/>'
    };
    return `<svg class="mode-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[mode] || paths.disarm}</svg>`;
  }

  _renderPremiumStatusIcon(state, triggered, uid = '0') {
    const mode = triggered ? 'triggered' : ({ armed_home:'home', armed_away:'away', armed_night:'night', disarmed:'disarm' }[state] || 'disarm');
    const accent = { home:'#ffb700', away:'#ff3344', night:'#3898ff', disarm:'#00ff8c', triggered:'#ff1744' }[mode];
    const glowColor = { home:'rgba(255,183,0,0.65)', away:'rgba(255,51,68,0.7)', night:'rgba(56,152,255,0.65)', disarm:'rgba(0,255,140,0.65)', triggered:'rgba(255,23,68,0.85)' }[mode];
    const symbol = {
      home:'<path d="M66 98 100 69l34 29v35H66z"/><path d="M89 133v-22h22v22"/>',
      away:'<path d="M100 70c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32z"/><path d="M100 79v46M77 102h46"/>',
      night:'<path d="M120 70a34 34 0 1 0 13 63 38 38 0 1 1-13-63z"/><circle cx="134" cy="73" r="3"/>',
            disarm:'<path d="m76 104 16 16 34-39"/>',
      triggered:'<path d="M100 65 139 137H61z"/><path d="M100 90v23M100 124h.01"/>'
    }[mode];
    const zoneCount = 6;
    const zoneRadius = mode === 'disarm' ? 82 : 70;
    const zoneColor = mode === 'triggered' ? '#ef4444' : mode === 'disarm' ? '#94a3b8' : accent;
    const crystals = Array.from({ length: zoneCount }, (_, index) => {
      const angle = (index / zoneCount) * Math.PI * 2 - Math.PI / 2;
      const x = (100 + Math.cos(angle) * zoneRadius).toFixed(1);
      const y = (105 + Math.sin(angle) * zoneRadius).toFixed(1);
      return `<g transform="translate(${x} ${y})" class="argus-zone-crystal" style="color:${zoneColor}"><path d="M0-10 9-4 6 7 0 11-6 7-9-4z" fill="${zoneColor}" fill-opacity=".82" stroke="#fff" stroke-opacity=".7" stroke-width="1.2"><animate attributeName="opacity" values=".55;1;.55" dur="${2.8 + index * .12}s" begin="-${index * .3}s" repeatCount="indefinite"/></path><text y="22" text-anchor="middle" fill="#fff" fill-opacity=".8" font-size="5" font-family="sans-serif">${index + 1}</text></g>`;
    }).join('');
    return `<svg viewBox="0 0 200 220" width="100%" height="100%" style="filter:drop-shadow(0 0 35px ${glowColor}) drop-shadow(0 0 70px ${glowColor}) drop-shadow(0 20px 40px rgba(0,0,0,.7));max-width:220px;margin:auto;display:block;overflow:visible" aria-label="${this._escapeHtml(mode)}"><defs><linearGradient id="premium-${mode}-${uid}" x1="20%" y1="5%" x2="85%" y2="100%"><stop stop-color="#ffffff" stop-opacity=".85"/><stop offset=".18" stop-color="${accent}" stop-opacity=".98"/><stop offset=".65" stop-color="${accent}" stop-opacity=".4"/><stop offset="1" stop-color="#01040a" stop-opacity=".85"/></linearGradient><linearGradient id="shield-inner-${mode}-${uid}" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="#ffffff" stop-opacity=".3"/><stop offset=".35" stop-color="${accent}" stop-opacity=".15"/><stop offset="1" stop-color="transparent"/></linearGradient><filter id="premium-glow-${mode}-${uid}" filterUnits="userSpaceOnUse" x="-80" y="-80" width="360" height="360" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="5.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>${crystals}<path d="M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z" fill="url(#premium-${mode}-${uid})" stroke="${accent}" stroke-width="3.5" filter="url(#premium-glow-${mode}-${uid})"/><path d="M100 28 152 50v38c0 38-21 62-52 79-31-17-52-41-52-79V50z" fill="url(#shield-inner-${mode}-${uid})"/><path d="M100 31 148 51" stroke="#fff" stroke-opacity=".85" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="105" r="43" fill="rgba(2,6,14,.55)" stroke="rgba(255,255,255,.35)" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#premium-glow-${mode}-${uid})">${symbol}</g><circle cx="100" cy="105" r="55" fill="none" stroke="${accent}" stroke-opacity=".65" stroke-width="2.5"><animate attributeName="r" values="50;62;50" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;.08;.8" dur="3.2s" repeatCount="indefinite"/></circle></svg>`;
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
    // Screen unlock is validated by the master-PIN endpoint below. A personal
    // user PIN protects alarm actions, but cannot unlock this screen.
    const requiresPin = fsEntry?.pin_configured === true;

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
        return false;
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
        return false;
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
    const idx = parseInt(target?.dataset?.entryIndex ?? fsBtn?.dataset?.fullscreen ?? '0');
    const validIdx = (isNaN(idx) || idx < 0) ? 0 : idx;
    const entry = this._dashboard?.entries?.[validIdx] || this._dashboard?.entries?.[0];

    this._kioskEntryId = entry?.entry_id || null;
    this._kioskTarget = target;
    this._kioskLocked = false;
    this._fullscreenIdx = validIdx;
    this.classList.add('fullscreen-active');
    document.body.style.overflow = 'hidden';
    this.dispatchEvent(new CustomEvent('argus-fullscreen-changed', { detail: { fullscreen: true } }));

    // Desktop needs native browser fullscreen to leave Home Assistant's
    // sidebar and header behind. Keep the virtual fullscreen on mobile,
    // where browser fullscreen APIs are limited or disruptive.
    if (window.matchMedia('(min-width: 761px)').matches && typeof this.requestFullscreen === 'function') {
      this.requestFullscreen({ navigationUI: 'hide' }).catch(() => {});
    }

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
      es:{title:'Horarios locales de estado',all:'Todos los días',weekdays:'Lunes a viernes',weekend:'Fin de semana',empty:'Sin horarios. Argus conservará el último estado confirmado.',disarmed:'Desarmado',home:'En casa',away:'Ausente',night:'Noche'},
      en:{title:'Local state schedules',all:'Every day',weekdays:'Monday to Friday',weekend:'Weekend',empty:'No schedules. Argus will preserve the last confirmed state.',disarmed:'Disarmed',home:'Home',away:'Away',night:'Night'},
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
      stateSelect.innerHTML = `<option value="disarmed">${text.disarmed}</option><option value="armed_home">${text.home}</option><option value="armed_away">${text.away}</option><option value="armed_night">${text.night}</option>`;
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
    const labelForState = state => ({disarmed:text.disarmed,armed_home:text.home,armed_away:text.away,armed_night:text.night}[state] || state);
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
    };
    const findMode = () => {
      return Object.entries(modes).find(([, terms]) => terms.some(term => normalized.includes(term)))?.[0];
    };
    const mode = findMode();

    if (action === 'pin_reset') return this._t('log_detail_pin_reset');
    if (action === 'pin_reset_failed') return this._t('log_detail_pin_reset_failed');
    if (action === 'arming_cancelled') {
      const reason = raw.replace(/^Armado cancelado:\s*/i, '').trim();
      return reason || this._t('log_action_arming_cancelled');
    }
    if (action === 'state_restored') {
      const stateMap = {
        disarmed: this._t('disarmed'),
        armed_home: this._t('mode_home'),
        armed_away: this._t('mode_away'),
        armed_night: this._t('mode_night'),
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
      const panel = el.closest('.panel');
      const isSmall = panel && panel.getAttribute('data-size') === 'S';
      const visibleLog = log.slice(0, isSmall ? 1 : 30);
      // hass can refresh this panel for clock, weather, or sensor changes that
      // do not affect the audit timeline. Replacing identical rows replays the
      // legacy glass entrance animation and looks like a flicker on mobile.
      const renderSignature = JSON.stringify([
        this._getLocale(),
        Boolean(isSmall),
        this._activityTimelineError || '',
        visibleLog.map(entry => [entry.action, entry.detail, entry.user, entry.actor, entry.ts])
      ]);
      if (renderSignature === this._lastActivityRenderSignature) return;
      this._lastActivityRenderSignature = renderSignature;
      // Updating the audit timeline while a user is reading older entries
      // must not reset the active touch scroller to the top. Keep the first
      // visible row and its pixel offset as an anchor across DOM updates.
      const scrollTop = el.scrollTop;
      const containerTop = el.getBoundingClientRect().top;
      const anchor = Array.from(el.children).map((row: Element) => ({
        key: (row as HTMLElement).dataset.activityKey,
        offset: row.getBoundingClientRect().top - containerTop,
        height: row.getBoundingClientRect().height,
      })).find(row => row.key && row.offset + row.height > 0 && row.offset < el.clientHeight);
      const replaceContents = (markup: string) => {
        // Reconcile by row key instead of replacing the whole list. Rebuilding
        // every row during a portrait refresh flashes glass layers in Safari
        // and interrupts native touch scrolling even when most events persist.
        const template = document.createElement('template');
        template.innerHTML = markup;
        const incoming = Array.from(template.content.children) as HTMLElement[];
        const existing = new Map(Array.from(el.children).map((row: Element) => [
          (row as HTMLElement).dataset.activityKey || '', row as HTMLElement
        ]));
        const retained = new Set<HTMLElement>();
        incoming.forEach((fresh, index) => {
          const key = fresh.dataset.activityKey || '';
          const current = key ? existing.get(key) : null;
          const row = current || fresh;
          if (current && current.innerHTML !== fresh.innerHTML) current.innerHTML = fresh.innerHTML;
          retained.add(row);
          const atIndex = el.children[index];
          if (atIndex !== row) el.insertBefore(row, atIndex || null);
        });
        Array.from(el.children).forEach((row: Element) => {
          if (!retained.has(row as HTMLElement)) row.remove();
        });
        if (anchor?.key) {
          const row = Array.from(el.children).find((child: Element) => (child as HTMLElement).dataset.activityKey === anchor.key);
          if (row) {
            const nextOffset = row.getBoundingClientRect().top - el.getBoundingClientRect().top;
            el.scrollTop = Math.max(0, el.scrollTop + nextOffset - anchor.offset);
            return;
          }
        }
        el.scrollTop = Math.min(scrollTop, Math.max(0, el.scrollHeight - el.clientHeight));
      };
      if (!log.length) {
        const message = this._activityTimelineError
          ? this._t('history_unavailable')
          : this._t('log_no_events');
        replaceContents(`<div class="small" style="padding:8px 0;opacity:.72">${this._escapeHtml(message)}</div>`);
        return;
      }

      replaceContents(visibleLog.map((ev, index) => {
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

        const activityKey = JSON.stringify([action, rawDetail, user, ev.actor || '', ev.ts || '', index]);
        return `<div class="log-item ${itemCls}" data-activity-key="${this._escapeHtml(activityKey)}">
          <div class="log-icon">${icon}</div>
          <div class="log-body">
            <div class="log-title">
              <span class="log-badge ${badgeCls}">${this._escapeHtml(badgeTxt)}</span>
              <span style="font-weight:500">${this._escapeHtml(detail)}</span>
            </div>
            <div class="log-meta">${this._escapeHtml(ts)} &nbsp;·&nbsp; ${this._escapeHtml(source)}</div>
          </div>
        </div>`;
      }).join(''));
    } catch (err) {
      console.error('Argus activity log render failed:', err);
      el.textContent = this._t('log_no_events');
    }
  }

  /* ── Modes ───────────────────────────────────────────────────────── */
  _modeDraftKey() {
    return `${this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || 'default'}:${this._mode}`;
  }

  _captureModeDraftState() {
    if (this._mode === 'sos') {
      const input = this.shadowRoot.getElementById('mode-emergency-number-input') as HTMLInputElement | null;
      return {
        emergency_number: this._normaliseEmergencyNumber(input?.value || this._emergencyNumber || '911'),
        panic_outputs: [...(this._panicOutputs || [])],
        notif_targets: [...(this._notifTargets || [])],
      };
    }
    const config = JSON.parse(JSON.stringify(this._currentModeConfig()));
    const wait = this.shadowRoot.getElementById('mode-wait-if-open') as HTMLInputElement | null;
    if (wait) config.open_sensors_policy = wait.checked ? 'pending' : 'allow';
    config.light_siren_settings = { ...(config.light_siren_settings || {}) };
    this.shadowRoot.querySelectorAll<HTMLElement>('[data-light-output]').forEach(row => {
      const id = row.dataset.lightOutput;
      const color = row.querySelector<HTMLInputElement>('[data-light-siren-color]');
      const mode = row.querySelector<HTMLSelectElement>('[data-light-siren-mode]');
      const settings = {...(config.light_siren_settings[id] || {})};
      if (color) settings.rgb_color = [1, 3, 5].map(i => parseInt(color.value.slice(i, i + 2), 16));
      else delete settings.rgb_color;
      settings.flash_mode = mode?.value || 'none';
      settings.gentle_flash = settings.flash_mode === 'gentle';
      config.light_siren_settings[id] = settings;
    });
    return { config };
  }

  _ensureModeDraftBaseline() {
    const key = this._modeDraftKey();
    if (!this._modeDraftBaselines.has(key)) {
      this._modeDraftBaselines.set(key, JSON.stringify(this._captureModeDraftState()));
    }
  }

  async _showModeDraftDecision() {
    return new Promise(resolve => {
      const overlay = document.createElement('div');
      overlay.setAttribute('role', 'alertdialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.style.cssText = 'position:fixed;inset:0;z-index:999999999;display:flex;align-items:center;justify-content:center;padding:18px;box-sizing:border-box;background:rgba(0,0,0,.62);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)';
      const card = document.createElement('div');
      card.style.cssText = 'width:min(420px,94vw);padding:22px;border:1px solid rgba(255,255,255,.2);border-radius:22px;background:linear-gradient(145deg,rgba(35,48,64,.97),rgba(20,27,40,.97));box-shadow:0 24px 64px rgba(0,0,0,.55);color:#fff;font:inherit';
      const text = document.createElement('p');
      text.textContent = 'Hay cambios de este modo sin guardar. ¿Quieres guardarlos antes de continuar?';
      text.style.cssText = 'margin:0 0 18px;line-height:1.5;text-align:center';
      const actions = document.createElement('div');
      actions.style.cssText = 'display:grid;grid-template-columns:1fr;gap:9px';
      const finish = value => { overlay.remove(); resolve(value); };
      const button = (label, value, primary = false) => {
        const item = document.createElement('button');
        item.type = 'button'; item.textContent = label;
        item.style.cssText = `min-height:42px;padding:9px 12px;border:1px solid rgba(255,255,255,.18);border-radius:13px;background:${primary ? 'linear-gradient(135deg,#3288d4,#7355b3)' : 'rgba(255,255,255,.08)'};color:#fff;font:inherit;font-weight:700;cursor:pointer`;
        item.addEventListener('click', () => finish(value));
        actions.appendChild(item);
        return item;
      };
      const save = button('Guardar y continuar', 'save', true);
      button('Descartar y continuar', 'discard');
      button('Seguir editando', 'cancel');
      card.append(text, actions); overlay.appendChild(card); (document.body || this.shadowRoot).appendChild(overlay);
      overlay.addEventListener('click', event => { if (event.target === overlay) finish('cancel'); });
      overlay.addEventListener('keydown', event => { if (event.key === 'Escape') finish('cancel'); });
      save.focus();
    });
  }

  _guardModeDraft(continueTo: () => void): boolean {
    if (this._modeView !== 'mode') { continueTo(); return true; }
    this._ensureModeDraftBaseline();
    const key = this._modeDraftKey();
    const current = JSON.stringify(this._captureModeDraftState());
    if (current === this._modeDraftBaselines.get(key)) { continueTo(); return true; }
    if (this._modeDecisionPending) return false;
    this._modeDecisionPending = true;
    void this._showModeDraftDecision().then(async choice => {
      try {
        let savedModeName = '';
        if (choice === 'save') {
          const priorMode = this._mode;
          const saved = this._mode === 'sos' ? await this._saveSosMode() : await this._saveMode();
          if (!saved) return;
          savedModeName = priorMode === 'home' ? 'En Casa' : priorMode === 'away' ? 'Ausente' : priorMode === 'night' ? 'Noche' : priorMode === 'sos' ? 'SOS' : 'Desarmado';
        } else if (choice === 'discard') {
          const savedState = JSON.parse(this._modeDraftBaselines.get(key));
          if (this._mode === 'sos') {
            this._emergencyNumber = savedState.emergency_number;
            this._panicOutputs = [...savedState.panic_outputs];
            this._notifTargets = [...(savedState.notif_targets || [])];
            if (this._ui) {
              this._ui.emergency_number = this._emergencyNumber;
              this._ui.panic_outputs = [...this._panicOutputs];
              this._ui.notif_targets = [...this._notifTargets];
            }
          } else {
            const entityId = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || 'default';
            this._ui.modes = this._ui.modes || {};
            this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {};
            this._ui.modes.__by_entity__[entityId] = this._ui.modes.__by_entity__[entityId] || {};
            this._ui.modes.__by_entity__[entityId][this._mode] = savedState.config;
          }
        } else {
          return;
        }
        continueTo();
        if (savedModeName) {
          const status = this.shadowRoot.getElementById('mode-status');
          if (status) { status.textContent = `✓ Modo ${savedModeName} guardado antes de continuar`; status.className = 'status ok show'; }
        }
      } finally {
        this._modeDecisionPending = false;
      }
    });
    return false;
  }

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

    let bubble = tabs.querySelector('.tab-bubble');
    const existingButtons = tabs.querySelectorAll('.tab');

    const tabsNeedRebuild = !bubble || existingButtons.length !== modes.length + 2
      || !tabs.querySelector('[data-mode-view="voice"]');
    if (tabsNeedRebuild) {
      tabs.className = 'tabs';
      tabs.innerHTML = `
        <div class="tab-bubble"></div>
        <button type="button" class="tab" data-mode-view="zones">
          <span class="tab-icon" style="font-size:20px">🛡️</span>
          <span class="tab-label">Zonas</span>
        </button>
        <button type="button" class="tab" data-mode-view="voice"><span class="tab-icon">🔊</span><span class="tab-label">Voz de Argus</span></button>
        ${modes.map(m => `
          <button type="button" class="tab ${m === this._mode ? 'active' : ''}" data-mode="${m}">
            <span class="tab-icon" style="font-size: 20px;">${icons[m]}</span>
            <span class="tab-label">${lbls[m]}</span>
          </button>
        `).join('')}
      `;
      bubble = tabs.querySelector('.tab-bubble');
      tabs.querySelector('[data-mode-view="zones"]')?.addEventListener('click', (e) => {
        e.preventDefault();
        const open = () => { this._modeView = 'zones'; this._renderModeTabs(); this._renderModeView(); };
        const guardMode = () => this._guardModeDraft(open);
        if (!this._guardZoneDraft(guardMode)) return;
        guardMode();
      });
      tabs.querySelector('[data-mode-view="voice"]')?.addEventListener('click', () => {
        const open = () => { this._modeView = 'voice'; this._renderModeTabs(); this._renderModeView(); };
        if (this._guardZoneDraft(() => this._guardModeDraft(open))) this._guardModeDraft(open);
      });
      tabs.querySelectorAll('[data-mode]').forEach(t => t.addEventListener('click', (e) => {
        e.preventDefault();
        const nextMode = t.dataset.mode;
        if (this._mode === nextMode && this._modeView === 'mode') return;
        const open = () => {
          this._mode = nextMode;
          this._modeView = 'mode';
          this._renderModeTabs(); this._renderModeView(); this._renderEntries();
          this.dispatchEvent(new CustomEvent('argus-state-update'));
        };
        const guardMode = () => this._guardModeDraft(open);
        if (!this._guardZoneDraft(guardMode)) return;
        guardMode();
      }));
    } else {
      existingButtons.forEach(btn => {
        const m = btn.dataset.mode;
        if (m && lbls[m]) {
          const lblSpan = btn.querySelector('.tab-label');
          if (lblSpan && lblSpan.textContent !== lbls[m]) {
            lblSpan.textContent = lbls[m];
          }
        }
      });
    }

    const buttons = tabs.querySelectorAll('.tab');
    let activeBtn = null;
    buttons.forEach(btn => {
      if ((btn.dataset.modeView && btn.dataset.modeView === this._modeView)
        || (btn.dataset.mode === this._mode && this._modeView !== 'zones' && this._modeView !== 'voice')) {
        btn.classList.add('active');
        activeBtn = btn;
      } else {
        btn.classList.remove('active');
      }
    });

    if (bubble && activeBtn) {
      bubble.className = `tab-bubble bubble-${['zones', 'voice'].includes(this._modeView) ? this._modeView : this._mode}`;
      const updateBubblePos = () => {
        const currentActive = tabs.querySelector('.tab.active') as HTMLElement || activeBtn;
        const currentBubble = tabs.querySelector('.tab-bubble') as HTMLElement || bubble;
        if (!currentActive || !currentBubble) return;
        const left = currentActive.offsetLeft;
        const width = currentActive.offsetWidth;
        if (width > 0) {
          currentBubble.style.width = `${width}px`;
          currentBubble.style.transform = `translate3d(${left}px, 0, 0)`;
        }
      };
      requestAnimationFrame(updateBubblePos);
      setTimeout(updateBubblePos, 60);
      setTimeout(updateBubblePos, 250);

      if (!(tabs as any).__argusTabObserver && typeof ResizeObserver !== 'undefined') {
        (tabs as any).__argusTabObserver = new ResizeObserver(() => {
          updateBubblePos();
        });
        (tabs as any).__argusTabObserver.observe(tabs);
      }
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

    const hadEntityScope = Boolean(this._ui.modes.__by_entity__[entityId]);
    if (!this._ui.modes.__by_entity__[entityId] || typeof this._ui.modes.__by_entity__[entityId] !== 'object' || Array.isArray(this._ui.modes.__by_entity__[entityId])) {
      this._ui.modes.__by_entity__[entityId] = {};
      for (const mode of ['disarmed', 'home', 'away', 'night']) {
        const legacy = this._ui.modes[mode];
        if (legacy && typeof legacy === 'object' && !Array.isArray(legacy)) {
          this._ui.modes.__by_entity__[entityId][mode] = { ...emptyCfg, ...legacy };
        }
      }
    }

    // Migration/Ensure valid
    if (!this._ui.modes.__by_entity__[entityId][this._mode] || typeof this._ui.modes.__by_entity__[entityId][this._mode] !== 'object' || Array.isArray(this._ui.modes.__by_entity__[entityId][this._mode])) {
        let legacy = {};
        if (!hadEntityScope && this._ui.modes[this._mode] && typeof this._ui.modes[this._mode] === 'object' && !Array.isArray(this._ui.modes[this._mode])) {
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
      sensor_settings: cfg?.sensor_settings && typeof cfg.sensor_settings === 'object' ? cfg.sensor_settings : {},
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

    if (this._modeView === 'voice') {
      el.innerHTML = '<div id="mode-voice-slot"></div>';
      this._renderVoiceSettings(el);
      return;
    }
    if (this._modeView === 'zones') {
      el.innerHTML = `<div class="mode-grid-layout"><div class="mode-section-card" id="argus-zone-editor"></div></div><span id="mode-status" role="status" style="display:block;text-align:center;min-height:20px;font-weight:700"></span>`;
      this._renderZones(el.querySelector('#argus-zone-editor'));
      return;
    }

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
            <div class="small" style="margin-top:12px;opacity:0.82;font-size:12px;">
              ℹ️ Argus no llama automáticamente. El teléfono de emergencia solo se abre si una persona pulsa la acción de llamada.
            </div>
          </div>

          <!-- Card 2: SOS Actions / Devices (Wide container DEBAJO) -->
          <div class="mode-section-card" style="width:100%;box-sizing:border-box;padding:20px 24px;border-radius:18px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;gap:12px;flex-wrap:wrap;">
              <div>
                <div class="mode-section-title" style="font-size:15px;font-weight:900;margin-bottom:4px;">⚡ ${this._t('sos_actions') || 'Dispositivos y Acciones SOS'}</div>
                <p class="small" style="margin:0;opacity:0.75;">Estas sirenas y dispositivos compatibles se activarán al dispararse SOS. Esta selección se guarda aparte de las sirenas de cada modo.</p>
              </div>
              ${readonly ? '' : `
                <button class="ghost" id="btn-mode-select-sos-outputs" style="padding:8px 16px;font-size:12px;font-weight:800;border-radius:12px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.16);cursor:pointer;">
                  ＋ Agregar dispositivos y paneles compatibles
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

          <div class="mode-section-card" id="sos-notifications-card" style="width:100%;box-sizing:border-box;padding:20px 24px;border-radius:18px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;gap:12px;flex-wrap:wrap;">
              <div>
                <div class="mode-section-title" style="font-size:15px;font-weight:900;margin-bottom:4px;">📱 Notificaciones móviles</div>
                <p class="small" style="margin:0;line-height:1.5;opacity:.84;">Para recibir un aviso SOS en un teléfono, instala Home Assistant Companion, conéctalo a esta instancia y permite las notificaciones en el teléfono. Después elige aquí el servicio de ese dispositivo (por ejemplo, notify.mobile_app_mi_telefono), pulsa Agregar y guarda la configuración. Repite para cada teléfono.</p>
              </div>
              ${readonly ? '' : `<div style="display:flex;gap:8px;align-items:center;flex:1 1 280px;max-width:460px;"><select id="sos-notif-select" class="glass-control" aria-label="Teléfono o servicio para avisos SOS" style="flex:1;min-width:0"></select><button type="button" class="ghost" id="btn-add-sos-notif" aria-label="Agregar destino de notificación SOS" style="white-space:nowrap">＋ Agregar</button></div>`}
            </div>
            <div id="sos-notif-targets" aria-live="polite" style="display:flex;flex-wrap:wrap;gap:8px;width:100%;"></div>
            <p class="small" style="margin:12px 0 0;opacity:.78;line-height:1.45;">Al activar SOS, Argus solicita a Home Assistant que envíe el aviso a cada servicio guardado. Guardar esta lista no manda una prueba. La entrega depende de que el teléfono esté registrado y tenga permiso para recibir avisos. La lista también se usa para avisos críticos. Argus no envía SMS ni llama automáticamente; un SMS requiere un servicio de mensajería configurado en Home Assistant y cualquier llamada exige que alguien pulse la acción del teléfono.</p>
            ${readonly ? '' : `<span id="sos-notif-status" role="status" style="display:block;margin-top:8px;min-height:18px;font-size:12px;font-weight:700;"></span>`}
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
        el.querySelector('#btn-mode-select-sos-outputs')?.addEventListener('click', () => this._openModal('alarm_device'));
        el.querySelector('#btn-add-sos-notif')?.addEventListener('click', () => this._addNotifTarget('sos-notif-select'));
        el.querySelectorAll('[data-remove]').forEach(btn =>
          btn.addEventListener('click', () => this._removeChip(btn.dataset.remove))
        );
        el.querySelector('#save-sos-mode')?.addEventListener('click', () => this._saveSosMode());
      }

      this._renderNotifications();
      this._ensureModeDraftBaseline();
      return;
    }

    const cfg = this._currentModeConfig();
    const sirens  = cfg.sirens  || [];
    const externalPanels = cfg.external_panels || [];
    const alarmOutputs = [...new Set([...sirens, ...externalPanels])];
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

        <div class="mode-section-card" id="mode-zone-summary"></div>
        <div class="mode-section-card" id="mode-arming-card">
          <div class="mode-section-title">Armado</div>
          <label class="checkbox-label" style="display:flex;align-items:center;gap:8px;margin-top:10px">
            <input type="checkbox" id="mode-wait-if-open" ${cfg.open_sensors_policy === 'pending' ? 'checked' : ''} ${readonly ? 'disabled' : ''}>
            Modo de armado en espera hasta cerrar sensores
          </label>
          <p class="small">Argus anunciará los sensores pendientes y armará cuando todos estén cerrados.</p>
        </div>

        <div class="mode-section-card mode-sirens-card">
          <div class="mode-section-title">📢 ${this._t('siren_section')}</div>
          <p class="small">Dispositivos compatibles de Home Assistant, incluidos los integrados por MQTT. Se activan al dispararse la alarma y se apagan al desarmar. La selección pertenece a este modo; puedes repetir dispositivos en otros modos y editarlos por separado.</p>
          <div class="mode-sensor-grid" id="siren-chips">
            ${alarmOutputs.map(x => this._chip(x, x.startsWith('alarm_control_panel.') ? 'external_panel' : 'siren')).join('') || `<div class="mode-sensor-none">${this._t('none_selected')}</div>`}
          </div>
          ${sirens.filter(x => x.startsWith('light.')).map(x => {
            const setting = cfg.light_siren_settings?.[x] || {};
            const attrs = this._hass?.states?.[x]?.attributes || {};
            const modes = Array.isArray(attrs.supported_color_modes) ? attrs.supported_color_modes : [];
            const rgbSupported = modes.some(mode => ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'].includes(mode));
            const breathing = modes.some(mode => mode !== 'onoff') && (Number(attrs.supported_features || 0) & 32);
            const rgb = Array.isArray(setting.rgb_color) ? setting.rgb_color : [255, 0, 0];
            const hex = '#' + rgb.map(v => Number(v).toString(16).padStart(2, '0')).join('');
            const flash = setting.flash_mode || (setting.gentle_flash ? 'gentle' : 'none');
            return `<details class="light-siren-settings" data-light-output="${this._escapeHtml(x)}"><summary><strong>${this._escapeHtml(attrs.friendly_name || x)}</strong><span class="small">Color y animación de esta luz</span></summary>${rgbSupported ? `<label>Color de alarma <input type="color" data-light-siren-color="${this._escapeHtml(x)}" value="${hex}" ${readonly ? 'disabled' : ''}></label>` : '<p class="small">Esta luz no anuncia control de color RGB.</p>'}<label>Efecto de alarma<select data-light-siren-mode="${this._escapeHtml(x)}" ${readonly ? 'disabled' : ''}><option value="none" ${flash === 'none' ? 'selected' : ''}>Color fijo</option>${breathing ? `<option value="breathing" ${flash === 'breathing' ? 'selected' : ''}>Respiración media</option><option value="breathing_slow" ${flash === 'breathing_slow' ? 'selected' : ''}>Respiración lenta</option><option value="breathing_fast" ${flash === 'breathing_fast' ? 'selected' : ''}>Respiración rápida</option>` : ''}<option value="gentle" ${flash === 'gentle' ? 'selected' : ''}>Destello suave</option></select></label><p class="small">Al desarmar, Argus restaura el estado anterior que Home Assistant haya proporcionado.</p></details>`;
          }).join('')}
          ${sirens.map(id => {
            const attrs = this._hass?.states?.[id]?.attributes || {};
            const tone = id.startsWith('siren.');
            const options = tone ? attrs.available_tones : [];
            if (!Array.isArray(options) || !options.length) return '';
            const selected = tone ? cfg.siren_settings?.[id]?.tone : cfg.light_siren_settings?.[id]?.effect;
            return `<label class="zone-field">${tone ? 'Tono' : 'Efecto'} · ${this._escapeHtml(attrs.friendly_name || id)}<select data-output-mode="${this._escapeHtml(id)}" data-output-kind="${tone ? 'tone' : 'effect'}" ${readonly ? 'disabled' : ''}><option value="">Predeterminado del dispositivo</option>${options.map(option => `<option value="${this._escapeHtml(String(option))}" ${String(selected) === String(option) ? 'selected' : ''}>${this._escapeHtml(String(option))}</option>`).join('')}</select></label>`;
          }).join('')}
          ${readonly ? '' : `<button class="ghost" data-open-selector="alarm_device" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">＋ Agregar dispositivos y paneles compatibles</button>`}
        </div>
      </div>
      <div id="mode-voice-slot"></div>
      ${readonly ? '' : `<div style="margin-top:16px;display:flex;flex-direction:column;gap:8px;"><button class="primary" id="save-mode" style="width:100%;height:48px;font-size:14px;box-shadow:0 8px 20px rgba(0,0,0,0.2)">${this._t('save_config')}</button><span id="mode-status" style="display:block;text-align:center;font-size:13px;font-weight:700;min-height:20px;transition:opacity .4s;opacity:1;color:var(--primary-color,#03a9f4)"></span></div>`}
    `;

    el.querySelector('#mode-instance-select')?.addEventListener('change', ev => {
      const nextEntityId = (ev.target as HTMLSelectElement).value;
      const changeInstance = () => {
        this._modeEntryId = nextEntityId;
        this._zonesLoaded = false; this._zoneList = [];
        this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent('argus-state-update'));
      };
      const guardMode = () => this._guardModeDraft(changeInstance);
      if (!this._guardZoneDraft(guardMode)) { (ev.target as HTMLSelectElement).value = this._modeEntryId; return; }
      guardMode();
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
      el.querySelectorAll('[data-edit-sensor-delay]').forEach(btn =>
        btn.addEventListener('click', () => this._openSensorDelayModal(btn.dataset.editSensorDelay))
      );
      el.querySelector('#save-mode')?.addEventListener('click', () => this._saveMode());
    }
    el.querySelectorAll<HTMLSelectElement>('[data-output-mode]').forEach(input => input.addEventListener('change', () => {
      if (!this._isAdmin) return;
      const id = input.dataset.outputMode;
      const kind = input.dataset.outputKind;
      const current = this._currentModeConfig();
      const key = kind === 'tone' ? 'siren_settings' : 'light_siren_settings';
      current[key] = {...(current[key] || {}), [id]: {...(current[key]?.[id] || {})}};
      if (input.value) current[key][id][kind] = input.value;
      else delete current[key][id][kind];
      this._ui.modes.__by_entity__[this._modeEntryId][this._mode] = current;
    }));
    this._renderModeZoneSummary(el.querySelector('#mode-zone-summary'));

    this._ensureModeDraftBaseline();
  }

  _zoneEntryId() {
    return this._dashboard?.entries?.find((entry: any) => entry.entity_id === this._modeEntryId)?.entry_id
      || this._dashboard?.entry_id;
  }

  _renderModeZoneSummary(container: HTMLElement | null) {
    if (!container) return;
    if (this._ui?.zones_enabled === false) {
      const cfg = this._currentModeConfig();
      container.innerHTML = `<div class="mode-section-title">Sensores</div><p class="small">Sensores asignados a este modo, incluidos los conservados de tu configuración anterior.</p><div class="mode-sensor-grid">${(cfg.sensors || []).map(id => this._chip(id, 'sensor')).join('') || '<div class="mode-sensor-none">Ninguno seleccionado</div>'}</div><p class="small">Puertas, ventanas, movimiento, humo, gas, garaje y otros sensores publicados en Home Assistant. Los sensores numéricos e informativos conservan su estado; seleccionarlos no crea una regla de alarma por umbral.</p>${this._isAdmin ? '<button type="button" class="ghost" data-add-mode-sensors>＋ Agregar sensores</button>' : ''}`;
      container.querySelector('[data-add-mode-sensors]')?.addEventListener('click', () => this._openModal('sensor'));
      container.querySelectorAll('[data-remove]').forEach(btn => btn.addEventListener('click', () => this._removeChip(btn.dataset.remove)));
      container.querySelectorAll('[data-edit-sensor-delay]').forEach(btn => btn.addEventListener('click', () => this._openSensorDelayModal(btn.dataset.editSensorDelay)));
      return;
    }
    if (!this._zonesLoaded) {
      container.innerHTML = '<div class="mode-section-title">🛡️ Zonas asignadas</div><p class="small">Cargando zonas…</p>';
      this._loadZones();
      return;
    }
    const assigned = (this._zonesEnabled ? this._zoneList : []).filter((zone: any) => zone.enabled !== false && (zone.modes || []).includes(this._mode));
    const orphanSensors = (this._currentModeConfig().sensors || []).filter((id: string) => !this._zoneList.some((zone: any) => zone.entity_ids?.includes(id)));
    container.innerHTML = `<div class="mode-section-title">🛡️ Zonas asignadas a este modo</div>${assigned.length
      ? `<div class="mode-zone-summary-items${assigned.length > 1 ? ' is-scrollable' : ''}">${assigned.map((zone: any) => `<div class="mode-zone-assigned"><strong>Zona ${this._escapeHtml(zone.number)}</strong><span>${this._escapeHtml(zone.area || zone.name)} · ${(zone.entity_ids || []).length} sensor${(zone.entity_ids || []).length === 1 ? '' : 'es'}</span></div>`).join('')}</div>`
      : `<p class="small">${this._zonesEnabled ? 'No hay zonas asignadas a este modo. Configúralas en la pestaña Zonas.' : 'Zonas desactivadas. Se conservan los sensores configurados por modo. Puedes activarlas en la pestaña Zonas.'}</p>`}`;
    if (orphanSensors.length) container.insertAdjacentHTML('beforeend', `<div class="mode-section-title">Sensores activos sin zona</div><p class="small">Se mantienen protegidos. Abre una zona e importa los sensores del modo actual para revisar su asignación.</p><div class="mode-sensor-grid">${orphanSensors.map((id: string) => this._chip(id, 'sensor')).join('')}</div>`);
  }

  _guardZoneDraft(continueTo: () => void): boolean {
    const original = this._zoneList.find((zone: any) => zone.id === this._zoneOpenId);
    if (!this._zoneDraft || JSON.stringify(this._zoneDraft) === JSON.stringify(original)) return true;
    this._zoneDecision = continueTo;
    this._renderZones(this.shadowRoot.getElementById('argus-zone-editor'));
    return false;
  }

  async _saveZoneDraft(): Promise<boolean> {
    if (!this._zoneDraft) return true;
    const zone = this._zoneDraft;
    zone.name = `Zona ${zone.number}`;
    zone.sensor_settings = zone.sensor_settings || {};
    for (const entityId of zone.entity_ids || []) {
      if (!zone.sensor_settings[entityId]) zone.sensor_settings[entityId] = this._zoneSettingForSensor(entityId);
    }
    const next = [...this._zoneList.filter((item: any) => item.id !== zone.id), zone].sort((a: any, b: any) => a.number - b.number);
    try {
      const result = await this._send('argus/save_zones', {entry_id: this._zoneEntryId(), zones: next});
      this._zoneList = result.zones || next;
      this._ui.zones = this._zonesEnabled ? this._zoneList : [];
      if (result.modes) this._ui.modes = result.modes;
      this._zoneDraft = structuredClone(this._zoneList.find((item: any) => item.id === zone.id));
      this._renderZones(this.shadowRoot.getElementById('argus-zone-editor'));
      this._renderEntries(); this.dispatchEvent(new CustomEvent('argus-state-update'));
      return true;
    } catch (err) {
      this._setZoneError(`No se guardó: ${err.message || err}`);
      return false;
    }
  }

  _setZoneError(message: string) {
    const status = this.shadowRoot.querySelector('#argus-zone-editor .zone-status');
    if (status) status.textContent = message;
  }

  _zoneSettingForSensor(entityId: string) {
    const current = this._currentModeConfig();
    const existing = current.sensor_settings?.[entityId];
    const isLegacyEntry = Array.isArray(current.entry_sensors) && current.entry_sensors.includes(entityId);
    const inheritedDelay = isLegacyEntry ? Number(current.entry_delay ?? 0) : 0;
    if (existing && typeof existing === 'object') {
      const delay = existing.delay === undefined || existing.delay === null
        ? (existing.type === 'instant' ? 0 : inheritedDelay) : Number(existing.delay);
      return {
        condition: existing.condition || 'open',
        delay: Number.isFinite(delay) ? Math.max(0, delay) : 0,
        delay_unit: existing.delay_unit === 'minutes' ? 'minutes' : 'seconds',
      };
    }
    // Preserve a configured legacy entry delay when its sensor is migrated
    // into a zone. The mode editor no longer exposes this global control.
    return { condition: 'open', delay: Number.isFinite(inheritedDelay) ? Math.max(0, inheritedDelay) : 0, delay_unit: 'seconds' };
  }

  _renderZoneActivation(container: HTMLElement) {
    container.insertAdjacentHTML('afterbegin', `<label class="zone-field"><span>Activar zonas</span><input type="checkbox" data-zones-enabled ${this._zonesEnabled ? 'checked' : ''} ${this._isAdmin ? '' : 'disabled'}></label><p class="zone-help">${this._zonesEnabled ? 'Las zonas guardadas determinan los sensores y condiciones de cada modo.' : 'Argus utiliza la configuración anterior de sensores por modo. Activa zonas para configurarlas aquí.'}</p>`);
    container.querySelector<HTMLInputElement>('[data-zones-enabled]')?.addEventListener('change', async (event) => {
      const input = event.target as HTMLInputElement;
      const enabled = input.checked;
      input.checked = this._zonesEnabled;
      if (!this._guardZoneDraft(() => {})) return;
      input.disabled = true;
      try {
        const result = await this._send('argus/save_zones', {entry_id: this._zoneEntryId(), zones: this._zoneList, zones_enabled: enabled});
        this._zonesEnabled = result.zones_enabled === true;
        this._zoneList = result.zones || [];
        this._ui.zones_enabled = this._zonesEnabled;
        this._ui.zones = this._zonesEnabled ? this._zoneList : [];
        if (result.modes) this._ui.modes = result.modes;
        this._zoneDraft = null; this._zoneOpenId = null;
        this._renderZones(container);
        this._renderModeZoneSummary(this.shadowRoot.getElementById('mode-zone-summary'));
        this._renderEntries(); this.dispatchEvent(new CustomEvent('argus-state-update'));
      } catch (error) {
        input.disabled = false;
        this._setZoneError(error.message || String(error));
      }
    });
  }

  _renderZones(container: HTMLElement | null) {
    if (!container) return;
    const scrollTargets = [container, ...Array.from(container.querySelectorAll<HTMLElement>('.zone-sensor-list'))];
    const scrollPositions = scrollTargets.map(el => el.scrollTop);
    const parentScroll: [HTMLElement, number][] = [];
    for (let node = container.parentElement; node; node = node.parentElement) parentScroll.push([node, node.scrollTop]);
    const previousSearch = container.querySelector<HTMLInputElement>('[data-zone-search]')?.value || '';
    const focusedSensor = (this.shadowRoot.activeElement as HTMLElement)?.dataset?.zoneSensor;

    if (!this._zonesLoaded) {
      container.innerHTML = '<div class="mode-section-title">🛡️ Zonas</div><p class="small">Cargando zonas…</p>';
      this._loadZones();
      return;
    }
    if (!this._zonesEnabled) {
      container.innerHTML = '<div class="zone-status small" role="status"></div>';
      this._renderZoneActivation(container);
      return;
    }
    const zones = [...this._zoneList];
    if (this._zoneDraft && !zones.some((zone: any) => zone.id === this._zoneDraft.id)) zones.push(this._zoneDraft);
    zones.sort((a: any, b: any) => (a.number || 0) - (b.number || 0));
    const ownAreas = [...new Set(zones.map((zone: any) => zone.area).filter(Boolean))];
    const draft = this._zoneDraft;
    const dirty = draft && JSON.stringify(draft) !== JSON.stringify(this._zoneList.find((zone: any) => zone.id === draft.id));
    const activeEntityId = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || 'default';
    const modeConfigs = Object.values(this._ui?.modes?.__by_entity__?.[activeEntityId] || this._ui?.modes || {}) as any[];
    const legacySensors = [...new Set(modeConfigs.flatMap((config: any) => Array.isArray(config?.sensors) ? config.sensors : []))];
    const modeEntries = Object.entries(this._ui?.modes?.__by_entity__?.[activeEntityId] || this._ui?.modes || {}).filter(([key]) => ['disarmed', 'home', 'away', 'night'].includes(key));
    const sensorIds = [...new Set([...legacySensors, ...(draft?.entity_ids || []), ...(this._zoneEntities || []).map((entity: any) => entity.entity_id)])];
    const zoneEntities = sensorIds.filter(id => isModeSensor(id) || draft?.entity_ids?.includes(id)).map(id => (this._zoneEntities || []).find((entity: any) => entity.entity_id === id) || {
      entity_id: id, name: this._hass?.states?.[id]?.attributes?.friendly_name || id,
      state: this._hass?.states?.[id]?.state || 'unavailable',
      device_class: this._hass?.states?.[id]?.attributes?.device_class,
    });
    const unassigned = legacySensors.filter((id: string) => !zones.some((zone: any) => zone.entity_ids?.includes(id)));
    container.innerHTML = `
      <div class="zone-editor-title">🛡️ Zonas</div>
      <p class="zone-help">${zones.length} de 10 zonas · Máximo 10. Cada cristal conserva su número; personaliza el área y asígnale sensores y modos.</p>
      <p class="zone-help">La condición y el retardo de cada sensor se comparten entre todos los modos elegidos para esa zona.</p>
      ${unassigned.length ? `<p class="zone-help" style="color:#ffcc80">${unassigned.length} sensores anteriores siguen activos en este modo sin zona. Asígnalos antes de completar la migración.</p>` : ''}
      ${this._zoneDecision ? `<div class="zone-decision"><strong>Hay cambios sin guardar.</strong><div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px"><button class="primary" data-zone-decision="save">Guardar y continuar</button><button class="ghost" data-zone-decision="discard">Descartar y continuar</button><button class="ghost" data-zone-decision="stay">Seguir editando</button></div></div>` : ''}
      ${zones.map((zone: any) => `<div class="zone-item">
        <button type="button" class="zone-toggle" data-zone-open="${this._escapeHtml(zone.id)}" aria-expanded="${zone.id === this._zoneOpenId}"><span>Zona ${zone.number} · ${this._escapeHtml(zone.area || 'Sin área')}</span><span>${zone.id === this._zoneOpenId ? '⌃' : '⌄'}</span></button>
        ${zone.id === this._zoneOpenId && draft ? `<div class="zone-form">
          <div class="zone-number-lock"><span>CRISTAL DE SEGURIDAD</span><strong>ZONA ${zone.number}</strong><small>El número de zona es fijo</small></div>
          <label class="zone-field">Área personalizable<input data-zone-field="area" list="argus-zone-areas" value="${this._escapeHtml(draft.area || '')}" maxlength="80" placeholder="Ej. Cocina"></label>
          <datalist id="argus-zone-areas">${ownAreas.map((area: string) => `<option value="${this._escapeHtml(area)}"></option>`).join('')}</datalist>
          <fieldset class="zone-mode-fieldset"><legend>Activar zona en</legend><div class="zone-mode-options">${['disarmed','home','away','night'].map((mode: string) => `<label class="zone-mode-chip"><input type="checkbox" data-zone-mode="${mode}" ${draft.modes?.includes(mode) ? 'checked' : ''}> ${({disarmed:'Desarmado',home:'En Casa',away:'Ausente',night:'Noche'} as any)[mode]}</label>`).join('')}</div></fieldset>
          <label class="zone-field">Sensores de esta zona<input class="zone-sensor-search" type="search" data-zone-search placeholder="Buscar por nombre o entidad"></label>
          <div class="zone-sensor-list">${zoneEntities.map((entity: any) => {
            const assignedElsewhere = zones.find((other: any) => other.id !== draft.id && other.entity_ids?.includes(entity.entity_id));
            const checked = draft.entity_ids?.includes(entity.entity_id);
            const sourceModes = modeEntries.filter(([, config]: any) => (config?.sensors || []).includes(entity.entity_id));
            const modeLabel = sourceModes.map(([key]) => ({disarmed:'Desarmado',home:'En Casa',away:'Ausente',night:'Noche'}[key] || key)).join(', ');
            const settings = draft.sensor_settings?.[entity.entity_id] || this._zoneSettingForSensor(entity.entity_id);
            const deviceClass = String(entity.device_class || '').toLowerCase();
            const canMotion = ['motion', 'occupancy', 'presence', 'moving'].includes(deviceClass);
            const canDetect = ['smoke', 'gas', 'carbon_monoxide', 'heat', 'safety', 'problem', 'moisture'].includes(deviceClass);
            const conditions = [
              ['open', 'Abrir / activar'], ['close', 'Cerrar'],
              ...(canMotion ? [['motion', 'Movimiento']] : []),
              ...(canDetect ? [['detected', `Detectar ${deviceClass}`]] : []),
            ];
            const unit = settings.delay_unit === 'minutes' ? 'minutes' : 'seconds';
            const waitingFor = settings.condition === 'close' ? 'cerrado' : 'abierto';
            const delayValue = settings.delay ? (unit === 'minutes' ? Math.max(1, Math.round(settings.delay / 60)) : settings.delay) : 0;
            return `<div class="zone-sensor-row" data-zone-sensor-row="${this._escapeHtml((entity.name || entity.entity_id).toLowerCase())} ${this._escapeHtml(entity.entity_id.toLowerCase())}"><label class="zone-sensor-heading"><input type="checkbox" data-zone-sensor="${this._escapeHtml(entity.entity_id)}" ${checked ? 'checked' : ''} ${assignedElsewhere || !this._isAdmin ? 'disabled' : ''}> <span><strong>${this._escapeHtml(entity.name || entity.entity_id)}</strong><small>${this._escapeHtml(entity.entity_id)} · ${this._escapeHtml(entity.state || '')}${modeLabel ? ' · Modos: ' + this._escapeHtml(modeLabel) : ''}</small></span></label>${assignedElsewhere ? `<small class="zone-assigned-note">Asignado a Zona ${assignedElsewhere.number}</small>` : ''}${checked ? `<div class="zone-sensor-settings">
              <div class="zone-config-group"><span class="zone-config-title">Disparar cuando</span><div class="zone-option-group">${conditions.map(([value, label]) => `<button type="button" class="zone-choice ${settings.condition === value ? 'is-selected' : ''}" data-zone-condition="${this._escapeHtml(entity.entity_id)}" data-zone-value="${value}" aria-pressed="${settings.condition === value}">${label}</button>`).join('')}</div></div>
              <div class="zone-config-group"><span class="zone-config-title">Tiempo de respuesta</span><div class="zone-option-group"><button type="button" class="zone-choice ${!settings.delay ? 'is-selected' : ''}" data-zone-delay-mode="instant" data-zone-delay-sensor="${this._escapeHtml(entity.entity_id)}" aria-pressed="${!settings.delay}">⚡ Instantáneo</button><button type="button" class="zone-choice ${settings.delay ? 'is-selected' : ''}" data-zone-delay-mode="wait" data-zone-delay-sensor="${this._escapeHtml(entity.entity_id)}" aria-pressed="${Boolean(settings.delay)}">⏱ Con espera de ${waitingFor}</button></div>
              ${settings.delay ? `<label class="zone-delay-field">Esperar con el sensor ${waitingFor} durante <input type="number" data-zone-delay="${this._escapeHtml(entity.entity_id)}" min="1" max="${unit === 'minutes' ? 60 : 3600}" value="${delayValue}" inputmode="numeric"><span class="zone-unit-group"><button type="button" class="zone-unit ${unit === 'seconds' ? 'is-selected' : ''}" data-zone-delay-unit="seconds" data-zone-delay-sensor="${this._escapeHtml(entity.entity_id)}">segundos</button><button type="button" class="zone-unit ${unit === 'minutes' ? 'is-selected' : ''}" data-zone-delay-unit="minutes" data-zone-delay-sensor="${this._escapeHtml(entity.entity_id)}">minutos</button></span></label>` : ''}</div>
              <p class="zone-sensor-hint">Al cerrar el sensor, Argus cancela una espera de apertura; una alarma ya disparada permanece activa hasta desarmarla manualmente.</p>
            </div>` : ''}</div>`;
          }).join('')}</div>
          ${this._isAdmin ? '<div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="primary" data-zone-save>Guardar zona</button><button type="button" class="ghost" data-zone-delete>Eliminar zona</button></div>' : ''}
        </div>` : ''}
      </div>`).join('')}
      ${this._isAdmin && zones.length < 10 ? '<button type="button" class="ghost" data-zone-add>＋ Agregar zona</button>' : ''}
      <div class="zone-status small" role="status" style="margin-top:9px"></div>`;
    this._renderZoneActivation(container);
    container.querySelectorAll<HTMLElement>('[data-zone-open]').forEach(button => button.addEventListener('click', () => {
      const id = button.dataset.zoneOpen;
      const open = () => { this._zoneOpenId = id === this._zoneOpenId ? null : id; this._zoneDraft = this._zoneOpenId ? structuredClone(zones.find((zone: any) => zone.id === id)) : null; this._zoneDecision = null; this._renderZones(container); };
      if (this._guardZoneDraft(open)) open();
    }));
    container.querySelector('[data-zone-add]')?.addEventListener('click', () => {
      const number = Array.from({length:10}, (_, i) => i + 1).find(n => !zones.some((zone: any) => zone.number === n));
      const add = () => { this._zoneDraft = {id: crypto.randomUUID(), number, name: `Zona ${number}`, area:'', modes:[], entity_ids:[], device_ids:[], enabled:true, sensor_settings:{}}; this._zoneOpenId = this._zoneDraft.id; this._zoneDecision = null; this._renderZones(container); };
      if (this._guardZoneDraft(add)) add();
    });
    container.querySelectorAll<HTMLElement>('[data-zone-field]').forEach(input => input.addEventListener('input', () => {this._zoneDraft[input.dataset.zoneField] = (input as HTMLInputElement).value;}));
    container.querySelectorAll<HTMLInputElement>('[data-zone-mode]').forEach(input => input.addEventListener('change', () => {this._zoneDraft.modes = [...container.querySelectorAll<HTMLInputElement>('[data-zone-mode]:checked')].map(item => item.dataset.zoneMode);}));
    container.querySelector<HTMLInputElement>('[data-zone-search]')?.addEventListener('input', (ev: Event) => {
      const term = (ev.target as HTMLInputElement).value.toLowerCase();
      container.querySelectorAll<HTMLElement>('[data-zone-sensor-row]').forEach(row => {row.hidden = !row.dataset.zoneSensorRow.includes(term);});
    });
    container.querySelectorAll<HTMLInputElement>('[data-zone-sensor]').forEach(input => input.addEventListener('change', () => {
      const id = input.dataset.zoneSensor;
      this._zoneDraft.entity_ids = input.checked ? [...new Set([...this._zoneDraft.entity_ids, id])] : this._zoneDraft.entity_ids.filter((item: string) => item !== id);
      this._zoneDraft.sensor_settings = this._zoneDraft.sensor_settings || {};
      if (input.checked) this._zoneDraft.sensor_settings[id] = this._zoneSettingForSensor(id); else delete this._zoneDraft.sensor_settings[id];
      this._renderZones(container);
    }));
    container.querySelectorAll<HTMLButtonElement>('[data-zone-condition]').forEach(button => button.addEventListener('click', () => {
      const settings = this._zoneDraft.sensor_settings[button.dataset.zoneCondition];
      settings.condition = button.dataset.zoneValue;
      this._renderZones(container);
    }));
    container.querySelectorAll<HTMLButtonElement>('[data-zone-delay-mode]').forEach(button => button.addEventListener('click', () => {
      const settings = this._zoneDraft.sensor_settings[button.dataset.zoneDelaySensor];
      settings.delay = button.dataset.zoneDelayMode === 'instant' ? 0 : Math.max(1, Number(settings.delay) || 10);
      this._renderZones(container);
    }));
    container.querySelectorAll<HTMLInputElement>('[data-zone-delay]').forEach(input => input.addEventListener('change', () => {
      const settings = this._zoneDraft.sensor_settings[input.dataset.zoneDelay];
      const value = Math.max(1, Number(input.value) || 1);
      settings.delay = Math.min(3600, Math.round(value * (settings.delay_unit === 'minutes' ? 60 : 1)));
    }));
    container.querySelectorAll<HTMLButtonElement>('[data-zone-delay-unit]').forEach(button => button.addEventListener('click', () => {
      const settings = this._zoneDraft.sensor_settings[button.dataset.zoneDelaySensor];
      settings.delay_unit = button.dataset.zoneDelayUnit;
      this._renderZones(container);
    }));
    container.querySelector('[data-zone-save]')?.addEventListener('click', () => this._saveZoneDraft());
    container.querySelector('[data-zone-delete]')?.addEventListener('click', async () => {
      if (!confirm(`¿Eliminar Zona ${draft.number}? Sus sensores dejarán de pertenecer a esta zona.`)) return;
      if (!this._zoneList.some((zone: any) => zone.id === draft.id)) {this._zoneDraft = null; this._zoneOpenId = null; this._renderZones(container); return;}
      try {
        const result = await this._send('argus/save_zones', {entry_id: this._zoneEntryId(), zones: this._zoneList.filter((zone: any) => zone.id !== draft.id)});
        this._zoneList = result.zones; this._ui.zones = this._zonesEnabled ? this._zoneList : [];
        if (result.modes) this._ui.modes = result.modes;
        this._zoneDraft = null; this._zoneOpenId = null; this._renderZones(container);
        this._renderEntries(); this.dispatchEvent(new CustomEvent('argus-state-update'));
      } catch (err) {this._setZoneError(`No se eliminó: ${err.message || err}`);}
    });
    container.querySelectorAll<HTMLElement>('[data-zone-decision]').forEach(button => button.addEventListener('click', async () => {
      const action = button.dataset.zoneDecision;
      if (action === 'stay') {this._zoneDecision = null; this._renderZones(container); return;}
      if (action === 'save' && !(await this._saveZoneDraft())) return;
      const next = this._zoneDecision; this._zoneDecision = null; this._zoneDraft = null; this._zoneOpenId = null;
      next?.();
    }));
    const search = container.querySelector<HTMLInputElement>('[data-zone-search]');
    if (search) {
      search.value = previousSearch;
      search.dispatchEvent(new Event('input'));
    }
    if (focusedSensor) Array.from(container.querySelectorAll<HTMLInputElement>('[data-zone-sensor]')).find(el => el.dataset.zoneSensor === focusedSensor)?.focus({preventScroll: true});
    [container, ...Array.from(container.querySelectorAll<HTMLElement>('.zone-sensor-list'))].forEach((el, index) => { el.scrollTop = scrollPositions[index] || 0; });
    parentScroll.forEach(([el, top]) => { el.scrollTop = top; });

  }

  _loadZones() {
    if (this._zonesLoaded || this._zonesLoading) return;
    this._zonesLoading = true;
    const entryId = this._zoneEntryId();
    this._send('argus/get_zones', {entry_id: entryId}).then((result: any) => {
      this._zonesEnabled = result.zones_enabled === true;
      this._zoneList = result.zones || [];
      this._zoneEntities = (result.available_entities || []).filter((item: any) => ['binary_sensor', 'sensor', 'lock'].includes(item.domain));
      this._zonesLoaded = true; this._zonesLoading = false;
      if (this._ui) { this._ui.zones = this._zonesEnabled ? this._zoneList : []; this._ui.zones_enabled = this._zonesEnabled; }
      this._renderZones(this.shadowRoot.getElementById('argus-zone-editor'));
      this._renderModeZoneSummary(this.shadowRoot.getElementById('mode-zone-summary'));
    }).catch((err: any) => {
      this._zonesLoading = false;
      const editor = this.shadowRoot.getElementById('argus-zone-editor');
      if (editor) editor.innerHTML = `<div class="mode-section-title">🛡️ Zonas</div><p class="small">No se pudieron cargar las zonas: ${this._escapeHtml(err.message || String(err))}</p>`;
      const summary = this.shadowRoot.getElementById('mode-zone-summary');
      if (summary) summary.innerHTML = `<div class="mode-section-title">🛡️ Zonas asignadas</div><p class="small">No se pudieron cargar las zonas: ${this._escapeHtml(err.message || String(err))}</p>`;
    });
  }

  _renderVoiceSettings(container: HTMLElement) {
    const details = document.createElement('section');
    details.className = 'mode-section-card argus-mode-voice-card';
    details.style.cssText = 'border-radius:18px;padding:16px;box-sizing:border-box';
    details.innerHTML = `<h3>Voz de Argus · Configuración general</h3><div class="argus-voice-body small" style="padding-top:12px">Configura la voz una sola vez para todos los modos.</div>`;
    const voiceSlot = container.querySelector('#mode-voice-slot');
    (voiceSlot || container).append(details);
    const loadVoice = async () => {
      if ((details as any).__voiceLoaded) return;
      const body = details.querySelector('.argus-voice-body') as HTMLElement;
      body.textContent = 'Cargando…';
      try {
        const data = await this._send('argus/get_voice_config', {entry_id: this._zoneEntryId()});
        if (!details.isConnected) return;
        (details as any).__voiceLoaded = true;
        const values = data.values || {};
        const yaml = new Set<string>(Array.isArray(data.yaml_keys) ? data.yaml_keys : []);
        const defaultMessages = data.default_messages || {};
        const messageRules = data.message_rules || {};
        const assignedZones = Array.isArray(data.assigned_zones) ? data.assigned_zones : [];
        const modeNames: Record<string, string> = {disarmed: 'Desarmado', home: 'En Casa', away: 'Ausente', night: 'Noche', sos: 'SOS'};
        const modeName = 'En Casa (ejemplo)';
        const enabledKey = 'arming_voice_enabled';
        const ttsKey = 'arming_voice_tts';
        const playersKey = 'arming_voice_players';
        const selected = new Set((Array.isArray(values[playersKey]) ? values[playersKey] : []).slice(0, 5));
        const playerRows = (players: any[]) => {
          const listed = Array.isArray(players) ? players : [];
          const known = new Set(listed.map((item: any) => item.entity_id));
          const rows = [
            ...listed,
            ...[...selected].filter(entityId => !known.has(entityId)).map(entity_id => ({
              entity_id,
              name: entity_id,
              available: false,
              previouslySelected: true,
            })),
          ];
          return rows.length
            ? rows.map((item: any) => `<label style="display:flex;gap:8px;align-items:center;margin:7px 0"><input type="checkbox" data-voice-player="${this._escapeHtml(item.entity_id)}" ${selected.has(item.entity_id) ? 'checked' : ''} ${locked(playersKey)}> <span>${this._escapeHtml(item.name)}<small style="display:block;opacity:.72">${this._escapeHtml(item.entity_id)}${item.available === false ? ' · Sin estado actual o ya no disponible' : ''}</small></span></label>`).join('')
            : '<p class="small" style="margin:4px 0">Home Assistant no entregó entidades de reproductor. Configura la integración y vuelve a actualizar.</p>';
        };
        const locked = (_key: string) => '';
        const messageFields = [
          ['arming_voice_message_start', 'Al comenzar el armado', 'Dice qué zonas de este modo siguen abiertas.'],
          ['arming_voice_message_remaining', 'Cada vez que se cierra un sensor', 'Confirma el cierre y nombra lo que todavía sigue abierto.'],
          ['arming_voice_message_last', 'Cuando queda un sensor abierto', 'Se usa si, al cerrar un sensor, queda exactamente otro pendiente.'],
          ['arming_voice_message_complete', 'Cuando todas las zonas están cerradas', 'Confirma que ya puede armarse en el modo elegido.'],
          ['arming_voice_message_armed', 'Cuando termina el armado', 'Confirma que Argus ya quedó armado.'],
          ['arming_voice_message_disarmed', 'Al desarmar', 'Se anuncia después de que el servidor confirma el desarmado.'],
          ['arming_voice_message_cancelled', 'Si se cancela el armado', 'Avisa que se canceló el armado en espera.'],
          ['arming_voice_message_triggered', 'Cuando se activa la alarma', 'Nombra las zonas y sensores que la activaron.'],
          ['arming_voice_message_additional_triggered', 'Si se abre otro sensor durante la alarma', 'Nombra el nuevo sensor y confirma que la alarma sigue activa.'],
          ['arming_voice_message_alarm_sensor_closed', 'Si se cierra un sensor durante la alarma', 'Confirma el cierre; la alarma solo se apaga al desarmar Argus.'],
        ];
        const sampleZoneSensorRows = assignedZones.flatMap((zone: any) => (zone.sensors || []).map((sensor: any) => ({
          zoneNumber: zone.number,
          entityId: sensor.entity_id,
          state: sensor.state,
          spokenName: `${zone.area ? `Zona de ${zone.area}` : 'Zona sin área'}, sensor ${sensor.name}`,
        })));
        // The live open/closed state is shown above. Message previews use a
        // clearly labelled example so defaults remain understandable even
        // when every real sensor happens to be closed.
        const exampleRows = sampleZoneSensorRows;
        const exampleZoneCount = new Set(exampleRows.map((row: any) => row.zoneNumber)).size;
        const countLabel = (count: number, singular: string, plural: string) => `${count} ${count === 1 ? singular : plural}`;
        const sampleSensors = exampleRows.map((row: any) => `${row.spokenName} sigue abierto`);
        const sampleAlarmSensors = exampleRows.map((row: any) => `${row.spokenName} abierto`);
        const joinSpokenItems = (items: string[]) => {
          const clean = items.filter(Boolean);
          if (clean.length < 2) return clean[0] || '';
          if (clean.length === 2) return `${clean[0]} y ${clean[1]}`;
          return `${clean.slice(0, -1).join(', ')} y ${clean[clean.length - 1]}`;
        };
        const sampleValues: Record<string, string> = {
          count: String(exampleRows.length),
          total: String(exampleRows.length),
          zone_count: String(exampleZoneCount),
          zone_count_label: countLabel(exampleZoneCount, 'zona', 'zonas'),
          sensor_count_label: countLabel(exampleRows.length, 'sensor', 'sensores'),
          sensor_open_agreement: exampleRows.length === 1 ? 'abierto' : 'abiertos',
          sensors: joinSpokenItems(sampleSensors) || 'ninguno',
          closed: exampleRows[0] ? `${exampleRows[0].spokenName} se cerró` : 'el sensor de la zona se cerró',
          opened: exampleRows[0] ? `${exampleRows[0].spokenName} se abrió` : 'el sensor de la zona se abrió',
          sensor: exampleRows[0] ? `${exampleRows[0].spokenName} abierto` : 'el sensor que se abra',
          mode: modeName,
          home: 'hogar',
        };
        const previewDefault = (key: string) => {
          const eventMessage = key === 'arming_voice_message_triggered' || key === 'arming_voice_message_additional_triggered';
          if (!exampleRows.length) return 'Este modo no tiene sensores asignados para incluir en el aviso.';
          if (key === 'arming_voice_message_last' && exampleRows.length < 2) {
            return 'Este aviso se usa cuando queda exactamente un sensor pendiente después de cerrar otro. Con menos de dos sensores asignados, Argus usará el aviso de zonas cerradas.';
          }
          if (key === 'arming_voice_message_remaining' && exampleRows.length === 1) {
            return this._escapeHtml(String(defaultMessages.arming_voice_message_complete || ''))
              .replace(/\{([a-z_]+)\}/gi, (_match: string, name: string) => this._escapeHtml(sampleValues[name] || `{${name}}`));
          }
          const hasCloseEvent = key === 'arming_voice_message_remaining' || key === 'arming_voice_message_alarm_sensor_closed';
          const closedRow = hasCloseEvent || key === 'arming_voice_message_last' ? exampleRows[0] : undefined;
          const remainingRows = hasCloseEvent
            ? exampleRows.slice(1)
            : key === 'arming_voice_message_last'
              ? [exampleRows[exampleRows.length - 1]]
              : exampleRows;
          const remainingZones = new Set(remainingRows.map((row: any) => row.zoneNumber)).size;
          const previewValues = hasCloseEvent || key === 'arming_voice_message_last'
            ? {
              ...sampleValues,
              count: String(remainingRows.length),
              zone_count: String(remainingZones),
              zone_count_label: countLabel(remainingZones, 'zona', 'zonas'),
              sensor_count_label: countLabel(remainingRows.length, 'sensor', 'sensores'),
              sensor_open_agreement: remainingRows.length === 1 ? 'abierto' : 'abiertos',
              sensors: joinSpokenItems(remainingRows.map((row: any) => `${row.spokenName} sigue abierto`)) || 'ninguno',
              closed: closedRow ? `${closedRow.spokenName} se cerró` : 'el sensor de la zona se cerró',
              sensor: closedRow ? `${closedRow.spokenName} se cerró` : 'el sensor de la zona se cerró',
              open_status: remainingRows.length
                ? `Hay ${countLabel(remainingZones, 'zona', 'zonas')} con ${countLabel(remainingRows.length, 'sensor', 'sensores')} ${remainingRows.length === 1 ? 'abierto' : 'abiertos'}: ${joinSpokenItems(remainingRows.map((row: any) => `${row.spokenName} sigue abierto`))}.`
                : 'Ya no quedan sensores abiertos.',
              }
            : eventMessage
              ? {
                ...sampleValues,
                sensors: joinSpokenItems(sampleAlarmSensors) || 'ninguno',
                sensor: sampleAlarmSensors[0] || 'el sensor que se abra',
              }
              : sampleValues;
          return this._escapeHtml(String(defaultMessages[key] || ''))
            .replace(/\{([a-z_]+)\}/gi, (_match: string, name: string) => this._escapeHtml(previewValues[name] || `{${name}}`));
        };
        const zonePreview = assignedZones.length
          ? `<div class="argus-voice-zone-list">${assignedZones.map((zone: any) => `<section class="argus-voice-zone"><strong>Zona ${this._escapeHtml(zone.number)}${zone.area ? ` · ${this._escapeHtml(zone.area)}` : ' · Sin área'}</strong><ul>${(zone.sensors || []).map((sensor: any) => `<li class="argus-voice-sensor-row" data-voice-zone-sensor="${this._escapeHtml(sensor.entity_id)}" data-fallback-state="${this._escapeHtml(sensor.state || 'unknown')}"><span class="argus-voice-state-dot" aria-hidden="true"></span><span class="argus-voice-sensor-name">${this._escapeHtml(sensor.name)}</span><span class="argus-voice-sensor-state">${this._voiceZoneStateLabel(sensor.state)}</span></li>`).join('') || '<li>Sin sensores asignados</li>'}</ul></section>`).join('')}</div>`
          : '<p class="small">No hay zonas activas. Argus utiliza los sensores configurados en cada modo.</p>';
        body.innerHTML = `
          ${data.imported_existing_settings ? '<p class="argus-voice-import-note">Se importó tu configuración de voz anterior. Desde ahora puedes editarla aquí sin perder los mensajes y reproductores que ya tenías.</p>' : ''}
          <section class="argus-voice-zone-preview mode-section-card"><strong>🛡️ Zonas configuradas · Todos los modos</strong><p class="small">Configuración única para todos los modos. En cada acción, Argus menciona solo los sensores asignados al modo que estás utilizando. Estado actual: <span class="argus-voice-open-key"><i></i> Abierto</span> · <span class="argus-voice-closed-key"><i></i> Cerrado</span></p>${zonePreview}</section>
          <label style="display:flex;gap:8px;align-items:center"><input type="checkbox" data-voice="${enabledKey}" ${values[enabledKey] ? 'checked' : ''} ${locked(enabledKey)}> Activar avisos de voz</label>
          <label style="display:block;margin-top:12px">Motor TTS
            <select class="glass-control" data-voice="${ttsKey}" ${locked(ttsKey)} style="display:block;width:100%;margin-top:5px;border-radius:12px">
              <option value="">${(data.tts_entities || []).length ? 'Seleccionar motor disponible en Home Assistant' : 'No hay motores TTS disponibles en Home Assistant'}</option>
              ${(data.tts_entities || []).map((item: any) => `<option value="${this._escapeHtml(item.entity_id)}" ${item.entity_id === values[ttsKey] ? 'selected' : ''}>${this._escapeHtml(item.name)}</option>`).join('')}
            </select>
          </label>
          <fieldset style="border:1px solid rgba(255,255,255,.15);border-radius:12px;margin:12px 0;padding:10px"><legend>Reproductores · hasta 5</legend>
            <p class="small">Elige hasta cinco; Argus anunciará en todos al mismo tiempo. <span id="argus-player-count">${selected.size} de 5 seleccionados</span></p>
            <p class="small">Google Cast, Alexa Media y Apple TV/AirPlay aparecen cuando Home Assistant los expone como reproductores. JACK también debe estar expuesto como una entidad <code>media_player</code>.</p>
            <button type="button" id="argus-refresh-players" class="secondary" style="margin:4px 0 8px">↻ Actualizar reproductores de Home Assistant</button>
            <div id="argus-player-list" style="max-height:190px;overflow:auto;overscroll-behavior-y:auto;touch-action:pan-y;-webkit-overflow-scrolling:touch">
              ${playerRows(data.media_players || [])}
            </div>
          </fieldset>
          <details><summary style="cursor:pointer">Mensajes generales de voz</summary>
          <p class="small">Cada mensaje se usa solo en la situación que indica su título. En los avisos que mencionan sensores, escribe solo tu frase: Argus añade automáticamente el conteo y los nombres de las zonas, sus áreas y sus sensores según las zonas asignadas a ${this._escapeHtml(modeName)}. No hace falta escribir esos nombres. Los avisos de inicio, cierre y finalización se usan durante el armado en espera, si está activado; los avisos de alarma se usan cuando la alarma está activa. Cambiar el texto no modifica el funcionamiento del armado.</p>
            ${messageFields.map(([key, label, description]) => {
              const rule = messageRules[key];
              const hasCustom = Boolean(values[key]) || Boolean(rule);
              const states = rule?.states || [];
              return `<article class="argus-voice-message-card"><strong>${label}</strong><p class="small">${description}</p>
                <details><summary>Ver ejemplo predeterminado (simulado)</summary><p>${previewDefault(key)}</p></details>
                <label><input type="checkbox" data-message-default="${key}" ${hasCustom ? '' : 'checked'}> Usar mensaje predeterminado</label>
                <div data-message-editor="${key}" style="display:${hasCustom ? 'block' : 'none'}">
                  <label>Tu frase<textarea data-voice="${key}" maxlength="500" rows="2" placeholder="Por ejemplo: Atención, revisa lo siguiente" style="display:block;width:100%;box-sizing:border-box">${this._escapeHtml(values[key] || '')}</textarea></label>
                  <label><input type="checkbox" data-rule-enabled="${key}" ${rule ? 'checked' : ''}> Añadir información de sensores a mi frase</label>
                  <p class="small">El título del aviso determina cuándo se reproduce. Esta selección decide qué información añade Argus en ese momento. No necesitas escribir nombres, cantidades ni códigos.</p>
                  <fieldset data-rule-fields="${key}"><legend>Zonas que quieres revisar</legend>
                    <label><input type="checkbox" data-rule-all="${key}" ${rule?.zone_ids == null ? 'checked' : ''}> Todas las zonas del modo</label>
                    ${assignedZones.map((zone: any) => `<label style="display:block"><input type="checkbox" data-rule-zone="${key}" value="${this._escapeHtml(zone.id)}" ${rule?.zone_ids?.includes(zone.id) ? 'checked' : ''}> Zona ${this._escapeHtml(zone.number)} · ${this._escapeHtml(zone.area || 'Sin área')}</label>`).join('')}
                    ${!assignedZones.length ? '<p>No hay zonas activas. Se revisarán los sensores configurados en el modo.</p>' : ''}
                  </fieldset>
                  <fieldset><legend>Qué información anunciar y contar</legend>
                    ${[['open','Abiertos o activos ahora'],['closed','Cerrados o inactivos ahora'],['unavailable','Sin conexión o estado desconocido'],['battery_low','Batería baja (con porcentaje si HA lo informa)'],['recently_closed','Se acaban de cerrar en este evento'],['recently_opened','Se acaban de abrir en este evento']].map(([value, name]) => `<label style="display:block"><input type="checkbox" data-rule-state="${key}" value="${value}" ${states.includes(value) ? 'checked' : ''}> ${name}</label>`).join('')}
                  </fieldset>
                  <p class="small">Si marcas varios estados, cada sensor se cuenta una sola vez. Sin estados seleccionados no se añade una lista de sensores. El modo del evento, la causa de una alarma y el autor u origen confirmado del desarmado se informan automáticamente. Un sensor sin conexión nunca se considera cerrado. Estos filtros afectan únicamente la voz.</p>
                  ${hasCustom && !rule ? '<p class="small">Tu mensaje anterior se conserva. Activa la información seleccionada para utilizar el editor sencillo; si contiene variables antiguas, reemplázalas por una frase normal.</p>' : ''}
                </div></article>`;
            }).join('')}
          </details>
          ${this._isAdmin ? '<button type="button" class="primary" id="argus-save-voice" style="margin-top:12px">Guardar voz</button>' : ''}
          <span class="argus-voice-status" role="status" style="margin-left:10px"></span>`;
        this._updateVoiceZoneStatuses();
        const updatePlayerCount = () => {
          const checks = [...body.querySelectorAll<HTMLInputElement>('[data-voice-player]')];
          const count = checks.filter(input => input.checked).length;
          const label = body.querySelector('#argus-player-count');
          if (label) label.textContent = `${count} de 5 seleccionados`;
          checks.forEach(input => { if (!input.checked) input.disabled = yaml.has(playersKey) || count >= 5; });
        };
        const bindPlayerInputs = () => {
          body.querySelectorAll<HTMLInputElement>('[data-voice-player]').forEach(input => input.addEventListener('change', () => {
            const checked = [...body.querySelectorAll<HTMLInputElement>('[data-voice-player]:checked')];
            const status = body.querySelector('.argus-voice-status') as HTMLElement;
            if (checked.length > 5) {
              input.checked = false;
              selected.delete(input.dataset.voicePlayer || '');
              if (status) status.textContent = 'Puedes seleccionar como máximo cinco reproductores.';
            } else {
              const entityId = input.dataset.voicePlayer || '';
              if (input.checked) selected.add(entityId);
              else selected.delete(entityId);
              if (status) status.textContent = '';
            }
            updatePlayerCount();
          }));
          updatePlayerCount();
        };
        bindPlayerInputs();
        body.querySelector('#argus-refresh-players')?.addEventListener('click', async (event: Event) => {
          const button = event.currentTarget as HTMLButtonElement;
          const list = body.querySelector('#argus-player-list') as HTMLElement | null;
          const status = body.querySelector('.argus-voice-status') as HTMLElement;
          button.disabled = true;
          button.textContent = 'Consultando Home Assistant…';
          status.textContent = '';
          try {
            const refreshed = await this._send('argus/get_media_players', {entry_id: this._dashboard?.entry_id});
            const players = Array.isArray(refreshed) ? refreshed : [];
            if (list) list.innerHTML = playerRows(players);
            bindPlayerInputs();
            status.textContent = players.length
              ? `Se encontraron ${players.length} reproductores de Home Assistant.`
              : 'Home Assistant todavía no tiene entidades media_player disponibles para Argus.';
          } catch (err) {
            status.textContent = `No se pudo actualizar la lista: ${err.message || err}`;
          } finally {
            button.disabled = false;
            button.textContent = '↻ Actualizar reproductores de Home Assistant';
          }
        });
        body.querySelectorAll<HTMLInputElement>('[data-rule-all]').forEach(input => {
          const update = () => body.querySelectorAll<HTMLInputElement>(`[data-rule-zone="${input.dataset.ruleAll}"]`).forEach(zone => { zone.disabled = input.checked; });
          input.addEventListener('change', update); update();
        });
        body.querySelectorAll<HTMLInputElement>('[data-message-default]').forEach(toggle => toggle.addEventListener('change', () => {
          const key = toggle.dataset.messageDefault;
          if (!key) return;
          const editor = body.querySelector(`[data-message-editor="${key}"]`) as HTMLElement | null;
          const textarea = editor?.querySelector('textarea');
          if (textarea) {
            if (toggle.checked) textarea.value = '';
            else {
              const enabled = body.querySelector<HTMLInputElement>(`[data-rule-enabled="${key}"]`);
              if (enabled) enabled.checked = true;
            }
          }
          if (editor) editor.style.display = toggle.checked ? 'none' : 'block';
        }));
        body.querySelector('#argus-save-voice')?.addEventListener('click', async () => {
          const config: Record<string, unknown> = {};
          const rules: Record<string, unknown> = {};
          for (const [key] of messageFields) {
            const useDefault = body.querySelector<HTMLInputElement>(`[data-message-default="${key}"]`)?.checked;
            const automatic = body.querySelector<HTMLInputElement>(`[data-rule-enabled="${key}"]`)?.checked;
            const phrase = body.querySelector<HTMLTextAreaElement>(`textarea[data-voice="${key}"]`)?.value || '';
            // Preserve untouched legacy templates; all new plain text uses explicit rules.
            if (!useDefault && (automatic || !phrase.includes('{') || messageRules[key])) {
              const all = body.querySelector<HTMLInputElement>(`[data-rule-all="${key}"]`)?.checked;
              const zones = [...body.querySelectorAll<HTMLInputElement>(`[data-rule-zone="${key}"]:checked`)].map(input => input.value);
              const states = automatic ? [...body.querySelectorAll<HTMLInputElement>(`[data-rule-state="${key}"]:checked`)].map(input => input.value) : [];
              if (!all && !zones.length && states.length) {
                (body.querySelector('.argus-voice-status') as HTMLElement).textContent = 'Selecciona al menos una zona o Todas las zonas.';
                return;
              }
              rules[key] = {zone_ids: all ? null : zones, states};
            }
          }
          config.message_rules = rules;
          body.querySelectorAll('[data-voice]').forEach((input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
            if (!yaml.has(input.dataset.voice)) config[input.dataset.voice] = input instanceof HTMLInputElement && input.type === 'checkbox' ? input.checked : input.value;
          });
          if (!yaml.has(playersKey)) config[playersKey] = [...body.querySelectorAll<HTMLInputElement>('[data-voice-player]:checked')].map(input => input.dataset.voicePlayer);
          const status = body.querySelector('.argus-voice-status') as HTMLElement;
          status.textContent = 'Guardando…';
          try {
            await this._send('argus/save_voice_config', {entry_id: this._zoneEntryId(), config});
            status.textContent = 'Guardado';
          } catch (err) {
            status.textContent = `Error: ${err.message || err}`;
          }
        });
      } catch (err) {
        body.textContent = `No se pudo cargar la voz: ${err.message || err}`;
      }
    };
    void loadVoice();
  }

  _voiceZoneState(rawState: unknown) {
    const state = String(rawState || '').toLowerCase();
    if (['on', 'open', 'unlocked', 'active', 'motion', 'recording', 'true', '1', 'detected', 'tamper', 'vibration', 'triggered', 'abierto'].includes(state)) return 'open';
    if (['off', 'closed', 'locked', 'false', '0', 'clear', 'idle', 'cerrado'].includes(state)) return 'closed';
    if (state && !['unknown', 'unavailable', 'none', 'null'].includes(state)) return 'closed';
    return 'unknown';
  }

  _voiceZoneStateLabel(rawState: unknown) {
    const status = this._voiceZoneState(rawState);
    return status === 'open' ? 'Abierto' : status === 'closed' ? 'Cerrado' : 'Sin conexión';
  }

  _updateVoiceZoneStatuses() {
    const rows = this.shadowRoot?.querySelectorAll<HTMLElement>('[data-voice-zone-sensor]') || [];
    rows.forEach(row => {
      const entityId = row.dataset.voiceZoneSensor;
      if (!entityId) return;
      const rawState = this._hass?.states?.[entityId]?.state || row.dataset.fallbackState || 'unknown';
      const status = this._voiceZoneState(rawState);
      row.classList.toggle('is-open', status === 'open');
      row.classList.toggle('is-closed', status === 'closed');
      row.classList.toggle('is-unknown', status === 'unknown');
      const label = row.querySelector('.argus-voice-sensor-state');
      if (label) label.textContent = this._voiceZoneStateLabel(rawState);
    });
  }

  _renderLiquidGlassClockSvg(badgeType, labelText) {
    const isInstant = badgeType === 'instant';
    const isCustom = badgeType === 'custom';
    const color = isInstant ? '#38bdf8' : (isCustom ? '#fbbf24' : 'rgba(255,255,255,0.7)');
    const clockSvg = `<svg class="liquid-glass-clock" viewBox="0 0 20 20" width="13" height="13" style="vertical-align:middle;filter:drop-shadow(0 0 3px ${color});flex-shrink:0"><circle cx="10" cy="10" r="8" fill="rgba(255,255,255,0.08)" stroke="${color}" stroke-width="1.4"/><path d="M5 6 A 7 7 0 0 1 15 6" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="0.8" stroke-linecap="round"/>${isInstant ? `<path d="M11 4 L8 10 L11 10 L9 16 L14 9 L11 9 Z" fill="${color}"/>` : `<line x1="10" y1="10" x2="10" y2="5.5" stroke="${color}" stroke-width="1.3" stroke-linecap="round"/><line x1="10" y1="10" x2="13.5" y2="10" stroke="${color}" stroke-width="1.3" stroke-linecap="round"/><circle cx="10" cy="10" r="1.2" fill="${color}"/>`}</svg>`;
    return `${clockSvg}${labelText ? `<span style="margin-left:3px;font-size:9px;font-weight:800">${labelText}</span>` : ''}`;
  }

  _chip(entityId, type) {
    // Use _getEntityState for robust case-insensitive + alias resolution
    const stateObjFull = this._getEntityState(entityId);
    const raw = stateObjFull?.state;
    const rawStr = String(raw || '').toLowerCase();
    // Tuya Local / Omni Tuya Local sensors may report "true"/"false", "1"/"0",
    // "detected", "tamper", "vibration" instead of standard HA "on"/"off"
    const OPEN_STATES = ['on', 'unlocked', 'open', 'recording', 'active', 'motion',
      'abierto', 'activa', 'true', '1', 'detected', 'tamper', 'vibration', 'triggered'];
    const UNAVAIL_STATES = ['unknown', 'unavailable', 'desconectado'];
    const isTr = OPEN_STATES.includes(rawStr);
    const isUnavail = !stateObjFull || UNAVAIL_STATES.includes(rawStr);
    const name = stateObjFull?.attributes?.friendly_name || this._hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
    const readonly = !this._isAdmin;

    const dot = type === 'sensor' || type === 'bypass'
    ? `<span class="pill-dot ${isUnavail ? 'unavailable' : (isTr ? 'open' : '')}" title="${raw}"></span>`
    : '';

    let stateLabel = '';
    let powerHtml = '';
    let delayHtml = '';
    if (type === 'sensor' || type === 'bypass' || type === 'entry') {
      const stateObj = stateObjFull;
      const power = this._getDevicePower(entityId, stateObj);
      stateLabel = isUnavail
        ? `<span class="pill-status unavailable">${this._t('unavailable')}</span>`
        : `<span class="pill-status">${isTr ? this._t('status_open') : this._t('status_closed')}</span>`;
      
      if (power.mains) powerHtml += '<span class="pill-power">🔌 AC</span>';
      if (power.battery !== null) {
        const isDead = power.battery === 0;
        const isLow = power.battery <= 10 && !isDead;
        const batText = isDead ? '🔋 ❌' : `🔋 ${power.battery}%`;
        const cls = isDead ? 'dead' : (isLow ? 'low' : '');
        powerHtml += `<span class="pill-power ${cls}">${batText}</span>`;
      }

      if (type === 'sensor') {
        const cfg = this._currentModeConfig();
        const sSettings = cfg.sensor_settings?.[entityId] || {};
        const isInstant = sSettings.type === 'instant' || sSettings.delay === 0;
        const customDelay = sSettings.delay;

        let badgeCls = 'inherited';
        let badgeContent = this._renderLiquidGlassClockSvg('default', '');
        let titleTxt = this._t('sensor_delay_default');

        if (isInstant) {
          badgeCls = 'instant';
          badgeContent = this._renderLiquidGlassClockSvg('instant', '0s');
          titleTxt = this._t('sensor_delay_instant');
        } else if (customDelay !== undefined && customDelay !== null) {
          badgeCls = 'custom';
          badgeContent = this._renderLiquidGlassClockSvg('custom', `${customDelay}s`);
          titleTxt = `${this._t('sensor_delay_custom')}: ${customDelay}s`;
        }

        delayHtml = `
          <button type="button" class="pill-delay-btn" data-edit-sensor-delay="${this._escapeHtml(entityId)}" title="${this._escapeHtml(titleTxt)}">
            <span class="pill-delay-badge ${badgeCls}">${badgeContent}</span>
          </button>
        `;
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
          ${delayHtml}
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
    try {
      if (status) {
        status.textContent = '...';
        status.className = 'status';
        status.style.opacity = '1';
      }
      await this._send('argus/save_ui', {
        emergency_number: emergencyNumber,
        panic_outputs: this._panicOutputs || [],
        notif_targets: this._notifTargets || [],
      });
      this._emergencyNumber = emergencyNumber;
      if (!this._ui) this._ui = {};
      this._ui.emergency_number = emergencyNumber;
      this._ui.panic_outputs = this._panicOutputs || [];
      this._ui.notif_targets = [...(this._notifTargets || [])];
      const notifStatus = this.shadowRoot.getElementById('sos-notif-status');
      if (notifStatus) {
        notifStatus.textContent = this._notifTargets.length
          ? `✓ ${this._notifTargets.length} destino(s) guardado(s) para avisos SOS y eventos críticos.`
          : 'No hay teléfonos seleccionados; Argus no enviará avisos push hasta que agregues uno.';
        notifStatus.className = this._notifTargets.length ? 'status ok' : 'status';
      }
      this._modeDraftBaselines.set(this._modeDraftKey(), JSON.stringify(this._captureModeDraftState()));
      if (status) {
        status.textContent = '✓ ' + (this._t('mode_saved') || 'Configuración SOS guardada');
        status.className = 'status ok';
        status.style.opacity = '1';
        setTimeout(() => { if (status) status.textContent = ''; }, 3000);
      }
      return true;
    } catch (e: any) {
      if (status) {
        status.textContent = this._format('generic_error', { error: e.message });
        status.className = 'status err';
        status.style.opacity = '1';
      }
      return false;
    }
  }

  async _saveMode() {
    const draft = this._captureModeDraftState();
    const cfg = draft.config;
    const armTime  = this.shadowRoot.getElementById('mode-arming-time') as HTMLInputElement | null;
    const entDelay = this.shadowRoot.getElementById('mode-entry-delay') as HTMLInputElement | null;
    const mqttChk  = this.shadowRoot.getElementById('mode-mqtt-enabled') as HTMLInputElement | null;

    cfg.require_closed = false;
    if (armTime)  cfg.arming_time  = armTime.value  ? parseInt(armTime.value)  : 0;
    if (entDelay) cfg.entry_delay  = entDelay.value ? parseInt(entDelay.value) : 0;
    if (mqttChk)  cfg.mqtt_enabled = mqttChk.checked;
    const _eid = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || 'default';
    const status = this.shadowRoot.getElementById('mode-status');
    const modeName = this._mode === 'home' ? 'En Casa' : this._mode === 'away' ? 'Ausente' : this._mode === 'night' ? 'Noche' : 'Desarmado';
    if (status) { status.textContent = `Guardando modo ${modeName}…`; status.className = 'status show'; }
    try {
      await this._send('argus/save_mode_config', {
        entry_id: this._dashboard?.entries?.find(entry => entry.entity_id === _eid)?.entry_id || this._dashboard?.entry_id,
        entity_id: _eid,
        mode: this._mode,
        config: cfg,
      });
      this._ui.modes = this._ui.modes || {};
      this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {};
      this._ui.modes.__by_entity__[_eid] = this._ui.modes.__by_entity__[_eid] || {};
      this._ui.modes.__by_entity__[_eid][this._mode] = JSON.parse(JSON.stringify(cfg));
      this._modeDraftBaselines.set(this._modeDraftKey(), JSON.stringify({ config: JSON.parse(JSON.stringify(cfg)) }));
      if (status) { status.textContent = `✓ Modo ${modeName} guardado`; status.className = 'status ok show'; }
      return true;
    } catch (err: any) {
      if (status) { status.textContent = `✗ No se guardó: ${err.message || this._t('generic_error').replace(': {error}', '')}`; status.className = 'status err show'; }
      return false;
    }
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
          <button class="ghost" style="padding:6px 12px;background:rgba(255,255,255,0.08);border-radius:8px" data-edit-auto="${this._escapeHtml(editId)}">${this._escapeHtml(this._t('modal_edit_name'))}</button>
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
  _populateNotifSelect(selectId = 'notif-select') {
    const sel = this.shadowRoot.getElementById(selectId) as HTMLSelectElement | null;
    if (!sel) return;
    const services = this._hass?.services?.notify || {};
    const notifyEntities = Object.values(this._hass?.states || {})
      .filter(state => state?.entity_id?.startsWith('notify.') && state.entity_id !== 'notify.persistent_notification')
      .map(state => ({ value: `entity:${state.entity_id}`, label: state.attributes?.friendly_name || state.entity_id }));
    const legacyServices = Object.keys(services)
      .filter(k => !['notify', 'send_message', 'persistent_notification'].includes(k) && !(this._notifTargets || []).includes(k))
      .map(k => ({ value: k, label: k.replace(/_/g, ' ') }));
    const opts = [...notifyEntities, ...legacyServices].filter(option => !(this._notifTargets || []).includes(option.value));

    const placeholder = this._t('notif_no_services') || 'No hay servicios de notificación móvil disponibles.';
    sel.innerHTML = opts.length
      ? opts.map(({ value, label }) => `<option value="${this._escapeHtml(value)}">${this._escapeHtml(`🔔 ${label}`)}</option>`).join('')
      : `<option value="">— ${this._escapeHtml(placeholder)} —</option>`;
    sel.disabled = !opts.length;
  }

  _addNotifTarget(selectId = 'notif-select') {
    const sel = this.shadowRoot.getElementById(selectId) as HTMLSelectElement | null;
    const val = sel?.value;
    if (!val || (this._notifTargets || []).includes(val)) return;
    this._notifTargets.push(val);
    this._renderNotifications();
  }

  _renderNotifChips(containerId = 'notif-targets', canRemove = this._isAdmin) {
    const el = this.shadowRoot.getElementById(containerId);
    if (!el) return;
    const targets = Array.isArray(this._notifTargets) ? this._notifTargets : [];
    el.innerHTML = targets.map(t => {
      const entityId = t.startsWith('entity:') ? t.slice('entity:'.length) : (t.startsWith('notify.') ? t : '');
      const label = (entityId && this._hass?.states?.[entityId]?.attributes?.friendly_name)
        || t.replace(/^entity:notify\./, '').replace(/^notify\./, '').replace(/_/g, ' ');
      return `<span class="notif-chip" style="color:#ffffff !important;font-weight:700;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);">🔔 ${this._escapeHtml(label)}${canRemove ? ` <button type="button" data-notif-remove="${this._escapeHtml(t)}" aria-label="Quitar ${this._escapeHtml(label)}" style="color:#ffffff;opacity:0.85;cursor:pointer;margin-left:4px;font-weight:bold;">✕</button>` : ''}</span>`;
    }).join('') || `<span class="small" style="opacity:.8">${canRemove ? 'No hay teléfonos o servicios seleccionados todavía.' : 'No hay destinos de notificación configurados.'}</span>`;
    el.querySelectorAll('[data-notif-remove]').forEach(btn =>
      btn.addEventListener('click', () => {
        this._notifTargets = this._notifTargets.filter(x => x !== btn.dataset.notifRemove);
        this._renderNotifications();
      })
    );
  }

  _renderNotifications() {
    this._renderNotifChips();
    this._populateNotifSelect();
    this._renderNotifChips('sos-notif-targets', this._isAdmin);
    this._populateNotifSelect('sos-notif-select');
  }

  async _saveNotifications() {
    const status = this.shadowRoot.getElementById('notif-status');
    this._runWithPin(async () => {
      try {
        await this._send('argus/save_ui', {
          notif_targets: this._notifTargets,
        });
        if (this._ui) this._ui.notif_targets = [...this._notifTargets];
        this._renderNotifications();
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
            ? `<span class="user-badge">🔒 PIN</span>`
            : `<span class="user-badge">🔓 ${this._escapeHtml(this._t('user_no_pin'))}</span>`;

          return `
          <div class="user-card" style="display:flex;flex-direction:column;align-items:stretch;gap:8px">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-direction:column;gap:10px;width:100%">
              <div style="flex:1">
                <div style="font-weight:700">${this._escapeHtml(u.name || '')}</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px">
                  <span class="user-badge">${roleText}</span>
                  <span class="user-badge">${this._escapeHtml(haAccountText)}</span>
                  ${pinBadge}
                  ${expBadge}
                </div>
              </div>
              <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;width:100%">
                ${this._isAdmin ? `
                  <button class="secondary" style="min-height:42px;padding:8px 10px;font-size:13px;border-radius:12px" data-user-edit="${i}">${this._escapeHtml(this._t('modal_edit_name'))}</button>
                  <button class="secondary" style="min-height:42px;padding:8px 10px;font-size:13px;border-radius:12px" data-user-pin="${i}">${this._escapeHtml(this._t('modal_pin_title'))}</button>
                  ${u.role !== 'admin' ? `<button class="secondary" style="min-height:42px;padding:8px 10px;font-size:13px;border-radius:12px" data-user-perms="${i}">${this._escapeHtml(this._t('permissions_title') || 'Permisos')}</button>` : ''}
                  <button class="secondary" style="min-height:42px;padding:8px 10px;font-size:13px;border-radius:12px" data-user-role-toggle="${i}">${this._escapeHtml(this._t('user_role_label'))}</button>
                  ${u.role === 'admin' ? `<button class="secondary" data-arming-pin>${this._escapeHtml(this._t('pin_master_title'))}</button>` : ''}
                  <button class="btn-danger danger" style="grid-column:1/-1;min-height:42px;padding:8px 10px;font-size:13px;border-radius:12px" data-user-del="${i}">${this._escapeHtml(this._t('delete_user_tooltip'))}</button>
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
          el.querySelectorAll('[data-arming-pin]').forEach(button => {
            button.addEventListener('click', () => {
              const pinDialog = this.shadowRoot.getElementById('access-pin-settings');
              pinDialog.style.display = 'flex';
              pinDialog.setAttribute('aria-hidden', 'false');
            });
          });
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
              const result = await this._showArgusPermissionsModal(targetUser);
              if (result === null) return;
              const { permissions: newPerms, overridePin } = result;
              this._runWithPin(async () => {
                const nextUsers = this._users.map((u, k) => k === idx ? { ...u, permissions: { ...u.permissions, ...newPerms },
                  ...(overridePin !== undefined ? { override_pin_hash: overridePin } : {}),
                } : u);
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
    const isCompact = this.hasAttribute('compact') || this.classList.contains('argus-compact') || Boolean(this._cardConfig?.compact);
    const backgroundImage = `url('/api/argus_static/argus-default-bg.jpg')`;
    this.setAttribute('data-bg-mode', 'default');

    if (bgContainer) {
      bgContainer.innerHTML = '';
      bgContainer.style.backgroundImage = isCompact ? '' : backgroundImage;
    }

    // Stop and remove any WebGL canvas loops to guarantee liquid-smooth rendering
    this.shadowRoot.querySelectorAll('.wx-webgl').forEach(canvas => {
      if ((canvas as any)._argusRO) (canvas as any)._argusRO.disconnect();
      if ((canvas as any)._argusWebglStop) (canvas as any)._argusWebglStop();
      canvas.remove();
    });

    // Compact HA cards keep the wallpaper within their own bounds. In the
    // full panel, the existing fixed layer preserves viewport positioning
    // without triggering Safari's fixed-background repaint during scroll.
    this.style.backgroundImage = isCompact ? backgroundImage : 'none';
    this.style.backgroundSize = 'cover';
    this.style.backgroundPosition = 'center';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundAttachment = 'scroll';
  }

  _renderEntryBackground(ws, isNight) {
    return `<div class="wx wx-liquid-glass" style="position:absolute; inset:0; width:100%; height:100%; z-index:0; pointer-events:none; border-radius:inherit; background:radial-gradient(circle at 50% 20%, rgba(255,255,255,0.06), transparent 70%);"></div>`;
  }

  _updateHomeNameDisplay() {
    const homeName = this._homeName || this._ui?.home_name || this._hass?.config?.location_name || this._t('home_default');
    const prominent = this.shadowRoot.getElementById('lbl-home-name-prominent');
    if (prominent) prominent.textContent = homeName;
    const dropdownHome = this.shadowRoot.getElementById('dropdown-home-name');
    if (dropdownHome) dropdownHome.textContent = homeName;
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
    if (modal) { modal.classList.remove('open'); modal.style.display = 'none'; }
    const idx = this._sosEntryIdx;
    const entry = this._dashboard?.entries?.[idx];
    const eid = entry?.entity_id;
    try {
      if (!this._hass || !eid) throw new Error(this._t('no_alarm_instance'));
      if (this._getProfileGesture() === 'touch') {
        const confirmed = await this._showArgusConfirmModal(this._t('sos_confirm_title'), { focusCancel: true });
        if (!confirmed) return;
      }
      await this._send('argus/perform_alarm_action', { action: 'sos', entry_id: entry.entry_id });
      // SOS activation is immediate. Calling emergency services is a separate
      // optional choice presented by the React console beside the core.
      this._sosCallPromptEntryIdx = idx;
      this.dispatchEvent(new CustomEvent('argus-state-update'));
    } catch (err) {
      alert(this._format('sos_error', { error: err?.message || err }));
    } finally {
      this._sosEntryIdx = null;
      this._sosBusy = false;
    }
  }

  async _stopSOS(idx) {
    const entry = this._dashboard?.entries?.[idx];
    if (!entry?.entry_id) return false;
    const requiresPin = entry.pin_configured === true || entry.user_pin_configured === true;
    let pending = false;
    const stop = async (code = null) => {
      if (pending) return false;
      pending = true;
      try {
        await this._send('argus/perform_alarm_action', { action: 'stop_sos', entry_id: entry.entry_id, ...(code ? {code} : {}) });
        return true;
      } catch (err) {
        const message = this._format('panic_stop_error', { error: err?.message || err });
        const error = this.shadowRoot.getElementById('pin-error');
        if (requiresPin && error) error.textContent = message;
        else alert(message);
        return false;
      } finally { pending = false; }
    };
    if (requiresPin) { this._showPinModal(stop, 'sos_stop'); return false; }
    return stop();
  }

  _savePersonalization() {
    this._runWithPin(() => this._persistPersonalization());
  }

  async _persistPersonalization() {
    this._ui = this._ui || {};
    const background_mode = this.shadowRoot.getElementById('bg-mode-select-standalone')?.value || 'none';
    const temperature_source = this.shadowRoot.getElementById('temp-source-select-standalone')?.value || 'auto';
    const weather_source = 'auto';
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

    if (!p1 && !await this._showArgusConfirmModal('¿Eliminar el PIN de armado?', { confirmLabel: 'Eliminar PIN' })) return;

    try {
      await this._send('argus/update_master_pin', { pin: p1, confirm_pin: p2, current_pin: pinCurrent });
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
        <div role="dialog" aria-modal="true" aria-labelledby="apm-title" style="background:#19283a;border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;box-sizing:border-box;width:min(440px,calc(100vw - 24px));max-height:calc(100dvh - 24px);overflow:auto;box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div id="apm-title" style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">🛡️ ${(this._t('permissions_title') || 'Permisos')} — ${this._escapeHtml(targetUser.name)}</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.65);margin-top:-6px">${this._t('permissions_modal_desc') || 'Selecciona las acciones permitidas para este perfil estándar:'}</div>
          
          <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px;padding-right:4px;">
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-status" checked disabled style="width:16px;height:16px;cursor:pointer;" />
              <span>👁️ ${this._t('perm_view_status') || 'Ver Estado de Sensores / Panel'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-arm" ${perms.arm ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>🛡️ ${this._t('perm_arm') || 'Armar Alarma'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;">
              <input type="checkbox" id="chk-perm-force-arm" ${perms.force_arm ? 'checked' : ''}>
              <span>Permitir armado con bypass</span>
            </label>
            <label style="display:flex;flex-direction:column;gap:5px;font-size:13px;color:#fff;">
              PIN de override
              <input id="override-pin" type="password" inputmode="numeric" maxlength="12" autocomplete="new-password" placeholder="${targetUser.override_pin_configured ? 'Conservar PIN actual' : 'Configurar PIN de override'}">
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
          </div>

          <div style="display:flex;gap:10px;margin-top:10px">
            <button id="apm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${cancelLabel}</button>
            <button id="apm-ok" style="flex:1;padding:11px;border-radius:12px;border:none;
              background:#35b8e5;color:#102033;font-size:14px;font-weight:600;
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
          view_status: true,
          arm: overlay.querySelector('#chk-perm-arm').checked,
          force_arm: overlay.querySelector('#chk-perm-force-arm').checked,
          disarm: overlay.querySelector('#chk-perm-disarm').checked,
          sos: overlay.querySelector('#chk-perm-sos').checked,
          view_history: overlay.querySelector('#chk-perm-view-history').checked,
        };
        const overridePin = (overlay.querySelector('#override-pin') as HTMLInputElement).value;
        cleanup({ permissions: nextPerms, overridePin: nextPerms.force_arm ? (overridePin || undefined) : '' });
      });
      cancelBtn.focus();
      overlay.addEventListener('keydown', e => { if (e.key === 'Escape') cleanup(null); });
      cancelBtn.addEventListener('click', () => cleanup(null));
      overlay.addEventListener('click', e => { if (e.target === overlay) cleanup(null); });
    });
  }

  /* ── Liquid-glass confirm modal (replaces window.confirm) ─────────── */
  _showArgusConfirmModal(message = '', { confirmLabel = '', confirmStyle = '', cancelLabel = '', focusCancel = false } = {}) {
    return new Promise(resolve => {
      const overlay = document.createElement('div');
      overlay.setAttribute('role', 'alertdialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.style.cssText = [
        'position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center',
        'background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)',
        'animation:argus-modal-in .18s ease',
      ].join(';');

      if (matchMedia('(prefers-reduced-motion: reduce)').matches) overlay.style.animation = 'none';

      const cl = confirmLabel || this._t('modal_confirm') || 'Confirmar';
      const ccl = cancelLabel  || this._t('modal_cancel')  || 'Cancelar';
      const cStyle = confirmStyle || 'background:linear-gradient(135deg,#4a90d9,#7b5ea7);border:none;box-shadow:0 4px 14px rgba(74,144,217,0.35)';

      overlay.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(360px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:18px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div id="acm-message" style="font-size:15px;color:rgba(255,255,255,0.92);line-height:1.5;text-align:center">${message}</div>
          <div style="display:flex;gap:10px">
            <button id="acm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${ccl}</button>
            <button id="acm-ok" style="flex:1;padding:11px;border-radius:12px;color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;${cStyle}">${cl}</button>
          </div>
        </div>`;

      const previousFocus = this.shadowRoot.activeElement || document.activeElement;
      const root = document.fullscreenElement === this ? this.shadowRoot : document.body;
      root.appendChild(overlay);

      const cleanup = val => {
        overlay.remove();
        if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
        resolve(val);
      };
      overlay.querySelector('#acm-ok').addEventListener('click', () => cleanup(true));
      overlay.querySelector('#acm-cancel').addEventListener('click', () => cleanup(false));
      overlay.addEventListener('click', e => { if (e.target === overlay) cleanup(false); });
      overlay.addEventListener('keydown', e => {
        if (e.key === 'Escape') cleanup(false);
      });
      const cancel = overlay.querySelector('#acm-cancel');
      const confirm = overlay.querySelector('#acm-ok');
      overlay.setAttribute('aria-labelledby', 'acm-message');
      (focusCancel ? cancel : confirm).focus();
      overlay.addEventListener('keydown', e => {
        if (e.key !== 'Tab') return;
        e.preventDefault();
        (e.target === cancel ? confirm : cancel).focus();
      });
    });
  }

  _showArgusInputModal(options) { return showSettingsPrompt(this.shadowRoot, '', options, true); }

  async _showArgusConfirmModal(message, options = {}) {
    return (await showSettingsPrompt(this.shadowRoot, message, options)) !== null;
  }

  _runWithPin(action) {
    action();
  }

  _showPinModal(onConfirm, presentation = null) {
    const m = this.shadowRoot.getElementById('pin-modal');
    const inp = this.shadowRoot.getElementById('pin-input');
    const err = this.shadowRoot.getElementById('pin-error');
    const wrap = this.shadowRoot.querySelector('.wrap');
    inp.value = '';
    if (err) {
      err.textContent = '';
      err.style.color = '';
    }
    const description = this.shadowRoot.getElementById('l-pin-modal-desc');
    if (description) description.textContent = presentation === 'disarm'
      ? (this._getCurrentLangCode() === 'es' ? 'Introduce el PIN de armado para desarmar el sistema.' : 'Enter the arming PIN to disarm the system.')
      : presentation === 'sos_stop' ? (this._getCurrentLangCode() === 'es' ? 'Introduce el PIN de armado para detener SOS. El estado de armado se conserva.' : 'Enter the alarm PIN to stop SOS. Arming state is preserved.') : this._t('pin_modal_desc');
    this._pinCallback = onConfirm;
    if (this._pinCloseTimer) {
      clearTimeout(this._pinCloseTimer);
      this._pinCloseTimer = null;
    }
    m.classList.remove('pin-closing');
    const modalBox = m.querySelector('.modal');
    if (modalBox) {
      modalBox.classList.remove('dial-elastic', 'pin-rejected');
      modalBox.style.position = '';
      modalBox.style.left = '';
      modalBox.style.top = '';
      modalBox.style.transform = '';
    }

    const isFS = this.classList.contains('fullscreen-active');
    let fsEl = null;
    if (isFS) {
      fsEl = this.shadowRoot.querySelector('.entry.ios-fullscreen') ||
             this.shadowRoot.querySelector('.entry') ||
             this.shadowRoot.querySelector('article');
    }

    if (presentation === 'disarm') {
      const slot = this.shadowRoot.querySelector('.context-pin-slot');
      const consoleGrid = slot?.closest('.security-console');
      const hasRightColumn = consoleGrid && getComputedStyle(consoleGrid).gridTemplateAreas.includes('controls emblem sensors');
      const inline = Boolean(hasRightColumn && slot.parentElement.clientWidth >= 230);
      this._pinReturnFocus = this.shadowRoot.activeElement;
      for (const property of ['position', 'inset', 'z-index', 'background', 'backdrop-filter', '-webkit-backdrop-filter']) {
        m.style.removeProperty(property);
      }
      m.dataset.disarmPresentation = inline ? 'context' : 'dialog';
      m.setAttribute('role', 'dialog');
      m.setAttribute('aria-labelledby', 'l-introduce-pin');
      m.setAttribute('aria-describedby', 'l-pin-modal-desc');
      if (!inline) m.setAttribute('aria-modal', 'true');
      (inline ? slot : fsEl || this.shadowRoot).appendChild(m);
      m.classList.add('open');
      m.setAttribute('aria-hidden', 'false');
      inp.focus({ preventScroll: true });
      return;
    }

    if (isFS && fsEl) {
      m.style.position = 'absolute';
      m.style.inset = '0';
      m.style.zIndex = '99999999';
      m.style.background = 'rgba(0, 0, 0, 0.55)';
      m.style.backdropFilter = 'none';
      m.style.webkitBackdropFilter = 'none';
      if (modalBox) {
        void modalBox.offsetWidth; // force reflow
        modalBox.classList.add('dial-elastic');
      }
      fsEl.appendChild(m);
    } else {
      m.style.position = 'fixed';
      m.style.inset = '0';
      m.style.zIndex = '999999';
      m.style.background = 'rgba(0, 0, 0, 0.3)';
      m.style.backdropFilter = 'none';
      m.style.webkitBackdropFilter = 'none';
      if (wrap) {
        wrap.classList.add('wrap-blurred');
      }
    }

    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
    // In portrait center the keypad over the security core. On a wide page
    // place it beside the core when there is room; fullscreen remains centered.
    if (modalBox) {
      requestAnimationFrame(() => {
        const core = this.shadowRoot.querySelector('.console-emblem-viewport');
        const box = modalBox.getBoundingClientRect();
        const coreRect = core?.getBoundingClientRect();
        let left = (window.innerWidth - box.width) / 2;
        let top = (window.innerHeight - box.height) / 2;
        if (coreRect) {
          const portrait = window.matchMedia('(max-width: 760px), (orientation: portrait)').matches;
          const rightCandidate = coreRect.right + 20;
          if (!portrait && rightCandidate + box.width <= window.innerWidth - 16) left = rightCandidate;
          top = coreRect.top + (coreRect.height - box.height) / 2;
        }
        modalBox.style.position = 'fixed';
        modalBox.style.left = `${Math.max(16, Math.min(left, window.innerWidth - box.width - 16))}px`;
        modalBox.style.top = `${Math.max(16, Math.min(top, window.innerHeight - box.height - 16))}px`;
        void modalBox.offsetWidth;
        modalBox.classList.add('dial-elastic');
      });
    }
    setTimeout(() => inp.focus(), 60);
  }

  _closePinModal() {
    const m = this.shadowRoot.getElementById('pin-modal');
    if (!m || !m.classList.contains('open') || m.classList.contains('pin-closing')) return;
    const disarmPresentation = m.dataset.disarmPresentation;
    m.classList.add('pin-closing');
    this._pinCloseTimer = setTimeout(() => {
      m.classList.remove('open', 'pin-closing');
      m.setAttribute('aria-hidden', 'true');
      m.style.inset = '';
      const modalBox = m.querySelector('.modal');
      if (modalBox) {
        modalBox.classList.remove('dial-elastic', 'pin-rejected');
        modalBox.style.position = '';
        modalBox.style.left = '';
        modalBox.style.top = '';
        modalBox.style.transform = '';
      }
      const wrap = this.shadowRoot.querySelector('.wrap');
      if (wrap) wrap.classList.remove('wrap-blurred');
      m.style.position = 'fixed';
      m.style.zIndex = '999999';
      this.shadowRoot.appendChild(m);
      this._pinCallback = null;
      this._pinCloseTimer = null;
      if (disarmPresentation) {
        delete m.dataset.disarmPresentation;
        for (const attr of ['role', 'aria-labelledby', 'aria-describedby', 'aria-modal']) m.removeAttribute(attr);
        const returnFocus = this._pinReturnFocus;
        this._pinReturnFocus = null;
        if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
        else this.shadowRoot.querySelector('.console-hud button')?.focus({ preventScroll: true });
      }
    }, disarmPresentation && matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 220);
  }

  _appendPinDigit(digit) {
    const inp = this.shadowRoot.getElementById('pin-input');
    const err = this.shadowRoot.getElementById('pin-error');
    if (!inp) return;
    inp.value = `${inp.value || ''}${digit}`.slice(0, 12);
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
    if (this._disarmPinPending) return;
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
        } else {
          const modalBox = this.shadowRoot.querySelector('#pin-modal .modal');
          if (modalBox) {
            modalBox.classList.remove('pin-rejected');
            void modalBox.offsetWidth;
            modalBox.classList.add('pin-rejected');
          }
        }
      } catch (err) {
        const errEl = this.shadowRoot.getElementById('pin-error');
        if (errEl) errEl.textContent = err.message || '❌ PIN incorrecto';
        const modalBox = this.shadowRoot.querySelector('#pin-modal .modal');
        if (modalBox) {
          modalBox.classList.remove('pin-rejected');
          void modalBox.offsetWidth;
          modalBox.classList.add('pin-rejected');
        }
      }
    } else {
      this._closePinModal();
    }
  }

  /* ── Selector modal ──────────────────────────────────────────────── */
  _selectAll() {
    const q = (this.shadowRoot.getElementById('selector-search')?.value || '').toLowerCase().trim();
    const items = [...new Map((this._available || []).map(x => [x.entity_id, x])).values()].filter(x => {
      if (this._selectorTarget === 'external_panel') return x.domain === 'alarm_control_panel';
      if (this._selectorTarget === 'siren' || this._selectorTarget === 'alarm_device' || this._selectorTarget === 'panic') return isAlarmOutput(x.entity_id, (this._dashboard?.entries || []).map(entry => entry.entity_id));
      return isModeSensor(x.entity_id);
    }).filter(x => !q || [x.entity_id, x.name, x.area].filter(Boolean).join(' ').toLowerCase().includes(q));
    items.forEach(x => { if (!this._selected.includes(x.entity_id)) this._selected.push(x.entity_id); });
    this._renderSelector(true);
  }

  _openModal(type) {
    this._selectorTarget = type;
    const cfg = this._currentModeConfig();
    const _srcKey = type === 'sensor' ? 'sensors' : (type === 'bypass' ? 'bypassed_sensors' : (type === 'entry' ? 'entry_sensors' : (type === 'external_panel' ? 'external_panels' : 'sirens')));
    this._selected = type === 'panic' || (type === 'alarm_device' && this._mode === 'sos')
      ? [...(this._panicOutputs || this._ui?.panic_outputs || [])]
      : type === 'alarm_device'
        ? [...new Set([...(cfg?.sirens || []), ...(cfg?.external_panels || [])])]
        : (Array.isArray(cfg?.[_srcKey]) ? [...cfg[_srcKey]] : []);
    const title = this.shadowRoot.getElementById('selector-title');
    if (type === 'sensor') title.textContent = this._t('sensor_section');
    else if (type === 'bypass') title.textContent = this._t('sensors_to_bypass');
    else if (type === 'entry') title.textContent = this._t('entry_sensors');
    else if (type === 'panic') title.textContent = this._t('sos_actions') || this._t('selector_panic') || 'Dispositivos y Acciones SOS';
    else if (type === 'external_panel') title.textContent = this._t('external_panels') || 'Paneles de alarma externos';
    else if (type === 'alarm_device') title.textContent = 'Dispositivos y paneles compatibles';
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
      const items = [...new Map((this._available || []).map(x => [x.entity_id, x])).values()].filter(x => {
        if (this._selectorTarget === 'external_panel') return x.domain === 'alarm_control_panel';
        if (this._selectorTarget === 'siren' || this._selectorTarget === 'alarm_device' || this._selectorTarget === 'panic') return isAlarmOutput(x.entity_id, (this._dashboard?.entries || []).map(entry => entry.entity_id));
        return isModeSensor(x.entity_id);
      }).filter(x => !q || [x.entity_id, x.name, x.area, x.entity_id.split('.')[1]].filter(Boolean).join(' ').toLowerCase().includes(q));

      const groups = new Map<string, any[]>();
      items.forEach(x => {
        const key = String(x.name || x.entity_id).trim();
        groups.set(key, [...(groups.get(key) || []), x]);
      });
      const renderItem = (x: any) => {
        const stateObj = this._hass?.states?.[x.entity_id];
        const facts = this._deviceFacts(x.entity_id, stateObj, true);
        return `<label class="pick-row">
          <input type="checkbox" data-entity="${this._escapeHtml(x.entity_id)}" ${this._selected.includes(x.entity_id) ? 'checked' : ''}>
          <div>
            <div class="pick-row-name">${this._escapeHtml(x.name || x.entity_id)} · ${this._escapeHtml(x.entity_id.startsWith('binary_sensor.') ? 'Detector de seguridad' : x.domain || x.entity_id.split('.')[0])}</div>
            <div class="pick-row-meta">${this._escapeHtml(x.entity_id)}${x.area ? ' · '+this._escapeHtml(x.area) : ''}</div>
            <div class="device-facts">${facts.map(f => `<span class="device-fact ${f.className}">${this._escapeHtml(f.text)}</span>`).join('')}</div>
          </div>
        </label>`;
      };
      list.innerHTML = [...groups.entries()].map(([name, entries]) => entries.length === 1
        ? renderItem(entries[0])
        : `<details class="mode-section-card" style="padding:12px"><summary>${this._escapeHtml(name)} · ${entries.length} funciones disponibles</summary>${entries.map(renderItem).join('')}</details>`
      ).join('') || `<div class="small" style="padding:10px">${this._t('no_results')}</div>`;
    }

    this._renderSelectedBox();
  }

  _acceptSelection() {
    // FIX A DEFINITIVO: leer cfg fresco, mutar, y escribir de vuelta
    // EXACTAMENTE en modes.__by_entity__[eid][mode] — la misma ruta que _currentModeConfig lee
    if (!this._ui) return;
    if (this._selectorTarget === 'panic' || (this._selectorTarget === 'alarm_device' && this._mode === 'sos')) {
      this._panicOutputs = [...this._selected];
      this._closeModal();
      this._renderModeView(); this._renderEntries(); this.dispatchEvent(new CustomEvent("argus-state-update"));
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
    if (this._selectorTarget === 'alarm_device') {
      cfg.external_panels = this._selected.filter(id => id.startsWith('alarm_control_panel.'));
      cfg.sirens = this._selected.filter(id => !id.startsWith('alarm_control_panel.'));
    }
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

    const requestedMode = { home: 'armed_home', away: 'armed_away', night: 'armed_night' }[action];
    if (requestedMode) {
      if (live.state === requestedMode) return;
      const alarmActive = live.state === 'triggered';
      if (alarmActive || live.state === 'arming' || live.state === 'pending' || live.state.startsWith('armed_')) {
        await this._showArgusConfirmModal(
          alarmActive
            ? 'Detén la alarma y desarma Argus antes de seleccionar un modo.'
            : 'Primero desarma Argus para poder cambiar de modo.',
          { confirmLabel: 'OK' }
        );
        return;
      }
    }

    const serviceMap = {
      home: 'alarm_arm_home', away: 'alarm_arm_away',
      night: 'alarm_arm_night',
      disarm: 'alarm_disarm',
    };
    const modeLabels = {
      home: this._t('mode_home'), away: this._t('mode_away'),
      night: this._t('mode_night'),
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
      let disarmPending = false;
      const doDisarm = async (pin) => {
        if (disarmPending) return false;
        disarmPending = true;
        const pinStatus = masterPin || hasUsers ? this.shadowRoot.getElementById('pin-error') : null;
        if (pinStatus) {
          this._disarmPinPending = true;
          pinStatus.textContent = 'Validando PIN…';
        }
        if (!masterPin && !hasUsers) this._setOptimisticAlarmState(e.entity_id, 'disarmed');
        try {
          const result = await this._send('argus/perform_alarm_action', {
            action: 'disarm',
            entry_id: e.entry_id,
            ...(pin ? { code: pin } : {})
          });

          if (result?.state) this._setOptimisticAlarmState(e.entity_id, result.state);
          else this._clearOptimisticAlarmState(e.entity_id);

          // The authoritative state event normally renders first. Refresh now
          // as a fallback; a delayed timer made disarm look unresponsive.
          this._renderModeView(); this._renderEntries();
          this.dispatchEvent(new CustomEvent("argus-state-update"));
          return true;
        } catch (err) {
          this._clearOptimisticAlarmState(e.entity_id);
          const pinErr = this.shadowRoot.getElementById('pin-error');
          const message = String(err?.message || err || 'No se pudo desarmar la alarma');
          if (masterPin || hasUsers) {
            if (pinErr) pinErr.textContent = `❌ ${message}`;
          } else {
            console.error('Argus: disarm request failed', err);
            await this._showArgusConfirmModal(`No se pudo desarmar la alarma: ${message}`, { confirmLabel: 'OK' });
          }
          return false;
        } finally {
          disarmPending = false;
          this._disarmPinPending = false;
          if (pinStatus?.textContent === 'Validando PIN…') pinStatus.textContent = '';
        }
      };
      if (masterPin || hasUsers) {
        // Keep the compact panel intact. The touch/mouse keypad is rendered
        // only after the user explicitly asks to disarm.
        this._showPinModal(doDisarm, 'disarm');
      } else {
        await doDisarm(null);
      }
      return;
    }

    if (action !== 'disarm' && !this._isAdmin && this._permissions?.arm === false) {
      await this._showArgusConfirmModal(this._t('no_arm_perm_alert') || 'No tienes permisos para armar la alarma.', { confirmLabel: 'OK' });
      return;
    }

    // The entity scope is authoritative, including modes with no configuration.
    const _armEid = e.entity_id || this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id;
    const scopedModes = this._ui?.modes?.__by_entity__?.[_armEid];
    const modeCfg = scopedModes ? (scopedModes[action] || {}) : (this._ui?.modes?.[action] || {});

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

    const doArm = async (pin) => {
      this._pendingArmEntities ||= new Set();
      if (this._pendingArmEntities.has(e.entity_id)) return false;
      this._pendingArmEntities.add(e.entity_id);
      try {
        const result = await this._send('argus/perform_alarm_action', {
          action: service.replace('alarm_', ''),
          entry_id: e.entry_id,
          ...(pin ? { code: pin } : {})
        });
        // The websocket returns HA's committed state. This also corrects a
        // successful no-op (for example, waiting for open sensors) without
        // waiting for the next state subscription packet.
        if (result?.state) this._setOptimisticAlarmState(e.entity_id, result.state);
        else this._clearOptimisticAlarmState(e.entity_id);
        // Never defer the acknowledgement redraw. HA's state event is
        // authoritative; this immediate refresh covers hosts that coalesce it.
        this._renderModeView(); this._renderEntries();
        this.dispatchEvent(new CustomEvent('argus-state-update'));
        return true;
      } catch (err) {
        this._clearOptimisticAlarmState(e.entity_id);
        const msg = err?.message || (typeof err === 'string' ? err : JSON.stringify(err));
        this._showArmBlockedAlert([], msg);
        console.error('Argus action failed', err);
        return false;
      } finally {
        this._pendingArmEntities.delete(e.entity_id);
      }
    };
    if (live.attributes?.argus_arm_pin_required && e.pin_configured) {
      this._showPinModal(async pin => await doArm(pin));
    } else {
      await doArm(null);
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
    this._hideInitialCurtain();
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

  _getProfileContrast(): string {
    const profId = this._currentProfile?.id || 'default';
    try {
      const stored = localStorage.getItem(`argus_contrast_${profId}`);
      if (stored === 'high' || stored === 'standard') return stored;
      const global = localStorage.getItem('argus_contrast_global');
      if (global === 'high' || global === 'standard') return global;
    } catch (_) {}
    return 'standard';
  }

  _getProfileShieldStyle(): string {
    const profId = this._currentProfile?.id || 'default';
    try {
      const stored = localStorage.getItem(`argus_shield_${profId}`);
      if (stored === 'argus') return stored;
      if (stored === 'crystal') localStorage.setItem(`argus_shield_${profId}`, 'core');
    } catch (_) {}
    return 'core';
  }

  _setProfileShieldStyle(style: string): void {
    if (!['core', 'argus'].includes(style)) return;
    const profId = this._currentProfile?.id || 'default';
    try { localStorage.setItem(`argus_shield_${profId}`, style); } catch (_) {}
    this.dispatchEvent(new CustomEvent('argus-state-update'));
    window.dispatchEvent(new CustomEvent('argus-state-update'));
  }

  _setContrastMode(mode: string): void {
    const profId = this._currentProfile?.id || 'default';
    try {
      localStorage.setItem(`argus_contrast_${profId}`, mode);
      localStorage.setItem('argus_contrast_global', mode);
    } catch (_) {}
    this._applyContrastMode(mode);
  }

  _applyContrastMode(mode: string): void {
    if (mode === 'high') {
      this.setAttribute('argus-contrast', 'high');
      this.classList.add('argus-contrast-high');
    } else {
      this.removeAttribute('argus-contrast');
      this.classList.remove('argus-contrast-high');
    }
  }

  _initContrastMode(): void {
    const mode = this._getProfileContrast();
    this._applyContrastMode(mode);
  }

  _getProfileGesture(): string {
    const profId = this._currentProfile?.id || 'default';
    try {
      const stored = localStorage.getItem(`argus_gesture_${profId}`);
      if (stored === 'touch' || stored === 'slide') return stored;
      const global = localStorage.getItem('argus_gesture_global');
      if (global === 'touch' || global === 'slide') return global;
    } catch (_) {}
    return 'slide';
  }

  _setGestureMode(mode: string): void {
    const profId = this._currentProfile?.id || 'default';
    try {
      localStorage.setItem(`argus_gesture_${profId}`, mode);
      localStorage.setItem('argus_gesture_global', mode);
    } catch (_) {}
    this._applyGestureMode(mode);
  }

  _applyGestureMode(mode: string): void {
    if (mode === 'touch') {
      this.setAttribute('argus-gesture', 'touch');
      this.classList.add('argus-gesture-touch');
    } else {
      this.removeAttribute('argus-gesture');
      this.classList.remove('argus-gesture-touch');
    }
    const sosLabel = this.shadowRoot?.getElementById('sos-label');
    if (sosLabel) {
      sosLabel.textContent = mode === 'touch' ? (this._t('tap_sos') || 'Activar SOS') : (this._t('slide_sos') || 'Desliza para activar SOS');
    }
    const sosThumb = this.shadowRoot?.getElementById('sos-thumb');
    if (sosThumb) {
      sosThumb.setAttribute('aria-label', mode === 'touch' ? (this._t('tap_sos') || 'Activar SOS') : (this._t('slide_sos') || 'Deslizar para activar SOS'));
    }
    this.shadowRoot?.querySelectorAll('.entry').forEach((entry: any) => entry._staRefresh?.());
    try {
      this.dispatchEvent(new CustomEvent('argus-state-update'));
      window.dispatchEvent(new CustomEvent('argus-state-update'));
    } catch (_) {}
  }

  _initGestureMode(): void {
    const mode = this._getProfileGesture();
    this._applyGestureMode(mode);
  }

  async _updateHeroProfileDisplay() {
    const container = this.shadowRoot.getElementById('hero-profile-container');
    if (!container) return;
    profileDialogModule?.disposeProfileDialog(container);
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
        <button type="button" class="hero-profile-pill glass liquid-glass" aria-controls="profile-dropdown" aria-expanded="false" style="appearance: none; color: inherit; font: inherit; border: 0; display: flex; align-items: center; gap: 8px; padding: 5px 12px 5px 7px; border-radius: 999px; cursor:pointer;">
          ${avatarHtml}
          <div style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.15;">
            <span id="hero-profile-name" style="font-size: 12.5px; font-weight: 800; color: var(--v2066-text, #f7f9ff); max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${this._escapeHtml(prof.name)}</span>
            <span id="hero-profile-role" style="font-size: 8.5px; opacity: 0.65; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">${this._escapeHtml(roleLabel)}</span>
          </div>
          <span class="profile-chevron" style="font-size: 7.5px; opacity: 0.65; margin-left: 2px;">▼</span>
        </button>

        <!-- Dropdown Card -->
        <div id="profile-dropdown" class="hero-profile-dropdown" style="display: none; position: absolute; top: calc(100% + 12px); right: 0; flex-direction: column; width: min(420px, calc(100vw - 24px)); min-width: 320px; z-index: 999999; padding: 20px 22px; border-radius: 20px; box-shadow: 0 20px 48px rgba(0,0,0,0.55); border: 1.5px solid rgba(255,255,255,0.18); max-height: calc(100vh - 100px); overflow-y: auto;">
        <div style="display: flex; align-items: center; gap: 14px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-bottom: 12px; width: 100%;">
          ${prof.picture
            ? `<img src="${this._escapeHtml(prof.picture)}" alt="${this._escapeHtml(prof.name)}" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.25); box-shadow: 0 4px 12px rgba(0,0,0,0.3); flex-shrink: 0;" />`
            : `<div class="user-avatar" style="width: 48px; height: 48px; border-radius: 50%; font-size: 14px; font-weight: 800; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.12); border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 4px 12px rgba(0,0,0,0.3); flex-shrink: 0;">${this._escapeHtml(prof.name.substring(0, 2).toUpperCase())}</div>`
          }
          <div style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0; align-items: flex-start;">
            <span style="font-size: 10px; opacity: 0.65; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">${this._t('profile_is_yours') || this._t('active_profile') || 'Perfil Activo'}</span>
            <span style="font-size: 15px; font-weight: 850; color: var(--v2066-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%; text-align: left;">${this._escapeHtml(prof.name)}</span>
            <button id="btn-change-profile-picture" style="font-size: 11px; font-weight: 700; color: #34d399; text-decoration: none; display: flex; align-items: center; gap: 4px; margin-top: 3px; background: none; border: none; padding: 0; cursor: pointer;">
              👤 ${this._t('change_profile_picture') || 'Cambiar foto en Personas de HA ↗'}
            </button>
          </div>
          <span class="user-badge ${prof.role === 'admin' ? 'admin' : 'user'}" style="font-size: 9px; padding: 4px 9px; font-weight: 800; border-radius: 6px; flex-shrink: 0; text-transform: uppercase; letter-spacing: 0.04em;">${this._escapeHtml(roleLabel)}</span>
        </div>

        <!-- Language Selector -->
        <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 10px;">
          <label style="font-size: 11.5px; font-weight: 700; opacity: 0.85; display: flex; align-items: center; gap: 6px;">${this._t('lang_selector_lbl') || '⚙️ Idioma / Language'}</label>
          <select id="dropdown-lang-select" class="glass-control" style="width: 100%; height: 38px; border-radius: 10px; padding: 0 12px; font-size: 12.5px; font-weight: 700; background: rgba(255,255,255,0.06); border: 1px solid var(--v2066-border); color: var(--v2066-text); outline: none; cursor: pointer;">
            ${LANG_LIST.map(l => `<option value="${l.code}" ${l.code === curLang ? 'selected' : ''}>${l.flag} ${l.code === 'auto' ? (this._t('use_ha_language') || 'Automático (HA)') : l.label}</option>`).join('')}
          </select>
        </div>

        <label class="setting-label" for="dropdown-clock-select">Formato de hora</label>
        <select id="dropdown-clock-select" class="glass-control" aria-label="Formato de hora" style="width:100%;margin-bottom:12px">
          <option value="auto" ${this._getClockFormat() === 'auto' ? 'selected' : ''}>Automático · Home Assistant</option>
          <option value="12h" ${this._getClockFormat() === '12h' ? 'selected' : ''}>12 horas · AM / PM</option>
          <option value="24h" ${this._getClockFormat() === '24h' ? 'selected' : ''}>24 horas</option>
        </select>
        <!-- Appearance & Contrast Selector -->
        <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 10px;">
          <label style="font-size: 11.5px; font-weight: 700; opacity: 0.85; display: flex; align-items: center; gap: 6px;">${this._t('contrast_selector_lbl') || '👁️ Aspecto y Contraste'}</label>
          <select id="dropdown-contrast-select" class="glass-control" aria-label="${this._t('contrast_selector_lbl') || 'Aspecto y Contraste'}" style="width: 100%; height: 38px; border-radius: 10px; padding: 0 12px; font-size: 12.5px; font-weight: 700; background: rgba(255,255,255,0.06); border: 1px solid var(--v2066-border); color: var(--v2066-text); outline: none; cursor: pointer;">
            <option value="standard" ${this._getProfileContrast() === 'standard' ? 'selected' : ''}>${this._t('contrast_standard') || '✨ Estándar (Liquid Glass)'}</option>
            <option value="high" ${this._getProfileContrast() === 'high' ? 'selected' : ''}>${this._t('contrast_high') || '🖤 Alto Contraste (OLED / Oscuro)'}</option>
          </select>
        </div>

        <label for="dropdown-visual-select">Modo de efectos</label>
        <select id="dropdown-visual-select" class="glass-control">
          <option value="3d" ${!this.classList.contains('argus-perf-essential') ? 'selected' : ''}>Efectos 3D</option>
          <option value="lite" ${this.classList.contains('argus-perf-essential') ? 'selected' : ''}>Modo Lite (solo CSS)</option>
        </select>

        <!-- Interaction / Gesture Selector (WCAG 2.5.1) -->
        <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 10px;">
          <label style="font-size: 11.5px; font-weight: 700; opacity: 0.85; display: flex; align-items: center; gap: 6px;">${this._t('gesture_selector_lbl') || '🕹️ Modo de Control (Accesibilidad)'}</label>
          <select id="dropdown-gesture-select" class="glass-control" aria-label="${this._t('gesture_selector_lbl') || 'Modo de control de alarma'}" style="width: 100%; height: 38px; border-radius: 10px; padding: 0 12px; font-size: 12.5px; font-weight: 700; background: rgba(255,255,255,0.06); border: 1px solid var(--v2066-border); color: var(--v2066-text); outline: none; cursor: pointer;">
            <option value="slide" ${this._getProfileGesture() === 'slide' ? 'selected' : ''}>${this._t('gesture_slide') || '↔️ Deslizador Táctil (Antitoques)'}</option>
            <option value="touch" ${this._getProfileGesture() === 'touch' ? 'selected' : ''}>${this._t('gesture_touch') || '👆 Botón Accesible (Toque Simple)'}</option>
          </select>
        </div>

        <!-- PIN management section -->
        ${(canChangePin || canChangeMasterPin) ? `
        <div style="display: flex; flex-direction: column; gap: 8px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px; margin-top: 2px;">
          <span style="font-size: 11.5px; font-weight: 700; opacity: 0.85;">${this._t('pin_management') || '🔑 Gestión de Pines'}</span>
          
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${canChangePin ? `
            <div class="profile-card-tile">
              <div style="display: flex; flex-direction: column; gap: 3px; min-width: 0;">
                <span style="font-size: 12.5px; font-weight: 700; color: #f1f5f9; white-space: nowrap;">${this._t('access_pin_lbl') || 'PIN de Perfil'}</span>
                <div style="display: flex; align-items: center; gap: 6px;">
                  ${hasAccessPin ? `
                  <span style="font-size: 11px; font-weight: 750; color: #34d399; display: flex; align-items: center; gap: 5px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: #34d399; box-shadow: 0 0 6px rgba(52,211,153,0.6);"></span> ${this._t('configured_pin_badge') || 'Configurado'}
                  </span>
                  ` : `
                  <span style="font-size: 11px; font-weight: 750; color: #fbbf24; display: flex; align-items: center; gap: 5px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.6);"></span> ${this._t('no_pin_badge') || 'Sin PIN'}
                  </span>
                  `}
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                ${hasAccessPin ? `
                <button id="btn-dropdown-change-access-pin" class="profile-btn" aria-label="Cambiar PIN de perfil">${this._t('change_btn') || 'Cambiar'}</button>
                <button id="btn-dropdown-remove-access-pin" class="profile-btn danger" aria-label="Eliminar PIN de perfil">${this._t('remove_btn') || 'Eliminar'}</button>
                ` : `
                <button id="btn-dropdown-set-access-pin" class="profile-btn primary" aria-label="Configurar PIN de perfil">⚙️ ${this._t('configure_btn') || 'Configurar'}</button>
                `}
              </div>
            </div>
            ` : ''}
            
            ${canChangeMasterPin ? `
            <div class="profile-card-tile">
              <div style="display: flex; flex-direction: column; gap: 3px; min-width: 0;">
                <span style="font-size: 12.5px; font-weight: 700; color: #f1f5f9; white-space: nowrap;">${this._t('master_pin_lbl') || 'PIN de Armado'}</span>
                <div style="display: flex; align-items: center; gap: 6px;">
                  ${hasMasterPin ? `
                  <span style="font-size: 11px; font-weight: 750; color: #34d399; display: flex; align-items: center; gap: 5px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: #34d399; box-shadow: 0 0 6px rgba(52,211,153,0.6);"></span> ${this._t('configured_pin_badge') || 'Configurado'}
                  </span>
                  ` : `
                  <span style="font-size: 11px; font-weight: 750; color: #fbbf24; display: flex; align-items: center; gap: 5px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.6);"></span> ${this._t('no_pin_badge') || 'Sin PIN'}
                  </span>
                  `}
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                ${hasMasterPin ? `
                <button id="btn-dropdown-change-master-pin" class="profile-btn" aria-label="Cambiar PIN de armado">${this._t('change_btn') || 'Cambiar'}</button>
                <button id="btn-dropdown-remove-master-pin" class="profile-btn danger" aria-label="Eliminar PIN de armado">${this._t('remove_btn') || 'Eliminar'}</button>
                ` : `
                <button id="btn-dropdown-set-master-pin" class="profile-btn primary" aria-label="Configurar PIN de armado">⚙️ ${this._t('configure_btn') || 'Configurar'}</button>
                `}
              </div>
            </div>
            ` : ''}
          </div>
        </div>
        ` : ''}

        <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px;">
          <label for="dropdown-shield-select" style="font-size:11.5px;font-weight:700;opacity:.85;">✧ Emblema de seguridad</label>
          <select id="dropdown-shield-select" class="glass-control" aria-label="Emblema de seguridad" style="width:100%;height:38px;border-radius:10px;padding:0 12px;font-size:12.5px;font-weight:700;background:rgba(255,255,255,.06);border:1px solid var(--v2066-border);color:var(--v2066-text);outline:none;cursor:pointer;">
            <option value="core" ${this._getProfileShieldStyle() === 'core' ? 'selected' : ''}>Núcleo de seguridad · Predeterminado</option>
            <option value="argus" ${this._getProfileShieldStyle() === 'argus' ? 'selected' : ''}>Emblema Argus</option>
          </select>
        </div>

        <!-- Home Name Section -->
        <div class="profile-card-tile" style="margin-top: 4px;">
          <div style="display: flex; flex-direction: column; min-width: 0; flex: 1 1 auto; gap: 3px;">
            <span style="font-size: 11px; font-weight: 750; color: #94a3b8; white-space: nowrap; text-transform: uppercase; letter-spacing: 0.04em;">🏡 ${this._t('home_name_lbl') || 'Nombre del Hogar'}</span>
            <span id="dropdown-home-name" style="font-size: 14px; font-weight: 850; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 240px; display: block;" title="${this._escapeHtml(this._homeName || 'Mi Casa')}">${this._escapeHtml(this._homeName || 'Mi Casa')}</span>
          </div>
          <button id="btn-dropdown-edit-home-name" class="profile-btn" aria-label="Cambiar nombre de la casa" style="min-height: 36px; padding: 7px 16px;">✏️ ${this._t('change_btn') || 'Cambiar'}</button>
        </div>

        <!-- Switch user button -->
        <button id="btn-dropdown-switch-user" class="profile-btn" aria-label="Cambiar perfil de usuario" style="width: 100% !important; min-height: 42px; padding: 8px 14px; border-radius: 12px; font-size: 13px; font-weight: 800; margin-top: 8px; background: rgba(255,255,255,0.06) !important; border: 1px solid rgba(255,255,255,0.15) !important;">
          ${this._t('switch_profile_btn') || '👤 Cambiar de Perfil'}
        </button>

        <!-- Argus Support Links (Star, PayPal, Email) -->
        <div style="display: flex; align-items: center; justify-content: space-around; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px; margin-top: 10px; font-size: 12px;">
          <a href="https://github.com/Chrisalvir1/Argus" target="_blank" rel="noopener noreferrer" style="color: #facc15; text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 5px;">⭐ GitHub</a>
          <span style="opacity: 0.3; color: #fff;">•</span>
          <a href="https://paypal.me/CEstradaAlvir" target="_blank" rel="noopener noreferrer" style="color: #38bdf8; text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 5px;">☕ PayPal</a>
          <span style="opacity: 0.3; color: #fff;">•</span>
          <a href="mailto:chrisalvir01@gmail.com" style="color: #c084fc; text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 5px;">✉️ Ideas</a>
        </div>
      </div>
      </div>
    `;

    // Click handler for pill to toggle dropdown
    const pill = container.querySelector('.hero-profile-pill');
    const dropdownSource = container.querySelector('#profile-dropdown');
    if (!dropdownSource) return;
    try {
      profileDialogModule ??= await import('../features/profile/dialog');
    } catch (error) {
      console.error('Argus profile controls failed to load:', error);
      return;
    }
    if (!dropdownSource.isConnected) return;
    const profileDialog = profileDialogModule.mountProfileDialog(dropdownSource);
    const dropdown = profileDialog?.element;
    if (!dropdown) return;
    
    if (pill && dropdown) {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDialog.toggle();
      });
      // Close dropdown when clicking outside
      const _closeOnClickOutside = (e) => {
        const path = e.composedPath ? e.composedPath() : [e.target];
        const insideContainer = path.some(el => el === container || (el.closest && el.closest?.('#profile-dropdown')));
        if (!profileDialog.isOpen()) {
          document.removeEventListener('click', _closeOnClickOutside, true);
        } else if (!insideContainer) {
          profileDialog.close();
          document.removeEventListener('click', _closeOnClickOutside, true);
        }
      };
      pill.addEventListener('click', () => {
        setTimeout(() => {
          if (profileDialog.isOpen()) {
            document.addEventListener('click', _closeOnClickOutside, true);
          }
        }, 10);
      });
    }

    // Language dropdown change listener
    const langSelect = dropdown.querySelector('#dropdown-lang-select');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        this._setLanguage(e.target.value);
      });
    }

    dropdown.querySelector<HTMLSelectElement>('#dropdown-clock-select')?.addEventListener('change', async event => {
      const select = event.target as HTMLSelectElement;
      const previous = this._getClockFormat();
      select.disabled = true;
      try {
        await this._send('argus/save_ui', {clock_format: select.value});
        this._ui.clock_format = select.value;
        this._clockFormat = select.value;
        this._updateHeroClock();
      } catch (error) {
        select.value = previous;
        await this._showArgusConfirmModal(error.message || String(error), {confirmLabel: 'OK'});
      } finally { select.disabled = false; }
    });

    dropdown.querySelector('#dropdown-visual-select')?.addEventListener('change', (event: Event) => {
      const mode = (event.target as HTMLSelectElement).value;
      this.classList.toggle('argus-perf-essential', mode === 'lite');
      try { localStorage.setItem('argus_visual_mode', mode); } catch { /* Keep the current selection. */ }
    });

    // Contrast dropdown change listener
    const contrastSelect = dropdown.querySelector('#dropdown-contrast-select');
    if (contrastSelect) {
      contrastSelect.addEventListener('change', (e: Event) => {
        this._setContrastMode((e.target as HTMLSelectElement).value);
      });
    }
    const shieldSelect = dropdown.querySelector('#dropdown-shield-select');
    shieldSelect?.addEventListener('change', (e: Event) => this._setProfileShieldStyle((e.target as HTMLSelectElement).value));
    this._initContrastMode();

    // Gesture dropdown change listener (WCAG 2.5.1)
    const gestureSelect = dropdown.querySelector('#dropdown-gesture-select');
    if (gestureSelect) {
      gestureSelect.addEventListener('change', (e: Event) => {
        this._setGestureMode((e.target as HTMLSelectElement).value);
      });
    }
    this._initGestureMode();

    // Change profile picture → navigate to HA Persons page
    dropdown.querySelector('#btn-change-profile-picture')?.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDialog.close();
      try {
        window.history.pushState(null, '', '/config/person');
        window.dispatchEvent(new CustomEvent('location-changed'));
      } catch (_) {
        window.location.href = '/config/person';
      }
    });

    // Action listeners inside dropdown:
    // Switch profile:
    dropdown.querySelector('#btn-dropdown-switch-user')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this._switchProfile();
    });

    // Handle Set/Change Access PIN via liquid-glass modal:
    const handleSetAccessPin = async (e: Event) => {
      e.stopPropagation();
      profileDialog.close();
      const newPin = await this._showArgusInputModal({
        title: `🔑 ${this._t('access_pin_lbl') || 'Pin perfil Argus'}`,
        label: this._t('enter_new_pin') || 'Nuevo PIN (4 a 12 dígitos). Deja ambos campos nuevos vacíos para eliminarlo:',
        placeholder: '••••',
        type: 'password',
        numeric: true,
      });
      if (newPin === null) return;
      const confirmedPin = await this._showArgusInputModal({
        title: 'Confirmar nuevo PIN de armado',
        label: 'Repite el nuevo PIN. Para eliminarlo, déjalo vacío también.',
        type: 'password', numeric: true,
      });
      if (confirmedPin === null) return;
      if (newPin !== confirmedPin) {
        await this._showArgusConfirmModal('Los nuevos PIN no coinciden. No se realizó ningún cambio.', { confirmLabel: 'OK' });
        return;
      }
      if (!newPin && !await this._showArgusConfirmModal('¿Eliminar el PIN de armado? Se comprobará el PIN actual antes de eliminarlo.', { confirmLabel: 'Eliminar PIN' })) return;
      try {
        await this._send('argus/save_user_access_pin', {
          argus_user_id: prof.id,
          pin: newPin,
          confirm_pin: confirmedPin,
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
    dropdown.querySelector('#btn-dropdown-set-access-pin')?.addEventListener('click', handleSetAccessPin);
    dropdown.querySelector('#btn-dropdown-change-access-pin')?.addEventListener('click', handleSetAccessPin);

    // Handle Remove Access PIN:
    dropdown.querySelector('#btn-dropdown-remove-access-pin')?.addEventListener('click', async (e) => {
      e.stopPropagation();
      profileDialog.close();
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
      profileDialog.close();
      const entryId = this._dashboard?.entries?.[0]?.entry_id || this._dashboard?.entry_id || this._modeEntryId;
      
      let currentPin = '';
      if (hasMasterPin) {
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
        label: this._t('enter_new_pin') || 'Nuevo PIN (4 a 12 dígitos). Deja ambos campos nuevos vacíos para eliminarlo:',
        placeholder: '••••',
        type: 'password',
        numeric: true,
      });
      if (newPin === null) return;
      const confirmedPin = await this._showArgusInputModal({
        title: 'Confirmar nuevo PIN de armado',
        label: 'Repite el nuevo PIN. Para eliminarlo, déjalo vacío también.',
        type: 'password', numeric: true,
      });
      if (confirmedPin === null) return;
      if (newPin !== confirmedPin) {
        await this._showArgusConfirmModal('Los nuevos PIN no coinciden. No se realizó ningún cambio.', { confirmLabel: 'OK' });
        return;
      }
      if (!newPin && !await this._showArgusConfirmModal('¿Eliminar el PIN de armado? Se comprobará el PIN actual antes de eliminarlo.', { confirmLabel: 'Eliminar PIN' })) return;

      try {
        await this._send('argus/update_master_pin', {
          entry_id: entryId,
          pin: newPin,
          confirm_pin: confirmedPin,
          current_pin: currentPin,
        });
        if (this._dashboard?.entries?.[0]) {
          this._dashboard.entries[0].pin_configured = Boolean(newPin);
        }
        await this._showArgusConfirmModal(this._t('pin_updated') || 'PIN actualizado exitosamente', { confirmLabel: 'OK' });
        this._load();
      } catch (err) {
        this._showArgusConfirmModal(err.message || this._format('generic_error', { error: err }), { confirmLabel: 'OK' });
      }
    };
    dropdown.querySelector('#btn-dropdown-set-master-pin')?.addEventListener('click', handleSetMasterPin);
    dropdown.querySelector('#btn-dropdown-change-master-pin')?.addEventListener('click', handleSetMasterPin);

    // Handle Remove Master PIN:
    dropdown.querySelector('#btn-dropdown-remove-master-pin')?.addEventListener('click', async (e) => {
      e.stopPropagation();
      profileDialog.close();
      const entryId = this._dashboard?.entries?.[0]?.entry_id || this._dashboard?.entry_id || this._modeEntryId;
      
      let currentPin = '';
      if (hasMasterPin) {
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
          confirm_pin: '',
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
    dropdown.querySelector('#btn-dropdown-edit-home-name')?.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDialog.close();
      this._editHomeName();
    });
  }

  async _switchProfile() {
    let bootstrap;
    try {
      bootstrap = await this._send('argus/login_bootstrap');
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
    this._hideInitialCurtain();
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
    this._hideInitialCurtain();
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
    this._hideInitialCurtain();

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

        const circle = item.querySelector('.argus-profile-circle') as HTMLElement | null;
        if (circle) {
          circle.style.transform = 'scale(0.92)';
          circle.style.transition = 'transform 0.1s ease';
        }

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
              if (circle) circle.style.transform = '';
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
    this._initContrastMode();
    this._updateHeroProfileDisplay();

    // Load Argus behind the welcome animation. Waiting until the animation
    // ended made the dashboard appear as a second full-screen reload.
    let dashboardLoadPromise: Promise<unknown> | null = null;
    if (!this._dashboardLoading) {
      this._dashboardLoading = true;
      dashboardLoadPromise = this._load()
        .catch(e => console.error('Load error after profile animation:', e))
        .finally(() => { this._dashboardLoading = false; });
    }

    // Prepare target destination avatar with initial empty opacity state
    const destEl: HTMLElement | null = this.shadowRoot.getElementById('hero-profile-avatar') 
      || this.shadowRoot.querySelector('#hero-profile-container .user-avatar')
      || this.shadowRoot.querySelector('#hero-profile-container img')
      || this.shadowRoot.querySelector('#hero-profile-container .hero-profile-pill');
    const destStyle = destEl ? { opacity: destEl.style.opacity, transition: destEl.style.transition, transform: destEl.style.transform } : null;
    let liveDestEl: HTMLElement | null = null;
    let liveDestStyle: { opacity: string; transition: string; transform: string } | null = null;
    
    if (destEl) {
      destEl.style.opacity = '0';
      destEl.style.transition = 'opacity 0.25s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }

    // Ensure dashboard wrap is ready under the overlay
    const readyWrap = this.shadowRoot.querySelector('.wrap') as HTMLElement | null;
    if (readyWrap) {
      readyWrap.style.removeProperty('display');
      readyWrap.classList.add('wrap-ready');
    }

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
    try {

    // Wait 1 frame so the overlay covers the screen instantly
    await new Promise(r => requestAnimationFrame(r));
    // Remove login screens beneath
    this.shadowRoot.querySelectorAll('.argus-profile-overlay, .argus-pin-prompt').forEach(el => el.remove());

    const avatar = overlay.querySelector('#welcome-avatar-flying') as HTMLElement;
    const textGroup = overlay.querySelector('#welcome-text-anim') as HTMLElement;
    if (avatar && textGroup) {
      avatar.style.transform = 'scale(0.88)';
      avatar.style.opacity = '0';
      textGroup.style.opacity = '0';
      textGroup.style.transform = 'translateY(8px)';

      await new Promise(r => requestAnimationFrame(r));
      
      avatar.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease';
      avatar.style.transform = 'scale(1)';
      avatar.style.opacity = '1';
      
      textGroup.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.06s, opacity 0.3s ease 0.06s';
      textGroup.style.transform = 'translateY(0)';
      textGroup.style.opacity = '1';

      // Keep the flight free of dashboard mounting and WebGL shader compilation.
      await new Promise(r => setTimeout(r, 600));

      textGroup.style.transition = 'opacity 0.12s ease';
      textGroup.style.opacity = '0';

      const rect = avatar.getBoundingClientRect();
      
      // Accurately measure destination profile avatar position
      liveDestEl = this.shadowRoot.getElementById('hero-profile-avatar')
        || this.shadowRoot.querySelector('#hero-profile-container .user-avatar')
        || this.shadowRoot.querySelector('#hero-profile-container img')
        || this.shadowRoot.querySelector('#hero-profile-container .hero-profile-pill');

      let destX = window.innerWidth / 2, destY = 60, targetScale = 0.35;
      
      if (liveDestEl) {
        if (liveDestEl !== destEl) liveDestStyle = { opacity: liveDestEl.style.opacity, transition: liveDestEl.style.transition, transform: liveDestEl.style.transform };
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
      
      // Fast fluid glide to destination top-bar coordinates
      avatar.style.transition = 'transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.2s ease 0.5s';
      avatar.style.transform = `translate(${moveX}px, ${moveY}px) scale(${targetScale})`;
      
      overlay.style.transition = 'background-color 0.7s ease';
      overlay.style.backgroundColor = 'transparent';
      
      await new Promise(r => setTimeout(r, 700));
      
      // Reveal real top-bar avatar on landing
      if (liveDestEl) {
        liveDestEl.style.opacity = '1';
        liveDestEl.style.transform = 'scale(1)';
      }
    }

    await new Promise(r => setTimeout(r, 30));
    } finally {
      if (destEl && destStyle) {
        destEl.style.opacity = destStyle.opacity;
        destEl.style.transition = destStyle.transition;
        destEl.style.transform = destStyle.transform;
      }
      if (liveDestEl && liveDestEl !== destEl && liveDestStyle) {
        liveDestEl.style.opacity = liveDestStyle.opacity;
        liveDestEl.style.transition = liveDestStyle.transition;
        liveDestEl.style.transform = liveDestStyle.transform;
      }
      if (dashboardLoadPromise) await dashboardLoadPromise;
      overlay.remove();
      this._nukeAllLoginOverlays();
    }
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

if (!customElements.get('argus-panel-v2018')) customElements.define('argus-panel-v2018', ArgusPanel);

try { if (!customElements.get('argus-panel')) customElements.define('argus-panel', ArgusPanel); } catch(_) {}
