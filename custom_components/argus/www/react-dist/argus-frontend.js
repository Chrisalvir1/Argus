//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), c = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, l = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, u = (n, r, o) => (o = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), d = (e) => a.call(e, "module.exports") ? e["module.exports"] : l(t({}, "__esModule", { value: !0 }), e), f = [
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
], p = {
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
}, m = document.createElement("template");
m.innerHTML = "\n<style>\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');\n\n#widget-grid.hide-legacy > section.panel:not(#w-instances) { display: none !important; }\n\n@keyframes heroSpringSlideIn {\n  0% { transform: translateX(-50px); opacity: 0; }\n  100% { transform: translateX(0); opacity: 1; }\n}\n\n  /* Modern Premium Liquid Glass & iOS Wobble Styles */\n  :host {\n    font-family: 'Inter', sans-serif !important;\n    --glass-bg: var(--argus-glass-bg, rgba(255, 255, 255, 0.07));\n    --glass-border: var(--argus-glass-border, rgba(255, 255, 255, 0.09));\n    --glass-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.35),\n                    0 15px 30px -10px rgba(0, 122, 255, 0.12),\n                    inset 0 1px 0 rgba(255, 255, 255, 0.15);\n    --sos-red: linear-gradient(135deg, #ff3b30, #ff2d55);\n    --ios-track: rgba(0, 0, 0, 0.25);\n    --ios-thumb: linear-gradient(180deg, #ffffff, #f4f4f7);\n    --text-shadow: 0 1px 3px rgba(0,0,0,0.15);\n    --primary-color: #007aff;\n    --personalize-bg: rgba(255, 255, 255, 0.02);\n    --personalize-border: rgba(255, 255, 255, 0.06);\n    --personalize-divider: rgba(255, 255, 255, 0.08);\n    --bg-inputs-bg: rgba(0, 0, 0, 0.15);\n    --bg-inputs-border: rgba(255, 255, 255, 0.05);\n    --input-bg-darker: rgba(0, 0, 0, 0.25);\n    --input-border-darker: rgba(255, 255, 255, 0.12);\n    --hero-bg: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));\n    --log-item-bg: rgba(255, 255, 255, 0.02);\n    --log-item-border: rgba(255, 255, 255, 0.05);\n    --user-card-bg: rgba(255, 255, 255, 0.02);\n    --user-card-border: rgba(255, 255, 255, 0.06);\n    --primary-text-color: #fff !important;\n    --secondary-text-color: rgba(255, 255, 255, 0.7);\n    --input-bg: rgba(255, 255, 255, 0.04);\n    --input-border: rgba(255, 255, 255, 0.12);\n  }\n\n  /* High Contrast / OLED Dark Mode Accessibility */\n  :host([argus-contrast=\"high\"]),\n  :host(.argus-contrast-high) {\n    --glass-bg: rgba(11, 16, 26, 0.95);\n    --glass-border: rgba(255, 255, 255, 0.22);\n    --v2066-glass: rgba(11, 16, 26, 0.95);\n    --v2066-border: rgba(255, 255, 255, 0.22);\n    --v2066-text: #ffffff;\n    --v2066-muted: #cbd5e1;\n    --primary-text-color: #ffffff !important;\n    --secondary-text-color: #cbd5e1 !important;\n    --hud-bg: rgba(11, 16, 26, 0.98);\n    --hero-bg: linear-gradient(135deg, rgba(16, 24, 39, 0.96), rgba(8, 12, 20, 0.98));\n    --personalize-bg: rgba(11, 16, 26, 0.92);\n    --personalize-border: rgba(255, 255, 255, 0.2);\n    --user-card-bg: rgba(14, 20, 33, 0.95);\n    --user-card-border: rgba(255, 255, 255, 0.2);\n  }\n  :host([argus-contrast=\"high\"]) #profile-dropdown,\n  :host(.argus-contrast-high) #profile-dropdown {\n    background: rgba(10, 14, 23, 0.98) !important;\n    border: 1px solid rgba(255, 255, 255, 0.25) !important;\n    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.7) !important;\n  }\n  :host([argus-contrast=\"high\"]) .liquid-glass,\n  :host(.argus-contrast-high) .liquid-glass {\n    background: rgba(11, 16, 26, 0.95) !important;\n    border-color: rgba(255, 255, 255, 0.22) !important;\n  }\n\n  :host {\n    --hud-text-color: #fff;\n    --hud-bg: rgba(255,255,255,0.06);\n  }\n\n  /* Garantiza legibilidad sobre cualquier fondo */\n  :host([data-bg-mode=\"default\"]) .hero-top-bar,\n  :host([data-bg-mode=\"default\"]) .entry-hud,\n  :host([data-bg-mode=\"default\"]) .mode-btn,\n  :host([data-bg-mode=\"default\"]) .sensor-pill {\n    text-shadow: 0 1px 4px rgba(0,0,0,0.7);\n  }\n\n  :host([data-bg-mode=\"default\"]) .mode-btn {\n    background: rgba(255,255,255,0.10) !important;\n    border: 1px solid rgba(255,255,255,0.18) !important;\n    color: rgba(255,255,255,0.95) !important;\n    backdrop-filter: blur(12px);\n  }\n\n  :host([data-bg-mode=\"default\"]) .subsection-title,\n  :host([data-bg-mode=\"default\"]) .user-role-label {\n    color: rgba(255,255,255,0.60) !important;\n  }\n\n  /* Fullscreen Active / Virtual Fullscreen CSS Overrides */\n  :host(.fullscreen-active) {\n    position: fixed !important;\n    inset: 0 !important;\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    width: 100vw !important;\n    width: 100dvw !important;\n    height: 100vh !important;\n    height: 100dvh !important;\n    z-index: 99999999 !important;\n    background: radial-gradient(ellipse at 50% 50%, #162438 0%, #08101a 60%, #010408 100%) !important;\n    overflow-y: auto !important;\n    overflow-x: hidden !important;\n    -webkit-overflow-scrolling: touch !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  :host(.fullscreen-active) .hero,\n  :host(.fullscreen-active) #argus-react-dashboard-root,\n  :host(.fullscreen-active) .argus-dashboard,\n  :host(.fullscreen-active) .panel-head,\n  :host(.fullscreen-active) section:not(#w-instances),\n  :host(.fullscreen-active) .argus-widget:not(#w-instances),\n  :host(.fullscreen-active) .personalize-section {\n    display: none !important;\n  }\n  :host(.fullscreen-active) .wrap,\n  :host(.fullscreen-active) .grid,\n  :host(.fullscreen-active) #widget-grid,\n  :host(.fullscreen-active) #w-instances,\n  :host(.fullscreen-active) #entries,\n  :host(.fullscreen-active) #entries > div {\n    display: flex !important;\n    flex-direction: column !important;\n    position: static !important;\n    width: 100% !important;\n    width: 100vw !important;\n    width: 100dvw !important;\n    max-width: none !important;\n    min-height: 100% !important;\n    min-height: 100vh !important;\n    min-height: 100dvh !important;\n    height: 100% !important;\n    max-height: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    border: none !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: transparent !important;\n    backdrop-filter: none !important;\n    -webkit-backdrop-filter: none !important;\n    transform: none !important;\n    filter: none !important;\n    overflow: visible !important;\n  }\n\n\n\n  .liquid-glass {\n    background: linear-gradient(135deg,color-mix(in srgb,rgba(255,255,255,0.18) 80%,transparent),rgba(255,255,255,0.04));\n    backdrop-filter: blur(28px) saturate(180%) brightness(1.08);\n    -webkit-backdrop-filter: blur(28px) saturate(180%) brightness(1.08);\n    border: 1px solid rgba(255,255,255,0.22);\n    box-shadow: 0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.25);\n    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;\n  }\n  .wrap { position: relative; z-index: 1; transition: filter 0.35s ease, opacity 0.35s ease; opacity: 0; pointer-events: none; }\n  .wrap.wrap-ready { opacity: 1; pointer-events: auto; }\n  .wrap.wrap-blurred { filter: blur(15px); opacity: 0.45; pointer-events: none; }\n  @keyframes dialElasticIn {\n    0% { transform: scale(0.8) translateY(20px); opacity: 0; }\n    60% { transform: scale(1.04) translateY(-4px); opacity: 0.9; }\n    85% { transform: scale(0.98) translateY(1px); opacity: 0.98; }\n    100% { transform: scale(1) translateY(0); opacity: 1; }\n  }\n  .dial-elastic { animation: dialElasticIn 0.5s cubic-bezier(0.25, 1.25, 0.5, 1) forwards; }\n\n  .collapsible {\n    transition: max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease, margin 0.4s ease, padding 0.4s ease;\n    overflow: hidden;\n    max-height: 600px;\n    opacity: 1;\n  }\n  .collapsible.collapsed {\n    max-height: 0 !important;\n    opacity: 0 !important;\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n    border: none !important;\n    pointer-events: none;\n  }\n\n  /* Scrollbar aesthetics */\n  ::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n  }\n  ::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: rgba(255, 255, 255, 0.12);\n    border-radius: 999px;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(255, 255, 255, 0.25);\n  }\n  .x-never-match ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.08);\n  }\n  .x-never-match ::-webkit-scrollbar-thumb:hover {\n    background: rgba(0, 0, 0, 0.18);\n  }\n\n  .battery-alert { margin: 0 0 16px 0; padding: 14px 18px; border-radius: 20px; background: rgba(255, 149, 0, 0.12); border: 1px solid rgba(255, 149, 0, 0.22); color: #ffe3b3; font-weight: 700; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); text-align: left; box-shadow: 0 4px 15px rgba(255,149,0,0.1); }\n\n  /* SOS Slider redesign */\n  .btn-sos { width: 100%; min-height: 56px; border: 0; border-radius: 20px; background: var(--sos-red); color: white; font-size: 1.05rem; font-weight: 800; letter-spacing: 0.02em; cursor: pointer; box-shadow: 0 10px 25px rgba(255, 59, 48, 0.35); transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease, opacity 0.2s; margin-top: 8px; display:flex;align-items:center;justify-content:center;gap:10px; }\n  .btn-sos:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(255, 59, 48, 0.45); }\n  .btn-sos:active { transform: scale(0.95); opacity: 0.92; }\n  .ios-confirm-backdrop { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.55); display: none; align-items: center; justify-content: center; padding: 18px; z-index: 999999; backdrop-filter: blur(12px); }\n  .ios-confirm-backdrop.open { display: flex; pointer-events: auto !important; }\n  .ios-confirm-backdrop.open * { pointer-events: auto; }\n  .ios-confirm-backdrop.open .ios-slider-label { pointer-events: none !important; }\n  .ios-confirm-card { width: min(100%, 420px); border-radius: 32px; padding: 24px; color: white; background: rgba(20,22,35,0.85); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 32px 80px rgba(0,0,0,0.6); }\n  .ios-confirm-title { font-size: 1.25rem; font-weight: 800; margin-bottom: 8px; text-align: center; }\n  .ios-confirm-text { font-size: 0.98rem; opacity: 0.85; line-height: 1.45; text-align: center; margin-bottom: 20px; }\n  .ios-slider-shell { padding: 4px 0 16px; }\n  .ios-slider-track { position: relative; height: 66px; border-radius: 999px; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); overflow: hidden; }\n  .ios-slider-label { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: 0 82px; font-size: 0.95rem; font-weight: 700; color: rgba(255, 255, 255, 0.85); pointer-events: none; text-align: center; }\n  .ios-slider-thumb { position: absolute; top: 6px; left: 6px; width: 52px; height: 52px; border-radius: 50%; background: var(--ios-thumb); color: #ff3b30; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 900; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25); touch-action: none; user-select: none; cursor: grab; transition: transform 0.1s ease-out; }\n  .ios-confirm-cancel { width: 100%; min-height: 50px; border: 0; border-radius: 18px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.05); color: white; font-weight: 700; cursor: pointer; transition: background 0.2s, transform 0.15s; }\n  .ios-confirm-cancel:hover { background: rgba(255,255,255,0.14); }\n  .ios-confirm-cancel:active { transform: scale(0.96); }\n\n  :host{display:block;min-height:100vh;box-sizing:border-box;--primary-text-color:#ffffff!important;--secondary-text-color:rgba(255,255,255,0.7)!important;color:#ffffff!important;background:var(--lovelace-background,var(--primary-background-color));font-family:'Outfit',Inter,system-ui,sans-serif}\n  :host([compact]), :host(.argus-compact) {\n    min-height: auto !important;\n    background: transparent !important;\n  }\n  :host([compact]) .wrap, :host(.argus-compact) .wrap {\n    padding: 0 !important;\n    margin: 0 !important;\n    max-width: 100% !important;\n    width: 100% !important;\n    height: auto !important;\n    min-height: fit-content !important;\n    gap: 0 !important;\n    display: flex !important;\n    flex-direction: column !important;\n    flex: 1 1 auto !important;\n    overflow: visible !important;\n    container-type: inline-size;\n    container-name: argus-compact-wrap;\n  }\n  :host([compact]) .hero, :host(.argus-compact) .hero {\n    display: none !important;\n  }\n  :host([compact]) #argus-canvas-bg, :host(.argus-compact) #argus-canvas-bg {\n    display: none !important;\n  }\n  :host([compact]) .tabs, :host(.argus-compact) .tabs {\n    display: none !important;\n  }\n  :host([compact]) .dashboard-instances .panel-head, :host(.argus-compact) .dashboard-instances .panel-head {\n    display: none !important;\n  }\n  :host([compact]) .personalize-section, :host(.argus-compact) .personalize-section {\n    display: none !important;\n  }\n  :host([compact]) .glass.panel:not(#w-instances), :host(.argus-compact) .glass.panel:not(#w-instances) {\n    display: none !important;\n  }\n  :host([compact]) .argus-widget:not(:has(#w-instances)), :host(.argus-compact) .argus-widget:not(:has(#w-instances)) {\n    display: none !important;\n  }\n  :host([compact]) .argus-dashboard__toolbar, :host(.argus-compact) .argus-dashboard__toolbar {\n    display: none !important;\n  }\n  :host([compact]) #widget-grid, :host(.argus-compact) #widget-grid {\n    padding: 0 !important;\n    margin: 0 !important;\n    display: block !important;\n    height: auto !important;\n  }\n  :host([compact]) #w-instances, :host(.argus-compact) #w-instances {\n    background: transparent !important;\n    border: none !important;\n    box-shadow: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    height: auto !important;\n    width: 100% !important;\n    min-height: fit-content !important;\n    display: flex !important;\n    flex-direction: column !important;\n    flex: 1 1 auto !important;\n    overflow: visible !important;\n    background: var(--liquid-glass-bg, linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))) !important;\n    backdrop-filter: blur(28px) saturate(150%) !important;\n    -webkit-backdrop-filter: blur(28px) saturate(150%) !important;\n  }\n  :host([compact]) .entry, :host(.argus-compact) .entry {\n    margin-bottom: 0 !important;\n    border-radius: 24px !important;\n    height: auto !important;\n    width: 100% !important;\n    min-height: fit-content !important;\n    display: flex !important;\n    flex-direction: column !important;\n    flex: 1 1 auto !important;\n    overflow: visible !important;\n    background: var(--liquid-glass-bg, linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))) !important;\n    backdrop-filter: blur(28px) saturate(150%) !important;\n    -webkit-backdrop-filter: blur(28px) saturate(150%) !important;\n  }\n  :host([compact]) #bootstrap-overlay, :host(.argus-compact) #bootstrap-overlay,\n  :host([compact]) .argus-profile-overlay, :host(.argus-compact) .argus-profile-overlay,\n  :host([compact]) .argus-welcome-screen, :host(.argus-compact) .argus-welcome-screen {\n    display: none !important;\n  }\n  :host([compact]) .argus-widget__content, :host(.argus-compact) .argus-widget__content {\n    height: auto !important;\n    width: 100% !important;\n    display: flex !important;\n    flex-direction: column !important;\n    flex: 1 1 auto !important;\n    overflow: visible !important;\n  }\n  :host([compact]) #entries, :host(.argus-compact) #entries {\n    display: flex !important;\n    flex-direction: column !important;\n    flex: 1 1 auto !important;\n    height: auto !important;\n    width: 100% !important;\n    margin: 0 !important;\n    overflow: visible !important;\n  }\n  *{box-sizing:border-box}\n  @container argus-compact-wrap (max-width: 800px) {\n    .security-console { flex-direction: column !important; padding: 20px 18px 24px !important; gap: 20px !important; align-items: center !important; justify-content: center !important; }\n    .security-console .entry-icon { order: 2 !important; flex: 0 0 auto !important; min-height: 130px !important; margin: 0 auto !important; }\n    .security-console .liquid-stack { order: 3 !important; width: 100% !important; max-width: 360px !important; }\n    .security-console .console-sensors { order: 4 !important; width: 100% !important; max-width: 360px !important; display: flex !important; flex-direction: column !important; }\n    .sensor-column { position: static !important; max-width: 100% !important; width: 100% !important; align-items: stretch !important; padding: 0 !important; gap: 10px !important; }\n    .sensor-chip { max-width: none !important; }\n    .entry-content { padding: 20px !important; display: flex !important; flex-direction: column !important; align-items: center !important;  }\n    .liquid-stack { display: flex !important; flex-direction: column !important; align-items: stretch !important; gap: 8px !important; }\n  }\n  @keyframes iosGlassIn{0%{opacity:0;transform:translateY(14px) scale(.965)}65%{opacity:1;transform:translateY(-2px) scale(1.008)}100%{transform:translateY(0) scale(1)}}\n  @keyframes iosSelectPop{0%{transform:scale(.92);opacity:.45}60%{transform:scale(1.045);opacity:1}100%{transform:scale(1)}}\n  .glass,.entry,.mode-section-card,.user-card,.file-card,.log-item{animation:iosGlassIn .5s cubic-bezier(.22,1.18,.36,1) both}\n  .pick-row:has(input:checked),.tab.active,.liquid-btn.active{animation:iosSelectPop .34s cubic-bezier(.2,1.45,.35,1);box-shadow:0 0 0 1px color-mix(in srgb,var(--primary-color,#007aff) 45%,transparent),0 12px 30px color-mix(in srgb,var(--primary-color,#007aff) 18%,transparent)}\n  .glass.liquid-glass{background:var(--liquid-glass-bg, linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)))!important;backdrop-filter:blur(28px) saturate(150%)!important;-webkit-backdrop-filter:blur(28px) saturate(150%)!important;border-color:rgba(255,255,255,0.15)!important;box-shadow:0 8px 32px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.1)!important}\n  button:focus-visible,input:focus-visible,select:focus-visible,[tabindex]:focus-visible{outline:3px solid color-mix(in srgb,var(--primary-color,#007aff) 70%,#fff);outline-offset:3px}\n  button:disabled{cursor:not-allowed;opacity:.5;filter:saturate(.45)}\n  @media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}\n  .wrap{max-width:1400px;margin:0 auto;padding:24px;display:grid;gap:24px}\n  .glass{background:var(--glass-bg, rgba(255, 255, 255, 0.06));border:1px solid var(--glass-border, rgba(255, 255, 255, 0.09));border-radius:28px;box-shadow:var(--glass-shadow);backdrop-filter:blur(12px) saturate(1.2);-webkit-backdrop-filter:blur(12px) saturate(1.2)}\n  .hero{position:relative!important;z-index:9999!important;overflow:visible!important;padding:32px 36px;display:flex;align-items:center;justify-content:space-between;gap:20px;background:var(--hero-bg, linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)));margin-bottom:12px;will-change:transform,opacity;animation:heroSpringSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both}\n  .hero-left{display:flex;align-items:center;gap:22px}\n  .hero-context{position:relative!important;z-index:10000!important;overflow:visible!important;margin-left:auto;display:flex;align-items:center;gap:8px;min-width:0}\n  #hero-profile-container{position:relative!important;z-index:10001!important;overflow:visible!important}\n  .hero-profile-dropdown{position:absolute!important;top:calc(100% + 12px)!important;right:0!important;z-index:999999!important;max-height:calc(100vh - 100px)!important;overflow-y:auto!important;background:#0f172a!important;background-color:#0f172a!important;border:1.5px solid rgba(255,255,255,0.2)!important;box-shadow:0 24px 60px rgba(0,0,0,0.85),inset 0 1px 0 rgba(255,255,255,0.15)!important;backdrop-filter:blur(48px) saturate(200%)!important;-webkit-backdrop-filter:blur(48px) saturate(200%)!important;opacity:1!important}.hero-clock{display:flex;flex-direction:column;align-items:flex-end;padding-right:14px;border-right:1px solid rgba(255,255,255,.14);line-height:1}.hero-clock strong{font-size:1.45rem;letter-spacing:-.05em}.hero-clock span{font-size:10px;opacity:.65;margin-top:5px;text-transform:uppercase;letter-spacing:.08em}.hero-pills{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}.hero-pill{display:inline-flex;align-items:center;gap:5px;padding:7px 10px;border:1px solid rgba(255,255,255,.15);border-radius:999px;background:rgba(7,16,29,.27);box-shadow:inset 0 1px 0 rgba(255,255,255,.15);backdrop-filter:blur(14px);font-size:10px;font-weight:800;white-space:nowrap}.hero-pill .hero-live{width:7px;height:7px;border-radius:50%;background:#55df91;box-shadow:0 0 9px #55df91}\n  .hero-icon{font-size:54px;line-height:1;filter:drop-shadow(0 0 20px rgba(255,255,255,0.15))}\n  .hero h1{margin:0 0 4px;font-size:34px;font-weight:900;letter-spacing:-0.03em;background:var(--hero-gradient, linear-gradient(to right, #ffffff, #82b1ff));-webkit-background-clip:text;-webkit-text-fill-color:transparent}\n  .hero p{margin:0;font-size:16px;opacity:.7;font-weight:500}\n  @media(max-width:700px){.wrap{padding:14px;gap:14px}.glass{border-radius:22px}.hero{padding:22px;align-items:flex-start}.hero-icon{font-size:40px}.hero h1{font-size:27px}.hero p{font-size:14px}.entry-content{grid-template-columns:96px 1fr;padding:16px 105px 16px 14px;gap:10px}.sensor-column{width:98px}.sensor-chip{max-width:94px}.entry-icon{min-height:110px}.entry-icon svg{max-width:150px}.hud{top:12px;right:12px}.hud-data{font-size:15px;padding:5px 9px}.hud-loc{font-size:10px;padding:3px 8px}}\n\n  /* Modern Mode Navigation & iOS Liquid Bubble Transition */\n  .tabs { position: relative; isolation:isolate; display: flex; min-height:72px; background: rgba(255, 255, 255, 0.03); padding: 6px; border-radius: 20px; gap: 6px; overflow: visible; scrollbar-width: none; margin-bottom: 20px; border: 1px solid rgba(255, 255, 255, 0.06); z-index: 1; }\n  .tabs::-webkit-scrollbar { display: none; }\n  .tab { position: relative; flex: 1; min-width: 55px; min-height:60px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; border-radius: 14px; padding: 10px 4px; font-size: 11px; font-weight: 800; color: rgba(255, 255, 255, 0.55); transition: color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); cursor: pointer; border: none !important; outline: none; background: transparent !important; box-shadow: none !important; z-index: 1; }\n  .tab:hover { color: #fff; }\n  .tab:active:not(:disabled) { transform: scale(0.94); }\n  .tab.active { color: #fff !important; background: transparent !important; box-shadow: none !important; transform: none !important; }\n\n  .tab-bubble { position: absolute; top: 6px; bottom: 6px; height: calc(100% - 12px); border-radius: 14px; z-index: 0; transform-origin: left center; transition: transform 0.45s cubic-bezier(0.25, 1.35, 0.4, 1.05), background 0.4s ease, box-shadow 0.4s ease; pointer-events: none; }\n  .tab-bubble.bubble-disarmed { background: #43a047; box-shadow: 0 8px 24px rgba(67, 160, 71, 0.4); }\n  .tab-bubble.bubble-home { background: #fb8c00; box-shadow: 0 8px 24px rgba(251, 140, 0, 0.4); }\n  .tab-bubble.bubble-away { background: #e53935; box-shadow: 0 8px 24px rgba(229, 57, 53, 0.4); }\n  .tab-bubble.bubble-night { background: #1e88e5; box-shadow: 0 8px 24px rgba(30, 136, 229, 0.4); }\n  .tab-bubble.bubble-vacation { background: #9c27b0; box-shadow: 0 8px 24px rgba(156, 39, 176, 0.4); }\n\n\n  @keyframes bounceIn {\n    0% { transform: scale(0.96); opacity: 0; }\n    50% { transform: scale(1.01); opacity: 1; }\n    100% { transform: scale(1); opacity: 1; }\n  }\n  .bounce-in { animation: bounceIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards; }\n\n  .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;align-items:start;position:relative}\n  .panel{transition:transform .3s ease,box-shadow .3s ease,grid-column .3s ease,grid-row .3s ease;position:relative}\n  .panel[data-size=\"S\"]{grid-column:span 1;grid-row:span 1}\n  .panel[data-size=\"M\"]{grid-column:span 2;grid-row:span 1}\n  .panel[data-size=\"L\"]{grid-column:span 2;grid-row:span 2}\n  .panel[data-size=\"XL\"]{grid-column:span 4;grid-row:span 2}\n  .dashboard-instances{grid-column:1 / -1}\n  \n  /* Edit Mode Styles */\n  .grid.editing .panel{animation:jiggle .3s infinite ease-in-out;cursor:grab}\n  .grid.editing .panel:nth-child(even){animation-duration:.27s;animation-direction:reverse}\n  .grid.editing .panel:nth-child(3n){animation-duration:.32s;animation-delay:.05s}\n  .grid.editing .panel.dragging{opacity:.5;animation:none;cursor:grabbing}\n  \n  .panel-edit-overlay{position:absolute;inset:0;background:rgba(5,15,30,.82);backdrop-filter:blur(10px);border-radius:inherit;z-index:90;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;opacity:0;pointer-events:none;transition:opacity .25s ease}\n  .grid.editing .panel:not(.dashboard-instances) .panel-edit-overlay{opacity:1;pointer-events:auto}\n  \n  .widget-controls{display:flex;flex-direction:column;align-items:center;gap:10px;padding:16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:18px;backdrop-filter:blur(8px)}\n  .widget-controls-title{font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.05em;opacity:.7}\n  .widget-sizes{display:flex;gap:6px}\n  .widget-size-btn{border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.05);color:#fff;border-radius:8px;padding:6px 10px;font-size:11px;font-weight:800;cursor:pointer;transition:all .2s}\n  .widget-size-btn:hover{background:rgba(255,255,255,.15);border-color:rgba(255,255,255,.3)}\n  .widget-size-btn.active{background:#007aff;border-color:#007aff;box-shadow:0 0 10px rgba(0,122,255,.4)}\n  .widget-drag-handle{font-size:22px;color:rgba(255,255,255,.6);cursor:grab;padding:4px}\n  .widget-toggle-btn{background:rgba(220,38,38,.85);color:white;border:none;border-radius:8px;padding:6px 12px;font-size:10px;font-weight:800;cursor:pointer}\n  \n  @keyframes jiggle{\n    0%{transform:rotate(-0.5deg)}\n    50%{transform:rotate(0.5deg)}\n    100%{transform:rotate(-0.5deg)}\n  }\n  @media(max-width:900px){\n    .grid{grid-template-columns:minmax(0,1fr)}\n    .panel[data-size=\"S\"],.panel[data-size=\"M\"],.panel[data-size=\"L\"],.panel[data-size=\"XL\"]{grid-column:1 / -1;grid-row:auto}\n    .grid.editing .panel{animation:none !important}\n  }\n  \n  /* Adaptivity styles for size S widgets */\n  .panel[data-size=\"S\"] .tab-label{display:none}\n  .panel[data-size=\"S\"] .tab-icon{font-size:24px !important}\n  .panel[data-size=\"S\"] #p-backup-desc{display:none}\n  .panel[data-size=\"S\"] #github-desc{display:none}\n\n  /* Collapsible Personalization with Bounce expansion */\n  .personalize-workspace{display:grid;grid-template-rows:0fr;opacity:0;pointer-events:none;transition:grid-template-rows 0.6s cubic-bezier(0.175,0.885,0.32,1.275),opacity 0.4s ease,margin-top 0.4s ease}\n  .personalize-workspace > div { overflow:hidden; min-height:0; }\n  .personalize-workspace:not(.collapsed){grid-template-rows:1fr;opacity:1;pointer-events:auto;margin-top:16px;animation:bounceExpand 0.55s cubic-bezier(0.175,0.885,0.32,1.275) forwards}\n  @keyframes bounceExpand{\n    0%{transform:scale(0.96) translateY(-8px);opacity:0}\n    70%{transform:scale(1.01) translateY(2px);opacity:0.9}\n    100%{transform:scale(1) translateY(0);opacity:1}\n  }\n  @media(max-width:750px){.hero{flex-direction:column;text-align:center}.hero-left{flex-direction:column}}\n  @media(max-width:750px){.hero .lang-pill{align-self:center;margin-inline:auto}.hero-left{width:100%;align-items:center}}\n\n  .stack{display:grid;gap:24px}\n  .panel{padding:28px;position:relative;overflow:hidden}\n  .panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}\n  .panel h2{margin:0;font-size:14px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:var(--primary-color,#007aff);opacity:0.95}\n\n  /* Access settings stay quiet until the user needs to manage them. */\n  .access-panel { padding: 22px 24px; overflow-y:auto; max-height:60vh; -webkit-overflow-scrolling:touch; }\n  .access-panel .panel-head { margin-bottom: 12px; }\n  .access-summary { font-size: 12px; opacity: .72; }\n  .access-actions { display:flex; gap:10px; flex-wrap:wrap; }\n  .access-actions button { flex:0 1 auto; padding:8px 12px; font-size:11px; }\n  .access-actions button.active { background:var(--primary-color,#007aff); color:#fff; border-color:transparent; }\n  .access-section { display:block; min-width:0; margin-bottom:24px; }\n  .access-section h3 { font-size:12px; font-weight:900; opacity:.8; margin:0 0 10px; text-transform:uppercase; }\n  .access-panel .user-card { padding:10px 12px; border-radius:12px; }\n  .github-star-action {\n    display:inline-flex;align-items:center;justify-content:center;gap:7px;\n    min-height:42px;padding:9px 16px;border-radius:14px;text-decoration:none;\n    color:var(--primary-text-color,#fff);font-size:12px;font-weight:850;\n    background:linear-gradient(135deg,rgba(255,255,255,.14),rgba(255,255,255,.055));\n    border:1px solid rgba(255,255,255,.16);\n    box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 9px 24px rgba(0,0,0,.16);\n    backdrop-filter:blur(18px) saturate(150%);\n    -webkit-backdrop-filter:blur(18px) saturate(150%);\n    transition:transform .2s ease,background .2s ease,box-shadow .2s ease;\n  }\n  .github-star-action:hover { transform:translateY(-1px);background:rgba(255,255,255,.18);box-shadow:0 12px 28px rgba(0,0,0,.20); }\n  @media(max-width:600px){ .access-panel{padding:20px}.access-actions{width:100%}.access-actions button{flex:1} }\n\n  /* Personalization inside instances */\n  .personalize-row { display: flex; gap: 14px; align-items: center; margin-top: 18px; padding: 16px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; flex-wrap: wrap; }\n  .personalize-row .setting-label { font-size: 12px; font-weight: 700; opacity: 0.7; margin-bottom: 4px; }\n\n  /* Mode Reorganization Styles — HORIZONTAL */\n  .mode-grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: start; }\n  @media(max-width:900px){ .mode-grid-layout { grid-template-columns: 1fr; } }\n  .mode-section-card {\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.025) 100%) !important;\n    border: 1px solid rgba(255, 255, 255, 0.16) !important;\n    border-radius: 20px !important;\n    padding: 18px !important;\n    backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;\n    -webkit-backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;\n    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.22) !important;\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;\n  }\n  .mode-section-card:hover {\n    border-color: rgba(255, 255, 255, 0.26) !important;\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.04) 100%) !important;\n    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.32) !important;\n    transform: translateY(-2px) !important;\n  }\n  .mode-section-card:hover { border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); }\n  .mode-section-title { font-size: 13px; font-weight: 800; color: var(--primary-color, #007aff); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px; }\n  .mode-sensor-grid { color: var(--primary-text-color, #fff); }\n  .mode-sensor-none { color: var(--primary-text-color, rgba(255,255,255,0.5)); opacity: 0.6; font-size: 13px; }\n  .mode-section-card span, .mode-section-card label, .mode-section-card .input-label { color: var(--primary-text-color, #fff); }\n\n  .sensor-pill { background: var(--pill-bg, rgba(255,255,255,0.06)); color: var(--pill-text, #fff); border: 1px solid var(--pill-border, rgba(255,255,255,0.1)); padding: 8px 14px; border-radius: 14px; display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; transition: all 0.2s; max-width: 100%; box-sizing: border-box; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }\n  @keyframes argus-blink-red { 0%,100%{box-shadow:0 0 0 0 rgba(255,50,50,0);background:var(--pill-bg,rgba(255,255,255,0.06))} 50%{box-shadow:0 0 0 6px rgba(255,50,50,0.25);background:rgba(255,50,50,0.15)} }\n  .sensor-pill.siren-active   { animation: argus-blink-red 1.2s ease-in-out infinite; border-color: rgba(255,82,82,0.5) !important; }\n  .sensor-pill.triggered-sensor { animation: argus-blink-red 0.9s ease-in-out infinite; border-color: rgba(255,82,82,0.6) !important; }\n  .icon-btn { background: none; border: none; padding: 4px; color: inherit; opacity: 0.6; cursor: pointer; transition: opacity 0.2s, transform 0.15s; display: flex; align-items: center; justify-content: center; border-radius: 8px; }\n  .icon-btn:active { transform: scale(0.9); }\n\n  #mode-status { opacity: 0; transition: opacity .35s; }\n  #mode-status.show { opacity: 1; }\n  #mode-status.ok  { color: #4caf50; }\n  #mode-status.err { color: #f44336; }\n\n  .icon-btn:hover { opacity: 1; background: rgba(255,255,255,0.08); }\n  .icon-btn.active { color: #fb8c00; opacity: 1; }\n\n  .input-group { display: flex; flex-direction: column; gap: 6px; }\n  .times-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;align-items:end}\n  .time-field{min-width:0;display:flex;flex-direction:column;justify-content:flex-end;height:100%}\n  .time-field .input-label{min-height:34px;display:flex;align-items:flex-end;line-height:1.2;margin-bottom:6px;padding-bottom:2px}\n  .time-field input{width:100%;height:44px!important;padding:8px 12px!important;border-radius:12px!important;box-sizing:border-box!important;margin:0!important;font-size:14px!important}\n  .entry-sensor-list{min-height:44px;margin-top:12px!important;display:flex;flex-wrap:wrap;align-items:center;border:1px solid rgba(255,255,255,.10)!important;background:rgba(255,255,255,.03)!important;border-radius:12px!important;padding:10px;gap:8px}\n  .instance-activity-strip{display:grid;grid-template-columns:auto repeat(3,minmax(0,1fr));gap:8px;align-items:center;margin:4px 0 16px;padding:10px 12px;border:1px solid rgba(255,255,255,.1);border-radius:18px;background:rgba(5,13,25,.25);backdrop-filter:blur(18px) saturate(135%);-webkit-backdrop-filter:blur(18px) saturate(135%)}.instance-activity-title{font-size:10px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;opacity:.62;padding-right:6px}.instance-activity-item{min-width:0;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.86}.instance-activity-item time{opacity:.55;margin-right:4px;font-variant-numeric:tabular-nums}\n  .mode-mqtt-row{display:flex;align-items:center;gap:10px;margin-top:12px;padding:10px 14px!important;min-height:44px;border-radius:12px!important;background:rgba(255,255,255,.03)!important;border:1px solid rgba(255,255,255,.10)!important}\n  .mode-mqtt-row input{margin:0;accent-color:var(--primary-color,#007aff)}\n  .input-label { font-size: 12px; font-weight: 700; opacity: 0.7; margin-left: 4px; }\n\n  /* Intelligent Entry Card */\n  .entry {\n    position: relative;\n    overflow: hidden;\n    border-radius: 28px !important;\n    border: 1px solid rgba(255, 255, 255, 0.18) !important;\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%) !important;\n    backdrop-filter: blur(32px) saturate(170%) brightness(1.08) !important;\n    -webkit-backdrop-filter: blur(32px) saturate(170%) brightness(1.08) !important;\n    margin-bottom: 16px;\n    min-height: 220px;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  }\n  .entry:hover{transform:translateY(-2px);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 20px 48px rgba(0,0,0,.3)}\n  .entry::after{content:'';position:absolute;inset:0;z-index:2;pointer-events:none;border-radius:inherit;background:linear-gradient(120deg,rgba(255,255,255,.14),transparent 22%,transparent 74%,rgba(255,255,255,.05));mix-blend-mode:soft-light}\n  .entry-status-ribbon{position:absolute;top:20px;left:20px;z-index:5;display:flex;align-items:center;gap:9px;max-width:calc(100% - 260px);padding:8px 12px;border:1px solid color-mix(in srgb,var(--entry-accent) 55%,rgba(255,255,255,.2));border-radius:14px;background:linear-gradient(135deg,color-mix(in srgb,var(--entry-accent) 28%,rgba(8,15,28,.76)),rgba(7,14,25,.56));box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 8px 24px color-mix(in srgb,var(--entry-accent) 22%,transparent);backdrop-filter:blur(18px) saturate(150%);-webkit-backdrop-filter:blur(18px) saturate(150%);color:#fff}\n  .entry-status-orb{width:10px;height:10px;flex:0 0 auto;border-radius:50%;background:var(--entry-accent);box-shadow:0 0 12px var(--entry-accent)}\n  .entry-status-copy{display:flex;flex-direction:column;min-width:0}.entry-status-kicker{font-size:8px;line-height:1;text-transform:uppercase;letter-spacing:.12em;opacity:.72;font-weight:800}.entry-status-name{font-size:13px;line-height:1.2;font-weight:900;letter-spacing:.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.entry-status-event{font-size:9px;line-height:1.2;opacity:.7;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:290px}\n  .entry-bg{position:absolute;inset:0;z-index:1;background-size:cover;background-position:center;transition:opacity 0.5s ease}\n  .entry-bg img{width:100%;height:100%;object-fit:cover;opacity:0.6}\n  .entry-content{position:relative;z-index:2;flex:1;padding:20px 140px 20px 20px;display:grid;grid-template-columns:140px 1fr;gap:20px;align-items:center;background:linear-gradient(90deg, rgba(0,0,0,0.2) 0%, transparent 60%)}\n  /* The live instance is the console: real controls, real sensors and one\n     clear disarm keypad. Decorative dashboard cards never sit above it. */\n  .security-console {\n    background: transparent !important;\n    border: none !important;\n    box-shadow: none !important;\n  }\n  .console-hud {\n    background: transparent !important;\n    border: none !important;\n    box-shadow: none !important;\n  }\n\n  /* ── System Status Badge ─────────────────────────────── */\n  .console-system-badge {\n    display: inline-flex;\n    align-items: center;\n    padding: 5px 14px;\n    border-radius: 999px;\n    font-size: 10.5px;\n    font-weight: 900;\n    letter-spacing: 0.8px;\n    text-transform: uppercase;\n    white-space: nowrap;\n    backdrop-filter: blur(16px) saturate(160%);\n    -webkit-backdrop-filter: blur(16px) saturate(160%);\n    border: 1.5px solid currentColor;\n    transition: all 0.35s ease;\n  }\n  .console-system-badge--disarmed {\n    color: #6ee7b7;\n    background: rgba(16,185,129,0.18);\n    border-color: rgba(16,185,129,0.60);\n    box-shadow: 0 0 16px rgba(16,185,129,0.25), inset 0 1px 0 rgba(255,255,255,0.18);\n  }\n  .console-system-badge--armed_home {\n    color: #fde68a;\n    background: rgba(251,140,0,0.20);\n    border-color: rgba(251,140,0,0.60);\n    box-shadow: 0 0 16px rgba(251,140,0,0.25), inset 0 1px 0 rgba(255,255,255,0.18);\n  }\n  .console-system-badge--armed_away {\n    color: #fca5a5;\n    background: rgba(229,57,53,0.20);\n    border-color: rgba(229,57,53,0.60);\n    box-shadow: 0 0 16px rgba(229,57,53,0.25), inset 0 1px 0 rgba(255,255,255,0.18);\n  }\n  .console-system-badge--armed_night {\n    color: #bfdbfe;\n    background: rgba(30,136,229,0.20);\n    border-color: rgba(30,136,229,0.60);\n    box-shadow: 0 0 16px rgba(30,136,229,0.25), inset 0 1px 0 rgba(255,255,255,0.18);\n  }\n  .console-system-badge--armed_vacation {\n    color: #e9d5ff;\n    background: rgba(156,39,176,0.20);\n    border-color: rgba(156,39,176,0.60);\n    box-shadow: 0 0 16px rgba(156,39,176,0.25), inset 0 1px 0 rgba(255,255,255,0.18);\n  }\n  .console-system-badge--triggered {\n    color: #fff;\n    background: rgba(239,68,68,0.35);\n    border-color: rgba(239,68,68,0.80);\n    box-shadow: 0 0 24px rgba(239,68,68,0.60), inset 0 1px 0 rgba(255,255,255,0.25);\n    animation: badgeFlash 0.8s infinite ease-in-out;\n  }\n  @keyframes badgeFlash {\n    0%,100% { opacity:1; box-shadow:0 0 24px rgba(239,68,68,.8); }\n    50%      { opacity:0.7; box-shadow:0 0 8px rgba(239,68,68,.2); }\n  }\n  /* arming state reuses armed_home styling with pulsing */\n  .console-system-badge--arming {\n    color: #fde68a;\n    background: rgba(251,140,0,0.20);\n    border-color: rgba(251,140,0,0.60);\n    animation: badgeArming 1.05s ease-in-out infinite;\n  }\n  @keyframes badgeArming {\n    0%,100% { opacity:0.65; } 50% { opacity:1; }\n  }\n  .console-hud-time{font-size:16px;font-weight:800;letter-spacing:-.02em}\n  .console-hud-temp{font-size:11px;opacity:.8;font-weight:700}\n  .console-hud-temps{display:flex;gap:6px;flex-wrap:wrap;align-items:center}\n  .console-hud-tpill{font-size:10px;font-weight:800;padding:3px 8px;border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.12)}\n  /* Hide the floating absolute HUD inside security-console to avoid overlap with sensor list */\n  .security-console .hud,.ios-fullscreen .entry-content.security-console ~ .hud,.entry-content.security-console + .hud{display:none!important}\n  /* The .hud inside the article gets hidden when the content is a security-console */\n  @media(max-width:950px){\n    .grid{grid-template-columns:1fr;grid-template-areas:\"instances\" \"activity\" \"modes\" \"access\" \"automations\" \"backup\" \"github\"}\n  }\n\n  /* Sensor column */\n  .sensor-column{position:absolute;right:0;top:0;bottom:0;width:auto;max-width:40%;z-index:4;display:flex;flex-direction:column;gap:7px;align-items:flex-end;justify-content:center;padding:12px 12px 12px 0;pointer-events:none}\n  .sensor-chip{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:16px;font-size:10px;font-weight:800;letter-spacing:.2px;max-width:148px;backdrop-filter:blur(20px) saturate(140%);-webkit-backdrop-filter:blur(20px) saturate(140%);border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 7px 18px rgba(0,0,0,.24);transition:transform .2s,box-shadow .2s}\n  .sensor-chip-text{display:flex;flex-direction:column;min-width:0;flex:1}\n  .sensor-chip-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .sensor-chip-state{font-size:8px;letter-spacing:.08em;text-transform:uppercase;opacity:.82;margin-top:2px}\n  .sensor-chip-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}\n  .sensor-chip-battery{grid-column:1 / -1;margin-top:5px;padding-top:5px;border-top:1px solid currentColor;font-size:9px;line-height:1;opacity:.9}\n  .sensor-chip--open{background:linear-gradient(135deg,rgba(255,149,0,.9),rgba(255,96,0,.64));color:#fff}\n  .sensor-chip--open .sensor-chip-dot{background:#fff;box-shadow:0 0 8px rgba(255,255,255,.95)}\n  .sensor-chip--triggered{background:linear-gradient(135deg,rgba(255,69,58,.96),rgba(190,30,35,.82));animation:chip-pulse .9s ease-in-out infinite}\n  .sensor-chip--closed{background:rgba(15,23,32,.62);color:#eef8f1}\n  .sensor-chip--closed .sensor-chip-dot{background:#34c759;box-shadow:0 0 8px rgba(52,199,.9)}\n  .sensor-chip-battery.low{color:#ffd166;font-weight:900}\n  .buzz-orange{position:relative;border-color:rgba(255,171,64,.92)!important;background:linear-gradient(135deg,rgba(255,149,0,.38),rgba(255,109,0,.16))!important;box-shadow:0 0 0 1px rgba(255,183,77,.45),0 0 25px rgba(255,145,0,.55),inset 0 1px 0 rgba(255,255,255,.3)!important;animation:buzz-orange 1.05s cubic-bezier(.36,.07,.19,.97) infinite}\n  .buzz-orange::after{content:'⚠';margin-left:auto;color:#fff3d1;font-size:14px;filter:drop-shadow(0 1px 3px rgba(0,0,0,.28))}\n  @keyframes buzz-orange{0%,100%{transform:translateX(0) rotate(0)}12%{transform:translateX(-2px) rotate(-.65deg)}25%{transform:translateX(3px) rotate(.8deg)}40%{transform:translateX(-3px) rotate(-.8deg)}55%{transform:translateX(2px) rotate(.55deg)}70%{transform:translateX(-1px) rotate(-.25deg)}}\n  @keyframes chip-pulse{0%,100%{opacity:1}50%{opacity:0.55}}\n\n  /* HUD Overlay */\n  .hud{position:absolute;top:20px;right:24px;text-align:right;z-index:3;color:var(--hud-text-color);text-shadow:var(--text-shadow);display:flex;flex-direction:column;gap:4px}\n  .hud-loc{font-size:13px;font-weight:900;text-transform:uppercase;opacity:1;letter-spacing:1.5px;background:var(--hud-bg);padding:4px 12px;border-radius:10px;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.08);align-self:flex-end}\n  .hud-data{font-size:20px;font-weight:800;letter-spacing:-0.02em;background:var(--hud-bg);padding:6px 14px;border-radius:12px;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.08);display:inline-flex;align-items:center;gap:8px;align-self:flex-end}\n  .hud-data i{font-size:14px;opacity:0.7;font-style:normal}\n  .hud-temperatures{display:flex;justify-content:flex-end;gap:5px;flex-wrap:wrap}\n  .hud-temperature{padding:4px 8px;border-radius:999px;background:var(--hud-bg);border:1px solid rgba(255,255,255,.09);font-size:10px;font-weight:800;backdrop-filter:blur(8px)}\n  .weather-eclipse{position:absolute;left:22px;bottom:18px;z-index:2;padding:7px 11px;border-radius:14px;background:rgba(18,10,28,.52);border:1px solid rgba(255,192,92,.36);backdrop-filter:blur(10px);font-size:10px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.25);pointer-events:none}\n\n  /* Liquid Glass Buttons */\n  .liquid-stack{display:grid;gap:10px}\n  .liquid-btn {\n    border: 1px solid rgba(255, 255, 255, 0.20) !important;\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.04) 100%) !important;\n    backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;\n    -webkit-backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;\n    color: #ffffff !important;\n    padding: 14px 18px;\n    border-radius: 18px !important;\n    font-size: 13.5px;\n    font-weight: 800;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    text-align: left;\n    cursor: pointer;\n    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.32) !important;\n    transition: all 0.22s cubic-bezier(0.25, 0.8, 0.25, 1);\n    text-shadow: 0 1px 2px rgba(0,0,0,0.3);\n    letter-spacing: 0.5px;\n  }\n  .liquid-btn:hover {\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.08) 100%) !important;\n    border-color: rgba(255, 255, 255, 0.36) !important;\n    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.45) !important;\n    transform: translateY(-2px);\n  }\n  .btn-sos {\n    background: linear-gradient(135deg, rgba(239, 68, 68, 0.32) 0%, rgba(185, 28, 28, 0.45) 100%) !important;\n    border: 1px solid rgba(252, 165, 165, 0.45) !important;\n    box-shadow: 0 10px 28px rgba(239, 68, 68, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;\n  }\n  .btn-sos:hover {\n    background: linear-gradient(135deg, rgba(239, 68, 68, 0.48) 0%, rgba(185, 28, 28, 0.65) 100%) !important;\n    box-shadow: 0 14px 34px rgba(239, 68, 68, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.45) !important;\n    transform: translateY(-2px);\n  }\n  .mode-btn-icon{width:26px;height:26px;padding:5px;border-radius:10px;flex:0 0 auto;background:linear-gradient(135deg,rgba(255,255,255,.24),rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 4px 10px rgba(0,0,0,.16);filter:drop-shadow(0 2px 4px rgba(0,0,0,.2))}\n  .liquid-btn.active .mode-btn-icon{background:linear-gradient(135deg,rgba(255,255,255,.36),rgba(255,255,255,.12));border-color:rgba(255,255,255,.42)}\n  .btn-sos .mode-btn-icon{width:28px;height:28px;border-radius:11px;background:rgba(255,255,255,.17)}\n  .liquid-btn:not(.btn-home):not(.btn-away):not(.btn-night):not(.btn-vacation):not(.btn-disarm):not(.btn-sos):hover{background:rgba(255,255,255,0.14);border-color:rgba(255,255,255,0.2)}\n  .liquid-btn.active{background:var(--btn-bg, rgba(255,255,255,0.2));border-color:rgba(255,255,255,0.4);box-shadow:0 8px 24px var(--btn-shadow, rgba(255,255,255,0.12))}\n  .liquid-btn:active:not(:disabled) { transform: scale(0.96); }\n  .liquid-btn i{font-size:16px}\n\n  .btn-home {\n    background: linear-gradient(135deg, rgba(251, 140, 0, 0.20) 0%, rgba(251, 140, 0, 0.06) 100%) !important;\n    border: 1px solid rgba(251, 140, 0, 0.38) !important;\n    color: #ffe0b2 !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n  }\n  .btn-home.active {\n    background: linear-gradient(135deg, #fb8c00 0%, #d97706 100%) !important;\n    border: 1px solid rgba(254, 215, 170, 0.85) !important;\n    box-shadow: 0 14px 36px rgba(251, 140, 0, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;\n    color: #ffffff !important;\n    transform: translateY(-2px);\n  }\n\n  .btn-away {\n    background: linear-gradient(135deg, rgba(229, 57, 53, 0.20) 0%, rgba(229, 57, 53, 0.06) 100%) !important;\n    border: 1px solid rgba(229, 57, 53, 0.38) !important;\n    color: #ffcdd2 !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n  }\n  .btn-away.active {\n    background: linear-gradient(135deg, #e53935 0%, #b91c1c 100%) !important;\n    border: 1px solid rgba(254, 202, 202, 0.85) !important;\n    box-shadow: 0 14px 36px rgba(229, 57, 53, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;\n    color: #ffffff !important;\n    transform: translateY(-2px);\n  }\n\n  .btn-night {\n    background: linear-gradient(135deg, rgba(30, 136, 229, 0.20) 0%, rgba(30, 136, 229, 0.06) 100%) !important;\n    border: 1px solid rgba(30, 136, 229, 0.38) !important;\n    color: #bbdefb !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n  }\n  .btn-night.active {\n    background: linear-gradient(135deg, #1e88e5 0%, #1d4ed8 100%) !important;\n    border: 1px solid rgba(191, 219, 254, 0.85) !important;\n    box-shadow: 0 14px 36px rgba(30, 136, 229, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;\n    color: #ffffff !important;\n    transform: translateY(-2px);\n  }\n\n  .btn-vacation {\n    background: linear-gradient(135deg, rgba(156, 39, 176, 0.20) 0%, rgba(156, 39, 176, 0.06) 100%) !important;\n    border: 1px solid rgba(156, 39, 176, 0.38) !important;\n    color: #e1bee7 !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n  }\n  .btn-vacation.active {\n    background: linear-gradient(135deg, #9c27b0 0%, #7e22ce 100%) !important;\n    border: 1px solid rgba(245, 208, 254, 0.85) !important;\n    box-shadow: 0 14px 36px rgba(156, 39, 176, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;\n    color: #ffffff !important;\n    transform: translateY(-2px);\n  }\n\n  .btn-disarm {\n    background: linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(16, 185, 129, 0.05) 100%) !important;\n    border: 1px solid rgba(16, 185, 129, 0.35) !important;\n    color: #a7f3d0 !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n    margin-top: 4px;\n  }\n  .btn-disarm.active {\n    background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;\n    border: 1px solid rgba(167, 243, 208, 0.85) !important;\n    box-shadow: 0 14px 36px rgba(16, 185, 129, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;\n    color: #ffffff !important;\n    transform: translateY(-2px);\n  }\n\n  .btn-sos {\n    background: linear-gradient(135deg, rgba(239, 68, 68, 0.22) 0%, rgba(185, 28, 28, 0.08) 100%) !important;\n    border: 1px solid rgba(252, 165, 165, 0.35) !important;\n    color: #fca5a5 !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n  }\n  .btn-sos.active, .btn-sos.flashing {\n    animation: sosFlashingPulse 0.8s infinite ease-in-out !important;\n  }\n\n  @keyframes sosFlashingPulse {\n    0%, 100% {\n      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;\n      border-color: #fca5a5 !important;\n      color: #ffffff !important;\n      box-shadow: 0 0 32px rgba(239, 68, 68, 0.95), inset 0 1px 0 rgba(255, 255, 255, 0.6) !important;\n      transform: scale(1.02);\n    }\n    50% {\n      background: linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%) !important;\n      border-color: rgba(239, 68, 68, 0.5) !important;\n      color: rgba(255, 255, 255, 0.8) !important;\n      box-shadow: 0 0 10px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;\n      transform: scale(0.98);\n    }\n  }\n  /* btn-disarm visual is handled by .btn-disarm and .btn-disarm.active above */\n\n  .entry-content {\n    background: transparent !important;\n    box-shadow: none !important;\n    border: none !important;\n  }\n\n  .badge{display:inline-flex;align-items:center;gap:5px;padding:4px 12px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}\n  .badge.armed_away,.badge.armed_vacation{background:rgba(229,57,53,.12);color:var(--error-color,#e53935)}\n  .badge.armed_home,.badge.armed_night{background:rgba(251,140,0,.12);color:#fb8c00}\n  .badge.disarmed{background:rgba(67,160,71,.12);color:var(--success-color,#43a047)}\n  .badge.triggered{background:rgba(229,57,53,.2);color:var(--error-color,#e53935);animation:pulse 1s ease-in-out infinite}\n\n  @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}\n  .meta{font-size:12px;opacity:.5}\n  .setting-label{font-size:13px;font-weight:700;color:var(--primary-text-color);letter-spacing:0.01em;margin-bottom:2px;display:block}\n  .setting-sublabel{font-size:12px;font-weight:400;opacity:0.55;color:var(--primary-text-color);margin-bottom:6px;display:block}\n  .temp-alert-row{display:flex;gap:10px;align-items:center;margin-top:8px;flex-wrap:wrap}\n  .temp-alert-row input[type=number]{width:72px;padding:6px 8px;border-radius:10px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.04);color:inherit;font-size:13px;font-weight:700;text-align:center}\n  .temp-alert-status-ok{color:#43a047;font-size:12px}\n  .temp-alert-status-warn{color:#e53935;font-size:12px;font-weight:700}\n\n  /* Generic buttons */\n  button{border:0;border-radius:14px;padding:10px 18px;font:700 13px/1 'Outfit',Inter,system-ui,sans-serif;cursor:pointer;transition:background 0.2s,opacity .15s,transform .15s cubic-bezier(0.175, 0.885, 0.32, 1.275),box-shadow 0.2s}\n  button:active:not(:disabled){transform:scale(.94) translateY(1px)}\n  button.primary{background:var(--primary-color,#007aff);color:#fff;box-shadow:0 4px 12px rgba(0, 122, 255, 0.25)}\n  button.primary:hover{background:#0062cc}\n  button.ghost{background:rgba(255, 255, 255, 0.05);border:1px solid rgba(255, 255, 255, 0.08);color:var(--primary-text-color)}\n  button.ghost:hover{background:rgba(255, 255, 255, 0.1)}\n\n\n  /* FS button */\n  .fs-btn{background:rgba(255,255,255,0.05);padding:8px;border-radius:10px;font-size:16px}\n\n  /* Modal Fixes */\n  .modal-back{position:fixed;inset:0;background:rgba(0,0,0,0.6);display:none;align-items:center;justify-content:center;padding:20px;z-index:999999;backdrop-filter:blur(12px)}\n  .modal-back.open{display:flex}\n  .modal{width:min(400px,100%);max-height:85vh;overflow:hidden;display:grid;grid-template-rows:auto 1fr auto;gap:14px;padding:24px;border-radius:32px;background:rgba(22, 24, 38, 0.95);border:1px solid rgba(255,255,255,0.08);box-shadow:0 30px 100px rgba(0,0,0,0.6);backdrop-filter:blur(28px)}\n  .modal-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}\n  .modal-head h3{margin:0;font-size:20px;font-weight:800}\n  .modal-body{overflow:auto;padding:5px}\n  .modal-footer{display:flex;justify-content:flex-end;gap:10px;margin-top:15px}\n  /* PIN modal */\n  .pm .modal{max-width:340px;min-height:unset;grid-template-rows:auto auto auto;background:rgba(22, 24, 38, 0.82) !important;backdrop-filter:blur(16px) saturate(140%) !important;-webkit-backdrop-filter:blur(16px) saturate(140%) !important;border:1px solid rgba(255, 255, 255, 0.12) !important;box-shadow:0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;border-radius:36px;padding:28px;display:flex;flex-direction:column;align-items:center;gap:16px}\n  .pin-input{font-size:28px;letter-spacing:10px;text-align:center;padding:12px;border-radius:16px;border:none;background:rgba(255,255,255,0.02);color:inherit;width:100%;outline:none;box-shadow:inset 0 1px 3px rgba(0,0,0,0.2)}\n  .pin-error{color:var(--error-color,#e53935);font-size:13px;min-height:18px;text-align:center}\n  .pin-grid{display:grid;grid-template-columns:repeat(3,68px);gap:16px;justify-content:center;margin-top:10px}\n  .pin-btn-round{width:68px;height:68px;border-radius:50% !important;border:1px solid rgba(255,255,255,0.1) !important;background:rgba(255,255,255,0.04) !important;color:#fff !important;font-size:24px;font-weight:600;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s, transform 0.15s, border-color 0.2s;box-shadow:0 4px 10px rgba(0,0,0,0.15);padding:0 !important;outline:none}\n  .pin-btn-round:hover{background:rgba(255,255,255,0.12) !important;border-color:rgba(255,255,255,0.2) !important}\n  .pin-btn-round:active{transform:scale(0.92) !important;background:rgba(255,255,255,0.2) !important}\n  .pin-btn-round.action-key{font-size:12px;font-weight:700;letter-spacing:0.3px;text-transform:uppercase;border-color:transparent !important;background:transparent !important;box-shadow:none}\n  .pin-btn-round.action-key:hover{background:rgba(255,255,255,0.05) !important}\n  .pin-btn-round.action-key.enter-key{color:#34c759 !important}\n  .pin-btn-round.action-key.delete-key{color:#ff3b30 !important}\n  /* User card */\n  .user-card {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 16px 18px;\n    border-radius: 18px;\n    border: 1px solid rgba(255, 255, 255, 0.16) !important;\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.025) 100%) !important;\n    backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;\n    -webkit-backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;\n    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.20) !important;\n    transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n  }\n  .user-card:hover {\n    border-color: rgba(255, 255, 255, 0.25) !important;\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%) !important;\n    box-shadow: 0 16px 38px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.28) !important;\n    transform: translateY(-2px);\n  }\n  .user-badge{display:inline-block;padding:4px 10px;border-radius:8px;font-size:10.5px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:#ffffff!important;border:1px solid rgba(255,255,255,0.18)}\n  /* REEMPLAZA los colores neón por tokens legibles */\n  .user-badge.admin { background: #d97706 !important; color: #ffffff !important; font-weight: 900 !important; border: 1px solid rgba(255,255,255,0.3) !important; }\n  .user-badge.admin_old {\n    background: rgba(255,255,255,0.12);\n    color: rgba(255,255,255,0.92);\n    border: 1px solid rgba(255,255,255,0.18);\n    font-weight: 700;\n    letter-spacing: 0.04em;\n  }\n  .user-badge.user { background: #475569 !important; color: #ffffff !important; font-weight: 800 !important; border: 1px solid rgba(255,255,255,0.2) !important; }\n  .user-badge.user_old {\n    background: rgba(255,255,255,0.08);\n    color: rgba(255,255,255,0.75);\n    border: 1px solid rgba(255,255,255,0.12);\n  }\n  /* Role label debajo del nombre */\n  .user-role-label {\n    font-size: 11px;\n    font-weight: 600;\n    letter-spacing: 0.06em;\n    text-transform: uppercase;\n    color: rgba(255,255,255,0.55);  /* muted, no neón */\n    margin-top: 2px;\n  }\n  /* Notif target chip */\n  .notif-chip{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);font-size:12px;font-weight:800;color:#ffffff !important}\n  .notif-chip button{padding:0 4px;border:0;background:none;cursor:pointer;opacity:.75;color:#ffffff}\n  /* Triggered box */\n  .trig-box{padding:12px 14px;border-radius:14px;background:rgba(229,57,53,.08);border:1px dashed var(--error-color,#e53935);font-size:12px;font-weight:600;color:var(--error-color,#e53935)}\n  /* inputs */\n  input[type=\"text\"], input[type=\"password\"], input[type=\"number\"], input[type=\"search\"], select, input[type=\"datetime-local\"], .glass-control {\n    width: 100%;\n    padding: 11px 14px;\n    border-radius: 16px;\n    border: 1px solid rgba(255, 255, 255, 0.16);\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.055));\n    color: var(--primary-text-color);\n    backdrop-filter: blur(18px) saturate(145%);\n    -webkit-backdrop-filter: blur(18px) saturate(145%);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16), 0 8px 22px rgba(0, 0, 0, 0.12);\n    font: 700 13px/1.2 'Outfit', Inter, system-ui, sans-serif;\n    outline: none;\n    transition: transform 0.34s cubic-bezier(0.18, 0.89, 0.32, 1.32), border-color 0.22s, box-shadow 0.22s;\n    display: block;\n    box-sizing: border-box;\n  }\n  input[type=\"text\"]:focus, input[type=\"password\"]:focus, input[type=\"number\"]:focus, input[type=\"search\"]:focus, select:focus, input[type=\"datetime-local\"]:focus, .glass-control:focus {\n    transform: scale(1.018);\n    border-color: rgba(112, 188, 255, 0.78);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.23), 0 0 0 4px rgba(0, 122, 255, 0.14), 0 10px 28px rgba(0, 0, 0, 0.16);\n  }\n  .x-never-match input[type=\"text\"],\n  .x-never-match input[type=\"password\"],\n  .x-never-match input[type=\"number\"],\n  .x-never-match input[type=\"search\"],\n  .x-never-match select,\n  .x-never-match input[type=\"datetime-local\"],\n  .x-never-match .glass-control {\n    background: rgba(255, 255, 255, 0.52);\n    border-color: rgba(0, 0, 0, 0.10);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 6px 16px rgba(0, 0, 0, 0.05);\n  }\n  /* search */\n  .search-wrap{display:flex;gap:10px;align-items:center}\n  .search-wrap input{flex:1;min-width:0}\n  /* ── Dual-panel selector modal ───────────────────────────────────────────────────── */\n  #selector-modal .modal{width:min(980px,96vw);height:min(780px,92vh);max-height:92vh;grid-template-rows:auto minmax(0,1fr) auto}\n  #selector-modal .modal-body{min-height:0;height:100%;padding:5px 0}\n  .sel-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px;overflow:hidden;min-height:0;height:100%}\n  @media(max-width:600px){.sel-grid{grid-template-columns:1fr}}\n  .sel-panel{display:flex;flex-direction:column;gap:8px;overflow:hidden;min-width:0;min-height:0;padding:12px;border-radius:18px;background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.07)}\n  .sel-panel-inner{overflow-y:auto;overscroll-behavior:contain;flex:1;min-height:0;display:grid;gap:6px;align-content:start;padding-right:4px}\n  .sel-actions{display:flex;gap:6px;flex-wrap:wrap;flex-shrink:0}\n  .pick-row{display:grid;grid-template-columns:20px minmax(0,1fr);align-items:start;gap:10px;padding:12px;border-radius:14px;border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.025);cursor:pointer;transition:background .12s,border-color .12s}\n  .pick-row:hover{background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.16)}\n  .pick-row:has(input:checked){border-color:rgba(0,122,255,.58);background:rgba(0,122,255,.10)}\n  .pick-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--primary-color,#007aff);margin-top:2px}\n  .pick-row-name{font-weight:750;font-size:13px;display:flex;align-items:center;gap:6px;flex-wrap:wrap;line-height:1.25}\n  .pick-row-meta{font-size:11px;opacity:0.58;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .device-facts{display:flex;gap:5px;flex-wrap:wrap;margin-top:7px}\n  .device-fact{display:inline-flex;align-items:center;min-height:20px;padding:2px 7px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08);font-size:10px;font-weight:750;line-height:1.1;white-space:nowrap}\n  .device-fact.status-open{color:#ff8a80;background:rgba(255,82,82,.12)}\n  .device-fact.status-closed{color:#7ee2a8;background:rgba(52,199,.12)}\n  .device-fact.power-low{color:#ffd166;background:rgba(255,183,77,.13)}\n  .sel-right-item{display:flex;align-items:center;justify-content:space-between;min-width:0;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,0.09);background:rgba(255,255,255,0.055);font-size:13px;box-shadow:inset 0 1px 0 rgba(255,255,255,0.06)}\n  .sel-right-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700}\n  .sel-right-facts{display:flex;gap:5px;flex-wrap:wrap;margin-top:5px}\n  .mode-sensor-grid .sensor-pill{width:100%;min-width:0;padding:9px 10px;gap:7px}\n  .mode-sensor-grid .sensor-pill .pill-content{display:grid;grid-template-columns:minmax(0,1fr) auto auto;align-items:center;gap:6px;min-width:0;flex:1}\n  .mode-sensor-grid .sensor-pill .pill-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .mode-sensor-grid .sensor-pill .pill-status{font-size:10px;font-weight:800;opacity:.78;white-space:nowrap}\n  .mode-sensor-grid .sensor-pill .pill-power{font-size:10px;font-weight:700;opacity:.82;white-space:nowrap}\n  .sel-panel-inner::-webkit-scrollbar{width:7px}.sel-panel-inner::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.18);border-radius:99px}\n  /* Activity log */\n  .log-item{display:flex;align-items:flex-start;gap:12px;padding:13px;border-radius:18px;border:1px solid var(--log-item-border, rgba(255,255,255,.05));background:linear-gradient(135deg,color-mix(in srgb,var(--log-item-bg,rgba(255,255,255,.02)) 84%,#fff 16%),var(--log-item-bg,rgba(255,255,255,.02)));color:var(--primary-text-color,#fff);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 7px 18px rgba(0,0,0,.10)}\n  .log-icon{width:34px;height:34px;display:grid;place-items:center;border-radius:13px;flex-shrink:0;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 5px 12px rgba(0,0,0,.12)}\n  .glass-orb{width:14px;height:14px;border-radius:50%;box-shadow:inset 0 2px 4px rgba(255,255,255,0.5),0 2px 6px rgba(0,0,0,0.2);background:rgba(255,255,255,0.3)}\n  .log-item.log-item--armed .log-icon{background:rgba(255,149,0,.16);border-color:rgba(255,183,77,.28)}\n  .log-item.log-item--armed .glass-orb{background:linear-gradient(135deg,#ffb74d,#f57c00)}\n  .log-item.log-item--disarmed .log-icon{background:rgba(52,199,.14);border-color:rgba(105,219,139,.28)}\n  .log-item.log-item--disarmed .glass-orb{background:linear-gradient(135deg,#69db8b,#388e3c)}\n  .log-item.log-item--triggered .log-icon{background:rgba(255,69,58,.16);border-color:rgba(255,139,131,.30)}\n  .log-item.log-item--triggered .glass-orb{background:linear-gradient(135deg,#ff8b83,#d32f2f)}\n  .log-body{flex:1;min-width:0}\n  .log-title{font-weight:700;font-size:13px}\n  .log-meta{font-size:11px;opacity:.55;margin-top:2px}\n  .log-badge{display:inline-block;padding:2px 7px;border-radius:6px;font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;margin-right:4px}\n  .log-badge.arm{background:rgba(251,140,0,.12);color:#fb8c00}\n  .log-badge.disarm{background:rgba(67,160,71,.12);color:var(--success-color,#43a047)}\n  .log-badge.trigger{background:rgba(229,57,53,.15);color:var(--error-color,#e53935)}\n  button:focus-visible,input:focus-visible,select:focus-visible,a:focus-visible{outline:3px solid color-mix(in srgb,var(--primary-color,#007aff) 72%,#fff);outline-offset:3px}\n  @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}.wx canvas{display:none!important}}\n  /* Personalization section styles */\n  .personalize-section {\n    margin-top: 18px;\n    padding: 18px;\n    background: var(--personalize-bg, rgba(255,255,255,0.02));\n    border: 1px solid var(--personalize-border, rgba(255,255,255,0.06));\n    border-radius: 22px;\n    display: grid;\n    gap: 16px;\n  }\n  .personalize-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-areas:\"home temp\" \"panel weather\" \"hub clock\" \"emergency emergency\";gap:14px 16px;align-items:start}\n  .personalize-column{display:contents}\n  .personalize-field{min-width:0;align-self:stretch}\n  .pf-home{grid-area:home}.pf-temp{grid-area:temp}.pf-weather{grid-area:weather}.pf-panel{grid-area:panel}.pf-hub{grid-area:hub}.pf-emergency{grid-area:emergency}.pf-clock{grid-area:clock}\n  .pf-panel,.pf-hub{display:flex;flex-direction:column;gap:8px}\n  .pf-emergency{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);grid-template-areas:\"emergency-label emergency-label\" \"emergency-input emergency-help\";gap:5px 16px;align-items:start;padding-top:2px}\n  .pf-emergency #lbl-emergency-number{grid-area:emergency-label}.pf-emergency #emergency-number-input{grid-area:emergency-input}.pf-emergency #emergency-number-help{grid-area:emergency-help;margin:0!important}\n  .sos-configuration {\n    padding: 18px;\n    border-radius: 24px;\n    border: 1px solid rgba(255, 59, 48, 0.25);\n    background: linear-gradient(135deg, rgba(255, 59, 48, 0.12), rgba(255, 255, 255, 0.02));\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 12px 28px rgba(255, 59, 48, 0.06), 0 8px 20px rgba(0, 0, 0, 0.12);\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n  }\n  /* SOS uses the full personalization width so outputs never create a tall,\n     narrow list with unused space beside it. */\n  .sos-configuration{display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-areas:\"title action\" \"outputs outputs\" \"help help\";gap:12px 16px;align-items:center}\n  .sos-configuration #lbl-sos-actions{grid-area:title;margin:0!important;white-space:nowrap}\n  .sos-configuration #sos-output-chips{grid-area:outputs;margin:0!important;display:grid;grid-template-columns:repeat(auto-fill,minmax(125px,1fr));gap:7px;align-items:stretch;max-height:148px;overflow-y:auto;overflow-x:hidden;padding:2px 5px 2px 2px;overscroll-behavior:contain}\n  .sos-configuration #sos-output-chips .sensor-pill{width:100%;min-width:0;min-height:34px;justify-content:center;padding:7px 10px;font-size:11px;border-radius:12px}\n  .sos-configuration #sos-output-chips .sensor-pill > span{display:block;min-width:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center}\n  .sos-configuration #sos-output-chips .mode-sensor-none{grid-column:1/-1;padding:18px;min-height:54px}\n  .sos-configuration #btn-select-sos-outputs{grid-area:action;width:auto!important;max-width:230px;min-width:0;white-space:normal;overflow-wrap:anywhere;line-height:1.15}\n  .sos-configuration #sos-output-help{grid-area:help;margin:0!important;max-width:none}\n  .sos-configuration:hover {\n    transform: translateY(-2px);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 16px 36px rgba(255, 59, 48, 0.10), 0 12px 24px rgba(0, 0, 0, 0.16);\n  }\n  .x-never-match .sos-configuration {\n    border-color: rgba(255, 59, 48, 0.3);\n    background: linear-gradient(135deg, rgba(255, 59, 48, 0.08), rgba(0, 0, 0, 0.01));\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 10px 24px rgba(255, 59, 48, 0.05);\n  }\n  #sos-output-chips .sensor-pill{background:linear-gradient(135deg,rgba(255,255,255,.16),rgba(255,255,255,.06));border-color:rgba(255,255,255,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 5px 14px rgba(0,0,0,.10)}\n  .background-custom-inputs{flex-direction:column;gap:8px;background:rgba(0,0,0,.15);padding:12px;border-radius:18px;border:1px solid rgba(255,255,255,.09);box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}\n  .modal-back.open .modal,\n  .lang-modal-back.open .lang-modal-card,\n  .ios-confirm-backdrop.open .ios-confirm-card {\n    animation: liquidDropIn .48s cubic-bezier(.16,1.24,.32,1) both;\n  }\n  @keyframes liquidDropIn{0%{opacity:0;transform:translateY(18px) scale(.91);filter:blur(5px)}65%{opacity:1;transform:translateY(-3px) scale(1.018);filter:blur(0)}100%{transform:translateY(0) scale(1)}}\n  @keyframes argus-modal-in{0%{opacity:0;transform:scale(.94) translateY(8px)}100%{opacity:1;transform:scale(1) translateY(0)}}\n  @media(max-width:700px){\n    .personalize-grid{grid-template-columns:minmax(0,1fr);grid-template-areas:\"home\" \"temp\" \"weather\" \"panel\" \"hub\" \"clock\" \"emergency\"}\n    .pf-emergency{grid-template-columns:minmax(0,1fr);grid-template-areas:\"emergency-label\" \"emergency-input\" \"emergency-help\"}\n    .personalize-section{padding:14px}\n    .sos-configuration{display:flex;flex-direction:column;align-items:stretch;gap:10px;padding:14px;border-radius:24px}\n    .sos-configuration #lbl-sos-actions{white-space:normal}.sos-configuration #btn-select-sos-outputs{width:100%!important}.sos-configuration #sos-output-help{max-width:none}\n  }\n  .wx-horizon::before{content:'';position:absolute;inset:26% 0 0;background:radial-gradient(ellipse at 12% 100%,rgba(0,0,0,.34) 0 18%,transparent 19%),radial-gradient(ellipse at 50% 100%,rgba(0,0,0,.29) 0 23%,transparent 24%),radial-gradient(ellipse at 89% 100%,rgba(0,0,0,.36) 0 20%,transparent 21%);filter:blur(10px)}\n  /* ── Weather Animated Backgrounds (Apple Weather Premium) ────────────────────────────────── */\n  .scene{position:absolute;inset:0;z-index:0;overflow:hidden;background:linear-gradient(165deg,#2c86c7,#8fc7dc 62%,#d7c7aa);transition:background 1.5s ease;border-radius:inherit}\n  .scene.sunny{background:linear-gradient(180deg,#1b60d0,#40a0ff 40%,#90d0ff)}\n  .scene.partlycloudy{background:linear-gradient(180deg,#3073d8,#6bb5ff 50%,#b8e0ff)}\n  .scene.cloudy{background:linear-gradient(180deg,#5b6976,#80909c 50%,#a4b3be)}\n  .scene.fog{background:linear-gradient(180deg,#6c767c,#9ca6ac 50%,#ccd1d4)}\n  .scene.rain,.scene.storm{background:linear-gradient(180deg,#303d49,#495a69 50%,#687985)}\n  .scene.snow{background:linear-gradient(180deg,#627f94,#92b1c7 50%,#d8eaf5)}\n  .scene.night{background:linear-gradient(180deg,#020513 0%,#0a1130 50%,#152248 100%)!important}\n  .scene.sunny::after,.scene.partlycloudy::after{content:'';position:absolute;inset:-50%;background:radial-gradient(circle at 50% 50%,#fff 0%,rgba(255,255,255,0.8) 5%,transparent 15%),radial-gradient(circle at 50% 50%,rgba(255,220,100,0.4) 0%,transparent 30%),conic-gradient(from 0deg at 50% 50%,transparent 0deg,rgba(255,255,255,0.15) 15deg,transparent 30deg,rgba(255,255,255,0.1) 45deg,transparent 60deg,rgba(255,255,255,0.2) 90deg,transparent 120deg,rgba(255,255,255,0.1) 180deg,transparent 240deg,rgba(255,255,255,0.15) 300deg,transparent 360deg);animation:rotate-sun 120s linear infinite;mix-blend-mode:screen;transform-origin:center;left:30%;top:-20%}\n  .scene.night.clear::after,.scene.night.partlycloudy::after{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,#fff 0 1px,transparent 1.5px);background-size:80px 73px;opacity:0.8;animation:stars 12s ease-in-out infinite alternate}\n  .scene.night.clear::before,.scene.night.partlycloudy::before{content:'';position:absolute;right:15%;top:15%;width:50px;height:50px;background:transparent;border-radius:50%;box-shadow:inset -10px -10px 0 0 #ffffe0;filter:drop-shadow(0 0 15px rgba(255,255,180,0.5))}\n  .scene.night.clear.eclipse::before{box-shadow:inset 0 0 0 25px rgba(0,0,0,0.9),0 0 20px 5px rgba(255,100,50,0.8)}\n  .scene.partlycloudy::before,.scene.cloudy::before{content:'';position:absolute;inset:-30%;background:radial-gradient(ellipse at 10% 20%,rgba(255,255,255,0.4) 0%,transparent 25%),radial-gradient(ellipse at 80% 30%,rgba(255,255,255,0.3) 0%,transparent 35%),radial-gradient(ellipse at 40% 50%,rgba(255,255,255,0.2) 0%,transparent 40%);filter:blur(25px);animation:clouds 40s linear infinite alternate}\n  .scene.night.cloudy::before,.scene.night.partlycloudy::before{background:radial-gradient(ellipse at 10% 20%,rgba(100,110,130,0.4) 0%,transparent 25%),radial-gradient(ellipse at 80% 30%,rgba(80,90,120,0.4) 0%,transparent 35%)}\n  .scene.rain::after,.scene.storm::after{content:'';position:absolute;inset:-50%;background:repeating-linear-gradient(108deg,transparent 0,transparent 20px,rgba(200,220,240,0.2) 21px,transparent 22px),repeating-linear-gradient(110deg,transparent 0,transparent 45px,rgba(200,220,240,0.4) 46px,transparent 48px);background-size:100% 200%;animation:rain 1.2s linear infinite;opacity:0.8}\n  .scene.snow::after{content:'';position:absolute;inset:-30%;background-image:radial-gradient(circle,rgba(255,255,255,0.8) 0 2px,transparent 3px),radial-gradient(circle,rgba(255,255,255,0.4) 0 4px,transparent 5px);background-size:45px 52px,90px 110px;background-position:0 0,20px 30px;animation:snow 8s linear infinite}\n  .scene.fog::before{content:'';position:absolute;inset:-20%;background:repeating-linear-gradient(0deg,transparent 0 40px,rgba(240,245,250,0.4) 50px 80px,transparent 90px 140px);filter:blur(18px);animation:fog 20s ease-in-out infinite alternate}\n  .scene.night.fog::before{background:repeating-linear-gradient(0deg,transparent 0 40px,rgba(120,130,150,0.4) 50px 80px,transparent 90px 140px)}\n  .scene.storm{animation:lightning 12s infinite}\n  @keyframes rotate-sun{to{transform:rotate(1turn)}}\n  @keyframes clouds{0%{transform:translate(-5%,-5%) scale(1)}100%{transform:translate(10%,10%) scale(1.1)}}\n  @keyframes stars{0%{opacity:0.4}100%{opacity:1}}\n  @keyframes rain{0%{background-position:0 0,0 0}100%{background-position:-150px 300px,-200px 400px}}\n  @keyframes snow{0%{background-position:0 0,20px 30px}100%{background-position:90px 300px,-45px 400px}}\n  @keyframes fog{0%{transform:translateY(0) scale(1);opacity:0.6}100%{transform:translateY(-50px) scale(1.2);opacity:0.9}}\n  @keyframes lightning{0%,93%,95%,100%{filter:none}94%{filter:brightness(2.5) contrast(1.5) saturate(0.5)}}\n  \n  .wx-static{background:linear-gradient(180deg,rgba(22,28,42,.92),rgba(35,44,67,.95));position:absolute;inset:0;z-index:0;border-radius:inherit}\n  .wx-photo,.wx-collage{background:#10141d;position:absolute;inset:0;z-index:0;border-radius:inherit}\n  .wx-photo::before{content:\"\";position:absolute;inset:0;background:var(--bg-image) center/cover no-repeat;filter:saturate(1.05) contrast(1.05);border-radius:inherit}\n  .wx-photo::after,.wx-collage::after,.wx-static::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,8,12,.18),rgba(5,8,12,.5));border-radius:inherit}\n  .wx-collage-grid{position:absolute;inset:0;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:4px;padding:4px}\n  .wx-collage-cell{border-radius:18px;background:center/cover no-repeat;min-height:0;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}\n  .wx-video{position:absolute;inset:0;overflow:hidden;border-radius:inherit;z-index:0;background:#10141d}\n  .wx-video::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,8,12,.18),rgba(5,8,12,.5));z-index:2}\n  #argus-canvas-bg{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;background-size:cover;background-position:center;background-repeat:no-repeat}\n  #argus-canvas-bg::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.3) 100%);z-index:1;pointer-events:none}\n\n.sensor-pill {\n  display:inline-flex; align-items:center; gap:8px;\n  background:var(--argus-pill-bg, rgba(255,255,255,0.04));\n  border:1px solid var(--argus-pill-border, rgba(255,255,255,0.08));\n  border-radius:14px; padding:10px 14px;\n  font-size:13px; color:var(--argus-pill-color, rgba(255,255,255,0.95));\n  backdrop-filter:blur(10px); transition:all 0.2s cubic-bezier(0.4,0,0.2,1);\n  font-weight:700; box-shadow:0 4px 12px rgba(0,0,0,0.08);\n}\n.sensor-pill:hover { background:var(--argus-pill-bg-hover, rgba(255,255,255,0.08)); border-color:rgba(255,255,255,0.25); transform:translateY(-1px); }\n.sensor-pill .pill-dot { width:10px; height:10px; border-radius:50%; background:#34c759; flex-shrink:0; box-shadow:0 0 10px rgba(52,199,0.5); }\n.sensor-pill .pill-dot.open { background:#ff3b30; box-shadow:0 0 10px rgba(255,59,48,0.5); }\n.sensor-pill .pill-dot.unavailable { background:#999; }\n.sensor-pill button { background:none; border:none; color:var(--argus-pill-color, #fff); cursor:pointer; opacity:0.5; padding:4px; font-size:14px; transition:opacity 0.2s; }\n.sensor-pill button:hover { opacity:1; }\n\n.mode-sensor-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:12px; margin-top:12px; }\n.mode-sensor-none { grid-column:1/-1; padding:30px; text-align:center; background:var(--argus-pill-bg,rgba(255,255,255,0.03)); border:2px dashed var(--argus-pill-border,rgba(255,255,255,0.1)); border-radius:20px; color:var(--argus-pill-color-muted,rgba(255,255,255,0.4)); font-size:14px; font-weight:600; }\n.subsection-title { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:12px; color:var(--argus-pill-color-muted,rgba(255,255,255,0.5)); display:block; }\n\n\n/* ── Language Picker ───────────────────────────────────── */\n.lang-pill {\n  display:inline-flex; align-items:center; gap:6px;\n  padding:7px 14px; border-radius:999px;\n  background:rgba(255,255,255,0.10);\n  border:1px solid rgba(255,255,255,0.18);\n  backdrop-filter:blur(12px) saturate(120%);\n  -webkit-backdrop-filter:blur(12px) saturate(120%);\n  color:#fff; font-size:13px; font-weight:700;\n  cursor:pointer; transition:all 0.22s cubic-bezier(0.4,0,0.2,1);\n  box-shadow:0 4px 16px rgba(0,0,0,0.18);\n  white-space:nowrap; flex-shrink:0;\n}\n.lang-pill:hover { background:rgba(255,255,255,0.22); transform:translateY(-1px); }\n.x-never-match .lang-pill {\n  background:rgba(0,0,0,0.07); border-color:rgba(0,0,0,0.15); color:#1e1e2d;\n}\n\n/* Language modal */\n.lang-modal-back { position:fixed; inset:0; background:rgba(0,0,0,0.55); display:none; align-items:center; justify-content:center; z-index:999998; backdrop-filter:blur(4px); }\n.lang-modal-back.open { display:flex; }\n.lang-modal-card {\n  width:min(400px,92vw); border-radius:28px; padding:28px 24px 20px;\n  background:rgba(20,22,35,0.92);\n  border:1px solid rgba(255,255,255,0.14);\n  box-shadow:0 32px 80px rgba(0,0,0,0.55);\n  backdrop-filter:blur(12px) saturate(120%);\n  -webkit-backdrop-filter:blur(12px) saturate(120%);\n  color:#fff;\n  animation: langBounceIn 0.38s cubic-bezier(0.175,0.885,0.32,1.275) forwards;\n}\n.x-never-match .lang-modal-card {\n  background:rgba(255,255,255,0.96); color:#1e1e2d;\n  border-color:rgba(0,0,0,0.12); box-shadow:0 20px 60px rgba(0,0,0,0.25);\n}\n@keyframes langBounceIn {\n  0%   { transform:scale(0.82) translateY(20px); opacity:0; }\n  60%  { transform:scale(1.03) translateY(-4px); opacity:1; }\n  100% { transform:scale(1)    translateY(0);    opacity:1; }\n}\n.lang-modal-title {\n  font-size:18px; font-weight:900; letter-spacing:-0.01em;\n  margin-bottom:20px; text-align:center;\n}\n.lang-grid {\n  display:grid; grid-template-columns:1fr 1fr; gap:10px;\n}\n.lang-option {\n  display:flex; align-items:center; gap:10px;\n  padding:12px 14px; border-radius:16px;\n  background:rgba(255,255,255,0.10);\n  border:1.5px solid rgba(255,255,255,0.18);\n  /* Buttons do not inherit color reliably through the HA shadow DOM. */\n  color:rgba(255,255,255,0.98) !important;\n  text-shadow:0 1px 2px rgba(0,0,0,0.38);\n  cursor:pointer; transition:all 0.18s ease;\n  font-size:14px; font-weight:750;\n}\n.lang-option span:not(.lang-flag) { color:inherit !important; }\n.lang-option:hover { background:rgba(255,255,255,0.16); border-color:rgba(255,255,255,0.28); transform:translateY(-1px); }\n.lang-option.active {\n  background:rgba(3,169,244,0.30); border-color:rgba(76,201,255,0.82);\n  box-shadow:0 0 18px rgba(3,169,244,0.25);\n}\n.lang-flag { font-size:22px; line-height:1; }\n.lang-close-row { display:flex; justify-content:center; margin-top:18px; }\n.lang-close-btn {\n  padding:9px 28px; border-radius:14px;\n  background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.15);\n  color:#fff; font-size:13px; font-weight:700; cursor:pointer;\n  transition:background 0.18s;\n}\n.lang-close-btn:hover { background:rgba(255,255,255,0.2); }\n\n/* Background File Manager Styles */\n.file-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.22s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.file-card:hover {\n  background: rgba(255, 255, 255, 0.08) !important;\n  border-color: rgba(255, 255, 255, 0.16) !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.x-never-match .file-card {\n  background: rgba(0, 0, 0, 0.02);\n  border-color: rgba(0, 0, 0, 0.07);\n  color: #1c1c1e;\n}\n.x-never-match .file-card:hover {\n  background: rgba(0, 0, 0, 0.05) !important;\n  border-color: rgba(0, 0, 0, 0.12) !important;\n}\n.file-card-preview {\n  position: relative;\n  width: 100%;\n  height: 64px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.2);\n}\n.file-card-preview img, .file-card-preview video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.file-card-name {\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  opacity: 0.85;\n}\n.file-card-meta {\n  font-size: 9px;\n  opacity: 0.55;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.file-card-actions {\n  display: flex;\n  gap: 4px;\n  margin-top: auto;\n}\n.file-card-btn {\n  flex: 1;\n  padding: 4px;\n  font-size: 8px;\n  font-weight: 700;\n  text-transform: uppercase;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.03);\n  color: inherit;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.15s ease;\n}\n.file-card-btn:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.x-never-match .file-card-btn {\n  border-color: rgba(0, 0, 0, 0.12);\n  background: rgba(0, 0, 0, 0.02);\n}\n.x-never-match .file-card-btn:hover {\n  background: rgba(0, 0, 0, 0.08);\n  border-color: rgba(0, 0, 0, 0.25);\n}\n.file-card-btn-delete {\n  padding: 3px 6px;\n  color: #ff3b30;\n  border: 1px solid rgba(255, 59, 48, 0.15);\n  background: rgba(255, 59, 48, 0.05);\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 9px;\n  transition: all 0.15s ease;\n}\n.file-card-btn-delete:hover {\n  background: rgba(255, 59, 48, 0.25);\n  border-color: rgba(255, 59, 48, 0.45);\n}\n\n.argus-bootstrap-layer {\n  position: fixed;\n  inset: 0;\n  background: rgba(0,0,0,0.88);\n  /* NO backdrop-filter: element is permanently in DOM (display:none toggle).\n     WebKit compositor leak bug — opaque background is visually equivalent. */\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  animation: fadeIn 0.4s ease forwards;\n}\n.argus-bootstrap-card {\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 24px;\n  padding: 40px;\n  max-width: 480px;\n  width: 90%;\n  box-shadow: 0 16px 40px rgba(0,0,0,0.5);\n  text-align: center;\n}\n.argus-bootstrap-card h1 {\n  margin: 0 0 16px;\n  font-weight: 300;\n  font-size: 28px;\n  letter-spacing: 0.5px;\n}\n.argus-bootstrap-card p {\n  color: rgba(255,255,255,0.7);\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 32px;\n}\n@keyframes argusWelcomeCard {\n  from { opacity: 0; transform: translateY(18px) scale(.96); }\n  65% { opacity: 1; transform: translateY(-3px) scale(1.01); }\n  to { opacity: 1; transform: translateY(0) scale(1); }\n}\n@keyframes argusWelcomeLogo {\n  0%,100% { transform: translateY(0) scale(1); filter: drop-shadow(0 10px 18px rgba(32,145,255,.28)); }\n  50% { transform: translateY(-5px) scale(1.045); filter: drop-shadow(0 16px 26px rgba(32,145,255,.5)); }\n}\n@keyframes argusWelcomeCheck {\n  from { opacity: 0; transform: scale(.55) rotate(-16deg); }\n  70% { opacity: 1; transform: scale(1.1) rotate(4deg); }\n  to { opacity: 1; transform: scale(1) rotate(0); }\n}\n.argus-first-run-card { animation: argusWelcomeCard .58s cubic-bezier(.22,1.2,.36,1) both; }\n.argus-first-run-logo { height:68px; width:68px; border-radius:19px; animation:argusWelcomeLogo 2.4s ease-in-out infinite; }\n.argus-first-run-brand { display:flex; flex-direction:column; align-items:center; gap:10px; margin-bottom:20px; }\n.argus-first-run-brand h1 { margin:0; font-size:1.65rem; font-weight:850; letter-spacing:-.02em; }\n.argus-first-run-brand p { margin:0; font-size:.92rem; color:rgba(255,255,255,.7); }\n.argus-first-run-thank-icon { width:74px; height:74px; margin:0 auto 18px; display:grid; place-items:center; border-radius:50%; background:rgba(52,199,89,.18); border:1px solid rgba(52,199,89,.45); color:#58e37c; font-size:2.15rem; box-shadow:0 0 32px rgba(52,199,89,.22); animation:argusWelcomeCheck .5s cubic-bezier(.2,1.35,.35,1) both; }\n\n/* ─── tvOS Profile Selector ─── */\n.argus-profile-overlay {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.4); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px);\n  /* NO backdrop-filter: causes orphaned compositor layers in WebKit when removed.\n     High-opacity background achieves same visual effect safely. */\n  display: flex; align-items: center; justify-content: center;\n  z-index: 9999;\n  animation: argus-overlay-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes argus-overlay-in {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n/* Título arriba */\n.argus-profile-header {\n  text-align: center;\n  margin-bottom: 36px;\n  animation: argus-slide-down 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;\n}\n@keyframes argus-slide-down {\n  from { opacity: 0; transform: translateY(-20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n.argus-profile-header h2 {\n  margin: 0; font-size: 1.6rem; font-weight: 800;\n  color: #fff; letter-spacing: -0.02em;\n}\n.argus-profile-header p {\n  margin: 6px 0 0; font-size: 0.85rem;\n  color: rgba(255,255,255,0.55);\n}\n\n/* Grid de perfiles */\n.argus-profile-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 36px 24px;\n  max-width: 900px;\n  width: 100%;\n  justify-content: center;\n  animation: argus-grid-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;\n}\n@keyframes argus-grid-in {\n  from { opacity: 0; transform: scale(0.92) translateY(16px); }\n  to   { opacity: 1; transform: scale(1) translateY(0); }\n}\n\n/* Cada perfil */\n@media (max-width: 950px) and (orientation: landscape) {\n  .argus-profile-grid { \n    grid-template-columns: repeat(4, 1fr);\n    padding: 16px;\n  }\n}\n@media (max-width: 600px) and (orientation: portrait) {\n  .argus-profile-grid { \n    grid-template-columns: repeat(2, 1fr);\n    padding: 16px;\n    gap: 20px 16px;\n  }\n}\n@media (max-width: 380px) and (orientation: portrait) {\n  .argus-profile-grid { \n    grid-template-columns: 1fr;\n    padding: 16px;\n  }\n  .argus-profile-item { width: 100%; }\n}\n\n.argus-profile-item {\n  touch-action: manipulation;\n  min-height: 44px;\n  display: flex; flex-direction: column;\n  align-items: center; gap: 10px;\n  cursor: pointer;\n  border-radius: 16px;\n  padding: 14px 8px 10px;\n  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1),\n              background 0.2s ease;\n  -webkit-tap-highlight-color: transparent;\n}\n.argus-profile-item:hover {\n  transform: scale(1.08);\n  background: rgba(255,255,255,0.07);\n}\n.argus-profile-item:active {\n  transform: scale(0.96);\n}\n.argus-profile-item:focus-visible {\n  outline: 2px solid rgba(255,255,255,0.6);\n  outline-offset: 4px;\n}\n\n/* Círculo avatar */\n.argus-profile-circle {\n  width: 120px; height: 120px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid rgba(255,255,255,0.18);\n  box-shadow: 0 4px 20px rgba(0,0,0,0.35);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.22s;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 2.5rem; font-weight: 800;\n  color: #fff; overflow: hidden; flex-shrink: 0;\n  background: rgba(255,255,255,0.1);\n  position: relative;\n}\n@media (max-width: 600px) and (orientation: portrait) {\n  .argus-profile-circle {\n    width: 76px; height: 76px;\n    font-size: 1.5rem; border-width: 2.5px;\n  }\n}\n@media (max-width: 950px) and (orientation: landscape) {\n  .argus-profile-circle {\n    width: 84px; height: 84px;\n    font-size: 1.8rem; border-width: 2.5px;\n  }\n}\n.argus-profile-item:hover .argus-profile-circle {\n  border-color: rgba(255,255,255,0.55);\n  box-shadow: 0 0 0 3px rgba(255,255,255,0.15), 0 6px 24px rgba(0,0,0,0.4);\n}\n.argus-profile-circle img {\n  width: 100%; height: 100%; border-radius: 50%; object-fit: cover;\n}\n.argus-profile-circle .lock-badge {\n  position: absolute; bottom: 0; right: 0;\n  width: 28px; height: 28px; border-radius: 50%;\n  background: rgba(0,0,0,0.75); display: flex;\n  align-items: center; justify-content: center;\n  font-size: 14px; border: 2px solid rgba(255,255,255,0.2);\n}\n@media (max-width: 600px) {\n  .argus-profile-circle .lock-badge {\n    width: 22px; height: 22px; font-size: 11px; border-width: 1.5px;\n  }\n}\n\n/* Nombre y rol */\n.argus-profile-label {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.argus-profile-label .p-name {\n  font-size: 1rem; font-weight: 700;\n  color: #fff; line-height: 1.2;\n  max-width: 140px; overflow: hidden;\n  text-overflow: ellipsis; white-space: nowrap;\n}\n.argus-profile-label .p-role {\n  font-size: 0.72rem; font-weight: 600;\n  color: rgba(255,255,255,0.6);\n  margin-top: 4px;\n  text-transform: uppercase; letter-spacing: 0.04em;\n}\n@media (max-width: 600px) {\n  .argus-profile-label .p-name { font-size: 0.82rem; max-width: 80px; }\n  .argus-profile-label .p-role { font-size: 0.65rem; margin-top: 2px; }\n}\n\n/* ─── Welcome Screen (Fase 2) ─── */\n.argus-welcome-screen {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.88);\n  /* NO backdrop-filter: Safari/WebKit compositor bug causes blur to persist\n     after element.remove(). Use opaque background instead. */\n  display: flex; flex-direction: column;\n  align-items: center; justify-content: center;\n  z-index: 10000;\n  pointer-events: none;\n}\n.argus-welcome-avatar {\n  width: 110px; height: 110px;\n  border-radius: 50%; overflow: hidden;\n  border: 3px solid rgba(255,255,255,0.3);\n  box-shadow: 0 8px 40px rgba(0,0,0,0.5);\n  display: flex; align-items: center; justify-content: center;\n  font-size: 2.8rem; font-weight: 800; color: #fff;\n  background: rgba(255,255,255,0.12);\n  will-change: transform, width, height, border-radius;\n}\n.argus-welcome-avatar img {\n  width: 100%; height: 100%; object-fit: cover;\n}\n.argus-welcome-text {\n  margin-top: 20px; text-align: center;\n}\n.argus-welcome-text .greeting {\n  font-size: 1.0rem; color: rgba(255,255,255,0.6);\n  font-weight: 500; letter-spacing: 0.02em;\n  margin: 0;\n}\n.argus-welcome-text .wname {\n  font-size: 2.0rem; font-weight: 900;\n  color: #fff; letter-spacing: -0.03em;\n  margin: 6px 0 0;\n  line-height: 1;\n}\n\n/* PIN prompt dentro del selector tvOS */\n.argus-pin-prompt {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.75);\n  backdrop-filter: blur(28px);\n  -webkit-backdrop-filter: blur(28px);\n  display: flex; align-items: center; justify-content: center;\n  z-index: 10001;\n  animation: argus-overlay-in 0.25s ease both;\n}\n.argus-pin-card {\n  background: rgba(255,255,255,0.08);\n  border: 1px solid rgba(255,255,255,0.14);\n  border-radius: 20px; padding: 28px 24px;\n  width: min(340px, 90vw);\n  text-align: center; color: #fff;\n}\n.argus-pin-card h3 {\n  margin: 0 0 4px; font-size: 1.1rem; font-weight: 800;\n}\n.argus-pin-card .pin-sub {\n  font-size: 0.78rem; color: rgba(255,255,255,0.5); margin-bottom: 16px;\n}\n.argus-pin-input {\n  width: 100%; box-sizing: border-box;\n  text-align: center; font-size: 1.6rem;\n  letter-spacing: 0.4em; padding: 12px;\n  border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);\n  background: rgba(255,255,255,0.07); color: #fff;\n  outline: none; margin-bottom: 14px;\n}\n.argus-numpad {\n  display: grid; grid-template-columns: repeat(3,1fr); gap: 10px;\n  margin-bottom: 12px;\n}\n.argus-numpad button {\n  padding: 14px; font-size: 1.15rem; font-weight: 700;\n  border-radius: 12px;\n  border: 1px solid rgba(255,255,255,0.14);\n  background: rgba(255,255,255,0.08); color: #fff;\n  cursor: pointer;\n  transition: background 0.15s, transform 0.1s;\n}\n.argus-numpad button:active { transform: scale(0.93); background: rgba(255,255,255,0.18); }\n.argus-pin-actions {\n  display: flex; gap: 10px; margin-top: 4px;\n}\n.argus-pin-actions button {\n  flex: 1; padding: 12px; border-radius: 12px; font-size: 0.85rem;\n  font-weight: 700; cursor: pointer;\n  border: 1px solid rgba(255,255,255,0.15);\n  background: rgba(255,255,255,0.07); color: #fff;\n  transition: background 0.15s;\n}\n.argus-pin-actions button:hover { background: rgba(255,255,255,0.15); }\n\n@keyframes argus-shake {\n  0%, 100% { transform: translateX(0); }\n  20%       { transform: translateX(-8px); }\n  40%       { transform: translateX(8px); }\n  60%       { transform: translateX(-5px); }\n  80%       { transform: translateX(5px); }\n}\n@keyframes argus-overlay-out {\n  from { opacity: 1; }\n  to   { opacity: 0; }\n}\n\n.user-selector-grid {\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 16px;\n  margin-top: 24px;\n}\n.user-card {\n  background: rgba(255,255,255,0.1);\n  border: 1px solid rgba(255,255,255,0.15);\n  border-radius: 16px;\n  padding: 20px 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.user-card:hover {\n  background: rgba(255,255,255,0.2);\n  transform: translateY(-2px);\n}\n.user-card-own {\n  border-color: rgba(0, 122, 255, 0.55);\n  box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.22), 0 8px 24px rgba(0,122,255,0.1);\n}\n.user-card-own:hover {\n  border-color: rgba(0, 122, 255, 0.8);\n}\n.profile-own-badge {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #007aff;\n  background: rgba(0, 122, 255, 0.12);\n  border-radius: 999px;\n  padding: 2px 8px;\n  margin-top: -4px;\n}\n.user-role-label {\n  font-size: 11px;\n  opacity: 0.55;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n}\n@keyframes shake {\n  0%, 100% { transform: translateX(0); }\n  20%, 60% { transform: translateX(-6px); }\n  40%, 80% { transform: translateX(6px); }\n}\n.user-avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 600;\n  color: #fff;\n  border: 1px solid rgba(255,255,255,0.3);\n}\n.user-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(255,255,255,0.9);\n}\n.pin-prompt {\n  display: none;\n  animation: fadeIn 0.3s ease forwards;\n  margin-top: 20px;\n}\n.pin-prompt input {\n  font-size: 24px;\n  letter-spacing: 8px;\n  text-align: center;\n  padding: 10px;\n  border-radius: 12px;\n  border: 1px solid rgba(255,255,255,0.2);\n  background: rgba(0,0,0,0.2);\n  color: white;\n  width: 200px;\n  margin-bottom: 20px;\n}\n.btn-claim {\n  background: #ff3b30;\n  color: white;\n  border: none;\n  padding: 14px 28px;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-claim:hover { background: #ff453a; }\n.btn-start {\n  background: #34c759;\n  color: white;\n  border: none;\n  padding: 14px 28px;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-start:hover { background: #30d158; }\n.btn-cancel {\n  background: rgba(255,255,255,0.1);\n  color: white;\n  border: none;\n  padding: 14px 28px;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-left: 10px;\n}\n\n/* Mobile background and HomeKit polish fixes (moved from runtime hack) */\n.entry-icon,.entry-icon>svg,.argus-old-shield,.argus-old-shield>svg{overflow:visible!important;clip-path:none!important;-webkit-clip-path:none!important}\n.entry-icon{contain:layout!important}\n#global-status { display: none !important; }\n#global-status .badge.disarmed,.hero-pill#hero-security-pill{color:#fff!important;background:rgba(18,82,54,.78)!important;border:1px solid rgba(125,255,185,.64)!important;text-shadow:0 1px 2px rgba(0,0,0,.72)!important;opacity:1!important}\n.argus-instance-duplicate-status{display:none!important}\n.pin-prompt,.pin-modal,.modal,.argus-bootstrap-card{color:#fff!important;text-shadow:0 1px 2px rgba(0,0,0,.55)!important}\n.pin-prompt input,.pin-modal input,.argus-bootstrap-card input{color:#fff!important;background:rgba(8,16,31,.72)!important;border-color:rgba(255,255,255,.24)!important;-webkit-text-fill-color:#fff!important}\n.pin-prompt label,.pin-modal label,.pin-prompt p,.pin-modal p,.argus-bootstrap-card label,.argus-bootstrap-card p{color:rgba(255,255,255,.88)!important}\n#w-activity,.activity-log{max-height:min(58vh,520px)!important;overflow-y:auto!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}\n#w-activity .panel-body,.activity-log .panel-body{max-height:inherit!important;overflow-y:auto!important}\n@media(max-width:760px){\n  .hero{display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important;gap:12px!important;padding:18px 14px!important}\n  .hero-left{width:100%!important;min-width:0!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important;gap:8px!important}\n  .hero-left>div{text-align:center!important;display:flex!important;flex-direction:column!important;align-items:center!important}\n  .hero-left h1,.hero-left p{text-align:center!important;margin:0 auto!important}\n  .hero-context{display:flex!important;flex-direction:column!important;width:100%!important;margin:4px 0 0!important;align-items:center!important;justify-content:center!important;gap:8px!important}\n  .hero-clock{width:100%!important;min-width:0!important;padding:0!important;border:0!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important;gap:3px!important;line-height:1.12!important}\n  .hero-clock strong,.hero-clock span,#hero-clock-time,#hero-clock-date{width:100%!important;max-width:100%!important;text-align:center!important;display:block!important;margin:0 auto!important;line-height:1.12!important}\n  #hero-profile-container{display:flex!important;justify-content:center!important;align-items:center!important;width:100%!important;margin:2px auto 0!important}\n  .hero-pills{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;min-width:0!important;justify-items:center!important;align-items:center!important;gap:8px!important}\n  .hero-pill{width:min(100%,360px)!important;max-width:100%!important;white-space:normal!important;text-align:center!important;justify-content:center!important;align-items:center!important;line-height:1.25!important;margin:0 auto!important}\n  .dashboard-instances>.panel-head{flex-direction:column!important;align-items:stretch!important;gap:10px!important}\n  #global-status,#global-status .badge{width:100%!important;box-sizing:border-box!important;justify-content:center!important;text-align:center!important;white-space:normal!important;line-height:1.3!important}\n  #w-activity,.activity-log{max-height:46vh!important;overflow-y:auto!important}\n  .argus-mobile-history-overflow-item{display:list-item!important}\n  #w-performance,.performance-card,.device-performance{display:grid!important;grid-template-columns:minmax(0,1fr)!important;justify-items:stretch!important;align-items:center!important;text-align:center!important;gap:10px!important}\n  #w-performance *,.performance-card *,.device-performance *{max-width:100%!important;box-sizing:border-box!important}\n  #w-access .panel-body,#w-settings .panel-body,.sos-actions,.panic-actions{overflow:visible!important;max-height:none!important}\n  .sos-actions button,.panic-actions button,[data-action*=\"sos\"],[data-action*=\"panic\"]{min-height:48px!important;touch-action:manipulation!important}\n  input[type=\"file\"]{max-width:100%!important;width:100%!important;color:#fff!important}\n}\n@media(orientation:landscape) and (max-height:560px) and (max-width:950px){\n  .hero{padding:14px!important;gap:10px!important}\n  .hero-context{grid-template-columns:auto minmax(0,1fr)!important;align-items:center!important}\n  .hero-clock{width:auto!important;justify-items:start!important}\n  .hero-pills{justify-content:flex-start!important}\n}\n  .entry { overflow: hidden; border-radius: 28px; -webkit-mask-image: -webkit-radial-gradient(white, black); }\n\n/* Profile Frosted Glass & Jelly Spring Animation */\n@keyframes jellySpringIn{0%{opacity:0;transform:scale(0.7) translateY(-14px)}45%{opacity:1;transform:scale(1.06) translateY(3px)}70%{transform:scale(0.97) translateY(-1px)}88%{transform:scale(1.01) translateY(1px)}100%{opacity:1;transform:scale(1) translateY(0)}}\n@keyframes jellySpringOut{0%{opacity:1;transform:scale(1) translateY(0)}35%{opacity:0.95;transform:scale(1.04) translateY(2px)}100%{opacity:0;transform:scale(0.72) translateY(-12px)}}\n@keyframes argusSensorArmBlink{0%,100%{border-color:rgba(255,159,10,0.85);box-shadow:0 0 10px rgba(255,159,10,0.5),inset 0 0 6px rgba(255,159,10,0.3);transform:scale(1)}50%{border-color:#ffd60a;box-shadow:0 0 20px 4px rgba(255,214,10,0.85),inset 0 0 12px rgba(255,214,10,0.5);transform:scale(1.02)}}\n\n.hero-profile-dropdown.opening{display:flex!important;animation:jellySpringIn 0.38s cubic-bezier(0.34,1.56,0.64,1) both!important}\n.hero-profile-dropdown.closing{display:flex!important;animation:jellySpringOut 0.28s cubic-bezier(0.4,0,0.2,1) both!important;pointer-events:none!important}\n\n\n.console-sensor.sensor-arming-blink,\n.console-sensor.argus-blocking{border-color:#ffd60a!important;background:linear-gradient(135deg,rgba(255,149,0,0.38),rgba(255,96,0,0.22))!important;animation:argusSensorArmBlink 0.9s ease-in-out infinite!important;color:#fff!important}\n\n/* Wide spacious SOS selector */\n.emergency-number-card{transition:all 0.3s ease}\n.sos-configuration #sos-output-chips{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(260px,1fr))!important;gap:12px!important;width:100%!important;max-height:none!important;overflow:visible!important}\n.sos-output-row{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:10px!important;padding:10px 14px!important;background:rgba(255,255,255,0.06)!important;border:1px solid rgba(255,255,255,0.12)!important;border-radius:12px!important;width:100%!important;box-sizing:border-box!important}\n.sos-output-row > .sensor-pill{flex:1!important;min-width:0!important;background:transparent!important;border:none!important;box-shadow:none!important;padding:0!important;font-weight:700!important;font-size:12px!important}\n\n</style>\n\n<!-- Bootstrap UI -->\n<div id=\"bootstrap-overlay\" class=\"argus-bootstrap-layer\" style=\"display:none\"></div>\n\n<!-- Language picker modal -->\n<div class=\"lang-modal-back\" id=\"lang-modal\" aria-hidden=\"true\">\n  <div class=\"lang-modal-card\">\n    <div class=\"lang-modal-title\" id=\"lang-modal-title\">🌐 Select Language</div>\n    <div class=\"lang-grid\" id=\"lang-grid\"></div>\n    <div class=\"lang-close-row\">\n      <button class=\"lang-close-btn\" id=\"lang-modal-close\">✕ Close</button>\n    </div>\n  </div>\n</div>\n\n<!-- SOS Confirm Modal -->\n<div class=\"ios-confirm-backdrop\" id=\"sos-modal\" style=\"display:none\">\n  <div class=\"ios-confirm-card liquid-glass\" id=\"sos-card\" style=\"position:relative;\">\n    <button id=\"sos-close-x\" style=\"position:absolute; top:16px; right:16px; background:rgba(255,255,255,0.1); border:none; color:white; border-radius:50%; width:32px; height:32px; font-weight:800; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:14px; opacity:0.8; padding:0; transition:background 0.2s;\">✕</button>\n    <div class=\"ios-confirm-title\" id=\"sos-title-txt\">Confirmar pánico</div>\n    <div class=\"ios-confirm-text\" id=\"sos-text-txt\">Desliza para disparar la alarma inmediatamente.</div>\n    <div class=\"ios-slider-shell\">\n      <div class=\"ios-slider-track\">\n        <div class=\"ios-slider-label\" id=\"sos-label\">Desliza para activar SOS</div>\n        <div class=\"ios-slider-thumb\" id=\"sos-thumb\">🚨</div>\n      </div>\n    </div>\n    <button class=\"ios-confirm-cancel\" id=\"btn-cancel-sos\" style=\"margin-top:16px\">Cancelar</button>\n  </div>\n</div>\n\n\n<div id=\"argus-canvas-bg\"></div>\n\n\n<div class=\"wrap\">\n  <!-- HERO -->\n  <div class=\"glass hero liquid-glass\">\n    <div class=\"hero-left\">\n      <img src=\"/api/argus_static/argus_logo.png\" alt=\"Argus Logo\" style=\"width: 75px; height: 75px; border-radius: 18px; object-fit: cover; box-shadow: 0 8px 24px rgba(0,0,0,0.25); flex-shrink: 0;\">\n      <div>\n        <h1>Argus Home Hub</h1>\n        <p id=\"p-hero-desc\"></p>\n      </div>\n    </div>\n    <div class=\"hero-context\" aria-live=\"polite\">\n      <div class=\"hero-clock\"><strong id=\"hero-clock-time\">--:--</strong><span id=\"hero-clock-date\"></span></div>\n      <div id=\"hero-profile-container\"></div>\n    </div>\n  </div>\n\n  <!-- TWO-COLUMN LAYOUT -->\n  <div class=\"grid hide-legacy\" id=\"widget-grid\">\n\n    <!-- Instances -->\n    <section class=\"glass panel liquid-glass dashboard-instances\" id=\"w-instances\" style=\"grid-column: 1 / -1;\">\n        <div class=\"panel-head\">\n          <h2 id=\"h-instances\"></h2>\n          <div style=\"display:flex;align-items:center;gap:12px\">\n            <div id=\"global-status\"></div>\n          </div>\n        </div>\n        <div id=\"entries\"></div>\n      </section>\n\n      <!-- Activity log -->\n      <section class=\"glass panel liquid-glass activity-panel\" id=\"w-activity\">\n        <div class=\"panel-head\">\n          <h2 id=\"h-activity-log\"></h2>\n          <div style=\"display:flex;gap:6px\">\n            <button class=\"ghost\" id=\"btn-refresh-history\" style=\"font-size:10.5px;padding:4px 10px;font-weight:800;cursor:pointer;background:rgba(255,255,255,0.06);border-radius:8px\">🔄 Actualizar</button>\n            <button class=\"ghost\" id=\"btn-export-forensic\" style=\"font-size:10.5px;padding:4px 10px;font-weight:800;cursor:pointer;background:rgba(255,255,255,0.06);border-radius:8px\">📄 Exportar</button>\n            <button class=\"ghost\" id=\"btn-clear-log\" style=\"font-size:10.5px;padding:4px 10px;font-weight:800;cursor:pointer;background:rgba(255,69,58,0.12);color:#ff453a !important;border-radius:8px\">🗑️ Limpiar</button>\n          </div>\n        </div>\n        <div id=\"activity-log\" style=\"display:grid;gap:10px;height:280px;overflow-y:auto;margin-top:10px\"></div>\n      </section>\n\n      <!-- Modes -->\n      <section class=\"glass panel liquid-glass modes-panel\" id=\"w-modes\">\n        <div class=\"panel-head\">\n           <h2 id=\"h-modes\"></h2>\n        </div>\n        <div class=\"tabs\" id=\"mode-tabs\" style=\"margin-bottom:15px\"></div>\n        <div id=\"mode-view\"></div>\n      </section>\n\n      <!-- Users & Master PIN Settings -->\n      <section class=\"glass panel liquid-glass access-panel\" id=\"w-access\">\n        <div class=\"panel-head\">\n          <div>\n            <h2 id=\"h-access-title\">Control de Acceso y Usuarios</h2>\n            <p class=\"access-summary\" id=\"p-access-desc\">PIN desactivado · Sin usuarios adicionales</p>\n          </div>\n        </div>\n\n        <div class=\"access-workspace\" id=\"access-workspace\" style=\"display:contents\">\n          <!-- Unified Informative Widget: SOS signals, notifications & audit logging -->\n          <div class=\"system-info-compact-card glass-subpanel\" style=\"padding:14px 18px;border-radius:16px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);margin-bottom:14px;\">\n            <div style=\"display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:6px;\">\n              <span id=\"system-diagnostics-txt\" style=\"font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.04em;color:rgba(255,255,255,0.85)\">ℹ️ Diagnóstico y Resumen del Sistema</span>\n              <span style=\"font-size:10px;font-weight:700;padding:2px 8px;border-radius:8px;background:rgba(74,222,128,0.15);color:#4ade80;border:1px solid rgba(74,222,128,0.3)\">✓ Operativo</span>\n            </div>\n            <div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;font-size:11px;\">\n              <div style=\"display:flex;align-items:center;gap:8px;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05)\">\n                <span style=\"font-size:16px\">🚨</span>\n                <div><strong style=\"display:block;color:#fff;font-size:11px\">Señales de Auxilio</strong><span style=\"opacity:0.65;font-size:9.5px\">Enlace SOS activo</span></div>\n              </div>\n              <div style=\"display:flex;align-items:center;gap:8px;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05)\">\n                <span style=\"font-size:16px\">🔔</span>\n                <div><strong style=\"display:block;color:#fff;font-size:11px\">Notificaciones</strong><span style=\"opacity:0.65;font-size:9.5px\">Push operativas</span></div>\n              </div>\n              <div style=\"display:flex;align-items:center;gap:8px;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05)\">\n                <span style=\"font-size:16px\">📋</span>\n                <div><strong style=\"display:block;color:#fff;font-size:11px\">Registro en Vivo</strong><span style=\"opacity:0.65;font-size:9.5px\">Auditoría continua</span></div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Users -->\n          <div class=\"access-section\" id=\"access-users-section\">\n            <h3 id=\"h-users\"></h3>\n            <p class=\"small\" id=\"p-admin-only\" style=\"margin-bottom:14px;color:#fb8c00;font-weight:600\"></p>\n            <div id=\"users-list\" style=\"display:grid;gap:12px;margin-bottom:16px\"></div>\n          </div>\n\n          <!-- Notifications -->\n          <div class=\"access-section\" id=\"access-notifications-section\">\n            <h3 id=\"h-notifications\"></h3>\n            <p class=\"small\" id=\"p-notif-desc\" style=\"margin:0 0 12px;opacity:.72\"></p>\n            <div id=\"notif-targets\" style=\"display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px\"></div>\n            <div style=\"display:flex;gap:8px;align-items:center\">\n              <select id=\"notif-select\" class=\"glass-control\" style=\"flex:1;min-width:0\"></select>\n              <button type=\"button\" class=\"ghost\" id=\"btn-add-notif\" style=\"white-space:nowrap\">＋</button>\n            </div>\n            <div class=\"save-row\" style=\"margin-top:12px\">\n              <button class=\"primary\" id=\"btn-save-notif\" style=\"width:100%\"></button>\n            </div>\n            <div id=\"notif-status\" class=\"status\" style=\"margin-top:8px;text-align:center;font-size:12px;font-weight:bold;min-height:18px\"></div>\n          </div>\n\n          <!-- Master PIN -->\n          <div class=\"access-section\" id=\"access-pin-section\">\n            <h3 id=\"h-settings-pin\">Pin de Armado</h3>\n            <div class=\"subsection\">\n              <div id=\"current-pin-display\" style=\"font-size:13px;font-weight:800;color:#ffffff !important;margin-bottom:15px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);padding:8px 14px;border-radius:10px;display:inline-block\"></div>\n              <div class=\"field-group collapsible collapsed\" id=\"group-current-pin\" style=\"margin-bottom: 12px\">\n                 <div style=\"display:flex; justify-content:space-between; align-items:center;\">\n                   <label id=\"l-current-pin-lbl\"></label>\n                   <a href=\"#\" id=\"lnk-forgot-pin\" style=\"font-size:11px; color:var(--accent-color, #ff4081); text-decoration:none; font-weight:bold; margin-bottom:4px; display:none;\"></a>\n                 </div>\n                 <input type=\"password\" id=\"current-pin\" inputmode=\"numeric\" pattern=\"[0-9]*\" class=\"glass-control\">\n              </div>\n              <p class=\"small\" id=\"p-pin-remove-hint\" style=\"margin:0 0 10px 0; color:var(--primary-color); font-weight:700\">Para quitar el PIN: Introduce el actual y deja los campos de abajo vacíos.</p>\n              <div style=\"display:grid;gap:10px\">\n                <div class=\"field-group\"><label id=\"l-new-pin\"></label><input type=\"password\" id=\"new-pin-1\" inputmode=\"numeric\" pattern=\"[0-9]*\" class=\"glass-control\"></div>\n                <div class=\"field-group\"><label id=\"l-confirm-pin\"></label><input type=\"password\" id=\"new-pin-2\" inputmode=\"numeric\" pattern=\"[0-9]*\" class=\"glass-control\"></div>\n              </div>\n              <div class=\"save-row\" style=\"margin-top:15px\">\n                <button class=\"primary\" id=\"btn-save-pin\" style=\"width:100%\"></button>\n              </div>\n              <div id=\"pin-status\" class=\"status\" style=\"margin-top:8px; text-align:center; font-size:12px; font-weight:bold; min-height:18px;\"></div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <!-- Automations -->\n      <section class=\"glass panel liquid-glass automations-panel\" id=\"w-automations\">\n        <h2 id=\"h-automations\"></h2>\n        <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:16px\">\n          <span class=\"small\" id=\"p-linked-rules\" style=\"opacity:0.7\"></span>\n          <button class=\"primary\" id=\"btn-new-auto\" style=\"padding:6px 12px;font-size:11px\"></button>\n        </div>\n        <div id=\"auto-view\"></div>\n      </section>\n\n      <!-- Backup & Restore -->\n      <section class=\"glass panel liquid-glass backup-panel\" id=\"w-backup\">\n        <h2 id=\"h-backup-title\">Respaldo y Restauración</h2>\n        <p class=\"small\" id=\"p-backup-desc\" style=\"margin-bottom:12px;opacity:0.7\">Guarda una copia de seguridad de tus ajustes o restaura una anterior.</p>\n        <div style=\"display:flex;gap:10px;align-items:center;\">\n          <button class=\"ghost\" id=\"btn-export-config\" style=\"flex:1\">📤 Descargar</button>\n          <div style=\"position:relative; flex:1\">\n            <button class=\"ghost\" style=\"width:100%\" id=\"btn-import-trigger\">📥 Restaurar</button>\n            <input type=\"file\" id=\"import-config-file\" style=\"display:none\" accept=\".json,.argus,application/json\">\n          </div>\n          <button class=\"ghost danger\" id=\"btn-reset-config\" style=\"flex:1\">⚠️ Restablecer</button>\n          <button class=\"primary\" id=\"btn-undo-reset\" style=\"flex:1; display:none;\">↩️ Deshacer</button>\n        </div>\n      </section>\n\n      <!-- GitHub Opt-In -->\n      <section class=\"glass panel liquid-glass github-panel\" id=\"w-github\" style=\"display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.02); padding:16px;\">\n        <div style=\"flex:1\">\n          <h3 id=\"github-title\" style=\"margin:0; font-size:14px; font-weight:600\"></h3>\n          <p id=\"github-desc\" style=\"margin:4px 0 0; font-size:12px; opacity:0.7\"></p>\n        </div>\n        <div style=\"display:flex; align-items:center; gap:10px; margin-left:16px; flex-wrap:wrap;\">\n          <a id=\"github-action\" class=\"github-star-action\" href=\"https://github.com/Chrisalvir1/Argus\" target=\"_blank\" rel=\"noopener noreferrer\"></a>\n          <a id=\"paypal-action\" class=\"glass-control\" href=\"https://paypal.me/CEstradaAlvir\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display:inline-flex; align-items:center; gap:4px; padding:6px 14px; border-radius:10px; font-size:12px; font-weight:750; color:#38bdf8 !important; text-decoration:none; background:rgba(56,189,248,0.12); border:1px solid rgba(56,189,248,0.3); transition:transform 0.15s ease, background 0.15s ease;\">☕ PayPal</a>\n          <a id=\"email-action\" class=\"glass-control\" href=\"mailto:chrisalvir01@gmail.com\" style=\"display:inline-flex; align-items:center; gap:4px; padding:6px 14px; border-radius:10px; font-size:12px; font-weight:750; color:#a78bfa !important; text-decoration:none; background:rgba(167,139,250,0.12); border:1px solid rgba(167,139,250,0.3); transition:transform 0.15s ease, background 0.15s ease;\">✉️ Sugerencias</a>\n        </div>\n      </section>\n\n  </div> <!-- /grid -->\n</div>\n\n<!-- Selector modal (dual-panel) -->\n<div class=\"modal-back\" id=\"selector-modal\" aria-hidden=\"true\">\n  <div class=\"modal\">\n    <div class=\"modal-head\">\n      <h3 id=\"selector-title\">Seleccionar</h3>\n      <button class=\"ghost\" id=\"selector-close\"></button>\n    </div>\n    <div class=\"modal-body\" style=\"overflow:hidden;display:flex;flex-direction:column;gap:10px\">\n      <div class=\"sel-grid\">\n        <!-- LEFT: lista disponible con búsqueda y acciones rápidas -->\n        <div class=\"sel-panel\">\n          <div class=\"subsection-title\" id=\"l-available\">Disponibles</div>\n          <div class=\"search-wrap\" style=\"margin:0\"><input id=\"selector-search\" type=\"search\" placeholder=\"Buscar...\"></div>\n          <div class=\"sel-actions\">\n            <button class=\"ghost\" id=\"selector-select-all\" style=\"padding:5px 10px;font-size:12px\">☑ Todos</button>\n            <button class=\"ghost\" id=\"selector-deselect-all\" style=\"padding:5px 10px;font-size:12px\">☐ Ninguno</button>\n          </div>\n          <div class=\"sel-panel-inner\" id=\"selector-list\"></div>\n        </div>\n        <!-- RIGHT: panel de seleccionados -->\n        <div class=\"sel-panel\">\n          <div class=\"subsection-title\" id=\"l-selected-lbl\">Seleccionados</div>\n          <div class=\"small\" id=\"selector-count\" style=\"margin-bottom:4px\">0 seleccionados</div>\n          <div class=\"sel-panel-inner\" id=\"selector-selected\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <div style=\"display:flex;gap:10px;width:100%;justify-content:flex-end\">\n        <button class=\"ghost\" id=\"selector-clear\"></button>\n        <button class=\"primary\" id=\"selector-accept\"></button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Home name edit modal -->\n<div class=\"modal-back\" id=\"home-name-modal\" aria-hidden=\"true\">\n  <div class=\"modal\" style=\"width:min(400px,96vw)\">\n    <div class=\"modal-head\">\n      <h3 id=\"home-name-modal-h3\">🏡 Nombre del Hogar</h3>\n      <button class=\"ghost\" id=\"home-name-modal-close\">✕</button>\n    </div>\n    <div style=\"display:grid;gap:14px;padding:4px 0\">\n      <p class=\"small\" id=\"home-name-modal-desc\" style=\"margin:0;opacity:.7\">This name appears in the instances panel and in full screen.</p>\n      <div class=\"field-group\">\n        <label id=\"l-home-name-modal-label\">Home name</label>\n        <input type=\"text\" id=\"home-name-input\" placeholder=\"Mi Casa\" maxlength=\"60\" autocomplete=\"off\" class=\"glass-control\">\n      </div>\n      <span class=\"status\" id=\"home-name-status\" style=\"text-align:center\"></span>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"ghost\" id=\"home-name-cancel\">Cancelar</button>\n      <button class=\"primary\" id=\"home-name-save\">Guardar</button>\n    </div>\n  </div>\n</div>\n\n<!-- PIN modal -->\n<div class=\"modal-back pm\" id=\"pin-modal\" aria-hidden=\"true\">\n  <div class=\"modal\">\n    <div class=\"modal-head\">\n      <h3 id=\"l-introduce-pin\">🔒</h3>\n      <button class=\"ghost\" id=\"pin-close\" style=\"background:transparent; border:none; color:inherit; font-size:20px; cursor:pointer; padding:4px 8px;\">✕</button>\n    </div>\n    <div style=\"display:grid;gap:10px;width:100%\">\n      <p id=\"l-pin-modal-desc\" class=\"small\" style=\"text-align:center;margin:0;opacity:0.75\"></p>\n      <input id=\"pin-input\" class=\"pin-input\" type=\"password\" inputmode=\"numeric\" pattern=\"[0-9]*\" placeholder=\"••••\" autocomplete=\"off\" maxlength=\"8\" readonly>\n      <div class=\"pin-grid\" id=\"pin-pad\">\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"1\">1</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"2\">2</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"3\">3</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"4\">4</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"5\">5</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"6\">6</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"7\">7</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"8\">8</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"9\">9</button>\n        <button class=\"pin-btn-round action-key delete-key\" type=\"button\" id=\"pin-backspace\">Borrar</button>\n        <button class=\"pin-btn-round\" type=\"button\" data-pin-digit=\"0\">0</button>\n        <button class=\"pin-btn-round action-key enter-key\" type=\"button\" id=\"pin-confirm\">Enter</button>\n      </div>\n      <div id=\"pin-error\" class=\"pin-error\"></div>\n      <div style=\"text-align:center; margin-top: 5px;\">\n        <a href=\"#\" id=\"pin-forgot-link\" style=\"font-size:12px; color:var(--accent-color, #ff4081); text-decoration:none; font-weight:700; display:none;\"></a>\n      </div>\n    </div>\n    <button id=\"pin-cancel\" style=\"display:none\"></button>\n  </div>\n</div>\n\n<!-- History Export modal -->\n<div class=\"modal-back pm\" id=\"history-export-modal\" aria-hidden=\"true\">\n  <div class=\"modal\" style=\"max-width: 440px;\">\n    <div class=\"modal-head\">\n      <h3 id=\"h-history-export-title\">📄 Exportar Historial</h3>\n      <button class=\"ghost\" id=\"history-export-close\" style=\"background:transparent; border:none; color:inherit; font-size:20px; cursor:pointer; padding:4px 8px;\">✕</button>\n    </div>\n    <div style=\"display:grid;gap:14px;padding:6px 0\">\n      <p class=\"small\" style=\"margin:0;opacity:.75\">Selecciona el rango de fechas para exportar o imprimir el reporte de auditoría.</p>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:10px;\">\n        <div class=\"field-group\">\n          <label style=\"font-size:11px;font-weight:700;opacity:0.8;\">📅 Desde</label>\n          <input type=\"date\" id=\"export-history-from\" class=\"glass-control\" style=\"width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;color:#fff;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12)\">\n        </div>\n        <div class=\"field-group\">\n          <label style=\"font-size:11px;font-weight:700;opacity:0.8;\">📅 Hasta</label>\n          <input type=\"date\" id=\"export-history-to\" class=\"glass-control\" style=\"width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;color:#fff;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12)\">\n        </div>\n      </div>\n      <div style=\"display:flex;flex-direction:column;gap:8px;margin-top:6px;\">\n        <button class=\"primary\" id=\"btn-do-print-pdf\" style=\"height:44px;font-size:13px;font-weight:800;cursor:pointer;border-radius:12px;box-shadow:0 6px 18px rgba(0,122,255,0.3)\">\n          🖨️ Imprimir / Guardar en PDF\n        </button>\n        <button class=\"glass-control\" id=\"btn-do-download-txt\" style=\"height:40px;font-size:12px;font-weight:700;cursor:pointer;border-radius:12px;background:rgba(255,255,255,0.05);color:#fff;border:1px solid rgba(255,255,255,0.15)\">\n          📑 Descargar Reporte (.txt)\n        </button>\n        <button class=\"ghost\" id=\"btn-do-download-json\" style=\"height:36px;font-size:11px;cursor:pointer;opacity:0.75\">\n          💾 Descargar JSON sin procesar\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n";
var h = class extends HTMLElement {
	constructor() {
		super(), this._showSosConfirm = !1, this._sosEntryIdx = null, this._sosBusy = !1, this._sosSliding = !1, this._sosStartX = 0, this._sosOffsetX = 0, this._sosConfirmed = !1, this.attachShadow({ mode: "open" }).appendChild(m.content.cloneNode(!0)), this._wsId = 1, this._socket = null, this._dashboard = null, this._ui = null, this._available = [], this._mode = "home", this._modeEntryId = null, this._selected = [], this._selectorTarget = null, this._hass = null, this._prevStates = {}, this._notifTargets = [], this._users = [], this._haUsersList = [], this._isAdmin = !0, this._pinCallback = null, this._homeName = "", this._backgroundMode = "weather", this._backgroundImages = [], this._temperatureSource = "auto", this._weatherSource = "auto", this._pending = {}, this._lastClockUpdate = 0, this._manualLang = null, this._fullscreenIdx = -1, this._cachedBgUrl = null, this._cachedBgBrightness = void 0, this._hubBgMode = "default", this._hubBgFile = "", this._hubBgSound = !1, this._clockFormat = "auto", this._profileSelectedThisMount = !1, this._welcomeShownThisMount = !1, this._panicOutputs = void 0, this._initPromise = null, this._staticBound = !1, this._postLoadBound = !1;
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
		} else {
			let t = this._backgroundMode || "weather";
			if (t === "none") e = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
			else if (t === "weather") {
				if (this._hass.states?.["sun.sun"]?.state === "below_horizon") e = !0;
				else {
					let t = this._getWeatherEntity().state || "sunny";
					e = ![
						"sunny",
						"fog",
						"snow",
						"windy"
					].includes(t);
				}
			} else if (t === "photo" || t === "collage") {
				let t = "";
				if (this._backgroundImages && this._backgroundImages[0] ? t = this._backgroundImages[0] : this._panelBgFile && (t = this._panelBgFile), t) {
					if (this._cachedBgUrl === t && this._cachedBgBrightness !== void 0) e = this._cachedBgBrightness < 135;
					else {
						let n = await this._getBrightness(t);
						this._cachedBgUrl = t, this._cachedBgBrightness = n, e = n < 135;
					}
				} else e = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
			}
		}
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
		return p[this._getCurrentLangCode()]?.[e] || p.en[e] || e;
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
		if (e ||= this._hass?.language || "es", e = String(e || "es").trim(), p[e]) return e;
		let t = e.split(/[-_]/)[0].toLowerCase();
		return p[t] ? t : t.startsWith("es") ? "es" : "en";
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
		t && (t.innerHTML = f.map((e) => `
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
			if (!p[e]) return;
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
		}, r = this._manualLang || "auto", i = f.find((e) => e.code === r) || f[1], a = t("lang-pill-flag"), o = t("lang-pill-label");
		a && (a.textContent = i.flag), o && (o.textContent = r === "auto" ? this._t("use_ha_language") : i.label), n("p-hero-desc", e("hero_desc")), n("h-instances", e("instances")), n("h-modes", e("modes")), n("h-automations", e("automations")), n("p-linked-rules", e("linked_rules")), n("h-settings", e("settings")), n("h-activity-log", e("activity_log")), n("btn-refresh-history", e("history_refresh")), n("t-change-pin", e("change_pin")), n("l-current-pin-lbl", e("current_pin")), n("lnk-forgot-pin", e("forgot_pin")), n("pin-forgot-link", e("forgot_pin")), n("btn-save-pin", e("update_pin")), n("l-new-pin", e("new_pin")), n("l-confirm-pin", e("confirm_pin")), n("h-notifications", e("notifications_title")), n("p-notif-desc", e("notif_desc")), n("h-users", e("users_title")), n("p-admin-only", e("admin_only")), n("t-add-user", e("add_user")), n("l-username", e("username")), n("l-user-pin", e("user_pin")), n("s-is-admin", e("is_admin")), n("l-user-exp-type", e("user_exp_type")), n("l-user-exp-date", e("user_exp_date"));
		let s = t("opt-exp-indefinite");
		s && (s.textContent = e("exp_indefinite"));
		let c = t("opt-exp-temporary");
		c && (c.textContent = e("exp_temporary")), n("selector-select-all", e("select_all")), n("selector-deselect-all", e("deselect_all")), n("l-available", e("available")), n("l-selected-lbl", e("selected_lbl")), n("l-introduce-pin", `🔒 ${e("introduce_pin")}`), n("l-pin-modal-desc", e("pin_modal_desc")), ((n) => {
			let r = t(n);
			r && (r.placeholder = e("search_placeholder"));
		})("selector-search");
		let l = (n, r) => {
			let i = t(n);
			i && (i.textContent = e(r));
		};
		l("btn-new-auto", "create_ha"), l("btn-save-pin", "update_pin"), l("btn-save-notif", "save_notif"), l("btn-save-user", "save_user"), l("selector-close", "close"), l("selector-clear", "clear"), l("selector-accept", "accept"), l("pin-cancel", "cancel"), l("pin-confirm", "confirm"), l("btn-cancel-sos", "cancel"), l("sos-call-btn", "sos_call"), l("home-name-cancel", "cancel"), l("home-name-save", "save_btn");
		let u = t("lang-modal-close");
		u && (u.textContent = `✕ ${e("close")}`), n("lbl-home-name-hdr", e("home_name_lbl")), n("lbl-panel-bg-title", e("bg_panel_title")), n("lbl-hub-bg-title", e("bg_hub_title")), n("s-panel-bg-sound-lbl", e("bg_sound_opt")), n("s-hub-bg-sound-lbl", e("bg_sound_opt")), n("lbl-mas-ajustes", "🎨 " + e("lbl_aesthetic_custom")), n("edit-widgets-label", this._widgetEditing ? "✓ " + e("done") : `⚙️ ${this._t("edit_widgets") || "Config. Widgets"}`), n("lbl-temperature-source", e("temp_displayed")), n("lbl-weather-source", e("weather_source")), n("lbl-panel-bg-upload", e("lbl_load_file")), n("lbl-hub-bg-upload", e("lbl_load_file")), n("lbl-uploaded-files-title", e("lbl_uploaded_files")), n("btn-edit-home-name-standalone", e("edit_btn")), n("btn-save-personalization-standalone", e("save_btn")), n("btn-refresh-history", e("history_refresh")), n("btn-export-forensic", "📄 " + (e("export_history_title") || "Exportar")), n("btn-clear-log", e("clear_log_btn")), n("h-history-export-title", "📄 " + (e("export_history_title") || "Exportar Historial")), n("h-access-title", e("access_title")), n("p-access-desc", e("access_desc")), n("btn-access-users", `👥 ${e("users_title").replace(/^👥\s*/, "").replace(/\s(?:y|&|e)\s.*$/i, "")}`), n("btn-access-pin", `🔐 ${e("pin_master_title")}`), n("h-settings-pin", e("pin_master_title")), n("p-pin-remove-hint", e("pin_remove_hint")), n("h-backup-title", e("backup_title")), n("p-backup-desc", e("backup_desc")), n("btn-export-config", e("export_btn")), n("btn-reset-config", e("reset_btn")), n("btn-undo-reset", e("undo_reset_btn")), n("btn-import-trigger", e("import_btn")), n("github-title", e("github_title")), n("github-desc", e("github_desc")), n("github-action", `⭐ ${e("github_action")}`), n("sos-title-txt", e("sos_confirm_title")), n("sos-text-txt", e("sos_confirm_text")), n("sos-label", e("sos_slide")), n("system-diagnostics-txt", "ℹ️ " + (e("system_diagnostics") || "Diagnóstico y Resumen del Sistema")), n("home-name-modal-h3", e("home_name_modal_title")), n("p-home-name-modal-desc", e("home_name_modal_desc")), n("l-home-name-modal-label", e("home_name_label")), n("lang-modal-title", `🌐 ${e("lang_select_title")}`), n("sos-call-help", e("sos_call_help")), n("lbl-emergency-number", e("emergency_number_label")), n("emergency-number-help", e("emergency_help")), n("lbl-sos-actions", e("sos_actions")), n("btn-select-sos-outputs", e("sos_select_outputs")), n("sos-output-help", e("sos_outputs_help")), n("home-name-modal-desc", e("home_name_modal_desc")), n("pin-backspace", e("delete"));
		let d = t("bg-mode-select-standalone");
		if (d) {
			let t = d.value;
			d.innerHTML = `
        <option value="weather">${e("bg_weather")}</option>
        <option value="none">${e("bg_panel_none")}</option>
        <option value="photo">${e("bg_photo")}</option>
        <option value="collage">${e("bg_collage")}</option>
      `, t && (d.value = t), this._renderEntries();
		}
		let p = t("hub-bg-mode-select");
		if (p) {
			let t = p.value;
			p.innerHTML = `
        <option value="default">${e("bg_hub_default")}</option>
        <option value="image">${e("bg_image_opt")}</option>
      `, t && (p.value = t);
		}
		this._populateTemperatureSources(), this._populateWeatherSources();
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
		this._ensureInitialized(), this._initContrastMode(), this._startClock(), this._fullscreenIdx >= 0 && !this._kioskLocked && (document.fullscreenElement || document.webkitFullscreenElement || (this._fullscreenIdx = -1, this.classList.remove("fullscreen-active"))), this._onFsChange = () => {
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
			console.error("Argus initialization failed:", e), this.isConnected && this._renderInitializationError(e);
		}).finally(() => {
			this._initPromise = null;
		}));
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
		e.addEventListener("pointerdown", o), e.addEventListener("pointermove", s), e.addEventListener("pointerup", c), e.addEventListener("pointercancel", c), this._sosBound = !0;
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
			this._manualLang = t && t !== "auto" ? t : e.language && e.language !== "auto" && f.some((t) => t.code === e.language) ? e.language : null;
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
		}, this._notifTargets = r.ui?.notif_targets || [], this._users = Array.isArray(r.ui?.users) ? r.ui.users.filter((e) => e && typeof e == "object" && !Array.isArray(e)) : [], this._homeName = r.ui?.home_name || "", this._emergencyNumber = r.ui?.emergency_number || "911", this._loadState = "dashboard", this.shadowRoot.querySelector(".wrap")?.classList.add("wrap-ready"), this._currentProfile = r.current_profile || null;
		let i = this.shadowRoot.getElementById("bootstrap-overlay");
		i && (this._currentProfile && !this._welcomeShownThisMount ? i.style.display = "flex" : i.style.display = "none"), await this._loadActivityTimeline(r.entry_id), this._panicOutputs = r.ui?.panic_outputs || [];
		let a = this._users.find((e) => e.id === this._currentProfile?.id) || {};
		this._backgroundMode = a.background_mode || r.ui?.background_mode || "weather", this._backgroundImages = a.background_images || r.ui?.background_images || [], this._temperatureSource = r.ui?.temperature_source || "auto", this._weatherSource = r.ui?.weather_source || "auto", this._clockFormat = r.ui?.clock_format || "auto", this._panelBgFile = a.panel_bg_file === void 0 ? r.ui?.panel_bg_file || "" : a.panel_bg_file, this._panelBgSound = !!(a.panel_bg_sound === void 0 ? r.ui?.panel_bg_sound : a.panel_bg_sound);
		let o = a.hub_bg_mode || r.ui?.hub_bg_mode || "none";
		this._hubBgMode = o === "none" || o === "default" ? "default" : o, this._hubBgFile = a.hub_bg_file === void 0 ? r.ui?.hub_bg_file || "" : a.hub_bg_file, this._hubBgSound = !!(a.hub_bg_sound === void 0 ? r.ui?.hub_bg_sound : a.hub_bg_sound), this._updateTheme(), this._updateHomeNameDisplay(), this._updateProfileBadge(), this._populateTemperatureSources();
		let s = this.shadowRoot.getElementById("temp-source-select-standalone");
		s && (s.value = this._temperatureSource || "auto", s.dataset.bound || (s.dataset.bound = "1", s.addEventListener("change", () => this._savePersonalization()))), this._populateWeatherSources();
		let c = this.shadowRoot.getElementById("weather-source-select");
		c && (c.value = this._weatherSource || "auto", c.dataset.bound || (c.dataset.bound = "1", c.addEventListener("change", () => this._savePersonalization())));
		let l = this.shadowRoot.getElementById("argus-clock-format-select");
		l && (this._clockFormat = this._ui?.clock_format || this._dashboard?.clock_format || "auto", l.value = this._clockFormat, l.dataset.bound || (l.dataset.bound = "1", l.addEventListener("change", () => this._savePersonalization())));
		let u = this.shadowRoot.getElementById("emergency-number-input");
		u && (u.value = this._emergencyNumber), this._renderSosOutputs(), this._configureEmergencyCall();
		let d = this.shadowRoot.getElementById("bg-mode-select-standalone");
		d && (d.innerHTML = `
        <option value="weather">${this._t("bg_weather")}</option>
        <option value="none">${this._t("bg_panel_none")}</option>
        <option value="photo">${this._t("bg_photo")}</option>
        <option value="collage">${this._t("bg_collage")}</option>
      `, d.value = this._backgroundMode || "weather");
		let p = this.shadowRoot.getElementById("hub-bg-mode-select");
		p && (p.innerHTML = `
        <option value="default">${this._t("bg_hub_default")}</option>
        <option value="image">${this._t("bg_image_opt")}</option>
        <option value="weather">Clima animado</option>
      `, p.value = this._hubBgMode || "default");
		let m = this.shadowRoot.getElementById("panel-bg-url-input");
		m && (m.value = this._panelBgFile && !this._panelBgFile.startsWith("data:") ? this._panelBgFile : "");
		let h = this.shadowRoot.getElementById("chk-panel-bg-sound");
		h && (h.checked = this._panelBgSound);
		let g = this.shadowRoot.getElementById("hub-bg-url-input");
		g && (g.value = this._hubBgFile && !this._hubBgFile.startsWith("data:") ? this._hubBgFile : "");
		let _ = this.shadowRoot.getElementById("chk-hub-bg-sound");
		_ && (_.checked = this._hubBgSound), this._updateBgFieldsVisibility(), this._updateCanvasBackground(), this._isAdmin = r.current_profile?.role === "admin", this._permissions = r.current_profile?.permissions || {};
		let v = r.entries?.[0]?.entity_id;
		if (v ? ((!this._modeEntryId || this._modeEntryId === "default") && (this._modeEntryId = v), this._loadRetryTimeout &&= (clearTimeout(this._loadRetryTimeout), null)) : (!this._modeEntryId || this._modeEntryId === "default") && (this._modeEntryId = null), this._isAdmin) try {
			let e = await this._send("argus/get_ha_users");
			this._haUsersList = e?.ha_users || [];
		} catch (e) {
			console.warn("Could not fetch HA users:", e);
		}
		let y = r.entries?.[0]?.pin_configured === !0, b = this.shadowRoot.getElementById("current-pin-display"), x = this.shadowRoot.getElementById("group-current-pin");
		b && (b.textContent = y ? this._t("pin_active_yes") : this._t("pin_active_no")), x && (y ? x.classList.remove("collapsed") : x.classList.add("collapsed"));
		let S = this.shadowRoot.getElementById("lnk-forgot-pin");
		S && (S.style.display = y ? "inline" : "none");
		let C = this.shadowRoot.getElementById("pin-forgot-link");
		C && (C.style.display = y ? "inline" : "none"), [
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
		let w = r.entries && r.entries.length > 0, ee = w && r.entries[0].entity_id;
		w && !ee ? this._loadRetryTimeout ||= setTimeout(() => {
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
	_getWeatherGradient(e, t = "") {
		let n = {
			sunny: "linear-gradient(160deg, #4da6ff 0%, #89c4ff 60%, #c8e8ff 100%)",
			clear: "linear-gradient(160deg, #1a1a3e 0%, #2d2d6b 50%, #0f2557 100%)",
			cloudy: "linear-gradient(160deg, #6b7a8d 0%, #9aa5b1 60%, #c5cdd5 100%)",
			partlycloudy: "linear-gradient(160deg, #5b8fd4 0%, #7baee8 50%, #a8c8f0 100%)",
			rainy: "linear-gradient(160deg, #3d4f5c 0%, #5a6e7a 50%, #7a8e96 100%)",
			snowy: "linear-gradient(160deg, #a8bfcf 0%, #c5d8e8 60%, #e8f0f8 100%)",
			stormy: "linear-gradient(160deg, #1a1f2e 0%, #2d3244 50%, #3d4255 100%)",
			fog: "linear-gradient(160deg, #8a9099 0%, #adb5bd 60%, #ced4da 100%)"
		}, r = String(t || e.label || "").toLowerCase();
		return n[Object.keys(n).find((e) => r.includes(e)) || Object.keys(n).find((t) => e.label?.toLowerCase().includes(t)) || "sunny"];
	}
	_initWeatherWebGL(e) {
		if (!e || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
		let t = e.parentElement;
		if (t) {
			let e = this._getWeatherEntity()?.state, n = this._hass?.states?.["sun.sun"]?.state === "below_horizon", r = String(e || "sunny").toLowerCase().replace(/[\s-]+/g, "_");
			t.style.background = this._getWeatherGradient(this._weatherPresentation(e, n), r);
		}
		let n = e.getContext("webgl", {
			alpha: !0,
			premultipliedAlpha: !1,
			antialias: !1,
			powerPreference: "low-power"
		}) || e.getContext("experimental-webgl", {
			alpha: !0,
			premultipliedAlpha: !1,
			antialias: !1,
			powerPreference: "low-power"
		});
		if (!n) {
			e.style.opacity = "0";
			return;
		}
		n.clearColor(0, 0, 0, 0);
		let r = (e, t) => {
			let r = n.createShader(e);
			return n.shaderSource(r, t), n.compileShader(r), n.getShaderParameter(r, n.COMPILE_STATUS) ? r : null;
		}, i = r(n.VERTEX_SHADER, "attribute vec2 p;varying vec2 uv;void main(){uv=(p+1.0)*.5;gl_Position=vec4(p,0.0,1.0);}"), a = r(n.FRAGMENT_SHADER, "precision highp float;varying vec2 uv;uniform float time,rain,snow,fog,storm,wind,temp,night,cloudy;\nuniform vec2 cloudPositions[6];\nuniform vec2 cloudSizes[6];\nuniform float cloudAlphas[6];\nfloat h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}\nfloat noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);return mix(mix(h(i+vec2(0.0,0.0)),h(i+vec2(1.0,0.0)),u.x),mix(h(i+vec2(0.0,1.0)),h(i+vec2(1.0,1.0)),u.x),u.y);}\nfloat fbm(vec2 p){float f=0.0,a=0.5;for(int i=0;i<4;i++){f+=a*noise(p);p*=2.0;a*=0.5;}return f;}\nfloat rainLayer(vec2 u,float t,float n){vec2 s=vec2(20.0+8.0*n,7.0+3.0*n);u.x+=wind*0.1*u.y;vec2 g=u*s,id=floor(g),q=fract(g);float sp=2.4+n*1.35+h(id)*1.2;q.y=fract(q.y+t*sp+h(id));float x=abs(q.x-(0.5+wind*0.2-q.y*(0.16+wind*0.1)));return (1.0-smoothstep(0.003,0.035-n*0.006,x))*(1.0-smoothstep(0.18,0.98,q.y));}\nfloat snowLayer(vec2 u,float t,float n){vec2 g=u*vec2(15.0+n*5.0,10.0+n*4.0),id=floor(g),q=fract(g);q.y=fract(q.y+t*(0.2+h(id)*0.2)+h(id));q.x+=sin(t+h(id)*6.28)*0.2+wind*0.1*t;return 1.0-smoothstep(0.01+n*0.01,0.08+n*0.02,length(q-vec2(0.5)));}\nvoid main(){float t=time*0.001;vec2 u=uv;if(temp>30.0){u.x+=sin(u.y*20.0+t*5.0)*0.003*(temp-30.0)/10.0;u.y+=cos(u.x*20.0+t*4.0)*0.003*(temp-30.0)/10.0;}\nvec3 col=vec3(0.0);float alpha=0.0;\nfloat clAlpha=0.0;\nif(cloudy>0.0){\n  for(int i=0;i<6;i++){\n    vec2 center=cloudPositions[i];\n    vec2 size=cloudSizes[i]*1.6;\n    vec2 d=(u-center)/size;\n    float dist=dot(d,d);\n    if(dist<1.0){\n      float base=exp(-dist*3.5);\n      float edge=noise(u*8.0+vec2(t*0.05))*0.35;\n      float intensity=clamp(base+edge*base,0.0,1.0);\n      clAlpha=max(clAlpha,cloudAlphas[i]*intensity*0.45);\n    }\n  }\n}\nif(clAlpha>0.0){\n  vec3 cloudColor=mix(vec3(0.85,0.90,0.95),vec3(1.0),clAlpha);\n  col=mix(col,cloudColor,clAlpha);\n  alpha=max(alpha,clAlpha*0.7);\n}\nif(night>0.5&&rain==0.0&&snow==0.0&&fog==0.0){float st=h(floor(u*150.0));if(st>0.99){float tw=0.5+0.5*sin(t*3.0+st*100.0);col+=vec3(1.0)*tw*(st-0.99)*100.0;alpha=max(alpha,tw*0.5);}}\nif(night>0.5&&temp<5.0&&rain==0.0&&snow==0.0&&storm==0.0){float au=fbm(vec2(u.x*2.0+t*0.1,u.y*3.0-t*0.05)),au2=fbm(vec2(u.x*3.0-t*0.15,u.y*2.0+t*0.08));vec3 ac=mix(vec3(0.0,1.0,0.5),vec3(0.5,0.0,1.0),au);float intn=smoothstep(0.4,0.8,au*au2)*(1.0-u.y);col+=ac*intn*1.5;alpha=max(alpha,intn);}\nif(night<0.5&&rain==0.0&&fog==0.0&&snow==0.0&&cloudy==0.0){float gr=fbm(vec2(u.x*4.0-t*0.08,u.y*0.4))*(1.0-u.y*0.8);float sunGlow=smoothstep(0.3,0.7,gr);col+=vec3(1.0,0.92,0.72)*sunGlow*0.65;alpha=max(alpha,sunGlow*0.45);}\nif(rain>0.0){float r=rainLayer(u,t,0.0)+rainLayer(u,t,1.0)*0.65+rainLayer(u,t,2.0)*0.45+rainLayer(u,t,3.0)*0.25;col+=vec3(0.75,0.88,1.0)*r*rain*1.2;alpha=max(alpha,min(1.0,r*rain*1.1));}\nif(snow>0.0){float s=snowLayer(u,t,0.0)+snowLayer(u,t,1.0)*0.7+snowLayer(u,t,2.0)*0.4;col+=vec3(1.0)*s*snow;alpha=max(alpha,min(1.0,s*snow));}\nif(fog>0.0){float f=fbm(vec2(u.x*3.0+t*0.2,u.y*4.0-t*0.1));col+=vec3(0.8,0.85,0.9)*f*fog*0.7;alpha=max(alpha,min(1.0,f*fog*0.8));}\nif(storm>0.0){float fl=step(0.98,fract(t*0.1+fbm(u*5.0+t)))*(0.8+0.2*noise(vec2(t*50.0)));col+=vec3(1.0,0.95,1.0)*fl*storm;alpha=max(alpha,fl*storm*0.8);}\ngl_FragColor=vec4(col,alpha);}");
		if (!i || !a) {
			e.style.opacity = "0";
			return;
		}
		let o = n.createProgram();
		if (n.attachShader(o, i), n.attachShader(o, a), n.linkProgram(o), !n.getProgramParameter(o, n.LINK_STATUS)) {
			e.style.opacity = "0";
			return;
		}
		let s = n.createBuffer();
		n.bindBuffer(n.ARRAY_BUFFER, s), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
			-1,
			-1,
			1,
			-1,
			-1,
			1,
			1,
			1
		]), n.STATIC_DRAW);
		let c = (e) => n.getUniformLocation(o, e), l = n.getAttribLocation(o, "p"), u = {
			time: c("time"),
			rain: c("rain"),
			snow: c("snow"),
			fog: c("fog"),
			storm: c("storm"),
			wind: c("wind"),
			temp: c("temp"),
			night: c("night"),
			cloudy: c("cloudy"),
			cloudPositions: c("cloudPositions"),
			cloudSizes: c("cloudSizes"),
			cloudAlphas: c("cloudAlphas")
		}, d = {
			rain: Math.max(Number(e.dataset.rain || 0), Number(e.dataset.drizzle || 0) * .4),
			snow: Number(e.dataset.snow || 0),
			fog: Number(e.dataset.fog || 0),
			storm: Number(e.dataset.storm || 0),
			wind: Number(e.dataset.wind || 0),
			temp: Number(e.dataset.temp || 20),
			night: Number(e.dataset.night || 0),
			cloudy: Number(e.dataset.cloudy || 0)
		}, f = Array.from({ length: 6 }, () => ({
			x: Math.random() * 800,
			y: 50 + Math.random() * 250,
			rx: 120 + Math.random() * 80,
			ry: 45 + Math.random() * 25,
			speed: .1 + Math.random() * .3,
			alpha: .08 + Math.random() * .07
		})), p = 0, m = !0;
		if (e.width === 0 || e.height === 0 || e.clientWidth === 0 || e.clientHeight === 0) {
			let t = e.parentElement;
			t && t.offsetWidth > 0 ? (e.width = Math.floor(t.offsetWidth * (window.devicePixelRatio || 1)) || 300, e.height = Math.floor(t.offsetHeight * (window.devicePixelRatio || 1)) || 200) : (e.width = 600, e.height = 400);
		}
		let h = (t) => {
			if (!m || !e.isConnected) return;
			n.clear(n.COLOR_BUFFER_BIT);
			let r = Math.min(window.devicePixelRatio || 1, 1.5), i = Math.max(1, Math.round(e.clientWidth * r)), a = Math.max(1, Math.round(e.clientHeight * r));
			(e.width !== i || e.height !== a) && (e.width = i, e.height = a, n.viewport(0, 0, i, a)), d.cloudy > 0 && f.forEach((e) => {
				e.x -= e.speed, e.x + e.rx < 0 && (e.x = i + e.rx, e.y = 50 + Math.random() * (a - 100));
			});
			let c = [], g = [], _ = [];
			f.forEach((e) => {
				c.push(e.x / i, e.y / a), g.push(e.rx / i, e.ry / a), _.push(d.cloudy > 0 ? e.alpha : 0);
			}), n.useProgram(o), n.enable(n.BLEND), n.blendFunc(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA), n.bindBuffer(n.ARRAY_BUFFER, s), n.enableVertexAttribArray(l), n.vertexAttribPointer(l, 2, n.FLOAT, !1, 0, 0), u.time && n.uniform1f(u.time, t), u.rain && n.uniform1f(u.rain, d.rain), u.snow && n.uniform1f(u.snow, d.snow), u.fog && n.uniform1f(u.fog, d.fog), u.storm && n.uniform1f(u.storm, d.storm), u.wind && n.uniform1f(u.wind, d.wind), u.temp && n.uniform1f(u.temp, d.temp), u.night && n.uniform1f(u.night, d.night), u.cloudy && n.uniform1f(u.cloudy, d.cloudy), u.cloudPositions && n.uniform2fv(u.cloudPositions, c), u.cloudSizes && n.uniform2fv(u.cloudSizes, g), u.cloudAlphas && n.uniform1fv(u.cloudAlphas, _), n.drawArrays(n.TRIANGLE_STRIP, 0, 4), p = requestAnimationFrame(h);
		};
		e._argusWebglStop = () => {
			m = !1, cancelAnimationFrame(p), n.getExtension("WEBGL_lose_context")?.loseContext();
		}, e.closest(".wx-atmosphere")?.classList.add("webgl-active"), p = requestAnimationFrame(h);
	}
	_renderAtmosphere(e, t) {
		let n = String(e || "").toLowerCase(), r = (e) => n.includes(e), i = r("thunder") || r("lightning") || r("storm"), a = r("snow") || r("hail") || r("sleet") || r("blizzard"), o = r("drizzle") || r("shower"), s = !o && (r("rain") || r("pouring")), c = r("fog") || r("mist") || r("hazy"), l = r("cloud") || r("overcast"), u = "clear";
		i ? u = "storm" : s || o ? u = "rain" : a ? u = "snow" : c ? u = "fog" : r("partly") ? u = "partlycloudy" : l ? u = "cloudy" : r("sunny") && (u = "sunny");
		let d = t ? "night" : "day", f = this._eclipseEvent() ? "eclipse" : "";
		return `<div class="scene ${d} ${u} ${f}"></div>`;
	}
	_getWeatherBg(e, t) {
		return this._renderAtmosphere(e, t);
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
		};
		e.className = "tabs", e.innerHTML = `
      <div class="tab-bubble"></div>
      ${t.map((e) => `
        <button type="button" class="tab ${e === this._mode ? "active" : ""}" data-mode="${e}">
          <span class="tab-icon" style="font-size: 20px;">${n[e]}</span>
          <span class="tab-label">${r[e]}</span>
        </button>
      `).join("")}
    `;
		let i = e.querySelector(".tab-bubble");
		e.querySelectorAll("[data-mode]").forEach((e) => e.addEventListener("click", () => {
			this._mode = e.dataset.mode, this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
		}));
		let a = e.querySelectorAll(".tab"), o = null;
		a.forEach((e) => {
			e.dataset.mode === this._mode ? (e.classList.add("active"), o = e) : e.classList.remove("active");
		}), i && o && (i.className = `tab-bubble bubble-${this._mode}`, requestAnimationFrame(() => {
			let e = o.offsetLeft, t = o.offsetWidth;
			i.style.transform = `translate3d(${e}px, 0, 0) scaleX(${t / 100})`, i.style.width = "100px", i.style.left = "0";
		}));
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
	_populateWeatherSources() {
		let e = this.shadowRoot.getElementById("weather-source-select");
		if (!e || !this._hass?.states) return;
		let t = e.value || this._weatherSource || "auto", n = Object.values(this._hass.states).filter((e) => e.entity_id?.startsWith("weather."));
		e.innerHTML = [{
			entity_id: "auto",
			name: this._t("weather_auto")
		}, ...n.map((e) => ({
			entity_id: e.entity_id,
			name: e.attributes?.friendly_name || e.entity_id
		}))].map((e) => `<option value="${this._escapeHtml(e.entity_id)}">${this._escapeHtml(e.name)}</option>`).join(""), e.value = [...e.options].some((e) => e.value === t) ? t : "auto";
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
		let e = this.shadowRoot.getElementById("bg-mode-select-standalone")?.value || "weather", t = this.shadowRoot.getElementById("temp-source-select-standalone")?.value || "auto", n = this.shadowRoot.getElementById("weather-source-select")?.value || "auto", r = this.shadowRoot.getElementById("argus-clock-format-select")?.value || "auto";
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
		let r = t.picture ? `<img id="hero-profile-avatar" class="user-avatar" src="${this._escapeHtml(t.picture)}" alt="${this._escapeHtml(t.name)}" style="width: 34px; height: 34px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(255,255,255,0.20); box-shadow: 0 3px 8px rgba(0,0,0,0.2); flex-shrink: 0; transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);" />` : `<div id="hero-profile-avatar" class="user-avatar" style="width: 34px; height: 34px; border-radius: 50%; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.15); flex-shrink: 0; transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">${this._escapeHtml(t.name.substring(0, 2).toUpperCase())}</div>`, i = this._manualLang || "auto", a = t.role === "admin" || t.permissions && t.permissions.change_pin, o = t.role === "admin" || t.permissions && t.permissions.change_master_pin, s = t.role === "admin" ? this._t("role_argus_admin_short") || "Admin" : this._t("role_argus_user_short") || "Estándar", c = (this._users || []).find((e) => e.id === t.id), l = !!(t.access_pin_configured || c?.access_pin_configured), u = !!(this._dashboard?.entries?.[0]?.pin_configured || t.master_pin_configured || (this._users || []).find((e) => e.role === "admin")?.pin_configured);
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
        <div id="profile-dropdown" class="hero-profile-dropdown" style="display: none; position: absolute; top: calc(100% + 12px); right: 0; flex-direction: column; width: 280px; z-index: 999999; padding: 16px; border-radius: 18px; box-shadow: 0 16px 32px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); max-height: calc(100vh - 100px); overflow-y: auto;">
        <div style="display: flex; align-items: center; gap: 12px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; margin-bottom: 8px; width: 100%;">
          ${t.picture ? `<img src="${this._escapeHtml(t.picture)}" alt="${this._escapeHtml(t.name)}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(255,255,255,0.20); box-shadow: 0 4px 10px rgba(0,0,0,0.25); flex-shrink: 0;" />` : `<div class="user-avatar" style="width: 44px; height: 44px; border-radius: 50%; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.15); box-shadow: 0 4px 10px rgba(0,0,0,0.25); flex-shrink: 0;">${this._escapeHtml(t.name.substring(0, 2).toUpperCase())}</div>`}
          <div style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0; align-items: flex-start;">
            <span style="font-size: 9.5px; opacity: 0.5; font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em;">${this._t("profile_is_yours") || this._t("active_profile") || "Perfil Activo"}</span>
            <span style="font-size: 14px; font-weight: 850; color: var(--v2066-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%; text-align: left;">${this._escapeHtml(t.name)}</span>
            <button id="btn-change-profile-picture" style="font-size: 10.5px; font-weight: 700; color: #30d158; text-decoration: none; display: flex; align-items: center; gap: 3px; margin-top: 3px; background: none; border: none; padding: 0; cursor: pointer;">
              👤 ${this._t("change_profile_picture") || "Ir a Personas de HA ↗"}
            </button>
          </div>
          <span class="user-badge ${t.role === "admin" ? "admin" : "user"}" style="font-size: 8.5px; padding: 3px 8px; font-weight: 800; border-radius: 6px; flex-shrink: 0; text-transform: uppercase; letter-spacing: 0.03em;">${this._escapeHtml(s)}</span>
        </div>

        <!-- Language Selector -->
        <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
          <label style="font-size: 11px; font-weight: 700; opacity: 0.7; display: flex; align-items: center; gap: 5px;">${this._t("lang_selector_lbl") || "⚙️ Idioma / Language"}</label>
          <select id="dropdown-lang-select" class="glass-control" style="width: 100%; height: 36px; border-radius: 10px; padding: 0 10px; font-size: 12px; font-weight: 700; background: rgba(255,255,255,0.06); border: 1px solid var(--v2066-border); color: var(--v2066-text); outline: none; cursor: pointer;">
            ${f.map((e) => `<option value="${e.code}" ${e.code === i ? "selected" : ""}>${e.flag} ${e.code === "auto" ? this._t("use_ha_language") || "Automático (HA)" : e.label}</option>`).join("")}
          </select>
        </div>

        <!-- Appearance & Contrast Selector -->
        <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
          <label style="font-size: 11px; font-weight: 700; opacity: 0.7; display: flex; align-items: center; gap: 5px;">${this._t("contrast_selector_lbl") || "👁️ Aspecto y Contraste"}</label>
          <select id="dropdown-contrast-select" class="glass-control" style="width: 100%; height: 36px; border-radius: 10px; padding: 0 10px; font-size: 12px; font-weight: 700; background: rgba(255,255,255,0.06); border: 1px solid var(--v2066-border); color: var(--v2066-text); outline: none; cursor: pointer;">
            <option value="standard" ${this._getProfileContrast() === "standard" ? "selected" : ""}>${this._t("contrast_standard") || "✨ Estándar (Liquid Glass)"}</option>
            <option value="high" ${this._getProfileContrast() === "high" ? "selected" : ""}>${this._t("contrast_high") || "🖤 Alto Contraste (OLED / Oscuro)"}</option>
          </select>
        </div>

        <!-- PIN management section -->
        ${a || o ? `
        <div style="display: flex; flex-direction: column; gap: 8px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
          <span style="font-size: 11px; font-weight: 700; opacity: 0.7;">${this._t("pin_management") || "🔑 Gestión de Pines"}</span>
          
          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 2px;">
            ${a ? `
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 11px; opacity: 0.85;">${this._t("access_pin_lbl") || "Pin perfil Argus"}</span>
              ${l ? `
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
            
            ${o ? `
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 11px; opacity: 0.85;">${this._t("master_pin_lbl") || "Pin de Armado"}</span>
              ${u ? `
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

        <!-- Argus Support Links (Star, PayPal, Email) -->
        <div style="display: flex; align-items: center; justify-content: space-around; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px; margin-top: 8px; font-size: 11px;">
          <a href="https://github.com/Chrisalvir1/Argus" target="_blank" rel="noopener noreferrer" style="color: #eab308; text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 4px;">⭐ GitHub</a>
          <span style="opacity: 0.3;">•</span>
          <a href="https://paypal.me/CEstradaAlvir" target="_blank" rel="noopener noreferrer" style="color: #38bdf8; text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 4px;">☕ PayPal</a>
          <span style="opacity: 0.3;">•</span>
          <a href="mailto:chrisalvir01@gmail.com" style="color: #a78bfa; text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 4px;">✉️ Ideas</a>
        </div>
      </div>
      </div>
    `;
		let d = e.querySelector(".hero-profile-pill"), p = e.querySelector("#profile-dropdown");
		if (d && p) {
			let t = (t) => {
				let n = e.closest(".hero");
				n && (n.style.zIndex = t ? "999999" : "9999");
				let r = e.closest(".wrap");
				r && (r.style.zIndex = t ? "999999" : "");
				let i = e.closest(".argus-widget") || e.closest(".react-grid-item") || e.closest(".panel");
				i && (i.style.zIndex = t ? "999999" : "");
			};
			d.addEventListener("click", (e) => {
				e.stopPropagation();
				let n = p.style.display === "flex";
				p.style.display = n ? "none" : "flex", t(!n);
			});
			let n = (r) => {
				(r.composedPath ? r.composedPath() : [r.target]).some((t) => t === e || t.closest && t.closest?.("#profile-dropdown")) || (p.style.display = "none", t(!1), document.removeEventListener("click", n, !0));
			};
			d.addEventListener("click", () => {
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
		}), this._initContrastMode(), e.querySelector("#btn-change-profile-picture")?.addEventListener("click", (e) => {
			e.stopPropagation(), p.style.display = "none";
			try {
				window.history.pushState(null, "", "/config/person"), window.dispatchEvent(new CustomEvent("location-changed"));
			} catch {
				window.location.href = "/config/person";
			}
		}), e.querySelector("#btn-dropdown-switch-user")?.addEventListener("click", (e) => {
			e.stopPropagation(), this._switchProfile();
		});
		let g = async (e) => {
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
		e.querySelector("#btn-dropdown-set-access-pin")?.addEventListener("click", g), e.querySelector("#btn-dropdown-change-access-pin")?.addEventListener("click", g), e.querySelector("#btn-dropdown-remove-access-pin")?.addEventListener("click", async (e) => {
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
		let _ = async (e) => {
			e.stopPropagation(), p.style.display = "none";
			let n = this._dashboard?.entries?.[0]?.entry_id || this._dashboard?.entry_id || this._modeEntryId, r = "";
			if (u && t.role !== "admin") {
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
		e.querySelector("#btn-dropdown-set-master-pin")?.addEventListener("click", _), e.querySelector("#btn-dropdown-change-master-pin")?.addEventListener("click", _), e.querySelector("#btn-dropdown-remove-master-pin")?.addEventListener("click", async (e) => {
			e.stopPropagation(), p.style.display = "none";
			let n = this._dashboard?.entries?.[0]?.entry_id || this._dashboard?.entry_id || this._modeEntryId, r = "";
			if (u && t.role !== "admin") {
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
				r && (r.style.display = "none"), this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-welcome-screen").forEach((e) => e.remove());
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
customElements.define("argus-panel-v2018", h);
try {
	customElements.get("argus-panel") || customElements.define("argus-panel", h);
} catch {}
//#endregion
//#region src/legacy/argus-card.ts
var g = "2.2.93";
console.info(`%c🛡️ ARGUS ALARM CARD %c v${g} `, "color:white;background:#0a1628;font-weight:700;padding:4px 8px;border-radius:4px 0 0 4px;", "color:#0a1628;background:#38bdf8;font-weight:700;padding:4px 8px;border-radius:0 4px 4px 0;");
function _(e) {
	if (!e?.states) return null;
	let t = Object.values(e.states);
	return (t.find((e) => e.entity_id?.startsWith("alarm_control_panel.") && (e.attributes?.argus_version || e.attributes?.argus_entry_id || e.entity_id.includes("argus"))) || t.find((e) => e.entity_id?.startsWith("alarm_control_panel.")))?.entity_id || null;
}
var v = {
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
}, y = (e) => String(e ?? "").replace(/[&<>'"]/g, (e) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"'": "&#39;",
	"\"": "&quot;"
})[e]), b = class extends HTMLElement {
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
            <option value="basic" ${t === "basic" ? "selected" : ""}>🌤️ Básico (Tarjeta clásica con clima animado)</option>
          </select>
          <div class="opt-grp hint">
            ${t === "compact" ? "Muestra la consola de seguridad de Instancias Activas con el escudo animado, modos iluminados, slide-to-disarm, slide-to-sos y sensores." : t === "panel" ? "Muestra todo el panel de control de Argus con su cuadrícula de widgets e historial de eventos." : "Muestra la tarjeta de alarma ligera con escena de clima y teclado PIN."}
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
customElements.define("argus-panel-card-editor", b);
var x = class extends HTMLElement {
	static getStubConfig(e) {
		return {
			entity: _(e) || "alarm_control_panel.argus",
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
			let t = _(e);
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
		let e = v[String(this._hass?.language || "en").split("-")[0]] || v.en, t = this._hass.states[this._config.entity]?.state || "unavailable", n = Object.values(this._hass?.states || {}), r = this._config.weather_entity ? this._hass.states[this._config.weather_entity] : n.find((e) => e.entity_id?.startsWith("weather.") && !["unknown", "unavailable"].includes(e.state)), i = Number(r?.attributes?.temperature), a = {
			state: String(r?.state || "unavailable").toLowerCase(),
			temp: Number.isFinite(i) ? Math.round(i) : "—",
			unit: Number.isFinite(i) ? String(r?.attributes?.temperature_unit || "") : "",
			night: this._hass?.states?.["sun.sun"]?.state === "below_horizon"
		}, o = this._hass?.config || {}, s = [];
		o.location_name && !/^(home|casa|hogar)$/i.test(o.location_name) && s.push(o.location_name), o.country && s.push(o.country);
		let c = s.length ? s.join(", ") : e.unknown, l = this._config.title || e.title, u = a.state, d = /thunder|storm|lightning/.test(u), f = /rain|pouring|drizzle|shower/.test(u), p = /snow/.test(u), m = /fog|mist|hazy/.test(u), h = /cloud|overcast/.test(u), _ = [a.night ? "night" : "day", d ? "storm" : f ? "rain" : p ? "snow" : m ? "fog" : h ? "cloud" : "clear"].join(" "), b = new Intl.DateTimeFormat(this._hass.language || void 0, {
			hour: "2-digit",
			minute: "2-digit"
		}).format(/* @__PURE__ */ new Date());
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
        <div class="basic-scene ${y(_)}"></div>
        <div class="basic-vignette"></div>
        <div class="basic-hud"><span>${y(c)}</span><span class="basic-weather">${y(b)} · ${y(a.temp)}${y(a.unit)}</span></div>
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
        <div class="basic-title">${y(l)} · v${g}</div>
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
customElements.get("argus-panel-card") || customElements.define("argus-panel-card", x), customElements.get("argus-card") || customElements.define("argus-card", class extends x {}), window.customCards = window.customCards || [];
var S = new Set(window.customCards.map((e) => e.type));
S.has("argus-panel-card") || window.customCards.push({
	type: "argus-panel-card",
	name: "Argus Security Panel",
	description: "Panel de seguridad Argus — consola Liquid Glass de Instancias Activas, dashboard e historial.",
	preview: !0,
	documentationURL: "https://github.com/Chrisalvir1/Argus"
}), S.has("argus-card") || window.customCards.push({
	type: "argus-card",
	name: "Argus Alarm Card",
	description: "Tarjeta de seguridad Argus — consola interactiva de Instancia Activa con Liquid Glass y pantalla completa.",
	preview: !0,
	documentationURL: "https://github.com/Chrisalvir1/Argus"
});
//#endregion
//#region node_modules/react/cjs/react.production.js
var C = /* @__PURE__ */ s(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.iterator;
	function m(e) {
		return typeof e != "object" || !e ? null : (e = p && e[p] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var h = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, g = Object.assign, _ = {};
	function v(e, t, n) {
		this.props = e, this.context = t, this.refs = _, this.updater = n || h;
	}
	v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, v.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function y() {}
	y.prototype = v.prototype;
	function b(e, t, n) {
		this.props = e, this.context = t, this.refs = _, this.updater = n || h;
	}
	var x = b.prototype = new y();
	x.constructor = b, g(x, v.prototype), x.isPureReactComponent = !0;
	var S = Array.isArray;
	function C() {}
	var w = {
		H: null,
		A: null,
		T: null,
		S: null
	}, ee = Object.prototype.hasOwnProperty;
	function te(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function T(e, t) {
		return te(e.type, t, e.props);
	}
	function ne(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function re(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var ie = /\/+/g;
	function E(e, t) {
		return typeof e == "object" && e && e.key != null ? re("" + e.key) : t.toString(36);
	}
	function ae(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(C, C) : (e.status = "pending", e.then(function(t) {
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
	function oe(e, r, i, a, o) {
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
				case d: return c = e._init, oe(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + E(e, 0) : a, S(o) ? (i = "", c != null && (i = c.replace(ie, "$&/") + "/"), oe(o, r, i, "", function(e) {
			return e;
		})) : o != null && (ne(o) && (o = T(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(ie, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (S(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + E(a, u), c += oe(a, r, i, s, o);
		else if (u = m(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + E(a, u++), c += oe(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return oe(ae(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function se(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return oe(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function ce(e) {
		if (e._status === -1) {
			var t = e._result;
			t = t(), t.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
			}), e._status === -1 && (e._status = 0, e._result = t);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var D = typeof reportError == "function" ? reportError : function(e) {
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
	}, O = {
		map: se,
		forEach: function(e, t, n) {
			se(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return se(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return se(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!ne(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = O, e.Component = v, e.Fragment = r, e.Profiler = a, e.PureComponent = b, e.StrictMode = i, e.Suspense = l, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return w.H.useMemoCache(e);
		}
	}, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = g({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !ee.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return te(e.type, i, r);
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
		return te(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = ne, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: ce
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = w.T, n = {};
		w.T = n;
		try {
			var r = e(), i = w.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(C, D);
		} catch (e) {
			D(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), w.T = t;
		}
	}, e.unstable_useCacheRefresh = function() {
		return w.H.useCacheRefresh();
	}, e.use = function(e) {
		return w.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return w.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return w.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return w.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return w.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return w.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return w.H.useEffectEvent(e);
	}, e.useId = function() {
		return w.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return w.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return w.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return w.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return w.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return w.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return w.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return w.H.useRef(e);
	}, e.useState = function(e) {
		return w.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return w.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return w.H.useTransition();
	}, e.version = "19.2.8";
})), w = /* @__PURE__ */ s(((e, t) => {
	t.exports = C();
})), ee = /* @__PURE__ */ s(((e) => {
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
			if (n(c) !== null) m = !0, S || (S = !0, ne());
			else {
				var t = n(l);
				t !== null && E(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, ee = -1;
	function te() {
		return g ? !0 : !(e.unstable_now() - ee < w);
	}
	function T() {
		if (g = !1, S) {
			var t = e.unstable_now();
			ee = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && te());) {
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
								u !== null && E(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? ne() : S = !1;
			}
		}
	}
	var ne;
	if (typeof y == "function") ne = function() {
		y(T);
	};
	else if (typeof MessageChannel < "u") {
		var re = new MessageChannel(), ie = re.port2;
		re.port1.onmessage = T, ne = function() {
			ie.postMessage(null);
		};
	} else ne = function() {
		_(T, 0);
	};
	function E(t, n) {
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
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, E(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, ne()))), r;
	}, e.unstable_shouldYield = te, e.unstable_wrapCallback = function(e) {
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
})), te = /* @__PURE__ */ s(((e, t) => {
	t.exports = ee();
})), T = /* @__PURE__ */ s(((e) => {
	var t = w();
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
	}, a = Symbol.for("react.portal");
	function o(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function c(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return o(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = s.T, n = i.p;
		try {
			if (s.T = null, i.p = 2, e) return e();
		} finally {
			s.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = c(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
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
					var n = c(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = c(n, t.crossOrigin);
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
				var n = c(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return s.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return s.H.useHostTransitionStatus();
	}, e.version = "19.2.8";
})), ne = /* @__PURE__ */ s(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = T();
})), re = /* @__PURE__ */ s(((e) => {
	var t = te(), n = w(), r = ne();
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
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
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
	var f = Object.assign, p = Symbol.for("react.element"), m = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), b = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), ie = Symbol.for("react.memo_cache_sentinel"), E = Symbol.iterator;
	function ae(e) {
		return typeof e != "object" || !e ? null : (e = E && e[E] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var oe = Symbol.for("react.client.reference");
	function se(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === oe ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case g: return "Fragment";
			case v: return "Profiler";
			case _: return "StrictMode";
			case S: return "Suspense";
			case C: return "SuspenseList";
			case re: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case h: return "Portal";
			case b: return e.displayName || "Context";
			case y: return (e._context.displayName || "Context") + ".Consumer";
			case x:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case ee: return t = e.displayName || null, t === null ? se(e.type) || "Memo" : t;
			case T:
				t = e._payload, e = e._init;
				try {
					return se(e(t));
				} catch {}
		}
		return null;
	}
	var ce = Array.isArray, D = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, ue = [], de = -1;
	function fe(e) {
		return { current: e };
	}
	function k(e) {
		0 > de || (e.current = ue[de], ue[de] = null, de--);
	}
	function A(e, t) {
		de++, ue[de] = e.current, e.current = t;
	}
	var pe = fe(null), me = fe(null), he = fe(null), ge = fe(null);
	function _e(e, t) {
		switch (A(he, t), A(me, e), A(pe, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = Vd(t), e = Hd(t, e);
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
		k(pe), A(pe, e);
	}
	function ve() {
		k(pe), k(me), k(he);
	}
	function ye(e) {
		e.memoizedState !== null && A(ge, e);
		var t = pe.current, n = Hd(t, e.type);
		t !== n && (A(me, e), A(pe, n));
	}
	function be(e) {
		me.current === e && (k(pe), k(me)), ge.current === e && (k(ge), Qf._currentValue = le);
	}
	var xe, Se;
	function Ce(e) {
		if (xe === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			xe = t && t[1] || "", Se = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + xe + e + Se;
	}
	var we = !1;
	function Te(e, t) {
		if (!e || we) return "";
		we = !0;
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
							e.call(n.prototype);
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
			we = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Ce(n) : "";
	}
	function Ee(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Ce(e.type);
			case 16: return Ce("Lazy");
			case 13: return e.child !== t && t !== null ? Ce("Suspense Fallback") : Ce("Suspense");
			case 19: return Ce("SuspenseList");
			case 0:
			case 15: return Te(e.type, !1);
			case 11: return Te(e.type.render, !1);
			case 1: return Te(e.type, !0);
			case 31: return Ce("Activity");
			default: return "";
		}
	}
	function De(e) {
		try {
			var t = "", n = null;
			do
				t += Ee(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Oe = Object.prototype.hasOwnProperty, ke = t.unstable_scheduleCallback, Ae = t.unstable_cancelCallback, je = t.unstable_shouldYield, Me = t.unstable_requestPaint, j = t.unstable_now, Ne = t.unstable_getCurrentPriorityLevel, Pe = t.unstable_ImmediatePriority, Fe = t.unstable_UserBlockingPriority, Ie = t.unstable_NormalPriority, Le = t.unstable_LowPriority, Re = t.unstable_IdlePriority, ze = t.log, Be = t.unstable_setDisableYieldValue, Ve = null, He = null;
	function Ue(e) {
		if (typeof ze == "function" && Be(e), He && typeof He.setStrictMode == "function") try {
			He.setStrictMode(Ve, e);
		} catch {}
	}
	var We = Math.clz32 ? Math.clz32 : qe, Ge = Math.log, Ke = Math.LN2;
	function qe(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Ge(e) / Ke | 0) | 0;
	}
	var Je = 256, Ye = 262144, Xe = 4194304;
	function Ze(e) {
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
			case 131072: return e & 261888;
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
	function Qe(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Ze(n))) : i = Ze(o) : i = Ze(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Ze(n))) : i = Ze(o)) : i = Ze(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function $e(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function et(e, t) {
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
	function tt() {
		var e = Xe;
		return Xe <<= 1, !(Xe & 62914560) && (Xe = 4194304), e;
	}
	function nt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function rt(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function it(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - We(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && at(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function at(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - We(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function ot(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - We(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function st(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : ct(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function ct(e) {
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
	function M(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function lt() {
		var e = O.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : mp(e.type)) : e;
	}
	function ut(e, t) {
		var n = O.p;
		try {
			return O.p = e, t();
		} finally {
			O.p = n;
		}
	}
	var dt = Math.random().toString(36).slice(2), ft = "__reactFiber$" + dt, pt = "__reactProps$" + dt, mt = "__reactContainer$" + dt, ht = "__reactEvents$" + dt, gt = "__reactListeners$" + dt, _t = "__reactHandles$" + dt, vt = "__reactResources$" + dt, yt = "__reactMarker$" + dt;
	function bt(e) {
		delete e[ft], delete e[pt], delete e[ht], delete e[gt], delete e[_t];
	}
	function xt(e) {
		var t = e[ft];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[mt] || n[ft]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = df(e); e !== null;) {
					if (n = e[ft]) return n;
					e = df(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function St(e) {
		if (e = e[ft] || e[mt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function Ct(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function wt(e) {
		var t = e[vt];
		return t ||= e[vt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function N(e) {
		e[yt] = !0;
	}
	var Tt = /* @__PURE__ */ new Set(), Et = {};
	function Dt(e, t) {
		Ot(e, t), Ot(e + "Capture", t);
	}
	function Ot(e, t) {
		for (Et[e] = t, e = 0; e < t.length; e++) Tt.add(t[e]);
	}
	var kt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), At = {}, jt = {};
	function Mt(e) {
		return Oe.call(jt, e) ? !0 : Oe.call(At, e) ? !1 : kt.test(e) ? jt[e] = !0 : (At[e] = !0, !1);
	}
	function Nt(e, t, n) {
		if (Mt(t)) {
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
				e.setAttribute(t, "" + n);
			}
		}
	}
	function Pt(e, t, n) {
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
			e.setAttribute(t, "" + n);
		}
	}
	function Ft(e, t, n, r) {
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
			e.setAttributeNS(t, n, "" + r);
		}
	}
	function It(e) {
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
	function Lt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Rt(e, t, n) {
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
	function zt(e) {
		if (!e._valueTracker) {
			var t = Lt(e) ? "checked" : "value";
			e._valueTracker = Rt(e, t, "" + e[t]);
		}
	}
	function Bt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Lt(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	function Vt(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var Ht = /[\n"\\]/g;
	function Ut(e) {
		return e.replace(Ht, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function Wt(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + It(t)) : e.value !== "" + It(t) && (e.value = "" + It(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : Kt(e, o, It(n)) : Kt(e, o, It(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + It(s) : e.removeAttribute("name");
	}
	function Gt(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				zt(e);
				return;
			}
			n = n == null ? "" : "" + It(n), t = t == null ? n : "" + It(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), zt(e);
	}
	function Kt(e, t, n) {
		t === "number" && Vt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
	}
	function qt(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + It(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Jt(e, t, n) {
		if (t != null && (t = "" + It(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + It(n);
	}
	function Yt(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (ce(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = It(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), zt(e);
	}
	function Xt(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Zt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function Qt(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Zt.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function $t(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && Qt(e, a, r);
		} else for (var o in t) t.hasOwnProperty(o) && Qt(e, o, t[o]);
	}
	function en(e) {
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
	var tn = /* @__PURE__ */ new Map([
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
	]), nn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function rn(e) {
		return nn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function an() {}
	var on = null;
	function sn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var cn = null, ln = null;
	function un(e) {
		var t = St(e);
		if (t && (e = t.stateNode)) {
			var n = e[pt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (Wt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + Ut("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[pt] || null;
								if (!a) throw Error(i(90));
								Wt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Bt(r);
					}
					break a;
				case "textarea":
					Jt(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && qt(e, !!n.multiple, t, !1);
			}
		}
	}
	var dn = !1;
	function fn(e, t, n) {
		if (dn) return e(t, n);
		dn = !0;
		try {
			return e(t);
		} finally {
			if (dn = !1, (cn !== null || ln !== null) && (bu(), cn && (t = cn, e = ln, ln = cn = null, un(t), e))) for (t = 0; t < e.length; t++) un(e[t]);
		}
	}
	function pn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[pt] || null;
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
	var mn = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), hn = !1;
	if (mn) try {
		var gn = {};
		Object.defineProperty(gn, "passive", { get: function() {
			hn = !0;
		} }), window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn);
	} catch {
		hn = !1;
	}
	var _n = null, vn = null, yn = null;
	function bn() {
		if (yn) return yn;
		var e, t = vn, n = t.length, r, i = "value" in _n ? _n.value : _n.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return yn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function xn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Sn() {
		return !0;
	}
	function Cn() {
		return !1;
	}
	function wn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Sn : Cn, this.isPropagationStopped = Cn, this;
		}
		return f(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Sn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Sn);
			},
			persist: function() {},
			isPersistent: Sn
		}), t;
	}
	var Tn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, En = wn(Tn), Dn = f({}, Tn, {
		view: 0,
		detail: 0
	}), On = wn(Dn), kn, An, jn, Mn = f({}, Dn, {
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
		getModifierState: Un,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== jn && (jn && e.type === "mousemove" ? (kn = e.screenX - jn.screenX, An = e.screenY - jn.screenY) : An = kn = 0, jn = e), kn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : An;
		}
	}), Nn = wn(Mn), Pn = wn(f({}, Mn, { dataTransfer: 0 })), Fn = wn(f({}, Dn, { relatedTarget: 0 })), In = wn(f({}, Tn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Ln = wn(f({}, Tn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Rn = wn(f({}, Tn, { data: 0 })), zn = {
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
	}, Bn = {
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
	}, Vn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Hn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Vn[e]) ? !!t[e] : !1;
	}
	function Un() {
		return Hn;
	}
	var Wn = wn(f({}, Dn, {
		key: function(e) {
			if (e.key) {
				var t = zn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = xn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Un,
		charCode: function(e) {
			return e.type === "keypress" ? xn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? xn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Gn = wn(f({}, Mn, {
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
	})), Kn = wn(f({}, Dn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Un
	})), qn = wn(f({}, Tn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Jn = wn(f({}, Mn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Yn = wn(f({}, Tn, {
		newState: 0,
		oldState: 0
	})), Xn = [
		9,
		13,
		27,
		32
	], Zn = mn && "CompositionEvent" in window, Qn = null;
	mn && "documentMode" in document && (Qn = document.documentMode);
	var $n = mn && "TextEvent" in window && !Qn, er = mn && (!Zn || Qn && 8 < Qn && 11 >= Qn), tr = " ", nr = !1;
	function rr(e, t) {
		switch (e) {
			case "keyup": return Xn.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function ir(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var ar = !1;
	function or(e, t) {
		switch (e) {
			case "compositionend": return ir(t);
			case "keypress": return t.which === 32 ? (nr = !0, tr) : null;
			case "textInput": return e = t.data, e === tr && nr ? null : e;
			default: return null;
		}
	}
	function sr(e, t) {
		if (ar) return e === "compositionend" || !Zn && rr(e, t) ? (e = bn(), yn = vn = _n = null, ar = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return er && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var cr = {
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
	function lr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!cr[e.type] : t === "textarea";
	}
	function ur(e, t, n, r) {
		cn ? ln ? ln.push(r) : ln = [r] : cn = r, t = Ed(t, "onChange"), 0 < t.length && (n = new En("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var dr = null, fr = null;
	function pr(e) {
		yd(e, 0);
	}
	function mr(e) {
		if (Bt(Ct(e))) return e;
	}
	function hr(e, t) {
		if (e === "change") return t;
	}
	var gr = !1;
	if (mn) {
		var _r;
		if (mn) {
			var vr = "oninput" in document;
			if (!vr) {
				var yr = document.createElement("div");
				yr.setAttribute("oninput", "return;"), vr = typeof yr.oninput == "function";
			}
			_r = vr;
		} else _r = !1;
		gr = _r && (!document.documentMode || 9 < document.documentMode);
	}
	function br() {
		dr && (dr.detachEvent("onpropertychange", xr), fr = dr = null);
	}
	function xr(e) {
		if (e.propertyName === "value" && mr(fr)) {
			var t = [];
			ur(t, fr, e, sn(e)), fn(pr, t);
		}
	}
	function Sr(e, t, n) {
		e === "focusin" ? (br(), dr = t, fr = n, dr.attachEvent("onpropertychange", xr)) : e === "focusout" && br();
	}
	function Cr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return mr(fr);
	}
	function wr(e, t) {
		if (e === "click") return mr(t);
	}
	function Tr(e, t) {
		if (e === "input" || e === "change") return mr(t);
	}
	function Er(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Dr = typeof Object.is == "function" ? Object.is : Er;
	function Or(e, t) {
		if (Dr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Oe.call(t, i) || !Dr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function kr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Ar(e, t) {
		var n = kr(e);
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
			n = kr(n);
		}
	}
	function jr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Mr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Vt(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Vt(e.document);
		}
		return t;
	}
	function Nr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Pr = mn && "documentMode" in document && 11 >= document.documentMode, Fr = null, Ir = null, Lr = null, Rr = !1;
	function zr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Rr || Fr == null || Fr !== Vt(r) || (r = Fr, "selectionStart" in r && Nr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Lr && Or(Lr, r) || (Lr = r, r = Ed(Ir, "onSelect"), 0 < r.length && (t = new En("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Fr)));
	}
	function Br(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Vr = {
		animationend: Br("Animation", "AnimationEnd"),
		animationiteration: Br("Animation", "AnimationIteration"),
		animationstart: Br("Animation", "AnimationStart"),
		transitionrun: Br("Transition", "TransitionRun"),
		transitionstart: Br("Transition", "TransitionStart"),
		transitioncancel: Br("Transition", "TransitionCancel"),
		transitionend: Br("Transition", "TransitionEnd")
	}, Hr = {}, Ur = {};
	mn && (Ur = document.createElement("div").style, "AnimationEvent" in window || (delete Vr.animationend.animation, delete Vr.animationiteration.animation, delete Vr.animationstart.animation), "TransitionEvent" in window || delete Vr.transitionend.transition);
	function Wr(e) {
		if (Hr[e]) return Hr[e];
		if (!Vr[e]) return e;
		var t = Vr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Ur) return Hr[e] = t[n];
		return e;
	}
	var Gr = Wr("animationend"), Kr = Wr("animationiteration"), qr = Wr("animationstart"), Jr = Wr("transitionrun"), Yr = Wr("transitionstart"), Xr = Wr("transitioncancel"), Zr = Wr("transitionend"), Qr = /* @__PURE__ */ new Map(), $r = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	$r.push("scrollEnd");
	function ei(e, t) {
		Qr.set(e, t), Dt(t, [e]);
	}
	var ti = typeof reportError == "function" ? reportError : function(e) {
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
	}, ni = [], ri = 0, ii = 0;
	function ai() {
		for (var e = ri, t = ii = ri = 0; t < e;) {
			var n = ni[t];
			ni[t++] = null;
			var r = ni[t];
			ni[t++] = null;
			var i = ni[t];
			ni[t++] = null;
			var a = ni[t];
			if (ni[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && li(n, i, a);
		}
	}
	function oi(e, t, n, r) {
		ni[ri++] = e, ni[ri++] = t, ni[ri++] = n, ni[ri++] = r, ii |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function si(e, t, n, r) {
		return oi(e, t, n, r), ui(e);
	}
	function ci(e, t) {
		return oi(e, null, null, t), ui(e);
	}
	function li(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - We(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function ui(e) {
		if (50 < du) throw du = 0, fu = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var di = {};
	function fi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function pi(e, t, n, r) {
		return new fi(e, t, n, r);
	}
	function mi(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function hi(e, t) {
		var n = e.alternate;
		return n === null ? (n = pi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function gi(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function _i(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof e == "function") mi(e) && (s = 1);
		else if (typeof e == "string") s = Uf(e, n, pe.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (e) {
			case re: return e = pi(31, n, t, a), e.elementType = re, e.lanes = o, e;
			case g: return vi(n.children, a, o, t);
			case _:
				s = 8, a |= 24;
				break;
			case v: return e = pi(12, n, t, a | 2), e.elementType = v, e.lanes = o, e;
			case S: return e = pi(13, n, t, a), e.elementType = S, e.lanes = o, e;
			case C: return e = pi(19, n, t, a), e.elementType = C, e.lanes = o, e;
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case b:
						s = 10;
						break a;
					case y:
						s = 9;
						break a;
					case x:
						s = 11;
						break a;
					case ee:
						s = 14;
						break a;
					case T:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = pi(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function vi(e, t, n, r) {
		return e = pi(7, e, r, t), e.lanes = n, e;
	}
	function yi(e, t, n) {
		return e = pi(6, e, null, t), e.lanes = n, e;
	}
	function bi(e) {
		var t = pi(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function xi(e, t, n) {
		return t = pi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Si = /* @__PURE__ */ new WeakMap();
	function Ci(e, t) {
		if (typeof e == "object" && e) {
			var n = Si.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: De(t)
			}, Si.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: De(t)
		};
	}
	var wi = [], Ti = 0, Ei = null, Di = 0, Oi = [], ki = 0, Ai = null, ji = 1, Mi = "";
	function Ni(e, t) {
		wi[Ti++] = Di, wi[Ti++] = Ei, Ei = e, Di = t;
	}
	function Pi(e, t, n) {
		Oi[ki++] = ji, Oi[ki++] = Mi, Oi[ki++] = Ai, Ai = e;
		var r = ji;
		e = Mi;
		var i = 32 - We(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - We(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ji = 1 << 32 - We(t) + i | n << i | r, Mi = a + e;
		} else ji = 1 << a | n << i | r, Mi = e;
	}
	function Fi(e) {
		e.return !== null && (Ni(e, 1), Pi(e, 1, 0));
	}
	function Ii(e) {
		for (; e === Ei;) Ei = wi[--Ti], wi[Ti] = null, Di = wi[--Ti], wi[Ti] = null;
		for (; e === Ai;) Ai = Oi[--ki], Oi[ki] = null, Mi = Oi[--ki], Oi[ki] = null, ji = Oi[--ki], Oi[ki] = null;
	}
	function Li(e, t) {
		Oi[ki++] = ji, Oi[ki++] = Mi, Oi[ki++] = Ai, ji = t.id, Mi = t.overflow, Ai = e;
	}
	var Ri = null, P = null, F = !1, zi = null, Bi = !1, Vi = Error(i(519));
	function Hi(e) {
		throw Ji(Ci(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Vi;
	}
	function Ui(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[ft] = e, t[pt] = r, n) {
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
				for (n = 0; n < _d.length; n++) Q(_d[n], t);
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
				Q("invalid", t), Gt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Q("invalid", t);
				break;
			case "textarea": Q("invalid", t), Yt(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Md(t.textContent, n) ? (r.popover != null && (Q("beforetoggle", t), Q("toggle", t)), r.onScroll != null && Q("scroll", t), r.onScrollEnd != null && Q("scrollend", t), r.onClick != null && (t.onclick = an), t = !0) : t = !1, t || Hi(e, !0);
	}
	function Wi(e) {
		for (Ri = e.return; Ri;) switch (Ri.tag) {
			case 5:
			case 31:
			case 13:
				Bi = !1;
				return;
			case 27:
			case 3:
				Bi = !0;
				return;
			default: Ri = Ri.return;
		}
	}
	function Gi(e) {
		if (e !== Ri) return !1;
		if (!F) return Wi(e), F = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || Ud(e.type, e.memoizedProps)), n = !n), n && P && Hi(e), Wi(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			P = uf(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			P = uf(e);
		} else t === 27 ? (t = P, Zd(e.type) ? (e = lf, lf = null, P = e) : P = t) : P = Ri ? cf(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Ki() {
		P = Ri = null, F = !1;
	}
	function qi() {
		var e = zi;
		return e !== null && (Zl === null ? Zl = e : Zl.push.apply(Zl, e), zi = null), e;
	}
	function Ji(e) {
		zi === null ? zi = [e] : zi.push(e);
	}
	var Yi = fe(null), Xi = null, Zi = null;
	function Qi(e, t, n) {
		A(Yi, t._currentValue), t._currentValue = n;
	}
	function $i(e) {
		e._currentValue = Yi.current, k(Yi);
	}
	function ea(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function ta(e, t, n, r) {
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
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), ea(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), ea(s, n, e), s = null;
			} else s = a.child;
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
	function na(e, t, n, r) {
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
					Dr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === ge.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [Qf] : e.push(Qf));
			}
			a = a.return;
		}
		e !== null && ta(t, e, n, r), t.flags |= 262144;
	}
	function ra(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Dr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function ia(e) {
		Xi = e, Zi = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function aa(e) {
		return sa(Xi, e);
	}
	function oa(e, t) {
		return Xi === null && ia(e), sa(e, t);
	}
	function sa(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, Zi === null) {
			if (e === null) throw Error(i(308));
			Zi = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else Zi = Zi.next = t;
		return n;
	}
	var ca = typeof AbortController < "u" ? AbortController : function() {
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
	}, la = t.unstable_scheduleCallback, ua = t.unstable_NormalPriority, I = {
		$$typeof: b,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function da() {
		return {
			controller: new ca(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function fa(e) {
		e.refCount--, e.refCount === 0 && la(ua, function() {
			e.controller.abort();
		});
	}
	var pa = null, ma = 0, ha = 0, ga = null;
	function _a(e, t) {
		if (pa === null) {
			var n = pa = [];
			ma = 0, ha = dd(), ga = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return ma++, t.then(va, va), t;
	}
	function va() {
		if (--ma === 0 && pa !== null) {
			ga !== null && (ga.status = "fulfilled");
			var e = pa;
			pa = null, ha = 0, ga = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function ya(e, t) {
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
	var ba = D.S;
	D.S = function(e, t) {
		eu = j(), typeof t == "object" && t && typeof t.then == "function" && _a(e, t), ba !== null && ba(e, t);
	};
	var xa = fe(null);
	function Sa() {
		var e = xa.current;
		return e === null ? K.pooledCache : e;
	}
	function Ca(e, t) {
		t === null ? A(xa, xa.current) : A(xa, t.pool);
	}
	function wa() {
		var e = Sa();
		return e === null ? null : {
			parent: I._currentValue,
			pool: e
		};
	}
	var Ta = Error(i(460)), Ea = Error(i(474)), Da = Error(i(542)), Oa = { then: function() {} };
	function ka(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Aa(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(an, an), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Pa(e), e;
			default:
				if (typeof t.status == "string") t.then(an, an);
				else {
					if (e = K, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
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
					case "rejected": throw e = t.reason, Pa(e), e;
				}
				throw Ma = t, Ta;
		}
	}
	function ja(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Ma = e, Ta) : e;
		}
	}
	var Ma = null;
	function Na() {
		if (Ma === null) throw Error(i(459));
		var e = Ma;
		return Ma = null, e;
	}
	function Pa(e) {
		if (e === Ta || e === Da) throw Error(i(483));
	}
	var Fa = null, Ia = 0;
	function La(e) {
		var t = Ia;
		return Ia += 1, Fa === null && (Fa = []), Aa(Fa, e, t);
	}
	function Ra(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function za(e, t) {
		throw t.$$typeof === p ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function Ba(e) {
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
			return e = hi(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 67108866), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = yi(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === g ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === T && ja(i) === t.type) ? (t = a(t, n.props), Ra(t, n), t.return = e, t) : (t = _i(n.type, n.key, n.props, null, e.mode, r), Ra(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = xi(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = vi(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = yi("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case m: return n = _i(t.type, t.key, t.props, null, e.mode, n), Ra(n, t), n.return = e, n;
					case h: return t = xi(t, e.mode, n), t.return = e, t;
					case T: return t = ja(t), f(e, t, n);
				}
				if (ce(t) || ae(t)) return t = vi(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, La(t), n);
				if (t.$$typeof === b) return f(e, oa(e, t), n);
				za(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case m: return n.key === i ? l(e, t, n, r) : null;
					case h: return n.key === i ? u(e, t, n, r) : null;
					case T: return n = ja(n), p(e, t, n, r);
				}
				if (ce(n) || ae(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, La(n), r);
				if (n.$$typeof === b) return p(e, t, oa(e, n), r);
				za(e, n);
			}
			return null;
		}
		function _(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case m: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case h: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case T: return r = ja(r), _(e, t, n, r, i);
				}
				if (ce(r) || ae(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return _(e, t, n, La(r), i);
				if (r.$$typeof === b) return _(e, t, n, oa(t, r), i);
				za(t, r);
			}
			return null;
		}
		function v(i, a, s, c) {
			for (var l = null, u = null, d = a, m = a = 0, h = null; d !== null && m < s.length; m++) {
				d.index > m ? (h = d, d = null) : h = d.sibling;
				var g = p(i, d, s[m], c);
				if (g === null) {
					d === null && (d = h);
					break;
				}
				e && d && g.alternate === null && t(i, d), a = o(g, a, m), u === null ? l = g : u.sibling = g, u = g, d = h;
			}
			if (m === s.length) return n(i, d), F && Ni(i, m), l;
			if (d === null) {
				for (; m < s.length; m++) d = f(i, s[m], c), d !== null && (a = o(d, a, m), u === null ? l = d : u.sibling = d, u = d);
				return F && Ni(i, m), l;
			}
			for (d = r(d); m < s.length; m++) h = _(d, i, m, s[m], c), h !== null && (e && h.alternate !== null && d.delete(h.key === null ? m : h.key), a = o(h, a, m), u === null ? l = h : u.sibling = h, u = h);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), F && Ni(i, m), l;
		}
		function y(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, m = s, h = s = 0, g = null, v = c.next(); m !== null && !v.done; h++, v = c.next()) {
				m.index > h ? (g = m, m = null) : g = m.sibling;
				var y = p(a, m, v.value, l);
				if (y === null) {
					m === null && (m = g);
					break;
				}
				e && m && y.alternate === null && t(a, m), s = o(y, s, h), d === null ? u = y : d.sibling = y, d = y, m = g;
			}
			if (v.done) return n(a, m), F && Ni(a, h), u;
			if (m === null) {
				for (; !v.done; h++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, h), d === null ? u = v : d.sibling = v, d = v);
				return F && Ni(a, h), u;
			}
			for (m = r(m); !v.done; h++, v = c.next()) v = _(m, a, h, v.value, l), v !== null && (e && v.alternate !== null && m.delete(v.key === null ? h : v.key), s = o(v, s, h), d === null ? u = v : d.sibling = v, d = v);
			return e && m.forEach(function(e) {
				return t(a, e);
			}), F && Ni(a, h), u;
		}
		function x(e, r, o, c) {
			if (typeof o == "object" && o && o.type === g && o.key === null && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case m:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === g) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === T && ja(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), Ra(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === g ? (c = vi(o.props.children, e.mode, c, o.key), c.return = e, e = c) : (c = _i(o.type, o.key, o.props, null, e.mode, c), Ra(c, o), c.return = e, e = c);
						}
						return s(e);
					case h:
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
							c = xi(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case T: return o = ja(o), x(e, r, o, c);
				}
				if (ce(o)) return v(e, r, o, c);
				if (ae(o)) {
					if (l = ae(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), y(e, r, o, c);
				}
				if (typeof o.then == "function") return x(e, r, La(o), c);
				if (o.$$typeof === b) return x(e, r, oa(e, o), c);
				za(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = yi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				Ia = 0;
				var i = x(e, t, n, r);
				return Fa = null, i;
			} catch (t) {
				if (t === Ta || t === Da) throw t;
				var a = pi(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var Va = Ba(!0), Ha = Ba(!1), Ua = !1;
	function Wa(e) {
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
	function Ga(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function Ka(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function qa(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, G & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = ui(e), li(e, null, n), t;
		}
		return oi(e, r, t, n), ui(e);
	}
	function Ja(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, ot(e, n);
		}
	}
	function Ya(e, t) {
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
	var Xa = !1;
	function Za() {
		if (Xa) {
			var e = ga;
			if (e !== null) throw e;
		}
	}
	function Qa(e, t, n, r) {
		Xa = !1;
		var i = e.updateQueue;
		Ua = !1;
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
				var p = s.lane & -536870913, m = p !== s.lane;
				if (m ? (J & p) === p : (r & p) === p) {
					p !== 0 && p === ha && (Xa = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var h = e, g = s;
						p = t;
						var _ = n;
						switch (g.tag) {
							case 1:
								if (h = g.payload, typeof h == "function") {
									d = h.call(_, d, p);
									break a;
								}
								d = h;
								break a;
							case 3: h.flags = h.flags & -65537 | 128;
							case 0:
								if (h = g.payload, p = typeof h == "function" ? h.call(_, d, p) : h, p == null) break a;
								d = f({}, d, p);
								break a;
							case 2: Ua = !0;
						}
					}
					p = s.callback, p !== null && (e.flags |= 64, m && (e.flags |= 8192), m = i.callbacks, m === null ? i.callbacks = [p] : m.push(p));
				} else m = {
					lane: p,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = m, c = d) : u = u.next = m, o |= p;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					m = s, s = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), Gl |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function $a(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function eo(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) $a(n[e], t);
	}
	var to = fe(null), no = fe(0);
	function ro(e, t) {
		e = Wl, A(no, e), A(to, t), Wl = e | t.baseLanes;
	}
	function io() {
		A(no, Wl), A(to, to.current);
	}
	function ao() {
		Wl = no.current, k(to), k(no);
	}
	var oo = fe(null), so = null;
	function co(e) {
		var t = e.alternate;
		A(L, L.current & 1), A(oo, e), so === null && (t === null || to.current !== null || t.memoizedState !== null) && (so = e);
	}
	function lo(e) {
		A(L, L.current), A(oo, e), so === null && (so = e);
	}
	function uo(e) {
		e.tag === 22 ? (A(L, L.current), A(oo, e), so === null && (so = e)) : fo(e);
	}
	function fo() {
		A(L, L.current), A(oo, oo.current);
	}
	function po(e) {
		k(oo), so === e && (so = null), k(L);
	}
	var L = fe(0);
	function mo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || af(n) || of(n))) return t;
			} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
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
	var ho = 0, R = null, z = null, B = null, go = !1, _o = !1, vo = !1, yo = 0, bo = 0, xo = null, So = 0;
	function V() {
		throw Error(i(321));
	}
	function Co(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Dr(e[n], t[n])) return !1;
		return !0;
	}
	function wo(e, t, n, r, i, a) {
		return ho = a, R = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? Bs : Vs, vo = !1, a = n(r, i), vo = !1, _o && (a = Eo(t, n, r, i)), To(e), a;
	}
	function To(e) {
		D.H = zs;
		var t = z !== null && z.next !== null;
		if (ho = 0, B = z = R = null, go = !1, bo = 0, xo = null, t) throw Error(i(300));
		e === null || ic || (e = e.dependencies, e !== null && ra(e) && (ic = !0));
	}
	function Eo(e, t, n, r) {
		R = e;
		var a = 0;
		do {
			if (_o && (xo = null), bo = 0, _o = !1, 25 <= a) throw Error(i(301));
			if (a += 1, B = z = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			D.H = Hs, o = t(n, r);
		} while (_o);
		return o;
	}
	function Do() {
		var e = D.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? No(t) : t, e = e.useState()[0], (z === null ? null : z.memoizedState) !== e && (R.flags |= 1024), t;
	}
	function Oo() {
		var e = yo !== 0;
		return yo = 0, e;
	}
	function ko(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function Ao(e) {
		if (go) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			go = !1;
		}
		ho = 0, B = z = R = null, _o = !1, bo = yo = 0, xo = null;
	}
	function jo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return B === null ? R.memoizedState = B = e : B = B.next = e, B;
	}
	function H() {
		if (z === null) {
			var e = R.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = z.next;
		var t = B === null ? R.memoizedState : B.next;
		if (t !== null) B = t, z = e;
		else {
			if (e === null) throw R.alternate === null ? Error(i(467)) : Error(i(310));
			z = e, e = {
				memoizedState: z.memoizedState,
				baseState: z.baseState,
				baseQueue: z.baseQueue,
				queue: z.queue,
				next: null
			}, B === null ? R.memoizedState = B = e : B = B.next = e;
		}
		return B;
	}
	function Mo() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function No(e) {
		var t = bo;
		return bo += 1, xo === null && (xo = []), e = Aa(xo, e, t), t = R, (B === null ? t.memoizedState : B.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? Bs : Vs), e;
	}
	function Po(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return No(e);
			if (e.$$typeof === b) return aa(e);
		}
		throw Error(i(438, String(e)));
	}
	function Fo(e) {
		var t = null, n = R.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = R.alternate;
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
		}, n === null && (n = Mo(), R.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ie;
		return t.index++, n;
	}
	function Io(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Lo(e) {
		return Ro(H(), z, e);
	}
	function Ro(e, t, n) {
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
				if (f === u.lane ? (ho & f) === f : (J & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === ha && (d = !0);
					else if ((ho & p) === p) {
						u = u.next, p === ha && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, R.lanes |= p, Gl |= p;
					f = u.action, vo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, R.lanes |= f, Gl |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Dr(o, e.memoizedState) && (ic = !0, d && (n = ga, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function zo(e) {
		var t = H(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Dr(o, t.memoizedState) || (ic = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function Bo(e, t, n) {
		var r = R, a = H(), o = F;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Dr((z || a).memoizedState, n);
		if (s && (a.memoizedState = n, ic = !0), a = a.queue, ds(Uo.bind(null, r, a, e), [e]), a.getSnapshot !== t || s || B !== null && B.memoizedState.tag & 1) {
			if (r.flags |= 2048, os(9, { destroy: void 0 }, Ho.bind(null, r, a, n, t), null), K === null) throw Error(i(349));
			o || ho & 127 || Vo(r, t, n);
		}
		return n;
	}
	function Vo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = R.updateQueue, t === null ? (t = Mo(), R.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Ho(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Wo(t) && Go(e);
	}
	function Uo(e, t, n) {
		return n(function() {
			Wo(t) && Go(e);
		});
	}
	function Wo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Dr(e, n);
		} catch {
			return !0;
		}
	}
	function Go(e) {
		var t = ci(e, 2);
		t !== null && hu(t, e, 2);
	}
	function Ko(e) {
		var t = jo();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), vo) {
				Ue(!0);
				try {
					n();
				} finally {
					Ue(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Io,
			lastRenderedState: e
		}, t;
	}
	function qo(e, t, n, r) {
		return e.baseState = n, Ro(e, z, typeof r == "function" ? r : Io);
	}
	function Jo(e, t, n, r, a) {
		if (Is(e)) throw Error(i(485));
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
			D.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Yo(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Yo(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = D.T, o = {};
			D.T = o;
			try {
				var s = n(i, r), c = D.S;
				c !== null && c(o, s), Xo(e, t, s);
			} catch (n) {
				Qo(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), D.T = a;
			}
		} else try {
			a = n(i, r), Xo(e, t, a);
		} catch (n) {
			Qo(e, t, n);
		}
	}
	function Xo(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			Zo(e, t, n);
		}, function(n) {
			return Qo(e, t, n);
		}) : Zo(e, t, n);
	}
	function Zo(e, t, n) {
		t.status = "fulfilled", t.value = n, $o(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Yo(e, n)));
	}
	function Qo(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, $o(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function $o(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function es(e, t) {
		return t;
	}
	function ts(e, t) {
		if (F) {
			var n = K.formState;
			if (n !== null) {
				a: {
					var r = R;
					if (F) {
						if (P) {
							b: {
								for (var i = P, a = Bi; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = cf(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								P = cf(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						Hi(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = jo(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: es,
			lastRenderedState: t
		}, n.queue = r, n = Ns.bind(null, R, r), r.dispatch = n, r = Ko(!1), a = Fs.bind(null, R, !1, r.queue), r = jo(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = Jo.bind(null, R, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function ns(e) {
		return rs(H(), z, e);
	}
	function rs(e, t, n) {
		if (t = Ro(e, t, es)[0], e = Lo(Io)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = No(t);
		} catch (e) {
			throw e === Ta ? Da : e;
		}
		else r = t;
		t = H();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (R.flags |= 2048, os(9, { destroy: void 0 }, is.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function is(e, t) {
		e.action = t;
	}
	function as(e) {
		var t = H(), n = z;
		if (n !== null) return rs(t, n, e);
		H(), t = t.memoizedState, n = H();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function os(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = R.updateQueue, t === null && (t = Mo(), R.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function ss() {
		return H().memoizedState;
	}
	function cs(e, t, n, r) {
		var i = jo();
		R.flags |= e, i.memoizedState = os(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function ls(e, t, n, r) {
		var i = H();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		z !== null && r !== null && Co(r, z.memoizedState.deps) ? i.memoizedState = os(t, a, n, r) : (R.flags |= e, i.memoizedState = os(1 | t, a, n, r));
	}
	function us(e, t) {
		cs(8390656, 8, e, t);
	}
	function ds(e, t) {
		ls(2048, 8, e, t);
	}
	function fs(e) {
		R.flags |= 4;
		var t = R.updateQueue;
		if (t === null) t = Mo(), R.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function ps(e) {
		var t = H().memoizedState;
		return fs({
			ref: t,
			nextImpl: e
		}), function() {
			if (G & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function ms(e, t) {
		return ls(4, 2, e, t);
	}
	function hs(e, t) {
		return ls(4, 4, e, t);
	}
	function gs(e, t) {
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
	function _s(e, t, n) {
		n = n == null ? null : n.concat([e]), ls(4, 4, gs.bind(null, t, e), n);
	}
	function vs() {}
	function ys(e, t) {
		var n = H();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Co(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function bs(e, t) {
		var n = H();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Co(t, r[1])) return r[0];
		if (r = e(), vo) {
			Ue(!0);
			try {
				e();
			} finally {
				Ue(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function xs(e, t, n) {
		return n === void 0 || ho & 1073741824 && !(J & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = mu(), R.lanes |= e, Gl |= e, n);
	}
	function Ss(e, t, n, r) {
		return Dr(n, t) ? n : to.current === null ? !(ho & 42) || ho & 1073741824 && !(J & 261930) ? (ic = !0, e.memoizedState = n) : (e = mu(), R.lanes |= e, Gl |= e, t) : (e = xs(e, n, r), Dr(e, t) || (ic = !0), e);
	}
	function Cs(e, t, n, r, i) {
		var a = O.p;
		O.p = a !== 0 && 8 > a ? a : 8;
		var o = D.T, s = {};
		D.T = s, Fs(e, !1, t, n);
		try {
			var c = i(), l = D.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? Ps(e, t, ya(c, r), pu(e)) : Ps(e, t, r, pu(e));
		} catch (n) {
			Ps(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, pu());
		} finally {
			O.p = a, o !== null && s.types !== null && (o.types = s.types), D.T = o;
		}
	}
	function ws() {}
	function Ts(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = Es(e).queue;
		Cs(e, a, t, le, n === null ? ws : function() {
			return Ds(e), n(r);
		});
	}
	function Es(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: le,
			baseState: le,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Io,
				lastRenderedState: le
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
				lastRenderedReducer: Io,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function Ds(e) {
		var t = Es(e);
		t.next === null && (t = e.alternate.memoizedState), Ps(e, t.next.queue, {}, pu());
	}
	function Os() {
		return aa(Qf);
	}
	function ks() {
		return H().memoizedState;
	}
	function As() {
		return H().memoizedState;
	}
	function js(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = pu();
					e = Ka(n);
					var r = qa(t, e, n);
					r !== null && (hu(r, t, n), Ja(r, t, n)), t = { cache: da() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function Ms(e, t, n) {
		var r = pu();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Is(e) ? Ls(t, n) : (n = si(e, t, n, r), n !== null && (hu(n, e, r), Rs(n, t, r)));
	}
	function Ns(e, t, n) {
		Ps(e, t, n, pu());
	}
	function Ps(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Is(e)) Ls(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Dr(s, o)) return oi(e, t, i, 0), K === null && ai(), !1;
			} catch {}
			if (n = si(e, t, i, r), n !== null) return hu(n, e, r), Rs(n, t, r), !0;
		}
		return !1;
	}
	function Fs(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: dd(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Is(e)) {
			if (t) throw Error(i(479));
		} else t = si(e, n, r, 2), t !== null && hu(t, e, 2);
	}
	function Is(e) {
		var t = e.alternate;
		return e === R || t !== null && t === R;
	}
	function Ls(e, t) {
		_o = go = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function Rs(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, ot(e, n);
		}
	}
	var zs = {
		readContext: aa,
		use: Po,
		useCallback: V,
		useContext: V,
		useEffect: V,
		useImperativeHandle: V,
		useLayoutEffect: V,
		useInsertionEffect: V,
		useMemo: V,
		useReducer: V,
		useRef: V,
		useState: V,
		useDebugValue: V,
		useDeferredValue: V,
		useTransition: V,
		useSyncExternalStore: V,
		useId: V,
		useHostTransitionStatus: V,
		useFormState: V,
		useActionState: V,
		useOptimistic: V,
		useMemoCache: V,
		useCacheRefresh: V
	};
	zs.useEffectEvent = V;
	var Bs = {
		readContext: aa,
		use: Po,
		useCallback: function(e, t) {
			return jo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: aa,
		useEffect: us,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), cs(4194308, 4, gs.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return cs(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			cs(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = jo();
			t = t === void 0 ? null : t;
			var r = e();
			if (vo) {
				Ue(!0);
				try {
					e();
				} finally {
					Ue(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = jo();
			if (n !== void 0) {
				var i = n(t);
				if (vo) {
					Ue(!0);
					try {
						n(t);
					} finally {
						Ue(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = Ms.bind(null, R, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = jo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = Ko(e);
			var t = e.queue, n = Ns.bind(null, R, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: vs,
		useDeferredValue: function(e, t) {
			return xs(jo(), e, t);
		},
		useTransition: function() {
			var e = Ko(!1);
			return e = Cs.bind(null, R, e.queue, !0, !1), jo().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = R, a = jo();
			if (F) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), K === null) throw Error(i(349));
				J & 127 || Vo(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, us(Uo.bind(null, r, o, e), [e]), r.flags |= 2048, os(9, { destroy: void 0 }, Ho.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = jo(), t = K.identifierPrefix;
			if (F) {
				var n = Mi, r = ji;
				n = (r & ~(1 << 32 - We(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = yo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = So++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: Os,
		useFormState: ts,
		useActionState: ts,
		useOptimistic: function(e) {
			var t = jo();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = Fs.bind(null, R, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: Fo,
		useCacheRefresh: function() {
			return jo().memoizedState = js.bind(null, R);
		},
		useEffectEvent: function(e) {
			var t = jo(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (G & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, Vs = {
		readContext: aa,
		use: Po,
		useCallback: ys,
		useContext: aa,
		useEffect: ds,
		useImperativeHandle: _s,
		useInsertionEffect: ms,
		useLayoutEffect: hs,
		useMemo: bs,
		useReducer: Lo,
		useRef: ss,
		useState: function() {
			return Lo(Io);
		},
		useDebugValue: vs,
		useDeferredValue: function(e, t) {
			return Ss(H(), z.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Lo(Io)[0], t = H().memoizedState;
			return [typeof e == "boolean" ? e : No(e), t];
		},
		useSyncExternalStore: Bo,
		useId: ks,
		useHostTransitionStatus: Os,
		useFormState: ns,
		useActionState: ns,
		useOptimistic: function(e, t) {
			return qo(H(), z, e, t);
		},
		useMemoCache: Fo,
		useCacheRefresh: As
	};
	Vs.useEffectEvent = ps;
	var Hs = {
		readContext: aa,
		use: Po,
		useCallback: ys,
		useContext: aa,
		useEffect: ds,
		useImperativeHandle: _s,
		useInsertionEffect: ms,
		useLayoutEffect: hs,
		useMemo: bs,
		useReducer: zo,
		useRef: ss,
		useState: function() {
			return zo(Io);
		},
		useDebugValue: vs,
		useDeferredValue: function(e, t) {
			var n = H();
			return z === null ? xs(n, e, t) : Ss(n, z.memoizedState, e, t);
		},
		useTransition: function() {
			var e = zo(Io)[0], t = H().memoizedState;
			return [typeof e == "boolean" ? e : No(e), t];
		},
		useSyncExternalStore: Bo,
		useId: ks,
		useHostTransitionStatus: Os,
		useFormState: as,
		useActionState: as,
		useOptimistic: function(e, t) {
			var n = H();
			return z === null ? (n.baseState = e, [e, n.queue.dispatch]) : qo(n, z, e, t);
		},
		useMemoCache: Fo,
		useCacheRefresh: As
	};
	Hs.useEffectEvent = ps;
	function Us(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : f({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Ws = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = pu(), i = Ka(r);
			i.payload = t, n != null && (i.callback = n), t = qa(e, i, r), t !== null && (hu(t, e, r), Ja(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = pu(), i = Ka(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = qa(e, i, r), t !== null && (hu(t, e, r), Ja(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = pu(), r = Ka(n);
			r.tag = 2, t != null && (r.callback = t), t = qa(e, r, n), t !== null && (hu(t, e, n), Ja(t, e, n));
		}
	};
	function Gs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Or(n, r) || !Or(i, a) : !0;
	}
	function Ks(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ws.enqueueReplaceState(t, t.state, null);
	}
	function qs(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = f({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function Js(e) {
		ti(e);
	}
	function Ys(e) {
		console.error(e);
	}
	function Xs(e) {
		ti(e);
	}
	function Zs(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Qs(e, t, n) {
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
	function $s(e, t, n) {
		return n = Ka(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Zs(e, t);
		}, n;
	}
	function ec(e) {
		return e = Ka(e), e.tag = 3, e;
	}
	function tc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Qs(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Qs(t, n, r), typeof i != "function" && (ru === null ? ru = /* @__PURE__ */ new Set([this]) : ru.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function nc(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && na(t, n, a, !0), n = oo.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13: return so === null ? Du() : n.alternate === null && X === 0 && (X = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Oa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Gu(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Oa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), Gu(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return Gu(e, r, a), Du(), !1;
		}
		if (F) return t = oo.current, t === null ? (r !== Vi && (t = Error(i(423), { cause: r }), Ji(Ci(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Ci(r, n), a = $s(e.stateNode, r, a), Ya(e, a), X !== 4 && (X = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== Vi && (e = Error(i(422), { cause: r }), Ji(Ci(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Ci(o, n), Xl === null ? Xl = [o] : Xl.push(o), X !== 4 && (X = 2), t === null) return !0;
		r = Ci(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = $s(n.stateNode, r, e), Ya(n, e), !1;
				case 1: if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (ru === null || !ru.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = ec(a), tc(a, e, n, r), Ya(n, a), !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var rc = Error(i(461)), ic = !1;
	function ac(e, t, n, r) {
		t.child = e === null ? Ha(t, null, n, r) : Va(t, e.child, n, r);
	}
	function oc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return ia(t), r = wo(e, t, n, o, a, i), s = Oo(), e !== null && !ic ? (ko(e, t, i), Ac(e, t, i)) : (F && s && Fi(t), t.flags |= 1, ac(e, t, r, i), t.child);
	}
	function sc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !mi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, cc(e, t, a, r, i)) : (e = _i(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !jc(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Or : n, n(o, r) && e.ref === t.ref) return Ac(e, t, i);
		}
		return t.flags |= 1, e = hi(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function cc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Or(a, r) && e.ref === t.ref) {
				if (ic = !1, t.pendingProps = r = a, jc(e, i)) e.flags & 131072 && (ic = !0);
				else return t.lanes = e.lanes, Ac(e, t, i);
			}
		}
		return gc(e, t, n, r, i);
	}
	function lc(e, t, n, r) {
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
				return dc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ca(t, a === null ? null : a.cachePool), a === null ? io() : ro(t, a), uo(t);
			else return r = t.lanes = 536870912, dc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ca(t, null), io(), fo(t)) : (Ca(t, a.cachePool), ro(t, a), fo(t), t.memoizedState = null);
		return ac(e, t, i, n), t.child;
	}
	function uc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function dc(e, t, n, r, i) {
		var a = Sa();
		return a = a === null ? null : {
			parent: I._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ca(t, null), io(), uo(t), e !== null && na(e, t, r, !0), t.childLanes = i, null;
	}
	function fc(e, t) {
		return t = Tc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function pc(e, t, n) {
		return Va(t, e.child, null, n), e = fc(t, t.pendingProps), e.flags |= 2, po(t), t.memoizedState = null, e;
	}
	function mc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (F) {
				if (r.mode === "hidden") return e = fc(t, r), t.lanes = 536870912, uc(null, e);
				if (lo(t), (e = P) ? (e = rf(e, Bi), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ai === null ? null : {
						id: ji,
						overflow: Mi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = bi(e), n.return = t, t.child = n, Ri = t, P = null)) : e = null, e === null) throw Hi(t);
				return t.lanes = 536870912, null;
			}
			return fc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (lo(t), a) {
				if (t.flags & 256) t.flags &= -257, t = pc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (ic || na(e, t, n, !1), a = (n & e.childLanes) !== 0, ic || a) {
				if (r = K, r !== null && (s = st(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, ci(e, s), hu(r, e, s), rc;
				Du(), t = pc(e, t, n);
			} else e = o.treeContext, P = cf(s.nextSibling), Ri = t, F = !0, zi = null, Bi = !1, e !== null && Li(t, e), t = fc(t, r), t.flags |= 4096;
			return t;
		}
		return e = hi(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function hc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function gc(e, t, n, r, i) {
		return ia(t), n = wo(e, t, n, r, void 0, i), r = Oo(), e !== null && !ic ? (ko(e, t, i), Ac(e, t, i)) : (F && r && Fi(t), t.flags |= 1, ac(e, t, n, i), t.child);
	}
	function _c(e, t, n, r, i, a) {
		return ia(t), t.updateQueue = null, n = Eo(t, r, n, i), To(e), r = Oo(), e !== null && !ic ? (ko(e, t, a), Ac(e, t, a)) : (F && r && Fi(t), t.flags |= 1, ac(e, t, n, a), t.child);
	}
	function vc(e, t, n, r, i) {
		if (ia(t), t.stateNode === null) {
			var a = di, o = n.contextType;
			typeof o == "object" && o && (a = aa(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Ws, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, Wa(t), o = n.contextType, a.context = typeof o == "object" && o ? aa(o) : di, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Us(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && Ws.enqueueReplaceState(a, a.state, null), Qa(t, r, a, i), Za(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = qs(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = di, typeof u == "object" && u && (o = aa(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && Ks(t, a, r, o), Ua = !1;
			var f = t.memoizedState;
			a.state = f, Qa(t, r, a, i), Za(), l = t.memoizedState, s || f !== l || Ua ? (typeof d == "function" && (Us(t, n, d, r), l = t.memoizedState), (c = Ua || Gs(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, Ga(e, t), o = t.memoizedProps, u = qs(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = di, typeof l == "object" && l && (c = aa(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && Ks(t, a, r, c), Ua = !1, f = t.memoizedState, a.state = f, Qa(t, r, a, i), Za();
			var p = t.memoizedState;
			o !== d || f !== p || Ua || e !== null && e.dependencies !== null && ra(e.dependencies) ? (typeof s == "function" && (Us(t, n, s, r), p = t.memoizedState), (u = Ua || Gs(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && ra(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, hc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = Va(t, e.child, null, i), t.child = Va(t, null, n, i)) : ac(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = Ac(e, t, i), e;
	}
	function yc(e, t, n, r) {
		return Ki(), t.flags |= 256, ac(e, t, n, r), t.child;
	}
	var bc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function xc(e) {
		return {
			baseLanes: e,
			cachePool: wa()
		};
	}
	function Sc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= Jl), e;
	}
	function Cc(e, t, n) {
		var r = t.pendingProps, a = !1, o = !!(t.flags & 128), s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(L.current & 2)), s && (a = !0, t.flags &= -129), s = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (F) {
				if (a ? co(t) : fo(t), (e = P) ? (e = rf(e, Bi), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ai === null ? null : {
						id: ji,
						overflow: Mi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = bi(e), n.return = t, t.child = n, Ri = t, P = null)) : e = null, e === null) throw Hi(t);
				return of(e) ? t.lanes = 32 : t.lanes = 536870912, null;
			}
			var c = r.children;
			return r = r.fallback, a ? (fo(t), a = t.mode, c = Tc({
				mode: "hidden",
				children: c
			}, a), r = vi(r, a, n, null), c.return = t, r.return = t, c.sibling = r, t.child = c, r = t.child, r.memoizedState = xc(n), r.childLanes = Sc(e, s, n), t.memoizedState = bc, uc(null, r)) : (co(t), wc(t, c));
		}
		var l = e.memoizedState;
		if (l !== null && (c = l.dehydrated, c !== null)) {
			if (o) t.flags & 256 ? (co(t), t.flags &= -257, t = Ec(e, t, n)) : t.memoizedState === null ? (fo(t), c = r.fallback, a = t.mode, r = Tc({
				mode: "visible",
				children: r.children
			}, a), c = vi(c, a, n, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, Va(t, e.child, null, n), r = t.child, r.memoizedState = xc(n), r.childLanes = Sc(e, s, n), t.memoizedState = bc, t = uc(null, r)) : (fo(t), t.child = e.child, t.flags |= 128, t = null);
			else if (co(t), of(c)) {
				if (s = c.nextSibling && c.nextSibling.dataset, s) var u = s.dgst;
				s = u, r = Error(i(419)), r.stack = "", r.digest = s, Ji({
					value: r,
					source: null,
					stack: null
				}), t = Ec(e, t, n);
			} else if (ic || na(e, t, n, !1), s = (n & e.childLanes) !== 0, ic || s) {
				if (s = K, s !== null && (r = st(s, n), r !== 0 && r !== l.retryLane)) throw l.retryLane = r, ci(e, r), hu(s, e, r), rc;
				af(c) || Du(), t = Ec(e, t, n);
			} else af(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = l.treeContext, P = cf(c.nextSibling), Ri = t, F = !0, zi = null, Bi = !1, e !== null && Li(t, e), t = wc(t, r.children), t.flags |= 4096);
			return t;
		}
		return a ? (fo(t), c = r.fallback, a = t.mode, l = e.child, u = l.sibling, r = hi(l, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = l.subtreeFlags & 65011712, u === null ? (c = vi(c, a, n, null), c.flags |= 2) : c = hi(u, c), c.return = t, r.return = t, r.sibling = c, t.child = r, uc(null, r), r = t.child, c = e.child.memoizedState, c === null ? c = xc(n) : (a = c.cachePool, a === null ? a = wa() : (l = I._currentValue, a = a.parent === l ? a : {
			parent: l,
			pool: l
		}), c = {
			baseLanes: c.baseLanes | n,
			cachePool: a
		}), r.memoizedState = c, r.childLanes = Sc(e, s, n), t.memoizedState = bc, uc(e.child, r)) : (co(t), n = e.child, e = n.sibling, n = hi(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function wc(e, t) {
		return t = Tc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Tc(e, t) {
		return e = pi(22, e, null, t), e.lanes = 0, e;
	}
	function Ec(e, t, n) {
		return Va(t, e.child, null, n), e = wc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Dc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), ea(e.return, t, n);
	}
	function Oc(e, t, n, r, i, a) {
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
	function kc(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = L.current, s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, A(L, o), ac(e, t, r, n), r = F ? Di : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Dc(e, n, t);
			else if (e.tag === 19) Dc(e, n, t);
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
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && mo(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Oc(t, !1, i, n, a, r);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && mo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				Oc(t, !0, n, null, a, r);
				break;
			case "together":
				Oc(t, !1, null, null, void 0, r);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function Ac(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Gl |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (na(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = hi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = hi(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function jc(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && ra(e)));
	}
	function Mc(e, t, n) {
		switch (t.tag) {
			case 3:
				_e(t, t.stateNode.containerInfo), Qi(t, I, e.memoizedState.cache), Ki();
				break;
			case 27:
			case 5:
				ye(t);
				break;
			case 4:
				_e(t, t.stateNode.containerInfo);
				break;
			case 10:
				Qi(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, lo(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (co(t), e = Ac(e, t, n), e === null ? null : e.sibling) : Cc(e, t, n) : (co(t), t.flags |= 128, null);
				co(t);
				break;
			case 19:
				var i = !!(e.flags & 128);
				if (r = (n & t.childLanes) !== 0, r ||= (na(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return kc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), A(L, L.current), r) break;
				return null;
			case 22: return t.lanes = 0, lc(e, t, n, t.pendingProps);
			case 24: Qi(t, I, e.memoizedState.cache);
		}
		return Ac(e, t, n);
	}
	function Nc(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) ic = !0;
			else {
				if (!jc(e, n) && !(t.flags & 128)) return ic = !1, Mc(e, t, n);
				ic = !!(e.flags & 131072);
			}
		} else ic = !1, F && t.flags & 1048576 && Pi(t, Di, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = ja(t.elementType), t.type = e, typeof e == "function") mi(e) ? (r = qs(e, r), t.tag = 1, t = vc(null, t, e, r, n)) : (t.tag = 0, t = gc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === x) {
								t.tag = 11, t = oc(null, t, e, r, n);
								break a;
							}
							if (a === ee) {
								t.tag = 14, t = sc(null, t, e, r, n);
								break a;
							}
						}
						throw t = se(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return gc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = qs(r, t.pendingProps), vc(e, t, r, a, n);
			case 3:
				a: {
					if (_e(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, Ga(e, t), Qa(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, Qi(t, I, r), r !== o.cache && ta(t, [I], n, !0), Za(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = yc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = Ci(Error(i(424)), t), Ji(a), t = yc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (P = cf(e.firstChild), Ri = t, F = !0, zi = null, Bi = !0, n = Ha(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					} else {
						if (Ki(), r === a) {
							t = Ac(e, t, n);
							break a;
						}
						ac(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return hc(e, t), e === null ? (n = kf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : F || (n = t.type, e = t.pendingProps, r = Bd(he.current).createElement(n), r[ft] = t, r[pt] = e, Pd(r, n, e), N(r), t.stateNode = r) : t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return ye(t), e === null && F && (r = t.stateNode = ff(t.type, t.pendingProps, he.current), Ri = t, Bi = !0, a = P, Zd(t.type) ? (lf = a, P = cf(r.firstChild)) : P = a), ac(e, t, t.pendingProps.children, n), hc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && F && ((a = r = P) && (r = tf(r, t.type, t.pendingProps, Bi), r === null ? a = !1 : (t.stateNode = r, Ri = t, P = cf(r.firstChild), Bi = !1, a = !0)), a || Hi(t)), ye(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, Ud(a, o) ? r = null : s !== null && Ud(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = wo(e, t, Do, null, null, n), Qf._currentValue = a), hc(e, t), ac(e, t, r, n), t.child;
			case 6: return e === null && F && ((e = n = P) && (n = nf(n, t.pendingProps, Bi), n === null ? e = !1 : (t.stateNode = n, Ri = t, P = null, e = !0)), e || Hi(t)), null;
			case 13: return Cc(e, t, n);
			case 4: return _e(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Va(t, null, r, n) : ac(e, t, r, n), t.child;
			case 11: return oc(e, t, t.type, t.pendingProps, n);
			case 7: return ac(e, t, t.pendingProps, n), t.child;
			case 8: return ac(e, t, t.pendingProps.children, n), t.child;
			case 12: return ac(e, t, t.pendingProps.children, n), t.child;
			case 10: return r = t.pendingProps, Qi(t, t.type, r.value), ac(e, t, r.children, n), t.child;
			case 9: return a = t.type._context, r = t.pendingProps.children, ia(t), a = aa(a), r = r(a), t.flags |= 1, ac(e, t, r, n), t.child;
			case 14: return sc(e, t, t.type, t.pendingProps, n);
			case 15: return cc(e, t, t.type, t.pendingProps, n);
			case 19: return kc(e, t, n);
			case 31: return mc(e, t, n);
			case 22: return lc(e, t, n, t.pendingProps);
			case 24: return ia(t), r = aa(I), e === null ? (a = Sa(), a === null && (a = K, o = da(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, Wa(t), Qi(t, I, a)) : ((e.lanes & n) !== 0 && (Ga(e, t), Qa(t, null, null, n), Za()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, Qi(t, I, r), r !== a.cache && ta(t, [I], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Qi(t, I, r))), ac(e, t, t.pendingProps.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function Pc(e) {
		e.flags |= 4;
	}
	function Fc(e, t, n, r, i) {
		if ((t = !!(e.mode & 32)) && (t = !1), t) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (wu()) e.flags |= 8192;
				else throw Ma = Oa, Ea;
			}
		} else e.flags &= -16777217;
	}
	function Ic(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Wf(t)) {
			if (wu()) e.flags |= 8192;
			else throw Ma = Oa, Ea;
		}
	}
	function Lc(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : tt(), e.lanes |= t, Yl |= t);
	}
	function Rc(e, t) {
		if (!F) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function U(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function zc(e, t, n) {
		var r = t.pendingProps;
		switch (Ii(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return U(t), null;
			case 1: return U(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), $i(I), ve(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Gi(t) ? Pc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, qi())), U(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (Pc(t), o === null ? (U(t), Fc(t, a, null, r, n)) : (U(t), Ic(t, o))) : o ? o === e.memoizedState ? (U(t), t.flags &= -16777217) : (Pc(t), U(t), Ic(t, o)) : (e = e.memoizedProps, e !== r && Pc(t), U(t), Fc(t, a, e, r, n)), null;
			case 27:
				if (be(t), n = he.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Pc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return U(t), null;
					}
					e = pe.current, Gi(t) ? Ui(t, e) : (e = ff(a, r, n), t.stateNode = e, Pc(t));
				}
				return U(t), null;
			case 5:
				if (be(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Pc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return U(t), null;
					}
					if (o = pe.current, Gi(t)) Ui(t, o);
					else {
						var s = Bd(he.current);
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
						o[ft] = t, o[pt] = r;
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
						a: switch (Pd(o, a, r), a) {
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
						r && Pc(t);
					}
				}
				return U(t), Fc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && Pc(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = he.current, Gi(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = Ri, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[ft] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Md(e.nodeValue, n)), e || Hi(t, !0);
					} else e = Bd(e).createTextNode(r), e[ft] = t, t.stateNode = e;
				}
				return U(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = Gi(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[ft] = t;
						} else Ki(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						U(t), e = !1;
					} else n = qi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (po(t), t) : (po(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return U(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = Gi(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[ft] = t;
						} else Ki(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						U(t), a = !1;
					} else a = qi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (po(t), t) : (po(t), null);
				}
				return po(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Lc(t, t.updateQueue), U(t), null);
			case 4: return ve(), e === null && Sd(t.stateNode.containerInfo), U(t), null;
			case 10: return $i(t.type), U(t), null;
			case 19:
				if (k(L), r = t.memoizedState, r === null) return U(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) Rc(r, !1);
					else {
						if (X !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = mo(e), o !== null) {
								for (t.flags |= 128, Rc(r, !1), e = o.updateQueue, t.updateQueue = e, Lc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) gi(n, e), n = n.sibling;
								return A(L, L.current & 1 | 2), F && Ni(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && j() > tu && (t.flags |= 128, a = !0, Rc(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = mo(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Lc(t, e), Rc(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !F) return U(t), null;
						} else 2 * j() - r.renderingStartTime > tu && n !== 536870912 && (t.flags |= 128, a = !0, Rc(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				return r.tail === null ? (U(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = j(), e.sibling = null, n = L.current, A(L, a ? n & 1 | 2 : n & 1), F && Ni(t, r.treeForkCount), e);
			case 22:
			case 23: return po(t), ao(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (U(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : U(t), n = t.updateQueue, n !== null && Lc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && k(xa), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), $i(I), U(t), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(i(156, t.tag));
	}
	function Bc(e, t) {
		switch (Ii(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return $i(I), ve(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return be(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (po(t), t.alternate === null) throw Error(i(340));
					Ki();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (po(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					Ki();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return k(L), null;
			case 4: return ve(), null;
			case 10: return $i(t.type), null;
			case 22:
			case 23: return po(t), ao(), e !== null && k(xa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return $i(I), null;
			case 25: return null;
			default: return null;
		}
	}
	function Vc(e, t) {
		switch (Ii(t), t.tag) {
			case 3:
				$i(I), ve();
				break;
			case 26:
			case 27:
			case 5:
				be(t);
				break;
			case 4:
				ve();
				break;
			case 31:
				t.memoizedState !== null && po(t);
				break;
			case 13:
				po(t);
				break;
			case 19:
				k(L);
				break;
			case 10:
				$i(t.type);
				break;
			case 22:
			case 23:
				po(t), ao(), e !== null && k(xa);
				break;
			case 24: $i(I);
		}
	}
	function Hc(e, t) {
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
	function Uc(e, t, n) {
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
	function Wc(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				eo(t, n);
			} catch (t) {
				Z(e, e.return, t);
			}
		}
	}
	function Gc(e, t, n) {
		n.props = qs(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Z(e, t, n);
		}
	}
	function Kc(e, t) {
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
	function qc(e, t) {
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
	function Jc(e) {
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
	function Yc(e, t, n) {
		try {
			var r = e.stateNode;
			Fd(r, e.type, n, t), r[pt] = t;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Xc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zd(e.type) || e.tag === 4;
	}
	function Zc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Xc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Zd(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Qc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = an));
		else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (Qc(e, t, n), e = e.sibling; e !== null;) Qc(e, t, n), e = e.sibling;
	}
	function $c(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode), e = e.child, e !== null)) for ($c(e, t, n), e = e.sibling; e !== null;) $c(e, t, n), e = e.sibling;
	}
	function el(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			Pd(t, r, n), t[ft] = e, t[pt] = n;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	var tl = !1, nl = !1, rl = !1, il = typeof WeakSet == "function" ? WeakSet : Set, al = null;
	function ol(e, t) {
		if (e = e.containerInfo, Rd = sp, e = Mr(e), Nr(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var a = r.anchorOffset, o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === a && (c = s), p === o && ++d === r && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (zd = {
			focusedElem: e,
			selectionRange: n
		}, sp = !1, al = t; al !== null;) if (t = al, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, al = e;
		else for (; al !== null;) {
			switch (t = al, o = t.alternate, e = t.flags, t.tag) {
				case 0:
					if (e & 4 && (e = t.updateQueue, e = e === null ? null : e.events, e !== null)) for (n = 0; n < e.length; n++) a = e[n], a.ref.impl = a.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (e & 1024 && o !== null) {
						e = void 0, n = t, a = o.memoizedProps, o = o.memoizedState, r = n.stateNode;
						try {
							var h = qs(n.type, a);
							e = r.getSnapshotBeforeUpdate(h, o), r.__reactInternalSnapshotBeforeUpdate = e;
						} catch (e) {
							Z(n, n.return, e);
						}
					}
					break;
				case 3:
					if (e & 1024) {
						if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) ef(e);
						else if (n === 1) switch (e.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								ef(e);
								break;
							default: e.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (e & 1024) throw Error(i(163));
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, al = e;
				break;
			}
			al = t.return;
		}
	}
	function sl(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				xl(e, n), r & 4 && Hc(5, n);
				break;
			case 1:
				if (xl(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						Z(n, n.return, e);
					}
					else {
						var i = qs(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							Z(n, n.return, e);
						}
					}
				}
				r & 64 && Wc(n), r & 512 && Kc(n, n.return);
				break;
			case 3:
				if (xl(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						eo(e, t);
					} catch (e) {
						Z(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && el(n);
			case 26:
			case 5:
				xl(e, n), t === null && r & 4 && Jc(n), r & 512 && Kc(n, n.return);
				break;
			case 12:
				xl(e, n);
				break;
			case 31:
				xl(e, n), r & 4 && fl(e, n);
				break;
			case 13:
				xl(e, n), r & 4 && pl(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Ju.bind(null, n), sf(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || tl, !r) {
					t = t !== null && t.memoizedState !== null || nl, i = tl;
					var a = nl;
					tl = r, (nl = t) && !a ? Cl(e, n, !!(n.subtreeFlags & 8772)) : xl(e, n), tl = i, nl = a;
				}
				break;
			case 30: break;
			default: xl(e, n);
		}
	}
	function cl(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, cl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && bt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var W = null, ll = !1;
	function ul(e, t, n) {
		for (n = n.child; n !== null;) dl(e, t, n), n = n.sibling;
	}
	function dl(e, t, n) {
		if (He && typeof He.onCommitFiberUnmount == "function") try {
			He.onCommitFiberUnmount(Ve, n);
		} catch {}
		switch (n.tag) {
			case 26:
				nl || qc(n, t), ul(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				nl || qc(n, t);
				var r = W, i = ll;
				Zd(n.type) && (W = n.stateNode, ll = !1), ul(e, t, n), pf(n.stateNode), W = r, ll = i;
				break;
			case 5: nl || qc(n, t);
			case 6:
				if (r = W, i = ll, W = null, ul(e, t, n), W = r, ll = i, W !== null) {
					if (ll) try {
						(W.nodeType === 9 ? W.body : W.nodeName === "HTML" ? W.ownerDocument.body : W).removeChild(n.stateNode);
					} catch (e) {
						Z(n, t, e);
					}
					else try {
						W.removeChild(n.stateNode);
					} catch (e) {
						Z(n, t, e);
					}
				}
				break;
			case 18:
				W !== null && (ll ? (e = W, Qd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Np(e)) : Qd(W, n.stateNode));
				break;
			case 4:
				r = W, i = ll, W = n.stateNode.containerInfo, ll = !0, ul(e, t, n), W = r, ll = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Uc(2, n, t), nl || Uc(4, n, t), ul(e, t, n);
				break;
			case 1:
				nl || (qc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Gc(n, t, r)), ul(e, t, n);
				break;
			case 21:
				ul(e, t, n);
				break;
			case 22:
				nl = (r = nl) || n.memoizedState !== null, ul(e, t, n), nl = r;
				break;
			default: ul(e, t, n);
		}
	}
	function fl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Np(e);
			} catch (e) {
				Z(t, t.return, e);
			}
		}
	}
	function pl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Np(e);
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function ml(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new il()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new il()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function hl(e, t) {
		var n = ml(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = Yu.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function gl(e, t) {
		var n = t.deletions;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var a = n[r], o = e, s = t, c = s;
			a: for (; c !== null;) {
				switch (c.tag) {
					case 27:
						if (Zd(c.type)) {
							W = c.stateNode, ll = !1;
							break a;
						}
						break;
					case 5:
						W = c.stateNode, ll = !1;
						break a;
					case 3:
					case 4:
						W = c.stateNode.containerInfo, ll = !0;
						break a;
				}
				c = c.return;
			}
			if (W === null) throw Error(i(160));
			dl(o, s, a), W = null, ll = !1, o = a.alternate, o !== null && (o.return = null), a.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) vl(t, e), t = t.sibling;
	}
	var _l = null;
	function vl(e, t) {
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				gl(t, e), yl(e), r & 4 && (Uc(3, e, e.return), Hc(3, e), Uc(5, e, e.return));
				break;
			case 1:
				gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), r & 64 && tl && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
				break;
			case 26:
				var a = _l;
				if (gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), r & 4) {
					var o = n === null ? null : n.memoizedState;
					if (r = e.memoizedState, n === null) {
						if (r === null) {
							if (e.stateNode === null) {
								a: {
									r = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
									b: switch (r) {
										case "title":
											o = a.getElementsByTagName("title")[0], (!o || o[yt] || o[ft] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = a.createElement(r), a.head.insertBefore(o, a.querySelector("head > title"))), Pd(o, r, n), o[ft] = e, N(o), r = o;
											break a;
										case "link":
											var s = Vf("link", "href", a).get(r + (n.href || ""));
											if (s) {
												for (var c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
													s.splice(c, 1);
													break b;
												}
											}
											o = a.createElement(r), Pd(o, r, n), a.head.appendChild(o);
											break;
										case "meta":
											if (s = Vf("meta", "content", a).get(r + (n.content || ""))) {
												for (c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
													s.splice(c, 1);
													break b;
												}
											}
											o = a.createElement(r), Pd(o, r, n), a.head.appendChild(o);
											break;
										default: throw Error(i(468, r));
									}
									o[ft] = e, N(o), r = o;
								}
								e.stateNode = r;
							} else Hf(a, e.type, e.stateNode);
						} else e.stateNode = If(a, r, e.memoizedProps);
					} else o === r ? r === null && e.stateNode !== null && Yc(e, e.memoizedProps, n.memoizedProps) : (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, r === null ? Hf(a, e.type, e.stateNode) : If(a, r, e.memoizedProps));
				}
				break;
			case 27:
				gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), n !== null && r & 4 && Yc(e, e.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), e.flags & 32) {
					a = e.stateNode;
					try {
						Xt(a, "");
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				r & 4 && e.stateNode != null && (a = e.memoizedProps, Yc(e, a, n === null ? a : n.memoizedProps)), r & 1024 && (rl = !0);
				break;
			case 6:
				if (gl(t, e), yl(e), r & 4) {
					if (e.stateNode === null) throw Error(i(162));
					r = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = r;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Bf = null, a = _l, _l = gf(t.containerInfo), gl(t, e), _l = a, yl(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					Np(t.containerInfo);
				} catch (t) {
					Z(e, e.return, t);
				}
				rl && (rl = !1, bl(e));
				break;
			case 4:
				r = _l, _l = gf(e.stateNode.containerInfo), gl(t, e), yl(e), _l = r;
				break;
			case 12:
				gl(t, e), yl(e);
				break;
			case 31:
				gl(t, e), yl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, hl(e, r)));
				break;
			case 13:
				gl(t, e), yl(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && ($l = j()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, hl(e, r)));
				break;
			case 22:
				a = e.memoizedState !== null;
				var l = n !== null && n.memoizedState !== null, u = tl, d = nl;
				if (tl = u || a, nl = d || l, gl(t, e), nl = d, tl = u, yl(e), r & 8192) a: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || l || tl || nl || Sl(e)), n = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (n === null) {
							l = n = t;
							try {
								if (o = l.stateNode, a) s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
								else {
									c = l.stateNode;
									var f = l.memoizedProps.style, p = f != null && f.hasOwnProperty("display") ? f.display : null;
									c.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
								}
							} catch (e) {
								Z(l, l.return, e);
							}
						}
					} else if (t.tag === 6) {
						if (n === null) {
							l = t;
							try {
								l.stateNode.nodeValue = a ? "" : l.memoizedProps;
							} catch (e) {
								Z(l, l.return, e);
							}
						}
					} else if (t.tag === 18) {
						if (n === null) {
							l = t;
							try {
								var m = l.stateNode;
								a ? $d(m, !0) : $d(l.stateNode, !1);
							} catch (e) {
								Z(l, l.return, e);
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === e) break a;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break a;
						n === t && (n = null), t = t.return;
					}
					n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
				}
				r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, hl(e, n))));
				break;
			case 19:
				gl(t, e), yl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, hl(e, r)));
				break;
			case 30: break;
			case 21: break;
			default: gl(t, e), yl(e);
		}
	}
	function yl(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Xc(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var a = n.stateNode;
						$c(e, Zc(e), a);
						break;
					case 5:
						var o = n.stateNode;
						n.flags & 32 && (Xt(o, ""), n.flags &= -33), $c(e, Zc(e), o);
						break;
					case 3:
					case 4:
						var s = n.stateNode.containerInfo;
						Qc(e, Zc(e), s);
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
	function bl(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			bl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
		}
	}
	function xl(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) sl(e, t.alternate, t), t = t.sibling;
	}
	function Sl(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Uc(4, t, t.return), Sl(t);
					break;
				case 1:
					qc(t, t.return);
					var n = t.stateNode;
					typeof n.componentWillUnmount == "function" && Gc(t, t.return, n), Sl(t);
					break;
				case 27: pf(t.stateNode);
				case 26:
				case 5:
					qc(t, t.return), Sl(t);
					break;
				case 22:
					t.memoizedState === null && Sl(t);
					break;
				case 30:
					Sl(t);
					break;
				default: Sl(t);
			}
			e = e.sibling;
		}
	}
	function Cl(e, t, n) {
		for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Cl(i, a, n), Hc(4, a);
					break;
				case 1:
					if (Cl(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Z(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var s = r.stateNode;
						try {
							var c = i.shared.hiddenCallbacks;
							if (c !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) $a(c[i], s);
						} catch (e) {
							Z(r, r.return, e);
						}
					}
					n && o & 64 && Wc(a), Kc(a, a.return);
					break;
				case 27: el(a);
				case 26:
				case 5:
					Cl(i, a, n), n && r === null && o & 4 && Jc(a), Kc(a, a.return);
					break;
				case 12:
					Cl(i, a, n);
					break;
				case 31:
					Cl(i, a, n), n && o & 4 && fl(i, a);
					break;
				case 13:
					Cl(i, a, n), n && o & 4 && pl(i, a);
					break;
				case 22:
					a.memoizedState === null && Cl(i, a, n), Kc(a, a.return);
					break;
				case 30: break;
				default: Cl(i, a, n);
			}
			t = t.sibling;
		}
	}
	function wl(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && fa(n));
	}
	function Tl(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && fa(e));
	}
	function El(e, t, n, r) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) Dl(e, t, n, r), t = t.sibling;
	}
	function Dl(e, t, n, r) {
		var i = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				El(e, t, n, r), i & 2048 && Hc(9, t);
				break;
			case 1:
				El(e, t, n, r);
				break;
			case 3:
				El(e, t, n, r), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && fa(e)));
				break;
			case 12:
				if (i & 2048) {
					El(e, t, n, r), e = t.stateNode;
					try {
						var a = t.memoizedProps, o = a.id, s = a.onPostCommit;
						typeof s == "function" && s(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
					} catch (e) {
						Z(t, t.return, e);
					}
				} else El(e, t, n, r);
				break;
			case 31:
				El(e, t, n, r);
				break;
			case 13:
				El(e, t, n, r);
				break;
			case 23: break;
			case 22:
				a = t.stateNode, o = t.alternate, t.memoizedState === null ? a._visibility & 2 ? El(e, t, n, r) : (a._visibility |= 2, Ol(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)) : a._visibility & 2 ? El(e, t, n, r) : kl(e, t), i & 2048 && wl(o, t);
				break;
			case 24:
				El(e, t, n, r), i & 2048 && Tl(t.alternate, t);
				break;
			default: El(e, t, n, r);
		}
	}
	function Ol(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Ol(a, o, s, c, i), Hc(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Ol(a, o, s, c, i)) : u._visibility & 2 ? Ol(a, o, s, c, i) : kl(a, o), i && l & 2048 && wl(o.alternate, o);
					break;
				case 24:
					Ol(a, o, s, c, i), i && l & 2048 && Tl(o.alternate, o);
					break;
				default: Ol(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function kl(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					kl(n, r), i & 2048 && wl(r.alternate, r);
					break;
				case 24:
					kl(n, r), i & 2048 && Tl(r.alternate, r);
					break;
				default: kl(n, r);
			}
			t = t.sibling;
		}
	}
	var Al = 8192;
	function jl(e, t, n) {
		if (e.subtreeFlags & Al) for (e = e.child; e !== null;) Ml(e, t, n), e = e.sibling;
	}
	function Ml(e, t, n) {
		switch (e.tag) {
			case 26:
				jl(e, t, n), e.flags & Al && e.memoizedState !== null && Gf(n, _l, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				jl(e, t, n);
				break;
			case 3:
			case 4:
				var r = _l;
				_l = gf(e.stateNode.containerInfo), jl(e, t, n), _l = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Al, Al = 16777216, jl(e, t, n), Al = r) : jl(e, t, n));
				break;
			default: jl(e, t, n);
		}
	}
	function Nl(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Pl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				al = r, Ll(r, e);
			}
			Nl(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Fl(e), e = e.sibling;
	}
	function Fl(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Pl(e), e.flags & 2048 && Uc(9, e, e.return);
				break;
			case 3:
				Pl(e);
				break;
			case 12:
				Pl(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Il(e)) : Pl(e);
				break;
			default: Pl(e);
		}
	}
	function Il(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				al = r, Ll(r, e);
			}
			Nl(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					Uc(8, t, t.return), Il(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Il(t));
					break;
				default: Il(t);
			}
			e = e.sibling;
		}
	}
	function Ll(e, t) {
		for (; al !== null;) {
			var n = al;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Uc(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: fa(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, al = r;
			else a: for (n = e; al !== null;) {
				r = al;
				var i = r.sibling, a = r.return;
				if (cl(r), r === n) {
					al = null;
					break a;
				}
				if (i !== null) {
					i.return = a, al = i;
					break a;
				}
				al = a;
			}
		}
	}
	var Rl = {
		getCacheForType: function(e) {
			var t = aa(I), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return aa(I).controller.signal;
		}
	}, zl = typeof WeakMap == "function" ? WeakMap : Map, G = 0, K = null, q = null, J = 0, Y = 0, Bl = null, Vl = !1, Hl = !1, Ul = !1, Wl = 0, X = 0, Gl = 0, Kl = 0, ql = 0, Jl = 0, Yl = 0, Xl = null, Zl = null, Ql = !1, $l = 0, eu = 0, tu = Infinity, nu = null, ru = null, iu = 0, au = null, ou = null, su = 0, cu = 0, lu = null, uu = null, du = 0, fu = null;
	function pu() {
		return G & 2 && J !== 0 ? J & -J : D.T === null ? lt() : dd();
	}
	function mu() {
		if (Jl === 0) {
			if (!(J & 536870912) || F) {
				var e = Ye;
				Ye <<= 1, !(Ye & 3932160) && (Ye = 262144), Jl = e;
			} else Jl = 536870912;
		}
		return e = oo.current, e !== null && (e.flags |= 32), Jl;
	}
	function hu(e, t, n) {
		(e === K && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) && (Su(e, 0), yu(e, J, Jl, !1)), rt(e, n), (!(G & 2) || e !== K) && (e === K && (!(G & 2) && (Kl |= n), X === 4 && yu(e, J, Jl, !1)), rd(e));
	}
	function gu(e, t, n) {
		if (G & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || $e(e, t), a = r ? Au(e, t) : Ou(e, t, !0), o = r;
		do {
			if (a === 0) {
				Hl && !r && yu(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !vu(n)) {
				a = Ou(e, t, !1), o = !1;
				continue;
			}
			if (a === 2) {
				if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
				else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
				if (s !== 0) {
					t = s;
					a: {
						var c = e;
						a = Xl;
						var l = c.current.memoizedState.isDehydrated;
						if (l && (Su(c, s).flags |= 256), s = Ou(c, s, !1), s !== 2) {
							if (Ul && !l) {
								c.errorRecoveryDisabledLanes |= o, Kl |= o, a = 4;
								break a;
							}
							o = Zl, Zl = a, o !== null && (Zl === null ? Zl = o : Zl.push.apply(Zl, o));
						}
						a = s;
					}
					if (o = !1, a !== 2) continue;
				}
			}
			if (a === 1) {
				Su(e, 0), yu(e, t, 0, !0);
				break;
			}
			a: {
				switch (r = e, o = a, o) {
					case 0:
					case 1: throw Error(i(345));
					case 4: if ((t & 4194048) !== t) break;
					case 6:
						yu(r, t, Jl, !Vl);
						break a;
					case 2:
						Zl = null;
						break;
					case 3:
					case 5: break;
					default: throw Error(i(329));
				}
				if ((t & 62914560) === t && (a = $l + 300 - j(), 10 < a)) {
					if (yu(r, t, Jl, !Vl), Qe(r, 0, !0) !== 0) break a;
					su = t, r.timeoutHandle = Kd(_u.bind(null, r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Vl, o, "Throttled", -0, 0), a);
					break a;
				}
				_u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Vl, o, null, -0, 0);
			}
			break;
		} while (1);
		rd(e);
	}
	function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		if (e.timeoutHandle = -1, d = t.subtreeFlags, d & 8192 || (d & 16785408) == 16785408) {
			d = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: an
			}, Ml(t, a, d);
			var m = (a & 62914560) === a ? $l - j() : (a & 4194048) === a ? eu - j() : 0;
			if (m = qf(d, m), m !== null) {
				su = a, e.cancelPendingCommit = m(Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)), yu(e, a, o, !l);
				return;
			}
		}
		Lu(e, t, a, n, r, i, o, s, c);
	}
	function vu(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Dr(a(), i)) return !1;
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
	function yu(e, t, n, r) {
		t &= ~ql, t &= ~Kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - We(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && at(e, n, t);
	}
	function bu() {
		return G & 6 ? !0 : (id(0, !1), !1);
	}
	function xu() {
		if (q !== null) {
			if (Y === 0) var e = q.return;
			else e = q, Zi = Xi = null, Ao(e), Fa = null, Ia = 0, e = q;
			for (; e !== null;) Vc(e.alternate, e), e = e.return;
			q = null;
		}
	}
	function Su(e, t) {
		var n = e.timeoutHandle;
		n !== -1 && (e.timeoutHandle = -1, qd(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), su = 0, xu(), K = e, q = n = hi(e.current, null), J = t, Y = 0, Bl = null, Vl = !1, Hl = $e(e, t), Ul = !1, Yl = Jl = ql = Kl = Gl = X = 0, Zl = Xl = null, Ql = !1, t & 8 && (t |= t & 32);
		var r = e.entangledLanes;
		if (r !== 0) for (e = e.entanglements, r &= t; 0 < r;) {
			var i = 31 - We(r), a = 1 << i;
			t |= e[i], r &= ~a;
		}
		return Wl = t, ai(), n;
	}
	function Cu(e, t) {
		R = null, D.H = zs, t === Ta || t === Da ? (t = Na(), Y = 3) : t === Ea ? (t = Na(), Y = 4) : Y = t === rc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, Bl = t, q === null && (X = 1, Zs(e, Ci(t, e.current)));
	}
	function wu() {
		var e = oo.current;
		return e === null ? !0 : (J & 4194048) === J ? so === null : (J & 62914560) === J || J & 536870912 ? e === so : !1;
	}
	function Tu() {
		var e = D.H;
		return D.H = zs, e === null ? zs : e;
	}
	function Eu() {
		var e = D.A;
		return D.A = Rl, e;
	}
	function Du() {
		X = 4, Vl || (J & 4194048) !== J && oo.current !== null || (Hl = !0), !(Gl & 134217727) && !(Kl & 134217727) || K === null || yu(K, J, Jl, !1);
	}
	function Ou(e, t, n) {
		var r = G;
		G |= 2;
		var i = Tu(), a = Eu();
		(K !== e || J !== t) && (nu = null, Su(e, t)), t = !1;
		var o = X;
		a: do
			try {
				if (Y !== 0 && q !== null) {
					var s = q, c = Bl;
					switch (Y) {
						case 8:
							xu(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							oo.current === null && (t = !0);
							var l = Y;
							if (Y = 0, Bl = null, Pu(e, s, c, l), n && Hl) {
								o = 0;
								break a;
							}
							break;
						default: l = Y, Y = 0, Bl = null, Pu(e, s, c, l);
					}
				}
				ku(), o = X;
				break;
			} catch (t) {
				Cu(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, Zi = Xi = null, G = r, D.H = i, D.A = a, q === null && (K = null, J = 0, ai()), o;
	}
	function ku() {
		for (; q !== null;) Mu(q);
	}
	function Au(e, t) {
		var n = G;
		G |= 2;
		var r = Tu(), a = Eu();
		K !== e || J !== t ? (nu = null, tu = j() + 500, Su(e, t)) : Hl = $e(e, t);
		a: do
			try {
				if (Y !== 0 && q !== null) {
					t = q;
					var o = Bl;
					b: switch (Y) {
						case 1:
							Y = 0, Bl = null, Pu(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (ka(o)) {
								Y = 0, Bl = null, Nu(t);
								break;
							}
							t = function() {
								Y !== 2 && Y !== 9 || K !== e || (Y = 7), rd(e);
							}, o.then(t, t);
							break a;
						case 3:
							Y = 7;
							break a;
						case 4:
							Y = 5;
							break a;
						case 7:
							ka(o) ? (Y = 0, Bl = null, Nu(t)) : (Y = 0, Bl = null, Pu(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (q.tag) {
								case 26: s = q.memoizedState;
								case 5:
								case 27:
									var c = q;
									if (s ? Wf(s) : c.stateNode.complete) {
										Y = 0, Bl = null;
										var l = c.sibling;
										if (l !== null) q = l;
										else {
											var u = c.return;
											u === null ? q = null : (q = u, Fu(u));
										}
										break b;
									}
							}
							Y = 0, Bl = null, Pu(e, t, o, 5);
							break;
						case 6:
							Y = 0, Bl = null, Pu(e, t, o, 6);
							break;
						case 8:
							xu(), X = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				ju();
				break;
			} catch (t) {
				Cu(e, t);
			}
		while (1);
		return Zi = Xi = null, D.H = r, D.A = a, G = n, q === null ? (K = null, J = 0, ai(), X) : 0;
	}
	function ju() {
		for (; q !== null && !je();) Mu(q);
	}
	function Mu(e) {
		var t = Nc(e.alternate, e, Wl);
		e.memoizedProps = e.pendingProps, t === null ? Fu(e) : q = t;
	}
	function Nu(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = _c(n, t, t.pendingProps, t.type, void 0, J);
				break;
			case 11:
				t = _c(n, t, t.pendingProps, t.type.render, t.ref, J);
				break;
			case 5: Ao(t);
			default: Vc(n, t), t = q = gi(t, Wl), t = Nc(n, t, Wl);
		}
		e.memoizedProps = e.pendingProps, t === null ? Fu(e) : q = t;
	}
	function Pu(e, t, n, r) {
		Zi = Xi = null, Ao(t), Fa = null, Ia = 0;
		var i = t.return;
		try {
			if (nc(e, i, t, n, J)) {
				X = 1, Zs(e, Ci(n, e.current)), q = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw q = i, t;
			X = 1, Zs(e, Ci(n, e.current)), q = null;
			return;
		}
		t.flags & 32768 ? (F || r === 1 ? e = !0 : Hl || J & 536870912 ? e = !1 : (Vl = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = oo.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Iu(t, e)) : Fu(t);
	}
	function Fu(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				Iu(t, Vl);
				return;
			}
			e = t.return;
			var n = zc(t.alternate, t, Wl);
			if (n !== null) {
				q = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				q = t;
				return;
			}
			q = t = e;
		} while (t !== null);
		X === 0 && (X = 5);
	}
	function Iu(e, t) {
		do {
			var n = Bc(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, q = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				q = e;
				return;
			}
			q = e = n;
		} while (e !== null);
		X = 6, q = null;
	}
	function Lu(e, t, n, r, a, o, s, c, l) {
		e.cancelPendingCommit = null;
		do
			Hu();
		while (iu !== 0);
		if (G & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			if (o = t.lanes | t.childLanes, o |= ii, it(e, n, o, s, c, l), e === K && (q = K = null, J = 0), ou = t, au = e, su = n, cu = o, lu = a, uu = r, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Xu(Ie, function() {
				return Uu(), null;
			})) : (e.callbackNode = null, e.callbackPriority = 0), r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
				r = D.T, D.T = null, a = O.p, O.p = 2, s = G, G |= 4;
				try {
					ol(e, t, n);
				} finally {
					G = s, O.p = a, D.T = r;
				}
			}
			iu = 1, Ru(), zu(), Bu();
		}
	}
	function Ru() {
		if (iu === 1) {
			iu = 0;
			var e = au, t = ou, n = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || n) {
				n = D.T, D.T = null;
				var r = O.p;
				O.p = 2;
				var i = G;
				G |= 4;
				try {
					vl(t, e);
					var a = zd, o = Mr(e.containerInfo), s = a.focusedElem, c = a.selectionRange;
					if (o !== s && s && s.ownerDocument && jr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Nr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Ar(s, h), v = Ar(s, g);
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
					sp = !!Rd, zd = Rd = null;
				} finally {
					G = i, O.p = r, D.T = n;
				}
			}
			e.current = t, iu = 2;
		}
	}
	function zu() {
		if (iu === 2) {
			iu = 0;
			var e = au, t = ou, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = D.T, D.T = null;
				var r = O.p;
				O.p = 2;
				var i = G;
				G |= 4;
				try {
					sl(e, t.alternate, t);
				} finally {
					G = i, O.p = r, D.T = n;
				}
			}
			iu = 3;
		}
	}
	function Bu() {
		if (iu === 4 || iu === 3) {
			iu = 0, Me();
			var e = au, t = ou, n = su, r = uu;
			t.subtreeFlags & 10256 || t.flags & 10256 ? iu = 5 : (iu = 0, ou = au = null, Vu(e, e.pendingLanes));
			var i = e.pendingLanes;
			if (i === 0 && (ru = null), M(n), t = t.stateNode, He && typeof He.onCommitFiberRoot == "function") try {
				He.onCommitFiberRoot(Ve, t, void 0, (t.current.flags & 128) == 128);
			} catch {}
			if (r !== null) {
				t = D.T, i = O.p, O.p = 2, D.T = null;
				try {
					for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
						var s = r[o];
						a(s.value, { componentStack: s.stack });
					}
				} finally {
					D.T = t, O.p = i;
				}
			}
			su & 3 && Hu(), rd(e), i = e.pendingLanes, n & 261930 && i & 42 ? e === fu ? du++ : (du = 0, fu = e) : du = 0, id(0, !1);
		}
	}
	function Vu(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, fa(t)));
	}
	function Hu() {
		return Ru(), zu(), Bu(), Uu();
	}
	function Uu() {
		if (iu !== 5) return !1;
		var e = au, t = cu;
		cu = 0;
		var n = M(su), r = D.T, a = O.p;
		try {
			O.p = 32 > n ? 32 : n, D.T = null, n = lu, lu = null;
			var o = au, s = su;
			if (iu = 0, ou = au = null, su = 0, G & 6) throw Error(i(331));
			var c = G;
			if (G |= 4, Fl(o.current), Dl(o, o.current, s, n), G = c, id(0, !1), He && typeof He.onPostCommitFiberRoot == "function") try {
				He.onPostCommitFiberRoot(Ve, o);
			} catch {}
			return !0;
		} finally {
			O.p = a, D.T = r, Vu(e, t);
		}
	}
	function Wu(e, t, n) {
		t = Ci(n, t), t = $s(e.stateNode, t, 2), e = qa(e, t, 2), e !== null && (rt(e, 2), rd(e));
	}
	function Z(e, t, n) {
		if (e.tag === 3) Wu(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Wu(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ru === null || !ru.has(r))) {
					e = Ci(n, e), n = ec(2), r = qa(t, n, 2), r !== null && (tc(n, r, t, e), rt(r, 2), rd(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function Gu(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new zl();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (Ul = !0, i.add(n), e = Ku.bind(null, e, t, n), t.then(e, e));
	}
	function Ku(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, K === e && (J & n) === n && (X === 4 || X === 3 && (J & 62914560) === J && 300 > j() - $l ? !(G & 2) && Su(e, 0) : ql |= n, Yl === J && (Yl = 0)), rd(e);
	}
	function qu(e, t) {
		t === 0 && (t = tt()), e = ci(e, t), e !== null && (rt(e, t), rd(e));
	}
	function Ju(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), qu(e, n);
	}
	function Yu(e, t) {
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
		r !== null && r.delete(t), qu(e, n);
	}
	function Xu(e, t) {
		return ke(e, t);
	}
	var Zu = null, Qu = null, $u = !1, ed = !1, td = !1, nd = 0;
	function rd(e) {
		e !== Qu && e.next === null && (Qu === null ? Zu = Qu = e : Qu = Qu.next = e), ed = !0, $u || ($u = !0, ud());
	}
	function id(e, t) {
		if (!td && ed) {
			td = !0;
			do
				for (var n = !1, r = Zu; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - We(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, ld(r, a));
						} else a = J, a = Qe(r, r === K ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || $e(r, a) || (n = !0, ld(r, a));
					}
					r = r.next;
				}
			while (n);
			td = !1;
		}
	}
	function ad() {
		od();
	}
	function od() {
		ed = $u = !1;
		var e = 0;
		nd !== 0 && Gd() && (e = nd);
		for (var t = j(), n = null, r = Zu; r !== null;) {
			var i = r.next, a = sd(r, t);
			a === 0 ? (r.next = null, n === null ? Zu = i : n.next = i, i === null && (Qu = n)) : (n = r, (e !== 0 || a & 3) && (ed = !0)), r = i;
		}
		iu !== 0 && iu !== 5 || id(e, !1), nd !== 0 && (nd = 0);
	}
	function sd(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - We(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = et(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = K, n = J, n = Qe(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ae(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || $e(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Ae(r), M(n)) {
				case 2:
				case 8:
					n = Fe;
					break;
				case 32:
					n = Ie;
					break;
				case 268435456:
					n = Re;
					break;
				default: n = Ie;
			}
			return r = cd.bind(null, e), n = ke(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Ae(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function cd(e, t) {
		if (iu !== 0 && iu !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (Hu() && e.callbackNode !== n) return null;
		var r = J;
		return r = Qe(e, e === K ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (gu(e, r, t), sd(e, j()), e.callbackNode != null && e.callbackNode === n ? cd.bind(null, e) : null);
	}
	function ld(e, t) {
		if (Hu()) return null;
		gu(e, t, !0);
	}
	function ud() {
		Yd(function() {
			G & 6 ? ke(Pe, ad) : od();
		});
	}
	function dd() {
		if (nd === 0) {
			var e = ha;
			e === 0 && (e = Je, Je <<= 1, !(Je & 261888) && (Je = 256)), nd = e;
		}
		return nd;
	}
	function fd(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : rn("" + e);
	}
	function pd(e, t) {
		var n = t.ownerDocument.createElement("input");
		return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
	}
	function md(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = fd((i[pt] || null).action), o = r.submitter;
			o && (t = (t = o[pt] || null) ? fd(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new En("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (nd !== 0) {
								var e = o ? pd(i, o) : new FormData(i);
								Ts(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = o ? pd(i, o) : new FormData(i), Ts(n, {
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
	for (var hd = 0; hd < $r.length; hd++) {
		var gd = $r[hd];
		ei(gd.toLowerCase(), "on" + (gd[0].toUpperCase() + gd.slice(1)));
	}
	ei(Gr, "onAnimationEnd"), ei(Kr, "onAnimationIteration"), ei(qr, "onAnimationStart"), ei("dblclick", "onDoubleClick"), ei("focusin", "onFocus"), ei("focusout", "onBlur"), ei(Jr, "onTransitionRun"), ei(Yr, "onTransitionStart"), ei(Xr, "onTransitionCancel"), ei(Zr, "onTransitionEnd"), Ot("onMouseEnter", ["mouseout", "mouseover"]), Ot("onMouseLeave", ["mouseout", "mouseover"]), Ot("onPointerEnter", ["pointerout", "pointerover"]), Ot("onPointerLeave", ["pointerout", "pointerover"]), Dt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Dt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Dt("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Dt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Dt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Dt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var _d = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vd = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_d));
	function yd(e, t) {
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
						ti(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						ti(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Q(e, t) {
		var n = t[ht];
		n === void 0 && (n = t[ht] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Cd(t, e, 2, !1), n.add(r));
	}
	function bd(e, t, n) {
		var r = 0;
		t && (r |= 4), Cd(n, e, r, t);
	}
	var xd = "_reactListening" + Math.random().toString(36).slice(2);
	function Sd(e) {
		if (!e[xd]) {
			e[xd] = !0, Tt.forEach(function(t) {
				t !== "selectionchange" && (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[xd] || (t[xd] = !0, bd("selectionchange", !1, t));
		}
	}
	function Cd(e, t, n, r) {
		switch (mp(t)) {
			case 2:
				var i = cp;
				break;
			case 8:
				i = lp;
				break;
			default: i = up;
		}
		n = i.bind(null, t, n, e), i = void 0, !hn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function wd(e, t, n, r, i) {
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
					if (s = xt(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		fn(function() {
			var r = a, i = sn(n), s = [];
			a: {
				var c = Qr.get(e);
				if (c !== void 0) {
					var l = En, u = e;
					switch (e) {
						case "keypress": if (xn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = Wn;
							break;
						case "focusin":
							u = "focus", l = Fn;
							break;
						case "focusout":
							u = "blur", l = Fn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Fn;
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
							l = Nn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Pn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = Kn;
							break;
						case Gr:
						case Kr:
						case qr:
							l = In;
							break;
						case Zr:
							l = qn;
							break;
						case "scroll":
						case "scrollend":
							l = On;
							break;
						case "wheel":
							l = Jn;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Ln;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = Gn;
							break;
						case "toggle":
						case "beforetoggle": l = Yn;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = pn(m, p), g != null && d.push(Td(m, g, h))), f) break;
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
					if (c = e === "mouseover" || e === "pointerover", l = e === "mouseout" || e === "pointerout", c && n !== on && (u = n.relatedTarget || n.fromElement) && (xt(u) || u[mt])) break a;
					if ((l || c) && (c = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window, l ? (u = n.relatedTarget || n.toElement, l = r, u = u ? xt(u) : null, u !== null && (f = o(u), d = u.tag, u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (l = null, u = r), l !== u)) {
						if (d = Nn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = Gn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = l == null ? c : Ct(l), h = u == null ? c : Ct(u), c = new d(g, m + "leave", l, n, i), c.target = f, c.relatedTarget = h, g = null, xt(i) === r && (d = new d(p, m + "enter", u, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, l && u) b: {
							for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
							g = 0;
							for (var _ = m; _; _ = d(_)) g++;
							for (; 0 < h - g;) p = d(p), h--;
							for (; 0 < g - h;) m = d(m), g--;
							for (; h--;) {
								if (p === m || m !== null && p === m.alternate) {
									d = p;
									break b;
								}
								p = d(p), m = d(m);
							}
							d = null;
						}
						else d = null;
						l !== null && Od(s, c, l, d, !1), u !== null && f !== null && Od(s, f, u, d, !0);
					}
				}
				a: {
					if (c = r ? Ct(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var v = hr;
					else if (lr(c)) {
						if (gr) v = Tr;
						else {
							v = Cr;
							var y = Sr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && en(r.elementType) && (v = hr) : v = wr;
					if (v &&= v(e, r)) {
						ur(s, v, n, i);
						break a;
					}
					y && y(e, c, r), e === "focusout" && r && c.type === "number" && r.memoizedProps.value != null && Kt(c, "number", c.value);
				}
				switch (y = r ? Ct(r) : window, e) {
					case "focusin":
						(lr(y) || y.contentEditable === "true") && (Fr = y, Ir = r, Lr = null);
						break;
					case "focusout":
						Lr = Ir = Fr = null;
						break;
					case "mousedown":
						Rr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Rr = !1, zr(s, n, i);
						break;
					case "selectionchange": if (Pr) break;
					case "keydown":
					case "keyup": zr(s, n, i);
				}
				var b;
				if (Zn) b: {
					switch (e) {
						case "compositionstart":
							var x = "onCompositionStart";
							break b;
						case "compositionend":
							x = "onCompositionEnd";
							break b;
						case "compositionupdate":
							x = "onCompositionUpdate";
							break b;
					}
					x = void 0;
				}
				else ar ? rr(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
				x && (er && n.locale !== "ko" && (ar || x !== "onCompositionStart" ? x === "onCompositionEnd" && ar && (b = bn()) : (_n = i, vn = "value" in _n ? _n.value : _n.textContent, ar = !0)), y = Ed(r, x), 0 < y.length && (x = new Rn(x, e, null, n, i), s.push({
					event: x,
					listeners: y
				}), b ? x.data = b : (b = ir(n), b !== null && (x.data = b)))), (b = $n ? or(e, n) : sr(e, n)) && (x = Ed(r, "onBeforeInput"), 0 < x.length && (y = new Rn("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: y,
					listeners: x
				}), y.data = b)), md(s, e, r, n, i);
			}
			yd(s, t);
		});
	}
	function Td(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Ed(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = pn(e, n), i != null && r.unshift(Td(e, i, a)), i = pn(e, t), i != null && r.push(Td(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Dd(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Od(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = pn(n, a), l != null && o.unshift(Td(n, l, c))) : i || (l = pn(n, a), l != null && o.push(Td(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var kd = /\r\n?/g, Ad = /\u0000|\uFFFD/g;
	function jd(e) {
		return (typeof e == "string" ? e : "" + e).replace(kd, "\n").replace(Ad, "");
	}
	function Md(e, t) {
		return t = jd(t), jd(e) === t;
	}
	function $(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Xt(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Xt(e, "" + r);
				break;
			case "className":
				Pt(e, "class", r);
				break;
			case "tabIndex":
				Pt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Pt(e, n, r);
				break;
			case "style":
				$t(e, r, o);
				break;
			case "data": if (t !== "object") {
				Pt(e, "data", r);
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
				r = rn("" + r), e.setAttribute(n, r);
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
				r = rn("" + r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = an);
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				break;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						e.innerHTML = n;
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
				n = rn("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
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
				Q("beforetoggle", e), Q("toggle", e), Nt(e, "popover", r);
				break;
			case "xlinkActuate":
				Ft(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Ft(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Ft(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Ft(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Ft(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Ft(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Ft(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Ft(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Ft(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Nt(e, "is", r);
				break;
			case "innerText":
			case "textContent": break;
			default: (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = tn.get(n) || n, Nt(e, n, r));
		}
	}
	function Nd(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				$t(e, r, o);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						e.innerHTML = n;
					}
				}
				break;
			case "children":
				typeof r == "string" ? Xt(e, r) : (typeof r == "number" || typeof r == "bigint") && Xt(e, "" + r);
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				break;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				break;
			case "onClick":
				r != null && (e.onclick = an);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": break;
			case "innerText":
			case "textContent": break;
			default: if (!Et.hasOwnProperty(n)) a: {
				if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), o = e[pt] || null, o = o == null ? null : o[n], typeof o == "function" && e.removeEventListener(t, o, a), typeof r == "function")) {
					typeof o != "function" && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a);
					break a;
				}
				n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Nt(e, n, r);
			}
		}
	}
	function Pd(e, t, n) {
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
				Gt(e, o, c, l, u, s, a, !1);
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
				t = o, n = s, e.multiple = !!r, t == null ? n != null && qt(e, !!r, n, !0) : qt(e, !!r, t, !1);
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
				Yt(e, r, a, o);
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
				for (r = 0; r < _d.length; r++) Q(_d[r], e);
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
			default: if (en(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && Nd(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && $(e, t, c, r, n, null));
	}
	function Fd(e, t, n, r) {
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
							o = m;
							break;
						case "name":
							a = m;
							break;
						case "checked":
							u = m;
							break;
						case "defaultChecked":
							d = m;
							break;
						case "value":
							s = m;
							break;
						case "defaultValue":
							c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && $(e, t, p, m, r, f);
					}
				}
				Wt(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || $(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						p = o;
						break;
					case "defaultValue":
						c = o;
						break;
					case "multiple": s = o;
					default: o !== l && $(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? qt(e, !!n, n ? [] : "", !1) : qt(e, !!n, t, !0)) : qt(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: $(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						p = a;
						break;
					case "defaultValue":
						m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && $(e, t, s, a, r, o);
				}
				Jt(e, p, m);
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
						e.selected = p && typeof p != "function" && typeof p != "symbol";
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
			default: if (en(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Nd(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Nd(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m);
	}
	function Id(e) {
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
	function Ld() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && Id(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && Id(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var Rd = null, zd = null;
	function Bd(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function Vd(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function Hd(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function Ud(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Wd = null;
	function Gd() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== Wd && (Wd = e, !0) : (Wd = null, !1);
	}
	var Kd = typeof setTimeout == "function" ? setTimeout : void 0, qd = typeof clearTimeout == "function" ? clearTimeout : void 0, Jd = typeof Promise == "function" ? Promise : void 0, Yd = typeof queueMicrotask == "function" ? queueMicrotask : Jd === void 0 ? Kd : function(e) {
		return Jd.resolve(null).then(e).catch(Xd);
	};
	function Xd(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Zd(e) {
		return e === "head";
	}
	function Qd(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Np(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") pf(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, pf(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[yt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && pf(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Np(t);
	}
	function $d(e, t) {
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
	function ef(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					ef(n), bt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function tf(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[yt]) switch (t) {
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
			if (e = cf(e.nextSibling), e === null) break;
		}
		return null;
	}
	function nf(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = cf(e.nextSibling), e === null)) return null;
		return e;
	}
	function rf(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = cf(e.nextSibling), e === null)) return null;
		return e;
	}
	function af(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function of(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function sf(e, t) {
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
	function cf(e) {
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
	var lf = null;
	function uf(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return cf(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function df(e) {
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
	function ff(e, t, n) {
		switch (t = Bd(n), e) {
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
	function pf(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		bt(e);
	}
	var mf = /* @__PURE__ */ new Map(), hf = /* @__PURE__ */ new Set();
	function gf(e) {
		return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
	}
	var _f = O.d;
	O.d = {
		f: vf,
		r: yf,
		D: Sf,
		C: Cf,
		L: wf,
		m: Tf,
		X: Df,
		S: Ef,
		M: Of
	};
	function vf() {
		var e = _f.f(), t = bu();
		return e || t;
	}
	function yf(e) {
		var t = St(e);
		t !== null && t.tag === 5 && t.type === "form" ? Ds(t) : _f.r(e);
	}
	var bf = typeof document > "u" ? null : document;
	function xf(e, t, n) {
		var r = bf;
		if (r && typeof t == "string" && t) {
			var i = Ut(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), hf.has(i) || (hf.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), Pd(t, "link", e), N(t), r.head.appendChild(t)));
		}
	}
	function Sf(e) {
		_f.D(e), xf("dns-prefetch", e, null);
	}
	function Cf(e, t) {
		_f.C(e, t), xf("preconnect", e, t);
	}
	function wf(e, t, n) {
		_f.L(e, t, n);
		var r = bf;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + Ut(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + Ut(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + Ut(n.imageSizes) + "\"]")) : i += "[href=\"" + Ut(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Af(e);
					break;
				case "script": a = Pf(e);
			}
			mf.has(a) || (e = f({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), mf.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(jf(a)) || t === "script" && r.querySelector(Ff(a)) || (t = r.createElement("link"), Pd(t, "link", e), N(t), r.head.appendChild(t)));
		}
	}
	function Tf(e, t) {
		_f.m(e, t);
		var n = bf;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + Ut(r) + "\"][href=\"" + Ut(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Pf(e);
			}
			if (!mf.has(a) && (e = f({
				rel: "modulepreload",
				href: e
			}, t), mf.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(Ff(a))) return;
				}
				r = n.createElement("link"), Pd(r, "link", e), N(r), n.head.appendChild(r);
			}
		}
	}
	function Ef(e, t, n) {
		_f.S(e, t, n);
		var r = bf;
		if (r && e) {
			var i = wt(r).hoistableStyles, a = Af(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(jf(a))) s.loading = 5;
				else {
					e = f({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = mf.get(a)) && Rf(e, n);
					var c = o = r.createElement("link");
					N(c), Pd(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Lf(o, t, r);
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
	function Df(e, t) {
		_f.X(e, t);
		var n = bf;
		if (n && e) {
			var r = wt(n).hoistableScripts, i = Pf(e), a = r.get(i);
			a || (a = n.querySelector(Ff(i)), a || (e = f({
				src: e,
				async: !0
			}, t), (t = mf.get(i)) && zf(e, t), a = n.createElement("script"), N(a), Pd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Of(e, t) {
		_f.M(e, t);
		var n = bf;
		if (n && e) {
			var r = wt(n).hoistableScripts, i = Pf(e), a = r.get(i);
			a || (a = n.querySelector(Ff(i)), a || (e = f({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = mf.get(i)) && zf(e, t), a = n.createElement("script"), N(a), Pd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function kf(e, t, n, r) {
		var a = (a = he.current) ? gf(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Af(n.href), n = wt(a).hoistableStyles, r = n.get(t), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Af(n.href);
					var o = wt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(jf(e))) && !o._p && (s.instance = o, s.state.loading = 5), mf.has(e) || (n = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, mf.set(e, n), o || Nf(a, e, n, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Pf(n), n = wt(a).hoistableScripts, r = n.get(t), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Af(e) {
		return "href=\"" + Ut(e) + "\"";
	}
	function jf(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Mf(e) {
		return f({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Nf(e, t, n, r) {
		e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		}), Pd(t, "link", n), N(t), e.head.appendChild(t));
	}
	function Pf(e) {
		return "[src=\"" + Ut(e) + "\"]";
	}
	function Ff(e) {
		return "script[async]" + e;
	}
	function If(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + Ut(n.href) + "\"]");
				if (r) return t.instance = r, N(r), r;
				var a = f({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), N(r), Pd(r, "style", a), Lf(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Af(n.href);
				var o = e.querySelector(jf(a));
				if (o) return t.state.loading |= 4, t.instance = o, N(o), o;
				r = Mf(n), (a = mf.get(a)) && Rf(r, a), o = (e.ownerDocument || e).createElement("link"), N(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), Pd(o, "link", r), t.state.loading |= 4, Lf(o, n.precedence, e), t.instance = o;
			case "script": return o = Pf(n.src), (a = e.querySelector(Ff(o))) ? (t.instance = a, N(a), a) : (r = n, (a = mf.get(o)) && (r = f({}, n), zf(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), N(a), Pd(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Lf(r, n.precedence, e));
		return t.instance;
	}
	function Lf(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Rf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function zf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Bf = null;
	function Vf(e, t, n) {
		if (Bf === null) {
			var r = /* @__PURE__ */ new Map(), i = Bf = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Bf, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[yt] || a[ft] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Hf(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function Uf(e, t, n) {
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
	function Wf(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Gf(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Af(r.href), a = t.querySelector(jf(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = Jf.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, N(a);
					return;
				}
				a = t.ownerDocument || t, r = Mf(r), (i = mf.get(i)) && Rf(r, i), a = a.createElement("link"), N(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), Pd(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = Jf.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var Kf = 0;
	function qf(e, t) {
		return e.stylesheets && e.count === 0 && Xf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > Kf ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function Jf() {
		if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if (this.stylesheets) Xf(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e();
			}
		}
	}
	var Yf = null;
	function Xf(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, Yf = /* @__PURE__ */ new Map(), t.forEach(Zf, e), Yf = null, Jf.call(e));
	}
	function Zf(e, t) {
		if (!(t.state.loading & 4)) {
			var n = Yf.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), Yf.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = Jf.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var Qf = {
		$$typeof: b,
		Provider: null,
		Consumer: null,
		_currentValue: le,
		_currentValue2: le,
		_threadCount: 0
	};
	function $f(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = nt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nt(0), this.hiddenUpdates = nt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new $f(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = pi(3, null, null, t), e.current = a, a.stateNode = e, t = da(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, Wa(a), e;
	}
	function tp(e) {
		return e ? (e = di, e) : di;
	}
	function np(e, t, n, r, i, a) {
		i = tp(i), r.context === null ? r.context = i : r.pendingContext = i, r = Ka(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = qa(e, r, t), n !== null && (hu(n, e, t), Ja(n, e, t));
	}
	function rp(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ip(e, t) {
		rp(e, t), (e = e.alternate) && rp(e, t);
	}
	function ap(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = ci(e, 67108864);
			t !== null && hu(t, e, 67108864), ip(e, 67108864);
		}
	}
	function op(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = pu();
			t = ct(t);
			var n = ci(e, t);
			n !== null && hu(n, e, t), ip(e, t);
		}
	}
	var sp = !0;
	function cp(e, t, n, r) {
		var i = D.T;
		D.T = null;
		var a = O.p;
		try {
			O.p = 2, up(e, t, n, r);
		} finally {
			O.p = a, D.T = i;
		}
	}
	function lp(e, t, n, r) {
		var i = D.T;
		D.T = null;
		var a = O.p;
		try {
			O.p = 8, up(e, t, n, r);
		} finally {
			O.p = a, D.T = i;
		}
	}
	function up(e, t, n, r) {
		if (sp) {
			var i = dp(r);
			if (i === null) wd(e, t, r, fp, n), Cp(e, r);
			else if (Tp(i, e, t, n, r)) r.stopPropagation();
			else if (Cp(e, r), t & 4 && -1 < Sp.indexOf(e)) {
				for (; i !== null;) {
					var a = St(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = Ze(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - We(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									rd(a), !(G & 6) && (tu = j() + 500, id(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = ci(a, 2), s !== null && hu(s, a, 2), bu(), ip(a, 2);
					}
					if (a = dp(r), a === null && wd(e, t, r, fp, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else wd(e, t, r, null, n);
		}
	}
	function dp(e) {
		return e = sn(e), pp(e);
	}
	var fp = null;
	function pp(e) {
		if (fp = null, e = xt(e), e !== null) {
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
		return fp = e, null;
	}
	function mp(e) {
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
			case "resize":
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
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Ne()) {
				case Pe: return 2;
				case Fe: return 8;
				case Ie:
				case Le: return 32;
				case Re: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var hp = !1, gp = null, _p = null, vp = null, yp = /* @__PURE__ */ new Map(), bp = /* @__PURE__ */ new Map(), xp = [], Sp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Cp(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				gp = null;
				break;
			case "dragenter":
			case "dragleave":
				_p = null;
				break;
			case "mouseover":
			case "mouseout":
				vp = null;
				break;
			case "pointerover":
			case "pointerout":
				yp.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": bp.delete(t.pointerId);
		}
	}
	function wp(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = St(t), t !== null && ap(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Tp(e, t, n, r, i) {
		switch (t) {
			case "focusin": return gp = wp(gp, e, t, n, r, i), !0;
			case "dragenter": return _p = wp(_p, e, t, n, r, i), !0;
			case "mouseover": return vp = wp(vp, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Ep(e) {
		var t = xt(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, ut(e.priority, function() {
							op(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, ut(e.priority, function() {
							op(n);
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
	function Dp(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = dp(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				on = r, n.target.dispatchEvent(r), on = null;
			} else return t = St(n), t !== null && ap(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Op(e, t, n) {
		Dp(e) && n.delete(t);
	}
	function kp() {
		hp = !1, gp !== null && Dp(gp) && (gp = null), _p !== null && Dp(_p) && (_p = null), vp !== null && Dp(vp) && (vp = null), yp.forEach(Op), bp.forEach(Op);
	}
	function Ap(e, n) {
		e.blockedOn === n && (e.blockedOn = null, hp || (hp = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
	}
	var jp = null;
	function Mp(e) {
		jp !== e && (jp = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			jp === e && (jp = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (pp(r || n) === null) continue;
					break;
				}
				var a = St(n);
				a !== null && (e.splice(t, 3), t -= 3, Ts(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Np(e) {
		function t(t) {
			return Ap(t, e);
		}
		gp !== null && Ap(gp, e), _p !== null && Ap(_p, e), vp !== null && Ap(vp, e), yp.forEach(t), bp.forEach(t);
		for (var n = 0; n < xp.length; n++) {
			var r = xp[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < xp.length && (n = xp[0], n.blockedOn === null);) Ep(n), n.blockedOn === null && xp.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[pt] || null;
			if (typeof a == "function") o || Mp(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[pt] || null) s = o.formAction;
					else if (pp(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Mp(n);
			}
		}
	}
	function Pp() {
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
	function Fp(e) {
		this._internalRoot = e;
	}
	Ip.prototype.render = Fp.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		np(n, pu(), e, t, null, null);
	}, Ip.prototype.unmount = Fp.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			np(e.current, 2, null, e, null, null), bu(), t[mt] = null;
		}
	};
	function Ip(e) {
		this._internalRoot = e;
	}
	Ip.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = lt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
			xp.splice(n, 0, e), n === 0 && Ep(e);
		}
	};
	var Lp = n.version;
	if (Lp !== "19.2.8") throw Error(i(527, Lp, "19.2.8"));
	O.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = u(t), e = e === null ? null : d(e), e = e === null ? null : e.stateNode, e;
	};
	var Rp = {
		bundleType: 0,
		version: "19.2.8",
		rendererPackageName: "react-dom",
		currentDispatcherRef: D,
		reconcilerVersion: "19.2.8"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!zp.isDisabled && zp.supportsFiber) try {
			Ve = zp.inject(Rp), He = zp;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = Js, s = Ys, c = Xs;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = ep(e, 1, !1, null, null, n, r, null, o, s, c, Pp), e[mt] = t.current, Sd(e), new Fp(t);
	};
})), ie = /* @__PURE__ */ s(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = re();
})), E = /* @__PURE__ */ u(w(), 1), ae = ie(), oe = ".react-grid-layout{transition:height .2s;position:relative}.react-grid-item{transition:left .2s,top .2s,width .2s,height .2s}.react-grid-item img{pointer-events:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{z-index:1;will-change:width, height;transition:none}.react-grid-item.react-draggable-dragging{z-index:3;will-change:transform;transition:none}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{opacity:.2;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-o-user-select:none;background:red;transition-duration:.1s}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{width:20px;height:20px;position:absolute}.react-grid-item>.react-resizable-handle:after{content:\"\";border-bottom:2px solid #0006;border-right:2px solid #0006;width:5px;height:5px;position:absolute;bottom:3px;right:3px}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{cursor:sw-resize;bottom:0;left:0;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{cursor:se-resize;bottom:0;right:0}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{cursor:nw-resize;top:0;left:0;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{cursor:ne-resize;top:0;right:0;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{cursor:ew-resize;margin-top:-10px;top:50%}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{cursor:ns-resize;margin-left:-10px;left:50%}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", se = ".react-resizable{position:relative}.react-resizable-handle{box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:100% 100%;background-repeat:no-repeat;background-origin:content-box;width:20px;height:20px;padding:0 3px 3px 0;position:absolute}.react-resizable-handle-sw{cursor:sw-resize;bottom:0;left:0;transform:rotate(90deg)}.react-resizable-handle-se{cursor:se-resize;bottom:0;right:0}.react-resizable-handle-nw{cursor:nw-resize;top:0;left:0;transform:rotate(180deg)}.react-resizable-handle-ne{cursor:ne-resize;top:0;right:0;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{cursor:ew-resize;margin-top:-10px;top:50%}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{cursor:ns-resize;margin-left:-10px;left:50%}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", ce = "#widget-grid.grid{grid-template-columns:none!important;grid-auto-flow:initial!important;display:block!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px;display:flex}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{background:#ffffff14;border:1px solid #ffffff1f;border-radius:12px;padding:9px 13px;color:#fff!important}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline-offset:2px;outline:3px solid #76b7ff}.argus-dashboard__feedback{color:#b9d9ff;text-align:right;min-height:20px;padding:0 18px;font-size:12px}.argus-dashboard__visibility{flex-wrap:wrap;gap:6px;display:flex}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);border:2px solid #5ea8ffc7;border-radius:24px;box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{border-radius:24px;width:100%;height:100%;position:relative;overflow:visible;box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;border:1px solid var(--v2066-border,#ffffff14)!important;background:var(--v2066-glass,#ffffff0f)!important;-webkit-backdrop-filter:blur(24px)saturate(145%)!important}.argus-widget .panel{box-shadow:none!important;-webkit-backdrop-filter:none!important;background:0 0!important;border:none!important}.argus-widget__edit-header{align-items:center;gap:10px;padding:8px 12px;display:none}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;overflow:hidden}.argus-widget__drag-handle{cursor:grab;touch-action:none;width:44px;height:40px}.argus-widget__options{position:relative}.argus-widget__options summary{box-sizing:border-box;cursor:pointer;place-items:center;width:38px;height:38px;list-style:none;display:grid}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{z-index:140;background:#0f1623f5;border:1px solid #ffffff24;border-radius:16px;gap:8px;min-width:210px;padding:12px;display:grid;position:absolute;top:44px;right:0;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{grid-template-columns:repeat(4,1fr);gap:5px;display:grid}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:visible}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{overscroll-behavior:contain!important;box-sizing:border-box!important;grid-area:auto!important;width:100%!important;height:100%!important;display:block!important;overflow:hidden auto!important}.argus-widget__content>.panel:has(#hero),.argus-widget__content>.panel:has(.hero),.argus-widget__content>.panel:has(#hero-profile-container),.argus-widget:has(#hero),.argus-widget:has(.hero),.argus-dashboard-grid .react-grid-item:has(#hero),.argus-dashboard-grid .react-grid-item:first-child{z-index:50!important;overflow:visible!important}#profile-dropdown.hero-profile-dropdown{z-index:999999!important;max-height:calc(100vh - 120px)!important;position:absolute!important;top:calc(100% + 12px)!important;right:0!important;overflow-y:auto!important}.argus-dashboard-grid .react-resizable-handle{background:#131925db;border:1px solid #ffffff2e;border-radius:10px;width:34px;height:34px;bottom:8px;right:8px;display:none!important}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{border-color:#9bc7ff;width:10px;height:10px;bottom:9px;right:9px}.alarm-configuration-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px;display:grid}@media (width<=760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;inset:auto 16px 16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}:host([argus-contrast=high]) .argus-widget,:host(.argus-contrast-high) .argus-widget{-webkit-backdrop-filter:blur(28px)saturate(130%)!important;background:linear-gradient(145deg,#0b101af2,#070a12f7)!important;border:1px solid #ffffff3d!important;box-shadow:0 16px 42px #000000a6,inset 0 1px #ffffff24!important}:host([argus-contrast=high]) .argus-widget strong,:host(.argus-contrast-high) .argus-widget strong,:host([argus-contrast=high]) .argus-widget .panel h1,:host(.argus-contrast-high) .argus-widget .panel h1,:host([argus-contrast=high]) .argus-widget .panel h2,:host(.argus-contrast-high) .argus-widget .panel h2,:host([argus-contrast=high]) .argus-widget .panel h3,:host(.argus-contrast-high) .argus-widget .panel h3,:host([argus-contrast=high]) .argus-widget .panel h4,:host(.argus-contrast-high) .argus-widget .panel h4,:host([argus-contrast=high]) .argus-widget .panel-title,:host(.argus-contrast-high) .argus-widget .panel-title,:host([argus-contrast=high]) .argus-widget .section-title,:host(.argus-contrast-high) .argus-widget .section-title,:host([argus-contrast=high]) .argus-widget .setting-label,:host(.argus-contrast-high) .argus-widget .setting-label{color:#fff!important;text-shadow:0 1px 2px #00000080!important}:host([argus-contrast=high]) .argus-widget p,:host(.argus-contrast-high) .argus-widget p,:host([argus-contrast=high]) .argus-widget small,:host(.argus-contrast-high) .argus-widget small,:host([argus-contrast=high]) .argus-widget .hint,:host(.argus-contrast-high) .argus-widget .hint,:host([argus-contrast=high]) .argus-widget .muted,:host(.argus-contrast-high) .argus-widget .muted,:host([argus-contrast=high]) .argus-widget .setting-help,:host(.argus-contrast-high) .argus-widget .setting-help,:host([argus-contrast=high]) .argus-widget .small,:host(.argus-contrast-high) .argus-widget .small{color:#cbd5e1!important;opacity:1!important}:host([argus-contrast=high]) .argus-dashboard__toolbar button,:host(.argus-contrast-high) .argus-dashboard__toolbar button,:host([argus-contrast=high]) .argus-widget__drag-handle,:host(.argus-contrast-high) .argus-widget__drag-handle,:host([argus-contrast=high]) .argus-widget__options summary,:host(.argus-contrast-high) .argus-widget__options summary,:host([argus-contrast=high]) .argus-widget__menu button,:host(.argus-contrast-high) .argus-widget__menu button{color:#fff!important;background:#ffffff1f!important;border:1px solid #ffffff42!important}:host([argus-contrast=high]) .argus-dashboard__feedback,:host(.argus-contrast-high) .argus-dashboard__feedback{color:#93c5fd!important;font-weight:600!important}:host([argus-contrast=high]) .argus-widget__menu,:host(.argus-contrast-high) .argus-widget__menu{background:#0a0e17fa!important;border:1px solid #ffffff40!important;box-shadow:0 20px 50px #0009!important}@media (prefers-contrast:more){.argus-widget{-webkit-backdrop-filter:blur(28px)saturate(130%)!important;background:linear-gradient(145deg,#0b101af2,#070a12f7)!important;border:1px solid #ffffff3d!important;box-shadow:0 16px 42px #000000a6,inset 0 1px #ffffff24!important}.argus-widget strong,.argus-widget .panel h1,.argus-widget .panel h2,.argus-widget .panel h3,.argus-widget .panel h4,.argus-widget .panel-title,.argus-widget .section-title,.argus-widget .setting-label{color:#fff!important;text-shadow:0 1px 2px #00000080!important}.argus-widget p,.argus-widget small,.argus-widget .hint,.argus-widget .muted,.argus-widget .setting-help,.argus-widget .small{color:#cbd5e1!important;opacity:1!important}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{color:#fff!important;background:#ffffff1f!important;border:1px solid #ffffff42!important}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline-offset:2px!important;outline:3px solid #60a5fa!important}.argus-dashboard__feedback{color:#93c5fd!important;font-weight:600!important}.argus-widget__menu{background:#0a0e17fa!important;border:1px solid #ffffff40!important;box-shadow:0 20px 50px #0009!important}}", D = /* @__PURE__ */ s(((e) => {
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
})), O = (/* @__PURE__ */ s(((e, t) => {
	t.exports = D();
})))(), le = class extends E.Component {
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
		return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ (0, O.jsxs)("div", {
			style: {
				padding: "20px",
				color: "#ff6b6b",
				background: "rgba(0,0,0,0.5)",
				borderRadius: "8px",
				margin: "10px"
			},
			children: [
				/* @__PURE__ */ (0, O.jsx)("h2", {
					style: {
						fontSize: "16px",
						marginBottom: "8px"
					},
					children: "⚠️ Error del Widget"
				}),
				/* @__PURE__ */ (0, O.jsx)("p", {
					style: {
						fontSize: "12px",
						opacity: .8
					},
					children: "Un componente falló al renderizar."
				}),
				/* @__PURE__ */ (0, O.jsx)("pre", {
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
}, ue = /* @__PURE__ */ s(((e, t) => {
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
		var ee = c(r(x, { createIsNestedEqual: function() {
			return o;
		} }));
		function te(e, t) {
			return ee(e, t, void 0);
		}
		var T = c(S);
		function ne(e, t) {
			return T(e, t, /* @__PURE__ */ new WeakMap());
		}
		var re = c(r(S, { createIsNestedEqual: function() {
			return o;
		} }));
		function ie(e, t) {
			return re(e, t, /* @__PURE__ */ new WeakMap());
		}
		function E(e) {
			return c(r(x, e(x)));
		}
		function ae(e) {
			var t = c(r(S, e(S)));
			return (function(e, n, r) {
				return r === void 0 && (r = /* @__PURE__ */ new WeakMap()), t(e, n, r);
			});
		}
		e.circularDeepEqual = ne, e.circularShallowEqual = ie, e.createCustomCircularEqual = ae, e.createCustomEqual = E, e.deepEqual = w, e.sameValueZeroEqual = o, e.shallowEqual = te, Object.defineProperty(e, "__esModule", { value: !0 });
	}));
})), de = /* @__PURE__ */ s(((e, t) => {
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
})), fe = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e, t, n) {
		return e === t || e.className === t.className && n(e.style, t.style) && e.width === t.width && e.autoSize === t.autoSize && e.cols === t.cols && e.draggableCancel === t.draggableCancel && e.draggableHandle === t.draggableHandle && n(e.verticalCompact, t.verticalCompact) && n(e.compactType, t.compactType) && n(e.layout, t.layout) && n(e.margin, t.margin) && n(e.containerPadding, t.containerPadding) && e.rowHeight === t.rowHeight && e.maxRows === t.maxRows && e.isBounded === t.isBounded && e.isDraggable === t.isDraggable && e.isResizable === t.isResizable && e.allowOverlap === t.allowOverlap && e.preventCollision === t.preventCollision && e.useCSSTransforms === t.useCSSTransforms && e.transformScale === t.transformScale && e.isDroppable === t.isDroppable && n(e.resizeHandles, t.resizeHandles) && n(e.resizeHandle, t.resizeHandle) && e.onLayoutChange === t.onLayoutChange && e.onDragStart === t.onDragStart && e.onDrag === t.onDrag && e.onDragStop === t.onDragStop && e.onResizeStart === t.onResizeStart && e.onResize === t.onResize && e.onResizeStop === t.onResizeStop && e.onDrop === t.onDrop && n(e.droppingItem, t.droppingItem) && n(e.innerRef, t.innerRef);
	};
})), k = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.bottom = l, e.childrenEqual = m, e.cloneLayout = u, e.cloneLayoutItem = p, e.collides = g, e.compact = _, e.compactItem = b, e.compactType = ve, e.correctBounds = x, e.fastPositionEqual = h, e.fastRGLPropsEqual = void 0, e.getAllCollisions = ee, e.getFirstCollision = C, e.getLayoutItem = S, e.getStatics = te, e.modifyLayout = d, e.moveElement = T, e.moveElementAwayFromCollision = ne, e.noop = void 0, e.perc = re, e.resizeItemInDirection = de, e.setTopLeft = A, e.setTransform = k, e.sortLayoutItems = pe, e.sortLayoutItemsByColRow = he, e.sortLayoutItemsByRowCol = me, e.synchronizeLayoutWithChildren = ge, e.validateLayout = _e, e.withLayoutItem = f;
	var t = ue(), n = r(w());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function a(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? i(Object(n), !0).forEach(function(t) {
				o(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function o(e, t, n) {
		return (t = s(t)) in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function s(e) {
		var t = c(e, "string");
		return typeof t == "symbol" ? t : t + "";
	}
	function c(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	function l(e) {
		let t = 0, n;
		for (let r = 0, i = e.length; r < i; r++) n = e[r].y + e[r].h, n > t && (t = n);
		return t;
	}
	function u(e) {
		let t = Array(e.length);
		for (let n = 0, r = e.length; n < r; n++) t[n] = p(e[n]);
		return t;
	}
	function d(e, t) {
		let n = Array(e.length);
		for (let r = 0, i = e.length; r < i; r++) t.i === e[r].i ? n[r] = t : n[r] = e[r];
		return n;
	}
	function f(e, t, n) {
		let r = S(e, t);
		return r ? (r = n(p(r)), e = d(e, r), [e, r]) : [e, null];
	}
	function p(e) {
		return {
			w: e.w,
			h: e.h,
			x: e.x,
			y: e.y,
			i: e.i,
			minW: e.minW,
			maxW: e.maxW,
			minH: e.minH,
			maxH: e.maxH,
			moved: !!e.moved,
			static: !!e.static,
			isDraggable: e.isDraggable,
			isResizable: e.isResizable,
			resizeHandles: e.resizeHandles,
			isBounded: e.isBounded
		};
	}
	function m(e, r) {
		return (0, t.deepEqual)(n.default.Children.map(e, (e) => e?.key), n.default.Children.map(r, (e) => e?.key)) && (0, t.deepEqual)(n.default.Children.map(e, (e) => e?.props["data-grid"]), n.default.Children.map(r, (e) => e?.props["data-grid"]));
	}
	e.fastRGLPropsEqual = fe();
	function h(e, t) {
		return e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
	}
	function g(e, t) {
		return !(e.i === t.i || e.x + e.w <= t.x || e.x >= t.x + t.w || e.y + e.h <= t.y || e.y >= t.y + t.h);
	}
	function _(e, t, n, r) {
		let i = te(e), a = l(i), o = pe(e, t), s = Array(e.length);
		for (let c = 0, l = o.length; c < l; c++) {
			let l = p(o[c]);
			l.static || (l = b(i, l, t, n, o, r, a), a = Math.max(a, l.y + l.h), i.push(l)), s[e.indexOf(o[c])] = l, l.moved = !1;
		}
		return s;
	}
	var v = {
		x: "w",
		y: "h"
	};
	function y(e, t, n, r) {
		let i = v[r];
		t[r] += 1;
		let a = e.map((e) => e.i).indexOf(t.i);
		for (let o = a + 1; o < e.length; o++) {
			let a = e[o];
			if (!a.static) {
				if (a.y > t.y + t.h) break;
				g(t, a) && y(e, a, n + t[i], r);
			}
		}
		t[r] = n;
	}
	function b(e, t, n, r, i, a, o) {
		let s = n === "vertical", c = n === "horizontal";
		if (s) for (t.y = Math.min(typeof o == "number" ? o : l(e), t.y); t.y > 0 && !C(e, t);) t.y--;
		else if (c) for (; t.x > 0 && !C(e, t);) t.x--;
		let u;
		for (; (u = C(e, t)) && !(n === null && a);) if (c ? y(i, t, u.x + u.w, "x") : y(i, t, u.y + u.h, "y"), c && t.x + t.w > r) for (t.x = r - t.w, t.y++; t.x > 0 && !C(e, t);) t.x--;
		return t.y = Math.max(t.y, 0), t.x = Math.max(t.x, 0), t;
	}
	function x(e, t) {
		let n = te(e);
		for (let r = 0, i = e.length; r < i; r++) {
			let i = e[r];
			if (i.x + i.w > t.cols && (i.x = t.cols - i.w), i.x < 0 && (i.x = 0, i.w = t.cols), !i.static) n.push(i);
			else for (; C(n, i);) i.y++;
		}
		return e;
	}
	function S(e, t) {
		for (let n = 0, r = e.length; n < r; n++) if (e[n].i === t) return e[n];
	}
	function C(e, t) {
		for (let n = 0, r = e.length; n < r; n++) if (g(e[n], t)) return e[n];
	}
	function ee(e, t) {
		return e.filter((e) => g(e, t));
	}
	function te(e) {
		return e.filter((e) => e.static);
	}
	function T(e, t, n, r, i, a, o, s, c) {
		if (t.static && t.isDraggable !== !0 || t.y === r && t.x === n) return e;
		`${t.i}${String(n)}${String(r)}${t.x}${t.y}`;
		let l = t.x, d = t.y;
		typeof n == "number" && (t.x = n), typeof r == "number" && (t.y = r), t.moved = !0;
		let f = pe(e, o);
		(o === "vertical" && typeof r == "number" ? d >= r : o === "horizontal" && typeof n == "number" && l >= n) && (f = f.reverse());
		let p = ee(f, t), m = p.length > 0;
		if (m && c) return u(e);
		if (m && a) return `${t.i}`, t.x = l, t.y = d, t.moved = !1, e;
		for (let n = 0, r = p.length; n < r; n++) {
			let r = p[n];
			`${t.i}${t.x}${t.y}${r.i}${r.x}${r.y}`, !r.moved && (e = r.static ? ne(e, r, t, i, o, s) : ne(e, t, r, i, o, s));
		}
		return e;
	}
	function ne(e, t, n, r, i, a) {
		let o = i === "horizontal", s = i === "vertical", c = t.static;
		if (r) {
			r = !1;
			let l = {
				x: o ? Math.max(t.x - n.w, 0) : n.x,
				y: s ? Math.max(t.y - n.h, 0) : n.y,
				w: n.w,
				h: n.h,
				i: "-1"
			}, u = C(e, l), d = u && u.y + u.h > t.y, f = u && t.x + t.w > u.x;
			if (!u) return `${n.i}${l.x}${l.y}`, T(e, n, o ? l.x : void 0, s ? l.y : void 0, r, c, i, a);
			if (d && s) return T(e, n, void 0, n.y + 1, r, c, i, a);
			if (d && i == null) return t.y = n.y, n.y += n.h, e;
			if (f && o) return T(e, t, n.x, void 0, r, c, i, a);
		}
		let l = o ? n.x + 1 : void 0, u = s ? n.y + 1 : void 0;
		return l == null && u == null ? e : T(e, n, o ? n.x + 1 : void 0, s ? n.y + 1 : void 0, r, c, i, a);
	}
	function re(e) {
		return e * 100 + "%";
	}
	var ie = (e, t, n, r) => e + n > r ? t : n, E = (e, t, n) => e < 0 ? t : n, ae = (e) => Math.max(0, e), oe = (e) => Math.max(0, e), se = (e, t, n) => {
		let { left: r, height: i, width: a } = t, o = e.top - (i - e.height);
		return {
			left: r,
			width: a,
			height: E(o, e.height, i),
			top: oe(o)
		};
	}, ce = (e, t, n) => {
		let { top: r, left: i, height: a, width: o } = t;
		return {
			top: r,
			height: a,
			width: ie(e.left, e.width, o, n),
			left: ae(i)
		};
	}, D = (e, t, n) => {
		let { top: r, height: i, width: a } = t, o = e.left - (a - e.width);
		return {
			height: i,
			width: o < 0 ? e.width : ie(e.left, e.width, a, n),
			top: oe(r),
			left: ae(o)
		};
	}, O = (e, t, n) => {
		let { top: r, left: i, height: a, width: o } = t;
		return {
			width: o,
			left: i,
			height: E(r, e.height, a),
			top: oe(r)
		};
	}, le = {
		n: se,
		ne: function() {
			return se(arguments.length <= 0 ? void 0 : arguments[0], ce(...arguments), arguments.length <= 2 ? void 0 : arguments[2]);
		},
		e: ce,
		se: function() {
			return O(arguments.length <= 0 ? void 0 : arguments[0], ce(...arguments), arguments.length <= 2 ? void 0 : arguments[2]);
		},
		s: O,
		sw: function() {
			return O(arguments.length <= 0 ? void 0 : arguments[0], D(...arguments), arguments.length <= 2 ? void 0 : arguments[2]);
		},
		w: D,
		nw: function() {
			return se(arguments.length <= 0 ? void 0 : arguments[0], D(...arguments), arguments.length <= 2 ? void 0 : arguments[2]);
		}
	};
	function de(e, t, n, r) {
		let i = le[e];
		return i ? i(t, a(a({}, t), n), r) : n;
	}
	function k(e) {
		let { top: t, left: n, width: r, height: i } = e, a = `translate(${n}px,${t}px)`;
		return {
			transform: a,
			WebkitTransform: a,
			MozTransform: a,
			msTransform: a,
			OTransform: a,
			width: `${r}px`,
			height: `${i}px`,
			position: "absolute"
		};
	}
	function A(e) {
		let { top: t, left: n, width: r, height: i } = e;
		return {
			top: `${t}px`,
			left: `${n}px`,
			width: `${r}px`,
			height: `${i}px`,
			position: "absolute"
		};
	}
	function pe(e, t) {
		return t === "horizontal" ? he(e) : t === "vertical" ? me(e) : e;
	}
	function me(e) {
		return e.slice(0).sort(function(e, t) {
			return e.y > t.y || e.y === t.y && e.x > t.x ? 1 : e.y === t.y && e.x === t.x ? 0 : -1;
		});
	}
	function he(e) {
		return e.slice(0).sort(function(e, t) {
			return e.x > t.x || e.x === t.x && e.y > t.y ? 1 : -1;
		});
	}
	function ge(e, t, r, i, o) {
		e ||= [];
		let s = [];
		n.default.Children.forEach(t, (t) => {
			if (t?.key == null) return;
			let n = S(e, String(t.key)), r = t.props["data-grid"];
			n && r == null ? s.push(p(n)) : r ? s.push(p(a(a({}, r), {}, { i: t.key }))) : s.push(p({
				w: 1,
				h: 1,
				x: 0,
				y: l(s),
				i: String(t.key)
			}));
		});
		let c = x(s, { cols: r });
		return o ? c : _(c, i, r);
	}
	function _e(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout", n = [
			"x",
			"y",
			"w",
			"h"
		];
		if (!Array.isArray(e)) throw Error(t + " must be an array!");
		for (let r = 0, i = e.length; r < i; r++) {
			let i = e[r];
			for (let e = 0; e < n.length; e++) {
				let a = n[e], o = i[a];
				if (typeof o != "number" || Number.isNaN(o)) throw Error(`ReactGridLayout: ${t}[${r}].${a} must be a number! Received: ${o} (${typeof o})`);
			}
			if (i.i !== void 0 && typeof i.i != "string") throw Error(`ReactGridLayout: ${t}[${r}].i must be a string! Received: ${i.i} (${typeof i.i})`);
		}
	}
	function ve(e) {
		let { verticalCompact: t, compactType: n } = e || {};
		return t === !1 ? null : n;
	}
	e.noop = () => {};
})), A = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.calcGridColWidth = t, e.calcGridItemPosition = r, e.calcGridItemWHPx = n, e.calcWH = a, e.calcXY = i, e.clamp = o;
	function t(e) {
		let { margin: t, containerPadding: n, containerWidth: r, cols: i } = e;
		return (r - t[0] * (i - 1) - n[0] * 2) / i;
	}
	function n(e, t, n) {
		return Number.isFinite(e) ? Math.round(t * e + Math.max(0, e - 1) * n) : e;
	}
	function r(e, r, i, a, o, s) {
		let { margin: c, containerPadding: l, rowHeight: u } = e, d = t(e), f = {};
		return s && s.resizing ? (f.width = Math.round(s.resizing.width), f.height = Math.round(s.resizing.height)) : (f.width = n(a, d, c[0]), f.height = n(o, u, c[1])), s && s.dragging ? (f.top = Math.round(s.dragging.top), f.left = Math.round(s.dragging.left)) : s && s.resizing && typeof s.resizing.top == "number" && typeof s.resizing.left == "number" ? (f.top = Math.round(s.resizing.top), f.left = Math.round(s.resizing.left)) : (f.top = Math.round((u + c[1]) * i + l[1]), f.left = Math.round((d + c[0]) * r + l[0])), f;
	}
	function i(e, n, r, i, a) {
		let { margin: s, containerPadding: c, cols: l, rowHeight: u, maxRows: d } = e, f = t(e), p = Math.round((r - c[0]) / (f + s[0])), m = Math.round((n - c[1]) / (u + s[1]));
		return p = o(p, 0, l - i), m = o(m, 0, d - a), {
			x: p,
			y: m
		};
	}
	function a(e, n, r, i, a, s) {
		let { margin: c, maxRows: l, cols: u, rowHeight: d } = e, f = t(e), p = Math.round((n + c[0]) / (f + c[0])), m = Math.round((r + c[1]) / (d + c[1])), h = o(p, 0, u - i), g = o(m, 0, l - a);
		return [
			"sw",
			"w",
			"nw"
		].indexOf(s) !== -1 && (h = o(p, 0, u)), [
			"nw",
			"n",
			"ne"
		].indexOf(s) !== -1 && (g = o(m, 0, l)), {
			w: h,
			h: g
		};
	}
	function o(e, t, n) {
		return Math.max(Math.min(e, n), t);
	}
})), pe = /* @__PURE__ */ s(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), me = /* @__PURE__ */ s(((e, t) => {
	var n = pe();
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
})), he = /* @__PURE__ */ s(((e, t) => {
	t.exports = me()();
})), ge = /* @__PURE__ */ s(((e, t) => {
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
		DraggableCore: () => Pe,
		default: () => Fe
	}), t.exports = d(f);
	var p = u(w()), m = u(he()), h = u(ne()), g = de();
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
	function x(e, t, n) {
		if (e[t]) return /* @__PURE__ */ Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`);
	}
	var S = [
		"Moz",
		"Webkit",
		"O",
		"ms"
	];
	function C(e = "transform") {
		if (typeof window > "u") return "";
		let t = window.document?.documentElement?.style;
		if (!t || e in t) return "";
		for (let n = 0; n < S.length; n++) if (ee(e, S[n]) in t) return S[n];
		return "";
	}
	function ee(e, t) {
		return t ? `${t}${te(e)}` : e;
	}
	function te(e) {
		let t = "", n = !0;
		for (let r = 0; r < e.length; r++) n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
		return t;
	}
	var T = C(), re = "";
	function ie(e, t) {
		re ||= _([
			"matches",
			"webkitMatchesSelector",
			"mozMatchesSelector",
			"msMatchesSelector",
			"oMatchesSelector"
		], function(t) {
			return v(e[t]);
		}) ?? "";
		let n = e[re];
		return v(n) ? !!n.call(e, t) : !1;
	}
	function E(e, t, n) {
		let r = e;
		do {
			if (ie(r, t)) return !0;
			if (r === n) return !1;
			r = r.parentNode;
		} while (r);
		return !1;
	}
	function ae(e, t, n, r) {
		if (!e) return;
		let i = {
			capture: !0,
			...r
		}, a = n;
		e.addEventListener ? e.addEventListener(t, a, i) : e.attachEvent ? e.attachEvent("on" + t, a) : e["on" + t] = a;
	}
	function oe(e, t, n, r) {
		if (!e) return;
		let i = {
			capture: !0,
			...r
		}, a = n;
		e.removeEventListener ? e.removeEventListener(t, a, i) : e.detachEvent ? e.detachEvent("on" + t, a) : e["on" + t] = null;
	}
	function se(e) {
		let t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
		return t += b(n.borderTopWidth), t += b(n.borderBottomWidth), t;
	}
	function ce(e) {
		let t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
		return t += b(n.borderLeftWidth), t += b(n.borderRightWidth), t;
	}
	function D(e) {
		let t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
		return t -= b(n.paddingTop), t -= b(n.paddingBottom), t;
	}
	function O(e) {
		let t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
		return t -= b(n.paddingLeft), t -= b(n.paddingRight), t;
	}
	function le(e, t, n) {
		let r = t === t.ownerDocument.body ? {
			left: 0,
			top: 0
		} : t.getBoundingClientRect();
		return {
			x: (e.clientX + t.scrollLeft - r.left) / n,
			y: (e.clientY + t.scrollTop - r.top) / n
		};
	}
	function ue(e, t) {
		let n = k(e, t, "px");
		return { [ee("transform", T)]: n };
	}
	function fe(e, t) {
		return k(e, t, "");
	}
	function k({ x: e, y: t }, n, r) {
		let i = `translate(${e}${r},${t}${r})`;
		return n && (i = `translate(${`${typeof n.x == "string" ? n.x : n.x + r}`}, ${`${typeof n.y == "string" ? n.y : n.y + r}`})` + i), i;
	}
	function A(e, t) {
		return e.targetTouches && _(e.targetTouches, (e) => t === e.identifier) || e.changedTouches && _(e.changedTouches, (e) => t === e.identifier);
	}
	function pe(e) {
		if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
		if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
	}
	function me() {
		return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
	}
	function ge(e, t) {
		if (!e) return;
		let n = e.getElementById("react-draggable-style-el");
		if (!n) {
			n = e.createElement("style"), n.type = "text/css", n.id = "react-draggable-style-el";
			let r = t ?? me();
			r && n.setAttribute("nonce", r), n.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", n.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", e.getElementsByTagName("head")[0].appendChild(n);
		}
		e.body && ye(e.body, "react-draggable-transparent-selection");
	}
	function _e(e) {
		window.requestAnimationFrame ? window.requestAnimationFrame(() => {
			ve(e);
		}) : ve(e);
	}
	function ve(e) {
		if (e) try {
			e.body && be(e.body, "react-draggable-transparent-selection");
			let t = e.selection;
			if (t) t.empty();
			else {
				let t = (e.defaultView || window).getSelection();
				t && t.type !== "Caret" && t.removeAllRanges();
			}
		} catch {}
	}
	function ye(e, t) {
		e.classList ? e.classList.add(t) : e.className.match(RegExp(`(?:^|\\s)${t}(?!\\S)`)) || (e.className += ` ${t}`);
	}
	function be(e, t) {
		e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp(`(?:^|\\s)${t}(?!\\S)`, "g"), "");
	}
	function xe(e, t, n) {
		if (!e.props.bounds) return [t, n];
		let { bounds: r } = e.props;
		r = typeof r == "string" ? r : Oe(r);
		let i = ke(e);
		if (typeof r == "string") {
			let { ownerDocument: e } = i, t = e.defaultView;
			if (!t) throw Error("Cannot resolve the owner window of the draggable node.");
			let n;
			if (n = r === "parent" ? i.parentNode : i.getRootNode().querySelector(r), !(n instanceof t.HTMLElement)) throw Error("Bounds selector \"" + r + "\" could not find an element.");
			let a = n, o = t.getComputedStyle(i), s = t.getComputedStyle(a);
			r = {
				left: -i.offsetLeft + b(s.paddingLeft) + b(o.marginLeft),
				top: -i.offsetTop + b(s.paddingTop) + b(o.marginTop),
				right: O(a) - ce(i) - i.offsetLeft + b(s.paddingRight) - b(o.marginRight),
				bottom: D(a) - se(i) - i.offsetTop + b(s.paddingBottom) - b(o.marginBottom)
			};
		}
		return y(r.right) && (t = Math.min(t, r.right)), y(r.bottom) && (n = Math.min(n, r.bottom)), y(r.left) && (t = Math.max(t, r.left)), y(r.top) && (n = Math.max(n, r.top)), [t, n];
	}
	function Se(e, t, n) {
		return [Math.round(t / e[0]) * e[0], Math.round(n / e[1]) * e[1]];
	}
	function Ce(e) {
		return e.props.axis === "both" || e.props.axis === "x";
	}
	function we(e) {
		return e.props.axis === "both" || e.props.axis === "y";
	}
	function Te(e, t, n) {
		let r = typeof t == "number" ? A(e, t) : null;
		if (typeof t == "number" && !r) return null;
		let i = ke(n), a = n.props.offsetParent || i.offsetParent || i.ownerDocument.body;
		return le(r || e, a, n.props.scale);
	}
	function Ee(e, t, n) {
		let r = !y(e.lastX), i = ke(e);
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
	function De(e, t) {
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
	function Oe(e) {
		return {
			left: e.left,
			top: e.top,
			right: e.right,
			bottom: e.bottom
		};
	}
	function ke(e) {
		let t = e.findDOMNode();
		if (!t) throw Error("<DraggableCore>: Unmounted during event!");
		return t;
	}
	var Ae = u(w()), je = u(he()), Me = u(ne()), j = {
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
	}, Ne = j.mouse, Pe = class extends Ae.Component {
		constructor() {
			super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (e) => {
				if (this.props.onMouseDown(e), !this.props.allowAnyClick && (typeof e.button == "number" && e.button !== 0 || e.ctrlKey)) return !1;
				let t = this.findDOMNode();
				if (!t || !t.ownerDocument || !t.ownerDocument.body) throw Error("<DraggableCore> not mounted on DragStart!");
				let { ownerDocument: n } = t;
				if (this.props.disabled || !(e.target instanceof n.defaultView.Node) || this.props.handle && !E(e.target, this.props.handle, t) || this.props.cancel && E(e.target, this.props.cancel, t)) return;
				e.type === "touchstart" && !this.props.allowMobileScroll && e.preventDefault();
				let r = pe(e);
				this.touchIdentifier = r;
				let i = Te(e, r, this);
				if (i == null) return;
				let { x: a, y: o } = i, s = Ee(this, a, o);
				this.props.onStart, this.props.onStart(e, s) !== !1 && this.mounted !== !1 && (this.props.enableUserSelectHack && ge(n, this.props.nonce), this.dragging = !0, this.lastX = a, this.lastY = o, ae(n, Ne.move, this.handleDrag), ae(n, Ne.stop, this.handleDragStop));
			}, this.handleDrag = (e) => {
				let t = Te(e, this.touchIdentifier, this);
				if (t == null) return;
				let { x: n, y: r } = t;
				if (Array.isArray(this.props.grid)) {
					let e = n - this.lastX, t = r - this.lastY;
					if ([e, t] = Se(this.props.grid, e, t), !e && !t) return;
					n = this.lastX + e, r = this.lastY + t;
				}
				let i = Ee(this, n, r);
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
				let t = Te(e, this.touchIdentifier, this);
				if (t == null) return;
				let { x: n, y: r } = t;
				if (Array.isArray(this.props.grid)) {
					let e = n - this.lastX || 0, t = r - this.lastY || 0;
					[e, t] = Se(this.props.grid, e, t), n = this.lastX + e, r = this.lastY + t;
				}
				let i = Ee(this, n, r);
				if (this.props.onStop(e, i) === !1 || this.mounted === !1) return !1;
				let a = this.findDOMNode();
				a && this.props.enableUserSelectHack && _e(a.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, a && (oe(a.ownerDocument, Ne.move, this.handleDrag), oe(a.ownerDocument, Ne.stop, this.handleDragStop));
			}, this.onMouseDown = (e) => (Ne = j.mouse, this.handleDragStart(e)), this.onMouseUp = (e) => (Ne = j.mouse, this.handleDragStop(e)), this.onTouchStart = (e) => (Ne = j.touch, this.handleDragStart(e)), this.onTouchEnd = (e) => (Ne = j.touch, this.handleDragStop(e));
		}
		componentDidMount() {
			this.mounted = !0;
			let e = this.findDOMNode();
			e && ae(e, j.touch.start, this.onTouchStart, { passive: !1 });
		}
		componentWillUnmount() {
			this.mounted = !1;
			let e = this.findDOMNode();
			if (e) {
				let { ownerDocument: t } = e;
				oe(t, j.mouse.move, this.handleDrag), oe(t, j.touch.move, this.handleDrag), oe(t, j.mouse.stop, this.handleDragStop), oe(t, j.touch.stop, this.handleDragStop), oe(e, j.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && _e(t);
			}
		}
		findDOMNode() {
			if (this.props?.nodeRef) return this.props.nodeRef.current;
			let e = Me.default;
			return typeof e.findDOMNode == "function" ? e.findDOMNode(this) : null;
		}
		render() {
			return Ae.cloneElement(Ae.Children.only(this.props.children), {
				onMouseDown: this.onMouseDown,
				onMouseUp: this.onMouseUp,
				onTouchEnd: this.onTouchEnd
			});
		}
	};
	Pe.displayName = "DraggableCore", Pe.propTypes = {
		allowAnyClick: je.default.bool,
		allowMobileScroll: je.default.bool,
		children: je.default.node.isRequired,
		disabled: je.default.bool,
		enableUserSelectHack: je.default.bool,
		offsetParent: function(e, t) {
			if (e[t] && e[t].nodeType !== 1) throw Error("Draggable's offsetParent must be a DOM Node.");
		},
		grid: je.default.arrayOf(je.default.number),
		handle: je.default.string,
		cancel: je.default.string,
		nodeRef: je.default.object,
		nonce: je.default.string,
		onStart: je.default.func,
		onDrag: je.default.func,
		onStop: je.default.func,
		onMouseDown: je.default.func,
		scale: je.default.number,
		className: x,
		style: x,
		transform: x
	}, Pe.defaultProps = {
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
	var Fe = class extends p.Component {
		constructor(e) {
			super(e), this.onDragStart = (e, t) => {
				if (this.props.onStart(e, De(this, t)) === !1) return !1;
				this.setState({
					dragging: !0,
					dragged: !0
				});
			}, this.onDrag = (e, t) => {
				if (!this.state.dragging) return !1;
				let n = De(this, t), r = {
					x: n.x,
					y: n.y,
					slackX: 0,
					slackY: 0
				};
				if (this.props.bounds) {
					let { x: e, y: t } = r;
					r.x += this.state.slackX, r.y += this.state.slackY;
					let [i, a] = xe(this, r.x, r.y);
					r.x = i, r.y = a, r.slackX = this.state.slackX + (e - r.x), r.slackY = this.state.slackY + (t - r.y), n.x = r.x, n.y = r.y, n.deltaX = r.x - this.state.x, n.deltaY = r.y - this.state.y;
				}
				if (this.props.onDrag(e, n) === !1) return !1;
				this.setState(r);
			}, this.onDragStop = (e, t) => {
				if (!this.state.dragging || this.props.onStop(e, De(this, t)) === !1) return !1;
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
				x: Ce(this) && m ? this.state.x : h.x,
				y: we(this) && m ? this.state.y : h.y
			};
			this.state.isElementSVG ? f = fe(_, c) : d = ue(_, c);
			let v = p.Children.only(n), y = (0, g.clsx)(v.props.className || "", i, {
				[a]: this.state.dragging,
				[o]: this.state.dragged
			});
			return /* @__PURE__ */ p.createElement(Pe, {
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
	Fe.displayName = "Draggable", Fe.propTypes = {
		...Pe.propTypes,
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
		className: x,
		style: x,
		transform: x
	}, Fe.defaultProps = {
		...Pe.defaultProps,
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
	}, 0 && (t.exports = { DraggableCore: Pe });
})), _e = /* @__PURE__ */ s(((e, t) => {
	var n = ge(), r = n.DraggableCore, i = n.default || n;
	t.exports = i, t.exports.default = i, t.exports.DraggableCore = r;
})), ve = /* @__PURE__ */ s(((e) => {
	e.__esModule = !0, e.cloneElement = c;
	var t = n(w());
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
		return t = o(t), t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function o(e) {
		var t = s(e, "string");
		return typeof t == "symbol" ? t : String(t);
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
})), ye = /* @__PURE__ */ s(((e) => {
	e.__esModule = !0, e.resizableProps = void 0;
	var t = n(he());
	_e();
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
			offsetParent: t.default.node,
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
			var e = [...arguments], n = e[0];
			if (n.axis === "both" || n.axis === "y") {
				var r;
				return (r = t.default.number).isRequired.apply(r, e);
			}
			return t.default.number.apply(t.default, e);
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
			var e = [...arguments], n = e[0];
			if (n.axis === "both" || n.axis === "x") {
				var r;
				return (r = t.default.number).isRequired.apply(r, e);
			}
			return t.default.number.apply(t.default, e);
		}
	};
})), be = /* @__PURE__ */ s(((e) => {
	e.__esModule = !0, e.default = void 0;
	var t = s(w()), n = _e(), r = ve(), i = ye(), a = [
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
	function o(e) {
		if (typeof WeakMap != "function") return null;
		var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (o = function(e) {
			return e ? n : t;
		})(e);
	}
	function s(e, t) {
		if (!t && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var n = o(t);
		if (n && n.has(e)) return n.get(e);
		var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var a in e) if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
			var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
			s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a];
		}
		return r.default = e, n && n.set(e, r), r;
	}
	function c() {
		return c = Object.assign ? Object.assign.bind() : function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		}, c.apply(this, arguments);
	}
	function l(e, t) {
		if (e == null) return {};
		for (var n = {}, r = Object.keys(e), i, a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	function u(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function d(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? u(Object(n), !0).forEach(function(t) {
				f(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function f(e, t, n) {
		return t = p(t), t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function p(e) {
		var t = m(e, "string");
		return typeof t == "symbol" ? t : String(t);
	}
	function m(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	function h(e, t) {
		e.prototype = Object.create(t.prototype), e.prototype.constructor = e, g(e, t);
	}
	function g(e, t) {
		return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
			return e.__proto__ = t, e;
		}, g(e, t);
	}
	var _ = /*#__PURE__*/ function(e) {
		h(i, e);
		function i() {
			var t, n = [...arguments];
			return t = e.call.apply(e, [this].concat(n)) || this, t.handleRefs = {}, t.lastHandleRect = null, t.slack = null, t;
		}
		var o = i.prototype;
		return o.componentWillUnmount = function() {
			this.resetData();
		}, o.resetData = function() {
			this.lastHandleRect = this.slack = null;
		}, o.runConstraints = function(e, t) {
			var n = this.props, r = n.minConstraints, i = n.maxConstraints, a = n.lockAspectRatio;
			if (!r && !i && !a) return [e, t];
			if (a) {
				var o = this.props.width / this.props.height, s = e - this.props.width, c = t - this.props.height;
				Math.abs(s) > Math.abs(c * o) ? t = e / o : e = t * o;
			}
			var l = e, u = t, d = this.slack || [0, 0], f = d[0], p = d[1];
			return e += f, t += p, r && (e = Math.max(r[0], e), t = Math.max(r[1], t)), i && (e = Math.min(i[0], e), t = Math.min(i[1], t)), this.slack = [f + (l - e), p + (u - t)], [e, t];
		}, o.resizeHandler = function(e, t) {
			var n = this;
			return function(r, i) {
				var a = i.node, o = i.deltaX, s = i.deltaY;
				e === "onResizeStart" && n.resetData();
				var c = (n.props.axis === "both" || n.props.axis === "x") && t !== "n" && t !== "s", l = (n.props.axis === "both" || n.props.axis === "y") && t !== "e" && t !== "w";
				if (c || l) {
					var u = t[0], d = t[t.length - 1], f = a.getBoundingClientRect();
					if (n.lastHandleRect != null) {
						if (d === "w") {
							var p = f.left - n.lastHandleRect.left;
							o += p;
						}
						if (u === "n") {
							var m = f.top - n.lastHandleRect.top;
							s += m;
						}
					}
					n.lastHandleRect = f, d === "w" && (o = -o), u === "n" && (s = -s);
					var h = n.props.width + (c ? o / n.props.transformScale : 0), g = n.props.height + (l ? s / n.props.transformScale : 0), _ = n.runConstraints(h, g);
					h = _[0], g = _[1];
					var v = h !== n.props.width || g !== n.props.height, y = typeof n.props[e] == "function" ? n.props[e] : null;
					y && (e !== "onResize" || v) && (r.persist == null || r.persist(), y(r, {
						node: a,
						size: {
							width: h,
							height: g
						},
						handle: t
					})), e === "onResizeStop" && n.resetData();
				}
			};
		}, o.renderResizeHandle = function(e, n) {
			var r = this.props.handle;
			if (!r) return /*#__PURE__*/ t.createElement("span", {
				className: "react-resizable-handle react-resizable-handle-" + e,
				ref: n
			});
			if (typeof r == "function") return r(e, n);
			var i = typeof r.type == "string", a = d({ ref: n }, i ? {} : { handleAxis: e });
			return /*#__PURE__*/ t.cloneElement(r, a);
		}, o.render = function() {
			var e = this, i = this.props, o = i.children, s = i.className, u = i.draggableOpts;
			i.width, i.height, i.handle, i.handleSize, i.lockAspectRatio, i.axis, i.minConstraints, i.maxConstraints, i.onResize, i.onResizeStop, i.onResizeStart;
			var f = i.resizeHandles;
			i.transformScale;
			var p = l(i, a);
			return (0, r.cloneElement)(o, d(d({}, p), {}, {
				className: (s ? s + " " : "") + "react-resizable",
				children: [].concat(o.props.children, f.map(function(r) {
					var i = e.handleRefs[r] ?? (e.handleRefs[r] = /*#__PURE__*/ t.createRef());
					return /*#__PURE__*/ t.createElement(n.DraggableCore, c({}, u, {
						nodeRef: i,
						key: "resizableHandle-" + r,
						onStop: e.resizeHandler("onResizeStop", r),
						onStart: e.resizeHandler("onResizeStart", r),
						onDrag: e.resizeHandler("onResize", r)
					}), e.renderResizeHandle(r, i));
				}))
			}));
		}, i;
	}(t.Component);
	e.default = _, _.propTypes = i.resizableProps, _.defaultProps = {
		axis: "both",
		handleSize: [20, 20],
		lockAspectRatio: !1,
		minConstraints: [20, 20],
		maxConstraints: [Infinity, Infinity],
		resizeHandles: ["se"],
		transformScale: 1
	};
})), xe = /* @__PURE__ */ s(((e) => {
	e.__esModule = !0, e.default = void 0;
	var t = c(w()), n = o(he()), r = o(be()), i = ye(), a = [
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
	function s(e) {
		if (typeof WeakMap != "function") return null;
		var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (s = function(e) {
			return e ? n : t;
		})(e);
	}
	function c(e, t) {
		if (!t && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var n = s(t);
		if (n && n.has(e)) return n.get(e);
		var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var a in e) if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
			var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
			o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a];
		}
		return r.default = e, n && n.set(e, r), r;
	}
	function l() {
		return l = Object.assign ? Object.assign.bind() : function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		}, l.apply(this, arguments);
	}
	function u(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function d(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? u(Object(n), !0).forEach(function(t) {
				f(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function f(e, t, n) {
		return t = p(t), t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function p(e) {
		var t = m(e, "string");
		return typeof t == "symbol" ? t : String(t);
	}
	function m(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	function h(e, t) {
		if (e == null) return {};
		for (var n = {}, r = Object.keys(e), i, a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	function g(e, t) {
		e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _(e, t);
	}
	function _(e, t) {
		return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
			return e.__proto__ = t, e;
		}, _(e, t);
	}
	var v = /*#__PURE__*/ function(e) {
		g(n, e);
		function n() {
			var t, n = [...arguments];
			return t = e.call.apply(e, [this].concat(n)) || this, t.state = {
				width: t.props.width,
				height: t.props.height,
				propsWidth: t.props.width,
				propsHeight: t.props.height
			}, t.onResize = function(e, n) {
				var r = n.size;
				t.props.onResize ? (e.persist == null || e.persist(), t.setState(r, function() {
					return t.props.onResize && t.props.onResize(e, n);
				})) : t.setState(r);
			}, t;
		}
		n.getDerivedStateFromProps = function(e, t) {
			return t.propsWidth !== e.width || t.propsHeight !== e.height ? {
				width: e.width,
				height: e.height,
				propsWidth: e.width,
				propsHeight: e.height
			} : null;
		};
		var i = n.prototype;
		return i.render = function() {
			var e = this.props, n = e.handle, i = e.handleSize;
			e.onResize;
			var o = e.onResizeStart, s = e.onResizeStop, c = e.draggableOpts, u = e.minConstraints, f = e.maxConstraints, p = e.lockAspectRatio, m = e.axis;
			e.width, e.height;
			var g = e.resizeHandles, _ = e.style, v = e.transformScale, y = h(e, a);
			return /*#__PURE__*/ t.createElement(r.default, {
				axis: m,
				draggableOpts: c,
				handle: n,
				handleSize: i,
				height: this.state.height,
				lockAspectRatio: p,
				maxConstraints: f,
				minConstraints: u,
				onResizeStart: o,
				onResize: this.onResize,
				onResizeStop: s,
				resizeHandles: g,
				transformScale: v,
				width: this.state.width
			}, /*#__PURE__*/ t.createElement("div", l({}, y, { style: d(d({}, _), {}, {
				width: this.state.width + "px",
				height: this.state.height + "px"
			}) })));
		}, n;
	}(t.Component);
	e.default = v, v.propTypes = d(d({}, i.resizableProps), {}, { children: n.default.element });
})), Se = /* @__PURE__ */ s(((e, t) => {
	t.exports = function() {
		throw Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
	}, t.exports.Resizable = be().default, t.exports.ResizableBox = xe().default;
})), Ce = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.resizeHandleType = e.resizeHandleAxesType = e.default = void 0;
	var t = r(he()), n = r(w());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	var i = e.resizeHandleAxesType = t.default.arrayOf(t.default.oneOf([
		"s",
		"w",
		"e",
		"n",
		"sw",
		"nw",
		"se",
		"ne"
	])), a = e.resizeHandleType = t.default.oneOfType([t.default.node, t.default.func]);
	e.default = {
		className: t.default.string,
		style: t.default.object,
		width: t.default.number,
		autoSize: t.default.bool,
		cols: t.default.number,
		draggableCancel: t.default.string,
		draggableHandle: t.default.string,
		verticalCompact: function(e) {
			e.verticalCompact;
		},
		compactType: t.default.oneOf(["vertical", "horizontal"]),
		layout: function(e) {
			var t = e.layout;
			t !== void 0 && k().validateLayout(t, "layout");
		},
		margin: t.default.arrayOf(t.default.number),
		containerPadding: t.default.arrayOf(t.default.number),
		rowHeight: t.default.number,
		maxRows: t.default.number,
		isBounded: t.default.bool,
		isDraggable: t.default.bool,
		isResizable: t.default.bool,
		allowOverlap: t.default.bool,
		preventCollision: t.default.bool,
		useCSSTransforms: t.default.bool,
		transformScale: t.default.number,
		isDroppable: t.default.bool,
		resizeHandles: i,
		resizeHandle: a,
		onLayoutChange: t.default.func,
		onDragStart: t.default.func,
		onDrag: t.default.func,
		onDragStop: t.default.func,
		onResizeStart: t.default.func,
		onResize: t.default.func,
		onResizeStop: t.default.func,
		onDrop: t.default.func,
		droppingItem: t.default.shape({
			i: t.default.string.isRequired,
			w: t.default.number.isRequired,
			h: t.default.number.isRequired
		}),
		children: function(e, t) {
			let r = e[t], i = {};
			n.default.Children.forEach(r, function(e) {
				if (e?.key != null) {
					if (i[e.key]) throw Error("Duplicate child key \"" + e.key + "\" found! This will cause problems in ReactGridLayout.");
					i[e.key] = !0;
				}
			});
		},
		innerRef: t.default.any
	};
})), we = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = u(w()), n = ne(), r = u(he()), i = _e(), a = Se(), o = k(), s = A(), c = Ce(), l = u(de());
	function u(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function d(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function f(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? d(Object(n), !0).forEach(function(t) {
				p(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function p(e, t, n) {
		return (t = m(t)) in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function m(e) {
		var t = h(e, "string");
		return typeof t == "symbol" ? t : t + "";
	}
	function h(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	var g = class extends t.default.Component {
		constructor() {
			super(...arguments), p(this, "state", {
				resizing: null,
				dragging: null,
				className: ""
			}), p(this, "elementRef", /*#__PURE__*/ t.default.createRef()), p(this, "onDragStart", (e, t) => {
				let { node: n } = t, { onDragStart: r, transformScale: i } = this.props;
				if (!r) return;
				let a = {
					top: 0,
					left: 0
				}, { offsetParent: o } = n;
				if (!o) return;
				let c = o.getBoundingClientRect(), l = n.getBoundingClientRect(), u = l.left / i, d = c.left / i, f = l.top / i, p = c.top / i;
				a.left = u - d + o.scrollLeft, a.top = f - p + o.scrollTop, this.setState({ dragging: a });
				let { x: m, y: h } = (0, s.calcXY)(this.getPositionParams(), a.top, a.left, this.props.w, this.props.h);
				return r.call(this, this.props.i, m, h, {
					e,
					node: n,
					newPosition: a
				});
			}), p(this, "onDrag", (e, t, r) => {
				let { node: i, deltaX: a, deltaY: o } = t, { onDrag: c } = this.props;
				if (!c) return;
				if (!this.state.dragging) throw Error("onDrag called before onDragStart.");
				let l = this.state.dragging.top + o, u = this.state.dragging.left + a, { isBounded: d, i: f, w: p, h: m, containerWidth: h } = this.props, g = this.getPositionParams();
				if (d) {
					let { offsetParent: e } = i;
					if (e) {
						let { margin: t, rowHeight: n } = this.props, r = e.clientHeight - (0, s.calcGridItemWHPx)(m, n, t[1]);
						l = (0, s.clamp)(l, 0, r);
						let i = (0, s.calcGridColWidth)(g), a = h - (0, s.calcGridItemWHPx)(p, i, t[0]);
						u = (0, s.clamp)(u, 0, a);
					}
				}
				let _ = {
					top: l,
					left: u
				};
				r ? this.setState({ dragging: _ }) : (0, n.flushSync)(() => {
					this.setState({ dragging: _ });
				});
				let { x: v, y } = (0, s.calcXY)(g, l, u, p, m);
				return c.call(this, f, v, y, {
					e,
					node: i,
					newPosition: _
				});
			}), p(this, "onDragStop", (e, t) => {
				let { node: n } = t, { onDragStop: r } = this.props;
				if (!r) return;
				if (!this.state.dragging) throw Error("onDragEnd called before onDragStart.");
				let { w: i, h: a, i: o } = this.props, { left: c, top: l } = this.state.dragging, u = {
					top: l,
					left: c
				};
				this.setState({ dragging: null });
				let { x: d, y: f } = (0, s.calcXY)(this.getPositionParams(), l, c, i, a);
				return r.call(this, o, d, f, {
					e,
					node: n,
					newPosition: u
				});
			}), p(this, "onResizeStop", (e, t, n) => this.onResizeHandler(e, t, n, "onResizeStop")), p(this, "onResizeStart", (e, t, n) => this.onResizeHandler(e, t, n, "onResizeStart")), p(this, "onResize", (e, t, n) => this.onResizeHandler(e, t, n, "onResize"));
		}
		shouldComponentUpdate(e, t) {
			if (this.props.children !== e.children || this.props.droppingPosition !== e.droppingPosition) return !0;
			let n = (0, s.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), r = (0, s.calcGridItemPosition)(this.getPositionParams(e), e.x, e.y, e.w, e.h, t);
			return !(0, o.fastPositionEqual)(n, r) || this.props.useCSSTransforms !== e.useCSSTransforms;
		}
		componentDidMount() {
			this.moveDroppingItem({});
		}
		componentDidUpdate(e) {
			this.moveDroppingItem(e);
		}
		moveDroppingItem(e) {
			let { droppingPosition: t } = this.props;
			if (!t) return;
			let n = this.elementRef.current;
			if (!n) return;
			let r = e.droppingPosition || {
				left: 0,
				top: 0
			}, { dragging: i } = this.state, a = i && t.left !== r.left || t.top !== r.top;
			if (!i) this.onDragStart(t.e, {
				node: n,
				deltaX: t.left,
				deltaY: t.top
			});
			else if (a) {
				let e = t.left - i.left, r = t.top - i.top;
				this.onDrag(t.e, {
					node: n,
					deltaX: e,
					deltaY: r
				}, !0);
			}
		}
		getPositionParams() {
			let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
			return {
				cols: e.cols,
				containerPadding: e.containerPadding,
				containerWidth: e.containerWidth,
				margin: e.margin,
				maxRows: e.maxRows,
				rowHeight: e.rowHeight
			};
		}
		createStyle(e) {
			let { usePercentages: t, containerWidth: n, useCSSTransforms: r } = this.props, i;
			return r ? i = (0, o.setTransform)(e) : (i = (0, o.setTopLeft)(e), t && (i.left = (0, o.perc)(e.left / n), i.width = (0, o.perc)(e.width / n))), i;
		}
		mixinDraggable(e, n) {
			return /*#__PURE__*/ t.default.createElement(i.DraggableCore, {
				disabled: !n,
				onStart: this.onDragStart,
				onDrag: this.onDrag,
				onStop: this.onDragStop,
				handle: this.props.handle,
				cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
				scale: this.props.transformScale,
				nodeRef: this.elementRef
			}, e);
		}
		curryResizeHandler(e, t) {
			return (n, r) => t(n, r, e);
		}
		mixinResizable(e, n, r) {
			let { cols: i, minW: o, minH: c, maxW: l, maxH: u, transformScale: d, resizeHandles: f, resizeHandle: p } = this.props, m = this.getPositionParams(), h = (0, s.calcGridItemPosition)(m, 0, 0, i, 0).width, g = (0, s.calcGridItemPosition)(m, 0, 0, o, c), _ = (0, s.calcGridItemPosition)(m, 0, 0, l, u), v = [g.width, g.height], y = [Math.min(_.width, h), Math.min(_.height, Infinity)];
			return /*#__PURE__*/ t.default.createElement(a.Resizable, {
				draggableOpts: { disabled: !r },
				className: r ? void 0 : "react-resizable-hide",
				width: n.width,
				height: n.height,
				minConstraints: v,
				maxConstraints: y,
				onResizeStop: this.curryResizeHandler(n, this.onResizeStop),
				onResizeStart: this.curryResizeHandler(n, this.onResizeStart),
				onResize: this.curryResizeHandler(n, this.onResize),
				transformScale: d,
				resizeHandles: f,
				handle: p
			}, e);
		}
		onResizeHandler(e, t, r, i) {
			let { node: a, size: c, handle: l } = t, u = this.props[i];
			if (!u) return;
			let { x: d, y: f, i: p, maxH: m, minH: h, containerWidth: g } = this.props, { minW: _, maxW: v } = this.props, y = c;
			a && (y = (0, o.resizeItemInDirection)(l, r, c, g), (0, n.flushSync)(() => {
				this.setState({ resizing: i === "onResizeStop" ? null : y });
			}));
			let { w: b, h: x } = (0, s.calcWH)(this.getPositionParams(), y.width, y.height, d, f, l);
			b = (0, s.clamp)(b, Math.max(_, 1), v), x = (0, s.clamp)(x, h, m), u.call(this, p, b, x, {
				e,
				node: a,
				size: y,
				handle: l
			});
		}
		render() {
			let { x: e, y: n, w: r, h: i, isDraggable: a, isResizable: o, droppingPosition: c, useCSSTransforms: u } = this.props, d = (0, s.calcGridItemPosition)(this.getPositionParams(), e, n, r, i, this.state), p = t.default.Children.only(this.props.children), m = /*#__PURE__*/ t.default.cloneElement(p, {
				ref: this.elementRef,
				className: (0, l.default)("react-grid-item", p.props.className, this.props.className, {
					static: this.props.static,
					resizing: !!this.state.resizing,
					"react-draggable": a,
					"react-draggable-dragging": !!this.state.dragging,
					dropping: !!c,
					cssTransforms: u
				}),
				style: f(f(f({}, this.props.style), p.props.style), this.createStyle(d))
			});
			return m = this.mixinResizable(m, d, o), m = this.mixinDraggable(m, a), m;
		}
	};
	e.default = g, p(g, "propTypes", {
		children: r.default.element,
		cols: r.default.number.isRequired,
		containerWidth: r.default.number.isRequired,
		rowHeight: r.default.number.isRequired,
		margin: r.default.array.isRequired,
		maxRows: r.default.number.isRequired,
		containerPadding: r.default.array.isRequired,
		x: r.default.number.isRequired,
		y: r.default.number.isRequired,
		w: r.default.number.isRequired,
		h: r.default.number.isRequired,
		minW: function(e, t) {
			let n = e[t];
			if (typeof n != "number") return /* @__PURE__ */ Error("minWidth not Number");
			if (n > e.w || n > e.maxW) return /* @__PURE__ */ Error("minWidth larger than item width/maxWidth");
		},
		maxW: function(e, t) {
			let n = e[t];
			if (typeof n != "number") return /* @__PURE__ */ Error("maxWidth not Number");
			if (n < e.w || n < e.minW) return /* @__PURE__ */ Error("maxWidth smaller than item width/minWidth");
		},
		minH: function(e, t) {
			let n = e[t];
			if (typeof n != "number") return /* @__PURE__ */ Error("minHeight not Number");
			if (n > e.h || n > e.maxH) return /* @__PURE__ */ Error("minHeight larger than item height/maxHeight");
		},
		maxH: function(e, t) {
			let n = e[t];
			if (typeof n != "number") return /* @__PURE__ */ Error("maxHeight not Number");
			if (n < e.h || n < e.minH) return /* @__PURE__ */ Error("maxHeight smaller than item height/minHeight");
		},
		i: r.default.string.isRequired,
		resizeHandles: c.resizeHandleAxesType,
		resizeHandle: c.resizeHandleType,
		onDragStop: r.default.func,
		onDragStart: r.default.func,
		onDrag: r.default.func,
		onResizeStop: r.default.func,
		onResizeStart: r.default.func,
		onResize: r.default.func,
		isDraggable: r.default.bool.isRequired,
		isResizable: r.default.bool.isRequired,
		isBounded: r.default.bool.isRequired,
		static: r.default.bool,
		useCSSTransforms: r.default.bool.isRequired,
		transformScale: r.default.number,
		className: r.default.string,
		handle: r.default.string,
		cancel: r.default.string,
		droppingPosition: r.default.shape({
			e: r.default.object.isRequired,
			left: r.default.number.isRequired,
			top: r.default.number.isRequired
		})
	}), p(g, "defaultProps", {
		className: "",
		cancel: "",
		handle: "",
		minH: 1,
		minW: 1,
		maxH: Infinity,
		maxW: Infinity,
		transformScale: 1
	});
})), Te = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = l(w()), n = ue(), r = c(de()), i = k(), a = A(), o = c(we()), s = c(Ce());
	function c(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function l(e, t) {
		if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
		return (l = function(e, t) {
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
	function u(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function d(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? u(Object(n), !0).forEach(function(t) {
				f(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function f(e, t, n) {
		return (t = p(t)) in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function p(e) {
		var t = m(e, "string");
		return typeof t == "symbol" ? t : t + "";
	}
	function m(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	var h = "react-grid-layout", g = !1;
	try {
		g = /firefox/i.test(navigator.userAgent);
	} catch {}
	var _ = class extends t.Component {
		constructor() {
			super(...arguments), f(this, "state", {
				activeDrag: null,
				layout: (0, i.synchronizeLayoutWithChildren)(this.props.layout, this.props.children, this.props.cols, (0, i.compactType)(this.props), this.props.allowOverlap),
				mounted: !1,
				oldDragItem: null,
				oldLayout: null,
				oldResizeItem: null,
				resizing: !1,
				droppingDOMNode: null,
				children: []
			}), f(this, "dragEnterCounter", 0), f(this, "onDragStart", (e, t, n, r) => {
				let { e: a, node: o } = r, { layout: s } = this.state, c = (0, i.getLayoutItem)(s, e);
				if (!c) return;
				let l = {
					w: c.w,
					h: c.h,
					x: c.x,
					y: c.y,
					placeholder: !0,
					i: e
				};
				return this.setState({
					oldDragItem: (0, i.cloneLayoutItem)(c),
					oldLayout: s,
					activeDrag: l
				}), this.props.onDragStart(s, c, c, null, a, o);
			}), f(this, "onDrag", (e, t, n, r) => {
				let { e: a, node: o } = r, { oldDragItem: s } = this.state, { layout: c } = this.state, { cols: l, allowOverlap: u, preventCollision: d } = this.props, f = (0, i.getLayoutItem)(c, e);
				if (!f) return;
				let p = {
					w: f.w,
					h: f.h,
					x: f.x,
					y: f.y,
					placeholder: !0,
					i: e
				};
				c = (0, i.moveElement)(c, f, t, n, !0, d, (0, i.compactType)(this.props), l, u), this.props.onDrag(c, s, f, p, a, o), this.setState({
					layout: u ? c : (0, i.compact)(c, (0, i.compactType)(this.props), l),
					activeDrag: p
				});
			}), f(this, "onDragStop", (e, t, n, r) => {
				let { e: a, node: o } = r;
				if (!this.state.activeDrag) return;
				let { oldDragItem: s } = this.state, { layout: c } = this.state, { cols: l, preventCollision: u, allowOverlap: d } = this.props, f = (0, i.getLayoutItem)(c, e);
				if (!f) return;
				c = (0, i.moveElement)(c, f, t, n, !0, u, (0, i.compactType)(this.props), l, d);
				let p = d ? c : (0, i.compact)(c, (0, i.compactType)(this.props), l);
				this.props.onDragStop(p, s, f, null, a, o);
				let { oldLayout: m } = this.state;
				this.setState({
					activeDrag: null,
					layout: p,
					oldDragItem: null,
					oldLayout: null
				}), this.onLayoutMaybeChanged(p, m);
			}), f(this, "onResizeStart", (e, t, n, r) => {
				let { e: a, node: o } = r, { layout: s } = this.state, c = (0, i.getLayoutItem)(s, e);
				c && (this.setState({
					oldResizeItem: (0, i.cloneLayoutItem)(c),
					oldLayout: this.state.layout,
					resizing: !0
				}), this.props.onResizeStart(s, c, c, null, a, o));
			}), f(this, "onResize", (e, t, n, r) => {
				let { e: a, node: o, size: s, handle: c } = r, { oldResizeItem: l } = this.state, { layout: u } = this.state, { cols: f, preventCollision: p, allowOverlap: m } = this.props, h = !1, g, _, v, [y, b] = (0, i.withLayoutItem)(u, e, (e) => {
					let r;
					return _ = e.x, v = e.y, [
						"sw",
						"w",
						"nw",
						"n",
						"ne"
					].indexOf(c) !== -1 && ([
						"sw",
						"nw",
						"w"
					].indexOf(c) !== -1 && (_ = e.x + (e.w - t), t = e.x !== _ && _ < 0 ? e.w : t, _ = _ < 0 ? 0 : _), [
						"ne",
						"n",
						"nw"
					].indexOf(c) !== -1 && (v = e.y + (e.h - n), n = e.y !== v && v < 0 ? e.h : n, v = v < 0 ? 0 : v), h = !0), p && !m && (r = (0, i.getAllCollisions)(u, d(d({}, e), {}, {
						w: t,
						h: n,
						x: _,
						y: v
					})).filter((t) => t.i !== e.i).length > 0, r && (v = e.y, n = e.h, _ = e.x, t = e.w, h = !1)), e.w = t, e.h = n, e;
				});
				if (!b) return;
				g = y, h && (g = (0, i.moveElement)(y, b, _, v, !0, this.props.preventCollision, (0, i.compactType)(this.props), f, m));
				let x = {
					w: b.w,
					h: b.h,
					x: b.x,
					y: b.y,
					static: !0,
					i: e
				};
				this.props.onResize(g, l, b, x, a, o), this.setState({
					layout: m ? g : (0, i.compact)(g, (0, i.compactType)(this.props), f),
					activeDrag: x
				});
			}), f(this, "onResizeStop", (e, t, n, r) => {
				let { e: a, node: o } = r, { layout: s, oldResizeItem: c } = this.state, { cols: l, allowOverlap: u } = this.props, d = (0, i.getLayoutItem)(s, e), f = u ? s : (0, i.compact)(s, (0, i.compactType)(this.props), l);
				this.props.onResizeStop(f, c, d, null, a, o);
				let { oldLayout: p } = this.state;
				this.setState({
					activeDrag: null,
					layout: f,
					oldResizeItem: null,
					oldLayout: null,
					resizing: !1
				}), this.onLayoutMaybeChanged(f, p);
			}), f(this, "onDragOver", (e) => {
				var n;
				if (e.preventDefault(), e.stopPropagation(), g && !((n = e.nativeEvent.target) != null && n.classList.contains(h))) return !1;
				let { droppingItem: r, onDropDragOver: i, margin: o, cols: s, rowHeight: c, maxRows: l, width: u, containerPadding: f, transformScale: p } = this.props, m = i?.(e);
				if (m === !1) return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
				let _ = d(d({}, r), m), { layout: v } = this.state, y = e.currentTarget.getBoundingClientRect(), b = e.clientX - y.left, x = e.clientY - y.top, S = {
					left: b / p,
					top: x / p,
					e
				};
				if (!this.state.droppingDOMNode) {
					let e = {
						cols: s,
						margin: o,
						maxRows: l,
						rowHeight: c,
						containerWidth: u,
						containerPadding: f || o
					}, n = (0, a.calcXY)(e, x, b, _.w, _.h);
					this.setState({
						droppingDOMNode: /*#__PURE__*/ t.createElement("div", { key: _.i }),
						droppingPosition: S,
						layout: [...v, d(d({}, _), {}, {
							x: n.x,
							y: n.y,
							static: !1,
							isDraggable: !0
						})]
					});
				} else if (this.state.droppingPosition) {
					let { left: e, top: t } = this.state.droppingPosition;
					(e != b || t != x) && this.setState({ droppingPosition: S });
				}
			}), f(this, "removeDroppingPlaceholder", () => {
				let { droppingItem: e, cols: t } = this.props, { layout: n } = this.state, r = (0, i.compact)(n.filter((t) => t.i !== e.i), (0, i.compactType)(this.props), t, this.props.allowOverlap);
				this.setState({
					layout: r,
					droppingDOMNode: null,
					activeDrag: null,
					droppingPosition: void 0
				});
			}), f(this, "onDragLeave", (e) => {
				e.preventDefault(), e.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
			}), f(this, "onDragEnter", (e) => {
				e.preventDefault(), e.stopPropagation(), this.dragEnterCounter++;
			}), f(this, "onDrop", (e) => {
				e.preventDefault(), e.stopPropagation();
				let { droppingItem: t } = this.props, { layout: n } = this.state, r = n.find((e) => e.i === t.i);
				this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(n, r, e);
			});
		}
		componentDidMount() {
			this.setState({ mounted: !0 }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
		}
		static getDerivedStateFromProps(e, t) {
			let r;
			return t.activeDrag ? null : (!(0, n.deepEqual)(e.layout, t.propsLayout) || e.compactType !== t.compactType ? r = e.layout : (0, i.childrenEqual)(e.children, t.children) || (r = t.layout), r ? {
				layout: (0, i.synchronizeLayoutWithChildren)(r, e.children, e.cols, (0, i.compactType)(e), e.allowOverlap),
				compactType: e.compactType,
				children: e.children,
				propsLayout: e.layout
			} : null);
		}
		shouldComponentUpdate(e, t) {
			return this.props.children !== e.children || !(0, i.fastRGLPropsEqual)(this.props, e, n.deepEqual) || this.state.activeDrag !== t.activeDrag || this.state.mounted !== t.mounted || this.state.droppingPosition !== t.droppingPosition;
		}
		componentDidUpdate(e, t) {
			if (!this.state.activeDrag) {
				let e = this.state.layout, n = t.layout;
				this.onLayoutMaybeChanged(e, n);
			}
		}
		containerHeight() {
			if (!this.props.autoSize) return;
			let e = (0, i.bottom)(this.state.layout), t = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
			return e * this.props.rowHeight + (e - 1) * this.props.margin[1] + t * 2 + "px";
		}
		onLayoutMaybeChanged(e, t) {
			t ||= this.state.layout, (0, n.deepEqual)(t, e) || this.props.onLayoutChange(e);
		}
		placeholder() {
			let { activeDrag: e } = this.state;
			if (!e) return null;
			let { width: n, cols: r, margin: i, containerPadding: a, rowHeight: s, maxRows: c, useCSSTransforms: l, transformScale: u } = this.props;
			return /*#__PURE__*/ t.createElement(o.default, {
				w: e.w,
				h: e.h,
				x: e.x,
				y: e.y,
				i: e.i,
				className: `react-grid-placeholder ${this.state.resizing ? "placeholder-resizing" : ""}`,
				containerWidth: n,
				cols: r,
				margin: i,
				containerPadding: a || i,
				maxRows: c,
				rowHeight: s,
				isDraggable: !1,
				isResizable: !1,
				isBounded: !1,
				useCSSTransforms: l,
				transformScale: u
			}, /*#__PURE__*/ t.createElement("div", null));
		}
		processGridItem(e, n) {
			if (!e || !e.key) return;
			let r = (0, i.getLayoutItem)(this.state.layout, String(e.key));
			if (!r) return null;
			let { width: a, cols: s, margin: c, containerPadding: l, rowHeight: u, maxRows: d, isDraggable: f, isResizable: p, isBounded: m, useCSSTransforms: h, transformScale: g, draggableCancel: _, draggableHandle: v, resizeHandles: y, resizeHandle: b } = this.props, { mounted: x, droppingPosition: S } = this.state, C = typeof r.isDraggable == "boolean" ? r.isDraggable : !r.static && f, w = typeof r.isResizable == "boolean" ? r.isResizable : !r.static && p, ee = r.resizeHandles || y, te = C && m && r.isBounded !== !1;
			return /*#__PURE__*/ t.createElement(o.default, {
				containerWidth: a,
				cols: s,
				margin: c,
				containerPadding: l || c,
				maxRows: d,
				rowHeight: u,
				cancel: _,
				handle: v,
				onDragStop: this.onDragStop,
				onDragStart: this.onDragStart,
				onDrag: this.onDrag,
				onResizeStart: this.onResizeStart,
				onResize: this.onResize,
				onResizeStop: this.onResizeStop,
				isDraggable: C,
				isResizable: w,
				isBounded: te,
				useCSSTransforms: h && x,
				usePercentages: !x,
				transformScale: g,
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
				droppingPosition: n ? S : void 0,
				resizeHandles: ee,
				resizeHandle: b
			}, e);
		}
		render() {
			let { className: e, style: n, isDroppable: a, innerRef: o } = this.props, s = (0, r.default)(h, e), c = d({ height: this.containerHeight() }, n);
			return /*#__PURE__*/ t.createElement("div", {
				ref: o,
				className: s,
				style: c,
				onDrop: a ? this.onDrop : i.noop,
				onDragLeave: a ? this.onDragLeave : i.noop,
				onDragEnter: a ? this.onDragEnter : i.noop,
				onDragOver: a ? this.onDragOver : i.noop
			}, t.Children.map(this.props.children, (e) => this.processGridItem(e)), a && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
		}
	};
	e.default = _, f(_, "displayName", "ReactGridLayout"), f(_, "propTypes", s.default), f(_, "defaultProps", {
		autoSize: !0,
		cols: 12,
		className: "",
		style: {},
		draggableHandle: "",
		draggableCancel: "",
		containerPadding: null,
		rowHeight: 150,
		maxRows: Infinity,
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
		onLayoutChange: i.noop,
		onDragStart: i.noop,
		onDrag: i.noop,
		onDragStop: i.noop,
		onResizeStart: i.noop,
		onResize: i.noop,
		onResizeStop: i.noop,
		onDrop: i.noop,
		onDropDragOver: i.noop
	});
})), Ee = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.findOrGenerateResponsiveLayout = i, e.getBreakpointFromWidth = n, e.getColsFromBreakpoint = r, e.sortBreakpoints = a;
	var t = k();
	function n(e, t) {
		let n = a(e), r = n[0];
		for (let i = 1, a = n.length; i < a; i++) {
			let a = n[i];
			t > e[a] && (r = a);
		}
		return r;
	}
	function r(e, t) {
		if (!t[e]) throw Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + e + " is missing!");
		return t[e];
	}
	function i(e, n, r, i, o, s) {
		if (e[r]) return (0, t.cloneLayout)(e[r]);
		let c = e[i], l = a(n), u = l.slice(l.indexOf(r));
		for (let t = 0, n = u.length; t < n; t++) {
			let n = u[t];
			if (e[n]) {
				c = e[n];
				break;
			}
		}
		return c = (0, t.cloneLayout)(c || []), (0, t.compact)((0, t.correctBounds)(c, { cols: o }), s, o);
	}
	function a(e) {
		return Object.keys(e).sort(function(t, n) {
			return e[t] - e[n];
		});
	}
})), De = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = l(w()), n = c(he()), r = ue(), i = k(), a = Ee(), o = c(Te()), s = [
		"breakpoint",
		"breakpoints",
		"cols",
		"layouts",
		"margin",
		"containerPadding",
		"onBreakpointChange",
		"onLayoutChange",
		"onWidthChange"
	];
	function c(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function l(e, t) {
		if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
		return (l = function(e, t) {
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
	function u() {
		return u = Object.assign ? Object.assign.bind() : function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		}, u.apply(null, arguments);
	}
	function d(e, t) {
		if (e == null) return {};
		var n, r, i = f(e, t);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(e);
			for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
		}
		return i;
	}
	function f(e, t) {
		if (e == null) return {};
		var n = {};
		for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
			if (t.indexOf(r) !== -1) continue;
			n[r] = e[r];
		}
		return n;
	}
	function p(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function m(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? p(Object(n), !0).forEach(function(t) {
				h(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function h(e, t, n) {
		return (t = g(t)) in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function g(e) {
		var t = _(e, "string");
		return typeof t == "symbol" ? t : t + "";
	}
	function _(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	var v = (e) => Object.prototype.toString.call(e);
	function y(e, t) {
		return e == null ? null : Array.isArray(e) ? e : e[t];
	}
	var b = class extends t.Component {
		constructor() {
			super(...arguments), h(this, "state", this.generateInitialState()), h(this, "onLayoutChange", (e) => {
				this.props.onLayoutChange(e, m(m({}, this.props.layouts), {}, { [this.state.breakpoint]: e }));
			});
		}
		generateInitialState() {
			let { width: e, breakpoints: t, layouts: n, cols: r } = this.props, i = (0, a.getBreakpointFromWidth)(t, e), o = (0, a.getColsFromBreakpoint)(i, r), s = this.props.verticalCompact === !1 ? null : this.props.compactType;
			return {
				layout: (0, a.findOrGenerateResponsiveLayout)(n, t, i, i, o, s),
				breakpoint: i,
				cols: o
			};
		}
		static getDerivedStateFromProps(e, t) {
			if (!(0, r.deepEqual)(e.layouts, t.layouts)) {
				let { breakpoint: n, cols: r } = t;
				return {
					layout: (0, a.findOrGenerateResponsiveLayout)(e.layouts, e.breakpoints, n, n, r, e.compactType),
					layouts: e.layouts
				};
			}
			return null;
		}
		componentDidUpdate(e) {
			(this.props.width != e.width || this.props.breakpoint !== e.breakpoint || !(0, r.deepEqual)(this.props.breakpoints, e.breakpoints) || !(0, r.deepEqual)(this.props.cols, e.cols)) && this.onWidthChange(e);
		}
		onWidthChange(e) {
			let { breakpoints: t, cols: n, layouts: r, compactType: o } = this.props, s = this.props.breakpoint || (0, a.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), c = this.state.breakpoint, l = (0, a.getColsFromBreakpoint)(s, n), u = m({}, r);
			if (c !== s || e.breakpoints !== t || e.cols !== n) {
				c in u || (u[c] = (0, i.cloneLayout)(this.state.layout));
				let e = (0, a.findOrGenerateResponsiveLayout)(u, t, s, c, l, o);
				e = (0, i.synchronizeLayoutWithChildren)(e, this.props.children, l, o, this.props.allowOverlap), u[s] = e, this.props.onBreakpointChange(s, l), this.props.onLayoutChange(e, u), this.setState({
					breakpoint: s,
					layout: e,
					cols: l
				});
			}
			let d = y(this.props.margin, s), f = y(this.props.containerPadding, s);
			this.props.onWidthChange(this.props.width, d, l, f);
		}
		render() {
			let e = this.props, { breakpoint: n, breakpoints: r, cols: i, layouts: a, margin: c, containerPadding: l, onBreakpointChange: f, onLayoutChange: p, onWidthChange: m } = e, h = d(e, s);
			return /*#__PURE__*/ t.createElement(o.default, u({}, h, {
				margin: y(c, this.state.breakpoint),
				containerPadding: y(l, this.state.breakpoint),
				onLayoutChange: this.onLayoutChange,
				layout: this.state.layout,
				cols: this.state.cols
			}));
		}
	};
	e.default = b, h(b, "propTypes", {
		breakpoint: n.default.string,
		breakpoints: n.default.object,
		allowOverlap: n.default.bool,
		cols: n.default.object,
		margin: n.default.oneOfType([n.default.array, n.default.object]),
		containerPadding: n.default.oneOfType([n.default.array, n.default.object]),
		layouts(e, t) {
			if (v(e[t]) !== "[object Object]") throw Error("Layout property must be an object. Received: " + v(e[t]));
			Object.keys(e[t]).forEach((t) => {
				if (!(t in e.breakpoints)) throw Error("Each key in layouts must align with a key in breakpoints.");
				(0, i.validateLayout)(e.layouts[t], "layouts." + t);
			});
		},
		width: n.default.number.isRequired,
		onBreakpointChange: n.default.func,
		onLayoutChange: n.default.func,
		onWidthChange: n.default.func
	}), h(b, "defaultProps", {
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
		onBreakpointChange: i.noop,
		onLayoutChange: i.noop,
		onWidthChange: i.noop
	});
})), Oe = /* @__PURE__ */ c({ default: () => nt });
function ke(e, t) {
	var n = !1, r = !1, i = 0;
	function a() {
		n && (n = !1, e()), r && s();
	}
	function o() {
		Ve(a);
	}
	function s() {
		var e = Date.now();
		if (n) {
			if (e - i < He) return;
			r = !0;
		} else n = !0, r = !1, setTimeout(o, t);
		i = e;
	}
	return s;
}
function Ae(e) {
	return parseFloat(e) || 0;
}
function je(e) {
	return [...arguments].slice(1).reduce(function(t, n) {
		var r = e["border-" + n + "-width"];
		return t + Ae(r);
	}, 0);
}
function Me(e) {
	for (var t = [
		"top",
		"right",
		"bottom",
		"left"
	], n = {}, r = 0, i = t; r < i.length; r++) {
		var a = i[r], o = e["padding-" + a];
		n[a] = Ae(o);
	}
	return n;
}
function j(e) {
	var t = e.getBBox();
	return Le(0, 0, t.width, t.height);
}
function Ne(e) {
	var t = e.clientWidth, n = e.clientHeight;
	if (!t && !n) return Ye;
	var r = Je(e).getComputedStyle(e), i = Me(r), a = i.left + i.right, o = i.top + i.bottom, s = Ae(r.width), c = Ae(r.height);
	if (r.boxSizing === "border-box" && (Math.round(s + a) !== t && (s -= je(r, "left", "right") + a), Math.round(c + o) !== n && (c -= je(r, "top", "bottom") + o)), !Pe(e)) {
		var l = Math.round(s + a) - t, u = Math.round(c + o) - n;
		Math.abs(l) !== 1 && (s -= l), Math.abs(u) !== 1 && (c -= u);
	}
	return Le(i.left, i.top, s, c);
}
function Pe(e) {
	return e === Je(e).document.documentElement;
}
function Fe(e) {
	return ze ? Xe(e) ? j(e) : Ne(e) : Ye;
}
function Ie(e) {
	var t = e.x, n = e.y, r = e.width, i = e.height, a = Object.create((typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object).prototype);
	return qe(a, {
		x: t,
		y: n,
		width: r,
		height: i,
		top: n,
		right: t + r,
		bottom: i + n,
		left: t
	}), a;
}
function Le(e, t, n, r) {
	return {
		x: e,
		y: t,
		width: n,
		height: r
	};
}
var Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt = o((() => {
	Re = (function() {
		if (typeof Map < "u") return Map;
		function e(e, t) {
			var n = -1;
			return e.some(function(e, r) {
				return e[0] === t && (n = r, !0);
			}), n;
		}
		return function() {
			function t() {
				this.__entries__ = [];
			}
			return Object.defineProperty(t.prototype, "size", {
				get: function() {
					return this.__entries__.length;
				},
				enumerable: !0,
				configurable: !0
			}), t.prototype.get = function(t) {
				var n = e(this.__entries__, t), r = this.__entries__[n];
				return r && r[1];
			}, t.prototype.set = function(t, n) {
				var r = e(this.__entries__, t);
				~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n]);
			}, t.prototype.delete = function(t) {
				var n = this.__entries__, r = e(n, t);
				~r && n.splice(r, 1);
			}, t.prototype.has = function(t) {
				return !!~e(this.__entries__, t);
			}, t.prototype.clear = function() {
				this.__entries__.splice(0);
			}, t.prototype.forEach = function(e, t) {
				t === void 0 && (t = null);
				for (var n = 0, r = this.__entries__; n < r.length; n++) {
					var i = r[n];
					e.call(t, i[1], i[0]);
				}
			}, t;
		}();
	})(), ze = typeof window < "u" && typeof document < "u" && window.document === document, Be = (function() {
		return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
	})(), Ve = (function() {
		return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Be) : function(e) {
			return setTimeout(function() {
				return e(Date.now());
			}, 1e3 / 60);
		};
	})(), He = 2, Ue = 20, We = [
		"top",
		"right",
		"bottom",
		"left",
		"width",
		"height",
		"size",
		"weight"
	], Ge = typeof MutationObserver < "u", Ke = function() {
		function e() {
			this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ke(this.refresh.bind(this), Ue);
		}
		return e.prototype.addObserver = function(e) {
			~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
		}, e.prototype.removeObserver = function(e) {
			var t = this.observers_, n = t.indexOf(e);
			~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
		}, e.prototype.refresh = function() {
			this.updateObservers_() && this.refresh();
		}, e.prototype.updateObservers_ = function() {
			var e = this.observers_.filter(function(e) {
				return e.gatherActive(), e.hasActive();
			});
			return e.forEach(function(e) {
				return e.broadcastActive();
			}), e.length > 0;
		}, e.prototype.connect_ = function() {
			ze && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ge ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
				attributes: !0,
				childList: !0,
				characterData: !0,
				subtree: !0
			})) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
		}, e.prototype.disconnect_ = function() {
			ze && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
		}, e.prototype.onTransitionEnd_ = function(e) {
			var t = e.propertyName, n = t === void 0 ? "" : t;
			We.some(function(e) {
				return !!~n.indexOf(e);
			}) && this.refresh();
		}, e.getInstance = function() {
			return this.instance_ ||= new e(), this.instance_;
		}, e.instance_ = null, e;
	}(), qe = (function(e, t) {
		for (var n = 0, r = Object.keys(t); n < r.length; n++) {
			var i = r[n];
			Object.defineProperty(e, i, {
				value: t[i],
				enumerable: !1,
				writable: !1,
				configurable: !0
			});
		}
		return e;
	}), Je = (function(e) {
		return e && e.ownerDocument && e.ownerDocument.defaultView || Be;
	}), Ye = Le(0, 0, 0, 0), Xe = (function() {
		return typeof SVGGraphicsElement < "u" ? function(e) {
			return e instanceof Je(e).SVGGraphicsElement;
		} : function(e) {
			return e instanceof Je(e).SVGElement && typeof e.getBBox == "function";
		};
	})(), Ze = function() {
		function e(e) {
			this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Le(0, 0, 0, 0), this.target = e;
		}
		return e.prototype.isActive = function() {
			var e = Fe(this.target);
			return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
		}, e.prototype.broadcastRect = function() {
			var e = this.contentRect_;
			return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
		}, e;
	}(), Qe = function() {
		function e(e, t) {
			var n = Ie(t);
			qe(this, {
				target: e,
				contentRect: n
			});
		}
		return e;
	}(), $e = function() {
		function e(e, t, n) {
			if (this.activeObservations_ = [], this.observations_ = new Re(), typeof e != "function") throw TypeError("The callback provided as parameter 1 is not a function.");
			this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n;
		}
		return e.prototype.observe = function(e) {
			if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
			if (!(typeof Element > "u" || !(Element instanceof Object))) {
				if (!(e instanceof Je(e).Element)) throw TypeError("parameter 1 is not of type \"Element\".");
				var t = this.observations_;
				t.has(e) || (t.set(e, new Ze(e)), this.controller_.addObserver(this), this.controller_.refresh());
			}
		}, e.prototype.unobserve = function(e) {
			if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
			if (!(typeof Element > "u" || !(Element instanceof Object))) {
				if (!(e instanceof Je(e).Element)) throw TypeError("parameter 1 is not of type \"Element\".");
				var t = this.observations_;
				t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
			}
		}, e.prototype.disconnect = function() {
			this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
		}, e.prototype.gatherActive = function() {
			var e = this;
			this.clearActive(), this.observations_.forEach(function(t) {
				t.isActive() && e.activeObservations_.push(t);
			});
		}, e.prototype.broadcastActive = function() {
			if (this.hasActive()) {
				var e = this.callbackCtx_, t = this.activeObservations_.map(function(e) {
					return new Qe(e.target, e.broadcastRect());
				});
				this.callback_.call(e, t, e), this.clearActive();
			}
		}, e.prototype.clearActive = function() {
			this.activeObservations_.splice(0);
		}, e.prototype.hasActive = function() {
			return this.activeObservations_.length > 0;
		}, e;
	}(), et = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Re(), tt = function() {
		function e(t) {
			if (!(this instanceof e)) throw TypeError("Cannot call a class as a function.");
			if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
			var n = new $e(t, Ke.getInstance(), this);
			et.set(this, n);
		}
		return e;
	}(), [
		"observe",
		"unobserve",
		"disconnect"
	].forEach(function(e) {
		tt.prototype[e] = function() {
			var t;
			return (t = et.get(this))[e].apply(t, arguments);
		};
	}), nt = (function() {
		return Be.ResizeObserver === void 0 ? tt : Be.ResizeObserver;
	})();
})), it = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = g;
	var t = s(w()), n = o(he()), r = o((rt(), d(Oe))), i = o(de()), a = ["measureBeforeMount"];
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
		if (e == null) return {};
		var n, r, i = u(e, t);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(e);
			for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
		}
		return i;
	}
	function u(e, t) {
		if (e == null) return {};
		var n = {};
		for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
			if (t.indexOf(r) !== -1) continue;
			n[r] = e[r];
		}
		return n;
	}
	function f(e, t, n) {
		return (t = p(t)) in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function p(e) {
		var t = m(e, "string");
		return typeof t == "symbol" ? t : t + "";
	}
	function m(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	var h = "react-grid-layout";
	function g(e) {
		var o = class extends t.Component {
			constructor() {
				super(...arguments), f(this, "state", { width: 1280 }), f(this, "elementRef", /*#__PURE__*/ t.createRef()), f(this, "mounted", !1), f(this, "resizeObserver", void 0);
			}
			componentDidMount() {
				this.mounted = !0, this.resizeObserver = new r.default((e) => {
					if (this.elementRef.current instanceof HTMLElement) {
						let t = e[0].contentRect.width;
						this.setState({ width: t });
					}
				});
				let e = this.elementRef.current;
				e instanceof HTMLElement && this.resizeObserver.observe(e);
			}
			componentWillUnmount() {
				this.mounted = !1;
				let e = this.elementRef.current;
				e instanceof HTMLElement && this.resizeObserver.unobserve(e), this.resizeObserver.disconnect();
			}
			render() {
				let n = this.props, { measureBeforeMount: r } = n, o = l(n, a);
				return r && !this.mounted ? /*#__PURE__*/ t.createElement("div", {
					className: (0, i.default)(this.props.className, h),
					style: this.props.style,
					ref: this.elementRef
				}) : /*#__PURE__*/ t.createElement(e, c({ innerRef: this.elementRef }, o, this.state));
			}
		};
		return f(o, "defaultProps", { measureBeforeMount: !1 }), f(o, "propTypes", { measureBeforeMount: n.default.bool }), o;
	}
})), at = (/* @__PURE__ */ s(((e, t) => {
	t.exports = Te().default, t.exports.utils = k(), t.exports.calculateUtils = A(), t.exports.Responsive = De().default, t.exports.Responsive.utils = Ee(), t.exports.WidthProvider = it().default;
})))(), ot = {
	lg: 1200,
	md: 996,
	sm: 768,
	xs: 480,
	xxs: 0
}, st = {
	lg: 12,
	md: 8,
	sm: 4,
	xs: 2,
	xxs: 2
}, ct = {
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
}, M = (e, t, n, r, i) => ({
	i: e,
	x: t,
	y: n,
	w: r,
	h: i,
	minW: 1,
	minH: 1,
	maxW: 12,
	maxH: 12
}), lt = {
	lg: [
		M("activity-history", 0, 0, 6, 4),
		M("automations", 6, 0, 6, 4),
		M("backup-restore", 0, 4, 6, 4),
		M("access-control", 6, 4, 6, 4),
		M("alarm-configuration", 0, 8, 12, 5),
		M("security-status", 0, 13, 12, 2)
	],
	md: [
		M("activity-history", 0, 0, 4, 4),
		M("automations", 4, 0, 4, 4),
		M("backup-restore", 0, 4, 4, 4),
		M("access-control", 4, 4, 4, 4),
		M("alarm-configuration", 0, 8, 8, 5),
		M("security-status", 0, 13, 8, 2)
	],
	sm: [
		M("activity-history", 0, 0, 4, 4),
		M("automations", 0, 4, 4, 4),
		M("backup-restore", 0, 8, 4, 4),
		M("access-control", 0, 12, 4, 4),
		M("alarm-configuration", 0, 16, 4, 5),
		M("security-status", 0, 21, 4, 2)
	],
	xs: [
		M("activity-history", 0, 0, 2, 4),
		M("automations", 0, 4, 2, 4),
		M("backup-restore", 0, 8, 2, 4),
		M("access-control", 0, 12, 2, 4),
		M("alarm-configuration", 0, 16, 2, 5),
		M("security-status", 0, 21, 2, 2)
	],
	xxs: [
		M("activity-history", 0, 0, 2, 4),
		M("automations", 0, 4, 2, 4),
		M("backup-restore", 0, 8, 2, 4),
		M("access-control", 0, 12, 2, 4),
		M("alarm-configuration", 0, 16, 2, 5),
		M("security-status", 0, 21, 2, 2)
	]
};
function ut(e, t, n) {
	return Object.entries(ct).map(([r, i]) => ({
		size: r,
		distance: Math.abs(Math.min(i.w, n) - e) + Math.abs(i.h - t)
	})).sort((e, t) => e.distance - t.distance)[0]?.size ?? "S";
}
function dt(e, t) {
	let n = ct[e];
	return {
		w: Math.min(n.w, t),
		h: n.h
	};
}
function ft(e, t) {
	return e.some((e) => e.i !== t.i && t.x < e.x + e.w && t.x + t.w > e.x && t.y < e.y + e.h && t.y + t.h > e.y);
}
function pt(e, t, n) {
	for (let r = 0; r < 240; r++) for (let i = 0; i <= n - t.w; i++) {
		let n = {
			...t,
			x: i,
			y: r
		};
		if (!ft(e, n)) return n;
	}
	return {
		...t,
		x: 0,
		y: Math.max(0, ...e.map((e) => e.y + e.h))
	};
}
function mt(e) {
	let t = {};
	return Object.keys(st).forEach((n) => {
		let r = st[n], i = Array.isArray(e?.[n]) ? e[n] : [], a = new Map(i.map((e) => [e.i, e])), o = (lt[n] || []).map((e) => {
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
var ht = class {
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
		return n ? mt(n.layouts) : null;
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
			layouts: r?.layouts ?? mt(null),
			visibility: n,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
	}
	async reset(e, t) {
		localStorage.removeItem(this.key(e, t));
	}
}, gt = (0, at.WidthProvider)(at.Responsive);
function _t({ widget: e, node: t, editing: n, size: r, onSize: i, onHide: a, onReset: o }) {
	let s = (0, E.useRef)(null);
	(0, E.useLayoutEffect)(() => {
		s.current?.appendChild(t), t.draggable = !1, t.querySelector(":scope > .panel-edit-overlay")?.remove(), n ? t.setAttribute("inert", "") : t.removeAttribute("inert");
	}, [t, n]);
	let c = (e, t) => {
		if (typeof window._argusT == "function") {
			let t = window._argusT(e);
			if (t && t !== e) return t;
		}
		return t;
	};
	return /* @__PURE__ */ (0, O.jsxs)("article", {
		className: "argus-widget",
		children: [/* @__PURE__ */ (0, O.jsxs)("header", {
			className: "argus-widget__edit-header",
			children: [
				/* @__PURE__ */ (0, O.jsx)("button", {
					type: "button",
					className: "argus-widget__drag-handle",
					"aria-label": `${c("drag", "Mover")} ${e.title}`,
					title: c("drag", "Arrastrar para mover"),
					children: "⋮⋮"
				}),
				/* @__PURE__ */ (0, O.jsx)("strong", { children: e.title }),
				/* @__PURE__ */ (0, O.jsxs)("details", {
					className: "argus-widget__options",
					children: [/* @__PURE__ */ (0, O.jsx)("summary", {
						"aria-label": `${c("settings", "Opciones")} ${e.title}`,
						title: c("settings", "Opciones"),
						children: "•••"
					}), /* @__PURE__ */ (0, O.jsxs)("div", {
						className: "argus-widget__menu",
						children: [
							/* @__PURE__ */ (0, O.jsx)("span", { children: c("size", "Tamaño") }),
							/* @__PURE__ */ (0, O.jsx)("div", { children: [
								"S",
								"M",
								"L",
								"XL"
							].map((e) => /* @__PURE__ */ (0, O.jsx)("button", {
								type: "button",
								className: e === r ? "active" : "",
								onClick: () => i(e),
								children: e
							}, e)) }),
							/* @__PURE__ */ (0, O.jsx)("button", {
								type: "button",
								onClick: o,
								children: c("reset_widget", "Restablecer widget")
							}),
							/* @__PURE__ */ (0, O.jsx)("button", {
								type: "button",
								onClick: a,
								children: c("hide_widget", "Ocultar widget")
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, O.jsx)("div", {
			className: `argus-widget__content${e.kind === "access-control" ? " argus-widget__content--access" : ""}`,
			ref: s
		})]
	});
}
function vt({ widgets: e, nodes: t, storage: n, userId: r, dashboardId: i, onEditing: a, registerEditor: o }) {
	let s = (0, E.useMemo)(() => Object.fromEntries(e.map((e) => [e.id, e.visible])), [e]), [c, l] = (0, E.useState)(lt), [u, d] = (0, E.useState)(s), [f, p] = (0, E.useState)(!1), [m, h] = (0, E.useState)(!1), [g, _] = (0, E.useState)("lg"), [v, y] = (0, E.useState)(""), [, b] = (0, E.useState)(0), [x, S] = (0, E.useState)(0), C = (0, E.useRef)(lt), w = (0, E.useRef)(void 0), ee = (0, E.useRef)(!1), te = (0, E.useRef)(null), T = (e, t) => {
		if (typeof window._argusT == "function") {
			let t = window._argusT(e);
			if (t && t !== e) return t;
		}
		return t;
	};
	(0, E.useEffect)(() => {
		let e = () => b((e) => e + 1);
		return window.addEventListener("argus-lang-changed", e), () => window.removeEventListener("argus-lang-changed", e);
	}, []), (0, E.useEffect)(() => {
		o(p);
	}, [o]), (0, E.useEffect)(() => {
		let e = !0;
		return h(!1), Promise.all([n.load(r, i), n.loadVisibility?.(r, i)]).then(([t, n]) => {
			if (!e) return;
			let r = mt(t);
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
	]), (0, E.useEffect)(() => {
		a(f), m && ee.current && !f && n.save(r, i, C.current), ee.current = f;
	}, [
		f,
		m,
		a,
		n,
		r,
		i
	]), (0, E.useEffect)(() => {
		let e = (e) => {
			f && (e.key === "Escape" ? (p(!1), y(T("edit_dashboard_done", "Edición finalizada"))) : e.key === "Enter" && e.target === document.body && p(!1));
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [f]), (0, E.useEffect)(() => {
		if (typeof ResizeObserver > "u" || !te.current) return;
		let e = 0, t = new ResizeObserver(() => {
			cancelAnimationFrame(e), e = requestAnimationFrame(() => {
				try {
					window.dispatchEvent(new Event("resize"));
				} catch {}
			});
		});
		return t.observe(te.current), () => {
			cancelAnimationFrame(e), t.disconnect();
		};
	}, []), (0, E.useEffect)(() => () => clearTimeout(w.current), []);
	let ne = (e, t = !1) => {
		l(e), C.current = e, clearTimeout(w.current), w.current = window.setTimeout(() => n.save(r, i, e), t ? 0 : 550);
	}, re = (e, t) => {
		let a = {
			...u,
			[e]: t
		};
		d(a), n.saveVisibility?.(r, i, a), y(t ? T("widget_visible", "Widget visible") : T("hide_widget", "Widget oculto"));
	}, ie = (e, t, n) => {
		let r = C.current, i = r[g] || [], a = i.filter((t) => t.i !== e), o = ft(a, t) ? pt(a, t, st[g]) : t, s = {
			...r,
			[g]: i.map((t) => t.i === e ? o : t)
		};
		ne(s, !0), y(n);
	}, ae = (e, t) => {
		let n = (C.current[g] || []).find((t) => t.i === e);
		if (!n) return;
		let r = dt(t, st[g]);
		ie(e, {
			...n,
			...r,
			x: Math.max(0, Math.min(n.x, st[g] - r.w))
		}, `${T("size", "Tamaño")} ${t}`);
	}, oe = (e) => {
		let t = (lt[g] || []).find((t) => t.i === e);
		t && ie(e, { ...t }, T("reset_widget", "Widget restablecido"));
	}, se = (e, t, n) => {
		let r = st[g], i = Math.min(r, Math.max(1, n.w)), a = Math.max(1, n.h), o = {
			...n,
			w: i,
			h: a,
			x: Math.max(0, Math.min(n.x, r - i))
		};
		ie(n.i, o, `${T("size", "Tamaño")}: ${i}x${a}`);
	}, ce = async () => {
		try {
			localStorage.removeItem(`argus:dashboard-layout:${r}:${i}`);
		} catch {}
		await n.reset(r, i);
		let e = mt(null);
		d(s), l(e), C.current = e, S((e) => e + 1), ne(e, !0), y(T("reset_dashboard_done", "Diseño predeterminado restaurado"));
	}, D = c[g] || [];
	return m ? /* @__PURE__ */ (0, O.jsxs)("section", {
		className: `argus-dashboard ${f ? "argus-dashboard--editing" : ""}`,
		ref: te,
		children: [
			/* @__PURE__ */ (0, O.jsxs)("nav", {
				className: "argus-dashboard__toolbar",
				"aria-label": T("edit_dashboard", "Edición del tablero"),
				children: [/* @__PURE__ */ (0, O.jsx)("button", {
					type: "button",
					onClick: () => p((e) => !e),
					children: f ? "✓ " + T("edit_dashboard_done", "Listo") : "❖ " + T("edit_dashboard", "Editar tablero")
				}), f && /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: [/* @__PURE__ */ (0, O.jsx)("button", {
					type: "button",
					onClick: ce,
					children: T("reset_dashboard", "Restablecer diseño")
				}), /* @__PURE__ */ (0, O.jsx)("div", {
					className: "argus-dashboard__visibility",
					"aria-label": T("hide_widget", "Widgets ocultos"),
					children: e.filter((e) => u[e.id] === !1).map((e) => /* @__PURE__ */ (0, O.jsxs)("button", {
						type: "button",
						onClick: () => re(e.id, !0),
						children: ["Mostrar ", e.title]
					}, e.id))
				})] })]
			}),
			/* @__PURE__ */ (0, O.jsx)("div", {
				className: "argus-dashboard__feedback",
				"aria-live": "polite",
				children: f ? v : ""
			}),
			/* @__PURE__ */ (0, O.jsx)(le, { children: /* @__PURE__ */ (0, O.jsx)(gt, {
				className: "argus-dashboard-grid",
				layouts: c,
				breakpoints: ot,
				cols: st,
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
				onResizeStop: se,
				onDragStop: (e, t, n) => {
					if (ft((C.current[g] || []).filter((e) => e.i !== n.i), n)) {
						l({ ...C.current }), y(T("position_collision", "Posición bloqueada por colisión"));
						return;
					}
					ie(n.i, n, T("position_saved", "Posición guardada"));
				},
				useCSSTransforms: !0,
				children: e.filter((e) => u[e.id] !== !1 && t.has(e.id)).map((e) => {
					let n = D.find((t) => t.i === e.id), r = n ? ut(n.w, n.h, st[g]) : e.size;
					return /* @__PURE__ */ (0, O.jsx)("div", { children: /* @__PURE__ */ (0, O.jsx)(le, { children: /* @__PURE__ */ (0, O.jsx)(_t, {
						widget: e,
						node: t.get(e.id),
						editing: f,
						size: r,
						onSize: (t) => ae(e.id, t),
						onHide: () => re(e.id, !1),
						onReset: () => oe(e.id)
					}) }) }, e.id);
				})
			}, x) })
		]
	}) : /* @__PURE__ */ (0, O.jsx)("section", {
		className: "argus-dashboard",
		ref: te,
		children: /* @__PURE__ */ (0, O.jsx)("div", {
			className: "argus-dashboard__feedback",
			"aria-live": "polite",
			children: T("loading_dashboard", "Cargando tablero…")
		})
	});
}
//#endregion
//#region src/features/dashboard/components/SecurityConsole.css?inline
var yt = ".entry{position:relative;overflow:hidden;container:argus-console/inline-size;-webkit-backdrop-filter:blur(40px)saturate(190%)brightness(1.12)!important;background:linear-gradient(135deg,#ffffff1f 0%,#ffffff08 100%)!important;border:1px solid #ffffff38!important;border-radius:28px!important;transition:transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s!important;box-shadow:inset 0 1.5px #ffffff73,inset 0 -1px #ffffff1a,0 24px 64px #00000073,0 4px 16px #00000040!important}.security-console,.entry-content,.entry-content.security-console{box-shadow:none!important;box-shadow:none!important;background:0 0!important;border:none!important}.security-console .console-hud{box-shadow:none!important;background:0 0!important;border:none!important}.console-hud-loc{box-sizing:border-box!important;text-overflow:ellipsis!important;white-space:nowrap!important;-webkit-backdrop-filter:blur(24px)saturate(190%)!important;letter-spacing:.04em!important;color:#fff!important;text-shadow:0 1px 3px #00000080!important;background:linear-gradient(135deg,#fff3 0%,#ffffff0d 100%)!important;border:1px solid #ffffff47!important;border-radius:999px!important;align-items:center!important;max-width:clamp(140px,26vw,260px)!important;height:38px!important;padding:0 16px!important;font-size:11.5px!important;font-weight:850!important;display:inline-flex!important;overflow:hidden!important;transform:translate(0,0)!important;box-shadow:inset 0 1.5px #ffffff73,inset 0 -1px #0003,0 8px 24px #00000059!important}.argus-connection-pill{-webkit-backdrop-filter:blur(24px)saturate(190%)!important;letter-spacing:.05em!important;color:#fff!important;text-shadow:0 1px 3px #00000080!important;white-space:nowrap!important;background:linear-gradient(135deg,#ffffff29 0%,#ffffff0a 100%)!important;border:1px solid #ffffff3d!important;border-radius:999px!important;align-items:center!important;gap:8px!important;max-width:max-content!important;height:38px!important;padding:0 16px!important;font-size:11px!important;font-weight:850!important;display:inline-flex!important;transform:translate(0,0)!important;box-shadow:inset 0 1.5px #ffffff61,inset 0 -1px #00000026,0 8px 24px #00000059!important}.argus-connection-dot{background:#10b981!important;border-radius:50%!important;width:8px!important;height:8px!important;box-shadow:0 0 12px #10b981!important}.argus-connection-pill[data-online=false] .argus-connection-dot{background:#ef4444!important;box-shadow:0 0 12px #ef4444!important}.console-hud-right{min-width:0!important;box-shadow:none!important;background:0 0!important;border:0!important;justify-content:flex-end!important;align-items:center!important;gap:8px!important;height:38px!important;display:inline-flex!important}.console-system-badge{box-sizing:border-box!important;letter-spacing:.05em!important;text-transform:uppercase!important;white-space:nowrap!important;-webkit-backdrop-filter:blur(24px)saturate(190%)!important;border-radius:999px!important;align-items:center!important;height:38px!important;padding:0 18px!important;font-size:11px!important;font-weight:900!important;display:inline-flex!important;transform:translate(0,0)!important}.console-system-badge--disarmed{color:#34d399!important;text-shadow:0 0 10px #10b981b3!important;background:linear-gradient(135deg,#10b98152 0%,#0596691f 100%)!important;border:1.5px solid #10b981a6!important;box-shadow:inset 0 1.5px #ffffff80,0 0 24px #10b98166,0 8px 24px #00000059!important}.console-system-badge--armed_home,.console-system-badge--armed_away,.console-system-badge--armed_night,.console-system-badge--pending{color:#fbbf24!important;text-shadow:0 0 10px #f59e0bcc!important;background:linear-gradient(135deg,#f59e0b59 0%,#d9770624 100%)!important;border:1.5px solid #f59e0bb3!important;box-shadow:inset 0 1.5px #ffffff8c,0 0 24px #f59e0b73,0 8px 24px #00000059!important}.console-system-badge--triggered{color:#f87171!important;text-shadow:0 0 12px #ef4444d9!important;background:linear-gradient(135deg,#ef44446b 0%,#b91c1c29 100%)!important;border:1.5px solid #ef4444d9!important;animation:.9s ease-in-out infinite argusTriggerBadgePulse!important;box-shadow:inset 0 1.5px #fff9,0 0 32px #ef444499,0 8px 24px #00000059!important}@keyframes argusTriggerBadgePulse{0%,to{opacity:.85;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}.security-console .entry-icon{will-change:transform;animation:5s ease-in-out infinite float-icon;transform:translate(0,0);box-shadow:none!important;background:0 0!important;border:none!important;flex-direction:column!important;justify-content:center!important;align-items:center!important;display:flex!important}.security-console .entry-icon svg{filter:drop-shadow(0 14px 28px #0009)drop-shadow(0 0 45px #10b9818c)!important;width:100%!important;max-width:220px!important;height:auto!important}@keyframes float-icon{0%,to{transform:translate(0,0)scale(1)}50%{transform:translateY(-6px)scale(1.015)}}.entry.argus-waiting .entry-icon>svg{transform-origin:50%!important;filter:drop-shadow(0 0 26px #ffb839f2)saturate(1.35)!important;animation:1.05s ease-in-out infinite argusArmingShield!important}.argus-shield-status{color:#ffd27a;letter-spacing:.12em;text-align:center;background:#ff950033;border:1px solid #ffb8398c;border-radius:999px;width:max-content;max-width:200px;margin:7px auto 0;padding:5px 14px;font-size:9.5px;font-weight:850;animation:1.05s ease-in-out infinite argusArmingLabel;display:block;box-shadow:inset 0 1px #fff6,0 6px 18px #0000004d}@keyframes argusArmingShield{0%,to{opacity:.55;transform:scale(.94)}50%{opacity:1;transform:scale(1.07)}}@keyframes argusArmingLabel{0%,to{opacity:.62}50%{opacity:1}}.security-console .liquid-stack{width:100%!important;box-shadow:none!important;background:0 0!important;border:none!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;display:grid!important}.security-console .liquid-btn{text-align:center!important;letter-spacing:.03em!important;-webkit-backdrop-filter:blur(24px)saturate(190%)!important;color:#fff!important;text-shadow:0 1px 3px #00000080!important;cursor:pointer!important;background:linear-gradient(135deg,#ffffff2e 0%,#ffffff0d 100%)!important;border:1px solid #ffffff40!important;border-radius:20px!important;flex-direction:column!important;justify-content:center!important;align-items:center!important;gap:5px!important;min-height:68px!important;padding:12px 6px!important;font-size:11.5px!important;font-weight:850!important;line-height:1.15!important;transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s,background .25s,border-color .25s!important;display:flex!important;transform:translate(0,0)!important;box-shadow:inset 0 1.5px #ffffff6b,inset 0 -1px #0003,0 10px 28px #00000059!important}.security-console .liquid-btn:hover{background:linear-gradient(135deg,#ffffff3d 0%,#ffffff14 100%)!important;border-color:#fff6!important;transform:translateY(-3px)translate(0,0)scale(1.025)!important;box-shadow:inset 0 1.5px #ffffff8c,0 14px 34px #00000073!important}.security-console .liquid-btn span:first-child,.security-console .liquid-btn .mode-btn-icon{filter:drop-shadow(0 2px 6px #0006)!important;font-size:20px!important;line-height:1!important}.security-console .liquid-btn span:last-child{color:#fff!important;font-size:11px!important;font-weight:850!important}.security-console .btn-home.active{background:linear-gradient(135deg,#fb8c00 0%,#d97706 100%)!important;border:1px solid #fed7aad9!important;box-shadow:inset 0 1.5px #fff9,0 12px 32px #fb8c0099!important}.security-console .btn-away.active{background:linear-gradient(135deg,#e53935 0%,#b91c1c 100%)!important;border:1px solid #fecacad9!important;box-shadow:inset 0 1.5px #fff9,0 12px 32px #e5393599!important}.security-console .btn-night.active{background:linear-gradient(135deg,#1e88e5 0%,#1d4ed8 100%)!important;border:1px solid #bfdbfed9!important;box-shadow:inset 0 1.5px #fff9,0 12px 32px #1e88e599!important}.security-console .console-sensors{scrollbar-width:none;grid-template-columns:1fr;gap:8px;max-height:none!important;box-shadow:none!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;filter:none!important;isolation:auto!important;contain:none!important;background:0 0!important;border:none!important;outline:none!important;margin:0!important;padding:0!important;display:grid!important;overflow:visible!important}.security-console .console-sensors::-webkit-scrollbar{display:none}.security-console .console-sensors.console-sensors--compact,.security-console .console-sensors[data-count=\"3\"],.security-console .console-sensors[data-count=\"4\"],.security-console .console-sensors[data-count=\"5\"],.security-console .console-sensors[data-count=\"6\"]{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:6px!important}.security-console .console-sensors.console-sensors--micro,.security-console .console-sensors[data-count=\"7\"],.security-console .console-sensors[data-count=\"8\"],.security-console .console-sensors[data-count=\"9\"],.security-console .console-sensors[data-count=\"10\"],.security-console .console-sensors[data-count=\"11\"],.security-console .console-sensors[data-count=\"12\"]{scrollbar-width:thin;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:4px!important;max-height:280px!important;overflow-y:auto!important}.console-sensor{color:#fff!important;text-shadow:0 1px 3px #00000080!important;box-sizing:border-box!important;background:linear-gradient(135deg,#ffffff29 0%,#ffffff0a 100%)!important;border:1px solid #ffffff3d!important;border-radius:999px!important;grid-template-columns:auto minmax(0,1fr) auto!important;align-items:center!important;gap:10px!important;min-height:44px!important;padding:10px 16px!important;transition:transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s,border-color .2s!important;display:grid!important;box-shadow:inset 0 1.5px #ffffff61,inset 0 -1px #00000026,0 4px 12px #00000040!important}.console-sensor:hover{transform:translateY(-2px)scale(1.02)!important;box-shadow:inset 0 1.5px #ffffff80,0 8px 18px #00000059!important}.console-sensor.open{background:linear-gradient(135deg,#ef444459 0%,#b91c1c29 100%)!important;border-color:#ef4444a6!important;box-shadow:inset 0 1.5px #ffffff73,0 0 16px #ef444459,0 4px 12px #00000040!important}.console-sensor-icon{filter:drop-shadow(0 2px 4px #0006)!important;justify-content:center!important;align-items:center!important;font-size:18px!important;display:flex!important}.console-sensor-name{letter-spacing:.02em!important;text-overflow:ellipsis!important;white-space:nowrap!important;color:#fff!important;font-size:11.5px!important;font-weight:850!important;overflow:hidden!important}.console-sensor-state{letter-spacing:.05em!important;text-transform:uppercase!important;white-space:nowrap!important;align-items:center!important;gap:4px!important;font-size:10.5px!important;font-weight:900!important;display:inline-flex!important}.console-empty{text-align:center!important;color:#ffffffa6!important;border:1px dashed #ffffff40!important;border-radius:20px!important;padding:24px!important;font-size:12px!important;font-weight:800!important}@media (width>=901px){.entry:not(.ios-fullscreen) .security-console{box-shadow:none!important;background:0 0!important;grid-template-rows:auto 1fr!important;grid-template-columns:minmax(200px,350px) 1fr minmax(220px,380px)!important;justify-content:center!important;align-items:center!important;gap:16px 36px!important;padding:24px 28px 20px!important;display:grid!important}.entry:not(.ios-fullscreen) .security-console .console-hud{display:contents!important}.entry:not(.ios-fullscreen) .security-console .console-hud-loc{grid-area:1/1!important;place-self:center start!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .argus-connection-pill{grid-area:1/2!important;place-self:center!important;margin:0!important;position:static!important;transform:none!important}.entry:not(.ios-fullscreen) .security-console .console-hud-right{grid-area:1/3!important;place-self:center end!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack{grid-area:2/1!important;align-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .entry-icon{grid-area:2/2!important;place-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .console-sensors{grid-area:2/3!important;align-self:center!important;margin:0!important}}@container argus-console (width>=540px){.entry:not(.ios-fullscreen) .security-console{box-shadow:none!important;background:0 0!important;grid-template-rows:auto 1fr!important;grid-template-columns:minmax(170px,1fr) minmax(140px,200px) minmax(180px,1.2fr)!important;justify-content:center!important;align-items:center!important;gap:14px 20px!important;padding:20px 24px 18px!important;display:grid!important}.entry:not(.ios-fullscreen) .security-console .console-hud{display:contents!important}.entry:not(.ios-fullscreen) .security-console .console-hud-loc{grid-area:1/1!important;place-self:center start!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .argus-connection-pill{grid-area:1/2!important;place-self:center!important;margin:0!important;position:static!important;transform:none!important}.entry:not(.ios-fullscreen) .security-console .console-hud-right{grid-area:1/3!important;place-self:center end!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack{grid-area:2/1!important;align-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .entry-icon{grid-area:2/2!important;place-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .console-sensors{grid-area:2/3!important;align-self:center!important;margin:0!important}}@media (width<=539px){.entry:not(.ios-fullscreen) .security-console{box-sizing:border-box!important;width:100%!important;box-shadow:none!important;background:0 0!important;flex-direction:column!important;align-items:center!important;gap:14px!important;padding:18px 14px!important;display:flex!important}.entry:not(.ios-fullscreen) .security-console .console-hud{width:100%!important;box-shadow:none!important;background:0 0!important;flex-flow:wrap!important;justify-content:center!important;align-items:center!important;gap:8px!important;display:flex!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack,.entry:not(.ios-fullscreen) .security-console .console-sensors{width:100%!important;max-width:440px!important}}@container argus-console (width<=539px){.entry:not(.ios-fullscreen) .security-console{box-sizing:border-box!important;width:100%!important;box-shadow:none!important;background:0 0!important;flex-direction:column!important;align-items:center!important;gap:14px!important;padding:18px 14px!important;display:flex!important}.entry:not(.ios-fullscreen) .security-console .console-hud{width:100%!important;box-shadow:none!important;background:0 0!important;flex-flow:wrap!important;justify-content:center!important;align-items:center!important;gap:8px!important;display:flex!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack,.entry:not(.ios-fullscreen) .security-console .console-sensors{width:100%!important;max-width:440px!important}}.entry.ios-fullscreen{box-sizing:border-box!important;width:100dvw!important;height:100%!important;min-height:100dvh!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;background:0 0!important;border:none!important;border-radius:0!important;flex-direction:column!important;margin:0!important;padding:0!important;display:flex!important;position:relative!important;overflow:visible!important}.entry.ios-fullscreen .entry-exit-fs{top:max(16px, env(safe-area-inset-top))!important;left:max(16px, env(safe-area-inset-left))!important;z-index:100000!important;-webkit-backdrop-filter:blur(20px)!important;color:#fff!important;cursor:pointer!important;background:#000000a6!important;border:1px solid #ffffff4d!important;border-radius:16px!important;padding:10px 16px!important;font-size:20px!important;font-weight:900!important;position:fixed!important;box-shadow:inset 0 1px #fff6,0 8px 24px #00000080!important}@media (width<=900px),(orientation:portrait){.entry.ios-fullscreen .security-console{padding:max(64px, calc(env(safe-area-inset-top) + 48px)) 16px max(32px, env(safe-area-inset-bottom))!important;box-sizing:border-box!important;width:100%!important;max-width:480px!important;min-height:100%!important;box-shadow:none!important;background:0 0!important;flex-direction:column!important;justify-content:flex-start!important;align-items:center!important;gap:16px!important;margin:0 auto!important;display:flex!important}.entry.ios-fullscreen .security-console .console-hud{width:100%!important;box-shadow:none!important;background:0 0!important;flex-flow:wrap!important;justify-content:center!important;align-items:center!important;gap:8px!important;display:flex!important}.entry.ios-fullscreen .security-console .entry-icon{margin:6px auto!important;display:flex!important}.entry.ios-fullscreen .security-console .entry-icon svg{max-width:min(50vw,220px)!important}.entry.ios-fullscreen .security-console .liquid-stack{width:100%!important;max-width:440px!important}.entry.ios-fullscreen .security-console .console-sensors{width:100%!important;max-width:440px!important;max-height:300px!important;box-shadow:none!important;background:0 0!important}}@media (width>=901px) and (orientation:landscape),(width>=901px),(orientation:landscape) and (height<=600px){.entry.ios-fullscreen .security-console{padding:max(56px, env(safe-area-inset-top)) max(48px, env(safe-area-inset-right)) max(32px, env(safe-area-inset-bottom)) max(48px, env(safe-area-inset-left))!important;box-sizing:border-box!important;width:100%!important;max-width:1600px!important;height:100%!important;min-height:100dvh!important;box-shadow:none!important;background:0 0!important;grid-template-rows:auto 1fr!important;grid-template-columns:minmax(280px,380px) 1fr minmax(280px,440px)!important;justify-content:center!important;align-items:center!important;gap:20px 48px!important;margin:0 auto!important;display:grid!important}.entry.ios-fullscreen .security-console .console-hud{display:contents!important}.entry.ios-fullscreen .security-console .console-hud-loc{grid-area:1/1!important;place-self:center start!important;margin:0!important}.entry.ios-fullscreen .security-console .argus-connection-pill{grid-area:1/2!important;place-self:center!important;margin:0!important;position:static!important;transform:none!important}.entry.ios-fullscreen .security-console .console-hud-right{grid-area:1/3!important;place-self:center end!important;margin:0!important}.entry.ios-fullscreen .security-console .liquid-stack{grid-area:2/1!important;align-self:center!important;width:100%!important}.entry.ios-fullscreen .security-console .entry-icon{grid-area:2/2!important;place-self:center!important}.entry.ios-fullscreen .security-console .entry-icon svg{max-width:min(35vw,360px)!important}.entry.ios-fullscreen .security-console .console-sensors{width:100%!important;max-height:520px!important;box-shadow:none!important;background:0 0!important;grid-area:2/3!important;align-self:center!important}}";
//#endregion
//#region src/features/dashboard/components/SensorChip.tsx
function bt({ id: e, name: t, isOpen: n, isBlocking: r, isBypassed: i, battery: a, iconHtml: o, statusLabelOpen: s, statusLabelClosed: c, bypassedLabel: l }) {
	let u = null;
	if (a !== null) {
		let e = a === 0, t = a <= 10 && !e, n = e ? "🔋 ❌" : `🔋 ${a}%`;
		(e || t) && (u = /* @__PURE__ */ (0, O.jsx)("span", {
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
	let d = i ? "#a1a1aa" : r ? "#ffd700" : n ? "#ff968b" : "#75f4b0", f = i ? "none" : r ? "pulse 1s infinite" : n ? "pulse 2s infinite" : "none", p = i ? "#a1a1aa" : r ? "#ffd700" : n ? "#ff968b" : "#75f4b0", m = i ? .6 : 1, h = n ? s : c, g = i ? `${l || "OMITIDO"} · ${h}` : h;
	return /* @__PURE__ */ (0, O.jsxs)("div", {
		className: `console-sensor ${n && !i ? "open" : ""}`,
		style: { opacity: m },
		children: [
			/* @__PURE__ */ (0, O.jsx)("span", {
				className: "console-sensor-icon",
				style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: d,
					animation: f
				},
				dangerouslySetInnerHTML: { __html: o }
			}),
			/* @__PURE__ */ (0, O.jsx)("span", {
				className: "console-sensor-name",
				style: { color: r && !i ? "#ffd700" : "" },
				children: t
			}),
			/* @__PURE__ */ (0, O.jsxs)("span", {
				className: "console-sensor-state",
				style: { color: p },
				children: [g, u]
			})
		]
	});
}
//#endregion
//#region src/features/dashboard/components/SecurityConsole.tsx
function xt({ panel: e, isFullscreen: t, onToggleFullscreen: n, onUnlockKiosk: r }) {
	let [i, a] = (0, E.useState)(0);
	(0, E.useEffect)(() => {
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
	}), S = x.length, C = S >= 7 ? "console-sensors--micro" : S >= 3 ? "console-sensors--compact" : "", w = y.map((e) => e.id), ee = e._renderBatteryAlerts?.(w) || "";
	return /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: [/* @__PURE__ */ (0, O.jsx)("style", { dangerouslySetInnerHTML: { __html: yt } }), /* @__PURE__ */ (0, O.jsxs)("div", {
		className: `entry ${t ? "ios-fullscreen" : ""} ${h ? "argus-waiting" : ""}`,
		style: {
			position: "relative",
			width: "100%",
			height: "100%"
		},
		children: [
			/* @__PURE__ */ (0, O.jsx)("div", { dangerouslySetInnerHTML: { __html: l } }),
			e._kioskLocked && !t && /* @__PURE__ */ (0, O.jsxs)("button", {
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
			t ? /* @__PURE__ */ (0, O.jsx)("button", {
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
			}) : /* @__PURE__ */ (0, O.jsx)("button", {
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
			ee && /* @__PURE__ */ (0, O.jsx)("div", {
				className: "battery-alerts-wrapper",
				dangerouslySetInnerHTML: { __html: ee }
			}),
			/* @__PURE__ */ (0, O.jsxs)("div", {
				className: "entry-content security-console",
				children: [
					/* @__PURE__ */ (0, O.jsxs)("div", {
						className: "console-hud",
						children: [
							/* @__PURE__ */ (0, O.jsxs)("span", {
								className: "console-hud-loc",
								children: ["🏡 ", f]
							}),
							/* @__PURE__ */ (0, O.jsxs)("div", {
								className: "argus-connection-pill",
								"data-online": m ? "true" : "false",
								children: [/* @__PURE__ */ (0, O.jsx)("i", { className: "argus-connection-dot" }), /* @__PURE__ */ (0, O.jsx)("span", {
									className: "argus-connection-label",
									children: m ? d("connected") || "CONECTADO" : d("disconnected") || "DESCONECTADO"
								})]
							}),
							/* @__PURE__ */ (0, O.jsx)("div", {
								className: "console-hud-right",
								children: /* @__PURE__ */ (0, O.jsx)("span", {
									className: `console-system-badge console-system-badge--${p ? "triggered" : u}`,
									children: _()
								})
							})
						]
					}),
					/* @__PURE__ */ (0, O.jsxs)("div", {
						className: "entry-icon",
						children: [/* @__PURE__ */ (0, O.jsx)("div", { dangerouslySetInnerHTML: { __html: v() } }), h && /* @__PURE__ */ (0, O.jsx)("span", {
							className: "argus-shield-status",
							children: b.length ? d("waiting_sensors") || "ESPERANDO SENSORES" : d("arming") || "ARMANDO…"
						})]
					}),
					/* @__PURE__ */ (0, O.jsxs)("div", {
						className: "liquid-stack",
						children: [
							/* @__PURE__ */ (0, O.jsx)("button", {
								className: `liquid-btn btn-home ${u === "armed_home" ? "active" : ""}`,
								onClick: () => e._handleAction(0, "home"),
								dangerouslySetInnerHTML: { __html: e._modeButtonIcon("home") + `<span>${d("mode_home") || "CASA"}</span>` }
							}),
							/* @__PURE__ */ (0, O.jsx)("button", {
								className: `liquid-btn btn-away ${u === "armed_away" ? "active" : ""}`,
								onClick: () => e._handleAction(0, "away"),
								dangerouslySetInnerHTML: { __html: e._modeButtonIcon("away") + `<span>${d("mode_away") || "AUSENTE"}</span>` }
							}),
							/* @__PURE__ */ (0, O.jsx)("button", {
								className: `liquid-btn btn-night ${u === "armed_night" ? "active" : ""}`,
								onClick: () => e._handleAction(0, "night"),
								dangerouslySetInnerHTML: { __html: e._modeButtonIcon("night") + `<span>${d("mode_night") || "NOCHE"}</span>` }
							})
						]
					}),
					/* @__PURE__ */ (0, O.jsx)("div", {
						className: `console-sensors ${C}`,
						"data-count": S,
						children: x.length === 0 ? /* @__PURE__ */ (0, O.jsx)("div", {
							className: "console-empty",
							children: d("no_sensors_configured") || "Sin sensores configurados"
						}) : x.map((t) => {
							let n = s.states[t.id], r = t.name || n?.attributes?.friendly_name || t.id, i = h && b.includes(t.id), a = e.isSensorActive ? e.isSensorActive(n) : n?.state === "on", o = null;
							return n?.attributes?.battery_level === void 0 ? n?.attributes?.battery !== void 0 && (o = n.attributes.battery) : o = n.attributes.battery_level, /* @__PURE__ */ (0, O.jsx)(bt, {
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
var St = "argus-slide-action-styles", Ct = {
	es: {
		slide_disarm: "Desliza para desarmar",
		slide_sos: "Desliza para activar SOS",
		slide_sos_stop: "Desliza para detener SOS",
		enter_pin: "Ingresa el PIN maestro",
		wrong_pin: "PIN incorrecto",
		cancel: "Cancelar"
	},
	en: {
		slide_disarm: "Slide to disarm",
		slide_sos: "Slide to trigger SOS",
		slide_sos_stop: "Slide to stop SOS",
		enter_pin: "Enter master PIN",
		wrong_pin: "Wrong PIN",
		cancel: "Cancel"
	}
};
function wt(e) {
	if (typeof e._getCurrentLangCode == "function") return e._getCurrentLangCode();
	let t = e._manualLang || e._lang;
	if (!t) try {
		t = localStorage.getItem("argus_lang");
	} catch {}
	if ((!t || t === "auto") && (t = e._ui?.manual_lang || e._ui?.language || e._hass?.language || "en"), t = String(t || "en").trim(), Ct[t]) return t;
	let n = t.split(/[-_]/)[0].toLowerCase();
	return Ct[n] ? n : n.startsWith("es") ? "es" : "en";
}
function N(e, t) {
	let n = wt(e);
	if (e._t) {
		let n = e._t(t);
		if (n && n !== t) return n;
	}
	return (Ct[n] || Ct.es)[t] || Ct.es[t] || t;
}
var Tt = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"26\" height=\"26\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"/></svg>", Et = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"26\" height=\"26\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/></svg>", Dt = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"26\" height=\"26\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"/></svg>";
function Ot(e) {
	let t = e.shadowRoot;
	if (!t || t.getElementById(St)) return;
	let n = document.createElement("style");
	n.id = St, n.textContent = "\n/* ── Slide-to-action base ─────────────────────────────────────────── */\n.argus-sta-wrap {\n  width: 100%;\n  grid-column: 1 / -1;\n  position: relative;\n}\n\n/* Disarm wrapper: hidden by default, shown only when armed */\n.argus-sta-wrap--disarm {\n  display: none;\n}\n.argus-sta-wrap--disarm.sta-armed {\n  display: block;\n}\n\n/* The pill track — 3D Liquid Glass */\n.argus-sta-track {\n  position: relative;\n  width: 100%;\n  height: 64px;\n  border-radius: 999px;\n  overflow: hidden;\n  user-select: none;\n  -webkit-user-select: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  backdrop-filter: blur(32px) saturate(190%) brightness(1.08);\n  -webkit-backdrop-filter: blur(32px) saturate(190%) brightness(1.08);\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 100%);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, 0.35), inset 0 2px 8px rgba(0, 0, 0, 0.35), 0 8px 24px rgba(0, 0, 0, 0.35);\n  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;\n  transform: translate3d(0,0,0);\n}\n.argus-sta-track--disarm {\n  border-color: rgba(52, 211, 153, 0.55);\n  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, 0.4), 0 0 20px rgba(16, 185, 129, 0.2), 0 8px 24px rgba(0,0,0,0.35);\n}\n.argus-sta-track--sos {\n  border-color: rgba(248, 113, 113, 0.55);\n  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, 0.4), 0 0 20px rgba(239, 68, 68, 0.2), 0 8px 24px rgba(0,0,0,0.35);\n}\n\n/* Fill bar that follows the thumb */\n.argus-sta-fill {\n  position: absolute;\n  left: 0; top: 0; bottom: 0;\n  border-radius: inherit;\n  pointer-events: none;\n  will-change: width;\n  transition: width 0.04s linear;\n}\n.argus-sta-track--disarm .argus-sta-fill {\n  background: linear-gradient(90deg, rgba(16,185,129,0.35), rgba(5,150,105,0.12));\n}\n.argus-sta-track--sos .argus-sta-fill {\n  background: linear-gradient(90deg, rgba(239,68,68,0.38), rgba(185,28,28,0.12));\n}\n\n/* The large circular thumb (left side) */\n.argus-sta-thumb {\n  position: absolute;\n  left: 4px;\n  top: 4px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: grab;\n  z-index: 4;\n  will-change: transform;\n  touch-action: none;\n  -webkit-tap-highlight-color: transparent;\n  backdrop-filter: blur(20px) saturate(190%);\n  -webkit-backdrop-filter: blur(20px) saturate(190%);\n  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;\n}\n.argus-sta-thumb:active { cursor: grabbing; }\n\n.argus-sta-track--disarm .argus-sta-thumb {\n  background: radial-gradient(circle at 35% 35%, rgba(52, 211, 153, 0.35), rgba(10, 24, 20, 0.95));\n  border: 1.5px solid rgba(52, 211, 153, 0.85);\n  box-shadow:\n    inset 0 1.5px 0 rgba(255, 255, 255, 0.65),\n    0 8px 24px rgba(0, 0, 0, 0.5),\n    0 0 20px rgba(16, 185, 129, 0.45);\n  color: #ffffff;\n}\n.argus-sta-track--sos .argus-sta-thumb {\n  background: radial-gradient(circle at 35% 35%, rgba(248, 113, 113, 0.35), rgba(28, 12, 16, 0.95));\n  border: 1.5px solid rgba(248, 113, 113, 0.85);\n  box-shadow:\n    inset 0 1.5px 0 rgba(255, 255, 255, 0.65),\n    0 8px 24px rgba(0, 0, 0, 0.5),\n    0 0 20px rgba(239, 68, 68, 0.45);\n  color: #ffffff;\n}\n.argus-sta-track--sos.sos-pulsing .argus-sta-thumb {\n  animation: staThumbPulse 0.8s infinite ease-in-out;\n}\n@keyframes staThumbPulse {\n  0%, 100% {\n    box-shadow: 0 0 0 1px rgba(255,255,255,.06) inset, 0 6px 24px rgba(0,0,0,.5), 0 0 32px rgba(239,68,68,0.90);\n    border-color: rgba(239,68,68,0.90);\n  }\n  50% {\n    box-shadow: 0 0 0 1px rgba(255,255,255,.06) inset, 0 6px 24px rgba(0,0,0,.5), 0 0 8px rgba(239,68,68,0.25);\n    border-color: rgba(239,68,68,0.30);\n  }\n}\n\n/* The specular highlight ring on thumb */\n.argus-sta-thumb::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: radial-gradient(circle at 30% 25%, rgba(255,255,255,0.18) 0%, transparent 60%);\n  pointer-events: none;\n}\n\n/* Text label — centered, crisp solid white */\n.argus-sta-label {\n  position: absolute;\n  left: 68px;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  pointer-events: none;\n  z-index: 2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #ffffff !important;\n  text-shadow: 0 1px 3px rgba(0,0,0,0.7);\n  transition: opacity 0.12s ease;\n}\n.argus-sta-track--disarm .argus-sta-label { color: #ffffff !important; }\n.argus-sta-track--sos .argus-sta-label    { color: #ffffff !important; }\n\n/* Spring snap-back animation */\n.argus-sta-thumb--snap {\n  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n/* PIN modal overlay */\n.argus-sta-pin {\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  z-index: 10;\n  backdrop-filter: blur(28px) saturate(160%);\n  -webkit-backdrop-filter: blur(28px) saturate(160%);\n  background: rgba(8,12,22,0.95);\n}\n.argus-sta-pin.open { display: flex; }\n.argus-sta-pin input {\n  width: 120px;\n  padding: 8px 12px;\n  border-radius: 10px;\n  border: 1px solid rgba(16,185,129,0.3);\n  background: rgba(255,255,255,0.05);\n  color: #fff;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  letter-spacing: 8px;\n  outline: none;\n}\n.argus-sta-pin input.pin-shake {\n  animation: pinShake 0.38s ease both;\n  border-color: rgba(239,68,68,0.6) !important;\n}\n@keyframes pinShake {\n  10%,90%{transform:translateX(-2px)}\n  20%,80%{transform:translateX(4px)}\n  30%,50%,70%{transform:translateX(-4px)}\n  40%,60%{transform:translateX(4px)}\n}\n.argus-sta-pin .pin-row { display:flex; gap:8px; }\n.argus-sta-pin button {\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1px solid rgba(255,255,255,0.14);\n  color: #fff;\n  background: rgba(255,255,255,0.08);\n}\n.argus-sta-pin .pin-ok {\n  background: linear-gradient(135deg, #10b981, #059669);\n  border-color: rgba(167,243,208,0.4);\n}\n.argus-sta-pin .pin-err {\n  font-size: 10px;\n  color: #fca5a5;\n  min-height: 14px;\n}\n", t.appendChild(n);
}
function kt(e, t, n) {
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
function At(e, t, n, r, i, a, o, s) {
	let c = !1, l = 0, u = 0, d = 0;
	function f() {
		return n.getBoundingClientRect().width - 56 - 8;
	}
	function p(e) {
		d = f();
		let t = Math.max(0, Math.min(e, d));
		i.style.transform = `translateX(${t}px)`, r.style.width = `${t + 60}px`;
		let n = t / d;
		return a.style.opacity = String(Math.max(0, 1 - n * 1.8)), t;
	}
	function m() {
		i.classList.add("argus-sta-thumb--snap"), p(0), a.style.opacity = "1", setTimeout(() => i.classList.remove("argus-sta-thumb--snap"), 520);
	}
	function h(e) {
		o.classList.contains("open") || (c = !0, d = f(), l = e - u, i.style.cursor = "grabbing");
	}
	function g(e) {
		c && (u = p(e - l));
	}
	function _() {
		c && (c = !1, i.style.cursor = "grab", u >= d * .8 ? t === "disarm" && jt(e) ? (v(), m()) : (s(), m()) : m(), u = 0);
	}
	i.addEventListener("mousedown", (e) => {
		e.preventDefault(), h(e.clientX);
	}), window.addEventListener("mousemove", (e) => {
		c && g(e.clientX);
	}), window.addEventListener("mouseup", () => {
		c && _();
	}), i.addEventListener("touchstart", (e) => {
		e.preventDefault(), h(e.touches[0].clientX);
	}, { passive: !1 }), window.addEventListener("touchmove", (e) => {
		c && (e.preventDefault(), g(e.touches[0].clientX));
	}, { passive: !1 }), window.addEventListener("touchend", () => {
		c && _();
	});
	function v() {
		o.classList.add("open"), o.querySelector("input").focus();
	}
	let y = o.querySelector("input"), b = o.querySelector(".pin-err");
	function x() {
		let t = y.value;
		Mt(e, t) ? (o.classList.remove("open"), y.value = "", b.textContent = "", s(t)) : (y.classList.add("pin-shake"), b.textContent = N(e, "wrong_pin"), setTimeout(() => {
			y.classList.remove("pin-shake"), b.textContent = "", y.value = "";
		}, 700));
	}
	o.querySelector(".pin-ok").addEventListener("click", x), y.addEventListener("keydown", (e) => {
		e.key === "Enter" && x();
	}), o.querySelector(".pin-cancel").addEventListener("click", () => {
		o.classList.remove("open"), y.value = "", b.textContent = "";
	});
}
function jt(e) {
	return !!(e._entries?.[0]?.pin_configured || e._dashboard?.entries?.[0]?.pin_configured || e._ui?.master_pin_configured || e._pinConfigured);
}
function Mt(e, t) {
	return typeof e._verifyPin == "function" ? e._verifyPin(t) : typeof e._checkMasterPin == "function" && e._checkMasterPin(t);
}
function Nt(e, t, n) {
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
		return !!e._hass?.states?.[r]?.attributes?.argus_panic_active;
	}
	let { wrap: o, track: s, fill: c, thumb: l, label: u, pin: d } = kt("disarm", N(e, "slide_disarm"), Tt);
	At(e, "disarm", s, c, l, u, d, (t) => {
		let r = e._dashboard?.entries?.[n]?.entry_id || "";
		typeof e._send == "function" && e._send("argus/perform_alarm_action", {
			action: "disarm",
			entry_id: r,
			...t ? { code: t } : {}
		}).catch(() => {});
	});
	let { wrap: f, track: p, fill: m, thumb: h, label: g, pin: _ } = kt("sos", N(e, "slide_sos"), Et);
	At(e, "sos", p, m, h, g, _, () => {
		let t = e._dashboard?.entries?.[n]?.entry_id || "";
		typeof e._send == "function" && e._send("argus/perform_alarm_action", {
			action: "sos",
			entry_id: t
		}).catch(() => {});
	});
	let v = t.querySelector(".liquid-stack");
	if (!v) return;
	v.querySelectorAll(".btn-disarm, .btn-sos, .argus-disarm-btn").forEach((e) => e.remove()), v.appendChild(o), v.appendChild(f);
	function y() {
		let t = i(), n = a(), r = t !== "disarmed" && t !== "unavailable";
		o.classList.toggle("sta-armed", r), u.textContent = N(e, "slide_disarm"), p.classList.toggle("sos-pulsing", n), g.textContent = n ? N(e, "slide_sos_stop") : N(e, "slide_sos"), h.innerHTML = n ? Dt : Et;
	}
	y(), t._staRefresh = y;
}
function Pt(e) {
	Ot(e);
	let t = e.shadowRoot;
	t && t.querySelectorAll(".entry").forEach((t, n) => {
		if (!t.dataset.entityId) {
			let r = e._dashboard?.entries?.[n]?.entity_id;
			r && (t.dataset.entityId = r);
		}
		Nt(e, t, n), t._staRefresh?.();
	});
}
function Ft(e) {
	if (!e || e.__argusSlideToAction) return;
	e.__argusSlideToAction = !0;
	let t = e.prototype, n = t._renderEntries;
	t._renderEntries = function(...e) {
		let t = n?.call(this, ...e);
		return requestAnimationFrame(() => {
			Pt(this), setTimeout(() => Pt(this), 100);
		}), t;
	};
	let r = t._refreshLocalizedUi;
	if (t._refreshLocalizedUi = function(...e) {
		let t = r?.call(this, ...e);
		return Pt(this), t;
	}, Object.getOwnPropertyDescriptor(t, "_hass")?.set || t.set_hass) {
		let e = t.set_hass;
		t.set_hass = function(t) {
			e?.call(this, t), this.shadowRoot?.querySelectorAll(".entry").forEach((e) => e._staRefresh?.());
		};
	}
}
//#endregion
//#region src/features/dashboard/components/SecurityConsoleRoot.tsx
function It(e) {
	let t = e.shadowRoot;
	if (!t) return;
	let n = t.getElementById("entries");
	n && (e._reactConsoleRoot ||= (n.innerHTML = "", (0, ae.createRoot)(n)), e._reactConsoleRoot.render(/* @__PURE__ */ (0, O.jsx)(Lt, { panel: e })));
}
typeof window < "u" && (window.mountSecurityConsole = It);
function Lt({ panel: e }) {
	let [t, n] = (0, E.useState)(0), [r, i] = (0, E.useState)(e.classList.contains("fullscreen-active")), a = (0, E.useRef)(null);
	return (0, E.useEffect)(() => {
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
	}, [e]), (0, E.useEffect)(() => {
		if (!a.current) return;
		let t = setTimeout(() => {
			try {
				typeof Pt == "function" && Pt(e);
			} catch (e) {
				console.error("Argus: Failed to attach SOS sliders", e);
			}
		}, 40);
		return () => clearTimeout(t);
	}, [
		t,
		r,
		e
	]), /* @__PURE__ */ (0, O.jsx)("div", {
		ref: a,
		style: {
			width: "100%",
			height: "100%"
		},
		children: /* @__PURE__ */ (0, O.jsx)(xt, {
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
function Rt(e) {
	if (!e || e.__argusReactSecurityConsole) return;
	e.__argusReactSecurityConsole = !0;
	let t = e.prototype.connectedCallback, n = e.prototype._load;
	e.prototype._renderEntries, e.prototype.connectedCallback = function() {
		let e = t?.call(this);
		return It(this), e;
	}, e.prototype._load = async function(...e) {
		let t = await n?.apply(this, e);
		return It(this), t;
	}, e.prototype._renderEntries = function() {
		It(this);
	};
}
//#endregion
//#region src/features/dashboard/index.tsx
typeof window < "u" && (window.mountSecurityConsole = It);
function zt(e) {
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
var Bt = class extends ht {
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
		return n ? mt(n) : super.load(e, t);
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
			layouts: mt(null),
			visibility: {}
		});
	}
};
function Vt(e) {
	let t = e.shadowRoot?.getElementById("edit-widgets-label");
	(t?.closest("button") || t)?.remove(), e.shadowRoot?.querySelectorAll(".panel-edit-overlay,.widget-drag-handle").forEach((e) => e.remove());
	let n = e.shadowRoot?.getElementById("argus-react-editor-only");
	n || (n = document.createElement("style"), n.id = "argus-react-editor-only", n.textContent = "#edit-widgets-label,.panel-edit-overlay,.widget-drag-handle{display:none!important}", e.shadowRoot.appendChild(n));
}
function Ht(e) {
	Vt(e);
	let t = e.shadowRoot?.getElementById("widget-grid"), n = e._dashboard?.entry_id || e._dashboard?.entries?.[0]?.entry_id || "default";
	if (!t) return;
	let r = zt(e), i = /* @__PURE__ */ new Map();
	if (r.forEach((t) => {
		let n = e.shadowRoot.getElementById(t.nativeId);
		n && i.set(t.id, n);
	}), e._argusReactRoot) {
		e._argusReactRoot.render(/* @__PURE__ */ (0, O.jsx)(vt, {
			widgets: r,
			nodes: i,
			storage: new Bt(e),
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
	if (a || (a = document.createElement("style"), a.id = "argus-react-dashboard-style", a.textContent = oe + se + ce, e.shadowRoot.appendChild(a)), !e.shadowRoot.getElementById("argus-access-scroll-fix")) {
		let t = document.createElement("style");
		t.id = "argus-access-scroll-fix", t.textContent = ".argus-widget__content--access{display:flex;min-height:0;overflow:hidden}.argus-widget__content--access>#w-access{display:flex!important;flex-direction:column!important;width:100%!important;height:100%!important;min-height:0!important;max-height:none!important;overflow:hidden!important}.argus-widget__content--access>#w-access>.panel-head{flex:0 0 auto!important}.argus-widget__content--access>#w-access>#access-workspace{display:block!important;flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;padding-right:4px}", e.shadowRoot.appendChild(t);
	}
	let o = document.createElement("div");
	o.id = "argus-react-dashboard-root", t.appendChild(o);
	let s = (0, ae.createRoot)(o);
	e._argusReactRoot = s, s.render(/* @__PURE__ */ (0, O.jsx)(vt, {
		widgets: r,
		nodes: i,
		storage: new Bt(e),
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
function Ut(e) {
	if (!e || e.__argusReactDashboard) return;
	e.__argusReactDashboard = !0;
	let t = e.prototype, n = t.connectedCallback, r = t._load, i = t._refreshLocalizedUi;
	t.connectedCallback = function() {
		let e = n?.call(this);
		return Vt(this), e;
	}, t._load = async function() {
		let e = await r?.call(this);
		return Ht(this), e;
	}, t._refreshLocalizedUi = function() {
		let e = i?.call(this);
		return Ht(this), e;
	}, t._toggleWidgetEditing = function() {
		this._argusReactSetEditing?.(!this._widgetEditing);
	};
}
//#endregion
//#region src/features/media/client.ts
function Wt(e) {
	let t = e._hass?.auth?.accessToken;
	return t ? { Authorization: `Bearer ${t}` } : {};
}
function Gt(e) {
	let t = e?.prototype;
	t && !t.__argusMediaClient && (t.__argusMediaClient = !0, t._loadUploadedFiles = async function() {
		try {
			let e = await fetch("/api/argus/media", {
				headers: Wt(this),
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
				headers: Wt(this),
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
var Kt = (e, t) => e.getElementById(t), qt = (e, t, n) => e._t?.(t) ?? n;
function Jt(e) {
	let t = e?.prototype;
	t && !t.__argusSecurityClient && (t.__argusSecurityClient = !0, t._savePin = async function() {
		let e = this.shadowRoot.getElementById("pin-status"), t = this._dashboard?.entries?.[0], n = Kt(this.shadowRoot, "current-pin")?.value ?? "", r = Kt(this.shadowRoot, "new-pin-1")?.value ?? "", i = Kt(this.shadowRoot, "new-pin-2")?.value ?? "", a = (t) => {
			e && (e.textContent = t, e.className = "status err");
		};
		if (!t?.entry_id) return a("No Argus config entry is available");
		if (t.pin_configured && !n) return a(qt(this, "pin_incorrect", "PIN incorrecto"));
		if (r !== i) return a(qt(this, "pin_mismatch", "Los PIN no coinciden"));
		if (r && !/^\d{4,12}$/.test(r)) return a("PIN: se requieren entre 4 y 12 dígitos");
		if (!this._send) return a("Argus WebSocket is unavailable");
		try {
			await this._send("argus/update_master_pin", {
				entry_id: t.entry_id,
				pin: r,
				current_pin: n
			}), t.pin_configured = !!r, e && (e.textContent = r ? qt(this, "pin_updated", "PIN actualizado") : qt(this, "pin_deleted", "PIN eliminado"), e.className = "status ok");
			for (let e of [
				"current-pin",
				"new-pin-1",
				"new-pin-2"
			]) {
				let t = Kt(this.shadowRoot, e);
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
var Yt = "argus-hdr-promotion-styles";
function Xt(e) {
	Zt(e);
}
function Zt(e) {
	if (!e || e.__argusPremiumHDRApplied) return;
	e.__argusPremiumHDRApplied = !0;
	let t = e.prototype.connectedCallback;
	e.prototype.connectedCallback = function() {
		let e = typeof t == "function" ? t.call(this) : void 0;
		return Qt(this), e;
	};
}
function Qt(e) {
	let t = e.shadowRoot;
	if (!t || t.getElementById(Yt)) return;
	let n = document.createElement("style");
	n.id = Yt, n.textContent = "\n    @supports (color: color(rec2020 1 1 1)) {\n      :host {\n        --argus-accent-green: color(rec2020 0.15 0.85 0.35);\n        --argus-accent-amber: color(rec2020 0.95 0.70 0.10);\n        --argus-accent-red: color(rec2020 0.95 0.15 0.20);\n        --argus-accent-blue: color(rec2020 0.15 0.55 0.95);\n        --argus-accent-purple: color(rec2020 0.70 0.20 0.90);\n        --argus-glow-green: rgba(30, 220, 90, 0.45);\n        --argus-glow-amber: rgba(255, 180, 20, 0.45);\n        --argus-glow-red: rgba(255, 40, 50, 0.55);\n      }\n    }\n\n    @supports (color: color(display-p3 1 1 1)) and (not (color: color(rec2020 1 1 1))) {\n      :host {\n        --argus-accent-green: color(display-p3 0.22 0.82 0.38);\n        --argus-accent-amber: color(display-p3 0.98 0.72 0.15);\n        --argus-accent-red: color(display-p3 0.98 0.20 0.25);\n        --argus-accent-blue: color(display-p3 0.20 0.58 0.95);\n        --argus-accent-purple: color(display-p3 0.68 0.25 0.88);\n        --argus-glow-green: rgba(34, 197, 94, 0.40);\n        --argus-glow-amber: rgba(245, 158, 11, 0.40);\n        --argus-glow-red: rgba(239, 68, 68, 0.50);\n      }\n    }\n\n    :host {\n      --argus-accent-green: #10b981;\n      --argus-accent-amber: #f59e0b;\n      --argus-accent-red: #ef4444;\n      --argus-accent-blue: #3b82f6;\n      --argus-accent-purple: #8b5cf6;\n      --argus-glow-green: rgba(16, 185, 129, 0.35);\n      --argus-glow-amber: rgba(245, 158, 11, 0.35);\n      --argus-glow-red: rgba(239, 68, 68, 0.45);\n    }\n\n    .entry-icon,\n    .argus-shield-svg,\n    .liquid-btn,\n    .console-sensor,\n    .argus-sta-thumb {\n      transform: translate3d(0, 0, 0);\n      backface-visibility: hidden;\n      -webkit-backface-visibility: hidden;\n      perspective: 1000px;\n    }\n\n    .entry-icon {\n      will-change: transform;\n      animation: float-icon 5s ease-in-out infinite;\n    }\n\n    @keyframes float-icon {\n      0%, 100% {\n        transform: translate3d(0, 0, 0) scale3d(1, 1, 1);\n      }\n      50% {\n        transform: translate3d(0, -6px, 0) scale3d(1.015, 1.015, 1);\n      }\n    }\n\n    @media (prefers-reduced-motion: reduce) {\n      .entry-icon {\n        animation: none !important;\n        transform: none !important;\n      }\n    }\n  ", t.appendChild(n);
}
//#endregion
//#region src/features/motion/index.ts
var $t = "argus-motion-system-v2049", en = "__argusMotionV2049", tn = ".user-card,.liquid-btn,.mode-btn,.lang-pill,.entry-fs,.fs-btn,.file-card-btn,.pick-row,.widget-size-btn,.widget-toggle-btn,.argus-disarm-btn,[data-login-digit],#btn-submit-login-pin,#btn-cancel-login,#btn-complete-setup,#btn-claim-admin", nn = "\n:host{--argus-motion-fast:120ms;--argus-motion-ease:cubic-bezier(.22,.8,.25,1)}\n#widget-grid,.dashboard-instances,#widget-grid>.dashboard-instances,#widget-grid>.dashboard-instances>.entry{animation:none!important;transition:none!important;opacity:1!important;transform:none!important;visibility:visible!important}\n#widget-grid.argus-motion-dashboard-enter,.dashboard-instances.argus-motion-dashboard-enter,.argus-motion-dashboard-prep{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}\n.dashboard-instances>.entry{will-change:auto!important}\n.user-card.is-entering{pointer-events:none;box-shadow:0 0 0 1px rgba(120,190,255,.45),0 10px 24px rgba(0,60,140,.18)}\n.argus-motion-press{transform:scale(.982)!important;transition:transform var(--argus-motion-fast) var(--argus-motion-ease)!important}\n:host(.argus-perf-essential) .argus-motion-press{transition:none!important;transform:none!important}\n@media(prefers-reduced-motion:reduce){.argus-motion-press{transition:none!important;transform:none!important}}\n";
function rn(e) {
	if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return "essential";
	let t = String(e._argusPerfProfile || e.dataset?.argusPerf || "").toLowerCase();
	return t === "essential" || e.classList.contains("argus-perf-essential") ? "essential" : t === "light" ? "light" : "full";
}
function an(e) {
	if (e[en]) return e[en];
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
	return Object.defineProperty(e, en, {
		value: t,
		writable: !0,
		configurable: !0
	}), t;
}
function on(e, t) {
	let n = requestAnimationFrame(() => {
		e.rafs.delete(n), e.active && t();
	});
	return e.rafs.add(n), n;
}
function sn(e, t, n, r, i) {
	t.addEventListener(n, r, i), e.cleanups.add(() => t.removeEventListener(n, r, i));
}
function cn(e) {
	let t = e.shadowRoot;
	if (!t) return;
	let n = t.getElementById($t);
	n ? n.textContent !== nn && (n.textContent = nn) : (n = document.createElement("style"), n.id = $t, n.textContent = nn, t.appendChild(n));
}
function ln(e) {
	e.profileControl?.classList.remove("is-entering"), e.profileControl = null, e.panel.shadowRoot?.getElementById("bootstrap-overlay")?.removeAttribute("aria-busy");
}
function un(e, t) {
	ln(e), e.profileControl = t, t?.classList.add("is-entering"), e.panel.shadowRoot?.getElementById("bootstrap-overlay")?.setAttribute("aria-busy", "true");
}
function dn(e) {
	!e.observer && e.panel.shadowRoot && (e.observer = new MutationObserver((t) => {
		t.some((e) => [...e.addedNodes].some((e) => e instanceof Element && e.id !== $t)) && (e.observerFrame ||= on(e, () => {
			e.observerFrame = 0, cn(e.panel);
		}));
	}), e.observer.observe(e.panel.shadowRoot, {
		childList: !0,
		subtree: !0,
		attributes: !1
	}));
}
function fn(e) {
	let t = e.panel.shadowRoot;
	if (!t) return;
	let n = (t) => {
		t && (t.classList.remove("argus-motion-press"), e.pressed.delete(t));
	};
	sn(e, t, "pointerdown", (t) => {
		if (rn(e.panel) === "essential") return;
		let n = t.target?.closest?.(tn);
		n && !n.disabled && (n.classList.add("argus-motion-press"), e.pressed.add(n));
	}, !0), [
		"pointerup",
		"pointercancel",
		"pointerleave"
	].forEach((r) => sn(e, t, r, (e) => {
		let t = e.target;
		n(t?.closest?.(tn));
	}, !0)), sn(e, t, "click", (t) => {
		let n = t.target, r = n?.closest?.(".user-card");
		r && r.dataset.isOwn === "true" && r.dataset.pinRequired !== "true" && un(e, r), n?.closest?.("#btn-submit-login-pin,#btn-complete-setup,#btn-claim-admin") && un(e, n.closest("button")), n?.closest?.("#btn-cancel-login") && ln(e);
	}, !0);
}
function pn(e) {
	!e.active && e.panel.shadowRoot && (e.active = !0, cn(e.panel), fn(e), dn(e), e.api = Object.freeze({
		animateView: () => {},
		stagger: () => {},
		transitionBackground: () => () => {},
		animateDashboard: () => {}
	}));
}
function mn(e) {
	e.active = !1, e.observer?.disconnect(), e.observer = null, e.observerFrame && cancelAnimationFrame(e.observerFrame), e.observerFrame = 0, e.rafs.forEach(cancelAnimationFrame), e.rafs.clear(), e.timers.forEach(clearTimeout), e.timers.clear(), e.cleanups.forEach((e) => e()), e.cleanups.clear(), e.pressed.forEach((e) => e.classList.remove("argus-motion-press")), e.pressed.clear(), ln(e);
}
function hn(e) {
	let t = e?.prototype;
	if (!t || t.__argusMotionSystemV2049) return;
	t.__argusMotionSystemV2049 = !0;
	let n = t.connectedCallback, r = t.disconnectedCallback, i = t._load;
	t.connectedCallback = function() {
		let e = n?.call(this), t = an(this);
		return this.shadowRoot ? pn(t) : queueMicrotask(() => pn(t)), e;
	}, t.disconnectedCallback = function() {
		let e = this[en];
		return e && mn(e), r?.call(this);
	}, t._load = async function(...e) {
		let t = an(this);
		try {
			let n = await i?.apply(this, e);
			return !t.active && this.isConnected && pn(t), cn(this), ln(t), n;
		} catch (e) {
			throw ln(t), e;
		}
	};
}
//#endregion
//#region src/features/render/stable.ts
var gn = "__argusStableRenderV2050";
function _n(e) {
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
function vn(e, t, n, r, i, a, o) {
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
function yn(e, t) {
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
function bn(e) {
	let t = e?.prototype;
	if (!t || t[gn]) return;
	t[gn] = !0;
	let n = t._renderEntries, r = Object.getOwnPropertyDescriptor(t, "hass") || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "hass");
	t._updateLiveClocks = function() {
		_n(this);
	}, t._updateHeroClock = function() {
		_n(this);
	}, t._startClock = function() {
		this._clockInterval && clearInterval(this._clockInterval), _n(this), this._clockInterval = setInterval(() => {
			this._dashboard && _n(this);
		}, 1e3);
	}, t._renderEntries = function(e = !1) {
		let t = this.shadowRoot;
		if (!t) return n?.call(this, e);
		let r = t.getElementById("entries"), i = this._dashboard?.entries || [];
		if (this._instanceSignatures = this._instanceSignatures || /* @__PURE__ */ new Map(), !r || !i.length) {
			let r = n?.call(this, e);
			return yn(this, t.getElementById("entries")), _n(this), r;
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
				}).join(","), m = vn(this, n, a, o, p, s, c);
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
				_n(this), yn(this, r);
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
			}).join(","), m = vn(this, n, a, o, p, s, c);
			this._instanceSignatures.set(t, m), e.dataset.renderSig = m;
		}), yn(this, r), _n(this), o;
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
				this._hass = e, this._updateTheme?.(), d ? (this._renderEntries?.(i), this._renderActivityLog?.()) : _n(this);
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
var xn = "argus-v2050-alarm-visuals", Sn = {
	armed_home: /EN CASA|HOME|EM CASA|CASA|在家|ДОМА/i,
	armed_away: /AUSENTE|AWAY|ASSENTE|外出|УШЁЛ/i,
	armed_night: /NOCHE|NIGHT|NOITE|NOTTE|夜间|НОЧЬ/i
};
function Cn(e, t) {
	let n = t?.entity_id || t?.alarm_entity_id, r = n ? e._hass?.states?.[n]?.state : void 0;
	return String(r || t?.state || t?.alarm_state || t?.attributes?.state || "").toLowerCase();
}
function wn(e, t, n) {
	e.classList.toggle("active", n), e.classList.toggle("argus-action-active", n), e.dataset.argusAction = t, t === "sos" && e.classList.toggle("flashing", n);
}
function Tn(e) {
	let t = e.shadowRoot;
	if (!t) return;
	let n = t.getElementById(xn);
	n || (n = document.createElement("style"), n.id = xn, t.appendChild(n)), n.textContent = "\n.entry .liquid-stack .liquid-btn{border-radius:13px!important;color:rgba(255,255,255,.92)!important}\n.entry.argus-arming .entry-icon>svg,.entry.argus-waiting .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important;will-change:transform,opacity}\n.argus-shield-status{display:block;margin:7px auto 0;padding:5px 10px;width:max-content;max-width:180px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:rgba(255,149,0,.13);color:#ffd27a;font-size:9px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}\n.entry .console-sensor.argus-blocking,.entry .console-sensor.argus-triggered-sensor{border-color:#ff8a1f!important;background:linear-gradient(135deg,rgba(249,115,22,.32),rgba(194,65,12,.18))!important;animation:argusTriggeredSensor .72s ease-in-out infinite!important;will-change:transform,opacity}\n@keyframes argusArmingShield{0%,100%{opacity:.55;transform:scale3d(.94,.94,1)}50%{opacity:1;transform:scale3d(1.07,1.07,1)}}\n@keyframes argusArmingLabel{0%,100%{opacity:.62}50%{opacity:1}}\n@keyframes argusTriggeredSensor{0%,100%{opacity:.62;transform:scale3d(1,1,1)}50%{opacity:1;transform:scale3d(1.02,1.02,1)}}\n";
}
function En(e) {
	if (!e.shadowRoot) return;
	Tn(e);
	let t = e.shadowRoot.querySelectorAll(".entry");
	Array.from(t).forEach((t, n) => {
		let r = e._dashboard?.entries?.[n] || {}, i = r.attributes || e._hass?.states?.[r.entity_id]?.attributes || {}, a = Cn(e, r), o = i.arming_blocking_sensors || [], s = a === "arming" || !!i.arming_waiting_for_sensors || !!o.length;
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
			if (/SOS|PÁNICO|PANIC|PANIQUE|PÂNICO|PANICO|紧急|ПАНИКА/i.test(n)) wn(t, "sos", !!i.argus_panic_active);
			else if (/DESARMAR|DISARM|DESARMADO|DISARMED|DÉSARMER|DÉSARMÉ|OFF|已撤防|СНЯТО/i.test(n)) wn(t, "disarm", a === "disarmed");
			else {
				let e = Object.entries(Sn).find(([, e]) => e.test(n));
				e && wn(t, e[0], a === e[0]);
			}
		});
		let d = new Set((i.triggered_sensors || []).map(String)), f = new Set(o.map((t) => String(e._dashboard?.available_entities?.find((e) => e.entity_id === t)?.name || t).toLocaleLowerCase()));
		t.querySelectorAll(".console-sensor").forEach((e) => {
			let t = String(e.querySelector(".console-sensor-name")?.textContent || e.textContent || "").toLocaleLowerCase(), n = Array.from(f).some((e) => t.includes(e) || e.includes(t)), r = Array.from(d).some((e) => t.includes(String(e).toLocaleLowerCase()));
			e.classList.toggle("argus-blocking", n), e.classList.toggle("argus-triggered-sensor", r);
		});
	});
}
function Dn(e) {
	let t = e?.prototype;
	if (!t || t.__v2050AlarmVisuals) return;
	t.__v2050AlarmVisuals = !0;
	let n = t.connectedCallback, r = t._load, i = t._renderEntries;
	t.connectedCallback = function() {
		let e = n?.call(this);
		return En(this), e;
	}, t._load = async function(...e) {
		let t = await r?.apply(this, e);
		return En(this), t;
	}, t._renderEntries = function(...e) {
		let t = i?.apply(this, e);
		return En(this), t;
	};
}
//#endregion
//#region src/features/widgets/responsive.ts
var On = "argus-v2049-responsive-widgets", kn = "#w-access,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role=\"tabpanel\"],.users-modal,.access-modal,.argus-users-modal";
function An(e) {
	let t = e.shadowRoot;
	if (!t) return;
	let n = t.getElementById(On);
	n || (n = document.createElement("style"), n.id = On, t.appendChild(n)), n.textContent = "\n#w-access{display:flex!important;flex-direction:column!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;box-sizing:border-box!important}\n#w-access>.panel-head,#w-access>.access-summary,#w-access>.tabs{flex:0 0 auto!important}\n#w-access :is(.panel-body,#access-view,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role=\"tabpanel\"]){flex:1 1 auto!important;min-width:0!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;scrollbar-gutter:stable!important;box-sizing:border-box!important}\n:is(.users-modal,.access-modal,.argus-users-modal,.modal,[role=\"dialog\"]){max-width:min(94vw,760px)!important;max-height:min(88dvh,720px)!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;box-sizing:border-box!important}\n/* Backup: title plus an explicit responsive button grid. */\n#w-backup{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-auto-rows:max-content!important;place-content:center!important;align-items:center!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow:hidden!important;box-sizing:border-box!important;padding:16px!important;gap:12px!important;text-align:center!important}\n#w-backup>h2,#w-backup>.panel-head,#w-backup>.panel-title{grid-column:1/-1!important;width:100%!important;margin:0 0 2px!important;text-align:center!important}\n#w-backup>:not(.panel-edit-overlay){min-width:0!important;max-width:100%!important;box-sizing:border-box!important;margin-top:0!important;margin-bottom:0!important}\n#w-backup :is(.panel-body,.actions,.backup-actions,.button-row,.controls){display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-column:1/-1!important;gap:12px!important;width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;box-sizing:border-box!important;flex-wrap:wrap!important}\n#w-backup :is(button,a,ha-button,mwc-button){width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;padding-inline:8px!important;white-space:normal!important;overflow-wrap:anywhere!important;text-align:center!important;justify-content:center!important;box-sizing:border-box!important;font-size:clamp(11px,1.1vw,14px)!important}\n/* Support: compact centered group; no inherited space-between or auto margins. */\n#w-github{display:grid!important;grid-template-columns:minmax(0,1fr)!important;grid-auto-rows:max-content!important;place-content:center!important;justify-items:center!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow:hidden!important;box-sizing:border-box!important;padding:18px!important;row-gap:18px!important;text-align:center!important}\n#w-github>:not(.panel-edit-overlay){min-width:0!important;max-width:100%!important;margin:0!important;box-sizing:border-box!important}\n#w-github :is(h2,.panel-head,.panel-title){width:100%!important;margin:0!important;text-align:center!important}\n#w-github :is(.panel-body,.actions,.support-actions,.button-row,.controls){display:grid!important;place-items:center!important;width:auto!important;min-width:0!important;max-width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important;flex-wrap:wrap!important}\n#w-github :is(button,a,ha-button,mwc-button){width:auto!important;min-width:0!important;max-width:100%!important;margin:0!important;white-space:normal!important;text-align:center!important;justify-content:center!important;box-sizing:border-box!important}\n#w-backup .panel-edit-overlay,#w-github .panel-edit-overlay{position:absolute!important;inset:0!important;margin:0!important;max-width:none!important}\n@media(max-width:460px){#w-backup{grid-template-columns:1fr!important;overflow-y:auto!important}#w-backup :is(.panel-body,.actions,.backup-actions,.button-row,.controls){grid-template-columns:1fr!important}#w-backup :is(button,a,ha-button,mwc-button){font-size:13px!important}#w-github{padding:14px!important;row-gap:12px!important}}\n";
}
function jn(e) {
	let t = e.shadowRoot;
	t && t.querySelectorAll(kn).forEach((e) => {
		let t = e;
		t.style.touchAction = "pan-y", t.style.setProperty("-webkit-overflow-scrolling", "touch"), t.scrollHeight > t.clientHeight && (t.style.overflowY = "auto");
	});
}
function Mn(e) {
	An(e), jn(e);
}
function Nn(e) {
	let t = e?.prototype;
	if (!t || t.__v2049ResponsiveWidgets) return;
	t.__v2049ResponsiveWidgets = !0;
	let n = t.connectedCallback, r = t.disconnectedCallback, i = t._load, a = t._renderEntries;
	t.connectedCallback = function() {
		let e = n?.call(this);
		return Mn(this), this._v2049Observer?.disconnect?.(), this._v2049Frame = 0, this._v2049Observer = new MutationObserver(() => {
			this._v2049Frame ||= requestAnimationFrame(() => {
				this._v2049Frame = 0, Mn(this);
			});
		}), this.shadowRoot && this._v2049Observer.observe(this.shadowRoot, {
			childList: !0,
			subtree: !0
		}), e;
	}, t.disconnectedCallback = function() {
		return this._v2049Observer?.disconnect?.(), this._v2049Observer = null, this._v2049Frame && cancelAnimationFrame(this._v2049Frame), this._v2049Frame = 0, r?.call(this);
	}, t._load = async function(...e) {
		let t = await i?.apply(this, e);
		return Mn(this), t;
	}, t._renderEntries = function(...e) {
		let t = a?.apply(this, e);
		return Mn(this), t;
	};
}
//#endregion
//#region src/features/widgets/layouts.ts
var Pn = "argus-v2050-widget-layouts";
function Fn(e) {
	let t = e.shadowRoot;
	if (!t) return;
	let n = t.getElementById(Pn);
	n || (n = document.createElement("style"), n.id = Pn, t.appendChild(n)), n.textContent = "\n#w-access{display:flex!important;flex-direction:column!important;min-width:0!important;min-height:0!important;height:100%!important;overflow:hidden!important}\n#w-access .panel-body,#w-access #access-view,#w-access .access-view,#w-access .access-content,#w-access .users-list,#w-access .user-list{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;overscroll-behavior:contain!important}\n#w-backup{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:14px!important;padding:16px!important;box-sizing:border-box!important;height:100%!important;min-height:0!important;overflow:hidden!important;text-align:center!important}\n#w-backup h2,#w-backup .panel-head,#w-backup .panel-title{margin:0!important;width:100%!important;text-align:center!important;flex:0 0 auto!important}\n#w-backup .panel-body,#w-backup .actions,#w-backup .backup-actions,#w-backup .button-row,#w-backup .controls{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:10px!important;width:100%!important;max-width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important}\n#w-backup button,#w-backup a,#w-backup ha-button,#w-backup mwc-button{width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;white-space:normal!important;overflow-wrap:anywhere!important;justify-content:center!important;text-align:center!important;font-size:clamp(11px,1.1vw,14px)!important;box-sizing:border-box!important}\n#w-github{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:16px!important;padding:18px!important;box-sizing:border-box!important;height:100%!important;min-height:0!important;overflow:hidden!important;text-align:center!important}\n#w-github h2,#w-github .panel-head,#w-github .panel-title{margin:0!important;width:100%!important;text-align:center!important}\n#w-github .panel-body,#w-github .actions,#w-github .support-actions{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:12px!important;width:auto!important;max-width:100%!important;margin:0!important;padding:0!important}\n#w-github button,#w-github a,#w-github ha-button,#w-github mwc-button{width:auto!important;max-width:100%!important;margin:0!important;justify-content:center!important}\n#w-backup .panel-edit-overlay,#w-github .panel-edit-overlay,#w-access .panel-edit-overlay{position:absolute!important;inset:0!important}\n@media(max-width:520px){#w-backup .panel-body,#w-backup .actions,#w-backup .backup-actions,#w-backup .button-row,#w-backup .controls{grid-template-columns:1fr!important}#w-backup{overflow-y:auto!important}}\n";
}
function In(e) {
	let t = e.shadowRoot;
	t && t.querySelectorAll("#w-access,.access-content,.users-list,.user-list,[role=tabpanel],.users-modal,.access-modal").forEach((e) => {
		let t = e;
		t.style.touchAction = "pan-y", t.style.setProperty("-webkit-overflow-scrolling", "touch"), t.scrollHeight > t.clientHeight && (t.style.overflowY = "auto");
	});
}
function Ln(e) {
	Fn(e), In(e);
}
function Rn(e) {
	let t = e?.prototype;
	if (!t || t.__v2050WidgetLayouts) return;
	t.__v2050WidgetLayouts = !0;
	let n = t.connectedCallback, r = t.disconnectedCallback, i = t._load, a = t._renderEntries;
	t.connectedCallback = function() {
		let e = n?.call(this);
		return Ln(this), this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutFrame = 0, this._v2050LayoutObs = new MutationObserver(() => {
			this._v2050LayoutFrame ||= requestAnimationFrame(() => {
				this._v2050LayoutFrame = 0, Ln(this);
			});
		}), this.shadowRoot && this._v2050LayoutObs.observe(this.shadowRoot, {
			childList: !0,
			subtree: !0
		}), e;
	}, t.disconnectedCallback = function() {
		return this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutObs = null, this._v2050LayoutFrame && cancelAnimationFrame(this._v2050LayoutFrame), this._v2050LayoutFrame = 0, r?.call(this);
	}, t._load = async function(...e) {
		let t = await i?.apply(this, e);
		return Ln(this), t;
	}, t._renderEntries = function(...e) {
		let t = a?.apply(this, e);
		return Ln(this), t;
	};
}
//#endregion
//#region src/features/more-info/hook.ts
var zn = "argus-more-info-hook-installed", Bn = "argus-more-info-dialog-styles";
function Vn(e, t) {
	if (!e || !e.startsWith("alarm_control_panel.")) return !1;
	if (e.includes("argus")) return !0;
	let n = t?.states?.[e];
	return !!(n?.attributes?.argus_version || n?.attributes?.argus_entry_id);
}
function Hn(e) {
	if (!e || typeof e.getElementById == "function" && e.getElementById(Bn)) return;
	let t = e.createElement("style");
	t.id = Bn, t.textContent = "\n    ha-more-info-dialog:has(.argus-more-info-active) ha-dialog,\n    ha-more-info-dialog:has(.argus-more-info-active) .mdc-dialog__surface {\n      --ha-dialog-border-radius: 28px !important;\n      --mdc-shape-medium: 28px !important;\n      background: rgba(7, 17, 31, 0.94) !important;\n      backdrop-filter: blur(32px) saturate(170%) !important;\n      -webkit-backdrop-filter: blur(32px) saturate(170%) !important;\n      border: 1px solid rgba(255, 255, 255, 0.16) !important;\n      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.65) !important;\n      max-width: 640px !important;\n      width: min(92vw, 620px) !important;\n    }\n    .argus-more-info-container {\n      width: 100%;\n      box-sizing: border-box;\n      padding: 0;\n      margin: 0;\n      overflow: hidden;\n      border-radius: 24px;\n    }\n    .argus-more-info-container argus-panel-v2018 {\n      display: block;\n      width: 100%;\n    }\n  ", (e.head || e.body || e).appendChild(t);
}
function Un(e, t) {
	if (!e) return;
	let n = e._entityId || e.entityId || e.params?.entityId;
	if (!Vn(n, t)) return;
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
function Wn(e) {
	if (typeof window > "u" || typeof document > "u" || window[zn]) return;
	window[zn] = !0;
	try {
		Hn(document);
	} catch {}
	let t = (e) => {
		e.detail?.entityId && requestAnimationFrame(() => {
			try {
				let e = document.querySelector("home-assistant"), t = e?.shadowRoot?.querySelector("ha-more-info-dialog") || document.querySelector("ha-more-info-dialog");
				t && Un(t, e?.hass);
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
				t && Un(t, e?.hass);
			} catch {}
		}).observe(document.body, {
			childList: !0,
			subtree: !0
		});
	} catch {}
}
//#endregion
//#region src/app/index.ts
function Gn(e) {
	e ||= customElements.get("argus-panel-v2018");
	let t = e;
	t && !t.__argusTypedFrontend && (t.__argusTypedFrontend = !0, Jt(t), Gt(t), Xt(t), hn(t), bn(t), Dn(t), Ft(t), Nn(t), Rn(t), Wn(t), Ut(t), Rt(t));
}
//#endregion
export { Gn as applyArgusFrontend };
