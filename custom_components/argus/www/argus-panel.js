/**
 * Argus Home Hub – v1.1.10
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
  { code:'es', flag:'🇪🇸', label:'Español' },
  { code:'en', flag:'🇬🇧', label:'English' },
  { code:'fr', flag:'🇫🇷', label:'Français' },
  { code:'pt', flag:'🇧🇷', label:'Português' },
  { code:'it', flag:'🇮🇹', label:'Italiano' },
  { code:'zh', flag:'🇨🇳', label:'中文' },
  { code:'ru', flag:'🇷🇺', label:'Русский' },
];
const TEXTS = {
  es: {
    hero_desc:'Sistema integral de seguridad, control de acceso, automatizaciones y HomeKit.',
    instances:'Instancias activas', modes:'Modos', automations:'⚡ Automatizaciones',
    linked_rules:'Reglas vinculadas a Argus', create_ha:'+ Crear en HA',
    no_rules:'', rules_tip:'',
    settings:'⚙️ Ajustes', change_pin:'PIN Maestro', pin_desc:'Código numérico para armar y desarmar.',
    new_pin:'Nuevo PIN', confirm_pin:'Confirmar PIN', update_pin:'Actualizar PIN',
    current_pin:'PIN actual', notifications_title:'🔔 Notificaciones',
    notif_desc:'Selecciona los dispositivos móviles registrados en HA que recibirán alertas de Argus.',
    save_notif:'Guardar', users_title:'👥 Usuarios y Control de Acceso',
    admin_only:'Solo administradores pueden modificar esta sección.',
    add_user:'Agregar usuario', username:'Nombre de Usuario', user_pin:'PIN de usuario',
    is_admin:'Administrador', save_user:'Guardar', no_users:'Sin usuarios adicionales configurados.',
    homekit_title:'🏠 HomeKit & Matter', close:'Cerrar',
    search_placeholder:'Buscar por nombre, área o entity_id',
    available:'Disponibles', selected_lbl:'Seleccionadas', clear:'Limpiar', accept:'Aceptar',
    introduce_pin:'Introduce tu PIN', pin_modal_desc:'PIN numérico para desarmar Argus',
    confirm:'✓ Confirmar', cancel:'Cancelar',
    disarmed:'Desarmado', armed_home:'En Casa', armed_away:'Ausente',
    armed_night:'Noche', armed_vacation:'Vacaciones', triggered:'¡ALARMA!',
    pending:'Cuenta regresiva', arming:'Armando', unavailable:'No disponible',
    sensor_section:'Sensores de Intrusión', siren_section:'Sirenas', thermostat_alert_notif:'🌡️ Alerta de temperatura',
    none_selected:'Ninguno seleccionado', search_select:'Buscar y seleccionar',
    save_mode:'💾 Guardar modo', details_notif:'Notificación de alarma',
    activity_log:'📋 Historial de Actividad',
    log_armed:'Armado', log_disarmed:'Desarmado', log_triggered:'¡Disparado!',
    log_by:'por', log_sensor:'Sensor', log_no_events:'Sin eventos recientes.',
    mode_home:'En Casa', mode_away:'Ausente', mode_night:'Noche', mode_vacation:'Vacaciones',
    homekit_bridge:'Puente HomeKit', homekit_not_paired:'No vinculado a ninguna casa.',
    homekit_house:'Casa de Apple Home', language:'Idioma',
    lang_select_title:'Seleccionar Idioma',
    btn_home:'🏠 EN CASA', btn_away:'🔒 AUSENTE', btn_night:'🌙 NOCHE',
    btn_vacation:'✈️ VACACIONES', btn_disarmed:'DESARMADO', btn_sos:'🚨 SOS / PÁNICO',
    system_armed:'SISTEMA ARMADO', system_disarmed:'SISTEMA DESARMADO',
    home_name_lbl:'Nombre del Hogar', background_lbl:'Fondo', edit_btn:'✏️ Editar',
    save_btn:'Guardar', backup_title:'Respaldo y Restauración',
    backup_desc:'Guarda una copia de seguridad de tus ajustes o restaura una anterior.',
    export_btn:'📤 Descargar', import_btn:'📥 Restaurar', reset_btn:'⚠️ Restablecer', undo_reset_btn:'↩️ Deshacer Restablecimiento',
    access_title:'Control de Acceso y Usuarios',
    access_desc:'Gestión global de seguridad, PIN maestro y administradores.',
    pin_master_title:'PIN Maestro', pin_active_yes:'PIN Activo: Sí', pin_active_no:'PIN Activo: No',
    select_all:'☑ Todos', deselect_all:'☐ Ninguno', mqtt_label:'MQTT',
    arm_time_label:'Tiempo armado (s)', disarm_time_label:'Tiempo desarmado (s)',
    pin_incorrect:'❌ PIN actual incorrecto', pin_updated:'✓ PIN Actualizado', pin_deleted:'✓ PIN Eliminado',
    searching_auto:'↻ Buscando automatizaciones...', no_auto_linked:'No hay automatizaciones vinculadas a Argus.',
    pin_remove_hint:'Para quitar el PIN: Introduce el actual y deja los campos de abajo vacíos.',
    bypass_lbl:'🚫 Omitir', lock_if_open:'Bloquear si abiertos',
    select_btn:'+ Seleccionar', add_btn:'+ Añadir',
    sensors_to_bypass:'Sensores a Omitir',
    no_instances:'No hay instancias. Agrega Argus desde Integraciones.',
    fullscreen_title:'Pantalla completa',
    sos_slide:'Desliza para activar SOS', sos_confirm_title:'Confirmar pánico',
    sos_confirm_text:'Desliza para disparar la alarma inmediatamente.',
    sos_call:'📞 Llamar a Emergencias',
    home_name_modal_title:'🏡 Nombre del Hogar',
    home_name_modal_desc:'Este nombre aparece en el panel de instancias y en pantalla completa.',
    home_name_label:'Nombre del Hogar', home_name_placeholder:'Mi Casa',
    clear_log_btn:'BORRAR',
    bg_weather:'Clima animado', bg_none:'Sin animación', bg_photo:'Una foto', bg_collage:'Collage',
    temp_auto:'Automático (sensor local / termostato / clima)', temp_thermostat:'(termostato)', battery_low:'⚠️ Batería baja',
    times_section:'⏱️ Tiempos', arm_time:'Armado (s)', disarm_time:'Desarmado (s)',
    save_config:'GUARDAR CONFIGURACIÓN', never_triggered:'Nunca activada',
    bridge_paired:'¡Puente Vinculado!',
    bridge_paired_desc:'El puente <b>{bridge}</b> está actualmente conectado a un ecosistema externo (HomeKit, Matter). Home Assistant no reporta el nombre de la casa destino.',
    bridge_not_connected:'Puente NO Conectado',
    bridge_not_desc:'Activa la integración HomeKit Bridge en Home Assistant e incluye la entidad <code>alarm_control_panel.argus_*</code> para generar un código QR de emparejamiento.',
    manual_disarm:'Manual (Desarmado)',
    manual_arm:'Manual',
    open_sensors:'Sensores abiertos',
    log_detail_disarm:'Sistema desarmado',
    alarm_instance:'Instancia de Alarma',
    log_detail_armed:'Modo',
    log_detail_triggered:'Activación automática',
    user_exp_type: 'Vencimiento',
    user_exp_date: 'Fecha/Hora de Vencimiento',
    exp_indefinite: 'Indefinido',
    exp_temporary: 'Temporal (Fecha/Hora)',
    expired: 'Expirado',
    active_until: 'Vence',
  },
  en: {
    hero_desc:'Alarm control, modes, TTS and automations.',
    instances:'Active Instances', modes:'Modes', automations:'⚡ Automations',
    linked_rules:'Argus-linked Rules', create_ha:'+ Create in HA',
    no_rules:'', rules_tip:'',
    settings:'⚙️ Settings', change_pin:'Master PIN', pin_desc:'Numeric code to arm and disarm.',
    new_pin:'New PIN', confirm_pin:'Confirm PIN', update_pin:'Update PIN',
    current_pin:'Current PIN', notifications_title:'🔔 Notifications',
    notif_desc:'Select the mobile devices registered in HA that will receive Argus alerts.',
    save_notif:'Save', users_title:'👥 Users & Access Control',
    admin_only:'Only administrators can modify this section.',
    add_user:'Add user', username:'Username', user_pin:'User PIN',
    is_admin:'Administrator', save_user:'Save', no_users:'No additional users configured.',
    homekit_title:'🏠 HomeKit & Matter', close:'Close',
    search_placeholder:'Search by name, area or entity_id',
    available:'Available', selected_lbl:'Selected', clear:'Clear', accept:'Accept',
    introduce_pin:'Enter your PIN', pin_modal_desc:'Numeric PIN to disarm Argus',
    confirm:'✓ Confirm', cancel:'Cancel',
    disarmed:'Disarmed', armed_home:'Home', armed_away:'Away',
    armed_night:'Night', armed_vacation:'Vacation', triggered:'ALARM!',
    pending:'Pending', arming:'Arming', unavailable:'Unavailable',
    sensor_section:'Intrusion Sensors', siren_section:'Sirens', thermostat_alert_notif:'🌡️ Temperature alert',
    none_selected:'None selected', search_select:'Search & select',
    save_mode:'💾 Save mode', details_notif:'Alarm notification',
    activity_log:'📋 Activity Log',
    log_armed:'Armed', log_disarmed:'Disarmed', log_triggered:'Triggered!',
    log_by:'by', log_sensor:'Sensor', log_no_events:'No recent events.',
    mode_home:'Home', mode_away:'Away', mode_night:'Night', mode_vacation:'Vacation',
    homekit_bridge:'HomeKit Bridge', homekit_not_paired:'Not paired to any home.',
    homekit_house:'Apple Home', language:'Language',
    lang_select_title:'Select Language',
    btn_home:'🏠 HOME', btn_away:'🔒 AWAY', btn_night:'🌙 NIGHT',
    btn_vacation:'✈️ VACATION', btn_disarmed:'DISARMED', btn_sos:'🚨 SOS / PANIC',
    system_armed:'SYSTEM ARMED', system_disarmed:'SYSTEM DISARMED',
    home_name_lbl:'Home Name', background_lbl:'Background', edit_btn:'✏️ Edit',
    save_btn:'Save', backup_title:'Backup & Restore',
    backup_desc:'Save a backup of your settings or restore a previous one.',
    export_btn:'📤 Download', import_btn:'📥 Restore', reset_btn:'⚠️ Factory Reset', undo_reset_btn:'↩️ Undo Reset',
    access_title:'Access Control & Users',
    access_desc:'Global security management, master PIN and administrators.',
    pin_master_title:'Master PIN', pin_active_yes:'PIN Active: Yes', pin_active_no:'PIN Active: No',
    select_all:'☑ All', deselect_all:'☐ None', mqtt_label:'MQTT',
    arm_time_label:'Arm time (s)', disarm_time_label:'Disarm time (s)',
    pin_incorrect:'❌ Incorrect current PIN', pin_updated:'✓ PIN Updated', pin_deleted:'✓ PIN Deleted',
    searching_auto:'↻ Searching automations...', no_auto_linked:'No automations linked to Argus.',
    pin_remove_hint:'To remove PIN: Enter the current one and leave the fields below empty.',
    bypass_lbl:'🚫 Bypass', lock_if_open:'Lock if open',
    select_btn:'+ Select', add_btn:'+ Add',
    sensors_to_bypass:'Sensors to Bypass',
    no_instances:'No instances. Add Argus from Integrations.',
    fullscreen_title:'Full screen',
    sos_slide:'Slide to activate SOS', sos_confirm_title:'Confirm panic',
    sos_confirm_text:'Slide to trigger the alarm immediately.',
    sos_call:'📞 Call Emergency Services',
    home_name_modal_title:'🏡 Home Name',
    home_name_modal_desc:'This name appears in the instances panel and in full screen.',
    home_name_label:'Home Name', home_name_placeholder:'My Home',
    clear_log_btn:'CLEAR',
    bg_weather:'Animated weather', bg_none:'No animation', bg_photo:'One photo', bg_collage:'Collage',
    temp_auto:'Automatic (local sensor / thermostat / climate)', temp_thermostat:'(thermostat)', battery_low:'⚠️ Low Battery',
    times_section:'⏱️ Times', arm_time:'Arming (s)', disarm_time:'Entry delay (s)',
    save_config:'SAVE CONFIGURATION', never_triggered:'Never triggered',
    bridge_paired:'Bridge Paired!',
    bridge_paired_desc:'The bridge <b>{bridge}</b> is currently connected to an external ecosystem (HomeKit, Matter). Home Assistant does not report the destination home name.',
    bridge_not_connected:'Bridge NOT Connected',
    bridge_not_desc:'Enable the HomeKit Bridge integration in Home Assistant and include the entity <code>alarm_control_panel.argus_*</code> to generate a pairing QR code.',
    manual_disarm:'Manual (Disarmed)',
    manual_arm:'Manual',
    open_sensors:'Open sensors',
    log_detail_disarm:'System disarmed',
    alarm_instance:'Alarm Instance',
    log_detail_armed:'Mode',
    log_detail_triggered:'Automatic activation',
    user_exp_type: 'Expiration',
    user_exp_date: 'Expiration Date/Time',
    exp_indefinite: 'Indefinite',
    exp_temporary: 'Temporary (Date/Time)',
    expired: 'Expired',
    active_until: 'Expires',
  },
  fr: {
    hero_desc:"Sécurité intégrée, contrôle d'accès, automatisations et HomeKit.",
    instances:'Instances actives', modes:'Modes', automations:'⚡ Automatisations',
    linked_rules:'Règles liées à Argus', create_ha:'+ Créer dans HA',
    no_rules:'', rules_tip:'',
    settings:'⚙️ Paramètres', change_pin:'PIN maître', pin_desc:'Code numérique pour armer et désarmer.',
    new_pin:'Nouveau PIN', confirm_pin:'Confirmer PIN', update_pin:'Mettre à jour PIN',
    current_pin:'PIN actuel', notifications_title:'🔔 Notifications',
    notif_desc:'Sélectionnez les appareils mobiles enregistrés dans HA pour recevoir les alertes Argus.',
    save_notif:'Enregistrer', users_title:'👥 Utilisateurs & Contrôle d\'accès',
    admin_only:'Seuls les administrateurs peuvent modifier cette section.',
    add_user:'Ajouter un utilisateur', username:'Nom d\'utilisateur', user_pin:'PIN utilisateur',
    is_admin:'Administrateur', save_user:'Enregistrer', no_users:'Aucun utilisateur supplémentaire configuré.',
    homekit_title:'🏠 HomeKit & Matter', close:'Fermer',
    search_placeholder:'Rechercher par nom, zone ou entity_id',
    available:'Disponibles', selected_lbl:'Sélectionnés', clear:'Effacer', accept:'Accepter',
    introduce_pin:'Entrez votre PIN', pin_modal_desc:'PIN numérique pour désarmer Argus',
    confirm:'✓ Confirmer', cancel:'Annuler',
    disarmed:'Désarmé', armed_home:'À la maison', armed_away:'Absent',
    armed_night:'Nuit', armed_vacation:'Vacances', triggered:'ALARME!',
    pending:'En attente', arming:'Armement', unavailable:'Indisponible',
    sensor_section:'Capteurs d\'intrusion', siren_section:'Sirènes', thermostat_alert_notif:'🌡️ Alerte de température',
    none_selected:'Aucun sélectionné', search_select:'Rechercher & sélectionner',
    save_mode:'💾 Enregistrer mode', details_notif:'Notification d\'alarme',
    activity_log:'📋 Journal d\'activité',
    log_armed:'Armé', log_disarmed:'Désarmé', log_triggered:'Déclenché!',
    log_by:'par', log_sensor:'Capteur', log_no_events:'Aucun événement récent.',
    mode_home:'Maison', mode_away:'Absent', mode_night:'Nuit', mode_vacation:'Vacances',
    homekit_bridge:'Pont HomeKit', homekit_not_paired:'Non associé à une maison.',
    homekit_house:'Apple Home', language:'Langue',
    lang_select_title:'Sélectionner la langue',
    btn_home:'🏠 MAISON', btn_away:'🔒 ABSENT', btn_night:'🌙 NUIT',
    btn_vacation:'✈️ VACANCES', btn_disarmed:'DÉSARMÉ', btn_sos:'🚨 SOS / PANIQUE',
    system_armed:'SYSTÈME ARMÉ', system_disarmed:'SYSTÈME DÉSARMÉ',
    home_name_lbl:'Nom du domicile', background_lbl:'Fond', edit_btn:'✏️ Modifier',
    save_btn:'Enregistrer', backup_title:'Sauvegarde & Restauration',
    backup_desc:'Enregistrez une sauvegarde ou restaurez une précédente.',
    export_btn:'📤 Télécharger', import_btn:'📥 Restaurer', reset_btn:'⚠️ Réinitialiser', undo_reset_btn:'↩️ Annuler la réinitialisation',
    access_title:'Contrôle d\'accès & Utilisateurs',
    access_desc:'Gestion globale de la sécurité, PIN maître et administrateurs.',
    pin_master_title:'PIN Maître', pin_active_yes:'PIN actif: Oui', pin_active_no:'PIN actif: Non',
    select_all:'☑ Tous', deselect_all:'☐ Aucun', mqtt_label:'MQTT',
    arm_time_label:'Temps armement (s)', disarm_time_label:'Temps désarmement (s)',
    pin_incorrect:'❌ PIN actuel incorrect', pin_updated:'✓ PIN mis à jour', pin_deleted:'✓ PIN supprimé',
    searching_auto:'↻ Recherche automatisations...', no_auto_linked:'Aucune automatisation liée à Argus.',
    pin_remove_hint:'Pour supprimer le PIN: entrez le PIN actuel et laissez les champs vides.',
    bypass_lbl:'🚫 Ignorer', lock_if_open:'Bloquer si ouvert',
    select_btn:'+ Sélectionner', add_btn:'+ Ajouter',
    sensors_to_bypass:'Capteurs à ignorer', no_instances:'Aucune instance.',
    fullscreen_title:'Plein écran', sos_slide:'Glisser pour activer SOS',
    sos_confirm_title:'Confirmer la panique', sos_confirm_text:'Glissez pour déclencher l\'alarme immédiatement.',
    sos_call:'📞 Appeler les urgences',
    home_name_modal_title:'🏡 Nom du domicile',
    home_name_modal_desc:'Ce nom apparaît dans le panneau des instances et en plein écran.',
    home_name_label:'Nom du domicile', home_name_placeholder:'Ma maison',
    clear_log_btn:'EFFACER',
    bg_weather:'Météo animée', bg_none:'Sans animation', bg_photo:'Une photo', bg_collage:'Collage',
    temp_auto:'Automatique (capteur local / thermostat / climat)', temp_thermostat:'(thermostat)', battery_low:'⚠️ Batterie faible',
    times_section:'⏱️ Temps', arm_time:'Armé (s)', disarm_time:'Délai entrée (s)',
    save_config:'ENREGISTRER LA CONFIGURATION', never_triggered:'Jamais déclenché',
    bridge_paired:'Pont associé!',
    bridge_paired_desc:'Le pont <b>{bridge}</b> est connecté à un écosystème externe (HomeKit, Matter). Home Assistant ne rapporte pas le nom de la maison.',
    bridge_not_connected:'Pont NON connecté',
    bridge_not_desc:'Activez l\'intégration HomeKit Bridge dans Home Assistant et incluez l\'entité <code>alarm_control_panel.argus_*</code> pour générer un QR d\'appairage.',
    manual_disarm:'Manuel (Désarmé)', manual_arm:'Manuel',
    open_sensors:'Capteurs ouverts', log_detail_disarm:'Système désarmé',
    alarm_instance:"Instance d'alarme",
    log_detail_armed:'Mode', log_detail_triggered:'Activation automatique',
  },
  pt: {
    hero_desc:'Segurança integrada, controle de acesso, automações e HomeKit.',
    instances:'Instâncias ativas', modes:'Modos', automations:'⚡ Automações',
    linked_rules:'Regras vinculadas ao Argus', create_ha:'+ Criar no HA',
    no_rules:'', rules_tip:'',
    settings:'⚙️ Configurações', change_pin:'PIN Mestre', pin_desc:'Código numérico para armar e desarmar.',
    new_pin:'Novo PIN', confirm_pin:'Confirmar PIN', update_pin:'Atualizar PIN',
    current_pin:'PIN atual', notifications_title:'🔔 Notificações',
    notif_desc:'Selecione os dispositivos móveis registrados no HA que receberão alertas do Argus.',
    save_notif:'Salvar', users_title:'👥 Usuários & Controle de Acesso',
    admin_only:'Somente administradores podem modificar esta seção.',
    add_user:'Adicionar usuário', username:'Nome de usuário', user_pin:'PIN do usuário',
    is_admin:'Administrador', save_user:'Salvar', no_users:'Nenhum usuário adicional configurado.',
    homekit_title:'🏠 HomeKit & Matter', close:'Fechar',
    search_placeholder:'Buscar por nome, área ou entity_id',
    available:'Disponíveis', selected_lbl:'Selecionados', clear:'Limpar', accept:'Aceitar',
    introduce_pin:'Digite seu PIN', pin_modal_desc:'PIN numérico para desarmar o Argus',
    confirm:'✓ Confirmar', cancel:'Cancelar',
    disarmed:'Desarmado', armed_home:'Em Casa', armed_away:'Ausente',
    armed_night:'Noite', armed_vacation:'Férias', triggered:'ALARME!',
    pending:'Pendente', arming:'Armando', unavailable:'Indisponível',
    sensor_section:'Sensores de Intrusão', siren_section:'Sirenes', thermostat_alert_notif:'🌡️ Alerta de temperatura',
    none_selected:'Nenhum selecionado', search_select:'Buscar & selecionar',
    save_mode:'💾 Salvar modo', details_notif:'Notificação de alarme',
    activity_log:'📋 Registro de Atividade',
    log_armed:'Armado', log_disarmed:'Desarmado', log_triggered:'Disparado!',
    log_by:'por', log_sensor:'Sensor', log_no_events:'Nenhum evento recente.',
    mode_home:'Em Casa', mode_away:'Ausente', mode_night:'Noite', mode_vacation:'Férias',
    homekit_bridge:'Ponte HomeKit', homekit_not_paired:'Não associado a nenhuma casa.',
    homekit_house:'Apple Home', language:'Idioma',
    lang_select_title:'Selecionar Idioma',
    btn_home:'🏠 EM CASA', btn_away:'🔒 AUSENTE', btn_night:'🌙 NOITE',
    btn_vacation:'✈️ FÉRIAS', btn_disarmed:'DESARMADO', btn_sos:'🚨 SOS / PÂNICO',
    system_armed:'SISTEMA ARMADO', system_disarmed:'SISTEMA DESARMADO',
    home_name_lbl:'Nome do lar', background_lbl:'Fundo', edit_btn:'✏️ Editar',
    save_btn:'Salvar', backup_title:'Backup & Restauração',
    backup_desc:'Salve um backup ou restaure um anterior.',
    export_btn:'📤 Baixar', import_btn:'📥 Restaurar', reset_btn:'⚠️ Redefinir', undo_reset_btn:'↩️ Desfazer Redefinição',
    access_title:'Controle de Acesso & Usuários',
    access_desc:'Gerenciamento global, PIN mestre e administradores.',
    pin_master_title:'PIN Mestre', pin_active_yes:'PIN Ativo: Sim', pin_active_no:'PIN Ativo: Não',
    select_all:'☑ Todos', deselect_all:'☐ Nenhum', mqtt_label:'MQTT',
    arm_time_label:'Tempo armado (s)', disarm_time_label:'Tempo desarmado (s)',
    pin_incorrect:'❌ PIN atual incorreto', pin_updated:'✓ PIN Atualizado', pin_deleted:'✓ PIN Removido',
    searching_auto:'↻ Buscando automações...', no_auto_linked:'Nenhuma automação vinculada ao Argus.',
    pin_remove_hint:'Para remover o PIN: insira o atual e deixe os campos abaixo vazios.',
    bypass_lbl:'🚫 Ignorar', lock_if_open:'Bloquear se aberto',
    select_btn:'+ Selecionar', add_btn:'+ Adicionar',
    sensors_to_bypass:'Sensores a ignorar', no_instances:'Nenhuma instância.',
    fullscreen_title:'Tela cheia', sos_slide:'Deslize para ativar SOS',
    sos_confirm_title:'Confirmar pânico', sos_confirm_text:'Deslize para acionar o alarme imediatamente.',
    sos_call:'📞 Chamar emergências',
    home_name_modal_title:'🏡 Nome do lar',
    home_name_modal_desc:'Este nome aparece no painel de instâncias e em tela cheia.',
    home_name_label:'Nome do lar', home_name_placeholder:'Minha Casa',
    clear_log_btn:'LIMPAR',
    bg_weather:'Clima animado', bg_none:'Sem animação', bg_photo:'Uma foto', bg_collage:'Colagem',
    temp_auto:'Automático (sensor local / termostato / clima)', temp_thermostat:'(termostato)', battery_low:'⚠️ Bateria fraca',
    times_section:'⏱️ Tempos', arm_time:'Armado (s)', disarm_time:'Atraso de entrada (s)',
    save_config:'SALVAR CONFIGURAÇÃO', never_triggered:'Nunca ativado',
    bridge_paired:'Ponte Associada!',
    bridge_paired_desc:'A ponte <b>{bridge}</b> está conectada a um ecossistema externo (HomeKit, Matter). O Home Assistant não reporta o nome da casa.',
    bridge_not_connected:'Ponte NÃO Conectada',
    bridge_not_desc:'Ative a integração HomeKit Bridge no Home Assistant e inclua a entidade <code>alarm_control_panel.argus_*</code> para gerar um QR de emparelhamento.',
    manual_disarm:'Manual (Desarmado)', manual_arm:'Manual',
    open_sensors:'Sensores abertos', log_detail_disarm:'Sistema desarmado',
    log_detail_armed:'Modo', log_detail_triggered:'Ativação automática',
    alarm_instance:'Instância do alarme',
  },
  it: {
    hero_desc:'Sicurezza integrata, controllo accessi, automazioni e HomeKit.',
    instances:'Istanze attive', modes:'Modi', automations:'⚡ Automazioni',
    linked_rules:'Regole collegate ad Argus', create_ha:'+ Crea in HA',
    no_rules:'', rules_tip:'',
    settings:'⚙️ Impostazioni', change_pin:'PIN Principale', pin_desc:'Codice numerico per armare e disarmare.',
    new_pin:'Nuovo PIN', confirm_pin:'Conferma PIN', update_pin:'Aggiorna PIN',
    current_pin:'PIN attuale', notifications_title:'🔔 Notifiche',
    notif_desc:'Seleziona i dispositivi mobili registrati in HA che riceveranno gli avvisi di Argus.',
    save_notif:'Salva', users_title:'👥 Utenti & Controllo Accessi',
    admin_only:'Solo gli amministratori possono modificare questa sezione.',
    add_user:'Aggiungi utente', username:'Nome utente', user_pin:'PIN utente',
    is_admin:'Amministratore', save_user:'Salva', no_users:'Nessun utente aggiuntivo configurato.',
    homekit_title:'🏠 HomeKit & Matter', close:'Chiudi',
    search_placeholder:'Cerca per nome, area o entity_id',
    available:'Disponibili', selected_lbl:'Selezionati', clear:'Cancella', accept:'Accetta',
    introduce_pin:'Inserisci il tuo PIN', pin_modal_desc:'PIN numerico per disarmare Argus',
    confirm:'✓ Conferma', cancel:'Annulla',
    disarmed:'Disarmato', armed_home:'In Casa', armed_away:'Assente',
    armed_night:'Notte', armed_vacation:'Vacanze', triggered:'ALLARME!',
    pending:'In attesa', arming:'Armamento', unavailable:'Non disponibile',
    sensor_section:'Sensori di intrusione', siren_section:'Sirene', thermostat_alert_notif:'🌡️ Avviso temperatura',
    none_selected:'Nessuno selezionato', search_select:'Cerca & seleziona',
    save_mode:'💾 Salva modalità', details_notif:'Notifica allarme',
    activity_log:'📋 Registro Attività',
    log_armed:'Armato', log_disarmed:'Disarmato', log_triggered:'Attivato!',
    log_by:'da', log_sensor:'Sensore', log_no_events:'Nessun evento recente.',
    mode_home:'In Casa', mode_away:'Assente', mode_night:'Notte', mode_vacation:'Vacanze',
    homekit_bridge:'Ponte HomeKit', homekit_not_paired:'Non associato a nessuna casa.',
    homekit_house:'Apple Home', language:'Lingua',
    lang_select_title:'Seleziona Lingua',
    btn_home:'🏠 CASA', btn_away:'🔒 ASSENTE', btn_night:'🌙 NOTTE',
    btn_vacation:'✈️ VACANZE', btn_disarmed:'DISARMATO', btn_sos:'🚨 SOS / PANICO',
    system_armed:'SISTEMA ARMATO', system_disarmed:'SISTEMA DISARMATO',
    home_name_lbl:'Nome della casa', background_lbl:'Sfondo', edit_btn:'✏️ Modifica',
    save_btn:'Salva', backup_title:'Backup & Ripristino',
    backup_desc:'Salva un backup o ripristina uno precedente.',
    export_btn:'📤 Scarica', import_btn:'📥 Ripristina', reset_btn:'⚠️ Ripristina', undo_reset_btn:'↩️ Annulla Ripristino',
    access_title:'Controllo Accessi & Utenti',
    access_desc:'Gestione globale della sicurezza, PIN principale e amministratori.',
    pin_master_title:'PIN Principale', pin_active_yes:'PIN Attivo: Sì', pin_active_no:'PIN Attivo: No',
    select_all:'☑ Tutti', deselect_all:'☐ Nessuno', mqtt_label:'MQTT',
    arm_time_label:'Tempo armato (s)', disarm_time_label:'Tempo disarmato (s)',
    pin_incorrect:'❌ PIN attuale errato', pin_updated:'✓ PIN Aggiornato', pin_deleted:'✓ PIN Eliminato',
    searching_auto:'↻ Ricerca automazioni...', no_auto_linked:'Nessuna automazione collegata ad Argus.',
    pin_remove_hint:'Per rimuovere il PIN: inserisci quello attuale e lascia vuoti i campi sottostanti.',
    bypass_lbl:'🚫 Ignora', lock_if_open:'Blocca se aperto',
    select_btn:'+ Seleziona', add_btn:'+ Aggiungi',
    sensors_to_bypass:'Sensori da ignorare', no_instances:'Nessuna istanza.',
    fullscreen_title:'Schermo intero', sos_slide:'Scorri per attivare SOS',
    sos_confirm_title:'Conferma panico', sos_confirm_text:'Scorri per attivare immediatamente l\'allarme.',
    sos_call:'📞 Chiama i soccorsi',
    home_name_modal_title:'🏡 Nome della casa',
    home_name_modal_desc:'Questo nome appare nel pannello delle istanze e a schermo intero.',
    home_name_label:'Nome della casa', home_name_placeholder:'Casa mia',
    clear_log_btn:'CANCELLA',
    bg_weather:'Meteo animato', bg_none:'Nessuna animazione', bg_photo:'Una foto', bg_collage:'Collage',
    temp_auto:'Automatico (sensore locale / termostato / clima)', temp_thermostat:'(termostato)', battery_low:'⚠️ Batteria scarica',
    times_section:'⏱️ Tempi', arm_time:'Armato (s)', disarm_time:'Ritardo entrata (s)',
    save_config:'SALVA CONFIGURAZIONE', never_triggered:'Mai attivato',
    bridge_paired:'Ponte Associato!',
    bridge_paired_desc:'Il ponte <b>{bridge}</b> è connesso a un ecosistema esterno (HomeKit, Matter). Home Assistant non riporta il nome della casa.',
    bridge_not_connected:'Ponte NON Connesso',
    bridge_not_desc:"Abilita l'integrazione HomeKit Bridge in Home Assistant e includi l'entità <code>alarm_control_panel.argus_*</code> per generare un QR di abbinamento.",
    manual_disarm:'Manuale (Disarmato)', manual_arm:'Manuale',
    open_sensors:'Sensori aperti', log_detail_disarm:'Sistema disarmato',
    alarm_instance:'Istanza allarme',
    log_detail_armed:'Modalità', log_detail_triggered:'Attivazione automatica',
  },
  zh: {
    hero_desc:'集成安全、访问控制、自动化和HomeKit。',
    instances:'活跃实例', modes:'模式', automations:'⚡ 自动化',
    linked_rules:'Argus关联规则', create_ha:'+ 在HA中创建',
    no_rules:'', rules_tip:'',
    settings:'⚙️ 设置', change_pin:'主PIN码', pin_desc:'用于布防和撤防的数字代码。',
    new_pin:'新PIN码', confirm_pin:'确认PIN码', update_pin:'更新PIN码',
    current_pin:'当前PIN码', notifications_title:'🔔 通知',
    notif_desc:'选择在HA中注册的移动设备以接收Argus警报。',
    save_notif:'保存', users_title:'👥 用户和访问控制',
    admin_only:'只有管理员才能修改此部分。',
    add_user:'添加用户', username:'用户名', user_pin:'用户PIN码',
    is_admin:'管理员', save_user:'保存', no_users:'未配置额外用户。',
    homekit_title:'🏠 HomeKit与Matter', close:'关闭',
    search_placeholder:'按名称、区域或entity_id搜索',
    available:'可用', selected_lbl:'已选择', clear:'清除', accept:'接受',
    introduce_pin:'输入您的PIN码', pin_modal_desc:'撤防Argus的数字PIN码',
    confirm:'✓ 确认', cancel:'取消',
    disarmed:'已撤防', armed_home:'在家', armed_away:'外出',
    armed_night:'夜间', armed_vacation:'度假', triggered:'警报！',
    pending:'等待中', arming:'布防中', unavailable:'不可用',
    sensor_section:'入侵传感器', siren_section:'警报器', thermostat_alert_notif:'🌡️ 温度警报',
    none_selected:'未选择', search_select:'搜索并选择',
    save_mode:'💾 保存模式', details_notif:'警报通知',
    activity_log:'📋 活动日志',
    log_armed:'已布防', log_disarmed:'已撤防', log_triggered:'已触发！',
    log_by:'由', log_sensor:'传感器', log_no_events:'没有最近事件。',
    mode_home:'在家', mode_away:'外出', mode_night:'夜间', mode_vacation:'度假',
    homekit_bridge:'HomeKit桥接', homekit_not_paired:'未与任何家庭关联。',
    homekit_house:'Apple Home', language:'语言',
    lang_select_title:'选择语言',
    btn_home:'🏠 在家', btn_away:'🔒 外出', btn_night:'🌙 夜间',
    btn_vacation:'✈️ 度假', btn_disarmed:'已撤防', btn_sos:'🚨 SOS / 紧急',
    system_armed:'系统已布防', system_disarmed:'系统已撤防',
    home_name_lbl:'家庭名称', background_lbl:'背景', edit_btn:'✏️ 编辑',
    save_btn:'保存', backup_title:'备份与恢复',
    backup_desc:'保存设置备份或恢复之前的设置。',
    export_btn:'📤 下载', import_btn:'📥 恢复', reset_btn:'⚠️ 恢复出厂', undo_reset_btn:'↩️ 撤销重置',
    access_title:'访问控制和用户',
    access_desc:'全局安全管理、主PIN码和管理员。',
    pin_master_title:'主PIN码', pin_active_yes:'PIN激活: 是', pin_active_no:'PIN激活: 否',
    select_all:'☑ 全选', deselect_all:'☐ 全不选', mqtt_label:'MQTT',
    arm_time_label:'布防延迟(s)', disarm_time_label:'进入延迟(s)',
    pin_incorrect:'❌ 当前PIN错误', pin_updated:'✓ PIN已更新', pin_deleted:'✓ PIN已删除',
    searching_auto:'↻ 正在搜索自动化...', no_auto_linked:'没有链接到Argus的自动化。',
    pin_remove_hint:'删除PIN: 输入当前PIN并将下面字段留空。',
    bypass_lbl:'🚫 跳过', lock_if_open:'开启时锁定',
    select_btn:'+ 选择', add_btn:'+ 添加',
    sensors_to_bypass:'跳过的传感器', no_instances:'没有实例。',
    fullscreen_title:'全屏', sos_slide:'滑动以激活SOS',
    sos_confirm_title:'确认紧急', sos_confirm_text:'滑动以立即触发警报。',
    sos_call:'📞 拨打紧急服务',
    home_name_modal_title:'🏡 家庭名称',
    home_name_modal_desc:'此名称显示在实例面板和全屏中。',
    home_name_label:'家庭名称', home_name_placeholder:'我的家',
    clear_log_btn:'清除',
    bg_weather:'动画天气', bg_none:'无动画', bg_photo:'单张照片', bg_collage:'拼贴画',
    temp_auto:'自动（本地传感器 / 恒温器 / 气候）', temp_thermostat:'(恒温器)', battery_low:'⚠️ 电池不足',
    times_section:'⏱️ 时间', arm_time:'布防延迟(s)', disarm_time:'进入延迟(s)',
    save_config:'保存配置', never_triggered:'从未触发',
    bridge_paired:'桥已关联!',
    bridge_paired_desc:'桥接<b>{bridge}</b>当前已连接到外部生态系统(HomeKit, Matter)。Home Assistant不报告目标家庭名称。',
    bridge_not_connected:'桥未连接',
    bridge_not_desc:'在Home Assistant中启用HomeKit Bridge集成并包含实体<code>alarm_control_panel.argus_*</code>以生成配对QR码。',
    manual_disarm:'手动(已撤防)', manual_arm:'手动',
    open_sensors:'开启的传感器', log_detail_disarm:'系统已撤防',
    alarm_instance:'报警实例',
    log_detail_armed:'模式', log_detail_triggered:'自动激活',
  },
  ru: {
    hero_desc:'Комплексная безопасность, контроль доступа, автоматизация и HomeKit.',
    instances:'Активные экземпляры', modes:'Режимы', automations:'⚡ Автоматизации',
    linked_rules:'Правила Argus', create_ha:'+ Создать в HA',
    no_rules:'', rules_tip:'',
    settings:'⚙️ Настройки', change_pin:'Мастер PIN', pin_desc:'Цифровой код для постановки и снятия с охраны.',
    new_pin:'Новый PIN', confirm_pin:'Подтвердить PIN', update_pin:'Обновить PIN',
    current_pin:'Текущий PIN', notifications_title:'🔔 Уведомления',
    notif_desc:'Выберите мобильные устройства, зарегистрированные в HA для получения оповещений Argus.',
    save_notif:'Сохранить', users_title:'👥 Пользователи и контроль доступа',
    admin_only:'Только администраторы могут изменять этот раздел.',
    add_user:'Добавить пользователя', username:'Имя пользователя', user_pin:'PIN пользователя',
    is_admin:'Администратор', save_user:'Сохранить', no_users:'Дополнительные пользователи не настроены.',
    homekit_title:'🏠 HomeKit и Matter', close:'Закрыть',
    search_placeholder:'Поиск по имени, зоне или entity_id',
    available:'Доступные', selected_lbl:'Выбранные', clear:'Очистить', accept:'Принять',
    introduce_pin:'Введите PIN', pin_modal_desc:'Цифровой PIN для снятия с охраны Argus',
    confirm:'✓ Подтвердить', cancel:'Отмена',
    disarmed:'Снято с охраны', armed_home:'Дома', armed_away:'Ушёл',
    armed_night:'Ночь', armed_vacation:'Отпуск', triggered:'ТРЕВОГА!',
    pending:'Ожидание', arming:'Постановка', unavailable:'Недоступно',
    sensor_section:'Датчики вторжения', siren_section:'Сирены', thermostat_alert_notif:'🌡️ Температурный сигнал',
    none_selected:'Не выбрано', search_select:'Поиск и выбор',
    save_mode:'💾 Сохранить режим', details_notif:'Уведомление тревоги',
    activity_log:'📋 Журнал активности',
    log_armed:'Поставлено', log_disarmed:'Снято', log_triggered:'Сработало!',
    log_by:'от', log_sensor:'Датчик', log_no_events:'Нет последних событий.',
    mode_home:'Дома', mode_away:'Ушёл', mode_night:'Ночь', mode_vacation:'Отпуск',
    homekit_bridge:'Мост HomeKit', homekit_not_paired:'Не связано ни с каким домом.',
    homekit_house:'Apple Home', language:'Язык',
    lang_select_title:'Выбрать язык',
    btn_home:'🏠 ДОМА', btn_away:'🔒 УШЁЛ', btn_night:'🌙 НОЧЬ',
    btn_vacation:'✈️ ОТПУСК', btn_disarmed:'СНЯТО', btn_sos:'🚨 SOS / ТРЕВОГА',
    system_armed:'СИСТЕМА ПОСТАВЛЕНА', system_disarmed:'СИСТЕМА СНЯТА',
    home_name_lbl:'Название дома', background_lbl:'Фон', edit_btn:'✏️ Редактировать',
    save_btn:'Сохранить', backup_title:'Резервная копия',
    backup_desc:'Сохраните резервную копию или восстановите предыдущую.',
    export_btn:'📤 Скачать', import_btn:'📥 Восстановить', reset_btn:'⚠️ Сброс', undo_reset_btn:'↩️ Отменить сброс',
    access_title:'Контроль доступа и пользователи',
    access_desc:'Глобальная безопасность, мастер PIN и администраторы.',
    pin_master_title:'Мастер PIN', pin_active_yes:'PIN активен: Да', pin_active_no:'PIN активен: Нет',
    select_all:'☑ Все', deselect_all:'☐ Ничего', mqtt_label:'MQTT',
    arm_time_label:'Время взятия (с)', disarm_time_label:'Время снятия (с)',
    pin_incorrect:'❌ Неверный текущий PIN', pin_updated:'✓ PIN Обновлен', pin_deleted:'✓ PIN Удален',
    searching_auto:'↻ Поиск автоматизаций...', no_auto_linked:'Нет автоматизаций, связанных с Argus.',
    pin_remove_hint:'Для удаления PIN: введите текущий и оставьте поля пустыми.',
    bypass_lbl:'🚫 Обход', lock_if_open:'Блокировать если открыто',
    select_btn:'+ Выбрать', add_btn:'+ Добавить',
    sensors_to_bypass:'Датчики для обхода', no_instances:'Нет экземпляров.',
    fullscreen_title:'Полный экран', sos_slide:'Проведите для активации SOS',
    sos_confirm_title:'Подтвердить тревогу', sos_confirm_text:'Проведите для немедленной активации тревоги.',
    sos_call:'📞 Вызвать экстренные службы',
    home_name_modal_title:'🏡 Название дома',
    home_name_modal_desc:'Это имя отображается в панели экземпляров и в полноекранном режиме.',
    home_name_label:'Название дома', home_name_placeholder:'Мой дом',
    clear_log_btn:'ОЧИСТИТЬ',
    bg_weather:'Анимированная погода', bg_none:'Без анимации', bg_photo:'Одно фото', bg_collage:'Коллаж',
    temp_auto:'Авто (лок. датчик / термостат / климат)', temp_thermostat:'(термостат)', battery_low:'⚠️ Низкий заряд',
    times_section:'⏱️ Времена', arm_time:'Постановка (s)', disarm_time:'Задержка входа (s)',
    save_config:'СОХРАНИТЬ КОНФИГУРАЦИЮ', never_triggered:'Никогда не срабатывало',
    bridge_paired:'Мост связан!',
    bridge_paired_desc:'Мост <b>{bridge}</b> подключён к внешней системе (HomeKit, Matter). Home Assistant не сообщает название дома.',
    bridge_not_connected:'Мост НЕ подключён',
    bridge_not_desc:'Включите интеграцию HomeKit Bridge в Home Assistant и добавьте <code>alarm_control_panel.argus_*</code> для QR сопряжения.',
    manual_disarm:'Вручную (Снято)', manual_arm:'Вручную',
    open_sensors:'Открытые датчики', log_detail_disarm:'Система снята',
    alarm_instance:'Экземпляр тревоги',
    log_detail_armed:'Режим', log_detail_triggered:'Автоматическая активация',
  },
};

/* ── Template ─────────────────────────────────────────────────────────── */
const _tmpl = document.createElement('template');
_tmpl.innerHTML = `
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
  }
  
  /* Detect light mode via HA variables and adjust glass */
  :host([argus-dark-mode="false"]) {
    --argus-glass-bg: rgba(255, 255, 255, 0.65);
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
    --argus-pill-color-muted: rgba(0,0,0,0.5);
    --primary-color: #007aff;
  }
  
  :host {
    --hud-text-color: #fff;
    --hud-bg: rgba(255,255,255,0.06);
  }

  .liquid-glass { 
    background: var(--glass-bg); 
    backdrop-filter: blur(12px) saturate(120%); 
    -webkit-backdrop-filter: blur(12px) saturate(120%); 
    border: 1px solid var(--glass-border); 
    box-shadow: var(--glass-shadow); 
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
  }
  .wrap { transition: filter 0.35s ease, opacity 0.35s ease; }
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
  :host([argus-dark-mode="false"]) ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.08);
  }
  :host([argus-dark-mode="false"]) ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.18);
  }

  .battery-alert { margin: 0 0 16px 0; padding: 14px 18px; border-radius: 20px; background: rgba(255, 149, 0, 0.12); border: 1px solid rgba(255, 149, 0, 0.22); color: #ffe3b3; font-weight: 700; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); text-align: left; box-shadow: 0 4px 15px rgba(255,149,0,0.1); }
  
  /* SOS Slider redesign */
  .btn-sos { width: 100%; min-height: 56px; border: 0; border-radius: 20px; background: var(--sos-red); color: white; font-size: 1.05rem; font-weight: 800; letter-spacing: 0.02em; cursor: pointer; box-shadow: 0 10px 25px rgba(255, 59, 48, 0.35); transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease, opacity 0.2s; margin-top: 8px; }
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
  .wrap{max-width:1400px;margin:0 auto;padding:24px;display:grid;gap:24px}
  .glass{background:rgba(255, 255, 255, 0.06);border:1px solid rgba(255, 255, 255, 0.09);border-radius:28px;box-shadow:var(--glass-shadow);backdrop-filter:blur(12px) saturate(1.2);-webkit-backdrop-filter:blur(12px) saturate(1.2)}
  .hero{padding:32px 36px;display:flex;align-items:center;justify-content:space-between;gap:20px;background:linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));margin-bottom:12px}
  .hero-left{display:flex;align-items:center;gap:22px}
  .hero-icon{font-size:54px;line-height:1;filter:drop-shadow(0 0 20px rgba(255,255,255,0.15))}
  .hero h1{margin:0 0 4px;font-size:34px;font-weight:900;letter-spacing:-0.03em;background:var(--hero-gradient, linear-gradient(to right, #ffffff, #82b1ff));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
  .hero p{margin:0;font-size:16px;opacity:.7;font-weight:500}
  
  /* Modern Mode Navigation & iOS Liquid Bubble Transition */
  .tabs { position: relative; display: flex; background: rgba(255, 255, 255, 0.03); padding: 6px; border-radius: 20px; gap: 6px; overflow: visible; scrollbar-width: none; margin-bottom: 20px; border: 1px solid rgba(255, 255, 255, 0.06); z-index: 1; }
  .tabs::-webkit-scrollbar { display: none; }
  .tab { position: relative; flex: 1; min-width: 55px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; border-radius: 14px; padding: 10px 4px; font-size: 11px; font-weight: 800; color: rgba(255, 255, 255, 0.55); transition: color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); cursor: pointer; border: none !important; outline: none; background: transparent !important; box-shadow: none !important; z-index: 3; }
  .tab:hover { color: #fff; }
  .tab:active:not(:disabled) { transform: scale(0.94); }
  .tab.active { color: #fff !important; background: transparent !important; box-shadow: none !important; transform: none !important; }
  
  .tab-bubble { position: absolute; top: 6px; bottom: 6px; height: calc(100% - 12px); border-radius: 14px; z-index: 2; transform-origin: left center; transition: transform 0.45s cubic-bezier(0.25, 1.35, 0.4, 1.05), background 0.4s ease, box-shadow 0.4s ease; pointer-events: none; }
  .tab-bubble.bubble-disarmed { background: #43a047; box-shadow: 0 8px 24px rgba(67, 160, 71, 0.4); }
  .tab-bubble.bubble-home { background: #fb8c00; box-shadow: 0 8px 24px rgba(251, 140, 0, 0.4); }
  .tab-bubble.bubble-away { background: #e53935; box-shadow: 0 8px 24px rgba(229, 57, 53, 0.4); }
  .tab-bubble.bubble-night { background: #1e88e5; box-shadow: 0 8px 24px rgba(30, 136, 229, 0.4); }
  .tab-bubble.bubble-vacation { background: #9c27b0; box-shadow: 0 8px 24px rgba(156, 39, 176, 0.4); }
  
  :host([argus-dark-mode="false"]) .tabs { background: rgba(0, 0, 0, 0.03); border-color: rgba(0, 0, 0, 0.06); }
  :host([argus-dark-mode="false"]) .tab { color: rgba(0, 0, 0, 0.55); }
  :host([argus-dark-mode="false"]) .tab:hover { color: #000; }
  :host([argus-dark-mode="false"]) .tab.active { color: #fff !important; }

  @keyframes bounceIn {
    0% { transform: scale(0.96); opacity: 0; }
    50% { transform: scale(1.01); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  .bounce-in { animation: bounceIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

  .grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}
  @media(max-width:900px){.grid{grid-template-columns:1fr}}
  @media(max-width:750px){.hero{flex-direction:column;text-align:center}.hero-left{flex-direction:column}}
  
  .stack{display:grid;gap:24px}
  .panel{padding:28px;position:relative;overflow:hidden}
  .panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}
  .panel h2{margin:0;font-size:14px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:var(--primary-color,#007aff);opacity:0.95}
  
  /* Personalization inside instances */
  .personalize-row { display: flex; gap: 14px; align-items: center; margin-top: 18px; padding: 16px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; flex-wrap: wrap; }
  :host([argus-dark-mode="false"]) .personalize-row { background: rgba(0,0,0,0.02); border-color: rgba(0,0,0,0.05); }
  .personalize-row .setting-label { font-size: 12px; font-weight: 700; opacity: 0.7; margin-bottom: 4px; }
  
  /* Mode Reorganization Styles — HORIZONTAL */
  .mode-grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: start; }
  @media(max-width:900px){ .mode-grid-layout { grid-template-columns: 1fr; } }
  .mode-section-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 18px; transition: all 0.3s ease; }
  :host([argus-dark-mode="false"]) .mode-section-card { background: rgba(0,0,0,0.02); border-color: rgba(0,0,0,0.05); }
  .mode-section-card:hover { border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); }
  :host([argus-dark-mode="false"]) .mode-section-card:hover { border-color: rgba(0,0,0,0.10); background: rgba(0,0,0,0.04); }
  .mode-section-title { font-size: 13px; font-weight: 800; color: var(--primary-color, #007aff); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px; }
  .mode-sensor-grid { color: var(--primary-text-color, #fff); }
  .mode-sensor-none { color: var(--primary-text-color, rgba(255,255,255,0.5)); opacity: 0.6; font-size: 13px; }
  .mode-section-card span, .mode-section-card label, .mode-section-card .input-label { color: var(--primary-text-color, #fff); }
  :host([argus-dark-mode="false"]) .mode-section-card span, :host([argus-dark-mode="false"]) .mode-section-card label, :host([argus-dark-mode="false"]) .mode-section-card .input-label { color: var(--primary-text-color, #1d1d1f); }
  
  .sensor-pill { background: var(--pill-bg, rgba(255,255,255,0.06)); color: var(--pill-text, #fff); border: 1px solid var(--pill-border, rgba(255,255,255,0.1)); padding: 8px 14px; border-radius: 14px; display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; transition: all 0.2s; max-width: 100%; box-sizing: border-box; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
  @keyframes argus-blink-red { 0%,100%{box-shadow:0 0 0 0 rgba(255,50,50,0);background:var(--pill-bg,rgba(255,255,255,0.06))} 50%{box-shadow:0 0 0 6px rgba(255,50,50,0.25);background:rgba(255,50,50,0.15)} }
  .sensor-pill.siren-active   { animation: argus-blink-red 1.2s ease-in-out infinite; border-color: rgba(255,82,82,0.5) !important; }
  .sensor-pill.triggered-sensor { animation: argus-blink-red 0.9s ease-in-out infinite; border-color: rgba(255,82,82,0.6) !important; }
  :host([argus-dark-mode="false"]) .sensor-pill        { color: var(--pill-text, #1d1d1f); }
  :host([argus-dark-mode="false"]) .sensor-pill button { color: #1d1d1f; }
  .icon-btn { background: none; border: none; padding: 4px; color: inherit; opacity: 0.6; cursor: pointer; transition: opacity 0.2s, transform 0.15s; display: flex; align-items: center; justify-content: center; border-radius: 8px; }
  .icon-btn:active { transform: scale(0.9); }
  
  #mode-status { opacity: 0; transition: opacity .35s; }
  #mode-status.show { opacity: 1; }
  #mode-status.ok  { color: #4caf50; }
  #mode-status.err { color: #f44336; }

  /* Light Mode Modal Overrides */
  :host([argus-dark-mode="false"]) .modal {
    background: rgba(255,255,255,0.97) !important;
    border: 1px solid rgba(0,0,0,0.08) !important;
    color: #1d1d1f !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15) !important;
  }
  :host([argus-dark-mode="false"]) .modal * {
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]) .modal input[type="search"],
  :host([argus-dark-mode="false"]) .modal input[type="text"],
  :host([argus-dark-mode="false"]) .modal input[type="number"],
  :host([argus-dark-mode="false"]) .modal select {
    background: rgba(0,0,0,0.03) !important;
    border-color: rgba(0,0,0,0.10) !important;
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]) .pick-row {
    background: rgba(0,0,0,0.02) !important;
    border-color: rgba(0,0,0,0.05) !important;
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]) .pick-row:hover {
    background: rgba(0,122,255,0.06) !important;
    border-color: rgba(0,122,255,0.2) !important;
  }
  :host([argus-dark-mode="false"]) .pick-row-name,
  :host([argus-dark-mode="false"]) .pick-row-meta {
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]) .pick-row-meta {
    opacity: 0.6 !important;
  }
  :host([argus-dark-mode="false"]) .sel-right-item {
    background: rgba(0,0,0,0.03) !important;
    border-color: rgba(0,0,0,0.06) !important;
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]) .sel-right-item button {
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]) .modal h3,
  :host([argus-dark-mode="false"]) #selector-title {
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]) #selector-count {
    color: rgba(0,0,0,0.6) !important;
  }
  :host([argus-dark-mode="false"]) .sel-actions button {
    color: #1d1d1f !important;
    border-color: rgba(0,0,0,0.08) !important;
  }
  :host([argus-dark-mode="false"]) .modal-back {
    background: rgba(0,0,0,0.3) !important;
  }
  .icon-btn:hover { opacity: 1; background: rgba(255,255,255,0.08); }
  .icon-btn.active { color: #fb8c00; opacity: 1; }
  
  .input-group { display: flex; flex-direction: column; gap: 6px; }
  .input-label { font-size: 12px; font-weight: 700; opacity: 0.7; margin-left: 4px; }
  
  /* Intelligent Entry Card */
  .entry{position:relative;overflow:hidden;border-radius:28px;border:1px solid rgba(255,255,255,0.08);margin-bottom:16px;min-height:220px;display:flex;flex-direction:column;transition:transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);box-shadow:0 12px 30px rgba(0,0,0,0.15)}
  .entry-bg{position:absolute;inset:0;z-index:1;background-size:cover;background-position:center;transition:opacity 0.5s ease}
  .entry-bg img{width:100%;height:100%;object-fit:cover;opacity:0.6}
  .entry-content{position:relative;z-index:2;flex:1;padding:20px 140px 20px 20px;display:grid;grid-template-columns:140px 1fr;gap:20px;align-items:center;background:linear-gradient(90deg, rgba(0,0,0,0.2) 0%, transparent 60%)}
  
  /* Sensor column */
  .sensor-column{position:absolute;right:0;top:0;bottom:0;width:130px;z-index:4;display:flex;flex-direction:column;gap:6px;align-items:flex-end;justify-content:center;padding:12px 12px 12px 0;overflow:hidden;pointer-events:none}
  .sensor-chip{display:flex;align-items:center;gap:5px;padding:4px 10px;border-radius:20px;font-size:10px;font-weight:800;letter-spacing:0.3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:125px;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.12);box-shadow:0 4px 12px rgba(0,0,0,0.25);transition:opacity 0.2s}
  .sensor-chip-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0}
  .sensor-chip--open{background:rgba(220,50,50,0.85);color:#fff}
  .sensor-chip--open .sensor-chip-dot{background:#fff;box-shadow:0 0 5px rgba(255,255,255,0.9)}
  .sensor-chip--triggered{background:rgba(255,10,10,0.95);animation:chip-pulse 0.9s ease-in-out infinite}
  .sensor-chip--closed{background:rgba(15,15,15,0.6);color:#e8e8e8}
  .sensor-chip--closed .sensor-chip-dot{background:#34c759;box-shadow:0 0 5px rgba(52,199,89,0.8)}
  @keyframes chip-pulse{0%,100%{opacity:1}50%{opacity:0.55}}
 
  /* HUD Overlay */
  .hud{position:absolute;top:20px;right:24px;text-align:right;z-index:3;color:var(--hud-text-color);text-shadow:var(--text-shadow);display:flex;flex-direction:column;gap:4px}
  .hud-loc{font-size:13px;font-weight:900;text-transform:uppercase;opacity:1;letter-spacing:1.5px;background:var(--hud-bg);padding:4px 12px;border-radius:10px;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.08);align-self:flex-end}
  .hud-data{font-size:20px;font-weight:800;letter-spacing:-0.02em;background:var(--hud-bg);padding:6px 14px;border-radius:12px;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.08);display:inline-flex;align-items:center;gap:8px;align-self:flex-end}
  .hud-data i{font-size:14px;opacity:0.7;font-style:normal}

  /* Liquid Glass Buttons */
  .liquid-stack{display:grid;gap:10px}
  .liquid-btn{border:none;background:rgba(255,255,255,0.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);color:#fff;padding:14px 18px;border-radius:18px;font-size:13.5px;font-weight:800;display:flex;align-items:center;gap:12px;text-align:left;cursor:pointer;transition:all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);border:1px solid rgba(255,255,255,0.08);text-shadow:0 1px 2px rgba(0,0,0,0.3);letter-spacing:0.5px}
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
  
  .ios-fullscreen { position: fixed !important; inset: 0 !important; width: 100vw !important; height: 100vh !important; max-width: none !important; z-index: 999999 !important; margin: 0 !important; border-radius: 0 !important; display: flex !important; flex-direction: column !important; background: #000 !important; }
  .ios-fullscreen .entry-content { grid-template-columns: 320px 1fr !important; padding: 60px !important; gap: 60px !important; height: 100% !important; align-items: center !important; background: radial-gradient(circle at 20% 50%, rgba(0,0,0,0.5) 0%, transparent 80%) !important; }
  .ios-fullscreen .liquid-btn { padding: 24px 32px !important; font-size: 20px !important; border-radius: 28px !important; gap: 24px !important; box-shadow: 0 10px 40px rgba(0,0,0,0.4) !important; }
  .ios-fullscreen .liquid-btn i { font-size: 28px !important; }
  .ios-fullscreen .hud { top: 60px !important; right: 60px !important; scale: 1.4; transform-origin: top right; }
  .ios-fullscreen .sensor-column { width: 220px !important; padding-right: 60px !important; }
  .ios-fullscreen .sensor-chip { font-size: 16px !important; padding: 10px 20px !important; max-width: 210px !important; }
  
  .entry-icon{display:flex;justify-content:center;align-items:center;perspective:1000px;min-height:160px}
  .entry-icon svg{width:100%;height:auto;max-width:280px;filter:drop-shadow(0 0 25px rgba(255,255,255,0.12));animation:float-icon 5s ease-in-out infinite;transition:max-width 0.4s ease}
  .ios-fullscreen .entry-icon svg{max-width:650px;filter:drop-shadow(0 0 60px rgba(255,255,255,0.3))}
  @keyframes float-icon{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-12px) rotate(1deg)}}

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
  :host([argus-dark-mode="false"]) button.ghost { background:rgba(0,0,0,0.03); border-color:rgba(0,0,0,0.08); }
  :host([argus-dark-mode="false"]) button.ghost:hover { background:rgba(0,0,0,0.06); }
  
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
  :host([argus-dark-mode="false"]) .pm .modal{background:rgba(255, 255, 255, 0.85) !important;border:1px solid rgba(0, 0, 0, 0.08) !important;box-shadow:0 20px 50px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;color:#1d1d1f !important}
  .pin-input{font-size:28px;letter-spacing:10px;text-align:center;padding:12px;border-radius:16px;border:none;background:rgba(255,255,255,0.02);color:inherit;width:100%;outline:none;box-shadow:inset 0 1px 3px rgba(0,0,0,0.2)}
  :host([argus-dark-mode="false"]) .pin-input{background:rgba(0,0,0,0.03)}
  .pin-error{color:var(--error-color,#e53935);font-size:13px;min-height:18px;text-align:center}
  .pin-grid{display:grid;grid-template-columns:repeat(3,68px);gap:16px;justify-content:center;margin-top:10px}
  .pin-btn-round{width:68px;height:68px;border-radius:50% !important;border:1px solid rgba(255,255,255,0.1) !important;background:rgba(255,255,255,0.04) !important;color:#fff !important;font-size:24px;font-weight:600;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s, transform 0.15s, border-color 0.2s;box-shadow:0 4px 10px rgba(0,0,0,0.15);padding:0 !important;outline:none}
  .pin-btn-round:hover{background:rgba(255,255,255,0.12) !important;border-color:rgba(255,255,255,0.2) !important}
  .pin-btn-round:active{transform:scale(0.92) !important;background:rgba(255,255,255,0.2) !important}
  :host([argus-dark-mode="false"]) .pin-btn-round{background:rgba(0,0,0,0.03) !important;border-color:rgba(0,0,0,0.08) !important;color:#1d1d1f !important}
  :host([argus-dark-mode="false"]) .pin-btn-round:hover{background:rgba(0,0,0,0.08) !important}
  .pin-btn-round.action-key{font-size:12px;font-weight:700;letter-spacing:0.3px;text-transform:uppercase;border-color:transparent !important;background:transparent !important;box-shadow:none}
  .pin-btn-round.action-key:hover{background:rgba(255,255,255,0.05) !important}
  :host([argus-dark-mode="false"]) .pin-btn-round.action-key:hover{background:rgba(0,0,0,0.04) !important}
  .pin-btn-round.action-key.enter-key{color:#34c759 !important}
  :host([argus-dark-mode="false"]) .pin-btn-round.action-key.enter-key{color:#28a745 !important}
  .pin-btn-round.action-key.delete-key{color:#ff3b30 !important}
  :host([argus-dark-mode="false"]) .pin-btn-round.action-key.delete-key{color:#dc3545 !important}
  /* User card */
  .user-card{display:flex;align-items:center;justify-content:space-between;padding:14px;border-radius:16px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.02);box-shadow:0 4px 10px rgba(0,0,0,0.08)}
  .user-badge{display:inline-block;padding:3px 9px;border-radius:8px;font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;background:rgba(0,122,255,.12);color:var(--primary-color,#007aff)}
  .user-badge.admin{background:rgba(251,140,0,.12);color:#fb8c00}
  /* Notif target chip */
  .notif-chip{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;background:rgba(67,160,71,.1);border:1px solid rgba(67,160,71,.2);font-size:12px;font-weight:700;color:var(--success-color,#43a047)}
  .notif-chip button{padding:0;border:0;background:none;cursor:pointer;opacity:.65}
  /* Triggered box */
  .trig-box{padding:12px 14px;border-radius:14px;background:rgba(229,57,53,.08);border:1px dashed var(--error-color,#e53935);font-size:12px;font-weight:600;color:var(--error-color,#e53935)}
  /* inputs */
  input[type="text"],input[type="password"],input[type="number"],input[type="search"],select{width:100%;padding:10px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.03);color:var(--primary-text-color);font-size:14px;outline:none;transition:border-color .2s,box-shadow .2s;display:block}
  input[type="text"]:focus,input[type="password"]:focus,input[type="number"]:focus,input[type="search"]:focus,select:focus{border-color:var(--primary-color,#007aff);box-shadow:0 0 0 3px rgba(0, 122, 255, 0.15)}
  /* search */
  .search-wrap{display:flex;gap:10px;align-items:center}
  .search-wrap input{flex:1;min-width:0}
  /* ── Dual-panel selector modal ───────────────────────────────────────────────────── */
  #selector-modal .modal{width:min(860px,96vw);max-height:92vh}
  .sel-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;overflow:hidden}
  @media(max-width:600px){.sel-grid{grid-template-columns:1fr}}
  .sel-panel{display:flex;flex-direction:column;gap:8px;overflow:hidden;min-height:0}
  .sel-panel-inner{overflow-y:auto;flex:1;display:grid;gap:6px;align-content:start}
  .sel-actions{display:flex;gap:6px;flex-wrap:wrap;flex-shrink:0}
  .pick-row{display:grid;grid-template-columns:20px 1fr;align-items:start;gap:8px;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);cursor:pointer;transition:background .12s}
  .pick-row:hover{background:rgba(255,255,255,0.06)}
  .pick-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--primary-color,#007aff);margin-top:2px}
  .pick-row-name{font-weight:700;font-size:13px;display:flex;align-items:center;gap:6px;flex-wrap:wrap}
  .pick-row-meta{font-size:11px;opacity:0.5;margin-top:2px}
  .sel-right-item{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-radius:12px;border:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.03);font-size:13px}
  /* Activity log */
  .log-item{display:flex;align-items:flex-start;gap:12px;padding:12px;border-radius:16px;border:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);color:var(--primary-text-color,#fff);box-shadow:0 4px 10px rgba(0,0,0,0.08)}
  .log-icon{font-size:20px;line-height:1;flex-shrink:0}
  .log-body{flex:1;min-width:0}
  .log-title{font-weight:700;font-size:13px}
  .log-meta{font-size:11px;opacity:.55;margin-top:2px}
  .log-badge{display:inline-block;padding:2px 7px;border-radius:6px;font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;margin-right:4px}
  .log-badge.arm{background:rgba(251,140,0,.12);color:#fb8c00}
  .log-badge.disarm{background:rgba(67,160,71,.12);color:var(--success-color,#43a047)}
  .log-badge.trigger{background:rgba(229,57,53,.15);color:var(--error-color,#e53935)}
  /* ── Weather Animated Backgrounds ────────────────────────────────── */
  .wx{position:absolute;inset:0;overflow:hidden;border-radius:inherit;z-index:1}
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
.sensor-pill .pill-dot { width:10px; height:10px; border-radius:50%; background:#34c759; flex-shrink:0; box-shadow:0 0 10px rgba(52,199,89,0.5); }
.sensor-pill .pill-dot.open { background:#ff3b30; box-shadow:0 0 10px rgba(255,59,48,0.5); }
.sensor-pill .pill-dot.unavailable { background:#999; }
.sensor-pill button { background:none; border:none; color:var(--argus-pill-color, #fff); cursor:pointer; opacity:0.5; padding:4px; font-size:14px; transition:opacity 0.2s; }
.sensor-pill button:hover { opacity:1; }

.mode-sensor-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:12px; margin-top:12px; }
.mode-sensor-none { grid-column:1/-1; padding:30px; text-align:center; background:var(--argus-pill-bg,rgba(255,255,255,0.03)); border:2px dashed var(--argus-pill-border,rgba(255,255,255,0.1)); border-radius:20px; color:var(--argus-pill-color-muted,rgba(255,255,255,0.4)); font-size:14px; font-weight:600; }
.subsection-title { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:12px; color:var(--argus-pill-color-muted,rgba(255,255,255,0.5)); display:block; }

:host([argus-dark-mode="false"]) .list-item-card * { color: #1e1e2d; }

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
:host([argus-dark-mode="false"]) .lang-pill {
  background:rgba(0,0,0,0.07); border-color:rgba(0,0,0,0.15); color:#1e1e2d;
}
:host([argus-dark-mode="false"]) .lang-pill:hover { background:rgba(0,0,0,0.12); }

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
:host([argus-dark-mode="false"]) .lang-modal-card {
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
  background:rgba(255,255,255,0.07);
  border:1.5px solid rgba(255,255,255,0.1);
  cursor:pointer; transition:all 0.18s ease;
  font-size:14px; font-weight:700;
}
.lang-option:hover { background:rgba(255,255,255,0.16); border-color:rgba(255,255,255,0.28); transform:translateY(-1px); }
.lang-option.active {
  background:rgba(3,169,244,0.22); border-color:rgba(3,169,244,0.55);
  box-shadow:0 0 18px rgba(3,169,244,0.25);
}
:host([argus-dark-mode="false"]) .lang-option { background:rgba(0,0,0,0.04); border-color:rgba(0,0,0,0.1); color:#1e1e2d; }
:host([argus-dark-mode="false"]) .lang-option:hover { background:rgba(0,0,0,0.09); }
:host([argus-dark-mode="false"]) .lang-option.active { background:rgba(3,169,244,0.12); border-color:rgba(3,169,244,0.4); }
.lang-flag { font-size:22px; line-height:1; }
.lang-close-row { display:flex; justify-content:center; margin-top:18px; }
.lang-close-btn {
  padding:9px 28px; border-radius:14px;
  background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.15);
  color:#fff; font-size:13px; font-weight:700; cursor:pointer;
  transition:background 0.18s;
}
:host([argus-dark-mode="false"]) .lang-close-btn { background:rgba(0,0,0,0.07); border-color:rgba(0,0,0,0.14); color:#1e1e2d; }
.lang-close-btn:hover { background:rgba(255,255,255,0.2); }

</style>

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
    </div>
    <button class="ios-confirm-cancel" id="btn-cancel-sos" style="margin-top:10px">Cancelar</button>
  </div>
</div>


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
    <button class="lang-pill" id="btn-lang-picker" title="Language / Idioma">
      <span id="lang-pill-flag">🌐</span>
      <span id="lang-pill-label">Language</span>
    </button>
  </div>

  <!-- TWO-COLUMN LAYOUT -->
  <div class="grid">

    <!-- LEFT COLUMN: Primary -->
    <div class="stack">
      <!-- Instances (with personalization inside) -->
      <section class="glass panel liquid-glass">
        <div class="panel-head">
          <h2 id="h-instances"></h2>
          <div style="display:flex;align-items:center;gap:12px">
            <div id="global-status"></div>
          </div>
        </div>
        <div id="entries"></div>
        <!-- Personalization merged from Mi Casa -->
        <div class="personalize-row">
          <div style="flex:1;min-width:140px">
            <div class="setting-label" id="lbl-home-name-hdr">Nombre del Hogar</div>
            <div id="lbl-home-name-prominent" style="font-size:18px;font-weight:900;margin-top:2px">Mi Casa</div>
          </div>
          <div style="flex:1;min-width:140px">
            <div class="setting-label" id="lbl-background-hdr">Fondo</div>
            <select id="bg-mode-select-standalone" style="margin-top:4px;width:100%"></select>
          </div>
          <button class="ghost" id="btn-edit-home-name-standalone" style="padding:6px 10px;font-size:11px;border-radius:10px;white-space:nowrap">✏️ Editar</button>
          <button class="primary" id="btn-save-personalization-standalone" style="padding:8px 14px;font-size:12px;border-radius:10px;white-space:nowrap">Guardar</button>
        </div>
      </section>

      <!-- Modes -->
      <section class="glass panel liquid-glass">
        <div class="panel-head">
           <h2 id="h-modes"></h2>
        </div>
        <div class="tabs" id="mode-tabs" style="margin-bottom:15px"></div>
        <div id="mode-view"></div>
      </section>
    </div>

    <!-- RIGHT COLUMN: Secondary -->
    <div class="stack">
      <!-- Activity log -->
      <section class="glass panel liquid-glass">
        <div class="panel-head">
          <h2 id="h-activity-log"></h2>
          <button class="ghost" id="btn-clear-log" style="font-size:10px;padding:4px 8px;opacity:0.6">BORRAR</button>
        </div>
        <div id="activity-log" style="display:grid;gap:10px;max-height:400px;overflow-y:auto;margin-top:10px"></div>
      </section>

      <!-- Users & Master PIN Settings -->
      <section class="glass panel liquid-glass">
        <h2 id="h-access-title">Control de Acceso y Usuarios</h2>
        <p class="small" id="p-access-desc" style="margin-bottom:12px;opacity:0.7">Gestión global de seguridad, PIN maestro y administradores.</p>
        
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start;">
          <!-- Left: Users -->
          <div>
            <h3 id="h-users" style="font-size: 13px; font-weight: 900; opacity: 0.8; margin-top:0; margin-bottom: 12px; text-transform: uppercase;"></h3>
            <p class="small" id="p-admin-only" style="margin-bottom:14px;color:#fb8c00;font-weight:600"></p>
            <div id="users-list" style="display:grid;gap:12px;margin-bottom:16px"></div>
            <div class="subsection collapsible collapsed" id="add-user-form">
              <div class="subsection-title" id="t-add-user"></div>
              <div class="field-group"><label id="l-username"></label><input type="text" id="new-user-name" autocomplete="off"></div>
              <div class="field-group"><label id="l-user-pin"></label><input type="password" id="new-user-pin" inputmode="numeric" pattern="[0-9]*"></div>
              <label id="l-is-admin" class="checkbox-label" style="margin-top:10px;display:flex;align-items:center;gap:10px"><input type="checkbox" id="new-user-admin"> <span id="s-is-admin"></span></label>
              <div class="field-group" style="margin-top:10px">
                <label id="l-user-exp-type">Vencimiento</label>
                <select id="new-user-exp-type" style="margin-top:4px">
                  <option value="indefinite" id="opt-exp-indefinite">Indefinido</option>
                  <option value="temporary" id="opt-exp-temporary">Temporal (Fecha/Hora)</option>
                </select>
              </div>
              <div class="field-group collapsible collapsed" id="group-new-user-exp" style="margin-top:10px">
                <label id="l-user-exp-date">Fecha/Hora de Vencimiento</label>
                <input type="datetime-local" id="new-user-exp-date" style="margin-top:4px">
              </div>
              <div class="save-row" style="margin-top:15px"><button class="primary" id="btn-save-user" style="width:100%"></button></div>
            </div>
          </div>
          
          <!-- Right: Master PIN -->
          <div>
            <h3 id="h-settings-pin" style="font-size: 13px; font-weight: 900; opacity: 0.8; margin-top:0; margin-bottom: 12px; text-transform: uppercase;">PIN Maestro</h3>
            <div class="subsection">
              <div id="current-pin-display" style="font-size:13px;font-weight:800;color:var(--primary-color);margin-bottom:15px;background:rgba(3,169,244,0.1);padding:8px 12px;border-radius:10px;display:inline-block"></div>
              <div class="field-group collapsible collapsed" id="group-current-pin" style="margin-bottom: 12px">
                 <label id="l-current-pin-lbl"></label>
                 <input type="password" id="current-pin" inputmode="numeric" pattern="[0-9]*">
              </div>
              <p class="small" id="p-pin-remove-hint" style="margin:0 0 10px 0; color:var(--primary-color); font-weight:700">Para quitar el PIN: Introduce el actual y deja los campos de abajo vacíos.</p>
              <div style="display:grid;gap:10px">
                <div class="field-group"><label id="l-new-pin"></label><input type="password" id="new-pin-1" inputmode="numeric" pattern="[0-9]*" placeholder="••••"></div>
                <div class="field-group"><label id="l-confirm-pin"></label><input type="password" id="new-pin-2" inputmode="numeric" pattern="[0-9]*"></div>
              </div>
              <div class="save-row" style="margin-top:15px">
                <button class="primary" id="btn-save-pin" style="width:100%"></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Automations -->
      <section class="glass panel liquid-glass">
        <h2 id="h-automations"></h2>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <span class="small" id="p-linked-rules" style="opacity:0.7"></span>
          <button class="primary" id="btn-new-auto" style="padding:6px 12px;font-size:11px"></button>
        </div>
        <div id="auto-view"></div>
      </section>

      <!-- Backup & Restore -->
      <section class="glass panel liquid-glass">
        <h2 id="h-backup-title">Respaldo y Restauración</h2>
        <p class="small" id="p-backup-desc" style="margin-bottom:12px;opacity:0.7">Guarda una copia de seguridad de tus ajustes o restaura una anterior.</p>
        <div style="display:flex;gap:10px;align-items:center;">
          <button class="ghost" id="btn-export-config" style="flex:1">📤 Descargar</button>
          <div style="position:relative; flex:1">
            <button class="ghost" style="width:100%" id="btn-import-trigger">📥 Restaurar</button>
            <input type="file" id="import-config-file" style="display:none" accept=".json">
          </div>
          <button class="ghost danger" id="btn-reset-config" style="flex:1">⚠️ Restablecer</button>
          <button class="primary" id="btn-undo-reset" style="flex:1; display:none;">↩️ Deshacer</button>
        </div>
      </section>

      <!-- Advanced -->
      <section class="glass panel liquid-glass" id="homekit-section" style="display:none">
        <h2 id="h-homekit"></h2>
        <div id="homekit-content"></div>
      </section>
    </div>

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
      <p class="small" style="margin:0;opacity:.7">Este nombre aparece en el panel de instancias y en pantalla completa.</p>
      <div class="field-group">
        <label>Nombre del Hogar</label>
        <input type="text" id="home-name-input" placeholder="Mi Casa" maxlength="60" autocomplete="off" style="font-size:15px">
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
    </div>
    <button id="pin-cancel" style="display:none"></button>
  </div>
</div>
`;

