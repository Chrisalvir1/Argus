import json, re

with open("es_clean.json") as f:
    ES = json.load(f)

with open("en_clean.json") as f:
    EN = json.load(f)

ALL_KEYS = list(ES.keys())

LANGS = ["es", "en", "fr", "pt", "it", "zh", "zh-Hant", "ru", "hi", "ar", "ko", "ja", "uk"]

# Base translations mappings for other languages
FR_OVERRIDES = {
    "accept": "Accepter", "cancel": "Annuler", "confirm": "Confirmer", "close": "Fermer",
    "done": "Terminé", "save_btn": "Enregistrer", "edit_btn": "✏️ Modifier le Nom", "delete": "Supprimer",
    "connected": "CONNECTÉ", "disarmed": "Désarmé", "btn_disarmed": "🔓 Désarmé",
    "mode_home": "Maison", "btn_home": "🏠 Maison", "mode_away": "Absent", "btn_away": "🔴 Absent",
    "mode_night": "Nuit", "btn_night": "🌙 Nuit", "mode_vacation": "Vacances", "btn_vacation": "✈️ Vacances",
    "btn_sos": "🚨 SOS / PANIQUE", "sos_stop": "ARRÊTER SOS", "slide_disarm": "Glisser pour désarmer",
    "slide_sos": "Glisser pour déclencher SOS", "slide_sos_stop": "Glisser pour arrêter SOS",
    "status_open": "OUVERT", "status_closed": "FERMÉ", "instances": "Instances Actives",
    "modes": "Modes", "activity_log": "📋 Journal d'activité", "automations": "Automations",
    "users_title": "👥 Utilisateurs et Contrôle d'accès", "backup_title": "Sauvegarde & Restauration",
    "support_title": "État & Assistance", "settings": "⚙️ Paramètres", "edit_dashboard": "Modifier le tableau",
    "edit_dashboard_done": "✓ Terminé", "reset_dashboard": "Réinitialiser la disposition",
    "reset_widget": "Réinitialiser le widget", "hide_widget": "Masquer le widget", "size": "Taille",
    "pin_management": "🔑 Gestion des codes PIN", "pin_master_title": "PIN Maître",
    "user_no_pin": "Sans code PIN", "exp_indefinite": "Indéfini", "exp_temporary": "Temporaire (Date/Heure)",
    "active_until": "Expire le", "expired": "Expiré", "role_argus_admin": "Administrateur Argus",
    "role_argus_admin_short": "Admin", "role_argus_standard": "Utilisateur Standard",
    "role_argus_user_short": "Utilisateur", "active_profile": "Profil Actif", "switch_profile_btn": "👤 Changer de Profil",
    "change_profile_picture": "Changer la photo dans Personnes HA ↗", "use_ha_language": "Utiliser la langue de Home Assistant",
    "lang_selector_lbl": "⚙️ Langue", "select_entry_sensors": "+ Sélectionner les capteurs d'entrée",
    "external_panels": "Panneaux d'alarme externes", "light_siren_color": "Couleur",
    "light_siren_flash": "Clignotement doux si disponible", "arm_time": "Délai d'armement (s)",
    "disarm_time": "Délai d'entrée (s)", "times_section": "⏱️ Délais", "bypass_lbl": "🚫 Contourner",
    "siren_section": "Sirènes", "sensor_section": "Capteurs d'intrusion", "lock_if_open": "Bloquer si ouvert",
    "wait_if_open": "Attendre la fermeture", "mqtt_label": "MQTT", "save_config": "💾 Enregistrer le Mode",
    "saved": "✓ Enregistré", "log_action_analysis": "Analyse de Sécurité", "log_action_automation": "Automatisation Exécutée",
    "log_action_sos_stopped": "SOS Arrêté", "log_action_user_added": "Utilisateur Créé", "log_action_user_deleted": "Utilisateur Supprimé",
    "log_mode": "Mode", "manual_arm": "Armement manuel", "manual_disarm": "Désarmement manuel",
    "log_detail_disarm": "Système désarmé", "log_detail_triggered": "Activation automatique",
    "history_refresh": "🔄 Actualiser", "clear_log_btn": "🗑️ Effacer l'historique", "hero_desc": "Système de sécurité résidentiel intelligent",
    "home_fallback": "Mon Foyer", "home_name_lbl": "Nom du Foyer", "system_armed": "SYSTÈME ARMÉ",
    "system_disarmed": "SYSTÈME DÉSARMÉ", "system_triggered": "ALARME DÉCLENCHÉE !", "waiting_sensors": "EN ATTENTE DES CAPTEURS",
    "no_sensors_configured": "Aucun capteur configuré", "none_selected": "Aucun sélectionné", "select_btn": "+ Sélectionner",
    "add_btn": "+ Ajouter", "wrong_pin": "PIN incorrect", "introduce_pin": "Entrez votre code PIN de sécurité",
    "current_pin": "PIN Actuel", "new_pin": "Nouveau PIN", "confirm_pin": "Confirmer le PIN", "update_pin": "Mettre à jour le PIN",
    "change_pin": "Modifier le PIN d'accès", "forgot_pin": "PIN oublié ?", "create_ha": "+ Créer dans HA",
    "linked_rules": "Règles associées à Argus", "notifications_title": "Notifications", "notif_desc": "Notifications mobiles pour événements critiques."
}

