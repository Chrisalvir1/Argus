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
    'access_desc': 'Gestión global de seguridad, PIN maestro y administradores.',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': 'Control de Acceso y Usuarios',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': 'Vence',
    'activity_log': '📋 Historial de Actividad',
    'add_btn': '+ Añadir',
    'add_user': 'Agregar usuario',
    'admin_only': 'Solo administradores pueden modificar esta sección.',
    'alarm_instance': 'Instancia de Alarma',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': 'Armado (s)',
    'arm_time_label': 'Tiempo armado (s)',
    'armed_away': 'Ausente',
    'armed_home': 'En Casa',
    'armed_night': 'Noche',
    'armed_vacation': 'Vacaciones',
    'arming': 'Armando',
    'automations': '⚡ Automatizaciones',
    'available': 'Disponibles',
    'background_lbl': 'Fondo',
    'backup_desc': 'Guarda una copia de seguridad de tus ajustes o restaura una anterior.',
    'backup_title': 'Respaldo y Restauración',
    'badge_pin_reset': 'PIN Restablecido',
    'badge_pin_reset_failed': 'Fallo Reset PIN',
    'battery_low': '⚠️ Batería baja',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Predeterminado (Argus)',
    'bg_hub_selected_from_history': 'Fondo Argus seleccionado desde historial.',
    'bg_hub_title': 'Fondo Argus',
    'bg_image_opt': 'Imagen / GIF',
    'bg_none': 'Predeterminado',
    'bg_panel_none': 'Sin fondo',
    'bg_panel_selected_from_history': 'Fondo de panel seleccionado desde historial.',
    'bg_panel_title': 'Fondo para panel',
    'bg_photo': 'Una foto',
    'bg_sound_opt': 'Sonido de video',
    'bg_video': 'Video en loop',
    'bg_weather': 'Clima animado',
    'bridge_not_connected': 'Puente no configurado',
    'bridge_not_desc': 'Activa la integración HomeKit Bridge en Home Assistant e incluye la entidad <code>alarm_control_panel.argus_*</code> para generar un código QR de emparejamiento.',
    'bridge_paired': 'Puente configurado',
    'bridge_paired_desc': 'El puente <b>{bridge}</b> está configurado en Home Assistant. Home Assistant no permite comprobar desde aquí si fue añadido a Apple Home ni conocer su nombre.',
    'btn_away': '🔒 AUSENTE',
    'btn_create_argus_profile': 'Crear perfil Argus',
    'btn_disarmed': 'DESARMADO',
    'btn_home': '🏠 EN CASA',
    'btn_night': '🌙 NOCHE',
    'btn_sos': '🚨 SOS / PÁNICO',
    'btn_vacation': '✈️ VACACIONES',
    'bypass_lbl': '🚫 Omitir',
    'cancel': 'Cancelar',
    'cancel_btn': 'Cancelar',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': 'No se puede eliminar el último administrador vinculante.',
    'change_btn': 'Cambiar',
    'change_pin': 'PIN Maestro',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': 'Limpiar',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': 'BORRAR',
    'clock_12h': '12 horas (AM/PM)',
    'clock_24h': '24 horas',
    'clock_auto': 'Automático (Home Assistant)',
    'clock_format_desc': 'Elige cómo se muestran las horas en el panel y el historial.',
    'clock_format_label': 'Formato de hora',
    'close': 'Cerrar',
    'confirm': '✓ Confirmar',
    'confirm_pin': 'Confirmar PIN',
    'connected': 'CONECTADO',
    'create_ha': '+ Crear en HA',
    'current_pin': 'PIN actual',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': 'Borrar de almacenamiento',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': '¿Estás seguro de que deseas eliminar a \"{name}\"?',
    'delete_user_tooltip': 'Eliminar perfil de usuario',
    'deselect_all': '☐ Ninguno',
    'details_notif': 'Notificación de alarma',
    'disarm_time': 'Retraso de entrada (s)',
    'disarm_time_label': 'Retraso de entrada (s)',
    'disarmed': 'Desarmado',
    'done': 'Готово',
    'edit_btn': '✏️ Editar',
    'edit_dashboard': 'Editar tablero',
    'edit_dashboard_done': '✓ Listo',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': 'Error al cargar historial de archivos.',
    'exit_to_ha': 'Volver a Home Assistant',
    'exp_indefinite': 'Indefinido',
    'exp_temporary': 'Temporal (Fecha/Hora)',
    'expired': 'Expirado',
    'export_btn': '📤 Descargar',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': '¿Seguro que deseas borrar \"{filename}\" permanentemente?',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} archivos',
    'files_count_short': '{count} arch.',
    'first_run_blocked_desc': 'Для первой настройки Argus требуется администратор Home Assistant.',
    'first_run_blocked_title': 'Доступ запрещен',
    'first_run_desc': 'Завершите настройку для безопасности вашего дома.',
    'first_run_pin_expl': 'PIN доступа открывает Argus. Мастер-PIN управляет постановкой и снятием с охраны.',
    'first_run_skip': 'Пропустить пока',
    'first_run_start': 'Начать с Argus',
    'first_run_welcome': 'Спасибо, что выбрали Argus Home Hub. Добро пожаловать.',
    'forgot_pin': '¿Olvidaste tu PIN?',
    'fullscreen_title': 'Полный экран',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Cuenta de Home Assistant: {name}',
    'ha_account_unavailable': 'Vinculación no disponible',
    'ha_admin_label': 'Home Assistant Admin',
    'ha_role_admin': 'Admin HA',
    'ha_role_standard': 'Usuario HA',
    'ha_standard_user_label': 'Standard HA User',
    'hero_desc': 'Sistema integral de seguridad, control de acceso, automatizaciones y HomeKit.',
    'history_refresh': '🔄 Actualizar',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': 'Nombre del Hogar',
    'home_name_lbl': 'Nombre del Hogar',
    'home_name_modal_desc': 'Este nombre aparece en el panel de instancias y en pantalla completa.',
    'home_name_modal_title': '🏡 Nombre del Hogar',
    'home_name_placeholder': 'Mi Casa',
    'homekit_bridge': 'Puente HomeKit',
    'homekit_house': 'Casa de Apple Home',
    'homekit_not_paired': 'No vinculado a ninguna casa.',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 Restaurar',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': 'Instancias activas',
    'introduce_pin': 'Introduce tu PIN',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': 'Administrador',
    'lang_select_title': 'Seleccionar Idioma',
    'lang_selector_lbl': '⚙️ Idioma / Language',
    'language': 'Idioma',
    'lbl_aesthetic_custom': 'Más Ajustes / SOS',
    'lbl_load_file': 'Cargar archivo:',
    'lbl_uploaded_files': 'Archivos subidos en servidor',
    'link_ha_user': 'Vincular a Usuario Home Assistant',
    'linked_rules': 'Reglas vinculadas a Argus',
    'loading': 'Загрузка…',
    'lock_if_open': 'Bloquear si abiertos',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus inicializado por {user}',
    'log_action_fullscreen_unlocked': 'Kiosco desbloqueado por {user}',
    'log_action_master_pin_rejected': 'Intento incorrecto de PIN maestro por {user}',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': 'Acción rechazada',
    'log_action_save_ui': 'Ajustes de UI guardados por {user}',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': 'Perfil seleccionado: {user}',
    'log_action_sos': 'Pánico SOS activado por {user}',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'Pánico SOS detenido por {user}',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': 'PIN de acceso verificado por {user}',
    'log_armed': 'Armado',
    'log_by': 'por',
    'log_detail_armed': 'Modo',
    'log_detail_disarm': 'Sistema desarmado',
    'log_detail_pin_reset': 'PIN maestro restablecido por el administrador',
    'log_detail_pin_reset_failed': 'Intento no autorizado de restablecer el PIN maestro',
    'log_detail_triggered': 'Activación automática',
    'log_disarmed': 'Desarmado',
    'log_no_events': 'Sin eventos recientes.',
    'log_sensor': 'Sensor',
    'log_triggered': '¡Disparado!',
    'login_btn': 'Iniciar sesión',
    'manual_arm': 'Manual',
    'manual_disarm': 'Manual (Desarmado)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': 'Ausente',
    'mode_home': 'En Casa',
    'mode_night': 'Noche',
    'mode_vacation': 'Vacaciones',
    'modes': 'Modos',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Nunca activada',
    'new_pin': 'Nuevo PIN',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': 'No hay automatizaciones vinculadas a Argus.',
    'no_files_uploaded': 'Sin archivos subidos. Carga un fondo usando los controles de arriba.',
    'no_files_uploaded_short': 'Sin archivos subidos.',
    'no_instances': 'No hay instancias. Agrega Argus desde Integraciones.',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': 'Todas las cuentas de Home Assistant activas tienen perfil.',
    'no_users': 'Sin usuarios adicionales configurados.',
    'none_selected': 'Ninguno seleccionado',
    'notif_desc': 'Selecciona los dispositivos móviles registrados en HA que recibirán alertas de Argus.',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 Notificaciones',
    'open_sensors': 'Sensores abiertos',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': 'Cuenta regresiva',
    'pin_active_no': 'PIN Maestro: Desactivado',
    'pin_active_yes': 'PIN Maestro: Activo',
    'pin_deleted': '✓ PIN Eliminado',
    'pin_desc': 'Código numérico para armar y desarmar.',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ PIN actual incorrecto',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': 'PIN Maestro',
    'pin_modal_desc': 'PIN numérico para desarmar Argus',
    'pin_placeholder': 'PIN de acceso',
    'pin_remove_hint': 'Para quitar el PIN: Introduce el actual y deja los campos de abajo vacíos.',
    'pin_reset_admin_only': '❌ Error: Solo los administradores de Home Assistant pueden restablecer el PIN maestro.',
    'pin_reset_confirm': '¿Estás seguro de que deseas restablecer el PIN maestro? Se eliminará el PIN actual y se desactivará.',
    'pin_updated': '✓ PIN Actualizado',
    'profile_is_yours': 'Este es tu perfil',
    'profile_needs_pin': 'Perfil ajeno — introduce el PIN de acceso',
    'profile_no_pin_access': 'Este perfil no tiene PIN de acceso. No puedes abrirlo.',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ Restablecer',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': 'Restablecer diseño',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'Administrador de Argus',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': 'Usuario estándar',
    'role_argus_user': 'Usuario estándar',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': 'Guardar',
    'save_config': 'GUARDAR CONFIGURACIÓN',
    'save_mode': '💾 Guardar modo',
    'save_notif': 'Guardar',
    'save_user': 'Guardar',
    'search_placeholder': 'Buscar por nombre, área o entity_id',
    'search_select': 'Buscar y seleccionar',
    'searching_auto': '↻ Buscando automatizaciones...',
    'select_all': '☑ Todos',
    'select_btn': '+ Seleccionar',
    'select_profile_subtitle': 'Accede a tus paneles e instancias de seguridad de Argus.',
    'select_profile_title': 'Selecciona tu perfil',
    'selected_lbl': 'Seleccionadas',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': 'Sensores de Intrusión',
    'sensors_to_bypass': 'Sensores a Omitir',
    'settings': '⚙️ Ajustes',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': 'Sirenas',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 Llamar a Emergencias',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': 'Desliza para disparar la alarma inmediatamente.',
    'sos_confirm_title': 'Confirmar pánico',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': 'Desliza para activar SOS',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': 'CERRADO',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': 'ABIERTO',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 Cambiar de Perfil',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': 'SISTEMA ARMADO',
    'system_disarmed': 'SISTEMA DESARMADO',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': 'Automático (sensor local / termostato / clima)',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(termostato)',
    'thermostat_alert_notif': '🌡️ Alerta de temperatura',
    'times_section': '⏱️ Tiempos',
    'triggered': '¡ALARMA!',
    'unavailable': 'No disponible',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ Deshacer Restablecimiento',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': 'Cuentas de Home Assistant sin perfil Argus',
    'unlock_kiosk': 'Desbloquear kiosco',
    'update_pin': 'Actualizar PIN',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': 'Panel',
    'use_ha_language': 'Usar idioma de Home Assistant',
    'user_default': 'Пользователь',
    'user_exp_date': 'Fecha/Hora de Vencimiento',
    'user_exp_type': 'Vencimiento',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': 'PIN de usuario',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Rol Argus',
    'username': 'Nombre de Usuario',
    'users_title': '👥 Usuarios y Control de Acceso',
    'wait_if_open': 'Esperar armado en espera',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Bienvenido/a,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
  'en': {
    'accept': 'Accept',
    'access_desc': 'Global security management, master PIN and administrators.',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': 'Access Control & Users',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': 'Expires',
    'activity_log': '📋 Activity Log',
    'add_btn': '+ Add',
    'add_user': 'Add User',
    'admin_only': 'Only administrators can modify this section.',
    'alarm_instance': 'Alarm Instance',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': 'Arming delay (s)',
    'arm_time_label': 'Arm time (s)',
    'armed_away': 'Away',
    'armed_home': 'Home',
    'armed_night': 'Night',
    'armed_vacation': 'Vacation',
    'arming': 'Arming',
    'automations': '⚡ Automations',
    'available': 'Available',
    'background_lbl': 'Background',
    'backup_desc': 'Save a backup of your settings or restore a previous one.',
    'backup_title': 'Backup & Restore',
    'badge_pin_reset': 'PIN Reset',
    'badge_pin_reset_failed': 'PIN Reset Failed',
    'battery_low': '⚠️ Low Battery',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Default (Argus)',
    'bg_hub_selected_from_history': 'Argus background selected from history.',
    'bg_hub_title': 'Argus background',
    'bg_image_opt': 'Image / GIF',
    'bg_none': 'Default',
    'bg_panel_none': 'No background',
    'bg_panel_selected_from_history': 'Panel background selected from history.',
    'bg_panel_title': 'Panel background',
    'bg_photo': 'One photo',
    'bg_sound_opt': 'Video sound',
    'bg_video': 'Loop video',
    'bg_weather': 'Animated weather',
    'bridge_not_connected': 'Bridge not configured',
    'bridge_not_desc': 'Enable the HomeKit Bridge integration in Home Assistant and include the entity <code>alarm_control_panel.argus_*</code> to generate a pairing QR code.',
    'bridge_paired': 'Bridge configured',
    'bridge_paired_desc': 'The <b>{bridge}</b> bridge is configured in Home Assistant. Home Assistant cannot verify from here whether it was added to Apple Home or report its name.',
    'btn_away': '🔒 AWAY',
    'btn_create_argus_profile': 'Create Argus Profile',
    'btn_disarmed': 'DISARMED',
    'btn_home': '🏠 HOME',
    'btn_night': '🌙 NIGHT',
    'btn_sos': '🚨 SOS / PANIC',
    'btn_vacation': '✈️ VACATION',
    'bypass_lbl': '🚫 Bypass',
    'cancel': 'Cancel',
    'cancel_btn': 'Cancel',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': 'Cannot delete the last binding administrator.',
    'change_btn': 'Cambiar',
    'change_pin': 'Master PIN',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': 'Clear',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': 'CLEAR',
    'clock_12h': '12-hour (AM/PM)',
    'clock_24h': '24-hour',
    'clock_auto': 'Automatic (Home Assistant)',
    'clock_format_desc': 'Choose how time is displayed across panels and logs.',
    'clock_format_label': 'Time Format',
    'close': 'Close',
    'confirm': '✓ Confirm',
    'confirm_pin': 'Confirm PIN',
    'connected': 'CONNECTED',
    'create_ha': '+ Create in HA',
    'current_pin': 'Current PIN',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': 'Delete from storage',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': 'Are you sure you want to delete \"{name}\"?',
    'delete_user_tooltip': 'Delete user profile',
    'deselect_all': '☐ None',
    'details_notif': 'Alarm notification',
    'disarm_time': 'Entry delay (s)',
    'disarm_time_label': 'Entry delay (s)',
    'disarmed': 'Disarmed',
    'done': 'Готово',
    'edit_btn': '✏️ Edit',
    'edit_dashboard': 'Edit Dashboard',
    'edit_dashboard_done': '✓ Done',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': 'Error loading file history.',
    'exit_to_ha': 'Back to Home Assistant',
    'exp_indefinite': 'Indefinite',
    'exp_temporary': 'Temporary (Date/Time)',
    'expired': 'Expired',
    'export_btn': '📤 Download',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': 'Are you sure you want to permanently delete \"{filename}\"?',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} files',
    'files_count_short': '{count} files',
    'first_run_blocked_desc': 'A Home Assistant administrator is required to set up Argus for the first time.',
    'first_run_blocked_title': 'Access Denied',
    'first_run_desc': 'Complete setup to secure your home.',
    'first_run_pin_expl': 'The access PIN opens Argus. The master PIN controls arming and disarming.',
    'first_run_skip': 'Skip',
    'first_run_start': 'Start with Argus',
    'first_run_welcome': 'Thank you for choosing Argus Home Hub. Welcome.',
    'forgot_pin': 'Forgot PIN?',
    'fullscreen_title': 'Full screen',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Home Assistant Account: {name}',
    'ha_account_unavailable': 'Binding unavailable',
    'ha_admin_label': 'Home Assistant Admin',
    'ha_role_admin': 'HA Admin',
    'ha_role_standard': 'HA User',
    'ha_standard_user_label': 'Standard HA User',
    'hero_desc': 'Comprehensive security system, access control, automations, and HomeKit.',
    'history_refresh': '🔄 Refresh',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': 'Home Name',
    'home_name_lbl': 'Home Name',
    'home_name_modal_desc': 'This name appears in the instances panel and in full screen.',
    'home_name_modal_title': '🏡 Home Name',
    'home_name_placeholder': 'My Home',
    'homekit_bridge': 'HomeKit Bridge',
    'homekit_house': 'Apple Home',
    'homekit_not_paired': 'Not paired to any home.',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 Restore',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': 'Active Instances',
    'introduce_pin': 'Enter your PIN',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': 'Administrator',
    'lang_select_title': 'Select Language',
    'lang_selector_lbl': '⚙️ Language',
    'language': 'Language',
    'lbl_aesthetic_custom': 'Aesthetic Customization',
    'lbl_load_file': 'Upload file:',
    'lbl_uploaded_files': 'Uploaded files on server',
    'link_ha_user': 'Link to Home Assistant User',
    'linked_rules': 'Rules linked to Argus',
    'loading': 'Загрузка…',
    'lock_if_open': 'Lock if open',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus initialized by {user}',
    'log_action_fullscreen_unlocked': 'Kiosk unlocked by {user}',
    'log_action_master_pin_rejected': 'Incorrect master PIN attempt by {user}',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': 'Action rejected',
    'log_action_save_ui': 'UI Settings saved by {user}',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': 'Profile selected: {user}',
    'log_action_sos': 'SOS Panic triggered by {user}',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'SOS Panic stopped by {user}',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': 'Access PIN verified by {user}',
    'log_armed': 'Armed',
    'log_by': 'by',
    'log_detail_armed': 'Mode',
    'log_detail_disarm': 'System disarmed',
    'log_detail_pin_reset': 'Master PIN reset by administrator',
    'log_detail_pin_reset_failed': 'Unauthorized attempt to reset master PIN',
    'log_detail_triggered': 'Automatic activation',
    'log_disarmed': 'Disarmed',
    'log_no_events': 'No recent events.',
    'log_sensor': 'Sensor',
    'log_triggered': 'Triggered!',
    'login_btn': 'Login',
    'manual_arm': 'Manual',
    'manual_disarm': 'Manual (Disarmed)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': 'Away',
    'mode_home': 'Home',
    'mode_night': 'Night',
    'mode_vacation': 'Vacation',
    'modes': 'Modes',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Never triggered',
    'new_pin': 'New PIN',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': 'No automations linked to Argus.',
    'no_files_uploaded': 'No uploaded files. Upload a background using the controls above.',
    'no_files_uploaded_short': 'No uploaded files.',
    'no_instances': 'No instances. Add Argus from Integrations.',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': 'All active Home Assistant accounts have a profile.',
    'no_users': 'No additional users configured.',
    'none_selected': 'None selected',
    'notif_desc': 'Select mobile devices registered in HA that will receive Argus alerts.',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 Notifications',
    'open_sensors': 'Open sensors',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': 'Pending',
    'pin_active_no': 'Master PIN: Deactivated',
    'pin_active_yes': 'Master PIN: Active',
    'pin_deleted': '✓ PIN Deleted',
    'pin_desc': 'Numeric code to arm and disarm.',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ Incorrect current PIN',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': 'Master PIN',
    'pin_modal_desc': 'Numeric PIN to disarm Argus',
    'pin_placeholder': 'Access PIN',
    'pin_remove_hint': 'To remove PIN: Enter the current one and leave the fields below empty.',
    'pin_reset_admin_only': '❌ Error: Only Home Assistant administrators can reset the master PIN.',
    'pin_reset_confirm': 'Are you sure you want to reset the master PIN? The current PIN will be removed and deactivated.',
    'pin_updated': '✓ PIN Updated',
    'profile_is_yours': 'This is your profile',
    'profile_needs_pin': 'Another person’s profile — enter the access PIN',
    'profile_no_pin_access': 'This profile has no access PIN. You cannot open it.',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ Factory Reset',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': 'Reset Layout',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'Argus Administrator',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': 'Standard User',
    'role_argus_user': 'Standard User',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': 'Save',
    'save_config': 'SAVE CONFIGURATION',
    'save_mode': '💾 Save Mode',
    'save_notif': 'Save',
    'save_user': 'Save',
    'search_placeholder': 'Search by name, area or entity_id',
    'search_select': 'Search & select',
    'searching_auto': '↻ Searching automations...',
    'select_all': '☑ All',
    'select_btn': '+ Select',
    'select_profile_subtitle': 'Access your security panels and Argus instances.',
    'select_profile_title': 'Select Your Profile',
    'selected_lbl': 'Selected',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': 'Intrusion Sensors',
    'sensors_to_bypass': 'Sensors to Bypass',
    'settings': '⚙️ Settings',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': 'Sirens',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 Call Emergency Services',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': 'Slide to trigger the alarm immediately.',
    'sos_confirm_title': 'Confirm panic',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': 'Slide to activate SOS',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': 'CLOSED',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': 'OPEN',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 Switch Profile',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': 'SYSTEM ARMED',
    'system_disarmed': 'SYSTEM DISARMED',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': 'Automatic (local sensor / thermostat / climate)',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(thermostat)',
    'thermostat_alert_notif': '🌡️ Temperature alert',
    'times_section': '⏱️ Timers',
    'triggered': 'ALARM!',
    'unavailable': 'Unavailable',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ Undo Reset',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': 'Home Assistant accounts without Argus profile',
    'unlock_kiosk': 'Unlock kiosk',
    'update_pin': 'Update PIN',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': 'Panel',
    'use_ha_language': 'Use Home Assistant language',
    'user_default': 'Пользователь',
    'user_exp_date': 'Expiration Date/Time',
    'user_exp_type': 'Expiration',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': 'User PIN',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Argus Role',
    'username': 'Username',
    'users_title': '👥 Users & Access Control',
    'wait_if_open': 'Wait for sensors to close',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Welcome,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
  'fr': {
    'accept': 'Accepter',
    'access_desc': 'Gestion globale de la sécurité, PIN maître et administrateurs.',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': 'Contrôle d\'accès & Utilisateurs',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': 'Expire le',
    'activity_log': '📋 Journal d\'activité',
    'add_btn': '+ Ajouter',
    'add_user': 'Ajouter un utilisateur',
    'admin_only': 'Seuls les administrateurs peuvent modifier cette section.',
    'alarm_instance': 'Instance d\'alarme',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': 'Délai d\'armement (s)',
    'arm_time_label': 'Temps armement (s)',
    'armed_away': 'Absent',
    'armed_home': 'Maison',
    'armed_night': 'Nuit',
    'armed_vacation': 'Vacances',
    'arming': 'Armement',
    'automations': '⚡ Automatisations',
    'available': 'Disponibles',
    'background_lbl': 'Fond',
    'backup_desc': 'Enregistrez une sauvegarde ou restaurez une précédente.',
    'backup_title': 'Sauvegarde & Restauration',
    'badge_pin_reset': 'PIN Réinitialisé',
    'badge_pin_reset_failed': 'Échec Réinit. PIN',
    'battery_low': '⚠️ Batterie faible',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Par défaut (Argus)',
    'bg_hub_selected_from_history': 'Arrière-plan Argus sélectionné depuis l\'historique.',
    'bg_hub_title': 'Fond Argus',
    'bg_image_opt': 'Image / GIF',
    'bg_none': 'Par défaut',
    'bg_panel_none': 'Sans fond',
    'bg_panel_selected_from_history': 'Arrière-plan du panneau sélectionné depuis l\'historique.',
    'bg_panel_title': 'Fond du panneau',
    'bg_photo': 'Une photo',
    'bg_sound_opt': 'Son de la vidéo',
    'bg_video': 'Vidéo en boucle',
    'bg_weather': 'Météo animée',
    'bridge_not_connected': 'Pont non configuré',
    'bridge_not_desc': 'Activez l\'intégration HomeKit Bridge dans Home Assistant et incluez l\'entité <code>alarm_control_panel.argus_*</code> pour générer un QR d\'appairage.',
    'bridge_paired': 'Pont configuré',
    'bridge_paired_desc': 'Le pont <b>{bridge}</b> est configuré dans Home Assistant. Home Assistant ne peut pas vérifier ici son ajout à Apple Home ni fournir son nom.',
    'btn_away': '🔒 ABSENT',
    'btn_create_argus_profile': 'Créer un profil Argus',
    'btn_disarmed': 'DÉSARMÉ',
    'btn_home': '🏠 MAISON',
    'btn_night': '🌙 NUIT',
    'btn_sos': '🚨 SOS / PANIQUE',
    'btn_vacation': '✈️ VACANCES',
    'bypass_lbl': '🚫 Ignorer',
    'cancel': 'Annuler',
    'cancel_btn': 'Annuler',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': 'Impossible de supprimer le dernier administrateur.',
    'change_btn': 'Cambiar',
    'change_pin': 'Code PIN Maître',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': 'Effacer',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': 'EFFACER',
    'clock_12h': '12 heures (AM/PM)',
    'clock_24h': '24 heures',
    'clock_auto': 'Automatique (Home Assistant)',
    'clock_format_desc': 'Choisissez l\'affichage de l\'heure.',
    'clock_format_label': 'Format d\'heure',
    'close': 'Fermer',
    'confirm': '✓ Confirmer',
    'confirm_pin': 'Confirmer le PIN',
    'connected': 'CONNECTÉ',
    'create_ha': '+ Créer dans HA',
    'current_pin': 'PIN actuel',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': 'Supprimer du stockage',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': 'Voulez-vous vraiment supprimer « {name} » ?',
    'delete_user_tooltip': 'Supprimer le profil utilisateur',
    'deselect_all': '☐ Aucun',
    'details_notif': 'Notification d\'alarme',
    'disarm_time': 'Délai d\'entrée (s)',
    'disarm_time_label': 'Délai d\'entrée (s)',
    'disarmed': 'Désarmé',
    'done': 'Готово',
    'edit_btn': '✏️ Modifier',
    'edit_dashboard': 'Modifier le tableau',
    'edit_dashboard_done': '✓ Terminé',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': 'Erreur lors du chargement de l\'historique des fichiers.',
    'exit_to_ha': 'Retour à Home Assistant',
    'exp_indefinite': 'Indéfini',
    'exp_temporary': 'Temporaire (Date/Heure)',
    'expired': 'Expiré',
    'export_btn': '📤 Télécharger',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': 'Voulez-vous vraiment supprimer définitivement \"{filename}\" ?',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} fichiers',
    'files_count_short': '{count} fich.',
    'first_run_blocked_desc': 'Un administrateur Home Assistant est requis.',
    'first_run_blocked_title': 'Accès refusé',
    'first_run_desc': 'Complétez la configuration initiale.',
    'first_run_pin_expl': 'Le PIN d\'accès ouvre Argus. Le PIN maître contrôle l\'armement.',
    'first_run_skip': 'Passer',
    'first_run_start': 'Démarrer avec Argus',
    'first_run_welcome': 'Merci d\'avoir choisi Argus Home Hub. Bienvenue.',
    'forgot_pin': 'PIN oublié ?',
    'fullscreen_title': 'Plein écran',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Compte Home Assistant : {name}',
    'ha_account_unavailable': 'Liaison indisponible',
    'ha_admin_label': 'Admin Home Assistant',
    'ha_role_admin': 'Admin HA',
    'ha_role_standard': 'Utilisateur HA',
    'ha_standard_user_label': 'Utilisateur HA standard',
    'hero_desc': 'Système de sécurité complet, contrôle d\'accès, automatisations et HomeKit.',
    'history_refresh': '🔄 Actualiser',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': 'Nom du domicile',
    'home_name_lbl': 'Nom du domicile',
    'home_name_modal_desc': 'Ce nom apparaît dans le panneau des instances et en plein écran.',
    'home_name_modal_title': '🏡 Nom du domicile',
    'home_name_placeholder': 'Ma maison',
    'homekit_bridge': 'Pont HomeKit',
    'homekit_house': 'Apple Home',
    'homekit_not_paired': 'Non associé à une maison.',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 Restaurer',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': 'Instances actives',
    'introduce_pin': 'Entrez votre PIN',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': 'Administrateur',
    'lang_select_title': 'Sélectionner la langue',
    'lang_selector_lbl': '⚙️ Langue',
    'language': 'Langue',
    'lbl_aesthetic_custom': 'Personnalisation esthétique',
    'lbl_load_file': 'Charger le fichier:',
    'lbl_uploaded_files': 'Fichiers téléchargés sur le serveur',
    'link_ha_user': 'Lier à un utilisateur Home Assistant',
    'linked_rules': 'Règles liées à Argus',
    'loading': 'Загрузка…',
    'lock_if_open': 'Bloquer si ouvert',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus initialisé par {user}',
    'log_action_fullscreen_unlocked': 'Kiosque déverrouillé par {user}',
    'log_action_master_pin_rejected': 'Tentative de PIN maître incorrecte par {user}',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': 'Action rejetée',
    'log_action_save_ui': 'Paramètres UI enregistrés par {user}',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': 'Profil sélectionné : {user}',
    'log_action_sos': 'Panique SOS déclenchée par {user}',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'Panique SOS arrêtée par {user}',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': 'PIN d\'accès vérifié par {user}',
    'log_armed': 'Armé',
    'log_by': 'par',
    'log_detail_armed': 'Mode',
    'log_detail_disarm': 'Système désarmé',
    'log_detail_pin_reset': 'Code PIN maître réinitialisé par l\'administrateur',
    'log_detail_pin_reset_failed': 'Tentative non autorisée de réinitialiser le code PIN maître',
    'log_detail_triggered': 'Activation automatique',
    'log_disarmed': 'Désarmé',
    'log_no_events': 'Aucun événement récent.',
    'log_sensor': 'Capteur',
    'log_triggered': 'Déclenché!',
    'login_btn': 'Connexion',
    'manual_arm': 'Manuel',
    'manual_disarm': 'Manuel (Désarmé)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': 'Absent',
    'mode_home': 'Maison',
    'mode_night': 'Nuit',
    'mode_vacation': 'Vacances',
    'modes': 'Modes',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Jamais déclenché',
    'new_pin': 'Nouveau PIN',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': 'Aucune automatisation liée à Argus.',
    'no_files_uploaded': 'Aucun fichier téléchargé. Téléchargez un arrière-plan à l\'aide des commandes ci-dessus.',
    'no_files_uploaded_short': 'Aucun fichier téléchargé.',
    'no_instances': 'Aucune instance.',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': 'Tous les comptes Home Assistant actifs ont un profil.',
    'no_users': 'Aucun utilisateur supplémentaire configuré.',
    'none_selected': 'Aucun sélectionné',
    'notif_desc': 'Sélectionnez les appareils mobiles enregistrés dans HA qui recevront les alertes Argus.',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 Notifications',
    'open_sensors': 'Capteurs ouverts',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': 'En attente',
    'pin_active_no': 'PIN actif: Non',
    'pin_active_yes': 'PIN actif: Oui',
    'pin_deleted': '✓ PIN supprimé',
    'pin_desc': 'Code numérique pour armer et désarmer.',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ PIN actuel incorrect',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': 'PIN Maître',
    'pin_modal_desc': 'PIN numérique pour désarmer Argus',
    'pin_placeholder': 'Code PIN d’accès',
    'pin_remove_hint': 'Pour supprimer le PIN: entrez le PIN actuel et laissez les champs vides.',
    'pin_reset_admin_only': '❌ Erreur : Seuls les administrateurs de Home Assistant peuvent réinitialiser le PIN maître.',
    'pin_reset_confirm': 'Êtes-vous sûr de vouloir réinitialiser le PIN maître ? Le PIN actuel sera supprimé et désactivé.',
    'pin_updated': '✓ PIN mis à jour',
    'profile_is_yours': 'C’est votre profil',
    'profile_needs_pin': 'Profil d’une autre personne — entrez le PIN d’accès',
    'profile_no_pin_access': 'Ce profil n’a pas de PIN d’accès. Vous ne pouvez pas l’ouvrir.',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ Réinitialiser',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': 'Réinitialiser la disposition',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'Administrateur Argus',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': 'Utilisateur standard',
    'role_argus_user': 'Utilisateur standard',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': 'Enregistrer',
    'save_config': 'ENREGISTRER LA CONFIGURATION',
    'save_mode': '💾 Enregistrer le mode',
    'save_notif': 'Enregistrer',
    'save_user': 'Enregistrer',
    'search_placeholder': 'Rechercher par nom, zone ou entity_id',
    'search_select': 'Rechercher & sélectionner',
    'searching_auto': '↻ Recherche automatisations...',
    'select_all': '☑ Tous',
    'select_btn': '+ Sélectionner',
    'select_profile_subtitle': 'Accédez à vos panneaux de sécurité et instances Argus.',
    'select_profile_title': 'Sélectionnez votre profil',
    'selected_lbl': 'Sélectionnés',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': 'Capteurs d\'intrusion',
    'sensors_to_bypass': 'Capteurs à ignorer',
    'settings': '⚙️ Paramètres',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': 'Sirènes',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 Appeler les urgences',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': 'Glissez pour déclencher l\'alarme immédiatement.',
    'sos_confirm_title': 'Confirmer la panique',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': 'Glisser pour activer le SOS',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': 'FERMÉ',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': 'OUVERT',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 Changer de profil',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': 'SYSTÈME ARMÉ',
    'system_disarmed': 'SYSTÈME DÉSARMÉ',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': 'Automatique (capteur local / thermostat / climat)',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(thermostat)',
    'thermostat_alert_notif': '🌡️ Alerte de température',
    'times_section': '⏱️ Minuteries',
    'triggered': 'ALARME !',
    'unavailable': 'Indisponible',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ Annuler la réinitialisation',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': 'Comptes Home Assistant sans profil Argus',
    'unlock_kiosk': 'Déverrouiller le kiosque',
    'update_pin': 'Mettre à jour le PIN',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': 'Panneau',
    'use_ha_language': 'Utiliser la langue de Home Assistant',
    'user_default': 'Пользователь',
    'user_exp_date': 'Expiration Date/Time',
    'user_exp_type': 'Expiration',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': 'PIN utilisateur',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Rôle Argus',
    'username': 'Nom d\'utilisateur',
    'users_title': '👥 Utilisateurs et Contrôle d\'accès',
    'wait_if_open': 'Attendre la fermeture',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Bienvenue,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
  'pt': {
    'accept': 'Aceitar',
    'access_desc': 'Gerenciamento global, PIN mestre e administradores.',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': 'Controle de Acesso & Usuários',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': 'Expira em',
    'activity_log': '📋 Histórico de Atividades',
    'add_btn': '+ Adicionar',
    'add_user': 'Adicionar usuário',
    'admin_only': 'Apenas administradores podem modificar esta seção.',
    'alarm_instance': 'Instância do alarme',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': 'Atraso de armação (s)',
    'arm_time_label': 'Tempo armado (s)',
    'armed_away': 'Ausente',
    'armed_home': 'Em Casa',
    'armed_night': 'Noite',
    'armed_vacation': 'Férias',
    'arming': 'Armando',
    'automations': '⚡ Automações',
    'available': 'Disponíveis',
    'background_lbl': 'Fundo',
    'backup_desc': 'Salve um backup ou restaure um anterior.',
    'backup_title': 'Backup & Restauração',
    'badge_pin_reset': 'PIN Redefinido',
    'badge_pin_reset_failed': 'Falha ao Redefinir PIN',
    'battery_low': '⚠️ Bateria fraca',
    'bg_collage': 'Colagem',
    'bg_hub_default': 'Padrão (Argus)',
    'bg_hub_selected_from_history': 'Plano de fundo do Argus selecionado a partir do histórico.',
    'bg_hub_title': 'Fundo Argus',
    'bg_image_opt': 'Imagem / GIF',
    'bg_none': 'Padrão',
    'bg_panel_none': 'Sem fundo',
    'bg_panel_selected_from_history': 'Plano de fundo do painel selecionado a partir do histórico.',
    'bg_panel_title': 'Fundo do painel',
    'bg_photo': 'Uma foto',
    'bg_sound_opt': 'Som do vídeo',
    'bg_video': 'Vídeo em loop',
    'bg_weather': 'Clima animado',
    'bridge_not_connected': 'Ponte não configurada',
    'bridge_not_desc': 'Ative a integração HomeKit Bridge no Home Assistant e inclua a entidade <code>alarm_control_panel.argus_*</code> para gerar um QR de emparelhamento.',
    'bridge_paired': 'Ponte configurada',
    'bridge_paired_desc': 'A ponte <b>{bridge}</b> está configurada no Home Assistant. Não é possível verificar daqui se foi adicionada ao Apple Home nem informar seu nome.',
    'btn_away': '🔒 AUSENTE',
    'btn_create_argus_profile': 'Criar perfil Argus',
    'btn_disarmed': 'DESARMADO',
    'btn_home': '🏠 EM CASA',
    'btn_night': '🌙 NOITE',
    'btn_sos': '🚨 SOS / PÂNICO',
    'btn_vacation': '✈️ FÉRIAS',
    'bypass_lbl': '🚫 Ignorar',
    'cancel': 'Cancelar',
    'cancel_btn': 'Cancelar',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': 'Não é possível excluir o último administrador.',
    'change_btn': 'Cambiar',
    'change_pin': 'PIN Mestre',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': 'Limpar',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': 'LIMPAR',
    'clock_12h': '12 horas (AM/PM)',
    'clock_24h': '24 horas',
    'clock_auto': 'Automático (Home Assistant)',
    'clock_format_desc': 'Escolha como a hora é exibida.',
    'clock_format_label': 'Formato de hora',
    'close': 'Fechar',
    'confirm': '✓ Confirmar',
    'confirm_pin': 'Confirmar PIN',
    'connected': 'CONECTADO',
    'create_ha': '+ Criar no HA',
    'current_pin': 'PIN atual',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': 'Excluir do armazenamento',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': 'Tem certeza de que deseja excluir \"{name}\"?',
    'delete_user_tooltip': 'Excluir perfil de usuário',
    'deselect_all': '☐ Nenhum',
    'details_notif': 'Notificação de alarme',
    'disarm_time': 'Atraso de entrada (s)',
    'disarm_time_label': 'Atraso de entrada (s)',
    'disarmed': 'Desarmado',
    'done': 'Готово',
    'edit_btn': '✏️ Editar',
    'edit_dashboard': 'Editar painel',
    'edit_dashboard_done': '✓ Concluído',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': 'Erro ao carregar o histórico de arquivos.',
    'exit_to_ha': 'Voltar ao Home Assistant',
    'exp_indefinite': 'Indefinido',
    'exp_temporary': 'Temporário (Data/Hora)',
    'expired': 'Expirado',
    'export_btn': '📤 Baixar',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': 'Tem certeza de que deseja excluir \"{filename}\" permanentemente?',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} arquivos',
    'files_count_short': '{count} arq.',
    'first_run_blocked_desc': 'É necessário um administrador do Home Assistant.',
    'first_run_blocked_title': 'Acesso negado',
    'first_run_desc': 'Conclua a configuração inicial.',
    'first_run_pin_expl': 'O PIN de acesso abre o Argus. O PIN mestre controla o armamento.',
    'first_run_skip': 'Pular',
    'first_run_start': 'Começar com o Argus',
    'first_run_welcome': 'Obrigado por escolher o Argus Home Hub. Bem-vindo(a).',
    'forgot_pin': 'Esqueceu o PIN?',
    'fullscreen_title': 'Tela cheia',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Conta do Home Assistant: {name}',
    'ha_account_unavailable': 'Vínculo indisponível',
    'ha_admin_label': 'Administrador do Home Assistant',
    'ha_role_admin': 'Admin HA',
    'ha_role_standard': 'Usuário HA',
    'ha_standard_user_label': 'Usuário padrão do HA',
    'hero_desc': 'Sistema de segurança abrangente, controle de acesso, automações e HomeKit.',
    'history_refresh': '🔄 Atualizar',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': 'Nome do lar',
    'home_name_lbl': 'Nome do lar',
    'home_name_modal_desc': 'Este nome aparece no painel de instâncias e em tela cheia.',
    'home_name_modal_title': '🏡 Nome do lar',
    'home_name_placeholder': 'Minha Casa',
    'homekit_bridge': 'Ponte HomeKit',
    'homekit_house': 'Apple Home',
    'homekit_not_paired': 'Não associado a nenhuma casa.',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 Restaurar',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': 'Instâncias ativas',
    'introduce_pin': 'Digite seu PIN',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': 'Administrador',
    'lang_select_title': 'Selecionar Idioma',
    'lang_selector_lbl': '⚙️ Idioma',
    'language': 'Idioma',
    'lbl_aesthetic_custom': 'Personalização estética',
    'lbl_load_file': 'Carregar arquivo:',
    'lbl_uploaded_files': 'Arquivos enviados no servidor',
    'link_ha_user': 'Vincular a Usuário do Home Assistant',
    'linked_rules': 'Regras vinculadas ao Argus',
    'loading': 'Загрузка…',
    'lock_if_open': 'Bloquear se aberto',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus inicializado por {user}',
    'log_action_fullscreen_unlocked': 'Quiosque desbloqueado por {user}',
    'log_action_master_pin_rejected': 'Tentativa incorreta de PIN mestre por {user}',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': 'Ação rejeitada',
    'log_action_save_ui': 'Configurações de UI salvas por {user}',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': 'Perfil selecionado: {user}',
    'log_action_sos': 'Pânico SOS acionado por {user}',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'Pânico SOS interrompido por {user}',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': 'PIN de acesso verificado por {user}',
    'log_armed': 'Armado',
    'log_by': 'por',
    'log_detail_armed': 'Modo',
    'log_detail_disarm': 'Sistema desarmado',
    'log_detail_pin_reset': 'PIN mestre redefinido pelo administrador',
    'log_detail_pin_reset_failed': 'Tentativa não autorizada de redefinir o PIN mestre',
    'log_detail_triggered': 'Ativação automática',
    'log_disarmed': 'Desarmado',
    'log_no_events': 'Nenhum evento recente.',
    'log_sensor': 'Sensor',
    'log_triggered': 'Disparado!',
    'login_btn': 'Entrar',
    'manual_arm': 'Manual',
    'manual_disarm': 'Manual (Desarmado)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': 'Ausente',
    'mode_home': 'Em Casa',
    'mode_night': 'Noite',
    'mode_vacation': 'Férias',
    'modes': 'Modos',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Nunca ativado',
    'new_pin': 'Novo PIN',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': 'Nenhuma automação vinculada ao Argus.',
    'no_files_uploaded': 'Nenhum arquivo enviado. Envie um plano de fundo usando os controles acima.',
    'no_files_uploaded_short': 'Nenhum arquivo enviado.',
    'no_instances': 'Nenhuma instância.',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': 'Todas as contas do Home Assistant ativas possuem perfil.',
    'no_users': 'Nenhum usuário adicional configurado.',
    'none_selected': 'Nenhum selecionado',
    'notif_desc': 'Selecione os dispositivos móveis registrados no HA que receberão alertas do Argus.',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 Notificações',
    'open_sensors': 'Sensores abertos',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': 'Pendente',
    'pin_active_no': 'PIN Ativo: Não',
    'pin_active_yes': 'PIN Ativo: Sim',
    'pin_deleted': '✓ PIN Removido',
    'pin_desc': 'Código numérico para armar e desarmar.',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ PIN atual incorreto',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': 'PIN Mestre',
    'pin_modal_desc': 'PIN numérico para desarmar o Argus',
    'pin_placeholder': 'PIN de acesso',
    'pin_remove_hint': 'Para remover o PIN: insira o atual e deixe os campos abaixo vazios.',
    'pin_reset_admin_only': '❌ Erro: Apenas administradores do Home Assistant podem redefinir o PIN mestre.',
    'pin_reset_confirm': 'Tem certeza que deseja redefinir o PIN mestre? O PIN atual será removido e desativado.',
    'pin_updated': '✓ PIN Atualizado',
    'profile_is_yours': 'Este é o seu perfil',
    'profile_needs_pin': 'Perfil de outra pessoa — insira o PIN de acesso',
    'profile_no_pin_access': 'Este perfil não tem PIN de acesso. Você não pode abri-lo.',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ Redefinir',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': 'Redefinir layout',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'Administrador do Argus',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': 'Usuário padrão',
    'role_argus_user': 'Usuário padrão',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': 'Salvar',
    'save_config': 'SALVAR CONFIGURAÇÃO',
    'save_mode': '💾 Salvar modo',
    'save_notif': 'Salvar',
    'save_user': 'Salvar',
    'search_placeholder': 'Pesquisar por nome, área ou entity_id',
    'search_select': 'Buscar & selecionar',
    'searching_auto': '↻ Buscando automações...',
    'select_all': '☑ Todos',
    'select_btn': '+ Selecionar',
    'select_profile_subtitle': 'Acesse seus painéis de segurança e instâncias Argus.',
    'select_profile_title': 'Selecione o seu perfil',
    'selected_lbl': 'Selecionados',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': 'Sensores de Intrusão',
    'sensors_to_bypass': 'Sensores a ignorar',
    'settings': '⚙️ Configurações',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': 'Sirenes',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 Chamar emergências',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': 'Deslize para acionar o alarme imediatamente.',
    'sos_confirm_title': 'Confirmar pânico',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': 'Deslize para ativar SOS',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': 'FECHADO',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': 'ABERTO',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 Alternar perfil',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': 'SISTEMA ARMADO',
    'system_disarmed': 'SISTEMA DESARMADO',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': 'Automático (sensor local / termostato / clima)',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(termostato)',
    'thermostat_alert_notif': '🌡️ Alerta de temperatura',
    'times_section': '⏱️ Temporizadores',
    'triggered': 'ALARME!',
    'unavailable': 'Indisponível',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ Desfazer Redefinição',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': 'Contas do Home Assistant sem perfil Argus',
    'unlock_kiosk': 'Desbloquear quiosque',
    'update_pin': 'Atualizar PIN',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': 'Painel',
    'use_ha_language': 'Usar idioma do Home Assistant',
    'user_default': 'Пользователь',
    'user_exp_date': 'Expiration Date/Time',
    'user_exp_type': 'Expiration',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': 'PIN do usuário',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Função Argus',
    'username': 'Nome de usuário',
    'users_title': '👥 Usuários e Controle de Acesso',
    'wait_if_open': 'Aguardar fechamento',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Bem-vindo/a,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
  'it': {
    'accept': 'Accetta',
    'access_desc': 'Gestione globale della sicurezza, PIN principale e amministratori.',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': 'Controllo Accessi & Utenti',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': 'Scade il',
    'activity_log': '📋 Registro Attività',
    'add_btn': '+ Aggiungi',
    'add_user': 'Aggiungi utente',
    'admin_only': 'Solo gli amministratori possono modificare questa sezione.',
    'alarm_instance': 'Istanza allarme',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': 'Ritardo inserimento (s)',
    'arm_time_label': 'Tempo armato (s)',
    'armed_away': 'Fuori Casa',
    'armed_home': 'In Casa',
    'armed_night': 'Notte',
    'armed_vacation': 'Vacanza',
    'arming': 'Inserimento',
    'automations': '⚡ Automazioni',
    'available': 'Disponibili',
    'background_lbl': 'Sfondo',
    'backup_desc': 'Salva un backup o ripristina uno precedente.',
    'backup_title': 'Backup & Ripristino',
    'badge_pin_reset': 'PIN Reimpostato',
    'badge_pin_reset_failed': 'Reimpostazione PIN Fallita',
    'battery_low': '⚠️ Batteria scarica',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Predefinito (Argus)',
    'bg_hub_selected_from_history': 'Sfondo di Argus selezionato dalla cronologia.',
    'bg_hub_title': 'Sfondo Argus',
    'bg_image_opt': 'Immagine / GIF',
    'bg_none': 'Predefinito',
    'bg_panel_none': 'Nessuno sfondo',
    'bg_panel_selected_from_history': 'Sfondo del pannello selezionato dalla cronologia.',
    'bg_panel_title': 'Sfondo pannello',
    'bg_photo': 'Una foto',
    'bg_sound_opt': 'Audio video',
    'bg_video': 'Video in loop',
    'bg_weather': 'Meteo animato',
    'bridge_not_connected': 'Ponte non configurato',
    'bridge_not_desc': 'Abilita l\'integrazione HomeKit Bridge in Home Assistant e includi l\'entità <code>alarm_control_panel.argus_*</code> per generare un QR di abbinamento.',
    'bridge_paired': 'Ponte configurato',
    'bridge_paired_desc': 'Il ponte <b>{bridge}</b> è configurato in Home Assistant. Da qui non è possibile verificare se sia stato aggiunto ad Apple Home né conoscerne il nome.',
    'btn_away': '🔒 FUORI CASA',
    'btn_create_argus_profile': 'Crea profilo Argus',
    'btn_disarmed': 'DISINSERITO',
    'btn_home': '🏠 IN CASA',
    'btn_night': '🌙 NOTTE',
    'btn_sos': '🚨 SOS / PANICO',
    'btn_vacation': '✈️ VACANZA',
    'bypass_lbl': '🚫 Escludi',
    'cancel': 'Annulla',
    'cancel_btn': 'Annulla',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': 'Impossibile eliminare l\'ultimo amministratore.',
    'change_btn': 'Cambiar',
    'change_pin': 'PIN Principale',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': 'Cancella',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': 'CANCELLA',
    'clock_12h': '12 ore (AM/PM)',
    'clock_24h': '24 ore',
    'clock_auto': 'Automatico (Home Assistant)',
    'clock_format_desc': 'Scegli come visualizzare l\'ora.',
    'clock_format_label': 'Formato ora',
    'close': 'Chiudi',
    'confirm': '✓ Conferma',
    'confirm_pin': 'Conferma PIN',
    'connected': 'CONNESSO',
    'create_ha': '+ Crea in HA',
    'current_pin': 'PIN attuale',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': 'Elimina dalla memoria',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': 'Sei sicuro di voler eliminare \"{name}\"?',
    'delete_user_tooltip': 'Elimina profilo utente',
    'deselect_all': '☐ Nessuno',
    'details_notif': 'Notifica allarme',
    'disarm_time': 'Ritardo ingresso (s)',
    'disarm_time_label': 'Ritardo ingresso (s)',
    'disarmed': 'Disinserito',
    'done': 'Готово',
    'edit_btn': '✏️ Modifica',
    'edit_dashboard': 'Modifica dashboard',
    'edit_dashboard_done': '✓ Fatto',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': 'Errore durante il caricamento della cronologia dei file.',
    'exit_to_ha': 'Torna a Home Assistant',
    'exp_indefinite': 'Indefinito',
    'exp_temporary': 'Temporaneo (Data/Ora)',
    'expired': 'Scaduto',
    'export_btn': '📤 Scarica',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': 'Sei sicuro di voler eliminare permanentemente \"{filename}\"?',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} file',
    'files_count_short': '{count} file',
    'first_run_blocked_desc': 'È richiesto un amministratore di Home Assistant.',
    'first_run_blocked_title': 'Accesso negato',
    'first_run_desc': 'Completa la configurazione.',
    'first_run_pin_expl': 'Il PIN di accesso apre Argus. Il PIN master controlla l\'armamento.',
    'first_run_skip': 'Salta',
    'first_run_start': 'Inizia con Argus',
    'first_run_welcome': 'Grazie per aver scelto Argus Home Hub. Benvenuto/a.',
    'forgot_pin': 'PIN dimenticato?',
    'fullscreen_title': 'Schermo intero',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Account Home Assistant: {name}',
    'ha_account_unavailable': 'Collegamento non disponibile',
    'ha_admin_label': 'Amministratore Home Assistant',
    'ha_role_admin': 'Admin HA',
    'ha_role_standard': 'Utente HA',
    'ha_standard_user_label': 'Utente HA standard',
    'hero_desc': 'Sistema di sicurezza completo, controllo accessi, automazioni e HomeKit.',
    'history_refresh': '🔄 Aggiorna',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': 'Nome della casa',
    'home_name_lbl': 'Nome della casa',
    'home_name_modal_desc': 'Questo nome appare nel pannello delle istanze e a schermo intero.',
    'home_name_modal_title': '🏡 Nome della casa',
    'home_name_placeholder': 'Casa mia',
    'homekit_bridge': 'Ponte HomeKit',
    'homekit_house': 'Apple Home',
    'homekit_not_paired': 'Non associato a nessuna casa.',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 Ripristina',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': 'Istanze attive',
    'introduce_pin': 'Inserisci il tuo PIN',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': 'Amministratore',
    'lang_select_title': 'Seleziona Lingua',
    'lang_selector_lbl': '⚙️ Lingua',
    'language': 'Lingua',
    'lbl_aesthetic_custom': 'Personalizzazione estetica',
    'lbl_load_file': 'Carica file:',
    'lbl_uploaded_files': 'File caricati sul server',
    'link_ha_user': 'Collega all’utente Home Assistant',
    'linked_rules': 'Regole collegate ad Argus',
    'loading': 'Загрузка…',
    'lock_if_open': 'Blocca se aperto',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus inizializzato da {user}',
    'log_action_fullscreen_unlocked': 'Chiosco sbloccato da {user}',
    'log_action_master_pin_rejected': 'Tentativo di PIN master errato da {user}',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': 'Azione rifiutata',
    'log_action_save_ui': 'Impostazioni UI salvate da {user}',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': 'Profilo selezionato: {user}',
    'log_action_sos': 'Panico SOS attivato da {user}',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'Panico SOS fermato da {user}',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': 'PIN di accesso verificato da {user}',
    'log_armed': 'Armato',
    'log_by': 'da',
    'log_detail_armed': 'Modalità',
    'log_detail_disarm': 'Sistema disarmato',
    'log_detail_pin_reset': 'PIN principale reimpostato dall\'amministratore',
    'log_detail_pin_reset_failed': 'Tentativo non autorizzato di reimpostare il PIN principale',
    'log_detail_triggered': 'Attivazione automatica',
    'log_disarmed': 'Disarmato',
    'log_no_events': 'Nessun evento recente.',
    'log_sensor': 'Sensore',
    'log_triggered': 'Attivato!',
    'login_btn': 'Accedi',
    'manual_arm': 'Manuale',
    'manual_disarm': 'Manuale (Disarmato)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': 'Assente',
    'mode_home': 'In Casa',
    'mode_night': 'Notte',
    'mode_vacation': 'Vacanze',
    'modes': 'Modalità',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Mai attivato',
    'new_pin': 'Nuovo PIN',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': 'Nessuna automazione collegata ad Argus.',
    'no_files_uploaded': 'Nessun file caricato. Carica uno sfondo usando i controlli sopra.',
    'no_files_uploaded_short': 'Nessun file caricato.',
    'no_instances': 'Nessuna istanza.',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': 'Tutti gli account Home Assistant attivi hanno un profilo.',
    'no_users': 'Nessun utente aggiuntivo configurato.',
    'none_selected': 'Nessuno selezionato',
    'notif_desc': 'Seleziona i dispositivi mobili registrati in HA che riceveranno gli avvisi di Argus.',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 Notifiche',
    'open_sensors': 'Sensori aperti',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': 'In attesa',
    'pin_active_no': 'PIN Attivo: No',
    'pin_active_yes': 'PIN Attivo: Sì',
    'pin_deleted': '✓ PIN Eliminato',
    'pin_desc': 'Codice numerico per inserire e disinserire.',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ PIN attuale errato',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': 'PIN Principale',
    'pin_modal_desc': 'PIN numerico per disinserire Argus',
    'pin_placeholder': 'PIN di accesso',
    'pin_remove_hint': 'Per rimuovere il PIN: inserisci quello attuale e lascia vuoti i campi sottostanti.',
    'pin_reset_admin_only': '❌ Errore: Solo gli amministratori di Home Assistant possono reimpostare el PIN principale.',
    'pin_reset_confirm': 'Sei sicuro di voler reimpostare il PIN principale? Il PIN attuale verrà rimosso e disattivato.',
    'pin_updated': '✓ PIN Aggiornato',
    'profile_is_yours': 'Questo è il tuo profilo',
    'profile_needs_pin': 'Profilo di un’altra persona — inserisci il PIN di accesso',
    'profile_no_pin_access': 'Questo profilo non ha un PIN di accesso. Non puoi aprirlo.',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ Ripristina',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': 'Ripristina layout',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'Amministratore Argus',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': 'Utente standard',
    'role_argus_user': 'Utente standard',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': 'Salva',
    'save_config': 'SALVA CONFIGURAZIONE',
    'save_mode': '💾 Salva modalità',
    'save_notif': 'Salva',
    'save_user': 'Salva',
    'search_placeholder': 'Cerca per nome, area o entity_id',
    'search_select': 'Cerca & seleziona',
    'searching_auto': '↻ Ricerca automazioni...',
    'select_all': '☑ Tutti',
    'select_btn': '+ Seleziona',
    'select_profile_subtitle': 'Accedi ai tuoi pannelli di sicurezza e istanze Argus.',
    'select_profile_title': 'Seleziona il tuo profilo',
    'selected_lbl': 'Selezionati',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': 'Sensori di Intrusione',
    'sensors_to_bypass': 'Sensori da ignorare',
    'settings': '⚙️ Impostazioni',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': 'Sirene',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 Chiama i soccorsi',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': 'Scorri per attivare immediatamente l\'allarme.',
    'sos_confirm_title': 'Conferma panico',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': 'Scorri per attivare SOS',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': 'CHIUSO',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': 'APERTO',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 Cambia profilo',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': 'SISTEMA INSERITO',
    'system_disarmed': 'SISTEMA DISINSERITO',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': 'Automatico (sensore locale / termostato / clima)',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(termostato)',
    'thermostat_alert_notif': '🌡️ Avviso temperatura',
    'times_section': '⏱️ Timer',
    'triggered': 'ALLARME!',
    'unavailable': 'Non disponibile',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ Annulla Ripristino',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': 'Account Home Assistant senza profilo Argus',
    'unlock_kiosk': 'Sblocca chiosco',
    'update_pin': 'Aggiorna PIN',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': 'Pannello',
    'use_ha_language': 'Usa la lingua di Home Assistant',
    'user_default': 'Пользователь',
    'user_exp_date': 'Expiration Date/Time',
    'user_exp_type': 'Expiration',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': 'PIN utente',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Ruolo Argus',
    'username': 'Nome utente',
    'users_title': '👥 Utenti e Controllo Accessi',
    'wait_if_open': 'Attendi chiusura sensori',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Welcome,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
  'zh': {
    'accept': '接受',
    'access_desc': '全局安全管理、主PIN码和管理员。',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': '访问控制和用户',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': '有效期至',
    'activity_log': '📋 活动记录',
    'add_btn': '+ 添加',
    'add_user': '添加用户',
    'admin_only': '仅管理员可修改此部分。',
    'alarm_instance': '报警实例',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': '布防延迟 (秒)',
    'arm_time_label': '布防延迟(s)',
    'armed_away': '离家',
    'armed_home': '在家',
    'armed_night': '夜间',
    'armed_vacation': '度假',
    'arming': '正在布防',
    'automations': '⚡ 自动化',
    'available': '可用',
    'background_lbl': '背景',
    'backup_desc': '保存设置备份或恢复之前的设置。',
    'backup_title': '备份与恢复',
    'badge_pin_reset': 'PIN已重置',
    'badge_pin_reset_failed': 'PIN重置失败',
    'battery_low': '⚠️ 电池不足',
    'bg_collage': '拼贴画',
    'bg_hub_default': '默认 (Argus)',
    'bg_hub_selected_from_history': '已从历史记录中选择Argus背景。',
    'bg_hub_title': 'Argus 背景',
    'bg_image_opt': '图片 / GIF',
    'bg_none': '默认',
    'bg_panel_none': '无背景',
    'bg_panel_selected_from_history': '已从历史记录中选择面板背景。',
    'bg_panel_title': '面板背景',
    'bg_photo': '单张照片',
    'bg_sound_opt': '视频声音',
    'bg_video': '循环视频',
    'bg_weather': '动画天气',
    'bridge_not_connected': '桥接未配置',
    'bridge_not_desc': '在Home Assistant中启用HomeKit Bridge集成并包含实体<code>alarm_control_panel.argus_*</code>以生成配对QR码。',
    'bridge_paired': '桥接已配置',
    'bridge_paired_desc': '桥接 <b>{bridge}</b> 已在 Home Assistant 中配置。Home Assistant 无法从这里验证它是否已添加到 Apple Home，也无法提供家庭名称。',
    'btn_away': '🔒 离家',
    'btn_create_argus_profile': '创建 Argus 个人资料',
    'btn_disarmed': '已撤防',
    'btn_home': '🏠 在家',
    'btn_night': '🌙 夜间',
    'btn_sos': '🚨 紧急求助 / 恐慌',
    'btn_vacation': '✈️ 度假',
    'bypass_lbl': '🚫 旁路',
    'cancel': '取消',
    'cancel_btn': '取消',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': '无法删除最后一个管理员。',
    'change_btn': 'Cambiar',
    'change_pin': '主 PIN 码',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': '清除',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': '清除',
    'clock_12h': '12 小时制 (AM/PM)',
    'clock_24h': '24 小时制',
    'clock_auto': '自动（Home Assistant）',
    'clock_format_desc': '选择时间的显示方式。',
    'clock_format_label': '时间格式',
    'close': '关闭',
    'confirm': '✓ 确认',
    'confirm_pin': '确认 PIN 码',
    'connected': '已连接',
    'create_ha': '+ 在 HA 中创建',
    'current_pin': '当前 PIN 码',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': '从存储中删除',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': '您确定要删除“{name}”吗？',
    'delete_user_tooltip': '删除用户个人资料',
    'deselect_all': '☐ 全不选',
    'details_notif': '警报通知',
    'disarm_time': '进入延迟 (秒)',
    'disarm_time_label': '进入延迟(s)',
    'disarmed': '已撤防',
    'done': 'Готово',
    'edit_btn': '✏️ 编辑',
    'edit_dashboard': '编辑仪表板',
    'edit_dashboard_done': '✓ 完成',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': '加载文件历史记录出错。',
    'exit_to_ha': '返回 Home Assistant',
    'exp_indefinite': '无限期',
    'exp_temporary': '临时 (日期/时间)',
    'expired': '已过期',
    'export_btn': '📤 下载',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': '您确定要永久删除 \"{filename}\" 吗？',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} 个文件',
    'files_count_short': '{count} 文件',
    'first_run_blocked_desc': '首次设置 Argus 需要 Home Assistant 管理员。',
    'first_run_blocked_title': '拒绝访问',
    'first_run_desc': '完成设置以保护您的家。',
    'first_run_pin_expl': '访问 PIN 打开 Argus。主 PIN 控制撤防和布防。',
    'first_run_skip': '跳过',
    'first_run_start': '开始使用 Argus',
    'first_run_welcome': '感谢选择 Argus Home Hub。欢迎。',
    'forgot_pin': '忘记PIN码？',
    'fullscreen_title': '全屏',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Home Assistant 账户：{name}',
    'ha_account_unavailable': '绑定不可用',
    'ha_admin_label': 'Home Assistant 管理员',
    'ha_role_admin': 'HA 管理员',
    'ha_role_standard': 'HA 用户',
    'ha_standard_user_label': '标准 HA 用户',
    'hero_desc': '综合安全系统、门禁控制、自动化与 HomeKit。',
    'history_refresh': '🔄 刷新',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': '家庭名称',
    'home_name_lbl': '家庭名称',
    'home_name_modal_desc': '此名称显示在实例面板和全屏中。',
    'home_name_modal_title': '🏡 家庭名称',
    'home_name_placeholder': '我的家',
    'homekit_bridge': 'HomeKit桥接',
    'homekit_house': 'Apple Home',
    'homekit_not_paired': '未与任何家庭关联。',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 恢复',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': '活动实例',
    'introduce_pin': '输入您的 PIN 码',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': '管理员',
    'lang_select_title': '选择语言',
    'lang_selector_lbl': '⚙️ 语言',
    'language': '语言',
    'lbl_aesthetic_custom': '美学个性化',
    'lbl_load_file': '上传文件:',
    'lbl_uploaded_files': '服务器上上传的文件',
    'link_ha_user': '关联至 Home Assistant 用户',
    'linked_rules': '与 Argus 关联的规则',
    'loading': 'Загрузка…',
    'lock_if_open': '打开时锁定',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus 已由 {user} 初始化',
    'log_action_fullscreen_unlocked': '自助服务终端已由 {user} 解锁',
    'log_action_master_pin_rejected': '{user} 的主 PIN 尝试不正确',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': '操作已被拒绝',
    'log_action_save_ui': 'UI 设置已由 {user} 保存',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': '已选择个人资料：{user}',
    'log_action_sos': 'SOS 紧急情况由 {user} 触发',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'SOS 紧急情况由 {user} 停止',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': '访问 PIN 已由 {user} 验证',
    'log_armed': '已布防',
    'log_by': '由',
    'log_detail_armed': '模式',
    'log_detail_disarm': '系统已撤防',
    'log_detail_pin_reset': '管理员已重置主PIN码',
    'log_detail_pin_reset_failed': '未授权尝试重置主PIN码',
    'log_detail_triggered': '自动激活',
    'log_disarmed': '已撤防',
    'log_no_events': '没有最近事件。',
    'log_sensor': '传感器',
    'log_triggered': '已触发！',
    'login_btn': '登录',
    'manual_arm': '手动',
    'manual_disarm': '手动(已撤防)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': '外出',
    'mode_home': '在家',
    'mode_night': '夜间',
    'mode_vacation': '度假',
    'modes': '模式',
    'mqtt_label': 'MQTT',
    'never_triggered': '从未触发',
    'new_pin': '新 PIN 码',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': '没有链接到Argus的自动化。',
    'no_files_uploaded': '未上传文件。请使用上方控件上传背景。',
    'no_files_uploaded_short': '未上传文件。',
    'no_instances': '没有实例。',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': '所有活跃的 Home Assistant 账户都有个人资料。',
    'no_users': '未配置其他用户。',
    'none_selected': '未选择任何项',
    'notif_desc': '选择在 HA 中注册以接收 Argus 警报的移动设备。',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 通知',
    'open_sensors': '开启的传感器',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': '等待中',
    'pin_active_no': 'PIN激活: 否',
    'pin_active_yes': 'PIN激活: 是',
    'pin_deleted': '✓ PIN已删除',
    'pin_desc': '用于布防和撤防的数字代码。',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ 当前PIN错误',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': '主PIN码',
    'pin_modal_desc': '用于撤防 Argus 的数字 PIN 码',
    'pin_placeholder': '访问 PIN',
    'pin_remove_hint': '删除PIN: 输入当前PIN并将下面字段留空。',
    'pin_reset_admin_only': '❌ 错误：只有 Home Assistant 管理员可以重置主 PIN 码。',
    'pin_reset_confirm': '您确定要重置主 PIN 码吗？当前的 PIN 码将被删除并停用。',
    'pin_updated': '✓ PIN已更新',
    'profile_is_yours': '这是您的个人资料',
    'profile_needs_pin': '其他人的个人资料 — 请输入访问 PIN',
    'profile_no_pin_access': '该个人资料没有访问 PIN。您无法打开它。',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ 恢复出厂',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': '重置布局',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'Argus 管理员',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': '标准用户',
    'role_argus_user': '标准用户',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': '保存',
    'save_config': '保存配置',
    'save_mode': '💾 保存模式',
    'save_notif': '保存',
    'save_user': '保存',
    'search_placeholder': '按名称、区域或 entity_id 搜索',
    'search_select': '搜索并选择',
    'searching_auto': '↻ 正在搜索自动化...',
    'select_all': '☑ 全选',
    'select_btn': '+ 选择',
    'select_profile_subtitle': '访问您的安全面板和 Argus 实例。',
    'select_profile_title': '选择您的个人资料',
    'selected_lbl': '已选择',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': '入侵传感器',
    'sensors_to_bypass': '跳过的传感器',
    'settings': '⚙️ 设置',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': '警报器',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 拨打紧急服务',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': '滑动以立即触发警报。',
    'sos_confirm_title': '确认紧急',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': '滑动以激活 SOS',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': '关闭',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': '开启',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 切换个人资料',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': '系统已布防',
    'system_disarmed': '系统已撤防',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': '自动（本地传感器 / 恒温器 / 气候）',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(恒温器)',
    'thermostat_alert_notif': '🌡️ 温度警报',
    'times_section': '⏱️ 计时器',
    'triggered': '警报触发！',
    'unavailable': '不可用',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ 撤销重置',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': '没有 Argus 个人资料的 Home Assistant 账户',
    'unlock_kiosk': '解锁自助服务终端',
    'update_pin': '更新 PIN 码',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': '面板',
    'use_ha_language': '使用 Home Assistant 语言',
    'user_default': 'Пользователь',
    'user_exp_date': 'Expiration Date/Time',
    'user_exp_type': 'Expiration',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': '用户 PIN',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Argus 角色',
    'username': '用户名',
    'users_title': '👥 用户与门禁控制',
    'wait_if_open': '等待传感器关闭',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Welcome,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
  'zh-Hant': {
    'accept': '接受',
    'access_desc': '全局安全管理、主PIN码和管理员。',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': '访问控制和用户',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': '有效期限至',
    'activity_log': '📋 活動記錄',
    'add_btn': '+ 新增',
    'add_user': '新增使用者',
    'admin_only': '僅管理員可修改此部分。',
    'alarm_instance': '报警实例',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': '布防延遲 (秒)',
    'arm_time_label': '布防延迟(s)',
    'armed_away': '離家',
    'armed_home': '在家',
    'armed_night': '夜間',
    'armed_vacation': '度假',
    'arming': '正在布防',
    'automations': '⚡ 自動化',
    'available': '可用',
    'background_lbl': '背景',
    'backup_desc': '保存设置备份或恢复之前的设置。',
    'backup_title': '备份与恢复',
    'badge_pin_reset': 'PIN已重置',
    'badge_pin_reset_failed': 'PIN重置失败',
    'battery_low': '⚠️ 电池不足',
    'bg_collage': '拼贴画',
    'bg_hub_default': '默认 (Argus)',
    'bg_hub_selected_from_history': '已从历史记录中选择Argus背景。',
    'bg_hub_title': 'Argus 背景',
    'bg_image_opt': '图片 / GIF',
    'bg_none': '默认',
    'bg_panel_none': '无背景',
    'bg_panel_selected_from_history': '已从历史记录中选择面板背景。',
    'bg_panel_title': '面板背景',
    'bg_photo': '单张照片',
    'bg_sound_opt': '视频声音',
    'bg_video': '循环视频',
    'bg_weather': '动画天气',
    'bridge_not_connected': '桥接未配置',
    'bridge_not_desc': '在Home Assistant中启用HomeKit Bridge集成并包含实体<code>alarm_control_panel.argus_*</code>以生成配对QR码。',
    'bridge_paired': '桥接已配置',
    'bridge_paired_desc': '桥接 <b>{bridge}</b> 已在 Home Assistant 中配置。Home Assistant 无法从这里验证它是否已添加到 Apple Home，也无法提供家庭名称。',
    'btn_away': '🔒 離家',
    'btn_create_argus_profile': '创建 Argus 个人资料',
    'btn_disarmed': '已撤防',
    'btn_home': '🏠 在家',
    'btn_night': '🌙 夜間',
    'btn_sos': '🚨 緊急求助 / 恐慌',
    'btn_vacation': '✈️ 度假',
    'bypass_lbl': '🚫 旁路',
    'cancel': '取消',
    'cancel_btn': '取消',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': '无法删除最后一个管理员。',
    'change_btn': 'Cambiar',
    'change_pin': '主 PIN 碼',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': '清除',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': '清除',
    'clock_12h': '12 小时制 (AM/PM)',
    'clock_24h': '24 小时制',
    'clock_auto': '自动（Home Assistant）',
    'clock_format_desc': '选择时间的显示方式。',
    'clock_format_label': '时间格式',
    'close': '關閉',
    'confirm': '✓ 確認',
    'confirm_pin': '確認 PIN 碼',
    'connected': '已連線',
    'create_ha': '+ 在 HA 中建立',
    'current_pin': '目前 PIN 碼',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': '从存储中删除',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': '您确定要删除“{name}”吗？',
    'delete_user_tooltip': '删除用户个人资料',
    'deselect_all': '☐ 全不选',
    'details_notif': '警报通知',
    'disarm_time': '進入延遲 (秒)',
    'disarm_time_label': '进入延迟(s)',
    'disarmed': '已撤防',
    'done': 'Готово',
    'edit_btn': '✏️ 编辑',
    'edit_dashboard': '編輯儀表板',
    'edit_dashboard_done': '✓ 完成',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': '加载文件历史记录出错。',
    'exit_to_ha': '返回 Home Assistant',
    'exp_indefinite': '無期限',
    'exp_temporary': '暫時 (日期/時間)',
    'expired': '已過期',
    'export_btn': '📤 下载',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': '您确定要永久删除 \"{filename}\" 吗？',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} 个文件',
    'files_count_short': '{count} 文件',
    'first_run_blocked_desc': '首次设置 Argus 需要 Home Assistant 管理员。',
    'first_run_blocked_title': '拒绝访问',
    'first_run_desc': '完成设置以保护您的家。',
    'first_run_pin_expl': '访问 PIN 打开 Argus。主 PIN 控制撤防和布防。',
    'first_run_skip': '跳过',
    'first_run_start': '开始使用 Argus',
    'first_run_welcome': '感谢选择 Argus Home Hub。欢迎。',
    'forgot_pin': '忘记PIN码？',
    'fullscreen_title': '全屏',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Home Assistant 账户：{name}',
    'ha_account_unavailable': '绑定不可用',
    'ha_admin_label': 'Home Assistant 管理员',
    'ha_role_admin': 'HA 管理员',
    'ha_role_standard': 'HA 用户',
    'ha_standard_user_label': '标准 HA 用户',
    'hero_desc': '綜合安全系統、門禁控制、自動化與 HomeKit。',
    'history_refresh': '🔄 重新整理',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': '家庭名称',
    'home_name_lbl': '家庭名称',
    'home_name_modal_desc': '此名称显示在实例面板和全屏中。',
    'home_name_modal_title': '🏡 家庭名称',
    'home_name_placeholder': '我的家',
    'homekit_bridge': 'HomeKit桥接',
    'homekit_house': 'Apple Home',
    'homekit_not_paired': '未与任何家庭关联。',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 恢复',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': '活動實例',
    'introduce_pin': '輸入您的 PIN 碼',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': '管理員',
    'lang_select_title': '选择语言',
    'lang_selector_lbl': '⚙️ 語言',
    'language': '语言',
    'lbl_aesthetic_custom': '美学个性化',
    'lbl_load_file': '上传文件:',
    'lbl_uploaded_files': '服务器上上传的文件',
    'link_ha_user': '关联至 Home Assistant 用户',
    'linked_rules': '與 Argus 關聯的規則',
    'loading': 'Загрузка…',
    'lock_if_open': '開啟時鎖定',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus 已由 {user} 初始化',
    'log_action_fullscreen_unlocked': '自助服务终端已由 {user} 解锁',
    'log_action_master_pin_rejected': '{user} 的主 PIN 尝试不正确',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': '操作已被拒绝',
    'log_action_save_ui': 'UI 设置已由 {user} 保存',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': '已选择个人资料：{user}',
    'log_action_sos': 'SOS 紧急情况由 {user} 触发',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'SOS 紧急情况由 {user} 停止',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': '访问 PIN 已由 {user} 验证',
    'log_armed': '已布防',
    'log_by': '由',
    'log_detail_armed': '模式',
    'log_detail_disarm': '系统已撤防',
    'log_detail_pin_reset': '管理员已重置主PIN码',
    'log_detail_pin_reset_failed': '未授权尝试重置主PIN码',
    'log_detail_triggered': '自动激活',
    'log_disarmed': '已撤防',
    'log_no_events': '没有最近事件。',
    'log_sensor': '传感器',
    'log_triggered': '已触发！',
    'login_btn': '登录',
    'manual_arm': '手动',
    'manual_disarm': '手动(已撤防)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': '外出',
    'mode_home': '在家',
    'mode_night': '夜间',
    'mode_vacation': '度假',
    'modes': '模式',
    'mqtt_label': 'MQTT',
    'never_triggered': '从未触发',
    'new_pin': '新 PIN 碼',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': '没有链接到Argus的自动化。',
    'no_files_uploaded': '未上传文件。请使用上方控件上传背景。',
    'no_files_uploaded_short': '未上传文件。',
    'no_instances': '没有实例。',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': '所有活跃的 Home Assistant 账户都有个人资料。',
    'no_users': '未設定其他使用者。',
    'none_selected': '未選擇任何項目',
    'notif_desc': '選擇在 HA 中註冊以接收 Argus 警報的行動裝置。',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 通知',
    'open_sensors': '开启的传感器',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': '等待中',
    'pin_active_no': 'PIN激活: 否',
    'pin_active_yes': 'PIN激活: 是',
    'pin_deleted': '✓ PIN已删除',
    'pin_desc': '用於布防和撤防的數字代碼。',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ 当前PIN错误',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': '主PIN码',
    'pin_modal_desc': '用於撤防 Argus 的數字 PIN 碼',
    'pin_placeholder': '访问 PIN',
    'pin_remove_hint': '删除PIN: 输入当前PIN并将下面字段留空。',
    'pin_reset_admin_only': '❌ 错误：只有 Home Assistant 管理员可以重置主 PIN 码。',
    'pin_reset_confirm': '您确定要重置主 PIN 码吗？当前的 PIN 码将被删除并停用。',
    'pin_updated': '✓ PIN已更新',
    'profile_is_yours': '这是您的个人资料',
    'profile_needs_pin': '其他人的个人资料 — 请输入访问 PIN',
    'profile_no_pin_access': '该个人资料没有访问 PIN。您无法打开它。',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ 恢复出厂',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': '重設版面配置',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'Argus 管理員',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': '標準使用者',
    'role_argus_user': '标准用户',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': '保存',
    'save_config': '儲存設定',
    'save_mode': '💾 儲存模式',
    'save_notif': '儲存',
    'save_user': '儲存',
    'search_placeholder': '按名稱、區域或 entity_id 搜尋',
    'search_select': '搜索并选择',
    'searching_auto': '↻ 正在搜索自动化...',
    'select_all': '☑ 全选',
    'select_btn': '+ 選擇',
    'select_profile_subtitle': '访问您的安全面板和 Argus 实例。',
    'select_profile_title': '选择您的个人资料',
    'selected_lbl': '已選擇',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': '入侵感測器',
    'sensors_to_bypass': '跳过的传感器',
    'settings': '⚙️ 設定',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': '警報器',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 拨打紧急服务',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': '滑动以立即触发警报。',
    'sos_confirm_title': '确认紧急',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': '滑動以啟動 SOS',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': '關閉',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': '開啟',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 切換設定檔',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': '系統已布防',
    'system_disarmed': '系統已撤防',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': '自动（本地传感器 / 恒温器 / 气候）',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(恒温器)',
    'thermostat_alert_notif': '🌡️ 温度警报',
    'times_section': '⏱️ 計時器',
    'triggered': '警報觸發！',
    'unavailable': '不可用',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ 撤销重置',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': '没有 Argus 个人资料的 Home Assistant 账户',
    'unlock_kiosk': '解锁自助服务终端',
    'update_pin': '更新 PIN 碼',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': '面板',
    'use_ha_language': '使用 Home Assistant 語言',
    'user_default': 'Пользователь',
    'user_exp_date': 'Expiration Date/Time',
    'user_exp_type': 'Expiration',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': '使用者 PIN',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Argus 角色',
    'username': '使用者名稱',
    'users_title': '👥 使用者與門禁控制',
    'wait_if_open': '等待感測器關閉',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Welcome,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
  'ru': {
    'accept': 'Принять',
    'access_desc': 'Глобальная безопасность, мастер PIN и администраторы.',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': 'Контроль доступа и пользователи',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': 'Истекает',
    'activity_log': '📋 Журнал активности',
    'add_btn': '+ Добавить',
    'add_user': 'Добавить пользователя',
    'admin_only': 'Только администраторы могут изменять этот раздел.',
    'alarm_instance': 'Экземпляр тревоги',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': 'Задержка постановки (с)',
    'arm_time_label': 'Время взятия (с)',
    'armed_away': 'Вне дома',
    'armed_home': 'Дома',
    'armed_night': 'Ночь',
    'armed_vacation': 'Отпуск',
    'arming': 'Постановка на охрану',
    'automations': '⚡ Автоматизации',
    'available': 'Доступно',
    'background_lbl': 'Фон',
    'backup_desc': 'Сохраните резервную копию или восстановите предыдущую.',
    'backup_title': 'Резервная копия',
    'badge_pin_reset': 'PIN Сброшен',
    'badge_pin_reset_failed': 'Ошибка Сброса PIN',
    'battery_low': '⚠️ Низкий заряд',
    'bg_collage': 'Коллаж',
    'bg_hub_default': 'По умолчанию (Argus)',
    'bg_hub_selected_from_history': 'Фон Argus выбран из истории.',
    'bg_hub_title': 'Фон Argus',
    'bg_image_opt': 'Изображение / GIF',
    'bg_none': 'По умолчанию',
    'bg_panel_none': 'Без фона',
    'bg_panel_selected_from_history': 'Фон панели выбран из истории.',
    'bg_panel_title': 'Фон панели',
    'bg_photo': 'Одно фото',
    'bg_sound_opt': 'Звук видео',
    'bg_video': 'Зацикленное видео',
    'bg_weather': 'Анимированная погода',
    'bridge_not_connected': 'Мост не настроен',
    'bridge_not_desc': 'Включите интеграцию HomeKit Bridge в Home Assistant и добавьте <code>alarm_control_panel.argus_*</code> для QR сопряжения.',
    'bridge_paired': 'Мост настроен',
    'bridge_paired_desc': 'Мост <b>{bridge}</b> настроен в Home Assistant. Здесь нельзя проверить, добавлен ли он в Apple Home, или узнать его название.',
    'btn_away': '🔒 ВНЕ ДОМА',
    'btn_create_argus_profile': 'Создать профиль Argus',
    'btn_disarmed': 'СНЯТО С ОХРАНЫ',
    'btn_home': '🏠 ДОМА',
    'btn_night': '🌙 НОЧЬ',
    'btn_sos': '🚨 SOS / ПАНИКА',
    'btn_vacation': '✈️ ОТПУСК',
    'bypass_lbl': '🚫 Обход',
    'cancel': 'Отмена',
    'cancel_btn': 'Отмена',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': 'Нельзя удалить последнего администратора.',
    'change_btn': 'Cambiar',
    'change_pin': 'Мастер PIN',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': 'Очистить',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': 'ОЧИСТИТЬ',
    'clock_12h': '12-часовой (AM/PM)',
    'clock_24h': '24-часовой',
    'clock_auto': 'Автоматически (Home Assistant)',
    'clock_format_desc': 'Выберите способ отображения времени.',
    'clock_format_label': 'Формат времени',
    'close': 'Закрыть',
    'confirm': '✓ Подтвердить',
    'confirm_pin': 'Подтвердите PIN',
    'connected': 'ПОДКЛЮЧЕНО',
    'create_ha': '+ Создать в HA',
    'current_pin': 'Текущий PIN',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': 'Удалить из хранилища',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': 'Вы уверены, что хотите удалить \"{name}\"?',
    'delete_user_tooltip': 'Удалить профиль пользователя',
    'deselect_all': '☐ Ничего',
    'details_notif': 'Уведомление тревоги',
    'disarm_time': 'Задержка входа (с)',
    'disarm_time_label': 'Задержка входа (с)',
    'disarmed': 'Снято с охраны',
    'done': 'Готово',
    'edit_btn': '✏️ Редактировать',
    'edit_dashboard': 'Редактировать панель',
    'edit_dashboard_done': '✓ Готово',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': 'Ошибка при загрузке истории файлов.',
    'exit_to_ha': 'Вернуться в Home Assistant',
    'exp_indefinite': 'Бессрочно',
    'exp_temporary': 'Временно (Дата/Время)',
    'expired': 'Истек',
    'export_btn': '📤 Скачать',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': 'Вы уверены, что хотите навсегда удалить «{filename}»?',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} файлов',
    'files_count_short': '{count} файл.',
    'first_run_blocked_desc': 'Для первичной настройки Argus требуется администратор Home Assistant.',
    'first_run_blocked_title': 'Доступ запрещен',
    'first_run_desc': 'Завершите настройку для защиты вашего дома.',
    'first_run_pin_expl': 'PIN-код доступа открывает Argus. Мастер PIN-код управляет охраной.',
    'first_run_skip': 'Пропустить',
    'first_run_start': 'Начать работу с Argus',
    'first_run_welcome': 'Спасибо за выбор Argus Home Hub. Добро пожаловать.',
    'forgot_pin': 'Забыли PIN?',
    'fullscreen_title': 'Полный экран',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Учетная запись Home Assistant: {name}',
    'ha_account_unavailable': 'Привязка недоступна',
    'ha_admin_label': 'Администратор Home Assistant',
    'ha_role_admin': 'Админ HA',
    'ha_role_standard': 'Пользователь HA',
    'ha_standard_user_label': 'Стандартный пользователь HA',
    'hero_desc': 'Комплексная система безопасности, контроль доступа, автоматизации и HomeKit.',
    'history_refresh': '🔄 Обновить',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': 'Название дома',
    'home_name_lbl': 'Название дома',
    'home_name_modal_desc': 'Это имя отображается в панели экземпляров и в полноекранном режиме.',
    'home_name_modal_title': '🏡 Название дома',
    'home_name_placeholder': 'Мой дом',
    'homekit_bridge': 'Мост HomeKit',
    'homekit_house': 'Apple Home',
    'homekit_not_paired': 'Не связано ни с каким домом.',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 Восстановить',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': 'Активные экземпляры',
    'introduce_pin': 'Введите ваш PIN',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': 'Администратор',
    'lang_select_title': 'Выбрать язык',
    'lang_selector_lbl': '⚙️ Язык',
    'language': 'Язык',
    'lbl_aesthetic_custom': 'Эстетическая персонализация',
    'lbl_load_file': 'Загрузить файл:',
    'lbl_uploaded_files': 'Загруженные файлы на сервере',
    'link_ha_user': 'Связать с пользователем Home Assistant',
    'linked_rules': 'Правила, связанные с Argus',
    'loading': 'Загрузка…',
    'lock_if_open': 'Блокировать при открытии',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus инициализирован пользователем {user}',
    'log_action_fullscreen_unlocked': 'Киоск разблокирован пользователем {user}',
    'log_action_master_pin_rejected': 'Неверная попытка ввода мастер-PIN {user}',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': 'Действие отклонено',
    'log_action_save_ui': 'Настройки UI сохранены пользователем {user}',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': 'Выбран профиль: {user}',
    'log_action_sos': 'SOS паника вызвана пользователем {user}',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'SOS паника остановлена пользователем {user}',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': 'PIN-код доступа проверен {user}',
    'log_armed': 'Поставлено',
    'log_by': 'от',
    'log_detail_armed': 'Режим',
    'log_detail_disarm': 'Система снята',
    'log_detail_pin_reset': 'Мастер-PIN сброшен администратором',
    'log_detail_pin_reset_failed': 'Несанкционированная попытка сбросить мастер-PIN',
    'log_detail_triggered': 'Автоматическая активация',
    'log_disarmed': 'Снято',
    'log_no_events': 'Нет последних событий.',
    'log_sensor': 'Датчик',
    'log_triggered': 'Сработало!',
    'login_btn': 'Войти',
    'manual_arm': 'Вручную',
    'manual_disarm': 'Вручную (Снято)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': 'Ушёл',
    'mode_home': 'Дома',
    'mode_night': 'Ночь',
    'mode_vacation': 'Отпуск',
    'modes': 'Режимы',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Никогда не срабатывало',
    'new_pin': 'Новый PIN',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': 'Нет автоматизаций, связанных с Argus.',
    'no_files_uploaded': 'Нет загруженных файлов. Загрузите фон с помощью элементов управления выше.',
    'no_files_uploaded_short': 'Нет загруженных файлов.',
    'no_instances': 'Нет экземпляров.',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': 'Все активные учетные записи Home Assistant имеют профиль.',
    'no_users': 'Дополнительные пользователи не настроены.',
    'none_selected': 'Ничего не выбрано',
    'notif_desc': 'Выберите мобильные устройства, зарегистрированные в HA, которые будут получать оповещения Argus.',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 Уведомления',
    'open_sensors': 'Открытые датчики',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': 'Ожидание',
    'pin_active_no': 'PIN активен: Нет',
    'pin_active_yes': 'PIN активен: Да',
    'pin_deleted': '✓ PIN Удален',
    'pin_desc': 'Цифровой код для постановки и снятия с охраны.',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ Неверный текущий PIN',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': 'Мастер PIN',
    'pin_modal_desc': 'Цифровой PIN для снятия Argus с охраны',
    'pin_placeholder': 'PIN доступа',
    'pin_remove_hint': 'Для удаления PIN: введите текущий и оставьте поля пустыми.',
    'pin_reset_admin_only': '❌ Ошибка: Только администраторы Home Assistant могут сбросить мастер-PIN.',
    'pin_reset_confirm': 'Вы уверены, что хотите сбросить мастер-PIN? Текущий PIN-код будет удален и отключен.',
    'pin_updated': '✓ PIN Обновлен',
    'profile_is_yours': 'Это ваш профиль',
    'profile_needs_pin': 'Профиль другого пользователя — введите PIN доступа',
    'profile_no_pin_access': 'У этого профиля нет PIN доступа. Вы не можете его открыть.',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ Сброс',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': 'Сбросить макет',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'Администратор Argus',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': 'Обычный пользователь',
    'role_argus_user': 'Стандартный пользователь',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': 'Сохранить',
    'save_config': 'СОХРАНИТЬ КОНФИГУРАЦИЮ',
    'save_mode': '💾 Сохранить режим',
    'save_notif': 'Сохранить',
    'save_user': 'Сохранить',
    'search_placeholder': 'Поиск по имени, области или entity_id',
    'search_select': 'Поиск и выбор',
    'searching_auto': '↻ Поиск автоматизаций...',
    'select_all': '☑ Все',
    'select_btn': '+ Выбрать',
    'select_profile_subtitle': 'Доступ к вашим панелям безопасности и экземплярам Argus.',
    'select_profile_title': 'Выберите ваш профиль',
    'selected_lbl': 'Выбрано',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': 'Датчики вторжения',
    'sensors_to_bypass': 'Датчики для обхода',
    'settings': '⚙️ Настройки',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': 'Сирены',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 Вызвать экстренные службы',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': 'Проведите для немедленной активации тревоги.',
    'sos_confirm_title': 'Подтвердить тревогу',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': 'Проведите для активации SOS',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': 'ЗАКРЫТО',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': 'ОТКРЫТО',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 Сменить профиль',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': 'СИСТЕМА НА ОХРАНЕ',
    'system_disarmed': 'СИСТЕМА СНЯТА С ОХРАНЫ',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': 'Авто (лок. датчик / термостат / климат)',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(термостат)',
    'thermostat_alert_notif': '🌡️ Температурный сигнал',
    'times_section': '⏱️ Таймеры',
    'triggered': 'ТРЕВОГА!',
    'unavailable': 'Недоступно',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ Отменить сброс',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': 'Учетные записи Home Assistant без профиля Argus',
    'unlock_kiosk': 'Разблокировать киоск',
    'update_pin': 'Обновить PIN',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': 'Панель',
    'use_ha_language': 'Использовать язык Home Assistant',
    'user_default': 'Пользователь',
    'user_exp_date': 'Expiration Date/Time',
    'user_exp_type': 'Expiration',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': 'PIN пользователя',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Роль Argus',
    'username': 'Имя пользователя',
    'users_title': '👥 Пользователи и контроль доступа',
    'wait_if_open': 'Ожидать закрытия датчиков',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Welcome,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
  'hi': {
    'accept': 'स्वीकार करें',
    'access_desc': 'Global security management, master PIN and administrators.',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': 'Access Control & Users',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': 'समाप्त होता है',
    'activity_log': '📋 गतिविधि लॉग',
    'add_btn': '+ जोड़ें',
    'add_user': 'उपयोगकर्ता जोड़ें',
    'admin_only': 'केवल व्यवस्थापक ही इस अनुभाग को संशोधित कर सकते हैं।',
    'alarm_instance': 'Alarm Instance',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': 'आर्मिंग विलंब (सेकंड)',
    'arm_time_label': 'Arm time (s)',
    'armed_away': 'बाहर',
    'armed_home': 'घर पर',
    'armed_night': 'रात',
    'armed_vacation': 'छुट्टियाँ',
    'arming': 'सशस्त्र किया जा रहा है',
    'automations': '⚡ स्वचालन',
    'available': 'उपलब्ध',
    'background_lbl': 'Background',
    'backup_desc': 'Save a backup of your settings or restore a previous one.',
    'backup_title': 'Backup & Restore',
    'badge_pin_reset': 'PIN Reset',
    'badge_pin_reset_failed': 'PIN Reset Failed',
    'battery_low': '⚠️ Low Battery',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Default (Argus)',
    'bg_hub_selected_from_history': 'Argus background selected from history.',
    'bg_hub_title': 'Argus background',
    'bg_image_opt': 'Image / GIF',
    'bg_none': 'Default',
    'bg_panel_none': 'No background',
    'bg_panel_selected_from_history': 'Panel background selected from history.',
    'bg_panel_title': 'Panel background',
    'bg_photo': 'One photo',
    'bg_sound_opt': 'Video sound',
    'bg_video': 'Loop video',
    'bg_weather': 'Animated weather',
    'bridge_not_connected': 'Bridge not configured',
    'bridge_not_desc': 'Enable the HomeKit Bridge integration in Home Assistant and include the entity <code>alarm_control_panel.argus_*</code> to generate a pairing QR code.',
    'bridge_paired': 'Bridge configured',
    'bridge_paired_desc': 'The <b>{bridge}</b> bridge is configured in Home Assistant. Home Assistant cannot verify from here whether it was added to Apple Home or report its name.',
    'btn_away': '🔒 बाहर',
    'btn_create_argus_profile': 'Create Argus Profile',
    'btn_disarmed': 'निरस्त्र',
    'btn_home': '🏠 घर पर',
    'btn_night': '🌙 रात',
    'btn_sos': '🚨 आपातकालीन / पैनिक',
    'btn_vacation': '✈️ छुट्टियाँ',
    'bypass_lbl': '🚫 बायपास',
    'cancel': 'रद्द करें',
    'cancel_btn': 'Cancel',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': 'Cannot delete the last binding administrator.',
    'change_btn': 'Cambiar',
    'change_pin': 'मास्टर पिन',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': 'साफ़ करें',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': 'साफ़ करें',
    'clock_12h': '12-hour (AM/PM)',
    'clock_24h': '24-hour',
    'clock_auto': 'Automatic (Home Assistant)',
    'clock_format_desc': 'Choose how time is displayed across panels and logs.',
    'clock_format_label': 'Time Format',
    'close': 'बंद करें',
    'confirm': '✓ पुष्टि करें',
    'confirm_pin': 'पिन की पुष्टि करें',
    'connected': 'जुड़ा हुआ',
    'create_ha': '+ HA में बनाएँ',
    'current_pin': 'वर्तमान पिन',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': 'Delete from storage',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': 'Are you sure you want to delete \"{name}\"?',
    'delete_user_tooltip': 'Delete user profile',
    'deselect_all': '☐ None',
    'details_notif': 'Alarm notification',
    'disarm_time': 'प्रवेश विलंब (सेकंड)',
    'disarm_time_label': 'Entry delay (s)',
    'disarmed': 'निरस्त्र',
    'done': 'Готово',
    'edit_btn': '✏️ Edit',
    'edit_dashboard': 'डैशबोर्ड संपादित करें',
    'edit_dashboard_done': '✓ संपन्न',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': 'Error loading file history.',
    'exit_to_ha': 'Back to Home Assistant',
    'exp_indefinite': 'अनिश्चित',
    'exp_temporary': 'अस्थायी (दिनांक/समय)',
    'expired': 'समाप्त हो गया',
    'export_btn': '📤 Download',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': 'Are you sure you want to permanently delete \"{filename}\"?',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} files',
    'files_count_short': '{count} files',
    'first_run_blocked_desc': 'A Home Assistant administrator is required to set up Argus for the first time.',
    'first_run_blocked_title': 'Access Denied',
    'first_run_desc': 'Complete setup to secure your home.',
    'first_run_pin_expl': 'The access PIN opens Argus. The master PIN controls arming and disarming.',
    'first_run_skip': 'Skip',
    'first_run_start': 'Start with Argus',
    'first_run_welcome': 'Thank you for choosing Argus Home Hub. Welcome.',
    'forgot_pin': 'Forgot PIN?',
    'fullscreen_title': 'Full screen',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Home Assistant Account: {name}',
    'ha_account_unavailable': 'Binding unavailable',
    'ha_admin_label': 'Home Assistant Admin',
    'ha_role_admin': 'HA Admin',
    'ha_role_standard': 'HA User',
    'ha_standard_user_label': 'Standard HA User',
    'hero_desc': 'व्यापक सुरक्षा प्रणाली, अभिगम नियंत्रण, स्वचालन और HomeKit।',
    'history_refresh': '🔄 रीफ्रेश करें',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': 'Home Name',
    'home_name_lbl': 'Home Name',
    'home_name_modal_desc': 'This name appears in the instances panel and in full screen.',
    'home_name_modal_title': '🏡 Home Name',
    'home_name_placeholder': 'My Home',
    'homekit_bridge': 'HomeKit Bridge',
    'homekit_house': 'Apple Home',
    'homekit_not_paired': 'Not paired to any home.',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 Restore',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': 'सक्रिय उदाहरण',
    'introduce_pin': 'अपना पिन दर्ज करें',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': 'व्यवस्थापक',
    'lang_select_title': 'Select Language',
    'lang_selector_lbl': '⚙️ भाषा',
    'language': 'Language',
    'lbl_aesthetic_custom': 'Aesthetic Customization',
    'lbl_load_file': 'Upload file:',
    'lbl_uploaded_files': 'Uploaded files on server',
    'link_ha_user': 'Link to Home Assistant User',
    'linked_rules': 'Argus से जुड़े नियम',
    'loading': 'Загрузка…',
    'lock_if_open': 'खुला होने पर लॉक करें',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus initialized by {user}',
    'log_action_fullscreen_unlocked': 'Kiosk unlocked by {user}',
    'log_action_master_pin_rejected': 'Incorrect master PIN attempt by {user}',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': 'Action rejected',
    'log_action_save_ui': 'UI Settings saved by {user}',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': 'Profile selected: {user}',
    'log_action_sos': 'SOS Panic triggered by {user}',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'SOS Panic stopped by {user}',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': 'Access PIN verified by {user}',
    'log_armed': 'Armed',
    'log_by': 'by',
    'log_detail_armed': 'Mode',
    'log_detail_disarm': 'System disarmed',
    'log_detail_pin_reset': 'Master PIN reset by administrator',
    'log_detail_pin_reset_failed': 'Unauthorized attempt to reset master PIN',
    'log_detail_triggered': 'Automatic activation',
    'log_disarmed': 'Disarmed',
    'log_no_events': 'No recent events.',
    'log_sensor': 'Sensor',
    'log_triggered': 'Triggered!',
    'login_btn': 'Login',
    'manual_arm': 'Manual',
    'manual_disarm': 'Manual (Disarmed)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': 'Away',
    'mode_home': 'Home',
    'mode_night': 'Night',
    'mode_vacation': 'Vacation',
    'modes': 'मोड',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Never triggered',
    'new_pin': 'नया पिन',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': 'No automations linked to Argus.',
    'no_files_uploaded': 'No uploaded files. Upload a background using the controls above.',
    'no_files_uploaded_short': 'No uploaded files.',
    'no_instances': 'No instances. Add Argus from Integrations.',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': 'All active Home Assistant accounts have a profile.',
    'no_users': 'कोई अतिरिक्त उपयोगकर्ता कॉन्फ़िगर नहीं किया गया।',
    'none_selected': 'कोई चयनित नहीं',
    'notif_desc': 'HA में पंजीकृत उन मोबाइल उपकरणों का चयन करें जो Argus अलर्ट प्राप्त करेंगे।',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 सूचनाएं',
    'open_sensors': 'Open sensors',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': 'लंबित',
    'pin_active_no': 'Master PIN: Deactivated',
    'pin_active_yes': 'Master PIN: Active',
    'pin_deleted': '✓ PIN Deleted',
    'pin_desc': 'आर्म और निरस्त्र करने के लिए संख्यात्मक कोड।',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ Incorrect current PIN',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': 'Master PIN',
    'pin_modal_desc': 'Argus को निरस्त्र करने के लिए संख्यात्मक पिन',
    'pin_placeholder': 'Access PIN',
    'pin_remove_hint': 'To remove PIN: Enter the current one and leave the fields below empty.',
    'pin_reset_admin_only': '❌ Error: Only Home Assistant administrators can reset the master PIN.',
    'pin_reset_confirm': 'Are you sure you want to reset the master PIN? The current PIN will be removed and deactivated.',
    'pin_updated': '✓ PIN Updated',
    'profile_is_yours': 'This is your profile',
    'profile_needs_pin': 'Another person’s profile — enter the access PIN',
    'profile_no_pin_access': 'This profile has no access PIN. You cannot open it.',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ Factory Reset',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': 'लेआउट रीसेट करें',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'Argus व्यवस्थापक',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': 'मानक उपयोगकर्ता',
    'role_argus_user': 'Standard User',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': 'Save',
    'save_config': 'कॉन्फ़िगरेशन सहेजें',
    'save_mode': '💾 मोड सहेजें',
    'save_notif': 'सहेजें',
    'save_user': 'सहेजें',
    'search_placeholder': 'नाम, क्षेत्र या entity_id से खोजें',
    'search_select': 'Search & select',
    'searching_auto': '↻ Searching automations...',
    'select_all': '☑ All',
    'select_btn': '+ चुनें',
    'select_profile_subtitle': 'Access your security panels and Argus instances.',
    'select_profile_title': 'Select Your Profile',
    'selected_lbl': 'चयनित',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': 'घुसपैठ सेंसर',
    'sensors_to_bypass': 'Sensors to Bypass',
    'settings': '⚙️ सेटिंग्स',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': 'सायरन',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 Call Emergency Services',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': 'Slide to trigger the alarm immediately.',
    'sos_confirm_title': 'Confirm panic',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': 'SOS सक्रिय करने के लिए स्लाइड करें',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': 'बंद',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': 'खुला',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 प्रोफ़ाइल बदलें',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': 'सिस्टम सशस्त्र है',
    'system_disarmed': 'सिस्टम निरस्त्र है',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': 'Automatic (local sensor / thermostat / climate)',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(thermostat)',
    'thermostat_alert_notif': '🌡️ Temperature alert',
    'times_section': '⏱️ टाइमर',
    'triggered': 'अलार्म!',
    'unavailable': 'Unavailable',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ Undo Reset',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': 'Home Assistant accounts without Argus profile',
    'unlock_kiosk': 'Unlock kiosk',
    'update_pin': 'पिन अपडेट करें',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': 'Panel',
    'use_ha_language': 'Home Assistant भाषा का उपयोग करें',
    'user_default': 'Пользователь',
    'user_exp_date': 'Expiration Date/Time',
    'user_exp_type': 'Expiration',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': 'उपयोगकर्ता पिन',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Argus Role',
    'username': 'उपयोगकर्ता नाम',
    'users_title': '👥 उपयोगकर्ता और अभिगम नियंत्रण',
    'wait_if_open': 'सेंसर बंद होने की प्रतीक्षा करें',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Welcome,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
  'ar': {
    'accept': 'قبول',
    'access_desc': 'Global security management, master PIN and administrators.',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': 'Access Control & Users',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': 'ينتهي في',
    'activity_log': '📋 سجل الأنشطة',
    'add_btn': '+ إضافة',
    'add_user': 'إضافة مستخدم',
    'admin_only': 'يمكن للمسؤولين فقط تعديل هذا القسم.',
    'alarm_instance': 'Alarm Instance',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': 'تأخير التسليح (ثانية)',
    'arm_time_label': 'Arm time (s)',
    'armed_away': 'بالخارج',
    'armed_home': 'في المنزل',
    'armed_night': 'ليلاً',
    'armed_vacation': 'إجازة',
    'arming': 'جاري التسليح',
    'automations': '⚡ الأتمتة',
    'available': 'متاح',
    'background_lbl': 'Background',
    'backup_desc': 'Save a backup of your settings or restore a previous one.',
    'backup_title': 'Backup & Restore',
    'badge_pin_reset': 'PIN Reset',
    'badge_pin_reset_failed': 'PIN Reset Failed',
    'battery_low': '⚠️ Low Battery',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Default (Argus)',
    'bg_hub_selected_from_history': 'Argus background selected from history.',
    'bg_hub_title': 'Argus background',
    'bg_image_opt': 'Image / GIF',
    'bg_none': 'Default',
    'bg_panel_none': 'No background',
    'bg_panel_selected_from_history': 'Panel background selected from history.',
    'bg_panel_title': 'Panel background',
    'bg_photo': 'One photo',
    'bg_sound_opt': 'Video sound',
    'bg_video': 'Loop video',
    'bg_weather': 'Animated weather',
    'bridge_not_connected': 'Bridge not configured',
    'bridge_not_desc': 'Enable the HomeKit Bridge integration in Home Assistant and include the entity <code>alarm_control_panel.argus_*</code> to generate a pairing QR code.',
    'bridge_paired': 'Bridge configured',
    'bridge_paired_desc': 'The <b>{bridge}</b> bridge is configured in Home Assistant. Home Assistant cannot verify from here whether it was added to Apple Home or report its name.',
    'btn_away': '🔒 بالخارج',
    'btn_create_argus_profile': 'Create Argus Profile',
    'btn_disarmed': 'تم نزع السلاح',
    'btn_home': '🏠 في المنزل',
    'btn_night': '🌙 ليلاً',
    'btn_sos': '🚨 استغاثة / ذعر',
    'btn_vacation': '✈️ إجازة',
    'bypass_lbl': '🚫 تجاوز',
    'cancel': 'إلغاء',
    'cancel_btn': 'Cancel',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': 'Cannot delete the last binding administrator.',
    'change_btn': 'Cambiar',
    'change_pin': 'رمز PIN الرئيسي',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': 'مسح',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': 'مسح',
    'clock_12h': '12-hour (AM/PM)',
    'clock_24h': '24-hour',
    'clock_auto': 'Automatic (Home Assistant)',
    'clock_format_desc': 'Choose how time is displayed across panels and logs.',
    'clock_format_label': 'Time Format',
    'close': 'إغلاق',
    'confirm': '✓ تأكيد',
    'confirm_pin': 'تأكيد رمز PIN',
    'connected': 'متصل',
    'create_ha': '+ إنشاء في HA',
    'current_pin': 'رمز PIN الحالي',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': 'Delete from storage',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': 'Are you sure you want to delete \"{name}\"?',
    'delete_user_tooltip': 'Delete user profile',
    'deselect_all': '☐ None',
    'details_notif': 'Alarm notification',
    'disarm_time': 'تأخير الدخول (ثانية)',
    'disarm_time_label': 'Entry delay (s)',
    'disarmed': 'تم نزع السلاح',
    'done': 'Готово',
    'edit_btn': '✏️ Edit',
    'edit_dashboard': 'تعديل لوحة المعلومات',
    'edit_dashboard_done': '✓ تم',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': 'Error loading file history.',
    'exit_to_ha': 'Back to Home Assistant',
    'exp_indefinite': 'غير محدد',
    'exp_temporary': 'مؤقت (التاريخ/الوقت)',
    'expired': 'منتهي الصلاحية',
    'export_btn': '📤 Download',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': 'Are you sure you want to permanently delete \"{filename}\"?',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} files',
    'files_count_short': '{count} files',
    'first_run_blocked_desc': 'A Home Assistant administrator is required to set up Argus for the first time.',
    'first_run_blocked_title': 'Access Denied',
    'first_run_desc': 'Complete setup to secure your home.',
    'first_run_pin_expl': 'The access PIN opens Argus. The master PIN controls arming and disarming.',
    'first_run_skip': 'Skip',
    'first_run_start': 'Start with Argus',
    'first_run_welcome': 'Thank you for choosing Argus Home Hub. Welcome.',
    'forgot_pin': 'Forgot PIN?',
    'fullscreen_title': 'Full screen',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Home Assistant Account: {name}',
    'ha_account_unavailable': 'Binding unavailable',
    'ha_admin_label': 'Home Assistant Admin',
    'ha_role_admin': 'HA Admin',
    'ha_role_standard': 'HA User',
    'ha_standard_user_label': 'Standard HA User',
    'hero_desc': 'نظام أمان شامل، والتحكم في الوصول، والأتمتة، وHomeKit.',
    'history_refresh': '🔄 تحديث',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': 'Home Name',
    'home_name_lbl': 'Home Name',
    'home_name_modal_desc': 'This name appears in the instances panel and in full screen.',
    'home_name_modal_title': '🏡 Home Name',
    'home_name_placeholder': 'My Home',
    'homekit_bridge': 'HomeKit Bridge',
    'homekit_house': 'Apple Home',
    'homekit_not_paired': 'Not paired to any home.',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 Restore',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': 'المثيلات النشطة',
    'introduce_pin': 'أدخل رمز PIN الخاص بك',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': 'مسؤول',
    'lang_select_title': 'Select Language',
    'lang_selector_lbl': '⚙️ اللغة',
    'language': 'Language',
    'lbl_aesthetic_custom': 'Aesthetic Customization',
    'lbl_load_file': 'Upload file:',
    'lbl_uploaded_files': 'Uploaded files on server',
    'link_ha_user': 'Link to Home Assistant User',
    'linked_rules': 'القواعد المرتبطة بـ Argus',
    'loading': 'Загрузка…',
    'lock_if_open': 'قفل إذا كان مفتوحًا',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus initialized by {user}',
    'log_action_fullscreen_unlocked': 'Kiosk unlocked by {user}',
    'log_action_master_pin_rejected': 'Incorrect master PIN attempt by {user}',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': 'Action rejected',
    'log_action_save_ui': 'UI Settings saved by {user}',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': 'Profile selected: {user}',
    'log_action_sos': 'SOS Panic triggered by {user}',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'SOS Panic stopped by {user}',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': 'Access PIN verified by {user}',
    'log_armed': 'Armed',
    'log_by': 'by',
    'log_detail_armed': 'Mode',
    'log_detail_disarm': 'System disarmed',
    'log_detail_pin_reset': 'Master PIN reset by administrator',
    'log_detail_pin_reset_failed': 'Unauthorized attempt to reset master PIN',
    'log_detail_triggered': 'Automatic activation',
    'log_disarmed': 'Disarmed',
    'log_no_events': 'No recent events.',
    'log_sensor': 'Sensor',
    'log_triggered': 'Triggered!',
    'login_btn': 'Login',
    'manual_arm': 'Manual',
    'manual_disarm': 'Manual (Disarmed)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': 'Away',
    'mode_home': 'Home',
    'mode_night': 'Night',
    'mode_vacation': 'Vacation',
    'modes': 'الأوضاع',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Never triggered',
    'new_pin': 'رمز PIN جديد',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': 'No automations linked to Argus.',
    'no_files_uploaded': 'No uploaded files. Upload a background using the controls above.',
    'no_files_uploaded_short': 'No uploaded files.',
    'no_instances': 'No instances. Add Argus from Integrations.',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': 'All active Home Assistant accounts have a profile.',
    'no_users': 'لم يتم تكوين مستخدمين إضافيين.',
    'none_selected': 'لم يتم تحديد أي منها',
    'notif_desc': 'حدد الأجهزة المحمولة المسجلة في HA والتي ستتلقى تنبيهات Argus.',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 الإشعارات',
    'open_sensors': 'Open sensors',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': 'قيد الانتظار',
    'pin_active_no': 'Master PIN: Deactivated',
    'pin_active_yes': 'Master PIN: Active',
    'pin_deleted': '✓ PIN Deleted',
    'pin_desc': 'رمز رقمي للتسليح ونزع السلاح.',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ Incorrect current PIN',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': 'Master PIN',
    'pin_modal_desc': 'رمز PIN رقمي لنزع سلاح Argus',
    'pin_placeholder': 'Access PIN',
    'pin_remove_hint': 'To remove PIN: Enter the current one and leave the fields below empty.',
    'pin_reset_admin_only': '❌ Error: Only Home Assistant administrators can reset the master PIN.',
    'pin_reset_confirm': 'Are you sure you want to reset the master PIN? The current PIN will be removed and deactivated.',
    'pin_updated': '✓ PIN Updated',
    'profile_is_yours': 'This is your profile',
    'profile_needs_pin': 'Another person’s profile — enter the access PIN',
    'profile_no_pin_access': 'This profile has no access PIN. You cannot open it.',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ Factory Reset',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': 'إعادة تعيين التخطيط',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'مسؤول Argus',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': 'مستخدم قياسي',
    'role_argus_user': 'Standard User',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': 'Save',
    'save_config': 'حفظ التكوين',
    'save_mode': '💾 حفظ الوضع',
    'save_notif': 'حفظ',
    'save_user': 'حفظ',
    'search_placeholder': 'البحث بالاسم أو المنطقة أو entity_id',
    'search_select': 'Search & select',
    'searching_auto': '↻ Searching automations...',
    'select_all': '☑ All',
    'select_btn': '+ تحديد',
    'select_profile_subtitle': 'Access your security panels and Argus instances.',
    'select_profile_title': 'Select Your Profile',
    'selected_lbl': 'محدد',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': 'أجهزة استشعار التسلل',
    'sensors_to_bypass': 'Sensors to Bypass',
    'settings': '⚙️ الإعدادات',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': 'صافرات الإنذار',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 Call Emergency Services',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': 'Slide to trigger the alarm immediately.',
    'sos_confirm_title': 'Confirm panic',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': 'مرر لتفعيل SOS',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': 'مغلق',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': 'مفتوح',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 تبديل الملف الشخصي',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': 'النظام مسلح',
    'system_disarmed': 'النظام منزوع السلاح',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': 'Automatic (local sensor / thermostat / climate)',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(thermostat)',
    'thermostat_alert_notif': '🌡️ Temperature alert',
    'times_section': '⏱️ المؤقتات',
    'triggered': 'إنذار!',
    'unavailable': 'Unavailable',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ Undo Reset',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': 'Home Assistant accounts without Argus profile',
    'unlock_kiosk': 'Unlock kiosk',
    'update_pin': 'تحديث رمز PIN',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': 'Panel',
    'use_ha_language': 'استخدام لغة Home Assistant',
    'user_default': 'Пользователь',
    'user_exp_date': 'Expiration Date/Time',
    'user_exp_type': 'Expiration',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': 'رمز PIN للمستخدم',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Argus Role',
    'username': 'اسم المستخدم',
    'users_title': '👥 المستخدمون والتحكم في الوصول',
    'wait_if_open': 'انتظر حتى تغلق أجهزة الاستشعار',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Welcome,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
  'ko': {
    'accept': '수락',
    'access_desc': 'Global security management, master PIN and administrators.',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': 'Access Control & Users',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': '만료일',
    'activity_log': '📋 활동 로그',
    'add_btn': '+ 추가',
    'add_user': '사용자 추가',
    'admin_only': '관리자만 이 섹션을 수정할 수 있습니다.',
    'alarm_instance': 'Alarm Instance',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': '설정 지연 (초)',
    'arm_time_label': 'Arm time (s)',
    'armed_away': '외출',
    'armed_home': '재택',
    'armed_night': '야간',
    'armed_vacation': '휴가',
    'arming': '설정 중',
    'automations': '⚡ 자동화',
    'available': '사용 가능',
    'background_lbl': 'Background',
    'backup_desc': 'Save a backup of your settings or restore a previous one.',
    'backup_title': 'Backup & Restore',
    'badge_pin_reset': 'PIN Reset',
    'badge_pin_reset_failed': 'PIN Reset Failed',
    'battery_low': '⚠️ Low Battery',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Default (Argus)',
    'bg_hub_selected_from_history': 'Argus background selected from history.',
    'bg_hub_title': 'Argus background',
    'bg_image_opt': 'Image / GIF',
    'bg_none': 'Default',
    'bg_panel_none': 'No background',
    'bg_panel_selected_from_history': 'Panel background selected from history.',
    'bg_panel_title': 'Panel background',
    'bg_photo': 'One photo',
    'bg_sound_opt': 'Video sound',
    'bg_video': 'Loop video',
    'bg_weather': 'Animated weather',
    'bridge_not_connected': 'Bridge not configured',
    'bridge_not_desc': 'Enable the HomeKit Bridge integration in Home Assistant and include the entity <code>alarm_control_panel.argus_*</code> to generate a pairing QR code.',
    'bridge_paired': 'Bridge configured',
    'bridge_paired_desc': 'The <b>{bridge}</b> bridge is configured in Home Assistant. Home Assistant cannot verify from here whether it was added to Apple Home or report its name.',
    'btn_away': '🔒 외출',
    'btn_create_argus_profile': 'Create Argus Profile',
    'btn_disarmed': '해제됨',
    'btn_home': '🏠 재택',
    'btn_night': '🌙 야간',
    'btn_sos': '🚨 SOS / 패닉',
    'btn_vacation': '✈️ 휴가',
    'bypass_lbl': '🚫 바이패스',
    'cancel': '취소',
    'cancel_btn': 'Cancel',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': 'Cannot delete the last binding administrator.',
    'change_btn': 'Cambiar',
    'change_pin': '마스터 PIN',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': '지우기',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': '지우기',
    'clock_12h': '12-hour (AM/PM)',
    'clock_24h': '24-hour',
    'clock_auto': 'Automatic (Home Assistant)',
    'clock_format_desc': 'Choose how time is displayed across panels and logs.',
    'clock_format_label': 'Time Format',
    'close': '닫기',
    'confirm': '✓ 확인',
    'confirm_pin': 'PIN 확인',
    'connected': '연결됨',
    'create_ha': '+ HA에서 생성',
    'current_pin': '현재 PIN',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': 'Delete from storage',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': 'Are you sure you want to delete \"{name}\"?',
    'delete_user_tooltip': 'Delete user profile',
    'deselect_all': '☐ None',
    'details_notif': 'Alarm notification',
    'disarm_time': '진입 지연 (초)',
    'disarm_time_label': 'Entry delay (s)',
    'disarmed': '해제됨',
    'done': 'Готово',
    'edit_btn': '✏️ Edit',
    'edit_dashboard': '대시보드 편집',
    'edit_dashboard_done': '✓ 완료',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': 'Error loading file history.',
    'exit_to_ha': 'Back to Home Assistant',
    'exp_indefinite': '무기한',
    'exp_temporary': '임시 (날짜/시간)',
    'expired': '만료됨',
    'export_btn': '📤 Download',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': 'Are you sure you want to permanently delete \"{filename}\"?',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} files',
    'files_count_short': '{count} files',
    'first_run_blocked_desc': 'A Home Assistant administrator is required to set up Argus for the first time.',
    'first_run_blocked_title': 'Access Denied',
    'first_run_desc': 'Complete setup to secure your home.',
    'first_run_pin_expl': 'The access PIN opens Argus. The master PIN controls arming and disarming.',
    'first_run_skip': 'Skip',
    'first_run_start': 'Start with Argus',
    'first_run_welcome': 'Thank you for choosing Argus Home Hub. Welcome.',
    'forgot_pin': 'Forgot PIN?',
    'fullscreen_title': 'Full screen',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Home Assistant Account: {name}',
    'ha_account_unavailable': 'Binding unavailable',
    'ha_admin_label': 'Home Assistant Admin',
    'ha_role_admin': 'HA Admin',
    'ha_role_standard': 'HA User',
    'ha_standard_user_label': 'Standard HA User',
    'hero_desc': '종합 보안 시스템, 출입 제어, 자동화 및 HomeKit.',
    'history_refresh': '🔄 새로고침',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': 'Home Name',
    'home_name_lbl': 'Home Name',
    'home_name_modal_desc': 'This name appears in the instances panel and in full screen.',
    'home_name_modal_title': '🏡 Home Name',
    'home_name_placeholder': 'My Home',
    'homekit_bridge': 'HomeKit Bridge',
    'homekit_house': 'Apple Home',
    'homekit_not_paired': 'Not paired to any home.',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 Restore',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': '활성 인스턴스',
    'introduce_pin': 'PIN을 입력하세요',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': '관리자',
    'lang_select_title': 'Select Language',
    'lang_selector_lbl': '⚙️ 언어',
    'language': 'Language',
    'lbl_aesthetic_custom': 'Aesthetic Customization',
    'lbl_load_file': 'Upload file:',
    'lbl_uploaded_files': 'Uploaded files on server',
    'link_ha_user': 'Link to Home Assistant User',
    'linked_rules': 'Argus 연결 규칙',
    'loading': 'Загрузка…',
    'lock_if_open': '열려 있으면 잠금',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus initialized by {user}',
    'log_action_fullscreen_unlocked': 'Kiosk unlocked by {user}',
    'log_action_master_pin_rejected': 'Incorrect master PIN attempt by {user}',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': 'Action rejected',
    'log_action_save_ui': 'UI Settings saved by {user}',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': 'Profile selected: {user}',
    'log_action_sos': 'SOS Panic triggered by {user}',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'SOS Panic stopped by {user}',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': 'Access PIN verified by {user}',
    'log_armed': 'Armed',
    'log_by': 'by',
    'log_detail_armed': 'Mode',
    'log_detail_disarm': 'System disarmed',
    'log_detail_pin_reset': 'Master PIN reset by administrator',
    'log_detail_pin_reset_failed': 'Unauthorized attempt to reset master PIN',
    'log_detail_triggered': 'Automatic activation',
    'log_disarmed': 'Disarmed',
    'log_no_events': 'No recent events.',
    'log_sensor': 'Sensor',
    'log_triggered': 'Triggered!',
    'login_btn': 'Login',
    'manual_arm': 'Manual',
    'manual_disarm': 'Manual (Disarmed)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': 'Away',
    'mode_home': 'Home',
    'mode_night': 'Night',
    'mode_vacation': 'Vacation',
    'modes': '모드',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Never triggered',
    'new_pin': '새 PIN',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': 'No automations linked to Argus.',
    'no_files_uploaded': 'No uploaded files. Upload a background using the controls above.',
    'no_files_uploaded_short': 'No uploaded files.',
    'no_instances': 'No instances. Add Argus from Integrations.',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': 'All active Home Assistant accounts have a profile.',
    'no_users': '구성된 추가 사용자가 없습니다.',
    'none_selected': '선택된 항목 없음',
    'notif_desc': 'Argus 알림을 수신할 HA 등록 모바일 기기를 선택하세요.',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 알림',
    'open_sensors': 'Open sensors',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': '대기 중',
    'pin_active_no': 'Master PIN: Deactivated',
    'pin_active_yes': 'Master PIN: Active',
    'pin_deleted': '✓ PIN Deleted',
    'pin_desc': '설정 및 해제를 위한 숫자 코드입니다.',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ Incorrect current PIN',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': 'Master PIN',
    'pin_modal_desc': 'Argus 해제를 위한 숫자 PIN',
    'pin_placeholder': 'Access PIN',
    'pin_remove_hint': 'To remove PIN: Enter the current one and leave the fields below empty.',
    'pin_reset_admin_only': '❌ Error: Only Home Assistant administrators can reset the master PIN.',
    'pin_reset_confirm': 'Are you sure you want to reset the master PIN? The current PIN will be removed and deactivated.',
    'pin_updated': '✓ PIN Updated',
    'profile_is_yours': 'This is your profile',
    'profile_needs_pin': 'Another person’s profile — enter the access PIN',
    'profile_no_pin_access': 'This profile has no access PIN. You cannot open it.',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ Factory Reset',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': '레이아웃 재설정',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'Argus 관리자',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': '표준 사용자',
    'role_argus_user': 'Standard User',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': 'Save',
    'save_config': '구성 저장',
    'save_mode': '💾 모드 저장',
    'save_notif': '저장',
    'save_user': '저장',
    'search_placeholder': '이름, 영역 또는 entity_id로 검색',
    'search_select': 'Search & select',
    'searching_auto': '↻ Searching automations...',
    'select_all': '☑ All',
    'select_btn': '+ 선택',
    'select_profile_subtitle': 'Access your security panels and Argus instances.',
    'select_profile_title': 'Select Your Profile',
    'selected_lbl': '선택됨',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': '침입 센서',
    'sensors_to_bypass': 'Sensors to Bypass',
    'settings': '⚙️ 설정',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': '사이렌',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 Call Emergency Services',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': 'Slide to trigger the alarm immediately.',
    'sos_confirm_title': 'Confirm panic',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': 'SOS 활성화를 위해 슬라이드',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': '닫힘',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': '열림',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 프로필 전환',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': '시스템 설정됨',
    'system_disarmed': '시스템 해제됨',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': 'Automatic (local sensor / thermostat / climate)',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(thermostat)',
    'thermostat_alert_notif': '🌡️ Temperature alert',
    'times_section': '⏱️ 타이머',
    'triggered': '경보!',
    'unavailable': 'Unavailable',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ Undo Reset',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': 'Home Assistant accounts without Argus profile',
    'unlock_kiosk': 'Unlock kiosk',
    'update_pin': 'PIN 업데이트',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': 'Panel',
    'use_ha_language': 'Home Assistant 언어 사용',
    'user_default': 'Пользователь',
    'user_exp_date': 'Expiration Date/Time',
    'user_exp_type': 'Expiration',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': '사용자 PIN',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Argus Role',
    'username': '사용자 이름',
    'users_title': '👥 사용자 및 출입 제어',
    'wait_if_open': '센서가 닫힐 때까지 대기',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Welcome,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
  'ja': {
    'accept': '適用',
    'access_desc': 'Global security management, master PIN and administrators.',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': 'Access Control & Users',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': '有効期限',
    'activity_log': '📋 アクティビティ ログ',
    'add_btn': '+ 追加',
    'add_user': 'ユーザーを追加',
    'admin_only': '管理者のみがこのセクションを変更できます。',
    'alarm_instance': 'Alarm Instance',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': '警戒設定遅延 (秒)',
    'arm_time_label': 'Arm time (s)',
    'armed_away': '外出',
    'armed_home': '在宅',
    'armed_night': '夜間',
    'armed_vacation': '休暇',
    'arming': '警戒設定中',
    'automations': '⚡ 自動化',
    'available': '利用可能',
    'background_lbl': 'Background',
    'backup_desc': 'Save a backup of your settings or restore a previous one.',
    'backup_title': 'Backup & Restore',
    'badge_pin_reset': 'PIN Reset',
    'badge_pin_reset_failed': 'PIN Reset Failed',
    'battery_low': '⚠️ Low Battery',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Default (Argus)',
    'bg_hub_selected_from_history': 'Argus background selected from history.',
    'bg_hub_title': 'Argus background',
    'bg_image_opt': 'Image / GIF',
    'bg_none': 'Default',
    'bg_panel_none': 'No background',
    'bg_panel_selected_from_history': 'Panel background selected from history.',
    'bg_panel_title': 'Panel background',
    'bg_photo': 'One photo',
    'bg_sound_opt': 'Video sound',
    'bg_video': 'Loop video',
    'bg_weather': 'Animated weather',
    'bridge_not_connected': 'Bridge not configured',
    'bridge_not_desc': 'Enable the HomeKit Bridge integration in Home Assistant and include the entity <code>alarm_control_panel.argus_*</code> to generate a pairing QR code.',
    'bridge_paired': 'Bridge configured',
    'bridge_paired_desc': 'The <b>{bridge}</b> bridge is configured in Home Assistant. Home Assistant cannot verify from here whether it was added to Apple Home or report its name.',
    'btn_away': '🔒 外出',
    'btn_create_argus_profile': 'Create Argus Profile',
    'btn_disarmed': '警戒解除',
    'btn_home': '🏠 在宅',
    'btn_night': '🌙 夜間',
    'btn_sos': '🚨 SOS / パニック',
    'btn_vacation': '✈️ 休暇',
    'bypass_lbl': '🚫 バイパス',
    'cancel': 'キャンセル',
    'cancel_btn': 'Cancel',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': 'Cannot delete the last binding administrator.',
    'change_btn': 'Cambiar',
    'change_pin': 'マスター PIN',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': 'クリア',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': 'クリア',
    'clock_12h': '12-hour (AM/PM)',
    'clock_24h': '24-hour',
    'clock_auto': 'Automatic (Home Assistant)',
    'clock_format_desc': 'Choose how time is displayed across panels and logs.',
    'clock_format_label': 'Time Format',
    'close': '閉じる',
    'confirm': '✓ 確認',
    'confirm_pin': 'PIN を確認',
    'connected': '接続済み',
    'create_ha': '+ HA で作成',
    'current_pin': '現在の PIN',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': 'Delete from storage',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': 'Are you sure you want to delete \"{name}\"?',
    'delete_user_tooltip': 'Delete user profile',
    'deselect_all': '☐ None',
    'details_notif': 'Alarm notification',
    'disarm_time': '進入遅延 (秒)',
    'disarm_time_label': 'Entry delay (s)',
    'disarmed': '警戒解除',
    'done': 'Готово',
    'edit_btn': '✏️ Edit',
    'edit_dashboard': 'ダッシュボードを編集',
    'edit_dashboard_done': '✓ 完了',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': 'Error loading file history.',
    'exit_to_ha': 'Back to Home Assistant',
    'exp_indefinite': '無期限',
    'exp_temporary': '一時的 (日時)',
    'expired': '期限切れ',
    'export_btn': '📤 Download',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': 'Are you sure you want to permanently delete \"{filename}\"?',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} files',
    'files_count_short': '{count} files',
    'first_run_blocked_desc': 'A Home Assistant administrator is required to set up Argus for the first time.',
    'first_run_blocked_title': 'Access Denied',
    'first_run_desc': 'Complete setup to secure your home.',
    'first_run_pin_expl': 'The access PIN opens Argus. The master PIN controls arming and disarming.',
    'first_run_skip': 'Skip',
    'first_run_start': 'Start with Argus',
    'first_run_welcome': 'Thank you for choosing Argus Home Hub. Welcome.',
    'forgot_pin': 'Forgot PIN?',
    'fullscreen_title': 'Full screen',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Home Assistant Account: {name}',
    'ha_account_unavailable': 'Binding unavailable',
    'ha_admin_label': 'Home Assistant Admin',
    'ha_role_admin': 'HA Admin',
    'ha_role_standard': 'HA User',
    'ha_standard_user_label': 'Standard HA User',
    'hero_desc': '総合セキュリティシステム、アクセス制御、自動化、HomeKit。',
    'history_refresh': '🔄 更新',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': 'Home Name',
    'home_name_lbl': 'Home Name',
    'home_name_modal_desc': 'This name appears in the instances panel and in full screen.',
    'home_name_modal_title': '🏡 Home Name',
    'home_name_placeholder': 'My Home',
    'homekit_bridge': 'HomeKit Bridge',
    'homekit_house': 'Apple Home',
    'homekit_not_paired': 'Not paired to any home.',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 Restore',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': 'アクティブなインスタンス',
    'introduce_pin': 'PIN を入力',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': '管理者',
    'lang_select_title': 'Select Language',
    'lang_selector_lbl': '⚙️ 言語',
    'language': 'Language',
    'lbl_aesthetic_custom': 'Aesthetic Customization',
    'lbl_load_file': 'Upload file:',
    'lbl_uploaded_files': 'Uploaded files on server',
    'link_ha_user': 'Link to Home Assistant User',
    'linked_rules': 'Argus にリンクされたルール',
    'loading': 'Загрузка…',
    'lock_if_open': '開いている場合はロック',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus initialized by {user}',
    'log_action_fullscreen_unlocked': 'Kiosk unlocked by {user}',
    'log_action_master_pin_rejected': 'Incorrect master PIN attempt by {user}',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': 'Action rejected',
    'log_action_save_ui': 'UI Settings saved by {user}',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': 'Profile selected: {user}',
    'log_action_sos': 'SOS Panic triggered by {user}',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'SOS Panic stopped by {user}',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': 'Access PIN verified by {user}',
    'log_armed': 'Armed',
    'log_by': 'by',
    'log_detail_armed': 'Mode',
    'log_detail_disarm': 'System disarmed',
    'log_detail_pin_reset': 'Master PIN reset by administrator',
    'log_detail_pin_reset_failed': 'Unauthorized attempt to reset master PIN',
    'log_detail_triggered': 'Automatic activation',
    'log_disarmed': 'Disarmed',
    'log_no_events': 'No recent events.',
    'log_sensor': 'Sensor',
    'log_triggered': 'Triggered!',
    'login_btn': 'Login',
    'manual_arm': 'Manual',
    'manual_disarm': 'Manual (Disarmed)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': 'Away',
    'mode_home': 'Home',
    'mode_night': 'Night',
    'mode_vacation': 'Vacation',
    'modes': 'モード',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Never triggered',
    'new_pin': '新しい PIN',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': 'No automations linked to Argus.',
    'no_files_uploaded': 'No uploaded files. Upload a background using the controls above.',
    'no_files_uploaded_short': 'No uploaded files.',
    'no_instances': 'No instances. Add Argus from Integrations.',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': 'All active Home Assistant accounts have a profile.',
    'no_users': '追加のユーザーは構成されていません。',
    'none_selected': '未選択',
    'notif_desc': 'Argus アラートを受信する HA 登録モバイル デバイスを選択します。',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 通知',
    'open_sensors': 'Open sensors',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': '保留中',
    'pin_active_no': 'Master PIN: Deactivated',
    'pin_active_yes': 'Master PIN: Active',
    'pin_deleted': '✓ PIN Deleted',
    'pin_desc': '警戒および解除用の数字コード。',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ Incorrect current PIN',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': 'Master PIN',
    'pin_modal_desc': 'Argus を解除するための数字 PIN',
    'pin_placeholder': 'Access PIN',
    'pin_remove_hint': 'To remove PIN: Enter the current one and leave the fields below empty.',
    'pin_reset_admin_only': '❌ Error: Only Home Assistant administrators can reset the master PIN.',
    'pin_reset_confirm': 'Are you sure you want to reset the master PIN? The current PIN will be removed and deactivated.',
    'pin_updated': '✓ PIN Updated',
    'profile_is_yours': 'This is your profile',
    'profile_needs_pin': 'Another person’s profile — enter the access PIN',
    'profile_no_pin_access': 'This profile has no access PIN. You cannot open it.',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ Factory Reset',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': 'レイアウトをリセット',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'Argus 管理者',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': '標準ユーザー',
    'role_argus_user': 'Standard User',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': 'Save',
    'save_config': '構成を保存',
    'save_mode': '💾 モードを保存',
    'save_notif': '保存',
    'save_user': '保存',
    'search_placeholder': '名前、エリア、または entity_id で検索',
    'search_select': 'Search & select',
    'searching_auto': '↻ Searching automations...',
    'select_all': '☑ All',
    'select_btn': '+ 選択',
    'select_profile_subtitle': 'Access your security panels and Argus instances.',
    'select_profile_title': 'Select Your Profile',
    'selected_lbl': '選択済み',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': '侵入センサー',
    'sensors_to_bypass': 'Sensors to Bypass',
    'settings': '⚙️ 設定',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': 'サイレン',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 Call Emergency Services',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': 'Slide to trigger the alarm immediately.',
    'sos_confirm_title': 'Confirm panic',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': 'スライドして SOS を起動',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': '閉',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': '開',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 プロファイルを切り替え',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': 'システム警戒中',
    'system_disarmed': 'システム警戒解除',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': 'Automatic (local sensor / thermostat / climate)',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(thermostat)',
    'thermostat_alert_notif': '🌡️ Temperature alert',
    'times_section': '⏱️ タイマー',
    'triggered': 'アラーム！',
    'unavailable': 'Unavailable',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ Undo Reset',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': 'Home Assistant accounts without Argus profile',
    'unlock_kiosk': 'Unlock kiosk',
    'update_pin': 'PIN を更新',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': 'Panel',
    'use_ha_language': 'Home Assistant の言語を使用',
    'user_default': 'Пользователь',
    'user_exp_date': 'Expiration Date/Time',
    'user_exp_type': 'Expiration',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': 'ユーザー PIN',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Argus Role',
    'username': 'ユーザー名',
    'users_title': '👥 ユーザーとアクセス制御',
    'wait_if_open': 'センサーが閉じるのを待つ',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Welcome,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
  'uk': {
    'accept': 'Прийняти',
    'access_desc': 'Global security management, master PIN and administrators.',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': 'Access Control & Users',
    'action_failed': 'No se pudo realizar la acción',
    'active_profile': 'Perfil Activo',
    'active_until': 'Діє до',
    'activity_log': '📋 Журнал активності',
    'add_btn': '+ Додати',
    'add_user': 'Додати користувача',
    'admin_only': 'Лише адміністратори можуть змінювати цей розділ.',
    'alarm_instance': 'Alarm Instance',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'arm_time': 'Затримка встановлення (с)',
    'arm_time_label': 'Arm time (s)',
    'armed_away': 'Не вдома',
    'armed_home': 'Вдома',
    'armed_night': 'Ніч',
    'armed_vacation': 'Відпустка',
    'arming': 'Встановлення на охорону',
    'automations': '⚡ Автоматизація',
    'available': 'Доступні',
    'background_lbl': 'Background',
    'backup_desc': 'Save a backup of your settings or restore a previous one.',
    'backup_title': 'Backup & Restore',
    'badge_pin_reset': 'PIN Reset',
    'badge_pin_reset_failed': 'PIN Reset Failed',
    'battery_low': '⚠️ Low Battery',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Default (Argus)',
    'bg_hub_selected_from_history': 'Argus background selected from history.',
    'bg_hub_title': 'Argus background',
    'bg_image_opt': 'Image / GIF',
    'bg_none': 'Default',
    'bg_panel_none': 'No background',
    'bg_panel_selected_from_history': 'Panel background selected from history.',
    'bg_panel_title': 'Panel background',
    'bg_photo': 'One photo',
    'bg_sound_opt': 'Video sound',
    'bg_video': 'Loop video',
    'bg_weather': 'Animated weather',
    'bridge_not_connected': 'Bridge not configured',
    'bridge_not_desc': 'Enable the HomeKit Bridge integration in Home Assistant and include the entity <code>alarm_control_panel.argus_*</code> to generate a pairing QR code.',
    'bridge_paired': 'Bridge configured',
    'bridge_paired_desc': 'The <b>{bridge}</b> bridge is configured in Home Assistant. Home Assistant cannot verify from here whether it was added to Apple Home or report its name.',
    'btn_away': '🔒 НЕ ВДОМА',
    'btn_create_argus_profile': 'Create Argus Profile',
    'btn_disarmed': 'ЗНЯТО З ОХОРОНИ',
    'btn_home': '🏠 ВДОМА',
    'btn_night': '🌙 НІЧ',
    'btn_sos': '🚨 SOS / ПАНІКА',
    'btn_vacation': '✈️ ВІДПУСТКА',
    'bypass_lbl': '🚫 Обхід',
    'cancel': 'Скасувати',
    'cancel_btn': 'Cancel',
    'cannot_arm': 'Невозможно поставить на охрану',
    'cannot_delete_last_admin': 'Cannot delete the last binding administrator.',
    'change_btn': 'Cambiar',
    'change_pin': 'Головний PIN',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'change_user_pin': 'Cambiar PIN',
    'claim_btn': 'Заявить права администратора',
    'claim_desc': 'Вашей установке требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': 'Очистити',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': 'ОЧИСТИТИ',
    'clock_12h': '12-hour (AM/PM)',
    'clock_24h': '24-hour',
    'clock_auto': 'Automatic (Home Assistant)',
    'clock_format_desc': 'Choose how time is displayed across panels and logs.',
    'clock_format_label': 'Time Format',
    'close': 'Закрити',
    'confirm': '✓ Підтвердити',
    'confirm_pin': 'Підтвердіть PIN',
    'connected': 'ПІДКЛЮЧЕНО',
    'create_ha': '+ Створити в HA',
    'current_pin': 'Поточний PIN',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': 'Delete from storage',
    'delete_file_error': 'Не удалось удалить файл: {error}',
    'delete_user': 'Eliminar usuario',
    'delete_user_confirm': 'Are you sure you want to delete \"{name}\"?',
    'delete_user_tooltip': 'Delete user profile',
    'deselect_all': '☐ None',
    'details_notif': 'Alarm notification',
    'disarm_time': 'Затримка входу (с)',
    'disarm_time_label': 'Entry delay (s)',
    'disarmed': 'Знято з охорони',
    'done': 'Готово',
    'edit_btn': '✏️ Edit',
    'edit_dashboard': 'Редагувати панель',
    'edit_dashboard_done': '✓ Готово',
    'emergency_help': 'Número telefónico marcado en caso de emergencia.',
    'emergency_number_label': 'Número de Emergencia',
    'error_loading_uploaded_files': 'Error loading file history.',
    'exit_to_ha': 'Back to Home Assistant',
    'exp_indefinite': 'Безстроково',
    'exp_temporary': 'Тимчасово (Дата/Час)',
    'expired': 'Вичерпано',
    'export_btn': '📤 Download',
    'export_error': 'Ошибка экспорта: {error}',
    'file_choice': '«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': 'Are you sure you want to permanently delete \"{filename}\"?',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{count} files',
    'files_count_short': '{count} files',
    'first_run_blocked_desc': 'A Home Assistant administrator is required to set up Argus for the first time.',
    'first_run_blocked_title': 'Access Denied',
    'first_run_desc': 'Complete setup to secure your home.',
    'first_run_pin_expl': 'The access PIN opens Argus. The master PIN controls arming and disarming.',
    'first_run_skip': 'Skip',
    'first_run_start': 'Start with Argus',
    'first_run_welcome': 'Thank you for choosing Argus Home Hub. Welcome.',
    'forgot_pin': 'Forgot PIN?',
    'fullscreen_title': 'Full screen',
    'generic_error': 'Ошибка: {error}',
    'github_action': 'Поставить звезду на GitHub',
    'github_desc': 'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.',
    'github_title': 'Поддержите Argus',
    'ha_account_linked': 'Home Assistant Account: {name}',
    'ha_account_unavailable': 'Binding unavailable',
    'ha_admin_label': 'Home Assistant Admin',
    'ha_role_admin': 'HA Admin',
    'ha_role_standard': 'HA User',
    'ha_standard_user_label': 'Standard HA User',
    'hero_desc': 'Комплексна система безпеки, контроль доступу, автоматизація та HomeKit.',
    'history_refresh': '🔄 Оновити',
    'history_unavailable': 'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.',
    'home_default': 'Мой дом',
    'home_fallback': 'Дом',
    'home_name_label': 'Home Name',
    'home_name_lbl': 'Home Name',
    'home_name_modal_desc': 'This name appears in the instances panel and in full screen.',
    'home_name_modal_title': '🏡 Home Name',
    'home_name_placeholder': 'My Home',
    'homekit_bridge': 'HomeKit Bridge',
    'homekit_house': 'Apple Home',
    'homekit_not_paired': 'Not paired to any home.',
    'homekit_title': '🏠 HomeKit',
    'import_btn': '📥 Restore',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному backend Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Argus',
    'instances': 'Активні екземпляри',
    'introduce_pin': 'Введіть свій PIN',
    'invalid_config': 'Недопустимый файл конфигурации.',
    'is_admin': 'Адміністратор',
    'lang_select_title': 'Select Language',
    'lang_selector_lbl': '⚙️ Мова',
    'language': 'Language',
    'lbl_aesthetic_custom': 'Aesthetic Customization',
    'lbl_load_file': 'Upload file:',
    'lbl_uploaded_files': 'Uploaded files on server',
    'link_ha_user': 'Link to Home Assistant User',
    'linked_rules': 'Правила, пов\'язані з Argus',
    'loading': 'Загрузка…',
    'lock_if_open': 'Блокувати, якщо відкрито',
    'log_action_access_pin_updated': 'PIN доступа обновлён',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Argus initialized by {user}',
    'log_action_fullscreen_unlocked': 'Kiosk unlocked by {user}',
    'log_action_master_pin_rejected': 'Incorrect master PIN attempt by {user}',
    'log_action_mode_changed': 'Режим изменён',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': 'Action rejected',
    'log_action_save_ui': 'UI Settings saved by {user}',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': 'Profile selected: {user}',
    'log_action_sos': 'SOS Panic triggered by {user}',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'SOS Panic stopped by {user}',
    'log_action_user_logged_in': 'Вход пользователя',
    'log_action_verify_access_pin': 'Access PIN verified by {user}',
    'log_armed': 'Armed',
    'log_by': 'by',
    'log_detail_armed': 'Mode',
    'log_detail_disarm': 'System disarmed',
    'log_detail_pin_reset': 'Master PIN reset by administrator',
    'log_detail_pin_reset_failed': 'Unauthorized attempt to reset master PIN',
    'log_detail_triggered': 'Automatic activation',
    'log_disarmed': 'Disarmed',
    'log_no_events': 'No recent events.',
    'log_sensor': 'Sensor',
    'log_triggered': 'Triggered!',
    'login_btn': 'Login',
    'manual_arm': 'Manual',
    'manual_disarm': 'Manual (Disarmed)',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтвердить',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы удалить PIN.',
    'modal_pin_title': 'PIN доступа',
    'modal_save': 'Сохранить',
    'modal_user_added': 'Пользователь создан.',
    'mode_away': 'Away',
    'mode_home': 'Home',
    'mode_night': 'Night',
    'mode_vacation': 'Vacation',
    'modes': 'Режими',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Never triggered',
    'new_pin': 'Новий PIN',
    'no_alarm_instance': 'Нет доступного экземпляра сигнализации',
    'no_auto_linked': 'No automations linked to Argus.',
    'no_files_uploaded': 'No uploaded files. Upload a background using the controls above.',
    'no_files_uploaded_short': 'No uploaded files.',
    'no_instances': 'No instances. Add Argus from Integrations.',
    'no_results': 'Нет результатов',
    'no_rules': '',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': 'All active Home Assistant accounts have a profile.',
    'no_users': 'Додаткових користувачів не налаштовано.',
    'none_selected': 'Нічого не вибрано',
    'notif_desc': 'Виберіть мобільні пристрої, зареєстровані в HA, які отримуватимуть сповіщення Argus.',
    'notif_no_services': 'Нет мобильных служб',
    'notification_armed': '{user} активировал режим {mode}.',
    'notification_disarmed': '{user} снял систему с охраны.',
    'notifications_title': '🔔 Сповіщення',
    'open_sensors': 'Open sensors',
    'open_sensors_explain': 'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».',
    'panic_state_unknown': 'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.',
    'panic_stop_error': 'Не удалось остановить тревогу: {error}',
    'panic_stopped': 'Тревога остановлена; восстановлено состояние {state}',
    'pending': 'Очікування',
    'pin_active_no': 'Master PIN: Deactivated',
    'pin_active_yes': 'Master PIN: Active',
    'pin_deleted': '✓ PIN Deleted',
    'pin_desc': 'Числовий код для встановлення та зняття з охорони.',
    'pin_disarm_error': 'Неверный PIN или ошибка снятия с охраны',
    'pin_incorrect': '❌ Incorrect current PIN',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': 'Master PIN',
    'pin_modal_desc': 'Числовий PIN для зняття Argus з охорони',
    'pin_placeholder': 'Access PIN',
    'pin_remove_hint': 'To remove PIN: Enter the current one and leave the fields below empty.',
    'pin_reset_admin_only': '❌ Error: Only Home Assistant administrators can reset the master PIN.',
    'pin_reset_confirm': 'Are you sure you want to reset the master PIN? The current PIN will be removed and deactivated.',
    'pin_updated': '✓ PIN Updated',
    'profile_is_yours': 'This is your profile',
    'profile_needs_pin': 'Another person’s profile — enter the access PIN',
    'profile_no_pin_access': 'This profile has no access PIN. You cannot open it.',
    'remove_btn': 'Quitar',
    'reset_btn': '⚠️ Factory Reset',
    'reset_confirm': 'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.',
    'reset_dashboard': 'Скинути макет',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_success': 'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.',
    'retry_action': 'Повторить',
    'role_argus_admin': 'Адміністратор Argus',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': 'Звичайний користувач',
    'role_argus_user': 'Standard User',
    'role_argus_user_short': 'Std',
    'rules_tip': '',
    'save_btn': 'Save',
    'save_config': 'ЗБЕРЕГТИ КОНФІГУРАЦІЮ',
    'save_mode': '💾 Зберегти режим',
    'save_notif': 'Зберегти',
    'save_user': 'Зберегти',
    'search_placeholder': 'Шукати за назвою, областю або entity_id',
    'search_select': 'Search & select',
    'searching_auto': '↻ Searching automations...',
    'select_all': '☑ All',
    'select_btn': '+ Вибрати',
    'select_profile_subtitle': 'Access your security panels and Argus instances.',
    'select_profile_title': 'Select Your Profile',
    'selected_lbl': 'Вибрано',
    'selector_panic': '🚨 Действия SOS',
    'sensor_section': 'Датчики проникнення',
    'sensors_to_bypass': 'Sensors to Bypass',
    'settings': '⚙️ Налаштування',
    'setup_access_pin': 'PIN доступа к панели Argus (Необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Мастер-PIN для постановки/снятия с охраны (Необязательно)',
    'setup_required_action': 'Настроить Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': 'Сирени',
    'sos_actions': 'Acciones Automáticas de SOS',
    'sos_activated': 'SOS активирован',
    'sos_call': '📞 Call Emergency Services',
    'sos_call_confirm': 'Позвонить в экстренную службу ({number})?',
    'sos_call_help': 'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.',
    'sos_confirm_text': 'Slide to trigger the alarm immediately.',
    'sos_confirm_title': 'Confirm panic',
    'sos_error': 'Не удалось активировать SOS: {error}',
    'sos_no_outputs': 'Устройства не выбраны',
    'sos_outputs_help': 'Dispositivos activados al disparar el SOS.',
    'sos_select_outputs': 'Seleccionar salidas de pánico',
    'sos_slide': 'Проведіть для активації SOS',
    'sos_stop': 'DETENER SOS',
    'status_away': 'FUERA',
    'status_closed': 'ЗАКРИТО',
    'status_home': 'EN CASA',
    'status_idle': 'INACTIVO',
    'status_open': 'ВІДКРИТО',
    'status_recording': 'GRABANDO',
    'switch_profile_btn': '👤 Змінити профіль',
    'sync_panel_help': 'Paneles de alarma que seguirán el mismo estado de Argus',
    'sync_panel_section': 'Paneles Sincronizados',
    'system_armed': 'СИСТЕМА НА ОХОРОНІ',
    'system_disarmed': 'СИСТЕМА ЗНЯТА З ОХОРОНИ',
    'system_triggered': '¡ALARMA DISPARADA!',
    'temp_auto': 'Automatic (local sensor / thermostat / climate)',
    'temp_notification_title': 'Argus — Температурное предупреждение',
    'temp_thermostat': '(thermostat)',
    'thermostat_alert_notif': '🌡️ Temperature alert',
    'times_section': '⏱️ Таймери',
    'triggered': 'ТРИВОГА!',
    'unavailable': 'Unavailable',
    'undo_error': 'Не удалось отменить сброс: {error}',
    'undo_reset_btn': '↩️ Undo Reset',
    'undo_success': 'Сброс отменён.',
    'unlinked_ha_accounts_title': 'Home Assistant accounts without Argus profile',
    'unlock_kiosk': 'Unlock kiosk',
    'update_pin': 'Оновити PIN',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'URL фона…',
    'use_for_hub': 'Argus',
    'use_for_panel': 'Panel',
    'use_ha_language': 'Використовувати мову Home Assistant',
    'user_default': 'Пользователь',
    'user_exp_date': 'Expiration Date/Time',
    'user_exp_type': 'Expiration',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': 'PIN користувача',
    'user_pin_action': 'PIN',
    'user_required': 'Требуются имя и PIN',
    'user_role_action': 'Роль',
    'user_role_label': 'Argus Role',
    'username': 'Ім\'я користувача',
    'users_title': '👥 Користувачі та контроль доступу',
    'wait_if_open': 'Очікувати закриття датчиків',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'welcome_greeting': 'Welcome,',
    'welcome_profile': 'Добро пожаловать, {name}',
  },
};
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
    if (!raw) {
      try { raw = localStorage.getItem('argus_lang'); } catch(e) {}
    }
    if (!raw || raw === 'auto') {
      raw = this._ui?.manual_lang || this._ui?.language || this._hass?.language || 'en';
    }
    raw = String(raw || 'en').trim();
    if (TEXTS[raw]) return raw;
    if (/^zh-(hant|tw|hk)/i.test(raw)) return 'zh-Hant';
    if (/^zh/i.test(raw)) return 'zh';
    const short = raw.split(/[-_]/)[0].toLowerCase();
    if (TEXTS[short]) return short;
    return 'en';
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
      this._send('argus/save_ui', { language: 'auto', manual_lang: 'auto', ...(entry_id ? { entry_id } : {}) }).catch(console.error);
    } else {
      if (!TEXTS[code]) return;
      this._manualLang = code;
      try { localStorage.setItem('argus_lang', code); } catch(e) {}
      this._send('argus/save_ui', { language: code, manual_lang: code, ...(entry_id ? { entry_id } : {}) }).catch(console.error);
    }
    if (this._instanceSignatures) this._instanceSignatures.clear();
    this._refreshLocalizedUi();
  }

  _refreshLocalizedUi() {
    (window as any)._argusDashboardReadyBtn = this._t('edit_dashboard_done') || '✓ Listo';
    (window as any)._argusDashboardEditBtn = '✥ ' + (this._t('edit_dashboard') || 'Editar tablero');
    (window as any)._argusDashboardResetBtn = this._t('reset_dashboard') || 'Restablecer diseño';
    this._applyTranslations();
    this._updateHeroProfileDisplay();
    this._updateHeroClock();
    if (this._instanceSignatures) this._instanceSignatures.clear();
    this._renderEntries(true);
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
    const cur = this._manualLang || 'auto';
    const sel = this.shadowRoot.getElementById('dropdown-lang-select') as HTMLSelectElement | null;
    if (sel && sel.value !== cur) sel.value = cur;
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
        const vacationSpan = entry.querySelector('.btn-vacation span');
        if (vacationSpan) vacationSpan.textContent = modeLabel('btn_vacation');
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
    // Toggle header logic moved to _localize to prevent duplicate bindings
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
      } else if (bootstrap.language) {
        this._manualLang = bootstrap.language;
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
    this._renderEntries();
    this._renderModeTabs();
    this._renderModeView();
    this._renderAutomations();
    this._renderNotifications();
    this._updateHeroProfileDisplay();
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

    const domain = sensorId ? sensorId.split('.')[0] : '';
    if (['switch', 'light', 'fan', 'script', 'input_boolean', 'siren'].includes(domain) && battery === null) {
      return { battery: null, mains: true };
    }

    if (battery === null && this._hass?.states) {
      if (!this._powerCache) this._powerCache = new Map();
      if (this._powerCache.has(sensorId)) return this._powerCache.get(sensorId);

      let companionState = null;
      const objectId = sensorId.split('.').slice(1).join('.').toLowerCase();
      const base = objectId.replace(/_(contact|door|window|motion|occupancy|opening|sensor)$/i, '');

      const directCandidate = this._hass.states[`sensor.${objectId}_battery`]
        || this._hass.states[`sensor.${base}_battery`]
        || this._hass.states[`sensor.${objectId}_battery_level`]
        || this._hass.states[`sensor.${base}_battery_level`];

      if (directCandidate) {
        companionState = directCandidate.state;
      } else {
        const avEntity = (this._available || []).find(e => e.entity_id === sensorId);
        if (avEntity && avEntity.device_id) {
           const companion = (this._available || []).find(e => 
             e.device_id === avEntity.device_id &&
             (this._hass?.states?.[e.entity_id]?.attributes?.device_class === 'battery' || /_battery(?:_level|_percent(?:age)?)?$/i.test(e.entity_id))
           );
           if (companion) companionState = this._hass?.states?.[companion.entity_id]?.state;
        }
      }

      const level = Number(companionState);
      if (Number.isFinite(level)) battery = Math.max(0, Math.min(100, Math.round(level)));
      const res = { battery, mains };
      this._powerCache.set(sensorId, res);
      return res;
    }
    return { battery, mains };
  }

  _deviceFacts(entityId, stateObj, includeStatus = true) {
    const raw = stateObj?.state || 'unknown';
    const isOpen = ['on', 'unlocked', 'open', 'recording', 'active', 'motion'].includes(raw);
    const labels = { on:this._t('status_open'), off:this._t('status_closed'), locked:this._t('status_closed'), unlocked:this._t('status_open'), idle:this._t('status_idle'), recording:this._t('status_recording'), home:this._t('status_home'), not_home:this._t('status_away') };
    const domain = entityId.split('.')[0];
    const isActuator = ['siren', 'switch', 'light', 'fan', 'input_boolean', 'script', 'alarm_control_panel'].includes(domain);
    const power = this._getDevicePower(entityId, stateObj);
    const facts = [];
    if (includeStatus) facts.push({ text: isActuator ? raw.toUpperCase() : (labels[raw] || raw), className: isActuator ? '' : (isOpen ? 'status-open' : 'status-closed') });
    if (power.mains) facts.push({ text: '🔌 AC', className: 'power-mains' });
    if (power.battery !== null) {
      const isDead = power.battery === 0;
      const isLow = power.battery <= 10 && !isDead;
      const batText = isDead ? '🔋 ❌' : `🔋 ${power.battery}%`;
      const cls = isDead ? 'dead' : (isLow ? 'low' : '');
      facts.push({ text: batText, className: `pill-power ${cls}` });
    }
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

  _renderPremiumStatusIcon(state, triggered, uid = '0') {
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
    return `<svg viewBox="0 0 200 200" width="100%" height="100%" style="filter:drop-shadow(0 18px 28px rgba(0,0,0,.34));max-width:180px;margin:auto;display:block;overflow:visible" aria-label="${this._escapeHtml(mode)}"><defs><linearGradient id="premium-${mode}-${uid}" x1="20%" y1="10%" x2="85%" y2="100%"><stop stop-color="#fff" stop-opacity=".38"/><stop offset=".25" stop-color="${accent}" stop-opacity=".78"/><stop offset="1" stop-color="${accent}" stop-opacity=".18"/></linearGradient><filter id="premium-glow-${mode}-${uid}" filterUnits="userSpaceOnUse" x="-80" y="-80" width="360" height="360" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z" fill="url(#premium-${mode}-${uid})" stroke="${accent}" stroke-width="3" filter="url(#premium-glow-${mode}-${uid})"/><path d="M100 31 148 51" stroke="#fff" stroke-opacity=".45" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="105" r="43" fill="rgba(5,12,23,.3)" stroke="rgba(255,255,255,.22)" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" filter="url(#premium-glow-${mode}-${uid})">${symbol}</g><circle cx="100" cy="105" r="55" fill="none" stroke="${accent}" stroke-opacity=".42" stroke-width="2"><animate attributeName="r" values="51;60;51" dur="3.5s" repeatCount="indefinite"/><animate attributeName="opacity" values=".6;.08;.6" dur="3.5s" repeatCount="indefinite"/></circle></svg>`;
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
          <div style="position:absolute;top:12px;left:50%;transform:translateX(-50%);z-index:100;padding:5px 12px;background:rgba(36,188,129,.2);border:1px solid rgba(36,188,129,.4);border-radius:20px;color:#75f4b0;font-size:11px;font-weight:700;backdrop-filter:blur(10px);box-shadow:0 4px 12px rgba(0,0,0,0.2);display:flex;align-items:center;gap:6px;white-space:nowrap;"><div style="width:7px;height:7px;border-radius:50%;background:#75f4b0;box-shadow:0 0 8px #75f4b0;"></div>${this._escapeHtml(t('connected') || 'CONECTADO')}</div>
          ${isFS ? `<button class="ghost entry-exit-fs" data-exit-fullscreen title="${this._escapeHtml(t('fullscreen_title'))}" aria-label="${this._escapeHtml(t('fullscreen_title'))}" style="position:absolute;top:16px;left:16px;z-index:100;padding:9px 13px;font-size:18px;background:rgba(0,0,0,.55);backdrop-filter:blur(12px);border-radius:14px;color:white;border:1px solid rgba(255,255,255,.25);box-shadow:0 8px 20px rgba(0,0,0,.3)">×</button>` : ''}
          ${!isFS ? `<button class="ghost fs-btn entry-fs" data-fullscreen="${idx}" title="${this._escapeHtml(t('fullscreen_title'))}" style="position:absolute;bottom:24px;right:24px;z-index:10;padding:10px 15px;font-size:18px;background:rgba(0,0,0,0.4);backdrop-filter:blur(12px);border-radius:14px;opacity:0.8;color:white;border:1px solid rgba(255,255,255,0.2);box-shadow:0 8px 20px rgba(0,0,0,0.3)">⛶</button>` : ''}
          ${this._renderBatteryAlerts()}
          <div class="hud">
            <div class="hud-loc">${this._escapeHtml(fullHudLoc)}</div>
            <div class="hud-data"></div>
          </div>
          <div class="entry-content security-console">
            <!-- Compact HUD bar at top of console — replaces overlapping absolute hud -->
            <div class="console-hud">
              <span class="console-hud-loc">🏡 ${this._escapeHtml(fullHudLoc)}</span>
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
              <button class="liquid-btn btn-vacation ${state==='armed_vacation'?'active':''} ${sensorAlert && state==='armed_vacation'?'buzz-orange':''}" data-idx="${idx}" data-action="vacation">${this._modeButtonIcon('vacation')}<span>${this._escapeHtml(modeLabel('btn_vacation'))}</span></button>
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
    
    const applyIosFullscreen = () => {
      if (target) {
        target.classList.add('ios-fullscreen');
      }
      document.body.style.overflow = 'hidden';
      this._renderEntries();
    };

    if (requestFS) {
      requestFS.call(target).then(() => {
        document.body.style.overflow = 'hidden';
        this._renderEntries();
      }).catch(applyIosFullscreen);
    } else {
      applyIosFullscreen();
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
      es:{title:'Centro de salud',healthy:'Sistema saludable',warning:'Requiere atención',critical:'Dispositivos sin conexión',devices:'dispositivos configurados',offline:'sin conexión',low:'baterías bajas',battery:'Batería',none:'No hay dispositivos seleccionados en los modos.',local:'Local-first activo',confirm:'Confirmación inteligente',help:'Requiere señales independientes dentro de una ventana. Humo, gas, CO y seguridad siempre disparan de inmediato.',save:'Guardar',saved:'Guardado'},
      en:{title:'Health center',healthy:'System healthy',warning:'Attention required',critical:'Devices offline',devices:'configured devices',offline:'offline',low:'low batteries',battery:'Battery',none:'No devices are selected in the modes.',local:'Local-first active',confirm:'Intelligent confirmation',help:'Requires independent signals within a window. Smoke, gas, CO and safety always trigger immediately.',save:'Save',saved:'Saved'},
      fr:{title:'Centre de santé',healthy:'Système sain',warning:'Attention requise',critical:'Appareils hors ligne',devices:'appareils configurés',offline:'hors ligne',low:'batteries faibles',battery:'Batterie',none:'Aucun appareil n\u2019est sélectionné dans les modes.',local:'Local-first actif',confirm:'Confirmation intelligente',help:'Exige des signaux indépendants. Fumée, gaz, CO et sécurité déclenchent toujours immédiatement.',save:'Enregistrer',saved:'Enregistré'},
      pt:{title:'Centro de saúde',healthy:'Sistema saudável',warning:'Requer atenção',critical:'Dispositivos offline',devices:'dispositivos configurados',offline:'offline',low:'baterias fracas',battery:'Bateria',none:'Nenhum dispositivo foi selecionado nos modos.',local:'Local-first ativo',confirm:'Confirmação inteligente',help:'Exige sinais independentes. Fumaça, gás, CO e segurança sempre disparam imediatamente.',save:'Salvar',saved:'Salvo'},
      it:{title:'Centro salute',healthy:'Sistema integro',warning:'Richiede attenzione',critical:'Dispositivi offline',devices:'dispositivi configurati',offline:'offline',low:'batterie scariche',batteria:'Batteria',none:'Nessun dispositivo è selezionato nelle modalità.',local:'Local-first attivo',confirm:'Conferma intelligente',help:'Richiede segnali indipendenti. Fumo, gas, CO e sicurezza scattano sempre subito.',save:'Salva',saved:'Salvato'},
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
    if (action === 'audit_log_cleared') return this._t('history_refresh');
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
    const cfg = this._currentModeConfig();
    const sensors = cfg.sensors || [];
    const bypass  = cfg.bypassed_sensors || [];
    const sirens  = cfg.sirens  || [];
    const externalPanels = cfg.external_panels || [];
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
      <span class="notif-chip">🔔 ${this._escapeHtml(t.replace(/^entity:notify\./, '').replace(/_/g,' '))}
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
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="Ver Panel">👁️ ${u.permissions.view_status ? 'Panel' : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="Armar Sistema">🛡️ ${u.permissions.arm ? 'Armar' : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="Desarmar Sistema">🔓 ${u.permissions.disarm ? 'Desarmar' : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="Ver Historial">📜 ${u.permissions.view_history ? 'Historial' : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(52,199,89,0.12);color:#34c759" title="Cambiar PIN Acceso">🔑 ${u.permissions.change_pin ? 'PIN Acceso' : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(255,179,0,0.12);color:#ffb300" title="Cambiar PIN Maestro">🔑 ${u.permissions.change_master_pin ? 'PIN Maestro' : '---'}</span>
                </div>
                ` : ''}
              </div>
              <div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap;justify-content:flex-end">
                ${this._isAdmin ? `
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-edit="${i}" title="${this._escapeHtml(this._t('modal_edit_name'))}">✏️</button>
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-pin="${i}" title="${this._escapeHtml(this._t('modal_pin_title'))}">🔑</button>
                  ${u.role !== 'admin' ? `<button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-perms="${i}" title="Permisos">🛡️</button>` : ''}
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
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">🛡️ Permisos de ${this._escapeHtml(targetUser.name)}</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.65);margin-top:-6px">Selecciona las acciones permitidas para este perfil estándar:</div>
          
          <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px;max-height:280px;overflow-y:auto;padding-right:4px;">
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-status" ${perms.view_status ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>Ver Estado de Sensores / Panel</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-arm" ${perms.arm ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>Armar Alarma</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-disarm" ${perms.disarm ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>Desarmar Alarma</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-history" ${perms.view_history ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>Ver Historial de Actividad</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-pin" ${perms.change_pin ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#34c759;font-weight:700;">Permitir Cambiar su PIN de Acceso</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-master-pin" ${perms.change_master_pin ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#ffb300;font-weight:700;">Permitir Cambiar el PIN Maestro</span>
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
      ? [...(this._panicOutputs || [])]
      : (Array.isArray(cfg?.[_srcKey]) ? [...cfg[_srcKey]] : []);
    const title = this.shadowRoot.getElementById('selector-title');
    if (type === 'sensor') title.textContent = this._t('sensor_section');
    else if (type === 'bypass') title.textContent = this._t('sensors_to_bypass');
    else if (type === 'entry') title.textContent = this._t('entry_sensors');
    else if (type === 'panic') title.textContent = this._t('selector_panic');
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
      this._savePersonalization();
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
        <h3 style="margin:0 0 4px; font-size:1.05rem; font-weight:800;">📸 Cambiar imagen de perfil</h3>
        <p style="margin:0 0 16px; font-size:0.78rem; color:rgba(255,255,255,0.5);">Elige una foto de tus personas de HA o dirígete al perfil de HA para subir una nueva.</p>

        ${haPictures.length ? `
          <div style="font-size:11px; font-weight:700; opacity:0.6; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:10px;">Personas de Home Assistant</div>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
            ${picOptions}
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
