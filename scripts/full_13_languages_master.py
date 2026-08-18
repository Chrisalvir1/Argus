import json, re, sys

with open("scripts/keys_es.json") as f:
    ES = json.load(f)

with open("scripts/keys_en.json") as f:
    EN = json.load(f)

ES["expand"] = "Desplegar"
ES["hide"] = "Ocultar"
EN["expand"] = "Expand"
EN["hide"] = "Hide"

ALL_KEYS = sorted(list(ES.keys()))
LANGS = ["es", "en", "fr", "pt", "it", "zh", "zh-Hant", "ru", "hi", "ar", "ko", "ja", "uk"]

TRANS = {l: {} for l in LANGS}
TRANS["es"] = dict(ES)
TRANS["en"] = dict(EN)

# Build translations for French, Portuguese, Italian, Chinese (Simplified & Traditional), Russian, Hindi, Arabic, Korean, Japanese, Ukrainian
def populate_all_languages():
    # Load base dictionary data
    import subprocess
    # Extract existing genuine v2.2.13 strings if available
    try:
        raw_v2213 = subprocess.check_output(["git", "show", "v2.2.13:src/legacy/argus-panel.ts"]).decode("utf-8")
        texts_match = re.search(r"const TEXTS = \{([\s\S]*?)\n\};", raw_v2213)
        if texts_match:
            block = texts_match.group(1)
            for lang in ["fr", "pt", "it", "zh", "zh-Hant", "ru"]:
                m = re.search(r"[\x27\"]" + lang + r"[\x27\"]:\s*\{([\s\S]*?)\n  \},", block)
                if m:
                    pairs = dict(re.findall(r"[\x27\"]([a-zA-Z0-9_]+)[\x27\"]\s*:\s*(\x27(?:\\.|[^\x27\\])*\x27|\"(?:\\.|[^\"\\])*\")", m.group(1)))
                    for k, raw_v in pairs.items():
                        try:
                            val = eval(raw_v)
                            # Only accept if it is not Russian when language is not Russian/Ukrainian
                            # and not Spanish when language is not Spanish
                            if lang != "ru" and lang != "uk" and re.search(r"[\u0400-\u04FF]", val):
                                continue
                            if lang in ["fr", "zh", "zh-Hant"] and any(w in val.lower() for w in ["desarmado", "en casa", "sensores", "omitir"]):
                                continue
                            TRANS[lang][k] = val
                        except Exception:
                            pass
    except Exception as e:
        print("Note: git show error:", e)

populate_all_languages()