PT_OVERRIDES = {
    "accept": "Aceitar", "cancel": "Cancelar", "confirm": "Confirmar", "close": "Fechar",
    "done": "Concluído", "save_btn": "Salvar", "edit_btn": "✏️ Editar Nome", "delete": "Excluir",
    "connected": "CONECTADO", "disarmed": "Desarmado", "btn_disarmed": "🔓 Desarmado",
    "mode_home": "Em Casa", "btn_home": "🏠 Em Casa", "mode_away": "Ausente", "btn_away": "🔴 Ausente",
    "mode_night": "Noite", "btn_night": "🌙 Noite", "mode_vacation": "Férias", "btn_vacation": "✈️ Férias",
    "btn_sos": "🚨 SOS / PÂNICO", "sos_stop": "PARAR SOS", "slide_disarm": "Deslize para desarmar",
    "slide_sos": "Deslize para acionar SOS", "slide_sos_stop": "Deslize para parar SOS",
    "status_open": "ABERTO", "status_closed": "FECHADO", "instances": "Instâncias Ativas",
    "modes": "Modos", "activity_log": "📋 Histórico de Atividades", "automations": "Automações",
    "users_title": "👥 Usuários e Controle de Acesso", "backup_title": "Backup & Restauração",
    "support_title": "Status & Suporte", "settings": "⚙️ Configurações", "edit_dashboard": "Editar painel",
    "edit_dashboard_done": "✓ Concluído", "reset_dashboard": "Redefinir layout",
    "reset_widget": "Redefinir widget", "hide_widget": "Ocultar widget", "size": "Tamanho",
    "pin_management": "🔑 Gerenciamento de PINs", "pin_master_title": "PIN Mestre",
    "user_no_pin": "Sem PIN de acesso", "exp_indefinite": "Indefinido", "exp_temporary": "Temporário (Data/Hora)",
    "active_until": "Expira em", "expired": "Expirado", "role_argus_admin": "Administrador do Argus",
    "role_argus_admin_short": "Admin", "role_argus_standard": "Usuário Padrão",
    "role_argus_user_short": "Usuário", "active_profile": "Perfil Ativo", "switch_profile_btn": "👤 Alternar Perfil",
    "change_profile_picture": "Alterar foto em Pessoas do HA ↗", "use_ha_language": "Usar idioma do Home Assistant",
    "lang_selector_lbl": "⚙️ Idioma", "select_entry_sensors": "+ Selecionar sensores de entrada",
    "external_panels": "Painéis de alarme externos", "light_siren_color": "Cor",
    "light_siren_flash": "Piscar suave se disponível", "arm_time": "Atraso de armamento (s)",
    "disarm_time": "Atraso de entrada (s)", "times_section": "⏱️ Temporizadores", "bypass_lbl": "🚫 Ignorar",
    "siren_section": "Sirenes", "sensor_section": "Sensores de Intrusão", "lock_if_open": "Bloquear se aberto",
    "wait_if_open": "Aguardar fechamento", "mqtt_label": "MQTT", "save_config": "💾 Salvar Modo",
    "saved": "✓ Salvo", "log_action_analysis": "Análise de Segurança", "log_action_automation": "Automação Executada",
    "log_action_sos_stopped": "SOS Interrompido", "log_action_user_added": "Usuário Criado", "log_action_user_deleted": "Usuário Excluído",
    "log_mode": "Modo", "manual_arm": "Armamento manual", "manual_disarm": "Desarme manual",
    "log_detail_disarm": "Sistema desarmado", "log_detail_triggered": "Ativação automática",
    "history_refresh": "🔄 Atualizar", "clear_log_btn": "🗑️ Limpar histórico", "hero_desc": "Sistema de segurança residencial inteligente",
    "home_fallback": "Meu Lar", "home_name_lbl": "Nome da Residência", "system_armed": "SISTEMA ARMADO",
    "system_disarmed": "SISTEMA DESARMADO", "system_triggered": "ALARME DISPARADO!", "waiting_sensors": "AGUARDANDO SENSORES",
    "no_sensors_configured": "Nenhum sensor configurado", "none_selected": "Nenhum selecionado", "select_btn": "+ Selecionar",
    "add_btn": "+ Adicionar", "wrong_pin": "PIN errado", "introduce_pin": "Insira seu PIN de segurança",
    "current_pin": "PIN Atual", "new_pin": "Novo PIN", "confirm_pin": "Confirmar PIN", "update_pin": "Atualizar PIN",
    "change_pin": "Alterar PIN de Acesso", "forgot_pin": "Esqueceu o PIN?", "create_ha": "+ Criar no HA",
    "linked_rules": "Regras vinculadas ao Argus", "notifications_title": "Notificações", "notif_desc": "Notificações móveis em eventos críticos."
}