/* ── Web Component ────────────────────────────────────────────────────── */
class ArgusPanel extends HTMLElement {
  constructor() {
    super();
    this._showSosConfirm = false;
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
    this._users = [];        // [{name, pin, is_admin}]
    this._isAdmin = true;    // determined from hass user
    this._pinCallback = null;
    this._homeName = '';     // custom home name, editable with PIN
    this._backgroundMode = 'weather';
    this._backgroundImages = [];
    this._temperatureSource = 'auto';
    this._pending = {};
    this._lastClockUpdate = 0;
    this._manualLang = null;
    this._fullscreenIdx = -1;
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;
    if (hass.themes) this.setAttribute('argus-dark-mode', hass.themes.darkMode === true);
    if (!this._dashboard?.entries?.length) return;

    // Trigger render if any of these change:
    // 1. Alarm states
    // 2. Temperature sensor state
    // 3. Clock (roughly every minute)
    // 4. Weather state
    
    const now = Date.now();
    // Clock is now handled by a dedicated interval for better accuracy
    const clockChanged = false; 

    const alarmChanged = this._dashboard.entries.some(
      e => e.entity_id && oldHass?.states[e.entity_id]?.state !== hass.states[e.entity_id]?.state
    );

    const tempEntity = this._temperatureSource === 'auto' ? null : this._temperatureSource;
    const tempChanged = tempEntity && oldHass?.states[tempEntity]?.state !== hass.states[tempEntity]?.state;
    
    const weatherEnt = Object.values(hass.states).find(s => s.entity_id.startsWith('weather.'))?.entity_id;
    const weatherChanged = weatherEnt && oldHass?.states[weatherEnt]?.state !== hass.states[weatherEnt]?.state;

    // FIX v0.9.32 — Bug 2: detectar transición a 'triggered' y escribir log
    // con los sensores que estaban abiertos en ese momento.
    if (alarmChanged && oldHass) {
    this._dashboard.entries.forEach(e => {
      const prev = oldHass?.states[e.entity_id]?.state;
    const curr = hass.states[e.entity_id]?.state;
    if (curr === 'triggered' && prev !== 'triggered') {
      // Buscar sensores del modo activo que estén abiertos ahora
      const modeKey = prev || 'away'; // el modo previo = modo en que estaba armado
      const _eid = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id;
      const modeCfg = (this._ui?.modes?.__by_entity__?.[_eid]?.[modeKey])
                     || (this._ui?.modes?.[modeKey])
                       || {};
          const modeSensors = modeCfg.sensors || [];
          const openSensors = modeSensors
            .filter(sId => ['on','open','unlocked','active','motion','recording']
              .includes(hass.states[sId]?.state))
            .map(sId => hass.states[sId]?.attributes?.friendly_name || sId);
          const detail = openSensors.length
            ? `Sensores: ${openSensors.join(', ')}`
            : 'Activación automática';
          this._writeLog('triggered', detail, 'Argus');
          this._sendHaNotif('🚨 ¡ALARMA DISPARADA!', detail);
          // Re-render mode view para que las píldoras parpadeen
          this._renderModeView();
        }
        // Al volver de triggered a cualquier otro estado, re-render para quitar parpadeo
        if (prev === 'triggered' && curr !== 'triggered') {
          this._renderModeView();
        }
      });
    }

    if (alarmChanged || tempChanged || clockChanged || weatherChanged || !oldHass) { 
      this._renderEntries(); 
      this._renderActivityLog(); 
      // Only re-render setup views if they are visible or if it's the first load 
      if (!oldHass) { 
        this._renderModeTabs(); 
        this._renderModeView(); 
        this._renderAutomations(); 
        this._renderNotifications(); 
        this._renderUsers(); 
        this._renderHomeKit(); 
      } 
    }
  }
  get hass() { return this._hass; }