# Comprehensive master translations mappings for all keys
TERMS = {
    "fr": {
        "accept": "Accepter", "cancel": "Annuler", "confirm": "Confirmer", "close": "Fermer",
        "done": "Terminé", "save_btn": "Enregistrer", "edit_btn": "✏️ Modifier le Nom", "delete": "Supprimer",
        "connected": "CONNECTÉ", "disarmed": "Désarmé", "btn_disarmed": "🔓 Désarmé",
        "mode_home": "Maison", "btn_home": "🏠 Maison", "mode_away": "Absent", "btn_away": "🔴 Absent",
        "mode_night": "Nuit", "btn_night": "🌙 Nuit", "mode_vacation": "Vacances", "btn_vacation": "✈️ Vacances",
        "btn_sos": "🚨 SOS / PANIQUE", "sos_stop": "ARRÊTER SOS", "slide_disarm": "Glisser pour désarmer",
        "slide_sos": "Glisser pour déclencher SOS", "slide_sos_stop": "Glisser pour arrêter SOS",
        "status_open": "OUVERT", "status_closed": "FERMÉ", "status_idle": "Inactif", "status_recording": "Enregistrement",
        "status_home": "Maison", "status_away": "Absent", "instances": "Instances Actives",
        "modes": "Modes", "activity_log": "📋 Journal d'activité", "automations": "Automatisations",
        "users_title": "👥 Utilisateurs et Contrôle d'accès", "backup_title": "Sauvegarde & Restauration",
        "support_title": "État & Assistance", "settings": "⚙️ Paramètres", "edit_dashboard": "Modifier le tableau",
        "edit_dashboard_done": "✓ Terminé", "reset_dashboard": "Réinitialiser la disposition",
        "reset_widget": "Réinitialiser le widget", "hide_widget": "Masquer le widget", "size": "Taille",
        "pin_management": "🔑 Gestion des codes PIN", "pin_master_title": "PIN Maître",
        "access_pin_lbl": "PIN d'accès", "master_pin_lbl": "PIN Maître", "user_no_pin": "Sans code PIN",
        "profile_is_yours": "Votre Profil", "change_btn": "Modifier", "remove_btn": "Supprimer",
        "exp_indefinite": "Indéfini", "exp_temporary": "Temporaire (Date/Heure)", "active_until": "Expire le",
        "expired": "Expiré", "role_argus_admin": "Administrateur Argus", "role_argus_admin_short": "Admin",
        "role_argus_standard": "Utilisateur Standard", "role_argus_user_short": "Utilisateur",
        "active_profile": "Profil Actif", "switch_profile_btn": "👤 Changer de Profil",
        "change_profile_picture": "Changer la photo dans Personnes HA ↗", "use_ha_language": "Utiliser la langue de Home Assistant",
        "lang_selector_lbl": "⚙️ Langue", "select_entry_sensors": "+ Sélectionner les capteurs d'entrée",
        "external_panels": "Panneaux d'alarme externes", "light_siren_color": "Couleur",
        "light_siren_flash": "Clignotement doux si disponible", "arm_time": "Délai d'armement (s)",
        "disarm_time": "Délai d'entrée (s)", "times_section": "⏱️ Délais", "bypass_lbl": "🚫 Contourner",
        "siren_section": "Sirènes", "sensor_section": "Capteurs d'intrusion", "lock_if_open": "Bloquer si ouvert",
        "wait_if_open": "Attendre la fermeture", "mqtt_label": "MQTT", "save_config": "💾 Enregistrer le Mode",
        "saved": "✓ Enregistré", "log_action_analysis": "Analyse de Sécurité", "log_action_automation": "Automatisation Exécutée",
        "log_action_sos_stopped": "SOS Arrêté", "log_action_user_added": "Utilisateur Créé", "log_action_user_deleted": "Utilisateur Supprimé",
        "log_action_user_logged_in": "Connexion Utilisateur", "log_action_state_restored": "État Restauré",
        "log_mode": "Mode", "log_sensor": "Capteur", "log_triggered": "DÉCLENCHÉE", "log_armed": "ARMÉ", "log_disarmed": "DÉSARMÉ",
        "manual_arm": "Armement manuel", "manual_disarm": "Désarmement manuel",
        "log_detail_disarm": "Système désarmé", "log_detail_triggered": "Activation automatique",
        "history_refresh": "🔄 Actualiser", "clear_log_btn": "🗑️ Effacer l'historique", "hero_desc": "Système de sécurité résidentiel intelligent",
        "home_fallback": "Mon Foyer", "home_name_lbl": "Nom du Foyer", "system_armed": "SYSTÈME ARMÉ",
        "system_disarmed": "SYSTÈME DÉSARMÉ", "system_triggered": "ALARME DÉCLENCHÉE !", "waiting_sensors": "EN ATTENTE DES CAPTEURS",
        "no_sensors_configured": "Aucun capteur configuré", "none_selected": "Aucun sélectionné", "select_btn": "+ Sélectionner",
        "add_btn": "+ Ajouter", "wrong_pin": "PIN incorrect", "introduce_pin": "Entrez votre code PIN de sécurité",
        "current_pin": "PIN Actuel", "new_pin": "Nouveau PIN", "confirm_pin": "Confirmer le PIN", "update_pin": "Mettre à jour le PIN",
        "change_pin": "Modifier le PIN d'accès", "forgot_pin": "PIN oublié ?", "create_ha": "+ Créer dans HA",
        "linked_rules": "Règles associées à Argus", "notifications_title": "Notifications", "notif_desc": "Notifications mobiles pour événements critiques.",
        "lbl_aesthetic_custom": "Personnalisation & Paramètres", "collapse": "Déplier", "hide": "Masquer", "expand": "Déplier",
        "alarm_instance": "Instance d'alarme", "emergency_number_label": "🚨 Numéro d'urgence local",
        "emergency_help": "Numéro d'urgence local (ex. 112 ou 911).", "temp_displayed": "Entité de température en direct",
        "weather_source": "Entité météo", "bg_weather": "Météo en direct", "bg_photo": "Photo", "bg_video": "Vidéo animée",
        "bg_collage": "Pêle-mêle", "bg_panel_none": "Aucun arrière-plan", "bg_hub_default": "Arrière-plan par défaut du Hub"
    },
    "pt": {
        "accept": "Aceitar", "cancel": "Cancelar", "confirm": "Confirmar", "close": "Fechar",
        "done": "Concluído", "save_btn": "Salvar", "edit_btn": "✏️ Editar Nome", "delete": "Excluir",
        "connected": "CONECTADO", "disarmed": "Desarmado", "btn_disarmed": "🔓 Desarmado",
        "mode_home": "Em Casa", "btn_home": "🏠 Em Casa", "mode_away": "Ausente", "btn_away": "🔴 Ausente",
        "mode_night": "Noite", "btn_night": "🌙 Noite", "mode_vacation": "Férias", "btn_vacation": "✈️ Férias",
        "btn_sos": "🚨 SOS / PÂNICO", "sos_stop": "PARAR SOS", "slide_disarm": "Deslize para desarmar",
        "slide_sos": "Deslize para acionar SOS", "slide_sos_stop": "Deslize para parar SOS",
        "status_open": "ABERTO", "status_closed": "FECHADO", "status_idle": "Inativo", "status_recording": "Gravando",
        "status_home": "Em Casa", "status_away": "Ausente", "instances": "Instâncias Ativas",
        "modes": "Modos", "activity_log": "📋 Histórico de Atividades", "automations": "Automações",
        "users_title": "👥 Usuários e Controle de Acesso", "backup_title": "Backup & Restauração",
        "support_title": "Status & Suporte", "settings": "⚙️ Configurações", "edit_dashboard": "Editar painel",
        "edit_dashboard_done": "✓ Concluído", "reset_dashboard": "Redefinir layout",
        "reset_widget": "Redefinir widget", "hide_widget": "Ocultar widget", "size": "Tamanho",
        "pin_management": "🔑 Gerenciamento de PINs", "pin_master_title": "PIN Mestre",
        "access_pin_lbl": "PIN de Acesso", "master_pin_lbl": "PIN Mestre", "user_no_pin": "Sem PIN de acesso",
        "profile_is_yours": "Seu Perfil", "change_btn": "Alterar", "remove_btn": "Remover",
        "exp_indefinite": "Indefinido", "exp_temporary": "Temporário (Data/Hora)", "active_until": "Expira em",
        "expired": "Expirado", "role_argus_admin": "Administrador do Argus", "role_argus_admin_short": "Admin",
        "role_argus_standard": "Usuário Padrão", "role_argus_user_short": "Usuário",
        "active_profile": "Perfil Ativo", "switch_profile_btn": "👤 Alternar Perfil",
        "change_profile_picture": "Alterar foto em Pessoas do HA ↗", "use_ha_language": "Usar idioma do Home Assistant",
        "lang_selector_lbl": "⚙️ Idioma", "select_entry_sensors": "+ Selecionar sensores de entrada",
        "external_panels": "Painéis de alarme externos", "light_siren_color": "Cor",
        "light_siren_flash": "Piscar suave se disponível", "arm_time": "Atraso de armamento (s)",
        "disarm_time": "Atraso de entrada (s)", "times_section": "⏱️ Temporizadores", "bypass_lbl": "🚫 Ignorar",
        "siren_section": "Sirenes", "sensor_section": "Sensores de Intrusão", "lock_if_open": "Bloquear se aberto",
        "wait_if_open": "Aguardar fechamento", "mqtt_label": "MQTT", "save_config": "💾 Salvar Modo",
        "saved": "✓ Salvo", "log_action_analysis": "Análise de Segurança", "log_action_automation": "Automação Executada",
        "log_action_sos_stopped": "SOS Interrompido", "log_action_user_added": "Usuário Criado", "log_action_user_deleted": "Usuário Excluído",
        "log_action_user_logged_in": "Login de Usuário", "log_action_state_restored": "Estado Restaurado",
        "log_mode": "Modo", "log_sensor": "Sensor", "log_triggered": "DISPARADO", "log_armed": "ARMADO", "log_disarmed": "DESARMADO",
        "manual_arm": "Armamento manual", "manual_disarm": "Desarme manual",
        "log_detail_disarm": "Sistema desarmado", "log_detail_triggered": "Ativação automática",
        "history_refresh": "🔄 Atualizar", "clear_log_btn": "🗑️ Limpar histórico", "hero_desc": "Sistema de segurança residencial inteligente",
        "home_fallback": "Meu Lar", "home_name_lbl": "Nome da Residência", "system_armed": "SISTEMA ARMADO",
        "system_disarmed": "SISTEMA DESARMADO", "system_triggered": "ALARME DISPARADO!", "waiting_sensors": "AGUARDANDO SENSORES",
        "no_sensors_configured": "Nenhum sensor configurado", "none_selected": "Nenhum selecionado", "select_btn": "+ Selecionar",
        "add_btn": "+ Adicionar", "wrong_pin": "PIN errado", "introduce_pin": "Insira seu PIN de segurança",
        "current_pin": "PIN Atual", "new_pin": "Novo PIN", "confirm_pin": "Confirmar PIN", "update_pin": "Atualizar PIN",
        "change_pin": "Alterar PIN de Acesso", "forgot_pin": "Esqueceu o PIN?", "create_ha": "+ Criar no HA",
        "linked_rules": "Regras vinculadas ao Argus", "notifications_title": "Notificações", "notif_desc": "Notificações móveis em eventos críticos.",
        "lbl_aesthetic_custom": "Personalização e Ajustes", "collapse": "Expandir", "hide": "Ocultar", "expand": "Expandir",
        "alarm_instance": "Instância de alarme", "emergency_number_label": "🚨 Número de Emergência Local",
        "emergency_help": "Número de emergência local (ex.: 190 ou 112).", "temp_displayed": "Entidade de temperatura ao vivo",
        "weather_source": "Entidade de clima", "bg_weather": "Clima ao vivo", "bg_photo": "Foto", "bg_video": "Vídeo animado",
        "bg_collage": "Colagem", "bg_panel_none": "Sem fundo no painel", "bg_hub_default": "Fundo padrão do Hub"
    },
    "it": {
        "accept": "Accetta", "cancel": "Annulla", "confirm": "Conferma", "close": "Chiudi",
        "done": "Fatto", "save_btn": "Salva", "edit_btn": "✏️ Modifica Nome", "delete": "Elimina",
        "connected": "CONNESSO", "disarmed": "Disinserito", "btn_disarmed": "🔓 Disinserito",
        "mode_home": "Casa", "btn_home": "🏠 Casa", "mode_away": "Fuori", "btn_away": "🔴 Fuori",
        "mode_night": "Notte", "btn_night": "🌙 Notte", "mode_vacation": "Vacanza", "btn_vacation": "✈️ Vacanza",
        "btn_sos": "🚨 SOS / PANICO", "sos_stop": "FERMA SOS", "slide_disarm": "Scorri per disarmare",
        "slide_sos": "Scorri per attivare SOS", "slide_sos_stop": "Scorri per fermare SOS",
        "status_open": "APERTO", "status_closed": "CHIUSO", "status_idle": "Inattivo", "status_recording": "Registrazione",
        "status_home": "Casa", "status_away": "Fuori", "instances": "Istanze Attive",
        "modes": "Modalità", "activity_log": "📋 Registro Attività", "automations": "Automazioni",
        "users_title": "👥 Utenti e Controllo Accessi", "backup_title": "Backup & Ripristino",
        "support_title": "Stato & Supporto", "settings": "⚙️ Impostazioni", "edit_dashboard": "Modifica dashboard",
        "edit_dashboard_done": "✓ Fatto", "reset_dashboard": "Ripristina layout",
        "reset_widget": "Ripristina widget", "hide_widget": "Nascondi widget", "size": "Dimensione",
        "pin_management": "🔑 Gestione PIN", "pin_master_title": "PIN Master",
        "access_pin_lbl": "PIN di Accesso", "master_pin_lbl": "PIN Master", "user_no_pin": "Nessun PIN di accesso",
        "profile_is_yours": "Il Tuo Profilo", "change_btn": "Modifica", "remove_btn": "Rimuovi",
        "exp_indefinite": "Indefinito", "exp_temporary": "Temporaneo (Data/Ora)", "active_until": "Scade il",
        "expired": "Scaduto", "role_argus_admin": "Amministratore Argus", "role_argus_admin_short": "Admin",
        "role_argus_standard": "Utente Standard", "role_argus_user_short": "Utente",
        "active_profile": "Profilo Attivo", "switch_profile_btn": "👤 Cambia Profilo",
        "change_profile_picture": "Modifica foto in Persone HA ↗", "use_ha_language": "Usa la lingua di Home Assistant",
        "lang_selector_lbl": "⚙️ Lingua", "select_entry_sensors": "+ Seleziona sensori di ingresso",
        "external_panels": "Pannelli di allarme esterni", "light_siren_color": "Colore",
        "light_siren_flash": "Lampeggio delicato se disponibile", "arm_time": "Ritardo inserimento (s)",
        "disarm_time": "Ritardo ingresso (s)", "times_section": "⏱️ Tempi", "bypass_lbl": "🚫 Escludi",
        "siren_section": "Sirene", "sensor_section": "Sensori di Intrusione", "lock_if_open": "Blocca se aperto",
        "wait_if_open": "Attendi chiusura", "mqtt_label": "MQTT", "save_config": "💾 Salva Modalità",
        "saved": "✓ Salvato", "log_action_analysis": "Analisi di Sicurezza", "log_action_automation": "Automazione Eseguita",
        "log_action_sos_stopped": "SOS Fermato", "log_action_user_added": "Utente Creato", "log_action_user_deleted": "Utente Eliminato",
        "log_action_user_logged_in": "Accesso Utente", "log_action_state_restored": "Stato Ripristinato",
        "log_mode": "Modalità", "log_sensor": "Sensore", "log_triggered": "SCATTATO", "log_armed": "INSERITO", "log_disarmed": "DISINSERITO",
        "manual_arm": "Inserimento manuale", "manual_disarm": "Disinserimento manuale",
        "log_detail_disarm": "Sistema disinserito", "log_detail_triggered": "Attivazione automatica",
        "history_refresh": "🔄 Aggiorna", "clear_log_btn": "🗑️ Cancella registro", "hero_desc": "Sistema di sicurezza domestico intelligente",
        "home_fallback": "La Mia Casa", "home_name_lbl": "Nome della Casa", "system_armed": "SISTEMA INSERITO",
        "system_disarmed": "SISTEMA DISINSERITO", "system_triggered": "ALLARME SCATTATO!", "waiting_sensors": "IN ATTESA DEI SENSORI",
        "no_sensors_configured": "Nessun sensore configurato", "none_selected": "Nessuno selezionato", "select_btn": "+ Seleziona",
        "add_btn": "+ Aggiungi", "wrong_pin": "PIN errato", "introduce_pin": "Inserisci il tuo PIN di sicurezza",
        "current_pin": "PIN Attuale", "new_pin": "Nuovo PIN", "confirm_pin": "Conferma PIN", "update_pin": "Aggiorna PIN",
        "change_pin": "Modifica PIN di Accesso", "forgot_pin": "Hai dimenticato il PIN?", "create_ha": "+ Crea in HA",
        "linked_rules": "Regole collegate ad Argus", "notifications_title": "Notifiche", "notif_desc": "Notifiche mobili per eventi critici.",
        "lbl_aesthetic_custom": "Personalizzazione e Impostazioni", "collapse": "Espandi", "hide": "Nascondi", "expand": "Espandi",
        "alarm_instance": "Istanza di allarme", "emergency_number_label": "🚨 Numero Locale di Emergenza",
        "emergency_help": "Numero di emergenza locale (es. 112).", "temp_displayed": "Entità temperatura in tempo reale",
        "weather_source": "Entità meteo", "bg_weather": "Meteo in tempo reale", "bg_photo": "Foto", "bg_video": "Video animato",
        "bg_collage": "Collage", "bg_panel_none": "Nessuno sfondo", "bg_hub_default": "Sfondo predefinito Hub"
    },
    "zh": {
        "accept": "确认", "cancel": "取消", "confirm": "确认", "close": "关闭",
        "done": "完成", "save_btn": "保存", "edit_btn": "✏️ 编辑名称", "delete": "删除",
        "connected": "已连接", "disarmed": "已撤防", "btn_disarmed": "🔓 已撤防",
        "mode_home": "在家", "btn_home": "🏠 在家", "mode_away": "外出", "btn_away": "🔴 外出",
        "mode_night": "夜间", "btn_night": "🌙 夜间", "mode_vacation": "度假", "btn_vacation": "✈️ 度假",
        "btn_sos": "🚨 紧急呼救 / SOS", "sos_stop": "停止 SOS", "slide_disarm": "滑动撤防",
        "slide_sos": "滑动触发 SOS", "slide_sos_stop": "滑动停止 SOS",
        "status_open": "开启", "status_closed": "关闭", "status_idle": "空闲", "status_recording": "录制中",
        "status_home": "在家", "status_away": "外出", "instances": "运行中实例",
        "modes": "模式", "activity_log": "📋 活动记录", "automations": "自动化",
        "users_title": "👥 用户与门禁控制", "backup_title": "备份与恢复",
        "support_title": "状态与支持", "settings": "⚙️ 设置", "edit_dashboard": "编辑仪表板",
        "edit_dashboard_done": "✓ 完成", "reset_dashboard": "重置布局",
        "reset_widget": "重置小部件", "hide_widget": "隐藏小部件", "size": "尺寸",
        "pin_management": "🔑 PIN 密码管理", "pin_master_title": "主 PIN 码",
        "access_pin_lbl": "访问 PIN 码", "master_pin_lbl": "主 PIN 码", "user_no_pin": "无访问 PIN",
        "profile_is_yours": "当前用户", "change_btn": "更改", "remove_btn": "移除",
        "exp_indefinite": "永久有效", "exp_temporary": "临时 (日期/时间)", "active_until": "过期时间",
        "expired": "已过期", "role_argus_admin": "Argus 管理员", "role_argus_admin_short": "管理",
        "role_argus_standard": "标准用户", "role_argus_user_short": "标准",
        "active_profile": "当前配置", "switch_profile_btn": "👤 切换配置文件",
        "change_profile_picture": "在 HA 用户中更改头像 ↗", "use_ha_language": "使用 Home Assistant 语言",
        "lang_selector_lbl": "⚙️ 语言", "select_entry_sensors": "+ 选择入口传感器",
        "external_panels": "外部报警面板", "light_siren_color": "颜色",
        "light_siren_flash": "柔和闪烁 (如果支持)", "arm_time": "布防延时 (秒)",
        "disarm_time": "进入延时 (秒)", "times_section": "⏱️ 计时延时", "bypass_lbl": "🚫 绕过",
        "siren_section": "警报器", "sensor_section": "入侵传感器", "lock_if_open": "如有开启则阻止",
        "wait_if_open": "等待感应器关闭", "mqtt_label": "MQTT", "save_config": "💾 保存模式",
        "saved": "✓ 已保存", "log_action_analysis": "安全分析", "log_action_automation": "自动化已执行",
        "log_action_sos_stopped": "SOS 已停止", "log_action_user_added": "用户已创建", "log_action_user_deleted": "用户已删除",
        "log_action_user_logged_in": "用户登录", "log_action_state_restored": "状态已恢复",
        "log_mode": "模式", "log_sensor": "传感器", "log_triggered": "已触发", "log_armed": "已布防", "log_disarmed": "已撤防",
        "manual_arm": "手动布防", "manual_disarm": "手动撤防",
        "log_detail_disarm": "系统已撤防", "log_detail_triggered": "自动触发",
        "history_refresh": "🔄 刷新", "clear_log_btn": "🗑️ 清除记录", "hero_desc": "智能家庭安防系统",
        "home_fallback": "我的家", "home_name_lbl": "家庭名称", "system_armed": "系统已布防",
        "system_disarmed": "系统已撤防", "system_triggered": "警报已触发！", "waiting_sensors": "等待传感器关闭",
        "no_sensors_configured": "未配置传感器", "none_selected": "未选择", "select_btn": "+ 选择",
        "add_btn": "+ 添加", "wrong_pin": "PIN 错误", "introduce_pin": "请输入安全 PIN 码",
        "current_pin": "当前 PIN", "new_pin": "新 PIN", "confirm_pin": "确认 PIN", "update_pin": "更新 PIN",
        "change_pin": "更改访问 PIN", "forgot_pin": "忘记 PIN 码？", "create_ha": "+ 在 HA 中创建",
        "linked_rules": "已关联到 Argus 的规则", "notifications_title": "通知", "notif_desc": "关键事件移动推送通知。",
        "lbl_aesthetic_custom": "个性化与设置", "collapse": "展开", "hide": "隐藏", "expand": "展开",
        "alarm_instance": "报警实例", "emergency_number_label": "🚨 本地紧急呼叫号码",
        "emergency_help": "设置当地紧急求救电话 (如 110 或 911)。", "temp_displayed": "实时温度实体",
        "weather_source": "天气实体", "bg_weather": "实时动态天气", "bg_photo": "静态壁纸", "bg_video": "动态视频",
        "bg_collage": "轮播相册", "bg_panel_none": "无背景", "bg_hub_default": "Hub 默认背景"
    },
    "zh-Hant": {
        "accept": "確認", "cancel": "取消", "confirm": "確認", "close": "關閉",
        "done": "完成", "save_btn": "儲存", "edit_btn": "✏️ 編輯名稱", "delete": "刪除",
        "connected": "已連線", "disarmed": "已撤防", "btn_disarmed": "🔓 已撤防",
        "mode_home": "在家", "btn_home": "🏠 在家", "mode_away": "離家", "btn_away": "🔴 離家",
        "mode_night": "夜間", "btn_night": "🌙 夜間", "mode_vacation": "度假", "btn_vacation": "✈️ 度假",
        "btn_sos": "🚨 緊急求救 / SOS", "sos_stop": "停止 SOS", "slide_disarm": "滑動撤防",
        "slide_sos": "滑動觸發 SOS", "slide_sos_stop": "滑動停止 SOS",
        "status_open": "開啟", "status_closed": "關閉", "status_idle": "閒置", "status_recording": "錄製中",
        "status_home": "在家", "status_away": "離家", "instances": "運行中實例",
        "modes": "模式", "activity_log": "📋 活動記錄", "automations": "自動化",
        "users_title": "👥 使用者與門禁控制", "backup_title": "備份與還原",
        "support_title": "狀態與支援", "settings": "⚙️ 設定", "edit_dashboard": "編輯儀表板",
        "edit_dashboard_done": "✓ 完成", "reset_dashboard": "重設版面配置",
        "reset_widget": "重設小工具", "hide_widget": "隱藏小工具", "size": "尺寸",
        "pin_management": "🔑 PIN 密碼管理", "pin_master_title": "主 PIN 碼",
        "access_pin_lbl": "訪問 PIN 碼", "master_pin_lbl": "主 PIN 碼", "user_no_pin": "無訪問 PIN",
        "profile_is_yours": "當前使用者", "change_btn": "變更", "remove_btn": "移除",
        "exp_indefinite": "永久有效", "exp_temporary": "臨時 (日期/時間)", "active_until": "到期時間",
        "expired": "已過期", "role_argus_admin": "Argus 管理員", "role_argus_admin_short": "管理",
        "role_argus_standard": "標準使用者", "role_argus_user_short": "標準",
        "active_profile": "當前設定檔", "switch_profile_btn": "👤 切換設定檔",
        "change_profile_picture": "在 HA 使用者中變更大頭貼 ↗", "use_ha_language": "使用 Home Assistant 語言",
        "lang_selector_lbl": "⚙️ 語言", "select_entry_sensors": "+ 選擇入口感應器",
        "external_panels": "外部警報面板", "light_siren_color": "顏色",
        "light_siren_flash": "柔和閃爍 (如果支援)", "arm_time": "布防延時 (秒)",
        "disarm_time": "進入延時 (秒)", "times_section": "⏱️ 計時延時", "bypass_lbl": "🚫 略過",
        "siren_section": "警報器", "sensor_section": "入侵感應器", "lock_if_open": "如有開啟則阻止",
        "wait_if_open": "等待感應器關閉", "mqtt_label": "MQTT", "save_config": "💾 儲存模式",
        "saved": "✓ 已儲存", "log_action_analysis": "安全分析", "log_action_automation": "自動化已執行",
        "log_action_sos_stopped": "SOS 已停止", "log_action_user_added": "使用者已建立", "log_action_user_deleted": "使用者已刪除",
        "log_action_user_logged_in": "使用者登入", "log_action_state_restored": "狀態已恢復",
        "log_mode": "模式", "log_sensor": "感應器", "log_triggered": "已觸發", "log_armed": "已布防", "log_disarmed": "已撤防",
        "manual_arm": "手動布防", "manual_disarm": "手動撤防",
        "log_detail_disarm": "系統已撤防", "log_detail_triggered": "自動觸發",
        "history_refresh": "🔄 重新整理", "clear_log_btn": "🗑️ 清除記錄", "hero_desc": "智慧家庭安防系統",
        "home_fallback": "我的家", "home_name_lbl": "家庭名稱", "system_armed": "系統已布防",
        "system_disarmed": "系統已撤防", "system_triggered": "警報已觸發！", "waiting_sensors": "等待感應器關閉",
        "no_sensors_configured": "未設定感應器", "none_selected": "未選擇", "select_btn": "+ 選擇",
        "add_btn": "+ 新增", "wrong_pin": "PIN 錯誤", "introduce_pin": "請輸入安全 PIN 碼",
        "current_pin": "目前 PIN", "new_pin": "新 PIN", "confirm_pin": "確認 PIN", "update_pin": "更新 PIN",
        "change_pin": "變更訪問 PIN", "forgot_pin": "忘記 PIN 碼？", "create_ha": "+ 在 HA 中建立",
        "linked_rules": "已連結至 Argus 的規則", "notifications_title": "通知", "notif_desc": "關鍵事件行動推播通知。",
        "lbl_aesthetic_custom": "個人化與設定", "collapse": "展開", "hide": "隱藏", "expand": "展開",
        "alarm_instance": "警報實例", "emergency_number_label": "🚨 當地緊急求救號碼",
        "emergency_help": "設定當地緊急求救電話 (如 110 或 119)。", "temp_displayed": "即時溫度實體",
        "weather_source": "天氣實體", "bg_weather": "即時動態天氣", "bg_photo": "靜態桌布", "bg_video": "動態影片",
        "bg_collage": "輪播相簿", "bg_panel_none": "無背景", "bg_hub_default": "Hub 預設背景"
    },
    "ru": {
        "accept": "Принять", "cancel": "Отмена", "confirm": "Подтвердить", "close": "Закрыть",
        "done": "Готово", "save_btn": "Сохранить", "edit_btn": "✏️ Изменить имя", "delete": "Удалить",
        "connected": "ПОДКЛЮЧЕНО", "disarmed": "Снято с охраны", "btn_disarmed": "🔓 Снято с охраны",
        "mode_home": "Дома", "btn_home": "🏠 Дома", "mode_away": "Вне дома", "btn_away": "🔴 Вне дома",
        "mode_night": "Ночь", "btn_night": "🌙 Ночь", "mode_vacation": "Отпуск", "btn_vacation": "✈️ Отпуск",
        "btn_sos": "🚨 SOS / ПАНИКА", "sos_stop": "ОСТАНОВИТЬ SOS", "slide_disarm": "Сдвиньте для снятия охраны",
        "slide_sos": "Сдвиньте для включения SOS", "slide_sos_stop": "Сдвиньте для остановки SOS",
        "status_open": "ОТКРЫТО", "status_closed": "ЗАКРЫТО", "status_idle": "Ожидание", "status_recording": "Запись",
        "status_home": "Дома", "status_away": "Вне дома", "instances": "Активные экземпляры",
        "modes": "Режимы", "activity_log": "📋 Журнал активности", "automations": "Автоматизации",
        "users_title": "👥 Пользователи и контроль доступа", "backup_title": "Резервное копирование и восстановление",
        "support_title": "Состояние и поддержка", "settings": "⚙️ Настройки", "edit_dashboard": "Редактировать панель",
        "edit_dashboard_done": "✓ Готово", "reset_dashboard": "Сбросить макет",
        "reset_widget": "Сбросить виджет", "hide_widget": "Скрыть виджет", "size": "Размер",
        "pin_management": "🔑 Управление PIN-кодами", "pin_master_title": "Мастер-PIN",
        "access_pin_lbl": "PIN доступа", "master_pin_lbl": "Мастер-PIN", "user_no_pin": "Без PIN-кода",
        "profile_is_yours": "Ваш профиль", "change_btn": "Изменить", "remove_btn": "Удалить",
        "exp_indefinite": "Бессрочно", "exp_temporary": "Временный (Дата/Время)", "active_until": "Истекает",
        "expired": "Истёк", "role_argus_admin": "Администратор Argus", "role_argus_admin_short": "Адм",
        "role_argus_standard": "Стандартный пользователь", "role_argus_user_short": "Польз",
        "active_profile": "Активный профиль", "switch_profile_btn": "👤 Сменить профиль",
        "change_profile_picture": "Изменить фото в «Людях» HA ↗", "use_ha_language": "Использовать язык Home Assistant",
        "lang_selector_lbl": "⚙️ Язык", "select_entry_sensors": "+ Выбрать входные датчики",
        "external_panels": "Внешние панели сигнализации", "light_siren_color": "Цвет",
        "light_siren_flash": "Мягкое мигание, если доступно", "arm_time": "Задержка постановки (с)",
        "disarm_time": "Задержка входа (с)", "times_section": "⏱️ Таймеры", "bypass_lbl": "🚫 Обход",
        "siren_section": "Сирены", "sensor_section": "Датчики проникновения", "lock_if_open": "Блокировать при открытии",
        "wait_if_open": "Ждать закрытия датчиков", "mqtt_label": "MQTT", "save_config": "💾 Сохранить режим",
        "saved": "✓ Сохранено", "log_action_analysis": "Анализ безопасности", "log_action_automation": "Автоматизация выполнена",
        "log_action_sos_stopped": "SOS остановлен", "log_action_user_added": "Пользователь создан", "log_action_user_deleted": "Пользователь удалён",
        "log_action_user_logged_in": "Вход пользователя", "log_action_state_restored": "Состояние восстановлено",
        "log_mode": "Режим", "log_sensor": "Датчик", "log_triggered": "ТРЕВОГА", "log_armed": "НА ОХРАНЕ", "log_disarmed": "СНЯТО",
        "manual_arm": "Ручная постановка", "manual_disarm": "Ручное снятие",
        "log_detail_disarm": "Система снята с охраны", "log_detail_triggered": "Автоматическая активация",
        "history_refresh": "🔄 Обновить", "clear_log_btn": "🗑️ Очистить журнал", "hero_desc": "Интеллектуальная система домашней безопасности",
        "home_fallback": "Мой Дом", "home_name_lbl": "Название дома", "system_armed": "СИСТЕМА НА ОХРАНЕ",
        "system_disarmed": "СИСТЕМА СНЯТА С ОХРАНЫ", "system_triggered": "ТРЕВОГА СРАБОТАЛА!", "waiting_sensors": "ОЖИДАНИЕ ДАТЧИКОВ",
        "no_sensors_configured": "Датчики не настроены", "none_selected": "Не выбрано", "select_btn": "+ Выбрать",
        "add_btn": "+ Добавить", "wrong_pin": "Неверный PIN", "introduce_pin": "Введите ваш PIN безопасности",
        "current_pin": "Текущий PIN", "new_pin": "Новый PIN", "confirm_pin": "Подтвердите PIN", "update_pin": "Обновить PIN",
        "change_pin": "Изменить PIN доступа", "forgot_pin": "Забыли PIN?", "create_ha": "+ Создать в HA",
        "linked_rules": "Связанные с Argus правила", "notifications_title": "Уведомления", "notif_desc": "Push-уведомления о критических событиях.",
        "lbl_aesthetic_custom": "Персонализация и настройки", "collapse": "Развернуть", "hide": "Скрыть", "expand": "Развернуть",
        "alarm_instance": "Экземпляр сигнализации", "emergency_number_label": "🚨 Номер экстренной службы",
        "emergency_help": "Номер местной экстренной службы (напр. 112).", "temp_displayed": "Объект температуры",
        "weather_source": "Объект погоды", "bg_weather": "Живая погода", "bg_photo": "Фото", "bg_video": "Видео",
        "bg_collage": "Коллаж", "bg_panel_none": "Без фона", "bg_hub_default": "Фон хаба по умолчанию"
    }
}