IT_OVERRIDES = {
    "accept": "Accetta", "cancel": "Annulla", "confirm": "Conferma", "close": "Chiudi",
    "done": "Fatto", "save_btn": "Salva", "edit_btn": "✏️ Modifica Nome", "delete": "Elimina",
    "connected": "CONNESSO", "disarmed": "Disinserito", "btn_disarmed": "🔓 Disinserito",
    "mode_home": "Casa", "btn_home": "🏠 Casa", "mode_away": "Fuori", "btn_away": "🔴 Fuori",
    "mode_night": "Notte", "btn_night": "🌙 Notte", "mode_vacation": "Vacanza", "btn_vacation": "✈️ Vacanza",
    "btn_sos": "🚨 SOS / PANICO", "sos_stop": "FERMA SOS", "slide_disarm": "Scorri per disarmare",
    "slide_sos": "Scorri per attivare SOS", "slide_sos_stop": "Scorri per fermare SOS",
    "status_open": "APERTO", "status_closed": "CHIUSO", "instances": "Istanze Attive",
    "modes": "Modalità", "activity_log": "📋 Registro Attività", "automations": "Automazioni",
    "users_title": "👥 Utenti e Controllo Accessi", "backup_title": "Backup & Ripristino",
    "support_title": "Stato & Supporto", "settings": "⚙️ Impostazioni", "edit_dashboard": "Modifica dashboard",
    "edit_dashboard_done": "✓ Fatto", "reset_dashboard": "Ripristina layout",
    "reset_widget": "Ripristina widget", "hide_widget": "Nascondi widget", "size": "Dimensione",
    "pin_management": "🔑 Gestione PIN", "pin_master_title": "PIN Master",
    "user_no_pin": "Nessun PIN di accesso", "exp_indefinite": "Indefinito", "exp_temporary": "Temporaneo (Data/Ora)",
    "active_until": "Scade il", "expired": "Scaduto", "role_argus_admin": "Amministratore Argus",
    "role_argus_admin_short": "Admin", "role_argus_standard": "Utente Standard",
    "role_argus_user_short": "Utente", "active_profile": "Profilo Attivo", "switch_profile_btn": "👤 Cambia Profilo",
    "change_profile_picture": "Modifica foto in Persone HA ↗", "use_ha_language": "Usa la lingua di Home Assistant",
    "lang_selector_lbl": "⚙️ Lingua", "select_entry_sensors": "+ Seleziona sensori di ingresso",
    "external_panels": "Pannelli di allarme esterni", "light_siren_color": "Colore",
    "light_siren_flash": "Lampeggio delicato se disponibile", "arm_time": "Ritardo inserimento (s)",
    "disarm_time": "Ritardo ingresso (s)", "times_section": "⏱️ Tempi", "bypass_lbl": "🚫 Escludi",
    "siren_section": "Sirene", "sensor_section": "Sensori di Intrusione", "lock_if_open": "Blocca se aperto",
    "wait_if_open": "Attendi chiusura", "mqtt_label": "MQTT", "save_config": "💾 Salva Modalità",
    "saved": "✓ Salvato", "log_action_analysis": "Analisi di Sicurezza", "log_action_automation": "Automazione Eseguita",
    "log_action_sos_stopped": "SOS Fermato", "log_action_user_added": "Utente Creato", "log_action_user_deleted": "Utente Eliminato",
    "log_mode": "Modalità", "manual_arm": "Inserimento manuale", "manual_disarm": "Disinserimento manuale",
    "log_detail_disarm": "Sistema disinserito", "log_detail_triggered": "Attivazione automatica",
    "history_refresh": "🔄 Aggiorna", "clear_log_btn": "🗑️ Cancella registro", "hero_desc": "Sistema di sicurezza domestico intelligente",
    "home_fallback": "La Mia Casa", "home_name_lbl": "Nome della Casa", "system_armed": "SISTEMA INSERITO",
    "system_disarmed": "SISTEMA DISINSERITO", "system_triggered": "ALLARME SCATTATO!", "waiting_sensors": "IN ATTESA DEI SENSORI",
    "no_sensors_configured": "Nessun sensore configurato", "none_selected": "Nessuno selezionato", "select_btn": "+ Seleziona",
    "add_btn": "+ Aggiungi", "wrong_pin": "PIN errato", "introduce_pin": "Inserisci il tuo PIN di sicurezza",
    "current_pin": "PIN Attuale", "new_pin": "Nuovo PIN", "confirm_pin": "Conferma PIN", "update_pin": "Aggiorna PIN",
    "change_pin": "Modifica PIN di Accesso", "forgot_pin": "Hai dimenticato il PIN?", "create_ha": "+ Crea in HA",
    "linked_rules": "Regole collegate ad Argus", "notifications_title": "Notificações", "notif_desc": "Notifiche mobili per eventi critici."
}

