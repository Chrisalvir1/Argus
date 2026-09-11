//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), l = [
	{
		code: "auto",
		flag: "🏠",
		label: "Home Assistant"
	},
	{
		code: "es",
		flag: "🇪🇸",
		label: "Español"
	},
	{
		code: "en",
		flag: "🇬🇧",
		label: "English"
	}
], u = {
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
		contrast_selector_lbl: "👁️ Aspecto y Contraste",
		contrast_standard: "✨ Estándar (Liquid Glass)",
		contrast_high: "🖤 Alto Contraste (OLED / Oscuro)",
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
		bg_sound_opt: "Sonido de fondo",
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
		clear_log_btn: "🗑️ Limpiar",
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
		export_action: "Exportar",
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
		github_action: "Dar Estrella",
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
		tap_disarm: "Desarmar",
		tap_sos: "Activar SOS",
		tap_sos_stop: "Detener SOS",
		gesture_selector_lbl: "🕹️ Modo de Control (Accesibilidad)",
		gesture_slide: "↔️ Deslizador Táctil (Antitoques)",
		gesture_touch: "👆 Botón Accesible (Toque Simple)",
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
		waiting_sensors: "Esperando sensores",
		waiting_sensors_count: "Esperando {count} sensor(es)",
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
		contrast_selector_lbl: "👁️ Appearance & Contrast",
		contrast_standard: "✨ Standard (Liquid Glass)",
		contrast_high: "🖤 High Contrast (OLED / Dark)",
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
		bg_sound_opt: "Background Sound",
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
		clear_log_btn: "🗑️ Clear",
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
		export_action: "Export",
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
		github_action: "Star",
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
		tap_disarm: "Disarm",
		tap_sos: "Trigger SOS",
		tap_sos_stop: "Stop SOS",
		gesture_selector_lbl: "🕹️ Interaction Mode (Accessibility)",
		gesture_slide: "↔️ Swipe Slider (Anti-touch)",
		gesture_touch: "👆 Accessible Tap Button (WCAG)",
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
		waiting_sensors: "Waiting for sensors",
		waiting_sensors_count: "Waiting for {count} sensor(s)",
		welcome_greeting: "Welcome back!",
		welcome_profile: "Welcome, {name}",
		wrong_pin: "Wrong PIN"
	}
}, d = document.createElement("template");
d.innerHTML = "\n<style>\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');\n\n#widget-grid.hide-legacy > section.panel:not(#w-instances) { display: none !important; }\n\n@keyframes heroSpringSlideIn {\n  0% { transform: translateX(-50px); opacity: 0; }\n  100% { transform: translateX(0); opacity: 1; }\n}\n\n  /* Modern Premium Liquid Glass & iOS Wobble Styles */\n  :host {\n    font-family: 'Inter', sans-serif !important;\n    --glass-bg: var(--argus-glass-bg, rgba(255, 255, 255, 0.07));\n    --glass-border: var(--argus-glass-border, rgba(255, 255, 255, 0.09));\n    --glass-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.35),\n                    0 15px 30px -10px rgba(0, 122, 255, 0.12),\n                    inset 0 1px 0 rgba(255, 255, 255, 0.15);\n    --sos-red: linear-gradient(135deg, #ff3b30, #ff2d55);\n    --ios-track: rgba(0, 0, 0, 0.25);\n    --ios-thumb: linear-gradient(180deg, #ffffff, #f4f4f7);\n    --primary-color: #38bdf8;\n    --personalize-border: rgba(255, 255, 255, 0.06);\n    --personalize-divider: rgba(255, 255, 255, 0.08);\n    --bg-inputs-bg: rgba(0, 0, 0, 0.15);\n    --bg-inputs-border: rgba(255, 255, 255, 0.05);\n    --input-bg-darker: rgba(0, 0, 0, 0.25);\n    --input-border-darker: rgba(255, 255, 255, 0.12);\n    --hero-bg: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));\n    --log-item-bg: rgba(255, 255, 255, 0.02);\n    --log-item-border: rgba(255, 255, 255, 0.05);\n    --user-card-bg: rgba(255, 255, 255, 0.02);\n    --user-card-border: rgba(255, 255, 255, 0.06);\n    --primary-text-color: #fff !important;\n    --secondary-text-color: rgba(255, 255, 255, 0.7);\n    --input-bg: rgba(255, 255, 255, 0.04);\n    --input-border: rgba(255, 255, 255, 0.12);\n  }\n\n  /* High Contrast / OLED Dark Mode Accessibility */\n  :host([argus-contrast=\"high\"]),\n  :host(.argus-contrast-high) {\n    --glass-bg: rgba(11, 16, 26, 0.95);\n    --glass-border: rgba(255, 255, 255, 0.22);\n    --v2066-glass: rgba(11, 16, 26, 0.95);\n    --v2066-border: rgba(255, 255, 255, 0.22);\n    --v2066-text: #ffffff;\n    --v2066-muted: #cbd5e1;\n    --primary-text-color: #ffffff !important;\n    --secondary-text-color: #cbd5e1 !important;\n    --hud-bg: rgba(11, 16, 26, 0.98);\n    --hero-bg: linear-gradient(135deg, rgba(16, 24, 39, 0.96), rgba(8, 12, 20, 0.98));\n    --personalize-bg: rgba(11, 16, 26, 0.92);\n    --personalize-border: rgba(255, 255, 255, 0.2);\n    --user-card-bg: rgba(14, 20, 33, 0.95);\n    --user-card-border: rgba(255, 255, 255, 0.2);\n  }\n  :host([argus-contrast=\"high\"]) #profile-dropdown,\n  :host(.argus-contrast-high) #profile-dropdown {\n    background: rgba(10, 14, 23, 0.98) !important;\n    border: 1px solid rgba(255, 255, 255, 0.25) !important;\n    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.7) !important;\n  }\n  :host([argus-contrast=\"high\"]) .liquid-glass,\n  :host(.argus-contrast-high) .liquid-glass {\n    background: rgba(11, 16, 26, 0.95) !important;\n    border-color: rgba(255, 255, 255, 0.22) !important;\n  }\n\n  :host {\n    --hud-text-color: #fff;\n    --hud-bg: rgba(255,255,255,0.06);\n  }\n\n  /* Garantiza legibilidad sobre cualquier fondo */\n  :host([data-bg-mode=\"default\"]) .hero-top-bar,\n  :host([data-bg-mode=\"default\"]) .entry-hud,\n  :host([data-bg-mode=\"default\"]) .mode-btn,\n  :host([data-bg-mode=\"default\"]) .sensor-pill {\n    text-shadow: 0 1px 4px rgba(0,0,0,0.7);\n  }\n\n  :host([data-bg-mode=\"default\"]) .mode-btn {\n    background: rgba(255,255,255,0.10) !important;\n    border: 1px solid rgba(255,255,255,0.18) !important;\n    color: rgba(255,255,255,0.95) !important;\n    backdrop-filter: blur(12px);\n  }\n\n  :host([data-bg-mode=\"default\"]) .subsection-title,\n  :host([data-bg-mode=\"default\"]) .user-role-label {\n    color: rgba(255,255,255,0.60) !important;\n  }\n\n  /* Fullscreen Active / Virtual Fullscreen CSS Overrides */\n  :host(.fullscreen-active) {\n    position: fixed !important;\n    inset: 0 !important;\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    width: 100vw !important;\n    width: 100dvw !important;\n    height: 100vh !important;\n    height: 100dvh !important;\n    z-index: 99999999 !important;\n    background: radial-gradient(ellipse at 50% 50%, #162438 0%, #08101a 60%, #010408 100%) !important;\n    overflow-y: auto !important;\n    overflow-x: hidden !important;\n    -webkit-overflow-scrolling: touch !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  :host(.fullscreen-active) .hero,\n  :host(.fullscreen-active) #argus-react-dashboard-root,\n  :host(.fullscreen-active) .argus-dashboard,\n  :host(.fullscreen-active) .panel-head,\n  :host(.fullscreen-active) section:not(#w-instances),\n  :host(.fullscreen-active) .argus-widget:not(#w-instances),\n  :host(.fullscreen-active) .personalize-section {\n    display: none !important;\n  }\n  :host(.fullscreen-active) .wrap,\n  :host(.fullscreen-active) .grid,\n  :host(.fullscreen-active) #widget-grid,\n  :host(.fullscreen-active) #w-instances,\n  :host(.fullscreen-active) #entries,\n  :host(.fullscreen-active) #entries > div {\n    display: flex !important;\n    flex-direction: column !important;\n    position: static !important;\n    width: 100% !important;\n    width: 100vw !important;\n    width: 100dvw !important;\n    max-width: none !important;\n    min-height: 100% !important;\n    min-height: 100vh !important;\n    min-height: 100dvh !important;\n    height: 100% !important;\n    max-height: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    border: none !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: transparent !important;\n    backdrop-filter: none !important;\n    -webkit-backdrop-filter: none !important;\n    transform: none !important;\n    filter: none !important;\n    overflow: visible !important;\n  }\n\n\n\n  .liquid-glass {\n    background: linear-gradient(135deg,color-mix(in srgb,rgba(255,255,255,0.18) 80%,transparent),rgba(255,255,255,0.04));\n    backdrop-filter: blur(28px) saturate(180%) brightness(1.08);\n    -webkit-backdrop-filter: blur(28px) saturate(180%) brightness(1.08);\n    border: 1px solid rgba(255,255,255,0.22);\n    box-shadow: 0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.25);\n    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;\n  }\n  .wrap {\n    display: none !important;\n    position: relative;\n    z-index: 1;\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n    max-width: 1400px;\n    margin: 0 auto;\n    padding: 24px;\n    gap: 24px;\n    transition: opacity 0.35s ease, filter 0.35s ease;\n  }\n  .wrap.wrap-ready {\n    display: grid !important;\n    opacity: 1 !important;\n    visibility: visible !important;\n    pointer-events: auto !important;\n  }\n  .wrap.wrap-blurred { filter: blur(15px); opacity: 0.45; visibility: visible; pointer-events: none; }\n  @keyframes dialElasticIn {\n    0% { transform: scale(0.8) translateY(20px); opacity: 0; }\n    60% { transform: scale(1.04) translateY(-4px); opacity: 0.9; }\n    85% { transform: scale(0.98) translateY(1px); opacity: 0.98; }\n    100% { transform: scale(1) translateY(0); opacity: 1; }\n  }\n  .dial-elastic { animation: dialElasticIn 0.5s cubic-bezier(0.25, 1.25, 0.5, 1) forwards; }\n\n  .collapsible {\n    transition: max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease, margin 0.4s ease, padding 0.4s ease;\n    overflow: hidden;\n    max-height: 600px;\n    opacity: 1;\n  }\n  .collapsible.collapsed {\n    max-height: 0 !important;\n    opacity: 0 !important;\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n    border: none !important;\n    pointer-events: none;\n  }\n\n  /* Scrollbar aesthetics */\n  ::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n  }\n  ::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: rgba(255, 255, 255, 0.12);\n    border-radius: 999px;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(255, 255, 255, 0.25);\n  }\n  .x-never-match ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.08);\n  }\n  .x-never-match ::-webkit-scrollbar-thumb:hover {\n    background: rgba(0, 0, 0, 0.18);\n  }\n\n  .battery-alert { margin: 0 0 16px 0; padding: 14px 18px; border-radius: 20px; background: rgba(255, 149, 0, 0.12); border: 1px solid rgba(255, 149, 0, 0.22); color: #ffe3b3; font-weight: 700; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); text-align: left; box-shadow: 0 4px 15px rgba(255,149,0,0.1); }\n\n  /* SOS Slider redesign */\n  .btn-sos { width: 100%; min-height: 56px; border: 0; border-radius: 20px; background: var(--sos-red); color: white; font-size: 1.05rem; font-weight: 800; letter-spacing: 0.02em; cursor: pointer; box-shadow: 0 10px 25px rgba(255, 59, 48, 0.35); transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease, opacity 0.2s; margin-top: 8px; display:flex;align-items:center;justify-content:center;gap:10px; }\n  .btn-sos:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(255, 59, 48, 0.45); }\n  .btn-sos:active { transform: scale(0.95); opacity: 0.92; }\n  .ios-confirm-backdrop { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.55); display: none; align-items: center; justify-content: center; padding: 18px; z-index: 999999; backdrop-filter: blur(12px); }\n  .ios-confirm-backdrop.open { display: flex; pointer-events: auto !important; }\n  .ios-confirm-backdrop.open * { pointer-events: auto; }\n  .ios-confirm-backdrop.open .ios-slider-label { pointer-events: none !important; }\n  .ios-confirm-card { width: min(100%, 420px); border-radius: 32px; padding: 24px; color: white; background: rgba(20,22,35,0.85); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 32px 80px rgba(0,0,0,0.6); }\n  .ios-confirm-title { font-size: 1.25rem; font-weight: 800; margin-bottom: 8px; text-align: center; }\n  .ios-confirm-text { font-size: 0.98rem; opacity: 0.85; line-height: 1.45; text-align: center; margin-bottom: 20px; }\n  .ios-slider-shell { padding: 4px 0 16px; }\n  .ios-slider-track { position: relative; height: 66px; border-radius: 999px; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); overflow: hidden; }\n  .ios-slider-label { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: 0 82px; font-size: 0.95rem; font-weight: 700; color: rgba(255, 255, 255, 0.85); pointer-events: none; text-align: center; }\n  .ios-slider-thumb { position: absolute; top: 6px; left: 6px; width: 52px; height: 52px; border-radius: 50%; background: var(--ios-thumb); color: #ff3b30; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 900; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25); touch-action: none; user-select: none; cursor: grab; transition: transform 0.1s ease-out; }\n  .ios-confirm-cancel { width: 100%; min-height: 50px; border: 0; border-radius: 18px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.05); color: white; font-weight: 700; cursor: pointer; transition: background 0.2s, transform 0.15s; }\n  .ios-confirm-cancel:hover { background: rgba(255,255,255,0.14); }\n  .ios-confirm-cancel:active { transform: scale(0.96); }\n\n  :host{display:block;min-height:100vh;box-sizing:border-box;--primary-text-color:#ffffff!important;--secondary-text-color:rgba(255,255,255,0.7)!important;color:#ffffff!important;background:var(--lovelace-background,var(--primary-background-color));font-family:'Outfit',Inter,system-ui,sans-serif}\n  :host([compact]), :host(.argus-compact) {\n    min-height: auto !important;\n    background: transparent !important;\n  }\n  :host([compact]) .wrap, :host(.argus-compact) .wrap {\n    padding: 0 !important;\n    margin: 0 !important;\n    max-width: 100% !important;\n    width: 100% !important;\n    height: auto !important;\n    min-height: fit-content !important;\n    gap: 0 !important;\n    display: flex !important;\n    flex-direction: column !important;\n    flex: 1 1 auto !important;\n    overflow: visible !important;\n    container-type: inline-size;\n    container-name: argus-compact-wrap;\n  }\n  :host([compact]) .hero, :host(.argus-compact) .hero {\n    display: none !important;\n  }\n  :host([compact]) #argus-canvas-bg, :host(.argus-compact) #argus-canvas-bg {\n    display: none !important;\n  }\n  :host([compact]) .tabs, :host(.argus-compact) .tabs {\n    display: none !important;\n  }\n  :host([compact]) .dashboard-instances .panel-head, :host(.argus-compact) .dashboard-instances .panel-head {\n    display: none !important;\n  }\n  :host([compact]) .personalize-section, :host(.argus-compact) .personalize-section {\n    display: none !important;\n  }\n  :host([compact]) .glass.panel:not(#w-instances), :host(.argus-compact) .glass.panel:not(#w-instances) {\n    display: none !important;\n  }\n  :host([compact]) .argus-widget:not(:has(#w-instances)), :host(.argus-compact) .argus-widget:not(:has(#w-instances)) {\n    display: none !important;\n  }\n  :host([compact]) .argus-dashboard__toolbar, :host(.argus-compact) .argus-dashboard__toolbar {\n    display: none !important;\n  }\n  :host([compact]) #widget-grid, :host(.argus-compact) #widget-grid {\n    padding: 0 !important;\n    margin: 0 !important;\n    display: block !important;\n    height: auto !important;\n  }\n  :host([compact]) #w-instances, :host(.argus-compact) #w-instances {\n    background: transparent !important;\n    border: none !important;\n    box-shadow: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    height: auto !important;\n    width: 100% !important;\n    min-height: fit-content !important;\n    display: flex !important;\n    flex-direction: column !important;\n    flex: 1 1 auto !important;\n    overflow: visible !important;\n    background: var(--liquid-glass-bg, linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))) !important;\n    backdrop-filter: blur(28px) saturate(150%) !important;\n    -webkit-backdrop-filter: blur(28px) saturate(150%) !important;\n  }\n  :host([compact]) .entry, :host(.argus-compact) .entry {\n    margin-bottom: 0 !important;\n    border-radius: 24px !important;\n    height: auto !important;\n    width: 100% !important;\n    min-height: fit-content !important;\n    display: flex !important;\n    flex-direction: column !important;\n    flex: 1 1 auto !important;\n    overflow: visible !important;\n    background: var(--liquid-glass-bg, linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))) !important;\n    backdrop-filter: blur(28px) saturate(150%) !important;\n    -webkit-backdrop-filter: blur(28px) saturate(150%) !important;\n  }\n  :host([compact]) #bootstrap-overlay, :host(.argus-compact) #bootstrap-overlay,\n  :host([compact]) .argus-profile-overlay, :host(.argus-compact) .argus-profile-overlay,\n  :host([compact]) .argus-welcome-screen, :host(.argus-compact) .argus-welcome-screen {\n    display: none !important;\n  }\n  :host([compact]) .argus-widget__content, :host(.argus-compact) .argus-widget__content {\n    height: auto !important;\n    width: 100% !important;\n    display: flex !important;\n    flex-direction: column !important;\n    flex: 1 1 auto !important;\n    overflow: visible !important;\n  }\n  :host([compact]) #entries, :host(.argus-compact) #entries {\n    display: flex !important;\n    flex-direction: column !important;\n    flex: 1 1 auto !important;\n    height: auto !important;\n    width: 100% !important;\n    margin: 0 !important;\n    overflow: visible !important;\n  }\n  *{box-sizing:border-box}\n  @container argus-compact-wrap (max-width: 800px) {\n    .security-console { flex-direction: column !important; padding: 20px 18px 24px !important; gap: 20px !important; align-items: center !important; justify-content: center !important; }\n    .security-console .entry-icon { order: 2 !important; flex: 0 0 auto !important; min-height: 130px !important; margin: 0 auto !important; }\n    .security-console .liquid-stack { order: 3 !important; width: 100% !important; max-width: 360px !important; }\n    .security-console .console-sensors { order: 4 !important; width: 100% !important; max-width: 360px !important; display: flex !important; flex-direction: column !important; }\n    .sensor-column { position: static !important; max-width: 100% !important; width: 100% !important; align-items: stretch !important; padding: 0 !important; gap: 10px !important; }\n    .sensor-chip { max-width: none !important; }\n    .entry-content { padding: 20px !important; display: flex !important; flex-direction: column !important; align-items: center !important;  }\n    .liquid-stack { display: flex !important; flex-direction: column !important; align-items: stretch !important; gap: 8px !important; }\n  }\n  @keyframes iosGlassIn{0%{opacity:0;transform:translateY(14px) scale(.965)}65%{opacity:1;transform:translateY(-2px) scale(1.008)}100%{transform:translateY(0) scale(1)}}\n  @keyframes iosSelectPop{0%{transform:scale(.92);opacity:.45}60%{transform:scale(1.045);opacity:1}100%{transform:scale(1)}}\n  .glass,.entry,.mode-section-card,.user-card,.file-card,.log-item{animation:iosGlassIn .5s cubic-bezier(.22,1.18,.36,1) both}\n  .pick-row:has(input:checked),.tab.active,.liquid-btn.active{animation:iosSelectPop .34s cubic-bezier(.2,1.45,.35,1);box-shadow:0 0 0 1px color-mix(in srgb,var(--primary-color,#007aff) 45%,transparent),0 12px 30px color-mix(in srgb,var(--primary-color,#007aff) 18%,transparent)}\n  .glass.liquid-glass{background:var(--liquid-glass-bg, linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)))!important;backdrop-filter:blur(28px) saturate(150%)!important;-webkit-backdrop-filter:blur(28px) saturate(150%)!important;border-color:rgba(255,255,255,0.15)!important;box-shadow:0 8px 32px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.1)!important}\n  button:focus-visible,input:focus-visible,select:focus-visible,[tabindex]:focus-visible{outline:3px solid color-mix(in srgb,var(--primary-color,#007aff) 70%,#fff);outline-offset:3px}\n  .wrap{max-width:1400px;margin:0 auto;padding:24px;gap:24px}\n  .glass{background:var(--glass-bg, rgba(255, 255, 255, 0.06));border:1px solid var(--glass-border, rgba(255, 255, 255, 0.09));border-radius:28px;box-shadow:var(--glass-shadow);backdrop-filter:blur(12px) saturate(1.2);-webkit-backdrop-filter:blur(12px) saturate(1.2)}\n  .hero{position:relative!important;z-index:9999!important;overflow:visible!important;padding:32px 36px;display:flex;align-items:center;justify-content:space-between;gap:20px;background:var(--hero-bg, linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)));margin-bottom:12px;will-change:transform,opacity;animation:heroSpringSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both}\n  .hero-left{display:flex;align-items:center;gap:22px}\n  .hero-context{position:relative!important;z-index:10000!important;overflow:visible!important;margin-left:auto;display:flex;align-items:center;gap:8px;min-width:0}\n  #hero-profile-container{position:relative!important;z-index:10001!important;overflow:visible!important}\n  .hero-profile-dropdown{position:absolute!important;top:calc(100% + 12px)!important;right:0!important;z-index:999999!important;width:min(420px, calc(100vw - 24px))!important;min-width:320px!important;max-height:calc(100vh - 100px)!important;overflow-y:auto!important;background:#0f172a!important;background-color:#0f172a!important;border:1.5px solid rgba(255,255,255,0.2)!important;box-shadow:0 24px 60px rgba(0,0,0,0.85),inset 0 1px 0 rgba(255,255,255,0.15)!important;backdrop-filter:blur(48px) saturate(200%)!important;-webkit-backdrop-filter:blur(48px) saturate(200%)!important;opacity:1!important}.hero-clock{display:flex;flex-direction:column;align-items:flex-end;padding-right:14px;border-right:1px solid rgba(255,255,255,.14);line-height:1}.hero-clock strong{font-size:1.45rem;letter-spacing:-.05em;color:#ffffff!important}.hero-clock span{font-size:11px;color:#e2e8f0!important;opacity:1!important;margin-top:5px;letter-spacing:.03em;font-weight:700}.hero-pills{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}.hero-pill{display:inline-flex;align-items:center;gap:5px;padding:7px 10px;border:1px solid rgba(255,255,255,.15);border-radius:999px;background:rgba(7,16,29,.27);box-shadow:inset 0 1px 0 rgba(255,255,255,.15);backdrop-filter:blur(14px);font-size:10px;font-weight:800;white-space:nowrap}.hero-pill .hero-live{width:7px;height:7px;border-radius:50%;background:#55df91;box-shadow:0 0 9px #55df91}\n  .hero-icon{font-size:54px;line-height:1;filter:drop-shadow(0 0 20px rgba(255,255,255,0.15))}\n  .hero h1{margin:0 0 4px;font-size:34px;font-weight:900;letter-spacing:-0.03em;background:var(--hero-gradient, linear-gradient(to right, #ffffff, #82b1ff));-webkit-background-clip:text;-webkit-text-fill-color:transparent}\n  .hero p{margin:0;font-size:16px;color:#f1f5f9!important;opacity:1!important;font-weight:600;text-shadow:0 1px 4px rgba(0,0,0,0.85)}\n  @media(max-width:700px){.wrap{padding:14px;gap:14px}.glass{border-radius:22px}.hero{padding:22px;align-items:flex-start}.hero-icon{font-size:40px}.hero h1{font-size:27px}.hero p{font-size:14px}.entry-content{grid-template-columns:96px 1fr;padding:16px 105px 16px 14px;gap:10px}.sensor-column{width:98px}.sensor-chip{max-width:94px}.entry-icon{min-height:110px}.entry-icon svg{max-width:150px}.hud{top:12px;right:12px}.hud-data{font-size:15px;padding:5px 9px}.hud-loc{font-size:10px;padding:3px 8px}}\n\n  /* Modern Mode Navigation & iOS/macOS Liquid Bubble Transition */\n  .tabs { position: relative; isolation:isolate; display: flex; min-height:72px; background: rgba(255, 255, 255, 0.03); padding: 6px; border-radius: 20px; gap: 6px; overflow: visible; scrollbar-width: none; margin-bottom: 20px; border: 1px solid rgba(255, 255, 255, 0.08); z-index: 1; box-shadow: inset 0 1px 2px rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.25); }\n  .tabs::-webkit-scrollbar { display: none; }\n  .tab { position: relative; flex: 1 1 0px; min-width: 0; min-height:60px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; border-radius: 14px; padding: 10px 4px; font-size: 11px; font-weight: 800; color: rgba(255, 255, 255, 0.6); transition: color 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.18s ease; cursor: pointer; border: none !important; outline: none; background: transparent !important; box-shadow: none !important; z-index: 2; user-select: none; -webkit-tap-highlight-color: transparent; }\n  .tab-label { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: center; }\n  .tab:hover { color: #fff; }\n  .tab:active:not(:disabled) { transform: scale(0.92); }\n  .tab.active { color: #fff !important; background: transparent !important; box-shadow: none !important; transform: none !important; }\n\n  .tab-bubble {\n    position: absolute;\n    top: 6px;\n    bottom: 6px;\n    left: 0;\n    height: calc(100% - 12px);\n    border-radius: 14px;\n    z-index: 1;\n    pointer-events: none;\n    will-change: transform, width, background, box-shadow;\n    backdrop-filter: blur(20px) saturate(180%);\n    -webkit-backdrop-filter: blur(20px) saturate(180%);\n    border: 1px solid rgba(255, 255, 255, 0.32);\n    transition:\n      transform 0.48s cubic-bezier(0.34, 1.56, 0.64, 1),\n      width 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),\n      background 0.45s cubic-bezier(0.4, 0, 0.2, 1),\n      box-shadow 0.45s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .tab-bubble.bubble-disarmed {\n    background: linear-gradient(135deg, rgba(34, 197, 94, 0.95), rgba(21, 128, 61, 0.92));\n    box-shadow: inset 0 1px 1.5px rgba(255, 255, 255, 0.55), 0 8px 24px rgba(34, 197, 94, 0.42), 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  .tab-bubble.bubble-home {\n    background: linear-gradient(135deg, rgba(245, 158, 11, 0.95), rgba(217, 119, 6, 0.92));\n    box-shadow: inset 0 1px 1.5px rgba(255, 255, 255, 0.55), 0 8px 24px rgba(245, 158, 11, 0.42), 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  .tab-bubble.bubble-away {\n    background: linear-gradient(135deg, rgba(239, 68, 68, 0.95), rgba(185, 28, 28, 0.92));\n    box-shadow: inset 0 1px 1.5px rgba(255, 255, 255, 0.55), 0 8px 24px rgba(239, 68, 68, 0.45), 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  .tab-bubble.bubble-night {\n    background: linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(29, 78, 216, 0.92));\n    box-shadow: inset 0 1px 1.5px rgba(255, 255, 255, 0.55), 0 8px 24px rgba(59, 130, 246, 0.42), 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  .tab-bubble.bubble-vacation {\n    background: linear-gradient(135deg, rgba(168, 85, 247, 0.95), rgba(126, 34, 206, 0.92));\n    box-shadow: inset 0 1px 1.5px rgba(255, 255, 255, 0.55), 0 8px 24px rgba(168, 85, 247, 0.42), 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  .tab-bubble.bubble-sos {\n    background: linear-gradient(135deg, rgba(220, 38, 38, 0.98), rgba(153, 27, 27, 0.95));\n    box-shadow: inset 0 1px 1.5px rgba(255, 255, 255, 0.55), 0 8px 26px rgba(220, 38, 38, 0.55), 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n\n\n  @keyframes bounceIn {\n    0% { transform: scale(0.96); opacity: 0; }\n    50% { transform: scale(1.01); opacity: 1; }\n    100% { transform: scale(1); opacity: 1; }\n  }\n  .bounce-in { animation: bounceIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards; }\n\n  .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;align-items:start;position:relative}\n  .panel{transition:transform .3s ease,box-shadow .3s ease,grid-column .3s ease,grid-row .3s ease;position:relative}\n  .panel[data-size=\"S\"]{grid-column:span 1;grid-row:span 1}\n  .panel[data-size=\"M\"]{grid-column:span 2;grid-row:span 1}\n  .panel[data-size=\"L\"]{grid-column:span 2;grid-row:span 2}\n  .panel[data-size=\"XL\"]{grid-column:span 4;grid-row:span 2}\n  .dashboard-instances{grid-column:1 / -1}\n  \n  /* Edit Mode Styles */\n  .grid.editing .panel{animation:jiggle .3s infinite ease-in-out;cursor:grab}\n  .grid.editing .panel:nth-child(even){animation-duration:.27s;animation-direction:reverse}\n  .grid.editing .panel:nth-child(3n){animation-duration:.32s;animation-delay:.05s}\n  .grid.editing .panel.dragging{opacity:.5;animation:none;cursor:grabbing}\n  \n  .panel-edit-overlay{position:absolute;inset:0;background:rgba(5,15,30,.82);backdrop-filter:blur(10px);border-radius:inherit;z-index:90;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;opacity:0;pointer-events:none;transition:opacity .25s ease}\n  .grid.editing .panel:not(.dashboard-instances) .panel-edit-overlay{opacity:1;pointer-events:auto}\n  \n  .widget-controls{display:flex;flex-direction:column;align-items:center;gap:10px;padding:16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:18px;backdrop-filter:blur(8px)}\n  .widget-controls-title{font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.05em;opacity:.7}\n  .widget-sizes{display:flex;gap:6px}\n  .widget-size-btn{border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.05);color:#fff;border-radius:8px;padding:6px 10px;font-size:11px;font-weight:800;cursor:pointer;transition:all .2s}\n  .widget-size-btn:hover{background:rgba(255,255,255,.15);border-color:rgba(255,255,255,.3)}\n  .widget-size-btn.active{background:#007aff;border-color:#007aff;box-shadow:0 0 10px rgba(0,122,255,.4)}\n  .widget-drag-handle{font-size:22px;color:rgba(255,255,255,.6);cursor:grab;padding:4px}\n  .widget-toggle-btn{background:rgba(220,38,38,.85);color:white;border:none;border-radius:8px;padding:6px 12px;font-size:10px;font-weight:800;cursor:pointer}\n  \n  @keyframes jiggle{\n    0%{transform:rotate(-0.5deg)}\n    50%{transform:rotate(0.5deg)}\n    100%{transform:rotate(-0.5deg)}\n  }\n  @media(max-width:900px){\n    .grid{grid-template-columns:minmax(0,1fr)}\n    .panel[data-size=\"S\"],.panel[data-size=\"M\"],.panel[data-size=\"L\"],.panel[data-size=\"XL\"]{grid-column:1 / -1;grid-row:auto}\n    .grid.editing .panel{animation:none !important}\n  }\n  \n  /* Adaptivity styles for size S widgets */\n  .panel[data-size=\"S\"] .tab-label{display:none}\n  .panel[data-size=\"S\"] .tab-icon{font-size:24px !important}\n  .panel[data-size=\"S\"] #p-backup-desc{display:none}\n  .panel[data-size=\"S\"] #github-desc{display:none}\n\n  /* Collapsible Personalization with Bounce expansion */\n  .personalize-workspace{display:grid;grid-template-rows:0fr;opacity:0;pointer-events:none;transition:grid-template-rows 0.6s cubic-bezier(0.175,0.885,0.32,1.275),opacity 0.4s ease,margin-top 0.4s ease}\n  .personalize-workspace > div { overflow:hidden; min-height:0; }\n  .personalize-workspace:not(.collapsed){grid-template-rows:1fr;opacity:1;pointer-events:auto;margin-top:16px;animation:bounceExpand 0.55s cubic-bezier(0.175,0.885,0.32,1.275) forwards}\n  @keyframes bounceExpand{\n    0%{transform:scale(0.96) translateY(-8px);opacity:0}\n    70%{transform:scale(1.01) translateY(2px);opacity:0.9}\n    100%{transform:scale(1) translateY(0);opacity:1}\n  }\n  @media(max-width:750px){.hero{flex-direction:column;text-align:center}.hero-left{flex-direction:column}}\n  @media(max-width:750px){.hero .lang-pill{align-self:center;margin-inline:auto}.hero-left{width:100%;align-items:center}}\n\n  .stack{display:grid;gap:24px}\n  .panel{padding:28px;position:relative;overflow:hidden}\n  .panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}\n  .panel h2{margin:0;font-size:14px;font-weight:900;letter-spacing:.04em;color:var(--primary-color,#38bdf8);opacity:1}\n\n  /* Access settings stay quiet until the user needs to manage them. */\n  .access-panel { padding: 22px 24px; overflow-y:auto; max-height:60vh; -webkit-overflow-scrolling:touch; }\n  .access-panel .panel-head { margin-bottom: 12px; }\n  .access-summary { font-size: 12px; opacity: .88; color: #cbd5e1; }\n  .access-actions { display:flex; gap:10px; flex-wrap:wrap; }\n  .access-actions button { flex:0 1 auto; padding:8px 12px; font-size:12px; font-weight:700; }\n  .access-actions button.active { background:var(--primary-color,#38bdf8); color:#0f172a; font-weight:800; border-color:transparent; }\n  .access-section { display:block; min-width:0; margin-bottom:24px; }\n  .access-section h3 { font-size:13px; font-weight:800; color: #f1f5f9; margin:0 0 10px; }\n  .access-panel .user-card { padding:10px 12px; border-radius:12px; }\n  .github-star-action {\n    display:inline-flex;align-items:center;justify-content:center;gap:7px;\n    min-height:42px;padding:9px 16px;border-radius:14px;text-decoration:none;\n    color:var(--primary-text-color,#fff);font-size:12px;font-weight:850;\n    background:linear-gradient(135deg,rgba(255,255,255,.14),rgba(255,255,255,.055));\n    border:1px solid rgba(255,255,255,.16);\n    box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 9px 24px rgba(0,0,0,.16);\n    backdrop-filter:blur(18px) saturate(150%);\n    -webkit-backdrop-filter:blur(18px) saturate(150%);\n    transition:transform .2s ease,background .2s ease,box-shadow .2s ease;\n  }\n  .github-star-action:hover { transform:translateY(-1px);background:rgba(255,255,255,.18);box-shadow:0 12px 28px rgba(0,0,0,.20); }\n\n  /* Profile Dropdown Buttons & Setting Tiles */\n  .profile-btn {\n    display: inline-flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 6px !important;\n    width: auto !important;\n    min-height: 34px !important;\n    padding: 6px 14px !important;\n    border-radius: 10px !important;\n    font-size: 12px !important;\n    font-weight: 750 !important;\n    cursor: pointer !important;\n    box-sizing: border-box !important;\n    white-space: nowrap !important;\n    flex-shrink: 0 !important;\n    background: rgba(255, 255, 255, 0.08) !important;\n    border: 1px solid rgba(255, 255, 255, 0.16) !important;\n    color: #ffffff !important;\n    transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease !important;\n  }\n  .profile-btn:hover {\n    background: rgba(255, 255, 255, 0.15) !important;\n    border-color: rgba(255, 255, 255, 0.28) !important;\n    transform: translateY(-1px) !important;\n  }\n  .profile-btn.primary {\n    background: rgba(52, 211, 153, 0.14) !important;\n    border-color: rgba(52, 211, 153, 0.35) !important;\n    color: #34d399 !important;\n  }\n  .profile-btn.primary:hover {\n    background: rgba(52, 211, 153, 0.24) !important;\n  }\n  .profile-btn.danger {\n    background: rgba(239, 68, 68, 0.14) !important;\n    border-color: rgba(239, 68, 68, 0.35) !important;\n    color: #f87171 !important;\n  }\n  .profile-btn.danger:hover {\n    background: rgba(239, 68, 68, 0.24) !important;\n  }\n  .profile-card-tile {\n    display: flex !important;\n    align-items: center !important;\n    justify-content: space-between !important;\n    gap: 12px !important;\n    padding: 10px 14px !important;\n    background: rgba(255, 255, 255, 0.035) !important;\n    border: 1px solid rgba(255, 255, 255, 0.08) !important;\n    border-radius: 14px !important;\n    box-sizing: border-box !important;\n    width: 100% !important;\n  }\n\n  /* Activity log responsive header */\n  .activity-panel .panel-head {\n    display: flex !important;\n    flex-wrap: wrap !important;\n    align-items: center !important;\n    justify-content: space-between !important;\n    gap: 8px 12px !important;\n    margin-bottom: 12px !important;\n    width: 100% !important;\n    box-sizing: border-box !important;\n  }\n  .activity-panel .panel-head h2 {\n    white-space: nowrap !important;\n    font-size: 15px !important;\n    font-weight: 850 !important;\n    margin: 0 !important;\n    flex: 0 1 auto !important;\n  }\n  .activity-panel .panel-actions {\n    display: inline-flex !important;\n    align-items: center !important;\n    gap: 6px !important;\n    flex-wrap: wrap !important;\n  }\n  .activity-panel .panel-actions button {\n    min-height: 32px !important;\n    padding: 5px 11px !important;\n    font-size: 11.5px !important;\n    font-weight: 750 !important;\n    border-radius: 9px !important;\n    white-space: nowrap !important;\n    display: inline-flex !important;\n    align-items: center !important;\n    gap: 4px !important;\n  }\n\n  /* Support / Community panel & buttons */\n  .github-panel {\n    display: flex !important;\n    flex-direction: column !important;\n    justify-content: center !important;\n    gap: 14px !important;\n    padding: 18px 20px !important;\n    box-sizing: border-box !important;\n  }\n  @media (min-width: 900px) {\n    .github-panel {\n      flex-direction: row !important;\n      align-items: center !important;\n      justify-content: space-between !important;\n    }\n  }\n  .support-actions-grid {\n    display: grid !important;\n    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;\n    gap: 8px !important;\n    width: 100% !important;\n    max-width: 440px !important;\n    box-sizing: border-box !important;\n  }\n  @media (max-width: 420px) {\n    .support-actions-grid {\n      grid-template-columns: 1fr !important;\n      gap: 6px !important;\n    }\n  }\n  .support-link-btn {\n    display: inline-flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 6px !important;\n    height: 38px !important;\n    min-height: 38px !important;\n    padding: 0 12px !important;\n    border-radius: 12px !important;\n    font-size: 12px !important;\n    font-weight: 800 !important;\n    text-decoration: none !important;\n    white-space: nowrap !important;\n    box-sizing: border-box !important;\n    backdrop-filter: blur(16px) !important;\n    -webkit-backdrop-filter: blur(16px) !important;\n    transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, border-color 0.18s ease !important;\n  }\n  .support-link-btn:hover {\n    transform: translateY(-1.5px) !important;\n    box-shadow: 0 8px 22px rgba(0,0,0,0.25) !important;\n  }\n  .support-link-btn.star {\n    background: linear-gradient(135deg, rgba(234, 179, 8, 0.18), rgba(234, 179, 8, 0.06)) !important;\n    border: 1px solid rgba(234, 179, 8, 0.35) !important;\n    color: #facc15 !important;\n  }\n  .support-link-btn.star:hover {\n    background: rgba(234, 179, 8, 0.28) !important;\n    border-color: rgba(234, 179, 8, 0.55) !important;\n  }\n  .support-link-btn.paypal {\n    background: linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(56, 189, 248, 0.06)) !important;\n    border: 1px solid rgba(56, 189, 248, 0.35) !important;\n    color: #38bdf8 !important;\n  }\n  .support-link-btn.paypal:hover {\n    background: rgba(56, 189, 248, 0.28) !important;\n    border-color: rgba(56, 189, 248, 0.55) !important;\n  }\n  .support-link-btn.email {\n    background: linear-gradient(135deg, rgba(167, 139, 250, 0.18), rgba(167, 139, 250, 0.06)) !important;\n    border: 1px solid rgba(167, 139, 250, 0.35) !important;\n    color: #c084fc !important;\n  }\n  .support-link-btn.email:hover {\n    background: rgba(167, 139, 250, 0.28) !important;\n    border-color: rgba(167, 139, 250, 0.55) !important;\n  }\n  @media(max-width:600px){ .access-panel{padding:20px}.access-actions{width:100%}.access-actions button{flex:1} }\n\n  /* Personalization inside instances */\n  .personalize-row { display: flex; gap: 14px; align-items: center; margin-top: 18px; padding: 16px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; flex-wrap: wrap; }\n  .personalize-row .setting-label { font-size: 12px; font-weight: 700; opacity: 0.7; margin-bottom: 4px; }\n\n  /* Mode Reorganization Styles — HORIZONTAL */\n  .mode-grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: start; }\n  @media(max-width:900px){ .mode-grid-layout { grid-template-columns: 1fr; } }\n  .mode-section-card {\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.025) 100%) !important;\n    border: 1px solid rgba(255, 255, 255, 0.16) !important;\n    border-radius: 20px !important;\n    padding: 18px !important;\n    backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;\n    -webkit-backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;\n    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.22) !important;\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;\n  }\n  .mode-section-card:hover {\n    border-color: rgba(255, 255, 255, 0.26) !important;\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.04) 100%) !important;\n    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.32) !important;\n    transform: translateY(-2px) !important;\n  }\n  .mode-section-card:hover { border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); }\n  .mode-section-title { font-size: 13px; font-weight: 800; color: var(--primary-color, #007aff); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px; }\n  .mode-sensor-grid { color: var(--primary-text-color, #fff); }\n  .mode-sensor-none { color: var(--primary-text-color, rgba(255,255,255,0.5)); opacity: 0.6; font-size: 13px; }\n  .mode-section-card span, .mode-section-card label, .mode-section-card .input-label { color: var(--primary-text-color, #fff); }\n\n  .sensor-pill { background: var(--pill-bg, rgba(255,255,255,0.06)); color: var(--pill-text, #fff); border: 1px solid var(--pill-border, rgba(255,255,255,0.1)); padding: 8px 14px; border-radius: 14px; display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; transition: all 0.2s; max-width: 100%; box-sizing: border-box; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }\n  @keyframes argus-blink-red { 0%,100%{box-shadow:0 0 0 0 rgba(255,50,50,0);background:var(--pill-bg,rgba(255,255,255,0.06))} 50%{box-shadow:0 0 0 6px rgba(255,50,50,0.25);background:rgba(255,50,50,0.15)} }\n  .sensor-pill.siren-active   { animation: argus-blink-red 1.2s ease-in-out infinite; border-color: rgba(255,82,82,0.5) !important; }\n  .sensor-pill.triggered-sensor { animation: argus-blink-red 0.9s ease-in-out infinite; border-color: rgba(255,82,82,0.6) !important; }\n  .icon-btn { background: none; border: none; padding: 4px; color: inherit; opacity: 0.6; cursor: pointer; transition: opacity 0.2s, transform 0.15s; display: flex; align-items: center; justify-content: center; border-radius: 8px; }\n  .icon-btn:active { transform: scale(0.9); }\n\n  #mode-status { opacity: 0; transition: opacity .35s; }\n  #mode-status.show { opacity: 1; }\n  #mode-status.ok  { color: #4caf50; }\n  #mode-status.err { color: #f44336; }\n\n  .icon-btn:hover { opacity: 1; background: rgba(255,255,255,0.08); }\n  .icon-btn.active { color: #fb8c00; opacity: 1; }\n\n  .input-group { display: flex; flex-direction: column; gap: 6px; }\n  .times-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;align-items:end}\n  .time-field{min-width:0;display:flex;flex-direction:column;justify-content:flex-end;height:100%}\n  .time-field .input-label{min-height:34px;display:flex;align-items:flex-end;line-height:1.2;margin-bottom:6px;padding-bottom:2px}\n  .time-field input{width:100%;height:44px!important;padding:8px 12px!important;border-radius:12px!important;box-sizing:border-box!important;margin:0!important;font-size:14px!important}\n  .entry-sensor-list{min-height:44px;margin-top:12px!important;display:flex;flex-wrap:wrap;align-items:center;border:1px solid rgba(255,255,255,.10)!important;background:rgba(255,255,255,.03)!important;border-radius:12px!important;padding:10px;gap:8px}\n  .instance-activity-strip{display:grid;grid-template-columns:auto repeat(3,minmax(0,1fr));gap:8px;align-items:center;margin:4px 0 16px;padding:10px 12px;border:1px solid rgba(255,255,255,.1);border-radius:18px;background:rgba(5,13,25,.25);backdrop-filter:blur(18px) saturate(135%);-webkit-backdrop-filter:blur(18px) saturate(135%)}.instance-activity-title{font-size:10px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;opacity:.62;padding-right:6px}.instance-activity-item{min-width:0;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.86}.instance-activity-item time{opacity:.55;margin-right:4px;font-variant-numeric:tabular-nums}\n  .mode-mqtt-row{display:flex;align-items:center;gap:10px;margin-top:12px;padding:10px 14px!important;min-height:44px;border-radius:12px!important;background:rgba(255,255,255,.03)!important;border:1px solid rgba(255,255,255,.10)!important}\n  .mode-mqtt-row input{margin:0;accent-color:var(--primary-color,#007aff)}\n  .input-label { font-size: 12px; font-weight: 700; opacity: 0.7; margin-left: 4px; }\n\n  /* Intelligent Entry Card */\n  .entry {\n    position: relative;\n    overflow: hidden;\n    border-radius: 28px !important;\n    border: 1px solid rgba(255, 255, 255, 0.18) !important;\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%) !important;\n    backdrop-filter: blur(32px) saturate(170%) brightness(1.08) !important;\n    -webkit-backdrop-filter: blur(32px) saturate(170%) brightness(1.08) !important;\n    margin-bottom: 16px;\n    min-height: 220px;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  }\n  .entry:hover{transform:translateY(-2px);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 20px 48px rgba(0,0,0,.3)}\n  .entry::after{content:'';position:absolute;inset:0;z-index:2;pointer-events:none;border-radius:inherit;background:linear-gradient(120deg,rgba(255,255,255,.14),transparent 22%,transparent 74%,rgba(255,255,255,.05));mix-blend-mode:soft-light}\n  .entry-status-ribbon{position:absolute;top:20px;left:20px;z-index:5;display:flex;align-items:center;gap:9px;max-width:calc(100% - 260px);padding:8px 12px;border:1px solid color-mix(in srgb,var(--entry-accent) 55%,rgba(255,255,255,.2));border-radius:14px;background:linear-gradient(135deg,color-mix(in srgb,var(--entry-accent) 28%,rgba(8,15,28,.76)),rgba(7,14,25,.56));box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 8px 24px color-mix(in srgb,var(--entry-accent) 22%,transparent);backdrop-filter:blur(18px) saturate(150%);-webkit-backdrop-filter:blur(18px) saturate(150%);color:#fff}\n  .entry-status-orb{width:10px;height:10px;flex:0 0 auto;border-radius:50%;background:var(--entry-accent);box-shadow:0 0 12px var(--entry-accent)}\n  .entry-status-copy{display:flex;flex-direction:column;min-width:0}.entry-status-kicker{font-size:8px;line-height:1;text-transform:uppercase;letter-spacing:.12em;opacity:.72;font-weight:800}.entry-status-name{font-size:13px;line-height:1.2;font-weight:900;letter-spacing:.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.entry-status-event{font-size:9px;line-height:1.2;opacity:.7;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:290px}\n  .entry-bg{position:absolute;inset:0;z-index:1;background-size:cover;background-position:center;transition:opacity 0.5s ease}\n  .entry-bg img{width:100%;height:100%;object-fit:cover;opacity:0.6}\n  .entry-content{position:relative;z-index:2;flex:1;padding:20px 140px 20px 20px;display:grid;grid-template-columns:140px 1fr;gap:20px;align-items:center;background:linear-gradient(90deg, rgba(0,0,0,0.2) 0%, transparent 60%)}\n  /* The live instance is the console: real controls, real sensors and one\n     clear disarm keypad. Decorative dashboard cards never sit above it. */\n  .security-console {\n    background: transparent !important;\n    border: none !important;\n    box-shadow: none !important;\n  }\n  .console-hud {\n    background: transparent !important;\n    border: none !important;\n    box-shadow: none !important;\n  }\n\n  /* ── System Status Badge ─────────────────────────────── */\n  .console-system-badge {\n    display: inline-flex;\n    align-items: center;\n    padding: 5px 14px;\n    border-radius: 999px;\n    font-size: 10.5px;\n    font-weight: 900;\n    letter-spacing: 0.8px;\n    text-transform: uppercase;\n    white-space: nowrap;\n    backdrop-filter: blur(16px) saturate(160%);\n    -webkit-backdrop-filter: blur(16px) saturate(160%);\n    border: 1.5px solid currentColor;\n    transition: all 0.35s ease;\n  }\n  .console-system-badge--disarmed {\n    color: #6ee7b7;\n    background: rgba(16,185,129,0.18);\n    border-color: rgba(16,185,129,0.60);\n    box-shadow: 0 0 16px rgba(16,185,129,0.25), inset 0 1px 0 rgba(255,255,255,0.18);\n  }\n  .console-system-badge--armed_home {\n    color: #fde68a;\n    background: rgba(251,140,0,0.20);\n    border-color: rgba(251,140,0,0.60);\n    box-shadow: 0 0 16px rgba(251,140,0,0.25), inset 0 1px 0 rgba(255,255,255,0.18);\n  }\n  .console-system-badge--armed_away {\n    color: #fca5a5;\n    background: rgba(229,57,53,0.20);\n    border-color: rgba(229,57,53,0.60);\n    box-shadow: 0 0 16px rgba(229,57,53,0.25), inset 0 1px 0 rgba(255,255,255,0.18);\n  }\n  .console-system-badge--armed_night {\n    color: #bfdbfe;\n    background: rgba(30,136,229,0.20);\n    border-color: rgba(30,136,229,0.60);\n    box-shadow: 0 0 16px rgba(30,136,229,0.25), inset 0 1px 0 rgba(255,255,255,0.18);\n  }\n  .console-system-badge--armed_vacation {\n    color: #e9d5ff;\n    background: rgba(156,39,176,0.20);\n    border-color: rgba(156,39,176,0.60);\n    box-shadow: 0 0 16px rgba(156,39,176,0.25), inset 0 1px 0 rgba(255,255,255,0.18);\n  }\n  .console-system-badge--triggered {\n    color: #fff;\n    background: rgba(239,68,68,0.35);\n    border-color: rgba(239,68,68,0.80);\n    box-shadow: 0 0 24px rgba(239,68,68,0.60), inset 0 1px 0 rgba(255,255,255,0.25);\n    animation: badgeFlash 0.8s infinite ease-in-out;\n  }\n  @keyframes badgeFlash {\n    0%,100% { opacity:1; box-shadow:0 0 24px rgba(239,68,68,.8); }\n    50%      { opacity:0.7; box-shadow:0 0 8px rgba(239,68,68,.2); }\n  }\n  /* arming state reuses armed_home styling with pulsing */\n  .console-system-badge--arming {\n    color: #fde68a;\n    background: rgba(251,140,0,0.20);\n    border-color: rgba(251,140,0,0.60);\n    animation: badgeArming 1.05s ease-in-out infinite;\n  }\n  @keyframes badgeArming {\n    0%,100% { opacity:0.65; } 50% { opacity:1; }\n  }\n  .console-hud-time{font-size:16px;font-weight:800;letter-spacing:-.02em}\n  .console-hud-temp{font-size:11px;opacity:.8;font-weight:700}\n  .console-hud-temps{display:flex;gap:6px;flex-wrap:wrap;align-items:center}\n  .console-hud-tpill{font-size:10px;font-weight:800;padding:3px 8px;border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.12)}\n  /* Hide the floating absolute HUD inside security-console to avoid overlap with sensor list */\n  .security-console .hud,.ios-fullscreen .entry-content.security-console ~ .hud,.entry-content.security-console + .hud{display:none!important}\n  /* The .hud inside the article gets hidden when the content is a security-console */\n  @media(max-width:950px){\n    .grid{grid-template-columns:1fr;grid-template-areas:\"instances\" \"activity\" \"modes\" \"access\" \"automations\" \"backup\" \"github\"}\n  }\n\n  /* Sensor column */\n  .sensor-column{position:absolute;right:0;top:0;bottom:0;width:auto;max-width:40%;z-index:4;display:flex;flex-direction:column;gap:7px;align-items:flex-end;justify-content:center;padding:12px 12px 12px 0;pointer-events:none}\n  .sensor-chip{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:16px;font-size:10px;font-weight:800;letter-spacing:.2px;max-width:148px;backdrop-filter:blur(20px) saturate(140%);-webkit-backdrop-filter:blur(20px) saturate(140%);border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 7px 18px rgba(0,0,0,.24);transition:transform .2s,box-shadow .2s}\n  .sensor-chip-text{display:flex;flex-direction:column;min-width:0;flex:1}\n  .sensor-chip-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .sensor-chip-state{font-size:8px;letter-spacing:.08em;text-transform:uppercase;opacity:.82;margin-top:2px}\n  .sensor-chip-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}\n  .sensor-chip-battery{grid-column:1 / -1;margin-top:5px;padding-top:5px;border-top:1px solid currentColor;font-size:9px;line-height:1;opacity:.9}\n  .sensor-chip--open{background:linear-gradient(135deg,rgba(255,149,0,.9),rgba(255,96,0,.64));color:#fff}\n  .sensor-chip--open .sensor-chip-dot{background:#fff;box-shadow:0 0 8px rgba(255,255,255,.95)}\n  .sensor-chip--triggered{background:linear-gradient(135deg,rgba(255,69,58,.96),rgba(190,30,35,.82));animation:chip-pulse .9s ease-in-out infinite}\n  .sensor-chip--closed{background:rgba(15,23,32,.62);color:#eef8f1}\n  .sensor-chip--closed .sensor-chip-dot{background:#34c759;box-shadow:0 0 8px rgba(52,199,.9)}\n  .sensor-chip-battery.low{color:#ffd166;font-weight:900}\n  .buzz-orange{position:relative;border-color:rgba(255,171,64,.92)!important;background:linear-gradient(135deg,rgba(255,149,0,.38),rgba(255,109,0,.16))!important;box-shadow:0 0 0 1px rgba(255,183,77,.45),0 0 25px rgba(255,145,0,.55),inset 0 1px 0 rgba(255,255,255,.3)!important;animation:buzz-orange 1.05s cubic-bezier(.36,.07,.19,.97) infinite}\n  .buzz-orange::after{content:'⚠';margin-left:auto;color:#fff3d1;font-size:14px;filter:drop-shadow(0 1px 3px rgba(0,0,0,.28))}\n  @keyframes buzz-orange{0%,100%{transform:translateX(0) rotate(0)}12%{transform:translateX(-2px) rotate(-.65deg)}25%{transform:translateX(3px) rotate(.8deg)}40%{transform:translateX(-3px) rotate(-.8deg)}55%{transform:translateX(2px) rotate(.55deg)}70%{transform:translateX(-1px) rotate(-.25deg)}}\n  @keyframes chip-pulse{0%,100%{opacity:1}50%{opacity:0.55}}\n\n  /* HUD Overlay */\n  .hud{position:absolute;top:20px;right:24px;text-align:right;z-index:3;color:var(--hud-text-color);text-shadow:var(--text-shadow);display:flex;flex-direction:column;gap:4px}\n  .hud-loc{font-size:13px;font-weight:800;letter-spacing:0.04em;color:#ffffff;background:var(--hud-bg);padding:4px 12px;border-radius:10px;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.18);align-self:flex-end}\n  .hud-data{font-size:20px;font-weight:800;letter-spacing:-0.02em;background:var(--hud-bg);padding:6px 14px;border-radius:12px;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.08);display:inline-flex;align-items:center;gap:8px;align-self:flex-end}\n  .hud-data i{font-size:14px;opacity:0.7;font-style:normal}\n  .hud-temperatures{display:flex;justify-content:flex-end;gap:5px;flex-wrap:wrap}\n  .hud-temperature{padding:4px 8px;border-radius:999px;background:var(--hud-bg);border:1px solid rgba(255,255,255,.09);font-size:10px;font-weight:800;backdrop-filter:blur(8px)}\n\n  /* Liquid Glass Buttons */\n  .liquid-stack{display:grid;gap:10px}\n  .liquid-btn {\n    border: 1px solid rgba(255, 255, 255, 0.20) !important;\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.04) 100%) !important;\n    backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;\n    -webkit-backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;\n    color: #ffffff !important;\n    padding: 14px 18px;\n    border-radius: 18px !important;\n    font-size: 13.5px;\n    font-weight: 800;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    text-align: left;\n    cursor: pointer;\n    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.32) !important;\n    transition: all 0.22s cubic-bezier(0.25, 0.8, 0.25, 1);\n    text-shadow: 0 1px 2px rgba(0,0,0,0.3);\n    letter-spacing: 0.5px;\n  }\n  .liquid-btn:hover {\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.08) 100%) !important;\n    border-color: rgba(255, 255, 255, 0.36) !important;\n    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.45) !important;\n    transform: translateY(-2px);\n  }\n  .btn-sos {\n    background: linear-gradient(135deg, rgba(239, 68, 68, 0.32) 0%, rgba(185, 28, 28, 0.45) 100%) !important;\n    border: 1px solid rgba(252, 165, 165, 0.45) !important;\n    box-shadow: 0 10px 28px rgba(239, 68, 68, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;\n  }\n  .btn-sos:hover {\n    background: linear-gradient(135deg, rgba(239, 68, 68, 0.48) 0%, rgba(185, 28, 28, 0.65) 100%) !important;\n    box-shadow: 0 14px 34px rgba(239, 68, 68, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.45) !important;\n    transform: translateY(-2px);\n  }\n  .mode-btn-icon{width:26px;height:26px;padding:5px;border-radius:10px;flex:0 0 auto;background:linear-gradient(135deg,rgba(255,255,255,.24),rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 4px 10px rgba(0,0,0,.16);filter:drop-shadow(0 2px 4px rgba(0,0,0,.2))}\n  .liquid-btn.active .mode-btn-icon{background:linear-gradient(135deg,rgba(255,255,255,.36),rgba(255,255,255,.12));border-color:rgba(255,255,255,.42)}\n  .btn-sos .mode-btn-icon{width:28px;height:28px;border-radius:11px;background:rgba(255,255,255,.17)}\n  .liquid-btn:not(.btn-home):not(.btn-away):not(.btn-night):not(.btn-vacation):not(.btn-disarm):not(.btn-sos):hover{background:rgba(255,255,255,0.14);border-color:rgba(255,255,255,0.2)}\n  .liquid-btn.active{background:var(--btn-bg, rgba(255,255,255,0.2));border-color:rgba(255,255,255,0.4);box-shadow:0 8px 24px var(--btn-shadow, rgba(255,255,255,0.12))}\n  .liquid-btn:active:not(:disabled) { transform: scale(0.96); }\n  .liquid-btn i{font-size:16px}\n\n  .btn-home {\n    background: linear-gradient(135deg, rgba(251, 140, 0, 0.20) 0%, rgba(251, 140, 0, 0.06) 100%) !important;\n    border: 1px solid rgba(251, 140, 0, 0.38) !important;\n    color: #ffe0b2 !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n  }\n  .btn-home.active {\n    background: linear-gradient(135deg, #fb8c00 0%, #d97706 100%) !important;\n    border: 1px solid rgba(254, 215, 170, 0.85) !important;\n    box-shadow: 0 14px 36px rgba(251, 140, 0, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;\n    color: #ffffff !important;\n    transform: translateY(-2px);\n  }\n\n  .btn-away {\n    background: linear-gradient(135deg, rgba(229, 57, 53, 0.20) 0%, rgba(229, 57, 53, 0.06) 100%) !important;\n    border: 1px solid rgba(229, 57, 53, 0.38) !important;\n    color: #ffcdd2 !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n  }\n  .btn-away.active {\n    background: linear-gradient(135deg, #e53935 0%, #b91c1c 100%) !important;\n    border: 1px solid rgba(254, 202, 202, 0.85) !important;\n    box-shadow: 0 14px 36px rgba(229, 57, 53, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;\n    color: #ffffff !important;\n    transform: translateY(-2px);\n  }\n\n  .btn-night {\n    background: linear-gradient(135deg, rgba(30, 136, 229, 0.20) 0%, rgba(30, 136, 229, 0.06) 100%) !important;\n    border: 1px solid rgba(30, 136, 229, 0.38) !important;\n    color: #bbdefb !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n  }\n  .btn-night.active {\n    background: linear-gradient(135deg, #1e88e5 0%, #1d4ed8 100%) !important;\n    border: 1px solid rgba(191, 219, 254, 0.85) !important;\n    box-shadow: 0 14px 36px rgba(30, 136, 229, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;\n    color: #ffffff !important;\n    transform: translateY(-2px);\n  }\n\n  .btn-vacation {\n    background: linear-gradient(135deg, rgba(156, 39, 176, 0.20) 0%, rgba(156, 39, 176, 0.06) 100%) !important;\n    border: 1px solid rgba(156, 39, 176, 0.38) !important;\n    color: #e1bee7 !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n  }\n  .btn-vacation.active {\n    background: linear-gradient(135deg, #9c27b0 0%, #7e22ce 100%) !important;\n    border: 1px solid rgba(245, 208, 254, 0.85) !important;\n    box-shadow: 0 14px 36px rgba(156, 39, 176, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;\n    color: #ffffff !important;\n    transform: translateY(-2px);\n  }\n\n  .btn-disarm {\n    background: linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(16, 185, 129, 0.05) 100%) !important;\n    border: 1px solid rgba(16, 185, 129, 0.35) !important;\n    color: #a7f3d0 !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n    margin-top: 4px;\n  }\n  .btn-disarm.active {\n    background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;\n    border: 1px solid rgba(167, 243, 208, 0.85) !important;\n    box-shadow: 0 14px 36px rgba(16, 185, 129, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;\n    color: #ffffff !important;\n    transform: translateY(-2px);\n  }\n\n  .btn-sos {\n    background: linear-gradient(135deg, rgba(239, 68, 68, 0.22) 0%, rgba(185, 28, 28, 0.08) 100%) !important;\n    border: 1px solid rgba(252, 165, 165, 0.35) !important;\n    color: #fca5a5 !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n  }\n  .btn-sos.active, .btn-sos.flashing {\n    animation: sosFlashingPulse 0.8s infinite ease-in-out !important;\n  }\n\n  @keyframes sosFlashingPulse {\n    0%, 100% {\n      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;\n      border-color: #fca5a5 !important;\n      color: #ffffff !important;\n      box-shadow: 0 0 32px rgba(239, 68, 68, 0.95), inset 0 1px 0 rgba(255, 255, 255, 0.6) !important;\n      transform: scale(1.02);\n    }\n    50% {\n      background: linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%) !important;\n      border-color: rgba(239, 68, 68, 0.5) !important;\n      color: rgba(255, 255, 255, 0.8) !important;\n      box-shadow: 0 0 10px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;\n      transform: scale(0.98);\n    }\n  }\n  /* btn-disarm visual is handled by .btn-disarm and .btn-disarm.active above */\n\n  .entry-content {\n    background: transparent !important;\n    box-shadow: none !important;\n    border: none !important;\n  }\n\n  .badge{display:inline-flex;align-items:center;gap:5px;padding:4px 12px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}\n  .badge.armed_away,.badge.armed_vacation{background:rgba(229,57,53,.12);color:var(--error-color,#e53935)}\n  .badge.armed_home,.badge.armed_night{background:rgba(251,140,0,.12);color:#fb8c00}\n  .badge.disarmed{background:rgba(67,160,71,.12);color:var(--success-color,#43a047)}\n  .badge.triggered{background:rgba(229,57,53,.2);color:var(--error-color,#e53935);animation:pulse 1s ease-in-out infinite}\n\n  @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}\n  .meta{font-size:12px;opacity:.5}\n  .setting-label{font-size:13px;font-weight:700;color:var(--primary-text-color);letter-spacing:0.01em;margin-bottom:2px;display:block}\n  .setting-sublabel{font-size:12px;font-weight:400;opacity:0.55;color:var(--primary-text-color);margin-bottom:6px;display:block}\n  .temp-alert-row{display:flex;gap:10px;align-items:center;margin-top:8px;flex-wrap:wrap}\n  .temp-alert-row input[type=number]{width:72px;padding:6px 8px;border-radius:10px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.04);color:inherit;font-size:13px;font-weight:700;text-align:center}\n  .temp-alert-status-ok{color:#43a047;font-size:12px}\n  .temp-alert-status-warn{color:#e53935;font-size:12px;font-weight:700}\n\n  /* Generic buttons */\n  button{border:0;border-radius:14px;padding:10px 18px;font:700 13px/1.3 'Outfit',Inter,system-ui,sans-serif;cursor:pointer;white-space:nowrap;hyphens:none;word-break:normal;transition:background 0.2s,opacity .15s,transform .15s cubic-bezier(0.175, 0.885, 0.32, 1.275),box-shadow 0.2s}\n  button:focus-visible{outline:3px solid #38bdf8;outline-offset:2px}\n  button:active:not(:disabled){transform:scale(.94) translateY(1px)}\n  button.primary{background:var(--primary-color,#38bdf8);color:#0f172a;font-weight:800;box-shadow:0 4px 12px rgba(56, 189, 248, 0.35)}\n  button.primary:hover{background:#0284c7;color:#ffffff}\n  button.ghost{background:rgba(255, 255, 255, 0.08);border:1px solid rgba(255, 255, 255, 0.24);color:#ffffff !important}\n  button.ghost:hover{background:rgba(255, 255, 255, 0.16);border-color:rgba(255,255,255,0.36)}\n\n\n  /* FS button */\n  .fs-btn{background:rgba(255,255,255,0.05);padding:8px;border-radius:10px;font-size:16px}\n\n  /* Modal Fixes */\n  .modal-back{position:fixed;inset:0;background:rgba(0,0,0,0.6);display:none;align-items:center;justify-content:center;padding:20px;z-index:999999;backdrop-filter:blur(12px)}\n  .modal-back.open{display:flex}\n  .modal{width:min(400px,100%);max-height:85vh;overflow:hidden;display:grid;grid-template-rows:auto 1fr auto;gap:14px;padding:24px;border-radius:32px;background:rgba(22, 24, 38, 0.95);border:1px solid rgba(255,255,255,0.08);box-shadow:0 30px 100px rgba(0,0,0,0.6);backdrop-filter:blur(28px)}\n  .modal-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}\n  .modal-head h3{margin:0;font-size:20px;font-weight:800}\n  .modal-body{overflow:auto;padding:5px}\n  .modal-footer{display:flex;justify-content:flex-end;gap:10px;margin-top:15px}\n  /* PIN modal */\n  .pm .modal{max-width:340px;min-height:unset;grid-template-rows:auto auto auto;background:rgba(22, 24, 38, 0.82) !important;backdrop-filter:blur(16px) saturate(140%) !important;-webkit-backdrop-filter:blur(16px) saturate(140%) !important;border:1px solid rgba(255, 255, 255, 0.12) !important;box-shadow:0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;border-radius:36px;padding:28px;display:flex;flex-direction:column;align-items:center;gap:16px}\n  .pin-input{font-size:28px;letter-spacing:10px;text-align:center;padding:12px;border-radius:16px;border:none;background:rgba(255,255,255,0.02);color:inherit;width:100%;outline:none;box-shadow:inset 0 1px 3px rgba(0,0,0,0.2)}\n  .pin-error{color:var(--error-color,#e53935);font-size:13px;min-height:18px;text-align:center}\n  .pin-grid{display:grid;grid-template-columns:repeat(3,68px);gap:16px;justify-content:center;margin-top:10px}\n  .pin-btn-round{width:68px;height:68px;border-radius:50% !important;border:1px solid rgba(255,255,255,0.1) !important;background:rgba(255,255,255,0.04) !important;color:#fff !important;font-size:24px;font-weight:600;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s, transform 0.15s, border-color 0.2s;box-shadow:0 4px 10px rgba(0,0,0,0.15);padding:0 !important;outline:none}\n  .pin-btn-round:hover{background:rgba(255,255,255,0.12) !important;border-color:rgba(255,255,255,0.2) !important}\n  .pin-btn-round:active{transform:scale(0.92) !important;background:rgba(255,255,255,0.2) !important}\n  .pin-btn-round.action-key{font-size:12px;font-weight:700;letter-spacing:0.3px;text-transform:uppercase;border-color:transparent !important;background:transparent !important;box-shadow:none}\n  .pin-btn-round.action-key:hover{background:rgba(255,255,255,0.05) !important}\n  .pin-btn-round.action-key.enter-key{color:#34c759 !important}\n  .pin-btn-round.action-key.delete-key{color:#ff3b30 !important}\n  /* User card */\n  .user-card {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 16px 18px;\n    border-radius: 18px;\n    border: 1px solid rgba(255, 255, 255, 0.16) !important;\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.025) 100%) !important;\n    backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;\n    -webkit-backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;\n    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.20) !important;\n    transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n  }\n  .user-card:hover {\n    border-color: rgba(255, 255, 255, 0.25) !important;\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%) !important;\n    box-shadow: 0 16px 38px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.28) !important;\n    transform: translateY(-2px);\n  }\n  .user-badge{display:inline-block;padding:4px 10px;border-radius:8px;font-size:10.5px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:#ffffff!important;border:1px solid rgba(255,255,255,0.18)}\n  /* REEMPLAZA los colores neón por tokens legibles */\n  .user-badge.admin { background: #d97706 !important; color: #ffffff !important; font-weight: 900 !important; border: 1px solid rgba(255,255,255,0.3) !important; }\n  .user-badge.admin_old {\n    background: rgba(255,255,255,0.12);\n    color: rgba(255,255,255,0.92);\n    border: 1px solid rgba(255,255,255,0.18);\n    font-weight: 700;\n    letter-spacing: 0.04em;\n  }\n  .user-badge.user { background: #475569 !important; color: #ffffff !important; font-weight: 800 !important; border: 1px solid rgba(255,255,255,0.2) !important; }\n  .user-badge.user_old {\n    background: rgba(255,255,255,0.08);\n    color: rgba(255,255,255,0.75);\n    border: 1px solid rgba(255,255,255,0.12);\n  }\n  /* Role label debajo del nombre */\n  .user-role-label {\n    font-size: 11px;\n    font-weight: 600;\n    letter-spacing: 0.06em;\n    text-transform: uppercase;\n    color: rgba(255,255,255,0.55);  /* muted, no neón */\n    margin-top: 2px;\n  }\n  /* Notif target chip */\n  .notif-chip{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);font-size:12px;font-weight:800;color:#ffffff !important}\n  .notif-chip button{padding:0 4px;border:0;background:none;cursor:pointer;opacity:.75;color:#ffffff}\n  /* Triggered box */\n  .trig-box{padding:12px 14px;border-radius:14px;background:rgba(229,57,53,.08);border:1px dashed var(--error-color,#e53935);font-size:12px;font-weight:600;color:var(--error-color,#e53935)}\n  /* inputs */\n  input[type=\"text\"], input[type=\"password\"], input[type=\"number\"], input[type=\"search\"], select, input[type=\"datetime-local\"], .glass-control {\n    width: 100%;\n    padding: 11px 14px;\n    border-radius: 16px;\n    border: 1px solid rgba(255, 255, 255, 0.16);\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.055));\n    color: var(--primary-text-color);\n    backdrop-filter: blur(18px) saturate(145%);\n    -webkit-backdrop-filter: blur(18px) saturate(145%);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16), 0 8px 22px rgba(0, 0, 0, 0.12);\n    font: 700 13px/1.2 'Outfit', Inter, system-ui, sans-serif;\n    outline: none;\n    transition: transform 0.34s cubic-bezier(0.18, 0.89, 0.32, 1.32), border-color 0.22s, box-shadow 0.22s;\n    display: block;\n    box-sizing: border-box;\n  }\n  input[type=\"text\"]:focus, input[type=\"password\"]:focus, input[type=\"number\"]:focus, input[type=\"search\"]:focus, select:focus, input[type=\"datetime-local\"]:focus, .glass-control:focus {\n    transform: scale(1.018);\n    border-color: rgba(112, 188, 255, 0.78);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.23), 0 0 0 4px rgba(0, 122, 255, 0.14), 0 10px 28px rgba(0, 0, 0, 0.16);\n  }\n  .x-never-match input[type=\"text\"],\n  .x-never-match input[type=\"password\"],\n  .x-never-match input[type=\"number\"],\n  .x-never-match input[type=\"search\"],\n  .x-never-match select,\n  .x-never-match input[type=\"datetime-local\"],\n  .x-never-match .glass-control {\n    background: rgba(255, 255, 255, 0.52);\n    border-color: rgba(0, 0, 0, 0.10);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 6px 16px rgba(0, 0, 0, 0.05);\n  }\n  /* search */\n  .search-wrap{display:flex;gap:10px;align-items:center}\n  .search-wrap input{flex:1;min-width:0}\n  /* ── Dual-panel selector modal ───────────────────────────────────────────────────── */\n  #selector-modal .modal{width:min(980px,96vw);height:min(780px,92vh);max-height:92vh;grid-template-rows:auto minmax(0,1fr) auto}\n  #selector-modal .modal-body{min-height:0;height:100%;padding:5px 0}\n  .sel-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px;overflow:hidden;min-height:0;height:100%}\n  @media(max-width:600px){.sel-grid{grid-template-columns:1fr}}\n  .sel-panel{display:flex;flex-direction:column;gap:8px;overflow:hidden;min-width:0;min-height:0;padding:12px;border-radius:18px;background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.07)}\n  .sel-panel-inner{overflow-y:auto;overscroll-behavior:contain;flex:1;min-height:0;display:grid;gap:6px;align-content:start;padding-right:4px}\n  .sel-actions{display:flex;gap:6px;flex-wrap:wrap;flex-shrink:0}\n  .pick-row{display:grid;grid-template-columns:24px minmax(0,1fr);align-items:center;gap:12px;padding:12px 14px;min-height:48px;border-radius:14px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.035);cursor:pointer;transition:background .12s,border-color .12s}\n  .pick-row:hover{background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.24)}\n  .pick-row:has(input:checked){border-color:rgba(56,189,248,.65);background:rgba(56,189,248,.12)}\n  .pick-row input[type=checkbox]{width:22px;height:22px;min-width:22px;min-height:22px;cursor:pointer;accent-color:var(--primary-color,#38bdf8);margin:0}\n  .pick-row-name{font-weight:750;font-size:14px;color:#ffffff;display:flex;align-items:center;gap:6px;flex-wrap:wrap;line-height:1.3}\n  .pick-row-meta{font-size:12px;color:#cbd5e1;opacity:0.92;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .device-facts{display:flex;gap:5px;flex-wrap:wrap;margin-top:7px}\n  .device-fact{display:inline-flex;align-items:center;min-height:20px;padding:2px 7px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08);font-size:10px;font-weight:750;line-height:1.1;white-space:nowrap}\n  .device-fact.status-open{color:#ff8a80;background:rgba(255,82,82,.12)}\n  .device-fact.status-closed{color:#7ee2a8;background:rgba(52,199,.12)}\n  .device-fact.power-low{color:#ffd166;background:rgba(255,183,77,.13)}\n  .sel-right-item{display:flex;align-items:center;justify-content:space-between;min-width:0;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,0.09);background:rgba(255,255,255,0.055);font-size:13px;box-shadow:inset 0 1px 0 rgba(255,255,255,0.06)}\n  .sel-right-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700}\n  .sel-right-facts{display:flex;gap:5px;flex-wrap:wrap;margin-top:5px}\n  .mode-sensor-grid .sensor-pill{width:100%;min-width:0;padding:9px 10px;gap:7px}\n  .mode-sensor-grid .sensor-pill .pill-content{display:grid;grid-template-columns:minmax(0,1fr) auto auto;align-items:center;gap:6px;min-width:0;flex:1}\n  .mode-sensor-grid .sensor-pill .pill-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .mode-sensor-grid .sensor-pill .pill-status{font-size:10px;font-weight:800;opacity:.78;white-space:nowrap}\n  .mode-sensor-grid .sensor-pill .pill-power{font-size:10px;font-weight:700;opacity:.82;white-space:nowrap}\n  .sel-panel-inner::-webkit-scrollbar{width:7px}.sel-panel-inner::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.18);border-radius:99px}\n  /* Activity log */\n  .log-item{display:flex;align-items:flex-start;gap:12px;padding:13px;border-radius:18px;border:1px solid var(--log-item-border, rgba(255,255,255,.05));background:linear-gradient(135deg,color-mix(in srgb,var(--log-item-bg,rgba(255,255,255,.02)) 84%,#fff 16%),var(--log-item-bg,rgba(255,255,255,.02)));color:var(--primary-text-color,#fff);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 7px 18px rgba(0,0,0,.10)}\n  .log-icon{width:34px;height:34px;display:grid;place-items:center;border-radius:13px;flex-shrink:0;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 5px 12px rgba(0,0,0,.12)}\n  .glass-orb{width:14px;height:14px;border-radius:50%;box-shadow:inset 0 2px 4px rgba(255,255,255,0.5),0 2px 6px rgba(0,0,0,0.2);background:rgba(255,255,255,0.3)}\n  .log-item.log-item--armed .log-icon{background:rgba(255,149,0,.16);border-color:rgba(255,183,77,.28)}\n  .log-item.log-item--armed .glass-orb{background:linear-gradient(135deg,#ffb74d,#f57c00)}\n  .log-item.log-item--disarmed .log-icon{background:rgba(52,199,.14);border-color:rgba(105,219,139,.28)}\n  .log-item.log-item--disarmed .glass-orb{background:linear-gradient(135deg,#69db8b,#388e3c)}\n  .log-item.log-item--triggered .log-icon{background:rgba(255,69,58,.16);border-color:rgba(255,139,131,.30)}\n  .log-item.log-item--triggered .glass-orb{background:linear-gradient(135deg,#ff8b83,#d32f2f)}\n  .log-body{flex:1;min-width:0}\n  .log-title{font-weight:700;font-size:13px}\n  .log-meta{font-size:11px;opacity:.55;margin-top:2px}\n  .log-badge{display:inline-block;padding:2px 7px;border-radius:6px;font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;margin-right:4px}\n  .log-badge.arm{background:rgba(251,140,0,.12);color:#fb8c00}\n  .log-badge.disarm{background:rgba(67,160,71,.12);color:var(--success-color,#43a047)}\n  .log-badge.trigger{background:rgba(229,57,53,.15);color:var(--error-color,#e53935)}\n  button:focus-visible,input:focus-visible,select:focus-visible,a:focus-visible{outline:3px solid color-mix(in srgb,var(--primary-color,#007aff) 72%,#fff);outline-offset:3px}\n  @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}.wx canvas{display:none!important}}\n  /* Personalization section styles */\n  .personalize-section {\n    margin-top: 18px;\n    padding: 18px;\n    background: var(--personalize-bg, rgba(255,255,255,0.02));\n    border: 1px solid var(--personalize-border, rgba(255,255,255,0.06));\n    border-radius: 22px;\n    display: grid;\n    gap: 16px;\n  }\n  .personalize-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-areas:\"home temp\" \"panel clock\" \"hub emergency\";gap:14px 16px;align-items:start}\n  .personalize-column{display:contents}\n  .personalize-field{min-width:0;align-self:stretch}\n  .pf-home{grid-area:home}.pf-temp{grid-area:temp}.pf-panel{grid-area:panel}.pf-hub{grid-area:hub}.pf-emergency{grid-area:emergency}.pf-clock{grid-area:clock}\n  .pf-panel,.pf-hub{display:flex;flex-direction:column;gap:8px}\n  .pf-emergency{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);grid-template-areas:\"emergency-label emergency-label\" \"emergency-input emergency-help\";gap:5px 16px;align-items:start;padding-top:2px}\n  .pf-emergency #lbl-emergency-number{grid-area:emergency-label}.pf-emergency #emergency-number-input{grid-area:emergency-input}.pf-emergency #emergency-number-help{grid-area:emergency-help;margin:0!important}\n  .sos-configuration {\n    padding: 18px;\n    border-radius: 24px;\n    border: 1px solid rgba(255, 59, 48, 0.25);\n    background: linear-gradient(135deg, rgba(255, 59, 48, 0.12), rgba(255, 255, 255, 0.02));\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 12px 28px rgba(255, 59, 48, 0.06), 0 8px 20px rgba(0, 0, 0, 0.12);\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n  }\n  /* SOS uses the full personalization width so outputs never create a tall,\n     narrow list with unused space beside it. */\n  .sos-configuration{display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-areas:\"title action\" \"outputs outputs\" \"help help\";gap:12px 16px;align-items:center}\n  .sos-configuration #lbl-sos-actions{grid-area:title;margin:0!important;white-space:nowrap}\n  .sos-configuration #sos-output-chips{grid-area:outputs;margin:0!important;display:grid;grid-template-columns:repeat(auto-fill,minmax(125px,1fr));gap:7px;align-items:stretch;max-height:148px;overflow-y:auto;overflow-x:hidden;padding:2px 5px 2px 2px;overscroll-behavior:contain}\n  .sos-configuration #sos-output-chips .sensor-pill{width:100%;min-width:0;min-height:34px;justify-content:center;padding:7px 10px;font-size:11px;border-radius:12px}\n  .sos-configuration #sos-output-chips .sensor-pill > span{display:block;min-width:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center}\n  .sos-configuration #sos-output-chips .mode-sensor-none{grid-column:1/-1;padding:18px;min-height:54px}\n  .sos-configuration #btn-select-sos-outputs{grid-area:action;width:auto!important;max-width:230px;min-width:0;white-space:normal;overflow-wrap:anywhere;line-height:1.15}\n  .sos-configuration #sos-output-help{grid-area:help;margin:0!important;max-width:none}\n  .sos-configuration:hover {\n    transform: translateY(-2px);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 16px 36px rgba(255, 59, 48, 0.10), 0 12px 24px rgba(0, 0, 0, 0.16);\n  }\n  .x-never-match .sos-configuration {\n    border-color: rgba(255, 59, 48, 0.3);\n    background: linear-gradient(135deg, rgba(255, 59, 48, 0.08), rgba(0, 0, 0, 0.01));\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 10px 24px rgba(255, 59, 48, 0.05);\n  }\n  #sos-output-chips .sensor-pill{background:linear-gradient(135deg,rgba(255,255,255,.16),rgba(255,255,255,.06));border-color:rgba(255,255,255,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 5px 14px rgba(0,0,0,.10)}\n  .background-custom-inputs{flex-direction:column;gap:8px;background:rgba(0,0,0,.15);padding:12px;border-radius:18px;border:1px solid rgba(255,255,255,.09);box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}\n  .modal-back.open .modal,\n  .lang-modal-back.open .lang-modal-card,\n  .ios-confirm-backdrop.open .ios-confirm-card {\n    animation: liquidDropIn .48s cubic-bezier(.16,1.24,.32,1) both;\n  }\n  @keyframes liquidDropIn{0%{opacity:0;transform:translateY(18px) scale(.91);filter:blur(5px)}65%{opacity:1;transform:translateY(-3px) scale(1.018);filter:blur(0)}100%{transform:translateY(0) scale(1)}}\n  @keyframes argus-modal-in{0%{opacity:0;transform:scale(.94) translateY(8px)}100%{opacity:1;transform:scale(1) translateY(0)}}\n  @media(max-width:700px){\n    .personalize-grid{grid-template-columns:minmax(0,1fr);grid-template-areas:\"home\" \"temp\" \"panel\" \"hub\" \"clock\" \"emergency\"}\n    .pf-emergency{grid-template-columns:minmax(0,1fr);grid-template-areas:\"emergency-label\" \"emergency-input\" \"emergency-help\"}\n    .personalize-section{padding:14px}\n    .sos-configuration{display:flex;flex-direction:column;align-items:stretch;gap:10px;padding:14px;border-radius:24px}\n    .sos-configuration #lbl-sos-actions{white-space:normal}.sos-configuration #btn-select-sos-outputs{width:100%!important}.sos-configuration #sos-output-help{max-width:none}\n  }\n\n  #argus-canvas-bg{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;background-size:cover;background-position:center;background-repeat:no-repeat}\n  #argus-canvas-bg::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.3) 100%);z-index:1;pointer-events:none}\n\n.sensor-pill {\n  display:inline-flex; align-items:center; gap:8px;\n  background:var(--argus-pill-bg, rgba(255,255,255,0.04));\n  border:1px solid var(--argus-pill-border, rgba(255,255,255,0.08));\n  border-radius:14px; padding:10px 14px;\n  font-size:13px; color:var(--argus-pill-color, rgba(255,255,255,0.95));\n  backdrop-filter:blur(10px); transition:all 0.2s cubic-bezier(0.4,0,0.2,1);\n  font-weight:700; box-shadow:0 4px 12px rgba(0,0,0,0.08);\n}\n.sensor-pill:hover { background:var(--argus-pill-bg-hover, rgba(255,255,255,0.08)); border-color:rgba(255,255,255,0.25); transform:translateY(-1px); }\n.sensor-pill .pill-dot { width:10px; height:10px; border-radius:50%; background:#34c759; flex-shrink:0; box-shadow:0 0 10px rgba(52,199,0.5); }\n.sensor-pill .pill-dot.open { background:#ff3b30; box-shadow:0 0 10px rgba(255,59,48,0.5); }\n.sensor-pill .pill-dot.unavailable { background:#999; }\n.sensor-pill button { background:none; border:none; color:var(--argus-pill-color, #fff); cursor:pointer; opacity:0.5; padding:4px; font-size:14px; transition:opacity 0.2s; }\n.sensor-pill button:hover { opacity:1; }\n\n.mode-sensor-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:12px; margin-top:12px; }\n.mode-sensor-none { grid-column:1/-1; padding:30px; text-align:center; background:var(--argus-pill-bg,rgba(255,255,255,0.03)); border:2px dashed var(--argus-pill-border,rgba(255,255,255,0.1)); border-radius:20px; color:var(--argus-pill-color-muted,rgba(255,255,255,0.4)); font-size:14px; font-weight:600; }\n.subsection-title { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:12px; color:var(--argus-pill-color-muted,rgba(255,255,255,0.5)); display:block; }\n\n\n/* ── Language Picker ───────────────────────────────────── */\n.lang-pill {\n  display:inline-flex; align-items:center; gap:6px;\n  padding:7px 14px; border-radius:999px;\n  background:rgba(255,255,255,0.10);\n  border:1px solid rgba(255,255,255,0.18);\n  backdrop-filter:blur(12px) saturate(120%);\n  -webkit-backdrop-filter:blur(12px) saturate(120%);\n  color:#fff; font-size:13px; font-weight:700;\n  cursor:pointer; transition:all 0.22s cubic-bezier(0.4,0,0.2,1);\n  box-shadow:0 4px 16px rgba(0,0,0,0.18);\n  white-space:nowrap; flex-shrink:0;\n}\n.lang-pill:hover { background:rgba(255,255,255,0.22); transform:translateY(-1px); }\n.x-never-match .lang-pill {\n  background:rgba(0,0,0,0.07); border-color:rgba(0,0,0,0.15); color:#1e1e2d;\n}\n\n/* Language modal */\n.lang-modal-back { position:fixed; inset:0; background:rgba(0,0,0,0.55); display:none; align-items:center; justify-content:center; z-index:999998; backdrop-filter:blur(4px); }\n.lang-modal-back.open { display:flex; }\n.lang-modal-card {\n  width:min(400px,92vw); border-radius:28px; padding:28px 24px 20px;\n  background:rgba(20,22,35,0.92);\n  border:1px solid rgba(255,255,255,0.14);\n  box-shadow:0 32px 80px rgba(0,0,0,0.55);\n  backdrop-filter:blur(12px) saturate(120%);\n  -webkit-backdrop-filter:blur(12px) saturate(120%);\n  color:#fff;\n  animation: langBounceIn 0.38s cubic-bezier(0.175,0.885,0.32,1.275) forwards;\n}\n.x-never-match .lang-modal-card {\n  background:rgba(255,255,255,0.96); color:#1e1e2d;\n  border-color:rgba(0,0,0,0.12); box-shadow:0 20px 60px rgba(0,0,0,0.25);\n}\n@keyframes langBounceIn {\n  0%   { transform:scale(0.82) translateY(20px); opacity:0; }\n  60%  { transform:scale(1.03) translateY(-4px); opacity:1; }\n  100% { transform:scale(1)    translateY(0);    opacity:1; }\n}\n.lang-modal-title {\n  font-size:18px; font-weight:900; letter-spacing:-0.01em;\n  margin-bottom:20px; text-align:center;\n}\n.lang-grid {\n  display:grid; grid-template-columns:1fr 1fr; gap:10px;\n}\n.lang-option {\n  display:flex; align-items:center; gap:10px;\n  padding:12px 14px; border-radius:16px;\n  background:rgba(255,255,255,0.10);\n  border:1.5px solid rgba(255,255,255,0.18);\n  /* Buttons do not inherit color reliably through the HA shadow DOM. */\n  color:rgba(255,255,255,0.98) !important;\n  text-shadow:0 1px 2px rgba(0,0,0,0.38);\n  cursor:pointer; transition:all 0.18s ease;\n  font-size:14px; font-weight:750;\n}\n.lang-option span:not(.lang-flag) { color:inherit !important; }\n.lang-option:hover { background:rgba(255,255,255,0.16); border-color:rgba(255,255,255,0.28); transform:translateY(-1px); }\n.lang-option.active {\n  background:rgba(3,169,244,0.30); border-color:rgba(76,201,255,0.82);\n  box-shadow:0 0 18px rgba(3,169,244,0.25);\n}\n.lang-flag { font-size:22px; line-height:1; }\n.lang-close-row { display:flex; justify-content:center; margin-top:18px; }\n.lang-close-btn {\n  padding:9px 28px; border-radius:14px;\n  background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.15);\n  color:#fff; font-size:13px; font-weight:700; cursor:pointer;\n  transition:background 0.18s;\n}\n.lang-close-btn:hover { background:rgba(255,255,255,0.2); }\n\n/* Background File Manager Styles */\n.file-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.22s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.file-card:hover {\n  background: rgba(255, 255, 255, 0.08) !important;\n  border-color: rgba(255, 255, 255, 0.16) !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.x-never-match .file-card {\n  background: rgba(0, 0, 0, 0.02);\n  border-color: rgba(0, 0, 0, 0.07);\n  color: #1c1c1e;\n}\n.x-never-match .file-card:hover {\n  background: rgba(0, 0, 0, 0.05) !important;\n  border-color: rgba(0, 0, 0, 0.12) !important;\n}\n.file-card-preview {\n  position: relative;\n  width: 100%;\n  height: 64px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.2);\n}\n.file-card-preview img, .file-card-preview video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.file-card-name {\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  opacity: 0.85;\n}\n.file-card-meta {\n  font-size: 9px;\n  opacity: 0.55;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.file-card-actions {\n  display: flex;\n  gap: 4px;\n  margin-top: auto;\n}\n.file-card-btn {\n  flex: 1;\n  padding: 4px;\n  font-size: 8px;\n  font-weight: 700;\n  text-transform: uppercase;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.03);\n  color: inherit;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.15s ease;\n}\n.file-card-btn:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.x-never-match .file-card-btn {\n  border-color: rgba(0, 0, 0, 0.12);\n  background: rgba(0, 0, 0, 0.02);\n}\n.x-never-match .file-card-btn:hover {\n  background: rgba(0, 0, 0, 0.08);\n  border-color: rgba(0, 0, 0, 0.25);\n}\n.file-card-btn-delete {\n  padding: 3px 6px;\n  color: #ff3b30;\n  border: 1px solid rgba(255, 59, 48, 0.15);\n  background: rgba(255, 59, 48, 0.05);\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 9px;\n  transition: all 0.15s ease;\n}\n.file-card-btn-delete:hover {\n  background: rgba(255, 59, 48, 0.25);\n  border-color: rgba(255, 59, 48, 0.45);\n}\n\n.argus-bootstrap-layer {\n  position: fixed;\n  inset: 0;\n  background: rgba(0,0,0,0.88);\n  /* NO backdrop-filter: element is permanently in DOM (display:none toggle).\n     WebKit compositor leak bug — opaque background is visually equivalent. */\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  animation: fadeIn 0.4s ease forwards;\n}\n.argus-bootstrap-card {\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 24px;\n  padding: 40px;\n  max-width: 480px;\n  width: 90%;\n  box-shadow: 0 16px 40px rgba(0,0,0,0.5);\n  text-align: center;\n}\n.argus-bootstrap-card h1 {\n  margin: 0 0 16px;\n  font-weight: 300;\n  font-size: 28px;\n  letter-spacing: 0.5px;\n}\n.argus-bootstrap-card p {\n  color: rgba(255,255,255,0.7);\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 32px;\n}\n@keyframes argusWelcomeCard {\n  from { opacity: 0; transform: translateY(18px) scale(.96); }\n  65% { opacity: 1; transform: translateY(-3px) scale(1.01); }\n  to { opacity: 1; transform: translateY(0) scale(1); }\n}\n@keyframes argusWelcomeLogo {\n  0%,100% { transform: translateY(0) scale(1); filter: drop-shadow(0 10px 18px rgba(32,145,255,.28)); }\n  50% { transform: translateY(-5px) scale(1.045); filter: drop-shadow(0 16px 26px rgba(32,145,255,.5)); }\n}\n@keyframes argusWelcomeCheck {\n  from { opacity: 0; transform: scale(.55) rotate(-16deg); }\n  70% { opacity: 1; transform: scale(1.1) rotate(4deg); }\n  to { opacity: 1; transform: scale(1) rotate(0); }\n}\n.argus-first-run-card { animation: argusWelcomeCard .58s cubic-bezier(.22,1.2,.36,1) both; }\n.argus-first-run-logo { height:68px; width:68px; border-radius:19px; animation:argusWelcomeLogo 2.4s ease-in-out infinite; }\n.argus-first-run-brand { display:flex; flex-direction:column; align-items:center; gap:10px; margin-bottom:20px; }\n.argus-first-run-brand h1 { margin:0; font-size:1.65rem; font-weight:850; letter-spacing:-.02em; }\n.argus-first-run-brand p { margin:0; font-size:.92rem; color:rgba(255,255,255,.7); }\n.argus-first-run-thank-icon { width:74px; height:74px; margin:0 auto 18px; display:grid; place-items:center; border-radius:50%; background:rgba(52,199,89,.18); border:1px solid rgba(52,199,89,.45); color:#58e37c; font-size:2.15rem; box-shadow:0 0 32px rgba(52,199,89,.22); animation:argusWelcomeCheck .5s cubic-bezier(.2,1.35,.35,1) both; }\n\n/* ─── tvOS Profile Selector ─── */\n.argus-profile-overlay {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.4); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px);\n  /* NO backdrop-filter: causes orphaned compositor layers in WebKit when removed.\n     High-opacity background achieves same visual effect safely. */\n  display: flex; align-items: center; justify-content: center;\n  z-index: 9999;\n  animation: argus-overlay-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes argus-overlay-in {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n/* Título arriba */\n.argus-profile-header {\n  text-align: center;\n  margin-bottom: 36px;\n  animation: argus-slide-down 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;\n}\n@keyframes argus-slide-down {\n  from { opacity: 0; transform: translateY(-20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n.argus-profile-header h2 {\n  margin: 0; font-size: 1.6rem; font-weight: 800;\n  color: #fff; letter-spacing: -0.02em;\n}\n.argus-profile-header p {\n  margin: 6px 0 0; font-size: 0.85rem;\n  color: rgba(255,255,255,0.55);\n}\n\n/* Grid de perfiles */\n.argus-profile-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 36px 24px;\n  max-width: 900px;\n  width: 100%;\n  justify-content: center;\n  animation: argus-grid-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;\n}\n@keyframes argus-grid-in {\n  from { opacity: 0; transform: scale(0.92) translateY(16px); }\n  to   { opacity: 1; transform: scale(1) translateY(0); }\n}\n\n/* Cada perfil */\n@media (max-width: 950px) and (orientation: landscape) {\n  .argus-profile-grid { \n    grid-template-columns: repeat(4, 1fr);\n    padding: 16px;\n  }\n}\n@media (max-width: 600px) and (orientation: portrait) {\n  .argus-profile-grid { \n    grid-template-columns: repeat(2, 1fr);\n    padding: 16px;\n    gap: 20px 16px;\n  }\n}\n@media (max-width: 380px) and (orientation: portrait) {\n  .argus-profile-grid { \n    grid-template-columns: 1fr;\n    padding: 16px;\n  }\n  .argus-profile-item { width: 100%; }\n}\n\n.argus-profile-item {\n  touch-action: manipulation;\n  min-height: 44px;\n  display: flex; flex-direction: column;\n  align-items: center; gap: 10px;\n  cursor: pointer;\n  border-radius: 16px;\n  padding: 14px 8px 10px;\n  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1),\n              background 0.2s ease;\n  -webkit-tap-highlight-color: transparent;\n}\n.argus-profile-item:hover {\n  transform: scale(1.08);\n  background: rgba(255,255,255,0.07);\n}\n.argus-profile-item:active {\n  transform: scale(0.96);\n}\n.argus-profile-item:focus-visible {\n  outline: 2px solid rgba(255,255,255,0.6);\n  outline-offset: 4px;\n}\n\n/* Círculo avatar */\n.argus-profile-circle {\n  width: 120px; height: 120px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid rgba(255,255,255,0.18);\n  box-shadow: 0 4px 20px rgba(0,0,0,0.35);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.22s;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 2.5rem; font-weight: 800;\n  color: #fff; overflow: hidden; flex-shrink: 0;\n  background: rgba(255,255,255,0.1);\n  position: relative;\n}\n@media (max-width: 600px) and (orientation: portrait) {\n  .argus-profile-circle {\n    width: 76px; height: 76px;\n    font-size: 1.5rem; border-width: 2.5px;\n  }\n}\n@media (max-width: 950px) and (orientation: landscape) {\n  .argus-profile-circle {\n    width: 84px; height: 84px;\n    font-size: 1.8rem; border-width: 2.5px;\n  }\n}\n.argus-profile-item:hover .argus-profile-circle {\n  border-color: rgba(255,255,255,0.55);\n  box-shadow: 0 0 0 3px rgba(255,255,255,0.15), 0 6px 24px rgba(0,0,0,0.4);\n}\n.argus-profile-circle img {\n  width: 100%; height: 100%; border-radius: 50%; object-fit: cover;\n}\n.argus-profile-circle .lock-badge {\n  position: absolute; bottom: 0; right: 0;\n  width: 28px; height: 28px; border-radius: 50%;\n  background: rgba(0,0,0,0.75); display: flex;\n  align-items: center; justify-content: center;\n  font-size: 14px; border: 2px solid rgba(255,255,255,0.2);\n}\n@media (max-width: 600px) {\n  .argus-profile-circle .lock-badge {\n    width: 22px; height: 22px; font-size: 11px; border-width: 1.5px;\n  }\n}\n\n/* Nombre y rol */\n.argus-profile-label {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.argus-profile-label .p-name {\n  font-size: 1rem; font-weight: 700;\n  color: #fff; line-height: 1.2;\n  max-width: 140px; overflow: hidden;\n  text-overflow: ellipsis; white-space: nowrap;\n}\n.argus-profile-label .p-role {\n  font-size: 0.72rem; font-weight: 600;\n  color: rgba(255,255,255,0.6);\n  margin-top: 4px;\n  text-transform: uppercase; letter-spacing: 0.04em;\n}\n@media (max-width: 600px) {\n  .argus-profile-label .p-name { font-size: 0.82rem; max-width: 80px; }\n  .argus-profile-label .p-role { font-size: 0.65rem; margin-top: 2px; }\n}\n\n/* ─── Welcome Screen (Fase 2) ─── */\n.argus-welcome-screen {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.88);\n  /* NO backdrop-filter: Safari/WebKit compositor bug causes blur to persist\n     after element.remove(). Use opaque background instead. */\n  display: flex; flex-direction: column;\n  align-items: center; justify-content: center;\n  z-index: 10000;\n  pointer-events: none;\n}\n.argus-welcome-avatar {\n  width: 110px; height: 110px;\n  border-radius: 50%; overflow: hidden;\n  border: 3px solid rgba(255,255,255,0.3);\n  box-shadow: 0 8px 40px rgba(0,0,0,0.5);\n  display: flex; align-items: center; justify-content: center;\n  font-size: 2.8rem; font-weight: 800; color: #fff;\n  background: rgba(255,255,255,0.12);\n  will-change: transform, width, height, border-radius;\n}\n.argus-welcome-avatar img {\n  width: 100%; height: 100%; object-fit: cover;\n}\n.argus-welcome-text {\n  margin-top: 20px; text-align: center;\n}\n.argus-welcome-text .greeting {\n  font-size: 1.0rem; color: rgba(255,255,255,0.6);\n  font-weight: 500; letter-spacing: 0.02em;\n  margin: 0;\n}\n.argus-welcome-text .wname {\n  font-size: 2.0rem; font-weight: 900;\n  color: #fff; letter-spacing: -0.03em;\n  margin: 6px 0 0;\n  line-height: 1;\n}\n\n/* PIN prompt dentro del selector tvOS */\n.argus-pin-prompt {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.75);\n  backdrop-filter: blur(28px);\n  -webkit-backdrop-filter: blur(28px);\n  display: flex; align-items: center; justify-content: center;\n  z-index: 10001;\n  animation: argus-overlay-in 0.25s ease both;\n}\n.argus-pin-card {\n  background: rgba(255,255,255,0.08);\n  border: 1px solid rgba(255,255,255,0.14);\n  border-radius: 20px; padding: 28px 24px;\n  width: min(340px, 90vw);\n  text-align: center; color: #fff;\n}\n.argus-pin-card h3 {\n  margin: 0 0 4px; font-size: 1.1rem; font-weight: 800;\n}\n.argus-pin-card .pin-sub {\n  font-size: 0.78rem; color: rgba(255,255,255,0.5); margin-bottom: 16px;\n}\n.argus-pin-input {\n  width: 100%; box-sizing: border-box;\n  text-align: center; font-size: 1.6rem;\n  letter-spacing: 0.4em; padding: 12px;\n  border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);\n  background: rgba(255,255,255,0.07); color: #fff;\n  outline: none; margin-bottom: 14px;\n}\n.argus-numpad {\n  display: grid; grid-template-columns: repeat(3,1fr); gap: 10px;\n  margin-bottom: 12px;\n}\n.argus-numpad button {\n  padding: 14px; font-size: 1.15rem; font-weight: 700;\n  border-radius: 12px;\n  border: 1px solid rgba(255,255,255,0.14);\n  background: rgba(255,255,255,0.08); color: #fff;\n  cursor: pointer;\n  transition: background 0.15s, transform 0.1s;\n}\n.argus-numpad button:active { transform: scale(0.93); background: rgba(255,255,255,0.18); }\n.argus-pin-actions {\n  display: flex; gap: 10px; margin-top: 4px;\n}\n.argus-pin-actions button {\n  flex: 1; padding: 12px; border-radius: 12px; font-size: 0.85rem;\n  font-weight: 700; cursor: pointer;\n  border: 1px solid rgba(255,255,255,0.15);\n  background: rgba(255,255,255,0.07); color: #fff;\n  transition: background 0.15s;\n}\n.argus-pin-actions button:hover { background: rgba(255,255,255,0.15); }\n\n@keyframes argus-shake {\n  0%, 100% { transform: translateX(0); }\n  20%       { transform: translateX(-8px); }\n  40%       { transform: translateX(8px); }\n  60%       { transform: translateX(-5px); }\n  80%       { transform: translateX(5px); }\n}\n@keyframes argus-overlay-out {\n  from { opacity: 1; }\n  to   { opacity: 0; }\n}\n\n.user-selector-grid {\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 16px;\n  margin-top: 24px;\n}\n.user-card {\n  background: rgba(255,255,255,0.1);\n  border: 1px solid rgba(255,255,255,0.15);\n  border-radius: 16px;\n  padding: 20px 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.user-card:hover {\n  background: rgba(255,255,255,0.2);\n  transform: translateY(-2px);\n}\n.user-card-own {\n  border-color: rgba(0, 122, 255, 0.55);\n  box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.22), 0 8px 24px rgba(0,122,255,0.1);\n}\n.user-card-own:hover {\n  border-color: rgba(0, 122, 255, 0.8);\n}\n.profile-own-badge {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #007aff;\n  background: rgba(0, 122, 255, 0.12);\n  border-radius: 999px;\n  padding: 2px 8px;\n  margin-top: -4px;\n}\n.user-role-label {\n  font-size: 11px;\n  opacity: 0.55;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n}\n@keyframes shake {\n  0%, 100% { transform: translateX(0); }\n  20%, 60% { transform: translateX(-6px); }\n  40%, 80% { transform: translateX(6px); }\n}\n.user-avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 600;\n  color: #fff;\n  border: 1px solid rgba(255,255,255,0.3);\n}\n.user-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(255,255,255,0.9);\n}\n.pin-prompt {\n  display: none;\n  animation: fadeIn 0.3s ease forwards;\n  margin-top: 20px;\n}\n.pin-prompt input {\n  font-size: 24px;\n  letter-spacing: 8px;\n  text-align: center;\n  padding: 10px;\n  border-radius: 12px;\n  border: 1px solid rgba(255,255,255,0.2);\n  background: rgba(0,0,0,0.2);\n  color: white;\n  width: 200px;\n  margin-bottom: 20px;\n}\n.btn-claim {\n  background: #ff3b30;\n  color: white;\n  border: none;\n  padding: 14px 28px;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-claim:hover { background: #ff453a; }\n.btn-start {\n  background: #34c759;\n  color: white;\n  border: none;\n  padding: 14px 28px;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-start:hover { background: #30d158; }\n.btn-cancel {\n  background: rgba(255,255,255,0.1);\n  color: white;\n  border: none;\n  padding: 14px 28px;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-left: 10px;\n}\n\n/* Mobile background and HomeKit polish fixes (moved from runtime hack) */\n.entry-icon,.entry-icon>svg,.argus-old-shield,.argus-old-shield>svg{overflow:visible!important;clip-path:none!important;-webkit-clip-path:none!important}\n.entry-icon{contain:layout!important}\n#global-status { display: none !important; }\n#global-status .badge.disarmed,.hero-pill#hero-security-pill{color:#fff!important;background:rgba(18,82,54,.78)!important;border:1px solid rgba(125,255,185,.64)!important;text-shadow:0 1px 2px rgba(0,0,0,.72)!important;opacity:1!important}\n.argus-instance-duplicate-status{display:none!important}\n.pin-prompt,.pin-modal,.modal,.argus-bootstrap-card{color:#fff!important;text-shadow:0 1px 2px rgba(0,0,0,.55)!important}\n.pin-prompt input,.pin-modal input,.argus-bootstrap-card input{color:#fff!important;background:rgba(8,16,31,.72)!important;border-color:rgba(255,255,255,.24)!important;-webkit-text-fill-color:#fff!important}\n.pin-prompt label,.pin-modal label,.pin-prompt p,.pin-modal p,.argus-bootstrap-card label,.argus-bootstrap-card p{color:rgba(255,255,255,.88)!important}\n#w-activity,.activity-log{max-height:min(58vh,520px)!important;overflow-y:auto!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}\n#w-activity .panel-body,.activity-log .panel-body{max-height:inherit!important;overflow-y:auto!important}\n@media(max-width:760px){\n  .hero{display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important;gap:12px!important;padding:18px 14px!important}\n  .hero-left{width:100%!important;min-width:0!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important;gap:8px!important}\n  .hero-left>div{text-align:center!important;display:flex!important;flex-direction:column!important;align-items:center!important}\n  .hero-left h1,.hero-left p{text-align:center!important;margin:0 auto!important}\n  .hero-context{display:flex!important;flex-direction:column!important;width:100%!important;margin:4px 0 0!important;align-items:center!important;justify-content:center!important;gap:8px!important}\n  .hero-clock{width:100%!important;min-width:0!important;padding:0!important;border:0!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important;gap:3px!important;line-height:1.12!important}\n  .hero-clock strong,.hero-clock span,#hero-clock-time,#hero-clock-date{width:100%!important;max-width:100%!important;text-align:center!important;display:block!important;margin:0 auto!important;line-height:1.12!important}\n  #hero-profile-container{display:flex!important;justify-content:center!important;align-items:center!important;width:100%!important;margin:2px auto 0!important}\n  .hero-pills{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;min-width:0!important;justify-items:center!important;align-items:center!important;gap:8px!important}\n  .hero-pill{width:min(100%,360px)!important;max-width:100%!important;white-space:normal!important;text-align:center!important;justify-content:center!important;align-items:center!important;line-height:1.25!important;margin:0 auto!important}\n  .dashboard-instances>.panel-head{flex-direction:column!important;align-items:stretch!important;gap:10px!important}\n  #global-status,#global-status .badge{width:100%!important;box-sizing:border-box!important;justify-content:center!important;text-align:center!important;white-space:normal!important;line-height:1.3!important}\n  #w-activity,.activity-log{max-height:46vh!important;overflow-y:auto!important}\n  .argus-mobile-history-overflow-item{display:list-item!important}\n  #w-performance,.performance-card,.device-performance{display:grid!important;grid-template-columns:minmax(0,1fr)!important;justify-items:stretch!important;align-items:center!important;text-align:center!important;gap:10px!important}\n  #w-performance *,.performance-card *,.device-performance *{max-width:100%!important;box-sizing:border-box!important}\n  #w-access .panel-body,#w-settings .panel-body,.sos-actions,.panic-actions{overflow:visible!important;max-height:none!important}\n  .sos-actions button,.panic-actions button,[data-action*=\"sos\"],[data-action*=\"panic\"]{min-height:48px!important;touch-action:manipulation!important}\n  input[type=\"file\"]{max-width:100%!important;width:100%!important;color:#fff!important}\n}\n@media(orientation:landscape) and (max-height:560px) and (max-width:950px){\n  .hero{padding:14px!important;gap:10px!important}\n  .hero-context{grid-template-columns:auto minmax(0,1fr)!important;align-items:center!important}\n  .hero-clock{width:auto!important;justify-items:start!important}\n  .hero-pills{justify-content:flex-start!important}\n}\n  .entry { overflow: hidden; border-radius: 28px; -webkit-mask-image: -webkit-radial-gradient(white, black); }\n\n/* Profile Frosted Glass & Jelly Spring Animation */\n@keyframes jellySpringIn{0%{opacity:0;transform:scale(0.7) translateY(-14px)}45%{opacity:1;transform:scale(1.06) translateY(3px)}70%{transform:scale(0.97) translateY(-1px)}88%{transform:scale(1.01) translateY(1px)}100%{opacity:1;transform:scale(1) translateY(0)}}\n@keyframes jellySpringOut{0%{opacity:1;transform:scale(1) translateY(0)}35%{opacity:0.95;transform:scale(1.04) translateY(2px)}100%{opacity:0;transform:scale(0.72) translateY(-12px)}}\n@keyframes argusSensorArmBlink{0%,100%{border-color:rgba(255,159,10,0.85);box-shadow:0 0 10px rgba(255,159,10,0.5),inset 0 0 6px rgba(255,159,10,0.3);transform:scale(1)}50%{border-color:#ffd60a;box-shadow:0 0 20px 4px rgba(255,214,10,0.85),inset 0 0 12px rgba(255,214,10,0.5);transform:scale(1.02)}}\n\n.hero-profile-dropdown.opening{display:flex!important;animation:jellySpringIn 0.38s cubic-bezier(0.34,1.56,0.64,1) both!important}\n.hero-profile-dropdown.closing{display:flex!important;animation:jellySpringOut 0.28s cubic-bezier(0.4,0,0.2,1) both!important;pointer-events:none!important}\n\n\n.console-sensor.sensor-arming-blink,\n.console-sensor.argus-blocking{border-color:#ffd60a!important;background:linear-gradient(135deg,rgba(255,149,0,0.38),rgba(255,96,0,0.22))!important;animation:argusSensorArmBlink 0.9s ease-in-out infinite!important;color:#fff!important}\n\n/* Wide spacious SOS selector */\n.emergency-number-card{transition:all 0.3s ease}\n.sos-configuration #sos-output-chips{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(260px,1fr))!important;gap:12px!important;width:100%!important;max-height:none!important;overflow:visible!important}\n.sos-output-row{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:10px!important;padding:10px 14px!important;background:rgba(255,255,255,0.06)!important;border:1px solid rgba(255,255,255,0.12)!important;border-radius:12px!important;width:100%!important;box-sizing:border-box!important}\n.sos-output-row > .sensor-pill{flex:1!important;min-width:0!important;background:transparent!important;border:none!important;box-shadow:none!important;padding:0!important;font-weight:700!important;font-size:12px!important}\n\n/* Initial Dark Loading Curtain to guarantee zero raw DOM / FOUC flash */\n#argus-initial-curtain {\n  position: fixed;\n  inset: 0;\n  background: #080d1a;\n  z-index: 99998;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.35s ease, visibility 0.35s ease;\n}\n#argus-initial-curtain.curtain-hidden {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n.argus-curtain-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.argus-curtain-icon {\n  font-size: 42px;\n  animation: curtainPulse 1.4s ease-in-out infinite;\n}\n.argus-curtain-bar {\n  width: 120px;\n  height: 4px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  overflow: hidden;\n  position: relative;\n}\n.argus-curtain-fill {\n  width: 40%;\n  height: 100%;\n  background: linear-gradient(90deg, #38bdf8, #818cf8);\n  border-radius: 999px;\n  position: absolute;\n  animation: curtainSlide 1.2s ease-in-out infinite;\n}\n@keyframes curtainPulse {\n  0%, 100% { transform: scale(1); opacity: 0.8; }\n  50% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 16px rgba(56,189,248,0.5)); }\n}\n@keyframes curtainSlide {\n  0% { left: -40%; }\n  100% { left: 100%; }\n}\n\n</style>\n\n<!-- Initial Cold Boot Dark Curtain -->\n<div id=\"argus-initial-curtain\">\n  <div class=\"argus-curtain-spinner\">\n    <div class=\"argus-curtain-icon\">🛡️</div>\n    <div class=\"argus-curtain-bar\"><div class=\"argus-curtain-fill\"></div></div>\n  </div>\n</div>\n\n<!-- Bootstrap UI -->\n<div id=\"bootstrap-overlay\" class=\"argus-bootstrap-layer\" style=\"display:none\"></div>\n\n<!-- Language picker modal -->\n<div class=\"lang-modal-back\" id=\"lang-modal\" aria-hidden=\"true\">\n  <div class=\"lang-modal-card\">\n    <div class=\"lang-modal-title\" id=\"lang-modal-title\">🌐 Select Language</div>\n    <div class=\"lang-grid\" id=\"lang-grid\"></div>\n    <div class=\"lang-close-row\">\n      <button class=\"lang-close-btn\" id=\"lang-modal-close\">✕ Close</button>\n    </div>\n  </div>\n</div>\n\n<!-- SOS Confirm Modal -->\n<div class=\"ios-confirm-backdrop\" id=\"sos-modal\" style=\"display:none\">\n  <div class=\"ios-confirm-card liquid-glass\" id=\"sos-card\" style=\"position:relative;\">\n    <button id=\"sos-close-x\" style=\"position:absolute; top:16px; right:16px; background:rgba(255,255,255,0.1); border:none; color:white; border-radius:50%; width:32px; height:32px; font-weight:800; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:14px; opacity:0.8; padding:0; transition:background 0.2s;\">✕</button>\n    <div class=\"ios-confirm-title\" id=\"sos-title-txt\">Confirmar pánico</div>\n    <div class=\"ios-confirm-text\" id=\"sos-text-txt\">Desliza para disparar la alarma inmediatamente.</div>\n    <div class=\"ios-slider-shell\">\n      <div class=\"ios-slider-track\">\n        <div class=\"ios-slider-label\" id=\"sos-label\">Desliza para activar SOS</div>\n        <div class=\"ios-slider-thumb\" id=\"sos-thumb\">🚨</div>\n      </div>\n    </div>\n    <button class=\"ios-confirm-cancel\" id=\"btn-cancel-sos\" style=\"margin-top:16px\">Cancelar</button>\n  </div>\n</div>\n\n\n<div id=\"argus-canvas-bg\"></div>\n\n\n<div class=\"wrap\">\n  <!-- HERO -->\n  <div class=\"glass hero liquid-glass\">\n    <div class=\"hero-left\">\n      <img src=\"/api/argus_static/argus_logo.png\" alt=\"Argus Logo\" style=\"width: 75px; height: 75px; border-radius: 18px; object-fit: cover; box-shadow: 0 8px 24px rgba(0,0,0,0.25); flex-shrink: 0;\">\n      <div>\n        <h1>Argus Home Hub</h1>\n        <p id=\"p-hero-desc\"></p>\n      </div>\n    </div>\n    <div class=\"hero-context\" aria-live=\"polite\">\n      <div class=\"hero-clock\"><strong id=\"hero-clock-time\">--:--</strong><span id=\"hero-clock-date\"></span></div>\n      <div id=\"hero-profile-container\"></div>\n    </div>\n  </div>\n\n  <!-- TWO-COLUMN LAYOUT -->\n  <div class=\"grid hide-legacy\" id=\"widget-grid\">\n\n    <!-- Instances -->\n    <section class=\"glass panel liquid-glass dashboard-instances\" id=\"w-instances\" style=\"grid-column: 1 / -1;\">\n        <div class=\"panel-head\">\n          <h2 id=\"h-instances\"></h2>\n          <div style=\"display:flex;align-items:center;gap:12px\">\n            <div id=\"global-status\"></div>\n          </div>\n        </div>\n        <div id=\"entries\"></div>\n      </section>\n\n      <!-- Activity log -->\n      <section class=\"glass panel liquid-glass activity-panel\" id=\"w-activity\">\n        <div class=\"panel-head\">\n          <h2 id=\"h-activity-log\">📋 Historial de Actividad</h2>\n          <div class=\"panel-actions\">\n            <button class=\"ghost\" id=\"btn-refresh-history\" aria-label=\"Actualizar Historial\" title=\"Actualizar\">🔄 Actualizar</button>\n            <button class=\"ghost\" id=\"btn-export-forensic\" aria-label=\"Exportar Historial\" title=\"Exportar\">📄 Exportar</button>\n            <button class=\"ghost\" id=\"btn-clear-log\" aria-label=\"Limpiar Historial\" style=\"background:rgba(255,69,58,0.12);color:#ff453a !important\" title=\"Limpiar\">🗑️ Limpiar</button>\n          </div>\n        </div>\n        <div id=\"activity-log\" style=\"display:grid;gap:10px;height:280px;overflow-y:auto;margin-top:10px\"></div>\n      </section>\n\n      <!-- Modes -->\n      <section class=\"glass panel liquid-glass modes-panel\" id=\"w-modes\">\n        <div class=\"panel-head\">\n           <h2 id=\"h-modes\"></h2>\n        </div>\n        <div class=\"tabs\" id=\"mode-tabs\" style=\"margin-bottom:15px\"></div>\n        <div id=\"mode-view\"></div>\n      </section>\n\n      <!-- Users & Master PIN Settings -->\n      <section class=\"glass panel liquid-glass access-panel\" id=\"w-access\">\n        <div class=\"panel-head\">\n          <div>\n            <h2 id=\"h-access-title\">Control de Acceso y Usuarios</h2>\n            <p class=\"access-summary\" id=\"p-access-desc\">PIN desactivado · Sin usuarios adicionales</p>\n          </div>\n        </div>\n\n        <div class=\"access-workspace\" id=\"access-workspace\" style=\"display:contents\">\n          <!-- Unified Informative Widget: SOS signals, notifications & audit logging -->\n          <div class=\"system-info-compact-card glass-subpanel\" style=\"padding:14px 18px;border-radius:16px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);margin-bottom:14px;\">\n            <div style=\"display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:6px;\">\n              <span id=\"system-diagnostics-txt\" style=\"font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.04em;color:rgba(255,255,255,0.85)\">ℹ️ Diagnóstico y Resumen del Sistema</span>\n              <span style=\"font-size:10px;font-weight:700;padding:2px 8px;border-radius:8px;background:rgba(74,222,128,0.15);color:#4ade80;border:1px solid rgba(74,222,128,0.3)\">✓ Operativo</span>\n            </div>\n            <div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;font-size:11px;\">\n              <div style=\"display:flex;align-items:center;gap:8px;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05)\">\n                <span style=\"font-size:16px\">🚨</span>\n                <div><strong style=\"display:block;color:#fff;font-size:11px\">Señales de Auxilio</strong><span style=\"opacity:0.65;font-size:9.5px\">Enlace SOS activo</span></div>\n              </div>\n              <div style=\"display:flex;align-items:center;gap:8px;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05)\">\n                <span style=\"font-size:16px\">🔔</span>\n                <div><strong style=\"display:block;color:#fff;font-size:11px\">Notificaciones</strong><span style=\"opacity:0.65;font-size:9.5px\">Push operativas</span></div>\n              </div>\n              <div style=\"display:flex;align-items:center;gap:8px;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05)\">\n                <span style=\"font-size:16px\">📋</span>\n                <div><strong style=\"display:block;color:#fff;font-size:11px\">Registro en Vivo</strong><span style=\"opacity:0.65;font-size:9.5px\">Auditoría continua</span></div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Users -->\n          <div class=\"access-section\" id=\"access-users-section\">\n            <h3 id=\"h-users\"></h3>\n            <p class=\"small\" id=\"p-admin-only\" style=\"margin-bottom:14px;color:#fb8c00;font-weight:600\"></p>\n            <div id=\"users-list\" style=\"display:grid;gap:12px;margin-bottom:16px\"></div>\n          </div>\n\n          <!-- Notifications -->\n          <div class=\"access-section\" id=\"access-notifications-section\">\n            <h3 id=\"h-notifications\"></h3>\n            <p class=\"small\" id=\"p-notif-desc\" style=\"margin:0 0 12px;opacity:.72\"></p>\n            <div id=\"notif-targets\" style=\"display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px\"></div>\n            <div style=\"display:flex;gap:8px;align-items:center\">\n              <select id=\"notif-select\" class=\"glass-control\" style=\"flex:1;min-width:0\"></select>\n              <button type=\"button\" class=\"ghost\" id=\"btn-add-notif\" style=\"white-space:nowrap\">＋</button>\n            </div>\n            <div class=\"save-row\" style=\"margin-top:12px\">\n              <button class=\"primary\" id=\"btn-save-notif\" style=\"width:100%\"></button>\n            </div>\n            <div id=\"notif-status\" class=\"status\" style=\"margin-top:8px;text-align:center;font-size:12px;font-weight:bold;min-height:18px\"></div>\n          </div>\n\n          <!-- Master PIN -->\n          <div class=\"access-section\" id=\"access-pin-section\">\n            <h3 id=\"h-settings-pin\">Pin de Armado</h3>\n            <div class=\"subsection\">\n              <div id=\"current-pin-display\" style=\"font-size:13px;font-weight:800;color:#ffffff !important;margin-bottom:15px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);padding:8px 14px;border-radius:10px;display:inline-block\"></div>\n              <div class=\"field-group collapsible collapsed\" id=\"group-current-pin\" style=\"margin-bottom: 12px\">\n                 <div style=\"display:flex; justify-content:space-between; align-items:center;\">\n                   <label id=\"l-current-pin-lbl\"></label>\n                   <a href=\"#\" id=\"lnk-forgot-pin\" style=\"font-size:11px; color:var(--accent-color, #ff4081); text-decoration:none; font-weight:bold; margin-bottom:4px; display:none;\"></a>\n                 </div>\n                 <input type=\"password\" id=\"current-pin\" inputmode=\"numeric\" pattern=\"[0-9]*\" class=\"glass-control\">\n              </div>\n              <p class=\"small\" id=\"p-pin-remove-hint\" style=\"margin:0 0 10px 0; color:var(--primary-color); font-weight:700\">Para quitar el PIN: Introduce el actual y deja los campos de abajo vacíos.</p>\n              <div style=\"display:grid;gap:10px\">\n                <div class=\"field-group\"><label id=\"l-new-pin\"></label><input type=\"password\" id=\"new-pin-1\" inputmode=\"numeric\" pattern=\"[0-9]*\" class=\"glass-control\"></div>\n                <div class=\"field-group\"><label id=\"l-confirm-pin\"></label><input type=\"password\" id=\"new-pin-2\" inputmode=\"numeric\" pattern=\"[0-9]*\" class=\"glass-control\"></div>\n              </div>\n              <div class=\"save-row\" style=\"margin-top:15px\">\n                <button class=\"primary\" id=\"btn-save-pin\" style=\"width:100%\"></button>\n              </div>\n              <div id=\"pin-status\" class=\"status\" style=\"margin-top:8px; text-align:center; font-size:12px; font-weight:bold; min-height:18px;\"></div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <!-- Automations -->\n      <section class=\"glass panel liquid-glass automations-panel\" id=\"w-automations\">\n        <h2 id=\"h-automations\"></h2>\n        <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:16px\">\n          <span class=\"small\" id=\"p-linked-rules\" style=\"opacity:0.7\"></span>\n          <button class=\"primary\" id=\"btn-new-auto\" style=\"padding:6px 12px;font-size:11px\"></button>\n        </div>\n        <div id=\"auto-view\"></div>\n      </section>\n\n      <!-- Backup & Restore -->\n      <section class=\"glass panel liquid-glass backup-panel\" id=\"w-backup\">\n        <h2 id=\"h-backup-title\">Respaldo y Restauración</h2>\n        <p class=\"small\" id=\"p-backup-desc\" style=\"margin-bottom:12px;opacity:0.7\">Guarda una copia de seguridad de tus ajustes o restaura una anterior.</p>\n        <div style=\"display:flex;gap:10px;align-items:center;\">\n          <button class=\"ghost\" id=\"btn-export-config\" style=\"flex:1\">📤 Descargar</button>\n          <div style=\"position:relative; flex:1\">\n            <button class=\"ghost\" style=\"width:100%\" id=\"btn-import-trigger\">📥 Restaurar</button>\n            <input type=\"file\" id=\"import-config-file\" style=\"display:none\" accept=\".json,.argus,application/json\">\n          </div>\n          <button class=\"ghost danger\" id=\"btn-reset-config\" style=\"flex:1\">⚠️ Restablecer</button>\n          <button class=\"primary\" id=\"btn-undo-reset\" style=\"flex:1; display:none;\">↩️ Deshacer</button>\n        </div>\n      </section>\n\n      <!-- GitHub Opt-In -->\n      <section class=\"glass panel liquid-glass github-panel\" id=\"w-github\">\n        <div class=\"github-header\">\n          <h3 id=\"github-title\" style=\"margin:0; font-size:14px; font-weight:700\"></h3>\n          <p id=\"github-desc\" style=\"margin:4px 0 0; font-size:12px; opacity:0.75\"></p>\n        </div>\n        <div class=\"support-actions-grid\">\n          <a id=\"github-action\" class=\"support-link-btn star\" href=\"https://github.com/Chrisalvir1/Argus\" target=\"_blank\" rel=\"noopener noreferrer\">⭐ GitHub</a>\n          <a id=\"paypal-action\" class=\"support-link-btn paypal\" href=\"https://paypal.me/CEstradaAlvir\" target=\"_blank\" rel=\"noopener noreferrer\">☕ PayPal</a>\n          <a id=\"email-action\" class=\"support-link-btn email\" href=\"mailto:chrisalvir01@gmail.com\">✉️ Sugerencias</a>\n        </div>\n      </section>\n\n  </div> <!-- /grid -->\n</div>\n\n<!-- Selector modal (dual-panel) -->\n<div class=\"modal-back\" id=\"selector-modal\" aria-hidden=\"true\">\n  <div class=\"modal\">\n    <div class=\"modal-head\">\n      <h3 id=\"selector-title\">Seleccionar</h3>\n      <button class=\"ghost\" id=\"selector-close\"></button>\n    </div>\n    <div class=\"modal-body\" style=\"overflow:hidden;display:flex;flex-direction:column;gap:10px\">\n      <div class=\"sel-grid\">\n        <!-- LEFT: lista disponible con búsqueda y acciones rápidas -->\n        <div class=\"sel-panel\">\n          <div class=\"subsection-title\" id=\"l-available\">Disponibles</div>\n          <div class=\"search-wrap\" style=\"margin:0\"><input id=\"selector-search\" type=\"search\" placeholder=\"Buscar...\"></div>\n          <div class=\"sel-actions\">\n            <button class=\"ghost\" id=\"selector-select-all\" style=\"padding:5px 10px;font-size:12px\">☑ Todos</button>\n            <button class=\"ghost\" id=\"selector-deselect-all\" style=\"padding:5px 10px;font-size:12px\">☐ Ninguno</button>\n          </div>\n          <div class=\"sel-panel-inner\" id=\"selector-list\"></div>\n        </div>\n        <!-- RIGHT: panel de seleccionados -->\n        <div class=\"sel-panel\">\n          <div class=\"subsection-title\" id=\"l-selected-lbl\">Seleccionados</div>\n          <div class=\"small\" id=\"selector-count\" style=\"margin-bottom:4px\">0 seleccionados</div>\n          <div class=\"sel-panel-inner\" id=\"selector-selected\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <div style=\"display:flex;gap:10px;width:100%;justify-content:flex-end\">\n        <button class=\"ghost\" id=\"selector-clear\"></button>\n        <button class=\"primary\" id=\"selector-accept\"></button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Home name edit modal -->\n<div class=\"modal-back\" id=\"home-name-modal\" aria-hidden=\"true\">\n  <div class=\"modal\" style=\"width:min(400px,96vw)\">\n    <div class=\"modal-head\">\n      <h3 id=\"home-name-modal-h3\">🏡 Nombre del Hogar</h3>\n      <button class=\"ghost\" id=\"home-name-modal-close\">✕</button>\n    </div>\n    <div style=\"display:grid;gap:14px;padding:4px 0\">\n      <p class=\"small\" id=\"home-name-modal-desc\" style=\"margin:0;opacity:.7\">This name appears in the instances panel and in full screen.</p>\n      <div class=\"field-group\">\n        <label id=\"l-home-name-modal-label\">Home name</label>\n        <input type=\"text\" id=\"home-name-input\" placeholder=\"Mi Casa\" maxlength=\"60\" autocomplete=\"off\" class=\"glass-control\">\n      </div>\n      <span class=\"status\" id=\"home-name-status\" style=\"text-align:center\"></span>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"ghost\" id=\"home-name-cancel\">Cancelar</button>\n      <button class=\"primary\" id=\"home-name-save\">Guardar</button>\n    </div>\n  </div>\n</div>\n\n<!-- PIN modal -->\n<div class=\"modal-back pm\" id=\"pin-modal\" aria-hidden=\"true\">\n  <div class=\"modal\">\n    <div class=\"modal-head\">\n      <h3 id=\"l-introduce-pin\">🔒</h3>\n      <button class=\"ghost\" id=\"pin-close\" style=\"background:transparent; border:none; color:inherit; font-size:20px; cursor:pointer; padding:4px 8px;\">✕</button>\n    </div>\n    <div style=\"display:grid;gap:10px;width:100%\">\n      <p id=\"l-pin-modal-desc\" class=\"small\" style=\"text-align:center;margin:0;opacity:0.75\"></p>\n      <input id=\"pin-input\" class=\"pin-input\" type=\"password\" inputmode=\"numeric\" pattern=\"[0-9]*\" placeholder=\"••••\" autocomplete=\"off\" maxlength=\"8\" readonly>\n      <div class=\"pin-grid\" id=\"pin-pad\">\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"1\">1</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"2\">2</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"3\">3</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"4\">4</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"5\">5</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"6\">6</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"7\">7</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"8\">8</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"9\">9</button>\n        <button class=\"pin-btn-round action-key delete-key\" type=\"button\" id=\"pin-backspace\">Borrar</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"0\">0</button>\n        <button class=\"pin-btn-round action-key enter-key\" type=\"button\" id=\"pin-confirm\">Enter</button>\n      </div>\n      <div id=\"pin-error\" class=\"pin-error\"></div>\n      <div style=\"text-align:center; margin-top: 5px;\">\n        <a href=\"#\" id=\"pin-forgot-link\" style=\"font-size:12px; color:var(--accent-color, #ff4081); text-decoration:none; font-weight:700; display:none;\"></a>\n      </div>\n    </div>\n    <button id=\"pin-cancel\" style=\"display:none\"></button>\n  </div>\n</div>\n\n<!-- History Export modal -->\n<div class=\"modal-back pm\" id=\"history-export-modal\" aria-hidden=\"true\">\n  <div class=\"modal\" style=\"max-width: 440px;\">\n    <div class=\"modal-head\">\n      <h3 id=\"h-history-export-title\">📄 Exportar Historial</h3>\n      <button class=\"ghost\" id=\"history-export-close\" style=\"background:transparent; border:none; color:inherit; font-size:20px; cursor:pointer; padding:4px 8px;\">✕</button>\n    </div>\n    <div style=\"display:grid;gap:14px;padding:6px 0\">\n      <p class=\"small\" style=\"margin:0;opacity:.75\">Selecciona el rango de fechas para exportar o imprimir el reporte de auditoría.</p>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:10px;\">\n        <div class=\"field-group\">\n          <label style=\"font-size:11px;font-weight:700;opacity:0.8;\">📅 Desde</label>\n          <input type=\"date\" id=\"export-history-from\" class=\"glass-control\" style=\"width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;color:#fff;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12)\">\n        </div>\n        <div class=\"field-group\">\n          <label style=\"font-size:11px;font-weight:700;opacity:0.8;\">📅 Hasta</label>\n          <input type=\"date\" id=\"export-history-to\" class=\"glass-control\" style=\"width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;color:#fff;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12)\">\n        </div>\n      </div>\n      <div style=\"display:flex;flex-direction:column;gap:8px;margin-top:6px;\">\n        <button class=\"primary\" id=\"btn-do-print-pdf\" style=\"height:44px;font-size:13px;font-weight:800;cursor:pointer;border-radius:12px;box-shadow:0 6px 18px rgba(0,122,255,0.3)\">\n          🖨️ Imprimir / Guardar en PDF\n        </button>\n        <button class=\"glass-control\" id=\"btn-do-download-txt\" style=\"height:40px;font-size:12px;font-weight:700;cursor:pointer;border-radius:12px;background:rgba(255,255,255,0.05);color:#fff;border:1px solid rgba(255,255,255,0.15)\">\n          📑 Descargar Reporte (.txt)\n        </button>\n        <button class=\"ghost\" id=\"btn-do-download-json\" style=\"height:36px;font-size:11px;cursor:pointer;opacity:0.75\">\n          💾 Descargar JSON sin procesar\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n";
var f = class extends HTMLElement {
	constructor() {
		super(), this._showSosConfirm = !1, this._sosEntryIdx = null, this._sosBusy = !1, this._sosSliding = !1, this._sosStartX = 0, this._sosOffsetX = 0, this._sosConfirmed = !1, this.attachShadow({ mode: "open" }).appendChild(d.content.cloneNode(!0)), this._wsId = 1, this._socket = null, this._dashboard = null, this._ui = null, this._available = [], this._mode = "home", this._modeEntryId = null, this._selected = [], this._selectorTarget = null, this._hass = null, this._prevStates = {}, this._notifTargets = [], this._users = [], this._haUsersList = [], this._isAdmin = !0, this._pinCallback = null, this._homeName = "", this._backgroundMode = "none", this._backgroundImages = [], this._temperatureSource = "auto", this._weatherSource = "auto", this._pending = {}, this._lastClockUpdate = 0, this._manualLang = null, this._fullscreenIdx = -1, this._cachedBgUrl = null, this._cachedBgBrightness = void 0, this._hubBgMode = "default", this._hubBgFile = "", this._hubBgSound = !1, this._clockFormat = "auto", this._profileSelectedThisMount = !1, this._welcomeShownThisMount = !1, this._panicOutputs = void 0, this._initPromise = null, this._staticBound = !1, this._postLoadBound = !1;
	}
	_getTimeZone() {
		return this._hass?.config?.time_zone || void 0;
	}
	setConfig(e) {
		this._cardConfig = e, e?.compact ? (this.setAttribute("compact", ""), this.classList.add("argus-compact")) : (this.removeAttribute("compact"), this.classList.remove("argus-compact"));
	}
	_getClockFormat() {
		let e = this._ui?.personalization?.clock_format ?? this._ui?.clock_format ?? this._dashboard?.clock_format ?? "auto";
		return [
			"auto",
			"12h",
			"24h"
		].includes(e) ? e : "auto";
	}
	_formatTime(e) {
		if (!e) return "";
		let t = e instanceof Date ? e : new Date(e);
		if (isNaN(t.getTime())) return "";
		let n = this._getClockFormat(), r = String(this._hass?.locale?.time_format || "").toLowerCase();
		if (n === "12h" || n === "auto" && (r.includes("12") || r.includes("am"))) {
			let e = t.getHours(), n = String(t.getMinutes()).padStart(2, "0"), r = e >= 12 ? "PM" : "AM";
			return e %= 12, e ||= 12, `${e}:${n} ${r}`;
		}
		return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
	}
	_formatDateTime(e) {
		if (!e) return "";
		let t = e instanceof Date ? e : new Date(e);
		if (isNaN(t.getTime())) return "";
		let n = this._getClockFormat(), r = String(this._hass?.locale?.time_format || "").toLowerCase(), i = n === "12h" || n === "auto" && (r.includes("12") || r.includes("am")), a = String(t.getDate()).padStart(2, "0"), o = String(t.getMonth() + 1).padStart(2, "0"), s = t.getFullYear();
		if (i) {
			let e = t.getHours(), n = String(t.getMinutes()).padStart(2, "0"), r = e >= 12 ? "PM" : "AM";
			return e %= 12, e ||= 12, `${a}/${o}/${s}, ${e}:${n} ${r}`;
		}
		return `${a}/${o}/${s}, ${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
	}
	_updateHeroClock() {
		if (typeof this._updateLiveClocks == "function") {
			this._updateLiveClocks();
			return;
		}
		let e = this.shadowRoot;
		if (!e) return;
		let t = /* @__PURE__ */ new Date(), n = typeof this._formatTime == "function" ? this._formatTime(t) : t.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}), r = t.toLocaleDateString(typeof this._getLocale == "function" ? this._getLocale() : void 0, {
			weekday: "short",
			month: "short",
			day: "numeric"
		}), i = e.getElementById("hero-clock-time"), a = e.getElementById("hero-clock-date");
		i && i.textContent !== n && (i.textContent = n), a && a.textContent !== r && (a.textContent = r);
	}
	_updateProfileBadge() {
		let e = this.shadowRoot.getElementById("active-profile-pill"), t = this.shadowRoot.getElementById("profile-avatar"), n = this.shadowRoot.getElementById("profile-name"), r = this.shadowRoot.getElementById("profile-role");
		if (!e || !t || !n || !r) return;
		let i = this._currentProfile;
		if (!i) {
			e.style.display = "none";
			return;
		}
		e.style.display = "flex";
		let a = i.name || "User";
		i.picture ? t.innerHTML = `<img src="${this._escapeHtml(i.picture)}" 
        style="width:100%;height:100%;border-radius:50%;object-fit:cover;" 
        alt="${this._escapeHtml(a)}" />` : t.textContent = a.slice(0, 2).toUpperCase(), n.textContent = a;
		let o = i.role === "admin" ? "role_argus_admin" : "role_argus_user";
		r.textContent = this._t(o);
	}
	_getBrightness(e) {
		return new Promise((t) => {
			if (!e) {
				t(128);
				return;
			}
			let n = new Image();
			n.crossOrigin = "Anonymous", n.onload = () => {
				try {
					let e = document.createElement("canvas");
					e.width = 10, e.height = 10;
					let r = e.getContext("2d");
					if (!r) {
						t(128);
						return;
					}
					r.drawImage(n, 0, 0, 10, 10);
					let i = r.getImageData(0, 0, 10, 10).data, a = 0, o = 0, s = 0, c = 0;
					for (let e = 0; e < i.length; e += 4) a += i[e], o += i[e + 1], s += i[e + 2], c++;
					t((.299 * a + .587 * o + .114 * s) / c);
				} catch {
					t(128);
				}
			}, n.onerror = () => {
				t(128);
			}, n.src = e;
		});
	}
	async _updateTheme() {
		if (!this._hass) return;
		let e = !1, t = this._hubBgMode || "default";
		if (t === "default") e = !0;
		else if (t === "image") {
			let t = this._hubBgFile || "";
			if (t) {
				if (this._cachedBgUrl === t && this._cachedBgBrightness !== void 0) e = this._cachedBgBrightness < 135;
				else {
					let n = await this._getBrightness(t);
					this._cachedBgUrl = t, this._cachedBgBrightness = n, e = n < 135;
				}
			} else e = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
		} else e = !this._hass.themes || this._hass.themes.darkMode === !0;
		this.setAttribute("argus-dark-mode", e ? "true" : "false");
	}
	set hass(e) {
		let t = this._hass;
		if (this._hass = e, !(this.hasAttribute("compact") || this.classList.contains("argus-compact") || this._cardConfig?.compact) && (this._loadState === "profile_selection" || this._loadState === "legacy_claim")) return;
		if (!this._dashboard?.entries?.length) {
			this._ensureInitialized();
			return;
		}
		t?.language !== e.language && !this._manualLang && this._refreshLocalizedUi();
		let n = this._dashboard.entries.some((n) => n.entity_id && t?.states[n.entity_id]?.state !== e.states[n.entity_id]?.state), r = this._temperatureSource === "auto" ? null : this._temperatureSource, i = r && t?.states[r]?.state !== e.states[r]?.state, a = this._weatherSource === "auto" ? Object.values(e.states).find((e) => e.entity_id.startsWith("weather."))?.entity_id : this._weatherSource, o = a && (t?.states[a]?.state !== e.states[a]?.state || t?.states[a]?.attributes?.temperature !== e.states[a]?.attributes?.temperature || t?.states[a]?.attributes?.temperature_unit !== e.states[a]?.attributes?.temperature_unit), s = /* @__PURE__ */ new Set(), c = (e) => {
			e && typeof e == "object" && (Array.isArray(e.sensors) && e.sensors.forEach((e) => s.add(e)), Object.values(e).forEach((e) => {
				e && typeof e == "object" && c(e);
			}));
		};
		c(this._ui?.modes);
		let l = !!t && [...s].some((n) => {
			let r = t.states[n], i = e.states[n];
			return r?.state !== i?.state || r?.attributes?.battery_level !== i?.attributes?.battery_level || r?.attributes?.battery_percentage !== i?.attributes?.battery_percentage;
		}), u = !!t && Object.values(e.states).some((e) => {
			let n = e.entity_id || "", r = e.attributes?.device_class === "battery" || /_battery$/i.test(n), i = t.states[n];
			return r && i?.state !== e.state;
		});
		(n || l || u || i || o || !t) && (this._renderEntries(), this._renderActivityLog(), t || (this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")), this._renderAutomations(), this._renderNotifications(), this._activeAccessSection === "users" && this._renderUsers()));
	}
	get hass() {
		return this._hass;
	}
	_t(e) {
		return u[this._getCurrentLangCode()]?.[e] || u.en[e] || e;
	}
	_format(e, t = {}) {
		return this._t(e).replace(/\{(\w+)\}/g, (e, n) => String(t[n] ?? `{${n}}`));
	}
	_escapeHtml(e) {
		return String(e ?? "").replace(/[&<>"']/g, (e) => ({
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		})[e]);
	}
	_getCurrentLangCode() {
		let e = this._manualLang;
		if (e === "auto" && (e = null), !e) try {
			let t = localStorage.getItem("argus_lang");
			t && t !== "auto" && (e = t);
		} catch {}
		if (!e) {
			let t = this._ui?.manual_lang || this._ui?.language;
			t && t !== "auto" && (e = t);
		}
		if (e ||= this._hass?.language || "es", e = String(e || "es").trim(), u[e]) return e;
		let t = e.split(/[-_]/)[0].toLowerCase();
		return u[t] ? t : t.startsWith("es") ? "es" : "en";
	}
	_getLocale() {
		let e = this._manualLang && this._manualLang !== "auto" ? this._manualLang : null, t = (() => {
			try {
				let e = localStorage.getItem("argus_lang");
				return e && e !== "auto" ? e : null;
			} catch {
				return null;
			}
		})(), n = this._ui?.manual_lang && this._ui.manual_lang !== "auto" ? this._ui.manual_lang : this._ui?.language && this._ui.language !== "auto" ? this._ui.language : null, r = e || t || n;
		return r && r !== "auto" ? {
			es: "es-ES",
			en: "en-US"
		}[r] || r : this._hass?.language || "es-ES";
	}
	_openLangModal() {
		let e = this.shadowRoot.getElementById("lang-modal");
		if (!e) return;
		let t = this.shadowRoot.getElementById("lang-grid"), n = this._manualLang || "auto";
		t && (t.innerHTML = l.map((e) => `
        <button class="lang-option${e.code === n ? " active" : ""}" data-lang="${e.code}">
          <span class="lang-flag">${e.flag}</span>
          <span>${e.code === "auto" ? this._t("use_ha_language") : e.label}</span>
        </button>`).join(""), t.querySelectorAll(".lang-option").forEach((e) => {
			e.addEventListener("click", () => {
				this._setLanguage(e.dataset.lang), this._closeLangModal();
			});
		}));
		let r = this.shadowRoot.getElementById("lang-modal-title");
		r && (r.textContent = `\ud83c\udf10 ${this._t("lang_select_title")}`);
		let i = e.querySelector(".lang-modal-card");
		i && (i.style.animation = "none", i.offsetWidth, i.style.animation = ""), e.classList.add("open");
	}
	_closeLangModal() {
		this.shadowRoot.getElementById("lang-modal")?.classList.remove("open");
	}
	_setLanguage(e) {
		let t = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
		if (e === "auto") {
			this._manualLang = null;
			try {
				localStorage.setItem("argus_lang", "auto");
			} catch {}
			this._ui && (this._ui.language = "auto", this._ui.manual_lang = "auto"), this._send("argus/save_ui", {
				language: "auto",
				manual_lang: "auto",
				...t ? { entry_id: t } : {}
			}).catch(console.error);
		} else {
			if (!u[e]) return;
			this._manualLang = e;
			try {
				localStorage.setItem("argus_lang", e);
			} catch {}
			this._ui && (this._ui.language = e, this._ui.manual_lang = e), this._send("argus/save_ui", {
				language: e,
				manual_lang: e,
				...t ? { entry_id: t } : {}
			}).catch(console.error);
		}
		this._instanceSignatures && this._instanceSignatures.clear(), this._refreshLocalizedUi();
	}
	_refreshLocalizedUi() {
		window._argusT = (e) => this._t(e), window._argusDashboardReadyBtn = this._t("edit_dashboard_done") || "✓ Listo", window._argusDashboardEditBtn = "✥ " + (this._t("edit_dashboard") || "Editar tablero"), window._argusDashboardResetBtn = this._t("reset_dashboard") || "Restablecer diseño", this._applyTranslations(), this._updateHeroProfileDisplay(), this._updateHeroClock?.(), this._instanceSignatures && this._instanceSignatures.clear(), this._renderEntries(), this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")), this._renderActivityLog(), this._renderAutomations(), this._renderNotifications(), this._renderUsers(), this._renderSosOutputs(), typeof this._renderHealthCenter == "function" && this._renderHealthCenter(), typeof this._renderStateSchedule == "function" && this._renderStateSchedule(), this._configureEmergencyCall(), this._updateHomeNameDisplay(), this._renderUploadedFiles();
		let e = this._manualLang || "auto", t = this.shadowRoot.getElementById("dropdown-lang-select");
		t && t.value !== e && (t.value = e);
		try {
			window.dispatchEvent(new CustomEvent("argus-lang-changed"));
		} catch {}
	}
	_applyTranslations() {
		let e = (e) => this._t(e), t = (e) => this.shadowRoot.getElementById(e), n = (e, n) => {
			let r = t(e);
			r && (r.textContent = n);
		}, r = this._manualLang || "auto", i = l.find((e) => e.code === r) || l[1], a = t("lang-pill-flag"), o = t("lang-pill-label");
		a && (a.textContent = i.flag), o && (o.textContent = r === "auto" ? this._t("use_ha_language") : i.label), n("p-hero-desc", e("hero_desc")), n("h-instances", e("instances")), n("h-modes", e("modes")), n("h-automations", e("automations")), n("p-linked-rules", e("linked_rules")), n("h-settings", e("settings")), n("h-activity-log", e("activity_log")), n("btn-refresh-history", e("history_refresh")), n("t-change-pin", e("change_pin")), n("l-current-pin-lbl", e("current_pin")), n("lnk-forgot-pin", e("forgot_pin")), n("pin-forgot-link", e("forgot_pin")), n("btn-save-pin", e("update_pin")), n("l-new-pin", e("new_pin")), n("l-confirm-pin", e("confirm_pin")), n("h-notifications", e("notifications_title")), n("p-notif-desc", e("notif_desc")), n("h-users", e("users_title")), n("p-admin-only", e("admin_only")), n("t-add-user", e("add_user")), n("l-username", e("username")), n("l-user-pin", e("user_pin")), n("s-is-admin", e("is_admin")), n("l-user-exp-type", e("user_exp_type")), n("l-user-exp-date", e("user_exp_date"));
		let s = t("opt-exp-indefinite");
		s && (s.textContent = e("exp_indefinite"));
		let c = t("opt-exp-temporary");
		c && (c.textContent = e("exp_temporary")), n("selector-select-all", e("select_all")), n("selector-deselect-all", e("deselect_all")), n("l-available", e("available")), n("l-selected-lbl", e("selected_lbl")), n("l-introduce-pin", `🔒 ${e("introduce_pin")}`), n("l-pin-modal-desc", e("pin_modal_desc")), ((n) => {
			let r = t(n);
			r && (r.placeholder = e("search_placeholder"));
		})("selector-search");
		let u = (n, r) => {
			let i = t(n);
			i && (i.textContent = e(r));
		};
		u("btn-new-auto", "create_ha"), u("btn-save-pin", "update_pin"), u("btn-save-notif", "save_notif"), u("btn-save-user", "save_user"), u("selector-close", "close"), u("selector-clear", "clear"), u("selector-accept", "accept"), u("pin-cancel", "cancel"), u("pin-confirm", "confirm"), u("btn-cancel-sos", "cancel"), u("sos-call-btn", "sos_call"), u("home-name-cancel", "cancel"), u("home-name-save", "save_btn");
		let d = t("lang-modal-close");
		d && (d.textContent = `✕ ${e("close")}`), n("lbl-home-name-hdr", e("home_name_lbl")), n("lbl-panel-bg-title", e("bg_panel_title")), n("lbl-hub-bg-title", e("bg_hub_title")), n("s-panel-bg-sound-lbl", e("bg_sound_opt")), n("s-hub-bg-sound-lbl", e("bg_sound_opt")), n("lbl-mas-ajustes", "🎨 " + e("lbl_aesthetic_custom")), n("edit-widgets-label", this._widgetEditing ? "✓ " + e("done") : `⚙️ ${this._t("edit_widgets") || "Config. Widgets"}`), n("lbl-temperature-source", e("temp_displayed")), n("lbl-panel-bg-upload", e("lbl_load_file")), n("lbl-hub-bg-upload", e("lbl_load_file")), n("lbl-uploaded-files-title", e("lbl_uploaded_files")), n("btn-edit-home-name-standalone", e("edit_btn")), n("btn-save-personalization-standalone", e("save_btn")), n("btn-refresh-history", e("history_refresh")), n("btn-export-forensic", "📄 " + (e("export_action") || "Exportar")), n("btn-clear-log", e("clear_log_btn")), n("h-history-export-title", "📄 " + (e("export_history_title") || "Exportar Historial")), n("h-access-title", e("access_title")), n("p-access-desc", e("access_desc")), n("btn-access-users", `👥 ${e("users_title").replace(/^👥\s*/, "").replace(/\s(?:y|&|e)\s.*$/i, "")}`), n("btn-access-pin", `🔐 ${e("pin_master_title")}`), n("h-settings-pin", e("pin_master_title")), n("p-pin-remove-hint", e("pin_remove_hint")), n("h-backup-title", e("backup_title")), n("p-backup-desc", e("backup_desc")), n("btn-export-config", e("export_btn")), n("btn-reset-config", e("reset_btn")), n("btn-undo-reset", e("undo_reset_btn")), n("btn-import-trigger", e("import_btn")), n("github-title", e("github_title")), n("github-desc", e("github_desc")), n("github-action", `⭐ ${e("github_action")}`), n("sos-title-txt", e("sos_confirm_title")), n("sos-text-txt", e("sos_confirm_text")), n("sos-label", e("sos_slide")), n("system-diagnostics-txt", "ℹ️ " + (e("system_diagnostics") || "Diagnóstico y Resumen del Sistema")), n("home-name-modal-h3", e("home_name_modal_title")), n("p-home-name-modal-desc", e("home_name_modal_desc")), n("l-home-name-modal-label", e("home_name_label")), n("lang-modal-title", `🌐 ${e("lang_select_title")}`), n("sos-call-help", e("sos_call_help")), n("lbl-emergency-number", e("emergency_number_label")), n("emergency-number-help", e("emergency_help")), n("lbl-sos-actions", e("sos_actions")), n("btn-select-sos-outputs", e("sos_select_outputs")), n("sos-output-help", e("sos_outputs_help")), n("home-name-modal-desc", e("home_name_modal_desc")), n("pin-backspace", e("delete"));
		let f = t("bg-mode-select-standalone");
		if (f) {
			let t = f.value;
			f.innerHTML = `
        <option value="none">${e("bg_panel_none")}</option>
      `, t && (f.value = t), this._renderEntries();
		}
		let p = t("hub-bg-mode-select");
		if (p) {
			let t = p.value;
			p.innerHTML = `
        <option value="default">${e("bg_hub_default")}</option>
        <option value="image">${e("bg_image_opt")}</option>
      `, t && (p.value = t);
		}
		this._populateTemperatureSources();
		let m = t("current-pin-display");
		if (m) {
			let t = this._dashboard?.entries?.[0]?.pin_configured;
			if (t != null) m.textContent = e(t ? "pin_active_yes" : "pin_active_no");
			else {
				let t = m.textContent || "";
				m.textContent = t.includes("Sí") || t.includes("Yes") || t.includes("Sim") || t.includes("Sì") || t.includes("是") || t.includes("Да") || t.includes("Ja") || t.includes("Oui") || t.includes("Activo") || t.includes("Active") ? e("pin_active_yes") : e("pin_active_no");
			}
		}
		let h = t("home-name-input");
		h && (h.placeholder = e("home_name_placeholder"));
		let g = t("panel-bg-url-input");
		g && (g.placeholder = e("url_placeholder"));
		let _ = t("hub-bg-url-input");
		_ && (_.placeholder = e("url_placeholder"));
		let v = this.shadowRoot;
		if (v) {
			let e = (e) => {
				let t = String(this._t(e) || "").trim(), n = t.indexOf(" ");
				return n > 0 && n <= 3 ? t.substring(n + 1).trim() : t;
			};
			v.querySelectorAll(".entry").forEach((t) => {
				let n = t.querySelector(".btn-home span");
				n && (n.textContent = e("btn_home"));
				let r = t.querySelector(".btn-away span");
				r && (r.textContent = e("btn_away"));
				let i = t.querySelector(".btn-night span");
				i && (i.textContent = e("btn_night"));
				let a = t.querySelector(".btn-disarm span, .argus-disarm-btn b");
				a && (a.textContent = e("btn_disarmed"));
				let o = t.querySelector(".btn-sos span");
				o && (o.textContent = t.querySelector(".btn-sos[data-action=\"stop-sos\"]") ? this._t("sos_stop") : this._t("btn_sos"));
			});
			let t = v.getElementById("global-status");
			t && (t.innerHTML = "");
		}
		this._syncAccessSummary();
	}
	_syncAccessSummary() {
		let e = this.shadowRoot?.getElementById("p-access-desc");
		if (!e) return;
		if (!this._dashboard) {
			e.textContent = this._t("access_desc");
			return;
		}
		let t = this._dashboard.entries?.[0]?.pin_configured === !0, n = this._t(t ? "pin_active_yes" : "pin_active_no"), r = Array.isArray(this._users) ? this._users.filter((e) => e?.enabled !== !1).length : 0;
		e.textContent = `${n} · ${r > 0 ? `${this._t("users_title")}: ${r}` : this._t("no_users")}`;
	}
	_toggleAccessSection(e) {}
	connectedCallback() {
		try {
			this._manualLang = localStorage.getItem("argus_lang") || null;
		} catch {}
		this._ensureInitialized(), this._initContrastMode(), this._initGestureMode(), this._startClock(), this._fullscreenIdx >= 0 && !this._kioskLocked && (document.fullscreenElement || document.webkitFullscreenElement || (this._fullscreenIdx = -1, this.classList.remove("fullscreen-active"))), this._onFsChange = () => {
			!(document.fullscreenElement || document.webkitFullscreenElement) && !this._kioskLocked && this.classList.contains("fullscreen-active") && this._exitFullscreenView();
		}, document.addEventListener("fullscreenchange", this._onFsChange), document.addEventListener("webkitfullscreenchange", this._onFsChange), this._onEscape = (e) => {
			e.key === "Escape" && this.classList.contains("fullscreen-active") && this._exitFullscreenView();
		}, document.addEventListener("keydown", this._onEscape), this._shadowClickDelegated || (this._shadowClickDelegated = !0, this.shadowRoot?.addEventListener("click", async (e) => {
			let t = e.target;
			if (!t || typeof t.closest != "function") return;
			let n = t.closest("#btn-refresh-history, .btn-refresh-history");
			if (n) {
				e.preventDefault(), e.stopPropagation(), n.style.opacity = "0.5";
				let t = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
				await this._loadActivityTimeline(t), this._renderActivityLog(), n.style.opacity = "1", n.textContent = "✓ " + (this._t("history_refresh") || "Actualizado"), setTimeout(() => {
					n && (n.textContent = "🔄 " + (this._t("history_refresh") || "Actualizar").replace(/^🔄\s*/, ""));
				}, 1500);
				return;
			}
			if (t.closest("#btn-export-forensic, .btn-export-forensic")) {
				e.preventDefault(), e.stopPropagation(), this._openHistoryExportModal();
				return;
			}
			if (t.closest("#btn-clear-log, .btn-clear-log")) {
				e.preventDefault(), e.stopPropagation(), this._clearHistory();
				return;
			}
			if (t.closest("#history-export-close")) {
				e.preventDefault(), this._closeHistoryExportModal();
				return;
			}
			if (t.closest("#btn-do-print-pdf")) {
				e.preventDefault(), this._exportHistoryPrintPdf();
				return;
			}
			if (t.closest("#btn-do-download-txt")) {
				e.preventDefault(), this._exportHistoryText();
				return;
			}
			if (t.closest("#btn-do-download-json")) {
				e.preventDefault(), this._exportForensicTimeline();
				return;
			}
			if (t.closest(".exit-kiosk-btn, button[data-exit-fullscreen]")) {
				e.preventDefault(), e.stopPropagation(), this._exitFullscreenView();
				return;
			}
		}));
	}
	disconnectedCallback() {
		this._clockInterval && clearInterval(this._clockInterval), this._initRetryTimer && clearTimeout(this._initRetryTimer), this._socket &&= (this._socket.close(), null), this._dashboard = null, this._currentProfile = null, this._profileSelectedThisMount = !1, this._welcomeShownThisMount = !1, this._loadState = null, this._initPromise = null, this._onFsChange && (document.removeEventListener("fullscreenchange", this._onFsChange), document.removeEventListener("webkitfullscreenchange", this._onFsChange)), this._onEscape && document.removeEventListener("keydown", this._onEscape), this.shadowRoot?.querySelectorAll(".wx-webgl").forEach((e) => e._argusWebglStop?.());
	}
	_startClock() {
		this._clockInterval && clearInterval(this._clockInterval), this._clockInterval = setInterval(() => {
			let e = /* @__PURE__ */ new Date();
			if (this._dashboard) {
				let t = this.shadowRoot.getElementById("hero-clock-time");
				if (t) {
					let n = this._formatTime(e);
					t.textContent !== n && (t.textContent = n);
				}
				let n = this.shadowRoot.querySelector(".console-hud-time");
				if (n) {
					let t = this._formatTime(e);
					n.textContent !== t && (n.textContent = t);
				}
			}
		}, 1e3);
	}
	_ensureInitialized() {
		this.isConnected && this._hass && !this._dashboard && !this._initPromise && (this._initPromise = this._init().catch((e) => {
			console.error("Argus initialization failed:", e), this.isConnected && (this._hideInitialCurtain(), this._renderInitializationError(e));
		}).finally(() => {
			this._initPromise = null;
		}));
	}
	_hideInitialCurtain() {
		let e = this.shadowRoot.getElementById("argus-initial-curtain");
		e && (e.classList.add("curtain-hidden"), setTimeout(() => e.remove(), 350));
	}
	_bindSOS() {
		if (this._sosBound) return;
		let e = this.shadowRoot.getElementById("sos-thumb"), t = e && e.closest(".ios-slider-track");
		if (!e || !t || e._sosBound) return;
		e._sosBound = !0;
		let n = !1, r = 0, i = 0, a = () => Math.max(1, t.offsetWidth - e.offsetWidth - 12), o = (t) => {
			n = !0, r = t.clientX - i, e.setPointerCapture(t.pointerId), e.style.transition = "none", e.style.cursor = "grabbing", t.preventDefault();
		}, s = (o) => {
			if (!n) return;
			i = Math.max(0, Math.min(o.clientX - r, a())), e.style.left = 6 + i + "px";
			let s = i / a();
			t.style.background = "rgba(217,4,41," + (.15 + s * .55) + ")", s >= .98 && l(!0);
		}, c = (e) => {
			n && l(!1);
		}, l = (r) => {
			n = !1, e.style.transition = "all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)", e.style.cursor = "grab", r ? (this._triggerSOS(), i = 0, setTimeout(() => {
				e.style.left = "6px", t.style.background = "rgba(217,4,41,0.15)";
			}, 600)) : (i = 0, e.style.left = "6px", t.style.background = "rgba(217,4,41,0.15)");
		};
		e.setAttribute("role", "button"), e.setAttribute("tabindex", "0"), e.setAttribute("aria-label", this._t("tap_sos") || "Activar SOS"), e.addEventListener("keydown", (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), this._triggerSOS());
		}), t.addEventListener("click", () => {
			this._getProfileGesture() === "touch" && this._triggerSOS();
		}), e.addEventListener("pointerdown", o), e.addEventListener("pointermove", s), e.addEventListener("pointerup", c), e.addEventListener("pointercancel", c), this._sosBound = !0;
	}
	async _init() {
		this._mode = "disarmed", this._staticBound ||= (this._bindStatic(), !0), await this._connect(), this._applyTranslations(), await this._load(), this._dashboard && (this._initWidgetGrid(), !this._postLoadBound && (this._postLoadBound = !0, this.shadowRoot.getElementById("history-export-modal")?.addEventListener("click", (e) => {
			e.target && e.target.id === "history-export-modal" && this._closeHistoryExportModal();
		}), this.shadowRoot.getElementById("btn-export-config")?.addEventListener("click", () => this._exportConfig()), this.shadowRoot.getElementById("btn-import-trigger")?.addEventListener("click", () => this.shadowRoot.getElementById("import-config-file").click()), this.shadowRoot.getElementById("import-config-file")?.addEventListener("change", (e) => this._importConfig(e)), this.shadowRoot.getElementById("btn-reset-config")?.addEventListener("click", () => this._resetConfig()), this.shadowRoot.getElementById("btn-undo-reset")?.addEventListener("click", () => this._undoResetConfig()), this.shadowRoot.getElementById("btn-save-personalization-standalone")?.addEventListener("click", () => this._savePersonalization()), this.shadowRoot.getElementById("btn-select-sos-outputs")?.addEventListener("click", () => this._openModal("panic")), this._configureEmergencyCall()));
	}
	_openHistoryExportModal() {
		let e = this.shadowRoot.getElementById("history-export-modal");
		if (!e) return;
		let t = /* @__PURE__ */ new Date(), n = /* @__PURE__ */ new Date();
		n.setDate(t.getDate() - 30);
		let r = this.shadowRoot.getElementById("export-history-from"), i = this.shadowRoot.getElementById("export-history-to");
		r && !r.value && (r.value = n.toISOString().split("T")[0]), i && !i.value && (i.value = t.toISOString().split("T")[0]), e.classList.add("open"), e.setAttribute("aria-hidden", "false");
	}
	_closeHistoryExportModal() {
		let e = this.shadowRoot.getElementById("history-export-modal");
		e && (e.classList.remove("open"), e.setAttribute("aria-hidden", "true"));
	}
	_getFilteredHistory() {
		let e = Array.isArray(this._forensicTimeline) && this._forensicTimeline.length ? this._forensicTimeline : Array.isArray(this._ui?.audit_log) ? this._ui.audit_log : [], t = this.shadowRoot.getElementById("export-history-from"), n = this.shadowRoot.getElementById("export-history-to"), r = t?.value ? /* @__PURE__ */ new Date(t.value + "T00:00:00") : null, i = n?.value ? /* @__PURE__ */ new Date(n.value + "T23:59:59") : null;
		return e.filter((e) => {
			if (!e || typeof e != "object") return !1;
			if (!e.ts) return !0;
			let t = new Date(e.ts);
			return !(r && t < r || i && t > i);
		});
	}
	_exportHistoryPrintPdf() {
		this._closeHistoryExportModal();
		let e = this._getFilteredHistory(), t = this._homeName || "Argus Home Hub", n = (/* @__PURE__ */ new Date()).toLocaleString(this._getLocale()), r = this.shadowRoot.getElementById("export-history-from")?.value || "Inicio", i = this.shadowRoot.getElementById("export-history-to")?.value || "Hoy", a = e.map((e, t) => {
			let n = e.ts ? new Date(e.ts) : null, r = n && !isNaN(n.getTime()) ? n.toLocaleString(this._getLocale()) : "—", i = String(e.action || ""), a = this._localizeActivityDetail(i, e.detail), o = e.user || e.actor || "Argus";
			return `
        <tr style="border-bottom: 1px solid #e2e8f0; font-size: 11px;">
          <td style="padding: 6px 8px; color: #64748b; font-family: monospace;">${t + 1}</td>
          <td style="padding: 6px 8px; white-space: nowrap; font-weight: 600;">${this._escapeHtml(r)}</td>
          <td style="padding: 6px 8px; font-weight: 700; color: #0284c7;">${this._escapeHtml(i)}</td>
          <td style="padding: 6px 8px;">${this._escapeHtml(a)}</td>
          <td style="padding: 6px 8px; font-weight: 600;">${this._escapeHtml(o)}</td>
        </tr>
      `;
		}).join(""), o = `
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
              <div class="subtitle">🏡 ${this._escapeHtml(t)} · Registro de Actividad y Seguridad</div>
            </div>
          </div>
          <div class="meta">
            <div><strong>Rango:</strong> ${this._escapeHtml(r)} al ${this._escapeHtml(i)}</div>
            <div><strong>Generado:</strong> ${this._escapeHtml(n)}</div>
            <div><strong>Total Eventos:</strong> ${e.length}</div>
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
            ${a || "<tr><td colspan=\"5\" style=\"text-align:center;padding:24px;color:#888;\">No hay registros en el rango seleccionado</td></tr>"}
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
    `, s = window.open("", "_blank", "width=900,height=700");
		s && (s.document.open(), s.document.write(o), s.document.close());
	}
	_exportHistoryText() {
		this._closeHistoryExportModal();
		let e = this._getFilteredHistory(), t = this._homeName || "Argus Home Hub", n = (/* @__PURE__ */ new Date()).toLocaleString(this._getLocale()), r = this.shadowRoot.getElementById("export-history-from")?.value || "Inicio", i = this.shadowRoot.getElementById("export-history-to")?.value || "Hoy", a = "================================================================================\n";
		a += "🛡️  ARGUS HOME HUB - HISTORIAL DE ACTIVIDAD\n", a += `🏡  ${t}\n`, a += `📅  Rango: ${r} al ${i}\n`, a += `⏰  Generado: ${n}\n`, a += `📊  Total eventos: ${e.length}\n`, a += "================================================================================\n\n", e.forEach((e, t) => {
			let n = e.ts ? new Date(e.ts) : null, r = n && !isNaN(n.getTime()) ? n.toLocaleString(this._getLocale()) : "—", i = String(e.action || ""), o = this._localizeActivityDetail(i, e.detail), s = e.user || e.actor || "Argus";
			a += `[${String(t + 1).padStart(3, "0")}] ${r} | [${i}] ${o} | 👤 ${s}\n`;
		}), a += "\n================================================================================\n", a += "Argus Home Hub - Fin del reporte\n";
		let o = new Blob([a], { type: "text/plain;charset=utf-8" }), s = URL.createObjectURL(o), c = document.createElement("a");
		c.href = s, c.download = `argus_historial_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.txt`, c.click(), setTimeout(() => URL.revokeObjectURL(s), 5e3);
	}
	async _clearHistory() {
		let e = this._dashboard?.entries?.[0]?.pin_configured === !0, t = this._activeProfile?.name || this._hass?.user?.name || "Administrador", n = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id, r = async () => {
			try {
				return await this._send("argus/clear_audit_log", {
					...n ? { entry_id: n } : {},
					user_name: t
				}), await this._loadActivityTimeline(n), this._renderActivityLog(), !0;
			} catch (e) {
				return alert(this._format("generic_error", { error: e.message })), !1;
			}
		};
		if (e) this._showPinModal(async (e) => {
			try {
				let t = await this._send("argus/validate_master_pin", {
					pin: e,
					...n ? { entry_id: n } : {}
				});
				if (t && t.valid === !1) throw Error(this._t("pin_invalid") || "PIN incorrecto");
			} catch {
				throw Error(this._t("pin_invalid") || "PIN incorrecto");
			}
			return await r();
		});
		else {
			if (!confirm(this._t("clear_history_confirm") || "¿Eliminar todo el historial de actividad?")) return;
			await r();
		}
	}
	async _loadActivityTimeline(e = null) {
		if (this._ui) try {
			let t = e || this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id, n = { limit: 100 };
			t && (n.entry_id = t);
			let r = await this._send("argus/get_forensic_timeline", n), i = Array.isArray(r?.timeline) ? r.timeline.filter((e) => e && typeof e == "object" && !Array.isArray(e)) : [];
			this._forensicTimeline = i, this._activityTimelineError = null, this._ui.audit_log = i, this._renderActivityLog();
		} catch (e) {
			console.warn("Argus activity timeline unavailable:", e), this._activityTimelineError = e?.message || String(e), this._forensicTimeline = null, Array.isArray(this._ui.audit_log) || (this._ui.audit_log = []), this._renderActivityLog();
		}
	}
	_generateHistoryPDF(e, t) {
		let n = t.homeName || "Mi Casa", r = t.generatedAt || (/* @__PURE__ */ new Date()).toLocaleString(), i = e.length, a = (e) => String(e || "").replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/[^\x20-\x7E\xA0-\xFF]/g, " "), o = Math.max(1, Math.ceil(e.length / 22)), s = [];
		for (let e = 0; e < o; e++) s.push(5 + e * 2);
		let c = [];
		for (let t = 0; t < o; t++) {
			let s = e.slice(t * 22, (t + 1) * 22), l = "";
			l += "q 0.05 0.08 0.15 rg 0 727 612 65 re f Q\n", l += "BT /F2 14 Tf 1 1 1 rg 36 760 Td (ARGUS HOME HUB - HISTORIAL DE ACTIVIDAD) Tj ET\n", l += `BT /F1 8.5 Tf 0.7 0.8 0.9 rg 36 744 Td (${a(`Hogar: ${n}   |   Generado: ${r}   |   Total Eventos: ${i}`)}) Tj ET\n`, l += "q 0.12 0.18 0.28 rg 36 694 540 20 re f Q\n", l += "BT /F2 8.5 Tf 1 1 1 rg 42 699 Td (FECHA Y HORA) Tj ET\n", l += "BT /F2 8.5 Tf 1 1 1 rg 166 699 Td (ACCION / EVENTO) Tj ET\n", l += "BT /F2 8.5 Tf 1 1 1 rg 291 699 Td (ORIGEN / USUARIO) Tj ET\n", l += "BT /F2 8.5 Tf 1 1 1 rg 401 699 Td (DETALLE) Tj ET\n";
			let u = 674;
			for (let e = 0; e < s.length; e++) {
				let t = s[e];
				e % 2 == 0 && (l += `q 0.96 0.97 0.98 rg 36 ${u - 4} 540 20 re f Q\n`), l += `q 0.88 0.88 0.88 RG 0.5 w 36 ${u - 4} m 576 ${u - 4} l S Q\n`;
				let n = a(t.ts || "-"), r = a(t.action || "-"), i = a(t.user || "Argus"), o = a(t.detail || "-");
				l += `BT /F1 8 Tf 0.15 0.15 0.15 rg 42 ${u + 2} Td (${n.slice(0, 24)}) Tj ET\n`, l += `BT /F2 8 Tf 0.1 0.2 0.4 rg 166 ${u + 2} Td (${r.slice(0, 22)}) Tj ET\n`, l += `BT /F1 8 Tf 0.2 0.2 0.2 rg 291 ${u + 2} Td (${i.slice(0, 20)}) Tj ET\n`, l += `BT /F1 7.5 Tf 0.3 0.3 0.3 rg 401 ${u + 2} Td (${o.slice(0, 35)}) Tj ET\n`, u -= 22;
			}
			l += "q 0.8 0.8 0.8 RG 0.5 w 36 40 m 576 40 l S Q\n", l += "BT /F1 7.5 Tf 0.5 0.5 0.5 rg 36 28 Td (Argus Home Hub Security System - Documento Oficial de Auditoria) Tj ET\n", l += `BT /F1 7.5 Tf 0.5 0.5 0.5 rg 516 28 Td (${a(`Pagina ${t + 1} de ${o}`)}) Tj ET\n`, c.push(l);
		}
		let l = [], u = [], d = (e) => {
			u.push(l.join("\n").length + +(l.length > 0)), l.push(e);
		};
		l.push("%PDF-1.4"), d("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj"), d(`2 0 obj\n<< /Type /Pages /Kids [${s.map((e) => `${e} 0 R`).join(" ")}] /Count ${o} /MediaBox [0 0 612 792] >>\nendobj`), d("3 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj"), d("4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj");
		for (let e = 0; e < o; e++) {
			let t = s[e], n = t + 1, r = c[e], i = unescape(encodeURIComponent(r)).length;
			d(`${t} 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${n} 0 R >>\nendobj`), d(`${n} 0 obj\n<< /Length ${i} >>\nstream\n${r}endstream\nendobj`);
		}
		let f = l.join("\n").length + 1;
		l.push("xref"), l.push(`0 ${u.length + 1}`), l.push("0000000000 65535 f ");
		for (let e = 0; e < u.length; e++) l.push(String(u[e]).padStart(10, "0") + " 00000 n ");
		return l.push("trailer"), l.push(`<< /Size ${u.length + 1} /Root 1 0 R >>`), l.push("startxref"), l.push(String(f)), l.push("%%EOF"), l.join("\n");
	}
	_exportHistoryPDF() {
		let e = (Array.isArray(this._forensicTimeline) && this._forensicTimeline.length ? this._forensicTimeline : this._ui?.audit_log || []).map((e) => {
			let t = String(e.action || ""), n = String(e.detail || ""), r = this._localizeActivityDetail ? this._localizeActivityDetail(t, n) : n, i = String(e.user || e.actor || "Argus"), a = "";
			if (e.ts) try {
				a = new Date(e.ts).toLocaleString(this._getLocale());
			} catch {
				a = String(e.ts);
			}
			return {
				ts: a,
				action: t,
				user: i,
				detail: r
			};
		}), t = this._homeName || "Mi Casa", n = /* @__PURE__ */ new Date(), r = n.toISOString().slice(0, 10), i = n.toTimeString().slice(0, 5).replace(":", "-"), a = n.toLocaleString(this._getLocale()), o = this._generateHistoryPDF(e, {
			homeName: t,
			generatedAt: a
		}), s = new Blob([o], { type: "application/pdf" }), c = URL.createObjectURL(s), l = document.createElement("a");
		l.href = c, l.download = `argus_historial_${r}_${i}.pdf`, l.click(), setTimeout(() => URL.revokeObjectURL(c), 5e3);
	}
	_exportForensicTimeline() {
		this._closeHistoryExportModal();
		let e = Array.isArray(this._forensicTimeline) && this._forensicTimeline.length ? this._forensicTimeline : this._ui?.audit_log || [], t = new Blob([JSON.stringify({
			format: "argus-forensic-timeline",
			generated_at: (/* @__PURE__ */ new Date()).toISOString(),
			events: e
		}, null, 2)], { type: "application/json" }), n = URL.createObjectURL(t), r = document.createElement("a");
		r.href = n, r.download = `argus_forensic_${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.json`, r.click(), setTimeout(() => URL.revokeObjectURL(n), 5e3);
	}
	_backupText(e) {
		let t = this._getCurrentLangCode(), n = {
			es: {
				password: "Contraseña de cifrado (mínimo 8 caracteres)",
				weak: "La contraseña debe tener al menos 8 caracteres.",
				decrypt: "Contraseña de la copia cifrada",
				bad: "No se pudo descifrar la copia. Verifica la contraseña."
			},
			en: {
				password: "Encryption password (minimum 8 characters)",
				weak: "The password must be at least 8 characters.",
				decrypt: "Encrypted backup password",
				bad: "The backup could not be decrypted. Check the password."
			}
		};
		return (n[t] || n.en)[e];
	}
	_bytesToBase64(e) {
		let t = "";
		return e.forEach((e) => {
			t += String.fromCharCode(e);
		}), btoa(t);
	}
	_base64ToBytes(e) {
		return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
	}
	async _backupKey(e, t, n) {
		let r = await crypto.subtle.importKey("raw", new TextEncoder().encode(e), "PBKDF2", !1, ["deriveKey"]);
		return crypto.subtle.deriveKey({
			name: "PBKDF2",
			salt: t,
			iterations: 25e4,
			hash: "SHA-256"
		}, r, {
			name: "AES-GCM",
			length: 256
		}, !1, n);
	}
	_requestBackupPassword(e) {
		return new Promise((t) => {
			let n = document.createElement("div");
			n.className = "modal-back open", n.setAttribute("role", "dialog"), n.setAttribute("aria-modal", "true");
			let r = e === "decrypt" ? this._backupText("decrypt") : this._backupText("password");
			n.innerHTML = `<div class="modal" style="max-width:430px"><div class="modal-head"><h3>${this._escapeHtml(r)}</h3></div><input type="password" class="glass-control" autocomplete="new-password" style="font-size:17px"><div style="display:flex;gap:9px;justify-content:flex-end;margin-top:14px"><button class="ghost" data-secret-cancel>✕</button><button class="primary" data-secret-ok>✓</button></div></div>`, this.shadowRoot.appendChild(n);
			let i = n.querySelector("input"), a = (e) => {
				n.remove(), t(e);
			};
			n.querySelector("[data-secret-cancel]").addEventListener("click", () => a(null)), n.querySelector("[data-secret-ok]").addEventListener("click", () => a(i.value)), i.addEventListener("keydown", (e) => {
				e.key === "Enter" && a(i.value), e.key === "Escape" && a(null);
			}), requestAnimationFrame(() => i.focus());
		});
	}
	async _exportConfig() {
		try {
			let e = await this._requestBackupPassword("encrypt");
			if (e === null) return;
			if (e.length < 8) {
				alert(this._backupText("weak"));
				return;
			}
			let t = (await this._send("argus/export_config"))?.config;
			if (typeof t != "object" || !t) throw Error(this._t("invalid_config"));
			delete t.runtime;
			let n = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(16)), r = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(12)), i = await this._backupKey(e, n, ["encrypt"]), a = await crypto.subtle.encrypt({
				name: "AES-GCM",
				iv: r
			}, i, new TextEncoder().encode(JSON.stringify(t))), o = {
				format: "argus-encrypted-backup",
				version: 1,
				kdf: "PBKDF2-SHA256",
				iterations: 25e4,
				cipher: "AES-256-GCM",
				salt: this._bytesToBase64(n),
				iv: this._bytesToBase64(r),
				data: this._bytesToBase64(new Uint8Array(a))
			}, s = new Blob([JSON.stringify(o)], { type: "application/json" }), c = URL.createObjectURL(s), l = document.createElement("a");
			l.href = c, l.download = `argus_backup_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.argus`, l.click(), setTimeout(() => URL.revokeObjectURL(c), 5e3);
		} catch (e) {
			alert(this._format("export_error", { error: e.message }));
		}
	}
	_importConfig(e) {
		let t = e.target.files[0];
		if (!t) return;
		e.target.value = "";
		let n = new FileReader();
		n.onload = async (e) => {
			try {
				let t = JSON.parse(e.target.result);
				if (t?.format === "argus-encrypted-backup") {
					let e = await this._requestBackupPassword("decrypt");
					if (e === null) return;
					try {
						let n = this._base64ToBytes(t.salt), r = this._base64ToBytes(t.iv), i = await this._backupKey(e, n, ["decrypt"]), a = await crypto.subtle.decrypt({
							name: "AES-GCM",
							iv: r
						}, i, this._base64ToBytes(t.data));
						t = JSON.parse(new TextDecoder().decode(a));
					} catch {
						throw Error(this._backupText("bad"));
					}
				}
				if (typeof t != "object" || !t) throw Error(this._t("invalid_config"));
				await this._send("argus/restore_config", { config: t }), alert(this._t("import_success")), window.location.reload();
			} catch (e) {
				alert(this._format("import_error", { error: e.message }));
			}
		}, n.onerror = () => alert(this._t("file_read_error")), n.readAsText(t);
	}
	async _resetConfig() {
		if (confirm(this._t("reset_confirm"))) try {
			this._undoState = JSON.parse(JSON.stringify(this._ui)), await this._send("argus/restore_config", { config: {} }), this.shadowRoot.getElementById("btn-reset-config").style.display = "none", this.shadowRoot.getElementById("btn-undo-reset").style.display = "block", alert(this._t("reset_success")), this._resetTimer = setTimeout(() => {
				window.location.reload();
			}, 1e4);
		} catch {
			alert(this._t("reset_error_auth"));
		}
	}
	async _undoResetConfig() {
		if (this._undoState) try {
			clearTimeout(this._resetTimer), await this._send("argus/restore_config", { config: this._undoState }), this.shadowRoot.getElementById("btn-reset-config").style.display = "block", this.shadowRoot.getElementById("btn-undo-reset").style.display = "none", alert(this._t("undo_success")), window.location.reload();
		} catch (e) {
			alert(this._format("undo_error", { error: e.message }));
		}
	}
	_bindStatic() {
		let e = (e) => this.shadowRoot.getElementById(e);
		e("selector-close").addEventListener("click", () => this._closeModal()), e("selector-accept").addEventListener("click", () => this._acceptSelection()), e("selector-clear").addEventListener("click", () => {
			this._selected = [], this._renderSelector(!0);
		}), e("selector-search").addEventListener("input", () => {
			clearTimeout(this._searchDebounce), this._searchDebounce = setTimeout(() => this._renderSelector(!0), 120);
		}), e("selector-modal").addEventListener("click", (e) => {
			e.target.id === "selector-modal" && this._closeModal();
		}), e("selector-select-all").addEventListener("click", () => this._selectAll()), e("selector-deselect-all").addEventListener("click", () => {
			this._selected = [], this._renderSelector(!0);
		}), e("btn-new-auto").addEventListener("click", () => {
			history.pushState(null, "", "/config/automation/edit/new"), window.dispatchEvent(new CustomEvent("location-changed"));
		}), e("btn-access-users")?.addEventListener("click", () => this._toggleAccessSection("users")), e("btn-access-pin")?.addEventListener("click", () => this._toggleAccessSection("pin")), e("btn-save-pin").addEventListener("click", () => this._savePin()), e("lnk-forgot-pin")?.addEventListener("click", (e) => {
			e.preventDefault(), this._handleForgotPin();
		}), e("pin-forgot-link")?.addEventListener("click", (e) => {
			e.preventDefault(), this._handleForgotPin();
		}), e("pin-close").addEventListener("click", () => this._closePinModal()), e("pin-cancel").addEventListener("click", () => this._closePinModal()), e("pin-modal").addEventListener("click", (e) => {
			e.target.id === "pin-modal" && this._closePinModal();
		}), e("pin-confirm").addEventListener("click", () => this._submitPin()), e("pin-input").addEventListener("keydown", (e) => {
			e.key === "Enter" && this._submitPin();
		}), this.shadowRoot.querySelectorAll("[data-pin-digit]").forEach((e) => e.addEventListener("click", () => this._appendPinDigit(e.dataset.pinDigit))), e("pin-backspace").addEventListener("click", () => this._backspacePin()), e("btn-add-notif")?.addEventListener("click", () => this._addNotifTarget()), e("btn-save-notif")?.addEventListener("click", () => this._saveNotifications()), e("btn-edit-home-name-standalone")?.addEventListener("click", () => this._editHomeName()), e("home-name-modal-close").addEventListener("click", () => this._closeHomeNameModal()), e("home-name-cancel").addEventListener("click", () => this._closeHomeNameModal()), e("home-name-modal").addEventListener("click", (e) => {
			e.target.id === "home-name-modal" && this._closeHomeNameModal();
		}), e("home-name-save").addEventListener("click", () => this._saveHomeName()), e("home-name-input").addEventListener("keydown", (e) => {
			e.key === "Enter" && this._saveHomeName();
		}), e("btn-edit-widgets")?.addEventListener("click", () => this._toggleWidgetEditing());
		let t = e("lbl-aesthetic-custom"), n = e("personalize-workspace");
		t && n && !t._boundToggle && (t._boundToggle = !0, t.addEventListener("click", () => {
			let t = n.classList.toggle("collapsed"), r = e("personalize-chevron");
			r && (r.textContent = t ? "▼" : "▲");
		})), e("btn-lang-picker")?.addEventListener("click", () => this._openLangModal()), e("lang-modal-close")?.addEventListener("click", () => this._closeLangModal()), e("lang-modal")?.addEventListener("click", (e) => {
			e.target.id === "lang-modal" && this._closeLangModal();
		});
		let r = () => {
			e("sos-modal")?.classList.remove("open"), this._sosEntryIdx = null, e("sos-thumb") && (e("sos-thumb").style.left = "6px", e("sos-thumb").closest(".ios-slider-track").style.background = "rgba(217,4,41,0.15)");
		};
		e("btn-cancel-sos")?.addEventListener("click", r), e("sos-close-x")?.addEventListener("click", r), e("sos-modal")?.addEventListener("click", (e) => {
			e.target.id === "sos-modal" && r();
		}), e("bg-mode-select-standalone")?.addEventListener("change", () => this._updateBgFieldsVisibility()), e("hub-bg-mode-select")?.addEventListener("change", () => this._updateBgFieldsVisibility()), e("panel-bg-file-input")?.addEventListener("change", (e) => this._handlePanelBgFile(e)), e("hub-bg-file-input")?.addEventListener("change", (e) => this._handleHubBgFile(e));
	}
	async _connect() {
		if (typeof this._hass?.callWS != "function") throw Error("Home Assistant authenticated WebSocket is unavailable");
	}
	_send(e, t = {}) {
		return typeof this._hass?.callWS == "function" ? this._hass.callWS({
			type: e,
			...t
		}) : Promise.reject(/* @__PURE__ */ Error("Home Assistant authenticated WebSocket is unavailable"));
	}
	async _load() {
		this.shadowRoot.querySelector(".wrap")?.classList.remove("wrap-ready");
		let e;
		try {
			e = await this._send("argus/login_bootstrap");
		} catch (e) {
			console.error("Argus bootstrap load failed:", e);
			return;
		}
		this._bootstrap = e;
		let t = e.user_theme || {
			background_mode: "default",
			background_file: ""
		};
		this._currentUserTheme = t, t.background_mode !== "default" && t.background_file ? (this._backgroundMode = t.background_mode, this._panelBgFile = t.background_file, this._backgroundImages = [t.background_file]) : t.background_mode !== "default" && t.background_mode ? (this._backgroundMode = t.background_mode, this._panelBgFile = "", this._backgroundImages = []) : (this._backgroundMode = e.background_mode || "none", this._panelBgFile = "", this._backgroundImages = e.background_images || []), e.weather_source && (this._weatherSource = e.weather_source), e.temperature_source && (this._temperatureSource = e.temperature_source);
		try {
			let t = localStorage.getItem("argus_lang");
			this._manualLang = t && t !== "auto" ? t : e.language && e.language !== "auto" && l.some((t) => t.code === e.language) ? e.language : null;
		} catch {}
		if (this._updateCanvasBackground(), e.configuration_missing) {
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
		let n = this.hasAttribute("compact") || this.classList.contains("argus-compact") || !!this._cardConfig?.compact;
		if (!e.has_active_session || !this._profileSelectedThisMount) {
			if (n) {
				this._profileSelectedThisMount = !0;
				let t = (e.users || []).find((e) => e.is_own_profile) || (e.users || [])[0];
				if (t && !e.has_active_session) try {
					await this._send("argus/select_profile", { argus_user_id: t.id });
				} catch {}
			} else {
				this._loadState = "profile_selection", this._renderLoginScreen(e);
				return;
			}
		}
		this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-pin-prompt").forEach((e) => e.remove());
		let r;
		try {
			r = await this._send("argus/dashboard");
		} catch (t) {
			if (n) {
				let e = this._config?.entity || "alarm_control_panel.argus", t = this._hass?.states[e];
				r = { entries: [{
					entity_id: e,
					name: t?.attributes?.friendly_name || "Argus Security",
					state: t?.state || "unavailable",
					pin_configured: !0
				}] };
			} else {
				if (t.message.includes("permission") || t.message.includes("session") || t.message.includes("unauthorized")) {
					this._renderLoginScreen(e);
					return;
				}
				console.error("Argus dashboard load failed:", t);
				return;
			}
		}
		if (n && r?.entries?.length) {
			let e = this._config?.entity || "alarm_control_panel.argus", t = r.entries.find((t) => t.entity_id === e);
			t ||= r.entries[0], r.entries = [t];
		}
		this._dashboard = r, this._available = r.available_entities || [], this._ui = r.ui || {
			modes: {},
			dashboard: {}
		}, this._notifTargets = r.ui?.notif_targets || [], this._users = Array.isArray(r.ui?.users) ? r.ui.users.filter((e) => e && typeof e == "object" && !Array.isArray(e)) : [], this._homeName = r.ui?.home_name || "", this._emergencyNumber = r.ui?.emergency_number || "911", this._loadState = "dashboard", this.shadowRoot.querySelector(".wrap")?.classList.add("wrap-ready"), this._hideInitialCurtain(), this._currentProfile = r.current_profile || null;
		let i = this.shadowRoot.getElementById("bootstrap-overlay");
		i && (this._currentProfile && !this._welcomeShownThisMount ? i.style.display = "flex" : i.style.display = "none"), await this._loadActivityTimeline(r.entry_id), this._panicOutputs = r.ui?.panic_outputs || [];
		let a = this._users.find((e) => e.id === this._currentProfile?.id) || {};
		this._backgroundMode = a.background_mode || r.ui?.background_mode || "weather", this._backgroundImages = a.background_images || r.ui?.background_images || [], this._temperatureSource = r.ui?.temperature_source || "auto", this._weatherSource = r.ui?.weather_source || "auto", this._clockFormat = r.ui?.clock_format || "auto", this._panelBgFile = a.panel_bg_file === void 0 ? r.ui?.panel_bg_file || "" : a.panel_bg_file, this._panelBgSound = !!(a.panel_bg_sound === void 0 ? r.ui?.panel_bg_sound : a.panel_bg_sound);
		let o = a.hub_bg_mode || r.ui?.hub_bg_mode || "none";
		this._hubBgMode = o === "none" || o === "default" ? "default" : o, this._hubBgFile = a.hub_bg_file === void 0 ? r.ui?.hub_bg_file || "" : a.hub_bg_file, this._hubBgSound = !!(a.hub_bg_sound === void 0 ? r.ui?.hub_bg_sound : a.hub_bg_sound), this._updateTheme(), this._updateHomeNameDisplay(), this._updateProfileBadge(), this._populateTemperatureSources();
		let s = this.shadowRoot.getElementById("temp-source-select-standalone");
		s && (s.value = this._temperatureSource || "auto", s.dataset.bound || (s.dataset.bound = "1", s.addEventListener("change", () => this._savePersonalization())));
		let c = this.shadowRoot.getElementById("argus-clock-format-select");
		c && (this._clockFormat = this._ui?.clock_format || this._dashboard?.clock_format || "auto", c.value = this._clockFormat, c.dataset.bound || (c.dataset.bound = "1", c.addEventListener("change", () => this._savePersonalization())));
		let u = this.shadowRoot.getElementById("emergency-number-input");
		u && (u.value = this._emergencyNumber), this._renderSosOutputs(), this._configureEmergencyCall();
		let d = this.shadowRoot.getElementById("bg-mode-select-standalone");
		d && (d.innerHTML = `
        <option value="none">${this._t("bg_panel_none")}</option>
      `, d.value = this._backgroundMode || "none");
		let f = this.shadowRoot.getElementById("hub-bg-mode-select");
		f && (f.innerHTML = `
        <option value="default">${this._t("bg_hub_default")}</option>
        <option value="image">${this._t("bg_image_opt")}</option>
      `, f.value = this._hubBgMode || "default");
		let p = this.shadowRoot.getElementById("panel-bg-url-input");
		p && (p.value = this._panelBgFile && !this._panelBgFile.startsWith("data:") ? this._panelBgFile : "");
		let m = this.shadowRoot.getElementById("chk-panel-bg-sound");
		m && (m.checked = this._panelBgSound);
		let h = this.shadowRoot.getElementById("hub-bg-url-input");
		h && (h.value = this._hubBgFile && !this._hubBgFile.startsWith("data:") ? this._hubBgFile : "");
		let g = this.shadowRoot.getElementById("chk-hub-bg-sound");
		g && (g.checked = this._hubBgSound), this._updateBgFieldsVisibility(), this._updateCanvasBackground(), this._isAdmin = r.current_profile?.role === "admin", this._permissions = r.current_profile?.permissions || {};
		let _ = r.entries?.[0]?.entity_id;
		if (_ ? ((!this._modeEntryId || this._modeEntryId === "default") && (this._modeEntryId = _), this._loadRetryTimeout &&= (clearTimeout(this._loadRetryTimeout), null)) : (!this._modeEntryId || this._modeEntryId === "default") && (this._modeEntryId = null), this._isAdmin) try {
			let e = await this._send("argus/get_ha_users");
			this._haUsersList = e?.ha_users || [];
		} catch (e) {
			console.warn("Could not fetch HA users:", e);
		}
		let v = r.entries?.[0]?.pin_configured === !0, y = this.shadowRoot.getElementById("current-pin-display"), b = this.shadowRoot.getElementById("group-current-pin");
		y && (y.textContent = v ? this._t("pin_active_yes") : this._t("pin_active_no")), b && (v ? b.classList.remove("collapsed") : b.classList.add("collapsed"));
		let x = this.shadowRoot.getElementById("lnk-forgot-pin");
		x && (x.style.display = v ? "inline" : "none");
		let S = this.shadowRoot.getElementById("pin-forgot-link");
		S && (S.style.display = v ? "inline" : "none"), [
			["instances", () => this._renderEntries()],
			["activity log", () => this._renderActivityLog()],
			["mode tabs", () => this._renderModeTabs()],
			["mode view", () => this._renderModeView()],
			["automations", () => this._renderAutomations()],
			["notifications", () => this._renderNotifications()],
			["users", () => this._renderUsers()]
		].forEach(([e, t]) => {
			try {
				t();
			} catch (t) {
				console.error(`Argus ${e} render failed:`, t);
			}
		}), this._loadUploadedFiles(), this._refreshLocalizedUi();
		let C = r.entries && r.entries.length > 0, w = C && r.entries[0].entity_id;
		C && !w ? this._loadRetryTimeout ||= setTimeout(() => {
			this._loadRetryTimeout = null, this._load();
		}, 1500) : this._loadRetryTimeout &&= (clearTimeout(this._loadRetryTimeout), null);
	}
	_getSensorBattery(e, t) {
		return this._getDevicePower(e, t).battery;
	}
	_getDevicePower(e, t) {
		if (!e) return {
			battery: null,
			mains: !1
		};
		let n = t?.attributes || {}, r = [
			n.battery_level,
			n.battery,
			n.battery_percentage
		].find((e) => e != null && e !== "" && Number.isFinite(Number(e))), i = r === void 0 ? null : Math.max(0, Math.min(100, Math.round(Number(r)))), a = String(n.power_source || n.power_supply || n.power_type || "").toLowerCase(), o = n.mains_powered === !0 || n.is_mains_powered === !0 || n.wired === !0 || /(?:mains|ac|wired|line|external|toma|corriente)/.test(a), s = e.split(".")[0];
		if ([
			"switch",
			"light",
			"fan",
			"script",
			"input_boolean",
			"siren"
		].includes(s) && i === null) return {
			battery: null,
			mains: !0
		};
		if (i === null && this._hass?.states) {
			let t = null, n = e.split(".").slice(1).join(".").toLowerCase(), r = n.replace(/_(contact|door|window|motion|occupancy|opening|sensor|iaszone|ias_zone)$/i, ""), a = [
				`sensor.${n}_battery`,
				`sensor.${r}_battery`,
				`sensor.${n}_battery_level`,
				`sensor.${r}_battery_level`,
				`sensor.${n}_battery_percentage`,
				`sensor.${r}_battery_percentage`
			];
			for (let e of a) {
				let n = this._hass.states[e];
				if (n && n.state !== "unavailable" && n.state !== "unknown" && Number.isFinite(Number(n.state))) {
					t = n.state;
					break;
				}
			}
			if (t === null) {
				let n = (this._available || []).find((t) => t.entity_id === e);
				if (n && n.device_id) {
					let r = (this._available || []).find((t) => t.device_id === n.device_id && t.entity_id !== e && (this._hass?.states?.[t.entity_id]?.attributes?.device_class === "battery" || /_battery(?:_level|_percent(?:age)?)?$/i.test(t.entity_id)));
					if (r) {
						let e = this._hass?.states?.[r.entity_id];
						e && e.state !== "unavailable" && e.state !== "unknown" && Number.isFinite(Number(e.state)) && (t = e.state);
					}
				}
			}
			if (t !== null) {
				let e = Number(t);
				Number.isFinite(e) && (i = Math.max(0, Math.min(100, Math.round(e))));
			}
		}
		return {
			battery: i,
			mains: o
		};
	}
	_deviceFacts(e, t, n = !0) {
		let r = t?.state || "unknown", i = [
			"on",
			"unlocked",
			"open",
			"recording",
			"active",
			"motion"
		].includes(r), a = {
			on: this._t("status_open"),
			off: this._t("status_closed"),
			locked: this._t("status_closed"),
			unlocked: this._t("status_open"),
			idle: this._t("status_idle"),
			recording: this._t("status_recording"),
			home: this._t("status_home"),
			not_home: this._t("status_away")
		}, o = e.split(".")[0], s = [
			"siren",
			"switch",
			"light",
			"fan",
			"input_boolean",
			"script",
			"alarm_control_panel"
		].includes(o), c = this._getDevicePower(e, t), l = [];
		if (n && l.push({
			text: s ? r.toUpperCase() : a[r] || r,
			className: s ? "" : i ? "status-open" : "status-closed"
		}), c.mains && l.push({
			text: "🔌 AC",
			className: "power-mains"
		}), c.battery !== null) {
			let e = c.battery === 0, t = c.battery <= 20 && !e, n = e ? "🔋 ❌" : `🔋 ${c.battery}%`, r = e ? "dead" : t ? "low" : "";
			l.push({
				text: n,
				className: `pill-power ${r}`
			});
		}
		return l;
	}
	_renderBatteryAlerts(e) {
		if (!this._hass?.states) return "";
		let t = Array.isArray(e) && e.length ? e : [];
		if (!t.length) {
			let e = this._ui?.modes || {}, n = /* @__PURE__ */ new Set();
			[
				"away",
				"home",
				"night"
			].forEach((t) => {
				let r = e[t]?.sensors;
				Array.isArray(r) && r.forEach((e) => n.add(e));
			}), this._ui?.modes?.__by_entity__ && Object.values(this._ui.modes.__by_entity__).forEach((e) => {
				[
					"away",
					"home",
					"night"
				].forEach((t) => {
					let r = e[t]?.sensors;
					Array.isArray(r) && r.forEach((e) => n.add(e));
				});
			}), t = Array.from(n);
		}
		if (!t.length) return "";
		let n = [];
		if (t.forEach((e) => {
			let t = this._hass?.states[e];
			if (!t) return;
			let r = this._getDevicePower(e, t);
			if (r.battery !== null && Number.isFinite(r.battery) && r.battery <= 20 && !r.mains) {
				let i = t.attributes?.friendly_name || e.split(".")[1] || e;
				n.push({
					name: i,
					level: r.battery
				});
			}
		}), !n.length) return "";
		let r = (e) => this._t(e);
		return `<div class="battery-alerts-container" style="display:flex; flex-direction:column; align-items:center; gap:6px; width:100%; max-width:90%; margin:0 auto 10px; pointer-events:none;">${n.map((e) => `<div class="battery-alert-pill" style="display:inline-flex; align-items:center; gap:6px; background:rgba(239,68,68,0.25); border:1px solid rgba(239,68,68,0.5); color:#fee2e2; padding:4px 12px; border-radius:999px; font-size:11px; font-weight:600; backdrop-filter:blur(12px); box-shadow:0 4px 12px rgba(0,0,0,0.3)">⚠️ ${r("battery_low")}: ${this._escapeHtml(e.name)} (${e.level}%)</div>`).join("")}</div>`;
	}
	_modeButtonIcon(e) {
		let t = {
			home: "<path d=\"M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5z\"/><path d=\"M9 21v-6h6v6\"/>",
			away: "<path d=\"M12 3 20 6.5v5.2c0 5-3.4 8-8 9.8-4.6-1.8-8-4.8-8-9.8V6.5z\"/><path d=\"M8.5 12h7M12 8.5v7\"/>",
			night: "<path d=\"M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5z\"/><path d=\"m17.5 4 .5 1.2L19.2 6l-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.8z\"/>",
			vacation: "<path d=\"M3 13.5 21 5l-6.8 15-2.3-6.2z\"/><path d=\"m11.9 13.8 3.4 3.4M11.9 13.8 7.2 12\"/>",
			disarm: "<path d=\"M12 3 20 6.5v5.2c0 5-3.4 8-8 9.8-4.6-1.8-8-4.8-8-9.8V6.5z\"/><path d=\"m8.5 12 2.2 2.2 4.8-5\"/>",
			sos: "<path d=\"M12 3 21 20H3z\"/><path d=\"M12 9v4.5M12 17h.01\"/>"
		};
		return `<svg class="mode-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t[e] || t.disarm}</svg>`;
	}
	_renderPremiumStatusIcon(e, t, n = "0") {
		let r = t ? "triggered" : {
			armed_home: "home",
			armed_away: "away",
			armed_night: "night",
			armed_vacation: "vacation",
			disarmed: "disarm"
		}[e] || "disarm", i = {
			home: "#ffb700",
			away: "#ff3344",
			night: "#3898ff",
			vacation: "#d69cff",
			disarm: "#00ff8c",
			triggered: "#ff1744"
		}[r], a = {
			home: "rgba(255,183,0,0.65)",
			away: "rgba(255,51,68,0.7)",
			night: "rgba(56,152,255,0.65)",
			vacation: "rgba(214,156,255,0.65)",
			disarm: "rgba(0,255,140,0.65)",
			triggered: "rgba(255,23,68,0.85)"
		}[r], o = {
			home: "<path d=\"M66 98 100 69l34 29v35H66z\"/><path d=\"M89 133v-22h22v22\"/>",
			away: "<path d=\"M100 70c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32z\"/><path d=\"M100 79v46M77 102h46\"/>",
			night: "<path d=\"M120 70a34 34 0 1 0 13 63 38 38 0 1 1-13-63z\"/><circle cx=\"134\" cy=\"73\" r=\"3\"/>",
			vacation: "<path d=\"m67 113 66-34-28 66-9-25z\"/><path d=\"m96 120 15 15M96 120l-20-6\"/>",
			disarm: "<path d=\"m76 104 16 16 34-39\"/>",
			triggered: "<path d=\"M100 65 139 137H61z\"/><path d=\"M100 90v23M100 124h.01\"/>"
		}[r];
		return `<svg viewBox="0 0 200 200" width="100%" height="100%" style="filter:drop-shadow(0 0 35px ${a}) drop-shadow(0 0 70px ${a}) drop-shadow(0 20px 40px rgba(0,0,0,.7));max-width:180px;margin:auto;display:block;overflow:visible" aria-label="${this._escapeHtml(r)}"><defs><linearGradient id="premium-${r}-${n}" x1="20%" y1="5%" x2="85%" y2="100%"><stop stop-color="#ffffff" stop-opacity=".85"/><stop offset=".18" stop-color="${i}" stop-opacity=".98"/><stop offset=".65" stop-color="${i}" stop-opacity=".4"/><stop offset="1" stop-color="#01040a" stop-opacity=".85"/></linearGradient><linearGradient id="shield-inner-${r}-${n}" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="#ffffff" stop-opacity=".3"/><stop offset=".35" stop-color="${i}" stop-opacity=".15"/><stop offset="1" stop-color="transparent"/></linearGradient><filter id="premium-glow-${r}-${n}" filterUnits="userSpaceOnUse" x="-80" y="-80" width="360" height="360" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="5.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z" fill="url(#premium-${r}-${n})" stroke="${i}" stroke-width="3.5" filter="url(#premium-glow-${r}-${n})"/><path d="M100 28 152 50v38c0 38-21 62-52 79-31-17-52-41-52-79V50z" fill="url(#shield-inner-${r}-${n})"/><path d="M100 31 148 51" stroke="#fff" stroke-opacity=".85" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="105" r="43" fill="rgba(2,6,14,.55)" stroke="rgba(255,255,255,.35)" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#premium-glow-${r}-${n})">${o}</g><circle cx="100" cy="105" r="55" fill="none" stroke="${i}" stroke-opacity=".65" stroke-width="2.5"><animate attributeName="r" values="50;62;50" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;.08;.8" dur="3.2s" repeatCount="indefinite"/></circle></svg>`;
	}
	_getIntelligentSVG(e, t, n, r, i = "0") {
		return this._renderPremiumStatusIcon(e, r, i);
	}
	_renderEntries() {
		this._sosBound = !1;
		let e = this.shadowRoot?.getElementById("hero-clock-time"), t = this.shadowRoot?.getElementById("hero-clock-date"), n = this.shadowRoot?.getElementById("hero-weather-pill"), r = this.shadowRoot?.getElementById("hero-security-pill");
		if (e || t || n || r) {
			let i = /* @__PURE__ */ new Date(), a = this._formatTime(i), o = this._getWeatherEntity().state || "sunny", s = this._hass?.states?.["sun.sun"]?.state === "below_horizon", c = this._weatherPresentation(o, s), l = this._dashboard?.entries || [], u = (e) => this._t(e), d = l.some((e) => {
				let t = this._hass?.states[e.entity_id]?.state || e.state;
				return String(t).startsWith("armed") || t === "triggered" || t === "pending";
			});
			e && (e.textContent = a), t && (t.textContent = i.toLocaleDateString(this._getLocale(), {
				weekday: "short",
				month: "short",
				day: "numeric"
			})), n && (n.textContent = `${c.icon} ${c.label}`), r && (r.innerHTML = `<i class="hero-live" style="background:${d ? "#ffb54d" : "#55df91"};box-shadow:0 0 9px ${d ? "#ffb54d" : "#55df91"}"></i>${this._escapeHtml(u(d ? "system_armed" : "system_disarmed"))}`);
		}
		typeof window.mountSecurityConsole == "function" && window.mountSecurityConsole(this);
	}
	async _exitFullscreenView() {
		let e = this._fullscreenIdx >= 0 ? this._fullscreenIdx : 0, t = (this._dashboard?.entries || [])[e], n = t && (t.pin_configured === !0 || t.user_pin_configured === !0), r = async () => {
			if (document.fullscreenElement || document.webkitFullscreenElement) try {
				document.exitFullscreen ? await document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
			} catch {}
			(this._kioskTarget || this.shadowRoot.querySelector(".entry.ios-fullscreen"))?.classList.remove("ios-fullscreen"), this.shadowRoot.querySelectorAll(".entry.ios-fullscreen").forEach((e) => e.classList.remove("ios-fullscreen")), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskEntryId = null, this._kioskTarget = null, document.body.style.overflow = "", this.dispatchEvent(new CustomEvent("argus-fullscreen-changed", { detail: { fullscreen: !1 } })), this._renderEntries(!0);
		};
		if (!n) {
			await r();
			return;
		}
		this._showPinModal(async (e) => {
			try {
				await this._send("argus/verify_master_pin_for_screen_unlock", {
					entry_id: t.entry_id,
					pin: e || ""
				}), this._closePinModal(), await r();
			} catch {
				let e = this.shadowRoot.getElementById("pin-error");
				e && (e.textContent = "❌ PIN incorrecto o error de acceso", e.style.color = "#ff4a4a");
			}
		});
	}
	_requestKioskUnlock() {
		if (!this._kioskLocked) return;
		let e = (this._dashboard?.entries || []).find((e) => e && e.entry_id === this._kioskEntryId), t = this.shadowRoot.getElementById("pin-error");
		if (!e || !e.entry_id) {
			t && (t.textContent = "Cannot resolve Argus instance", t.style.color = "#ff4a4a");
			return;
		}
		let n = this._kioskTarget || this.shadowRoot.querySelector(".entry.ios-fullscreen") || this.shadowRoot.querySelector(".entry"), r = () => {
			document.exitFullscreen ? document.exitFullscreen().catch(() => {}) : document.webkitExitFullscreen && document.webkitExitFullscreen(), n && n.classList.remove("ios-fullscreen"), this.shadowRoot.querySelectorAll(".entry.ios-fullscreen").forEach((e) => {
				e.classList.remove("ios-fullscreen");
			}), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskEntryId = null, this._kioskTarget = null, document.body.style.overflow = "", this.dispatchEvent(new CustomEvent("argus-fullscreen-changed", { detail: { fullscreen: !1 } })), this._renderEntries(!0);
		};
		if (e.pin_configured !== !0) {
			r();
			return;
		}
		t && (t.textContent = ""), this._showPinModal(async (n) => {
			try {
				await this._send("argus/verify_master_pin_for_screen_unlock", {
					entry_id: e.entry_id,
					pin: n || ""
				}), this._closePinModal(), r();
			} catch (e) {
				t && (t.textContent = e.message || this._t("pin_disarm_error"), t.style.color = "#ff4a4a");
			}
		});
	}
	_toggleFullscreen(e) {
		if (this._kioskLocked) {
			this._requestKioskUnlock();
			return;
		}
		let t = e || this.shadowRoot.querySelector(".entry"), n = t?.querySelector(".entry-fs") || t?.querySelector("[data-fullscreen]"), r = parseInt(n?.dataset?.fullscreen ?? 0), i = isNaN(r) || r < 0 ? 0 : r, a = this._dashboard?.entries?.[i] || this._dashboard?.entries?.[0];
		this._kioskEntryId = a?.entry_id || null, this._kioskTarget = t, this._kioskLocked = !1, this._fullscreenIdx = i, this.classList.add("fullscreen-active"), document.body.style.overflow = "hidden", this.dispatchEvent(new CustomEvent("argus-fullscreen-changed", { detail: { fullscreen: !0 } })), this._renderEntries(!0);
		let o = this.requestFullscreen || this.webkitRequestFullscreen || t?.requestFullscreen || t?.webkitRequestFullscreen;
		o && o.call(this).catch(() => {});
	}
	_healthText() {
		let e = {
			es: {
				title: "Centro de salud",
				healthy: "Sistema saludable",
				warning: "Requiere atención",
				critical: "Dispositivos sin conexión",
				devices: "dispositivos configurados",
				offline: "sin conexión",
				low: "batería baja",
				battery: "Batería",
				none: "No hay dispositivos seleccionados en los modos.",
				local: "Local-first activo",
				confirm: "Confirmación inteligente",
				help: "Requiere señales independientes en una ventana de tiempo. Humo, gas, CO y seguridad siempre activan inmediatamente.",
				save: "Guardar",
				saved: "Guardado"
			},
			en: {
				title: "Health center",
				healthy: "System healthy",
				warning: "Attention required",
				critical: "Devices offline",
				devices: "configured devices",
				offline: "offline",
				low: "low batteries",
				battery: "Battery",
				none: "No devices are selected in the modes.",
				local: "Local-first active",
				confirm: "Intelligent confirmation",
				help: "Requires independent signals within a window. Smoke, gas, CO and safety always trigger immediately.",
				save: "Save",
				saved: "Saved"
			}
		};
		return e[this._getCurrentLangCode()] || e.en;
	}
	_renderHealthCenter() {
		let e = this._healthText(), t = this.shadowRoot.getElementById("h-health-title"), n = this.shadowRoot.getElementById("health-local-badge"), r = this.shadowRoot.getElementById("health-center");
		t && (t.textContent = e.title), n && (n.textContent = e.local);
		let i = this._ui?.intelligent_confirmation || {
			enabled: !1,
			window_seconds: 15,
			required_signals: 2
		}, a = this.shadowRoot.getElementById("confirm-enabled"), o = this.shadowRoot.getElementById("confirm-signals"), s = this.shadowRoot.getElementById("confirm-window");
		a && (a.checked = !!i.enabled), o && (o.value = String(i.required_signals || 2)), s && (s.value = String(i.window_seconds || 15));
		let c = this.shadowRoot.getElementById("confirm-label");
		c && (c.textContent = e.confirm);
		let l = this.shadowRoot.getElementById("confirm-help");
		l && (l.textContent = e.help);
		let u = this.shadowRoot.getElementById("btn-save-confirmation");
		if (u && u.dataset.saved !== "1" && (u.textContent = e.save), this._renderStateSchedule(), !r) return;
		let d = this._systemHealth;
		if (!d) {
			r.innerHTML = `<div class="small" style="padding:10px">${this._escapeHtml(e.none)}</div>`;
			return;
		}
		let f = Array.isArray(d.batteries) ? d.batteries : [], p = f.filter((e) => e.low), m = Array.isArray(d.unavailable) ? d.unavailable : [], h = Array.isArray(d.configured_devices) ? d.configured_devices : [], g = d.status === "critical" ? e.critical : d.status === "warning" ? e.warning : e.healthy, _ = new Map(f.map((e) => [e.entity_id, e])), v = h.map((t) => {
			let n = _.get(t.entity_id), r = t.state === "unknown" || t.state === "unavailable", i = [r ? e.offline : t.state];
			return n?.value !== null && n?.value !== void 0 && i.push(`${n.value}${n.unit || "%"}`), {
				name: t.name,
				value: i.join(" · "),
				alert: r || !!n?.low
			};
		});
		r.innerHTML = `<div class="health-summary">
      <div class="health-score" style="--score:${Number(d.score) || 0}" aria-label="${Number(d.score) || 0}%">${Number(d.score) || 0}</div>
      <div><div style="font-weight:850">${this._escapeHtml(g)}</div><div class="small" style="opacity:.6;margin-top:3px">${h.length} ${this._escapeHtml(e.devices)}</div></div>
    </div><div class="health-metrics">
      <div class="health-metric"><strong>${m.length}</strong><span>${this._escapeHtml(e.offline)}</span></div>
      <div class="health-metric"><strong>${p.length}</strong><span>${this._escapeHtml(e.low)}</span></div>
      <div class="health-metric"><strong>${f.length}</strong><span>${this._escapeHtml(e.battery)}</span></div>
    </div><div class="health-list" style="margin-top:13px">${v.length ? v.map((e) => `<div class="health-row"><span>${this._escapeHtml(e.name)}</span><strong style="color:${e.alert ? "#ff8a80" : "inherit"}">${this._escapeHtml(e.value)}</strong></div>`).join("") : `<div class="small" style="opacity:.55">${this._escapeHtml(e.none)}</div>`}</div>`;
	}
	async _saveIntelligentConfirmation() {
		let e = {
			enabled: !!this.shadowRoot.getElementById("confirm-enabled")?.checked,
			required_signals: Number(this.shadowRoot.getElementById("confirm-signals")?.value || 2),
			window_seconds: Number(this.shadowRoot.getElementById("confirm-window")?.value || 15)
		};
		try {
			await this._send("argus/save_ui", { intelligent_confirmation: e }), this._ui.intelligent_confirmation = e;
			let t = this.shadowRoot.getElementById("btn-save-confirmation");
			t && (t.textContent = `✓ ${this._healthText().saved}`, t.dataset.saved = "1", setTimeout(() => {
				t.dataset.saved = "0", t.textContent = this._healthText().save;
			}, 1600));
		} catch (e) {
			alert(this._format("generic_error", { error: e.message }));
		}
	}
	_scheduleText() {
		let e = {
			es: {
				title: "Horarios locales de estado",
				all: "Todos los días",
				weekdays: "Lunes a viernes",
				weekend: "Fin de semana",
				empty: "Sin horarios. Argus conservará el último estado confirmado.",
				disarmed: "Desarmado",
				home: "En casa",
				away: "Ausente",
				night: "Noche",
				vacation: "Vacaciones"
			},
			en: {
				title: "Local state schedules",
				all: "Every day",
				weekdays: "Monday to Friday",
				weekend: "Weekend",
				empty: "No schedules. Argus will preserve the last confirmed state.",
				disarmed: "Disarmed",
				home: "Home",
				away: "Away",
				night: "Night",
				vacation: "Vacation"
			}
		};
		return e[this._getCurrentLangCode()] || e.en;
	}
	_renderStateSchedule() {
		let e = this._scheduleText(), t = this.shadowRoot.getElementById("schedule-title");
		t && (t.textContent = e.title);
		let n = this.shadowRoot.getElementById("schedule-state"), r = this.shadowRoot.getElementById("schedule-days");
		if (n) {
			let t = n.value;
			n.innerHTML = `<option value="disarmed">${e.disarmed}</option><option value="armed_home">${e.home}</option><option value="armed_away">${e.away}</option><option value="armed_night">${e.night}</option><option value="armed_vacation">${e.vacation}</option>`, n.value = t || "armed_night";
		}
		if (r) {
			let t = r.value;
			r.innerHTML = `<option value="all">${e.all}</option><option value="weekdays">${e.weekdays}</option><option value="weekend">${e.weekend}</option>`, r.value = t || "all";
		}
		let i = this.shadowRoot.getElementById("schedule-list");
		if (!i) return;
		let a = Array.isArray(this._ui?.state_schedule) ? this._ui.state_schedule : [], o = {
			es: "Eliminar horario",
			en: "Delete schedule"
		}[this._getCurrentLangCode()] || "Delete schedule", s = (t) => ({
			disarmed: e.disarmed,
			armed_home: e.home,
			armed_away: e.away,
			armed_night: e.night,
			armed_vacation: e.vacation
		})[t] || t, c = (t) => t?.length === 2 ? e.weekend : t?.length === 5 ? e.weekdays : e.all;
		i.innerHTML = a.length ? a.map((e) => `<div class="schedule-row"><span><strong>${this._escapeHtml(e.time || "")}</strong> · ${this._escapeHtml(s(e.state))} · ${this._escapeHtml(c(e.days))}</span><button class="ghost" data-schedule-delete="${this._escapeHtml(e.id)}" aria-label="${this._escapeHtml(o)}">×</button></div>`).join("") : `<div class="small" style="opacity:.55">${this._escapeHtml(e.empty)}</div>`, i.querySelectorAll("[data-schedule-delete]").forEach((e) => e.addEventListener("click", () => this._deleteStateSchedule(e.dataset.scheduleDelete)));
	}
	async _addStateSchedule() {
		let e = this.shadowRoot.getElementById("schedule-state")?.value, t = this.shadowRoot.getElementById("schedule-time")?.value, n = this.shadowRoot.getElementById("schedule-days")?.value || "all";
		if (!e || !/^([01]\d|2[0-3]):[0-5]\d$/.test(t || "")) return;
		let r = n === "weekdays" ? [
			0,
			1,
			2,
			3,
			4
		] : n === "weekend" ? [5, 6] : [
			0,
			1,
			2,
			3,
			4,
			5,
			6
		], i = Array.isArray(this._ui?.state_schedule) ? [...this._ui.state_schedule] : [];
		i.push({
			id: `schedule_${Date.now()}`,
			state: e,
			time: t,
			days: r,
			enabled: !0
		}), await this._saveStateSchedule(i);
	}
	async _deleteStateSchedule(e) {
		let t = (this._ui?.state_schedule || []).filter((t) => t.id !== e);
		await this._saveStateSchedule(t);
	}
	async _saveStateSchedule(e) {
		try {
			await this._send("argus/save_ui", { state_schedule: e }), this._ui.state_schedule = e, this._renderStateSchedule();
		} catch (e) {
			alert(this._format("generic_error", { error: e.message }));
		}
	}
	_localizeActivityDetail(e, t) {
		let n = String(t || "").trim(), r = n.toLocaleLowerCase(), i = {
			home: [
				"en casa",
				"home",
				"casa",
				"maison",
				"em casa",
				"дом",
				"在家"
			],
			away: [
				"ausente",
				"away",
				"absent",
				"fora",
				"fuori",
				"ушёл",
				"外出"
			],
			night: [
				"noche",
				"night",
				"nuit",
				"noite",
				"notte",
				"ночь",
				"夜间"
			],
			vacation: [
				"vacaciones",
				"vacation",
				"vacances",
				"férias",
				"vacanza",
				"отпуск",
				"度假"
			]
		}, a = Object.entries(i).find(([, e]) => e.some((e) => r.includes(e)))?.[0];
		if (e === "pin_reset") return this._t("log_detail_pin_reset");
		if (e === "pin_reset_failed") return this._t("log_detail_pin_reset_failed");
		if (e === "state_restored") {
			let e = {
				disarmed: this._t("disarmed"),
				armed_home: this._t("mode_home"),
				armed_away: this._t("mode_away"),
				armed_night: this._t("mode_night"),
				armed_vacation: this._t("mode_vacation"),
				triggered: this._t("log_triggered")
			}, t = this._t("disarmed"), r = n.toLowerCase();
			for (let [n, i] of Object.entries(e)) if (r.includes(n) || r.includes(i.toLowerCase())) {
				t = i;
				break;
			}
			return `${this._t("log_action_state_restored")}: ${t}`;
		}
		if (e === "confirmation_pending") return n;
		if (e === "disarmed" || e === "disarm") return this._t("log_detail_disarm");
		if (e === "armed" || e === "arm") return a ? `${this._t("manual_arm")} (${this._t(`mode_${a}`)})` : this._t("manual_arm");
		if (e === "triggered") {
			let e = n.match(/\((?:modo|mode|modalità|режим|模式)\s*:?\s*([^)]+)\)/i), t = "";
			if (e && e[1]) {
				let n = e[1].toLowerCase(), r = Object.entries(i).find(([, e]) => e.some((e) => n.includes(e)))?.[0];
				t = r ? this._t(`mode_${r}`) : e[1];
			}
			let r = n.match(/(?:sensor|capteur|sensore|датчик|传感器)\s*:\s*(.+)$/i)?.[1]?.replace(/\s*\((?:modo|mode|modalità|режим|模式)\s*:?[^)]*\)\s*$/i, "")?.trim(), a = r ? `${this._t("log_sensor")}: ${r}` : this._t("log_detail_triggered");
			return t && (a += ` (${this._t("log_mode")}: ${t})`), a;
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
		if (e === "audit_log_cleared") return t || this._t("log_action_audit_log_cleared") || "Historial de actividad eliminado";
		if (e.includes("pin_updated") || e.includes("access_pin_updated")) return this._t("update_pin");
		let o = `log_action_${String(e).toLowerCase()}`, s = this._t(o);
		if (s !== o) return s;
		let c = n, l = {
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
		for (let [e, t] of Object.entries(l)) if (t && t !== e) {
			let n = RegExp(`\\b${e}\\b`, "gi");
			c = c.replace(n, t);
		}
		return c;
	}
	_renderActivityLog() {
		let e = this.shadowRoot.getElementById("h-activity-log"), t = this.shadowRoot.getElementById("activity-log");
		if (t) {
			e && (e.textContent = this._t("activity_log"));
			try {
				let e = Array.isArray(this._ui?.audit_log) ? this._ui.audit_log.filter((e) => e && typeof e == "object" && !Array.isArray(e)) : [];
				if (!e.length) {
					let e = this._activityTimelineError ? this._t("history_unavailable") : this._t("log_no_events");
					t.innerHTML = `<div class="small" style="padding:8px 0;opacity:.72">${this._escapeHtml(e)}</div>`;
					return;
				}
				let n = t.closest(".panel"), r = n && n.getAttribute("data-size") === "S";
				t.innerHTML = e.slice(0, r ? 1 : 30).map((e) => {
					let t = String(e.action || ""), n = String(e.detail || ""), r = String(e.user || e.actor || ""), i = e.ts ? new Date(e.ts) : null, a = "";
					if (i && !Number.isNaN(i.getTime())) try {
						a = i.toLocaleString(this._getLocale());
					} catch {
						a = i.toISOString();
					}
					let o = this._localizeActivityDetail(t, n), s = "", c = t, l = "", u = String(t || "").toLowerCase();
					if (u.endsWith("_rejected")) l = "log-item--triggered", s = "trigger", c = this._t("log_action_rejected");
					else if (u.includes("arm") && !u.includes("disarm")) l = "log-item--armed", s = "arm", c = this._t("log_armed");
					else if (u.includes("disarm")) l = "log-item--disarmed", s = "disarm", c = this._t("log_disarmed");
					else if (u.includes("trigger") || u.includes("alarm")) l = "log-item--triggered", s = "trigger", c = this._t("log_triggered");
					else if (u === "pin_reset") l = "log-item--disarmed", s = "disarm", c = this._t("badge_pin_reset");
					else if (u === "pin_reset_failed") l = "log-item--triggered", s = "trigger", c = this._t("badge_pin_reset_failed");
					else if (u === "sos" || u === "sos_stopped" || u === "panic_stopped") l = "log-item--triggered", s = "trigger", c = this._t("log_action_sos");
					else if (u === "audit_log_cleared") l = "log-item--triggered", s = "trigger", c = "🗑️ " + (this._t("log_action_audit_log_cleared") || "Historial Borrado");
					else if (u === "ui_configuration_updated") c = this._t("settings");
					else {
						let e = `log_action_${u}`, n = this._t(e);
						c = n && n !== e ? n : this._t(u) === u ? this._t("log_action_analysis") || t : this._t(u);
					}
					let d = "";
					return d = r && r !== "Argus" && r !== "system" ? `👤 ${r}` : t.toLowerCase().includes("homekit") || o.toLowerCase().includes("homekit") ? "🍎 HomeKit" : "🤖 Argus", `<div class="log-item ${l}">
          <div class="log-icon"><div class="glass-orb"></div></div>
          <div class="log-body">
            <div class="log-title">
              <span class="log-badge ${s}">${this._escapeHtml(c)}</span>
              <span style="font-weight:500">${this._escapeHtml(o)}</span>
            </div>
            <div class="log-meta">${this._escapeHtml(a)} &nbsp;·&nbsp; ${this._escapeHtml(d)}</div>
          </div>
        </div>`;
				}).join("");
			} catch (e) {
				console.error("Argus activity log render failed:", e), t.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("log_no_events")}</div>`;
			}
		}
	}
	_renderModeTabs() {
		let e = this.shadowRoot.getElementById("mode-tabs");
		if (!e) return;
		let t = [
			"disarmed",
			"home",
			"away",
			"night",
			"sos"
		], n = {
			disarmed: "🔓",
			home: "🏠",
			away: "🔴",
			night: "🌙",
			sos: "🚨"
		}, r = {
			disarmed: this._t("disarmed"),
			home: this._t("mode_home"),
			away: this._t("mode_away"),
			night: this._t("mode_night"),
			sos: this._t("sos_config_title") || "CONFIGURACIÓN SOS"
		}, i = e.querySelector(".tab-bubble"), a = e.querySelectorAll(".tab");
		!i || a.length !== t.length ? (e.className = "tabs", e.innerHTML = `
        <div class="tab-bubble"></div>
        ${t.map((e) => `
          <button type="button" class="tab ${e === this._mode ? "active" : ""}" data-mode="${e}">
            <span class="tab-icon" style="font-size: 20px;">${n[e]}</span>
            <span class="tab-label">${r[e]}</span>
          </button>
        `).join("")}
      `, i = e.querySelector(".tab-bubble"), e.querySelectorAll("[data-mode]").forEach((e) => e.addEventListener("click", (t) => {
			t.preventDefault();
			let n = e.dataset.mode;
			this._mode !== n && (this._mode = n, this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")));
		}))) : a.forEach((e) => {
			let t = e.dataset.mode;
			if (t && r[t]) {
				let n = e.querySelector(".tab-label");
				n && n.textContent !== r[t] && (n.textContent = r[t]);
			}
		});
		let o = e.querySelectorAll(".tab"), s = null;
		if (o.forEach((e) => {
			e.dataset.mode === this._mode ? (e.classList.add("active"), s = e) : e.classList.remove("active");
		}), i && s) {
			i.className = `tab-bubble bubble-${this._mode}`;
			let t = () => {
				let t = e.querySelector(".tab.active") || s, n = e.querySelector(".tab-bubble") || i;
				if (!t || !n) return;
				let r = t.offsetLeft, a = t.offsetWidth;
				a > 0 && (n.style.width = `${a}px`, n.style.transform = `translate3d(${r}px, 0, 0)`);
			};
			requestAnimationFrame(t), setTimeout(t, 60), setTimeout(t, 250), !e.__argusTabObserver && typeof ResizeObserver < "u" && (e.__argusTabObserver = new ResizeObserver(() => {
				t();
			}), e.__argusTabObserver.observe(e));
		}
	}
	_currentModeConfig() {
		let e = {
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
		(!this._ui || typeof this._ui != "object" || Array.isArray(this._ui)) && (this._ui = {
			modes: {},
			dashboard: {}
		}), (!this._ui.modes || typeof this._ui.modes != "object" || Array.isArray(this._ui.modes)) && (this._ui.modes = {}), (!this._ui.modes.__by_entity__ || typeof this._ui.modes.__by_entity__ != "object" || Array.isArray(this._ui.modes.__by_entity__)) && (this._ui.modes.__by_entity__ = {});
		let t = this._modeEntryId;
		if ((!t || t === "default") && (t = this._dashboard?.entries?.[0]?.entity_id || "default"), this._modeEntryId = t, this._mode = this._mode || "disarmed", (!this._ui.modes.__by_entity__[t] || typeof this._ui.modes.__by_entity__[t] != "object" || Array.isArray(this._ui.modes.__by_entity__[t])) && (this._ui.modes.__by_entity__[t] = {}), !this._ui.modes.__by_entity__[t][this._mode] || typeof this._ui.modes.__by_entity__[t][this._mode] != "object" || Array.isArray(this._ui.modes.__by_entity__[t][this._mode])) {
			let n = {};
			this._ui.modes[this._mode] && typeof this._ui.modes[this._mode] == "object" && !Array.isArray(this._ui.modes[this._mode]) && (n = this._ui.modes[this._mode]), this._ui.modes.__by_entity__[t][this._mode] = {
				...e,
				...n
			};
		}
		let n = this._ui.modes.__by_entity__[t][this._mode], r = n && typeof n == "object" && !Array.isArray(n) ? n : e;
		return {
			...e,
			...r,
			sensors: Array.isArray(r?.sensors) ? r.sensors : [],
			bypassed_sensors: Array.isArray(r?.bypassed_sensors) ? r.bypassed_sensors : [],
			sirens: Array.isArray(r?.sirens) ? r.sirens : [],
			entry_sensors: Array.isArray(r?.entry_sensors) ? r.entry_sensors : [],
			external_panels: Array.isArray(r?.external_panels) ? r.external_panels : Array.isArray(r?.sync_panels) ? r.sync_panels : [],
			require_closed: typeof r?.require_closed == "boolean" && r.require_closed,
			open_sensors_policy: r?.open_sensors_policy === "pending" || r?.open_sensors_policy === "allow" || r?.open_sensors_policy === "block" ? r.open_sensors_policy : r?.require_closed ? "block" : "allow",
			arming_time: r?.arming_time !== void 0 && r?.arming_time !== null ? r.arming_time : null,
			entry_delay: r?.entry_delay !== void 0 && r?.entry_delay !== null ? r.entry_delay : null,
			light_siren_settings: r?.light_siren_settings && typeof r.light_siren_settings == "object" ? r.light_siren_settings : {},
			mqtt_enabled: r?.mqtt_enabled !== void 0 && r?.mqtt_enabled !== null ? r.mqtt_enabled : null
		};
	}
	_toggleEntrySensor(e) {
		if (!this._isAdmin) return;
		let t = this._currentModeConfig(), n = Array.isArray(t.entry_sensors) ? [...t.entry_sensors] : [];
		t.entry_sensors = n.includes(e) ? n.filter((t) => t !== e) : [...n, e], this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
	}
	_renderModeView() {
		let e = this.shadowRoot.getElementById("mode-view");
		e && (e.classList.remove("bounce-in"), e.offsetWidth, e.classList.add("bounce-in"));
		let t = !this._isAdmin;
		if (this._mode === "sos") {
			let n = this._emergencyNumber || this._ui?.emergency_number || "911", r = this._panicOutputs || this._ui?.panic_outputs || [];
			e.innerHTML = `
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
                <input id="mode-emergency-number-input" class="glass-control" inputmode="tel" maxlength="16" value="${this._escapeHtml(n)}" style="width:130px;min-height:38px;padding:6px 10px;font-size:18px;font-weight:900;text-align:center;border-radius:10px;background:rgba(0,0,0,0.25);color:#fff;border:1px solid rgba(255,255,255,0.2);letter-spacing:1.5px">
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
              ${t ? "" : `
                <button class="ghost" id="btn-mode-select-sos-outputs" style="padding:8px 16px;font-size:12px;font-weight:800;border-radius:12px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.16);cursor:pointer;">
                  ＋ ${this._t("sos_select_outputs") || "Seleccionar Luces, Sirenas o Escenas"}
                </button>
              `}
            </div>
            <div id="sos-output-chips" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px;width:100%;">
              ${r.length ? r.map((e) => this._chip(e, "sos_output")).join("") : `<div class="mode-sensor-none" style="grid-column:1/-1;">${this._t("sos_no_outputs") || "Ningún dispositivo configurado"}</div>`}
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
        ${t ? "" : `
          <div style="margin-top:16px;display:flex;flex-direction:column;gap:8px;">
            <button class="primary" id="save-sos-mode" style="width:100%;height:48px;font-size:14px;box-shadow:0 8px 20px rgba(0,0,0,0.2);cursor:pointer;">
              ${this._t("save_config") || "Guardar Configuración"}
            </button>
            <span id="mode-status" style="display:block;text-align:center;font-size:13px;font-weight:700;min-height:20px;transition:opacity .4s;opacity:1;color:var(--primary-color,#03a9f4)"></span>
          </div>
        `}
      `, t || (e.querySelector("#btn-mode-select-sos-outputs")?.addEventListener("click", () => this._openModal("panic")), e.querySelectorAll("[data-remove]").forEach((e) => e.addEventListener("click", () => this._removeChip(e.dataset.remove))), e.querySelector("#save-sos-mode")?.addEventListener("click", () => this._saveSosMode()));
			return;
		}
		let n = this._currentModeConfig(), r = n.sensors || [], i = n.bypassed_sensors || [], a = n.sirens || [], o = n.external_panels || [], s = this._dashboard?.entries || [], c = this._modeEntryId || s[0]?.entity_id || "";
		e.innerHTML = `
      <div class="mode-grid-layout">
        ${s.length > 1 ? `
        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("alarm_instance")}</div>
          <select id="mode-instance-select" style="width:100%; padding:10px; border-radius:10px; background:rgba(255,255,255,0.05); color:inherit; border:1px solid rgba(255,255,255,0.1)">${s.map((e) => `<option value="${this._escapeHtml(e.entity_id)}" ${e.entity_id === c ? "selected" : ""}>${this._escapeHtml(e.title || e.entity_id)}</option>`).join("")}</select>
        </div>` : ""}

        <div class="mode-section-card">
          <div class="mode-section-title">🛡️ ${this._t("sensor_section")}</div>
          <div class="mode-sensor-grid" id="sensor-chips">
            ${r.map((e) => this._chip(e, "sensor")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${t ? "" : `
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
            ${i.map((e) => this._chip(e, "bypass")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${t ? "" : `<button class="ghost" data-open-selector="bypass" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("add_btn")}</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">📢 ${this._t("siren_section")}</div>
          <div class="mode-sensor-grid" id="siren-chips">
            ${a.map((e) => this._chip(e, "siren")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${a.filter((e) => e.startsWith("light.")).map((e) => {
			let t = n.light_siren_settings?.[e] || {}, r = "#" + (Array.isArray(t.rgb_color) ? t.rgb_color : [
				255,
				0,
				0
			]).map((e) => Number(e).toString(16).padStart(2, "0")).join("");
			return `<details class="light-siren-settings"><summary>⚙ ${this._escapeHtml(this._hass?.states?.[e]?.attributes?.friendly_name || e)}</summary><label>${this._t("light_siren_color") || "Color"} <input type="color" data-light-siren-color="${this._escapeHtml(e)}" value="${r}"></label><label class="checkbox-label"><input type="checkbox" data-light-siren-flash="${this._escapeHtml(e)}" ${t.gentle_flash ? "checked" : ""}> ${this._t("light_siren_flash") || "Destello suave si está disponible"}</label></details>`;
		}).join("")}
          <div class="mode-section-title" style="margin-top:14px;font-size:12px">🔗 ${this._t("external_panels") || "Paneles de alarma externos"}</div>
          <div class="mode-sensor-grid" id="external-panel-chips">
            ${o.map((e) => this._chip(e, "external_panel")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${t ? "" : `<button class="ghost" data-open-selector="siren" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("select_btn")}</button><button class="ghost" data-open-selector="external_panel" style="margin-top:8px; width:100%; justify-content:center; font-size:12px">${this._t("add_btn")}</button>`}
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
            ${(n.entry_sensors || []).map((e) => this._chip(e, "entry")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${t ? "" : `<button class="ghost" data-open-selector="entry" style="margin-top:10px;width:100%;justify-content:center;font-size:12px">${this._t("select_entry_sensors")}</button>`}
          <label class="checkbox-label mode-mqtt-row">
            <input type="checkbox" id="mode-mqtt-enabled" ${n.mqtt_enabled === !0 ? "checked" : ""}>
            <span style="font-size:12px;font-weight:600">${this._t("mqtt_label")}</span>
          </label>
        </div>
      </div>
      ${t ? "" : `<div style="margin-top:16px;display:flex;flex-direction:column;gap:8px;"><button class="primary" id="save-mode" style="width:100%;height:48px;font-size:14px;box-shadow:0 8px 20px rgba(0,0,0,0.2)">${this._t("save_config")}</button><span id="mode-status" style="display:block;text-align:center;font-size:13px;font-weight:700;min-height:20px;transition:opacity .4s;opacity:1;color:var(--primary-color,#03a9f4)"></span></div>`}
    `, e.querySelector("#mode-instance-select")?.addEventListener("change", (e) => {
			this._modeEntryId = e.target.value, this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
		}), t || (e.querySelectorAll("[data-open-selector]").forEach((e) => e.addEventListener("click", () => this._openModal(e.dataset.openSelector))), e.querySelectorAll("[data-remove]").forEach((e) => e.addEventListener("click", () => this._removeChip(e.dataset.remove))), e.querySelectorAll("[data-toggle-delay]").forEach((e) => e.addEventListener("click", () => this._toggleEntrySensor(e.dataset.toggleDelay))), e.querySelector("#save-mode")?.addEventListener("click", () => this._saveMode()));
	}
	_chip(e, t) {
		let n = this._hass?.states?.[e]?.state, r = [
			"on",
			"unlocked",
			"open",
			"recording",
			"active",
			"motion"
		].includes(n), i = this._hass?.states?.[e]?.attributes?.friendly_name || e, a = !this._isAdmin, o = t === "sensor" || t === "bypass" ? `<span class="pill-dot ${r ? "open" : ""}" title="${n}"></span>` : "", s = "", c = "";
		if (t === "sensor" || t === "bypass" || t === "entry") {
			let t = this._hass?.states?.[e], n = this._getDevicePower(e, t);
			if (s = `<span class="pill-status">${r ? this._t("status_open") : this._t("status_closed")}</span>`, n.mains && (c += "<span class=\"pill-power\">🔌 AC</span>"), n.battery !== null) {
				let e = n.battery === 0, t = n.battery <= 10 && !e, r = e ? "🔋 ❌" : `🔋 ${n.battery}%`;
				c += `<span class="pill-power ${e ? "dead" : t ? "low" : ""}">${r}</span>`;
			}
		}
		let l = this._dashboard?.entries?.some((e) => this._hass?.states?.[e.entity_id]?.state === "triggered"), u = "";
		return t === "siren" && l && (u = " siren-active"), (t === "sensor" || t === "bypass" || t === "entry") && l && r && (u = " triggered-sensor"), `
      <span class="sensor-pill${u}">
        ${o}
        <span class="pill-content">
          <span class="pill-name">${this._escapeHtml(i)}</span>
          ${s}
          ${c}
        </span>
        ${a ? "" : `<button data-remove="${t}:${e}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer; flex-shrink:0;">✕</button>`}
      </span>
    `;
	}
	_removeChip(e) {
		if (!this._isAdmin) return;
		let [t, n] = e.split(":");
		if (t === "sos_output" || t === "panic") {
			this._panicOutputs = (this._panicOutputs || []).filter((e) => e !== n), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
			return;
		}
		let r = this._currentModeConfig(), i = t === "sensor" ? "sensors" : t === "bypass" ? "bypassed_sensors" : t === "entry" ? "entry_sensors" : t === "external_panel" ? "external_panels" : "sirens", a = this._modeEntryId;
		(!a || a === "default") && (a = this._dashboard?.entries?.[0]?.entity_id || "default"), this._modeEntryId = a, this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {}, this._ui.modes.__by_entity__[a] = this._ui.modes.__by_entity__[a] || {}, this._ui.modes.__by_entity__[a][this._mode] = {
			...r,
			[i]: (r[i] || []).filter((e) => e !== n)
		}, this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
	}
	async _saveSosMode() {
		let e = this.shadowRoot.getElementById("mode-status"), t = this.shadowRoot.getElementById("mode-emergency-number-input"), n = this._normaliseEmergencyNumber(t?.value || this._emergencyNumber || "911");
		this._emergencyNumber = n;
		try {
			e && (e.textContent = "...", e.className = "status", e.style.opacity = "1"), await this._send("argus/save_ui", {
				emergency_number: n,
				panic_outputs: this._panicOutputs || []
			}), this._ui ||= {}, this._ui.emergency_number = n, this._ui.panic_outputs = this._panicOutputs || [], e && (e.textContent = "✓ " + (this._t("mode_saved") || "Configuración SOS guardada"), e.className = "status ok", e.style.opacity = "1", setTimeout(() => {
				e && (e.textContent = "");
			}, 3e3));
		} catch (t) {
			e && (e.textContent = this._format("generic_error", { error: t.message }), e.className = "status err", e.style.opacity = "1");
		}
	}
	async _saveMode() {
		let e = this._currentModeConfig(), t = this.shadowRoot.getElementById("mode-require-closed"), n = this.shadowRoot.getElementById("mode-wait-if-open"), r = this.shadowRoot.getElementById("mode-arming-time"), i = this.shadowRoot.getElementById("mode-entry-delay"), a = this.shadowRoot.getElementById("mode-mqtt-enabled");
		t && (e.require_closed = t.checked), e.open_sensors_policy = t?.checked ? "block" : n?.checked ? "pending" : "allow", r && (e.arming_time = r.value ? parseInt(r.value) : 0), i && (e.entry_delay = i.value ? parseInt(i.value) : 0), a && (e.mqtt_enabled = a.checked), e.light_siren_settings = {}, this.shadowRoot.querySelectorAll("[data-light-siren-color]").forEach((t) => {
			let n = t.value || "#ff0000";
			e.light_siren_settings[t.dataset.lightSirenColor] = {
				rgb_color: [
					1,
					3,
					5
				].map((e) => parseInt(n.slice(e, e + 2), 16)),
				gentle_flash: !!this.shadowRoot.querySelector(`[data-light-siren-flash="${CSS.escape(t.dataset.lightSirenColor)}"]`)?.checked
			};
		}), this._runWithPin(async () => {
			let t = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || "default";
			this._ui.modes = this._ui.modes || {}, this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {}, this._ui.modes.__by_entity__[t] = this._ui.modes.__by_entity__[t] || {}, this._ui.modes.__by_entity__[t][this._mode] = { ...e };
			let n = this.shadowRoot.getElementById("mode-status");
			n && (n.textContent = "…", n.className = "status");
			try {
				await this._send("argus/save_mode_config", {
					entity_id: t,
					mode: this._mode,
					config: e
				}), n && (n.textContent = this._t("saved"), n.className = "status ok show"), setTimeout(() => {
					n && (n.textContent = "", n.className = "status");
				}, 3e3);
			} catch (e) {
				n && (n.textContent = "✗ " + (e.message || this._t("generic_error").replace(": {error}", "")), n.className = "status err show");
			}
		});
	}
	_renderAutomations() {
		let e = this.shadowRoot.getElementById("auto-view");
		if (e) {
			if (!this._dashboard?.entries?.length || !this._hass) {
				e.innerHTML = `<div class="small" style="padding:10px 0;opacity:.55">${this._t("searching_auto")}</div>`;
				return;
			}
			try {
				if (!this._relatedAutomationsQueried) {
					this._relatedAutomationsQueried = !0, this._cachedRelatedAutomations = /* @__PURE__ */ new Set(), (async () => {
						try {
							let e = [];
							for (let t of this._dashboard.entries) {
								let n = await this._hass.callWS({
									type: "search/related",
									item_type: "entity",
									item_id: t.entity_id
								});
								if (n && (n.automation && e.push(...n.automation), n.device && n.device.length)) for (let t of n.device) {
									let n = await this._hass.callWS({
										type: "search/related",
										item_type: "device",
										item_id: t
									});
									n && n.automation && e.push(...n.automation);
								}
							}
							this._cachedRelatedAutomations = new Set(e);
						} catch {
							this._cachedRelatedAutomations = /* @__PURE__ */ new Set();
						} finally {
							this._relatedAutomationsFetched = !0, this._renderAutomations();
						}
					})(), e.innerHTML = `<div class="small" style="padding:10px 0;opacity:.55">${this._t("searching_auto")}</div>`;
					return;
				}
				if (!this._relatedAutomationsFetched) return;
				let t = this._hass.states || {}, n = Object.values(t).filter((e) => {
					if (!e || !e.entity_id || !e.entity_id.startsWith("automation.")) return !1;
					let t = (e.attributes?.friendly_name || "").toLowerCase();
					return this._cachedRelatedAutomations.has(e.entity_id) || t.includes("argus") || e.entity_id.toLowerCase().includes("argus");
				});
				if (!n.length) {
					e.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("no_auto_linked")}</div>`;
					return;
				}
				let r = e.closest(".panel"), i = r && r.getAttribute("data-size") === "S";
				e.innerHTML = `<div style="display:flex;flex-direction:column;gap:12px;max-height:300px;overflow-y:auto;padding-right:8px">${n.slice(0, i ? 1 : 15).map((e) => {
					let t = e.attributes?.id || e.entity_id.replace("automation.", ""), n = e.attributes?.last_triggered ? new Date(e.attributes.last_triggered).toLocaleString(this._getLocale()) : this._t("never_triggered"), r = i ? "" : `<div class="small" style="opacity:0.7;margin-top:4px">${this._escapeHtml(n)}</div>`;
					return `
        <div class="list-item-card">
          <div>
            <div style="font-weight:700">${this._escapeHtml(e.attributes?.friendly_name || e.entity_id)}</div>
            ${r}
          </div>
          <button class="ghost" style="padding:6px 12px;background:rgba(255,255,255,0.08);border-radius:8px" data-edit-auto="${this._escapeHtml(t)}">✏️</button>
        </div>`;
				}).join("")}</div>`, e.querySelectorAll("[data-edit-auto]").forEach((e) => e.addEventListener("click", () => {
					history.pushState(null, "", `/config/automation/edit/${e.dataset.editAuto}`), window.dispatchEvent(new CustomEvent("location-changed"));
				}));
			} catch (t) {
				console.error("Argus automations render failed:", t), e.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("no_auto_linked")}</div>`;
			}
		}
	}
	_populateNotifSelect() {
		let e = this.shadowRoot.getElementById("notif-select");
		if (!e) return;
		let t = this._hass?.services?.notify || {}, n = Object.values(this._hass?.states || {}).filter((e) => e?.entity_id?.startsWith("notify.") && e.entity_id !== "notify.persistent_notification").map((e) => ({
			value: `entity:${e.entity_id}`,
			label: e.attributes?.friendly_name || e.entity_id
		})), r = Object.keys(t).filter((e) => ![
			"notify",
			"send_message",
			"persistent_notification"
		].includes(e) && !this._notifTargets.includes(e)).map((e) => ({
			value: e,
			label: e.replace(/_/g, " ")
		})), i = [...n, ...r].filter((e) => !this._notifTargets.includes(e.value));
		e.innerHTML = i.length ? i.map(({ value: e, label: t }) => `<option value="${this._escapeHtml(e)}">${this._escapeHtml(`🔔 ${t}`)}</option>`).join("") : `<option value="">— ${this._escapeHtml(this._t("notif_no_services"))} —</option>`;
	}
	_addNotifTarget() {
		let e = this.shadowRoot.getElementById("notif-select")?.value;
		e && !this._notifTargets.includes(e) && (this._notifTargets.push(e), this._renderNotifChips(), this._populateNotifSelect());
	}
	_renderNotifChips() {
		let e = this.shadowRoot.getElementById("notif-targets");
		e && (e.innerHTML = this._notifTargets.map((e) => `
      <span class="notif-chip" style="color:#ffffff !important;font-weight:700;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);">🔔 ${this._escapeHtml(e.replace(/^entity:notify\./, "").replace(/_/g, " "))}
        <button data-notif-remove="${this._escapeHtml(e)}" style="color:#ffffff;opacity:0.75;cursor:pointer;margin-left:4px;font-weight:bold;">✕</button>
      </span>`).join("") || "<span class=\"small\" style=\"opacity:.5\">—</span>", e.querySelectorAll("[data-notif-remove]").forEach((e) => e.addEventListener("click", () => {
			this._notifTargets = this._notifTargets.filter((t) => t !== e.dataset.notifRemove), this._renderNotifChips(), this._populateNotifSelect();
		})));
	}
	_renderNotifications() {
		this._renderNotifChips(), this._populateNotifSelect();
	}
	async _saveNotifications() {
		let e = this.shadowRoot.getElementById("notif-status");
		this._runWithPin(async () => {
			try {
				await this._send("argus/save_ui", { notif_targets: this._notifTargets }), e && (e.textContent = "✓", e.className = "status ok");
			} catch (t) {
				e ? (e.textContent = t.message, e.className = "status err") : alert(this._format("generic_error", { error: t.message }));
			}
		});
	}
	_renderUsers() {
		let e = this.shadowRoot.getElementById("users-list");
		if (!e) return;
		let t = this.shadowRoot.getElementById("p-admin-only");
		t && (t.style.display = this._isAdmin ? "none" : "block");
		try {
			let t = Array.isArray(this._users) ? this._users.filter((e) => e && typeof e == "object" && !Array.isArray(e)) : [], n = e.closest(".panel"), r = n && n.getAttribute("data-size") === "S", i = r ? t.slice(0, 2) : t;
			t.length ? (e.innerHTML = i.map((e, t) => {
				if (r) return `
            <div class="user-card" style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:6px 10px;flex-direction:row">
              <div style="font-weight:700">${this._escapeHtml(e.name || "")}</div>
              <div style="display:flex;gap:4px">
                ${e.role === "admin" ? "<span class=\"user-badge admin\">⭐ Adm</span>" : "<span class=\"user-badge user\">👤 Std</span>"}
                ${e.access_pin_configured ? "<span class=\"user-badge\" style=\"background:#0284c7;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800\">🔒 PIN</span>" : ""}
              </div>
            </div>`;
				let n = e.expiration_date && new Date(e.expiration_date) < /* @__PURE__ */ new Date(), i = "";
				if (e.expiration_date) {
					let t = new Date(e.expiration_date);
					if (!isNaN(t.getTime())) try {
						i = this._formatDateTime(t);
					} catch {
						i = t.toISOString();
					}
				}
				let a = e.expiration_date ? n ? `<span class="user-badge admin" style="background:#b91c1c;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">❌ ${this._escapeHtml(this._t("expired"))} (${this._escapeHtml(i)})</span>` : `<span class="user-badge" style="background:#15803d;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">⏳ ${this._escapeHtml(this._t("active_until"))}: ${this._escapeHtml(i)}</span>` : `<span class="user-badge" style="background:#15803d;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">♾️ ${this._t("exp_indefinite")}</span>`, o = e.ha_user_id ? (() => {
					let t = (this._haUsersList || []).find((t) => t.id === e.ha_user_id);
					return t ? this._format("ha_account_linked", { name: t.name }) : this._t("ha_account_unavailable");
				})() : this._t("ha_account_unavailable"), s = e.role === "admin" ? "⭐ " + this._escapeHtml(this._t("role_argus_admin")) : "👤 " + this._escapeHtml(this._t("role_argus_standard")), c = e.access_pin_configured ? "<span class=\"user-badge\" style=\"background:#0284c7;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800\">🔒 PIN</span>" : `<span class="user-badge" style="background:#334155;color:#ffffff!important;border:1px solid rgba(255,255,255,0.2);font-weight:800">🔓 ${this._escapeHtml(this._t("user_no_pin"))}</span>`;
				return `
          <div class="user-card" style="display:flex;flex-direction:column;align-items:stretch;gap:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;width:100%">
              <div style="flex:1">
                <div style="font-weight:700">${this._escapeHtml(e.name || "")}</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px">
                  <span class="user-badge ${e.role === "admin" ? "admin" : "user"}">${s}</span>
                  <span class="user-badge" style="background:#581c87;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">${this._escapeHtml(o)}</span>
                  ${c}
                  ${a}
                </div>
                ${e.role !== "admin" && e.permissions ? `
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px">
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t("view_panel_perm") || this._t("instances") || "Panel")}">👁️ ${e.permissions.view_status ? this._t("view_panel_perm") || this._t("instances") || "Panel" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t("arm_perm") || this._t("system_armed") || "Armar")}">🛡️ ${e.permissions.arm ? this._t("arm_perm") || this._t("system_armed") || "Armar" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t("disarm_perm") || this._t("disarmed") || "Desarmar")}">🔓 ${e.permissions.disarm ? this._t("disarm_perm") || this._t("disarmed") || "Desarmar" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(248,113,113,0.12);color:#f87171" title="${this._escapeHtml(this._t("perm_sos") || "SOS")}">🚨 ${e.permissions.sos ? "SOS" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t("view_history_perm") || this._t("activity_log") || "Historial")}">📜 ${e.permissions.view_history ? this._t("view_history_perm") || this._t("activity_log") || "Historial" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(52,199,89,0.12);color:#34c759" title="${this._escapeHtml(this._t("access_pin_lbl") || "PIN Acceso")}">🔑 ${e.permissions.change_pin ? this._t("access_pin_lbl") || "PIN Acceso" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(255,179,0,0.12);color:#ffb300" title="${this._escapeHtml(this._t("master_pin_lbl") || "Pin de Armado")}">🔑 ${e.permissions.change_master_pin ? this._t("master_pin_lbl") || "Pin de Armado" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(168,85,247,0.12);color:#a855f7" title="${this._escapeHtml(this._t("perm_admin_access") || "Admin")}">⚙️ ${e.permissions.admin_access ? "Admin" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(56,189,248,0.12);color:#38bdf8" title="${this._escapeHtml(this._t("perm_admin_profiles") || "Perfiles Admin")}">👑 ${e.permissions.admin_profiles ? "Perfiles" : "---"}</span>
                </div>
                ` : ""}
              </div>
              <div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap;justify-content:flex-end">
                ${this._isAdmin ? `
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-edit="${t}" title="${this._escapeHtml(this._t("modal_edit_name"))}">✏️</button>
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-pin="${t}" title="${this._escapeHtml(this._t("modal_pin_title"))}">🔑</button>
                  ${e.role === "admin" ? "" : `<button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-perms="${t}" title="${this._escapeHtml(this._t("permissions_title") || "Permisos")}">🛡️</button>`}
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-role-toggle="${t}" title="${this._escapeHtml(this._t("user_role_label"))}">⭐</button>
                  <button class="btn-danger danger" style="padding:6px 10px;font-size:12px;background:#e53935;color:white;border:none;border-radius:10px;cursor:pointer" title="${this._escapeHtml(this._t("delete_user_tooltip"))}" aria-label="${this._escapeHtml(this._t("delete_user_tooltip"))}" data-user-del="${t}">🗑️</button>
                ` : ""}
              </div>
            </div>
          </div>`;
			}).join(""), this._isAdmin && e.insertAdjacentHTML("beforeend", `
            <div style="margin-top:10px">
              <button class="secondary" style="width:100%;padding:10px;font-size:13px;border-radius:12px;cursor:pointer;border:1px dashed rgba(255,255,255,0.18);background:rgba(255,255,255,0.03)" id="btn-add-manual-user">➕ ${this._escapeHtml(this._t("modal_add_user"))}</button>
            </div>`), this._isAdmin && (e.querySelectorAll("[data-user-edit]").forEach((e) => {
				e.addEventListener("click", async () => {
					let t = Number(e.dataset.userEdit), n = this._users[t];
					if (!n) return;
					let r = await this._showArgusInputModal({
						title: this._t("modal_edit_name"),
						label: this._t("modal_name_label"),
						placeholder: n.name,
						initialValue: n.name,
						type: "text"
					});
					r !== null && r.trim() !== "" && this._runWithPin(async () => {
						try {
							let e = this._users.map((e, n) => n === t ? {
								...e,
								name: r.trim()
							} : e), n = await this._send("argus/save_ui", { users: e });
							n && n.ui ? (this._ui = n.ui, this._users = n.ui.users || e) : this._users = e, this._renderUsers();
						} catch (e) {
							this._showArgusConfirmModal(e.message || this._format("generic_error", { error: e }), { confirmLabel: "OK" });
						}
					});
				});
			}), e.querySelectorAll("[data-user-pin]").forEach((e) => {
				e.addEventListener("click", async () => {
					let t = Number(e.dataset.userPin), n = this._users[t];
					if (!n) return;
					let r = await this._showArgusInputModal({
						title: `${this._t("modal_pin_title")} — ${n.name}`,
						label: this._t("modal_pin_help"),
						placeholder: "••••",
						type: "password",
						numeric: !0
					});
					r !== null && this._runWithPin(async () => {
						try {
							await this._send("argus/save_user_access_pin", {
								argus_user_id: n.id,
								pin: r.trim()
							});
							let e = await this._send("argus/dashboard");
							e && e.users && (this._users = e.users), this._renderUsers();
						} catch (e) {
							this._showArgusConfirmModal(e.message || this._format("generic_error", { error: e }), { confirmLabel: "OK" });
						}
					});
				});
			}), e.querySelector("#btn-add-manual-user")?.addEventListener("click", async () => {
				let e = await this._showArgusInputModal({
					title: this._t("modal_add_user"),
					label: this._t("modal_name_label"),
					placeholder: this._t("user_default") || "Usuario",
					type: "text"
				});
				e && e.trim() && this._runWithPin(async () => {
					try {
						let t = {
							id: `argus_manual_${Date.now()}`,
							name: e.trim(),
							role: "standard",
							enabled: !0,
							permissions: {
								view_status: !0,
								arm: !0,
								disarm: !0,
								view_history: !1
							}
						}, n = [...this._users || [], t], r = await this._send("argus/save_ui", { users: n });
						r && r.ui ? (this._ui = r.ui, this._users = r.ui.users || n) : this._users = n, this._renderUsers();
					} catch (e) {
						this._showArgusConfirmModal(e.message || this._format("generic_error", { error: e }), { confirmLabel: "OK" });
					}
				});
			}), e.querySelectorAll("[data-user-role-toggle]").forEach((e) => {
				e.addEventListener("click", async () => {
					let t = Number(e.dataset.userRoleToggle), n = this._users[t];
					if (!n) return;
					let r = await this._showArgusInputModal({
						title: this._t("user_role_action") || "Cambiar Rol",
						label: this._t("user_role_label") || "Selecciona el rol",
						initialValue: n.role === "admin" ? "admin" : "standard",
						type: "select",
						options: [{
							value: "admin",
							label: this._t("role_argus_admin") || "Administrador de Argus"
						}, {
							value: "standard",
							label: this._t("role_argus_standard") || "Usuario estándar"
						}]
					});
					r && r !== n.role && this._runWithPin(async () => {
						let e = this._users.map((e, n) => n === t ? {
							...e,
							role: r
						} : e);
						try {
							let t = await this._send("argus/save_ui", { users: e });
							t && t.ui ? (this._ui = t.ui, this._users = t.ui.users || e) : this._users = e, this._renderUsers();
						} catch (e) {
							this._showArgusConfirmModal(e.message || this._format("generic_error", { error: e }), { confirmLabel: "OK" });
						}
					});
				});
			}), e.querySelectorAll("[data-user-del]").forEach((e) => e.addEventListener("click", async () => {
				let t = Number(e.dataset.userDel), n = this._users[t];
				if (!n) return;
				let r = this._format("delete_user_confirm", { name: n.name || "User" });
				await this._showArgusConfirmModal(this._t("modal_delete_confirm") || r, {
					confirmLabel: this._t("clear") || "Delete",
					confirmStyle: "background:#e53935;color:white;border:none"
				}) && this._runWithPin(async () => {
					let e = [...this._users];
					e.splice(t, 1);
					try {
						let t = await this._send("argus/save_ui", { users: e });
						t && t.ui ? (this._ui = t.ui, this._users = t.ui.users || e) : this._users = e, this._renderUsers();
					} catch (e) {
						this._showArgusConfirmModal(e.message || this._format("generic_error", { error: e }), { confirmLabel: "OK" });
					}
				});
			})), e.querySelectorAll("[data-user-perms]").forEach((e) => {
				e.addEventListener("click", async () => {
					let t = Number(e.dataset.userPerms), n = this._users[t];
					if (!n) return;
					let r = await this._showArgusPermissionsModal(n);
					r !== null && this._runWithPin(async () => {
						let e = this._users.map((e, n) => n === t ? {
							...e,
							permissions: {
								...e.permissions,
								...r
							}
						} : e);
						try {
							let t = await this._send("argus/save_ui", { users: e });
							t && t.ui ? (this._ui = t.ui, this._users = t.ui.users || e) : this._users = e, this._renderUsers();
						} catch (e) {
							this._showArgusConfirmModal(e.message || this._format("generic_error", { error: e }), { confirmLabel: "OK" });
						}
					});
				});
			}))) : e.innerHTML = `<div class="small">${this._t("no_users")}</div>`;
		} catch (t) {
			console.error("Argus users list render failed:", t), e.innerHTML = `<div class="small">${this._t("no_users")}</div>`;
		}
		this._syncAccessSummary();
	}
	_populateTemperatureSources() {
		let e = this.shadowRoot.getElementById("temp-source-select-standalone");
		if (!e || !this._hass) return;
		let t = [{
			entity_id: "auto",
			name: this._t("temp_auto")
		}];
		for (let e of Object.values(this._hass.states || {})) {
			let n = e.entity_id || "", r = e.attributes || {};
			if (n.startsWith("climate.") && typeof r.current_temperature == "number") {
				t.push({
					entity_id: n,
					name: `🌡️ ${r.friendly_name || n} ${this._t("temp_thermostat")}`
				});
				continue;
			}
			if (!n.startsWith("sensor.")) continue;
			let i = String(r.device_class || "").toLowerCase(), a = String(r.unit_of_measurement || r.native_unit_of_measurement || "").toLowerCase(), o = Number(e.state);
			Number.isFinite(o) && (i === "temperature" || [
				"°c",
				"°f",
				"c",
				"f"
			].includes(a)) && t.push({
				entity_id: n,
				name: `🌡️ ${r.friendly_name || n}`
			});
		}
		let n = /* @__PURE__ */ new Set();
		e.innerHTML = t.filter((e) => !n.has(e.entity_id) && (n.add(e.entity_id), !0)).map((e) => `<option value="${this._escapeHtml(e.entity_id)}">${this._escapeHtml(e.name)}</option>`).join("");
	}
	_getWeatherEntity() {
		let e = this._weatherSource || "auto";
		return (e === "auto" ? null : this._hass?.states?.[e]) || Object.values(this._hass?.states || {}).find((e) => e.entity_id?.startsWith("weather.")) || {
			state: "sunny",
			attributes: {}
		};
	}
	_getDisplayedTemperature() {
		if (!this._hass) return null;
		let e = this._temperatureSource || "auto";
		if (e !== "auto") {
			let t = this._hass.states?.[e];
			if (!t) return null;
			let n = e.startsWith("climate.") ? t.attributes?.current_temperature : Number(t.state), r = e.startsWith("climate.") ? t.attributes?.temperature_unit : t.attributes?.unit_of_measurement || t.attributes?.native_unit_of_measurement;
			return Number.isFinite(Number(n)) ? `${Number(n).toFixed(1).replace(/\.0$/, "")}°${String(r || "").replace("°", "")}` : null;
		}
		let t = this._getWeatherEntity(), n = t?.attributes?.temperature, r = t?.attributes?.temperature_unit;
		return Number.isFinite(Number(n)) ? `${Number(n).toFixed(1).replace(/\.0$/, "")}°${String(r || "").replace("°", "")}` : null;
	}
	_getTemperatureReadings() {
		if (!this._hass?.states) return [];
		let e = [], t = this._getWeatherEntity(), n = t?.attributes?.temperature, r = t?.attributes?.temperature_unit;
		Number.isFinite(Number(n)) && e.push({
			label: "EXT.",
			value: `${Number(n).toFixed(1).replace(/\.0$/, "")}°${String(r || "").replace("°", "")}`
		});
		let i = this._temperatureSource || "auto", a = i === "auto" ? Object.values(this._hass.states).find((e) => e.entity_id?.startsWith("climate.") && Number.isFinite(Number(e.attributes?.current_temperature))) : this._hass.states[i];
		if (a?.entity_id?.startsWith("weather.") && (a = null), a) {
			let t = a.entity_id.startsWith("climate.") ? a.attributes?.current_temperature : Number(a.state), n = a.entity_id.startsWith("climate.") ? a.attributes?.temperature_unit : a.attributes?.unit_of_measurement || a.attributes?.native_unit_of_measurement;
			Number.isFinite(Number(t)) && e.push({
				label: "INT.",
				value: `${Number(t).toFixed(1).replace(/\.0$/, "")}°${String(n || "").replace("°", "")}`
			});
		}
		return e;
	}
	_moonPhase() {
		let e = (this._hass?.states?.["sensor.moon_phase"]?.state || this._hass?.states?.["sensor.moon"]?.state || "").toLowerCase().replace(/[\s-]+/g, "_");
		return e.includes("new") ? "new" : e.includes("waxing_crescent") ? "waxing-crescent" : e.includes("first_quarter") ? "first-quarter" : e.includes("waxing_gibbous") ? "waxing-gibbous" : e.includes("waning_gibbous") ? "waning-gibbous" : e.includes("last_quarter") || e.includes("third_quarter") ? "last-quarter" : e.includes("waning_crescent") ? "waning-crescent" : (e.includes("full"), "full");
	}
	_eclipseEvent() {
		let e = Object.values(this._hass?.states || {}).find((e) => {
			let t = `${e.entity_id || ""} ${e.attributes?.friendly_name || ""} ${e.attributes?.device_class || ""}`.toLowerCase(), n = `${e.state || ""} ${e.attributes?.event || ""} ${e.attributes?.type || ""}`.toLowerCase();
			return /eclips/.test(t) && !/^(off|none|unknown|unavailable|false|0)$/i.test(String(e.state || "")) && /eclips|solar|lunar|moon|luna/.test(n);
		});
		if (!e) return null;
		let t = `${e.state || ""} ${e.attributes?.event || ""} ${e.attributes?.type || ""} ${e.attributes?.friendly_name || ""}`.toLowerCase();
		return /solar|sun|sol/.test(t) ? "solar" : /lunar|moon|luna/.test(t) ? "lunar" : null;
	}
	_renderEclipseOverlay(e) {
		if (!e) return "";
		let t = e === "solar" ? "☀️ Eclipse solar" : "🌕 Eclipse lunar";
		return `<div class="weather-eclipse" aria-label="${t}">${t}</div>`;
	}
	_season() {
		let e = (/* @__PURE__ */ new Date()).getMonth(), t = Number(this._hass?.config?.latitude) < 0 ? (e + 6) % 12 : e;
		return [
			11,
			0,
			1
		].includes(t) ? "winter" : [
			2,
			3,
			4
		].includes(t) ? "spring" : [
			5,
			6,
			7
		].includes(t) ? "summer" : "autumn";
	}
	async _handleBackgroundFiles(e) {
		let t = Array.from(e?.target?.files || []).slice(0, 4);
		if (!t.length) return;
		let n = (e) => new Promise((t, n) => {
			let r = new FileReader();
			r.onload = () => t(String(r.result || "")), r.onerror = n, r.readAsDataURL(e);
		});
		this._backgroundImages = (await Promise.all(t.map(n))).filter(Boolean);
		let r = this.shadowRoot.getElementById("bg-file-help");
		r && (r.textContent = `${this._backgroundImages.length} imagen(es) cargadas para el panel.`);
	}
	_isVideoFile(e) {
		let t = [
			".mov",
			".mp4",
			".webm",
			".ogg",
			".avi",
			".m4v"
		], n = (e.name || "").toLowerCase();
		return t.some((e) => n.endsWith(e)) || e.type.startsWith("video/");
	}
	async _showLivePhotoDialog(e, t, n) {
		confirm(this._format("file_choice", { file: e.name })) ? await t() : await n();
	}
	async _uploadFile(e, t) {
		let n = this._hass?.auth?.accessToken, r = {};
		n && (r.Authorization = `Bearer ${n}`);
		let i = new FormData();
		i.append("file", e);
		let a = await fetch("/api/argus/upload", {
			method: "POST",
			body: i,
			headers: r
		});
		if (!a.ok) throw Error(`HTTP error! status: ${a.status}`);
		return await a.json();
	}
	async _handlePanelBgFile(e) {
		let t = e?.target?.files?.[0];
		if (!t) return;
		let n = this.shadowRoot.getElementById("bg-file-help");
		n && (n.textContent = "Subiendo al servidor..."), e.target.value = "";
		try {
			if (this._isVideoFile(t)) await this._showLivePhotoDialog(t, async () => {
				let e = await this._uploadFile(t, n);
				if (e?.success) {
					this._panelBgFile = e.url;
					let r = this.shadowRoot.getElementById("panel-bg-url-input");
					r && (r.value = e.url), n && (n.textContent = `Subido como imagen: ${t.name}`), this._loadUploadedFiles();
				} else n && (n.textContent = this._format("generic_error", { error: e?.error || this._t("upload_error") }));
			}, async () => {
				let e = await this._uploadFile(t, n);
				if (e?.success) {
					this._panelBgFile = e.url;
					let r = this.shadowRoot.getElementById("panel-bg-url-input");
					r && (r.value = e.url), n && (n.textContent = `Subido como video: ${t.name}`), this._loadUploadedFiles();
				} else n && (n.textContent = this._format("generic_error", { error: e?.error || this._t("upload_error") }));
			});
			else {
				let e = await this._uploadFile(t, n);
				if (e?.success) {
					this._panelBgFile = e.url;
					let r = this.shadowRoot.getElementById("panel-bg-url-input");
					r && (r.value = e.url), n && (n.textContent = `Subido: ${t.name}`), this._loadUploadedFiles();
				} else n && (n.textContent = this._format("generic_error", { error: e?.error || this._t("upload_error") }));
			}
		} catch (e) {
			console.error("Upload failed:", e), n && (n.textContent = this._format("generic_error", { error: e.message || e }));
		}
	}
	async _handleHubBgFile(e) {
		let t = e?.target?.files?.[0];
		if (!t) return;
		let n = this.shadowRoot.getElementById("hub-file-help");
		n && (n.textContent = "Subiendo al servidor..."), e.target.value = "";
		try {
			if (this._isVideoFile(t)) await this._showLivePhotoDialog(t, async () => {
				let e = await this._uploadFile(t, n);
				if (e?.success) {
					this._hubBgFile = e.url;
					let r = this.shadowRoot.getElementById("hub-bg-url-input");
					r && (r.value = e.url), n && (n.textContent = `Subido como imagen: ${t.name}`), this._loadUploadedFiles();
				} else n && (n.textContent = this._format("generic_error", { error: e?.error || this._t("upload_error") }));
			}, async () => {
				let e = await this._uploadFile(t, n);
				if (e?.success) {
					this._hubBgFile = e.url;
					let r = this.shadowRoot.getElementById("hub-bg-url-input");
					r && (r.value = e.url), n && (n.textContent = `Subido como video: ${t.name}`), this._loadUploadedFiles();
				} else n && (n.textContent = this._format("generic_error", { error: e?.error || this._t("upload_error") }));
			});
			else {
				let e = await this._uploadFile(t, n);
				if (e?.success) {
					this._hubBgFile = e.url;
					let r = this.shadowRoot.getElementById("hub-bg-url-input");
					r && (r.value = e.url), n && (n.textContent = `Subido: ${t.name}`), this._loadUploadedFiles();
				} else n && (n.textContent = this._format("generic_error", { error: e?.error || this._t("upload_error") }));
			}
		} catch (e) {
			console.error("Upload failed:", e), n && (n.textContent = this._format("generic_error", { error: e.message || e }));
		}
	}
	async _loadUploadedFiles() {
		try {
			let e = await this._send("argus/list_uploaded_files");
			this._uploadedFiles = e || [], this._renderUploadedFiles();
		} catch (e) {
			console.error("Failed to load uploaded files:", e);
			let t = this.shadowRoot.getElementById("uploaded-files-list");
			t && (t.innerHTML = `
          <div style="grid-column:1/-1; text-align:center; padding:20px; font-size:11px; color:#ff4d4d; opacity:0.8;">
            ${this._t("error_loading_uploaded_files")}
          </div>
        `);
		}
	}
	_renderUploadedFiles() {
		let e = this.shadowRoot.getElementById("uploaded-files-list"), t = this.shadowRoot.getElementById("storage-files-count");
		if (!e) return;
		let n = this._uploadedFiles || [];
		if (!n.length) {
			e.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:20px; font-size:11px; opacity:0.5;">
          ${this._t("no_files_uploaded")}
        </div>
      `, t && (t.textContent = this._t("files_count").replace("{count}", "0"));
			return;
		}
		let r = 0;
		n.forEach((e) => r += e.size_bytes || 0);
		let i = "";
		i = r >= 1048576 ? `${(r / 1048576).toFixed(2)} MB` : `${(r / 1024).toFixed(2)} KB`, t && (t.textContent = this._t("files_count_short").replace("{count}", n.length) + ` (${i})`), e.innerHTML = n.filter((e) => !e.is_video).map((e) => `
      <div class="file-card" data-filename="${this._escapeHtml(e.name)}">
        <div class="file-card-preview">
          <img src="${this._escapeHtml(e.url)}" loading="lazy">
        </div>
        <div class="file-card-name" title="${this._escapeHtml(e.name)}">${this._escapeHtml(e.name)}</div>
        <div class="file-card-meta">
          <span>${this._escapeHtml(e.size_str)}</span>
          <button class="file-card-btn-delete" data-filename="${this._escapeHtml(e.name)}" title="${this._escapeHtml(this._t("delete_btn_title"))}">🗑️</button>
        </div>
        <div class="file-card-actions">
          <button class="file-card-btn use-for-panel" data-url="${this._escapeHtml(e.url)}">${this._escapeHtml(this._t("use_for_panel"))}</button>
          <button class="file-card-btn use-for-hub" data-url="${this._escapeHtml(e.url)}">${this._escapeHtml(this._t("use_for_hub"))}</button>
        </div>
      </div>
    `).join(""), e.querySelectorAll(".file-card-btn-delete").forEach((e) => {
			e.addEventListener("click", () => {
				let t = e.dataset.filename;
				confirm(this._t("file_delete_confirm").replace("{filename}", t)) && this._deleteUploadedFile(t);
			});
		}), e.querySelectorAll(".use-for-panel").forEach((e) => {
			e.addEventListener("click", () => {
				let t = e.dataset.url;
				this._panelBgFile = t;
				let n = this.shadowRoot.getElementById("panel-bg-url-input");
				n && (n.value = t);
				let r = this.shadowRoot.getElementById("bg-mode-select-standalone");
				r && (r.value = "photo"), this._backgroundMode = "photo", this._updateBgFieldsVisibility(), this._renderEntries(), this._savePersonalization();
				let i = this.shadowRoot.getElementById("bg-file-help");
				i && (i.textContent = this._t("bg_panel_selected_from_history"));
			});
		}), e.querySelectorAll(".use-for-hub").forEach((e) => {
			e.addEventListener("click", () => {
				let t = e.dataset.url;
				this._hubBgFile = t;
				let n = this.shadowRoot.getElementById("hub-bg-url-input");
				n && (n.value = t);
				let r = this.shadowRoot.getElementById("hub-bg-mode-select");
				r && (r.value = "image"), this._hubBgMode = "image", this._updateBgFieldsVisibility(), this._updateCanvasBackground(), this._savePersonalization();
				let i = this.shadowRoot.getElementById("hub-file-help");
				i && (i.textContent = this._t("bg_hub_selected_from_history"));
			});
		});
	}
	async _deleteUploadedFile(e) {
		try {
			await this._send("argus/delete_uploaded_file", { filename: e }), this._uploadedFiles && (this._uploadedFiles = this._uploadedFiles.filter((t) => t.name !== e), this._renderUploadedFiles());
			let t = this.shadowRoot.getElementById("panel-bg-url-input");
			t && t.value === `/local/argus/${e}` && (t.value = "", this._panelBgFile = "");
			let n = this.shadowRoot.getElementById("hub-bg-url-input");
			n && n.value === `/local/argus/${e}` && (n.value = "", this._hubBgFile = "");
		} catch (e) {
			console.warn("Server delete failed:", e), alert(this._format("delete_file_error", { error: e.message || e }));
		}
	}
	_updateBgFieldsVisibility() {
		let e = this.shadowRoot.getElementById("bg-mode-select-standalone")?.value || "weather", t = this.shadowRoot.getElementById("hub-bg-mode-select")?.value || "default", n = this.shadowRoot.getElementById("panel-custom-bg-inputs");
		if (n) {
			if (e === "photo" || e === "collage") {
				n.style.display = "flex";
				let e = this.shadowRoot.getElementById("lbl-panel-bg-sound");
				e && (e.style.display = "none");
				let t = this.shadowRoot.getElementById("panel-bg-file-input");
				t && (t.accept = "image/*,.mov,.heic,.heif");
				let r = this.shadowRoot.getElementById("panel-bg-url-input");
				r && (r.placeholder = "Pegar URL de la imagen");
			} else n.style.display = "none";
		}
		let r = this.shadowRoot.getElementById("hub-custom-bg-inputs");
		if (r) {
			if (t === "image") {
				r.style.display = "flex";
				let e = this.shadowRoot.getElementById("lbl-hub-bg-sound");
				e && (e.style.display = "none");
				let t = this.shadowRoot.getElementById("hub-bg-file-input");
				t && (t.accept = "image/*,.mov,.heic,.heif");
				let n = this.shadowRoot.getElementById("hub-bg-url-input");
				n && (n.placeholder = "Pegar URL de la imagen/GIF");
			} else r.style.display = "none";
		}
	}
	_updateCanvasBackground() {
		let e = this.shadowRoot.getElementById("argus-canvas-bg");
		this.setAttribute("data-bg-mode", "default"), e && (e.innerHTML = "", e.style.backgroundImage = ""), this.shadowRoot.querySelectorAll(".wx-webgl").forEach((e) => {
			e._argusRO && e._argusRO.disconnect(), e._argusWebglStop && e._argusWebglStop(), e.remove();
		}), this.style.backgroundImage = "url('/api/argus_static/argus-default-bg.jpg')", this.style.backgroundSize = "cover", this.style.backgroundPosition = "center", this.style.backgroundRepeat = "no-repeat", this.style.backgroundAttachment = "fixed";
	}
	_renderEntryBackground(e, t) {
		return "<div class=\"wx wx-liquid-glass\" style=\"position:absolute; inset:0; width:100%; height:100%; z-index:0; pointer-events:none; border-radius:inherit; background:radial-gradient(circle at 50% 20%, rgba(255,255,255,0.06), transparent 70%);\"></div>";
	}
	_updateHomeNameDisplay() {
		let e = this.shadowRoot.getElementById("lbl-home-name-prominent");
		e && (e.textContent = this._homeName || this._t("home_default"));
		let t = this.shadowRoot.getElementById("dropdown-home-name");
		t && (t.textContent = this._homeName || this._t("home_default"));
	}
	_sendTempNotification(e) {
		let t = this._notifTargets || [];
		t.length && this._hass && t.forEach((t) => {
			try {
				this._hass.callService("notify", t, {
					message: e,
					title: this._t("temp_notification_title"),
					data: { push: {
						sound: "default",
						badge: 1
					} }
				});
			} catch {}
		});
	}
	_normaliseEmergencyNumber(e) {
		let t = String(e || "").replace(/[^0-9+]/g, "");
		return /^[+]?[0-9]{2,15}$/.test(t) ? t : "911";
	}
	_renderSosOutputs() {
		let e = this.shadowRoot?.getElementById("sos-output-chips");
		if (!e) return;
		let t = this._panicOutputs || [];
		e.innerHTML = t.length ? t.map((e) => {
			let t = this._hass?.states?.[e]?.attributes?.friendly_name || e;
			return `<span class="sensor-pill" title="${this._escapeHtml(t)}"><span>${this._escapeHtml(t)}</span></span>`;
		}).join("") : `<div class="mode-sensor-none">${this._t("sos_no_outputs")}</div>`;
	}
	_configureEmergencyCall() {
		let e = this.shadowRoot?.getElementById("sos-call-btn");
		if (!e) return;
		let t = this._normaliseEmergencyNumber(this._emergencyNumber);
		e.href = `tel:${t}`, e.textContent = `${this._t("sos_call")} (${t})`;
	}
	async _triggerSOS() {
		if (this._sosBusy) return;
		if (!this._isAdmin && this._permissions?.sos === !1) {
			await this._showArgusConfirmModal(this._t("no_sos_perm_alert") || "No tienes permisos para activar la alarma SOS.", { confirmLabel: "OK" });
			return;
		}
		this._sosBusy = !0;
		let e = this.shadowRoot && this.shadowRoot.getElementById("sos-modal");
		e && e.classList.remove("open");
		let t = this._normaliseEmergencyNumber(this._emergencyNumber), n = this._sosEntryIdx, r = this._dashboard?.entries?.[n], i = r?.entity_id;
		try {
			if (!this._hass || !i) throw Error(this._t("no_alarm_instance"));
			await this._send("argus/perform_alarm_action", {
				action: "sos",
				entry_id: r.entry_id
			}), window.confirm(`${this._t("sos_activated")}. ${this._format("sos_call_confirm", { number: t })}`) && (window.location.href = `tel:${t}`);
		} catch (e) {
			alert(this._format("sos_error", { error: e?.message || e }));
		} finally {
			this._sosEntryIdx = null, this._sosBusy = !1;
		}
	}
	async _stopSOS(e) {
		let t = this._dashboard?.entries?.[e], n = {
			armed_home: "alarm_arm_home",
			armed_away: "alarm_arm_away",
			armed_night: "alarm_arm_night",
			armed_vacation: "alarm_arm_vacation",
			disarmed: "alarm_disarm"
		}[(t && this._hass?.states?.[t.entity_id])?.attributes?.panic_previous_state];
		if (!t?.entity_id || !n) {
			alert(this._t("panic_state_unknown"));
			return;
		}
		let r = async (e) => {
			try {
				return await this._send("argus/perform_alarm_action", {
					action: n.replace("alarm_", ""),
					entry_id: t.entry_id,
					...e ? { code: e } : {}
				}), await this._load(), !0;
			} catch (e) {
				let t = this.shadowRoot.getElementById("pin-error");
				return t ? t.textContent = `❌ ${this._format("panic_stop_error", { error: "" }).replace(/:\s*$/, "")}` : alert(this._format("panic_stop_error", { error: e?.message || e })), !1;
			}
		};
		t.pin_configured === !0 || (this._users || []).length > 0 ? this._showPinModal(r) : await r(null);
	}
	_savePersonalization() {
		this._runWithPin(() => this._persistPersonalization());
	}
	async _persistPersonalization() {
		this._ui = this._ui || {};
		let e = this.shadowRoot.getElementById("bg-mode-select-standalone")?.value || "none", t = this.shadowRoot.getElementById("temp-source-select-standalone")?.value || "auto", n = "auto", r = this.shadowRoot.getElementById("argus-clock-format-select")?.value || "auto";
		this._clockFormat = [
			"auto",
			"12h",
			"24h"
		].includes(r) ? r : "auto";
		let i = this._normaliseEmergencyNumber(this.shadowRoot.getElementById("emergency-number-input")?.value), a = this.shadowRoot.getElementById("panel-bg-url-input")?.value || "", o = !!this.shadowRoot.getElementById("chk-panel-bg-sound")?.checked, s = this.shadowRoot.getElementById("hub-bg-mode-select")?.value || "default", c = s === "default" ? "none" : s, l = this._hubBgFile || this.shadowRoot.getElementById("hub-bg-url-input")?.value || "", u = !!this.shadowRoot.getElementById("chk-hub-bg-sound")?.checked, d = {
			home_name: this._homeName,
			temperature_source: t,
			weather_source: n,
			clock_format: this._clockFormat,
			emergency_number: i
		};
		this._panicOutputs !== void 0 && (d.panic_outputs = this._panicOutputs);
		let f = (this._ui.users || []).find((e) => e.id === this._currentProfile?.id);
		d.background_mode = e, d.background_images = this._backgroundImages || [], d.panel_bg_file = a, d.panel_bg_sound = o, d.hub_bg_mode = c, d.hub_bg_file = l, d.hub_bg_sound = u, d.entry_id = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
		let p = "default", m = "";
		if (e === "photo" && a ? (p = "photo", m = a) : e === "weather" ? p = "weather" : e === "none" && (p = "none"), d.theme = {
			background_mode: p,
			background_file: m
		}, f) {
			let t = JSON.parse(JSON.stringify(this._ui.users || [])), n = t.find((e) => e.id === this._currentProfile?.id);
			n.background_mode = e, n.background_images = this._backgroundImages || [], n.panel_bg_file = a, n.panel_bg_sound = o, n.hub_bg_mode = c, n.hub_bg_file = l, n.hub_bg_sound = u, n.theme = d.theme, d.users = t;
		}
		try {
			await this._send("argus/save_ui", d), this._currentUserTheme = d.theme, this._backgroundMode = e, this._temperatureSource = t, this._weatherSource = n, this._emergencyNumber = i, this._panelBgFile = a, this._panelBgSound = o, this._hubBgMode = s, this._hubBgFile = l, this._hubBgSound = u, this._updateTheme(), this._ui = this._ui || {}, f ? this._ui.users = d.users : (this._ui.background_mode = e, this._ui.background_images = this._backgroundImages || [], this._ui.panel_bg_file = a, this._ui.panel_bg_sound = o, this._ui.hub_bg_mode = c, this._ui.hub_bg_file = l, this._ui.hub_bg_sound = u), this._ui.temperature_source = t, this._ui.weather_source = n, this._ui.clock_format = this._clockFormat, this._ui.emergency_number = i, this._ui.panic_outputs = this._panicOutputs, this._configureEmergencyCall(), this._ui.hub_bg_file = l, this._ui.hub_bg_sound = u, this._renderEntries(), this._updateCanvasBackground();
			let r = this.shadowRoot.getElementById("btn-save-personalization-standalone");
			if (r) {
				let e = r.textContent;
				r.textContent = this._t("saved"), r.style.background = "#43a047", setTimeout(() => {
					r.textContent = e, r.style.background = "";
				}, 3e3);
			}
		} catch (e) {
			alert(this._format("generic_error", { error: e.message }));
		}
	}
	_editHomeName() {
		this._runWithPin(() => {
			let e = this.shadowRoot.getElementById("home-name-modal"), t = this.shadowRoot.getElementById("home-name-input"), n = this.shadowRoot.getElementById("home-name-status");
			t.value = this._homeName || this.shadowRoot.getElementById("home-name-setting")?.value || "", n && (n.textContent = ""), e.classList.add("open"), e.setAttribute("aria-hidden", "false"), setTimeout(() => t.focus(), 60);
		});
	}
	_closeHomeNameModal() {
		let e = this.shadowRoot.getElementById("home-name-modal");
		e.classList.remove("open"), e.setAttribute("aria-hidden", "true");
	}
	async _saveHomeName() {
		let e = (this.shadowRoot.getElementById("home-name-input")?.value || "").trim();
		try {
			await this._send("argus/save_ui", { home_name: e }), this._homeName = e, this._ui ||= {}, this._ui.home_name = e, this._updateHomeNameDisplay(), this._renderEntries(), setTimeout(() => this._closeHomeNameModal(), 800);
		} catch (e) {
			alert(this._format("generic_error", { error: e.message }));
		}
	}
	async _savePin() {
		let e = this.shadowRoot.getElementById("pin-status"), t = this._dashboard?.entries?.[0]?.pin_configured === !0, n = this.shadowRoot.getElementById("current-pin").value;
		if (t && !n) {
			e && (e.textContent = this._t("pin_incorrect"), e.className = "status err");
			return;
		}
		let r = this.shadowRoot.getElementById("new-pin-1").value;
		if (r !== this.shadowRoot.getElementById("new-pin-2").value) {
			e ? (e.textContent = this._t("pin_mismatch"), e.className = "status err") : alert(this._t("pin_mismatch"));
			return;
		}
		try {
			await this._send("argus/update_master_pin", {
				pin: r,
				current_pin: n
			}), e && (e.textContent = r ? this._t("pin_updated") : this._t("pin_deleted"), e.className = "status ok"), this.shadowRoot.getElementById("current-pin-display") && (this.shadowRoot.getElementById("current-pin-display").textContent = r ? this._t("pin_active_yes") : this._t("pin_active_no")), this._dashboard?.entries?.[0] && (this._dashboard.entries[0].pin_configured = !!r), this._syncAccessSummary(), this.shadowRoot.getElementById("current-pin") && (this.shadowRoot.getElementById("current-pin").value = ""), this.shadowRoot.getElementById("new-pin-1").value = "", this.shadowRoot.getElementById("new-pin-2").value = "", setTimeout(() => this._load(), 1200);
		} catch (t) {
			e ? (e.textContent = t.message, e.className = "status err") : alert(t.message);
		}
	}
	async _handleForgotPin() {
		let e = this.shadowRoot.getElementById("pin-status"), t = this.shadowRoot.getElementById("pin-error");
		if (this._hass?.user?.is_admin !== !0) {
			let n = this._t("pin_reset_admin_only");
			e && (e.textContent = n, e.className = "status err"), t && (t.textContent = n);
			return;
		}
		if (confirm(this._t("pin_reset_confirm"))) try {
			await this._send("argus/update_master_pin", {
				pin: "",
				force_reset: !0
			});
			let n = "✓ Pin de Armado restablecido";
			e && (e.textContent = n, e.className = "status ok"), t && (t.textContent = n, t.style.color = "#43a047"), this.shadowRoot.getElementById("current-pin") && (this.shadowRoot.getElementById("current-pin").value = ""), this.shadowRoot.getElementById("new-pin-1").value = "", this.shadowRoot.getElementById("new-pin-2").value = "", setTimeout(() => {
				this._closePinModal(), this._load();
			}, 1200);
		} catch (n) {
			let r = this._format("generic_error", { error: n.message });
			e && (e.textContent = r, e.className = "status err"), t && (t.textContent = r);
		}
	}
	_showArgusInputModal({ title: e = "", label: t = "", placeholder: n = "", initialValue: r = "", type: i = "text", numeric: a = !1, options: o = null } = {}) {
		return new Promise((s) => {
			let c = `_aim_${Date.now()}`, l = document.createElement("div");
			l.id = c, l.setAttribute("role", "dialog"), l.setAttribute("aria-modal", "true"), l.style.cssText = [
				"position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center",
				"background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)",
				"animation:argus-modal-in .18s ease"
			].join(";");
			let u = t.replace(/'/g, "&#39;"), d = e.replace(/'/g, "&#39;"), f = n.replace(/'/g, "&#39;"), p = this._t("modal_cancel") || "Cancelar", m = this._t("modal_save") || "Guardar";
			l.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(380px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">${d}</div>
          ${u ? `<div style="font-size:13px;color:rgba(255,255,255,0.65);margin-top:-6px">${u}</div>` : ""}
          ${i === "select" && o ? `<select id="aim-inp" style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:12px;padding:12px 14px;font-size:15px;color:#fff;outline:none;width:100%;box-sizing:border-box;transition:border-color .2s;font-family:inherit">
                 ${o.map((e) => `<option value="${this._escapeHtml(e.value)}" ${e.value === r ? "selected" : ""}>${this._escapeHtml(e.label)}</option>`).join("")}
               </select>` : `<input id="aim-inp" type="${i === "password" ? "password" : "text"}"
            ${a ? "inputmode=\"numeric\" pattern=\"[0-9]*\"" : ""}
            placeholder="${f}"
            value="${r.replace(/"/g, "&quot;")}"
            style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:12px;
              padding:12px 14px;font-size:15px;color:#fff;outline:none;width:100%;box-sizing:border-box;
              transition:border-color .2s;font-family:inherit"/>`}
          <div style="display:flex;gap:10px;margin-top:4px">
            <button id="aim-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${p}</button>
            <button id="aim-ok" style="flex:1;padding:11px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#4a90d9,#7b5ea7);color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(74,144,217,0.35)">${m}</button>
          </div>
        </div>`, (document.body || this.shadowRoot).appendChild(l);
			let h = l.querySelector("#aim-inp"), g = l.querySelector("#aim-ok"), _ = l.querySelector("#aim-cancel");
			setTimeout(() => h?.focus(), 60), h?.addEventListener("focus", () => h.style.borderColor = "rgba(74,144,217,0.8)"), h?.addEventListener("blur", () => h.style.borderColor = "rgba(255,255,255,0.15)");
			let v = (e) => {
				l.remove(), s(e);
			};
			g.addEventListener("click", () => v(h.value)), _.addEventListener("click", () => v(null)), h.addEventListener("keydown", (e) => {
				e.key === "Enter" && (e.preventDefault(), v(h.value)), e.key === "Escape" && (e.preventDefault(), v(null));
			}), l.addEventListener("click", (e) => {
				e.target === l && v(null);
			});
		});
	}
	_showArgusPermissionsModal(e) {
		return new Promise((t) => {
			let n = document.createElement("div");
			n.style.cssText = [
				"position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center",
				"background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)",
				"animation:argus-modal-in .18s ease"
			].join(";");
			let r = this._t("modal_cancel") || "Cancelar", i = this._t("modal_save") || "Guardar", a = e.permissions || {};
			n.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(420px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">🛡️ ${this._t("permissions_title") || "Permisos"} — ${this._escapeHtml(e.name)}</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.65);margin-top:-6px">${this._t("permissions_modal_desc") || "Selecciona las acciones permitidas para este perfil estándar:"}</div>
          
          <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px;max-height:340px;overflow-y:auto;padding-right:4px;">
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-status" ${a.view_status ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>👁️ ${this._t("perm_view_status") || "Ver Estado de Sensores / Panel"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-arm" ${a.arm ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>🛡️ ${this._t("perm_arm") || "Armar Alarma"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-disarm" ${a.disarm ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>🔓 ${this._t("perm_disarm") || "Desarmar Alarma"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-sos" ${a.sos ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#f87171;font-weight:700;">🚨 ${this._t("perm_sos") || "Activar SOS / Pánico"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-history" ${a.view_history ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>📜 ${this._t("perm_view_history") || "Ver Historial de Actividad"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-pin" ${a.change_pin ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#34c759;font-weight:700;">🔑 ${this._t("perm_change_pin") || "Permitir Cambiar su Pin perfil Argus"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-master-pin" ${a.change_master_pin ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#ffb300;font-weight:700;">🔑 ${this._t("perm_change_master_pin") || "Permitir Cambiar el Pin de Armado"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-admin-access" ${a.admin_access ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#a855f7;font-weight:700;">⚙️ ${this._t("perm_admin_access") || "Acceso a Pestañas / Ajustes de Admin"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-admin-profiles" ${a.admin_profiles ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#38bdf8;font-weight:700;">👑 ${this._t("perm_admin_profiles") || "Acceso a Perfiles de Admin"}</span>
            </label>
          </div>

          <div style="display:flex;gap:10px;margin-top:10px">
            <button id="apm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${r}</button>
            <button id="apm-ok" style="flex:1;padding:11px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#4a90d9,#7b5ea7);color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(74,144,217,0.35)">${i}</button>
          </div>
        </div>`, (document.body || this.shadowRoot).appendChild(n);
			let o = n.querySelector("#apm-ok"), s = n.querySelector("#apm-cancel"), c = (e) => {
				n.remove(), t(e);
			};
			o.addEventListener("click", () => {
				let e = {
					view_status: n.querySelector("#chk-perm-view-status").checked,
					arm: n.querySelector("#chk-perm-arm").checked,
					disarm: n.querySelector("#chk-perm-disarm").checked,
					sos: n.querySelector("#chk-perm-sos").checked,
					view_history: n.querySelector("#chk-perm-view-history").checked,
					change_pin: n.querySelector("#chk-perm-change-pin").checked,
					change_master_pin: n.querySelector("#chk-perm-change-master-pin").checked,
					admin_access: n.querySelector("#chk-perm-admin-access").checked,
					admin_profiles: n.querySelector("#chk-perm-admin-profiles").checked
				};
				c(e);
			}), s.addEventListener("click", () => c(null)), n.addEventListener("click", (e) => {
				e.target === n && c(null);
			});
		});
	}
	_showArgusConfirmModal(e = "", { confirmLabel: t = "", confirmStyle: n = "", cancelLabel: r = "" } = {}) {
		return new Promise((i) => {
			let a = document.createElement("div");
			a.setAttribute("role", "alertdialog"), a.setAttribute("aria-modal", "true"), a.style.cssText = [
				"position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center",
				"background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)",
				"animation:argus-modal-in .18s ease"
			].join(";");
			let o = t || this._t("modal_confirm") || "Confirmar";
			a.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(360px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:18px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div style="font-size:15px;color:rgba(255,255,255,0.92);line-height:1.5;text-align:center">${e}</div>
          <div style="display:flex;gap:10px">
            <button id="acm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${r || this._t("modal_cancel") || "Cancelar"}</button>
            <button id="acm-ok" style="flex:1;padding:11px;border-radius:12px;color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;${n || "background:linear-gradient(135deg,#4a90d9,#7b5ea7);border:none;box-shadow:0 4px 14px rgba(74,144,217,0.35)"}">${o}</button>
          </div>
        </div>`, (document.body || this.shadowRoot).appendChild(a);
			let s = (e) => {
				a.remove(), i(e);
			};
			a.querySelector("#acm-ok").addEventListener("click", () => s(!0)), a.querySelector("#acm-cancel").addEventListener("click", () => s(!1)), a.addEventListener("click", (e) => {
				e.target === a && s(!1);
			}), a.addEventListener("keydown", (e) => {
				e.key === "Enter" && s(!0), e.key === "Escape" && s(!1);
			}), setTimeout(() => a.querySelector("#acm-ok")?.focus(), 60);
		});
	}
	_runWithPin(e) {
		e();
	}
	_showPinModal(e) {
		let t = this.shadowRoot.getElementById("pin-modal"), n = this.shadowRoot.getElementById("pin-input"), r = this.shadowRoot.getElementById("pin-error"), i = this.shadowRoot.querySelector(".wrap");
		n.value = "", r && (r.textContent = "", r.style.color = ""), this._pinCallback = e;
		let a = this.classList.contains("fullscreen-active"), o = null;
		if (a && (o = this.shadowRoot.querySelector(".entry.ios-fullscreen") || this.shadowRoot.querySelector(".entry") || this.shadowRoot.querySelector("article")), a && o) {
			t.style.position = "absolute", t.style.zIndex = "99999999", t.style.background = "rgba(0, 0, 0, 0.55)", t.style.backdropFilter = "none", t.style.webkitBackdropFilter = "none";
			let e = t.querySelector(".modal");
			e && (e.classList.remove("dial-elastic"), e.offsetWidth, e.classList.add("dial-elastic")), o.appendChild(t);
		} else t.style.position = "fixed", t.style.zIndex = "999999", t.style.background = "rgba(0, 0, 0, 0.3)", t.style.backdropFilter = "none", t.style.webkitBackdropFilter = "none", i && i.classList.add("wrap-blurred");
		t.classList.add("open"), t.setAttribute("aria-hidden", "false"), setTimeout(() => n.focus(), 60);
	}
	_closePinModal() {
		let e = this.shadowRoot.getElementById("pin-modal");
		e.classList.remove("open"), e.setAttribute("aria-hidden", "true");
		let t = this.shadowRoot.querySelector(".wrap");
		t && t.classList.remove("wrap-blurred"), e.style.position = "fixed", e.style.zIndex = "999999", this.shadowRoot.appendChild(e), this._pinCallback = null;
	}
	_appendPinDigit(e) {
		let t = this.shadowRoot.getElementById("pin-input"), n = this.shadowRoot.getElementById("pin-error");
		t && (t.value = `${t.value || ""}${e}`.slice(0, 8), n && (n.textContent = ""));
	}
	_backspacePin() {
		let e = this.shadowRoot.getElementById("pin-input"), t = this.shadowRoot.getElementById("pin-error");
		e && (e.value = (e.value || "").slice(0, -1), t && (t.textContent = ""));
	}
	async _submitPin() {
		let e = this.shadowRoot.getElementById("pin-input").value.trim();
		if (!e) {
			let e = this.shadowRoot.getElementById("pin-error");
			e && (e.textContent = "⚠️ Introduce el PIN");
			return;
		}
		let t = this._pinCallback;
		if (t) try {
			await t(e) !== !1 && this._closePinModal();
		} catch (e) {
			let t = this.shadowRoot.getElementById("pin-error");
			t && (t.textContent = e.message || "❌ PIN incorrecto");
		}
		else this._closePinModal();
	}
	_selectAll() {
		let e = (this.shadowRoot.getElementById("selector-search")?.value || "").toLowerCase().trim(), t = [
			"door",
			"window",
			"motion",
			"vibration",
			"glass",
			"opening",
			"smoke",
			"gas",
			"tamper"
		];
		(this._available || []).filter((e) => {
			if (this._selectorTarget === "external_panel") return e.domain === "alarm_control_panel";
			if (this._selectorTarget === "siren" || this._selectorTarget === "panic") return [
				"siren",
				"switch",
				"light",
				"fan",
				"input_boolean",
				"script",
				"alarm_control_panel"
			].includes(e.domain);
			if (e.domain === "lock") return !0;
			if (e.domain === "binary_sensor") {
				let n = this._hass?.states?.[e.entity_id]?.attributes?.device_class || "";
				return t.includes(n);
			}
			return !1;
		}).filter((t) => !e || [
			t.entity_id,
			t.name,
			t.area
		].filter(Boolean).join(" ").toLowerCase().includes(e)).forEach((e) => {
			this._selected.includes(e.entity_id) || this._selected.push(e.entity_id);
		}), this._renderSelector(!0);
	}
	_openModal(e) {
		this._selectorTarget = e;
		let t = this._currentModeConfig(), n = e === "sensor" ? "sensors" : e === "bypass" ? "bypassed_sensors" : e === "entry" ? "entry_sensors" : e === "external_panel" ? "external_panels" : "sirens";
		this._selected = e === "panic" ? [...this._panicOutputs || this._ui?.panic_outputs || []] : Array.isArray(t?.[n]) ? [...t[n]] : [];
		let r = this.shadowRoot.getElementById("selector-title");
		r.textContent = e === "sensor" ? this._t("sensor_section") : e === "bypass" ? this._t("sensors_to_bypass") : e === "entry" ? this._t("entry_sensors") : e === "panic" ? this._t("sos_actions") || this._t("selector_panic") || "Dispositivos y Acciones SOS" : e === "external_panel" ? this._t("external_panels") || "Paneles de alarma externos" : this._t("siren_section");
		let i = this.shadowRoot.getElementById("selector-search");
		i && (i.value = ""), this._renderSelector(!0);
		let a = this.shadowRoot.getElementById("selector-modal");
		a.classList.add("open"), a.setAttribute("aria-hidden", "false");
	}
	_closeModal() {
		let e = this.shadowRoot.getElementById("selector-modal");
		e.classList.remove("open"), e.setAttribute("aria-hidden", "true");
	}
	_renderSelectedBox() {
		let e = this.shadowRoot.getElementById("selector-selected");
		if (!e) return;
		e.innerHTML = this._selected.map((e) => {
			let t = this._hass?.states?.[e], n = this._deviceFacts(e, t, !0);
			return `<div class="sel-right-item">
        <div style="min-width:0">
          <div class="sel-right-name">${this._escapeHtml(t?.attributes?.friendly_name || e)}</div>
          <div class="sel-right-facts">${n.map((e) => `<span class="device-fact ${e.className}">${this._escapeHtml(e.text)}</span>`).join("")}</div>
        </div>
        <button class="ghost" style="padding:3px 8px;font-size:11px;flex-shrink:0;margin-left:6px" data-rm="${this._escapeHtml(e)}">✕</button>
      </div>`;
		}).join("") || `<div class="small" style="padding:10px;opacity:.5">${this._t("none_selected")}</div>`;
		let t = this.shadowRoot.getElementById("selector-count");
		t && (t.textContent = `${this._selected.length} ${this._t("selected_lbl").toLowerCase()}`);
	}
	_renderSelector(e = !0) {
		let t = this.shadowRoot.getElementById("selector-list"), n = this.shadowRoot.getElementById("selector-selected");
		if (t && n) {
			if (t._boundSelectorChange || (t._boundSelectorChange = !0, t.addEventListener("change", (e) => {
				let t = e.target.closest("input[type=checkbox]");
				if (!t || !t.dataset.entity) return;
				let n = t.dataset.entity;
				t.checked ? this._selected.includes(n) || this._selected.push(n) : this._selected = this._selected.filter((e) => e !== n), this._renderSelectedBox();
			})), n._boundSelectorRm || (n._boundSelectorRm = !0, n.addEventListener("click", (e) => {
				let n = e.target.closest("[data-rm]");
				if (!n || !n.dataset.rm) return;
				let r = n.dataset.rm;
				this._selected = this._selected.filter((e) => e !== r);
				let i = t.querySelector(`input[type=checkbox][data-entity="${r}"]`);
				i && (i.checked = !1), this._renderSelectedBox();
			})), e) {
				let e = (this.shadowRoot.getElementById("selector-search")?.value || "").toLowerCase().trim(), n = [
					"door",
					"window",
					"motion",
					"vibration",
					"glass",
					"opening",
					"smoke",
					"gas",
					"tamper"
				];
				t.innerHTML = (this._available || []).filter((e) => {
					if (this._selectorTarget === "external_panel") return e.domain === "alarm_control_panel";
					if (this._selectorTarget === "siren" || this._selectorTarget === "panic") return [
						"siren",
						"switch",
						"light",
						"fan",
						"input_boolean",
						"script",
						"alarm_control_panel"
					].includes(e.domain);
					if (e.domain === "lock") return !0;
					if (e.domain === "binary_sensor") {
						let t = this._hass?.states?.[e.entity_id]?.attributes?.device_class || "";
						return n.includes(t);
					}
					return !1;
				}).filter((t) => !e || [
					t.entity_id,
					t.name,
					t.area,
					t.entity_id.split(".")[1]
				].filter(Boolean).join(" ").toLowerCase().includes(e)).map((e) => {
					let t = this._hass?.states?.[e.entity_id], n = this._deviceFacts(e.entity_id, t, !0);
					return `<label class="pick-row">
          <input type="checkbox" data-entity="${this._escapeHtml(e.entity_id)}" ${this._selected.includes(e.entity_id) ? "checked" : ""}>
          <div>
            <div class="pick-row-name">${this._escapeHtml(e.name || e.entity_id)}</div>
            <div class="pick-row-meta">${this._escapeHtml(e.entity_id)}${e.area ? " · " + this._escapeHtml(e.area) : ""}</div>
            <div class="device-facts">${n.map((e) => `<span class="device-fact ${e.className}">${this._escapeHtml(e.text)}</span>`).join("")}</div>
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
		let e = this._modeEntryId;
		(!e || e === "default") && (e = this._dashboard?.entries?.[0]?.entity_id || "default"), this._modeEntryId = e, this._ui.modes.__by_entity__[e] || (this._ui.modes.__by_entity__[e] = {});
		let t = {
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
		}, n = this._ui.modes.__by_entity__[e][this._mode] || {}, r = {
			...t,
			...n
		};
		this._selectorTarget === "sensor" && (r.sensors = [...this._selected]), this._selectorTarget === "siren" && (r.sirens = [...this._selected]), this._selectorTarget === "bypass" && (r.bypassed_sensors = [...this._selected]), this._selectorTarget === "entry" && (r.entry_sensors = [...this._selected]), this._selectorTarget === "external_panel" && (r.external_panels = [...this._selected]), this._ui.modes.__by_entity__[e][this._mode] = r, this._closeModal(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
	}
	async _handleAction(e, t) {
		let n = this._dashboard.entries[Number(e)];
		if (!n?.entity_id || !this._hass) return;
		let r = this._hass.states[n.entity_id];
		if (!r || r.state === "unavailable") return;
		let i = {
			home: "alarm_arm_home",
			away: "alarm_arm_away",
			night: "alarm_arm_night",
			vacation: "alarm_arm_vacation",
			disarm: "alarm_disarm"
		}, a = {
			home: this._t("mode_home"),
			away: this._t("mode_away"),
			night: this._t("mode_night"),
			vacation: this._t("mode_vacation")
		}, o = i[t];
		if (!o) return;
		if (this._hass?.user?.name || this._t("user_default"), t === "disarm") {
			if (!this._isAdmin && this._permissions?.disarm === !1) {
				await this._showArgusConfirmModal(this._t("no_disarm_perm_alert") || "No tienes permisos para desarmar la alarma.", { confirmLabel: "OK" });
				return;
			}
			let e = n.pin_configured === !0, t = n.user_pin_configured === !0, r = async (e) => {
				try {
					return await this._send("argus/perform_alarm_action", {
						action: "disarm",
						entry_id: n.entry_id,
						...e ? { code: e } : {}
					}), setTimeout(() => {
						this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")), this._load();
					}, 300), !0;
				} catch {
					let e = this.shadowRoot.getElementById("pin-error");
					return e && (e.textContent = "❌ PIN incorrecto o error al desarmar"), !1;
				}
			};
			e || t ? this._showPinModal(async (e) => await r(e)) : await r(null);
			return;
		}
		if (t !== "disarm" && !this._isAdmin && this._permissions?.arm === !1) {
			await this._showArgusConfirmModal(this._t("no_arm_perm_alert") || "No tienes permisos para armar la alarma.", { confirmLabel: "OK" });
			return;
		}
		let s = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id, c = this._ui?.modes?.__by_entity__?.[s]?.[t] || this._ui?.modes?.[t] || {};
		if (c.require_closed) {
			let e = c.sensors || [], t = new Set(c.bypassed_sensors || c.bypassedSensors || []), n = [];
			for (let r of e) {
				if (t.has(r)) continue;
				let e = this._hass.states[r]?.state;
				[
					"on",
					"open",
					"unlocked",
					"active",
					"motion",
					"recording"
				].includes(e) && n.push(this._hass.states[r]?.attributes?.friendly_name || r);
			}
			if (n.length > 0) {
				this._showArmBlockedAlert(n);
				return;
			}
		}
		try {
			await this._send("argus/perform_alarm_action", {
				action: o.replace("alarm_", ""),
				entry_id: n.entry_id
			}), a[t], setTimeout(() => this._load(), 800);
		} catch (e) {
			let t = e?.message || (typeof e == "string" ? e : JSON.stringify(e));
			this._showArmBlockedAlert([], t), console.error("Argus action failed", e);
		}
	}
	_showArmBlockedAlert(e = [], t = "") {
		if (t) {
			alert(`🚨 ${this._t("action_failed")}\n\n${t}`);
			return;
		}
		let n = e.map((e) => `  • ${e}`).join("\n");
		alert(`🚨 ${this._t("cannot_arm")}\n\n` + this._format("open_sensors_explain", { names: n }));
	}
	_renderInitializationError(e) {
		let t = this.shadowRoot.getElementById("bootstrap-overlay");
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
		this._hideInitialCurtain();
		let e = this.shadowRoot.getElementById("bootstrap-overlay");
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
	_getProfileContrast() {
		let e = this._currentProfile?.id || "default";
		try {
			let t = localStorage.getItem(`argus_contrast_${e}`);
			if (t === "high" || t === "standard") return t;
		} catch {}
		return "standard";
	}
	_setContrastMode(e) {
		let t = this._currentProfile?.id || "default";
		try {
			localStorage.setItem(`argus_contrast_${t}`, e), localStorage.setItem("argus_contrast_global", e);
		} catch {}
		this._applyContrastMode(e);
	}
	_applyContrastMode(e) {
		e === "high" ? (this.setAttribute("argus-contrast", "high"), this.classList.add("argus-contrast-high")) : (this.removeAttribute("argus-contrast"), this.classList.remove("argus-contrast-high"));
	}
	_initContrastMode() {
		let e = this._getProfileContrast();
		this._applyContrastMode(e);
	}
	_getProfileGesture() {
		let e = this._currentProfile?.id || "default";
		try {
			let t = localStorage.getItem(`argus_gesture_${e}`);
			if (t === "touch" || t === "slide") return t;
			let n = localStorage.getItem("argus_gesture_global");
			if (n === "touch" || n === "slide") return n;
		} catch {}
		return "slide";
	}
	_setGestureMode(e) {
		let t = this._currentProfile?.id || "default";
		try {
			localStorage.setItem(`argus_gesture_${t}`, e), localStorage.setItem("argus_gesture_global", e);
		} catch {}
		this._applyGestureMode(e);
	}
	_applyGestureMode(e) {
		e === "touch" ? (this.setAttribute("argus-gesture", "touch"), this.classList.add("argus-gesture-touch")) : (this.removeAttribute("argus-gesture"), this.classList.remove("argus-gesture-touch"));
		let t = this.shadowRoot?.getElementById("sos-label");
		t && (t.textContent = e === "touch" ? this._t("tap_sos") || "Activar SOS" : this._t("slide_sos") || "Desliza para activar SOS");
		let n = this.shadowRoot?.getElementById("sos-thumb");
		n && n.setAttribute("aria-label", e === "touch" ? this._t("tap_sos") || "Activar SOS" : this._t("slide_sos") || "Deslizar para activar SOS"), this.shadowRoot?.querySelectorAll(".entry").forEach((e) => e._staRefresh?.());
		try {
			this.dispatchEvent(new CustomEvent("argus-state-update")), window.dispatchEvent(new CustomEvent("argus-state-update"));
		} catch {}
	}
	_initGestureMode() {
		let e = this._getProfileGesture();
		this._applyGestureMode(e);
	}
	_updateHeroProfileDisplay() {
		let e = this.shadowRoot.getElementById("hero-profile-container");
		if (!e) return;
		let t = this._currentProfile;
		if (!t) {
			e.style.display = "none", e.innerHTML = "";
			return;
		}
		e.style.display = "flex", e.style.position = "relative";
		let n = t.picture || null;
		if (!n && this._hass?.states) {
			let e = Object.values(this._hass.states).filter((e) => e.entity_id?.startsWith("person.") && (e.attributes?.friendly_name?.toLowerCase() === t.name?.toLowerCase() || e.attributes?.user_id === t.ha_user_id));
			if (e.length > 0) {
				let t = e[0].attributes?.entity_picture;
				t && (n = t);
			}
		}
		t.picture = n;
		let r = t.picture ? `<img id="hero-profile-avatar" class="user-avatar" src="${this._escapeHtml(t.picture)}" alt="${this._escapeHtml(t.name)}" style="width: 34px; height: 34px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(255,255,255,0.20); box-shadow: 0 3px 8px rgba(0,0,0,0.2); flex-shrink: 0; transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);" />` : `<div id="hero-profile-avatar" class="user-avatar" style="width: 34px; height: 34px; border-radius: 50%; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.15); flex-shrink: 0; transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">${this._escapeHtml(t.name.substring(0, 2).toUpperCase())}</div>`, i = this._manualLang || "auto", a = t.role === "admin" || t.permissions && t.permissions.change_pin, o = t.role === "admin" || t.permissions && t.permissions.change_master_pin, s = t.role === "admin" ? this._t("role_argus_admin_short") || "Admin" : this._t("role_argus_user_short") || "Estándar", c = (this._users || []).find((e) => e.id === t.id), u = !!(t.access_pin_configured || c?.access_pin_configured), d = !!(this._dashboard?.entries?.[0]?.pin_configured || t.master_pin_configured || (this._users || []).find((e) => e.role === "admin")?.pin_configured);
		e.innerHTML = `
      <div style="position: relative; display: flex; align-items: center; z-index: 10002;">
        <div class="hero-profile-pill glass liquid-glass" style="display: flex; align-items: center; gap: 8px; padding: 5px 12px 5px 7px; border-radius: 999px;">
          ${r}
          <div style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.15;">
            <span id="hero-profile-name" style="font-size: 12.5px; font-weight: 800; color: var(--v2066-text, #f7f9ff); max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${this._escapeHtml(t.name)}</span>
            <span id="hero-profile-role" style="font-size: 8.5px; opacity: 0.65; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">${this._escapeHtml(s)}</span>
          </div>
          <span class="profile-chevron" style="font-size: 7.5px; opacity: 0.65; margin-left: 2px;">▼</span>
        </div>

        <!-- Dropdown Card -->
        <div id="profile-dropdown" class="hero-profile-dropdown" style="display: none; position: absolute; top: calc(100% + 12px); right: 0; flex-direction: column; width: min(420px, calc(100vw - 24px)); min-width: 320px; z-index: 999999; padding: 20px 22px; border-radius: 20px; box-shadow: 0 20px 48px rgba(0,0,0,0.55); border: 1.5px solid rgba(255,255,255,0.18); max-height: calc(100vh - 100px); overflow-y: auto;">
        <div style="display: flex; align-items: center; gap: 14px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-bottom: 12px; width: 100%;">
          ${t.picture ? `<img src="${this._escapeHtml(t.picture)}" alt="${this._escapeHtml(t.name)}" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.25); box-shadow: 0 4px 12px rgba(0,0,0,0.3); flex-shrink: 0;" />` : `<div class="user-avatar" style="width: 48px; height: 48px; border-radius: 50%; font-size: 14px; font-weight: 800; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.12); border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 4px 12px rgba(0,0,0,0.3); flex-shrink: 0;">${this._escapeHtml(t.name.substring(0, 2).toUpperCase())}</div>`}
          <div style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0; align-items: flex-start;">
            <span style="font-size: 10px; opacity: 0.65; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">${this._t("profile_is_yours") || this._t("active_profile") || "Perfil Activo"}</span>
            <span style="font-size: 15px; font-weight: 850; color: var(--v2066-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%; text-align: left;">${this._escapeHtml(t.name)}</span>
            <button id="btn-change-profile-picture" style="font-size: 11px; font-weight: 700; color: #34d399; text-decoration: none; display: flex; align-items: center; gap: 4px; margin-top: 3px; background: none; border: none; padding: 0; cursor: pointer;">
              👤 ${this._t("change_profile_picture") || "Cambiar foto en Personas de HA ↗"}
            </button>
          </div>
          <span class="user-badge ${t.role === "admin" ? "admin" : "user"}" style="font-size: 9px; padding: 4px 9px; font-weight: 800; border-radius: 6px; flex-shrink: 0; text-transform: uppercase; letter-spacing: 0.04em;">${this._escapeHtml(s)}</span>
        </div>

        <!-- Language Selector -->
        <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 10px;">
          <label style="font-size: 11.5px; font-weight: 700; opacity: 0.85; display: flex; align-items: center; gap: 6px;">${this._t("lang_selector_lbl") || "⚙️ Idioma / Language"}</label>
          <select id="dropdown-lang-select" class="glass-control" style="width: 100%; height: 38px; border-radius: 10px; padding: 0 12px; font-size: 12.5px; font-weight: 700; background: rgba(255,255,255,0.06); border: 1px solid var(--v2066-border); color: var(--v2066-text); outline: none; cursor: pointer;">
            ${l.map((e) => `<option value="${e.code}" ${e.code === i ? "selected" : ""}>${e.flag} ${e.code === "auto" ? this._t("use_ha_language") || "Automático (HA)" : e.label}</option>`).join("")}
          </select>
        </div>

        <!-- Appearance & Contrast Selector -->
        <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 10px;">
          <label style="font-size: 11.5px; font-weight: 700; opacity: 0.85; display: flex; align-items: center; gap: 6px;">${this._t("contrast_selector_lbl") || "👁️ Aspecto y Contraste"}</label>
          <select id="dropdown-contrast-select" class="glass-control" aria-label="${this._t("contrast_selector_lbl") || "Aspecto y Contraste"}" style="width: 100%; height: 38px; border-radius: 10px; padding: 0 12px; font-size: 12.5px; font-weight: 700; background: rgba(255,255,255,0.06); border: 1px solid var(--v2066-border); color: var(--v2066-text); outline: none; cursor: pointer;">
            <option value="standard" ${this._getProfileContrast() === "standard" ? "selected" : ""}>${this._t("contrast_standard") || "✨ Estándar (Liquid Glass)"}</option>
            <option value="high" ${this._getProfileContrast() === "high" ? "selected" : ""}>${this._t("contrast_high") || "🖤 Alto Contraste (OLED / Oscuro)"}</option>
          </select>
        </div>

        <!-- Interaction / Gesture Selector (WCAG 2.5.1) -->
        <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 10px;">
          <label style="font-size: 11.5px; font-weight: 700; opacity: 0.85; display: flex; align-items: center; gap: 6px;">${this._t("gesture_selector_lbl") || "🕹️ Modo de Control (Accesibilidad)"}</label>
          <select id="dropdown-gesture-select" class="glass-control" aria-label="${this._t("gesture_selector_lbl") || "Modo de control de alarma"}" style="width: 100%; height: 38px; border-radius: 10px; padding: 0 12px; font-size: 12.5px; font-weight: 700; background: rgba(255,255,255,0.06); border: 1px solid var(--v2066-border); color: var(--v2066-text); outline: none; cursor: pointer;">
            <option value="slide" ${this._getProfileGesture() === "slide" ? "selected" : ""}>${this._t("gesture_slide") || "↔️ Deslizador Táctil (Antitoques)"}</option>
            <option value="touch" ${this._getProfileGesture() === "touch" ? "selected" : ""}>${this._t("gesture_touch") || "👆 Botón Accesible (Toque Simple)"}</option>
          </select>
        </div>

        <!-- PIN management section -->
        ${a || o ? `
        <div style="display: flex; flex-direction: column; gap: 8px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px; margin-top: 2px;">
          <span style="font-size: 11.5px; font-weight: 700; opacity: 0.85;">${this._t("pin_management") || "🔑 Gestión de Pines"}</span>
          
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${a ? `
            <div class="profile-card-tile">
              <div style="display: flex; flex-direction: column; gap: 3px; min-width: 0;">
                <span style="font-size: 12.5px; font-weight: 700; color: #f1f5f9; white-space: nowrap;">${this._t("access_pin_lbl") || "PIN de Perfil"}</span>
                <div style="display: flex; align-items: center; gap: 6px;">
                  ${u ? `
                  <span style="font-size: 11px; font-weight: 750; color: #34d399; display: flex; align-items: center; gap: 5px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: #34d399; box-shadow: 0 0 6px rgba(52,211,153,0.6);"></span> ${this._t("configured_pin_badge") || "Configurado"}
                  </span>
                  ` : `
                  <span style="font-size: 11px; font-weight: 750; color: #fbbf24; display: flex; align-items: center; gap: 5px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.6);"></span> ${this._t("no_pin_badge") || "Sin PIN"}
                  </span>
                  `}
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                ${u ? `
                <button id="btn-dropdown-change-access-pin" class="profile-btn" aria-label="Cambiar PIN de perfil">${this._t("change_btn") || "Cambiar"}</button>
                <button id="btn-dropdown-remove-access-pin" class="profile-btn danger" aria-label="Eliminar PIN de perfil">${this._t("remove_btn") || "Eliminar"}</button>
                ` : `
                <button id="btn-dropdown-set-access-pin" class="profile-btn primary" aria-label="Configurar PIN de perfil">⚙️ ${this._t("configure_btn") || "Configurar"}</button>
                `}
              </div>
            </div>
            ` : ""}
            
            ${o ? `
            <div class="profile-card-tile">
              <div style="display: flex; flex-direction: column; gap: 3px; min-width: 0;">
                <span style="font-size: 12.5px; font-weight: 700; color: #f1f5f9; white-space: nowrap;">${this._t("master_pin_lbl") || "PIN de Armado"}</span>
                <div style="display: flex; align-items: center; gap: 6px;">
                  ${d ? `
                  <span style="font-size: 11px; font-weight: 750; color: #34d399; display: flex; align-items: center; gap: 5px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: #34d399; box-shadow: 0 0 6px rgba(52,211,153,0.6);"></span> ${this._t("configured_pin_badge") || "Configurado"}
                  </span>
                  ` : `
                  <span style="font-size: 11px; font-weight: 750; color: #fbbf24; display: flex; align-items: center; gap: 5px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.6);"></span> ${this._t("no_pin_badge") || "Sin PIN"}
                  </span>
                  `}
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                ${d ? `
                <button id="btn-dropdown-change-master-pin" class="profile-btn" aria-label="Cambiar PIN de armado">${this._t("change_btn") || "Cambiar"}</button>
                <button id="btn-dropdown-remove-master-pin" class="profile-btn danger" aria-label="Eliminar PIN de armado">${this._t("remove_btn") || "Eliminar"}</button>
                ` : `
                <button id="btn-dropdown-set-master-pin" class="profile-btn primary" aria-label="Configurar PIN de armado">⚙️ ${this._t("configure_btn") || "Configurar"}</button>
                `}
              </div>
            </div>
            ` : ""}
          </div>
        </div>
        ` : ""}

        <!-- Home Name Section -->
        <div class="profile-card-tile" style="margin-top: 4px;">
          <div style="display: flex; flex-direction: column; min-width: 0; flex: 1 1 auto; gap: 3px;">
            <span style="font-size: 11px; font-weight: 750; color: #94a3b8; white-space: nowrap; text-transform: uppercase; letter-spacing: 0.04em;">🏡 ${this._t("home_name_lbl") || "Nombre del Hogar"}</span>
            <span id="dropdown-home-name" style="font-size: 14px; font-weight: 850; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 240px; display: block;" title="${this._escapeHtml(this._homeName || "Mi Casa")}">${this._escapeHtml(this._homeName || "Mi Casa")}</span>
          </div>
          <button id="btn-dropdown-edit-home-name" class="profile-btn" aria-label="Cambiar nombre de la casa" style="min-height: 36px; padding: 7px 16px;">✏️ ${this._t("change_btn") || "Cambiar"}</button>
        </div>

        <!-- Switch user button -->
        <button id="btn-dropdown-switch-user" class="profile-btn" aria-label="Cambiar perfil de usuario" style="width: 100% !important; min-height: 42px; padding: 8px 14px; border-radius: 12px; font-size: 13px; font-weight: 800; margin-top: 8px; background: rgba(255,255,255,0.06) !important; border: 1px solid rgba(255,255,255,0.15) !important;">
          ${this._t("switch_profile_btn") || "👤 Cambiar de Perfil"}
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
		let f = e.querySelector(".hero-profile-pill"), p = e.querySelector("#profile-dropdown");
		if (f && p) {
			let t = (t) => {
				let n = e.closest(".hero");
				n && (n.style.zIndex = t ? "999999" : "9999");
				let r = e.closest(".wrap");
				r && (r.style.zIndex = t ? "999999" : "");
				let i = e.closest(".argus-widget") || e.closest(".react-grid-item") || e.closest(".panel");
				i && (i.style.zIndex = t ? "999999" : "");
			};
			f.addEventListener("click", (e) => {
				e.stopPropagation();
				let n = p.style.display === "flex";
				p.style.display = n ? "none" : "flex", t(!n);
			});
			let n = (r) => {
				(r.composedPath ? r.composedPath() : [r.target]).some((t) => t === e || t.closest && t.closest?.("#profile-dropdown")) || (p.style.display = "none", t(!1), document.removeEventListener("click", n, !0));
			};
			f.addEventListener("click", () => {
				setTimeout(() => {
					p.style.display === "flex" && document.addEventListener("click", n, !0);
				}, 10);
			});
		}
		let m = e.querySelector("#dropdown-lang-select");
		m && m.addEventListener("change", (e) => {
			this._setLanguage(e.target.value);
		});
		let h = e.querySelector("#dropdown-contrast-select");
		h && h.addEventListener("change", (e) => {
			this._setContrastMode(e.target.value);
		}), this._initContrastMode();
		let g = e.querySelector("#dropdown-gesture-select");
		g && g.addEventListener("change", (e) => {
			this._setGestureMode(e.target.value);
		}), this._initGestureMode(), e.querySelector("#btn-change-profile-picture")?.addEventListener("click", (e) => {
			e.stopPropagation(), p.style.display = "none";
			try {
				window.history.pushState(null, "", "/config/person"), window.dispatchEvent(new CustomEvent("location-changed"));
			} catch {
				window.location.href = "/config/person";
			}
		}), e.querySelector("#btn-dropdown-switch-user")?.addEventListener("click", (e) => {
			e.stopPropagation(), this._switchProfile();
		});
		let _ = async (e) => {
			e.stopPropagation(), p.style.display = "none";
			let n = await this._showArgusInputModal({
				title: `🔑 ${this._t("access_pin_lbl") || "Pin perfil Argus"}`,
				label: this._t("enter_new_pin") || "Introduce el nuevo PIN (4 a 8 dígitos):",
				placeholder: "••••",
				type: "password",
				numeric: !0
			});
			if (n !== null && n.trim()) try {
				if (await this._send("argus/save_user_access_pin", {
					argus_user_id: t.id,
					pin: n.trim()
				}), t.access_pin_configured = !0, this._ui?.users) {
					let e = this._ui.users.findIndex((e) => e.id === t.id);
					e !== -1 && (this._ui.users[e].access_pin_configured = !0);
				}
				await this._showArgusConfirmModal(this._t("pin_updated") || "PIN actualizado exitosamente", { confirmLabel: "OK" }), this._load();
			} catch (e) {
				this._showArgusConfirmModal(e.message || this._format("generic_error", { error: e }), { confirmLabel: "OK" });
			}
		};
		e.querySelector("#btn-dropdown-set-access-pin")?.addEventListener("click", _), e.querySelector("#btn-dropdown-change-access-pin")?.addEventListener("click", _), e.querySelector("#btn-dropdown-remove-access-pin")?.addEventListener("click", async (e) => {
			if (e.stopPropagation(), p.style.display = "none", await this._showArgusConfirmModal(this._t("confirm_remove_access_pin") || "¿Estás seguro de que deseas eliminar el Pin de perfil Argus?", {
				confirmLabel: this._t("remove_btn") || "Eliminar",
				confirmStyle: "background:#ef4444;color:#fff;border:none;box-shadow:0 4px 14px rgba(239,68,68,0.35);"
			})) try {
				if (await this._send("argus/save_user_access_pin", {
					argus_user_id: t.id,
					pin: ""
				}), t.access_pin_configured = !1, this._ui?.users) {
					let e = this._ui.users.findIndex((e) => e.id === t.id);
					e !== -1 && (this._ui.users[e].access_pin_configured = !1);
				}
				await this._showArgusConfirmModal(this._t("pin_deleted") || "PIN eliminado", { confirmLabel: "OK" }), this._load();
			} catch (e) {
				this._showArgusConfirmModal(e.message || this._format("generic_error", { error: e }), { confirmLabel: "OK" });
			}
		});
		let v = async (e) => {
			e.stopPropagation(), p.style.display = "none";
			let n = this._dashboard?.entries?.[0]?.entry_id || this._dashboard?.entry_id || this._modeEntryId, r = "";
			if (d && t.role !== "admin") {
				let e = await this._showArgusInputModal({
					title: `🔑 ${this._t("master_pin_lbl") || "Pin de Armado"}`,
					label: this._t("enter_current_pin") || "Introduce el PIN actual:",
					placeholder: "••••",
					type: "password",
					numeric: !0
				});
				if (e === null) return;
				r = e.trim();
			}
			let i = await this._showArgusInputModal({
				title: `🔑 ${this._t("master_pin_lbl") || "Pin de Armado"}`,
				label: this._t("enter_new_pin") || "Introduce el nuevo PIN (4 a 8 dígitos):",
				placeholder: "••••",
				type: "password",
				numeric: !0
			});
			if (i !== null && i.trim()) try {
				await this._send("argus/update_master_pin", {
					entry_id: n,
					pin: i.trim(),
					current_pin: r
				}), this._dashboard?.entries?.[0] && (this._dashboard.entries[0].pin_configured = !0), await this._showArgusConfirmModal(this._t("pin_updated") || "PIN actualizado exitosamente", { confirmLabel: "OK" }), this._load();
			} catch (e) {
				this._showArgusConfirmModal(e.message || this._format("generic_error", { error: e }), { confirmLabel: "OK" });
			}
		};
		e.querySelector("#btn-dropdown-set-master-pin")?.addEventListener("click", v), e.querySelector("#btn-dropdown-change-master-pin")?.addEventListener("click", v), e.querySelector("#btn-dropdown-remove-master-pin")?.addEventListener("click", async (e) => {
			e.stopPropagation(), p.style.display = "none";
			let n = this._dashboard?.entries?.[0]?.entry_id || this._dashboard?.entry_id || this._modeEntryId, r = "";
			if (d && t.role !== "admin") {
				let e = await this._showArgusInputModal({
					title: `🔑 ${this._t("master_pin_lbl") || "Pin de Armado"}`,
					label: this._t("enter_current_pin") || "Introduce el PIN actual para confirmar eliminación:",
					placeholder: "••••",
					type: "password",
					numeric: !0
				});
				if (e === null) return;
				r = e.trim();
			}
			if (await this._showArgusConfirmModal(this._t("confirm_remove_master_pin") || "¿Estás seguro de que deseas eliminar el Pin de Armado del sistema?", {
				confirmLabel: this._t("remove_btn") || "Eliminar",
				confirmStyle: "background:#ef4444;color:#fff;border:none;box-shadow:0 4px 14px rgba(239,68,68,0.35);"
			})) try {
				await this._send("argus/update_master_pin", {
					entry_id: n,
					pin: "",
					current_pin: r
				}), this._dashboard?.entries?.[0] && (this._dashboard.entries[0].pin_configured = !1), await this._showArgusConfirmModal(this._t("pin_deleted") || "PIN eliminado", { confirmLabel: "OK" }), this._load();
			} catch (e) {
				this._showArgusConfirmModal(e.message || this._format("generic_error", { error: e }), { confirmLabel: "OK" });
			}
		}), e.querySelector("#btn-dropdown-edit-home-name")?.addEventListener("click", (e) => {
			e.stopPropagation(), p.style.display = "none", this._editHomeName();
		});
	}
	async _switchProfile() {
		let e;
		try {
			e = await this._send("argus/bootstrap"), this._welcomeShownThisMount = !1, this._renderLoginScreen(e);
		} catch (e) {
			console.error("Switch profile bootstrap failed:", e);
		}
	}
	async _showChangePictureModal() {
		let e = [];
		try {
			e = ((await this._send("argus/get_ha_persons", {}))?.ha_persons ?? []).filter((e) => e.entity_id).map((e) => {
				let t = this._hass?.states?.[e.entity_id];
				return {
					name: e.name || e.entity_id,
					url: t?.attributes?.entity_picture || null
				};
			}).filter((e) => e.url);
		} catch {}
		let t = document.createElement("div");
		t.style.cssText = "\n      position: fixed; inset: 0; z-index: 10100;\n      background: rgba(0,0,0,0.75);\n      backdrop-filter: blur(20px);\n      -webkit-backdrop-filter: blur(20px);\n      display: flex; align-items: center; justify-content: center;\n    ";
		let n = e.map((e, t) => `
      <div data-pic-url="${this._escapeHtml(e.url)}" data-pic-idx="${t}"
           style="display:flex; flex-direction:column; align-items:center; gap:8px; cursor:pointer; padding:10px; border-radius:12px; border:2px solid transparent; transition:border-color 0.15s;"
           class="ha-pic-option">
        <img src="${this._escapeHtml(e.url)}" alt="${this._escapeHtml(e.name)}"
             style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid rgba(255,255,255,0.15); box-shadow:0 4px 14px rgba(0,0,0,0.3);" />
        <span style="font-size:10px; font-weight:700; color:rgba(255,255,255,0.7); max-width:72px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${this._escapeHtml(e.name)}</span>
      </div>
    `).join("");
		t.innerHTML = `
      <div style="background:rgba(30,32,48,0.97); border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:24px; width:min(380px,90vw); color:#fff;">
        <h3 style="margin:0 0 4px; font-size:1.05rem; font-weight:800;">📸 ${this._escapeHtml(this._t("change_profile_picture") || "Cambiar imagen de perfil")}</h3>
        <p style="margin:0 0 16px; font-size:0.78rem; color:rgba(255,255,255,0.5);">${this._escapeHtml(this._t("change_picture_desc") || "Elige una foto de tus personas de HA o dirígete al perfil de HA para subir una nueva.")}</p>

        ${e.length ? `
          <div style="font-size:11px; font-weight:700; opacity:0.6; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:10px;">${this._escapeHtml(this._t("ha_persons_title") || "Personas de Home Assistant")}</div>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
            ${n}
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
    `, this.shadowRoot.appendChild(t);
		let r = t.querySelector("#pic-save-status");
		t.querySelectorAll(".ha-pic-option").forEach((e) => {
			e.addEventListener("mouseenter", () => e.style.borderColor = "rgba(255,255,255,0.4)"), e.addEventListener("mouseleave", () => e.style.borderColor = "transparent"), e.addEventListener("click", async () => {
				let n = e.getAttribute("data-pic-url");
				if (n) {
					r.textContent = "⏳ Guardando...";
					try {
						await this._send("argus/save_ui", { profile_picture: n }), r.style.color = "#34c759", r.textContent = "✅ Imagen actualizada. Recarga para verla.", setTimeout(() => {
							t.remove(), this._renderEntries(), this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")), this._renderAutomations(), this._renderNotifications(), this._updateHeroProfileDisplay(), this._updateProfileBadge();
						}, 1200);
					} catch (e) {
						r.style.color = "#ff453a", r.textContent = "❌ " + (e.message || "Error al guardar");
					}
				}
			});
		}), t.querySelector("#modal-pic-cancel").addEventListener("click", () => t.remove()), t.addEventListener("click", (e) => {
			e.target === t && t.remove();
		});
	}
	_renderFirstRunScreen() {
		this._hideInitialCurtain();
		let e = this.shadowRoot.getElementById("bootstrap-overlay");
		if (e.style.display = "flex", this._hass?.user && this._hass.user.is_admin === !1) {
			e.innerHTML = `
        <div class="argus-bootstrap-card liquid-glass">
          <h1>${this._t("first_run_blocked_title") || "Acceso denegado"}</h1>
          <p>${this._t("first_run_blocked_desc") || "Se requiere un administrador de Home Assistant para configurar Argus por primera vez."}</p>
        </div>
      `;
			return;
		}
		let t = this._hass?.user?.name || "Admin", n = {
			es: ["Bienvenido a Argus Home Hub", "Protección inteligente para lo que más importa."],
			en: ["Welcome to Argus Home Hub", "Smart protection for what matters most."]
		}[this._getCurrentLangCode()] || ["Welcome to Argus Home Hub", "Smart protection for what matters most."], r = () => {
			e.innerHTML = "\n        <div class=\"argus-bootstrap-card liquid-glass argus-first-run-card\" style=\"max-width:420px\">\n          <div class=\"argus-first-run-thank-icon\">✓</div>\n          <h1 style=\"margin-bottom:10px;font-weight:850\">Gracias por usar Argus Home Hub</h1>\n          <p style=\"margin:0\">Tu sistema está listo y protegido.</p>\n        </div>\n      ", setTimeout(() => {
				e.style.display = "none", this._profileSelectedThisMount = !0, this._load();
			}, 1500);
		};
		e.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass argus-first-run-card" style="max-width:540px;width:92vw">
        <div class="argus-first-run-brand">
          <img class="argus-first-run-logo" src="/api/argus_static/argus_logo.png" alt="Logotipo oficial de Argus">
          <div>
            <h1>${this._escapeHtml(n[0])}</h1>
            <p>${this._escapeHtml(n[1])}</p>
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
		let i = this.shadowRoot.getElementById("tab-setup-fresh"), a = this.shadowRoot.getElementById("tab-setup-restore"), o = this.shadowRoot.getElementById("view-setup-fresh"), s = this.shadowRoot.getElementById("view-setup-restore");
		i?.addEventListener("click", () => {
			i.style.background = "rgba(255,255,255,0.15)", i.style.color = "#fff", a.style.background = "transparent", a.style.color = "rgba(255,255,255,0.6)", o.style.display = "block", s.style.display = "none";
		}), a?.addEventListener("click", () => {
			a.style.background = "rgba(255,255,255,0.15)", a.style.color = "#fff", i.style.background = "transparent", i.style.color = "rgba(255,255,255,0.6)", s.style.display = "block", o.style.display = "none";
		}), this.shadowRoot.getElementById("skip-access-pin")?.addEventListener("click", () => {
			this.shadowRoot.getElementById("setup-access-pin").value = "";
		}), this.shadowRoot.getElementById("skip-master-pin")?.addEventListener("click", () => {
			this.shadowRoot.getElementById("setup-master-pin").value = "";
		}), this.shadowRoot.getElementById("btn-complete-setup")?.addEventListener("click", async () => {
			let e = this.shadowRoot.getElementById("setup-admin-name").value || t, n = this.shadowRoot.getElementById("setup-master-pin").value || void 0, i = this.shadowRoot.getElementById("setup-access-pin").value || void 0;
			try {
				await this._send("argus/complete_first_run", {
					admin_name: e,
					master_pin: n,
					access_pin: i
				}), r();
			} catch (e) {
				alert("Setup failed: " + e.message);
			}
		});
		let c = this.shadowRoot.getElementById("setup-restore-file"), l = this.shadowRoot.getElementById("restore-status");
		this.shadowRoot.getElementById("btn-trigger-restore")?.addEventListener("click", () => {
			c?.click();
		}), c?.addEventListener("change", (e) => {
			let t = e.target.files?.[0];
			if (!t) return;
			l && (l.textContent = "Procesando copia de seguridad...");
			let n = new FileReader();
			n.onload = async (e) => {
				try {
					let t = JSON.parse(e.target.result);
					if (t?.format === "argus-encrypted-backup") {
						let e = await this._showArgusInputModal({
							title: "Copia de seguridad cifrada",
							label: "Introduce la contraseña del backup:",
							type: "password"
						});
						if (!e) {
							l && (l.textContent = "Restauración cancelada.");
							return;
						}
						try {
							let n = this._base64ToBytes(t.salt), r = this._base64ToBytes(t.iv), i = await this._backupKey(e, n, ["decrypt"]), a = await crypto.subtle.decrypt({
								name: "AES-GCM",
								iv: r
							}, i, this._base64ToBytes(t.data));
							t = JSON.parse(new TextDecoder().decode(a));
						} catch {
							throw Error("Contraseña de copia de seguridad incorrecta.");
						}
					}
					if (typeof t != "object" || !t) throw Error(this._t("invalid_config"));
					await this._send("argus/restore_config", { config: t }), l && (l.textContent = "✅ Copia de seguridad restaurada con éxito."), r();
				} catch (e) {
					l && (l.textContent = "❌ Error al restaurar: " + (e.message || e));
				}
			}, n.onerror = () => {
				l && (l.textContent = "❌ Error al leer el archivo.");
			}, n.readAsText(t);
		});
	}
	_renderLegacyClaimScreen() {
		this._hideInitialCurtain();
		let e = this.shadowRoot.getElementById("bootstrap-overlay");
		e.style.display = "flex", e.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass">
        <h1>${this._t("claim_title") || "Argus Security Update"}</h1>
        <p>${this._t("claim_desc") || "Your installation needs an administrator to claim access."}</p>
        <button id="btn-claim-admin" class="btn-claim">${this._t("claim_btn") || "Claim Administration"}</button>
      </div>
    `, this.shadowRoot.getElementById("btn-claim-admin").addEventListener("click", async () => {
			try {
				await this._send("argus/claim_legacy_administration"), e.style.display = "none", this._profileSelectedThisMount = !0, this._load();
			} catch (e) {
				alert("Claim failed: " + e.message);
			}
		});
	}
	async _renderLoginScreen(e) {
		if (!this._isRenderingLogin && !(this.hasAttribute("compact") || this.classList.contains("argus-compact") || this._cardConfig?.compact)) {
			this._isRenderingLogin = !0;
			try {
				let t = (e) => this._t(e), n = [];
				try {
					let t = await this._send("argus/get_profiles", {});
					n = t?.profiles ?? t?.users ?? e?.users ?? [];
				} catch {
					n = this._config?.profiles ?? e?.users ?? [];
				}
				if (!n.length) return;
				n = n.map((e) => ({
					...e,
					display_name: e.display_name || e.name,
					picture: e.picture || null
				}));
				let r = this.shadowRoot.getElementById("bootstrap-overlay");
				r && (r.style.display = "none"), this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-welcome-screen").forEach((e) => e.remove()), this._hideInitialCurtain();
				let i = document.createElement("div");
				i.className = "argus-profile-overlay", i.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center;">
        ${`
      <div class="argus-profile-header">
        <h2>${this._escapeHtml(t("select_profile_title"))}</h2>
        <p>${this._escapeHtml(t("select_profile_subtitle"))}</p>
      </div>
    `}
        ${`
      <div class="argus-profile-grid">
        ${n.map((e) => {
					let n = e.is_own_profile === !0, r = e.access_pin_configured === !0, i = e.role === "admin" ? t("role_argus_admin") : t("role_argus_standard"), a = e.picture ? `<img src="${this._escapeHtml(e.picture)}" alt="" />` : this._escapeHtml(e.name.substring(0, 2).toUpperCase()), o = r ? "<div class=\"lock-badge\">🔒</div>" : "";
					return `
        <div class="argus-profile-item" tabindex="0"
             data-user-id="${this._escapeHtml(e.id)}"
             data-is-own="${n ? "true" : "false"}"
             data-requires-pin="${r ? "true" : "false"}">
          
          <div class="argus-profile-circle">
            ${a}
            ${o}
          </div>
          <div class="argus-profile-label">
            <div class="p-name">${this._escapeHtml(e.name)}</div>
            <div class="p-role">${this._escapeHtml(i)}</div>
          </div>
        </div>
      `;
				}).join("")}
      </div>
    `}
      </div>
      ${`
      <button id="argus-exit-ha" style="
        position: absolute; bottom: 40px;
        background: rgba(255,255,255,0.25); border: 1px solid rgba(255,255,255,0.4); color: #fff;
        padding: 12px 24px; border-radius: 20px; color: #fff; cursor: pointer;
        font-size: 0.9rem; font-weight: 600; transition: background 0.2s;
      ">
        ← ${this._escapeHtml(t("exit_to_ha"))}
      </button>
    `}
    `, this.shadowRoot.appendChild(i), i.querySelector("#argus-exit-ha").addEventListener("click", () => {
					window.location.assign("/");
				}), i.querySelectorAll(".argus-profile-item").forEach((e) => {
					e.addEventListener("click", async () => {
						if (i.dataset.processing) return;
						i.dataset.processing = "1";
						let t = e.getAttribute("data-user-id"), r = e.getAttribute("data-is-own") === "true", a = e.getAttribute("data-requires-pin") === "true", o = n.find((e) => e.id === t);
						if (r) {
							if (a) i.remove(), this._showTvOSPinPrompt(o);
							else try {
								await this._send("argus/select_profile", { argus_user_id: t }), i.remove(), this._profileSelectedThisMount = !0, await this._runProfileWelcomeAnimation(o);
							} catch (e) {
								i.dataset.processing = "", alert(e.message || "Error seleccionando perfil");
							}
						} else {
							if (!a) {
								let t = e;
								t.style.animation = "none", t.offsetHeight, t.style.animation = "argus-shake 0.3s ease", i.dataset.processing = "";
								return;
							}
							i.remove(), this._showTvOSPinPrompt(o);
						}
					}), e.addEventListener("keydown", (t) => {
						(t.key === "Enter" || t.key === " ") && e.dispatchEvent(new Event("click"));
					});
				});
			} finally {
				this._isRenderingLogin = !1;
			}
		}
	}
	async _showTvOSPinPrompt(e) {
		let t = (e) => this._t(e), n = document.createElement("div");
		n.className = "argus-pin-prompt", n.innerHTML = `
      <div class="argus-pin-card">
        <h3>${this._escapeHtml(t("profile_needs_pin"))}</h3>
        <div class="pin-sub">Ingresa el PIN de ${this._escapeHtml(e.name)}</div>
        
        <input type="password" id="pin-input" class="argus-pin-input" readonly
               placeholder="••••" inputmode="numeric" />
               
        <div class="argus-numpad">
          ${[
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9
		].map((e) => `<button data-digit="${e}">${e}</button>`).join("")}
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
    `, this.shadowRoot.appendChild(n);
		let r = n.querySelector("#pin-input"), i = n.querySelector("#pin-error"), a = n.querySelector(".argus-pin-card"), o = n.querySelector(".argus-numpad");
		o.querySelectorAll("[data-digit]").forEach((e) => {
			let t = e.getAttribute("data-digit");
			e.addEventListener("click", () => {
				r.value.length < 8 && (r.value += t);
			});
		}), o.querySelector("#pin-del").addEventListener("click", () => {
			r.value = r.value.slice(0, -1);
		}), n.querySelector("#pin-enter").addEventListener("click", () => s()), n.querySelector("#pin-cancel").addEventListener("click", () => {
			n.remove(), this._renderLoginScreen({ users: this._config?.profiles || [] });
		});
		let s = async () => {
			if (!n.dataset.processing) {
				if (n.dataset.processing = "1", !r.value) {
					n.dataset.processing = "";
					return;
				}
				try {
					await this._send("argus/verify_access_pin", {
						argus_user_id: e.id,
						pin: r.value
					}), n.remove(), this._profileSelectedThisMount = !0, await this._runProfileWelcomeAnimation(e);
				} catch (e) {
					n.dataset.processing = "", i.textContent = e.message || t("invalid_pin_msg"), a.style.animation = "none", a.offsetHeight, a.style.animation = "argus-shake 0.3s ease", r.value = "";
				}
			}
		};
		r.addEventListener("keydown", (e) => {
			e.key === "Enter" && s();
		});
	}
	async _runProfileWelcomeAnimation(e) {
		this._currentProfile = e, this._updateHeroProfileDisplay();
		let t = this.shadowRoot.getElementById("hero-profile-avatar") || this.shadowRoot.querySelector("#hero-profile-container .user-avatar") || this.shadowRoot.querySelector("#hero-profile-container img") || this.shadowRoot.querySelector("#hero-profile-container .hero-profile-pill");
		t && (t.style.opacity = "0", t.style.transition = "opacity 0.25s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)"), this.shadowRoot.querySelector(".wrap")?.classList.add("wrap-ready");
		let n = document.createElement("div");
		n.className = "argus-welcome-screen active-anim", n.style.position = "fixed", n.style.inset = "0", n.style.background = "rgba(0,0,0,0.88)", n.style.display = "flex", n.style.flexDirection = "column", n.style.alignItems = "center", n.style.justifyContent = "center", n.style.zIndex = "10000", n.style.pointerEvents = "none", n.innerHTML = `
      <div class="argus-welcome-avatar" id="welcome-avatar-flying">
        ${e.picture ? `<img src="${this._escapeHtml(e.picture)}" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />` : this._escapeHtml(e.name.substring(0, 2).toUpperCase())}
      </div>
      <div class="argus-welcome-text" id="welcome-text-anim">
        <p class="greeting">${this._escapeHtml(this._t("welcome_greeting") || "Bienvenido,")}</p>
        <h1 class="wname">${this._escapeHtml(e.display_name || e.name)}</h1>
      </div>
    `, this.shadowRoot.appendChild(n), await new Promise((e) => requestAnimationFrame(e)), this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-pin-prompt").forEach((e) => e.remove());
		let r = Promise.resolve();
		this._dashboardLoading || (this._dashboardLoading = !0, r = this._load().catch((e) => console.error("Load error during animation:", e)).finally(() => {
			this._dashboardLoading = !1;
		}));
		let i = n.querySelector("#welcome-avatar-flying"), a = n.querySelector("#welcome-text-anim");
		if (i && a) {
			i.style.transform = "scale(0.8)", i.style.opacity = "0", a.style.opacity = "0", a.style.transform = "translateY(15px)", await new Promise((e) => requestAnimationFrame(e)), i.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease", i.style.transform = "scale(1)", i.style.opacity = "1", a.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.5s ease 0.15s", a.style.transform = "translateY(0)", a.style.opacity = "1", await new Promise((e) => setTimeout(e, 1300)), await r, a.style.transition = "opacity 0.25s ease", a.style.opacity = "0";
			let e = i.getBoundingClientRect(), t = this.shadowRoot.getElementById("hero-profile-avatar") || this.shadowRoot.querySelector("#hero-profile-container .user-avatar") || this.shadowRoot.querySelector("#hero-profile-container img") || this.shadowRoot.querySelector("#hero-profile-container .hero-profile-pill"), o = window.innerWidth / 2, s = 60, c = .35;
			if (t) {
				let n = t.getBoundingClientRect();
				n.width > 0 && n.height > 0 && (o = n.left + n.width / 2, s = n.top + n.height / 2, c = Math.max(.2, n.width / e.width));
			}
			let l = o - (e.left + e.width / 2), u = s - (e.top + e.height / 2);
			i.style.transition = "transform 0.65s cubic-bezier(0.25, 1.25, 0.5, 1), opacity 0.35s ease 0.45s", i.style.transform = `translate(${l}px, ${u}px) scale(${c})`, n.style.transition = "background-color 0.55s ease 0.1s", n.style.backgroundColor = "transparent", await new Promise((e) => setTimeout(e, 650)), t && (t.style.opacity = "1", t.style.transform = "scale(1.1)", setTimeout(() => {
				t && (t.style.transform = "scale(1)");
			}, 180));
		}
		await new Promise((e) => setTimeout(e, 120)), await r, this._nukeAllLoginOverlays();
	}
	_nukeAllLoginOverlays() {
		this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-welcome-screen, .argus-pin-prompt").forEach((e) => {
			e.style.transition = "none", e.style.backdropFilter = "none", e.style.webkitBackdropFilter = "none", e.style.opacity = "0", e.style.display = "none", e.remove();
		});
		let e = this.shadowRoot?.getElementById("bootstrap-overlay");
		e && (e.style.backdropFilter = "none", e.style.webkitBackdropFilter = "none", e.style.display = "none", e.style.opacity = "0", e.style.pointerEvents = "none");
	}
	_initWidgetGrid() {
		try {
			this._widgetConfig = JSON.parse(localStorage.getItem("argus-widgets-v1")) || [
				{
					id: "activity",
					size: "M",
					hidden: !1
				},
				{
					id: "modes",
					size: "M",
					hidden: !1
				},
				{
					id: "automations",
					size: "M",
					hidden: !1
				},
				{
					id: "access",
					size: "M",
					hidden: !1
				},
				{
					id: "backup",
					size: "S",
					hidden: !1
				},
				{
					id: "github",
					size: "S",
					hidden: !1
				}
			];
		} catch {
			this._widgetConfig = [
				{
					id: "activity",
					size: "M",
					hidden: !1
				},
				{
					id: "modes",
					size: "M",
					hidden: !1
				},
				{
					id: "automations",
					size: "M",
					hidden: !1
				},
				{
					id: "access",
					size: "M",
					hidden: !1
				},
				{
					id: "backup",
					size: "S",
					hidden: !1
				},
				{
					id: "github",
					size: "S",
					hidden: !1
				}
			];
		}
		let e = this.shadowRoot.getElementById("widget-grid");
		if (!e) return;
		let t = Array.from(e.children).filter((e) => e.classList.contains("panel") && !e.classList.contains("dashboard-instances"));
		t.forEach((e) => {
			let t = e.id.replace("w-", "");
			if (!e.querySelector(".panel-edit-overlay")) {
				let n = document.createElement("div");
				n.className = "panel-edit-overlay";
				let r = document.createElement("div");
				r.className = "widget-controls";
				let i = document.createElement("div");
				i.className = "widget-controls-title";
				let a = e.querySelector("h2")?.textContent;
				i.textContent = a ? `Widget: ${a}` : `Widget: ${t.toUpperCase()}`, r.appendChild(i);
				let o = document.createElement("div");
				o.className = "widget-drag-handle", o.innerHTML = "⋮⋮ Arrastrar", o.title = "Arrastrar para mover";
				let s = document.createElement("div");
				s.className = "widget-sizes", [
					"S",
					"M",
					"L",
					"XL"
				].forEach((e) => {
					let n = document.createElement("button");
					n.className = "widget-size-btn", n.textContent = e, n.dataset.size = e, n.addEventListener("click", (n) => {
						n.stopPropagation(), n.preventDefault(), this._changeWidgetSize(t, e);
					}), s.appendChild(n);
				});
				let c = document.createElement("button");
				c.className = "widget-toggle-btn", c.textContent = "Ocultar", c.addEventListener("click", (e) => {
					e.stopPropagation(), e.preventDefault(), this._toggleWidgetVisibility(t);
				}), r.appendChild(o), r.appendChild(s), r.appendChild(c), n.appendChild(r), e.appendChild(n);
			}
		}), this._renderWidgetLayout(), this._bindWidgetDragEvents(t);
	}
	_renderWidgetLayout() {
		let e = this.shadowRoot.getElementById("widget-grid");
		if (!e) return;
		let t = new Map((this._widgetConfig || []).map((e, t) => [e.id, {
			...e,
			idx: t
		}])), n = Array.from(e.children).filter((e) => e.classList.contains("panel") && !e.classList.contains("dashboard-instances"));
		n.sort((e, n) => {
			let r = t.get(e.id.replace("w-", "")) || { idx: 99 }, i = t.get(n.id.replace("w-", "")) || { idx: 99 };
			return r.idx - i.idx;
		}), n.forEach((n) => {
			e.appendChild(n);
			let r = n.id.replace("w-", ""), i = t.get(r);
			if (i) {
				n.setAttribute("data-size", i.size), n.style.display = i.hidden ? "none" : "";
				let e = n.querySelector(".panel-edit-overlay");
				if (e) {
					e.querySelectorAll(".widget-size-btn").forEach((e) => {
						e.classList.toggle("active", e.dataset.size === i.size);
					});
					let t = e.querySelector(".widget-toggle-btn");
					t && (t.textContent = i.hidden ? "Mostrar" : "Ocultar", t.style.background = i.hidden ? "rgba(52,199,89,.85)" : "rgba(220,38,38,.85)");
				}
			}
		}), e.classList.toggle("editing", !!this._widgetEditing);
	}
	_bindWidgetDragEvents(e) {
		let t = this.shadowRoot.getElementById("widget-grid");
		t && (e || Array.from(t.children).filter((e) => e.classList.contains("panel") && !e.classList.contains("dashboard-instances"))).forEach((e) => {
			e._dragBound || (e._dragBound = !0, e.addEventListener("dragstart", (t) => {
				if (!this._widgetEditing) {
					t.preventDefault();
					return;
				}
				e.classList.add("dragging"), t.dataTransfer.setData("text/plain", e.id), t.dataTransfer.effectAllowed = "move";
			}), e.addEventListener("dragend", () => {
				e.classList.remove("dragging"), this._saveWidgetLayout();
			}), e.addEventListener("dragover", (n) => {
				if (!this._widgetEditing) return;
				n.preventDefault();
				let r = t.querySelector(".dragging");
				if (!r || r === e) return;
				let i = e.getBoundingClientRect();
				n.clientY - i.top > i.height / 2 ? e.after(r) : e.before(r);
			}));
		});
	}
	_saveWidgetLayout() {
		let e = this.shadowRoot.getElementById("widget-grid");
		if (!e) return;
		let t = Array.from(e.children).filter((e) => e.classList.contains("panel") && !e.classList.contains("dashboard-instances"));
		this._widgetConfig = t.map((e) => ({
			id: e.id.replace("w-", ""),
			size: e.getAttribute("data-size") || "M",
			hidden: e.style.display === "none"
		}));
		try {
			localStorage.setItem("argus-widgets-v1", JSON.stringify(this._widgetConfig));
		} catch {}
	}
	_toggleWidgetEditing() {
		this._widgetEditing = !this._widgetEditing, this.shadowRoot.getElementById("widget-grid") && (this._initWidgetGrid(), this._renderWidgetLayout()), this._applyTranslations();
	}
	_changeWidgetSize(e, t) {
		let n = (this._widgetConfig || []).find((t) => t.id === e);
		n && (n.size = t, this._saveWidgetLayout(), this._renderWidgetLayout());
	}
	_toggleWidgetVisibility(e) {
		let t = (this._widgetConfig || []).find((t) => t.id === e);
		t && (t.hidden = !t.hidden, this._saveWidgetLayout(), this._renderWidgetLayout());
	}
};
customElements.define("argus-panel-v2018", f);
try {
	customElements.get("argus-panel") || customElements.define("argus-panel", f);
} catch {}
//#endregion
//#region src/legacy/argus-card.ts
var p = "2.2.93";
console.info(`%c🛡️ ARGUS ALARM CARD %c v${p} `, "color:white;background:#0a1628;font-weight:700;padding:4px 8px;border-radius:4px 0 0 4px;", "color:#0a1628;background:#38bdf8;font-weight:700;padding:4px 8px;border-radius:0 4px 4px 0;");
function m(e) {
	if (!e?.states) return null;
	let t = Object.values(e.states);
	return (t.find((e) => e.entity_id?.startsWith("alarm_control_panel.") && (e.attributes?.argus_version || e.attributes?.argus_entry_id || e.entity_id.includes("argus"))) || t.find((e) => e.entity_id?.startsWith("alarm_control_panel.")))?.entity_id || null;
}
var h = {
	es: {
		title: "Seguridad",
		home: "EN CASA",
		away: "AUSENTE",
		night: "NOCHE",
		vacation: "VACACIONES",
		disarm: "DESARMAR",
		pin: "INTRODUCIR PIN",
		bad: "PIN incorrecto",
		unknown: "Ubicación no disponible"
	},
	en: {
		title: "Security",
		home: "HOME",
		away: "AWAY",
		night: "NIGHT",
		vacation: "VACATION",
		disarm: "DISARM",
		pin: "ENTER PIN",
		bad: "Incorrect PIN",
		unknown: "Location unavailable"
	},
	fr: {
		title: "Sécurité",
		home: "MAISON",
		away: "ABSENT",
		night: "NUIT",
		vacation: "VACANCES",
		disarm: "DÉSARMER",
		pin: "SAISIR LE PIN",
		bad: "PIN incorrect",
		unknown: "Emplacement indisponible"
	},
	pt: {
		title: "Segurança",
		home: "EM CASA",
		away: "AUSENTE",
		night: "NOITE",
		vacation: "FÉRIAS",
		disarm: "DESARMAR",
		pin: "DIGITE O PIN",
		bad: "PIN incorreto",
		unknown: "Local indisponível"
	},
	it: {
		title: "Sicurezza",
		home: "CASA",
		away: "ASSENTE",
		night: "NOTTE",
		vacation: "VACANZA",
		disarm: "DISARMA",
		pin: "INSERISCI PIN",
		bad: "PIN errato",
		unknown: "Posizione non disponibile"
	},
	zh: {
		title: "安全",
		home: "在家",
		away: "外出",
		night: "夜间",
		vacation: "度假",
		disarm: "撤防",
		pin: "输入 PIN",
		bad: "PIN 错误",
		unknown: "位置不可用"
	},
	"zh-Hant": {
		title: "安全",
		home: "在家",
		away: "離家",
		night: "夜間",
		vacation: "度假",
		disarm: "撤防",
		pin: "輸入 PIN",
		bad: "PIN 錯誤",
		unknown: "位置不可用"
	},
	ru: {
		title: "Безопасность",
		home: "ДОМА",
		away: "УШЁЛ",
		night: "НОЧЬ",
		vacation: "ОТПУСК",
		disarm: "СНЯТЬ",
		pin: "ВВЕДИТЕ PIN",
		bad: "Неверный PIN",
		unknown: "Местоположение недоступно"
	},
	hi: {
		title: "सुरक्षा",
		home: "घर पर",
		away: "बाहर",
		night: "रात",
		vacation: "छुट्टी",
		disarm: "डिसआर्म",
		pin: "पिन दर्ज करें",
		bad: "गलत पिन",
		unknown: "स्थान अनुपलब्ध"
	},
	ar: {
		title: "الأمان",
		home: "في المنزل",
		away: "بالخارج",
		night: "ليلي",
		vacation: "إجازة",
		disarm: "تعطيل",
		pin: "أدخل رمز PIN",
		bad: "رمز PIN خاطئ",
		unknown: "الموقع غير متاح"
	},
	ko: {
		title: "보안",
		home: "재실",
		away: "외출",
		night: "야간",
		vacation: "휴가",
		disarm: "해제",
		pin: "PIN 입력",
		bad: "잘못된 PIN",
		unknown: "위치 사용 불가"
	},
	ja: {
		title: "セキュリティ",
		home: "在宅",
		away: "外出",
		night: "夜間",
		vacation: "休暇",
		disarm: "解除",
		pin: "PINを入力",
		bad: "PINが正しくありません",
		unknown: "位置情報利用不可"
	},
	uk: {
		title: "Безпека",
		home: "ВДОМА",
		away: "НЕМАЄ ВДОМА",
		night: "НІЧ",
		vacation: "ВІДПУСТКА",
		disarm: "ЗНЯТИ",
		pin: "ВВЕДІТЬ PIN",
		bad: "Невірний PIN",
		unknown: "Розташування недоступне"
	}
}, g = (e) => String(e ?? "").replace(/[&<>'"]/g, (e) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"'": "&#39;",
	"\"": "&quot;"
})[e]), _ = class extends HTMLElement {
	setConfig(e) {
		this._config = e;
	}
	set hass(e) {
		this._hass = e, this._render();
	}
	_render() {
		if (!this._hass) return;
		let e = this._config?.entity || "", t = this._config?.mode || "compact", n = Object.keys(this._hass.states || {}).filter((e) => e.startsWith("alarm_control_panel."));
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
            ${n.map((t) => `<option value="${t}" ${t === e ? "selected" : ""}>${t}</option>`).join("")}
          </select>
          <span class="hint">Detectada automáticamente. Solo cámbiala si tienes varias alarmas.</span>
        </label>
        <label>
          Diseño / Modo de Vista
          <select id="mode-sel">
            <option value="compact" ${t === "compact" ? "selected" : ""}>✨ Instancia Activa (Consola Liquid Glass · Recomendado)</option>
            <option value="panel" ${t === "panel" ? "selected" : ""}>📊 Panel Completo (Dashboard, widgets e historial)</option>
            <option value="basic" ${t === "basic" ? "selected" : ""}>🛡️ Básico (Tarjeta compacta con teclado PIN)</option>
          </select>
          <div class="opt-grp hint">
            ${t === "compact" ? "Muestra la consola de seguridad de Instancias Activas con el escudo dinámico, modos iluminados, control táctil seguro y sensores." : t === "panel" ? "Muestra todo el panel de control de Argus con su cuadrícula de widgets e historial de eventos." : "Muestra la tarjeta de alarma ligera con fondo oscuro sólido y teclado PIN."}
          </div>
        </label>
        <label>
          Título de la Tarjeta (opcional)
          <input id="title-input" type="text" placeholder="Argus Security" value="${this._config?.title || ""}"/>
        </label>
      </div>`, this.querySelector("#entity-sel").addEventListener("change", (e) => this._fire({ entity: e.target.value })), this.querySelector("#mode-sel").addEventListener("change", (e) => this._fire({ mode: e.target.value })), this.querySelector("#title-input").addEventListener("change", (e) => this._fire({ title: e.target.value }));
	}
	_fire(e) {
		this.dispatchEvent(new CustomEvent("config-changed", {
			detail: { config: {
				...this._config,
				...e
			} },
			bubbles: !0,
			composed: !0
		}));
	}
};
customElements.define("argus-panel-card-editor", _);
var v = class extends HTMLElement {
	static getStubConfig(e) {
		return {
			entity: m(e) || "alarm_control_panel.argus",
			mode: "compact",
			title: "Argus Security"
		};
	}
	static getConfigElement() {
		return document.createElement("argus-panel-card-editor");
	}
	setConfig(e) {
		this._config = {
			mode: "compact",
			title: "Argus Security",
			...e
		}, this._panelMounted = !1, this._fullscreen = !1, this._busy = !1, this._showKeypad = !1, this._enteredPin = "", this._pinError = !1, this._ensureStructure();
	}
	_ensureStructure() {
		if (this._structureReady) return;
		this._structureReady = !0, this.style.display = "block";
		let e = this.attachShadow({ mode: "open" });
		e.innerHTML = "\n      <style>\n        :host { display: block; width: 100%; box-sizing: border-box; }\n        ha-card {\n          border-radius: 28px !important;\n          background: linear-gradient(135deg, rgba(16, 23, 38, 0.96) 0%, rgba(10, 15, 26, 0.98) 100%) !important;\n          border: 1px solid rgba(255, 255, 255, 0.14) !important;\n          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.12) !important;\n          backdrop-filter: blur(28px) saturate(160%) !important;\n          -webkit-backdrop-filter: blur(28px) saturate(160%) !important;\n          color: #ffffff !important;\n          position: relative;\n          --ha-card-border-radius: 28px;\n          width: 100%;\n          box-sizing: border-box;\n          display: flex;\n          flex-direction: column;\n          overflow: hidden !important;\n        }\n        .argus-panel-host {\n          display: flex;\n          flex-direction: column;\n          flex: 1 1 auto;\n          width: 100%;\n          min-height: fit-content;\n          overflow: visible !important;\n        }\n        /* Fullscreen mode */\n        :host(.argus-fullscreen) ha-card {\n          position: fixed !important;\n          inset: 0 !important;\n          z-index: 99999999 !important;\n          border-radius: 0 !important;\n          width: 100vw !important;\n          width: 100dvw !important;\n          height: 100vh !important;\n          height: 100dvh !important;\n          max-width: 100vw !important;\n          max-height: 100dvh !important;\n          overflow: auto !important;\n          backdrop-filter: none !important;\n          -webkit-backdrop-filter: none !important;\n          background: radial-gradient(ellipse at 50% 50%, #162438 0%, #08101a 60%, #010408 100%) !important;\n          border: none !important;\n          box-shadow: none !important;\n        }\n        :host(.argus-fullscreen) .argus-panel-host {\n          min-height: 100dvh;\n          height: 100dvh;\n          width: 100vw;\n          width: 100dvw;\n          overflow: auto;\n        }\n        @media (max-width: 600px) {\n          .argus-panel-host { min-height: 340px; }\n        }\n      </style>\n      <ha-card>\n        <div class=\"argus-panel-host\" id=\"panel-host\"></div>\n      </ha-card>", this._fsBtn = e.getElementById("fs-btn"), this._panelHost = e.getElementById("panel-host"), this._fsBtn && this._fsBtn.addEventListener("click", () => this._toggleFullscreen()), document.addEventListener("keydown", (e) => {
			e.key === "Escape" && this._fullscreen && this._exitFullscreen();
		});
	}
	set hass(e) {
		if (this._hass = e, !this._config.entity || this._config.entity === "alarm_control_panel.argus") {
			let t = m(e);
			t && (this._config.entity = t);
		}
		if (this._config.mode === "basic") this._renderBasicCard();
		else if (this._mountPanel(), this._panelEl) try {
			this._panelEl.hass = e;
		} catch {}
	}
	_mountPanel() {
		if (!this._panelMounted && this._panelHost && customElements.get("argus-panel-v2018")) {
			this._panelMounted = !0, this._panelHost.innerHTML = "", this._panelEl = document.createElement("argus-panel-v2018"), this._config.mode !== "panel" && (this._panelEl.setAttribute("compact", ""), this._panelEl.classList.add("argus-compact"));
			try {
				this._panelEl.setConfig({
					entity: this._config.entity,
					title: this._config.title,
					compact: this._config.mode !== "panel"
				});
			} catch {}
			if (this._panelHost.appendChild(this._panelEl), this._panelEl.addEventListener("argus-fullscreen-changed", (e) => {
				e.detail?.fullscreen ? this._enterFullscreen() : this._exitFullscreen();
			}), this._hass) try {
				this._panelEl.hass = this._hass;
			} catch {}
		}
	}
	_renderBasicCard() {
		if (!this._panelHost || !this._hass) return;
		this._panelMounted = !1;
		let e = h[String(this._hass?.language || "en").split("-")[0]] || h.en, t = this._hass.states[this._config.entity]?.state || "unavailable", n = Object.values(this._hass?.states || {}), r = this._config.weather_entity ? this._hass.states[this._config.weather_entity] : n.find((e) => e.entity_id?.startsWith("weather.") && !["unknown", "unavailable"].includes(e.state)), i = Number(r?.attributes?.temperature), a = {
			state: String(r?.state || "unavailable").toLowerCase(),
			temp: Number.isFinite(i) ? Math.round(i) : "—",
			unit: Number.isFinite(i) ? String(r?.attributes?.temperature_unit || "") : "",
			night: this._hass?.states?.["sun.sun"]?.state === "below_horizon"
		}, o = this._hass?.config || {}, s = [];
		o.location_name && !/^(home|casa|hogar)$/i.test(o.location_name) && s.push(o.location_name), o.country && s.push(o.country);
		let c = s.length ? s.join(", ") : e.unknown, l = this._config.title || e.title, u = new Intl.DateTimeFormat(this._hass.language || void 0, {
			hour: "2-digit",
			minute: "2-digit"
		}).format(/* @__PURE__ */ new Date());
		this._panelHost.innerHTML = `
      <style>
        .basic-card{position:relative;min-height:330px;isolation:isolate;overflow:hidden;font-family:'Outfit',Inter,system-ui,sans-serif;background:#0b101a}
        .basic-scene{position:absolute;inset:0;z-index:-3;background:linear-gradient(180deg,#0b101a 0%,#131a29 100%)}
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
        <div class="basic-scene"></div>
        <div class="basic-vignette"></div>
        <div class="basic-hud"><span>${g(c)}</span><span class="basic-weather">${g(u)} · ${g(a.temp)}${g(a.unit)}</span></div>
        <div class="basic-layout">
          <div class="basic-modes">
            <button class="basic-mode ${t === "armed_home" ? "active" : ""}" data-service="alarm_arm_home">🏠 ${e.home}</button>
            <button class="basic-mode ${t === "armed_away" ? "active" : ""}" data-service="alarm_arm_away">🔒 ${e.away}</button>
            <button class="basic-mode ${t === "armed_night" ? "active" : ""}" data-service="alarm_arm_night">🌙 ${e.night}</button>
            <button class="basic-mode ${t === "armed_vacation" ? "active" : ""}" data-service="alarm_arm_vacation">✈️ ${e.vacation}</button>
            <button class="basic-mode ${t === "disarmed" ? "active" : ""}" data-service="alarm_disarm">🔓 ${e.disarm}</button>
          </div>
          <div class="basic-shield">${t === "triggered" ? "🚨" : "🛡️"}</div>
        </div>
        <div class="basic-title">${g(l)} · v${p}</div>
      </div>
    `, this._panelHost.querySelectorAll("[data-service]").forEach((e) => {
			e.onclick = async () => {
				let t = e.dataset.service;
				await this._hass.callService("alarm_control_panel", t, { entity_id: this._config.entity });
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
};
customElements.get("argus-panel-card") || customElements.define("argus-panel-card", v), customElements.get("argus-card") || customElements.define("argus-card", class extends v {}), window.customCards = window.customCards || [];
var y = new Set(window.customCards.map((e) => e.type));
y.has("argus-panel-card") || window.customCards.push({
	type: "argus-panel-card",
	name: "Argus Security Panel",
	description: "Panel de seguridad Argus — consola Liquid Glass de Instancias Activas, dashboard e historial.",
	preview: !0,
	documentationURL: "https://github.com/Chrisalvir1/Argus"
}), y.has("argus-card") || window.customCards.push({
	type: "argus-card",
	name: "Argus Alarm Card",
	description: "Tarjeta de seguridad Argus — consola interactiva de Instancia Activa con Liquid Glass y pantalla completa.",
	preview: !0,
	documentationURL: "https://github.com/Chrisalvir1/Argus"
});
//#endregion
//#region node_modules/react/cjs/react.production.js
var b = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var S = x.prototype = new b();
	S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
	var C = Array.isArray;
	function w() {}
	var T = {
		H: null,
		A: null,
		T: null,
		S: null
	}, ee = Object.prototype.hasOwnProperty;
	function E(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function D(e, t) {
		return E(e.type, t, e.props);
	}
	function te(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function O(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var k = /\/+/g;
	function ne(e, t) {
		return typeof e == "object" && e && e.key != null ? O("" + e.key) : t.toString(36);
	}
	function re(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function A(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, A(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + ne(e, 0) : a, C(o) ? (i = "", c != null && (i = c.replace(k, "$&/") + "/"), A(o, r, i, "", function(e) {
			return e;
		})) : o != null && (te(o) && (o = D(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(k, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (C(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + ne(a, u), c += A(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + ne(a, u++), c += A(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return A(re(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function j(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return A(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function ie(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var ae = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	};
	function oe(e) {
		var t = T.T, n = {};
		n.types = t === null ? null : t.types, T.T = n;
		try {
			var r = e(), i = T.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(w, ae);
		} catch (e) {
			ae(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}
	function se(e) {
		var t = T.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else oe(se.bind(null, e));
	}
	var ce = {
		map: j,
		forEach: function(e, t, n) {
			j(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return j(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return j(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!te(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = ce, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.addTransitionType = se, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = _({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !ee.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return E(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) ee.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return E(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = te, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: ie
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = oe, e.unstable_useCacheRefresh = function() {
		return T.H.useCacheRefresh();
	}, e.use = function(e) {
		return T.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return T.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return T.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return T.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return T.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return T.H.useEffectEvent(e);
	}, e.useId = function() {
		return T.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return T.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.H.useRef(e);
	}, e.useState = function(e) {
		return T.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.H.useTransition();
	}, e.version = "19.3.0";
})), x = /* @__PURE__ */ o(((e, t) => {
	t.exports = b();
})), S = /* @__PURE__ */ o(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, S || (S = !0, D());
			else {
				var t = n(l);
				t !== null && k(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function ee() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function E() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ee());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && k(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? D() : S = !1;
			}
		}
	}
	var D;
	if (typeof y == "function") D = function() {
		y(E);
	};
	else if (typeof MessageChannel < "u") {
		var te = new MessageChannel(), O = te.port2;
		te.port1.onmessage = E, D = function() {
			O.postMessage(null);
		};
	} else D = function() {
		_(E, 0);
	};
	function k(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, k(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, D()))), r;
	}, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), C = /* @__PURE__ */ o(((e, t) => {
	t.exports = S();
})), w = /* @__PURE__ */ o(((e) => {
	var t = x();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal"), o = Symbol.for("react.recoverable"), s = Symbol.for("react.optimistic_key");
	function c(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : r === s ? s : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function u(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
		return {
			$$typeof: o,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return c(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = l.T, n = i.p;
		try {
			if (l.T = null, i.p = 2, e) return e();
		} finally {
			l.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = u(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = u(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = u(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = u(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return l.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return l.H.useHostTransitionStatus();
	}, e.version = "19.3.0";
})), T = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = w();
})), ee = /* @__PURE__ */ o(((e) => {
	var t = C(), n = x(), r = T();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function u(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function d(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = d(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function f(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && f(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function p(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function m(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function h(e) {
		var t = [null, null], n = p(e);
		return n === null || g(t, e, n.child, { foundSelf: !1 }), t;
	}
	function g(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && g(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function _(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(i(559));
		}
	}
	var v = null, y = null;
	function b(e, t, n) {
		return e === n || e === t && (v = e, !0);
	}
	function S(e, t, n) {
		return e === n ? (y = e, !1) : e === t && (y !== null && (v = e), !0);
	}
	function w(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function ee(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var E = Object.assign, D = Symbol.for("react.element"), te = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), j = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), se = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), ue = Symbol.for("react.legacy_hidden"), de = Symbol.for("react.memo_cache_sentinel"), fe = Symbol.for("react.view_transition"), pe = Symbol.for("react.recoverable"), me = Symbol.iterator;
	function he(e) {
		return typeof e != "object" || !e ? null : (e = me && e[me] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var ge = Symbol.for("react.client.reference");
	function _e(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === ge ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case k: return "Fragment";
			case re: return "Profiler";
			case ne: return "StrictMode";
			case ae: return "Suspense";
			case oe: return "SuspenseList";
			case le: return "Activity";
			case fe: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case O: return "Portal";
			case j: return e.displayName || "Context";
			case A: return (e._context.displayName || "Context") + ".Consumer";
			case ie:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case se: return t = e.displayName || null, t === null ? _e(e.type) || "Memo" : t;
			case ce:
				t = e._payload, e = e._init;
				try {
					return _e(e(t));
				} catch {}
		}
		return null;
	}
	var ve = Array.isArray, M = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ye = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, be = [], xe = -1;
	function P(e) {
		return { current: e };
	}
	function Se(e) {
		0 > xe || (e.current = be[xe], be[xe] = null, xe--);
	}
	function F(e, t) {
		xe++, be[xe] = e.current, e.current = t;
	}
	var I = P(null), Ce = P(null), we = P(null), Te = P(null);
	function Ee(e, t) {
		switch (F(we, t), F(Ce, e), F(I, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = up(t), e = dp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		Se(I), F(I, e);
	}
	function De() {
		Se(I), Se(Ce), Se(we);
	}
	function Oe(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, F(Te, e)), t = I.current;
		var n = dp(t, e.type);
		t !== n && (F(Ce, e), F(I, n));
	}
	function ke(e) {
		Ce.current === e && (Se(I), Se(Ce)), Te.current === e && (Se(Te), sh._currentValue = ye);
	}
	var L, Ae;
	function R(e) {
		if (L === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			L = t && t[1] || "", Ae = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + L + e + Ae;
	}
	var z = !1;
	function je(e, t) {
		if (!e || z) return "";
		z = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			z = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? R(n) : "";
	}
	function Me(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return R(e.type);
			case 16: return R("Lazy");
			case 13: return e.child !== t && t !== null ? R("Suspense Fallback") : R("Suspense");
			case 19: return R("SuspenseList");
			case 0:
			case 15: return je(e.type, !1);
			case 11: return je(e.type.render, !1);
			case 1: return je(e.type, !0);
			case 31: return R("Activity");
			case 30: return R("ViewTransition");
			default: return "";
		}
	}
	function Ne(e) {
		try {
			var t = "", n = null;
			do
				t += Me(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Pe = Object.prototype.hasOwnProperty, Fe = t.unstable_scheduleCallback, Ie = t.unstable_cancelCallback, Le = t.unstable_shouldYield, Re = t.unstable_requestPaint, ze = t.unstable_now, Be = t.unstable_getCurrentPriorityLevel, Ve = t.unstable_ImmediatePriority, He = t.unstable_UserBlockingPriority, Ue = t.unstable_NormalPriority, We = t.unstable_LowPriority, Ge = t.unstable_IdlePriority, Ke = t.log, qe = t.unstable_setDisableYieldValue, Je = null, Ye = null;
	function Xe(e) {
		if (typeof Ke == "function" && qe(e), Ye && typeof Ye.setStrictMode == "function") try {
			Ye.setStrictMode(Je, e);
		} catch {}
	}
	var Ze = Math.clz32 ? Math.clz32 : et, Qe = Math.log, $e = Math.LN2;
	function et(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Qe(e) / $e | 0) | 0;
	}
	var tt = 256, nt = 262144, rt = 4194304;
	function it(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function at(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = it(n))) : i = it(o) : i = it(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = it(n))) : i = it(o)) : i = it(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function ot(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function st(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - Ze(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function ct(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
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
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function B() {
		var e = rt;
		return rt <<= 1, !(rt & 62914560) && (rt = 4194304), e;
	}
	function lt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function ut(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function dt(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - Ze(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && ft(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function ft(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - Ze(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function pt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Ze(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function mt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : ht(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function ht(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
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
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function gt(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function _t() {
		var e = N.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function vt(e, t) {
		var n = N.p;
		try {
			return N.p = e, t();
		} finally {
			N.p = n;
		}
	}
	var yt = Math.random().toString(36).slice(2), bt = "__reactFiber$" + yt, xt = "__reactProps$" + yt, St = "__reactContainer$" + yt, Ct = "__reactEvents$" + yt, wt = "__reactListeners$" + yt, Tt = "__reactHandles$" + yt, Et = "__reactResources$" + yt, Dt = "__reactMarker$" + yt, Ot = "__reactLoad$" + yt;
	function kt(e) {
		delete e[bt], delete e[xt], delete e[wt], delete e[Tt];
	}
	function At(e) {
		var t;
		if (t = e[bt]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[St] || n[bt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
					if (n = e[bt]) return n;
					e = fm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function jt(e) {
		if (e = e[bt] || e[St]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function Mt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Nt(e) {
		var t = e[Et];
		return t ||= e[Et] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Pt(e) {
		e[Dt] = !0;
	}
	function Ft(e) {
		e[Ot] = void 0;
	}
	var It = /* @__PURE__ */ new Set(), Lt = {};
	function Rt(e, t) {
		zt(e, t), zt(e + "Capture", t);
	}
	function zt(e, t) {
		for (Lt[e] = t, e = 0; e < t.length; e++) It.add(t[e]);
	}
	var Bt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Vt = {}, Ht = {};
	function Ut(e) {
		return Pe.call(Ht, e) ? !0 : Pe.call(Vt, e) ? !1 : Bt.test(e) ? Ht[e] = !0 : (Vt[e] = !0, !1);
	}
	var V = !1;
	function Wt() {
		var e = V;
		return V = !1, e;
	}
	function Gt(e, t, n) {
		if (Ut(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function Kt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function qt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function Jt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function Yt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Xt(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Zt(e) {
		if (!e._valueTracker) {
			var t = Yt(e) ? "checked" : "value";
			e._valueTracker = Xt(e, t, "" + e[t]);
		}
	}
	function Qt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Yt(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var $t = /[\n"\\]/g;
	function en(e) {
		return e.replace($t, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function tn(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Jt(t)) : e.value !== "" + Jt(t) && (e.value = "" + Jt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : rn(e, Jt(n)) : o === "number" && e.value == t ? rn(e, Jt(e.value)) : rn(e, Jt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Jt(s) : e.removeAttribute("name");
	}
	function nn(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Zt(e);
				return;
			}
			n = n == null ? "" : "" + Jt(n), t = t == null ? n : "" + Jt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Zt(e);
	}
	function rn(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function an(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Jt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function on(e, t, n) {
		if (t != null && (t = "" + Jt(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + Jt(n);
	}
	function sn(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (ve(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Jt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Zt(e);
	}
	function cn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var ln = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function un(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || ln.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function dn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", V = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (un(e, a, r), V = !0);
		} else for (var o in t) t.hasOwnProperty(o) && un(e, o, t[o]);
	}
	function fn(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var pn = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), mn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function hn(e) {
		return mn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function gn() {}
	var _n = null;
	function vn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var yn = null, bn = null;
	function xn(e) {
		var t = jt(e);
		if (t && (e = t.stateNode)) {
			var n = e[xt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (tn(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + en("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[xt] || null;
								if (!a) throw Error(i(90));
								tn(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Qt(r);
					}
					break a;
				case "textarea":
					on(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && an(e, !!n.multiple, t, !1);
			}
		}
	}
	var Sn = !1;
	function Cn(e, t, n) {
		if (Sn) return e(t, n);
		Sn = !0;
		try {
			return e(t);
		} finally {
			if (Sn = !1, (yn !== null || bn !== null) && (zd(), yn && (t = yn, e = bn, bn = yn = null, xn(t), e))) for (t = 0; t < e.length; t++) xn(e[t]);
		}
	}
	function wn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[xt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
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
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var Tn = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), En = !1;
	if (Tn) try {
		var Dn = {};
		Object.defineProperty(Dn, "passive", { get: function() {
			En = !0;
		} }), window.addEventListener("test", Dn, Dn), window.removeEventListener("test", Dn, Dn);
	} catch {
		En = !1;
	}
	var On = null, kn = null, An = null;
	function H() {
		if (An) return An;
		var e, t = kn, n = t.length, r, i = "value" in On ? On.value : On.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return An = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function jn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Mn() {
		return !0;
	}
	function Nn() {
		return !1;
	}
	function Pn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Mn : Nn, this.isPropagationStopped = Nn, this;
		}
		return E(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Mn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Mn);
			},
			persist: function() {},
			isPersistent: Mn
		}), t;
	}
	var Fn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, In = Pn(Fn), Ln = E({}, Fn, {
		view: 0,
		detail: 0
	}), Rn = Pn(Ln), zn, Bn, Vn, Hn = E({}, Ln, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: $n,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Vn && (Vn && e.type === "mousemove" ? (zn = e.screenX - Vn.screenX, Bn = e.screenY - Vn.screenY) : Bn = zn = 0, Vn = e), zn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Bn;
		}
	}), Un = Pn(Hn), Wn = Pn(E({}, Hn, { dataTransfer: 0 })), Gn = Pn(E({}, Ln, { relatedTarget: 0 })), Kn = Pn(E({}, Fn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), qn = Pn(E({}, Fn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Jn = Pn(E({}, Fn, { data: 0 })), Yn = {
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
	}, Xn = {
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
	}, Zn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Qn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Zn[e]) ? !!t[e] : !1;
	}
	function $n() {
		return Qn;
	}
	var er = Pn(E({}, Ln, {
		key: function(e) {
			if (e.key) {
				var t = Yn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = jn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: $n,
		charCode: function(e) {
			return e.type === "keypress" ? jn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? jn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), tr = Pn(E({}, Hn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), nr = Pn(E({}, Fn, { submitter: 0 })), rr = Pn(E({}, Ln, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: $n
	})), ir = Pn(E({}, Fn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), ar = Pn(E({}, Hn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), or = Pn(E({}, Fn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), sr = [
		9,
		13,
		27,
		32
	], cr = Tn && "CompositionEvent" in window, lr = null;
	Tn && "documentMode" in document && (lr = document.documentMode);
	var ur = Tn && "TextEvent" in window && !lr, dr = Tn && (!cr || lr && 8 < lr && 11 >= lr), fr = " ", pr = !1;
	function mr(e, t) {
		switch (e) {
			case "keyup": return sr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function hr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var gr = !1;
	function _r(e, t) {
		switch (e) {
			case "compositionend": return hr(t);
			case "keypress": return t.which === 32 ? (pr = !0, fr) : null;
			case "textInput": return e = t.data, e === fr && pr ? null : e;
			default: return null;
		}
	}
	function vr(e, t) {
		if (gr) return e === "compositionend" || !cr && mr(e, t) ? (e = H(), An = kn = On = null, gr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return dr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var yr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function br(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!yr[e.type] : t === "textarea";
	}
	function xr(e, t, n, r) {
		yn ? bn ? bn.push(r) : bn = [r] : yn = r, t = Jf(t, "onChange"), 0 < t.length && (n = new In("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Sr = null, Cr = null;
	function wr(e) {
		Vf(e, 0);
	}
	function Tr(e) {
		if (Qt(Mt(e))) return e;
	}
	function Er(e, t) {
		if (e === "change") return t;
	}
	var Dr = !1;
	if (Tn) {
		var Or;
		if (Tn) {
			var kr = "oninput" in document;
			if (!kr) {
				var Ar = document.createElement("div");
				Ar.setAttribute("oninput", "return;"), kr = typeof Ar.oninput == "function";
			}
			Or = kr;
		} else Or = !1;
		Dr = Or && (!document.documentMode || 9 < document.documentMode);
	}
	function jr() {
		Sr && (Sr.detachEvent("onpropertychange", Mr), Cr = Sr = null);
	}
	function Mr(e) {
		if (e.propertyName === "value" && Tr(Cr)) {
			var t = [];
			xr(t, Cr, e, vn(e)), Cn(wr, t);
		}
	}
	function Nr(e, t, n) {
		e === "focusin" ? (jr(), Sr = t, Cr = n, Sr.attachEvent("onpropertychange", Mr)) : e === "focusout" && jr();
	}
	function Pr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return Tr(Cr);
	}
	function Fr(e, t) {
		if (e === "click") return Tr(t);
	}
	function Ir(e, t) {
		if (e === "input" || e === "change") return Tr(t);
	}
	function Lr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Rr = typeof Object.is == "function" ? Object.is : Lr;
	function zr(e, t) {
		if (Rr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Pe.call(t, i) || !Rr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Br(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Vr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Hr(e, t) {
		var n = Vr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Vr(n);
		}
	}
	function Ur(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ur(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Wr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Br(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Br(e.document);
		}
		return t;
	}
	function Gr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Kr = Tn && "documentMode" in document && 11 >= document.documentMode, qr = null, Jr = null, Yr = null, Xr = !1;
	function Zr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Xr || qr == null || qr !== Br(r) || (r = qr, "selectionStart" in r && Gr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Yr && zr(Yr, r) || (Yr = r, r = Jf(Jr, "onSelect"), 0 < r.length && (t = new In("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = qr)));
	}
	function Qr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var $r = {
		animationend: Qr("Animation", "AnimationEnd"),
		animationiteration: Qr("Animation", "AnimationIteration"),
		animationstart: Qr("Animation", "AnimationStart"),
		transitionrun: Qr("Transition", "TransitionRun"),
		transitionstart: Qr("Transition", "TransitionStart"),
		transitioncancel: Qr("Transition", "TransitionCancel"),
		transitionend: Qr("Transition", "TransitionEnd")
	}, ei = {}, ti = {};
	Tn && (ti = document.createElement("div").style, "AnimationEvent" in window || (delete $r.animationend.animation, delete $r.animationiteration.animation, delete $r.animationstart.animation), "TransitionEvent" in window || delete $r.transitionend.transition);
	function ni(e) {
		if (ei[e]) return ei[e];
		if (!$r[e]) return e;
		var t = $r[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in ti) return ei[e] = t[n];
		return e;
	}
	var ri = ni("animationend"), ii = ni("animationiteration"), ai = ni("animationstart"), oi = ni("transitionrun"), si = ni("transitionstart"), ci = ni("transitioncancel"), li = ni("transitionend"), ui = /* @__PURE__ */ new Map(), di = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	di.push("scrollEnd");
	function fi(e, t) {
		ui.set(e, t), Rt(t, [e]);
	}
	var pi = 0;
	function mi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = bd.identifierPrefix;
		var n = pi++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function hi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Od;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function gi(e, t) {
		return e = hi(e), t = hi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var _i = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, vi = [], yi = 0, bi = 0;
	function xi() {
		for (var e = yi, t = bi = yi = 0; t < e;) {
			var n = vi[t];
			vi[t++] = null;
			var r = vi[t];
			vi[t++] = null;
			var i = vi[t];
			vi[t++] = null;
			var a = vi[t];
			if (vi[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && Ti(n, i, a);
		}
	}
	function Si(e, t, n, r) {
		vi[yi++] = e, vi[yi++] = t, vi[yi++] = n, vi[yi++] = r, bi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Ci(e, t, n, r) {
		return Si(e, t, n, r), Ei(e);
	}
	function wi(e, t) {
		return Si(e, null, null, t), Ei(e);
	}
	function Ti(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Ze(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Ei(e) {
		if (50 < kd) throw kd = 0, Ad = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Di = {};
	function Oi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function ki(e, t, n, r) {
		return new Oi(e, t, n, r);
	}
	function Ai(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function ji(e, t) {
		var n = e.alternate;
		return n === null ? (n = ki(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Mi(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function Ni(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Ai(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case le: return e = ki(31, n, t, a), e.elementType = le, e.lanes = o, e;
			case k: return Pi(n.children, a, o, t);
			case ne:
				s = 8, a |= 24;
				break;
			case re: return e = ki(12, n, t, a | 2), e.elementType = re, e.lanes = o, e;
			case ae: return e = ki(13, n, t, a), e.elementType = ae, e.lanes = o, e;
			case oe: return e = ki(19, n, t, a), e.elementType = oe, e.lanes = o, e;
			case ue:
			case fe: return e = a | 32, e = ki(30, n, t, e), e.elementType = fe, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case j:
						s = 10;
						break a;
					case A:
						s = 9;
						break a;
					case ie:
						s = 11;
						break a;
					case se:
						s = 14;
						break a;
					case ce:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = ki(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Pi(e, t, n, r) {
		return e = ki(7, e, r, t), e.lanes = n, e;
	}
	function Fi(e, t, n) {
		return e = ki(6, e, null, t), e.lanes = n, e;
	}
	function Ii(e) {
		var t = ki(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Li(e, t, n) {
		return t = ki(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Ri = /* @__PURE__ */ new WeakMap();
	function zi(e, t) {
		if (typeof e == "object" && e) {
			var n = Ri.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Ne(t)
			}, Ri.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Ne(t)
		};
	}
	var Bi = [], Vi = 0, Hi = null, Ui = 0, Wi = [], Gi = 0, Ki = null, qi = 1, Ji = "";
	function Yi(e, t) {
		Bi[Vi++] = Ui, Bi[Vi++] = Hi, Hi = e, Ui = t;
	}
	function Xi(e, t, n) {
		Wi[Gi++] = qi, Wi[Gi++] = Ji, Wi[Gi++] = Ki, Ki = e;
		var r = qi;
		e = Ji;
		var i = 32 - Ze(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Ze(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, qi = 1 << 32 - Ze(t) + i | n << i | r, Ji = a + e;
		} else qi = 1 << a | n << i | r, Ji = e;
	}
	function Zi(e) {
		e.return !== null && (Yi(e, 1), Xi(e, 1, 0));
	}
	function Qi(e) {
		for (; e === Hi;) Hi = Bi[--Vi], Bi[Vi] = null, Ui = Bi[--Vi], Bi[Vi] = null;
		for (; e === Ki;) Ki = Wi[--Gi], Wi[Gi] = null, Ji = Wi[--Gi], Wi[Gi] = null, qi = Wi[--Gi], Wi[Gi] = null;
	}
	function $i(e, t) {
		Wi[Gi++] = qi, Wi[Gi++] = Ji, Wi[Gi++] = Ki, qi = t.id, Ji = t.overflow, Ki = e;
	}
	var ea = null, ta = null, U = !1, na = null, ra = !1, ia = Error(i(519));
	function aa(e) {
		throw da(zi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), ia;
	}
	function oa(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[bt] = e, t[xt] = r, n) {
			case "dialog":
				Q("cancel", t), Q("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Q("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < zf.length; n++) Q(zf[n], t);
				break;
			case "source":
				Q("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Q("error", t), Q("load", t);
				break;
			case "details":
				Q("toggle", t);
				break;
			case "input":
				Q("invalid", t), nn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Q("invalid", t);
				break;
			case "textarea": Q("invalid", t), sn(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || ep(t.textContent, n) ? (r.popover != null && (Q("beforetoggle", t), Q("toggle", t)), r.onScroll != null && Q("scroll", t), r.onScrollEnd != null && Q("scrollend", t), r.onClick != null && (t.onclick = gn), t = !0) : t = !1, t || aa(e, !0);
	}
	function sa(e) {
		for (ea = e.return; ea;) switch (ea.tag) {
			case 5:
			case 31:
			case 13:
				ra = !1;
				return;
			case 27:
			case 3:
				ra = !0;
				return;
			default: ea = ea.return;
		}
	}
	function ca(e) {
		if (e !== ea) return !1;
		if (!U) return sa(e), U = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || pp(e.type, e.memoizedProps)), n = !n), n && ta && aa(e), sa(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			ta = dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			ta = dm(e);
		} else t === 27 ? (t = ta, Sp(e.type) ? (e = um, um = null, ta = e) : ta = t) : ta = ea ? lm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function la() {
		ta = ea = null, U = !1;
	}
	function ua() {
		var e = na;
		return e !== null && (fd === null ? fd = e : fd.push.apply(fd, e), na = null), e;
	}
	function da(e) {
		na === null ? na = [e] : na.push(e);
	}
	var fa = P(null), pa = null, ma = null;
	function ha(e, t, n) {
		F(fa, t._currentValue), t._currentValue = n;
	}
	function ga(e) {
		e._currentValue = fa.current, Se(fa);
	}
	function _a(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function va(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), _a(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), _a(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), _a(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function ya(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Rr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === Te.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			a = a.return;
		}
		return e !== null && va(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function ba(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Rr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function xa(e) {
		pa = e, ma = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Sa(e) {
		return wa(pa, e);
	}
	function Ca(e, t) {
		return pa === null && xa(e), wa(e, t);
	}
	function wa(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, ma === null) {
			if (e === null) throw Error(i(308));
			ma = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else ma = ma.next = t;
		return n;
	}
	var Ta = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Ea = t.unstable_scheduleCallback, Da = t.unstable_NormalPriority, Oa = {
		$$typeof: j,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function ka() {
		return {
			controller: new Ta(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function Aa(e) {
		e.refCount--, e.refCount === 0 && Ea(Da, function() {
			e.controller.abort();
		});
	}
	function ja(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var Ma = null;
	function Na(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var Pa = null, Fa = 0, Ia = 0, La = null;
	function Ra(e, t) {
		if (Pa === null) {
			var n = Pa = [];
			Fa = 0, Ia = Pf(), La = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return Fa++, t.then(za, za), t;
	}
	function za() {
		if (--Fa === 0 && (Ma = null, Pa !== null)) {
			La !== null && (La.status = "fulfilled");
			var e = Pa;
			Pa = null, Ia = 0, La = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Ba(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var Va = M.S;
	M.S = function(e, t) {
		if (hd = ze(), typeof t == "object" && t && typeof t.then == "function" && Ra(e, t), Ma !== null) for (var n = bf; n !== null;) ja(n, Ma), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = bf; r !== null;) ja(r, n), r = r.next;
			if (Ia !== 0) {
				r = Ma, r === null && (r = Ma = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		Va !== null && Va(e, t);
	};
	var Ha = P(null);
	function Ua() {
		var e = Ha.current;
		return e === null ? $u.pooledCache : e;
	}
	function Wa(e, t) {
		t === null ? F(Ha, Ha.current) : F(Ha, t.pool);
	}
	function Ga() {
		var e = Ua();
		return e === null ? null : {
			parent: Oa._currentValue,
			pool: e
		};
	}
	var Ka = Error(i(460)), qa = Error(i(474)), Ja = Error(i(542)), Ya = { then: function() {} };
	function Xa(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Za(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(gn, gn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, to(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(gn, gn);
				else {
					if (e = $u, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, to(e), e;
				}
				throw $a = t, Ka;
		}
	}
	function Qa(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? ($a = e, Ka) : e;
		}
	}
	var $a = null;
	function eo() {
		if ($a === null) throw Error(i(459));
		var e = $a;
		return $a = null, e;
	}
	function to(e) {
		if (e === Ka || e === Ja) throw Error(i(483));
	}
	var no = null, ro = 0;
	function io(e) {
		var t = ro;
		return ro += 1, no === null && (no = []), Za(no, e, t);
	}
	function ao(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function oo(e, t) {
		throw t.$$typeof === D ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function so(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = ji(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Fi(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === k ? (e = d(e, t, n.props.children, r, n.key), ao(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === ce && Qa(i) === t.type) ? (t = a(t, n.props), ao(t, n), t.return = e, t) : (t = Ni(n.type, n.key, n.props, null, e.mode, r), ao(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Li(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Pi(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Fi("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case te: return n = Ni(t.type, t.key, t.props, null, e.mode, n), ao(n, t), n.return = e, n;
					case O: return t = Li(t, e.mode, n), t.return = e, t;
					case ce: return t = Qa(t), f(e, t, n);
				}
				if (ve(t) || he(t)) return t = Pi(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, io(t), n);
				if (t.$$typeof === j) return f(e, Ca(e, t), n);
				oo(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case te: return n.key === i ? l(e, t, n, r) : null;
					case O: return n.key === i ? u(e, t, n, r) : null;
					case ce: return n = Qa(n), p(e, t, n, r);
				}
				if (ve(n) || he(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, io(n), r);
				if (n.$$typeof === j) return p(e, t, Ca(e, n), r);
				oo(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case te: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case O: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case ce: return r = Qa(r), m(e, t, n, r, i);
				}
				if (ve(r) || he(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, io(r), i);
				if (r.$$typeof === j) return m(e, t, n, Ca(t, r), i);
				oo(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), U && Yi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return U && Yi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), U && Yi(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), U && Yi(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return U && Yi(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), U && Yi(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === k && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case te:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === k) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), ao(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === ce && Qa(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), ao(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === k ? (c = Pi(o.props.children, e.mode, c, o.key), ao(c, o), c.return = e, e = c) : (c = Ni(o.type, o.key, o.props, null, e.mode, c), ao(c, o), c.return = e, e = c);
						}
						return s(e);
					case O:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = Li(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case ce: return o = Qa(o), _(e, r, o, c);
				}
				if (ve(o)) return h(e, r, o, c);
				if (he(o)) {
					if (l = he(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, io(o), c);
				if (o.$$typeof === j) return _(e, r, Ca(e, o), c);
				oo(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Fi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				ro = 0;
				var i = _(e, t, n, r);
				return no = null, i;
			} catch (t) {
				if (t === Ka || t === Ja) throw t;
				var a = ki(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var co = so(!0), lo = so(!1), uo = !1;
	function fo(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function po(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function mo(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function ho(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, q & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Ei(e), Ti(e, null, n), t;
		}
		return Si(e, r, t, n), Ei(e);
	}
	function go(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, pt(e, n);
		}
	}
	function _o(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var vo = !1;
	function yo() {
		if (vo) {
			var e = La;
			if (e !== null) throw e;
		}
	}
	function bo(e, t, n, r) {
		vo = !1;
		var i = e.updateQueue;
		uo = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (Y & f) === f : (r & f) === f) {
					f !== 0 && f === Ia && (vo = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = E({}, d, f);
								break a;
							case 2: uo = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), od |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function xo(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function So(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) xo(n[e], t);
	}
	var Co = P(null), wo = P(0);
	function To(e, t) {
		e = id, F(wo, e), F(Co, t), id = e | t.baseLanes;
	}
	function Eo() {
		F(wo, id), F(Co, Co.current);
	}
	function Do() {
		id = wo.current, Se(Co), Se(wo);
	}
	var Oo = P(null), ko = null;
	function Ao(e) {
		var t = e.alternate;
		F(Fo, Fo.current & 1), F(Oo, e), ko === null && (t === null || Co.current !== null || t.memoizedState !== null) && (ko = e);
	}
	function jo(e) {
		F(Fo, Fo.current), F(Oo, e), ko === null && (ko = e);
	}
	function Mo(e) {
		e.tag === 22 ? (F(Fo, Fo.current), F(Oo, e), ko === null && (ko = e)) : No();
	}
	function No() {
		F(Fo, Fo.current), F(Oo, Oo.current);
	}
	function Po(e) {
		Se(Oo), ko === e && (ko = null), Se(Fo);
	}
	var Fo = P(0);
	function Io(e, t) {
		F(Oo, Oo.current), F(Fo, t);
	}
	function Lo(e) {
		Se(Fo), Se(Oo), ko === e && (ko = null);
	}
	function Ro(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var zo = 0, W = null, G = null, Bo = null, Vo = !1, Ho = !1, Uo = !1, Wo = 0, Go = 0, Ko = null, qo = 0;
	function Jo() {
		throw Error(i(321));
	}
	function Yo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Rr(e[n], t[n])) return !1;
		return !0;
	}
	function Xo(e, t, n, r, i, a) {
		return zo = a, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? pc : mc, Uo = !1, a = n(r, i), Uo = !1, Ho && (a = Qo(t, n, r, i)), Zo(e), a;
	}
	function Zo(e) {
		M.H = fc;
		var t = G !== null && G.next !== null;
		if (zo = 0, Bo = G = W = null, Vo = !1, Go = 0, Ko = null, t) throw Error(i(300));
		e === null || jc || (e = e.dependencies, e !== null && ba(e) && (jc = !0));
	}
	function Qo(e, t, n, r) {
		W = e;
		var a = 0;
		do {
			if (Ho && (Ko = null), Go = 0, Ho = !1, 25 <= a) throw Error(i(301));
			if (a += 1, Bo = G = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			M.H = hc, o = t(n, r);
		} while (Ho);
		return o;
	}
	function $o() {
		var e = M.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? os(t) : t, e = e.useState()[0], (G === null ? null : G.memoizedState) !== e && (W.flags |= 1024), t;
	}
	function es() {
		var e = Wo !== 0;
		return Wo = 0, e;
	}
	function ts(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function ns(e) {
		if (Vo) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Vo = !1;
		}
		zo = 0, Bo = G = W = null, Ho = !1, Go = Wo = 0, Ko = null;
	}
	function rs() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Bo === null ? W.memoizedState = Bo = e : Bo = Bo.next = e, Bo;
	}
	function is() {
		if (G === null) {
			var e = W.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = G.next;
		var t = Bo === null ? W.memoizedState : Bo.next;
		if (t !== null) Bo = t, G = e;
		else {
			if (e === null) throw W.alternate === null ? Error(i(467)) : Error(i(310));
			G = e, e = {
				memoizedState: G.memoizedState,
				baseState: G.baseState,
				baseQueue: G.baseQueue,
				queue: G.queue,
				next: null
			}, Bo === null ? W.memoizedState = Bo = e : Bo = Bo.next = e;
		}
		return Bo;
	}
	function as() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function os(e) {
		var t = Go;
		return Go += 1, Ko === null && (Ko = []), e = Za(Ko, e, t), t = W, (Bo === null ? t.memoizedState : Bo.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? pc : mc), e;
	}
	function ss(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return os(e);
			if (e.$$typeof === pe) return;
			if (e.$$typeof === j) return Sa(e);
		}
		throw Error(i(438, String(e)));
	}
	function cs(e) {
		var t = null, n = W.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = W.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = as(), W.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = de;
		return t.index++, n;
	}
	function ls(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function us(e) {
		return ds(is(), G, e);
	}
	function ds(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (zo & f) === f : (Y & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === Ia && (d = !0);
					else if ((zo & p) === p) {
						u = u.next, p === Ia && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, W.lanes |= p, od |= p;
					f = u.action, Uo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, W.lanes |= f, od |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Rr(o, e.memoizedState) && (jc = !0, d && (n = La, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function fs(e) {
		var t = is(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Rr(o, t.memoizedState) || (jc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function ps(e, t, n) {
		var r = W, a = is(), o = U;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Rr((G || a).memoizedState, n);
		if (s && (a.memoizedState = n, jc = !0), a = a.queue, Rs(gs.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Bo !== null && !!(Bo.memoizedState.tag & 1), Ns(e ? 9 : 8, { destroy: void 0 }, hs.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, $u === null) throw Error(i(349));
			o || zo & 127 || ms(r, t, n);
		}
		return n;
	}
	function ms(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = W.updateQueue, t === null ? (t = as(), W.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function hs(e, t, n, r) {
		t.value = n, t.getSnapshot = r, _s(t) && vs(e);
	}
	function gs(e, t, n) {
		return n(function() {
			_s(t) && vs(e);
		});
	}
	function _s(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Rr(e, n);
		} catch {
			return !0;
		}
	}
	function vs(e) {
		var t = wi(e, 2);
		t !== null && Pd(t, e, 2);
	}
	function ys(e) {
		var t = rs();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Uo) {
				Xe(!0);
				try {
					n();
				} finally {
					Xe(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ls,
			lastRenderedState: e
		}, t;
	}
	function bs(e, t, n, r) {
		return e.baseState = n, ds(e, G, typeof r == "function" ? r : ls);
	}
	function xs(e, t, n, r, a) {
		if (lc(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			M.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Ss(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Ss(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = M.T, o = {};
			o.types = a === null ? null : a.types, M.T = o;
			try {
				var s = n(i, r), c = M.S;
				c !== null && c(o, s), Cs(e, t, s);
			} catch (n) {
				Ts(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), M.T = a;
			}
		} else try {
			a = n(i, r), Cs(e, t, a);
		} catch (n) {
			Ts(e, t, n);
		}
	}
	function Cs(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			ws(e, t, n);
		}, function(n) {
			return Ts(e, t, n);
		}) : ws(e, t, n);
	}
	function ws(e, t, n) {
		t.status = "fulfilled", t.value = n, Es(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Ss(e, n)));
	}
	function Ts(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Es(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Es(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function Ds(e, t) {
		return t;
	}
	function Os(e, t) {
		if (U) {
			var n = $u.formState;
			if (n !== null) {
				a: {
					var r = W;
					if (U) {
						if (ta) {
							b: {
								for (var i = ta, a = ra; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = lm(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								ta = lm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						aa(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = rs(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ds,
			lastRenderedState: t
		}, n.queue = r, n = oc.bind(null, W, r), r.dispatch = n, r = ys(!1), a = cc.bind(null, W, !1, r.queue), r = rs(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = xs.bind(null, W, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function ks(e) {
		return As(is(), G, e);
	}
	function As(e, t, n) {
		if (t = ds(e, t, Ds)[0], e = us(ls)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = os(t);
		} catch (e) {
			throw e === Ka ? Ja : e;
		}
		else r = t;
		t = is();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (W.flags |= 2048, Ns(9, { destroy: void 0 }, js.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function js(e, t) {
		e.action = t;
	}
	function Ms(e) {
		var t = is(), n = G;
		if (n !== null) return As(t, n, e);
		is(), t = t.memoizedState, n = is();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function Ns(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = W.updateQueue, t === null && (t = as(), W.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function Ps() {
		return is().memoizedState;
	}
	function Fs(e, t, n, r) {
		var i = rs();
		W.flags |= e, i.memoizedState = Ns(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function Is(e, t, n, r) {
		var i = is();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		G !== null && r !== null && Yo(r, G.memoizedState.deps) ? i.memoizedState = Ns(t, a, n, r) : (W.flags |= e, i.memoizedState = Ns(1 | t, a, n, r));
	}
	function Ls(e, t) {
		Fs(8390656, 8, e, t);
	}
	function Rs(e, t) {
		Is(2048, 8, e, t);
	}
	function zs(e) {
		W.flags |= 4;
		var t = W.updateQueue;
		if (t === null) t = as(), W.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Bs(e) {
		var t = is().memoizedState;
		return zs({
			ref: t,
			nextImpl: e
		}), function() {
			if (q & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Vs(e, t) {
		return Is(4, 2, e, t);
	}
	function Hs(e, t) {
		return Is(4, 4, e, t);
	}
	function Us(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Ws(e, t, n) {
		n = n == null ? null : n.concat([e]), Is(4, 4, Us.bind(null, t, e), n);
	}
	function Gs() {}
	function Ks(e, t) {
		var n = is();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Yo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function qs(e, t) {
		var n = is();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Yo(t, r[1])) return r[0];
		if (r = e(), Uo) {
			Xe(!0);
			try {
				e();
			} finally {
				Xe(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Js(e, t, n) {
		return n === void 0 || zo & 1073741824 && !(Y & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Md(), W.lanes |= e, od |= e, n);
	}
	function Ys(e, t, n, r) {
		return Rr(n, t) ? n : Co.current === null ? !(zo & 106) || zo & 1073741824 && !(Y & 261930) ? (jc = !0, e.memoizedState = n) : (e = Md(), W.lanes |= e, od |= e, t) : (e = Js(e, n, r), Rr(e, t) || (jc = !0), e);
	}
	function Xs(e, t, n, r, i) {
		var a = N.p;
		N.p = a !== 0 && 8 > a ? a : 8;
		var o = M.T, s = {};
		s.types = o === null ? null : o.types, M.T = s, cc(e, !1, t, n);
		try {
			var c = i(), l = M.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? sc(e, t, Ba(c, r), jd(e)) : sc(e, t, r, jd(e));
		} catch (n) {
			sc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, jd());
		} finally {
			N.p = a, o !== null && s.types !== null && (o.types = s.types), M.T = o;
		}
	}
	function Zs() {}
	function Qs(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = $s(e).queue;
		Xs(e, a, t, ye, n === null ? Zs : function() {
			return ec(e), n(r);
		});
	}
	function $s(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: ye,
			baseState: ye,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ls,
				lastRenderedState: ye
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ls,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function ec(e) {
		var t = $s(e);
		t.next === null && (t = e.alternate.memoizedState), sc(e, t.next.queue, {}, jd());
	}
	function tc() {
		return Sa(sh);
	}
	function nc() {
		return is().memoizedState;
	}
	function rc() {
		return is().memoizedState;
	}
	function ic(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = jd();
					e = mo(n);
					var r = ho(t, e, n);
					r !== null && (Pd(r, t, n), go(r, t, n)), t = { cache: ka() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function ac(e, t, n) {
		var r = jd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, lc(e) ? uc(t, n) : (n = Ci(e, t, n, r), n !== null && (Pd(n, e, r), dc(n, t, r)));
	}
	function oc(e, t, n) {
		sc(e, t, n, jd());
	}
	function sc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (lc(e)) uc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Rr(s, o)) return Si(e, t, i, 0), $u === null && xi(), !1;
			} catch {}
			if (n = Ci(e, t, i, r), n !== null) return Pd(n, e, r), dc(n, t, r), !0;
		}
		return !1;
	}
	function cc(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Pf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, lc(e)) {
			if (t) throw Error(i(479));
		} else t = Ci(e, n, r, 2), t !== null && Pd(t, e, 2);
	}
	function lc(e) {
		var t = e.alternate;
		return e === W || t !== null && t === W;
	}
	function uc(e, t) {
		Ho = Vo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function dc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, pt(e, n);
		}
	}
	var fc = {
		readContext: Sa,
		use: ss,
		useCallback: Jo,
		useContext: Jo,
		useEffect: Jo,
		useImperativeHandle: Jo,
		useLayoutEffect: Jo,
		useInsertionEffect: Jo,
		useMemo: Jo,
		useReducer: Jo,
		useRef: Jo,
		useState: Jo,
		useDebugValue: Jo,
		useDeferredValue: Jo,
		useTransition: Jo,
		useSyncExternalStore: Jo,
		useId: Jo,
		useHostTransitionStatus: Jo,
		useFormState: Jo,
		useActionState: Jo,
		useOptimistic: Jo,
		useMemoCache: Jo,
		useCacheRefresh: Jo,
		useEffectEvent: Jo
	}, pc = {
		readContext: Sa,
		use: ss,
		useCallback: function(e, t) {
			return rs().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Sa,
		useEffect: Ls,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), Fs(4194308, 4, Us.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Fs(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			Fs(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = rs();
			t = t === void 0 ? null : t;
			var r = e();
			if (Uo) {
				Xe(!0);
				try {
					e();
				} finally {
					Xe(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = rs();
			if (n !== void 0) {
				var i = n(t);
				if (Uo) {
					Xe(!0);
					try {
						n(t);
					} finally {
						Xe(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = ac.bind(null, W, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = rs();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = ys(e);
			var t = e.queue, n = oc.bind(null, W, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Gs,
		useDeferredValue: function(e, t) {
			return Js(rs(), e, t);
		},
		useTransition: function() {
			var e = ys(!1);
			return e = Xs.bind(null, W, e.queue, !0, !1), rs().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = W, a = rs();
			if (U) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), $u === null) throw Error(i(349));
				Y & 127 || ms(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Ls(gs.bind(null, r, o, e), [e]), r.flags |= 2048, Ns(9, { destroy: void 0 }, hs.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = rs(), t = $u.identifierPrefix;
			if (U) {
				var n = Ji, r = qi;
				n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Wo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = qo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: tc,
		useFormState: Os,
		useActionState: Os,
		useOptimistic: function(e) {
			var t = rs();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = cc.bind(null, W, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: cs,
		useCacheRefresh: function() {
			return rs().memoizedState = ic.bind(null, W);
		},
		useEffectEvent: function(e) {
			var t = rs(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (q & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, mc = {
		readContext: Sa,
		use: ss,
		useCallback: Ks,
		useContext: Sa,
		useEffect: Rs,
		useImperativeHandle: Ws,
		useInsertionEffect: Vs,
		useLayoutEffect: Hs,
		useMemo: qs,
		useReducer: us,
		useRef: Ps,
		useState: function() {
			return us(ls);
		},
		useDebugValue: Gs,
		useDeferredValue: function(e, t) {
			return Ys(is(), G.memoizedState, e, t);
		},
		useTransition: function() {
			var e = us(ls)[0], t = is().memoizedState;
			return [typeof e == "boolean" ? e : os(e), t];
		},
		useSyncExternalStore: ps,
		useId: nc,
		useHostTransitionStatus: tc,
		useFormState: ks,
		useActionState: ks,
		useOptimistic: function(e, t) {
			return bs(is(), G, e, t);
		},
		useMemoCache: cs,
		useCacheRefresh: rc,
		useEffectEvent: Bs
	}, hc = {
		readContext: Sa,
		use: ss,
		useCallback: Ks,
		useContext: Sa,
		useEffect: Rs,
		useImperativeHandle: Ws,
		useInsertionEffect: Vs,
		useLayoutEffect: Hs,
		useMemo: qs,
		useReducer: fs,
		useRef: Ps,
		useState: function() {
			return fs(ls);
		},
		useDebugValue: Gs,
		useDeferredValue: function(e, t) {
			var n = is();
			return G === null ? Js(n, e, t) : Ys(n, G.memoizedState, e, t);
		},
		useTransition: function() {
			var e = fs(ls)[0], t = is().memoizedState;
			return [typeof e == "boolean" ? e : os(e), t];
		},
		useSyncExternalStore: ps,
		useId: nc,
		useHostTransitionStatus: tc,
		useFormState: Ms,
		useActionState: Ms,
		useOptimistic: function(e, t) {
			var n = is();
			return G === null ? (n.baseState = e, [e, n.queue.dispatch]) : bs(n, G, e, t);
		},
		useMemoCache: cs,
		useCacheRefresh: rc,
		useEffectEvent: Bs
	};
	function gc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : E({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var _c = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = mo(r);
			i.payload = t, n != null && (i.callback = n), t = ho(e, i, r), t !== null && (Pd(t, e, r), go(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = mo(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ho(e, i, r), t !== null && (Pd(t, e, r), go(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = jd(), r = mo(n);
			r.tag = 2, t != null && (r.callback = t), t = ho(e, r, n), t !== null && (Pd(t, e, n), go(t, e, n));
		}
	};
	function vc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(i, a) : !0;
	}
	function yc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _c.enqueueReplaceState(t, t.state, null);
	}
	function bc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = E({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function xc(e) {
		_i(e);
	}
	function Sc(e) {
		console.error(e);
	}
	function Cc(e) {
		_i(e);
	}
	function wc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Tc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Ec(e, t, n) {
		return n = mo(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			wc(e, t);
		}, n;
	}
	function Dc(e) {
		return e = mo(e), e.tag = 3, e;
	}
	function Oc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Tc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Tc(t, n, r), typeof i != "function" && (vd === null ? vd = /* @__PURE__ */ new Set([this]) : vd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function kc(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && ya(t, n, a, !0), n = Oo.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return ko === null ? Kd() : n.alternate === null && ad === 0 && (ad = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Ya ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), mf(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Ya ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), mf(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return mf(e, r, a), Kd(), !1;
		}
		if (U) return t = Oo.current, t === null ? (r !== ia && (t = Error(i(423), { cause: r }), da(zi(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = zi(r, n), a = Ec(e.stateNode, r, a), _o(e, a), ad !== 4 && (ad = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== ia && (e = Error(i(422), { cause: r }), da(zi(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = zi(o, n), dd === null ? dd = [o] : dd.push(o), ad !== 4 && (ad = 2), t === null) return !0;
		r = zi(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Ec(n.stateNode, r, e), _o(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (vd === null || !vd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = Dc(a), Oc(a, e, n, r), _o(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Ac = Error(i(461)), jc = !1;
	function Mc(e, t, n, r) {
		t.child = e === null ? lo(t, null, n, r) : co(t, e.child, n, r);
	}
	function Nc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return xa(t), r = Xo(e, t, n, o, a, i), s = es(), e !== null && !jc ? (ts(e, t, i), sl(e, t, i)) : (U && s && Zi(t), t.flags |= 1, Mc(e, t, r, i), t.child);
	}
	function Pc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Ai(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Fc(e, t, a, r, i)) : (e = Ni(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !cl(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? zr : n, n(o, r) && e.ref === t.ref) return sl(e, t, i);
		}
		return t.flags |= 1, e = ji(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Fc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (zr(a, r) && e.ref === t.ref) {
				if (jc = !1, t.pendingProps = r = a, cl(e, i)) e.flags & 131072 && (jc = !0);
				else return t.lanes = e.lanes, sl(e, t, i);
			}
		}
		return Uc(e, t, n, r, i);
	}
	function Ic(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return Rc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Wa(t, a === null ? null : a.cachePool), a === null ? Eo() : To(t, a), Mo(t);
			else return r = t.lanes = 536870912, Rc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Wa(t, null), Eo(), No()) : (Wa(t, a.cachePool), To(t, a), No(), t.memoizedState = null);
		return Mc(e, t, i, n), t.child;
	}
	function Lc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function Rc(e, t, n, r, i) {
		var a = Ua();
		return a = a === null ? null : {
			parent: Oa._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Wa(t, null), Eo(), Mo(t), e !== null && ya(e, t, r, !0), t.childLanes = i, null;
	}
	function zc(e, t) {
		return t = Qc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Bc(e, t, n) {
		return co(t, e.child, null, n), e = zc(t, t.pendingProps), e.flags |= 2, Po(t), t.memoizedState = null, e;
	}
	function Vc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (U) {
				if (r.mode === "hidden") return e = zc(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, Lc(null, e);
				if (jo(t), (e = ta) ? (e = am(e, ra), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ki === null ? null : {
						id: qi,
						overflow: Ji
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Ii(e), n.return = t, t.child = n, ea = t, ta = null)) : e = null, e === null) throw aa(t);
				return t.lanes = 536870912, null;
			}
			return zc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (jo(t), a) {
				if (t.flags & 256) t.flags &= -257, t = Bc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (jc || ya(e, t, n, !1), a = (n & e.childLanes) !== 0, jc || a) {
				if (Co.current === null) {
					if (r = $u, r !== null && (s = mt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, wi(e, s), Pd(r, e, s), Ac;
					Kd();
				}
				t = Bc(e, t, n);
			} else e = o.treeContext, ta = lm(s.nextSibling), ea = t, U = !0, na = null, ra = !1, e !== null && $i(t, e), t = zc(t, r), t.flags |= 134221824;
			return t;
		}
		return e = ji(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Hc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Uc(e, t, n, r, i) {
		return xa(t), n = Xo(e, t, n, r, void 0, i), r = es(), e !== null && !jc ? (ts(e, t, i), sl(e, t, i)) : (U && r && Zi(t), t.flags |= 1, Mc(e, t, n, i), t.child);
	}
	function Wc(e, t, n, r, i, a) {
		return xa(t), t.updateQueue = null, n = Qo(t, r, n, i), Zo(e), r = es(), e !== null && !jc ? (ts(e, t, a), sl(e, t, a)) : (U && r && Zi(t), t.flags |= 1, Mc(e, t, n, a), t.child);
	}
	function Gc(e, t, n, r, i) {
		if (xa(t), t.stateNode === null) {
			var a = Di, o = n.contextType;
			typeof o == "object" && o && (a = Sa(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = _c, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, fo(t), o = n.contextType, a.context = typeof o == "object" && o ? Sa(o) : Di, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (gc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && _c.enqueueReplaceState(a, a.state, null), bo(t, r, a, i), yo(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = bc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Di, typeof u == "object" && u && (o = Sa(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && yc(t, a, r, o), uo = !1;
			var f = t.memoizedState;
			a.state = f, bo(t, r, a, i), yo(), l = t.memoizedState, s || f !== l || uo ? (typeof d == "function" && (gc(t, n, d, r), l = t.memoizedState), (c = uo || vc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, po(e, t), o = t.memoizedProps, u = bc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Di, typeof l == "object" && l && (c = Sa(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && yc(t, a, r, c), uo = !1, f = t.memoizedState, a.state = f, bo(t, r, a, i), yo();
			var p = t.memoizedState;
			o !== d || f !== p || uo || e !== null && e.dependencies !== null && ba(e.dependencies) ? (typeof s == "function" && (gc(t, n, s, r), p = t.memoizedState), (u = uo || vc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && ba(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Hc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = co(t, e.child, null, i), t.child = co(t, null, n, i)) : Mc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = sl(e, t, i), e;
	}
	function Kc(e, t, n, r) {
		return la(), t.flags |= 256, Mc(e, t, n, r), t.child;
	}
	var qc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Jc(e) {
		return {
			baseLanes: e,
			cachePool: Ga()
		};
	}
	function Yc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= ld), e;
	}
	function Xc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(Fo.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (U) {
				if (i ? Ao(t) : No(), (e = ta) ? (e = am(e, ra), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ki === null ? null : {
						id: qi,
						overflow: Ji
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Ii(e), n.return = t, t.child = n, ea = t, ta = null)) : e = null, e === null) throw aa(t);
				return t.lanes = sm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (No(), i = t.mode, a = Qc({
				mode: "hidden",
				children: a
			}, i), r = Pi(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Jc(n), r.childLanes = Yc(e, o, n), t.memoizedState = qc, Lc(null, r)) : (Ao(t), Zc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return el(e, t, a, o, r, c, s, n);
		}
		return i ? (No(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = ji(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Pi(i, a, n, null), i.flags |= 2) : i = ji(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Lc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Jc(n) : (a = i.cachePool, a === null ? a = Ga() : (s = Oa._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Yc(e, o, n), t.memoizedState = qc, Lc(e.child, r)) : (Ao(t), n = e.child, e = n.sibling, n = ji(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Zc(e, t) {
		return t = Qc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Qc(e, t) {
		return e = ki(22, e, null, t), e.lanes = 0, e;
	}
	function $c(e, t, n) {
		return co(t, e.child, null, n), e = Zc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function el(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (Ao(t), t.flags &= -257, $c(e, t, c)) : t.memoizedState === null ? (No(), o = a.fallback, s = t.mode, a = Qc({
			mode: "visible",
			children: a.children
		}, s), o = Pi(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, co(t, e.child, null, c), a = t.child, a.memoizedState = Jc(c), a.childLanes = Yc(e, r, c), t.memoizedState = qc, Lc(null, a)) : (No(), t.child = e.child, t.flags |= 128, null);
		if (Ao(t), sm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, da({
				value: a,
				source: null,
				stack: null
			})), $c(e, t, c);
		}
		if (jc || ya(e, t, c, !1), r = (c & e.childLanes) !== 0, jc || r) {
			if (Co.current !== null) return $c(e, t, c);
			if (r = $u, r !== null && (a = mt(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, wi(e, a), Pd(r, e, a), Ac;
			return om(o) || Kd(), $c(e, t, c);
		}
		return om(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, ta = lm(o.nextSibling), ea = t, U = !0, na = null, ra = !1, e !== null && $i(t, e), t = Zc(t, a.children), t.flags |= 134221824, t);
	}
	function tl(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), _a(e.return, t, n);
	}
	function nl(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && Ro(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function rl(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function il(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function al(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = Fo.current;
		if (t.flags & 128) return Io(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Io(t, o), i === "backwards" && e !== null ? (il(e), Mc(e, t, r, n), il(e)) : Mc(e, t, r, n), r = U ? Ui : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && tl(e, n, t);
			else if (e.tag === 19) tl(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = nl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, il(t)), rl(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Ro(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				rl(t, !0, n, null, a, r);
				break;
			case "together":
				rl(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = nl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), rl(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function ol(e, t, n) {
		var r = t.pendingProps;
		return ha(t, t.type, r.value), Mc(e, t, r.children, n), t.child;
	}
	function sl(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), od |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (ya(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = ji(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ji(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function cl(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && ba(e)));
	}
	function ll(e, t, n) {
		switch (t.tag) {
			case 3:
				Ee(t, t.stateNode.containerInfo), ha(t, Oa, e.memoizedState.cache), la();
				break;
			case 27:
			case 5:
				Oe(t);
				break;
			case 4:
				Ee(t, t.stateNode.containerInfo);
				break;
			case 10:
				ha(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, jo(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return Ao(t), t.flags |= 128, null;
					r = ya(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? Xc(e, t, n) : (Ao(t), e = sl(e, t, n), e === null ? null : e.sibling);
				}
				Ao(t);
				break;
			case 19:
				if (t.flags & 128) return al(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (ya(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return al(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Io(t, Fo.current), r) break;
				return null;
			case 22: return t.lanes = 0, Ic(e, t, n, t.pendingProps);
			case 24: ha(t, Oa, e.memoizedState.cache);
		}
		return sl(e, t, n);
	}
	function ul(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) jc = !0;
			else {
				if (!cl(e, n) && !(t.flags & 128)) return jc = !1, ll(e, t, n);
				jc = !!(e.flags & 131072);
			}
		} else jc = !1, U && t.flags & 1048576 && Xi(t, Ui, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Qa(t.elementType), t.type = e, typeof e == "function") Ai(e) ? (r = bc(e, r), t.tag = 1, t = Gc(null, t, e, r, n)) : (t.tag = 0, t = Uc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === ie) {
								t.tag = 11, t = Nc(null, t, e, r, n);
								break a;
							}
							if (a === se) {
								t.tag = 14, t = Pc(null, t, e, r, n);
								break a;
							}
							if (a === j) {
								t.tag = 10, t.type = e, t = ol(null, t, n);
								break a;
							}
						}
						throw t = _e(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Uc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = bc(r, t.pendingProps), Gc(e, t, r, a, n);
			case 3:
				a: {
					if (Ee(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, po(e, t), bo(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, ha(t, Oa, r), r !== o.cache && va(t, [Oa], n, !0), yo(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = Kc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = zi(Error(i(424)), t), da(a), t = Kc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (ta = lm(e.firstChild), ea = t, U = !0, na = null, ra = !0, n = lo(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (la(), r === a) {
							t = sl(e, t, n);
							break a;
						}
						Mc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Hc(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : U || (t.stateNode = fp(t.type, t.pendingProps, we.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return Oe(t), e === null && U && (r = t.stateNode = hm(t.type, t.pendingProps, we.current), ea = t, ra = !0, a = ta, Sp(t.type) ? (um = a, ta = lm(r.firstChild)) : ta = a), Mc(e, t, t.pendingProps.children, n), Hc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && U && ((a = r = ta) && (r = rm(r, t.type, t.pendingProps, ra), r === null ? a = !1 : (t.stateNode = r, ea = t, ta = lm(r.firstChild), ra = !1, a = !0)), a || aa(t)), Oe(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, pp(a, o) ? r = null : s !== null && pp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Xo(e, t, $o, null, null, n), sh._currentValue = a), Hc(e, t), Mc(e, t, r, n), t.child;
			case 6: return e === null && U && ((e = n = ta) && (n = im(n, t.pendingProps, ra), n === null ? e = !1 : (t.stateNode = n, ea = t, ta = null, e = !0)), e || aa(t)), null;
			case 13: return Xc(e, t, n);
			case 4: return Ee(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = co(t, null, r, n) : Mc(e, t, r, n), t.child;
			case 11: return Nc(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, Hc(e, t), Mc(e, t, r, n), t.child;
			case 8: return Mc(e, t, t.pendingProps.children, n), t.child;
			case 12: return Mc(e, t, t.pendingProps.children, n), t.child;
			case 10: return ol(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, xa(t), a = Sa(a), r = r(a), t.flags |= 1, Mc(e, t, r, n), t.child;
			case 14: return Pc(e, t, t.type, t.pendingProps, n);
			case 15: return Fc(e, t, t.type, t.pendingProps, n);
			case 19: return al(e, t, n);
			case 31: return Vc(e, t, n);
			case 22: return Ic(e, t, n, t.pendingProps);
			case 24: return xa(t), r = Sa(Oa), e === null ? (a = Ua(), a === null && (a = $u, o = ka(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, fo(t), ha(t, Oa, a)) : ((e.lanes & n) !== 0 && (po(e, t), bo(t, null, null, n), yo()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, ha(t, Oa, r), r !== a.cache && va(t, [Oa], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ha(t, Oa, r))), Mc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : U && Zi(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Hc(e, t), Mc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function dl(e) {
		e.flags |= 4;
	}
	function fl(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Ud()) e.flags |= 8192;
				else throw $a = Ya, qa;
			}
		} else e.flags &= -16777217;
	}
	function pl(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Ud()) e.flags |= 8192;
			else throw $a = Ya, qa;
		}
	}
	function ml(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : B(), e.lanes |= t, ud |= t);
	}
	function hl(e, t) {
		if (!U) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function gl(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function _l(e, t, n) {
		var r = t.pendingProps;
		switch (Qi(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return gl(t), null;
			case 1: return gl(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ga(Oa), De(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ca(t) ? dl(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ua())), gl(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (dl(t), o === null ? (gl(t), fl(t, a, null, r, n)) : (gl(t), pl(t, o))) : o ? o === e.memoizedState ? (gl(t), t.flags &= -16777217) : (dl(t), gl(t), pl(t, o)) : (e = e.memoizedProps, e !== r && dl(t), gl(t), fl(t, a, e, r, n)), null;
			case 27:
				if (ke(t), n = we.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && dl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return gl(t), t.subtreeFlags &= -33554433, null;
					}
					e = I.current, ca(t) ? oa(t, e) : (e = hm(a, r, n), t.stateNode = e, dl(t));
				}
				return gl(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (ke(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && dl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return gl(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = I.current, ca(t)) oa(t, o);
					else {
						var s = lp(we.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[bt] = t, o[xt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (np(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && dl(t);
					}
				}
				return gl(t), t.subtreeFlags &= -33554433, fl(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && dl(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = we.current, ca(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = ea, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[bt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || ep(e.nodeValue, n)), e || aa(t, !0);
					} else e = lp(e).createTextNode(r), e[bt] = t, t.stateNode = e;
				}
				return gl(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = ca(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[bt] = t;
						} else la(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						gl(t), e = !1;
					} else n = ua(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Po(t), t) : (Po(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return gl(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = ca(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[bt] = t;
						} else la(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						gl(t), a = !1;
					} else a = ua(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Po(t), t) : (Po(t), null);
				}
				return Po(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), ml(t, t.updateQueue), gl(t), null);
			case 4: return De(), e === null && Wf(t.stateNode.containerInfo), t.flags |= 67108864, gl(t), null;
			case 10: return ga(t.type), gl(t), null;
			case 19:
				if (Lo(t), r = t.memoizedState, r === null) return gl(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) hl(r, !1);
					else {
						if (ad !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Ro(e), o !== null) {
								for (t.flags |= 128, hl(r, !1), e = o.updateQueue, t.updateQueue = e, ml(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Mi(n, e), n = n.sibling;
								return Io(t, Fo.current & 1 | 2), U && Yi(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && ze() > gd && (t.flags |= 128, a = !0, hl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Ro(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, ml(t, e), hl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !U) return gl(t), null;
						} else 2 * ze() - r.renderingStartTime > gd && n !== 536870912 && (t.flags |= 128, a = !0, hl(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = ze(), e.sibling = null, o = Fo.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || U ? Io(t, o) : (n = o, F(Oo, t), F(Fo, n), ko === null && (ko = t)), U && Yi(t, r.treeForkCount), e;
				}
				return gl(t), null;
			case 22:
			case 23: return Po(t), Do(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (gl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : gl(t), n = t.updateQueue, n !== null && ml(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && Se(Ha), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ga(Oa), gl(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, gl(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function vl(e, t) {
		switch (Qi(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return ga(Oa), De(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return ke(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Po(t), t.alternate === null) throw Error(i(340));
					la();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Po(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					la();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Lo(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return De(), null;
			case 10: return ga(t.type), null;
			case 22:
			case 23: return Po(t), Do(), e !== null && Se(Ha), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return ga(Oa), null;
			case 25: return null;
			default: return null;
		}
	}
	function yl(e, t) {
		switch (Qi(t), t.tag) {
			case 3:
				ga(Oa), De();
				break;
			case 26:
			case 27:
			case 5:
				ke(t);
				break;
			case 4:
				De();
				break;
			case 31:
				t.memoizedState !== null && Po(t);
				break;
			case 13:
				Po(t);
				break;
			case 19:
				Lo(t);
				break;
			case 10:
				ga(t.type);
				break;
			case 22:
			case 23:
				Po(t), Do(), e !== null && Se(Ha);
				break;
			case 24: ga(Oa);
		}
	}
	function bl(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function xl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Z(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Sl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				So(t, n);
			} catch (t) {
				Z(e, e.return, t);
			}
		}
	}
	function Cl(e, t, n) {
		n.props = bc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Z(e, t, n);
		}
	}
	function wl(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = mi(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Fp(e);
							f(e.child, !1, Qp, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Z(e, t, n);
		}
	}
	function Tl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				Z(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				Z(e, t, n);
			}
			else n.current = null;
		}
	}
	function El(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
	}
	function Dl(e) {
		for (var t = e.return; t !== null && (Al(t) && em(e.stateNode, t.stateNode), !kl(t));) t = t.return;
	}
	function Ol(e) {
		for (var t = e.return; t !== null && (Al(t) && tm(e.stateNode, t.stateNode), !kl(t));) t = t.return;
	}
	function kl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function Al(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function jl(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Ml(e, t, n) {
		try {
			var r = e.stateNode;
			ip(r, e.type, n, t), r[xt] = t;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Nl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
	}
	function Pl(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Nl(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Fl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = gn)), El(e, r), V = !0;
		else if (i !== 4 && (i === 27 && (El(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Fl(e, t, n, r), e = e.sibling; e !== null;) Fl(e, t, n, r), e = e.sibling;
	}
	function Il(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), El(e, r), V = !0;
		else if (i !== 4 && (i === 27 && (El(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Il(e, t, n, r), e = e.sibling; e !== null;) Il(e, t, n, r), e = e.sibling;
	}
	function Ll(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			np(t, r, n), t[bt] = e, t[xt] = n;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	var Rl = !1, zl = null;
	function Bl(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (Rl = !0);
	}
	var Vl = null;
	function Hl() {
		var e = Vl;
		return Vl = null, e;
	}
	var Ul = 0;
	function Wl(e, t, n, r, i) {
		return Ul = 0, Gl(e.child, t, n, r, i);
	}
	function Gl(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Op(o);
					r.push(s), s.view && (a = !0);
				} else a || Op(o).view && (a = !0);
				Rl = !0, Tp(o, Ul === 0 ? t : t + "_" + Ul, n), Ul++;
			} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Gl(e.child, t, n, r, i) && (a = !0));
			e = e.sibling;
		}
		return a;
	}
	function Kl(e, t) {
		for (; e !== null;) e.tag === 5 ? Ep(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Kl(e.child, t)), e = e.sibling;
	}
	function ql(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (ql(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = gi(t.default, t.share), t !== "none" && (Wl(e, n, t, null, !1) || Kl(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Jl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = mi(r, n), a = gi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? ql(e) : Wl(e, i, a, null, !1) ? (ql(e), n.paired || t || Nd(e, r.onEnter)) : Kl(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Jl(e, t), e = e.sibling;
		else ql(e);
	}
	function Yl(e) {
		if (zl !== null && zl.size !== 0) {
			var t = zl;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = gi(n.default, n.share);
								if (a !== "none" && (Wl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Nd(e, n.onShare)) : Kl(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Yl(e);
				}
				e = e.sibling;
			}
		}
	}
	function Xl(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = mi(t, e.stateNode), r = zl === null ? void 0 : zl.get(n), i = gi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Wl(e, n, i, null, !1) ? r === void 0 ? Nd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, zl.delete(n), Nd(e, t.onShare)) : Kl(e.child, !1)), zl !== null && Yl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Xl(e), e = e.sibling;
		else zl !== null && Yl(e);
	}
	function Zl(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = mi(t, e.stateNode);
				t = gi(t.default, t.update), e.flags &= -5, t !== "none" && Wl(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && Zl(e);
			e = e.sibling;
		}
	}
	function Ql(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, Kl(e.child, !1));
				}
				Ql(e);
			}
			e = e.sibling;
		}
	}
	function $l(e) {
		if (e.tag === 30) e.stateNode.paired = null, Kl(e.child, !1), Ql(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) $l(e), e = e.sibling;
		else Ql(e);
	}
	function eu(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? Kl(e.child, !1) : e.subtreeFlags & 33554432 && eu(e), e = e.sibling;
	}
	function tu(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Ul < a.length) {
					var l = a[Ul], u = Op(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Tp(c, Ul === 0 ? n : n + "_" + Ul, i), s && e.flags & 4 || (Vl === null && (Vl = []), Vl.push(c, Ul === 0 ? r : r + "_" + Ul, t.memoizedProps)), Ul++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : tu(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function nu(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = mi(n, r), a = gi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(kp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Ul = 0, i = tu(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Nd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && nu(e, t);
			e = e.sibling;
		}
	}
	var ru = !1, K = !1, iu = !1, au = !1, ou = typeof WeakSet == "function" ? WeakSet : Set, su = null, cu = !1, lu = !1, uu = !1, du = !1;
	function fu(e, t, n) {
		if (e = e.containerInfo, sp = gh, e = Wr(e), Gr(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (cp = {
			focusedElem: e,
			selectionRange: r
		}, gh = !1, n = (n & 335544064) === n, su = t, t = n ? 9270 : 1024; su !== null;) {
			if (e = su, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && Xl(r[a]);
			if (e.alternate === null && e.flags & 2) n && Bl(e), pu(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && Xl(r), pu(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Bl(e), pu(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, su = r) : (n && Zl(e), pu(n));
			}
		}
		zl = null;
	}
	function pu(e) {
		for (; su !== null;) {
			var t = su, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = bc(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							Z(t, t.return, e);
						}
					}
					break;
				case 3:
					if (a & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) nm(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								nm(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = mi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = gi(a.default, a.update), a !== "none" && Wl(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, su = r;
				break;
			}
			su = t.return;
		}
	}
	function mu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Pu(e, n), r & 4 && bl(5, n);
				break;
			case 1:
				if (Pu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						Z(n, n.return, e);
					}
					else {
						var i = bc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							Z(n, n.return, e);
						}
					}
				}
				r & 64 && Sl(n), r & 512 && wl(n, n.return);
				break;
			case 3:
				if (Pu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						So(e, t);
					} catch (e) {
						Z(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Ll(n);
			case 26:
			case 5:
				Pu(e, n), t === null && r & 4 && jl(n), r & 512 && wl(n, n.return);
				break;
			case 12:
				Pu(e, n);
				break;
			case 31:
				Pu(e, n), r & 4 && Cu(e, n);
				break;
			case 13:
				Pu(e, n), r & 4 && wu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = _f.bind(null, n), cm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || ru, !r) {
					var a = t !== null && t.memoizedState !== null || K;
					t = ru, i = K, ru = r, (K = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Iu(e, n, r)) : Pu(e, n), ru = t, K = i;
				}
				break;
			case 30:
				Pu(e, n), r & 512 && wl(n, n.return);
				break;
			case 7: r & 512 && wl(n, n.return);
			default: Pu(e, n);
		}
	}
	function hu(e, t) {
		for (e = e.child; e !== null;) gu(e, t), e = e.sibling;
	}
	function gu(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					Z(e, e.return, t);
				}
				_u(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, V = !0;
				} catch (t) {
					Z(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? wp(s, !0) : wp(e.stateNode, !1);
				} catch (t) {
					Z(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && hu(e, t);
				break;
			default: hu(e, t);
		}
	}
	function _u(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						gu(n, r);
						break a;
					case 22:
						n.memoizedState === null && _u(n, r);
						break a;
					default: _u(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function vu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, vu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && kt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var yu = null, bu = !1;
	function xu(e, t, n) {
		for (n = n.child; n !== null;) Su(e, t, n), n = n.sibling;
	}
	function Su(e, t, n) {
		if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
			Ye.onCommitFiberUnmount(Je, n);
		} catch {}
		switch (n.tag) {
			case 26:
				K || Tl(n, t), xu(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !K && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				K || Tl(n, t), Ol(n);
				var r = yu, i = bu;
				Sp(n.type) && (yu = n.stateNode, bu = !1), xu(e, t, n), gm(n.stateNode, n.type, n.memoizedProps), yu = r, bu = i;
				break;
			case 5: K || Tl(n, t), Ol(n);
			case 6:
				if (n.tag === 6 && Ol(n), r = yu, i = bu, yu = null, xu(e, t, n), yu = r, bu = i, yu !== null) {
					if (bu) try {
						(yu.nodeType === 9 ? yu.body : yu.nodeName === "HTML" ? yu.ownerDocument.body : yu).removeChild(n.stateNode), V = !0;
					} catch (e) {
						Z(n, t, e);
					}
					else try {
						yu.removeChild(n.stateNode), V = !0;
					} catch (e) {
						Z(n, t, e);
					}
				}
				break;
			case 18:
				yu !== null && (bu ? (e = yu, Cp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : Cp(yu, n.stateNode));
				break;
			case 4:
				r = yu, i = bu, yu = n.stateNode.containerInfo, bu = !0, xu(e, t, n), yu = r, bu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				xl(2, n, t), K || xl(4, n, t), xu(e, t, n);
				break;
			case 1:
				K || (Tl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Cl(n, t, r)), xu(e, t, n);
				break;
			case 21:
				xu(e, t, n);
				break;
			case 22:
				K = (r = K) || n.memoizedState !== null, xu(e, t, n), K = r;
				break;
			case 30:
				Tl(n, t), xu(e, t, n);
				break;
			case 7:
				K || Tl(n, t), xu(e, t, n);
				break;
			default: xu(e, t, n);
		}
	}
	function Cu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				Z(t, t.return, e);
			}
		}
	}
	function wu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Tu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new ou()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ou()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function Eu(e, t) {
		var n = Tu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = vf.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Du(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (Sp(l.type)) {
							yu = l.stateNode, bu = !1;
							break a;
						}
						break;
					case 5:
						yu = l.stateNode, bu = !1;
						break a;
					case 3:
					case 4:
						yu = l.stateNode.containerInfo, bu = !0;
						break a;
				}
				l = l.return;
			}
			if (yu === null) throw Error(i(160));
			Su(s, c, o), yu = null, bu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) ku(t, e, n), t = t.sibling;
	}
	var Ou = null;
	function ku(e, t, n) {
		var r = e.alternate, a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
					var s = r[o];
					s.ref.impl = s.nextImpl;
				}
				Du(t, e, n), Au(e), a & 4 && (xl(3, e, e.return), bl(3, e), xl(5, e, e.return));
				break;
			case 1:
				Du(t, e, n), Au(e), a & 512 && (K || r === null || Tl(r, r.return)), a & 64 && ru && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = Ou, Du(t, e, n), Au(e), a & 512 && (K || r === null || Tl(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (ru) e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[Dt] || r[bt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), np(r, t, n), r[bt] = e, Pt(r), t = r;
												break a;
											case "link":
												if (o = Gm("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Gm("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[bt] = e, Pt(r), t = r;
									}
									e.stateNode = t;
								}
							} else ru || Km(o, e.type, e.stateNode);
						} else e.stateNode = Bm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && Ml(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || K || t.parentNode.removeChild(t)) : a.count--, n === null ? ru || Km(o, e.type, e.stateNode) : Bm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				Du(t, e, n), Au(e), a & 512 && (K || r === null || Tl(r, r.return)), r !== null && a & 4 && Ml(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = iu, iu = !1, Du(t, e, n), iu = o, Au(e), a & 512 && (K || r === null || Tl(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						cn(t, ""), V = !0;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, Ml(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (au = !0);
				break;
			case 6:
				if (Du(t, e, n), Au(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, V = !0;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				break;
			case 3:
				if (V = !1, Wm = null, o = Ou, Ou = bm(t.containerInfo), Du(t, e, n), Ou = o, Au(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					Z(e, e.return, t);
				}
				au && (au = !1, ju(e)), V = !1;
				break;
			case 4:
				a = iu, iu = ru, r = Wt(), o = Ou, Ou = bm(e.stateNode.containerInfo), Du(t, e, n), Au(e), Ou = o, V && lu && (uu = !0), V = r, iu = a;
				break;
			case 12:
				Du(t, e, n), Au(e);
				break;
			case 31:
				Du(t, e, n), Au(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Eu(e, t)));
				break;
			case 13:
				Du(t, e, n), Au(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (md = ze()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Eu(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = ru, l = K, u = iu;
				ru = c || o, iu = u || o, K = l || s, Du(t, e, n), K = l, iu = u, ru = c, Au(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || ru || K || (t = s || K, n = ru, r = K, ru = o || ru, K = t, Fu(e, 2), ru = n, K = r), !o && iu || hu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Eu(e, n))));
				break;
			case 19:
				Du(t, e, n), Au(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Eu(e, t)));
				break;
			case 30:
				a & 512 && (K || r === null || Tl(r, r.return)), a = Wt(), o = lu, s = (n & 335544064) === n, c = e.memoizedProps, lu = s && gi(c.default, c.update) !== "none", Du(t, e, n), Au(e), s && r !== null && V && (e.flags |= 4), lu = o, V = a;
				break;
			case 21: break;
			case 7: a & 512 && (K || r === null || Tl(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Du(t, e, n), Au(e);
		}
	}
	function Au(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Nl(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (Al(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (kl(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Il(e, Pl(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (cn(l, ""), n.flags &= -33), Il(e, Pl(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Fl(e, Pl(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				Z(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function ju(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			ju(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = !0, t.reset(), gh = !1), e = e.sibling;
		}
	}
	function Mu(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Nu(t, e), t = t.sibling;
		else nu(t, !1);
	}
	function Nu(e, t) {
		var n = e.alternate;
		if (n === null) Jl(e, !1);
		else switch (e.tag) {
			case 3:
				if (du = cu = !1, Hl(), Mu(t, e), !cu && !uu) {
					if (e = Vl, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Ep(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), du = !0;
				}
				Vl = null;
				break;
			case 5:
				Mu(t, e);
				break;
			case 4:
				r = cu, cu = !1, Mu(t, e), cu && (uu = !0), cu = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Mu(t, e) : Jl(e, !1));
				break;
			case 30:
				r = cu, i = Hl(), cu = !1, Mu(t, e), cu && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = mi(a, o), o = mi(n.memoizedProps, o);
				var s = gi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Ul = 0, t = tu(e, n, t, o, s, a, !0), Ul !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Nd(e, e.memoizedProps.onUpdate), Vl = i) : i !== null && (i.push.apply(i, Vl), Vl = i), cu = e.flags & 32 ? !0 : r;
				break;
			default: Mu(t, e);
		}
	}
	function Pu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) mu(e, t.alternate, t), t = t.sibling;
	}
	function Fu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					xl(4, n, n.return), Fu(n, r);
					break;
				case 1:
					Tl(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && Cl(n, n.return, i), Fu(n, r);
					break;
				case 27: r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					Tl(n, n.return), n.tag !== 5 && n.tag !== 27 || Ol(n), Fu(n, r);
					break;
				case 6:
					Ol(n);
					break;
				case 26:
					Tl(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || K || i.parentNode.removeChild(i), Fu(n, r);
					break;
				case 22:
					n.memoizedState === null && Fu(n, r);
					break;
				case 30:
					Tl(n, n.return), Fu(n, r);
					break;
				case 7: Tl(n, n.return);
				default: Fu(n, r);
			}
			e = e.sibling;
		}
	}
	function Iu(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Iu(i, a, n), bl(4, a);
					break;
				case 1:
					if (Iu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Z(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) xo(l[i], c);
						} catch (e) {
							Z(r, r.return, e);
						}
					}
					s && o & 64 && Sl(a), wl(a, a.return);
					break;
				case 27: n & 2 && Ll(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || Dl(a), Iu(i, a, n), s && r === null && o & 4 && jl(a), wl(a, a.return);
					break;
				case 6:
					Dl(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || ru || Km(bm(c.ownerDocument), a.type, c), Iu(i, a, n), s && r === null && o & 4 && jl(a), wl(a, a.return);
					break;
				case 12:
					Iu(i, a, n);
					break;
				case 31:
					Iu(i, a, n), s && o & 4 && Cu(i, a);
					break;
				case 13:
					Iu(i, a, n), s && o & 4 && wu(i, a);
					break;
				case 22:
					a.memoizedState === null && Iu(i, a, n), wl(a, a.return);
					break;
				case 30:
					Iu(i, a, n), wl(a, a.return);
					break;
				case 7: wl(a, a.return);
				default: Iu(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Lu(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Aa(n));
	}
	function Ru(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Aa(e));
	}
	function zu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Bu(e, t, n, r), t = t.sibling;
		else i && eu(t);
	}
	function Bu(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && $l(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				zu(e, t, n, r), a & 2048 && bl(9, t);
				break;
			case 1:
				zu(e, t, n, r);
				break;
			case 3:
				zu(e, t, n, r), i && du && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && Aa(a)));
				break;
			case 12:
				if (a & 2048) {
					zu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						Z(t, t.return, e);
					}
				} else zu(e, t, n, r);
				break;
			case 31:
				zu(e, t, n, r);
				break;
			case 13:
				zu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && $l(t), o._visibility & 2 ? zu(e, t, n, r) : (o._visibility |= 2, Vu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && $l(s), o._visibility & 2 ? zu(e, t, n, r) : Hu(e, t)), a & 2048 && Lu(s, t);
				break;
			case 24:
				zu(e, t, n, r), a & 2048 && Ru(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (Kl(a.child, !0), Kl(t.child, !0))), zu(e, t, n, r);
				break;
			default: zu(e, t, n, r);
		}
	}
	function Vu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Vu(a, o, s, c, i), bl(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Vu(a, o, s, c, i)) : u._visibility & 2 ? Vu(a, o, s, c, i) : Hu(a, o), i && l & 2048 && Lu(o.alternate, o);
					break;
				case 24:
					Vu(a, o, s, c, i), i && l & 2048 && Ru(o.alternate, o);
					break;
				default: Vu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Hu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Hu(n, r), i & 2048 && Lu(r.alternate, r);
					break;
				case 24:
					Hu(n, r), i & 2048 && Ru(r.alternate, r);
					break;
				default: Hu(n, r);
			}
			t = t.sibling;
		}
	}
	var Uu = 8192;
	function Wu(e, t, n) {
		if (e.subtreeFlags & Uu) for (e = e.child; e !== null;) Gu(e, t, n), e = e.sibling;
	}
	function Gu(e, t, n) {
		switch (e.tag) {
			case 26:
				Wu(e, t, n), e.flags & Uu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, Ou, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Wu(e, t, n), e.flags & Uu && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
				break;
			case 3:
			case 4:
				var r = Ou;
				Ou = bm(e.stateNode.containerInfo), Wu(e, t, n), Ou = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Uu, Uu = 16777216, Wu(e, t, n), Uu = r) : Wu(e, t, n));
				break;
			case 30:
				if ((e.flags & Uu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, zl === null && (zl = /* @__PURE__ */ new Map()), zl.set(r, i);
				}
				Wu(e, t, n);
				break;
			default: Wu(e, t, n);
		}
	}
	function Ku(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function qu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				su = r, Xu(r, e);
			}
			Ku(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Ju(e), e = e.sibling;
	}
	function Ju(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				qu(e), e.flags & 2048 && xl(9, e, e.return);
				break;
			case 3:
				qu(e);
				break;
			case 12:
				qu(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Yu(e)) : qu(e);
				break;
			default: qu(e);
		}
	}
	function Yu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				su = r, Xu(r, e);
			}
			Ku(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					xl(8, t, t.return), Yu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Yu(t));
					break;
				default: Yu(t);
			}
			e = e.sibling;
		}
	}
	function Xu(e, t) {
		for (; su !== null;) {
			var n = su;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					xl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: Aa(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, su = r;
			else a: for (n = e; su !== null;) {
				r = su;
				var i = r.sibling, a = r.return;
				if (vu(r), r === n) {
					su = null;
					break a;
				}
				if (i !== null) {
					i.return = a, su = i;
					break a;
				}
				su = a;
			}
		}
	}
	var Zu = {
		getCacheForType: function(e) {
			var t = Sa(Oa), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Sa(Oa).controller.signal;
		}
	}, Qu = typeof WeakMap == "function" ? WeakMap : Map, q = 0, $u = null, J = null, Y = 0, X = 0, ed = null, td = !1, nd = !1, rd = !1, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = 0, dd = null, fd = null, pd = !1, md = 0, hd = 0, gd = Infinity, _d = null, vd = null, yd = 0, bd = null, xd = null, Sd = 0, Cd = 0, wd = null, Td = null, Ed = null, Dd = null, Od = null, kd = 0, Ad = null;
	function jd() {
		return q & 2 && Y !== 0 ? Y & -Y : M.T === null ? _t() : Pf();
	}
	function Md() {
		if (ld === 0) {
			if (!(Y & 536870912) || U) {
				var e = nt;
				nt <<= 1, !(nt & 3932160) && (nt = 262144), ld = e;
			} else ld = 536870912;
		}
		return e = Oo.current, e !== null && (e.flags |= 32), ld;
	}
	function Nd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Pp(mi(e.memoizedProps, n))), Dd === null && (Dd = []), Dd.push(t.bind(null, r));
		}
	}
	function Pd(e, t, n) {
		(e === $u && (X === 2 || X === 9) || e.cancelPendingCommit !== null) && (Vd(e, 0), Rd(e, Y, ld, !1)), ut(e, n), (!(q & 2) || e !== $u) && (e === $u && (!(q & 2) && (sd |= n), ad === 4 && Rd(e, Y, ld, !1)), Ef(e));
	}
	function Fd(e, t, n) {
		if (q & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || ot(e, t), a = r ? Yd(e, t) : qd(e, t, !0), o = r;
		do {
			if (a === 0) {
				nd && !r && Rd(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Ld(n)) {
				a = qd(e, t, !1), o = !1;
				continue;
			}
			if (a === 2) {
				if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
				else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
				if (s !== 0) {
					t = s;
					a: {
						var c = e;
						a = dd;
						var l = c.current.memoizedState.isDehydrated;
						if (l && (Vd(c, s).flags |= 256), s = qd(c, s, !1), s !== 2 && s !== 6) {
							if (rd && !l) {
								c.errorRecoveryDisabledLanes |= o, sd |= o, a = 4;
								break a;
							}
							o = fd, fd = a, o !== null && (fd === null ? fd = o : fd.push.apply(fd, o));
						}
						a = s;
					}
					if (o = !1, a !== 2) continue;
				}
			}
			if (a === 1) {
				Vd(e, 0), Rd(e, t, 0, !0);
				break;
			}
			a: {
				switch (r = e, o = a, o) {
					case 0:
					case 1: throw Error(i(345));
					case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
					case 6:
						Rd(r, t, ld, !td);
						break a;
					case 2:
						fd = null;
						break;
					case 3:
					case 5: break;
					default: throw Error(i(329));
				}
				if ((t & 62914560) === t && (a = md + 300 - ze(), 10 < a)) {
					if (Rd(r, t, ld, !td), at(r, 0, !0) !== 0) break a;
					Sd = t, r.timeoutHandle = gp(Id.bind(null, r, n, fd, _d, pd, t, ld, sd, ud, td, o, "Throttled", -0, 0), a);
					break a;
				}
				Id(r, n, fd, _d, pd, t, ld, sd, ud, td, o, null, -0, 0);
			}
			break;
		} while (1);
		Ef(e);
	}
	function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		if (d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: gn
		}, zl = null, Gu(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? md - ze() : (a & 4194048) === a ? hd - ze() : 0, m = eh(d, m), m !== null)) {
			Sd = a, e.cancelPendingCommit = m(nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Rd(e, a, o, !l);
			return;
		}
		nf(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Ld(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Rr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Rd(e, t, n, r) {
		t = st(e, t), t &= ~cd, t &= ~sd, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - Ze(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && ft(e, n, t);
	}
	function zd() {
		return q & 6 ? !0 : (Df(0, !1), !1);
	}
	function Bd() {
		if (J !== null) {
			if (X === 0) var e = J.return;
			else e = J, ma = pa = null, ns(e), no = null, ro = 0, e = J;
			for (; e !== null;) yl(e.alternate, e), e = e.return;
			J = null;
		}
	}
	function Vd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, _p(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Sd = 0, Bd(), $u = e, J = n = ji(e.current, null), Y = t, X = 0, ed = null, td = !1, nd = ot(e, t), rd = !1, ud = ld = cd = sd = od = ad = 0, fd = dd = null, pd = !1, id = st(e, t), xi(), n;
	}
	function Hd(e, t) {
		W = null, M.H = fc, t === Ka || t === Ja ? (t = eo(), X = 3) : t === qa ? (t = eo(), X = 4) : X = t === Ac ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, ed = t, J === null && (ad = 1, wc(e, zi(t, e.current)));
	}
	function Ud() {
		var e = Oo.current;
		return e === null ? !0 : (Y & 4194048) === Y ? ko === null : (Y & 62914560) === Y || Y & 536870912 ? e === ko : !1;
	}
	function Wd() {
		var e = M.H;
		return M.H = fc, e === null ? fc : e;
	}
	function Gd() {
		var e = M.A;
		return M.A = Zu, e;
	}
	function Kd() {
		ad = 4, td || (Y & 4194048) !== Y && Oo.current !== null || (nd = !0), !(od & 134217727) && !(sd & 134217727) || $u === null || Rd($u, Y, ld, !1);
	}
	function qd(e, t, n) {
		var r = q;
		q |= 2;
		var i = Wd(), a = Gd();
		($u !== e || Y !== t) && (_d = null, Vd(e, t)), t = !1;
		var o = ad;
		a: do
			try {
				if (X !== 0 && J !== null) {
					var s = J, c = ed;
					switch (X) {
						case 8:
							Bd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							Oo.current === null && (t = !0);
							var l = X;
							if (X = 0, ed = null, $d(e, s, c, l), n && nd) {
								o = 0;
								break a;
							}
							break;
						default: l = X, X = 0, ed = null, $d(e, s, c, l);
					}
				}
				Jd(), o = ad;
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, ma = pa = null, q = r, M.H = i, M.A = a, J === null && ($u = null, Y = 0, xi()), o;
	}
	function Jd() {
		for (; J !== null;) Zd(J);
	}
	function Yd(e, t) {
		var n = q;
		q |= 2;
		var r = Wd(), a = Gd();
		$u !== e || Y !== t ? (_d = null, gd = ze() + 500, Vd(e, t)) : nd = ot(e, t);
		a: do
			try {
				if (X !== 0 && J !== null) {
					t = J;
					var o = ed;
					b: switch (X) {
						case 1:
							X = 0, ed = null, $d(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (Xa(o)) {
								X = 0, ed = null, Qd(t);
								break;
							}
							t = function() {
								X !== 2 && X !== 9 || $u !== e || (X = 7), Ef(e);
							}, o.then(t, t);
							break a;
						case 3:
							X = 7;
							break a;
						case 4:
							X = 5;
							break a;
						case 7:
							Xa(o) ? (X = 0, ed = null, Qd(t)) : (X = 0, ed = null, $d(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (J.tag) {
								case 26: s = J.memoizedState;
								case 5:
								case 27:
									var c = J;
									if (s ? Ym(s) : c.stateNode.complete) {
										X = 0, ed = null;
										var l = c.sibling;
										if (l !== null) J = l;
										else {
											var u = c.return;
											u === null ? J = null : (J = u, ef(u));
										}
										break b;
									}
							}
							X = 0, ed = null, $d(e, t, o, 5);
							break;
						case 6:
							X = 0, ed = null, $d(e, t, o, 6);
							break;
						case 8:
							Bd(), ad = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Xd();
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return ma = pa = null, M.H = r, M.A = a, q = n, J === null ? ($u = null, Y = 0, xi(), ad) : 0;
	}
	function Xd() {
		for (; J !== null && !Le();) Zd(J);
	}
	function Zd(e) {
		var t = ul(e.alternate, e, id);
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : J = t;
	}
	function Qd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Wc(n, t, t.pendingProps, t.type, void 0, Y);
				break;
			case 11:
				t = Wc(n, t, t.pendingProps, t.type.render, t.ref, Y);
				break;
			case 5:
				ns(t);
				var r = t;
				r === ea && (U ? (sa(r), r.tag === 5 && r.stateNode != null && (ta = r.stateNode)) : (sa(r), U = !0));
			default: yl(n, t), t = J = Mi(t, id), t = ul(n, t, id);
		}
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : J = t;
	}
	function $d(e, t, n, r) {
		ma = pa = null, ns(t), no = null, ro = 0;
		var i = t.return;
		try {
			if (kc(e, i, t, n, Y)) {
				ad = 1, wc(e, zi(n, e.current)), J = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw J = i, t;
			ad = 1, wc(e, zi(n, e.current)), J = null;
			return;
		}
		t.flags & 32768 ? (U || r === 1 ? e = !0 : nd || Y & 536870912 ? e = !1 : (td = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Oo.current, r !== null && r.tag === 13 && (r.flags |= 16384))), tf(t, e)) : ef(t);
	}
	function ef(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				tf(t, td);
				return;
			}
			e = t.return;
			var n = _l(t.alternate, t, id);
			if (n !== null) {
				J = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				J = t;
				return;
			}
			J = t = e;
		} while (t !== null);
		ad === 0 && (ad = 5);
	}
	function tf(e, t) {
		do {
			var n = vl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, J = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				J = e;
				return;
			}
			J = e = n;
		} while (e !== null);
		ad = 6, J = null;
	}
	function nf(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			df();
		while (yd !== 0);
		if (q & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === $u && (J = $u = null, Y = 0), xd = t, bd = e, Sd = n, wd = a, Td = r, rf(e, t, n, s, c, l, f);
		}
	}
	function rf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (Cd = s, s |= bi, dt(e, n, s, r, i, a), Dd = null, (n & 335544064) === n ? (Od = Na(e), r = 10262) : (Od = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, yf(Ue, function() {
			return ff(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), Rl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = M.T, M.T = null, i = N.p, N.p = 2, a = q, q |= 4;
			try {
				fu(e, t, n);
			} finally {
				q = a, N.p = i, M.T = r;
			}
		}
		yd = 1, Rl ? Ed = Mp(o, e.containerInfo, Od, sf, cf, of, lf, ff, af, null, null) : (sf(), cf(), lf());
	}
	function af(e) {
		if (yd !== 0) {
			var t = bd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function of() {
		yd === 3 && (yd = 0, Nu(xd, bd), yd = 4);
	}
	function sf() {
		if (yd === 1) {
			yd = 0;
			var e = bd, t = xd, n = Sd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = M.T, M.T = null;
				var i = N.p;
				N.p = 2;
				var a = q;
				q |= 4;
				try {
					lu = uu = !1, ku(t, e, n), n = cp;
					var o = Wr(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && Ur(s.ownerDocument.documentElement, s)) {
						if (c !== null && Gr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Hr(s, h), v = Hr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					gh = !!sp, cp = sp = null;
				} finally {
					q = a, N.p = i, M.T = r;
				}
			}
			e.current = t, yd = 2;
		}
	}
	function cf() {
		if (yd === 2) {
			yd = 0;
			var e = bd, t = xd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = M.T, M.T = null;
				var r = N.p;
				N.p = 2;
				var i = q;
				q |= 4;
				try {
					mu(e, t.alternate, t);
				} finally {
					q = i, N.p = r, M.T = n;
				}
			}
			yd = 3;
		}
	}
	function lf() {
		if (yd === 4 || yd === 3) {
			yd = 0;
			var e = Ed;
			Ed = null, Re();
			var t = bd, n = xd, r = Sd, i = Td, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? yd = 5 : (yd = 0, xd = bd = null, uf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (vd = null), gt(r), n = n.stateNode, Ye && typeof Ye.onCommitFiberRoot == "function") try {
				Ye.onCommitFiberRoot(Je, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = M.T, a = N.p, N.p = 2, M.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					M.T = n, N.p = a;
				}
			}
			if (i = Dd, o = Od, Od = null, i !== null && (Dd = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			Sd & 3 && df(), Ef(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Ad ? kd++ : (kd = 0, Ad = t) : (kd = 0, Ad = null), Df(0, !1);
		}
	}
	function uf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Aa(t)));
	}
	function df() {
		return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
	}
	function ff() {
		if (yd !== 5) return !1;
		var e = bd, t = Cd;
		Cd = 0;
		var n = gt(Sd), r = M.T, a = N.p;
		try {
			N.p = 32 > n ? 32 : n, M.T = null, n = wd, wd = null;
			var o = bd, s = Sd;
			if (yd = 0, xd = bd = null, Sd = 0, q & 6) throw Error(i(331));
			var c = q;
			if (q |= 4, Ju(o.current), Bu(o, o.current, s, n), q = c, Df(0, !1), Ye && typeof Ye.onPostCommitFiberRoot == "function") try {
				Ye.onPostCommitFiberRoot(Je, o);
			} catch {}
			return !0;
		} finally {
			N.p = a, M.T = r, uf(e, t);
		}
	}
	function pf(e, t, n) {
		t = zi(n, t), t = Ec(e.stateNode, t, 2), e = ho(e, t, 2), e !== null && (ut(e, 2), Ef(e));
	}
	function Z(e, t, n) {
		if (e.tag === 3) pf(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				pf(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vd === null || !vd.has(r))) {
					e = zi(n, e), n = Dc(2), r = ho(t, n, 2), r !== null && (Oc(n, r, t, e), ut(r, 2), Ef(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function mf(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Qu();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (rd = !0, i.add(n), e = hf.bind(null, e, t, n), t.then(e, e));
	}
	function hf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, $u === e && (Y & n) === n && (ad === 4 || ad === 3 && (Y & 62914560) === Y && 300 > ze() - md ? q & 2 ? cd |= n : Vd(e, 0) : cd |= n, ud === Y && (ud = 0)), Ef(e);
	}
	function gf(e, t) {
		t === 0 && (t = B()), e = wi(e, t), e !== null && (ut(e, t), Ef(e));
	}
	function _f(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), gf(e, n);
	}
	function vf(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), gf(e, n);
	}
	function yf(e, t) {
		return Fe(e, t);
	}
	var bf = null, xf = null, Sf = !1, Cf = !1, wf = !1, Tf = 0;
	function Ef(e) {
		e !== xf && e.next === null && (xf === null ? bf = xf = e : xf = xf.next = e), Cf = !0, Sf || (Sf = !0, Nf());
	}
	function Df(e, t) {
		if (!wf && Cf) {
			wf = !0;
			do
				for (var n = !1, r = bf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - Ze(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Mf(r, a));
						} else a = Y, a = at(r, r === $u ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || ot(r, a) || (n = !0, Mf(r, a));
					}
					r = r.next;
				}
			while (n);
			wf = !1;
		}
	}
	function Of() {
		kf();
	}
	function kf() {
		Cf = Sf = !1;
		var e = 0;
		Tf !== 0 && hp() && (e = Tf);
		for (var t = ze(), n = null, r = bf; r !== null;) {
			var i = r.next, a = Af(r, t);
			a === 0 ? (r.next = null, n === null ? bf = i : n.next = i, i === null && (xf = n)) : (n = r, (e !== 0 || a & 3) && (Cf = !0)), r = i;
		}
		yd !== 0 && yd !== 5 || Df(e, !1), Tf !== 0 && (Tf = 0);
	}
	function Af(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - Ze(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = ct(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = $u, n = Y, n = at(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (X === 2 || X === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ie(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || ot(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Ie(r), gt(n)) {
				case 2:
				case 8:
					n = He;
					break;
				case 32:
					n = Ue;
					break;
				case 268435456:
					n = Ge;
					break;
				default: n = Ue;
			}
			return r = jf.bind(null, e), n = Fe(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Ie(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function jf(e, t) {
		if (yd !== 0 && yd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (df() && e.callbackNode !== n) return null;
		var r = Y;
		return r = at(e, e === $u ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Fd(e, r, t), Af(e, ze()), e.callbackNode != null && e.callbackNode === n ? jf.bind(null, e) : null);
	}
	function Mf(e, t) {
		if (df()) return null;
		Fd(e, t, !0);
	}
	function Nf() {
		bp(function() {
			q & 6 ? Fe(Ve, Of) : kf();
		});
	}
	function Pf() {
		if (Tf === 0) {
			var e = Ia;
			e === 0 && (e = tt, tt <<= 1, !(tt & 261888) && (tt = 256)), Tf = e;
		}
		return Tf;
	}
	function Ff(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : hn(e);
	}
	function If(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Ff((i[xt] || null).action), o = r.submitter;
			o && (t = (t = o[xt] || null) ? Ff(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new In("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Tf !== 0) {
								var e = new FormData(i, o);
								Qs(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), Qs(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var Lf = 0; Lf < di.length; Lf++) {
		var Rf = di[Lf];
		fi(Rf.toLowerCase(), "on" + (Rf[0].toUpperCase() + Rf.slice(1)));
	}
	fi(ri, "onAnimationEnd"), fi(ii, "onAnimationIteration"), fi(ai, "onAnimationStart"), fi("dblclick", "onDoubleClick"), fi("focusin", "onFocus"), fi("focusout", "onBlur"), fi(oi, "onTransitionRun"), fi(si, "onTransitionStart"), fi(ci, "onTransitionCancel"), fi(li, "onTransitionEnd"), zt("onMouseEnter", ["mouseout", "mouseover"]), zt("onMouseLeave", ["mouseout", "mouseover"]), zt("onPointerEnter", ["pointerout", "pointerover"]), zt("onPointerLeave", ["pointerout", "pointerover"]), Rt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Rt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Rt("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Rt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Rt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Rt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var zf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zf));
	function Vf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						_i(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						_i(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Q(e, t) {
		var n = t[Ct];
		n === void 0 && (n = t[Ct] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Gf(t, e, 2, !1), n.add(r));
	}
	function Hf(e, t, n) {
		var r = 0;
		t && (r |= 4), Gf(n, e, r, t);
	}
	var Uf = "_reactListening" + Math.random().toString(36).slice(2);
	function Wf(e) {
		if (!e[Uf]) {
			e[Uf] = !0, It.forEach(function(t) {
				t !== "selectionchange" && (Bf.has(t) || Hf(t, !1, e), Hf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Uf] || (t[Uf] = !0, Hf("selectionchange", !1, t));
		}
	}
	function Gf(e, t, n, r) {
		switch (Ch(t)) {
			case 2:
				var i = _h;
				break;
			case 8:
				i = vh;
				break;
			default: i = yh;
		}
		n = i.bind(null, t, n, e), i = void 0, !En || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Kf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = At(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		Cn(function() {
			var r = a, i = vn(n), s = [];
			a: {
				var c = ui.get(e);
				if (c !== void 0) {
					var l = In, u = e;
					switch (e) {
						case "keypress": if (jn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = er;
							break;
						case "focusin":
							u = "focus", l = Gn;
							break;
						case "focusout":
							u = "blur", l = Gn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Gn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = Un;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Wn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = rr;
							break;
						case ri:
						case ii:
						case ai:
							l = Kn;
							break;
						case li:
							l = ir;
							break;
						case "scroll":
						case "scrollend":
							l = Rn;
							break;
						case "wheel":
							l = ar;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = qn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = tr;
							break;
						case "submit":
							l = nr;
							break;
						case "toggle":
						case "beforetoggle": l = or;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = wn(m, p), g != null && d.push(qf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== _n && (u = n.relatedTarget || n.fromElement) && (At(u) || u[St])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? At(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Un, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = tr, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : Mt(c), h = l == null ? u : Mt(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, At(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? ee(c, l, Yf) : null, c !== null && Xf(s, u, c, d, !1), l !== null && f !== null && Xf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? Mt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = Er;
					else if (br(c)) {
						if (Dr) _ = Ir;
						else {
							_ = Pr;
							var v = Nr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && fn(r.elementType) && (_ = Er) : _ = Fr;
					if (_ &&= _(e, r)) {
						xr(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? Mt(r) : window, e) {
					case "focusin":
						(br(v) || v.contentEditable === "true") && (qr = v, Jr = r, Yr = null);
						break;
					case "focusout":
						Yr = Jr = qr = null;
						break;
					case "mousedown":
						Xr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Xr = !1, Zr(s, n, i);
						break;
					case "selectionchange": if (Kr) break;
					case "keydown":
					case "keyup": Zr(s, n, i);
				}
				var y;
				if (cr) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else gr ? mr(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (dr && n.locale !== "ko" && (gr || b !== "onCompositionStart" ? b === "onCompositionEnd" && gr && (y = H()) : (On = i, kn = "value" in On ? On.value : On.textContent, gr = !0)), v = Jf(r, b), 0 < v.length && (b = new Jn(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = hr(n), y !== null && (b.data = y)))), (y = ur ? _r(e, n) : vr(e, n)) && (b = Jf(r, "onBeforeInput"), 0 < b.length && (v = new Jn("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), If(s, e, r, n, i);
			}
			Vf(s, t);
		});
	}
	function qf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Jf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = wn(e, n), i != null && r.unshift(qf(e, i, a)), i = wn(e, t), i != null && r.push(qf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Yf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Xf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = wn(n, a), l != null && o.unshift(qf(n, l, c))) : i || (l = wn(n, a), l != null && o.push(qf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Zf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
	function $f(e) {
		return (typeof e == "string" ? e : "" + e).replace(Zf, "\n").replace(Qf, "");
	}
	function ep(e, t) {
		return t = $f(t), $f(e) === t;
	}
	function $(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || cn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && cn(e, "" + r);
				else return;
				break;
			case "className":
				Kt(e, "class", r);
				break;
			case "tabIndex":
				Kt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Kt(e, n, r);
				break;
			case "style":
				dn(e, r, o);
				return;
			case "data": if (t !== "object") {
				Kt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = hn(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && $(e, t, "name", a.name, a, null), $(e, t, "formEncType", a.formEncType, a, null), $(e, t, "formMethod", a.formMethod, a, null), $(e, t, "formTarget", a.formTarget, a, null)) : ($(e, t, "encType", a.encType, a, null), $(e, t, "method", a.method, a, null), $(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = hn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = gn);
				return;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = hn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Q("beforetoggle", e), Q("toggle", e), Gt(e, "popover", r);
				break;
			case "xlinkActuate":
				qt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				qt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				qt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				qt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				qt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				qt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				qt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				qt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				qt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Gt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = pn.get(n) || n, Gt(e, n, r);
			else return;
		}
		V = !0;
	}
	function tp(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				dn(e, r, o);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") cn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") cn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = gn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Lt.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[xt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					V = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Gt(e, n, r);
				}
				return;
		}
		V = !0;
	}
	function np(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Q("error", e), Q("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: $(e, t, o, s, n, null);
					}
				}
				a && $(e, t, "srcSet", n.srcSet, n, null), r && $(e, t, "src", n.src, n, null);
				return;
			case "input":
				Q("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: $(e, t, r, d, n, null);
					}
				}
				nn(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in Q("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: $(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && an(e, !!r, n, !0) : an(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Q("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: $(e, t, s, c, n, null);
				}
				sn(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: $(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Q("beforetoggle", e), Q("toggle", e), Q("cancel", e), Q("close", e);
				break;
			case "iframe":
			case "object":
				Q("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < zf.length; r++) Q(zf[r], e);
				break;
			case "image":
				Q("error", e), Q("load", e);
				break;
			case "details":
				Q("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Q("error", e), Q("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: $(e, t, u, r, n, null);
				}
				return;
			default: if (fn(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && tp(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && $(e, t, c, r, n, null));
	}
	var rp = {};
	function ip(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || $(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (V = !0), o = m;
							break;
						case "name":
							m !== f && (V = !0), a = m;
							break;
						case "checked":
							m !== f && (V = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (V = !0), d = m;
							break;
						case "value":
							m !== f && (V = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (V = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && $(e, t, p, m, r, f);
					}
				}
				tn(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || $(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (V = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (V = !0), c = o;
						break;
					case "multiple": o !== l && (V = !0), s = o;
					default: o !== l && $(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? an(e, !!n, n ? [] : "", !1) : an(e, !!n, t, !0)) : an(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: $(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (V = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (V = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && $(e, t, s, a, r, o);
				}
				on(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: $(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (V = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: $(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: $(e, t, u, p, r, m);
				}
				return;
			default: if (fn(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && tp(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || tp(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m);
	}
	function ap(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function op() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && ap(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && ap(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var sp = null, cp = null;
	function lp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function up(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function dp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function fp(e, t, n, r) {
		return n = lp(n).createElement(e), n[bt] = r, n[xt] = t, np(n, e, t), Pt(n), n;
	}
	function pp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var mp = null;
	function hp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== mp && (mp = e, !0) : (mp = null, !1);
	}
	var gp = typeof setTimeout == "function" ? setTimeout : void 0, _p = typeof clearTimeout == "function" ? clearTimeout : void 0, vp = typeof Promise == "function" ? Promise : void 0, yp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : gp, bp = typeof queueMicrotask == "function" ? queueMicrotask : vp === void 0 ? gp : function(e) {
		return vp.resolve(null).then(e).catch(xp);
	};
	function xp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Sp(e) {
		return e === "head";
	}
	function Cp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Hh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") _m(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, _m(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[Dt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && _m(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function wp(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Tp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Ep(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Dp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Op(e) {
		return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function kp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Dp(t, n, e);
	}
	function Ap(e) {
		return e.documentElement.clientHeight;
	}
	function jp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Mp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Ap(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Xm(f), u > $m) {
									s.length = o;
									break;
								}
								f = new Promise(jp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Np(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Np.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : E({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Np.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Np.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Pp(e) {
		return {
			name: e,
			group: new Np("group", e),
			imagePair: new Np("image-pair", e),
			old: new Np("old", e),
			new: new Np("new", e)
		};
	}
	function Fp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Fp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Bp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Rp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), f(this._fragmentFiber.child, !1, Ip, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Ip(e, t, n, r) {
		return _(e).addEventListener(t, n, r), !1;
	}
	Fp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Rp(i.optionsOrUseCapture), f(this._fragmentFiber.child, !1, Lp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Lp(e, t, n, r) {
		return _(e).removeEventListener(t, n, r), !1;
	}
	function Rp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function zp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Bp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = zp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Fp.prototype.dispatchEvent = function(e) {
		var t = p(this._fragmentFiber);
		if (t === null) return !0;
		t = _(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Fp.prototype.focus = function(e) {
		f(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
	};
	function Vp(e, t) {
		return e.tag !== 6 && (e = _(e), pm(e, t));
	}
	Fp.prototype.focusLast = function(e) {
		var t = [];
		f(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
	};
	function Hp(e, t) {
		return t.push(e), !1;
	}
	Fp.prototype.blur = function() {
		var e = p(this._fragmentFiber);
		e !== null && (e = _(e), e = lp(e).activeElement, e !== null && f(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
	};
	function Up(e, t) {
		return e.tag !== 6 && (e = _(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Fp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), f(this._fragmentFiber.child, !1, Wp, e, void 0, void 0);
	};
	function Wp(e, t) {
		return e.tag !== 6 && (e = _(e), t.observe(e), !1);
	}
	Fp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), f(this._fragmentFiber.child, !1, Gp, e, void 0, void 0);
			for (var n = t = 0; n < Kp.length; n++) {
				var r = Kp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Kp[t++] = r;
			}
			Kp.length = t;
		}
	};
	function Gp(e, t) {
		return e.tag !== 6 && (e = _(e), t.unobserve(e), !1);
	}
	var Kp = [], qp = !1;
	function Jp(e, t, n) {
		Kp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), qp || (qp = !0, mm(function() {
			qp = !1;
			var e = Kp;
			Kp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Fp.prototype.getClientRects = function() {
		var e = [];
		return f(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e;
	};
	function Yp(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = _(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Fp.prototype.getRootNode = function(e) {
		var t = p(this._fragmentFiber);
		return t === null ? this : _(t).getRootNode(e);
	}, Fp.prototype.compareDocumentPosition = function(e) {
		var t = p(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		f(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
		var r = _(t);
		if (n.length === 0) {
			if (n = r, m(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = h(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = _(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = _(n[0]), i = _(n[n.length - 1]);
		var a = m(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function Xp(e, t, n, r, i) {
		var a = At(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = p(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = ee(n, a, w), t === null ? t = !1 : (f(t, !0, b, a, n), a = v, v = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = ee(r, a, w), t === null ? t = !1 : (f(t, !0, S, a, r), a = v, y = v = null, t = a !== null)), t) : !1;
	}
	function Zp(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Fp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(i(566));
		var t = [];
		f(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = h(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || p(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = _(r), Zp(e, n);
				return;
			}
			if (r = _(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var a = t[r];
			a.tag === 6 ? (a = _(a), Zp(a, n)) : _(a).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function Qp(e, t) {
		return e = _(e), $p(e, t), !1;
	}
	function $p(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function em(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < Kp.length; i++) {
				var a = Kp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Kp[r++] = a);
			}
			Kp.length = r, n.observe(e);
		}), $p(e, t));
	}
	function tm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Jp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function nm(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					nm(n), kt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function rm(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[Dt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lm(e.nextSibling), e === null) break;
		}
		return null;
	}
	function im(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function am(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function om(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lm(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var um = null;
	function dm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lm(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function fm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pm(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function mm(e) {
		yp(function() {
			yp(function(t) {
				return e(t);
			});
		});
	}
	function hm(e, t, n) {
		switch (t = lp(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function gm(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && $(e, t, r, null, rp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === gn && (e.onclick = null), kt(e);
	}
	function _m(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		kt(e);
	}
	var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
	function bm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var xm = N.d;
	N.d = {
		f: Sm,
		r: Cm,
		D: Em,
		C: Dm,
		L: Om,
		m: km,
		X: jm,
		S: Am,
		M: Mm
	};
	function Sm() {
		var e = xm.f(), t = zd();
		return e || t;
	}
	function Cm(e) {
		var t = jt(e);
		t !== null && t.tag === 5 && t.type === "form" ? ec(t) : xm.r(e);
	}
	var wm = typeof document > "u" ? null : document;
	function Tm(e, t, n) {
		var r = wm;
		if (r && typeof t == "string" && t) {
			var i = en(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), ym.has(i) || (ym.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), np(t, "link", e), Pt(t), r.head.appendChild(t)));
		}
	}
	function Em(e) {
		xm.D(e), Tm("dns-prefetch", e, null);
	}
	function Dm(e, t) {
		xm.C(e, t), Tm("preconnect", e, t);
	}
	function Om(e, t, n) {
		xm.L(e, t, n);
		var r = wm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + en(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + en(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + en(n.imageSizes) + "\"]")) : i += "[href=\"" + en(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Pm(e);
					break;
				case "script": a = Rm(e);
			}
			if (!(vm.has(a) || (e = E({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), vm.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Fm(a)) || t === "script" && r.querySelector(zm(a))))) {
				var o = r.createElement("link");
				np(o, "link", e), t === "style" && (o[Ot] = !0, o.onload = o.onerror = function() {
					Ft(o);
				}), Pt(o), r.head.appendChild(o);
			}
		}
	}
	function km(e, t) {
		xm.m(e, t);
		var n = wm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + en(r) + "\"][href=\"" + en(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Rm(e);
			}
			if (!vm.has(a) && (e = E({
				rel: "modulepreload",
				href: e
			}, t), vm.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(zm(a))) return;
				}
				r = n.createElement("link"), np(r, "link", e), Pt(r), n.head.appendChild(r);
			}
		}
	}
	function Am(e, t, n) {
		xm.S(e, t, n);
		var r = wm;
		if (r && e) {
			var i = Nt(r).hoistableStyles, a = Pm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Fm(a))) s.loading = 5;
				else {
					e = E({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = vm.get(a)) && Hm(e, n);
					var c = o = r.createElement("link");
					Pt(c), np(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Vm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function jm(e, t) {
		xm.X(e, t);
		var n = wm;
		if (n && e) {
			var r = Nt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = E({
				src: e,
				async: !0
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Pt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Mm(e, t) {
		xm.M(e, t);
		var n = wm;
		if (n && e) {
			var r = Nt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = E({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Pt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t, n, r) {
		var a = (a = we.current) ? bm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pm(n.href), t = Nt(a).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Pm(n.href);
					var o = Nt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Fm(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = vm.get(e), o || (o = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, vm.set(e, o)), Lm(a, e, o, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Rm(n), t = Nt(a).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Pm(e) {
		return "href=\"" + en(e) + "\"";
	}
	function Fm(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Im(e) {
		return E({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Lm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Ot]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Ot] = !0, t.onload = t.onerror = Ft.bind(null, t), np(t, "link", n), Pt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Rm(e) {
		return "[src=\"" + en(e) + "\"]";
	}
	function zm(e) {
		return "script[async]" + e;
	}
	function Bm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + en(n.href) + "\"]");
				if (r) return t.instance = r, Pt(r), r;
				var a = E({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Pt(r), np(r, "style", a), Vm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Pm(n.href);
				var o = e.querySelector(Fm(a));
				if (o) return t.state.loading |= 4, t.instance = o, Pt(o), o;
				r = Im(n), (a = vm.get(a)) && Hm(r, a), o = (e.ownerDocument || e).createElement("link"), Pt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), np(o, "link", r), t.state.loading |= 4, Vm(o, n.precedence, e), t.instance = o;
			case "script": return o = Rm(n.src), (a = e.querySelector(zm(o))) ? (t.instance = a, Pt(a), a) : (r = n, (a = vm.get(o)) && (r = E({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Pt(a), np(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Vm(r, n.precedence, e));
		return t.instance;
	}
	function Vm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Hm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Wm = null;
	function Gm(e, t, n) {
		if (Wm === null) {
			var r = /* @__PURE__ */ new Map(), i = Wm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Wm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[Dt] || a[bt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Km(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function qm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Jm(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function Ym(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Xm(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function Zm(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Xm(t), e.suspenseyImages.push(t)), e = rh.bind(e), t.decode().then(e, e));
	}
	function Qm(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Pm(r.href), a = t.querySelector(Fm(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Pt(a);
					return;
				}
				a = t.ownerDocument || t, r = Im(r), (i = vm.get(i)) && Hm(r, i), a = a.createElement("link"), Pt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), np(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = nh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var $m = 0;
	function eh(e, t) {
		return e.stylesheets && e.count === 0 && ah(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && ah(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > $m ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function th(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) ah(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function nh() {
		this.count--, th(this);
	}
	function rh() {
		this.imgCount--, th(this);
	}
	var ih = null;
	function ah(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ih = /* @__PURE__ */ new Map(), t.forEach(oh, e), ih = null, nh.call(e));
	}
	function oh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ih.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ih.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = nh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var sh = {
		$$typeof: j,
		Provider: null,
		Consumer: null,
		_currentValue: ye,
		_currentValue2: ye,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = lt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lt(0), this.hiddenUpdates = lt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = ki(3, null, null, t), e.current = a, a.stateNode = e, t = ka(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, fo(a), e;
	}
	function uh(e) {
		return e ? (e = Di, e) : Di;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = mo(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = ho(e, r, t), n !== null && (Pd(n, e, t), go(n, e, t));
	}
	function fh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ph(e, t) {
		fh(e, t), (e = e.alternate) && fh(e, t);
	}
	function mh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = wi(e, 67108864);
			t !== null && Pd(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = jd();
			t = ht(t);
			var n = wi(e, t);
			n !== null && Pd(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = M.T;
		M.T = null;
		var a = N.p;
		try {
			N.p = 2, yh(e, t, n, r);
		} finally {
			N.p = a, M.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = M.T;
		M.T = null;
		var a = N.p;
		try {
			N.p = 8, yh(e, t, n, r);
		} finally {
			N.p = a, M.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Kf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = jt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = it(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - Ze(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Ef(a), !(q & 6) && (gd = ze() + 500, Df(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = wi(a, 2), s !== null && Pd(s, a, 2), zd(), ph(a, 2);
					}
					if (a = bh(r), a === null && Kf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Kf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = vn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = At(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return xh = e, null;
	}
	function Ch(e) {
		switch (e) {
			case "beforetoggle":
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
			case "seeked":
			case "submit":
			case "toggle":
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
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
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
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Be()) {
				case Ve: return 2;
				case He: return 8;
				case Ue:
				case We: return 32;
				case Ge: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var wh = !1, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Mh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Th = null;
				break;
			case "dragenter":
			case "dragleave":
				Eh = null;
				break;
			case "mouseover":
			case "mouseout":
				Dh = null;
				break;
			case "pointerover":
			case "pointerout":
				Oh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": kh.delete(t.pointerId);
		}
	}
	function Nh(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = jt(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ph(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Th = Nh(Th, e, t, n, r, i), !0;
			case "dragenter": return Eh = Nh(Eh, e, t, n, r, i), !0;
			case "mouseover": return Dh = Nh(Dh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Fh(e) {
		var t = At(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, vt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, vt(e.priority, function() {
							hh(n);
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
	function Ih(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = bh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				_n = r, n.target.dispatchEvent(r), _n = null;
			} else return t = jt(n), t !== null && mh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Lh(e, t, n) {
		Ih(e) && n.delete(t);
	}
	function Rh() {
		wh = !1, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
	}
	function zh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, wh || (wh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
	}
	var Bh = null;
	function Vh(e) {
		Bh !== e && (Bh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Bh === e && (Bh = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Sh(r || n) === null) continue;
					break;
				}
				var a = jt(n);
				a !== null && (e.splice(t, 3), t -= 3, Qs(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Hh(e) {
		function t(t) {
			return zh(t, e);
		}
		Th !== null && zh(Th, e), Eh !== null && zh(Eh, e), Dh !== null && zh(Dh, e), Oh.forEach(t), kh.forEach(t);
		for (var n = 0; n < Ah.length; n++) {
			var r = Ah[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Ah.length && (n = Ah[0], n.blockedOn === null);) Fh(n), n.blockedOn === null && Ah.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[xt] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[xt] || null) s = o.formAction;
					else if (Sh(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vh(n);
			}
		}
	}
	function Uh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Wh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.render = Wh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		dh(n, jd(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), zd(), t[St] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = _t();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
			Ah.splice(n, 0, e), n === 0 && Fh(e);
		}
	};
	var Kh = n.version;
	if (Kh !== "19.3.0") throw Error(i(527, Kh, "19.3.0"));
	N.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = u(t), e = e === null ? null : d(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: M,
		reconcilerVersion: "19.3.0"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			Je = Jh.inject(qh), Ye = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = xc, s = Sc, c = Cc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[St] = t.current, Wf(e), new Wh(t);
	};
})), E = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = ee();
})), D = /* @__PURE__ */ c(x(), 1), te = E(), O = ".react-grid-layout{transition:height .2s;position:relative}.react-grid-item{transition:left .2s,top .2s,width .2s,height .2s}.react-grid-item img{pointer-events:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{z-index:1;will-change:width, height;transition:none}.react-grid-item.react-draggable-dragging{z-index:3;will-change:transform;transition:none}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{opacity:.2;z-index:2;user-select:none;background:red;transition-duration:.1s}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{opacity:0;width:20px;height:20px;position:absolute}.react-grid-item:hover>.react-resizable-handle{opacity:1}.react-grid-item>.react-resizable-handle:after{content:\"\";border-bottom:2px solid #0006;border-right:2px solid #0006;width:5px;height:5px;position:absolute;bottom:3px;right:3px}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{cursor:sw-resize;bottom:0;left:0;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{cursor:se-resize;bottom:0;right:0}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{cursor:nw-resize;top:0;left:0;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{cursor:ne-resize;top:0;right:0;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{cursor:ew-resize;margin-top:-10px;top:50%}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{cursor:ns-resize;margin-left:-10px;left:50%}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", k = ".react-resizable{position:relative}.react-resizable-handle{box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:100% 100%;background-repeat:no-repeat;background-origin:content-box;width:20px;height:20px;padding:0 3px 3px 0;position:absolute}.react-resizable-handle-sw{cursor:sw-resize;bottom:0;left:0;transform:rotate(90deg)}.react-resizable-handle-se{cursor:se-resize;bottom:0;right:0}.react-resizable-handle-nw{cursor:nw-resize;top:0;left:0;transform:rotate(180deg)}.react-resizable-handle-ne{cursor:ne-resize;top:0;right:0;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{cursor:ew-resize;margin-top:-10px;top:50%}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{cursor:ns-resize;margin-left:-10px;left:50%}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", ne = "#widget-grid.grid{grid-template-columns:none!important;grid-auto-flow:initial!important;display:block!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px;display:flex}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{background:#ffffff14;border:1px solid #ffffff1f;border-radius:12px;padding:9px 13px;color:#fff!important;white-space:nowrap!important;hyphens:none!important;word-break:normal!important}.argus-btn-reset-dashboard{color:#f87171!important;background:#ef44441f!important;border:1px solid #ef444452!important;margin-left:14px!important}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline-offset:2px;outline:3px solid #76b7ff}.argus-dashboard__feedback{color:#b9d9ff;text-align:right;min-height:20px;padding:0 18px;font-size:12px}.argus-dashboard__visibility{flex-wrap:wrap;gap:6px;display:flex}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);border:2px solid #5ea8ffc7;border-radius:24px;box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{border-radius:24px;width:100%;height:100%;position:relative;overflow:visible;box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;border:1px solid var(--v2066-border,#ffffff14)!important;background:var(--v2066-glass,#ffffff0f)!important;-webkit-backdrop-filter:blur(24px)saturate(145%)!important}.argus-widget .panel{box-shadow:none!important;-webkit-backdrop-filter:none!important;background:0 0!important;border:none!important}.argus-widget__edit-header{align-items:center;gap:10px;padding:8px 12px;display:none}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;overflow:hidden}.argus-widget__drag-handle{cursor:grab;touch-action:none;width:44px;height:40px}.argus-widget__options{position:relative}.argus-widget__options summary{box-sizing:border-box;cursor:pointer;place-items:center;width:38px;height:38px;list-style:none;display:grid}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{z-index:140;background:#0f1623f5;border:1px solid #ffffff24;border-radius:16px;gap:8px;min-width:210px;padding:12px;display:grid;position:absolute;top:44px;right:0;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{grid-template-columns:repeat(4,1fr);gap:5px;display:grid}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:visible}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{overscroll-behavior:contain!important;box-sizing:border-box!important;grid-area:auto!important;width:100%!important;height:100%!important;display:block!important;overflow:hidden auto!important}.argus-widget__content>.panel:has(#hero),.argus-widget__content>.panel:has(.hero),.argus-widget__content>.panel:has(#hero-profile-container),.argus-widget:has(#hero),.argus-widget:has(.hero),.argus-dashboard-grid .react-grid-item:has(#hero),.argus-dashboard-grid .react-grid-item:first-child{z-index:50!important;overflow:visible!important}#profile-dropdown.hero-profile-dropdown{z-index:999999!important;max-height:calc(100vh - 120px)!important;position:absolute!important;top:calc(100% + 12px)!important;right:0!important;overflow-y:auto!important}.argus-dashboard-grid .react-resizable-handle{background:#131925db;border:1px solid #ffffff2e;border-radius:10px;width:34px;height:34px;bottom:8px;right:8px;display:none!important}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{border-color:#9bc7ff;width:10px;height:10px;bottom:9px;right:9px}.alarm-configuration-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px;display:grid}@media (width<=760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;inset:auto 16px 16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}:host([argus-contrast=high]) .argus-widget,:host(.argus-contrast-high) .argus-widget{-webkit-backdrop-filter:blur(28px)saturate(130%)!important;background:linear-gradient(145deg,#0b101af2,#070a12f7)!important;border:1px solid #ffffff3d!important;box-shadow:0 16px 42px #000000a6,inset 0 1px #ffffff24!important}:host([argus-contrast=high]) .argus-widget strong,:host(.argus-contrast-high) .argus-widget strong,:host([argus-contrast=high]) .argus-widget .panel h1,:host(.argus-contrast-high) .argus-widget .panel h1,:host([argus-contrast=high]) .argus-widget .panel h2,:host(.argus-contrast-high) .argus-widget .panel h2,:host([argus-contrast=high]) .argus-widget .panel h3,:host(.argus-contrast-high) .argus-widget .panel h3,:host([argus-contrast=high]) .argus-widget .panel h4,:host(.argus-contrast-high) .argus-widget .panel h4,:host([argus-contrast=high]) .argus-widget .panel-title,:host(.argus-contrast-high) .argus-widget .panel-title,:host([argus-contrast=high]) .argus-widget .section-title,:host(.argus-contrast-high) .argus-widget .section-title,:host([argus-contrast=high]) .argus-widget .setting-label,:host(.argus-contrast-high) .argus-widget .setting-label{color:#fff!important;text-shadow:0 1px 2px #00000080!important}:host([argus-contrast=high]) .argus-widget p,:host(.argus-contrast-high) .argus-widget p,:host([argus-contrast=high]) .argus-widget small,:host(.argus-contrast-high) .argus-widget small,:host([argus-contrast=high]) .argus-widget .hint,:host(.argus-contrast-high) .argus-widget .hint,:host([argus-contrast=high]) .argus-widget .muted,:host(.argus-contrast-high) .argus-widget .muted,:host([argus-contrast=high]) .argus-widget .setting-help,:host(.argus-contrast-high) .argus-widget .setting-help,:host([argus-contrast=high]) .argus-widget .small,:host(.argus-contrast-high) .argus-widget .small{color:#cbd5e1!important;opacity:1!important}:host([argus-contrast=high]) .argus-dashboard__toolbar button,:host(.argus-contrast-high) .argus-dashboard__toolbar button,:host([argus-contrast=high]) .argus-widget__drag-handle,:host(.argus-contrast-high) .argus-widget__drag-handle,:host([argus-contrast=high]) .argus-widget__options summary,:host(.argus-contrast-high) .argus-widget__options summary,:host([argus-contrast=high]) .argus-widget__menu button,:host(.argus-contrast-high) .argus-widget__menu button{color:#fff!important;background:#ffffff1f!important;border:1px solid #ffffff42!important}:host([argus-contrast=high]) .argus-dashboard__feedback,:host(.argus-contrast-high) .argus-dashboard__feedback{color:#93c5fd!important;font-weight:600!important}:host([argus-contrast=high]) .argus-widget__menu,:host(.argus-contrast-high) .argus-widget__menu{background:#0a0e17fa!important;border:1px solid #ffffff40!important;box-shadow:0 20px 50px #0009!important}@media (prefers-contrast:more){.argus-widget{-webkit-backdrop-filter:blur(28px)saturate(130%)!important;background:linear-gradient(145deg,#0b101af2,#070a12f7)!important;border:1px solid #ffffff3d!important;box-shadow:0 16px 42px #000000a6,inset 0 1px #ffffff24!important}.argus-widget strong,.argus-widget .panel h1,.argus-widget .panel h2,.argus-widget .panel h3,.argus-widget .panel h4,.argus-widget .panel-title,.argus-widget .section-title,.argus-widget .setting-label{color:#fff!important;text-shadow:0 1px 2px #00000080!important}.argus-widget p,.argus-widget small,.argus-widget .hint,.argus-widget .muted,.argus-widget .setting-help,.argus-widget .small{color:#cbd5e1!important;opacity:1!important}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{color:#fff!important;background:#ffffff1f!important;border:1px solid #ffffff42!important}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline-offset:2px!important;outline:3px solid #60a5fa!important}.argus-dashboard__feedback{color:#93c5fd!important;font-weight:600!important}.argus-widget__menu{background:#0a0e17fa!important;border:1px solid #ffffff40!important;box-shadow:0 20px 50px #0009!important}}", re = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), A = (/* @__PURE__ */ o(((e, t) => {
	t.exports = re();
})))(), j = class extends D.Component {
	state = {
		hasError: !1,
		error: null
	};
	static getDerivedStateFromError(e) {
		return {
			hasError: !0,
			error: e
		};
	}
	componentDidCatch(e, t) {
		console.error("ArgusDashboard ErrorBoundary caught an error:", e, t);
	}
	render() {
		return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ (0, A.jsxs)("div", {
			style: {
				padding: "20px",
				color: "#ff6b6b",
				background: "rgba(0,0,0,0.5)",
				borderRadius: "8px",
				margin: "10px"
			},
			children: [
				/* @__PURE__ */ (0, A.jsx)("h2", {
					style: {
						fontSize: "16px",
						marginBottom: "8px"
					},
					children: "⚠️ Error del Widget"
				}),
				/* @__PURE__ */ (0, A.jsx)("p", {
					style: {
						fontSize: "12px",
						opacity: .8
					},
					children: "Un componente falló al renderizar."
				}),
				/* @__PURE__ */ (0, A.jsx)("pre", {
					style: {
						fontSize: "10px",
						marginTop: "10px",
						whiteSpace: "pre-wrap",
						opacity: .6
					},
					children: this.state.error?.message
				})
			]
		}) : this.props.children;
	}
};
//#endregion
//#region node_modules/react-grid-layout/dist/chunk-76RTO6EO.mjs
function ie(e) {
	let { margin: t, containerPadding: n, containerWidth: r, cols: i } = e;
	return (r - t[0] * (i - 1) - n[0] * 2) / i;
}
function ae(e, t, n) {
	return Number.isFinite(e) ? Math.round(t * e + Math.max(0, e - 1) * n) : e;
}
function oe(e, t, n, r, i, a, o) {
	let { margin: s, containerPadding: c, rowHeight: l } = e, u = ie(e), d, f, p, m;
	if (o ? (d = Math.round(o.width), f = Math.round(o.height)) : (d = ae(r, u, s[0]), f = ae(i, l, s[1])), a ? (p = Math.round(a.top), m = Math.round(a.left)) : o ? (p = Math.round(o.top), m = Math.round(o.left)) : (p = Math.round((l + s[1]) * n + c[1]), m = Math.round((u + s[0]) * t + c[0])), !a && !o) {
		if (Number.isFinite(r)) {
			let e = Math.round((u + s[0]) * (t + r) + c[0]) - m - d;
			e !== s[0] && (d += e - s[0]);
		}
		if (Number.isFinite(i)) {
			let e = Math.round((l + s[1]) * (n + i) + c[1]) - p - f;
			e !== s[1] && (f += e - s[1]);
		}
	}
	return {
		top: p,
		left: m,
		width: d,
		height: f
	};
}
function se(e, t, n, r, i) {
	let { margin: a, containerPadding: o, cols: s, rowHeight: c, maxRows: l } = e, u = ie(e), d = Math.round((n - o[0]) / (u + a[0])), f = Math.round((t - o[1]) / (c + a[1]));
	return d = ue(d, 0, s - r), f = ue(f, 0, l - i), {
		x: d,
		y: f
	};
}
function ce(e, t, n) {
	let { margin: r, containerPadding: i, rowHeight: a } = e, o = ie(e);
	return {
		x: Math.round((n - i[0]) / (o + r[0])),
		y: Math.round((t - i[1]) / (a + r[1]))
	};
}
function le(e, t, n) {
	let { margin: r, rowHeight: i } = e, a = ie(e);
	return {
		w: Math.max(1, Math.round((t + r[0]) / (a + r[0]))),
		h: Math.max(1, Math.round((n + r[1]) / (i + r[1])))
	};
}
function ue(e, t, n) {
	return Math.max(Math.min(e, n), t);
}
function de(e, t) {
	return !(e.i === t.i || e.x + e.w <= t.x || e.x >= t.x + t.w || e.y + e.h <= t.y || e.y >= t.y + t.h);
}
function fe(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r !== void 0 && de(r, t)) return r;
	}
}
function pe(e, t) {
	return e.filter((e) => de(e, t));
}
function me(e, t) {
	return t === "horizontal" ? ge(e) : t === "vertical" || t === "wrap" ? he(e) : [...e];
}
function he(e) {
	return [...e].sort((e, t) => e.y === t.y ? e.x - t.x : e.y - t.y);
}
function ge(e) {
	return [...e].sort((e, t) => e.x === t.x ? e.y - t.y : e.x - t.x);
}
function _e(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r !== void 0) {
			let e = r.y + r.h;
			e > t && (t = e);
		}
	}
	return t;
}
function ve(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r !== void 0 && r.i === t) return r;
	}
}
function M(e) {
	return e.filter((e) => e.static === !0);
}
function N(e) {
	return {
		i: e.i,
		x: e.x,
		y: e.y,
		w: e.w,
		h: e.h,
		minW: e.minW,
		maxW: e.maxW,
		minH: e.minH,
		maxH: e.maxH,
		moved: !!e.moved,
		static: !!e.static,
		isDraggable: e.isDraggable,
		isResizable: e.isResizable,
		resizeHandles: e.resizeHandles,
		constraints: e.constraints,
		isBounded: e.isBounded
	};
}
function ye(e) {
	let t = Array(e.length);
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		r !== void 0 && (t[n] = N(r));
	}
	return t;
}
function be(e, t) {
	let n = Array(e.length);
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		i !== void 0 && (t.i === i.i ? n[r] = t : n[r] = i);
	}
	return n;
}
function xe(e, t, n) {
	let r = ve(e, t);
	return r ? (r = n(N(r)), [be(e, r), r]) : [[...e], null];
}
function P(e, t) {
	let n = M(e);
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i !== void 0) {
			if (i.x + i.w > t.cols && (i.x = t.cols - i.w), i.x < 0 && (i.x = 0, i.w = t.cols), !i.static) n.push(i);
			else for (; fe(n, i);) i.y++;
		}
	}
	return e;
}
function Se(e, t, n, r, i, a, o, s, c) {
	if (t.static && t.isDraggable !== !0 || t.y === r && t.x === n) return [...e];
	let l = t.x, u = t.y;
	typeof n == "number" && (t.x = n), typeof r == "number" && (t.y = r), t.moved = !0;
	let d = me(e, o);
	(o === "vertical" && typeof r == "number" ? u >= r : o === "horizontal" && typeof n == "number" && l >= n) && (d = d.reverse());
	let f = pe(d, t), p = f.length > 0;
	if (p && c) return ye(e);
	if (p && a) return t.x = l, t.y = u, t.moved = !1, e;
	let m = [...e];
	for (let e = 0; e < f.length; e++) {
		let n = f[e];
		n !== void 0 && (n.moved || (m = n.static ? F(m, n, t, i, o) : F(m, t, n, i, o)));
	}
	return m;
}
function F(e, t, n, r, i, a) {
	let o = i === "horizontal", s = i === "vertical", c = t.static;
	if (r) {
		r = !1;
		let a = {
			x: o ? Math.max(t.x - n.w, 0) : n.x,
			y: s ? Math.max(t.y - n.h, 0) : n.y,
			w: n.w,
			h: n.h,
			i: "-1"
		}, l = fe(e, a), u = l !== void 0 && l.y + l.h > t.y, d = l !== void 0 && t.x + t.w > l.x;
		if (!l) return Se(e, n, o ? a.x : void 0, s ? a.y : void 0, r, c, i);
		if (u && s) return Se(e, n, void 0, n.y + 1, r, c, i);
		if (u && i === null) return t.y = n.y, n.y += n.h, [...e];
		if (d && o) return Se(e, t, n.x, void 0, r, c, i);
	}
	let l = o ? n.x + 1 : void 0, u = s ? n.y + 1 : void 0;
	return l === void 0 && u === void 0 ? [...e] : Se(e, n, l, u, r, c, i);
}
//#endregion
//#region node_modules/react-grid-layout/dist/chunk-KDANGDDL.mjs
function I(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
var Ce = [{
	name: "gridBounds",
	constrainPosition(e, t, n, { cols: r, maxRows: i }) {
		return {
			x: I(t, 0, Math.max(0, r - e.w)),
			y: I(n, 0, Math.max(0, i - e.h))
		};
	},
	constrainSize(e, t, n, r, { cols: i, maxRows: a }) {
		let o = r === "w" || r === "nw" || r === "sw" ? e.x + e.w : i - e.x, s = r === "n" || r === "nw" || r === "ne" ? e.y + e.h : a - e.y;
		return {
			w: I(t, 1, Math.max(1, o)),
			h: I(n, 1, Math.max(1, s))
		};
	}
}, {
	name: "minMaxSize",
	constrainSize(e, t, n) {
		return {
			w: I(t, e.minW ?? 1, e.maxW ?? Infinity),
			h: I(n, e.minH ?? 1, e.maxH ?? Infinity)
		};
	}
}];
function we(e, t, n, r, i) {
	let a = {
		x: n,
		y: r
	};
	for (let n of e) n.constrainPosition && (a = n.constrainPosition(t, a.x, a.y, i));
	if (t.constraints) for (let e of t.constraints) e.constrainPosition && (a = e.constrainPosition(t, a.x, a.y, i));
	return a;
}
function Te(e, t, n, r, i, a) {
	let o = {
		w: n,
		h: r
	};
	for (let n of e) n.constrainSize && (o = n.constrainSize(t, o.w, o.h, i, a));
	if (t.constraints) for (let e of t.constraints) e.constrainSize && (o = e.constrainSize(t, o.w, o.h, i, a));
	return o;
}
function Ee({ top: e, left: t, width: n, height: r }) {
	let i = `translate(${t}px,${e}px)`;
	return {
		transform: i,
		WebkitTransform: i,
		MozTransform: i,
		msTransform: i,
		OTransform: i,
		width: `${n}px`,
		height: `${r}px`,
		position: "absolute"
	};
}
function De({ top: e, left: t, width: n, height: r }) {
	return {
		top: `${e}px`,
		left: `${t}px`,
		width: `${n}px`,
		height: `${r}px`,
		position: "absolute"
	};
}
function Oe(e) {
	return e * 100 + "%";
}
function ke(e, t, n, r) {
	return e + n > r ? t : n;
}
function L(e, t, n) {
	return e < 0 ? t : n;
}
function Ae(e) {
	return Math.max(0, e);
}
function R(e) {
	return Math.max(0, e);
}
var z = (e, t, n) => {
	let { left: r, height: i, width: a } = t, o = e.top - (i - e.height);
	return {
		left: r,
		width: a,
		height: L(o, e.height, i),
		top: R(o)
	};
}, je = (e, t, n) => {
	let { top: r, left: i, height: a, width: o } = t;
	return {
		top: r,
		height: a,
		width: ke(e.left, e.width, o, n),
		left: Ae(i)
	};
}, Me = (e, t, n) => {
	let { top: r, height: i, width: a } = t, o = e.left + e.width - a;
	return o < 0 ? {
		height: i,
		width: e.left + e.width,
		top: R(r),
		left: 0
	} : {
		height: i,
		width: a,
		top: R(r),
		left: o
	};
}, Ne = (e, t, n) => {
	let { top: r, left: i, height: a, width: o } = t;
	return {
		width: o,
		left: i,
		height: L(r, e.height, a),
		top: R(r)
	};
}, Pe = {
	n: z,
	ne: (e, t, n) => z(e, je(e, t, n)),
	e: je,
	se: (e, t, n) => Ne(e, je(e, t, n)),
	s: Ne,
	sw: (e, t, n) => Ne(e, Me(e, t)),
	w: Me,
	nw: (e, t, n) => z(e, Me(e, t))
};
function Fe(e, t, n, r) {
	let i = Pe[e];
	return i ? i(t, {
		...t,
		...n
	}, r) : n;
}
var Ie = {
	type: "transform",
	scale: 1,
	calcStyle(e) {
		return Ee(e);
	}
}, Le = {
	type: "absolute",
	scale: 1,
	calcStyle(e) {
		return De(e);
	}
};
function Re(e) {
	return {
		type: "transform",
		scale: e,
		calcStyle(e) {
			return Ee(e);
		},
		calcDragPosition(t, n, r, i) {
			return {
				left: (t - r) / e,
				top: (n - i) / e
			};
		}
	};
}
var ze = Ie, Be = {
	cols: 12,
	rowHeight: 150,
	margin: [10, 10],
	containerPadding: null,
	maxRows: Infinity
}, Ve = {
	enabled: !0,
	bounded: !1,
	threshold: 3
}, He = {
	enabled: !0,
	handles: ["se"]
}, Ue = {
	enabled: !1,
	defaultItem: {
		w: 1,
		h: 1
	}
};
function We(e, t, n, r, i) {
	let a = r === "x" ? "w" : "h";
	t[r] += 1;
	let o = e.findIndex((e) => e.i === t.i), s = i ?? M(e).length > 0;
	for (let i = o + 1; i < e.length; i++) {
		let o = e[i];
		if (o !== void 0 && !o.static) {
			if (!s && o.y > t.y + t.h) break;
			de(t, o) && We(e, o, n + t[a], r, s);
		}
	}
	t[r] = n;
}
function Ge(e, t, n, r) {
	for (t.x = Math.max(t.x, 0), t.y = Math.max(t.y, 0), t.y = Math.min(r, t.y); t.y > 0 && !fe(e, t);) t.y--;
	let i;
	for (; (i = fe(e, t)) !== void 0;) We(n, t, i.y + i.h, "y");
	return t.y = Math.max(t.y, 0), t;
}
function Ke(e, t, n, r) {
	for (t.x = Math.max(t.x, 0), t.y = Math.max(t.y, 0); t.x > 0 && !fe(e, t);) t.x--;
	let i;
	for (; (i = fe(e, t)) !== void 0;) if (We(r, t, i.x + i.w, "x"), t.x + t.w > n) for (t.x = n - t.w, t.y++; t.x > 0 && !fe(e, t);) t.x--;
	return t.x = Math.max(t.x, 0), t;
}
var qe = {
	type: "vertical",
	allowOverlap: !1,
	compact(e, t) {
		let n = M(e), r = _e(n), i = he(e), a = Array(e.length);
		for (let t = 0; t < i.length; t++) {
			let o = i[t];
			if (o === void 0) continue;
			let s = N(o);
			s.static || (s = Ge(n, s, i, r), r = Math.max(r, s.y + s.h), n.push(s));
			let c = e.indexOf(o);
			a[c] = s, s.moved = !1;
		}
		return a;
	}
}, Je = {
	type: "horizontal",
	allowOverlap: !1,
	compact(e, t) {
		let n = M(e), r = ge(e), i = Array(e.length);
		for (let a = 0; a < r.length; a++) {
			let o = r[a];
			if (o === void 0) continue;
			let s = N(o);
			s.static || (s = Ke(n, s, t, r), n.push(s));
			let c = e.indexOf(o);
			i[c] = s, s.moved = !1;
		}
		return i;
	}
}, Ye = {
	type: null,
	allowOverlap: !1,
	compact(e, t) {
		return ye(e);
	}
}, Xe = {
	...qe,
	allowOverlap: !0,
	compact(e, t) {
		return ye(e);
	}
}, Ze = {
	...Je,
	allowOverlap: !0,
	compact(e, t) {
		return ye(e);
	}
}, Qe = {
	...Ye,
	allowOverlap: !0
};
function $e(e, t = !1, n = !1) {
	let r;
	return r = t ? e === "vertical" ? Xe : e === "horizontal" ? Ze : Qe : e === "vertical" ? qe : e === "horizontal" ? Je : Ye, n ? {
		...r,
		preventCollision: n
	} : r;
}
function et(e) {
	return Object.keys(e).sort((t, n) => e[t] - e[n]);
}
function tt(e, t) {
	let n = et(e), r = n[0];
	if (r === void 0) throw Error("No breakpoints defined");
	for (let i = 1; i < n.length; i++) {
		let a = n[i];
		a !== void 0 && t > e[a] && (r = a);
	}
	return r;
}
function nt(e, t) {
	let n = t[e];
	if (n === void 0) throw Error(`ResponsiveReactGridLayout: \`cols\` entry for breakpoint ${String(e)} is missing!`);
	return n;
}
function rt(e, t, n, r, i, a) {
	let o = e[n];
	if (o) return ye(o);
	let s = e[r], c = et(t), l = c.slice(c.indexOf(n));
	for (let t = 0; t < l.length; t++) {
		let n = l[t];
		if (n === void 0) continue;
		let r = e[n];
		if (r) {
			s = r;
			break;
		}
	}
	let u = P(ye(s || []), { cols: i });
	return (typeof a == "object" && a ? a : $e(a)).compact(u, i);
}
function it(e, t) {
	if (Array.isArray(e)) return e;
	let n = e, r = n[t];
	if (r !== void 0) return r;
	let i = Object.keys(n);
	for (let e of i) {
		let t = n[e];
		if (t !== void 0) return t;
	}
	return [10, 10];
}
//#endregion
//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
var at = /* @__PURE__ */ o(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), ot = /* @__PURE__ */ o(((e, t) => {
	var n = at();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), st = /* @__PURE__ */ o(((e, t) => {
	t.exports = ot()();
})), ct = /* @__PURE__ */ c(T(), 1), B = /* @__PURE__ */ c(st(), 1);
function lt(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = lt(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function ut() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = lt(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/react-draggable/build/cjs/chunk-ACOTSM7X.mjs
function dt(e, t) {
	for (let n = 0, r = e.length; n < r; n++) if (t.apply(t, [
		e[n],
		n,
		e
	])) return e[n];
}
function ft(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function pt(e) {
	return typeof e == "number" && !isNaN(e);
}
function mt(e) {
	return parseInt(e, 10);
}
function ht(e, t, n) {
	if (e[t]) return /* @__PURE__ */ Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`);
}
var gt = [
	"Moz",
	"Webkit",
	"O",
	"ms"
];
function _t(e = "transform") {
	if (typeof window > "u") return "";
	let t = window.document?.documentElement?.style;
	if (!t || e in t) return "";
	for (let n = 0; n < gt.length; n++) if (vt(e, gt[n]) in t) return gt[n];
	return "";
}
function vt(e, t) {
	return t ? `${t}${yt(e)}` : e;
}
function yt(e) {
	let t = "", n = !0;
	for (let r = 0; r < e.length; r++) n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
	return t;
}
var bt = _t(), xt = "";
function St(e, t) {
	xt ||= dt([
		"matches",
		"webkitMatchesSelector",
		"mozMatchesSelector",
		"msMatchesSelector",
		"oMatchesSelector"
	], function(t) {
		return ft(e[t]);
	}) ?? "";
	let n = e[xt];
	return ft(n) ? !!n.call(e, t) : !1;
}
function Ct(e, t, n) {
	let r = e;
	do {
		if (St(r, t)) return !0;
		if (r === n) return !1;
		r = r.parentNode;
	} while (r);
	return !1;
}
function wt(e, t, n, r) {
	if (!e) return;
	let i = {
		capture: !0,
		...r
	}, a = n;
	e.addEventListener ? e.addEventListener(t, a, i) : e.attachEvent ? e.attachEvent("on" + t, a) : e["on" + t] = a;
}
function Tt(e, t, n, r) {
	if (!e) return;
	let i = {
		capture: !0,
		...r
	}, a = n;
	e.removeEventListener ? e.removeEventListener(t, a, i) : e.detachEvent ? e.detachEvent("on" + t, a) : e["on" + t] = null;
}
function Et(e) {
	let t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
	return t += mt(n.borderTopWidth), t += mt(n.borderBottomWidth), t;
}
function Dt(e) {
	let t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
	return t += mt(n.borderLeftWidth), t += mt(n.borderRightWidth), t;
}
function Ot(e) {
	let t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
	return t -= mt(n.paddingTop), t -= mt(n.paddingBottom), t;
}
function kt(e) {
	let t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
	return t -= mt(n.paddingLeft), t -= mt(n.paddingRight), t;
}
function At(e, t, n) {
	let r = t === t.ownerDocument.body ? {
		left: 0,
		top: 0
	} : t.getBoundingClientRect();
	return {
		x: (e.clientX + t.scrollLeft - r.left) / n,
		y: (e.clientY + t.scrollTop - r.top) / n
	};
}
function jt(e, t) {
	let n = Nt(e, t, "px");
	return { [vt("transform", bt)]: n };
}
function Mt(e, t) {
	return Nt(e, t, "");
}
function Nt({ x: e, y: t }, n, r) {
	let i = `translate(${e}${r},${t}${r})`;
	return n && (i = `translate(${`${typeof n.x == "string" ? n.x : n.x + r}`}, ${`${typeof n.y == "string" ? n.y : n.y + r}`})` + i), i;
}
function Pt(e, t) {
	return e.targetTouches && dt(e.targetTouches, (e) => t === e.identifier) || e.changedTouches && dt(e.changedTouches, (e) => t === e.identifier);
}
function Ft(e) {
	if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
	if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
}
function It() {
	return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
function Lt(e, t) {
	if (!e) return;
	let n = e.getElementById("react-draggable-style-el");
	if (!n) {
		n = e.createElement("style"), n.type = "text/css", n.id = "react-draggable-style-el";
		let r = t ?? It();
		r && n.setAttribute("nonce", r), n.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", n.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", e.getElementsByTagName("head")[0].appendChild(n);
	}
	e.body && Bt(e.body, "react-draggable-transparent-selection");
}
function Rt(e) {
	window.requestAnimationFrame ? window.requestAnimationFrame(() => {
		zt(e);
	}) : zt(e);
}
function zt(e) {
	if (e) try {
		e.body && Vt(e.body, "react-draggable-transparent-selection");
		let t = e.selection;
		if (t) t.empty();
		else {
			let t = (e.defaultView || window).getSelection();
			t && t.type !== "Caret" && t.removeAllRanges();
		}
	} catch {}
}
function Bt(e, t) {
	e.classList ? e.classList.add(t) : e.className.match(RegExp(`(?:^|\\s)${t}(?!\\S)`)) || (e.className += ` ${t}`);
}
function Vt(e, t) {
	e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp(`(?:^|\\s)${t}(?!\\S)`, "g"), "");
}
function Ht(e, t, n) {
	if (!e.props.bounds) return [t, n];
	let { bounds: r } = e.props;
	r = typeof r == "string" ? r : Jt(r);
	let i = Yt(e);
	if (typeof r == "string") {
		let { ownerDocument: e } = i, t = e.defaultView;
		if (!t) throw Error("Cannot resolve the owner window of the draggable node.");
		let n;
		if (n = r === "parent" ? i.parentNode : i.getRootNode().querySelector(r), !(n instanceof t.HTMLElement)) throw Error("Bounds selector \"" + r + "\" could not find an element.");
		let a = n, o = t.getComputedStyle(i), s = t.getComputedStyle(a);
		r = {
			left: -i.offsetLeft + mt(s.paddingLeft) + mt(o.marginLeft),
			top: -i.offsetTop + mt(s.paddingTop) + mt(o.marginTop),
			right: kt(a) - Dt(i) - i.offsetLeft + mt(s.paddingRight) - mt(o.marginRight),
			bottom: Ot(a) - Et(i) - i.offsetTop + mt(s.paddingBottom) - mt(o.marginBottom)
		};
	}
	return pt(r.right) && (t = Math.min(t, r.right)), pt(r.bottom) && (n = Math.min(n, r.bottom)), pt(r.left) && (t = Math.max(t, r.left)), pt(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function Ut(e, t, n) {
	return [Math.round(t / e[0]) * e[0], Math.round(n / e[1]) * e[1]];
}
function V(e) {
	return e.props.axis === "both" || e.props.axis === "x";
}
function Wt(e) {
	return e.props.axis === "both" || e.props.axis === "y";
}
function Gt(e, t, n) {
	let r = typeof t == "number" ? Pt(e, t) : null;
	if (typeof t == "number" && !r) return null;
	let i = Yt(n), a = n.props.offsetParent || i.offsetParent || i.ownerDocument.body;
	return At(r || e, a, n.props.scale);
}
function Kt(e, t, n) {
	let r = !pt(e.lastX), i = Yt(e);
	return r ? {
		node: i,
		deltaX: 0,
		deltaY: 0,
		lastX: t,
		lastY: n,
		x: t,
		y: n
	} : {
		node: i,
		deltaX: t - e.lastX,
		deltaY: n - e.lastY,
		lastX: e.lastX,
		lastY: e.lastY,
		x: t,
		y: n
	};
}
function qt(e, t) {
	let n = e.props.scale;
	return {
		node: t.node,
		x: e.state.x + t.deltaX / n,
		y: e.state.y + t.deltaY / n,
		deltaX: t.deltaX / n,
		deltaY: t.deltaY / n,
		lastX: e.state.x,
		lastY: e.state.y
	};
}
function Jt(e) {
	return {
		left: e.left,
		top: e.top,
		right: e.right,
		bottom: e.bottom
	};
}
function Yt(e) {
	let t = e.findDOMNode();
	if (!t) throw Error("<DraggableCore>: Unmounted during event!");
	return t;
}
var Xt = {
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
}, Zt = Xt.mouse, Qt = class extends D.Component {
	constructor() {
		super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (e) => {
			if (this.props.onMouseDown(e), !this.props.allowAnyClick && (typeof e.button == "number" && e.button !== 0 || e.ctrlKey)) return !1;
			let t = this.findDOMNode();
			if (!t || !t.ownerDocument || !t.ownerDocument.body) throw Error("<DraggableCore> not mounted on DragStart!");
			let { ownerDocument: n } = t;
			if (this.props.disabled || !(e.target instanceof n.defaultView.Node) || this.props.handle && !Ct(e.target, this.props.handle, t) || this.props.cancel && Ct(e.target, this.props.cancel, t)) return;
			e.type === "touchstart" && !this.props.allowMobileScroll && e.preventDefault();
			let r = Ft(e);
			this.touchIdentifier = r;
			let i = Gt(e, r, this);
			if (i == null) return;
			let { x: a, y: o } = i, s = Kt(this, a, o);
			this.props.onStart, this.props.onStart(e, s) !== !1 && this.mounted !== !1 && (this.props.enableUserSelectHack && Lt(n, this.props.nonce), this.dragging = !0, this.lastX = a, this.lastY = o, wt(n, Zt.move, this.handleDrag), wt(n, Zt.stop, this.handleDragStop));
		}, this.handleDrag = (e) => {
			let t = Gt(e, this.touchIdentifier, this);
			if (t == null) return;
			let { x: n, y: r } = t;
			if (Array.isArray(this.props.grid)) {
				let e = n - this.lastX, t = r - this.lastY;
				if ([e, t] = Ut(this.props.grid, e, t), !e && !t) return;
				n = this.lastX + e, r = this.lastY + t;
			}
			let i = Kt(this, n, r);
			if (this.props.onDrag(e, i) === !1 || this.mounted === !1) {
				try {
					this.handleDragStop(new MouseEvent("mouseup"));
				} catch {
					let e = document.createEvent("MouseEvents");
					e.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(e);
				}
				return;
			}
			this.lastX = n, this.lastY = r;
		}, this.handleDragStop = (e) => {
			if (!this.dragging) return;
			let t = Gt(e, this.touchIdentifier, this);
			if (t == null) return;
			let { x: n, y: r } = t;
			if (Array.isArray(this.props.grid)) {
				let e = n - this.lastX || 0, t = r - this.lastY || 0;
				[e, t] = Ut(this.props.grid, e, t), n = this.lastX + e, r = this.lastY + t;
			}
			let i = Kt(this, n, r);
			if (this.props.onStop(e, i) === !1 || this.mounted === !1) return !1;
			let a = this.findDOMNode();
			a && this.props.enableUserSelectHack && Rt(a.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, a && (Tt(a.ownerDocument, Zt.move, this.handleDrag), Tt(a.ownerDocument, Zt.stop, this.handleDragStop));
		}, this.onMouseDown = (e) => (Zt = Xt.mouse, this.handleDragStart(e)), this.onMouseUp = (e) => (Zt = Xt.mouse, this.handleDragStop(e)), this.onTouchStart = (e) => (Zt = Xt.touch, this.handleDragStart(e)), this.onTouchEnd = (e) => (Zt = Xt.touch, this.handleDragStop(e));
	}
	componentDidMount() {
		this.mounted = !0;
		let e = this.findDOMNode();
		e && wt(e, Xt.touch.start, this.onTouchStart, { passive: !1 });
	}
	componentWillUnmount() {
		this.mounted = !1;
		let e = this.findDOMNode();
		if (e) {
			let { ownerDocument: t } = e;
			Tt(t, Xt.mouse.move, this.handleDrag), Tt(t, Xt.touch.move, this.handleDrag), Tt(t, Xt.mouse.stop, this.handleDragStop), Tt(t, Xt.touch.stop, this.handleDragStop), Tt(e, Xt.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && Rt(t);
		}
	}
	findDOMNode() {
		if (this.props?.nodeRef) return this.props.nodeRef.current;
		let e = ct.default;
		return typeof e.findDOMNode == "function" ? e.findDOMNode(this) : null;
	}
	render() {
		return D.cloneElement(D.Children.only(this.props.children), {
			onMouseDown: this.onMouseDown,
			onMouseUp: this.onMouseUp,
			onTouchEnd: this.onTouchEnd
		});
	}
};
Qt.displayName = "DraggableCore", Qt.propTypes = {
	allowAnyClick: B.default.bool,
	allowMobileScroll: B.default.bool,
	children: B.default.node.isRequired,
	disabled: B.default.bool,
	enableUserSelectHack: B.default.bool,
	offsetParent: function(e, t) {
		if (e[t] && e[t].nodeType !== 1) throw Error("Draggable's offsetParent must be a DOM Node.");
	},
	grid: B.default.arrayOf(B.default.number),
	handle: B.default.string,
	cancel: B.default.string,
	nodeRef: B.default.object,
	nonce: B.default.string,
	onStart: B.default.func,
	onDrag: B.default.func,
	onStop: B.default.func,
	onMouseDown: B.default.func,
	scale: B.default.number,
	className: ht,
	style: ht,
	transform: ht
}, Qt.defaultProps = {
	allowAnyClick: !1,
	allowMobileScroll: !1,
	disabled: !1,
	enableUserSelectHack: !0,
	onStart: function() {},
	onDrag: function() {},
	onStop: function() {},
	onMouseDown: function() {},
	scale: 1
};
var $t = class extends D.Component {
	constructor(e) {
		super(e), this.onDragStart = (e, t) => {
			if (this.props.onStart(e, qt(this, t)) === !1) return !1;
			this.setState({
				dragging: !0,
				dragged: !0
			});
		}, this.onDrag = (e, t) => {
			if (!this.state.dragging) return !1;
			let n = qt(this, t), r = {
				x: n.x,
				y: n.y,
				slackX: 0,
				slackY: 0
			};
			if (this.props.bounds) {
				let { x: e, y: t } = r;
				r.x += this.state.slackX, r.y += this.state.slackY;
				let [i, a] = Ht(this, r.x, r.y);
				r.x = i, r.y = a, r.slackX = this.state.slackX + (e - r.x), r.slackY = this.state.slackY + (t - r.y), n.x = r.x, n.y = r.y, n.deltaX = r.x - this.state.x, n.deltaY = r.y - this.state.y;
			}
			if (this.props.onDrag(e, n) === !1) return !1;
			this.setState(r);
		}, this.onDragStop = (e, t) => {
			if (!this.state.dragging || this.props.onStop(e, qt(this, t)) === !1) return !1;
			let n = {
				dragging: !1,
				slackX: 0,
				slackY: 0
			};
			if (this.props.position) {
				let { x: e, y: t } = this.props.position;
				n.x = e, n.y = t;
			}
			this.setState(n);
		}, this.state = {
			dragging: !1,
			dragged: !1,
			x: e.position ? e.position.x : e.defaultPosition.x,
			y: e.position ? e.position.y : e.defaultPosition.y,
			prevPropsPosition: { ...e.position },
			slackX: 0,
			slackY: 0,
			isElementSVG: !1
		}, e.position && !(e.onDrag || e.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
	}
	static getDerivedStateFromProps({ position: e }, { prevPropsPosition: t }) {
		return e && (!t || e.x !== t.x || e.y !== t.y) ? {
			x: e.x,
			y: e.y,
			prevPropsPosition: { ...e }
		} : null;
	}
	componentDidMount() {
		window.SVGElement !== void 0 && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: !0 });
	}
	componentWillUnmount() {
		this.state.dragging && this.setState({ dragging: !1 });
	}
	findDOMNode() {
		if (this.props?.nodeRef) return this.props.nodeRef.current;
		let e = ct.default;
		return typeof e.findDOMNode == "function" ? e.findDOMNode(this) : null;
	}
	render() {
		let { axis: e, bounds: t, children: n, defaultPosition: r, defaultClassName: i, defaultClassNameDragging: a, defaultClassNameDragged: o, position: s, positionOffset: c, scale: l, ...u } = this.props, d = {}, f = null, p = !s || this.state.dragging, m = s || r, h = {
			x: V(this) && p ? this.state.x : m.x,
			y: Wt(this) && p ? this.state.y : m.y
		};
		this.state.isElementSVG ? f = Mt(h, c) : d = jt(h, c);
		let g = D.Children.only(n), _ = ut(g.props.className || "", i, {
			[a]: this.state.dragging,
			[o]: this.state.dragged
		});
		return /* @__PURE__ */ D.createElement(Qt, {
			...u,
			onStart: this.onDragStart,
			onDrag: this.onDrag,
			onStop: this.onDragStop
		}, D.cloneElement(g, {
			className: _,
			style: {
				...g.props.style,
				...d
			},
			transform: f
		}));
	}
};
$t.displayName = "Draggable", $t.propTypes = {
	...Qt.propTypes,
	axis: B.default.oneOf([
		"both",
		"x",
		"y",
		"none"
	]),
	bounds: B.default.oneOfType([
		B.default.shape({
			left: B.default.number,
			right: B.default.number,
			top: B.default.number,
			bottom: B.default.number
		}),
		B.default.string,
		B.default.oneOf([!1])
	]),
	defaultClassName: B.default.string,
	defaultClassNameDragging: B.default.string,
	defaultClassNameDragged: B.default.string,
	defaultPosition: B.default.shape({
		x: B.default.number,
		y: B.default.number
	}),
	positionOffset: B.default.shape({
		x: B.default.oneOfType([B.default.number, B.default.string]),
		y: B.default.oneOfType([B.default.number, B.default.string])
	}),
	position: B.default.shape({
		x: B.default.number,
		y: B.default.number
	}),
	className: ht,
	style: ht,
	transform: ht
}, $t.defaultProps = {
	...Qt.defaultProps,
	axis: "both",
	bounds: !1,
	defaultClassName: "react-draggable",
	defaultClassNameDragging: "react-draggable-dragging",
	defaultClassNameDragged: "react-draggable-dragged",
	defaultPosition: {
		x: 0,
		y: 0
	},
	scale: 1
};
//#endregion
//#region node_modules/clsx/dist/clsx.js
var en = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		var t, r, i = "";
		if (typeof e == "string" || typeof e == "number") i += e;
		else if (typeof e == "object") {
			if (Array.isArray(e)) {
				var a = e.length;
				for (t = 0; t < a; t++) e[t] && (r = n(e[t])) && (i && (i += " "), i += r);
			} else for (r in e) e[r] && (i && (i += " "), i += r);
		}
		return i;
	}
	function r() {
		for (var e, t, r = 0, i = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = n(e)) && (i && (i += " "), i += t);
		return i;
	}
	t.exports = r, t.exports.clsx = r;
})), tn = /* @__PURE__ */ o(((e, t) => {
	var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, c = (e, t) => {
		for (var n in t) r(e, n, {
			get: t[n],
			enumerable: !0
		});
	}, l = (e, t, n, o) => {
		if (t && typeof t == "object" || typeof t == "function") for (let c of a(t)) !s.call(e, c) && c !== n && r(e, c, {
			get: () => t[c],
			enumerable: !(o = i(t, c)) || o.enumerable
		});
		return e;
	}, u = (e, t, i) => (i = e == null ? {} : n(o(e)), l(t || !e || !e.__esModule ? r(i, "default", {
		value: e,
		enumerable: !0
	}) : i, e)), d = (e) => l(r({}, "__esModule", { value: !0 }), e), f = {};
	c(f, {
		DraggableCore: () => De,
		default: () => Oe
	}), t.exports = d(f);
	var p = u(x()), m = u(st()), h = u(T()), g = en();
	function _(e, t) {
		for (let n = 0, r = e.length; n < r; n++) if (t.apply(t, [
			e[n],
			n,
			e
		])) return e[n];
	}
	function v(e) {
		return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
	}
	function y(e) {
		return typeof e == "number" && !isNaN(e);
	}
	function b(e) {
		return parseInt(e, 10);
	}
	function S(e, t, n) {
		if (e[t]) return /* @__PURE__ */ Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`);
	}
	var C = [
		"Moz",
		"Webkit",
		"O",
		"ms"
	];
	function w(e = "transform") {
		if (typeof window > "u") return "";
		let t = window.document?.documentElement?.style;
		if (!t || e in t) return "";
		for (let n = 0; n < C.length; n++) if (ee(e, C[n]) in t) return C[n];
		return "";
	}
	function ee(e, t) {
		return t ? `${t}${E(e)}` : e;
	}
	function E(e) {
		let t = "", n = !0;
		for (let r = 0; r < e.length; r++) n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
		return t;
	}
	var D = w(), te = "";
	function O(e, t) {
		te ||= _([
			"matches",
			"webkitMatchesSelector",
			"mozMatchesSelector",
			"msMatchesSelector",
			"oMatchesSelector"
		], function(t) {
			return v(e[t]);
		}) ?? "";
		let n = e[te];
		return v(n) ? !!n.call(e, t) : !1;
	}
	function k(e, t, n) {
		let r = e;
		do {
			if (O(r, t)) return !0;
			if (r === n) return !1;
			r = r.parentNode;
		} while (r);
		return !1;
	}
	function ne(e, t, n, r) {
		if (!e) return;
		let i = {
			capture: !0,
			...r
		}, a = n;
		e.addEventListener ? e.addEventListener(t, a, i) : e.attachEvent ? e.attachEvent("on" + t, a) : e["on" + t] = a;
	}
	function re(e, t, n, r) {
		if (!e) return;
		let i = {
			capture: !0,
			...r
		}, a = n;
		e.removeEventListener ? e.removeEventListener(t, a, i) : e.detachEvent ? e.detachEvent("on" + t, a) : e["on" + t] = null;
	}
	function A(e) {
		let t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
		return t += b(n.borderTopWidth), t += b(n.borderBottomWidth), t;
	}
	function j(e) {
		let t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
		return t += b(n.borderLeftWidth), t += b(n.borderRightWidth), t;
	}
	function ie(e) {
		let t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
		return t -= b(n.paddingTop), t -= b(n.paddingBottom), t;
	}
	function ae(e) {
		let t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
		return t -= b(n.paddingLeft), t -= b(n.paddingRight), t;
	}
	function oe(e, t, n) {
		let r = t === t.ownerDocument.body ? {
			left: 0,
			top: 0
		} : t.getBoundingClientRect();
		return {
			x: (e.clientX + t.scrollLeft - r.left) / n,
			y: (e.clientY + t.scrollTop - r.top) / n
		};
	}
	function se(e, t) {
		let n = le(e, t, "px");
		return { [ee("transform", D)]: n };
	}
	function ce(e, t) {
		return le(e, t, "");
	}
	function le({ x: e, y: t }, n, r) {
		let i = `translate(${e}${r},${t}${r})`;
		return n && (i = `translate(${`${typeof n.x == "string" ? n.x : n.x + r}`}, ${`${typeof n.y == "string" ? n.y : n.y + r}`})` + i), i;
	}
	function ue(e, t) {
		return e.targetTouches && _(e.targetTouches, (e) => t === e.identifier) || e.changedTouches && _(e.changedTouches, (e) => t === e.identifier);
	}
	function de(e) {
		if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
		if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
	}
	function fe() {
		return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
	}
	function pe(e, t) {
		if (!e) return;
		let n = e.getElementById("react-draggable-style-el");
		if (!n) {
			n = e.createElement("style"), n.type = "text/css", n.id = "react-draggable-style-el";
			let r = t ?? fe();
			r && n.setAttribute("nonce", r), n.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", n.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", e.getElementsByTagName("head")[0].appendChild(n);
		}
		e.body && ge(e.body, "react-draggable-transparent-selection");
	}
	function me(e) {
		window.requestAnimationFrame ? window.requestAnimationFrame(() => {
			he(e);
		}) : he(e);
	}
	function he(e) {
		if (e) try {
			e.body && _e(e.body, "react-draggable-transparent-selection");
			let t = e.selection;
			if (t) t.empty();
			else {
				let t = (e.defaultView || window).getSelection();
				t && t.type !== "Caret" && t.removeAllRanges();
			}
		} catch {}
	}
	function ge(e, t) {
		e.classList ? e.classList.add(t) : e.className.match(RegExp(`(?:^|\\s)${t}(?!\\S)`)) || (e.className += ` ${t}`);
	}
	function _e(e, t) {
		e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp(`(?:^|\\s)${t}(?!\\S)`, "g"), "");
	}
	function ve(e, t, n) {
		if (!e.props.bounds) return [t, n];
		let { bounds: r } = e.props;
		r = typeof r == "string" ? r : Se(r);
		let i = F(e);
		if (typeof r == "string") {
			let { ownerDocument: e } = i, t = e.defaultView;
			if (!t) throw Error("Cannot resolve the owner window of the draggable node.");
			let n;
			if (n = r === "parent" ? i.parentNode : i.getRootNode().querySelector(r), !(n instanceof t.HTMLElement)) throw Error("Bounds selector \"" + r + "\" could not find an element.");
			let a = n, o = t.getComputedStyle(i), s = t.getComputedStyle(a);
			r = {
				left: -i.offsetLeft + b(s.paddingLeft) + b(o.marginLeft),
				top: -i.offsetTop + b(s.paddingTop) + b(o.marginTop),
				right: ae(a) - j(i) - i.offsetLeft + b(s.paddingRight) - b(o.marginRight),
				bottom: ie(a) - A(i) - i.offsetTop + b(s.paddingBottom) - b(o.marginBottom)
			};
		}
		return y(r.right) && (t = Math.min(t, r.right)), y(r.bottom) && (n = Math.min(n, r.bottom)), y(r.left) && (t = Math.max(t, r.left)), y(r.top) && (n = Math.max(n, r.top)), [t, n];
	}
	function M(e, t, n) {
		return [Math.round(t / e[0]) * e[0], Math.round(n / e[1]) * e[1]];
	}
	function N(e) {
		return e.props.axis === "both" || e.props.axis === "x";
	}
	function ye(e) {
		return e.props.axis === "both" || e.props.axis === "y";
	}
	function be(e, t, n) {
		let r = typeof t == "number" ? ue(e, t) : null;
		if (typeof t == "number" && !r) return null;
		let i = F(n), a = n.props.offsetParent || i.offsetParent || i.ownerDocument.body;
		return oe(r || e, a, n.props.scale);
	}
	function xe(e, t, n) {
		let r = !y(e.lastX), i = F(e);
		return r ? {
			node: i,
			deltaX: 0,
			deltaY: 0,
			lastX: t,
			lastY: n,
			x: t,
			y: n
		} : {
			node: i,
			deltaX: t - e.lastX,
			deltaY: n - e.lastY,
			lastX: e.lastX,
			lastY: e.lastY,
			x: t,
			y: n
		};
	}
	function P(e, t) {
		let n = e.props.scale;
		return {
			node: t.node,
			x: e.state.x + t.deltaX / n,
			y: e.state.y + t.deltaY / n,
			deltaX: t.deltaX / n,
			deltaY: t.deltaY / n,
			lastX: e.state.x,
			lastY: e.state.y
		};
	}
	function Se(e) {
		return {
			left: e.left,
			top: e.top,
			right: e.right,
			bottom: e.bottom
		};
	}
	function F(e) {
		let t = e.findDOMNode();
		if (!t) throw Error("<DraggableCore>: Unmounted during event!");
		return t;
	}
	var I = u(x()), Ce = u(st()), we = u(T()), Te = {
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
	}, Ee = Te.mouse, De = class extends I.Component {
		constructor() {
			super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (e) => {
				if (this.props.onMouseDown(e), !this.props.allowAnyClick && (typeof e.button == "number" && e.button !== 0 || e.ctrlKey)) return !1;
				let t = this.findDOMNode();
				if (!t || !t.ownerDocument || !t.ownerDocument.body) throw Error("<DraggableCore> not mounted on DragStart!");
				let { ownerDocument: n } = t;
				if (this.props.disabled || !(e.target instanceof n.defaultView.Node) || this.props.handle && !k(e.target, this.props.handle, t) || this.props.cancel && k(e.target, this.props.cancel, t)) return;
				e.type === "touchstart" && !this.props.allowMobileScroll && e.preventDefault();
				let r = de(e);
				this.touchIdentifier = r;
				let i = be(e, r, this);
				if (i == null) return;
				let { x: a, y: o } = i, s = xe(this, a, o);
				this.props.onStart, this.props.onStart(e, s) !== !1 && this.mounted !== !1 && (this.props.enableUserSelectHack && pe(n, this.props.nonce), this.dragging = !0, this.lastX = a, this.lastY = o, ne(n, Ee.move, this.handleDrag), ne(n, Ee.stop, this.handleDragStop));
			}, this.handleDrag = (e) => {
				let t = be(e, this.touchIdentifier, this);
				if (t == null) return;
				let { x: n, y: r } = t;
				if (Array.isArray(this.props.grid)) {
					let e = n - this.lastX, t = r - this.lastY;
					if ([e, t] = M(this.props.grid, e, t), !e && !t) return;
					n = this.lastX + e, r = this.lastY + t;
				}
				let i = xe(this, n, r);
				if (this.props.onDrag(e, i) === !1 || this.mounted === !1) {
					try {
						this.handleDragStop(new MouseEvent("mouseup"));
					} catch {
						let e = document.createEvent("MouseEvents");
						e.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(e);
					}
					return;
				}
				this.lastX = n, this.lastY = r;
			}, this.handleDragStop = (e) => {
				if (!this.dragging) return;
				let t = be(e, this.touchIdentifier, this);
				if (t == null) return;
				let { x: n, y: r } = t;
				if (Array.isArray(this.props.grid)) {
					let e = n - this.lastX || 0, t = r - this.lastY || 0;
					[e, t] = M(this.props.grid, e, t), n = this.lastX + e, r = this.lastY + t;
				}
				let i = xe(this, n, r);
				if (this.props.onStop(e, i) === !1 || this.mounted === !1) return !1;
				let a = this.findDOMNode();
				a && this.props.enableUserSelectHack && me(a.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, a && (re(a.ownerDocument, Ee.move, this.handleDrag), re(a.ownerDocument, Ee.stop, this.handleDragStop));
			}, this.onMouseDown = (e) => (Ee = Te.mouse, this.handleDragStart(e)), this.onMouseUp = (e) => (Ee = Te.mouse, this.handleDragStop(e)), this.onTouchStart = (e) => (Ee = Te.touch, this.handleDragStart(e)), this.onTouchEnd = (e) => (Ee = Te.touch, this.handleDragStop(e));
		}
		componentDidMount() {
			this.mounted = !0;
			let e = this.findDOMNode();
			e && ne(e, Te.touch.start, this.onTouchStart, { passive: !1 });
		}
		componentWillUnmount() {
			this.mounted = !1;
			let e = this.findDOMNode();
			if (e) {
				let { ownerDocument: t } = e;
				re(t, Te.mouse.move, this.handleDrag), re(t, Te.touch.move, this.handleDrag), re(t, Te.mouse.stop, this.handleDragStop), re(t, Te.touch.stop, this.handleDragStop), re(e, Te.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && me(t);
			}
		}
		findDOMNode() {
			if (this.props?.nodeRef) return this.props.nodeRef.current;
			let e = we.default;
			return typeof e.findDOMNode == "function" ? e.findDOMNode(this) : null;
		}
		render() {
			return I.cloneElement(I.Children.only(this.props.children), {
				onMouseDown: this.onMouseDown,
				onMouseUp: this.onMouseUp,
				onTouchEnd: this.onTouchEnd
			});
		}
	};
	De.displayName = "DraggableCore", De.propTypes = {
		allowAnyClick: Ce.default.bool,
		allowMobileScroll: Ce.default.bool,
		children: Ce.default.node.isRequired,
		disabled: Ce.default.bool,
		enableUserSelectHack: Ce.default.bool,
		offsetParent: function(e, t) {
			if (e[t] && e[t].nodeType !== 1) throw Error("Draggable's offsetParent must be a DOM Node.");
		},
		grid: Ce.default.arrayOf(Ce.default.number),
		handle: Ce.default.string,
		cancel: Ce.default.string,
		nodeRef: Ce.default.object,
		nonce: Ce.default.string,
		onStart: Ce.default.func,
		onDrag: Ce.default.func,
		onStop: Ce.default.func,
		onMouseDown: Ce.default.func,
		scale: Ce.default.number,
		className: S,
		style: S,
		transform: S
	}, De.defaultProps = {
		allowAnyClick: !1,
		allowMobileScroll: !1,
		disabled: !1,
		enableUserSelectHack: !0,
		onStart: function() {},
		onDrag: function() {},
		onStop: function() {},
		onMouseDown: function() {},
		scale: 1
	};
	var Oe = class extends p.Component {
		constructor(e) {
			super(e), this.onDragStart = (e, t) => {
				if (this.props.onStart(e, P(this, t)) === !1) return !1;
				this.setState({
					dragging: !0,
					dragged: !0
				});
			}, this.onDrag = (e, t) => {
				if (!this.state.dragging) return !1;
				let n = P(this, t), r = {
					x: n.x,
					y: n.y,
					slackX: 0,
					slackY: 0
				};
				if (this.props.bounds) {
					let { x: e, y: t } = r;
					r.x += this.state.slackX, r.y += this.state.slackY;
					let [i, a] = ve(this, r.x, r.y);
					r.x = i, r.y = a, r.slackX = this.state.slackX + (e - r.x), r.slackY = this.state.slackY + (t - r.y), n.x = r.x, n.y = r.y, n.deltaX = r.x - this.state.x, n.deltaY = r.y - this.state.y;
				}
				if (this.props.onDrag(e, n) === !1) return !1;
				this.setState(r);
			}, this.onDragStop = (e, t) => {
				if (!this.state.dragging || this.props.onStop(e, P(this, t)) === !1) return !1;
				let n = {
					dragging: !1,
					slackX: 0,
					slackY: 0
				};
				if (this.props.position) {
					let { x: e, y: t } = this.props.position;
					n.x = e, n.y = t;
				}
				this.setState(n);
			}, this.state = {
				dragging: !1,
				dragged: !1,
				x: e.position ? e.position.x : e.defaultPosition.x,
				y: e.position ? e.position.y : e.defaultPosition.y,
				prevPropsPosition: { ...e.position },
				slackX: 0,
				slackY: 0,
				isElementSVG: !1
			}, e.position && !(e.onDrag || e.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
		}
		static getDerivedStateFromProps({ position: e }, { prevPropsPosition: t }) {
			return e && (!t || e.x !== t.x || e.y !== t.y) ? {
				x: e.x,
				y: e.y,
				prevPropsPosition: { ...e }
			} : null;
		}
		componentDidMount() {
			window.SVGElement !== void 0 && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: !0 });
		}
		componentWillUnmount() {
			this.state.dragging && this.setState({ dragging: !1 });
		}
		findDOMNode() {
			if (this.props?.nodeRef) return this.props.nodeRef.current;
			let e = h.default;
			return typeof e.findDOMNode == "function" ? e.findDOMNode(this) : null;
		}
		render() {
			let { axis: e, bounds: t, children: n, defaultPosition: r, defaultClassName: i, defaultClassNameDragging: a, defaultClassNameDragged: o, position: s, positionOffset: c, scale: l, ...u } = this.props, d = {}, f = null, m = !s || this.state.dragging, h = s || r, _ = {
				x: N(this) && m ? this.state.x : h.x,
				y: ye(this) && m ? this.state.y : h.y
			};
			this.state.isElementSVG ? f = ce(_, c) : d = se(_, c);
			let v = p.Children.only(n), y = (0, g.clsx)(v.props.className || "", i, {
				[a]: this.state.dragging,
				[o]: this.state.dragged
			});
			return /* @__PURE__ */ p.createElement(De, {
				...u,
				onStart: this.onDragStart,
				onDrag: this.onDrag,
				onStop: this.onDragStop
			}, p.cloneElement(v, {
				className: y,
				style: {
					...v.props.style,
					...d
				},
				transform: f
			}));
		}
	};
	Oe.displayName = "Draggable", Oe.propTypes = {
		...De.propTypes,
		axis: m.default.oneOf([
			"both",
			"x",
			"y",
			"none"
		]),
		bounds: m.default.oneOfType([
			m.default.shape({
				left: m.default.number,
				right: m.default.number,
				top: m.default.number,
				bottom: m.default.number
			}),
			m.default.string,
			m.default.oneOf([!1])
		]),
		defaultClassName: m.default.string,
		defaultClassNameDragging: m.default.string,
		defaultClassNameDragged: m.default.string,
		defaultPosition: m.default.shape({
			x: m.default.number,
			y: m.default.number
		}),
		positionOffset: m.default.shape({
			x: m.default.oneOfType([m.default.number, m.default.string]),
			y: m.default.oneOfType([m.default.number, m.default.string])
		}),
		position: m.default.shape({
			x: m.default.number,
			y: m.default.number
		}),
		className: S,
		style: S,
		transform: S
	}, Oe.defaultProps = {
		...De.defaultProps,
		axis: "both",
		bounds: !1,
		defaultClassName: "react-draggable",
		defaultClassNameDragging: "react-draggable-dragging",
		defaultClassNameDragged: "react-draggable-dragged",
		defaultPosition: {
			x: 0,
			y: 0
		},
		scale: 1
	}, 0 && (t.exports = { DraggableCore: De });
})), nn = /* @__PURE__ */ o(((e, t) => {
	var n = tn(), r = n.DraggableCore, i = n.default || n;
	t.exports = i, t.exports.default = i, t.exports.DraggableCore = r;
})), rn = /* @__PURE__ */ o(((e) => {
	e.__esModule = !0, e.cloneElement = c;
	var t = n(x());
	function n(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function r(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function i(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? r(Object(n), !0).forEach(function(t) {
				a(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function a(e, t, n) {
		return (t = o(t)) in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function o(e) {
		var t = s(e, "string");
		return typeof t == "symbol" ? t : t + "";
	}
	function s(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	function c(e, n) {
		return n.style && e.props.style && (n.style = i(i({}, e.props.style), n.style)), n.className && e.props.className && (n.className = e.props.className + " " + n.className), /*#__PURE__*/ t.default.cloneElement(e, n);
	}
})), an = /* @__PURE__ */ o(((e) => {
	e.__esModule = !0, e.resizableProps = void 0;
	var t = n(st());
	nn();
	function n(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.resizableProps = {
		axis: t.default.oneOf([
			"both",
			"x",
			"y",
			"none"
		]),
		className: t.default.string,
		children: t.default.element.isRequired,
		draggableOpts: t.default.shape({
			allowAnyClick: t.default.bool,
			cancel: t.default.string,
			children: t.default.node,
			disabled: t.default.bool,
			enableUserSelectHack: t.default.bool,
			offsetParent: typeof Element < "u" ? t.default.instanceOf(Element) : t.default.any,
			grid: t.default.arrayOf(t.default.number),
			handle: t.default.string,
			nodeRef: t.default.object,
			onStart: t.default.func,
			onDrag: t.default.func,
			onStop: t.default.func,
			onMouseDown: t.default.func,
			scale: t.default.number
		}),
		height: function() {
			var e = [...arguments];
			let n = e[0];
			return n.axis === "both" || n.axis === "y" ? t.default.number.isRequired(...e) : t.default.number(...e);
		},
		handle: t.default.oneOfType([t.default.node, t.default.func]),
		handleSize: t.default.arrayOf(t.default.number),
		lockAspectRatio: t.default.bool,
		maxConstraints: t.default.arrayOf(t.default.number),
		minConstraints: t.default.arrayOf(t.default.number),
		onResizeStop: t.default.func,
		onResizeStart: t.default.func,
		onResize: t.default.func,
		resizeHandles: t.default.arrayOf(t.default.oneOf([
			"s",
			"w",
			"e",
			"n",
			"sw",
			"nw",
			"se",
			"ne"
		])),
		transformScale: t.default.number,
		width: function() {
			var e = [...arguments];
			let n = e[0];
			return n.axis === "both" || n.axis === "x" ? t.default.number.isRequired(...e) : t.default.number(...e);
		}
	};
})), on = /* @__PURE__ */ o(((e) => {
	e.__esModule = !0, e.default = void 0;
	var t = o(x()), n = nn(), r = rn(), i = an(), a = [
		"children",
		"className",
		"draggableOpts",
		"width",
		"height",
		"handle",
		"handleSize",
		"lockAspectRatio",
		"axis",
		"minConstraints",
		"maxConstraints",
		"onResize",
		"onResizeStop",
		"onResizeStart",
		"resizeHandles",
		"transformScale"
	];
	function o(e, t) {
		if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
		return (o = function(e, t) {
			if (!t && e && e.__esModule) return e;
			var i, a, o = {
				__proto__: null,
				default: e
			};
			if (e === null || typeof e != "object" && typeof e != "function") return o;
			if (i = t ? r : n) {
				if (i.has(e)) return i.get(e);
				i.set(e, o);
			}
			for (let t in e) t !== "default" && {}.hasOwnProperty.call(e, t) && ((a = (i = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (a.get || a.set) ? i(o, t, a) : o[t] = e[t]);
			return o;
		})(e, t);
	}
	function s() {
		return s = Object.assign ? Object.assign.bind() : function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		}, s.apply(null, arguments);
	}
	function c(e, t) {
		if (e == null) return {};
		var n = {};
		for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
			if (t.indexOf(r) !== -1) continue;
			n[r] = e[r];
		}
		return n;
	}
	function l(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function u(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? l(Object(n), !0).forEach(function(t) {
				d(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function d(e, t, n) {
		return (t = f(t)) in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function f(e) {
		var t = p(e, "string");
		return typeof t == "symbol" ? t : t + "";
	}
	function p(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	var m = class extends t.Component {
		constructor() {
			super(...arguments), this.handleRefs = {}, this.lastHandleRect = null, this.slack = null, this.lastSize = null;
		}
		componentWillUnmount() {
			this.resetData();
		}
		resetData() {
			this.lastHandleRect = this.slack = this.lastSize = null;
		}
		runConstraints(e, t) {
			let n = this.props, r = n.minConstraints, i = n.maxConstraints, a = n.lockAspectRatio;
			if (!r && !i && !a) return [e, t];
			if (a) {
				let n = this.props.width / this.props.height, r = e - this.props.width, i = t - this.props.height;
				Math.abs(r) > Math.abs(i * n) ? t = e / n : e = t * n;
			}
			let o = e, s = t, c = this.slack || [0, 0], l = c[0], u = c[1];
			return e += l, t += u, r && (e = Math.max(r[0], e), t = Math.max(r[1], t)), i && (e = Math.min(i[0], e), t = Math.min(i[1], t)), this.slack = [l + (o - e), u + (s - t)], [e, t];
		}
		resizeHandler(e, t) {
			return (n, r) => {
				let i = r.node, a = r.deltaX, o = r.deltaY;
				e === "onResizeStart" && this.resetData();
				let s = (this.props.axis === "both" || this.props.axis === "x") && t !== "n" && t !== "s", c = (this.props.axis === "both" || this.props.axis === "y") && t !== "e" && t !== "w";
				if (!s && !c) return;
				let l = t[0], u = t[t.length - 1], d = i.getBoundingClientRect();
				if (this.lastHandleRect != null) {
					if (u === "w") {
						let e = d.left - this.lastHandleRect.left;
						a += e;
					}
					if (l === "n") {
						let e = d.top - this.lastHandleRect.top;
						o += e;
					}
				}
				this.lastHandleRect = d, u === "w" && (a = -a), l === "n" && (o = -o);
				let f = this.lastSize?.width ?? this.props.width, p = this.lastSize?.height ?? this.props.height, m = f + (s ? a / this.props.transformScale : 0), h = p + (c ? o / this.props.transformScale : 0);
				var g = this.runConstraints(m, h);
				if (m = g[0], h = g[1], e === "onResizeStop" && this.lastSize) {
					var _ = this.lastSize;
					m = _.width, h = _.height;
				}
				let v = m !== f || h !== p;
				e !== "onResizeStop" && (this.lastSize = {
					width: m,
					height: h
				});
				let y = typeof this.props[e] == "function" ? this.props[e] : null;
				y && (e !== "onResize" || v) && (n.persist == null || n.persist(), y(n, {
					node: i,
					size: {
						width: m,
						height: h
					},
					handle: t
				})), e === "onResizeStop" && this.resetData();
			};
		}
		renderResizeHandle(e, n) {
			let r = this.props.handle;
			if (!r) return /*#__PURE__*/ t.createElement("span", {
				className: "react-resizable-handle react-resizable-handle-" + e,
				ref: n
			});
			if (typeof r == "function") return r(e, n);
			let i = typeof r.type == "string", a = u({ ref: n }, i ? {} : { handleAxis: e });
			return /*#__PURE__*/ t.cloneElement(r, a);
		}
		render() {
			let e = this.props, i = e.children, o = e.className, l = e.draggableOpts;
			e.width, e.height, e.handle, e.handleSize, e.lockAspectRatio, e.axis, e.minConstraints, e.maxConstraints, e.onResize, e.onResizeStop, e.onResizeStart;
			let d = e.resizeHandles;
			e.transformScale;
			let f = c(e, a);
			return (0, r.cloneElement)(i, u(u({}, f), {}, {
				className: (o ? o + " " : "") + "react-resizable",
				children: [...t.Children.toArray(i.props.children), ...d.map((e) => {
					let r = this.handleRefs[e] ?? (this.handleRefs[e] = /*#__PURE__*/ t.createRef());
					return /*#__PURE__*/ t.createElement(n.DraggableCore, s({}, l, {
						nodeRef: r,
						key: "resizableHandle-" + e,
						onStop: this.resizeHandler("onResizeStop", e),
						onStart: this.resizeHandler("onResizeStart", e),
						onDrag: this.resizeHandler("onResize", e)
					}), this.renderResizeHandle(e, r));
				})]
			}));
		}
	};
	e.default = m, m.propTypes = i.resizableProps, m.defaultProps = {
		axis: "both",
		handleSize: [20, 20],
		lockAspectRatio: !1,
		minConstraints: [20, 20],
		maxConstraints: [Infinity, Infinity],
		resizeHandles: ["se"],
		transformScale: 1
	};
})), sn = /* @__PURE__ */ o(((e) => {
	e.__esModule = !0, e.default = void 0;
	var t = s(x()), n = o(st()), r = o(on()), i = an(), a = [
		"handle",
		"handleSize",
		"onResize",
		"onResizeStart",
		"onResizeStop",
		"draggableOpts",
		"minConstraints",
		"maxConstraints",
		"lockAspectRatio",
		"axis",
		"width",
		"height",
		"resizeHandles",
		"style",
		"transformScale"
	];
	function o(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function s(e, t) {
		if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
		return (s = function(e, t) {
			if (!t && e && e.__esModule) return e;
			var i, a, o = {
				__proto__: null,
				default: e
			};
			if (e === null || typeof e != "object" && typeof e != "function") return o;
			if (i = t ? r : n) {
				if (i.has(e)) return i.get(e);
				i.set(e, o);
			}
			for (let t in e) t !== "default" && {}.hasOwnProperty.call(e, t) && ((a = (i = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (a.get || a.set) ? i(o, t, a) : o[t] = e[t]);
			return o;
		})(e, t);
	}
	function c() {
		return c = Object.assign ? Object.assign.bind() : function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		}, c.apply(null, arguments);
	}
	function l(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function u(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? l(Object(n), !0).forEach(function(t) {
				d(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function d(e, t, n) {
		return (t = f(t)) in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function f(e) {
		var t = p(e, "string");
		return typeof t == "symbol" ? t : t + "";
	}
	function p(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	function m(e, t) {
		if (e == null) return {};
		var n = {};
		for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
			if (t.indexOf(r) !== -1) continue;
			n[r] = e[r];
		}
		return n;
	}
	var h = class extends t.Component {
		constructor() {
			super(...arguments), this.state = {
				width: this.props.width,
				height: this.props.height,
				propsWidth: this.props.width,
				propsHeight: this.props.height
			}, this.onResize = (e, t) => {
				let n = t.size;
				this.props.onResize ? (e.persist == null || e.persist(), this.setState(n, () => this.props.onResize && this.props.onResize(e, t))) : this.setState(n);
			};
		}
		static getDerivedStateFromProps(e, t) {
			return t.propsWidth !== e.width || t.propsHeight !== e.height ? {
				width: e.width,
				height: e.height,
				propsWidth: e.width,
				propsHeight: e.height
			} : null;
		}
		render() {
			let e = this.props, n = e.handle, i = e.handleSize;
			e.onResize;
			let o = e.onResizeStart, s = e.onResizeStop, l = e.draggableOpts, d = e.minConstraints, f = e.maxConstraints, p = e.lockAspectRatio, h = e.axis;
			e.width, e.height;
			let g = e.resizeHandles, _ = e.style, v = e.transformScale, y = m(e, a);
			return /*#__PURE__*/ t.createElement(r.default, {
				axis: h,
				draggableOpts: l,
				handle: n,
				handleSize: i,
				height: this.state.height,
				lockAspectRatio: p,
				maxConstraints: f,
				minConstraints: d,
				onResizeStart: o,
				onResize: this.onResize,
				onResizeStop: s,
				resizeHandles: g,
				transformScale: v,
				width: this.state.width
			}, /*#__PURE__*/ t.createElement("div", c({}, y, { style: u(u({}, _), {}, {
				width: this.state.width + "px",
				height: this.state.height + "px"
			}) })));
		}
	};
	e.default = h, h.propTypes = u(u({}, i.resizableProps), {}, { children: n.default.element });
})), cn = /* @__PURE__ */ o(((e, t) => {
	t.exports = function() {
		throw Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
	}, t.exports.Resizable = on().default, t.exports.ResizableBox = sn().default;
})), ln = /* @__PURE__ */ o(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? r(e) : typeof define == "function" && define.amd ? define(["exports"], r) : (n = typeof globalThis < "u" ? globalThis : n || self, r(n["fast-equals"] = {}));
	})(e, (function(e) {
		function t(e) {
			return function(t, n, r, i, a, o, s) {
				return e(t, n, s);
			};
		}
		function n(e) {
			return function(t, n, r, i) {
				if (!t || !n || typeof t != "object" || typeof n != "object") return e(t, n, r, i);
				var a = i.get(t), o = i.get(n);
				if (a && o) return a === n && o === t;
				i.set(t, n), i.set(n, t);
				var s = e(t, n, r, i);
				return i.delete(t), i.delete(n), s;
			};
		}
		function r(e, t) {
			var n = {};
			for (var r in e) n[r] = e[r];
			for (var r in t) n[r] = t[r];
			return n;
		}
		function i(e) {
			return e.constructor === Object || e.constructor == null;
		}
		function a(e) {
			return typeof e.then == "function";
		}
		function o(e, t) {
			return e === t || e !== e && t !== t;
		}
		var s = Object.prototype.toString;
		function c(e) {
			var t = e.areArraysEqual, n = e.areDatesEqual, r = e.areMapsEqual, c = e.areObjectsEqual, l = e.areRegExpsEqual, u = e.areSetsEqual, d = e.createIsNestedEqual, f = d(p);
			function p(e, d, p) {
				if (e === d) return !0;
				if (!e || !d || typeof e != "object" || typeof d != "object") return e !== e && d !== d;
				if (i(e) && i(d)) return c(e, d, f, p);
				var m = Array.isArray(e), h = Array.isArray(d);
				if (m || h) return m === h && t(e, d, f, p);
				var g = s.call(e);
				return g === s.call(d) ? g === "[object Date]" ? n(e, d, f, p) : g === "[object RegExp]" ? l(e, d, f, p) : g === "[object Map]" ? r(e, d, f, p) : g === "[object Set]" ? u(e, d, f, p) : g === "[object Object]" || g === "[object Arguments]" ? a(e) || a(d) ? !1 : c(e, d, f, p) : g === "[object Boolean]" || g === "[object Number]" || g === "[object String]" ? o(e.valueOf(), d.valueOf()) : !1 : !1;
			}
			return p;
		}
		function l(e, t, n, r) {
			var i = e.length;
			if (t.length !== i) return !1;
			for (; i-- > 0;) if (!n(e[i], t[i], i, i, e, t, r)) return !1;
			return !0;
		}
		var u = n(l);
		function d(e, t) {
			return o(e.valueOf(), t.valueOf());
		}
		function f(e, t, n, r) {
			var i = e.size === t.size;
			if (!i) return !1;
			if (!e.size) return !0;
			var a = {}, o = 0;
			return e.forEach(function(s, c) {
				if (i) {
					var l = !1, u = 0;
					t.forEach(function(i, d) {
						!l && !a[u] && (l = n(c, d, o, u, e, t, r) && n(s, i, c, d, e, t, r)) && (a[u] = !0), u++;
					}), o++, i = l;
				}
			}), i;
		}
		var p = n(f), m = "_owner", h = Object.prototype.hasOwnProperty;
		function g(e, t, n, r) {
			var i = Object.keys(e), a = i.length;
			if (Object.keys(t).length !== a) return !1;
			for (var o; a-- > 0;) {
				if (o = i[a], o === m) {
					var s = !!e.$$typeof, c = !!t.$$typeof;
					if ((s || c) && s !== c) return !1;
				}
				if (!h.call(t, o) || !n(e[o], t[o], o, o, e, t, r)) return !1;
			}
			return !0;
		}
		var _ = n(g);
		function v(e, t) {
			return e.source === t.source && e.flags === t.flags;
		}
		function y(e, t, n, r) {
			var i = e.size === t.size;
			if (!i) return !1;
			if (!e.size) return !0;
			var a = {};
			return e.forEach(function(o, s) {
				if (i) {
					var c = !1, l = 0;
					t.forEach(function(i, u) {
						!c && !a[l] && (c = n(o, i, s, u, e, t, r)) && (a[l] = !0), l++;
					}), i = c;
				}
			}), i;
		}
		var b = n(y), x = Object.freeze({
			areArraysEqual: l,
			areDatesEqual: d,
			areMapsEqual: f,
			areObjectsEqual: g,
			areRegExpsEqual: v,
			areSetsEqual: y,
			createIsNestedEqual: t
		}), S = Object.freeze({
			areArraysEqual: u,
			areDatesEqual: d,
			areMapsEqual: p,
			areObjectsEqual: _,
			areRegExpsEqual: v,
			areSetsEqual: b,
			createIsNestedEqual: t
		}), C = c(x);
		function w(e, t) {
			return C(e, t, void 0);
		}
		var T = c(r(x, { createIsNestedEqual: function() {
			return o;
		} }));
		function ee(e, t) {
			return T(e, t, void 0);
		}
		var E = c(S);
		function D(e, t) {
			return E(e, t, /* @__PURE__ */ new WeakMap());
		}
		var te = c(r(S, { createIsNestedEqual: function() {
			return o;
		} }));
		function O(e, t) {
			return te(e, t, /* @__PURE__ */ new WeakMap());
		}
		function k(e) {
			return c(r(x, e(x)));
		}
		function ne(e) {
			var t = c(r(S, e(S)));
			return (function(e, n, r) {
				return r === void 0 && (r = /* @__PURE__ */ new WeakMap()), t(e, n, r);
			});
		}
		e.circularDeepEqual = D, e.circularShallowEqual = O, e.createCustomCircularEqual = ne, e.createCustomEqual = k, e.deepEqual = w, e.sameValueZeroEqual = o, e.shallowEqual = ee, Object.defineProperty(e, "__esModule", { value: !0 });
	}));
})), un = cn(), dn = ln();
function fn(e) {
	let { children: t, cols: n, containerWidth: r, margin: i, containerPadding: a, rowHeight: o, maxRows: s, isDraggable: c, isResizable: l, isBounded: u, static: d, useCSSTransforms: f = !0, usePercentages: p = !1, transformScale: m = 1, positionStrategy: h, dragThreshold: g = 0, droppingPosition: _, className: v = "", style: y, handle: b = "", cancel: x = "", x: S, y: C, w, h: T, minW: ee = 1, maxW: E = Infinity, minH: te = 1, maxH: O = Infinity, i: k, resizeHandles: ne, resizeHandle: re, constraints: j = Ce, layoutItem: se, layout: de = [], onDragStart: fe, onDrag: pe, onDragStop: me, onResizeStart: he, onResize: ge, onResizeStop: _e } = e, [ve, M] = (0, D.useState)(!1), [N, ye] = (0, D.useState)(!1), be = (0, D.useRef)(null), xe = (0, D.useRef)({
		left: 0,
		top: 0
	}), P = (0, D.useRef)({
		top: 0,
		left: 0,
		width: 0,
		height: 0
	}), Se = (0, D.useRef)(void 0), F = (0, D.useRef)(de);
	F.current = de;
	let I = (0, D.useRef)(null), ke = (0, D.useRef)(null), L = (0, D.useRef)(!1), Ae = (0, D.useRef)({
		x: 0,
		y: 0
	}), R = (0, D.useRef)(!1), z = (0, D.useMemo)(() => ({
		cols: n,
		containerPadding: a,
		containerWidth: r,
		margin: i,
		maxRows: s,
		rowHeight: o
	}), [
		n,
		a,
		r,
		i,
		s,
		o
	]), je = (0, D.useMemo)(() => ({
		cols: n,
		maxRows: s,
		containerWidth: r,
		containerHeight: 0,
		rowHeight: o,
		margin: i,
		layout: []
	}), [
		n,
		s,
		r,
		o,
		i
	]), Me = (0, D.useCallback)(() => ({
		...je,
		layout: F.current
	}), [je]), Ne = (0, D.useMemo)(() => se ?? {
		i: k,
		x: S,
		y: C,
		w,
		h: T,
		minW: ee,
		maxW: E,
		minH: te,
		maxH: O
	}, [
		se,
		k,
		S,
		C,
		w,
		T,
		ee,
		E,
		te,
		O
	]), Pe = (0, D.useCallback)((e) => {
		if (h?.calcStyle) return h.calcStyle(e);
		if (f) return Ee(e);
		let t = De(e);
		return p ? {
			...t,
			left: Oe(e.left / r),
			width: Oe(e.width / r)
		} : t;
	}, [
		h,
		f,
		p,
		r
	]), Ie = (0, D.useCallback)((e, { node: t }) => {
		if (!fe) return;
		let { offsetParent: n } = t;
		if (!n) return;
		let r = n.getBoundingClientRect(), i = t.getBoundingClientRect(), a = i.left / m, o = r.left / m, s = i.top / m, c = r.top / m, l;
		if (h?.calcDragPosition) {
			let t = e;
			l = h.calcDragPosition(t.clientX, t.clientY, t.clientX - i.left, t.clientY - i.top);
		} else l = {
			left: a - o + n.scrollLeft,
			top: s - c + n.scrollTop
		};
		if (xe.current = l, g > 0) {
			let t = e;
			Ae.current = {
				x: t.clientX,
				y: t.clientY
			}, L.current = !0, R.current = !1, M(!0);
			return;
		}
		M(!0);
		let u = ce(z, l.top, l.left), { x: d, y: f } = we(j, Ne, u.x, u.y, Me());
		fe(k, d, f, {
			e,
			node: t,
			newPosition: l
		});
	}, [
		fe,
		m,
		z,
		h,
		g,
		j,
		Ne,
		Me,
		k
	]), Le = (0, D.useCallback)((e, { node: t, deltaX: n, deltaY: a }) => {
		if (!pe || !ve) return;
		let s = e;
		if (L.current && !R.current) {
			let n = s.clientX - Ae.current.x, r = s.clientY - Ae.current.y;
			if (Math.hypot(n, r) < g) return;
			if (R.current = !0, L.current = !1, fe) {
				let n = ce(z, xe.current.top, xe.current.left), { x: r, y: i } = we(j, Ne, n.x, n.y, Me());
				fe(k, r, i, {
					e,
					node: t,
					newPosition: xe.current
				});
			}
		}
		let c = xe.current.top + a, l = xe.current.left + n;
		if (u) {
			let { offsetParent: e } = t;
			if (e) {
				let t = e.clientHeight - ae(T, o, i[1]);
				c = ue(c, 0, t);
				let n = ie(z), a = r - ae(w, n, i[0]);
				l = ue(l, 0, a);
			}
		}
		let d = {
			top: c,
			left: l
		};
		xe.current = d;
		let f = ce(z, c, l), { x: p, y: m } = we(j, Ne, f.x, f.y, Me());
		pe(k, p, m, {
			e,
			node: t,
			newPosition: d
		});
	}, [
		pe,
		fe,
		ve,
		g,
		u,
		T,
		o,
		i,
		z,
		r,
		w,
		k,
		j,
		Ne,
		Me
	]), Re = (0, D.useCallback)((e, { node: t }) => {
		if (!me || !ve) return;
		let n = L.current;
		if (L.current = !1, R.current = !1, Ae.current = {
			x: 0,
			y: 0
		}, n) {
			M(!1), xe.current = {
				left: 0,
				top: 0
			};
			return;
		}
		let { left: r, top: i } = xe.current, a = {
			top: i,
			left: r
		};
		M(!1), xe.current = {
			left: 0,
			top: 0
		};
		let o = ce(z, i, r), { x: s, y: c } = we(j, Ne, o.x, o.y, Me());
		me(k, s, c, {
			e,
			node: t,
			newPosition: a
		});
	}, [
		me,
		ve,
		z,
		j,
		Ne,
		Me,
		k
	]);
	I.current = Ie, ke.current = Le;
	let ze = (0, D.useCallback)((e, { node: t, size: n, handle: i }, a, o) => {
		let s = o === "onResizeStart" ? he : o === "onResize" ? ge : _e;
		if (!s) return;
		let c;
		c = t ? Fe(i, a, n, r) : {
			...n,
			top: a.top,
			left: a.left
		}, P.current = c;
		let l = le(z, c.width, c.height), { w: u, h: d } = Te(j, Ne, l.w, l.h, i, Me());
		s(k, u, d, {
			e: e.nativeEvent ?? e,
			node: t,
			size: c,
			handle: i
		});
	}, [
		he,
		ge,
		_e,
		r,
		z,
		k,
		j,
		Ne,
		Me
	]), Be = (0, D.useCallback)((e, t) => {
		ye(!0);
		let n = oe(z, S, C, w, T), r = {
			...t,
			handle: t.handle
		};
		ze(e, r, n, "onResizeStart");
	}, [
		ze,
		z,
		S,
		C,
		w,
		T
	]), Ve = (0, D.useCallback)((e, t) => {
		let n = oe(z, S, C, w, T), r = {
			...t,
			handle: t.handle
		};
		ze(e, r, n, "onResize");
	}, [
		ze,
		z,
		S,
		C,
		w,
		T
	]), He = (0, D.useCallback)((e, t) => {
		ye(!1), P.current = {
			top: 0,
			left: 0,
			width: 0,
			height: 0
		};
		let n = oe(z, S, C, w, T), r = {
			...t,
			handle: t.handle
		};
		ze(e, r, n, "onResizeStop");
	}, [
		ze,
		z,
		S,
		C,
		w,
		T
	]);
	(0, D.useEffect)(() => {
		if (!_) return;
		let e = be.current;
		if (!e) return;
		let t = Se.current || {
			left: 0,
			top: 0
		}, n = ve && (_.left !== t.left || _.top !== t.top);
		if (!ve) {
			let t = {
				node: e,
				deltaX: _.left,
				deltaY: _.top,
				lastX: 0,
				lastY: 0,
				x: _.left,
				y: _.top
			};
			I.current?.(_.e, t);
		} else if (n) {
			let t = {
				node: e,
				deltaX: _.left - xe.current.left,
				deltaY: _.top - xe.current.top,
				lastX: xe.current.left,
				lastY: xe.current.top,
				x: _.left,
				y: _.top
			};
			ke.current?.(_.e, t);
		}
		Se.current = _;
	}, [
		_,
		ve,
		k
	]);
	let Ue = oe(z, S, C, w, T, ve ? xe.current : null, N ? P.current : null), We = D.Children.only(t), Ge = ie(z), Ke = [ae(ee, Ge, i[0]), ae(te, o, i[1])], qe = [ae(E, Ge, i[0]), ae(O, o, i[1])], Je = We.props, Ye = Je.className, Xe = Je.style, Ze = D.cloneElement(We, {
		ref: be,
		className: ut("react-grid-item", Ye, v, {
			static: d,
			resizing: N,
			"react-draggable": c,
			"react-draggable-dragging": ve,
			dropping: !!_,
			cssTransforms: f
		}),
		style: {
			...y,
			...Xe,
			...Pe(Ue)
		}
	}), Qe = re;
	return Ze = /* @__PURE__ */ (0, A.jsx)(un.Resizable, {
		draggableOpts: { disabled: !l },
		className: l ? void 0 : "react-resizable-hide",
		width: Ue.width,
		height: Ue.height,
		minConstraints: Ke,
		maxConstraints: qe,
		onResizeStart: Be,
		onResize: Ve,
		onResizeStop: He,
		transformScale: m,
		resizeHandles: ne,
		handle: Qe,
		children: Ze
	}), Ze = /* @__PURE__ */ (0, A.jsx)(Qt, {
		disabled: !c,
		onStart: Ie,
		onDrag: Le,
		onStop: Re,
		handle: b,
		cancel: ".react-resizable-handle" + (x ? "," + x : ""),
		scale: m,
		nodeRef: be,
		children: Ze
	}), Ze;
}
var pn = () => {}, mn = "react-grid-layout", hn = !1;
try {
	hn = /firefox/i.test(navigator.userAgent);
} catch {}
function gn(e, t) {
	let n = D.Children.toArray(e), r = D.Children.toArray(t);
	if (n.length !== r.length) return !1;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], i = r[e];
		if (t?.key !== i?.key) return !1;
	}
	return !0;
}
function _n(e, t, n, r) {
	let i = [], a = /* @__PURE__ */ new Set();
	D.Children.forEach(t, (t) => {
		if (!D.isValidElement(t) || t.key === null) return;
		let n = String(t.key);
		a.add(n);
		let r = e.find((e) => e.i === n);
		if (r) i.push(N(r));
		else {
			let e = t.props["data-grid"];
			e ? i.push({
				i: n,
				x: e.x ?? 0,
				y: e.y ?? 0,
				w: e.w ?? 1,
				h: e.h ?? 1,
				minW: e.minW,
				maxW: e.maxW,
				minH: e.minH,
				maxH: e.maxH,
				static: e.static,
				isDraggable: e.isDraggable,
				isResizable: e.isResizable,
				resizeHandles: e.resizeHandles,
				isBounded: e.isBounded
			}) : i.push({
				i: n,
				x: 0,
				y: _e(i),
				w: 1,
				h: 1
			});
		}
	});
	let o = P(i, { cols: n });
	return r.compact(o, n);
}
function vn(e) {
	let { children: t, width: n, gridConfig: r, dragConfig: i, resizeConfig: a, dropConfig: o, positionStrategy: s = ze, compactor: c, constraints: l = Ce, layout: u = [], droppingItem: d, autoSize: f = !0, className: p = "", style: m = {}, innerRef: h, onLayoutChange: g = pn, onDragStart: _ = pn, onDrag: v = pn, onDragStop: y = pn, onResizeStart: b = pn, onResize: x = pn, onResizeStop: S = pn, onDrop: C = pn, onDropDragOver: w = pn } = e, T = (0, D.useMemo)(() => ({
		...Be,
		...r
	}), [r]), ee = (0, D.useMemo)(() => ({
		...Ve,
		...i
	}), [i]), E = (0, D.useMemo)(() => ({
		...He,
		...a
	}), [a]), te = (0, D.useMemo)(() => ({
		...Ue,
		...o
	}), [o]), { cols: O, rowHeight: k, maxRows: ne, margin: re, containerPadding: j } = T, { enabled: oe, bounded: ce, handle: le, cancel: ue, threshold: de } = ee, { enabled: fe, handles: me, handleComponent: he } = E, { enabled: ge, defaultItem: M, onDragOver: ye } = te, be = c ?? $e("vertical"), P = be.type, F = be.allowOverlap, I = be.preventCollision ?? !1, we = (0, D.useMemo)(() => d ?? {
		i: "__dropping-elem__",
		...M
	}, [d, M]), Te = s.type === "transform", Ee = s.scale, De = j ?? re, [Oe, ke] = (0, D.useState)(!1), [L, Ae] = (0, D.useState)(() => _n(u, t, O, be)), [R, z] = (0, D.useState)(null), [je, Me] = (0, D.useState)(!1), [Ne, Pe] = (0, D.useState)(null), [Fe, Ie] = (0, D.useState)(), Le = (0, D.useRef)(null), Re = (0, D.useRef)(null), We = (0, D.useRef)(null), Ge = (0, D.useRef)(0), Ke = (0, D.useRef)(L), qe = (0, D.useRef)(u), Je = (0, D.useRef)(t), Ye = (0, D.useRef)(P), Xe = (0, D.useRef)(L);
	Xe.current = L, (0, D.useEffect)(() => {
		ke(!0), (0, dn.deepEqual)(L, u) || g(L);
	}, []), (0, D.useEffect)(() => {
		if (R || Ne) return;
		let e = !(0, dn.deepEqual)(u, qe.current), n = !gn(t, Je.current), r = P !== Ye.current;
		if (e || n || r) {
			let n = _n(e ? u : L, t, O, be);
			(0, dn.deepEqual)(n, L) || Ae(n);
		}
		qe.current = u, Je.current = t, Ye.current = P;
	}, [
		u,
		t,
		O,
		P,
		be,
		R,
		Ne,
		L
	]), (0, D.useEffect)(() => {
		if (!R && !(0, dn.deepEqual)(L, Ke.current)) {
			Ke.current = L;
			let e = L.filter((e) => e.i !== we.i);
			g(e);
		}
	}, [
		L,
		R,
		g,
		we.i
	]);
	let Ze = (0, D.useMemo)(() => {
		if (!f) return;
		let e = _e(L), t = De[1];
		return e * k + (e - 1) * re[1] + t * 2 + "px";
	}, [
		f,
		L,
		k,
		re,
		De
	]), Qe = (0, D.useCallback)((e, t, n, r) => {
		let i = Xe.current, a = ve(i, e);
		if (!a) return;
		let o = {
			w: a.w,
			h: a.h,
			x: a.x,
			y: a.y,
			i: e
		};
		Le.current = N(a), We.current = i, z(o), _(i, a, a, null, r.e, r.node);
	}, [_]), et = (0, D.useCallback)((e, t, n, r) => {
		let i = Xe.current, a = Le.current, o = ve(i, e);
		if (!o) return;
		let s = {
			w: o.w,
			h: o.h,
			x: o.x,
			y: o.y,
			i: e
		}, c = Se(i, o, t, n, !0, I, P, O, F);
		v(c, a, o, s, r.e, r.node), Ae(be.compact(c, O)), z(s);
	}, [
		I,
		P,
		O,
		F,
		be,
		v
	]), tt = (0, D.useCallback)((e, t, n, r) => {
		if (!R) return;
		let i = Xe.current, a = Le.current, o = ve(i, e);
		if (!o) return;
		let s = Se(i, o, t, n, !0, I, P, O, F), c = be.compact(s, O);
		y(c, a, o, null, r.e, r.node);
		let l = We.current;
		Le.current = null, We.current = null, z(null), Ae(c), l && !(0, dn.deepEqual)(l, c) && g(c);
	}, [
		R,
		I,
		P,
		O,
		F,
		be,
		y,
		g
	]), nt = (0, D.useCallback)((e, t, n, r) => {
		let i = Xe.current, a = ve(i, e);
		a && (Re.current = N(a), We.current = i, Me(!0), b(i, a, a, null, r.e, r.node));
	}, [b]), rt = (0, D.useCallback)((e, t, n, r) => {
		let i = Xe.current, a = Re.current, { handle: o } = r, s = !1, c, l, [u, d] = xe(i, e, (e) => (c = e.x, l = e.y, [
			"sw",
			"w",
			"nw",
			"n",
			"ne"
		].includes(o) && ([
			"sw",
			"nw",
			"w"
		].includes(o) && (c = e.x + (e.w - t), t = e.x !== c && c < 0 ? e.w : t, c = c < 0 ? 0 : c), [
			"ne",
			"n",
			"nw"
		].includes(o) && (l = e.y + (e.h - n), n = e.y !== l && l < 0 ? e.h : n, l = l < 0 ? 0 : l), s = !0), I && !F && pe(i, {
			...e,
			w: t,
			h: n,
			x: c ?? e.x,
			y: l ?? e.y
		}).filter((t) => t.i !== e.i).length > 0 && (l = e.y, n = e.h, c = e.x, t = e.w, s = !1), e.w = t, e.h = n, e));
		if (!d) return;
		let f = u;
		s && c !== void 0 && l !== void 0 && (f = Se(u, d, c, l, !0, I, P, O, F));
		let p = {
			w: d.w,
			h: d.h,
			x: d.x,
			y: d.y,
			i: e,
			static: !0
		};
		x(f, a, d, p, r.e, r.node), Ae(be.compact(f, O)), z(p);
	}, [
		I,
		P,
		O,
		F,
		be,
		x
	]), it = (0, D.useCallback)((e, t, n, r) => {
		let i = Xe.current, a = Re.current, o = ve(i, e), s = be.compact(i, O);
		S(s, a, o ?? null, null, r.e, r.node);
		let c = We.current;
		Re.current = null, We.current = null, z(null), Me(!1), Ae(s), c && !(0, dn.deepEqual)(c, s) && g(s);
	}, [
		O,
		be,
		S,
		g
	]), at = (0, D.useCallback)(() => {
		let e = Xe.current;
		if (!e.some((e) => e.i === we.i)) {
			Pe(null), z(null), Ie(void 0);
			return;
		}
		let t = be.compact(e.filter((e) => e.i !== we.i), O);
		Ae(t), Pe(null), z(null), Ie(void 0);
	}, [
		we.i,
		O,
		be
	]), ot = (0, D.useCallback)((e) => {
		if (e.preventDefault(), e.stopPropagation(), hn && !e.nativeEvent.target?.classList.contains(mn)) return !1;
		let t = ye ? ye(e.nativeEvent) : w(e);
		if (t === !1) return Ne && at(), !1;
		let { dragOffsetX: r = 0, dragOffsetY: i = 0, ...a } = t ?? {}, o = {
			...we,
			...a
		}, s = e.currentTarget.getBoundingClientRect(), c = {
			cols: O,
			margin: re,
			maxRows: ne,
			rowHeight: k,
			containerWidth: n,
			containerPadding: De
		}, l = ie(c), u = ae(o.w, l, re[0]), d = ae(o.h, k, re[1]), f = u / 2, p = d / 2, m = e.clientX - s.left + r - f, h = e.clientY - s.top + i - p, g = Math.max(0, m), _ = Math.max(0, h), v = {
			left: g / Ee,
			top: _ / Ee,
			e: e.nativeEvent
		};
		if (Ne) Fe && (Fe.left !== v.left || Fe.top !== v.top) && Ie(v);
		else {
			let e = se(c, _, g, o.w, o.h);
			Pe(/* @__PURE__ */ (0, A.jsx)("div", {}, o.i)), Ie(v);
			let t = Xe.current.filter((e) => e.i !== o.i);
			Ae([...t, {
				...o,
				x: e.x,
				y: e.y,
				static: !1,
				isDraggable: !0
			}]);
		}
	}, [
		Ne,
		Fe,
		we,
		ye,
		w,
		at,
		Ee,
		O,
		re,
		ne,
		k,
		n,
		De
	]), st = (0, D.useCallback)((e) => {
		e.preventDefault(), e.stopPropagation(), Ge.current--, Ge.current < 0 && (Ge.current = 0), Ge.current === 0 && at();
	}, [at]), ct = (0, D.useCallback)((e) => {
		e.preventDefault(), e.stopPropagation(), Ge.current++;
	}, []), B = (0, D.useCallback)((e) => {
		e.preventDefault(), e.stopPropagation();
		let t = Xe.current, n = t.find((e) => e.i === we.i);
		Ge.current = 0, at(), C(t, n, e.nativeEvent);
	}, [
		we.i,
		at,
		C
	]), lt = (0, D.useCallback)((e, t) => {
		if (!e || !e.key) return null;
		let r = ve(L, String(e.key));
		if (!r) return null;
		let i = typeof r.isDraggable == "boolean" ? r.isDraggable : !r.static && oe, a = typeof r.isResizable == "boolean" ? r.isResizable : !r.static && fe, o = r.resizeHandles || [...me], c = i && ce && r.isBounded !== !1, u = he;
		return /* @__PURE__ */ (0, A.jsx)(fn, {
			containerWidth: n,
			cols: O,
			margin: re,
			containerPadding: De,
			maxRows: ne,
			rowHeight: k,
			cancel: ue,
			handle: le,
			onDragStart: Qe,
			onDrag: et,
			onDragStop: tt,
			onResizeStart: nt,
			onResize: rt,
			onResizeStop: it,
			isDraggable: i,
			isResizable: a,
			isBounded: c,
			useCSSTransforms: Te && Oe,
			usePercentages: !Oe,
			transformScale: Ee,
			positionStrategy: s,
			dragThreshold: de,
			w: r.w,
			h: r.h,
			x: r.x,
			y: r.y,
			i: r.i,
			minH: r.minH,
			minW: r.minW,
			maxH: r.maxH,
			maxW: r.maxW,
			static: r.static,
			droppingPosition: t ? Fe : void 0,
			resizeHandles: o,
			resizeHandle: u,
			constraints: l,
			layoutItem: r,
			layout: L,
			children: e
		}, r.i);
	}, [
		L,
		n,
		O,
		re,
		De,
		ne,
		k,
		ue,
		le,
		Qe,
		et,
		tt,
		nt,
		rt,
		it,
		oe,
		fe,
		ce,
		Te,
		Oe,
		Ee,
		s,
		de,
		Fe,
		me,
		he,
		l
	]), dt = () => R ? /* @__PURE__ */ (0, A.jsx)(fn, {
		w: R.w,
		h: R.h,
		x: R.x,
		y: R.y,
		i: R.i,
		className: `react-grid-placeholder ${je ? "placeholder-resizing" : ""}`,
		containerWidth: n,
		cols: O,
		margin: re,
		containerPadding: De,
		maxRows: ne,
		rowHeight: k,
		isDraggable: !1,
		isResizable: !1,
		isBounded: !1,
		useCSSTransforms: Te,
		transformScale: Ee,
		constraints: l,
		layout: L,
		children: /* @__PURE__ */ (0, A.jsx)("div", {})
	}) : null, ft = ut(mn, p), pt = {
		height: Ze,
		...m
	};
	return /* @__PURE__ */ (0, A.jsxs)("div", {
		ref: h,
		className: ft,
		style: pt,
		onDrop: ge ? B : void 0,
		onDragLeave: ge ? st : void 0,
		onDragEnter: ge ? ct : void 0,
		onDragOver: ge ? ot : void 0,
		children: [
			D.Children.map(t, (e) => D.isValidElement(e) ? lt(e) : null),
			ge && Ne && lt(Ne, !0),
			dt()
		]
	});
}
var yn = {
	lg: 1200,
	md: 996,
	sm: 768,
	xs: 480,
	xxs: 0
}, bn = {
	lg: 12,
	md: 10,
	sm: 6,
	xs: 4,
	xxs: 2
}, xn = () => {};
function Sn(e, t, n, r) {
	let i = [];
	D.Children.forEach(t, (t) => {
		if (!D.isValidElement(t) || t.key === null) return;
		let n = String(t.key), r = e.find((e) => e.i === n);
		if (r) i.push({
			...r,
			i: n
		});
		else {
			let e = t.props["data-grid"];
			e ? i.push({
				i: n,
				x: e.x ?? 0,
				y: e.y ?? 0,
				w: e.w ?? 1,
				h: e.h ?? 1,
				minW: e.minW,
				maxW: e.maxW,
				minH: e.minH,
				maxH: e.maxH,
				static: e.static,
				isDraggable: e.isDraggable,
				isResizable: e.isResizable,
				resizeHandles: e.resizeHandles,
				isBounded: e.isBounded
			}) : i.push({
				i: n,
				x: 0,
				y: _e(i),
				w: 1,
				h: 1
			});
		}
	});
	let a = P(i, { cols: n });
	return r.compact(a, n);
}
function Cn(e) {
	let { children: t, width: n, breakpoint: r, breakpoints: i = yn, cols: a = bn, layouts: o = {}, rowHeight: s = 150, maxRows: c = Infinity, margin: l = [10, 10], containerPadding: u = null, compactor: d, onBreakpointChange: f = xn, onLayoutChange: p = xn, onWidthChange: m = xn, ...h } = e, g = d ?? $e("vertical"), _ = g.type, v = g.allowOverlap, y = (0, D.useMemo)(() => r ?? tt(i, n), []), b = (0, D.useMemo)(() => nt(y, a), [y, a]), x = (0, D.useMemo)(() => rt(o, i, y, y, b, _), []), [S, C] = (0, D.useState)(y), [w, T] = (0, D.useState)(b), [ee, E] = (0, D.useState)(x), [te, O] = (0, D.useState)(o), k = (0, D.useRef)(n), ne = (0, D.useRef)(r), re = (0, D.useRef)(i), j = (0, D.useRef)(a), ie = (0, D.useRef)(o), ae = (0, D.useRef)(_), oe = (0, D.useRef)(te);
	(0, D.useEffect)(() => {
		oe.current = te;
	}, [te]);
	let se = (0, D.useMemo)(() => (0, dn.deepEqual)(o, ie.current) ? null : rt(o, i, S, S, w, g), [
		o,
		i,
		S,
		w,
		g
	]), ce = se ?? ee;
	(0, D.useEffect)(() => {
		se !== null && (E(se), O(o), oe.current = o, ie.current = o);
	}, [se, o]), (0, D.useEffect)(() => {
		if (_ !== ae.current) {
			let e = g.compact(ye(ce), w), t = {
				...oe.current,
				[S]: e
			};
			E(e), O(t), oe.current = t, p(e, t), ae.current = _;
		}
	}, [
		_,
		g,
		ce,
		w,
		v,
		S,
		p
	]), (0, D.useEffect)(() => {
		let e = n !== k.current, o = r !== ne.current, s = !(0, dn.deepEqual)(i, re.current), c = !(0, dn.deepEqual)(a, j.current);
		if (e || o || s || c) {
			let e = r ?? tt(i, n), o = nt(e, a), d = S;
			if (d !== e || s || c) {
				let n = { ...oe.current };
				n[d] || (n[d] = ye(ee));
				let r = rt(n, i, e, d, o, g);
				r = Sn(r, t, o, g), n[e] = r, C(e), T(o), E(r), O(n), oe.current = n, f(e, o), p(r, n);
			}
			let h = it(l, e), _ = u ? it(u, e) : null;
			m(n, h, o, _), k.current = n, ne.current = r, re.current = i, j.current = a;
		}
	}, [
		n,
		r,
		i,
		a,
		S,
		w,
		ee,
		t,
		g,
		_,
		v,
		l,
		u,
		f,
		p,
		m
	]);
	let le = (0, D.useCallback)((e) => {
		let t = {
			...oe.current,
			[S]: e
		};
		E(e), O(t), oe.current = t, p(e, t);
	}, [S, p]), ue = (0, D.useMemo)(() => it(l, S), [l, S]), de = (0, D.useMemo)(() => u === null ? null : it(u, S), [u, S]), fe = (0, D.useMemo)(() => ({
		cols: w,
		rowHeight: s,
		maxRows: c,
		margin: ue,
		containerPadding: de
	}), [
		w,
		s,
		c,
		ue,
		de
	]);
	return /* @__PURE__ */ (0, A.jsx)(vn, {
		...h,
		width: n,
		gridConfig: fe,
		compactor: g,
		onLayoutChange: le,
		layout: ce,
		children: t
	});
}
function wn(e) {
	let { children: t, width: n, breakpoint: r, breakpoints: i, cols: a, layouts: o, onBreakpointChange: s, onLayoutChange: c, onWidthChange: l, rowHeight: u, maxRows: d, margin: f, containerPadding: p, droppingItem: m, compactType: h, preventCollision: g = !1, allowOverlap: _ = !1, verticalCompact: v, isDraggable: y = !0, isBounded: b = !1, draggableHandle: x, draggableCancel: S, isResizable: C = !0, resizeHandles: w = ["se"], resizeHandle: T, isDroppable: ee = !1, useCSSTransforms: E = !0, transformScale: D = 1, autoSize: te, className: O, style: k, innerRef: ne, onDragStart: re, onDrag: j, onDragStop: ie, onResizeStart: ae, onResize: oe, onResizeStop: se, onDrop: ce, onDropDragOver: le } = e, ue = h === void 0 ? "vertical" : h;
	v === !1 && (ue = null);
	let de = {
		enabled: y,
		bounded: b,
		handle: x,
		cancel: S
	}, fe = {
		enabled: C,
		handles: w,
		handleComponent: T
	}, pe = { enabled: ee }, me;
	me = E ? D === 1 ? Ie : Re(D) : Le;
	let he = $e(ue, _, g);
	return /* @__PURE__ */ (0, A.jsx)(Cn, {
		width: n,
		breakpoint: r,
		breakpoints: i,
		cols: a,
		layouts: o,
		rowHeight: u,
		maxRows: d,
		margin: f,
		containerPadding: p,
		compactor: he,
		dragConfig: de,
		resizeConfig: fe,
		dropConfig: pe,
		positionStrategy: me,
		droppingItem: m,
		autoSize: te,
		className: O,
		style: k,
		innerRef: ne,
		onBreakpointChange: s,
		onLayoutChange: c,
		onWidthChange: l,
		onDragStart: re,
		onDrag: j,
		onDragStop: ie,
		onResizeStart: ae,
		onResize: oe,
		onResizeStop: se,
		onDrop: ce,
		onDropDragOver: le,
		children: t
	});
}
wn.displayName = "ResponsiveReactGridLayout";
var Tn = wn, En = "react-grid-layout";
function Dn(e) {
	function t(t) {
		let { measureBeforeMount: n = !1, className: r, style: i, ...a } = t, [o, s] = (0, D.useState)(1280), [c, l] = (0, D.useState)(!1), u = (0, D.useRef)(null), d = (0, D.useRef)(null);
		return (0, D.useEffect)(() => {
			l(!0);
		}, []), (0, D.useEffect)(() => {
			let e = u.current;
			if (!(e instanceof HTMLElement)) return;
			let t = null, n = new ResizeObserver((e) => {
				if (e[0]) {
					let n = Math.round(e[0].contentRect.width);
					t !== null && cancelAnimationFrame(t), t = requestAnimationFrame(() => {
						s((e) => e === n ? e : n), t = null;
					});
				}
			});
			return n.observe(e), d.current = n, () => {
				t !== null && cancelAnimationFrame(t), n.unobserve(e), n.disconnect();
			};
		}, [c]), n && !c ? /* @__PURE__ */ (0, A.jsx)("div", {
			className: ut(r, En),
			style: i,
			ref: u
		}) : /* @__PURE__ */ (0, A.jsx)(e, {
			innerRef: u,
			className: r,
			style: i,
			...a,
			width: o
		});
	}
	return t.displayName = `WidthProvider(${e.displayName || e.name || "Component"})`, t;
}
//#endregion
//#region src/features/dashboard/layout.ts
var On = {
	lg: 1200,
	md: 996,
	sm: 768,
	xs: 480,
	xxs: 0
}, kn = {
	lg: 12,
	md: 8,
	sm: 4,
	xs: 2,
	xxs: 2
}, An = {
	S: {
		w: 3,
		h: 3
	},
	M: {
		w: 3,
		h: 4
	},
	L: {
		w: 6,
		h: 4
	},
	XL: {
		w: 6,
		h: 8
	}
}, H = (e, t, n, r, i) => ({
	i: e,
	x: t,
	y: n,
	w: r,
	h: i,
	minW: 1,
	minH: 1,
	maxW: 12,
	maxH: 12
}), jn = {
	lg: [
		H("activity-history", 0, 0, 6, 4),
		H("automations", 6, 0, 6, 4),
		H("backup-restore", 0, 4, 6, 4),
		H("access-control", 6, 4, 6, 4),
		H("alarm-configuration", 0, 8, 12, 5),
		H("security-status", 0, 13, 12, 2)
	],
	md: [
		H("activity-history", 0, 0, 4, 4),
		H("automations", 4, 0, 4, 4),
		H("backup-restore", 0, 4, 4, 4),
		H("access-control", 4, 4, 4, 4),
		H("alarm-configuration", 0, 8, 8, 5),
		H("security-status", 0, 13, 8, 2)
	],
	sm: [
		H("activity-history", 0, 0, 4, 4),
		H("automations", 0, 4, 4, 4),
		H("backup-restore", 0, 8, 4, 4),
		H("access-control", 0, 12, 4, 4),
		H("alarm-configuration", 0, 16, 4, 5),
		H("security-status", 0, 21, 4, 2)
	],
	xs: [
		H("activity-history", 0, 0, 2, 4),
		H("automations", 0, 4, 2, 4),
		H("backup-restore", 0, 8, 2, 4),
		H("access-control", 0, 12, 2, 4),
		H("alarm-configuration", 0, 16, 2, 5),
		H("security-status", 0, 21, 2, 2)
	],
	xxs: [
		H("activity-history", 0, 0, 2, 4),
		H("automations", 0, 4, 2, 4),
		H("backup-restore", 0, 8, 2, 4),
		H("access-control", 0, 12, 2, 4),
		H("alarm-configuration", 0, 16, 2, 5),
		H("security-status", 0, 21, 2, 2)
	]
};
function Mn(e, t, n) {
	return Object.entries(An).map(([r, i]) => ({
		size: r,
		distance: Math.abs(Math.min(i.w, n) - e) + Math.abs(i.h - t)
	})).sort((e, t) => e.distance - t.distance)[0]?.size ?? "S";
}
function Nn(e, t) {
	let n = An[e];
	return {
		w: Math.min(n.w, t),
		h: n.h
	};
}
function Pn(e, t) {
	return e.some((e) => e.i !== t.i && t.x < e.x + e.w && t.x + t.w > e.x && t.y < e.y + e.h && t.y + t.h > e.y);
}
function Fn(e, t, n) {
	for (let r = 0; r < 240; r++) for (let i = 0; i <= n - t.w; i++) {
		let n = {
			...t,
			x: i,
			y: r
		};
		if (!Pn(e, n)) return n;
	}
	return {
		...t,
		x: 0,
		y: Math.max(0, ...e.map((e) => e.y + e.h))
	};
}
function In(e) {
	let t = {};
	return Object.keys(kn).forEach((n) => {
		let r = kn[n], i = Array.isArray(e?.[n]) ? e[n] : [], a = new Map(i.map((e) => [e.i, e])), o = (jn[n] || []).map((e) => {
			let t = a.get(e.i);
			if (!t) return { ...e };
			let n = Math.min(Math.max(1, t.w), r);
			return {
				...e,
				...t,
				w: n,
				x: Math.max(0, Math.min(t.x, r - n)),
				y: Math.max(0, t.y)
			};
		}), s = new Set(o.map((e) => e.i)), c = i.filter((e) => !s.has(e.i)).map((e) => ({
			...e,
			w: Math.min(Math.max(1, e.w), r),
			x: Math.max(0, Math.min(e.x, r - Math.min(e.w, r))),
			y: Math.max(0, e.y)
		}));
		t[n] = [...o, ...c];
	}), t;
}
var Ln = class {
	key(e, t) {
		return `argus:dashboard-layout:${e}:${t}`;
	}
	read(e, t) {
		try {
			let n = JSON.parse(localStorage.getItem(this.key(e, t)) || "null");
			return n?.layoutVersion != null && n.layoutVersion >= 1 ? n : null;
		} catch {
			return null;
		}
	}
	write(e, t, n) {
		localStorage.setItem(this.key(e, t), JSON.stringify(n));
	}
	async load(e, t) {
		let n = this.read(e, t);
		return n ? In(n.layouts) : null;
	}
	async save(e, t, n) {
		let r = this.read(e, t);
		this.write(e, t, {
			layoutVersion: 1,
			layouts: n,
			visibility: r?.visibility,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
	}
	async loadVisibility(e, t) {
		return this.read(e, t)?.visibility ?? null;
	}
	async saveVisibility(e, t, n) {
		let r = this.read(e, t);
		this.write(e, t, {
			layoutVersion: 1,
			layouts: r?.layouts ?? In(null),
			visibility: n,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
	}
	async reset(e, t) {
		localStorage.removeItem(this.key(e, t));
	}
}, Rn = Dn(Tn);
function zn({ widget: e, node: t, editing: n, size: r, onSize: i, onHide: a, onReset: o }) {
	let s = (0, D.useRef)(null);
	(0, D.useLayoutEffect)(() => {
		s.current?.appendChild(t), t.draggable = !1, t.querySelector(":scope > .panel-edit-overlay")?.remove(), n ? t.setAttribute("inert", "") : t.removeAttribute("inert");
	}, [t, n]);
	let c = (e, t) => {
		if (typeof window._argusT == "function") {
			let t = window._argusT(e);
			if (t && t !== e) return t;
		}
		return t;
	};
	return /* @__PURE__ */ (0, A.jsxs)("article", {
		className: "argus-widget",
		children: [/* @__PURE__ */ (0, A.jsxs)("header", {
			className: "argus-widget__edit-header",
			children: [
				/* @__PURE__ */ (0, A.jsx)("button", {
					type: "button",
					className: "argus-widget__drag-handle",
					"aria-label": `${c("drag", "Mover")} ${e.title}`,
					title: c("drag", "Arrastrar para mover"),
					children: "⋮⋮"
				}),
				/* @__PURE__ */ (0, A.jsx)("strong", { children: e.title }),
				/* @__PURE__ */ (0, A.jsxs)("details", {
					className: "argus-widget__options",
					children: [/* @__PURE__ */ (0, A.jsx)("summary", {
						"aria-label": `${c("settings", "Opciones")} ${e.title}`,
						title: c("settings", "Opciones"),
						children: "•••"
					}), /* @__PURE__ */ (0, A.jsxs)("div", {
						className: "argus-widget__menu",
						children: [
							/* @__PURE__ */ (0, A.jsx)("span", { children: c("size", "Tamaño") }),
							/* @__PURE__ */ (0, A.jsx)("div", { children: [
								"S",
								"M",
								"L",
								"XL"
							].map((e) => /* @__PURE__ */ (0, A.jsx)("button", {
								type: "button",
								className: e === r ? "active" : "",
								onClick: () => i(e),
								children: e
							}, e)) }),
							/* @__PURE__ */ (0, A.jsx)("button", {
								type: "button",
								onClick: o,
								children: c("reset_widget", "Restablecer widget")
							}),
							/* @__PURE__ */ (0, A.jsx)("button", {
								type: "button",
								onClick: a,
								children: c("hide_widget", "Ocultar widget")
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, A.jsx)("div", {
			className: `argus-widget__content${e.kind === "access-control" ? " argus-widget__content--access" : ""}`,
			ref: s
		})]
	});
}
function Bn({ widgets: e, nodes: t, storage: n, userId: r, dashboardId: i, onEditing: a, registerEditor: o }) {
	let s = (0, D.useMemo)(() => Object.fromEntries(e.map((e) => [e.id, e.visible])), [e]), [c, l] = (0, D.useState)(jn), [u, d] = (0, D.useState)(s), [f, p] = (0, D.useState)(!1), [m, h] = (0, D.useState)(!1), [g, _] = (0, D.useState)("lg"), [v, y] = (0, D.useState)(""), [, b] = (0, D.useState)(0), [x, S] = (0, D.useState)(0), C = (0, D.useRef)(jn), w = (0, D.useRef)(void 0), T = (0, D.useRef)(!1), ee = (0, D.useRef)(null), E = (e, t) => {
		if (typeof window._argusT == "function") {
			let t = window._argusT(e);
			if (t && t !== e) return t;
		}
		return t;
	};
	(0, D.useEffect)(() => {
		let e = () => b((e) => e + 1);
		return window.addEventListener("argus-lang-changed", e), () => window.removeEventListener("argus-lang-changed", e);
	}, []), (0, D.useEffect)(() => {
		o(p);
	}, [o]), (0, D.useEffect)(() => {
		let e = !0;
		return h(!1), Promise.all([n.load(r, i), n.loadVisibility?.(r, i)]).then(([t, n]) => {
			if (!e) return;
			let r = In(t);
			l(r), C.current = r, n && d({
				...s,
				...n
			}), h(!0);
		}), () => {
			e = !1;
		};
	}, [
		n,
		r,
		i,
		s
	]), (0, D.useEffect)(() => {
		a(f), m && T.current && !f && n.save(r, i, C.current), T.current = f;
	}, [
		f,
		m,
		a,
		n,
		r,
		i
	]), (0, D.useEffect)(() => {
		let e = (e) => {
			f && (e.key === "Escape" ? (p(!1), y(E("edit_dashboard_done", "Edición finalizada"))) : e.key === "Enter" && e.target === document.body && p(!1));
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [f]), (0, D.useEffect)(() => {
		if (typeof ResizeObserver > "u" || !ee.current) return;
		let e = 0, t = new ResizeObserver(() => {
			cancelAnimationFrame(e), e = requestAnimationFrame(() => {
				try {
					window.dispatchEvent(new Event("resize"));
				} catch {}
			});
		});
		return t.observe(ee.current), () => {
			cancelAnimationFrame(e), t.disconnect();
		};
	}, []), (0, D.useEffect)(() => () => clearTimeout(w.current), []);
	let te = (e, t = !1) => {
		l(e), C.current = e, clearTimeout(w.current), w.current = window.setTimeout(() => n.save(r, i, e), t ? 0 : 550);
	}, O = (e, t) => {
		let a = {
			...u,
			[e]: t
		};
		d(a), n.saveVisibility?.(r, i, a), y(t ? E("widget_visible", "Widget visible") : E("hide_widget", "Widget oculto"));
	}, k = (e, t, n) => {
		let r = C.current, i = r[g] || [], a = i.filter((t) => t.i !== e), o = Pn(a, t) ? Fn(a, t, kn[g]) : t, s = {
			...r,
			[g]: i.map((t) => t.i === e ? o : t)
		};
		te(s, !0), y(n);
	}, ne = (e, t) => {
		let n = (C.current[g] || []).find((t) => t.i === e);
		if (!n) return;
		let r = Nn(t, kn[g]);
		k(e, {
			...n,
			...r,
			x: Math.max(0, Math.min(n.x, kn[g] - r.w))
		}, `${E("size", "Tamaño")} ${t}`);
	}, re = (e) => {
		let t = (jn[g] || []).find((t) => t.i === e);
		t && k(e, { ...t }, E("reset_widget", "Widget restablecido"));
	}, ie = (e, t, n) => {
		if (!n?.i) return;
		let r = kn[g], i = Math.min(r, Math.max(1, n.w)), a = Math.max(1, n.h), o = {
			...n,
			w: i,
			h: a,
			x: Math.max(0, Math.min(n.x, r - i))
		};
		k(n.i, o, `${E("size", "Tamaño")}: ${i}x${a}`);
	}, ae = async () => {
		try {
			localStorage.removeItem(`argus:dashboard-layout:${r}:${i}`);
		} catch {}
		await n.reset(r, i);
		let e = In(null);
		d(s), l(e), C.current = e, S((e) => e + 1), te(e, !0), y(E("reset_dashboard_done", "Diseño predeterminado restaurado"));
	}, oe = c[g] || [];
	return m ? /* @__PURE__ */ (0, A.jsxs)("section", {
		className: `argus-dashboard ${f ? "argus-dashboard--editing" : ""}`,
		ref: ee,
		children: [
			/* @__PURE__ */ (0, A.jsxs)("nav", {
				className: "argus-dashboard__toolbar",
				"aria-label": E("edit_dashboard", "Edición del tablero"),
				children: [/* @__PURE__ */ (0, A.jsx)("button", {
					type: "button",
					onClick: () => p((e) => !e),
					children: f ? "✓ " + E("edit_dashboard_done", "Listo") : "❖ " + E("edit_dashboard", "Editar tablero")
				}), f && /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)("button", {
					type: "button",
					className: "argus-btn-reset-dashboard",
					onClick: ae,
					children: E("reset_dashboard", "Restablecer diseño")
				}), /* @__PURE__ */ (0, A.jsx)("div", {
					className: "argus-dashboard__visibility",
					"aria-label": E("hide_widget", "Widgets ocultos"),
					children: e.filter((e) => u[e.id] === !1).map((e) => /* @__PURE__ */ (0, A.jsxs)("button", {
						type: "button",
						onClick: () => O(e.id, !0),
						children: [
							E("show", "Mostrar"),
							" ",
							e.title,
							" "
						]
					}, e.id))
				})] })]
			}),
			/* @__PURE__ */ (0, A.jsx)("div", {
				className: "argus-dashboard__feedback",
				"aria-live": "polite",
				children: f ? v : ""
			}),
			/* @__PURE__ */ (0, A.jsx)(j, { children: /* @__PURE__ */ (0, A.jsx)(Rn, {
				className: "argus-dashboard-grid",
				layouts: c,
				breakpoints: On,
				cols: kn,
				rowHeight: 92,
				margin: [16, 16],
				containerPadding: [16, 16],
				compactType: "vertical",
				preventCollision: !1,
				allowOverlap: !1,
				isBounded: !0,
				isDraggable: f,
				isResizable: f,
				draggableHandle: ".argus-widget__drag-handle",
				resizeHandles: ["se"],
				onBreakpointChange: (e) => _(e),
				onLayoutChange: (e, t) => {
					f && (l(t), C.current = t);
				},
				onResizeStop: ie,
				onDragStop: (e, t, n) => {
					if (n?.i) {
						if (Pn((C.current[g] || []).filter((e) => e.i !== n.i), n)) {
							l({ ...C.current }), y(E("position_collision", "Posición bloqueada por colisión"));
							return;
						}
						k(n.i, n, E("position_saved", "Posición guardada"));
					}
				},
				useCSSTransforms: !0,
				children: e.filter((e) => u[e.id] !== !1 && t.has(e.id)).map((e) => {
					let n = oe.find((t) => t.i === e.id), r = n ? Mn(n.w, n.h, kn[g]) : e.size;
					return /* @__PURE__ */ (0, A.jsx)("div", { children: /* @__PURE__ */ (0, A.jsx)(j, { children: /* @__PURE__ */ (0, A.jsx)(zn, {
						widget: e,
						node: t.get(e.id),
						editing: f,
						size: r,
						onSize: (t) => ne(e.id, t),
						onHide: () => O(e.id, !1),
						onReset: () => re(e.id)
					}) }) }, e.id);
				})
			}, x) })
		]
	}) : /* @__PURE__ */ (0, A.jsx)("section", {
		className: "argus-dashboard",
		ref: ee,
		children: /* @__PURE__ */ (0, A.jsx)("div", {
			className: "argus-dashboard__feedback",
			"aria-live": "polite",
			children: E("loading_dashboard", "Cargando tablero…")
		})
	});
}
//#endregion
//#region src/features/dashboard/components/SecurityConsole.css?inline
var Vn = ".entry{position:relative;overflow:hidden;container:argus-console/inline-size;-webkit-backdrop-filter:blur(40px)saturate(190%)brightness(1.12)!important;background:linear-gradient(135deg,#ffffff1f 0%,#ffffff08 100%)!important;border:1px solid #ffffff38!important;border-radius:28px!important;transition:transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s!important;box-shadow:inset 0 1.5px #ffffff73,inset 0 -1px #ffffff1a,0 24px 64px #00000073,0 4px 16px #00000040!important}.security-console,.entry-content,.entry-content.security-console{box-shadow:none!important;box-shadow:none!important;background:0 0!important;border:none!important}.security-console .console-hud{box-shadow:none!important;background:0 0!important;border:none!important}.console-hud-loc{box-sizing:border-box!important;text-overflow:ellipsis!important;white-space:nowrap!important;-webkit-backdrop-filter:blur(24px)saturate(190%)!important;letter-spacing:.04em!important;color:#fff!important;text-shadow:0 1px 3px #00000080!important;background:linear-gradient(135deg,#fff3 0%,#ffffff0d 100%)!important;border:1px solid #ffffff47!important;border-radius:999px!important;align-items:center!important;max-width:clamp(140px,26vw,260px)!important;height:38px!important;padding:0 16px!important;font-size:11.5px!important;font-weight:850!important;display:inline-flex!important;overflow:hidden!important;transform:translate(0,0)!important;box-shadow:inset 0 1.5px #ffffff73,inset 0 -1px #0003,0 8px 24px #00000059!important}.argus-connection-pill{-webkit-backdrop-filter:blur(24px)saturate(190%)!important;letter-spacing:.05em!important;color:#fff!important;text-shadow:0 1px 3px #00000080!important;white-space:nowrap!important;background:linear-gradient(135deg,#ffffff29 0%,#ffffff0a 100%)!important;border:1px solid #ffffff3d!important;border-radius:999px!important;align-items:center!important;gap:8px!important;max-width:max-content!important;height:38px!important;padding:0 16px!important;font-size:11px!important;font-weight:850!important;display:inline-flex!important;transform:translate(0,0)!important;box-shadow:inset 0 1.5px #ffffff61,inset 0 -1px #00000026,0 8px 24px #00000059!important}.argus-connection-dot{background:#10b981!important;border-radius:50%!important;width:8px!important;height:8px!important;box-shadow:0 0 12px #10b981!important}.argus-connection-pill[data-online=false] .argus-connection-dot{background:#ef4444!important;box-shadow:0 0 12px #ef4444!important}.console-hud-right{min-width:0!important;box-shadow:none!important;background:0 0!important;border:0!important;justify-content:flex-end!important;align-items:center!important;gap:8px!important;height:38px!important;display:inline-flex!important}.console-system-badge{box-sizing:border-box!important;letter-spacing:.02em!important;text-transform:none!important;white-space:nowrap!important;-webkit-backdrop-filter:blur(24px)saturate(190%)!important;border-radius:999px!important;align-items:center!important;height:38px!important;padding:0 18px!important;font-size:12px!important;font-weight:800!important;display:inline-flex!important;transform:translate(0,0)!important}.console-system-badge--disarmed{color:#34d399!important;text-shadow:0 0 10px #10b981b3!important;background:linear-gradient(135deg,#10b98152 0%,#0596691f 100%)!important;border:1.5px solid #10b981a6!important;box-shadow:inset 0 1.5px #ffffff80,0 0 24px #10b98166,0 8px 24px #00000059!important}.console-system-badge--armed_home,.console-system-badge--armed_away,.console-system-badge--armed_night,.console-system-badge--pending{color:#fbbf24!important;text-shadow:0 0 10px #f59e0bcc!important;background:linear-gradient(135deg,#f59e0b59 0%,#d9770624 100%)!important;border:1.5px solid #f59e0bb3!important;box-shadow:inset 0 1.5px #ffffff8c,0 0 24px #f59e0b73,0 8px 24px #00000059!important}.console-system-badge--triggered{color:#f87171!important;text-shadow:0 0 12px #ef4444d9!important;background:linear-gradient(135deg,#ef44446b 0%,#b91c1c29 100%)!important;border:1.5px solid #ef4444d9!important;animation:.9s ease-in-out infinite argusTriggerBadgePulse!important;box-shadow:inset 0 1.5px #fff9,0 0 32px #ef444499,0 8px 24px #00000059!important}@keyframes argusTriggerBadgePulse{0%,to{opacity:.85;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}.security-console .entry-icon{will-change:transform;animation:5s ease-in-out infinite float-icon;transform:translate(0,0);box-shadow:none!important;background:0 0!important;border:none!important;flex-direction:column!important;justify-content:center!important;align-items:center!important;display:flex!important}.security-console .entry-icon svg{filter:drop-shadow(0 14px 28px #0009)drop-shadow(0 0 45px #10b9818c)!important;width:100%!important;max-width:220px!important;height:auto!important}@keyframes float-icon{0%,to{transform:translate(0,0)scale(1)}50%{transform:translateY(-6px)scale(1.015)}}.entry.argus-waiting .entry-icon>svg{transform-origin:50%!important;filter:drop-shadow(0 0 26px #ffb839f2)saturate(1.35)!important;animation:1.05s ease-in-out infinite argusArmingShield!important}.argus-shield-status{color:#ffd27a;letter-spacing:.12em;text-align:center;background:#ff950033;border:1px solid #ffb8398c;border-radius:999px;width:max-content;max-width:200px;margin:7px auto 0;padding:5px 14px;font-size:9.5px;font-weight:850;animation:1.05s ease-in-out infinite argusArmingLabel;display:block;box-shadow:inset 0 1px #fff6,0 6px 18px #0000004d}@keyframes argusArmingShield{0%,to{opacity:.55;transform:scale(.94)}50%{opacity:1;transform:scale(1.07)}}@keyframes argusArmingLabel{0%,to{opacity:.62}50%{opacity:1}}.security-console .liquid-stack{width:100%!important;box-shadow:none!important;background:0 0!important;border:none!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;display:grid!important}.security-console .liquid-btn{text-align:center!important;letter-spacing:.03em!important;-webkit-backdrop-filter:blur(24px)saturate(190%)!important;color:#fff!important;text-shadow:0 1px 3px #00000080!important;cursor:pointer!important;background:linear-gradient(135deg,#ffffff2e 0%,#ffffff0d 100%)!important;border:1px solid #ffffff40!important;border-radius:20px!important;flex-direction:column!important;justify-content:center!important;align-items:center!important;gap:5px!important;min-height:68px!important;padding:12px 6px!important;font-size:11.5px!important;font-weight:850!important;line-height:1.15!important;transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s,background .25s,border-color .25s!important;display:flex!important;transform:translate(0,0)!important;box-shadow:inset 0 1.5px #ffffff6b,inset 0 -1px #0003,0 10px 28px #00000059!important}.security-console .liquid-btn:hover{background:linear-gradient(135deg,#ffffff3d 0%,#ffffff14 100%)!important;border-color:#fff6!important;transform:translateY(-3px)translate(0,0)scale(1.025)!important;box-shadow:inset 0 1.5px #ffffff8c,0 14px 34px #00000073!important}.security-console .liquid-btn span:first-child,.security-console .liquid-btn .mode-btn-icon{filter:drop-shadow(0 2px 6px #0006)!important;font-size:20px!important;line-height:1!important}.security-console .liquid-btn span:last-child{color:#fff!important;font-size:11px!important;font-weight:850!important}.security-console .btn-home.active{background:linear-gradient(135deg,#fb8c00 0%,#d97706 100%)!important;border:1px solid #fed7aad9!important;box-shadow:inset 0 1.5px #fff9,0 12px 32px #fb8c0099!important}.security-console .btn-away.active{background:linear-gradient(135deg,#e53935 0%,#b91c1c 100%)!important;border:1px solid #fecacad9!important;box-shadow:inset 0 1.5px #fff9,0 12px 32px #e5393599!important}.security-console .btn-night.active{background:linear-gradient(135deg,#1e88e5 0%,#1d4ed8 100%)!important;border:1px solid #bfdbfed9!important;box-shadow:inset 0 1.5px #fff9,0 12px 32px #1e88e599!important}.security-console .console-sensors{scrollbar-width:none;grid-template-columns:1fr;gap:8px;max-height:none!important;box-shadow:none!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;filter:none!important;isolation:auto!important;contain:none!important;background:0 0!important;border:none!important;outline:none!important;margin:0!important;padding:0!important;display:grid!important;overflow:visible!important}.security-console .console-sensors::-webkit-scrollbar{display:none}.security-console .console-sensors.console-sensors--compact,.security-console .console-sensors[data-count=\"3\"],.security-console .console-sensors[data-count=\"4\"],.security-console .console-sensors[data-count=\"5\"],.security-console .console-sensors[data-count=\"6\"]{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:6px!important}.security-console .console-sensors.console-sensors--micro,.security-console .console-sensors[data-count=\"7\"],.security-console .console-sensors[data-count=\"8\"],.security-console .console-sensors[data-count=\"9\"],.security-console .console-sensors[data-count=\"10\"],.security-console .console-sensors[data-count=\"11\"],.security-console .console-sensors[data-count=\"12\"]{scrollbar-width:thin;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:4px!important;max-height:280px!important;overflow-y:auto!important}.console-sensor{color:#fff!important;text-shadow:0 1px 3px #00000080!important;box-sizing:border-box!important;background:linear-gradient(135deg,#ffffff29 0%,#ffffff0a 100%)!important;border:1px solid #ffffff3d!important;border-radius:999px!important;grid-template-columns:auto minmax(0,1fr) auto!important;align-items:center!important;gap:10px!important;min-height:44px!important;padding:10px 16px!important;transition:transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s,border-color .2s!important;display:grid!important;box-shadow:inset 0 1.5px #ffffff61,inset 0 -1px #00000026,0 4px 12px #00000040!important}.console-sensor:hover{transform:translateY(-2px)scale(1.02)!important;box-shadow:inset 0 1.5px #ffffff80,0 8px 18px #00000059!important}.console-sensor.open{background:linear-gradient(135deg,#ef444459 0%,#b91c1c29 100%)!important;border-color:#ef4444a6!important;box-shadow:inset 0 1.5px #ffffff73,0 0 16px #ef444459,0 4px 12px #00000040!important}.console-sensor-icon{filter:drop-shadow(0 2px 4px #0006)!important;justify-content:center!important;align-items:center!important;font-size:18px!important;display:flex!important}.console-sensor-name{letter-spacing:.02em!important;text-overflow:ellipsis!important;white-space:nowrap!important;color:#fff!important;font-size:11.5px!important;font-weight:850!important;overflow:hidden!important}.console-sensor-state{letter-spacing:.02em!important;text-transform:none!important;white-space:nowrap!important;align-items:center!important;gap:4px!important;font-size:11px!important;font-weight:800!important;display:inline-flex!important}.console-empty{text-align:center!important;color:#ffffffa6!important;border:1px dashed #ffffff40!important;border-radius:20px!important;padding:24px!important;font-size:12px!important;font-weight:800!important}@media (width>=901px){.entry:not(.ios-fullscreen) .security-console{box-shadow:none!important;background:0 0!important;grid-template-rows:auto 1fr!important;grid-template-columns:minmax(200px,350px) 1fr minmax(220px,380px)!important;justify-content:center!important;align-items:center!important;gap:16px 36px!important;padding:24px 28px 20px!important;display:grid!important}.entry:not(.ios-fullscreen) .security-console .console-hud{display:contents!important}.entry:not(.ios-fullscreen) .security-console .console-hud-loc{grid-area:1/1!important;place-self:center start!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .argus-connection-pill{grid-area:1/2!important;place-self:center!important;margin:0!important;position:static!important;transform:none!important}.entry:not(.ios-fullscreen) .security-console .console-hud-right{grid-area:1/3!important;place-self:center end!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack{grid-area:2/1!important;align-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .entry-icon{grid-area:2/2!important;place-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .console-sensors{grid-area:2/3!important;align-self:center!important;margin:0!important}}@container argus-console (width>=540px){.entry:not(.ios-fullscreen) .security-console{box-shadow:none!important;background:0 0!important;grid-template-rows:auto 1fr!important;grid-template-columns:minmax(170px,1fr) minmax(140px,200px) minmax(180px,1.2fr)!important;justify-content:center!important;align-items:center!important;gap:14px 20px!important;padding:20px 24px 18px!important;display:grid!important}.entry:not(.ios-fullscreen) .security-console .console-hud{display:contents!important}.entry:not(.ios-fullscreen) .security-console .console-hud-loc{grid-area:1/1!important;place-self:center start!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .argus-connection-pill{grid-area:1/2!important;place-self:center!important;margin:0!important;position:static!important;transform:none!important}.entry:not(.ios-fullscreen) .security-console .console-hud-right{grid-area:1/3!important;place-self:center end!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack{grid-area:2/1!important;align-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .entry-icon{grid-area:2/2!important;place-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .console-sensors{grid-area:2/3!important;align-self:center!important;margin:0!important}}@media (width<=539px){.entry:not(.ios-fullscreen) .security-console{box-sizing:border-box!important;width:100%!important;box-shadow:none!important;background:0 0!important;flex-direction:column!important;align-items:center!important;gap:14px!important;padding:18px 14px!important;display:flex!important}.entry:not(.ios-fullscreen) .security-console .console-hud{width:100%!important;box-shadow:none!important;background:0 0!important;flex-flow:wrap!important;justify-content:center!important;align-items:center!important;gap:8px!important;display:flex!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack,.entry:not(.ios-fullscreen) .security-console .console-sensors{width:100%!important;max-width:440px!important}}@container argus-console (width<=539px){.entry:not(.ios-fullscreen) .security-console{box-sizing:border-box!important;width:100%!important;box-shadow:none!important;background:0 0!important;flex-direction:column!important;align-items:center!important;gap:14px!important;padding:18px 14px!important;display:flex!important}.entry:not(.ios-fullscreen) .security-console .console-hud{width:100%!important;box-shadow:none!important;background:0 0!important;flex-flow:wrap!important;justify-content:center!important;align-items:center!important;gap:8px!important;display:flex!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack,.entry:not(.ios-fullscreen) .security-console .console-sensors{width:100%!important;max-width:440px!important}}.entry.ios-fullscreen{box-sizing:border-box!important;width:100dvw!important;height:100%!important;min-height:100dvh!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;background:0 0!important;border:none!important;border-radius:0!important;flex-direction:column!important;margin:0!important;padding:0!important;display:flex!important;position:relative!important;overflow:visible!important}.entry.ios-fullscreen .entry-exit-fs{top:max(16px, env(safe-area-inset-top))!important;left:max(16px, env(safe-area-inset-left))!important;z-index:100000!important;-webkit-backdrop-filter:blur(20px)!important;color:#fff!important;cursor:pointer!important;background:#000000a6!important;border:1px solid #ffffff4d!important;border-radius:16px!important;padding:10px 16px!important;font-size:20px!important;font-weight:900!important;position:fixed!important;box-shadow:inset 0 1px #fff6,0 8px 24px #00000080!important}@media (width<=900px),(orientation:portrait){.entry.ios-fullscreen .security-console{padding:max(64px, calc(env(safe-area-inset-top) + 48px)) 16px max(32px, env(safe-area-inset-bottom))!important;box-sizing:border-box!important;width:100%!important;max-width:480px!important;min-height:100%!important;box-shadow:none!important;background:0 0!important;flex-direction:column!important;justify-content:flex-start!important;align-items:center!important;gap:16px!important;margin:0 auto!important;display:flex!important}.entry.ios-fullscreen .security-console .console-hud{width:100%!important;box-shadow:none!important;background:0 0!important;flex-flow:wrap!important;justify-content:center!important;align-items:center!important;gap:8px!important;display:flex!important}.entry.ios-fullscreen .security-console .entry-icon{margin:6px auto!important;display:flex!important}.entry.ios-fullscreen .security-console .entry-icon svg{max-width:min(50vw,220px)!important}.entry.ios-fullscreen .security-console .liquid-stack{width:100%!important;max-width:440px!important}.entry.ios-fullscreen .security-console .console-sensors{width:100%!important;max-width:440px!important;max-height:300px!important;box-shadow:none!important;background:0 0!important}}@media (width>=901px) and (orientation:landscape),(width>=901px),(orientation:landscape) and (height<=600px){.entry.ios-fullscreen .security-console{padding:max(56px, env(safe-area-inset-top)) max(48px, env(safe-area-inset-right)) max(32px, env(safe-area-inset-bottom)) max(48px, env(safe-area-inset-left))!important;box-sizing:border-box!important;width:100%!important;max-width:1600px!important;height:100%!important;min-height:100dvh!important;box-shadow:none!important;background:0 0!important;grid-template-rows:auto 1fr!important;grid-template-columns:minmax(280px,380px) 1fr minmax(280px,440px)!important;justify-content:center!important;align-items:center!important;gap:20px 48px!important;margin:0 auto!important;display:grid!important}.entry.ios-fullscreen .security-console .console-hud{display:contents!important}.entry.ios-fullscreen .security-console .console-hud-loc{grid-area:1/1!important;place-self:center start!important;margin:0!important}.entry.ios-fullscreen .security-console .argus-connection-pill{grid-area:1/2!important;place-self:center!important;margin:0!important;position:static!important;transform:none!important}.entry.ios-fullscreen .security-console .console-hud-right{grid-area:1/3!important;place-self:center end!important;margin:0!important}.entry.ios-fullscreen .security-console .liquid-stack{grid-area:2/1!important;align-self:center!important;width:100%!important}.entry.ios-fullscreen .security-console .entry-icon{grid-area:2/2!important;place-self:center!important}.entry.ios-fullscreen .security-console .entry-icon svg{max-width:min(35vw,360px)!important}.entry.ios-fullscreen .security-console .console-sensors{width:100%!important;max-height:520px!important;box-shadow:none!important;background:0 0!important;grid-area:2/3!important;align-self:center!important}}";
//#endregion
//#region src/features/dashboard/components/SensorChip.tsx
function Hn({ id: e, name: t, isOpen: n, isBlocking: r, isBypassed: i, battery: a, iconHtml: o, statusLabelOpen: s, statusLabelClosed: c, bypassedLabel: l }) {
	let u = null;
	if (a !== null) {
		let e = a === 0, t = a <= 10 && !e, n = e ? "🔋 ❌" : `🔋 ${a}%`;
		(e || t) && (u = /* @__PURE__ */ (0, A.jsx)("span", {
			style: {
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
			},
			children: n
		}));
	}
	let d = i ? "#94a3b8" : r ? "#fde047" : n ? "#f87171" : "#34d399", f = i ? "none" : r ? "pulse 1s infinite" : n ? "pulse 2s infinite" : "none", p = i ? "#94a3b8" : r ? "#fde047" : n ? "#f87171" : "#34d399", m = i ? .6 : 1, h = n ? s : c, g = i ? `${l || "Omitido"} · ${h}` : h, _ = `${t}: ${g}${a === null ? "" : ` (Batería: ${a}%)`}`;
	return /* @__PURE__ */ (0, A.jsxs)("div", {
		className: `console-sensor ${n && !i ? "open" : ""}`,
		style: { opacity: m },
		title: _,
		"aria-label": _,
		tabIndex: 0,
		role: "status",
		children: [
			/* @__PURE__ */ (0, A.jsx)("span", {
				className: "console-sensor-icon",
				"aria-hidden": "true",
				style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: d,
					animation: f
				},
				dangerouslySetInnerHTML: { __html: o }
			}),
			/* @__PURE__ */ (0, A.jsx)("span", {
				className: "console-sensor-name",
				title: t,
				style: { color: r && !i ? "#fde047" : "#ffffff" },
				children: t
			}),
			/* @__PURE__ */ (0, A.jsxs)("span", {
				className: "console-sensor-state",
				style: { color: p },
				children: [g, u]
			})
		]
	});
}
//#endregion
//#region src/features/dashboard/components/SecurityConsole.tsx
function Un({ panel: e, isFullscreen: t, onToggleFullscreen: n, onUnlockKiosk: r }) {
	let [i, a] = (0, D.useState)(0);
	(0, D.useEffect)(() => {
		let t = () => a((e) => e + 1);
		return e.addEventListener("argus-state-update", t), window.addEventListener("argus-state-update", t), () => {
			e.removeEventListener("argus-state-update", t), window.removeEventListener("argus-state-update", t);
		};
	}, [e]);
	let o = e._dashboard, s = e._hass, c = o?.entries?.[0];
	if (!c) {
		let t = e._cardConfig?.entity || e._config?.entity || Object.keys(s?.states || {}).find((e) => e.startsWith("alarm_control_panel.")) || "alarm_control_panel.argus";
		if (!t || !s?.states?.[t]) return null;
		c = { entity_id: t };
	}
	let l = e._renderEntryBackground?.(e._weatherState, e._isNight) || "", u = c.entity_id && s?.states[c.entity_id] ? s.states[c.entity_id].state : "unknown", d = (t) => e._t?.(t) || t, f = e._homeName || e._ui?.home_name || d("home_fallback") || "Hogar", p = u === "triggered", m = e._hass ? e._hass.connected !== !1 : !1, h = !!s?.states?.[c.entity_id]?.attributes?.arming_waiting_for_sensors, g = u === "pending" || h, _ = () => {
		if (p) return d("system_triggered") || "ALARMA ACTIVADA";
		if (h) {
			let e = s?.states?.[c.entity_id]?.attributes?.arming_blocking_sensors || [];
			return e.length ? (d("waiting_sensors_count") || "ESPERANDO {count} SENSOR(ES)").replace("{count}", String(e.length)) : d("waiting_sensors") || "ESPERANDO SENSORES";
		}
		return u === "disarmed" ? d("system_disarmed") || "SISTEMA DESARMADO" : u === "armed_home" ? (d("system_armed") || "ARMADO") + " · " + (d("mode_home") || "CASA") : u === "armed_away" ? (d("system_armed") || "ARMADO") + " · " + (d("mode_away") || "AUSENTE") : u === "armed_night" ? (d("system_armed") || "ARMADO") + " · " + (d("mode_night") || "NOCHE") : d("system_armed") || "ARMADO";
	}, v = () => e._getIntelligentSVG?.(h ? "pending" : u, null, e._isNight, p, 0) || "", y = [], b = s?.states?.[c.entity_id]?.attributes?.arming_blocking_sensors || [];
	if (c.entity_id) {
		let t = e._ui?.modes?.__by_entity__?.[c.entity_id] || e._ui?.modes || {}, n = t[u.replace("armed_", "")] || {};
		p && (n = [
			"away",
			"home",
			"night"
		].map((e) => t[e]).find((e) => (e?.sensors || []).some((e) => [
			"on",
			"open",
			"unlocked",
			"recording",
			"active",
			"motion"
		].includes(s?.states?.[e]?.state))) || {});
		let r = n.sensors || [];
		if (u === "disarmed" || g || !r.length) {
			let n = /* @__PURE__ */ new Set();
			[
				"away",
				"home",
				"night"
			].forEach((e) => {
				t[e]?.sensors && t[e].sensors.forEach((e) => n.add(e));
			}), Array.isArray(e._sensors) && e._sensors.forEach((e) => n.add(typeof e == "string" ? e : e.entity_id || e.id)), n.size === 0 && s?.states && Object.keys(s.states).forEach((e) => {
				e.startsWith("binary_sensor.") && (e.includes("door") || e.includes("window") || e.includes("motion") || e.includes("puerta") || e.includes("porton") || e.includes("patio") || e.includes("sensor") || e.includes("seguridad")) && n.add(e);
			}), r = Array.from(n);
		}
		let i = n.bypassed_sensors || [];
		r.forEach((e) => {
			y.push({
				id: e,
				isBypassed: i.includes(e)
			});
		});
	}
	let x = [...y].sort((t, n) => {
		let r = h && b.includes(t.id), i = h && b.includes(n.id);
		if (r && !i) return -1;
		if (!r && i) return 1;
		let a = e.isSensorActive ? e.isSensorActive(s?.states[t.id]) : s?.states[t.id]?.state === "on", o = e.isSensorActive ? e.isSensorActive(s?.states[n.id]) : s?.states[n.id]?.state === "on";
		return a && !o ? -1 : !a && o ? 1 : 0;
	}), S = x.length, C = S >= 7 ? "console-sensors--micro" : S >= 3 ? "console-sensors--compact" : "", w = y.map((e) => e.id), T = e._renderBatteryAlerts?.(w) || "";
	return /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)("style", { dangerouslySetInnerHTML: { __html: Vn } }), /* @__PURE__ */ (0, A.jsxs)("div", {
		className: `entry ${t ? "ios-fullscreen" : ""} ${h ? "argus-waiting" : ""}`,
		style: {
			position: "relative",
			width: "100%",
			height: "100%"
		},
		children: [
			/* @__PURE__ */ (0, A.jsx)("div", { dangerouslySetInnerHTML: { __html: l } }),
			e._kioskLocked && !t && /* @__PURE__ */ (0, A.jsxs)("button", {
				className: "btn-unlock-kiosk",
				onClick: r,
				style: {
					position: "absolute",
					top: "16px",
					right: "16px",
					zIndex: 99,
					padding: "8px 14px",
					background: "rgba(220,38,38,0.85)",
					color: "white",
					border: "none",
					borderRadius: "10px",
					fontWeight: 600,
					fontSize: "13px",
					cursor: "pointer",
					backdropFilter: "blur(8px)",
					boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
				},
				children: ["🔓 ", d("unlock_kiosk") || "Desbloquear kiosco"]
			}),
			t ? /* @__PURE__ */ (0, A.jsx)("button", {
				className: "ghost entry-exit-fs",
				onClick: n,
				title: d("fullscreen_title") || "Salir de pantalla completa",
				style: {
					position: "fixed",
					top: "max(16px, env(safe-area-inset-top))",
					left: "max(16px, env(safe-area-inset-left))",
					zIndex: 1e5,
					padding: "10px 16px",
					fontSize: "20px",
					fontWeight: 900,
					background: "rgba(0,0,0,.65)",
					backdropFilter: "blur(16px)",
					borderRadius: "14px",
					color: "white",
					border: "1px solid rgba(255,255,255,.25)",
					boxShadow: "0 8px 24px rgba(0,0,0,.5)",
					cursor: "pointer"
				},
				children: "✕"
			}) : /* @__PURE__ */ (0, A.jsx)("button", {
				className: "ghost fs-btn entry-fs",
				onClick: n,
				title: d("fullscreen_title") || "Pantalla completa",
				style: {
					position: "absolute",
					bottom: "20px",
					right: "20px",
					zIndex: 10,
					padding: "10px 15px",
					fontSize: "18px",
					background: "rgba(0,0,0,0.45)",
					backdropFilter: "blur(12px)",
					borderRadius: "14px",
					opacity: .85,
					color: "white",
					border: "1px solid rgba(255,255,255,0.22)",
					boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
					cursor: "pointer"
				},
				children: "⛶"
			}),
			T && /* @__PURE__ */ (0, A.jsx)("div", {
				className: "battery-alerts-wrapper",
				dangerouslySetInnerHTML: { __html: T }
			}),
			/* @__PURE__ */ (0, A.jsxs)("div", {
				className: "entry-content security-console",
				children: [
					/* @__PURE__ */ (0, A.jsxs)("div", {
						className: "console-hud",
						children: [
							/* @__PURE__ */ (0, A.jsxs)("span", {
								className: "console-hud-loc",
								children: ["🏡 ", f]
							}),
							/* @__PURE__ */ (0, A.jsxs)("div", {
								className: "argus-connection-pill",
								"data-online": m ? "true" : "false",
								children: [/* @__PURE__ */ (0, A.jsx)("i", { className: "argus-connection-dot" }), /* @__PURE__ */ (0, A.jsx)("span", {
									className: "argus-connection-label",
									children: m ? d("connected") || "CONECTADO" : d("disconnected") || "DESCONECTADO"
								})]
							}),
							/* @__PURE__ */ (0, A.jsx)("div", {
								className: "console-hud-right",
								children: /* @__PURE__ */ (0, A.jsx)("span", {
									className: `console-system-badge console-system-badge--${p ? "triggered" : u}`,
									children: _()
								})
							})
						]
					}),
					/* @__PURE__ */ (0, A.jsxs)("div", {
						className: "entry-icon",
						children: [/* @__PURE__ */ (0, A.jsx)("div", { dangerouslySetInnerHTML: { __html: v() } }), h && /* @__PURE__ */ (0, A.jsx)("span", {
							className: "argus-shield-status",
							children: b.length ? d("waiting_sensors") || "ESPERANDO SENSORES" : d("arming") || "ARMANDO…"
						})]
					}),
					/* @__PURE__ */ (0, A.jsxs)("div", {
						className: "liquid-stack",
						children: [
							/* @__PURE__ */ (0, A.jsx)("button", {
								className: `liquid-btn btn-home ${u === "armed_home" ? "active" : ""}`,
								onClick: () => e._handleAction(0, "home"),
								dangerouslySetInnerHTML: { __html: e._modeButtonIcon("home") + `<span>${d("mode_home") || "CASA"}</span>` }
							}),
							/* @__PURE__ */ (0, A.jsx)("button", {
								className: `liquid-btn btn-away ${u === "armed_away" ? "active" : ""}`,
								onClick: () => e._handleAction(0, "away"),
								dangerouslySetInnerHTML: { __html: e._modeButtonIcon("away") + `<span>${d("mode_away") || "AUSENTE"}</span>` }
							}),
							/* @__PURE__ */ (0, A.jsx)("button", {
								className: `liquid-btn btn-night ${u === "armed_night" ? "active" : ""}`,
								onClick: () => e._handleAction(0, "night"),
								dangerouslySetInnerHTML: { __html: e._modeButtonIcon("night") + `<span>${d("mode_night") || "NOCHE"}</span>` }
							})
						]
					}),
					/* @__PURE__ */ (0, A.jsx)("div", {
						className: `console-sensors ${C}`,
						"data-count": S,
						children: x.length === 0 ? /* @__PURE__ */ (0, A.jsx)("div", {
							className: "console-empty",
							children: d("no_sensors_configured") || "Sin sensores configurados"
						}) : x.map((t) => {
							let n = s.states[t.id], r = t.name || n?.attributes?.friendly_name || t.id, i = h && b.includes(t.id), a = e.isSensorActive ? e.isSensorActive(n) : n?.state === "on", o = null;
							return n?.attributes?.battery_level === void 0 ? n?.attributes?.battery !== void 0 && (o = n.attributes.battery) : o = n.attributes.battery_level, /* @__PURE__ */ (0, A.jsx)(Hn, {
								id: t.id,
								name: r,
								isOpen: a,
								isBlocking: i,
								isBypassed: t.isBypassed,
								battery: o,
								iconHtml: e._getSensorIcon?.(n, t) || "",
								statusLabelOpen: d("status_open") || "ABIERTO",
								statusLabelClosed: d("status_closed") || "CERRADO",
								bypassedLabel: d("bypassed_sensor") || "OMITIDO"
							}, t.id);
						})
					})
				]
			})
		]
	})] });
}
//#endregion
//#region src/features/safety/slide-action.ts
var Wn = "argus-slide-action-styles", Gn = {
	es: {
		slide_disarm: "Desliza para desarmar",
		slide_sos: "Desliza para activar SOS",
		slide_sos_stop: "Desliza para detener SOS",
		tap_disarm: "Desarmar",
		tap_sos: "Activar SOS",
		tap_sos_stop: "Detener SOS",
		enter_pin: "Ingresa el PIN maestro",
		wrong_pin: "PIN incorrecto",
		cancel: "Cancelar"
	},
	en: {
		slide_disarm: "Slide to disarm",
		slide_sos: "Slide to trigger SOS",
		slide_sos_stop: "Slide to stop SOS",
		tap_disarm: "Disarm",
		tap_sos: "Trigger SOS",
		tap_sos_stop: "Stop SOS",
		enter_pin: "Enter master PIN",
		wrong_pin: "Wrong PIN",
		cancel: "Cancel"
	}
};
function Kn(e) {
	if (typeof e?._getProfileGesture == "function") return e._getProfileGesture() === "touch";
	if (e?.getAttribute?.("argus-gesture") === "touch") return !0;
	try {
		let t = e?._currentProfile?.id || "default", n = localStorage.getItem(`argus_gesture_${t}`);
		if (n === "touch") return !0;
		if (n === "slide") return !1;
		if (localStorage.getItem("argus_gesture_global") === "touch") return !0;
	} catch {}
	return !1;
}
function qn(e) {
	if (typeof e._getCurrentLangCode == "function") return e._getCurrentLangCode();
	let t = e._manualLang || e._lang;
	if (!t) try {
		t = localStorage.getItem("argus_lang");
	} catch {}
	if ((!t || t === "auto") && (t = e._ui?.manual_lang || e._ui?.language || e._hass?.language || "en"), t = String(t || "en").trim(), Gn[t]) return t;
	let n = t.split(/[-_]/)[0].toLowerCase();
	return Gn[n] ? n : n.startsWith("es") ? "es" : "en";
}
function Jn(e, t) {
	let n = qn(e);
	if (e._t) {
		let n = e._t(t);
		if (n && n !== t) return n;
	}
	return (Gn[n] || Gn.es)[t] || Gn.es[t] || t;
}
var Yn = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"26\" height=\"26\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"/></svg>", Xn = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"26\" height=\"26\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/></svg>", Zn = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"26\" height=\"26\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"/></svg>";
function Qn(e) {
	let t = e.shadowRoot;
	if (!t || t.getElementById(Wn)) return;
	let n = document.createElement("style");
	n.id = Wn, n.textContent = "\n/* ── Slide-to-action base ─────────────────────────────────────────── */\n.argus-sta-wrap {\n  width: 100%;\n  grid-column: 1 / -1;\n  position: relative;\n}\n\n/* Disarm wrapper: hidden by default, shown only when armed */\n.argus-sta-wrap--disarm {\n  display: none;\n}\n.argus-sta-wrap--disarm.sta-armed {\n  display: block;\n}\n\n/* The pill track — 3D Liquid Glass */\n.argus-sta-track {\n  position: relative;\n  width: 100%;\n  height: 64px;\n  border-radius: 999px;\n  overflow: hidden;\n  user-select: none;\n  -webkit-user-select: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  backdrop-filter: blur(32px) saturate(190%) brightness(1.08);\n  -webkit-backdrop-filter: blur(32px) saturate(190%) brightness(1.08);\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 100%);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, 0.35), inset 0 2px 8px rgba(0, 0, 0, 0.35), 0 8px 24px rgba(0, 0, 0, 0.35);\n  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;\n  transform: translate3d(0,0,0);\n}\n.argus-sta-track--disarm {\n  border-color: rgba(52, 211, 153, 0.55);\n  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, 0.4), 0 0 20px rgba(16, 185, 129, 0.2), 0 8px 24px rgba(0,0,0,0.35);\n}\n.argus-sta-track--sos {\n  border-color: rgba(248, 113, 113, 0.55);\n  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, 0.4), 0 0 20px rgba(239, 68, 68, 0.2), 0 8px 24px rgba(0,0,0,0.35);\n}\n\n/* Fill bar that follows the thumb */\n.argus-sta-fill {\n  position: absolute;\n  left: 0; top: 0; bottom: 0;\n  border-radius: inherit;\n  pointer-events: none;\n  will-change: width;\n  transition: width 0.04s linear;\n}\n.argus-sta-track--disarm .argus-sta-fill {\n  background: linear-gradient(90deg, rgba(16,185,129,0.35), rgba(5,150,105,0.12));\n}\n.argus-sta-track--sos .argus-sta-fill {\n  background: linear-gradient(90deg, rgba(239,68,68,0.38), rgba(185,28,28,0.12));\n}\n\n/* The large circular thumb (left side) */\n.argus-sta-thumb {\n  position: absolute;\n  left: 4px;\n  top: 4px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: grab;\n  z-index: 4;\n  will-change: transform;\n  touch-action: none;\n  -webkit-tap-highlight-color: transparent;\n  backdrop-filter: blur(20px) saturate(190%);\n  -webkit-backdrop-filter: blur(20px) saturate(190%);\n  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;\n}\n.argus-sta-thumb:active { cursor: grabbing; }\n\n.argus-sta-track--disarm .argus-sta-thumb {\n  background: radial-gradient(circle at 35% 35%, rgba(52, 211, 153, 0.35), rgba(10, 24, 20, 0.95));\n  border: 1.5px solid rgba(52, 211, 153, 0.85);\n  box-shadow:\n    inset 0 1.5px 0 rgba(255, 255, 255, 0.65),\n    0 8px 24px rgba(0, 0, 0, 0.5),\n    0 0 20px rgba(16, 185, 129, 0.45);\n  color: #ffffff;\n}\n.argus-sta-track--sos .argus-sta-thumb {\n  background: radial-gradient(circle at 35% 35%, rgba(248, 113, 113, 0.35), rgba(28, 12, 16, 0.95));\n  border: 1.5px solid rgba(248, 113, 113, 0.85);\n  box-shadow:\n    inset 0 1.5px 0 rgba(255, 255, 255, 0.65),\n    0 8px 24px rgba(0, 0, 0, 0.5),\n    0 0 20px rgba(239, 68, 68, 0.45);\n  color: #ffffff;\n}\n.argus-sta-track--sos.sos-pulsing .argus-sta-thumb {\n  animation: staThumbPulse 0.8s infinite ease-in-out;\n}\n@keyframes staThumbPulse {\n  0%, 100% {\n    box-shadow: 0 0 0 1px rgba(255,255,255,.06) inset, 0 6px 24px rgba(0,0,0,.5), 0 0 32px rgba(239,68,68,0.90);\n    border-color: rgba(239,68,68,0.90);\n  }\n  50% {\n    box-shadow: 0 0 0 1px rgba(255,255,255,.06) inset, 0 6px 24px rgba(0,0,0,.5), 0 0 8px rgba(239,68,68,0.25);\n    border-color: rgba(239,68,68,0.30);\n  }\n}\n\n/* The specular highlight ring on thumb */\n.argus-sta-thumb::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: radial-gradient(circle at 30% 25%, rgba(255,255,255,0.18) 0%, transparent 60%);\n  pointer-events: none;\n}\n\n/* Text label — centered, crisp solid white */\n.argus-sta-label {\n  position: absolute;\n  left: 68px;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  pointer-events: none;\n  z-index: 2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #ffffff !important;\n  text-shadow: 0 1px 3px rgba(0,0,0,0.7);\n  transition: opacity 0.12s ease;\n}\n.argus-sta-track--disarm .argus-sta-label { color: #ffffff !important; }\n.argus-sta-track--sos .argus-sta-label    { color: #ffffff !important; }\n\n/* Spring snap-back animation */\n.argus-sta-thumb--snap {\n  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n/* PIN modal overlay */\n.argus-sta-pin {\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  z-index: 10;\n  backdrop-filter: blur(28px) saturate(160%);\n  -webkit-backdrop-filter: blur(28px) saturate(160%);\n  background: rgba(8,12,22,0.95);\n}\n.argus-sta-pin.open { display: flex; }\n.argus-sta-pin input {\n  width: 120px;\n  padding: 8px 12px;\n  border-radius: 10px;\n  border: 1px solid rgba(16,185,129,0.3);\n  background: rgba(255,255,255,0.05);\n  color: #fff;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  letter-spacing: 8px;\n  outline: none;\n}\n.argus-sta-pin input.pin-shake {\n  animation: pinShake 0.38s ease both;\n  border-color: rgba(239,68,68,0.6) !important;\n}\n@keyframes pinShake {\n  10%,90%{transform:translateX(-2px)}\n  20%,80%{transform:translateX(4px)}\n  30%,50%,70%{transform:translateX(-4px)}\n  40%,60%{transform:translateX(4px)}\n}\n.argus-sta-pin .pin-row { display:flex; gap:8px; }\n.argus-sta-pin button {\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1px solid rgba(255,255,255,0.14);\n  color: #fff;\n  background: rgba(255,255,255,0.08);\n}\n.argus-sta-pin .pin-ok {\n  background: linear-gradient(135deg, #10b981, #059669);\n  border-color: rgba(167,243,208,0.4);\n}\n.argus-sta-pin .pin-err {\n  font-size: 10px;\n  color: #fca5a5;\n  min-height: 14px;\n}\n\n/* ── Accessible Button Mode (Touch) ─────────────────────────────── */\n.argus-sta-wrap.sta-mode-touch {\n  margin-top: 4px;\n}\n.argus-sta-wrap.sta-mode-touch .argus-sta-thumb,\n.argus-sta-wrap.sta-mode-touch .argus-sta-fill {\n  display: none !important;\n}\n.argus-sta-wrap.sta-mode-touch .argus-sta-track {\n  height: 56px !important;\n  min-height: 56px !important;\n  border-radius: 16px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  cursor: pointer !important;\n  padding: 0 16px !important;\n  text-align: center !important;\n  transform: none !important;\n  box-sizing: border-box !important;\n  outline: none !important;\n  transition: transform 0.15s ease, filter 0.15s ease, box-shadow 0.15s ease !important;\n}\n.argus-sta-wrap.sta-mode-touch .argus-sta-track:active {\n  transform: scale(0.97) !important;\n}\n.argus-sta-wrap.sta-mode-touch .argus-sta-track:focus-visible {\n  outline: 3px solid #ffffff !important;\n  outline-offset: 2px !important;\n}\n.argus-sta-wrap.sta-mode-touch .argus-sta-label {\n  position: static !important;\n  left: auto !important;\n  right: auto !important;\n  top: auto !important;\n  transform: none !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 10px !important;\n  width: 100% !important;\n  font-size: 15px !important;\n  font-weight: 800 !important;\n  letter-spacing: 0.04em !important;\n  text-transform: uppercase !important;\n  color: #ffffff !important;\n  pointer-events: none !important;\n  opacity: 1 !important;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7) !important;\n}\n\n/* Red SOS Normal Touch Button */\n.argus-sta-wrap--sos.sta-mode-touch .argus-sta-track {\n  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;\n  border: 1.5px solid rgba(255, 255, 255, 0.35) !important;\n  box-shadow: 0 4px 18px rgba(220, 38, 38, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;\n}\n.argus-sta-wrap--sos.sta-mode-touch .argus-sta-track:hover {\n  filter: brightness(1.1) !important;\n  box-shadow: 0 6px 24px rgba(220, 38, 38, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.5) !important;\n}\n\n/* Red SOS Button Active / Triggered: Letters blink noticeably at medium speed */\n.argus-sta-wrap--sos.sta-mode-touch.sos-active .argus-sta-track {\n  background: linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%) !important;\n  border-color: #fca5a5 !important;\n  box-shadow: 0 0 28px rgba(239, 68, 68, 0.85), inset 0 0 14px rgba(255, 255, 255, 0.35) !important;\n}\n.argus-sta-wrap--sos.sta-mode-touch.sos-active .argus-sta-label,\n.argus-sta-wrap--sos.sta-mode-touch.sos-active .argus-sta-label span,\n.argus-sta-wrap--sos.sta-mode-touch.sos-active .sta-sos-text {\n  animation: sosLettersBlink 0.75s ease-in-out infinite !important;\n}\n\n@keyframes sosLettersBlink {\n  0%, 100% {\n    opacity: 1;\n    text-shadow: 0 0 14px rgba(255, 255, 255, 1), 0 0 28px rgba(255, 255, 255, 0.9);\n  }\n  50% {\n    opacity: 0.08;\n    text-shadow: none;\n  }\n}\n\n/* Green Disarm Normal Touch Button (Only appears when armed via .sta-armed) */\n.argus-sta-wrap--disarm.sta-mode-touch .argus-sta-track {\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;\n  border: 1.5px solid rgba(255, 255, 255, 0.35) !important;\n  box-shadow: 0 4px 18px rgba(16, 185, 129, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;\n}\n.argus-sta-wrap--disarm.sta-mode-touch .argus-sta-track:hover {\n  filter: brightness(1.1) !important;\n  box-shadow: 0 6px 24px rgba(16, 185, 129, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.5) !important;\n}\n.argus-sta-wrap.sta-mode-touch .argus-sta-pin {\n  border-radius: 16px !important;\n}\n", t.appendChild(n);
}
function $n(e, t, n) {
	let r = document.createElement("div");
	r.className = `argus-sta-wrap argus-sta-wrap--${e}`;
	let i = document.createElement("div");
	i.className = `argus-sta-track argus-sta-track--${e}`;
	let a = document.createElement("div");
	a.className = "argus-sta-fill";
	let o = document.createElement("div");
	o.className = "argus-sta-thumb", o.innerHTML = n;
	let s = document.createElement("span");
	s.className = "argus-sta-label", s.textContent = t;
	let c = document.createElement("div");
	return c.className = "argus-sta-pin", c.innerHTML = "\n    <input type=\"password\" inputmode=\"numeric\" maxlength=\"8\" autocomplete=\"off\" placeholder=\"••••\"/>\n    <div class=\"pin-err\"></div>\n    <div class=\"pin-row\">\n      <button class=\"pin-cancel\" type=\"button\">✕</button>\n      <button class=\"pin-ok\" type=\"button\">✓</button>\n    </div>", i.append(a, o, s, c), r.appendChild(i), {
		wrap: r,
		track: i,
		fill: a,
		thumb: o,
		label: s,
		pin: c
	};
}
function er(e, t, n, r, i, a, o, s) {
	let c = !1, l = 0, u = 0, d = 0, f = 0, p = 0, m = !1, h = 0;
	n.setAttribute("role", "button"), n.setAttribute("tabindex", "0"), n.setAttribute("aria-label", a.textContent || t);
	function g() {
		let n = Date.now();
		n - h < 450 || (h = n, !o.classList.contains("open") && (t === "disarm" && tr(e) ? C() : s()));
	}
	n.addEventListener("keydown", (e) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), g());
	}), n.addEventListener("touchstart", (t) => {
		Kn(e) && (f = t.touches[0].clientX, p = t.touches[0].clientY, m = !1);
	}, { passive: !0 }), n.addEventListener("touchmove", (t) => {
		if (Kn(e)) {
			let e = Math.abs(t.touches[0].clientX - f), n = Math.abs(t.touches[0].clientY - p);
			(e > 10 || n > 10) && (m = !0);
		}
	}, { passive: !0 }), n.addEventListener("touchend", (t) => {
		if (Kn(e)) {
			if (m || o.classList.contains("open") || t.target && t.target.closest?.(".argus-sta-pin")) return;
			t.preventDefault(), g();
		}
	}), n.addEventListener("click", (t) => {
		if (Kn(e)) {
			if (o.classList.contains("open") || t.target && t.target.closest?.(".argus-sta-pin")) return;
			g();
		}
	});
	function _() {
		return n.getBoundingClientRect().width - 56 - 8;
	}
	function v(e) {
		d = _();
		let t = Math.max(0, Math.min(e, d));
		i.style.transform = `translateX(${t}px)`, r.style.width = `${t + 60}px`;
		let n = t / d;
		return a.style.opacity = String(Math.max(0, 1 - n * 1.8)), t;
	}
	function y() {
		i.classList.add("argus-sta-thumb--snap"), v(0), a.style.opacity = "1", setTimeout(() => i.classList.remove("argus-sta-thumb--snap"), 520);
	}
	function b(e) {
		o.classList.contains("open") || (c = !0, d = _(), l = e - u, i.style.cursor = "grabbing");
	}
	function x(e) {
		c && (u = v(e - l));
	}
	function S() {
		c && (c = !1, i.style.cursor = "grab", u >= d * .8 ? (g(), y()) : (Kn(e) && Math.abs(u) < 6 && g(), y()), u = 0);
	}
	i.addEventListener("mousedown", (e) => {
		e.preventDefault(), b(e.clientX);
	}), window.addEventListener("mousemove", (e) => {
		c && x(e.clientX);
	}), window.addEventListener("mouseup", () => {
		c && S();
	}), i.addEventListener("touchstart", (e) => {
		e.preventDefault(), b(e.touches[0].clientX);
	}, { passive: !1 }), window.addEventListener("touchmove", (e) => {
		c && (e.preventDefault(), x(e.touches[0].clientX));
	}, { passive: !1 }), window.addEventListener("touchend", () => {
		c && S();
	});
	function C() {
		o.classList.add("open"), o.querySelector("input").focus();
	}
	let w = o.querySelector("input"), T = o.querySelector(".pin-err");
	function ee() {
		let t = w.value;
		nr(e, t) ? (o.classList.remove("open"), w.value = "", T.textContent = "", s(t)) : (w.classList.add("pin-shake"), T.textContent = Jn(e, "wrong_pin"), setTimeout(() => {
			w.classList.remove("pin-shake"), T.textContent = "", w.value = "";
		}, 700));
	}
	o.querySelector(".pin-ok").addEventListener("click", ee), w.addEventListener("keydown", (e) => {
		e.key === "Enter" && ee();
	}), o.querySelector(".pin-cancel").addEventListener("click", () => {
		o.classList.remove("open"), w.value = "", T.textContent = "";
	});
}
function tr(e) {
	return !!(e._entries?.[0]?.pin_configured || e._dashboard?.entries?.[0]?.pin_configured || e._ui?.master_pin_configured || e._pinConfigured);
}
function nr(e, t) {
	return typeof e._verifyPin == "function" ? e._verifyPin(t) : typeof e._checkMasterPin == "function" && e._checkMasterPin(t);
}
function rr(e, t, n) {
	if (t.querySelector(".argus-sta-wrap")) {
		t._staRefresh?.();
		return;
	}
	t.dataset.staInstalled = "1";
	let r = t.dataset.entityId || e._dashboard?.entries?.[n]?.entity_id || "";
	function i() {
		return String(e._hass?.states?.[r]?.state || "disarmed").toLowerCase();
	}
	function a() {
		let t = i();
		return !!e._hass?.states?.[r]?.attributes?.argus_panic_active || t === "triggered";
	}
	let { wrap: o, track: s, fill: c, thumb: l, label: u, pin: d } = $n("disarm", Jn(e, "slide_disarm"), Yn);
	er(e, "disarm", s, c, l, u, d, (t) => {
		let r = e._dashboard?.entries?.[n]?.entry_id || "";
		typeof e._send == "function" && e._send("argus/perform_alarm_action", {
			action: "disarm",
			entry_id: r,
			...t ? { code: t } : {}
		}).catch(() => {});
	});
	let { wrap: f, track: p, fill: m, thumb: h, label: g, pin: _ } = $n("sos", Jn(e, "slide_sos"), Xn);
	er(e, "sos", p, m, h, g, _, (t) => {
		let r = e._dashboard?.entries?.[n]?.entry_id || "";
		a() ? typeof e._send == "function" && e._send("argus/perform_alarm_action", {
			action: "disarm",
			entry_id: r,
			...t ? { code: t } : {}
		}).catch(() => {}) : (f.classList.add("sos-active"), typeof e._send == "function" && e._send("argus/perform_alarm_action", {
			action: "sos",
			entry_id: r
		}).catch(() => {}));
	});
	let v = t.querySelector(".liquid-stack");
	if (!v) return;
	v.querySelectorAll(".btn-disarm, .btn-sos, .argus-disarm-btn").forEach((e) => e.remove()), v.appendChild(o), v.appendChild(f);
	function y() {
		let t = i(), n = a(), r = t !== "disarmed" && t !== "unavailable", d = Kn(e);
		if (o.classList.toggle("sta-armed", r), o.classList.toggle("sta-mode-touch", d), f.classList.toggle("sta-mode-touch", d), f.classList.toggle("sos-active", n), p.classList.toggle("sos-pulsing", n), d) {
			u.innerHTML = `<span style="font-size: 20px; display: inline-flex; align-items: center;">🔓</span><span style="font-size: 15px; font-weight: 800; letter-spacing: 0.04em;">${Jn(e, "tap_disarm")}</span>`, s.setAttribute("aria-label", Jn(e, "tap_disarm"));
			let t = n ? Jn(e, "tap_sos_stop") : Jn(e, "tap_sos");
			g.innerHTML = `<span style="font-size: 20px; display: inline-flex; align-items: center;">${n ? "⏹️" : "🚨"}</span><span class="sta-sos-text" style="font-size: 15px; font-weight: 800; letter-spacing: 0.04em;">${t}</span>`, p.setAttribute("aria-label", t);
		} else {
			u.textContent = Jn(e, "slide_disarm"), s.setAttribute("aria-label", u.textContent), l.style.transform = "", c.style.width = "";
			let t = n ? Jn(e, "slide_sos_stop") : Jn(e, "slide_sos");
			g.textContent = t, p.setAttribute("aria-label", g.textContent), h.innerHTML = n ? Zn : Xn, h.style.transform = "", m.style.width = "";
		}
	}
	y(), t._staRefresh = y;
}
function ir(e) {
	Qn(e);
	let t = e.shadowRoot;
	t && t.querySelectorAll(".entry").forEach((t, n) => {
		if (!t.dataset.entityId) {
			let r = e._dashboard?.entries?.[n]?.entity_id;
			r && (t.dataset.entityId = r);
		}
		rr(e, t, n), t._staRefresh?.();
	});
}
function ar(e) {
	if (!e || e.__argusSlideToAction) return;
	e.__argusSlideToAction = !0;
	let t = e.prototype, n = t._renderEntries;
	t._renderEntries = function(...e) {
		let t = n?.call(this, ...e);
		return requestAnimationFrame(() => {
			ir(this), setTimeout(() => ir(this), 100);
		}), t;
	};
	let r = t._refreshLocalizedUi;
	if (t._refreshLocalizedUi = function(...e) {
		let t = r?.call(this, ...e);
		return ir(this), t;
	}, Object.getOwnPropertyDescriptor(t, "_hass")?.set || t.set_hass) {
		let e = t.set_hass;
		t.set_hass = function(t) {
			e?.call(this, t), this.shadowRoot?.querySelectorAll(".entry").forEach((e) => e._staRefresh?.());
		};
	}
}
//#endregion
//#region src/features/dashboard/components/SecurityConsoleRoot.tsx
function or(e) {
	let t = e.shadowRoot;
	if (!t) return;
	let n = t.getElementById("entries");
	n && (e.hasAttribute?.("compact") || e.classList?.contains("argus-compact") || e._cardConfig?.compact || e._profileSelectedThisMount || e._currentProfile || e._bootstrap?.has_active_session) && (e._reactConsoleRoot ||= (n.innerHTML = "", (0, te.createRoot)(n)), e._reactConsoleRoot.render(/* @__PURE__ */ (0, A.jsx)(sr, { panel: e })));
}
typeof window < "u" && (window.mountSecurityConsole = or);
function sr({ panel: e }) {
	let [t, n] = (0, D.useState)(0), [r, i] = (0, D.useState)(e.classList.contains("fullscreen-active")), a = (0, D.useRef)(null);
	return (0, D.useEffect)(() => {
		let t = () => {
			n((e) => e + 1), i(e.classList.contains("fullscreen-active"));
		}, r = () => {
			i(e.classList.contains("fullscreen-active") || !!document.fullscreenElement);
		};
		e.addEventListener("argus-state-update", t), window.addEventListener("argus-lang-changed", t), e.addEventListener("argus-fullscreen-changed", r), document.addEventListener("fullscreenchange", r), document.addEventListener("webkitfullscreenchange", r);
		let a = e._renderEntries;
		return e._renderEntries = function(...e) {
			t();
		}, () => {
			e.removeEventListener("argus-state-update", t), window.removeEventListener("argus-lang-changed", t), e.removeEventListener("argus-fullscreen-changed", r), document.removeEventListener("fullscreenchange", r), document.removeEventListener("webkitfullscreenchange", r), e._renderEntries = a;
		};
	}, [e]), (0, D.useEffect)(() => {
		if (!a.current) return;
		let t = setTimeout(() => {
			try {
				typeof ir == "function" && ir(e);
			} catch (e) {
				console.error("Argus: Failed to attach SOS sliders", e);
			}
		}, 40);
		return () => clearTimeout(t);
	}, [
		t,
		r,
		e
	]), /* @__PURE__ */ (0, A.jsx)("div", {
		ref: a,
		style: {
			width: "100%",
			height: "100%"
		},
		children: /* @__PURE__ */ (0, A.jsx)(Un, {
			panel: e,
			isFullscreen: r,
			onToggleFullscreen: () => {
				if (r) typeof e._exitFullscreenView == "function" ? e._exitFullscreenView() : (e.classList.remove("fullscreen-active"), document.body.style.overflow = "", i(!1));
				else {
					let t = e.shadowRoot?.querySelector(".entry");
					typeof e._toggleFullscreen == "function" ? e._toggleFullscreen(t) : (e.classList.add("fullscreen-active"), document.body.style.overflow = "hidden", i(!0));
				}
			},
			onUnlockKiosk: () => e._requestKioskUnlock()
		})
	});
}
function cr(e) {
	if (!e || e.__argusReactSecurityConsole) return;
	e.__argusReactSecurityConsole = !0;
	let t = e.prototype.connectedCallback, n = e.prototype._load;
	e.prototype._renderEntries, e.prototype.connectedCallback = function() {
		let e = t?.call(this);
		return or(this), e;
	}, e.prototype._load = async function(...e) {
		let t = await n?.apply(this, e);
		return or(this), t;
	}, e.prototype._renderEntries = function() {
		or(this);
	};
}
//#endregion
//#region src/features/dashboard/index.tsx
typeof window < "u" && (window.mountSecurityConsole = or);
function lr(e) {
	let t = (t) => e._t?.(t) || t;
	return [
		{
			id: "activity-history",
			nativeId: "w-activity",
			kind: "activity-history",
			title: t("activity_log") || "Historial de actividad",
			size: "M",
			visible: !0,
			t
		},
		{
			id: "automations",
			nativeId: "w-automations",
			kind: "automations",
			title: t("automations") || "Automatizaciones",
			size: "M",
			visible: !0,
			t
		},
		{
			id: "backup-restore",
			nativeId: "w-backup",
			kind: "backup-restore",
			title: t("backup_title") || "Respaldo y restauración",
			size: "M",
			visible: !0,
			t
		},
		{
			id: "access-control",
			nativeId: "w-access",
			kind: "access-control",
			title: t("users_title") || "Control de acceso y usuarios",
			size: "L",
			visible: !0,
			t
		},
		{
			id: "alarm-configuration",
			nativeId: "w-modes",
			kind: "alarm-configuration",
			title: t("modes_sos") || "Modos / SOS",
			size: "XL",
			visible: !0,
			t
		},
		{
			id: "security-status",
			nativeId: "w-github",
			kind: "security-status",
			title: t("support_title") || "Estado y soporte",
			size: "S",
			visible: !0,
			t
		}
	];
}
var ur = class extends Ln {
	panel;
	constructor(e) {
		super(), this.panel = e;
	}
	record() {
		return this.panel._ui?.dashboard?.react_layout_v2 || {};
	}
	async remote(e) {
		if (!this.panel._send) return;
		let t = {
			...this.record(),
			...e,
			layoutVersion: 2,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}, n = {
			...this.panel._ui?.dashboard || {},
			react_layout_v2: t
		}, r = this.panel._dashboard?.entry_id || this.panel._dashboard?.entries?.[0]?.entry_id;
		await this.panel._send("argus/save_ui", {
			dashboard: n,
			...r ? { entry_id: r } : {}
		}), this.panel._ui = this.panel._ui || {}, this.panel._ui.dashboard = n;
	}
	async load(e, t) {
		let n = this.record().layouts;
		return n ? In(n) : super.load(e, t);
	}
	async save(e, t, n) {
		await super.save(e, t, n), await this.remote({ layouts: n });
	}
	async loadVisibility(e, t) {
		return this.record().visibility || await super.loadVisibility(e, t);
	}
	async saveVisibility(e, t, n) {
		await super.saveVisibility(e, t, n), await this.remote({ visibility: n });
	}
	async reset(e, t) {
		await super.reset(e, t), await this.remote({
			layouts: In(null),
			visibility: {}
		});
	}
};
function dr(e) {
	let t = e.shadowRoot?.getElementById("edit-widgets-label");
	(t?.closest("button") || t)?.remove(), e.shadowRoot?.querySelectorAll(".panel-edit-overlay,.widget-drag-handle").forEach((e) => e.remove());
	let n = e.shadowRoot?.getElementById("argus-react-editor-only");
	n || (n = document.createElement("style"), n.id = "argus-react-editor-only", n.textContent = "#edit-widgets-label,.panel-edit-overlay,.widget-drag-handle{display:none!important}", e.shadowRoot.appendChild(n));
}
function fr(e) {
	dr(e);
	let t = e.shadowRoot?.getElementById("widget-grid"), n = e._dashboard?.entry_id || e._dashboard?.entries?.[0]?.entry_id || "default";
	if (!t) return;
	let r = lr(e), i = /* @__PURE__ */ new Map();
	if (r.forEach((t) => {
		let n = e.shadowRoot.getElementById(t.nativeId);
		n && i.set(t.id, n);
	}), e._argusReactRoot) {
		e._argusReactRoot.render(/* @__PURE__ */ (0, A.jsx)(Bn, {
			widgets: r,
			nodes: i,
			storage: new ur(e),
			userId: e._currentProfile?.id || e._hass?.user?.id || "anonymous",
			dashboardId: n,
			onEditing: (n) => {
				e._widgetEditing = n, t.classList.toggle("editing", n);
			},
			registerEditor: (t) => {
				e._argusReactSetEditing = t;
			}
		}));
		return;
	}
	let a = e.shadowRoot.getElementById("argus-react-dashboard-style");
	if (a || (a = document.createElement("style"), a.id = "argus-react-dashboard-style", a.textContent = O + k + ne, e.shadowRoot.appendChild(a)), !e.shadowRoot.getElementById("argus-access-scroll-fix")) {
		let t = document.createElement("style");
		t.id = "argus-access-scroll-fix", t.textContent = ".argus-widget__content--access{display:flex;min-height:0;overflow:hidden}.argus-widget__content--access>#w-access{display:flex!important;flex-direction:column!important;width:100%!important;height:100%!important;min-height:0!important;max-height:none!important;overflow:hidden!important}.argus-widget__content--access>#w-access>.panel-head{flex:0 0 auto!important}.argus-widget__content--access>#w-access>#access-workspace{display:block!important;flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;padding-right:4px}", e.shadowRoot.appendChild(t);
	}
	let o = document.createElement("div");
	o.id = "argus-react-dashboard-root", t.appendChild(o);
	let s = (0, te.createRoot)(o);
	e._argusReactRoot = s, s.render(/* @__PURE__ */ (0, A.jsx)(Bn, {
		widgets: r,
		nodes: i,
		storage: new ur(e),
		userId: e._currentProfile?.id || e._hass?.user?.id || "anonymous",
		dashboardId: n,
		onEditing: (n) => {
			e._widgetEditing = n, t.classList.toggle("editing", n);
		},
		registerEditor: (t) => {
			e._argusReactSetEditing = t;
		}
	}));
}
function pr(e) {
	if (!e || e.__argusReactDashboard) return;
	e.__argusReactDashboard = !0;
	let t = e.prototype, n = t.connectedCallback, r = t._load, i = t._refreshLocalizedUi;
	t.connectedCallback = function() {
		let e = n?.call(this);
		return dr(this), e;
	}, t._load = async function() {
		let e = await r?.call(this);
		return fr(this), e;
	}, t._refreshLocalizedUi = function() {
		let e = i?.call(this);
		return fr(this), e;
	}, t._toggleWidgetEditing = function() {
		this._argusReactSetEditing?.(!this._widgetEditing);
	};
}
//#endregion
//#region src/features/media/client.ts
function mr(e) {
	let t = e._hass?.auth?.accessToken;
	return t ? { Authorization: `Bearer ${t}` } : {};
}
function hr(e) {
	let t = e?.prototype;
	t && !t.__argusMediaClient && (t.__argusMediaClient = !0, t._loadUploadedFiles = async function() {
		try {
			let e = await fetch("/api/argus/media", {
				headers: mr(this),
				credentials: "same-origin"
			});
			if (!e.ok) throw Error(`HTTP ${e.status}`);
			let t = await e.json();
			this._uploadedFiles = Array.isArray(t.files) ? t.files : [];
		} catch (e) {
			console.error("Private Argus media listing failed", e), this._uploadedFiles = [];
		}
		this._renderUploadedFiles?.();
	}, t._deleteUploadedFile = async function(e) {
		try {
			let t = await fetch(`/api/argus/media/${encodeURIComponent(e)}`, {
				method: "DELETE",
				headers: mr(this),
				credentials: "same-origin"
			});
			if (!t.ok) throw Error(`HTTP ${t.status}`);
			this._uploadedFiles = (this._uploadedFiles ?? []).filter((t) => t.name !== e);
			for (let [t, n] of [["panel-bg-url-input", "_panelBgFile"], ["hub-bg-url-input", "_hubBgFile"]]) {
				let r = this.shadowRoot.getElementById(t);
				r?.value.includes(`/${e}?`) && (r.value = "", this[n] = "");
			}
			this._renderUploadedFiles?.();
		} catch (e) {
			let t = e instanceof Error ? e.message : String(e);
			console.error("Private Argus media deletion failed", e), window.alert(this._format?.("delete_file_error", { error: t }) ?? t);
		}
	});
}
//#endregion
//#region src/features/security/client.ts
var gr = (e, t) => e.getElementById(t), _r = (e, t, n) => e._t?.(t) ?? n;
function vr(e) {
	let t = e?.prototype;
	t && !t.__argusSecurityClient && (t.__argusSecurityClient = !0, t._savePin = async function() {
		let e = this.shadowRoot.getElementById("pin-status"), t = this._dashboard?.entries?.[0], n = gr(this.shadowRoot, "current-pin")?.value ?? "", r = gr(this.shadowRoot, "new-pin-1")?.value ?? "", i = gr(this.shadowRoot, "new-pin-2")?.value ?? "", a = (t) => {
			e && (e.textContent = t, e.className = "status err");
		};
		if (!t?.entry_id) return a("No Argus config entry is available");
		if (t.pin_configured && !n) return a(_r(this, "pin_incorrect", "PIN incorrecto"));
		if (r !== i) return a(_r(this, "pin_mismatch", "Los PIN no coinciden"));
		if (r && !/^\d{4,12}$/.test(r)) return a("PIN: se requieren entre 4 y 12 dígitos");
		if (!this._send) return a("Argus WebSocket is unavailable");
		try {
			await this._send("argus/update_master_pin", {
				entry_id: t.entry_id,
				pin: r,
				current_pin: n
			}), t.pin_configured = !!r, e && (e.textContent = r ? _r(this, "pin_updated", "PIN actualizado") : _r(this, "pin_deleted", "PIN eliminado"), e.className = "status ok");
			for (let e of [
				"current-pin",
				"new-pin-1",
				"new-pin-2"
			]) {
				let t = gr(this.shadowRoot, e);
				t && (t.value = "");
			}
			this._syncAccessSummary?.(), window.setTimeout(() => {
				this._load?.();
			}, 800);
		} catch (e) {
			a(e instanceof Error ? e.message : String(e));
		}
	}, t._handleForgotPin = function() {
		let e = "Restablece el PIN desde las opciones de la integración Argus o desde un respaldo confiable de Home Assistant.", t = this.shadowRoot.getElementById("pin-status");
		t ? (t.textContent = e, t.className = "status err") : window.alert(e);
	});
}
//#endregion
//#region src/features/premium/index.ts
var yr = "argus-hdr-promotion-styles";
function br(e) {
	xr(e);
}
function xr(e) {
	if (!e || e.__argusPremiumHDRApplied) return;
	e.__argusPremiumHDRApplied = !0;
	let t = e.prototype.connectedCallback;
	e.prototype.connectedCallback = function() {
		let e = typeof t == "function" ? t.call(this) : void 0;
		return Sr(this), e;
	};
}
function Sr(e) {
	let t = e.shadowRoot;
	if (!t || t.getElementById(yr)) return;
	let n = document.createElement("style");
	n.id = yr, n.textContent = "\n    @supports (color: color(rec2020 1 1 1)) {\n      :host {\n        --argus-accent-green: color(rec2020 0.15 0.85 0.35);\n        --argus-accent-amber: color(rec2020 0.95 0.70 0.10);\n        --argus-accent-red: color(rec2020 0.95 0.15 0.20);\n        --argus-accent-blue: color(rec2020 0.15 0.55 0.95);\n        --argus-accent-purple: color(rec2020 0.70 0.20 0.90);\n        --argus-glow-green: rgba(30, 220, 90, 0.45);\n        --argus-glow-amber: rgba(255, 180, 20, 0.45);\n        --argus-glow-red: rgba(255, 40, 50, 0.55);\n      }\n    }\n\n    @supports (color: color(display-p3 1 1 1)) and (not (color: color(rec2020 1 1 1))) {\n      :host {\n        --argus-accent-green: color(display-p3 0.22 0.82 0.38);\n        --argus-accent-amber: color(display-p3 0.98 0.72 0.15);\n        --argus-accent-red: color(display-p3 0.98 0.20 0.25);\n        --argus-accent-blue: color(display-p3 0.20 0.58 0.95);\n        --argus-accent-purple: color(display-p3 0.68 0.25 0.88);\n        --argus-glow-green: rgba(34, 197, 94, 0.40);\n        --argus-glow-amber: rgba(245, 158, 11, 0.40);\n        --argus-glow-red: rgba(239, 68, 68, 0.50);\n      }\n    }\n\n    :host {\n      --argus-accent-green: #10b981;\n      --argus-accent-amber: #f59e0b;\n      --argus-accent-red: #ef4444;\n      --argus-accent-blue: #3b82f6;\n      --argus-accent-purple: #8b5cf6;\n      --argus-glow-green: rgba(16, 185, 129, 0.35);\n      --argus-glow-amber: rgba(245, 158, 11, 0.35);\n      --argus-glow-red: rgba(239, 68, 68, 0.45);\n    }\n\n    .entry-icon,\n    .argus-shield-svg,\n    .liquid-btn,\n    .console-sensor,\n    .argus-sta-thumb {\n      transform: translate3d(0, 0, 0);\n      backface-visibility: hidden;\n      -webkit-backface-visibility: hidden;\n      perspective: 1000px;\n    }\n\n    .entry-icon {\n      will-change: transform;\n      animation: float-icon 5s ease-in-out infinite;\n    }\n\n    @keyframes float-icon {\n      0%, 100% {\n        transform: translate3d(0, 0, 0) scale3d(1, 1, 1);\n      }\n      50% {\n        transform: translate3d(0, -6px, 0) scale3d(1.015, 1.015, 1);\n      }\n    }\n\n    @media (prefers-reduced-motion: reduce) {\n      .entry-icon {\n        animation: none !important;\n        transform: none !important;\n      }\n    }\n  ", t.appendChild(n);
}
//#endregion
//#region src/features/motion/index.ts
var Cr = "argus-motion-system-v2049", wr = "__argusMotionV2049", Tr = ".user-card,.liquid-btn,.mode-btn,.lang-pill,.entry-fs,.fs-btn,.file-card-btn,.pick-row,.widget-size-btn,.widget-toggle-btn,.argus-disarm-btn,[data-login-digit],#btn-submit-login-pin,#btn-cancel-login,#btn-complete-setup,#btn-claim-admin", Er = "\n:host{--argus-motion-fast:120ms;--argus-motion-ease:cubic-bezier(.22,.8,.25,1)}\n#widget-grid,.dashboard-instances,#widget-grid>.dashboard-instances,#widget-grid>.dashboard-instances>.entry{animation:none!important;transition:none!important;opacity:1!important;transform:none!important;visibility:visible!important}\n#widget-grid.argus-motion-dashboard-enter,.dashboard-instances.argus-motion-dashboard-enter,.argus-motion-dashboard-prep{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}\n.dashboard-instances>.entry{will-change:auto!important}\n.user-card.is-entering{pointer-events:none;box-shadow:0 0 0 1px rgba(120,190,255,.45),0 10px 24px rgba(0,60,140,.18)}\n.argus-motion-press{transform:scale(.982)!important;transition:transform var(--argus-motion-fast) var(--argus-motion-ease)!important}\n:host(.argus-perf-essential) .argus-motion-press{transition:none!important;transform:none!important}\n@media(prefers-reduced-motion:reduce){.argus-motion-press{transition:none!important;transform:none!important}}\n";
function Dr(e) {
	if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return "essential";
	let t = String(e._argusPerfProfile || e.dataset?.argusPerf || "").toLowerCase();
	return t === "essential" || e.classList.contains("argus-perf-essential") ? "essential" : t === "light" ? "light" : "full";
}
function Or(e) {
	if (e[wr]) return e[wr];
	let t = {
		panel: e,
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
	return Object.defineProperty(e, wr, {
		value: t,
		writable: !0,
		configurable: !0
	}), t;
}
function kr(e, t) {
	let n = requestAnimationFrame(() => {
		e.rafs.delete(n), e.active && t();
	});
	return e.rafs.add(n), n;
}
function Ar(e, t, n, r, i) {
	t.addEventListener(n, r, i), e.cleanups.add(() => t.removeEventListener(n, r, i));
}
function jr(e) {
	let t = e.shadowRoot;
	if (!t) return;
	let n = t.getElementById(Cr);
	n ? n.textContent !== Er && (n.textContent = Er) : (n = document.createElement("style"), n.id = Cr, n.textContent = Er, t.appendChild(n));
}
function Mr(e) {
	e.profileControl?.classList.remove("is-entering"), e.profileControl = null, e.panel.shadowRoot?.getElementById("bootstrap-overlay")?.removeAttribute("aria-busy");
}
function Nr(e, t) {
	Mr(e), e.profileControl = t, t?.classList.add("is-entering"), e.panel.shadowRoot?.getElementById("bootstrap-overlay")?.setAttribute("aria-busy", "true");
}
function Pr(e) {
	!e.observer && e.panel.shadowRoot && (e.observer = new MutationObserver((t) => {
		t.some((e) => [...e.addedNodes].some((e) => e instanceof Element && e.id !== Cr)) && (e.observerFrame ||= kr(e, () => {
			e.observerFrame = 0, jr(e.panel);
		}));
	}), e.observer.observe(e.panel.shadowRoot, {
		childList: !0,
		subtree: !0,
		attributes: !1
	}));
}
function Fr(e) {
	let t = e.panel.shadowRoot;
	if (!t) return;
	let n = (t) => {
		t && (t.classList.remove("argus-motion-press"), e.pressed.delete(t));
	};
	Ar(e, t, "pointerdown", (t) => {
		if (Dr(e.panel) === "essential") return;
		let n = t.target?.closest?.(Tr);
		n && !n.disabled && (n.classList.add("argus-motion-press"), e.pressed.add(n));
	}, !0), [
		"pointerup",
		"pointercancel",
		"pointerleave"
	].forEach((r) => Ar(e, t, r, (e) => {
		let t = e.target;
		n(t?.closest?.(Tr));
	}, !0)), Ar(e, t, "click", (t) => {
		let n = t.target, r = n?.closest?.(".user-card");
		r && r.dataset.isOwn === "true" && r.dataset.pinRequired !== "true" && Nr(e, r), n?.closest?.("#btn-submit-login-pin,#btn-complete-setup,#btn-claim-admin") && Nr(e, n.closest("button")), n?.closest?.("#btn-cancel-login") && Mr(e);
	}, !0);
}
function Ir(e) {
	!e.active && e.panel.shadowRoot && (e.active = !0, jr(e.panel), Fr(e), Pr(e), e.api = Object.freeze({
		animateView: () => {},
		stagger: () => {},
		transitionBackground: () => () => {},
		animateDashboard: () => {}
	}));
}
function Lr(e) {
	e.active = !1, e.observer?.disconnect(), e.observer = null, e.observerFrame && cancelAnimationFrame(e.observerFrame), e.observerFrame = 0, e.rafs.forEach(cancelAnimationFrame), e.rafs.clear(), e.timers.forEach(clearTimeout), e.timers.clear(), e.cleanups.forEach((e) => e()), e.cleanups.clear(), e.pressed.forEach((e) => e.classList.remove("argus-motion-press")), e.pressed.clear(), Mr(e);
}
function Rr(e) {
	let t = e?.prototype;
	if (!t || t.__argusMotionSystemV2049) return;
	t.__argusMotionSystemV2049 = !0;
	let n = t.connectedCallback, r = t.disconnectedCallback, i = t._load;
	t.connectedCallback = function() {
		let e = n?.call(this), t = Or(this);
		return this.shadowRoot ? Ir(t) : queueMicrotask(() => Ir(t)), e;
	}, t.disconnectedCallback = function() {
		let e = this[wr];
		return e && Lr(e), r?.call(this);
	}, t._load = async function(...e) {
		let t = Or(this);
		try {
			let n = await i?.apply(this, e);
			return !t.active && this.isConnected && Ir(t), jr(this), Mr(t), n;
		} catch (e) {
			throw Mr(t), e;
		}
	};
}
//#endregion
//#region src/features/render/stable.ts
var zr = "__argusStableRenderV2050";
function Br(e) {
	let t = e.shadowRoot;
	if (!t) return;
	let n = /* @__PURE__ */ new Date(), r = e._formatTime ? e._formatTime(n) : n.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit"
	}), i = n.toLocaleDateString(e._getLocale?.() || void 0, {
		weekday: "short",
		month: "short",
		day: "numeric"
	}), a = t.getElementById("hero-clock-time"), o = t.getElementById("hero-clock-date");
	a && a.textContent !== r && (a.textContent = r), o && o.textContent !== i && (o.textContent = i), t.querySelectorAll(".console-hud-time,.hud-data>span:first-child").forEach((e) => {
		e && e.textContent !== r && (e.textContent = r);
	});
}
function Vr(e, t, n, r, i, a, o) {
	return [
		t?.entity_id || "",
		t?.entry_id || "",
		n || "",
		a ? "1" : "0",
		o ? "1" : "0",
		i || "",
		r?.arming_waiting_for_sensors ? "1" : "0",
		JSON.stringify(r?.arming_blocking_sensors || []),
		JSON.stringify(r?.triggered_sensors || []),
		e._backgroundMode || "",
		e._panelBgFile || "",
		e._getWeatherEntity?.()?.state || "",
		e._hass?.states?.["sun.sun"]?.state || "",
		e._getDisplayedTemperature?.() || "",
		e._homeName || "",
		e._kioskLocked ? "1" : "0",
		String(e._getCurrentLangCode?.() || e._manualLang || e._ui?.language || e._hass?.language || "")
	].join("|");
}
function Hr(e, t) {
	t && !t._argusDelegated && (t._argusDelegated = !0, t.addEventListener("click", (t) => {
		let n = t.target;
		if (n.closest?.("button[data-action=\"unlock-kiosk\"]")) {
			e._requestKioskUnlock?.();
			return;
		}
		let r = n.closest?.("button[data-action=\"sos\"]");
		if (r) {
			e._sosEntryIdx = Number(r.dataset.idx), e.shadowRoot?.getElementById("sos-modal")?.classList.add("open");
			return;
		}
		let i = n.closest?.("button[data-action=\"stop-sos\"]");
		if (i) {
			e._stopSOS?.(Number(i.dataset.idx));
			return;
		}
		let a = n.closest?.("button[data-fullscreen]");
		if (a) {
			e._toggleFullscreen?.(a.closest(".entry"));
			return;
		}
		if (n.closest?.("button[data-exit-fullscreen]")) {
			e._exitFullscreenView?.();
			return;
		}
		let o = n.closest?.("button[data-action]:not([data-action=\"sos\"]):not([data-action=\"stop-sos\"]):not([data-action=\"unlock-kiosk\"])");
		o?.dataset?.idx != null && o?.dataset?.action && e._handleAction?.(o.dataset.idx, o.dataset.action);
	}));
}
function Ur(e) {
	let t = e?.prototype;
	if (!t || t[zr]) return;
	t[zr] = !0;
	let n = t._renderEntries, r = Object.getOwnPropertyDescriptor(t, "hass") || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "hass");
	t._updateLiveClocks = function() {
		Br(this);
	}, t._updateHeroClock = function() {
		Br(this);
	}, t._startClock = function() {
		this._clockInterval && clearInterval(this._clockInterval), Br(this), this._clockInterval = setInterval(() => {
			this._dashboard && Br(this);
		}, 1e3);
	}, t._renderEntries = function(e = !1) {
		let t = this.shadowRoot;
		if (!t) return n?.call(this, e);
		let r = t.getElementById("entries"), i = this._dashboard?.entries || [];
		if (this._instanceSignatures = this._instanceSignatures || /* @__PURE__ */ new Map(), !r || !i.length) {
			let r = n?.call(this, e);
			return Hr(this, t.getElementById("entries")), Br(this), r;
		}
		let a = [...r.querySelectorAll("article.entry")];
		if (!e && a.length === i.length && a.every((e) => e.querySelector(".entry-content"))) {
			let e = !0;
			for (let t = 0; t < i.length; t++) {
				let n = i[t], r = this._hass?.states?.[n.entity_id], a = r?.state || n.state || "unavailable", o = r?.attributes || {}, s = !!o.argus_panic_active, c = this._fullscreenIdx === t || !!this._kioskLocked && (this._kioskEntryId === n.entry_id || i.length === 1), l = String(a).replace("armed_", ""), u = this._ui?.modes?.__by_entity__?.[n.entity_id]?.[l] || this._ui?.modes?.[l] || {}, d = u.sensors || [];
				if (a === "disarmed" || !d.length) {
					let e = this._ui?.modes?.__by_entity__?.[n.entity_id] || this._ui?.modes || {}, t = /* @__PURE__ */ new Set();
					[
						"away",
						"home",
						"night",
						"vacation"
					].forEach((n) => {
						(e[n]?.sensors || []).forEach((e) => t.add(e));
					}), d = [...t];
				}
				let f = u.bypassed_sensors || [], p = d.filter((e) => !f.includes(e)).map((e) => {
					let t = this._hass?.states?.[e], n = this._getSensorBattery?.(e, t) ?? t?.attributes?.battery_level ?? t?.attributes?.battery_percentage ?? "";
					return `${e}:${t?.state || ""}:${n}`;
				}).join(","), m = Vr(this, n, a, o, p, s, c);
				if (this._instanceSignatures.get(t) !== m) {
					e = !1;
					break;
				}
			}
			if (e) {
				let e = i.map((e) => this._hass?.states?.[e.entity_id]?.state || "unavailable").some((e) => String(e).startsWith("armed") || e === "triggered" || e === "pending"), n = t.getElementById("global-status");
				n && (n.innerHTML = "");
				let a = t.getElementById("hero-security-pill");
				if (a) {
					let t = ((e) => this._t?.(e) || e)(e ? "system_armed" : "system_disarmed"), n = `<i class="hero-live" style="background:${e ? "#ffb54d" : "#55df91"};box-shadow:0 0 9px ${e ? "#ffb54d" : "#55df91"}"></i>${this._escapeHtml?.(t) || t}`;
					a.innerHTML !== n && (a.innerHTML = n);
				}
				Br(this), Hr(this, r);
				return;
			}
		}
		let o = n?.call(this, e === !0 || void 0);
		return [...r.querySelectorAll("article.entry")].forEach((e, t) => {
			let n = i[t];
			if (!n) return;
			let r = this._hass?.states?.[n.entity_id], a = r?.state || n.state || "unavailable", o = r?.attributes || {}, s = !!o.argus_panic_active, c = this._fullscreenIdx === t || !!this._kioskLocked && (this._kioskEntryId === n.entry_id || i.length === 1), l = String(a).replace("armed_", ""), u = this._ui?.modes?.__by_entity__?.[n.entity_id]?.[l] || this._ui?.modes?.[l] || {}, d = u.sensors || [];
			if (a === "disarmed" || !d.length) {
				let e = this._ui?.modes?.__by_entity__?.[n.entity_id] || this._ui?.modes || {}, t = /* @__PURE__ */ new Set();
				[
					"away",
					"home",
					"night",
					"vacation"
				].forEach((n) => {
					(e[n]?.sensors || []).forEach((e) => t.add(e));
				}), d = [...t];
			}
			let f = u.bypassed_sensors || [], p = d.filter((e) => !f.includes(e)).map((e) => {
				let t = this._hass?.states?.[e], n = this._getSensorBattery?.(e, t) ?? t?.attributes?.battery_level ?? t?.attributes?.battery_percentage ?? "";
				return `${e}:${t?.state || ""}:${n}`;
			}).join(","), m = Vr(this, n, a, o, p, s, c);
			this._instanceSignatures.set(t, m), e.dataset.renderSig = m;
		}), Hr(this, r), Br(this), o;
	};
	let i = r?.get, a = r?.set;
	a && Object.defineProperty(t, "hass", {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return i ? i.call(this) : this._hass;
		},
		set: function(e) {
			let t = this._hass;
			if (t && this._dashboard?.entries?.length) {
				let n = /* @__PURE__ */ new Set(), r = (e) => {
					e && typeof e == "object" && (Array.isArray(e.sensors) && e.sensors.forEach((e) => n.add(e)), Object.values(e).forEach((e) => {
						e && typeof e == "object" && r(e);
					}));
				};
				r(this._ui?.modes);
				let i = t.language !== e.language;
				i && !this._manualLang && this._refreshLocalizedUi?.();
				let a = this._dashboard.entries.some((n) => n.entity_id && t.states[n.entity_id]?.state !== e.states[n.entity_id]?.state), o = [...n].some((n) => t.states[n]?.state !== e.states[n]?.state || t.states[n]?.attributes?.battery_level !== e.states[n]?.attributes?.battery_level || t.states[n]?.attributes?.battery_percentage !== e.states[n]?.attributes?.battery_percentage), s = this._temperatureSource === "auto" ? null : this._temperatureSource, c = s && t.states[s]?.state !== e.states[s]?.state, l = this._weatherSource && this._weatherSource !== "auto" ? this._weatherSource : Object.values(e.states).find((e) => e.entity_id?.startsWith("weather."))?.entity_id, u = l && (t.states[l]?.state !== e.states[l]?.state || t.states[l]?.attributes?.temperature !== e.states[l]?.attributes?.temperature), d = a || o || c || u || i;
				this._hass = e, this._updateTheme?.(), d ? (this._renderEntries?.(i), this._renderActivityLog?.()) : Br(this);
				return;
			}
			return a.call(this, e);
		}
	});
	let o = t.connectedCallback;
	t.connectedCallback = function() {
		let e = o?.call(this);
		return this._startClock?.(), e;
	};
}
//#endregion
//#region src/features/render/alarm.ts
var Wr = "argus-v2050-alarm-visuals", Gr = {
	armed_home: /EN CASA|HOME|EM CASA|CASA|在家|ДОМА/i,
	armed_away: /AUSENTE|AWAY|ASSENTE|外出|УШЁЛ/i,
	armed_night: /NOCHE|NIGHT|NOITE|NOTTE|夜间|НОЧЬ/i
};
function Kr(e, t) {
	let n = t?.entity_id || t?.alarm_entity_id, r = n ? e._hass?.states?.[n]?.state : void 0;
	return String(r || t?.state || t?.alarm_state || t?.attributes?.state || "").toLowerCase();
}
function qr(e, t, n) {
	e.classList.toggle("active", n), e.classList.toggle("argus-action-active", n), e.dataset.argusAction = t, t === "sos" && e.classList.toggle("flashing", n);
}
function Jr(e) {
	let t = e.shadowRoot;
	if (!t) return;
	let n = t.getElementById(Wr);
	n || (n = document.createElement("style"), n.id = Wr, t.appendChild(n)), n.textContent = "\n.entry .liquid-stack .liquid-btn{border-radius:13px!important;color:rgba(255,255,255,.92)!important}\n.entry.argus-arming .entry-icon>svg,.entry.argus-waiting .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important;will-change:transform,opacity}\n.argus-shield-status{display:block;margin:7px auto 0;padding:5px 10px;width:max-content;max-width:180px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:rgba(255,149,0,.13);color:#ffd27a;font-size:9px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}\n.entry .console-sensor.argus-blocking,.entry .console-sensor.argus-triggered-sensor{border-color:#ff8a1f!important;background:linear-gradient(135deg,rgba(249,115,22,.32),rgba(194,65,12,.18))!important;animation:argusTriggeredSensor .72s ease-in-out infinite!important;will-change:transform,opacity}\n@keyframes argusArmingShield{0%,100%{opacity:.55;transform:scale3d(.94,.94,1)}50%{opacity:1;transform:scale3d(1.07,1.07,1)}}\n@keyframes argusArmingLabel{0%,100%{opacity:.62}50%{opacity:1}}\n@keyframes argusTriggeredSensor{0%,100%{opacity:.62;transform:scale3d(1,1,1)}50%{opacity:1;transform:scale3d(1.02,1.02,1)}}\n";
}
function Yr(e) {
	if (!e.shadowRoot) return;
	Jr(e);
	let t = e.shadowRoot.querySelectorAll(".entry");
	Array.from(t).forEach((t, n) => {
		let r = e._dashboard?.entries?.[n] || {}, i = r.attributes || e._hass?.states?.[r.entity_id]?.attributes || {}, a = Kr(e, r), o = i.arming_blocking_sensors || [], s = a === "arming" || !!i.arming_waiting_for_sensors || !!o.length;
		t.classList.toggle("argus-arming", s), t.classList.toggle("argus-waiting", s);
		let c = t.querySelector(".entry-icon"), l = t.querySelector(".argus-shield-status");
		if (s && c) {
			l || (l = document.createElement("span"), l.className = "argus-shield-status", c.insertAdjacentElement("afterend", l));
			let t = (e._t?.("waiting_sensors_count") || "ESPERANDO {count} SENSOR(ES)").replace("{count}", String(o.length));
			l.textContent = o.length ? t : a === "arming" ? e._t?.("arming") || "ARMANDO…" : e._t?.("waiting_sensors") || "ESPERANDO SENSORES";
		} else l?.remove();
		let u = t.querySelector(".liquid-stack");
		u && Array.from(u.querySelectorAll(".liquid-btn,button")).forEach((e) => {
			let t = e, n = String(t.textContent || "");
			if (/SOS|PÁNICO|PANIC|PANIQUE|PÂNICO|PANICO|紧急|ПАНИКА/i.test(n)) qr(t, "sos", !!i.argus_panic_active);
			else if (/DESARMAR|DISARM|DESARMADO|DISARMED|DÉSARMER|DÉSARMÉ|OFF|已撤防|СНЯТО/i.test(n)) qr(t, "disarm", a === "disarmed");
			else {
				let e = Object.entries(Gr).find(([, e]) => e.test(n));
				e && qr(t, e[0], a === e[0]);
			}
		});
		let d = new Set((i.triggered_sensors || []).map(String)), f = new Set(o.map((t) => String(e._dashboard?.available_entities?.find((e) => e.entity_id === t)?.name || t).toLocaleLowerCase()));
		t.querySelectorAll(".console-sensor").forEach((e) => {
			let t = String(e.querySelector(".console-sensor-name")?.textContent || e.textContent || "").toLocaleLowerCase(), n = Array.from(f).some((e) => t.includes(e) || e.includes(t)), r = Array.from(d).some((e) => t.includes(String(e).toLocaleLowerCase()));
			e.classList.toggle("argus-blocking", n), e.classList.toggle("argus-triggered-sensor", r);
		});
	});
}
function Xr(e) {
	let t = e?.prototype;
	if (!t || t.__v2050AlarmVisuals) return;
	t.__v2050AlarmVisuals = !0;
	let n = t.connectedCallback, r = t._load, i = t._renderEntries;
	t.connectedCallback = function() {
		let e = n?.call(this);
		return Yr(this), e;
	}, t._load = async function(...e) {
		let t = await r?.apply(this, e);
		return Yr(this), t;
	}, t._renderEntries = function(...e) {
		let t = i?.apply(this, e);
		return Yr(this), t;
	};
}
//#endregion
//#region src/features/widgets/responsive.ts
var Zr = "argus-v2049-responsive-widgets", Qr = "#w-access,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role=\"tabpanel\"],.users-modal,.access-modal,.argus-users-modal";
function $r(e) {
	let t = e.shadowRoot;
	if (!t) return;
	let n = t.getElementById(Zr);
	n || (n = document.createElement("style"), n.id = Zr, t.appendChild(n)), n.textContent = "\n#w-access{display:flex!important;flex-direction:column!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;box-sizing:border-box!important}\n#w-access>.panel-head,#w-access>.access-summary,#w-access>.tabs{flex:0 0 auto!important}\n#w-access :is(.panel-body,#access-view,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role=\"tabpanel\"]){flex:1 1 auto!important;min-width:0!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;scrollbar-gutter:stable!important;box-sizing:border-box!important}\n:is(.users-modal,.access-modal,.argus-users-modal,.modal,[role=\"dialog\"]){max-width:min(94vw,760px)!important;max-height:min(88dvh,720px)!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;box-sizing:border-box!important}\n/* Backup: title plus an explicit responsive button grid. */\n#w-backup{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-auto-rows:max-content!important;place-content:center!important;align-items:center!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow:hidden!important;box-sizing:border-box!important;padding:16px!important;gap:12px!important;text-align:center!important}\n#w-backup>h2,#w-backup>.panel-head,#w-backup>.panel-title{grid-column:1/-1!important;width:100%!important;margin:0 0 2px!important;text-align:center!important}\n#w-backup>:not(.panel-edit-overlay){min-width:0!important;max-width:100%!important;box-sizing:border-box!important;margin-top:0!important;margin-bottom:0!important}\n#w-backup :is(.panel-body,.actions,.backup-actions,.button-row,.controls){display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-column:1/-1!important;gap:12px!important;width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;box-sizing:border-box!important;flex-wrap:wrap!important}\n#w-backup :is(button,a,ha-button,mwc-button){width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;padding-inline:8px!important;white-space:normal!important;overflow-wrap:anywhere!important;text-align:center!important;justify-content:center!important;box-sizing:border-box!important;font-size:clamp(11px,1.1vw,14px)!important}\n/* Support: compact centered group with 3-column actions grid */\n#w-github{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow:hidden!important;box-sizing:border-box!important;padding:16px!important;gap:14px!important;text-align:center!important}\n#w-github>:not(.panel-edit-overlay){min-width:0!important;max-width:100%!important;margin:0!important;box-sizing:border-box!important}\n#w-github :is(h2,h3,.panel-head,.panel-title,.github-header){width:100%!important;margin:0!important;text-align:center!important}\n#w-github :is(.panel-body,.actions,.support-actions,.support-actions-grid){display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;width:100%!important;max-width:440px!important;margin:0!important;padding:0!important;box-sizing:border-box!important}\n#w-github :is(button,a,ha-button,mwc-button,.support-link-btn){width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;white-space:nowrap!important;text-align:center!important;justify-content:center!important;box-sizing:border-box!important}\n#w-backup .panel-edit-overlay,#w-github .panel-edit-overlay{position:absolute!important;inset:0!important;margin:0!important;max-width:none!important}\n@media(max-width:460px){#w-backup{grid-template-columns:1fr!important;overflow-y:auto!important}#w-backup :is(.panel-body,.actions,.backup-actions,.button-row,.controls){grid-template-columns:1fr!important}#w-backup :is(button,a,ha-button,mwc-button){font-size:13px!important}#w-github{padding:14px!important;gap:10px!important}#w-github :is(.panel-body,.actions,.support-actions,.support-actions-grid){grid-template-columns:1fr!important;gap:6px!important}}\n";
}
function ei(e) {
	let t = e.shadowRoot;
	t && t.querySelectorAll(Qr).forEach((e) => {
		let t = e;
		t.style.touchAction = "pan-y", t.style.setProperty("-webkit-overflow-scrolling", "touch"), t.scrollHeight > t.clientHeight && (t.style.overflowY = "auto");
	});
}
function ti(e) {
	$r(e), ei(e);
}
function ni(e) {
	let t = e?.prototype;
	if (!t || t.__v2049ResponsiveWidgets) return;
	t.__v2049ResponsiveWidgets = !0;
	let n = t.connectedCallback, r = t.disconnectedCallback, i = t._load, a = t._renderEntries;
	t.connectedCallback = function() {
		let e = n?.call(this);
		return ti(this), this._v2049Observer?.disconnect?.(), this._v2049Frame = 0, this._v2049Observer = new MutationObserver(() => {
			this._v2049Frame ||= requestAnimationFrame(() => {
				this._v2049Frame = 0, ti(this);
			});
		}), this.shadowRoot && this._v2049Observer.observe(this.shadowRoot, {
			childList: !0,
			subtree: !0
		}), e;
	}, t.disconnectedCallback = function() {
		return this._v2049Observer?.disconnect?.(), this._v2049Observer = null, this._v2049Frame && cancelAnimationFrame(this._v2049Frame), this._v2049Frame = 0, r?.call(this);
	}, t._load = async function(...e) {
		let t = await i?.apply(this, e);
		return ti(this), t;
	}, t._renderEntries = function(...e) {
		let t = a?.apply(this, e);
		return ti(this), t;
	};
}
//#endregion
//#region src/features/widgets/layouts.ts
var ri = "argus-v2050-widget-layouts";
function ii(e) {
	let t = e.shadowRoot;
	if (!t) return;
	let n = t.getElementById(ri);
	n || (n = document.createElement("style"), n.id = ri, t.appendChild(n)), n.textContent = "\n#w-access{display:flex!important;flex-direction:column!important;min-width:0!important;min-height:0!important;height:100%!important;overflow:hidden!important}\n#w-access .panel-body,#w-access #access-view,#w-access .access-view,#w-access .access-content,#w-access .users-list,#w-access .user-list{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;overscroll-behavior:contain!important}\n#w-backup{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:14px!important;padding:16px!important;box-sizing:border-box!important;height:100%!important;min-height:0!important;overflow:hidden!important;text-align:center!important}\n#w-backup h2,#w-backup .panel-head,#w-backup .panel-title{margin:0!important;width:100%!important;text-align:center!important;flex:0 0 auto!important}\n#w-backup .panel-body,#w-backup .actions,#w-backup .backup-actions,#w-backup .button-row,#w-backup .controls{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:10px!important;width:100%!important;max-width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important}\n#w-backup button,#w-backup a,#w-backup ha-button,#w-backup mwc-button{width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;white-space:normal!important;overflow-wrap:anywhere!important;justify-content:center!important;text-align:center!important;font-size:clamp(11px,1.1vw,14px)!important;box-sizing:border-box!important}\n#w-github{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:14px!important;padding:16px!important;box-sizing:border-box!important;height:100%!important;min-height:0!important;overflow:hidden!important;text-align:center!important}\n#w-github h2,#w-github h3,#w-github .panel-head,#w-github .panel-title,#w-github .github-header{margin:0!important;width:100%!important;text-align:center!important}\n#w-github :is(.panel-body,.actions,.support-actions,.support-actions-grid){display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;width:100%!important;max-width:440px!important;margin:0!important;padding:0!important;box-sizing:border-box!important}\n#w-github :is(button,a,ha-button,mwc-button,.support-link-btn){width:100%!important;max-width:100%!important;margin:0!important;justify-content:center!important;box-sizing:border-box!important}\n#w-backup .panel-edit-overlay,#w-github .panel-edit-overlay,#w-access .panel-edit-overlay{position:absolute!important;inset:0!important}\n@media(max-width:520px){#w-backup .panel-body,#w-backup .actions,#w-backup .backup-actions,#w-backup .button-row,#w-backup .controls{grid-template-columns:1fr!important}#w-backup{overflow-y:auto!important}}\n";
}
function ai(e) {
	let t = e.shadowRoot;
	t && t.querySelectorAll("#w-access,.access-content,.users-list,.user-list,[role=tabpanel],.users-modal,.access-modal").forEach((e) => {
		let t = e;
		t.style.touchAction = "pan-y", t.style.setProperty("-webkit-overflow-scrolling", "touch"), t.scrollHeight > t.clientHeight && (t.style.overflowY = "auto");
	});
}
function oi(e) {
	ii(e), ai(e);
}
function si(e) {
	let t = e?.prototype;
	if (!t || t.__v2050WidgetLayouts) return;
	t.__v2050WidgetLayouts = !0;
	let n = t.connectedCallback, r = t.disconnectedCallback, i = t._load, a = t._renderEntries;
	t.connectedCallback = function() {
		let e = n?.call(this);
		return oi(this), this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutFrame = 0, this._v2050LayoutObs = new MutationObserver(() => {
			this._v2050LayoutFrame ||= requestAnimationFrame(() => {
				this._v2050LayoutFrame = 0, oi(this);
			});
		}), this.shadowRoot && this._v2050LayoutObs.observe(this.shadowRoot, {
			childList: !0,
			subtree: !0
		}), e;
	}, t.disconnectedCallback = function() {
		return this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutObs = null, this._v2050LayoutFrame && cancelAnimationFrame(this._v2050LayoutFrame), this._v2050LayoutFrame = 0, r?.call(this);
	}, t._load = async function(...e) {
		let t = await i?.apply(this, e);
		return oi(this), t;
	}, t._renderEntries = function(...e) {
		let t = a?.apply(this, e);
		return oi(this), t;
	};
}
//#endregion
//#region src/features/more-info/hook.ts
var ci = "argus-more-info-hook-installed", li = "argus-more-info-dialog-styles";
function ui(e, t) {
	if (!e || !e.startsWith("alarm_control_panel.")) return !1;
	if (e.includes("argus")) return !0;
	let n = t?.states?.[e];
	return !!(n?.attributes?.argus_version || n?.attributes?.argus_entry_id);
}
function di(e) {
	if (!e || typeof e.getElementById == "function" && e.getElementById(li)) return;
	let t = e.createElement("style");
	t.id = li, t.textContent = "\n    ha-more-info-dialog:has(.argus-more-info-active) ha-dialog,\n    ha-more-info-dialog:has(.argus-more-info-active) .mdc-dialog__surface {\n      --ha-dialog-border-radius: 28px !important;\n      --mdc-shape-medium: 28px !important;\n      background: rgba(7, 17, 31, 0.94) !important;\n      backdrop-filter: blur(32px) saturate(170%) !important;\n      -webkit-backdrop-filter: blur(32px) saturate(170%) !important;\n      border: 1px solid rgba(255, 255, 255, 0.16) !important;\n      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.65) !important;\n      max-width: 640px !important;\n      width: min(92vw, 620px) !important;\n    }\n    .argus-more-info-container {\n      width: 100%;\n      box-sizing: border-box;\n      padding: 0;\n      margin: 0;\n      overflow: hidden;\n      border-radius: 24px;\n    }\n    .argus-more-info-container argus-panel-v2018 {\n      display: block;\n      width: 100%;\n    }\n  ", (e.head || e.body || e).appendChild(t);
}
function fi(e, t) {
	if (!e) return;
	let n = e._entityId || e.entityId || e.params?.entityId;
	if (!ui(n, t)) return;
	let r = e.shadowRoot;
	if (!r) return;
	let i = r.querySelector("more-info-content") || r.querySelector("more-info-alarm_control_panel") || r.querySelector(".content") || r.querySelector("ha-dialog");
	if (!i) return;
	e.classList.add("argus-more-info-active");
	let a = r.querySelector(".argus-more-info-container");
	if (a) {
		let e = a.querySelector("argus-card") || a.querySelector("argus-panel-v2018");
		e && (e.hass = t);
	} else {
		a = document.createElement("div"), a.className = "argus-more-info-container";
		let e = customElements.get("argus-card") ? "argus-card" : customElements.get("argus-panel-v2018") ? "argus-panel-v2018" : null;
		if (e) {
			let r = document.createElement(e);
			if (typeof r.setConfig == "function") try {
				r.setConfig({
					entity: n,
					compact: !0
				});
			} catch {}
			r.hass = t, a.appendChild(r);
		}
		let o = r.querySelector("more-info-alarm_control_panel") || r.querySelector("more-info-content");
		o && o !== a ? (o.style.display = "none", o.parentNode?.insertBefore(a, o)) : i.appendChild(a);
	}
}
function pi(e) {
	if (typeof window > "u" || typeof document > "u" || window[ci]) return;
	window[ci] = !0;
	try {
		di(document);
	} catch {}
	let t = (e) => {
		e.detail?.entityId && requestAnimationFrame(() => {
			try {
				let e = document.querySelector("home-assistant"), t = e?.shadowRoot?.querySelector("ha-more-info-dialog") || document.querySelector("ha-more-info-dialog");
				t && fi(t, e?.hass);
			} catch {}
		});
	};
	try {
		window.addEventListener("hass-more-info", t, { passive: !0 }), document.addEventListener("hass-more-info", t, { passive: !0 });
	} catch {}
	try {
		typeof MutationObserver < "u" && document.body && new MutationObserver(() => {
			try {
				let e = document.querySelector("home-assistant"), t = e?.shadowRoot?.querySelector("ha-more-info-dialog") || document.querySelector("ha-more-info-dialog");
				t && fi(t, e?.hass);
			} catch {}
		}).observe(document.body, {
			childList: !0,
			subtree: !0
		});
	} catch {}
}
//#endregion
//#region src/app/index.ts
function mi(e) {
	e ||= customElements.get("argus-panel-v2018");
	let t = e;
	t && !t.__argusTypedFrontend && (t.__argusTypedFrontend = !0, vr(t), hr(t), br(t), Rr(t), Ur(t), Xr(t), ar(t), ni(t), si(t), pi(t), pr(t), cr(t));
}
//#endregion
export { mi as applyArgusFrontend };