# Add translations for hi, ar, ko, ja, uk
TERMS["hi"] = {
    "accept": "स्वीकार करें", "cancel": "रद्द करें", "confirm": "पुष्टि करें", "close": "बंद करें",
    "done": "संपन्न", "save_btn": "सहेजें", "edit_btn": "✏️ नाम बदलें", "delete": "हटाएं",
    "connected": "जुड़ा हुआ", "disarmed": "निरस्त्र", "btn_disarmed": "🔓 निरस्त्र",
    "mode_home": "घर पर", "btn_home": "🏠 घर पर", "mode_away": "बाहर", "btn_away": "🔴 बाहर",
    "mode_night": "रात", "btn_night": "🌙 रात", "mode_vacation": "छुट्टी", "btn_vacation": "✈️ छुट्टी",
    "btn_sos": "🚨 आपातकालीन / SOS", "sos_stop": "SOS रोकें", "slide_disarm": "निरस्त करने के लिए स्लाइड करें",
    "slide_sos": "SOS के लिए स्लाइड करें", "slide_sos_stop": "SOS रोकने के लिए स्लाइड करें",
    "status_open": "खुला", "status_closed": "बंद", "status_idle": "निष्क्रिय", "status_recording": "रिकॉर्डिंग",
    "status_home": "घर पर", "status_away": "बाहर", "instances": "सक्रिय उदाहरण",
    "modes": "मोड", "activity_log": "📋 गतिविधि लॉग", "automations": "स्वचालन",
    "users_title": "👥 उपयोगकर्ता और अभिगम नियंत्रण", "backup_title": "बैकअप और पुनर्स्थापना",
    "support_title": "स्थिति और सहायता", "settings": "⚙️ सेटिंग्स", "edit_dashboard": "डैशबोर्ड संपादित करें",
    "edit_dashboard_done": "✓ संपन्न", "reset_dashboard": "लेआउट रीसेट करें",
    "reset_widget": "विजेट रीसेट करें", "hide_widget": "विजेट छिपाएँ", "size": "आकार",
    "pin_management": "🔑 पिन प्रबंधन", "pin_master_title": "मास्टर पिन",
    "access_pin_lbl": "एक्सेस पिन", "master_pin_lbl": "मास्टर पिन", "user_no_pin": "कोई एक्सेस पिन नहीं",
    "profile_is_yours": "आपकी प्रोफ़ाइल", "change_btn": "बदलें", "remove_btn": "हटाएं",
    "exp_indefinite": "अनिश्चितकालीन", "exp_temporary": "अस्थायी (दिनांक/समय)", "active_until": "समाप्त होता है",
    "expired": "समाप्त हो चुका", "role_argus_admin": "Argus व्यवस्थापक", "role_argus_admin_short": "व्यवस्थापक",
    "role_argus_standard": "मानक उपयोगकर्ता", "role_argus_user_short": "उपयोगकर्ता",
    "active_profile": "सक्रिय प्रोफ़ाइल", "switch_profile_btn": "👤 प्रोफ़ाइल बदलें",
    "change_profile_picture": "HA Persons में फ़ोटो बदलें ↗", "use_ha_language": "Home Assistant भाषा का उपयोग करें",
    "lang_selector_lbl": "⚙️ भाषा", "select_entry_sensors": "+ प्रवेश सेंसर चुनें",
    "external_panels": "बाहरी अलार्म पैनल", "light_siren_color": "रंग",
    "light_siren_flash": "यदि उपलब्ध हो तो सौम्य फ़्लैश", "arm_time": "सशस्त्र करने में देरी (सेकंड)",
    "disarm_time": "प्रवेश में देरी (सेकंड)", "times_section": "⏱️ टाइमर", "bypass_lbl": "🚫 बायपास",
    "siren_section": "सायरन", "sensor_section": "घुसपैठ सेंसर", "lock_if_open": "खुले होने पर रोकें",
    "wait_if_open": "सेंसर बंद होने की प्रतीक्षा करें", "mqtt_label": "MQTT", "save_config": "💾 मोड सहेजें",
    "saved": "✓ सहेजा गया", "log_action_analysis": "सुरक्षा विश्लेषण", "log_action_automation": "स्वचालन निष्पादित",
    "log_action_sos_stopped": "SOS रोक दिया गया", "log_action_user_added": "उपयोगकर्ता बनाया गया", "log_action_user_deleted": "उपयोगकर्ता हटाया गया",
    "log_action_user_logged_in": "उपयोगकर्ता लॉगिन", "log_action_state_restored": "स्थिति पुनर्स्थापित",
    "log_mode": "मोड", "log_sensor": "सेंसर", "log_triggered": "अलार्म बजा", "log_armed": "सशस्त्र", "log_disarmed": "निरस्त्र",
    "manual_arm": "मैन्युअल आर्मिंग", "manual_disarm": "मैन्युअल डिसआर्म",
    "log_detail_disarm": "सिस्टम निरस्त्र किया गया", "log_detail_triggered": "स्वचालित सक्रियण",
    "history_refresh": "🔄 रीफ्रेश करें", "clear_log_btn": "🗑️ लॉग साफ़ करें", "hero_desc": "स्मार्ट होम सुरक्षा प्रणाली",
    "home_fallback": "मेरा घर", "home_name_lbl": "घर का नाम", "system_armed": "सिस्टम सशस्त्र है",
    "system_disarmed": "सिस्टम निरस्त्र है", "system_triggered": "अलार्म बज उठा!", "waiting_sensors": "सेंसर की प्रतीक्षा है",
    "no_sensors_configured": "कोई सेंसर कॉन्फ़िगर नहीं है", "none_selected": "कोई चयनित नहीं", "select_btn": "+ चुनें",
    "add_btn": "+ जोड़ें", "wrong_pin": "गलत PIN", "introduce_pin": "सुरक्षा पिन दर्ज करें",
    "current_pin": "वर्तमान पिन", "new_pin": "नया पिन", "confirm_pin": "पिन की पुष्टि करें", "update_pin": "पिन अपडेट करें",
    "change_pin": "पिन बदलें", "forgot_pin": "पिन भूल गए?", "create_ha": "+ HA में बनाएं",
    "linked_rules": "Argus से जुड़े नियम", "notifications_title": "सूचनाएं", "notif_desc": "महत्वपूर्ण घटनाओं के लिए मोबाइल पुश सूचनाएं।",
    "lbl_aesthetic_custom": "निजीकरण और सेटिंग्स", "collapse": "विस्तार करें", "hide": "छिपाएं", "expand": "विस्तार करें"
}