  /* ── Translation ─────────────────────────────────────────────────── */
  _t(key) {
    const lang = this._manualLang || (this._hass?.language || 'es').split('-')[0];
    return (TEXTS[lang] || TEXTS.en)[key] || key;
  }

  _getCurrentLangCode() {
    return this._manualLang || (this._hass?.language || 'es').split('-')[0];
  }

  _openLangModal() {
    const modal = this.shadowRoot.getElementById('lang-modal');
    if (!modal) return;
    const grid = this.shadowRoot.getElementById('lang-grid');
    const cur = this._getCurrentLangCode();
    if (grid) {
      grid.innerHTML = LANG_LIST.map(l => `
        <button class="lang-option${l.code === cur ? ' active' : ''}" data-lang="${l.code}">
          <span class="lang-flag">${l.flag}</span>
          <span>${l.label}</span>
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
    if (!TEXTS[code]) return;
    this._manualLang = code;
    try { localStorage.setItem('argus_lang', code); } catch(e) {}
    this._applyTranslations();
    this._renderEntries();
    this._renderModeTabs();
    this._renderModeView();
    this._renderActivityLog();
    this._renderAutomations();
    this._renderUsers();
    this._renderHomeKit();
  }

  _applyTranslations() {
    const t = k => this._t(k);
    const s = id => this.shadowRoot.getElementById(id);
    const set = (id, txt) => { const e = s(id); if (e) e.textContent = txt; };

    // Update lang pill
    const cur = this._getCurrentLangCode();
    const langDef = LANG_LIST.find(l => l.code === cur) || LANG_LIST[0];
    const flagEl = s('lang-pill-flag'); const labelEl = s('lang-pill-label');
    if (flagEl) flagEl.textContent = langDef.flag;
    if (labelEl) labelEl.textContent = langDef.label;


    set('p-hero-desc',    t('hero_desc'));
    set('h-instances',    t('instances'));
    set('h-modes',        t('modes'));
    set('h-automations',  t('automations'));
    set('p-linked-rules', t('linked_rules'));
    set('h-settings',     t('settings'));
    set('h-activity-log', t('activity_log'));
    set('t-change-pin',   t('change_pin'));
    set('l-current-pin-lbl', t('current_pin'));
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
    set('h-homekit',      t('homekit_title'));
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
    set('lbl-background-hdr',   t('background_lbl'));
    set('btn-edit-home-name-standalone', t('edit_btn'));
    set('btn-save-personalization-standalone', t('save_btn'));
    set('btn-clear-log',        t('clear_log_btn'));
    set('h-access-title',       t('access_title'));
    set('p-access-desc',        t('access_desc'));
    set('h-settings-pin',       t('pin_master_title'));
    set('p-pin-remove-hint',    t('pin_remove_hint'));
    set('h-backup-title',       t('backup_title'));
    set('p-backup-desc',        t('backup_desc'));
    set('btn-export-config',    t('export_btn'));
    set('btn-reset-config',     t('reset_btn'));
    set('btn-undo-reset',       t('undo_reset_btn'));
    set('btn-import-trigger',   t('import_btn'));
    set('sos-title-txt',        t('sos_confirm_title'));
    set('sos-text-txt',         t('sos_confirm_text'));
    set('sos-label',            t('sos_slide'));
    set('home-name-modal-h3',   t('home_name_modal_title'));
    set('p-home-name-modal-desc', t('home_name_modal_desc'));
    set('l-home-name-modal-label', t('home_name_label'));
    set('lang-modal-title',     `\ud83c\udf10 ${t('lang_select_title')}`);

    const bgMode = s('bg-mode-select-standalone');
    if (bgMode) {
      const v = bgMode.value;
      bgMode.innerHTML = `
        <option value="weather">${t('bg_weather')}</option>
        <option value="none">${t('bg_none')}</option>
        <option value="photo">${t('bg_photo')}</option>
        <option value="collage">${t('bg_collage')}</option>
      `;
      if (v) bgMode.value = v;
    }

    this._populateTemperatureSources();

    // PIN display
    const pinDisp2 = s('current-pin-display');
    if (pinDisp2 && pinDisp2.textContent) {
      const hasPIN = pinDisp2.textContent.includes('Sí') || pinDisp2.textContent.includes('Yes')
        || pinDisp2.textContent.includes('Sim') || pinDisp2.textContent.includes('Sì')
        || pinDisp2.textContent.includes('是') || pinDisp2.textContent.includes('Да')
        || pinDisp2.textContent.includes('Ja') || pinDisp2.textContent.includes('Oui');
      pinDisp2.textContent = hasPIN ? t('pin_active_yes') : t('pin_active_no');
    }
    // Home name input placeholder
    const hnInput = s('home-name-input');
    if (hnInput) hnInput.placeholder = t('home_name_placeholder');
  }

  /* ── Init ────────────────────────────────────────────────────────── */
  connectedCallback() { 
    // Restore persisted language
    try { this._manualLang = localStorage.getItem('argus_lang') || null; } catch(e) {}
    this._init(); 
    this._startClock();
  }
  disconnectedCallback() {
    if (this._clockInterval) clearInterval(this._clockInterval);
  }

  _startClock() {
    if (this._clockInterval) clearInterval(this._clockInterval);
    this._clockInterval = setInterval(() => {
      const now = new Date();
      if (now.getSeconds() === 0 || !this._lastClockUpdate) {
         this._lastClockUpdate = Date.now();
         this._renderEntries();
      }
    }, 1000);
  }

  _bindSOS() {
    const thumb = this.shadowRoot.getElementById('sos-thumb');
    const track = thumb && thumb.closest('.ios-slider-track');
    if (!thumb || !track) return;

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
  }

  async _init() {
    this._mode = 'disarmed';
    this._bindStatic();
    try {
      await this._connect();
    } catch (e) {
      console.error('Argus WS connect failed:', e);
    }
    this._applyTranslations();
    await this._load();
    this.shadowRoot.getElementById('btn-clear-log')?.addEventListener('click', () => this._clearHistory());
    this.shadowRoot.getElementById('btn-export-config')?.addEventListener('click', () => this._exportConfig());
    this.shadowRoot.getElementById('btn-import-trigger')?.addEventListener('click', () => this.shadowRoot.getElementById('import-config-file').click());
    this.shadowRoot.getElementById('import-config-file')?.addEventListener('change', (ev) => this._importConfig(ev));
    this.shadowRoot.getElementById('btn-reset-config')?.addEventListener('click', () => this._resetConfig());
    this.shadowRoot.getElementById('btn-undo-reset')?.addEventListener('click', () => this._undoResetConfig());

    this.shadowRoot.getElementById('btn-save-personalization-standalone')?.addEventListener('click', () => this._savePersonalization());

    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const callBtn = this.shadowRoot.getElementById('sos-call-btn');
      if (callBtn) {
          if (tz.includes('Europe') || tz.includes('Madrid') || tz.includes('Berlin') || tz.includes('Paris') || tz.includes('London')) {
              callBtn.href = "tel:112";
              callBtn.innerHTML = "📞 Llamar a Emergencias (112)";
          } else if (tz.includes('Australia')) {
              callBtn.href = "tel:000";
              callBtn.innerHTML = "📞 Llamar a Emergencias (000)";
          }
          callBtn.addEventListener('click', (e) => {
              e.preventDefault();
              window.top.location.href = callBtn.href;
          });
      }
    } catch(e) {}
  }

  async _clearHistory() {
    if (!confirm('¿Seguro que quieres borrar todo el historial?')) return;
    try {
      await this._send('argus/clear_activity_log');
      if (this._ui) this._ui.audit_log = [];
      this._activityLog = []; 
      const el = this.shadowRoot.getElementById('activity-log');
      if (el) el.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t('log_no_events')}</div>`;
      this._renderActivityLog();
    } catch (err) { alert(err.message); }
  }

  _exportConfig() {
    try {
      const json = JSON.stringify(this._ui, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = `argus_backup_${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch (err) {
      alert('Error al exportar: ' + err.message);
    }
  }

  _importConfig(event) {
    const file = event.target.files[0];
    if (!file) return;
    event.target.value = ''; // Fix #3 - permite reimportar el mismo archivo
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const config = JSON.parse(e.target.result);
        if (typeof config !== 'object' || config === null)
          throw new Error('Archivo de configuración no válido.');
        await this._send('argus/restore_config', { config });
        alert('Configuración restaurada con éxito. Recargando...');
        window.location.reload();
      } catch (err) {
        alert('Error al importar: ' + err.message);
      }
    };
    reader.onerror = () => alert('No se pudo leer el archivo.');
    reader.readAsText(file);
  }

  async _resetConfig() {
    if (!confirm('¿Estás seguro de que deseas restablecer Argus a sus valores de fábrica? Perderás todas tus configuraciones, PINs y modos.')) return;
    try {
      this._undoState = JSON.parse(JSON.stringify(this._ui)); // Store for undo
      
      const defaultConfig = {};
      await this._send('argus/restore_config', { config: defaultConfig });
      
      this.shadowRoot.getElementById('btn-reset-config').style.display = 'none';
      this.shadowRoot.getElementById('btn-undo-reset').style.display = 'block';
      
      alert('Argus restablecido. Tienes unos segundos para deshacer si cambias de opinión, o simplemente recarga la página para aplicar los cambios.');
      
      // Auto reload after 10s if not undone
      this._resetTimer = setTimeout(() => {
        window.location.reload();
      }, 10000);
      
    } catch (err) {
      alert('Error al restablecer: ' + err.message);
    }
  }

  async _undoResetConfig() {
    if (!this._undoState) return;
    try {
      clearTimeout(this._resetTimer);
      await this._send('argus/restore_config', { config: this._undoState });
      
      this.shadowRoot.getElementById('btn-reset-config').style.display = 'block';
      this.shadowRoot.getElementById('btn-undo-reset').style.display = 'none';
      
      alert('Restablecimiento deshecho con éxito.');
      window.location.reload();
    } catch (err) {
      alert('Error al deshacer: ' + err.message);
    }
  }

  _bindStatic() {
    const s = id => this.shadowRoot.getElementById(id);
    s('selector-close').addEventListener('click', () => this._closeModal());
    s('selector-accept').addEventListener('click', () => this._acceptSelection());
    s('selector-clear').addEventListener('click', () => { this._selected = []; this._renderSelector(); });
    s('selector-search').addEventListener('input', () => this._renderSelector());
    s('selector-modal').addEventListener('click', e => { if (e.target.id === 'selector-modal') this._closeModal(); });
    s('selector-select-all').addEventListener('click', () => this._selectAll());
    s('selector-deselect-all').addEventListener('click', () => { this._selected = []; this._renderSelector(); });

    s('btn-new-auto').addEventListener('click', () => {
      history.pushState(null, '', '/config/automation/edit/new');
      window.dispatchEvent(new CustomEvent('location-changed'));
    });
    s('btn-save-pin').addEventListener('click', () => this._savePin());

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
    s('btn-save-user').addEventListener('click', () => this._saveUser());
    s('new-user-exp-type')?.addEventListener('change', e => {
      const group = this.shadowRoot.getElementById('group-new-user-exp');
      if (e.target.value === 'temporary') {
        group?.classList.remove('collapsed');
      } else {
        group?.classList.add('collapsed');
      }
    });

    // Home name edit (requires PIN)
    s('btn-edit-home-name-standalone')?.addEventListener('click', () => this._editHomeName());
    s('home-name-modal-close').addEventListener('click', () => this._closeHomeNameModal());
    s('home-name-cancel').addEventListener('click', () => this._closeHomeNameModal());
    s('home-name-modal').addEventListener('click', e => { if (e.target.id === 'home-name-modal') this._closeHomeNameModal(); });
    s('home-name-save').addEventListener('click', () => this._saveHomeName());
    s('home-name-input').addEventListener('keydown', e => { if (e.key === 'Enter') this._saveHomeName(); });

    // Language picker
    s('btn-lang-picker')?.addEventListener('click', () => this._openLangModal());
    s('lang-modal-close')?.addEventListener('click', () => this._closeLangModal());
    s('lang-modal')?.addEventListener('click', e => { if (e.target.id === 'lang-modal') this._closeLangModal(); });

    // SOS Modal
    const closeSOS = () => {
      s('sos-modal')?.classList.remove('open');
      if (s('sos-thumb')) {
         s('sos-thumb').style.left = '6px';
         s('sos-thumb').closest('.ios-slider-track').style.background = 'rgba(217,4,41,0.15)';
      }
    };
    s('btn-cancel-sos')?.addEventListener('click', closeSOS);
    s('sos-close-x')?.addEventListener('click', closeSOS);
    s('sos-modal')?.addEventListener('click', e => { if (e.target.id === 'sos-modal') closeSOS(); });
  }

  /* ── WebSocket ───────────────────────────────────────────────────── */
  _connect() {
    return new Promise((resolve, reject) => {
      const proto = location.protocol === 'https:' ? 'wss' : 'ws';
      this._pending = {};
      this._socket = new WebSocket(`${proto}://${location.host}/api/websocket`);
      this._socket.addEventListener('message', ev => {
        const msg = JSON.parse(ev.data);
        if (msg.type === 'auth_required') {
          const tok = this._hass?.auth?.data?.access_token;
          if (!tok) { reject(new Error('no token')); return; }
          this._socket.send(JSON.stringify({ type: 'auth', access_token: tok }));
          return;
        }
        if (msg.type === 'auth_ok') { resolve(); return; }
        if (msg.type === 'auth_invalid') { reject(new Error('auth invalid')); return; }
        if (msg.type === 'result' && this._pending[msg.id]) {
          this._pending[msg.id](msg.result ?? msg);
          delete this._pending[msg.id];
        }
      });
      this._socket.addEventListener('error', reject, { once: true });
    });
  }

  _send(type, data = {}) {
    const id = this._wsId++;
    return new Promise((resolve, reject) => {
      this._pending[id] = result => {
        if (result?.success === false) reject(new Error(result.error?.message || 'failed'));
        else resolve(result);
      };
      this._socket.send(JSON.stringify({ id, type, ...data }));
      setTimeout(() => { if (this._pending[id]) { delete this._pending[id]; reject(new Error('timeout')); } }, 10000);
    });
  }

  /* ── Load dashboard ──────────────────────────────────────────────── */
  async _load() {
    let dashboard;
    try { dashboard = await this._send('argus/dashboard'); }
    catch (e) { console.error('Argus dashboard load failed:', e); return; }

    this._dashboard = dashboard;
    this._available = dashboard.available_entities || [];
    this._ui = dashboard.ui || { modes: {}, dashboard: {} };
    this._notifTargets = dashboard.ui?.notif_targets || [];
    this._ttsTargets   = dashboard.ui?.tts_targets   || [];
    this._users = dashboard.ui?.users || [];
    this._homeName = dashboard.ui?.home_name || '';
    this._backgroundMode = dashboard.ui?.background_mode || 'weather';
    this._backgroundImages = dashboard.ui?.background_images || [];
    this._temperatureSource = dashboard.ui?.temperature_source || 'auto';
    
    this._updateHomeNameDisplay();

    this._populateTemperatureSources();
    const tempSel = this.shadowRoot.getElementById('temp-source-select-standalone');
    if (tempSel) tempSel.value = this._temperatureSource || 'auto';
    const bgMode = this.shadowRoot.getElementById('bg-mode-select-standalone');
    if (bgMode) {
      bgMode.innerHTML = `
        <option value="weather">${this._t('bg_weather')}</option>
        <option value="none">${this._t('bg_none')}</option>
        <option value="photo">${this._t('bg_photo')}</option>
        <option value="collage">${this._t('bg_collage')}</option>
      `;
      bgMode.value = this._backgroundMode || 'weather';
    }

    // Admin flag: use the HA user's own admin status
    this._isAdmin = this._hass?.user ? Boolean(this._hass.user.is_admin || this._hass.user.is_owner) : true;
    if (!this._modeEntryId) this._modeEntryId = dashboard.entries?.[0]?.entity_id || null;

    // Show current PIN toggle & validation required
    const currentPin = dashboard.entries?.[0]?.options?.code || '';
    const pinDisp = this.shadowRoot.getElementById('current-pin-display');
    const groupCurrentPin = this.shadowRoot.getElementById('group-current-pin');
    
    if (pinDisp) pinDisp.textContent = currentPin ? this._t('pin_active_yes') : this._t('pin_active_no');
    if (groupCurrentPin) {
      if (currentPin) groupCurrentPin.classList.remove('collapsed');
      else groupCurrentPin.classList.add('collapsed');
    }

    this._renderEntries();
    this._renderActivityLog();
    this._renderModeTabs();
    this._renderModeView();
    this._renderAutomations();
    this._renderNotifications();
    this._renderUsers();
    this._renderHomeKit();
  }

  /* ── Entries (alarm instances) ───────────────────────────────────── */

  _renderBatteryAlerts() {
    if (!this._hass?.states) return '';
    const states = this._hass.states;
    const lowBatteries = Object.values(states).filter((st) => {
      const isBattery = st.entity_id?.endsWith('_battery') || st.attributes?.device_class === 'battery';
      if (!isBattery || st.state === 'unknown' || st.state === 'unavailable') return false;
      const level = Number(st.state);
      return !Number.isNaN(level) && level <= 20;
    });
    if (!lowBatteries.length) return '';
    const t = k => this._t(k);
    const rows = lowBatteries.map(b => `<div class="battery-alert">${t('battery_low')}: ${b.attributes.friendly_name || b.entity_id} (${b.state}%)</div>`).join('');
    return `<div class="battery-alerts-container" style="margin-top: 10px;">${rows}</div>`;
  }

  _getIntelligentSVG(state, w, isNight, triggered) {
    const base = `<svg viewBox="0 0 200 200" width="100%" height="100%" style="filter: drop-shadow(0 15px 25px rgba(0,0,0,0.6)); max-width: 140px; margin: 0 auto; display: block;">`;
    
    if (triggered) {
      return base + `
        <defs>
          <filter id="glow-red"><feGaussianBlur stdDeviation="8" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <circle cx="100" cy="100" r="60" fill="none" stroke="#ff2a2a" stroke-width="4" filter="url(#glow-red)">
          <animate attributeName="r" values="60;80;60" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
        </circle>
        <path d="M100 30 L170 150 L30 150 Z" fill="rgba(255,42,42,0.15)" stroke="#ff2a2a" stroke-width="6" stroke-linejoin="round" filter="url(#glow-red)">
           <animate attributeName="opacity" values="1;0.4;1" dur="0.5s" repeatCount="indefinite"/>
        </path>
        <rect x="95" y="70" width="10" height="40" rx="5" fill="#fff" filter="url(#glow-red)"/>
        <circle cx="100" cy="130" r="6" fill="#fff" filter="url(#glow-red)"/>
      </svg>`;
    }

    if (state === 'armed_home') {
      return base + `
        <defs>
          <filter id="glow-orange"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <linearGradient id="grad-home" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fb8c00" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#ffb74d" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
        <!-- Glowing 3D-like House -->
        <path d="M100 20 L20 90 V170 A10 10 0 0 0 30 180 H170 A10 10 0 0 0 180 170 V90 Z" fill="url(#grad-home)" stroke="#ffb74d" stroke-width="3" stroke-linejoin="round" filter="url(#glow-orange)"/>
        <path d="M100 20 L180 90 M100 20 L20 90" fill="none" stroke="#fff" stroke-width="2" opacity="0.5"/>
        
        <!-- Animated Radar/Spotlight -->
        <path d="M100 180 L40 50 A120 120 0 0 1 160 50 Z" fill="#fb8c00" opacity="0.15">
           <animateTransform attributeName="transform" type="rotate" values="-25 100 180; 25 100 180; -25 100 180" dur="4s" repeatCount="indefinite"/>
        </path>
        
        <!-- Glowing Cameras -->
        <circle cx="40" cy="90" r="4" fill="#ff0000" filter="url(#glow-orange)">
           <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="160" cy="90" r="4" fill="#ff0000" filter="url(#glow-orange)">
           <animate attributeName="opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite"/>
        </circle>
        
        <!-- Center Lock -->
        <rect x="75" y="100" width="50" height="40" rx="8" fill="#111" stroke="#fb8c00" stroke-width="3" filter="url(#glow-orange)"/>
        <path d="M85 100 V80 A15 15 0 0 1 115 80 V100" fill="none" stroke="#fb8c00" stroke-width="4" stroke-linecap="round"/>
        <circle cx="100" cy="120" r="6" fill="#fb8c00"/>
      </svg>`;
    }

    if (state === 'armed_away') {
      return base + `
        <defs>
          <filter id="glow-red"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <linearGradient id="grad-away" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#e53935" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#ef9a9a" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
        <!-- High-tech Shield -->
        <path d="M100 10 L30 40 V100 C30 150 60 180 100 195 C140 180 170 150 170 100 V40 Z" fill="url(#grad-away)" stroke="#ef9a9a" stroke-width="3" stroke-linejoin="round" filter="url(#glow-red)"/>
        
        <!-- Pulse Rings -->
        <circle cx="100" cy="100" r="40" fill="none" stroke="#e53935" stroke-width="3" opacity="0.5">
           <animate attributeName="r" values="40; 80; 40" dur="2.5s" repeatCount="indefinite"/>
           <animate attributeName="opacity" values="0.8; 0; 0.8" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        
        <!-- Center Lock -->
        <rect x="75" y="100" width="50" height="40" rx="8" fill="#111" stroke="#fff" stroke-width="3"/>
        <path d="M85 100 V80 A15 15 0 0 1 115 80 V100" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
        <circle cx="100" cy="120" r="6" fill="#fff"/>
      </svg>`;
    }

    if (state === 'armed_night') {
      return base + `
        <defs>
          <filter id="glow-blue"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <linearGradient id="grad-night" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e88e5" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#90caf9" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
        <!-- Crescent Moon -->
        <path d="M110 20 A 75 75 0 1 0 180 140 A 85 85 0 0 1 110 20 Z" fill="url(#grad-night)" stroke="#90caf9" stroke-width="2" filter="url(#glow-blue)">
           <animateTransform attributeName="transform" type="rotate" values="-5 100 100; 5 100 100; -5 100 100" dur="8s" repeatCount="indefinite"/>
        </path>
        
        <!-- Floating Zzz -->
        <text x="130" y="80" fill="#90caf9" font-family="sans-serif" font-weight="900" font-size="24" filter="url(#glow-blue)">
           Z<animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/>
           <animate attributeName="y" values="80;50;80" dur="4s" repeatCount="indefinite"/>
        </text>
        <text x="160" y="50" fill="#90caf9" font-family="sans-serif" font-weight="900" font-size="32" filter="url(#glow-blue)">
           Z<animate attributeName="opacity" values="0;1;0" dur="4s" begin="1.5s" repeatCount="indefinite"/>
           <animate attributeName="y" values="50;10;50" dur="4s" begin="1.5s" repeatCount="indefinite"/>
        </text>
        
        <!-- Night Lock -->
        <rect x="40" y="110" width="40" height="30" rx="6" fill="#111" stroke="#1e88e5" stroke-width="3" filter="url(#glow-blue)"/>
        <path d="M48 110 V95 A12 12 0 0 1 72 95 V110" fill="none" stroke="#1e88e5" stroke-width="3" stroke-linecap="round"/>
      </svg>`;
    }

    if (state === 'armed_vacation') {
      return base + `
        <defs>
          <filter id="glow-purple"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <linearGradient id="grad-vacation" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#9c27b0" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#ce93d8" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
        <!-- Hologram Globe -->
        <circle cx="100" cy="100" r="75" fill="rgba(156,39,176,0.1)" stroke="#ce93d8" stroke-width="3" filter="url(#glow-purple)"/>
        <path d="M100 25 C 140 25, 160 70, 160 100 C 160 130, 140 175, 100 175 C 60 175, 40 130, 40 100 C 40 70, 60 25, 100 25 Z" fill="none" stroke="#ce93d8" stroke-width="2" opacity="0.6"/>
        <path d="M25 100 H 175" fill="none" stroke="#ce93d8" stroke-width="2" opacity="0.6"/>
        
        <!-- Airplane Orbiting -->
        <g fill="url(#grad-vacation)" stroke="#fff" stroke-width="2" filter="url(#glow-purple)">
           <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="8s" repeatCount="indefinite"/>
           <path d="M85 10 L115 10 L130 30 L160 30 A8 8 0 0 1 160 40 L130 40 L100 70 L85 70 L100 40 L70 40 L55 50 L45 50 L65 35 L45 20 L55 20 L70 30 L100 30 Z" transform="translate(0, -25)"/>
        </g>
        
        <!-- Center Lock -->
        <rect x="80" y="90" width="40" height="30" rx="6" fill="#111" stroke="#9c27b0" stroke-width="3" filter="url(#glow-purple)"/>
        <path d="M90 90 V75 A10 10 0 0 1 110 75 V90" fill="none" stroke="#9c27b0" stroke-width="3" stroke-linecap="round"/>
      </svg>`;
    }

    // Disarmed Mode
    return base + `
      <defs>
        <filter id="glow-green"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="grad-disarm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#43a047" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#a5d6a7" stop-opacity="0.3"/>
        </linearGradient>
      </defs>
      
      <!-- Open Shield -->
      <path d="M100 15 L35 45 V100 C35 145 65 175 100 190 C135 175 165 145 165 100 V45 Z" fill="url(#grad-disarm)" stroke="#a5d6a7" stroke-width="3" stroke-linejoin="round" filter="url(#glow-green)"/>
      
      <!-- Open Lock -->
      <rect x="75" y="100" width="50" height="40" rx="8" fill="#111" stroke="#fff" stroke-width="3"/>
      <path d="M115 100 V75 A15 15 0 0 0 85 75" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round">
         <animateTransform attributeName="transform" type="rotate" values="0 85 75; -25 85 75; 0 85 75" dur="3s" repeatCount="indefinite"/>
      </path>
      
      <!-- Safe Pulse Rings -->
      <circle cx="100" cy="120" r="30" fill="none" stroke="#43a047" stroke-width="3" opacity="0.6">
        <animate attributeName="r" values="30; 70" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8; 0" dur="2.5s" repeatCount="indefinite"/>
      </circle>
    </svg>`;
  }

  _renderEntries() {
    const el = this.shadowRoot.getElementById('entries');
    const globalStatusEl = this.shadowRoot.getElementById('global-status');
    const entries = this._dashboard?.entries || [];
    const t = k => this._t(k);

    if (!entries.length) {
      el.innerHTML = `<div class="small" style="padding:10px">${t('no_instances')}</div>`;
      return;
    }

    // Determine global status
    const allStates = entries.map(e => this._hass?.states[e.entity_id]?.state || 'unavailable');
    const isArmed = allStates.some(s => s.startsWith('armed') || s === 'triggered' || s === 'pending');
    globalStatusEl.innerHTML = `<span class="badge ${isArmed ? 'armed_away' : 'disarmed'}">${isArmed ? t('system_armed') : t('system_disarmed')}</span>`;

    // Weather
    const weatherEnt = Object.values(this._hass?.states || {}).find(s => s.entity_id.startsWith('weather.')) || { state: 'sunny' };
    const weatherState = weatherEnt.state || 'sunny';
    const isNight = this._hass?.states?.['sun.sun']?.state === 'below_horizon';

    // Time
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

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
      const fullHudLoc = this._homeName || this._hass?.config?.location_name || 'Hogar';

      // Dynamic SVG Icon Generation
      // Replaced old static svgName logic with dynamic intelligent SVGs

      const mKey = state.replace('armed_', '');
      const eCfg = (this._ui?.modes?.__by_entity__?.[e.entity_id]?.[mKey])
                || (this._ui?.modes?.[mKey]) || {};
      const sList = eCfg.sensors || [];
      const sByps = eCfg.bypassed_sensors || [];
      const activeSensors = sList.filter(s => !sByps.includes(s));
      const OPEN = ['on', 'open', 'unlocked', 'recording', 'active', 'motion'];

      const isFS = this._fullscreenIdx === idx;
      art.className = `entry ${isFS ? 'ios-fullscreen' : ''}`;
      art.style.cssText = triggered ? 'border:3px solid #ff5252;box-shadow:0 0 30px rgba(255,82,82,.4)' : '';

      art.innerHTML = `
          ${this._renderEntryBackground(weatherState, isNight)}
          <button class="ghost fs-btn entry-fs" data-fullscreen="${idx}" title="Pantalla completa" style="position:absolute;bottom:24px;right:24px;z-index:10;padding:10px 15px;font-size:18px;background:rgba(0,0,0,0.4);backdrop-filter:blur(12px);border-radius:14px;opacity:0.8;color:white;border:1px solid rgba(255,255,255,0.2);box-shadow:0 8px 20px rgba(0,0,0,0.3)">⛶</button>
          ${this._renderBatteryAlerts()}
          <div class="hud">
            <div class="hud-loc">${fullHudLoc}</div>
            <div class="hud-data"><span>${timeStr}</span></div>
          </div>
          <div class="entry-content">
            <div class="liquid-stack">
              <button class="liquid-btn btn-home ${state==='armed_home'?'active':''}" data-idx="${idx}" data-action="home">${t('btn_home')}</button>
              <button class="liquid-btn btn-away ${state==='armed_away'?'active':''}" data-idx="${idx}" data-action="away">${t('btn_away')}</button>
              <button class="liquid-btn btn-night ${state==='armed_night'?'active':''}" data-idx="${idx}" data-action="night">${t('btn_night')}</button>
              <button class="liquid-btn btn-vacation ${state==='armed_vacation'?'active':''}" data-idx="${idx}" data-action="vacation">${t('btn_vacation')}</button>
              <button class="liquid-btn btn-disarm ${state==='disarmed'?'active':''}" data-idx="${idx}" data-action="disarm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg> <span>${t('btn_disarmed')}</span></button>
              <button class="btn-sos" data-action="sos">${t('btn_sos')}</button>
            </div>
            <div class="entry-icon">
              ${this._getIntelligentSVG(state, weatherState, isNight, triggered)}
            </div>
            ${activeSensors.length ? `
              <div class="sensor-column">
                ${activeSensors.map(sid => {
                  const s = this._hass?.states[sid];
                  if (!s) return '';
                  const isOpen = OPEN.includes(s.state);
                  const name = s.attributes?.friendly_name || sid.split('.')[1] || sid;
                  const shortName = name.length > 16 ? name.slice(0, 15) + '…' : name;
                  return `<div class="sensor-chip ${isOpen ? 'sensor-chip--open' + (triggered ? ' sensor-chip--triggered' : '') : 'sensor-chip--closed'}">
                    <span class="sensor-chip-dot"></span>${shortName}
                  </div>`;
                }).join('')}
              </div>` : ''}
          </div>
      `;
    });