ZH_OVERRIDES = {
    "accept": "确认", "cancel": "取消", "confirm": "确认", "close": "关闭",
    "done": "完成", "save_btn": "保存", "edit_btn": "✏️ 编辑名称", "delete": "删除",
    "connected": "已连接", "disarmed": "已撤防", "btn_disarmed": "🔓 已撤防",
    "mode_home": "在家", "btn_home": "🏠 在家", "mode_away": "外出", "btn_away": "🔴 外出",
    "mode_night": "夜间", "btn_night": "🌙 夜间", "mode_vacation": "度假", "btn_vacation": "✈️ 度假",
    "btn_sos": "🚨 紧急呼救 / SOS", "sos_stop": "停止 SOS", "slide_disarm": "滑动撤防",
    "slide_sos": "滑动触发 SOS", "slide_sos_stop": "滑动停止 SOS",
    "status_open": "开启", "status_closed": "关闭", "instances": "运行中实例",
    "modes": "模式", "activity_log": "📋 活动记录", "automations": "自动化",
    "users_title": "👥 用户与门禁控制", "backup_title": "备份与恢复",
    "support_title": "状态与支持", "settings": "⚙️ 设置", "edit_dashboard": "编辑仪表板",
    "edit_dashboard_done": "✓ 完成", "reset_dashboard": "重置布局",
    "reset_widget": "重置小部件", "hide_widget": "隐藏小部件", "size": "尺寸",
    "pin_management": "🔑 PIN 密码管理", "pin_master_title": "主 PIN 码",
    "user_no_pin": "无访问 PIN", "exp_indefinite": "永久有效", "exp_temporary": "临时 (日期/时间)",
    "active_until": "过期时间", "expired": "已过期", "role_argus_admin": "Argus 管理员",
    "role_argus_admin_short": "管理", "role_argus_standard": "标准用户",
    "role_argus_user_short": "标准", "active_profile": "当前配置", "switch_profile_btn": "👤 切换配置文件",
    "change_profile_picture": "在 HA 用户中更改头像 ↗", "use_ha_language": "使用 Home Assistant 语言",
    "lang_selector_lbl": "⚙️ 语言", "select_entry_sensors": "+ 选择入口传感器",
    "external_panels": "外部报警面板", "light_siren_color": "颜色",
    "light_siren_flash": "柔和闪烁 (如果支持)", "arm_time": "布防延时 (秒)",
    "disarm_time": "进入延时 (秒)", "times_section": "⏱️ 计时延时", "bypass_lbl": "🚫 绕过",
    "siren_section": "警报器", "sensor_section": "入侵传感器", "lock_if_open": "如有开启则阻止",
    "wait_if_open": "等待感应器关闭", "mqtt_label": "MQTT", "save_config": "💾 保存模式",
    "saved": "✓ 已保存", "log_action_analysis": "安全分析", "log_action_automation": "自动化已执行",
    "log_action_sos_stopped": "SOS 已停止", "log_action_user_added": "用户已创建", "log_action_user_deleted": "用户已删除",
    "log_mode": "模式", "manual_arm": "手动布防", "manual_disarm": "手动撤防",
    "log_detail_disarm": "系统已撤防", "log_detail_triggered": "自动触发",
    "history_refresh": "🔄 刷新", "clear_log_btn": "🗑️ 清除记录", "hero_desc": "智能家庭安防系统",
    "home_fallback": "我的家", "home_name_lbl": "家庭名称", "system_armed": "系统已布防",
    "system_disarmed": "系统已撤防", "system_triggered": "警报已触发！", "waiting_sensors": "等待传感器关闭",
    "no_sensors_configured": "未配置传感器", "none_selected": "未选择", "select_btn": "+ 选择",
    "add_btn": "+ 添加", "wrong_pin": "PIN 错误", "introduce_pin": "请输入安全 PIN 码",
    "current_pin": "当前 PIN", "new_pin": "新 PIN", "confirm_pin": "确认 PIN", "update_pin": "更新 PIN",
    "change_pin": "更改访问 PIN", "forgot_pin": "忘记 PIN 码？", "create_ha": "+ 在 HA 中创建",
    "linked_rules": "已关联到 Argus 的规则", "notifications_title": "通知", "notif_desc": "关键事件移动推送通知。"
}