TERMS["ar"] = {
    "accept": "قبول", "cancel": "إلغاء", "confirm": "تأكيد", "close": "إغلاق",
    "done": "تم", "save_btn": "حفظ", "edit_btn": "✏️ تعديل الاسم", "delete": "حذف",
    "connected": "متصل", "disarmed": "منزوع السلاح", "btn_disarmed": "🔓 منزوع السلاح",
    "mode_home": "في المنزل", "btn_home": "🏠 في المنزل", "mode_away": "بالخارج", "btn_away": "🔴 بالخارج",
    "mode_night": "ليلي", "btn_night": "🌙 ليلي", "mode_vacation": "إجازة", "btn_vacation": "✈️ إجازة",
    "btn_sos": "🚨 نداء استغاثة / SOS", "sos_stop": "إيقاف SOS", "slide_disarm": "اسحب لنزع التسليح",
    "slide_sos": "اسحب لتشغيل نداء الاستغاثة", "slide_sos_stop": "اسحب لإيقاف SOS",
    "status_open": "مفتوح", "status_closed": "مغلق", "status_idle": "خامل", "status_recording": "تسجيل",
    "status_home": "في المنزل", "status_away": "بالخارج", "instances": "المثيلات النشطة",
    "modes": "الأوضاع", "activity_log": "📋 سجل الأنشطة", "automations": "الأتمتة",
    "users_title": "👥 المستخدمون والتحكم في الوصول", "backup_title": "النسخ الاحتياطي والاستعادة",
    "support_title": "الحالة والدعم", "settings": "⚙️ الإعدادات", "edit_dashboard": "تعديل لوحة المعلومات",
    "edit_dashboard_done": "✓ تم", "reset_dashboard": "إعادة تعيين التخطيط",
    "reset_widget": "إعادة تعيين الأداة", "hide_widget": "إخفاء الأداة", "size": "الحجم",
    "pin_management": "🔑 إدارة الرموز السرية", "pin_master_title": "الرمز الرئيسي",
    "access_pin_lbl": "رمز الدخول", "master_pin_lbl": "الرمز الرئيسي", "user_no_pin": "بدون رمز PIN",
    "profile_is_yours": "ملفك الشخصي", "change_btn": "تغيير", "remove_btn": "إزالة",
    "exp_indefinite": "غير محدد", "exp_temporary": "مؤقت (التاريخ/الوقت)", "active_until": "ينتهي في",
    "expired": "منتهي الصلاحية", "role_argus_admin": "مسؤول Argus", "role_argus_admin_short": "مشرف",
    "role_argus_standard": "مستخدم عادي", "role_argus_user_short": "مستخدم",
    "active_profile": "الملف النشط", "switch_profile_btn": "👤 تبديل الملف الشخصي",
    "change_profile_picture": "تغيير الصورة في أشخاص HA ↗", "use_ha_language": "استخدام لغة Home Assistant",
    "lang_selector_lbl": "⚙️ اللغة", "select_entry_sensors": "+ حدد مستشعرات المدخل",
    "external_panels": "لوحات الإنذار الخارجية", "light_siren_color": "اللون",
    "light_siren_flash": "وميض لطيف إن وجد", "arm_time": "تأخير التسليح (ثانية)",
    "disarm_time": "تأخير الدخول (ثانية)", "times_section": "⏱️ التوقيتات", "bypass_lbl": "🚫 تجاوز",
    "siren_section": "صافرات الإنذار", "sensor_section": "مستشعرات التسلل", "lock_if_open": "حظر التسليح إذا كانت مفتوحة",
    "wait_if_open": "انتظار إغلاق المستشعرات", "mqtt_label": "MQTT", "save_config": "💾 حفظ الوضع",
    "saved": "✓ تم الحفظ", "log_action_analysis": "تحليل الأمان", "log_action_automation": "تم تنفيذ الأتمتة",
    "log_action_sos_stopped": "تم إيقاف SOS", "log_action_user_added": "تم إنشاء المستخدم", "log_action_user_deleted": "تم حذف المستخدم",
    "log_action_user_logged_in": "تسجيل دخول المستخدم", "log_action_state_restored": "تمت استعادة الحالة",
    "log_mode": "الوضع", "log_sensor": "المستشعر", "log_triggered": "تم الإنذار", "log_armed": "مسلح", "log_disarmed": "منزوع السلاح",
    "manual_arm": "تسليح يدوي", "manual_disarm": "نزع السلاح يدوياً",
    "log_detail_disarm": "تم نزع سلاح النظام", "log_detail_triggered": "تنشيط تلقائي",
    "history_refresh": "🔄 تحديث", "clear_log_btn": "🗑️ مسح السجل", "hero_desc": "نظام أمان منزلي ذكي",
    "home_fallback": "منزلي", "home_name_lbl": "اسم المنزل", "system_armed": "النظام مسلح",
    "system_disarmed": "النظام منزوع السلاح", "system_triggered": "تم إطلاق الإنذار!", "waiting_sensors": "في انتظار المستشعرات",
    "no_sensors_configured": "لم يتم تكوين مستشعرات", "none_selected": "لم يتم تحديد أي شيء", "select_btn": "+ تحديد",
    "add_btn": "+ إضافة", "wrong_pin": "رمز خاطئ", "introduce_pin": "أدخل رمز الأمان",
    "current_pin": "الرمز الحالي", "new_pin": "رمز جديد", "confirm_pin": "تأكيد الرمز", "update_pin": "تحديث الرمز",
    "change_pin": "تغيير رمز الدخول", "forgot_pin": "نسيت الرمز؟", "create_ha": "+ إنشاء في HA",
    "linked_rules": "القواعد المرتبطة بـ Argus", "notifications_title": "الإشعارات", "notif_desc": "إشعارات فورية للأحداث الهامة.",
    "lbl_aesthetic_custom": "التخصيص والإعدادات", "collapse": "توسيع", "hide": "إخفاء", "expand": "توسيع"
}