    el.querySelectorAll('button[data-action]').forEach(btn =>
      btn.addEventListener('click', ev => this._handleAction(ev.currentTarget.dataset.idx, ev.currentTarget.dataset.action))
    );
    
    el.querySelectorAll('button[data-action="sos"]').forEach(btn =>
      btn.addEventListener('click', () => {
        const sosModal = this.shadowRoot.getElementById('sos-modal');
        if (sosModal) sosModal.classList.add('open');
      })
    );
    el.querySelectorAll('button[data-fullscreen]').forEach(btn => {
      btn.addEventListener('click', ev => this._toggleFullscreen(ev.currentTarget.closest('.entry')));
      btn.addEventListener('touchend', ev => {
        ev.preventDefault();
        this._toggleFullscreen(ev.currentTarget.closest('.entry'));
      });
    });
    this._bindSOS(); // v0.9.33 Fix #5: re-bind SOS slider despues de cada re-render del DOM
  }

  _toggleFullscreen(targetEl) {
    const target = targetEl || this.shadowRoot.querySelector('.entry');
    const idx = parseInt(target.querySelector('.entry-fs')?.dataset?.fullscreen ?? -1);
    const requestFS = target.requestFullscreen || target.webkitRequestFullscreen;

    if (document.fullscreenElement === target || document.webkitFullscreenElement === target || target.classList.contains('ios-fullscreen')) {
      // EXIT
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      target.classList.remove('ios-fullscreen');
      this._fullscreenIdx = -1;
      document.body.style.overflow = '';
    } else {
      // ENTER
      this._fullscreenIdx = idx;
      if (requestFS) {
        requestFS.call(target).then(() => {
          document.body.style.overflow = 'hidden';
          this._renderEntries();
        }).catch(() => {
          target.classList.add('ios-fullscreen');
          document.body.style.overflow = 'hidden';
          this._renderEntries();
        });
      } else {
        target.classList.add('ios-fullscreen');
        document.body.style.overflow = 'hidden';
        this._renderEntries();
      }
    }
  }

  /* ── Inline CSS Weather Backgrounds ─────────────────────────── */
  _getWeatherBg(ws, isNight) {
    const has = s => ws.includes(s);
    const isRain = has('pouring') || has('rain') || has('drizzle') || has('shower');
    const isStorm = has('thunder') || has('lightning') || has('storm');
    const isSnow = has('snow') || has('hail') || has('sleet') || has('blizzard');
    const isFog = has('fog') || has('mist') || has('hazy');
    const isCloudy = has('cloud') || has('overcast');
    const isPartly = has('partly');
    
    // Detect Moon Phase from Home Assistant sensors
    let moonPhase = 'full';
    const mp = (this._hass?.states?.['sensor.moon_phase']?.state || this._hass?.states?.['sensor.moon']?.state || '').toLowerCase();
    if (mp.includes('new')) moonPhase = 'new';
    else if (mp.includes('crescent') || mp.includes('quarter')) moonPhase = 'crescent';

    // Adaptive Sky Colors (Gradients)
    let topC = '#4facfe', botC = '#00f2fe'; // Sunny Default
    if (isNight) {
      if (isStorm) { topC = '#0f172a'; botC = '#1e293b'; }
      else if (isCloudy) { topC = '#1e293b'; botC = '#334155'; }
      else { topC = '#0b192c'; botC = '#1a365d'; }
    } else {
      if (isStorm) { topC = '#334155'; botC = '#475569'; }
      else if (isRain) { topC = '#64748b'; botC = '#94a3b8'; }
      else if (isSnow) { topC = '#94a3b8'; botC = '#cbd5e1'; }
      else if (isFog) { topC = '#cbd5e1'; botC = '#e2e8f0'; }
      else if (isCloudy && !isPartly) { topC = '#7dd3fc'; botC = '#bae6fd'; }
    }

    // Landscape & Tree Colors
    let m1 = '#60a5fa', m2 = '#3b82f6', m3 = '#2563eb', g1 = '#1d4ed8'; 
    if (!isNight && !isRain && !isSnow && !isStorm && !isFog) { // Sunny with green trees
      m1 = '#86efac'; m2 = '#4ade80'; m3 = '#22c55e'; g1 = '#16a34a';
    } else if (isNight) {
      m1 = '#1e3a8a'; m2 = '#172554'; m3 = '#0f172a'; g1 = '#020617';
    } else if (isSnow) {
      m1 = '#f1f5f9'; m2 = '#e2e8f0'; m3 = '#cbd5e1'; g1 = '#94a3b8';
    } else if (isRain || isStorm || isFog) {
      m1 = '#94a3b8'; m2 = '#64748b'; m3 = '#475569'; g1 = '#334155';
    }

    // Celestial Body (Sun/Moon with Phase)
    let celestial = '';
    if (isNight) {
      if (moonPhase === 'new') {
        celestial = `<circle cx="80%" cy="25%" r="35" fill="#ffffff" opacity="0.05" filter="blur(2px)"/>`;
      } else if (moonPhase === 'crescent') {
        celestial = `<path d="M 640 60 A 40 40 0 1 0 720 140 A 30 30 0 1 1 640 60 Z" fill="#fef08a" filter="drop-shadow(0 0 15px #fef08a)"/>`;
      } else {
        celestial = `<g filter="drop-shadow(0 0 20px #fef08a)">
          <circle cx="80%" cy="25%" r="35" fill="#fef08a"/>
          <circle cx="77%" cy="22%" r="8" fill="#000" opacity="0.06"/>
          <circle cx="82%" cy="28%" r="12" fill="#000" opacity="0.04"/>
        </g>`;
      }
    } else if (!isCloudy || isPartly) {
      celestial = `
        <circle cx="80%" cy="30%" r="45" fill="#fbbf24" filter="drop-shadow(0 0 35px #f59e0b)"/>
        <circle cx="80%" cy="30%" r="55" fill="#fcd34d" opacity="0.35">
          <animate attributeName="r" values="50;60;50" dur="5s" repeatCount="indefinite"/>
        </circle>`;
    }

    // Dynamic Weather Elements (Lightning, Clouds, Rain, Snow)
    let fx = '';
    if (isStorm) {
      fx += `<rect width="100%" height="100%" fill="#ffffff" opacity="0"><animate attributeName="opacity" values="0;0;0.7;0;0;0.4;0;0" dur="6s" repeatCount="indefinite"/></rect>
             <path d="M 320 0 L 400 150 L 360 170 L 480 400" fill="none" stroke="#fff" stroke-width="4" opacity="0"><animate attributeName="opacity" values="0;0;1;0;0;0.8;0;0" dur="6s" repeatCount="indefinite"/></path>`;
    }

    let cloudGroup = '';
    if (isCloudy || isPartly || isRain || isSnow) {
      const cCol = isNight ? '#334155' : (isStorm ? '#475569' : '#f8fafc');
      cloudGroup = `<g fill="${cCol}" opacity="0.75" filter="blur(5px)">
        <path d="M -50 60 Q 20 10 90 60 Q 160 20 230 70 Q 300 40 370 80 Q 180 120 0 120 Z"><animateTransform attributeName="transform" type="translate" values="-400 0; 900 0" dur="45s" repeatCount="indefinite"/></path>
        <path d="M 50 110 Q 150 50 250 110 Q 350 40 450 130 Q 550 60 650 150 Q 350 200 50 200 Z" opacity="0.5"><animateTransform attributeName="transform" type="translate" values="-700 20; 900 20" dur="65s" repeatCount="indefinite"/></path>
      </g>`;
    }

    let particles = '';
    if (isRain || isStorm) {
      const drops = Array.from({length: 60}, (_, i) => `<line x1="${(i*1.7)%100}%" y1="-10%" x2="${((i*1.7)%100)-4}%" y2="110%" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"><animate attributeName="y1" values="-10%;110%" dur="${0.4+(i%4)*0.1}s" begin="-${(i*0.1)%2}s" repeatCount="indefinite"/><animate attributeName="y2" values="0%;120%" dur="${0.4+(i%4)*0.1}s" begin="-${(i*0.1)%2}s" repeatCount="indefinite"/></line>`).join('');
      particles = `<g>${drops}</g>`;
    } else if (isSnow) {
      const flakes = Array.from({length: 50}, (_, i) => `<circle cx="${(i*2.1)%100}%" cy="-10%" r="${2+(i%3)}" fill="rgba(255,255,255,0.8)"><animate attributeName="cy" values="-10%;110%" dur="${4+(i%5)}s" begin="-${(i*0.2)%5}s" repeatCount="indefinite"/><animate attributeName="cx" values="${(i*2.1)%100}%;${((i*2.1)%100)+3}%;${((i*2.1)%100)-3}%;${(i*2.1)%100}%" dur="${2+i%3}s" repeatCount="indefinite"/></circle>`).join('');
      particles = `<g filter="blur(1px)">${flakes}</g>`;
    }

    const svg = `
      <svg preserveAspectRatio="xMidYMax slice" viewBox="0 0 800 400" style="position:absolute; inset:0; width:100%; height:100%; z-index:0; pointer-events:none;">
        <defs><linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="${topC}"/><stop offset="100%" stop-color="${botC}"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#sky)"/>
        ${isNight && !isCloudy ? Array.from({length: 30}, (_, i) => `<circle cx="${(i*31.7)%100}%" cy="${(i*17.3)%60}%" r="${0.5+Math.random()*1.5}" fill="#fff"><animate attributeName="opacity" values="0.3;1;0.3" dur="${2+Math.random()*3}s" repeatCount="indefinite"/></circle>`).join('') : ''}
        ${celestial}
        ${fx}
        <path d="M 0 350 L 150 200 L 300 320 L 500 150 L 700 280 L 800 200 L 800 400 L 0 400 Z" fill="${m1}" opacity="0.6"/>
        <path d="M -50 400 L 100 250 L 250 380 L 400 220 L 600 350 L 850 220 L 850 400 Z" fill="${m2}" opacity="0.8"/>
        <path d="M 0 400 Q 200 280 400 350 T 800 300 L 800 400 Z" fill="${m3}"/>
        <g fill="${g1}">
          <polygon points="50,400 75,290 100,400"/><polygon points="30,400 65,310 100,400"/><polygon points="80,400 110,310 140,400"/><polygon points="120,400 150,260 180,400"/>
          <polygon points="350,400 390,290 430,400"/><polygon points="410,400 440,270 470,400"/><polygon points="650,400 690,250 730,400"/><polygon points="720,400 760,270 800,400"/>
        </g>
        ${cloudGroup}
        ${particles}
        ${isFog ? `<rect width="100%" height="100%" fill="#fff" opacity="0.35" filter="blur(15px)"/>` : ''}
      </svg>`;

    return `<div class="wx wx-scenic">${svg}</div>`;
  }


  /* ── Activity Log ────────────────────────────────────────────────── */
  _renderActivityLog() {
    const titleEl = this.shadowRoot.getElementById('h-activity-log');
    const el = this.shadowRoot.getElementById('activity-log');
    if (!el) return;
    if (titleEl) titleEl.textContent = this._t('activity_log');

    const log = this._ui?.audit_log || [];
    if (!log.length) {
      el.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t('log_no_events')}</div>`;
      return;
    }

    el.innerHTML = log.slice(0, 30).map(ev => {
      const action = ev.action || '';
      const rawDetail = ev.detail || '';
      const user   = ev.user   || '';
      const ts     = ev.ts ? new Date(ev.ts).toLocaleString() : '';

      // Translate stored detail strings (may be stored in any language)
      let detail = rawDetail;
      const detailLower = rawDetail.toLowerCase();
      if (detailLower.includes('desarmado') || detailLower.includes('disarmed') || detailLower.includes('désarmé') || detailLower.includes('sistema desarmado') || detailLower.includes('system disarmed') || detailLower === 'manual (desarmado)') {
        detail = this._t('manual_disarm');
      } else if (detailLower.includes('en casa') || detailLower.includes('home') || detailLower.includes('heim') || (rawDetail.toLowerCase().includes('manual') && action.includes('arm') && !action.includes('disarm'))) {
        // Keep as-is but prefix with translated label
        const modeMap = {
          'en casa': this._t('mode_home'), 'home': this._t('mode_home'),
          'ausente': this._t('mode_away'), 'away': this._t('mode_away'),
          'noche': this._t('mode_night'), 'night': this._t('mode_night'),
          'vacaciones': this._t('mode_vacation'), 'vacation': this._t('mode_vacation'),
        };
        for (const [k,v] of Object.entries(modeMap)) {
          if (detailLower.includes(k)) { detail = this._t('manual_arm') + ' (' + v + ')'; break; }
        }
      }

      let icon = '📋', badgeCls = '', badgeTxt = action;
      if (action.includes('arm') && !action.includes('disarm')) {
        icon = '🔒'; badgeCls = 'arm'; badgeTxt = this._t('log_armed');
      } else if (action.includes('disarm')) {
        icon = '🔓'; badgeCls = 'disarm'; badgeTxt = this._t('log_disarmed');
      } else if (action.includes('trigger') || action.includes('alarm')) {
        icon = '🚨'; badgeCls = 'trigger'; badgeTxt = this._t('log_triggered');
      }

      // Attribute the action clearly
      let source = '';
      if (user && user !== 'Argus' && user !== 'system') {
        source = `👤 ${user}`;
      } else if (action.toLowerCase().includes('homekit') || detail.toLowerCase().includes('homekit')) {
        source = `🍎 HomeKit`;
      } else {
        source = `🤖 Argus`;
      }

      return `<div class="log-item">
        <div class="log-icon">${icon}</div>
        <div class="log-body">
          <div class="log-title">
            <span class="log-badge ${badgeCls}">${badgeTxt}</span>
            <span style="font-weight:500">${detail}</span>
          </div>
          <div class="log-meta">${ts} &nbsp;·&nbsp; ${source}</div>
        </div>
      </div>`;
    }).join('');
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
    
    let bubble = tabs.querySelector('.tab-bubble');
    if (!bubble) {
      tabs.className = 'tabs';
      tabs.innerHTML = `
        <div class="tab-bubble"></div>
        ${modes.map(m => `
          <button type="button" class="tab" data-mode="${m}">
            <span class="tab-icon" style="font-size: 20px;">${icons[m]}</span>
            <span class="tab-label">${lbls[m]}</span>
          </button>
        `).join('')}
      `;
      bubble = tabs.querySelector('.tab-bubble');
      
      tabs.querySelectorAll('[data-mode]').forEach(t => t.addEventListener('click', () => {
        this._mode = t.dataset.mode; 
        this._renderModeTabs(); 
        this._renderModeView();
      }));
    } else {
      modes.forEach(m => {
        const btn = tabs.querySelector(`[data-mode="${m}"]`);
        if (btn) {
          const iconSpan = btn.querySelector('.tab-icon');
          const labelSpan = btn.querySelector('.tab-label');
          if (iconSpan) iconSpan.textContent = icons[m];
          if (labelSpan) labelSpan.textContent = lbls[m];
        }
      });
    }

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
      require_closed: false, arming_time: null, entry_delay: null, 
      mqtt_enabled: null, entry_sensors: [] 
    };
    if (!this._ui) return { ...emptyCfg };
    this._ui.modes = this._ui.modes || {};
    this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {};
    const entityId = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || 'default';
    this._modeEntryId = entityId;
    this._mode = this._mode || 'disarmed';
    
    this._ui.modes.__by_entity__[entityId] = this._ui.modes.__by_entity__[entityId] || {};
    
    // Migration/Ensure valid
    if (!this._ui.modes.__by_entity__[entityId][this._mode]) {
        const legacy = this._ui.modes[this._mode] || emptyCfg;
        this._ui.modes.__by_entity__[entityId][this._mode] = { ...emptyCfg, ...legacy };
    }
    
    const cfg = this._ui.modes.__by_entity__[entityId][this._mode];
    return { ...emptyCfg, ...cfg };
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
          <select id="mode-instance-select" style="width:100%; padding:10px; border-radius:10px; background:rgba(255,255,255,0.05); color:inherit; border:1px solid rgba(255,255,255,0.1)">${entries.map(e => `<option value="${e.entity_id}" ${e.entity_id===activeEntityId ? 'selected' : ''}>${e.title || e.entity_id}</option>`).join('')}</select>
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
          ${readonly ? '' : `<button class="ghost" data-open-selector="siren" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t('select_btn')}</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">${this._t('times_section')}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
            <div class="input-group">
              <span class="input-label">${this._t('arm_time')}</span>
              <input type="number" id="mode-arming-time" value="${cfg.arming_time ?? ''}" placeholder="0" style="padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit; font-size:13px">
            </div>
            <div class="input-group">
              <span class="input-label">${this._t('disarm_time')}</span>
              <input type="number" id="mode-entry-delay" value="${cfg.entry_delay ?? ''}" placeholder="0" style="padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit; font-size:13px">
            </div>
          </div>
          <label class="checkbox-label" style="display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05)">
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
    const cfg = this._currentModeConfig();
    const isEntry = (cfg.entry_sensors || []).includes(entityId);
    const name = this._hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
    const readonly = !this._isAdmin;

    const dot = type === 'sensor' || type === 'bypass' 
    ? `<span class="pill-dot ${isTr ? 'open' : ''}" title="${raw}"></span>` 
    : ''; 
    
    const delayIcon = type === 'sensor' ? ` 
    <button class="icon-btn ${isEntry ? 'active' : ''}" data-toggle-delay="${entityId}" title="Retraso de desarmado (⏳) o Instantáneo (⚡)"> 
    ${isEntry ? '⏳' : '⚡'} 
    </button>` : ''; 

    // FIX v0.9.32 — Bug 3: sirenas parpadean rojo si el sistema está en triggered.
    // Sensores abiertos también se marcan como triggered-sensor.
    const alarmTriggered = this._dashboard?.entries?.some(en =>
    this._hass?.states?.[en.entity_id]?.state === 'triggered'
    );
    let pillExtra = '';
    if (type === 'siren' && alarmTriggered) pillExtra = ' siren-active';
    if ((type === 'sensor' || type === 'bypass') && alarmTriggered && isTr) pillExtra = ' triggered-sensor';

    return ` 
      <span class="sensor-pill${pillExtra}"> 
        ${dot} 
        <span style="flex:1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${name}</span> 
        ${delayIcon} 
        ${readonly ? '' : `<button data-remove="${type}:${entityId}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer; flex-shrink:0;">✕</button>`} 
      </span> 
    `;
  }

  _removeChip(value) {
    if (!this._isAdmin) return;
    const [type, entityId] = value.split(':');
    const cfg = this._currentModeConfig();
    const key = type === 'sensor' ? 'sensors' : (type === 'bypass' ? 'bypassed_sensors' : 'sirens');
    // FIX #4/#5: write back into __by_entity__ structure, not flat modes[mode]
    const eId = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || 'default';
    this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {};
    this._ui.modes.__by_entity__[eId] = this._ui.modes.__by_entity__[eId] || {};
    this._ui.modes.__by_entity__[eId][this._mode] = { ...cfg, [key]: (cfg[key] || []).filter(v => v !== entityId) };
    this._renderModeView();
  }

  async _saveMode() {
  const cfg = this._currentModeConfig();
  const chk      = this.shadowRoot.getElementById('mode-require-closed');
  const armTime  = this.shadowRoot.getElementById('mode-arming-time');
  const entDelay = this.shadowRoot.getElementById('mode-entry-delay');
  const mqttChk  = this.shadowRoot.getElementById('mode-mqtt-enabled');

  // FIX v0.9.31 — Bug 2: leer require_closed del DOM en este preciso momento,
  // ANTES de cualquier await, para garantizar que el valor más reciente del
  // checkbox llega a cfg y se persiste correctamente en __by_entity__.
  if (chk)      cfg.require_closed = chk.checked;
    if (armTime)  cfg.arming_time  = armTime.value  ? parseInt(armTime.value)  : 0;
    if (entDelay) cfg.entry_delay  = entDelay.value ? parseInt(entDelay.value) : 0;
    if (mqttChk)  cfg.mqtt_enabled = mqttChk.checked;

    // FIX-1: persistir en __by_entity__ ANTES del send para que el re-render
    // muestre los valores correctos aunque el WS tarde o falle
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
      if (status) { status.textContent = '✓ Guardado'; status.className = 'status ok show'; }
      setTimeout(() => { if (status) { status.textContent = ''; status.className = 'status'; } }, 3000);
    } catch (err) {
      if (status) { status.textContent = '✗ ' + (err.message || 'Error'); status.className = 'status err show'; }
    }
  }

  /* ── Automations ─────────────────────────────────────────────────── */
  _renderAutomations() {
    const el = this.shadowRoot.getElementById('auto-view');
    if (!el || !this._dashboard?.entries?.length || !this._hass) return;

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

    // Si ya consultamos pero aún no termina, mantenemos el UI de carga
    if (!this._relatedAutomationsFetched) return;

    const items = Object.values(this._hass.states).filter(s => {
      if (!s.entity_id.startsWith('automation.')) return false;
      const name = (s.attributes.friendly_name || '').toLowerCase();
      return this._cachedRelatedAutomations.has(s.entity_id) || name.includes('argus') || s.entity_id.toLowerCase().includes('argus');
    });

    if (!items.length) {
      el.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t('no_auto_linked')}</div>`;
      return;
    }
    
    el.innerHTML = `<div style="display:flex;flex-direction:column;gap:12px;max-height:300px;overflow-y:auto;padding-right:8px">${items.map(a => {
      const editId = a.attributes.id || a.entity_id.replace('automation.', '');
      return `
      <div class="list-item-card">
        <div>
          <div style="font-weight:700">${a.attributes.friendly_name || a.entity_id}</div>
          <div class="small" style="opacity:0.7;margin-top:4px">${a.attributes.last_triggered ? new Date(a.attributes.last_triggered).toLocaleString() : this._t('never_triggered')}</div>
        </div>
        <button class="ghost" style="padding:6px 12px;background:rgba(255,255,255,0.08);border-radius:8px" data-edit-auto="${editId}">✏️</button>
      </div>`;
    }).join('')}</div>`;
      
    el.querySelectorAll('[data-edit-auto]').forEach(btn => btn.addEventListener('click', () => {
      history.pushState(null, '', `/config/automation/edit/${btn.dataset.editAuto}`);
      window.dispatchEvent(new CustomEvent('location-changed'));
    }));
  }

  /* ── Notifications ───────────────────────────────────────────────── */
  _populateNotifSelect() {
    const sel = this.shadowRoot.getElementById('notif-select');
    if (!sel) return;
    const services = this._hass?.services?.notify || {};
    
    // Solo mostrar las de celular, quitando "notify" genérico o "persistent_notification"
    let opts = Object.keys(services).filter(k => k !== 'notify' && !k.includes('persistent_notification') && !this._notifTargets.includes(k));
    
    sel.innerHTML = opts.length
      ? opts.map(k => {
          let label = k;
          if (k.startsWith('mobile_app')) label = "📱 " + k.replace('mobile_app_', '').replace(/_/g, ' ');
          else label = "🔔 " + label.replace(/_/g, ' ');
          return `<option value="${k}">${label}</option>`;
        }).join('')
      : `<option value="">— Sin servicios móviles —</option>`;
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
      <span class="notif-chip">📱 ${t.replace(/_/g,' ')}
        <button data-notif-remove="${t}">✕</button>
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
    return;
  }

  async _saveNotifications() {
    const status = this.shadowRoot.getElementById('notif-status');
    try {
      await this._send('argus/save_ui', {
        notif_targets: this._notifTargets,
        tts_targets: this._ttsTargets || [],
      });
      status.textContent = '✓'; status.className = 'status ok';
    } catch (e) { status.textContent = e.message; status.className = 'status err'; }
  }

  /* ── Users ───────────────────────────────────────────────────────── */
  _renderUsers() {
    const el = this.shadowRoot.getElementById('users-list');
    if (!this._users.length) {
      el.innerHTML = `<div class="small">${this._t('no_users')}</div>`;
      return;
    }
    el.innerHTML = this._users.map((u, i) => {
      const isExpired = u.expiration_date && new Date(u.expiration_date) < new Date();
      const expBadge = u.expiration_date 
        ? (isExpired 
          ? `<span class="user-badge admin" style="background:rgba(229,57,53,0.12);color:#e53935;margin-left:5px">❌ ${this._t('expired')} (${u.expiration_date.replace('T', ' ')})</span>`
          : `<span class="user-badge" style="background:rgba(67,160,71,0.12);color:#43a047;margin-left:5px">⏳ ${this._t('active_until')}: ${u.expiration_date.replace('T', ' ')}</span>`)
        : `<span class="user-badge" style="background:rgba(67,160,71,0.12);color:#43a047;margin-left:5px">♾️ ${this._t('exp_indefinite')}</span>`;

      return `
      <div class="user-card" style="display:flex;flex-direction:column;align-items:stretch;gap:8px">
        <div style="display:flex;justify-content:between;align-items:center;width:100%">
          <div style="flex:1">
            <div style="font-weight:700">${u.name}</div>
            <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px">
              <span class="user-badge ${u.is_admin ? 'admin' : ''}">${u.is_admin ? '⭐ Admin' : '👤 User'}</span>
              ${expBadge}
            </div>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            ${this._isAdmin ? `<span class="small" style="font-family:monospace">PIN: ${u.pin || '—'}</span>
            <button class="danger" style="padding:5px 10px" data-user-del="${i}">🗑</button>` : ''}
          </div>
        </div>
      </div>`;
    }).join('');

    if (this._isAdmin) {
      el.querySelectorAll('[data-user-del]').forEach(btn =>
        btn.addEventListener('click', async () => {
          const idx = Number(btn.dataset.userDel);
          this._users.splice(idx, 1);
          try {
            const resp = await this._send('argus/save_ui', { users: this._users });
            if (resp && resp.ui) {
              this._ui = resp.ui;
            }
            this._renderUsers();
            this._renderActivityLog();
          } catch (e) {
            alert('Error: ' + e.message);
          }
        })
      );
    }
    // show/hide form based on admin
    const form = this.shadowRoot.getElementById('add-user-form');
    if (form) {
      if (this._isAdmin) form.classList.remove('collapsed');
      else form.classList.add('collapsed');
    }
  }

  async _saveUser() {
    if (!this._isAdmin) return;
    const name = this.shadowRoot.getElementById('new-user-name').value.trim();
    const pin  = this.shadowRoot.getElementById('new-user-pin').value.trim();
    const isAdmin = this.shadowRoot.getElementById('new-user-admin').checked;
    const expType = this.shadowRoot.getElementById('new-user-exp-type').value;
    const expDate = expType === 'temporary' ? this.shadowRoot.getElementById('new-user-exp-date').value : '';
    const status = this.shadowRoot.getElementById('user-status');
    if (!name || !pin) { status.textContent = 'Nombre y PIN requeridos'; status.className = 'status err'; return; }
    
    this._users.push({ name, pin, is_admin: isAdmin, expiration_date: expDate });
    try {
      const resp = await this._send('argus/save_ui', { users: this._users });
      if (resp && resp.ui) {
        this._ui = resp.ui;
      }
      this.shadowRoot.getElementById('new-user-name').value = '';
      this.shadowRoot.getElementById('new-user-pin').value = '';
      this.shadowRoot.getElementById('new-user-admin').checked = false;
      if (this.shadowRoot.getElementById('new-user-exp-type')) {
        this.shadowRoot.getElementById('new-user-exp-type').value = 'indefinite';
      }
      if (this.shadowRoot.getElementById('new-user-exp-date')) {
        this.shadowRoot.getElementById('new-user-exp-date').value = '';
        this.shadowRoot.getElementById('group-new-user-exp')?.classList.add('collapsed');
      }
      status.textContent = '✓'; status.className = 'status ok';
      this._renderUsers();
      this._renderActivityLog();
    } catch (e) { status.textContent = e.message; status.className = 'status err'; }
  }

  /* ── HomeKit ─────────────────────────────────────────────────────── */
  async _renderHomeKit() {
    const sec = this.shadowRoot.getElementById('homekit-section');
    const cnt = this.shadowRoot.getElementById('homekit-content');
    if (!sec || !cnt) return;
    sec.style.display = '';
    let code = null, bridgeName = null, homeName = null;

    try {
      const hkEntries = await this._hass.callWS({ type: 'config_entries/get', domain: 'homekit' }).catch(() => []);
      const alarmDomains = (this._dashboard?.entries || []).map(e => e.entity_id).filter(Boolean);

      for (const ent of (hkEntries || [])) {
        const inc = ent.options?.include_entities || [];
        const matchesArgus = inc.some(id => id.startsWith('alarm_control_panel')) ||
          alarmDomains.some(id => inc.includes(id));
        if (matchesArgus || !bridgeName) {
          bridgeName = ent.title || ent.data?.name || bridgeName || 'Argus Bridge';
          code = String(ent.options?.code || ent.data?.code || code || '').replace(/\D/g, '');
          // Try to read home_name from pairing state
          homeName = ent.data?.home_name || ent.options?.home_name || null;
          if (matchesArgus) break;
        }
      }

      // Fallback from persistent notifications
      if (!code) {
        for (const s of Object.values(this._hass?.states || {})) {
          if (!s.entity_id.startsWith('persistent_notification.')) continue;
          const msg = (s.attributes?.message || '').toLowerCase();
          if (!msg.includes('homekit')) continue;
          const m = (s.attributes.message || '').match(/(\d{3}-\d{2}-\d{3}|\d{8})/);
          if (m) { code = m[1].replace(/-/g, ''); break; }
        }
      }

      // Try to read home name from homekit_pairing entity if available
      if (!homeName) {
        const pairState = Object.values(this._hass?.states || {})
          .find(s => s.entity_id.startsWith('homekit.') || s.entity_id.startsWith('sensor.homekit_'));
        if (pairState) homeName = pairState.attributes?.home_name || null;
      }
    } catch (_) {}

    const isPaired = !code && bridgeName;
    const bridgeLabel = bridgeName || 'Argus Bridge';
    const homeLabel   = homeName || (isPaired ? 'App Controlador (Apple Home, Alexa, etc.)' : null);

    if (code && code.length >= 8) {
      const fmt = code.replace(/(\d{3})(\d{2})(\d{3})/, '$1-$2-$3');
      cnt.innerHTML = `
        <div style="display:grid;gap:16px;justify-items:center;padding:8px 0">
          <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
            <div style="background:var(--primary-color);color:#fff;padding:5px 14px;border-radius:8px;font-size:12px;font-weight:700">🌉 ${this._t('homekit_bridge')}: ${bridgeLabel}</div>
            ${homeLabel ? `<div style="background:rgba(67,160,71,.15);color:var(--success-color,#43a047);padding:5px 14px;border-radius:8px;font-size:12px;font-weight:700">🏡 ${homeLabel}</div>` : ''}
          </div>
          <canvas id="hk-qr"></canvas>
          <div style="font-size:28px;font-weight:900;letter-spacing:6px;font-family:monospace;padding:10px 20px;border-radius:12px;border:2px dashed color-mix(in srgb,var(--primary-color,#03a9f4) 35%,transparent)">${fmt}</div>
          <div class="small">Security System · IP</div>
        </div>`;
      this._drawHKQR(code);
    } else if (isPaired) {
      cnt.innerHTML = `
        <div style="display:grid;gap:10px">
          <div style="display:flex;align-items:center;gap:12px;padding:8px 0">
            <span style="font-size:32px;line-height:1">✅</span>
            <div>
              <div style="font-weight:700;font-size:15px;color:var(--success-color,#43a047)">${this._t('bridge_paired')}</div>
              <div class="small" style="opacity:.7">${this._t('bridge_paired_desc').replace('{bridge}', bridgeLabel)}</div>
            </div>
          </div>
        </div>`;
    } else {
      cnt.innerHTML = `
        <div style="display:grid;gap:10px">
          <div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px">🌉</span><div><div style="font-weight:700">${bridgeLabel}</div><div class="small">${this._t('bridge_not_connected')}</div></div></div>
          <p class="small" style="margin:0">${this._t('bridge_not_desc')}</p>
        </div>`;
    }
  }

  async _drawHKQR(code8) {
    try {
      if (!window.QRCode) await new Promise((res, rej) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/qrcode@1.5.4/build/qrcode.min.js';
        s.onload = res; s.onerror = rej; document.head.appendChild(s);
      });
      const payload = BigInt(11) * BigInt(0x100000000) + BigInt(parseInt(code8) * 16 + 4);
      const uri = 'X-HM://' + payload.toString(36).toUpperCase().padStart(9, '0');
      const canvas = this.shadowRoot.getElementById('hk-qr');
      if (canvas && window.QRCode) QRCode.toCanvas(canvas, uri, { width: 180, margin: 2, color: { dark: '#000', light: '#fff' } });
    } catch (_) { const c = this.shadowRoot.getElementById('hk-qr'); if (c) c.style.display = 'none'; }
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
    sel.innerHTML = extra.filter(x => !seen.has(x.entity_id) && seen.add(x.entity_id) === undefined).map(x => `<option value="${x.entity_id}">${x.name}</option>`).join('');
  }

  async _handleBackgroundFiles(ev) {
    const files = Array.from(ev?.target?.files || []).slice(0, 4); if (!files.length) return;
    const read = f => new Promise((ok, bad) => { const r = new FileReader(); r.onload = () => ok(String(r.result || '')); r.onerror = bad; r.readAsDataURL(f); });
    this._backgroundImages = (await Promise.all(files.map(read))).filter(Boolean);
    const help = this.shadowRoot.getElementById('bg-file-help'); if (help) help.textContent = `${this._backgroundImages.length} imagen(es) cargadas para el panel.`;
  }

  _renderEntryBackground(ws, isNight) {
    const mode = this._backgroundMode || 'weather', imgs = this._backgroundImages || [];
    if (mode === 'none') return `<div class="wx wx-static"></div>`;
    if (mode === 'photo' && imgs[0]) return `<div class="wx wx-photo" style="--bg-image:url('${imgs[0].replace(/'/g, "%27")}')"></div>`;
    if (mode === 'collage' && imgs.length) return `<div class="wx wx-collage"><div class="wx-collage-grid">${imgs.slice(0,4).map(src => `<div class="wx-collage-cell" style="background-image:url('${src.replace(/'/g, "%27")}')"></div>`).join('')}</div></div>`;
    return this._getWeatherBg(ws, isNight);
  }

  _updateHomeNameDisplay() {
    const prominent = this.shadowRoot.getElementById('lbl-home-name-prominent');
    if (prominent) prominent.textContent = this._homeName || 'Mi Casa';
  }

  _sendTempNotification(message) {
    const targets = (this._ui && this._ui.notification_targets) || [];
    if (!targets.length || !this._hass) return;
    targets.forEach(target => {
      try {
        this._hass.callService('notify', target, {
          message,
          title: 'Argus — Alerta de Temperatura',
             data: { push: { sound: 'default', badge: 1 } }
        });
      } catch (_) {}
    });
  }

  _triggerSOS() {
    const modal = this.shadowRoot && this.shadowRoot.getElementById('sos-modal');
    if (modal) modal.classList.remove('open');
    const targets = (this._ui && this._ui.notification_targets) || [];
    const loc = this._homeName || 'Mi Casa';
    if (targets.length && this._hass) {
      targets.forEach(target => {
        try {
          this._hass.callService('notify', target, {
            message: '🚨 Botón SOS activado desde ' + loc + '. Revisa el estado de la alarma de inmediato.',
            title: 'ARGUS — SOS / PÁNICO',
               data: { push: { sound: 'alarm.caf', badge: 1 }, priority: 'high', ttl: 0 }
          });
        } catch (_) {}
      });
    }
    if (this._hass) {
      const eid = this._dashboard?.entries?.[0]?.entity_id;
      if (eid) {
        this._hass.callService('alarm_control_panel', 'alarm_trigger', { entity_id: eid }).catch(() => {});
      }
    }
  }

  _savePersonalization() {
    const pin = this._dashboard?.entries?.[0]?.options?.code || '';
    const run = () => this._persistPersonalization();
    if (!pin) return run();
    this._showPinModal(v => { if (v !== pin) return alert('PIN incorrecto'); run(); });
  }

  async _persistPersonalization() {
    const status = this.shadowRoot.getElementById('personalization-status');
    const background_mode = this.shadowRoot.getElementById('bg-mode-select-standalone')?.value || 'weather';
    const temperature_source = this.shadowRoot.getElementById('temp-source-select-standalone')?.value || 'auto';
    try {
      await this._send('argus/save_ui', { 
        home_name: this._homeName, 
        background_mode, 
        background_images: this._backgroundImages || [], 
        temperature_source 
      });
      this._backgroundMode = background_mode; this._temperatureSource = temperature_source;
      this._ui = this._ui || {}; this._ui.background_mode = background_mode; this._ui.background_images = this._backgroundImages || []; this._ui.temperature_source = temperature_source;
      this._renderEntries();
      
      const btn = this.shadowRoot.getElementById('btn-save-personalization-standalone');
      if (btn) {
        const oldText = btn.textContent;
        btn.textContent = '✓ Guardado Correctamente';
        btn.style.background = '#43a047';
        setTimeout(() => { btn.textContent = oldText; btn.style.background = ''; }, 3000);
      }
    } catch (e) { alert('Error: ' + e.message); }
  }

  /* ── Home Name management ────────────────────────────────────────── */
  _editHomeName() {
    const masterPin = this._dashboard?.entries?.[0]?.options?.code || '';
    const doOpen = () => {
      const m = this.shadowRoot.getElementById('home-name-modal');
      const inp = this.shadowRoot.getElementById('home-name-input');
      const st  = this.shadowRoot.getElementById('home-name-status');
      inp.value = this._homeName || this.shadowRoot.getElementById('home-name-setting')?.value || '';
      if (st) st.textContent = '';
      m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
      setTimeout(() => inp.focus(), 60);
    };
    if (masterPin) {
      this._showPinModal(pin => {
        if (pin !== masterPin) {
          setTimeout(() => {
            const err = this.shadowRoot.getElementById('pin-error');
            if (err) err.textContent = '\u274c PIN incorrecto';
          }, 50);
          return;
        }
        doOpen();
      });
    } else {
      doOpen();
    }
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
    } catch (e) { alert('Error: ' + e.message); }
  }

  /* ── PIN management ──────────────────────────────────────────────── */
  async _savePin() {
    const status = this.shadowRoot.getElementById('pin-status');
    const currentCode = this._dashboard?.entries?.[0]?.options?.code || '';
    
    if (currentCode) {
      const pinCurrent = this.shadowRoot.getElementById('current-pin').value;
      if (pinCurrent !== currentCode) {
        status.textContent = this._t('pin_incorrect');
        status.className = 'status err';
        return;
      }
    }

    const p1 = this.shadowRoot.getElementById('new-pin-1').value;
    const p2 = this.shadowRoot.getElementById('new-pin-2').value;
    
    if (p1 !== p2) { 
      status.textContent = '❌ PIN nuevo no coincide'; 
      status.className = 'status err'; 
      return; 
    }
    
    try {
      await this._send('argus/update_master_pin', { pin: p1 });
      status.textContent = p1 ? this._t('pin_updated') : this._t('pin_deleted'); 
      status.className = 'status ok';
      if (this.shadowRoot.getElementById('current-pin-display')) {
        this.shadowRoot.getElementById('current-pin-display').textContent = p1 ? this._t('pin_active_yes') : this._t('pin_active_no');
      }
      if (this.shadowRoot.getElementById('current-pin')) this.shadowRoot.getElementById('current-pin').value = '';
      this.shadowRoot.getElementById('new-pin-1').value = '';
      this.shadowRoot.getElementById('new-pin-2').value = '';
      setTimeout(() => this._load(), 1200);
    } catch (e) { status.textContent = e.message; status.className = 'status err'; }
  }

  _showPinModal(onConfirm) {
    const m = this.shadowRoot.getElementById('pin-modal');
    const inp = this.shadowRoot.getElementById('pin-input');
    const err = this.shadowRoot.getElementById('pin-error');
    const wrap = this.shadowRoot.querySelector('.wrap');
    inp.value = ''; if (err) err.textContent = '';
    this._pinCallback = onConfirm;

    // Check if in fullscreen
    const isFS = this.shadowRoot.querySelector('.entry.ios-fullscreen') !== null;

    if (isFS) {
      m.style.background = 'rgba(0, 0, 0, 0.55)';
      m.style.backdropFilter = 'none';
      m.style.webkitBackdropFilter = 'none';
      const modalBox = m.querySelector('.modal');
      if (modalBox) {
        modalBox.classList.remove('dial-elastic');
        void modalBox.offsetWidth; // force reflow
        modalBox.classList.add('dial-elastic');
      }
    } else {
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

  _submitPin() {
    const pin = this.shadowRoot.getElementById('pin-input').value.trim();
    if (!pin) { this.shadowRoot.getElementById('pin-error').textContent = '⚠️ Introduce el PIN'; return; }
    const cb = this._pinCallback;
    this._closePinModal();
    if (cb) cb(pin);
  }

  /* ── Selector modal ──────────────────────────────────────────────── */
  _selectAll() {
    const q = (this.shadowRoot.getElementById('selector-search').value || '').toLowerCase().trim();
    const INTRUSION_DC = ['door','window','motion','vibration','glass','opening','smoke','gas','tamper'];
    const items = this._available.filter(x => {
      if (this._selectorTarget === 'siren') return ['siren','switch','light','fan','input_boolean','script'].includes(x.domain);
      if (x.domain === 'lock') return true;
      if (x.domain === 'binary_sensor') {
        const dc = this._hass?.states?.[x.entity_id]?.attributes?.device_class || '';
        return INTRUSION_DC.includes(dc);
      }
      return false;
    }).filter(x => !q || [x.entity_id, x.name, x.area].filter(Boolean).join(' ').toLowerCase().includes(q));
    items.forEach(x => { if (!this._selected.includes(x.entity_id)) this._selected.push(x.entity_id); });
    this._renderSelector();
  }

  _openModal(type) {
    this._selectorTarget = type;
    const cfg = this._currentModeConfig();
    const _srcKey = type === 'sensor' ? 'sensors' : (type === 'bypass' ? 'bypassed_sensors' : 'sirens');
    this._selected = Array.isArray(cfg[_srcKey]) ? [...cfg[_srcKey]] : [];
    const title = this.shadowRoot.getElementById('selector-title');
    if (type === 'sensor') title.textContent = this._t('sensor_section');
    else if (type === 'bypass') title.textContent = this._t('sensors_to_bypass');
    else title.textContent = this._t('siren_section');
    this.shadowRoot.getElementById('selector-search').value = '';
    this._renderSelector();
    const m = this.shadowRoot.getElementById('selector-modal');
    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
  }

  _closeModal() {
    const m = this.shadowRoot.getElementById('selector-modal');
    m.classList.remove('open'); m.setAttribute('aria-hidden', 'true');
  }

  _renderSelector() {
    const q = (this.shadowRoot.getElementById('selector-search').value || '').toLowerCase().trim();
    const list   = this.shadowRoot.getElementById('selector-list');
    const selBox = this.shadowRoot.getElementById('selector-selected');

    // For sensor type: only contact sensors (door/window/vibration/glass/opening),
    // camera-linked motion sensors, and locks. Everything else is excluded.
    const INTRUSION_DC = ['door','window','motion','vibration','glass','opening','smoke','gas','tamper'];
    const items = this._available.filter(x => {
      if (this._selectorTarget === 'siren') return ['siren','switch','light','fan','input_boolean','script'].includes(x.domain);
      // sensor / bypass mode:
      if (x.domain === 'lock') return true;
      if (x.domain === 'binary_sensor') {
        const dc = this._hass?.states?.[x.entity_id]?.attributes?.device_class || '';
        return INTRUSION_DC.includes(dc);
      }
      return false;
    }).filter(x => !q || [x.entity_id, x.name, x.area, x.entity_id.split('.')[1]].filter(Boolean).join(' ').toLowerCase().includes(q));

    list.innerHTML = items.map(x => {
      const raw   = this._hass?.states?.[x.entity_id]?.state || 'unknown';
      const isTr  = ['on', 'unlocked', 'open', 'recording'].includes(raw);
      const lblMap = { on:'Abierto', off:'Cerrado', locked:'Cerrado', unlocked:'Abierto', idle:'Reposo', recording:'Grabando', home:'En casa', not_home:'Fuera' };
      const lbl  = this._selectorTarget === 'sensor'
        ? `<span class="badge ${isTr ? 'armed_away' : 'disarmed'}" style="padding:2px 6px;font-size:10px">${lblMap[raw] || raw}</span>`
        : '';
      return `<label class="pick-row">
        <input type="checkbox" data-entity="${x.entity_id}" ${this._selected.includes(x.entity_id) ? 'checked' : ''}>
        <div>
          <div class="pick-row-name">${x.name || x.entity_id}${lbl}</div>
          <div class="pick-row-meta">${x.entity_id}${x.area ? ' · '+x.area : ''}</div>
        </div>
      </label>`;
    }).join('') || `<div class="small" style="padding:10px">Sin resultados</div>`;

    // FIX v0.9.31 — Bug 1: delegación en contenedor con { once:true }
    // Evita acumulación de listeners en cada re-render que causaba
    // que al seleccionar una sirena se disparara el listener de otra.
    list.addEventListener('change', e => {
    const cb = e.target.closest('input[type=checkbox]');
    if (!cb || !cb.dataset.entity) return;
    const id = cb.dataset.entity;
      if (cb.checked) { if (!this._selected.includes(id)) this._selected.push(id); }
      else this._selected = this._selected.filter(v => v !== id);
      this._renderSelector();
    }, { once: true });

    selBox.innerHTML = this._selected.map(id =>
      `<div class="sel-right-item">
        <div style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${this._hass?.states?.[id]?.attributes?.friendly_name || id}</div>
        <button class="ghost" style="padding:3px 8px;font-size:11px;flex-shrink:0;margin-left:6px" data-rm="${id}">✕</button>
      </div>`
    ).join('') || `<div class="small" style="padding:10px;opacity:.5">${this._t('none_selected')}</div>`;

    selBox.querySelectorAll('[data-rm]').forEach(b =>
      b.addEventListener('click', () => {
        this._selected = this._selected.filter(v => v !== b.dataset.rm);
        this._renderSelector();
      })
    );
    this.shadowRoot.getElementById('selector-count').textContent =
      `${this._selected.length} ${this._t('selected_lbl').toLowerCase()}`;
  }

  _acceptSelection() {
    // FIX A DEFINITIVO: leer cfg fresco, mutar, y escribir de vuelta
    // EXACTAMENTE en modes.__by_entity__[eid][mode] — la misma ruta que _currentModeConfig lee
    if (!this._ui) return;
    if (!this._ui.modes) this._ui.modes = {};
    if (!this._ui.modes.__by_entity__) this._ui.modes.__by_entity__ = {};
    const _eid = this._modeEntryId
              || this._dashboard?.entries?.[0]?.entity_id
              || 'default';
    this._modeEntryId = _eid;
    if (!this._ui.modes.__by_entity__[_eid]) this._ui.modes.__by_entity__[_eid] = {};
    const EMPTY = { sensors:[], bypassed_sensors:[], sirens:[], require_closed:false,
                    arming_time:null, entry_delay:null, mqtt_enabled:null, entry_sensors:[] };
    // Partir de la config existente para no perder otros campos
    const existing = this._ui.modes.__by_entity__[_eid][this._mode] || {};
    const cfg = { ...EMPTY, ...existing };
    if (this._selectorTarget === 'sensor') cfg.sensors          = [...this._selected];
    if (this._selectorTarget === 'siren')  cfg.sirens           = [...this._selected];
    if (this._selectorTarget === 'bypass') cfg.bypassed_sensors = [...this._selected];
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
    const currentUser = this._hass?.user?.name || 'Usuario';

    if (action === 'disarm') {
      // FIX-4: sólo mostrar modal de PIN si hay código configurado
      const masterPin = this._ui?.code || '';
      const doDisarm = async (pin) => { 
      try { 
      await this._hass.callService('alarm_control_panel', 'alarm_disarm', 
      { entity_id: e.entity_id, ...(pin ? { code: pin } : {}) }); 
      this._writeLog('disarm', this._t('manual_disarm'), currentUser); 
      this._sendHaNotif(`🔓 ${this._t('log_disarmed')}`, `${currentUser} desarmó el sistema.`); 
      // FIX v0.9.32 — Bug 1: al desarmar, forzar re-render inmediato para
          // quitar la clase siren-active/triggered-sensor de todas las píldoras.
          setTimeout(() => { this._renderModeView(); this._load(); }, 300);
        } catch (err) {
          const pinErr = this.shadowRoot.getElementById('pin-error');
          if (pinErr) pinErr.textContent = '❌ PIN incorrecto o error al desarmar';
        }
      };
      if (masterPin) {
        this._showPinModal(async pin => { await doDisarm(pin); });
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
      const openNames = [];
      for (const sId of modeSensors) {
        const estado = this._hass.states[sId]?.state;
        if (['on', 'open', 'unlocked', 'active', 'motion', 'recording'].includes(estado)) {
          openNames.push(this._hass.states[sId]?.attributes?.friendly_name || sId);
        }
      }
      if (openNames.length > 0) {
        this._showArmBlockedAlert(openNames);
        this._writeLog('arm_rejected', `${this._t('open_sensors')}: ${openNames.join(', ')}`, currentUser);
        return;
      }
    }

    try {
      await this._hass.callService('alarm_control_panel', service, { entity_id: e.entity_id });
      const modeTxt = modeLabels[action] || action;
      this._writeLog('arm', `${this._t('manual_arm')} (${modeTxt})`, currentUser);
      this._sendHaNotif(`🔒 ${this._t('log_armed')} — ${modeTxt}`, `${currentUser} activó el modo ${modeTxt}.`);
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
      alert('🚨 No se pudo realizar la acción\n\n' + customMsg);
      return;
    }
    const lines = openSensors.map(n => `  • ${n}`).join('\n');
    alert(
      `🚨 No se puede armar\n\n` +
      `Los siguientes sensores están abiertos:\n${lines}\n\n` +
      `Ciérralos antes de armar, o activa "Omitir" en el sensor.`
    );
  }

  /* ── Audit log writer ────────────────────────────────────────────── */
  _writeLog(action, detail, user = '') {
    // Write to backend asynchronously – don't block UI
    this._send('argus/write_log', { action, detail, user }).catch(() => {});
    // Optimistically prepend to local log so it's visible immediately
    if (!this._ui) this._ui = {};
    if (!this._ui.audit_log) this._ui.audit_log = [];
    this._ui.audit_log.unshift({ action, detail, user, ts: new Date().toISOString() });
    this._ui.audit_log = this._ui.audit_log.slice(0, 50);
    this._renderActivityLog();
  }

  /* ── HA Notifications helper ─────────────────────────────────────── */
  _sendHaNotif(title, message) {
    if (!this._notifTargets.length) return;
    for (const target of this._notifTargets) {
      this._hass.callService('notify', target, { title, message }).catch(() => {});
    }
  }

}

customElements.define('argus-panel', ArgusPanel);