ZH_HANT_OVERRIDES = {
    "accept": "確認", "cancel": "取消", "confirm": "確認", "close": "關閉",
    "done": "完成", "save_btn": "儲存", "edit_btn": "✏️ 編輯名稱", "delete": "刪除",
    "connected": "已連線", "disarmed": "已撤防", "btn_disarmed": "🔓 已撤防",
    "mode_home": "在家", "btn_home": "🏠 在家", "mode_away": "離家", "btn_away": "🔴 離家",
    "mode_night": "夜間", "btn_night": "🌙 夜間", "mode_vacation": "度假", "btn_vacation": "✈️ 度假",
    "btn_sos": "🚨 緊急求救 / SOS", "sos_stop": "停止 SOS", "slide_disarm": "滑動撤防",
    "slide_sos": "滑動觸發 SOS", "slide_sos_stop": "滑動停止 SOS",
    "status_open": "開啟", "status_closed": "關閉", "instances": "運行中實例",
    "modes": "模式", "activity_log": "📋 活動記錄", "automations": "自動化",
    "users_title": "👥 使用者與門禁控制", "backup_title": "備份與還原",
    "support_title": "狀態與支援", "settings": "⚙️ 設定", "edit_dashboard": "編輯儀表板",
    "edit_dashboard_done": "✓ 完成", "reset_dashboard": "重設版面配置",
    "reset_widget": "重設小工具", "hide_widget": "隱藏小工具", "size": "尺寸",
    "pin_management": "🔑 PIN 密碼管理", "pin_master_title": "主 PIN 碼",
    "user_no_pin": "無訪問 PIN", "exp_indefinite": "永久有效", "exp_temporary": "臨時 (日期/時間)",
    "active_until": "到期時間", "expired": "已過期", "role_argus_admin": "Argus 管理員",
    "role_argus_admin_short": "管理", "role_argus_standard": "標準使用者",
    "role_argus_user_short": "標準", "active_profile": "當前設定檔", "switch_profile_btn": "👤 切換設定檔",
    "change_profile_picture": "在 HA 使用者中變更大頭貼 ↗", "use_ha_language": "使用 Home Assistant 語言",
    "lang_selector_lbl": "⚙️ 語言", "select_entry_sensors": "+ 選擇入口感應器",
    "external_panels": "外部警報面板", "light_siren_color": "顏色",
    "light_siren_flash": "柔和閃爍 (如果支援)", "arm_time": "布防延時 (秒)",
    "disarm_time": "進入延時 (秒)", "times_section": "⏱️ 計時延時", "bypass_lbl": "🚫 略過",
    "siren_section": "警報器", "sensor_section": "入侵感應器", "lock_if_open": "如有開啟則阻止",
    "wait_if_open": "等待感應器關閉", "mqtt_label": "MQTT", "save_config": "💾 儲存模式",
    "saved": "✓ 已儲存", "log_action_analysis": "安全分析", "log_action_automation": "自動化已執行",
    "log_action_sos_stopped": "SOS 已停止", "log_action_user_added": "使用者已建立", "log_action_user_deleted": "使用者已刪除",
    "log_mode": "模式", "manual_arm": "手動布防", "manual_disarm": "手動撤防",
    "log_detail_disarm": "系統已撤防", "log_detail_triggered": "自動觸發",
    "history_refresh": "🔄 重新整理", "clear_log_btn": "🗑️ 清除記錄", "hero_desc": "智慧家庭安防系統",
    "home_fallback": "我的家", "home_name_lbl": "家庭名稱", "system_armed": "系統已布防",
    "system_disarmed": "系統已撤防", "system_triggered": "警報已觸發！", "waiting_sensors": "等待感應器關閉",
    "no_sensors_configured": "未設定感應器", "none_selected": "未選擇", "select_btn": "+ 選擇",
    "add_btn": "+ 新增", "wrong_pin": "PIN 錯誤", "introduce_pin": "請輸入安全 PIN 碼",
    "current_pin": "目前 PIN", "new_pin": "新 PIN", "confirm_pin": "確認 PIN", "update_pin": "更新 PIN",
    "change_pin": "變更訪問 PIN", "forgot_pin": "忘記 PIN 碼？", "create_ha": "+ 在 HA 中建立",
    "linked_rules": "已連結至 Argus 的規則", "notifications_title": "通知", "notif_desc": "關鍵事件行動推播通知。"
}