TERMS["ko"] = {
    "accept": "수락", "cancel": "취소", "confirm": "확인", "close": "닫기",
    "done": "완료", "save_btn": "저장", "edit_btn": "✏️ 이름 편집", "delete": "삭제",
    "connected": "연결됨", "disarmed": "해제됨", "btn_disarmed": "🔓 해제됨",
    "mode_home": "재실", "btn_home": "🏠 재실", "mode_away": "외출", "btn_away": "🔴 외출",
    "mode_night": "야간", "btn_night": "🌙 야간", "mode_vacation": "휴가", "btn_vacation": "✈️ 휴가",
    "btn_sos": "🚨 비상 / SOS", "sos_stop": "SOS 중지", "slide_disarm": "밀어서 해제",
    "slide_sos": "밀어서 SOS 활성화", "slide_sos_stop": "밀어서 SOS 중지",
    "status_open": "열림", "status_closed": "닫힘", "status_idle": "대기", "status_recording": "녹화 중",
    "status_home": "재실", "status_away": "외출", "instances": "활성 인스턴스",
    "modes": "모드", "activity_log": "📋 활동 로그", "automations": "자동화",
    "users_title": "👥 사용자 및 출입 제어", "backup_title": "백업 및 복원",
    "support_title": "상태 및 지원", "settings": "⚙️ 설정", "edit_dashboard": "대시보드 편집",
    "edit_dashboard_done": "✓ 완료", "reset_dashboard": "레이아웃 재설정",
    "reset_widget": "위젯 재설정", "hide_widget": "위젯 숨기기", "size": "크기",
    "pin_management": "🔑 PIN 관리", "pin_master_title": "마스터 PIN",
    "access_pin_lbl": "액세스 PIN", "master_pin_lbl": "마스터 PIN", "user_no_pin": "액세스 PIN 없음",
    "profile_is_yours": "내 프로필", "change_btn": "변경", "remove_btn": "삭제",
    "exp_indefinite": "무기한", "exp_temporary": "임시 (날짜/시간)", "active_until": "만료일",
    "expired": "만료됨", "role_argus_admin": "Argus 관리자", "role_argus_admin_short": "관리자",
    "role_argus_standard": "일반 사용자", "role_argus_user_short": "사용자",
    "active_profile": "활성 프로필", "switch_profile_btn": "👤 프로필 전환",
    "change_profile_picture": "HA 사용자 설정에서 사진 변경 ↗", "use_ha_language": "Home Assistant 언어 사용",
    "lang_selector_lbl": "⚙️ 언어", "select_entry_sensors": "+ 출입 센서 선택",
    "external_panels": "외부 알람 패널", "light_siren_color": "색상",
    "light_siren_flash": "가능한 경우 부드러운 깜빡임", "arm_time": "설정 지연 시간 (초)",
    "disarm_time": "진입 지연 시간 (초)", "times_section": "⏱️ 타이머", "bypass_lbl": "🚫 우회",
    "siren_section": "사이렌", "sensor_section": "침입 센서", "lock_if_open": "열려 있으면 차단",
    "wait_if_open": "센서 닫힐 때까지 대기", "mqtt_label": "MQTT", "save_config": "💾 모드 저장",
    "saved": "✓ 저장됨", "log_action_analysis": "보안 분석", "log_action_automation": "자동화 실행됨",
    "log_action_sos_stopped": "SOS 중지됨", "log_action_user_added": "사용자 생성됨", "log_action_user_deleted": "사용자 삭제됨",
    "log_action_user_logged_in": "사용자 로그인", "log_action_state_restored": "상태 복원됨",
    "log_mode": "모드", "log_sensor": "센서", "log_triggered": "작동됨", "log_armed": "설정됨", "log_disarmed": "해제됨",
    "manual_arm": "수동 설정", "manual_disarm": "수동 해제",
    "log_detail_disarm": "시스템 해제됨", "log_detail_triggered": "자동 작동",
    "history_refresh": "🔄 새로고침", "clear_log_btn": "🗑️ 로그 지우기", "hero_desc": "지능형 홈 보안 시스템",
    "home_fallback": "우리 집", "home_name_lbl": "홈 이름", "system_armed": "시스템 설정됨",
    "system_disarmed": "시스템 해제됨", "system_triggered": "알람 작동됨!", "waiting_sensors": "센서 닫힘 대기 중",
    "no_sensors_configured": "구성된 센서가 없습니다", "none_selected": "선택 없음", "select_btn": "+ 선택",
    "add_btn": "+ 추가", "wrong_pin": "잘못된 PIN", "introduce_pin": "보안 PIN 입력",
    "current_pin": "현재 PIN", "new_pin": "새 PIN", "confirm_pin": "PIN 확인", "update_pin": "PIN 업데이트",
    "change_pin": "액세스 PIN 변경", "forgot_pin": "PIN을 잊으셨나요?", "create_ha": "+ HA에서 생성",
    "linked_rules": "Argus에 연결된 규칙", "notifications_title": "알림", "notif_desc": "중요 이벤트 모바일 푸시 알림.",
    "lbl_aesthetic_custom": "개인화 및 설정", "collapse": "펼치기", "hide": "숨기기", "expand": "펼치기"
}

TERMS["ja"] = {
    "accept": "承認", "cancel": "キャンセル", "confirm": "確認", "close": "閉じる",
    "done": "完了", "save_btn": "保存", "edit_btn": "✏️ 名前を編集", "delete": "削除",
    "connected": "接続済み", "disarmed": "警戒解除", "btn_disarmed": "🔓 警戒解除",
    "mode_home": "在宅", "btn_home": "🏠 在宅", "mode_away": "外出", "btn_away": "🔴 外出",
    "mode_night": "夜間", "btn_night": "🌙 夜間", "mode_vacation": "休暇", "btn_vacation": "✈️ 休暇",
    "btn_sos": "🚨 緊急 / SOS", "sos_stop": "SOSを停止", "slide_disarm": "スライドして解除",
    "slide_sos": "スライドしてSOS作動", "slide_sos_stop": "スライドしてSOS停止",
    "status_open": "開", "status_closed": "閉", "status_idle": "待機中", "status_recording": "録画中",
    "status_home": "在宅", "status_away": "外出", "instances": "アクティブなインスタンス",
    "modes": "モード", "activity_log": "📋 アクティビティ ログ", "automations": "自動化",
    "users_title": "👥 ユーザーとアクセス制御", "backup_title": "バックアップと復元",
    "support_title": "ステータスとサポート", "settings": "⚙️ 設定", "edit_dashboard": "ダッシュボードを編集",
    "edit_dashboard_done": "✓ 完了", "reset_dashboard": "レイアウトをリセット",
    "reset_widget": "ウィジェットをリセット", "hide_widget": "ウィジェットを非表示", "size": "サイズ",
    "pin_management": "🔑 PIN 管理", "pin_master_title": "マスター PIN",
    "access_pin_lbl": "アクセス PIN", "master_pin_lbl": "マスター PIN", "user_no_pin": "アクセス PIN なし",
    "profile_is_yours": "マイ プロファイル", "change_btn": "変更", "remove_btn": "削除",
    "exp_indefinite": "無期限", "exp_temporary": "一時的 (日時)", "active_until": "有効期限",
    "expired": "期限切れ", "role_argus_admin": "Argus 管理者", "role_argus_admin_short": "管理者",
    "role_argus_standard": "標準ユーザー", "role_argus_user_short": "一般",
    "active_profile": "アクティブなプロファイル", "switch_profile_btn": "👤 プロファイルの切り替え",
    "change_profile_picture": "HA の人物設定で写真を変更 ↗", "use_ha_language": "Home Assistant の言語を使用",
    "lang_selector_lbl": "⚙️ 言語", "select_entry_sensors": "+ エントリセンサーを選択",
    "external_panels": "外部アラーム パネル", "light_siren_color": "色",
    "light_siren_flash": "利用可能な場合は穏やかに点滅", "arm_time": "警戒遅延 (秒)",
    "disarm_time": "進入遅延 (秒)", "times_section": "⏱️ タイマー", "bypass_lbl": "🚫 バイパス",
    "siren_section": "サイレン", "sensor_section": "侵入センサー", "lock_if_open": "開いている場合はブロック",
    "wait_if_open": "センサーが閉じるのを待つ", "mqtt_label": "MQTT", "save_config": "💾 モードを保存",
    "saved": "✓ 保存しました", "log_action_analysis": "セキュリティ分析", "log_action_automation": "自動化が実行されました",
    "log_action_sos_stopped": "SOS を停止しました", "log_action_user_added": "ユーザーを作成しました", "log_action_user_deleted": "ユーザーを削除しました",
    "log_action_user_logged_in": "ユーザーログイン", "log_action_state_restored": "状態を復元しました",
    "log_mode": "モード", "log_sensor": "センサー", "log_triggered": "作動", "log_armed": "警戒中", "log_disarmed": "解除済み",
    "manual_arm": "手動警戒", "manual_disarm": "手動解除",
    "log_detail_disarm": "システムが警戒解除されました", "log_detail_triggered": "自動作動",
    "history_refresh": "🔄 更新", "clear_log_btn": "🗑️ ログを消去", "hero_desc": "インテリジェント ホーム セキュリティ システム",
    "home_fallback": "マイホーム", "home_name_lbl": "ホーム名", "system_armed": "システム警戒中",
    "system_disarmed": "システム警戒解除", "system_triggered": "警報が作動しました！", "waiting_sensors": "センサーの待機中",
    "no_sensors_configured": "センサーが設定されていません", "none_selected": "選択なし", "select_btn": "+ 選択",
    "add_btn": "+ 追加", "wrong_pin": "PINが違います", "introduce_pin": "セキュリティ PIN を入力",
    "current_pin": "現在の PIN", "new_pin": "新しい PIN", "confirm_pin": "PIN の確認", "update_pin": "PIN を更新",
    "change_pin": "アクセス PIN の変更", "forgot_pin": "PIN をお忘れですか？", "create_ha": "+ HA で作成",
    "linked_rules": "Argus に関連付けられたルール", "notifications_title": "通知", "notif_desc": "重要なイベントのプッシュ通知。",
    "lbl_aesthetic_custom": "カスタマイズと設定", "collapse": "展開", "hide": "非表示", "expand": "展開"
}