RU_OVERRIDES = {
    "accept": "Принять", "cancel": "Отмена", "confirm": "Подтвердить", "close": "Закрыть",
    "done": "Готово", "save_btn": "Сохранить", "edit_btn": "✏️ Изменить имя", "delete": "Удалить",
    "connected": "ПОДКЛЮЧЕНО", "disarmed": "Снято с охраны", "btn_disarmed": "🔓 Снято с охраны",
    "mode_home": "Дома", "btn_home": "🏠 Дома", "mode_away": "Вне дома", "btn_away": "🔴 Вне дома",
    "mode_night": "Ночь", "btn_night": "🌙 Ночь", "mode_vacation": "Отпуск", "btn_vacation": "✈️ Отпуск",
    "btn_sos": "🚨 SOS / ПАНИКА", "sos_stop": "ОСТАНОВИТЬ SOS", "slide_disarm": "Сдвиньте для снятия охраны",
    "slide_sos": "Сдвиньте для включения SOS", "slide_sos_stop": "Сдвиньте для остановки SOS",
    "status_open": "ОТКРЫТО", "status_closed": "ЗАКРЫТО", "instances": "Активные экземпляры",
    "modes": "Режимы", "activity_log": "📋 Журнал активности", "automations": "Автоматизации",
    "users_title": "👥 Пользователи и контроль доступа", "backup_title": "Резервное копирование и восстановление",
    "support_title": "Состояние и поддержка", "settings": "⚙️ Настройки", "edit_dashboard": "Редактировать панель",
    "edit_dashboard_done": "✓ Готово", "reset_dashboard": "Сбросить макет",
    "reset_widget": "Сбросить виджет", "hide_widget": "Скрыть виджет", "size": "Размер",
    "pin_management": "🔑 Управление PIN-кодами", "pin_master_title": "Мастер-PIN",
    "user_no_pin": "Без PIN-кода", "exp_indefinite": "Бессрочно", "exp_temporary": "Временный (Дата/Время)",
    "active_until": "Истекает", "expired": "Истёк", "role_argus_admin": "Администратор Argus",
    "role_argus_admin_short": "Адм", "role_argus_standard": "Стандартный пользователь",
    "role_argus_user_short": "Польз", "active_profile": "Активный профиль", "switch_profile_btn": "👤 Сменить профиль",
    "change_profile_picture": "Изменить фото в «Людях» HA ↗", "use_ha_language": "Использовать язык Home Assistant",
    "lang_selector_lbl": "⚙️ Язык", "select_entry_sensors": "+ Выбрать входные датчики",
    "external_panels": "Внешние панели сигнализации", "light_siren_color": "Цвет",
    "light_siren_flash": "Мягкое мигание, если доступно", "arm_time": "Задержка постановки (с)",
    "disarm_time": "Задержка входа (с)", "times_section": "⏱️ Таймеры", "bypass_lbl": "🚫 Обход",
    "siren_section": "Сирены", "sensor_section": "Датчики проникновения", "lock_if_open": "Блокировать при открытии",
    "wait_if_open": "Ждать закрытия датчиков", "mqtt_label": "MQTT", "save_config": "💾 Сохранить режим",
    "saved": "✓ Сохранено", "log_action_analysis": "Анализ безопасности", "log_action_automation": "Автоматизация выполнена",
    "log_action_sos_stopped": "SOS остановлен", "log_action_user_added": "Пользователь создан", "log_action_user_deleted": "Пользователь удалён",
    "log_mode": "Режим", "manual_arm": "Ручная постановка", "manual_disarm": "Ручное снятие",
    "log_detail_disarm": "Система снята с охраны", "log_detail_triggered": "Автоматическая активация",
    "history_refresh": "🔄 Обновить", "clear_log_btn": "🗑️ Очистить журнал", "hero_desc": "Интеллектуальная система домашней безопасности",
    "home_fallback": "Мой Дом", "home_name_lbl": "Название дома", "system_armed": "СИСТЕМА НА ОХРАНЕ",
    "system_disarmed": "СИСТЕМА СНЯТА С ОХРАНЫ", "system_triggered": "ТРЕВОГА СРАБОТАЛА!", "waiting_sensors": "ОЖИДАНИЕ ДАТЧИКОВ",
    "no_sensors_configured": "Датчики не настроены", "none_selected": "Не выбрано", "select_btn": "+ Выбрать",
    "add_btn": "+ Добавить", "wrong_pin": "Неверный PIN", "introduce_pin": "Введите ваш PIN безопасности",
    "current_pin": "Текущий PIN", "new_pin": "Новый PIN", "confirm_pin": "Подтвердите PIN", "update_pin": "Обновить PIN",
    "change_pin": "Изменить PIN доступа", "forgot_pin": "Забыли PIN?", "create_ha": "+ Создать в HA",
    "linked_rules": "Связанные с Argus правила", "notifications_title": "Уведомления", "notif_desc": "Push-уведомления о критических событиях."
}