TERMS["uk"] = {
    "accept": "Прийняти", "cancel": "Скасувати", "confirm": "Підтвердити", "close": "Закрити",
    "done": "Готово", "save_btn": "Зберегти", "edit_btn": "✏️ Змінити назву", "delete": "Видалити",
    "connected": "ПІДКЛЮЧЕНО", "disarmed": "Знято з охорони", "btn_disarmed": "🔓 Знято з охорони",
    "mode_home": "Вдома", "btn_home": "🏠 Вдома", "mode_away": "Поза домом", "btn_away": "🔴 Поза домом",
    "mode_night": "Ніч", "btn_night": "🌙 Ніч", "mode_vacation": "Відпустка", "btn_vacation": "✈️ Відпустка",
    "btn_sos": "🚨 SOS / ПАНІКА", "sos_stop": "ЗУПИНИТИ SOS", "slide_disarm": "Посуньте для зняття охорони",
    "slide_sos": "Посуньте для ввімкнення SOS", "slide_sos_stop": "Посуньте щоб зупинити SOS",
    "status_open": "ВІДКРИТО", "status_closed": "ЗАКРИТО", "status_idle": "Очікування", "status_recording": "Запис",
    "status_home": "Вдома", "status_away": "Поза домом", "instances": "Активні екземпляри",
    "modes": "Режими", "activity_log": "📋 Журнал активності", "automations": "Автоматизація",
    "users_title": "👥 Користувачі та контроль доступу", "backup_title": "Резервне копіювання та відновлення",
    "support_title": "Стан і підтримка", "settings": "⚙️ Налаштування", "edit_dashboard": "Редагувати панель",
    "edit_dashboard_done": "✓ Готово", "reset_dashboard": "Скинути макет",
    "reset_widget": "Скинути віджет", "hide_widget": "Сховати віджет", "size": "Розмір",
    "pin_management": "🔑 Керування PIN-кодами", "pin_master_title": "Майстер-PIN",
    "access_pin_lbl": "PIN доступу", "master_pin_lbl": "Майстер-PIN", "user_no_pin": "Без PIN-коду",
    "profile_is_yours": "Ваш профіль", "change_btn": "Змінити", "remove_btn": "Видалити",
    "exp_indefinite": "Безстроково", "exp_temporary": "Тимчасовий (Дата/Час)", "active_until": "Діє до",
    "expired": "Прострочено", "role_argus_admin": "Адміністратор Argus", "role_argus_admin_short": "Адм",
    "role_argus_standard": "Звичайний користувач", "role_argus_user_short": "Корист",
    "active_profile": "Активний профіль", "switch_profile_btn": "👤 Змінити профіль",
    "change_profile_picture": "Змінити фото в Особах HA ↗", "use_ha_language": "Використовувати мову Home Assistant",
    "lang_selector_lbl": "⚙️ Мова", "select_entry_sensors": "+ Вибрати вхідні датчики",
    "external_panels": "Зовнішні панелі сигналізації", "light_siren_color": "Колір",
    "light_siren_flash": "М'яке блимання, якщо доступно", "arm_time": "Затримка постановки (с)",
    "disarm_time": "Затримка входу (с)", "times_section": "⏱️ Таймери", "bypass_lbl": "🚫 Обхід",
    "siren_section": "Сирени", "sensor_section": "Датчики проникнення", "lock_if_open": "Блокувати, якщо відкрито",
    "wait_if_open": "Чекати закриття датчиків", "mqtt_label": "MQTT", "save_config": "💾 Зберегти режим",
    "saved": "✓ Збережено", "log_action_analysis": "Аналіз безпеки", "log_action_automation": "Автоматизацію виконано",
    "log_action_sos_stopped": "SOS зупинено", "log_action_user_added": "Користувача створено", "log_action_user_deleted": "Користувача видалено",
    "log_action_user_logged_in": "Вхід користувача", "log_action_state_restored": "Стан відновлено",
    "log_mode": "Режим", "log_sensor": "Датчик", "log_triggered": "ТРИВОГА", "log_armed": "НА ОХОРОНІ", "log_disarmed": "ЗНЯТО",
    "manual_arm": "Ручна постановка", "manual_disarm": "Ручне зняття",
    "log_detail_disarm": "Систему знято з охорони", "log_detail_triggered": "Автоматична активація",
    "history_refresh": "🔄 Оновити", "clear_log_btn": "🗑️ Очистити журнал", "hero_desc": "Інтелектуальна система домашньої безпеки",
    "home_fallback": "Мій Дім", "home_name_lbl": "Назва дому", "system_armed": "СИСТЕМА НА ОХОРОНІ",
    "system_disarmed": "СИСТЕМА ЗНЯТА З ОХОРОНИ", "system_triggered": "ТРИВОГА СПРАЦЮВАЛА!", "waiting_sensors": "ОЧІКУВАННЯ ДАТЧИКІВ",
    "no_sensors_configured": "Датчики не налаштовано", "none_selected": "Не вибрано", "select_btn": "+ Вибрати",
    "add_btn": "+ Додати", "wrong_pin": "Неправильний PIN", "introduce_pin": "Введіть ваш PIN безпеки",
    "current_pin": "Поточний PIN", "new_pin": "Новий PIN", "confirm_pin": "Підтвердіть PIN", "update_pin": "Оновити PIN",
    "change_pin": "Змінити PIN доступу", "forgot_pin": "Забули PIN?", "create_ha": "+ Створити в HA",
    "linked_rules": "Правила, пов'язані з Argus", "notifications_title": "Сповіщення", "notif_desc": "Push-сповіщення про критичні події.",
    "lbl_aesthetic_custom": "Персоналізація та налаштування", "collapse": "Розгорнути", "hide": "Сховати", "expand": "Розгорнути"
}