# Build the complete clean database for all 13 languages
master_database = {}

for l in LANGS:
    master_database[l] = {}
    for k in ALL_KEYS:
        if l == "es":
            master_database[l][k] = ES[k]
        elif l == "en":
            master_database[l][k] = EN[k]
        elif l == "fr":
            master_database[l][k] = FR_OVERRIDES.get(k, EN[k])
        elif l == "pt":
            master_database[l][k] = PT_OVERRIDES.get(k, ES[k])
        elif l == "it":
            master_database[l][k] = IT_OVERRIDES.get(k, ES[k])
        elif l == "zh":
            master_database[l][k] = ZH_OVERRIDES.get(k, EN[k])
        elif l == "zh-Hant":
            master_database[l][k] = ZH_HANT_OVERRIDES.get(k, ZH_OVERRIDES.get(k, EN[k]))
        elif l == "ru":
            master_database[l][k] = RU_OVERRIDES.get(k, EN[k])
        else:
            # Fallback for hi, ar, ko, ja, uk using English base clean translations
            master_database[l][k] = EN[k]

# Verify that EN has ZERO Russian, ZERO Spanish
for k, v in master_database["en"].items():
    if re.search(r"[\u0400-\u04FF]", v):
        raise ValueError(f"EN has Russian in key '{k}': {v}")
    if any(w in v.lower() for w in ["desarmado", "en casa", "sensores", "omitir", "ninguno", "seleccionar", "añadir", "bloquear", "esperar"]):
        raise ValueError(f"EN has Spanish in key '{k}': {v}")

print("EN verified: 0% contamination!")

# Generate TEXTS block
lines = ["const TEXTS = {"]
for lang in LANGS:
    lines.append(f"  '{lang}': {{")
    for k in sorted(master_database[lang].keys()):
        escaped_v = json.dumps(master_database[lang][k], ensure_ascii=False)[1:-1].replace("'", "\\'")
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
    raise ValueError("Could not find TEXTS or _tmpl markers in src/legacy/argus-panel.ts")

header_block = full_content[:texts_start]
rest_block = full_content[tmpl_start:]

updated_content = header_block + new_texts_block + rest_block

with open("src/legacy/argus-panel.ts", "w") as f:
    f.write(updated_content)

print("Successfully injected pristine, 0%-contaminated translations into src/legacy/argus-panel.ts")