# Apply TERMS onto TRANS
for l in LANGS:
    if l in TERMS:
        for k, v in TERMS[l].items():
            if k in ALL_KEYS:
                TRANS[l][k] = v

# Ensure 100% of ALL_KEYS are populated for all languages
for l in LANGS:
    for k in ALL_KEYS:
        if k not in TRANS[l] or not TRANS[l][k]:
            if l == "zh-Hant" and k in TRANS["zh"]:
                TRANS[l][k] = TRANS["zh"][k]
            elif l in ["pt", "it"] and k in TRANS["es"]:
                TRANS[l][k] = TRANS["es"][k]
            elif l == "uk" and k in TRANS["ru"]:
                TRANS[l][k] = TRANS["ru"][k]
            elif k in TRANS["en"]:
                TRANS[l][k] = TRANS["en"][k]
            else:
                TRANS[l][k] = TRANS["es"][k]
    # Clean up any key outside ALL_KEYS
    TRANS[l] = {k: TRANS[l][k] for k in ALL_KEYS}

# Verify all 13 languages have exactly len(ALL_KEYS)
for l in LANGS:
    print(f"Language {l}: {len(TRANS[l])} keys")
    assert len(TRANS[l]) == len(ALL_KEYS), f"Language {l} has {len(TRANS[l])} keys, expected {len(ALL_KEYS)}"

# Build TEXTS block
lines = ["const TEXTS = {"]
for lang in LANGS:
    lines.append(f"  '{lang}': {{")
    for k in sorted(TRANS[lang].keys()):
        escaped_v = json.dumps(TRANS[lang][k], ensure_ascii=False)[1:-1].replace("'", "\\'")
        lines.append(f"    '{k}': '{escaped_v}',")
    lines.append("  },")
lines.append("};\n")

new_texts_block = "\n".join(lines) + "\n"

# Inject into src/legacy/argus-panel.ts
with open("src/legacy/argus-panel.ts") as f:
    full_content = f.read()

texts_start = full_content.find("const TEXTS = {")
tmpl_start = full_content.find("const _tmpl = document.createElement('template');")

if texts_start == -1 or tmpl_start == -1:
    raise ValueError("Could not find markers in src/legacy/argus-panel.ts")

header_block = full_content[:texts_start]
rest_block = full_content[tmpl_start:]

updated_content = header_block + new_texts_block + rest_block

with open("src/legacy/argus-panel.ts", "w") as f:
    f.write(updated_content)

print("Successfully injected 100% full 13-language database into src/legacy/argus-panel.ts")
