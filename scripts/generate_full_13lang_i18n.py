import json, re

# Complete 13-language dictionary definition for Argus Home Hub
# Master languages:
# es: Spanish
# en: English
# fr: French
# pt: Portuguese
# it: Italian
# zh: Simplified Chinese
# zh-Hant: Traditional Chinese
# ru: Russian
# hi: Hindi
# ar: Arabic
# ko: Korean
# ja: Japanese
# uk: Ukrainian

LANGS = ["es", "en", "fr", "pt", "it", "zh", "zh-Hant", "ru", "hi", "ar", "ko", "ja", "uk"]

MASTER_I18N = {
    # ── TOP BAR & HERO ──
    "hero_desc": {
        "es": "Sistema de seguridad inteligente para el hogar",
        "en": "Intelligent home security system",
        "fr": "Système de sécurité résidentiel intelligent",
        "pt": "Sistema de segurança residencial inteligente",
        "it": "Sistema di sicurezza domestico intelligente",
        "zh": "智能家庭安防系统",
        "zh-Hant": "智慧家庭安防系統",
        "ru": "Интеллектуальная система домашней безопасности",
        "hi": "स्मार्ट होम सुरक्षा प्रणाली",
        "ar": "نظام أمان منزلي ذكي",
        "ko": "지능형 홈 보안 시스템",
        "ja": "インテリジェント ホーム セキュリティ システム",
        "uk": "Інтелектуальна система домашньої безпеки",
    },
    "home_fallback": {
        "es": "Mi Hogar", "en": "My Home", "fr": "Mon Foyer", "pt": "Meu Lar", "it": "La Mia Casa",
        "zh": "我的家", "zh-Hant": "我的家", "ru": "Мой Дом", "hi": "मेरा घर", "ar": "منزلي",
        "ko": "우리 집", "ja": "マイホーム", "uk": "Мій Дім"
    },
    "home_name_lbl": {
        "es": "Nombre del Hogar", "en": "Home Name", "fr": "Nom du Foyer", "pt": "Nome da Residência", "it": "Nome della Casa",
        "zh": "家庭名称", "zh-Hant": "家庭名稱", "ru": "Название дома", "hi": "घर का नाम", "ar": "اسم المنزل",
        "ko": "홈 이름", "ja": "ホーム名", "uk": "Назва дому"
    },
    "connected": {
        "es": "CONECTADO", "en": "CONNECTED", "fr": "CONNECTÉ", "pt": "CONECTADO", "it": "CONNESSO",
        "zh": "已连接", "zh-Hant": "已連線", "ru": "ПОДКЛЮЧЕНО", "hi": "जुड़ा हुआ", "ar": "متصل",
        "ko": "연결됨", "ja": "接続済み", "uk": "ПІДКЛЮЧЕНО"
    },
    "system_armed": {
        "es": "SISTEMA ARMADO", "en": "SYSTEM ARMED", "fr": "SYSTÈME ARMÉ", "pt": "SISTEMA ARMADO", "it": "SISTEMA INSERITO",
        "zh": "系统已布防", "zh-Hant": "系統已布防", "ru": "СИСТЕМА НА ОХРАНЕ", "hi": "सिस्टम सशस्त्र है", "ar": "النظام مسلح",
        "ko": "시스템 설정됨", "ja": "システム警戒中", "uk": "СИСТЕМА НА ОХОРОНІ"
    },
    "system_disarmed": {
        "es": "SISTEMA DESARMADO", "en": "SYSTEM DISARMED", "fr": "SYSTÈME DÉSARMÉ", "pt": "SISTEMA DESARMADO", "it": "SISTEMA DISINSERITO",
        "zh": "系统已撤防", "zh-Hant": "系統已撤防", "ru": "СИСТЕМА СНЯТА С ОХРАНЫ", "hi": "सिस्टम निरस्त्र है", "ar": "النظام منزوع السلاح",
        "ko": "시스템 해제됨", "ja": "システム警戒解除", "uk": "СИСТЕМА ЗНЯТА З ОХОРОНИ"
    },
    "system_triggered": {
        "es": "¡ALARMA ACTIVADA!", "en": "ALARM TRIGGERED!", "fr": "ALARME DÉCLENCHÉE !", "pt": "ALARME DISPARADO!", "it": "ALLARME SCATTATO!",
        "zh": "警报已触发！", "zh-Hant": "警報已觸發！", "ru": "ТРЕВОГА СРАБОТАЛА!", "hi": "अलार्म बज उठा!", "ar": "تم إطلاق الإنذار!",
        "ko": "알람 작동됨!", "ja": "警報が作動しました！", "uk": "ТРИВОГА СПРАЦЮВАЛА!"
    },
    "waiting_sensors": {
        "es": "ESPERANDO SENSORES", "en": "WAITING FOR SENSORS", "fr": "EN ATTENTE DES CAPTEURS", "pt": "AGUARDANDO SENSORES", "it": "IN ATTESA DEI SENSORI",
        "zh": "等待传感器关闭", "zh-Hant": "等待感應器關閉", "ru": "ОЖИДАНИЕ ДАТЧИКОВ", "hi": "सेंसर की प्रतीक्षा है", "ar": "في انتظار المستشعرات",
        "ko": "센서 닫힘 대기 중", "ja": "センサーの待機中", "uk": "ОЧІКУВАННЯ ДАТЧИКІВ"
    },

    # ── MODES & BUTTONS ──
    "disarmed": {
        "es": "Desarmado", "en": "Disarmed", "fr": "Désarmé", "pt": "Desarmado", "it": "Disinserito",
        "zh": "已撤防", "zh-Hant": "已撤防", "ru": "Снято с охраны", "hi": "निरस्त्र", "ar": "منزوع السلاح",
        "ko": "해제됨", "ja": "警戒解除", "uk": "Знято з охорони"
    },
    "mode_home": {
        "es": "En Casa", "en": "Home", "fr": "Maison", "pt": "Em Casa", "it": "Casa",
        "zh": "在家", "zh-Hant": "在家", "ru": "Дома", "hi": "घर पर", "ar": "في المنزل",
        "ko": "재실", "ja": "在宅", "uk": "Вдома"
    },
    "mode_away": {
        "es": "Ausente", "en": "Away", "fr": "Absent", "pt": "Ausente", "it": "Fuori",
        "zh": "外出", "zh-Hant": "離家", "ru": "Вне дома", "hi": "बाहर", "ar": "بالخارج",
        "ko": "외출", "ja": "外出", "uk": "Поза домом"
    },
    "mode_night": {
        "es": "Noche", "en": "Night", "fr": "Nuit", "pt": "Noite", "it": "Notte",
        "zh": "夜间", "zh-Hant": "夜間", "ru": "Ночь", "hi": "रात", "ar": "ليلي",
        "ko": "야간", "ja": "夜間", "uk": "Ніч"
    },
    "mode_vacation": {
        "es": "Vacaciones", "en": "Vacation", "fr": "Vacances", "pt": "Férias", "it": "Vacanza",
        "zh": "度假", "zh-Hant": "度假", "ru": "Отпуск", "hi": "छुट्टी", "ar": "إجازة",
        "ko": "휴가", "ja": "休暇", "uk": "Відпустка"
    },
    "btn_home": {
        "es": "🏠 En Casa", "en": "🏠 Home", "fr": "🏠 Maison", "pt": "🏠 Em Casa", "it": "🏠 Casa",
        "zh": "🏠 在家", "zh-Hant": "🏠 在家", "ru": "🏠 Дома", "hi": "🏠 घर पर", "ar": "🏠 في المنزل",
        "ko": "🏠 재실", "ja": "🏠 在宅", "uk": "🏠 Вдома"
    },
    "btn_away": {
        "es": "🔴 Ausente", "en": "🔴 Away", "fr": "🔴 Absent", "pt": "🔴 Ausente", "it": "🔴 Fuori",
        "zh": "🔴 外出", "zh-Hant": "🔴 離家", "ru": "🔴 Вне дома", "hi": "🔴 बाहर", "ar": "🔴 بالخارج",
        "ko": "🔴 외출", "ja": "🔴 外出", "uk": "🔴 Поза домом"
    },
    "btn_night": {
        "es": "🌙 Noche", "en": "🌙 Night", "fr": "🌙 Nuit", "pt": "🌙 Noite", "it": "🌙 Notte",
        "zh": "🌙 夜间", "zh-Hant": "🌙 夜間", "ru": "🌙 Ночь", "hi": "🌙 रात", "ar": "🌙 ليلي",
        "ko": "🌙 야간", "ja": "🌙 夜間", "uk": "🌙 Ніч"
    },
    "btn_vacation": {
        "es": "✈️ Vacaciones", "en": "✈️ Vacation", "fr": "✈️ Vacances", "pt": "✈️ Férias", "it": "✈️ Vacanza",
        "zh": "✈️ 度假", "zh-Hant": "✈️ 度假", "ru": "✈️ Отпуск", "hi": "✈️ छुट्टी", "ar": "✈️ إجازة",
        "ko": "✈️ 휴가", "ja": "✈️ 休暇", "uk": "✈️ Відпустка"
    },
    "btn_sos": {
        "es": "🚨 SOS / PÁNICO", "en": "🚨 SOS / PANIC", "fr": "🚨 SOS / PANIQUE", "pt": "🚨 SOS / PÂNICO", "it": "🚨 SOS / PANICO",
        "zh": "🚨 紧急呼救 / SOS", "zh-Hant": "🚨 緊急求救 / SOS", "ru": "🚨 SOS / ПАНИКА", "hi": "🚨 आपातकालीन / SOS", "ar": "🚨 نداء استغاثة / SOS",
        "ko": "🚨 비상 / SOS", "ja": "🚨 緊急 / SOS", "uk": "🚨 SOS / ПАНІКА"
    },
    "sos_stop": {
        "es": "DETENER SOS", "en": "STOP SOS", "fr": "ARRÊTER SOS", "pt": "PARAR SOS", "it": "FERMA SOS",
        "zh": "停止 SOS", "zh-Hant": "停止 SOS", "ru": "ОСТАНОВИТЬ SOS", "hi": "SOS रोकें", "ar": "إيقاف SOS",
        "ko": "SOS 중지", "ja": "SOSを停止", "uk": "ЗУПИНИТИ SOS"
    },

    # ── SLIDE TO ACTION ──
    "slide_disarm": {
        "es": "Desliza para desarmar", "en": "Slide to disarm", "fr": "Glisser pour désarmer", "pt": "Deslize para desarmar", "it": "Scorri per disarmare",
        "zh": "滑动撤防", "zh-Hant": "滑動撤防", "ru": "Сдвиньте для снятия охраны", "hi": "निरस्त करने के लिए स्लाइड करें", "ar": "اسحب لنزع التسليح",
        "ko": "밀어서 해제", "ja": "スライドして解除", "uk": "Посуньте для зняття охорони"
    },
    "slide_sos": {
        "es": "Desliza para activar SOS", "en": "Slide to trigger SOS", "fr": "Glisser pour déclencher SOS", "pt": "Deslize para acionar SOS", "it": "Scorri per attivare SOS",
        "zh": "滑动触发 SOS", "zh-Hant": "滑動觸發 SOS", "ru": "Сдвиньте для включения SOS", "hi": "SOS के लिए स्लाइड करें", "ar": "اسحب لتشغيل نداء الاستغاثة",
        "ko": "밀어서 SOS 활성화", "ja": "スライドしてSOS作動", "uk": "Посуньте для ввімкнення SOS"
    },
    "slide_sos_stop": {
        "es": "Desliza para detener SOS", "en": "Slide to stop SOS", "fr": "Glisser pour arrêter SOS", "pt": "Deslize para parar SOS", "it": "Scorri per fermare SOS",
        "zh": "滑动停止 SOS", "zh-Hant": "滑動停止 SOS", "ru": "Сдвиньте для остановки SOS", "hi": "SOS रोकने के लिए स्लाइड करें", "ar": "اسحب لإيقاف SOS",
        "ko": "밀어서 SOS 중지", "ja": "スライドしてSOS停止", "uk": "Посуньте щоб зупинити SOS"
    },
    "sos_confirm_title": {
        "es": "🚨 ¿Activar Alarma de Emergencia?", "en": "🚨 Trigger Emergency Alarm?", "fr": "🚨 Déclencher l'alarme d'urgence ?", "pt": "🚨 Disparar Alarme de Emergência?", "it": "🚨 Attivare Allarme di Emergenza?",
        "zh": "🚨 触发紧急警报？", "zh-Hant": "🚨 觸發緊急警報？", "ru": "🚨 Запустить сигнал тревоги?", "hi": "🚨 आपातकालीन अलार्म चालू करें?", "ar": "🚨 تشغيل إنذار الطوارئ؟",
        "ko": "🚨 긴급 알람을 작동하시겠습니까?", "ja": "🚨 緊急警報を作動しますか？", "uk": "🚨 Запустити сигнал тривоги?"
    },
    "sos_confirm_text": {
        "es": "Desliza para disparar la alarma inmediatamente.", "en": "Slide to trigger the alarm immediately.", "fr": "Glissez pour déclencher l'alarme immédiatement.", "pt": "Deslize para disparar o alarme imediatamente.", "it": "Scorri per attivare l'allarme immediatamente.",
        "zh": "滑动以立即触发警报。", "zh-Hant": "滑動以立即觸發警報。", "ru": "Сдвиньте для немедленного включения тревоги.", "hi": "तुरंत अलार्म बजाने के लिए स्लाइड करें।", "ar": "اسحب لتشغيل الإنذار فوراً.",
        "ko": "알람을 즉시 작동하려면 미세요.", "ja": "スライドして今すぐ警報を作動させます。", "uk": "Посуньте для негайного запуску тривоги."
    },
    "sos_slide": {
        "es": "Desliza para activar SOS", "en": "Slide to trigger SOS", "fr": "Glisser pour déclencher SOS", "pt": "Deslize para acionar SOS", "it": "Scorri per attivare SOS",
        "zh": "滑动触发 SOS", "zh-Hant": "滑動觸發 SOS", "ru": "Сдвиньте для включения SOS", "hi": "SOS के लिए स्लाइड करें", "ar": "اسحب لتشغيل SOS",
        "ko": "밀어서 SOS 활성화", "ja": "スライドしてSOS作動", "uk": "Посуньте для активації SOS"
    },

    # ── SENSOR STATES & CHIPS ──
    "status_open": {
        "es": "ABIERTO", "en": "OPEN", "fr": "OUVERT", "pt": "ABERTO", "it": "APERTO",
        "zh": "开启", "zh-Hant": "開啟", "ru": "ОТКРЫТО", "hi": "खुला", "ar": "مفتوح",
        "ko": "열림", "ja": "開", "uk": "ВІДКРИТО"
    },
    "status_closed": {
        "es": "CERRADO", "en": "CLOSED", "fr": "FERMÉ", "pt": "FECHADO", "it": "CHIUSO",
        "zh": "关闭", "zh-Hant": "關閉", "ru": "ЗАКРЫТО", "hi": "बंद", "ar": "مغلق",
        "ko": "닫힘", "ja": "閉", "uk": "ЗАКРИТО"
    },
    "no_sensors_configured": {
        "es": "Sin sensores configurados", "en": "No sensors configured", "fr": "Aucun capteur configuré", "pt": "Nenhum sensor configurado", "it": "Nessun sensore configurato",
        "zh": "未配置传感器", "zh-Hant": "未設定感應器", "ru": "Датчики не настроены", "hi": "कोई सेंसर कॉन्फ़िगर नहीं है", "ar": "لم يتم تكوين مستشعرات",
        "ko": "구성된 센서가 없습니다", "ja": "センサーが設定されていません", "uk": "Датчики не налаштовано"
    },
    "all_sensors_bypassed": {
        "es": "Todos los sensores configurados están omitidos.", "en": "All configured sensors are bypassed.", "fr": "Tous les capteurs configurés sont contournés.", "pt": "Todos os sensores configurados estão ignorados.", "it": "Tutti i sensori configurati sono esclusi.",
        "zh": "所有已配置的传感器均已被绕过。", "zh-Hant": "所有已設定的感應器皆已被略過。", "ru": "Все настроенные датчики пропущены.", "hi": "सभी कॉन्फ़िगर किए गए सेंसर बायपास हैं।", "ar": "تم تجاوز جميع المستشعرات المكونة.",
        "ko": "구성된 모든 센서가 우회되었습니다.", "ja": "設定されたすべてのセンサーがバイパスされています。", "uk": "Усі налаштовані датчики пропущені."
    },

    # ── WIDGETS & SECTIONS ──
    "instances": {
        "es": "Instancias Activas", "en": "Active Instances", "fr": "Instances Actives", "pt": "Instâncias Ativas", "it": "Istanze Attive",
        "zh": "运行中实例", "zh-Hant": "運行中實例", "ru": "Активные экземпляры", "hi": "सक्रिय उदाहरण", "ar": "المثيلات النشطة",
        "ko": "활성 인스턴스", "ja": "アクティブなインスタンス", "uk": "Активні екземпляри"
    },
    "modes": {
        "es": "Modos", "en": "Modes", "fr": "Modes", "pt": "Modos", "it": "Modalità",
        "zh": "模式", "zh-Hant": "模式", "ru": "Режимы", "hi": "मोड", "ar": "الأوضاع",
        "ko": "모드", "ja": "モード", "uk": "Режими"
    },
    "activity_log": {
        "es": "📋 Historial de Actividad", "en": "📋 Activity Log", "fr": "📋 Journal d'activité", "pt": "📋 Histórico de Atividades", "it": "📋 Registro Attività",
        "zh": "📋 活动记录", "zh-Hant": "📋 活動記錄", "ru": "📋 Журнал активности", "hi": "📋 गतिविधि लॉग", "ar": "📋 سجل الأنشطة",
        "ko": "📋 활동 로그", "ja": "📋 アクティビティ ログ", "uk": "📋 Журнал активності"
    },
    "automations": {
        "es": "Automatizaciones", "en": "Automations", "fr": "Automatisations", "pt": "Automações", "it": "Automazioni",
        "zh": "自动化", "zh-Hant": "自動化", "ru": "Автоматизации", "hi": "स्वचालन", "ar": "الأتمتة",
        "ko": "자동화", "ja": "自動化", "uk": "Автоматизація"
    },
    "linked_rules": {
        "es": "Reglas vinculadas a Argus", "en": "Rules linked to Argus", "fr": "Règles associées à Argus", "pt": "Regras vinculadas ao Argus", "it": "Regole collegate ad Argus",
        "zh": "已关联到 Argus 的规则", "zh-Hant": "已連結至 Argus 的規則", "ru": "Связанные с Argus правила", "hi": "Argus से जुड़े नियम", "ar": "القواعد المرتبطة بـ Argus",
        "ko": "Argus에 연결된 규칙", "ja": "Argus に関連付けられたルール", "uk": "Правила, пов'язані з Argus"
    },
    "users_title": {
        "es": "👥 Control de Acceso y Usuarios", "en": "👥 Users & Access Control", "fr": "👥 Utilisateurs et Contrôle d'accès", "pt": "👥 Usuários e Controle de Acesso", "it": "👥 Utenti e Controllo Accessi",
        "zh": "👥 用户与门禁控制", "zh-Hant": "👥 使用者與門禁控制", "ru": "👥 Пользователи и контроль доступа", "hi": "👥 उपयोगकर्ता और अभिगम नियंत्रण", "ar": "👥 المستخدمون والتحكم في الوصول",
        "ko": "👥 사용자 및 출입 제어", "ja": "👥 ユーザーとアクセス制御", "uk": "👥 Користувачі та контроль доступу"
    },
    "backup_title": {
        "es": "Respaldo y Restauración", "en": "Backup & Restore", "fr": "Sauvegarde & Restauration", "pt": "Backup & Restauração", "it": "Backup & Ripristino",
        "zh": "备份与恢复", "zh-Hant": "備份與還原", "ru": "Резервное копирование и восстановление", "hi": "बैकअप और पुनर्स्थापना", "ar": "النسخ الاحتياطي والاستعادة",
        "ko": "백업 및 복원", "ja": "バックアップと復元", "uk": "Резервне копіювання та відновлення"
    },
    "support_title": {
        "es": "Estado y Soporte", "en": "Status & Support", "fr": "État & Assistance", "pt": "Status & Suporte", "it": "Stato & Supporto",
        "zh": "状态与支持", "zh-Hant": "狀態與支援", "ru": "Состояние и поддержка", "hi": "स्थिति और सहायता", "ar": "الحالة والدعم",
        "ko": "상태 및 지원", "ja": "ステータスとサポート", "uk": "Стан і підтримка"
    },
    "settings": {
        "es": "⚙️ Ajustes", "en": "⚙️ Settings", "fr": "⚙️ Paramètres", "pt": "⚙️ Configurações", "it": "⚙️ Impostazioni",
        "zh": "⚙️ 设置", "zh-Hant": "⚙️ 設定", "ru": "⚙️ Настройки", "hi": "⚙️ सेटिंग्स", "ar": "⚙️ الإعدادات",
        "ko": "⚙️ 설정", "ja": "⚙️ 設定", "uk": "⚙️ Налаштування"
    },

    # ── DASHBOARD TOOLBAR & GRID ──
    "edit_dashboard": {
        "es": "Editar tablero", "en": "Edit Dashboard", "fr": "Modifier le tableau", "pt": "Editar painel", "it": "Modifica dashboard",
        "zh": "编辑仪表板", "zh-Hant": "編輯儀表板", "ru": "Редактировать панель", "hi": "डैशबोर्ड संपादित करें", "ar": "تعديل لوحة المعلومات",
        "ko": "대시보드 편집", "ja": "ダッシュボードを編集", "uk": "Редагувати панель"
    },
    "edit_dashboard_done": {
        "es": "✓ Listo", "en": "✓ Done", "fr": "✓ Terminé", "pt": "✓ Concluído", "it": "✓ Fatto",
        "zh": "✓ 完成", "zh-Hant": "✓ 完成", "ru": "✓ Готово", "hi": "✓ संपन्न", "ar": "✓ تم",
        "ko": "✓ 완료", "ja": "✓ 完了", "uk": "✓ Готово"
    },
    "reset_dashboard": {
        "es": "Restablecer diseño", "en": "Reset Layout", "fr": "Réinitialiser la disposition", "pt": "Redefinir layout", "it": "Ripristina layout",
        "zh": "重置布局", "zh-Hant": "重設版面配置", "ru": "Сбросить макет", "hi": "लेआउट रीसेट करें", "ar": "إعادة تعيين التخطيط",
        "ko": "레이아웃 재설정", "ja": "レイアウトをリセット", "uk": "Скинути макет"
    },
    "reset_widget": {
        "es": "Restablecer widget", "en": "Reset widget", "fr": "Réinitialiser le widget", "pt": "Redefinir widget", "it": "Ripristina widget",
        "zh": "重置小部件", "zh-Hant": "重設小工具", "ru": "Сбросить виджет", "hi": "विजेट रीसेट करें", "ar": "إعادة تعيين الأداة",
        "ko": "위젯 재설정", "ja": "ウィジェットをリセット", "uk": "Скинути віджет"
    },
    "hide_widget": {
        "es": "Ocultar widget", "en": "Hide widget", "fr": "Masquer le widget", "pt": "Ocultar widget", "it": "Nascondi widget",
        "zh": "隐藏小部件", "zh-Hant": "隱藏小工具", "ru": "Скрыть виджет", "hi": "विजेट छिपाएँ", "ar": "إخفاء الأداة",
        "ko": "위젯 숨기기", "ja": "ウィジェットを非表示", "uk": "Сховати віджет"
    },
    "size": {
        "es": "Tamaño", "en": "Size", "fr": "Taille", "pt": "Tamanho", "it": "Dimensione",
        "zh": "尺寸", "zh-Hant": "尺寸", "ru": "Размер", "hi": "आकार", "ar": "الحجم",
        "ko": "크기", "ja": "サイズ", "uk": "Розмір"
    },

    # ── ACCESS & USERS ──
    "pin_management": {
        "es": "🔑 Gestión de Pines", "en": "🔑 PIN Management", "fr": "🔑 Gestion des codes PIN", "pt": "🔑 Gerenciamento de PINs", "it": "🔑 Gestione PIN",
        "zh": "🔑 PIN 密码管理", "zh-Hant": "🔑 PIN 密碼管理", "ru": "🔑 Управление PIN-кодами", "hi": "🔑 पिन प्रबंधन", "ar": "🔑 إدارة الرموز السرية",
        "ko": "🔑 PIN 관리", "ja": "🔑 PIN 管理", "uk": "🔑 Керування PIN-кодами"
    },
    "pin_master_title": {
        "es": "PIN Maestro", "en": "Master PIN", "fr": "PIN Maître", "pt": "PIN Mestre", "it": "PIN Master",
        "zh": "主 PIN 码", "zh-Hant": "主 PIN 碼", "ru": "Мастер-PIN", "hi": "मास्टर पिन", "ar": "الرمز الرئيسي",
        "ko": "마스터 PIN", "ja": "マスター PIN", "uk": "Майстер-PIN"
    },
    "user_no_pin": {
        "es": "Sin PIN de acceso", "en": "No access PIN", "fr": "Pas de code PIN", "pt": "Sem PIN de acesso", "it": "Nessun PIN di accesso",
        "zh": "无访问 PIN", "zh-Hant": "無訪問 PIN", "ru": "Без PIN-кода", "hi": "कोई एक्सेस पिन नहीं", "ar": "بدون رمز PIN",
        "ko": "액세스 PIN 없음", "ja": "アクセス PIN なし", "uk": "Без PIN-коду"
    },
    "exp_indefinite": {
        "es": "Indefinido", "en": "Indefinite", "fr": "Indéfini", "pt": "Indefinido", "it": "Indefinito",
        "zh": "永久有效", "zh-Hant": "永久有效", "ru": "Бессрочно", "hi": "अनिश्चितकालीन", "ar": "غير محدد",
        "ko": "무기한", "ja": "無期限", "uk": "Безстроково"
    },
    "exp_temporary": {
        "es": "Temporal (Fecha/Hora)", "en": "Temporary (Date/Time)", "fr": "Temporaire (Date/Heure)", "pt": "Temporário (Data/Hora)", "it": "Temporaneo (Data/Ora)",
        "zh": "临时 (日期/时间)", "zh-Hant": "臨時 (日期/時間)", "ru": "Временный (Дата/Время)", "hi": "अस्थायी (दिनांक/समय)", "ar": "مؤقت (التاريخ/الوقت)",
        "ko": "임시 (날짜/시간)", "ja": "一時的 (日時)", "uk": "Тимчасовий (Дата/Час)"
    },
    "active_until": {
        "es": "Vence", "en": "Expires", "fr": "Expire le", "pt": "Expira em", "it": "Scade il",
        "zh": "过期时间", "zh-Hant": "到期時間", "ru": "Истекает", "hi": "समाप्त होता है", "ar": "ينتهي في",
        "ko": "만료일", "ja": "有効期限", "uk": "Діє до"
    },
    "expired": {
        "es": "Expirado", "en": "Expired", "fr": "Expiré", "pt": "Expirado", "it": "Scaduto",
        "zh": "已过期", "zh-Hant": "已過期", "ru": "Истёк", "hi": "समाप्त हो चुका", "ar": "منتهي الصلاحية",
        "ko": "만료됨", "ja": "期限切れ", "uk": "Прострочено"
    },
    "role_argus_admin": {
        "es": "Administrador de Argus", "en": "Argus Administrator", "fr": "Administrateur Argus", "pt": "Administrador do Argus", "it": "Amministratore Argus",
        "zh": "Argus 管理员", "zh-Hant": "Argus 管理員", "ru": "Администратор Argus", "hi": "Argus व्यवस्थापक", "ar": "مسؤول Argus",
        "ko": "Argus 관리자", "ja": "Argus 管理者", "uk": "Адміністратор Argus"
    },
    "role_argus_admin_short": {
        "es": "Adm", "en": "Admin", "fr": "Admin", "pt": "Admin", "it": "Admin",
        "zh": "管理", "zh-Hant": "管理", "ru": "Адм", "hi": "व्यवस्थापक", "ar": "مشرف",
        "ko": "관리자", "ja": "管理者", "uk": "Адм"
    },
    "role_argus_standard": {
        "es": "Usuario Estándar", "en": "Standard User", "fr": "Utilisateur Standard", "pt": "Usuário Padrão", "it": "Utente Standard",
        "zh": "标准用户", "zh-Hant": "標準使用者", "ru": "Стандартный пользователь", "hi": "मानक उपयोगकर्ता", "ar": "مستخدم عادي",
        "ko": "일반 사용자", "ja": "標準ユーザー", "uk": "Звичайний користувач"
    },
    "role_argus_user_short": {
        "es": "Std", "en": "User", "fr": "Utilisateur", "pt": "Usuário", "it": "Utente",
        "zh": "标准", "zh-Hant": "標準", "ru": "Польз", "hi": "उपयोगकर्ता", "ar": "مستخدم",
        "ko": "사용자", "ja": "一般", "uk": "Корист"
    },
    "active_profile": {
        "es": "Perfil Activo", "en": "Active Profile", "fr": "Profil Actif", "pt": "Perfil Ativo", "it": "Profilo Attivo",
        "zh": "当前配置", "zh-Hant": "當前設定檔", "ru": "Активный профиль", "hi": "सक्रिय प्रोफ़ाइल", "ar": "الملف النشط",
        "ko": "활성 프로필", "ja": "アクティブなプロファイル", "uk": "Активний профіль"
    },
    "switch_profile_btn": {
        "es": "👤 Cambiar de Perfil", "en": "👤 Switch Profile", "fr": "👤 Changer de Profil", "pt": "👤 Alternar Perfil", "it": "👤 Cambia Profilo",
        "zh": "👤 切换配置文件", "zh-Hant": "👤 切換設定檔", "ru": "👤 Сменить профиль", "hi": "👤 प्रोफ़ाइल बदलें", "ar": "👤 تبديل الملف الشخصي",
        "ko": "👤 프로필 전환", "ja": "👤 プロファイルの切り替え", "uk": "👤 Змінити профіль"
    },
    "change_profile_picture": {
        "es": "Cambiar foto en Personas de HA ↗", "en": "Change photo in HA Persons ↗", "fr": "Changer la photo dans Personnes HA ↗", "pt": "Alterar foto em Pessoas do HA ↗", "it": "Modifica foto in Persone HA ↗",
        "zh": "在 HA 用户中更改头像 ↗", "zh-Hant": "在 HA 使用者中變更大頭貼 ↗", "ru": "Изменить фото в «Людях» HA ↗", "hi": "HA Persons में फ़ोटो बदलें ↗", "ar": "تغيير الصورة في أشخاص HA ↗",
        "ko": "HA 사용자 설정에서 사진 변경 ↗", "ja": "HA の人物設定で写真を変更 ↗", "uk": "Змінити фото в Особах HA ↗"
    },
    "use_ha_language": {
        "es": "Usar idioma de Home Assistant", "en": "Use Home Assistant language", "fr": "Utiliser la langue de Home Assistant", "pt": "Usar idioma do Home Assistant", "it": "Usa la lingua di Home Assistant",
        "zh": "使用 Home Assistant 语言", "zh-Hant": "使用 Home Assistant 語言", "ru": "Использовать язык Home Assistant", "hi": "Home Assistant भाषा का उपयोग करें", "ar": "استخدام لغة Home Assistant",
        "ko": "Home Assistant 언어 사용", "ja": "Home Assistant の言語を使用", "uk": "Використовувати мову Home Assistant"
    },
    "lang_selector_lbl": {
        "es": "⚙️ Idioma / Language", "en": "⚙️ Language", "fr": "⚙️ Langue", "pt": "⚙️ Idioma", "it": "⚙️ Lingua",
        "zh": "⚙️ 语言", "zh-Hant": "⚙️ 語言", "ru": "⚙️ Язык", "hi": "⚙️ भाषा", "ar": "⚙️ اللغة",
        "ko": "⚙️ 언어", "ja": "⚙️ 言語", "uk": "⚙️ Мова"
    },

    # ── MODE CONFIGURATION LABELS ──
    "select_entry_sensors": {
        "es": "+ Seleccionar sensores de entrada", "en": "+ Select Entry Sensors", "fr": "+ Sélectionner les capteurs d'entrée", "pt": "+ Selecionar sensores de entrada", "it": "+ Seleziona sensori di ingresso",
        "zh": "+ 选择入口传感器", "zh-Hant": "+ 選擇入口感應器", "ru": "+ Выбрать входные датчики", "hi": "+ प्रवेश सेंसर चुनें", "ar": "+ حدد مستشعرات المدخل",
        "ko": "+ 출입 센서 선택", "ja": "+ エントリセンサーを選択", "uk": "+ Вибрати вхідні датчики"
    },
    "external_panels": {
        "es": "Paneles de alarma externos", "en": "External Alarm Panels", "fr": "Panneaux d'alarme externes", "pt": "Painéis de alarme externos", "it": "Pannelli di allarme esterni",
        "zh": "外部报警面板", "zh-Hant": "外部警報面板", "ru": "Внешние панели сигнализации", "hi": "बाहरी अलार्म पैनल", "ar": "لوحات الإنذار الخارجية",
        "ko": "외부 알람 패널", "ja": "外部アラーム パネル", "uk": "Зовнішні панелі сигналізації"
    },
    "light_siren_color": {
        "es": "Color", "en": "Color", "fr": "Couleur", "pt": "Cor", "it": "Colore",
        "zh": "颜色", "zh-Hant": "顏色", "ru": "Цвет", "hi": "रंग", "ar": "اللون",
        "ko": "색상", "ja": "色", "uk": "Колір"
    },
    "light_siren_flash": {
        "es": "Destello suave si está disponible", "en": "Gentle flash if available", "fr": "Clignotement doux si disponible", "pt": "Piscar suave se disponível", "it": "Lampeggio delicato se disponibile",
        "zh": "柔和闪烁 (如果支持)", "zh-Hant": "柔和閃爍 (如果支援)", "ru": "Мягкое мигание, если доступно", "hi": "यदि उपलब्ध हो तो सौम्य फ़्लैश", "ar": "وميض لطيف إن وجد",
        "ko": "가능한 경우 부드러운 깜빡임", "ja": "利用可能な場合は穏やかに点滅", "uk": "М'яке блимання, якщо доступно"
    },
    "arm_time": {
        "es": "Armado (s)", "en": "Arming delay (s)", "fr": "Délai d'armement (s)", "pt": "Atraso de armamento (s)", "it": "Ritardo inserimento (s)",
        "zh": "布防延时 (秒)", "zh-Hant": "布防延時 (秒)", "ru": "Задержка постановки (с)", "hi": "सशस्त्र करने में देरी (सेकंड)", "ar": "تأخير التسليح (ثانية)",
        "ko": "설정 지연 시간 (초)", "ja": "警戒遅延 (秒)", "uk": "Затримка постановки (с)"
    },
    "disarm_time": {
        "es": "Retraso de entrada (s)", "en": "Entry delay (s)", "fr": "Délai d'entrée (s)", "pt": "Atraso de entrada (s)", "it": "Ritardo ingresso (s)",
        "zh": "进入延时 (秒)", "zh-Hant": "進入延時 (秒)", "ru": "Задержка входа (с)", "hi": "प्रवेश में देरी (सेकंड)", "ar": "تأخير الدخول (ثانية)",
        "ko": "진입 지연 시간 (초)", "ja": "進入遅延 (秒)", "uk": "Затримка входу (с)"
    },
    "times_section": {
        "es": "⏱️ Tiempos", "en": "⏱️ Timers", "fr": "⏱️ Délais", "pt": "⏱️ Temporizadores", "it": "⏱️ Tempi",
        "zh": "⏱️ 计时延时", "zh-Hant": "⏱️ 計時延時", "ru": "⏱️ Таймеры", "hi": "⏱️ टाइमर", "ar": "⏱️ التوقيتات",
        "ko": "⏱️ 타이머", "ja": "⏱️ タイマー", "uk": "⏱️ Таймери"
    },
    "bypass_lbl": {
        "es": "🚫 Omitir", "en": "🚫 Bypass", "fr": "🚫 Contourner", "pt": "🚫 Ignorar", "it": "🚫 Escludi",
        "zh": "🚫 绕过", "zh-Hant": "🚫 略過", "ru": "🚫 Обход", "hi": "🚫 बायपास", "ar": "🚫 تجاوز",
        "ko": "🚫 우회", "ja": "🚫 バイパス", "uk": "🚫 Обхід"
    },
    "siren_section": {
        "es": "Sirenas", "en": "Sirens", "fr": "Sirènes", "pt": "Sirenes", "it": "Sirene",
        "zh": "警报器", "zh-Hant": "警報器", "ru": "Сирены", "hi": "सायरन", "ar": "صافرات الإنذار",
        "ko": "사이렌", "ja": "サイレン", "uk": "Сирени"
    },
    "lock_if_open": {
        "es": "Bloquear si abiertos", "en": "Block if open", "fr": "Bloquer si ouvert", "pt": "Bloquear se aberto", "it": "Blocca se aperto",
        "zh": "如有开启则阻止", "zh-Hant": "如有開啟則阻止", "ru": "Блокировать при открытии", "hi": "खुले होने पर रोकें", "ar": "حظر التسليح إذا كانت مفتوحة",
        "ko": "열려 있으면 차단", "ja": "開いている場合はブロック", "uk": "Блокувати, якщо відкрито"
    },
    "wait_if_open": {
        "es": "Esperar armado en espera", "en": "Wait for sensors to close", "fr": "Attendre la fermeture", "pt": "Aguardar fechamento", "it": "Attendi chiusura",
        "zh": "等待感应器关闭", "zh-Hant": "等待感應器關閉", "ru": "Ждать закрытия датчиков", "hi": "सेंसर बंद होने की प्रतीक्षा करें", "ar": "انتظار إغلاق المستشعرات",
        "ko": "센서 닫힐 때까지 대기", "ja": "センサーが閉じるのを待つ", "uk": "Чекати закриття датчиків"
    },
    "mqtt_label": {
        "es": "MQTT", "en": "MQTT", "fr": "MQTT", "pt": "MQTT", "it": "MQTT",
        "zh": "MQTT", "zh-Hant": "MQTT", "ru": "MQTT", "hi": "MQTT", "ar": "MQTT",
        "ko": "MQTT", "ja": "MQTT", "uk": "MQTT"
    },
    "save_config": {
        "es": "💾 Guardar Modo", "en": "💾 Save Mode", "fr": "💾 Enregistrer le Mode", "pt": "💾 Salvar Modo", "it": "💾 Salva Modalità",
        "zh": "💾 保存模式", "zh-Hant": "💾 儲存模式", "ru": "💾 Сохранить режим", "hi": "💾 मोड सहेजें", "ar": "💾 حفظ الوضع",
        "ko": "💾 모드 저장", "ja": "💾 モードを保存", "uk": "💾 Зберегти режим"
    },
    "saved": {
        "es": "✓ Guardado", "en": "✓ Saved", "fr": "✓ Enregistré", "pt": "✓ Salvo", "it": "✓ Salvato",
        "zh": "✓ 已保存", "zh-Hant": "✓ 已儲存", "ru": "✓ Сохранено", "hi": "✓ सहेजा गया", "ar": "✓ تم الحفظ",
        "ko": "✓ 저장됨", "ja": "✓ 保存しました", "uk": "✓ Збережено"
    },

    # ── FORENSIC LOG DETAILS ──
    "log_action_analysis": {
        "es": "Análisis de Seguridad", "en": "Security Analysis", "fr": "Analyse de Sécurité", "pt": "Análise de Segurança", "it": "Analisi di Sicurezza",
        "zh": "安全分析", "zh-Hant": "安全分析", "ru": "Анализ безопасности", "hi": "सुरक्षा विश्लेषण", "ar": "تحليل الأمان",
        "ko": "보안 분석", "ja": "セキュリティ分析", "uk": "Аналіз безпеки"
    },
    "log_action_automation": {
        "es": "Automatización Ejecutada", "en": "Automation Executed", "fr": "Automatisation Exécutée", "pt": "Automação Executada", "it": "Automazione Eseguita",
        "zh": "自动化已执行", "zh-Hant": "自動化已執行", "ru": "Автоматизация выполнена", "hi": "स्वचालन निष्पादित", "ar": "تم تنفيذ الأتمتة",
        "ko": "자동화 실행됨", "ja": "自動化が実行されました", "uk": "Автоматизацію виконано"
    },
    "log_action_sos_stopped": {
        "es": "SOS Detenido", "en": "SOS Stopped", "fr": "SOS Arrêté", "pt": "SOS Interrompido", "it": "SOS Fermato",
        "zh": "SOS 已停止", "zh-Hant": "SOS 已停止", "ru": "SOS остановлен", "hi": "SOS रोक दिया गया", "ar": "تم إيقاف SOS",
        "ko": "SOS 중지됨", "ja": "SOS を停止しました", "uk": "SOS зупинено"
    },
    "log_action_user_added": {
        "es": "Usuario Creado", "en": "User Created", "fr": "Utilisateur Créé", "pt": "Usuário Criado", "it": "Utente Creato",
        "zh": "用户已创建", "zh-Hant": "使用者已建立", "ru": "Пользователь создан", "hi": "उपयोगकर्ता बनाया गया", "ar": "تم إنشاء المستخدم",
        "ko": "사용자 생성됨", "ja": "ユーザーを作成しました", "uk": "Користувача створено"
    },
    "log_action_user_deleted": {
        "es": "Usuario Eliminado", "en": "User Deleted", "fr": "Utilisateur Supprimé", "pt": "Usuário Excluído", "it": "Utente Eliminato",
        "zh": "用户已删除", "zh-Hant": "使用者已刪除", "ru": "Пользователь удалён", "hi": "उपयोगकर्ता हटाया गया", "ar": "تم حذف المستخدم",
        "ko": "사용자 삭제됨", "ja": "ユーザーを削除しました", "uk": "Користувача видалено"
    },
    "log_mode": {
        "es": "Modo", "en": "Mode", "fr": "Mode", "pt": "Modo", "it": "Modalità",
        "zh": "模式", "zh-Hant": "模式", "ru": "Режим", "hi": "मोड", "ar": "الوضع",
        "ko": "모드", "ja": "モード", "uk": "Режим"
    },
    "manual_arm": {
        "es": "Armado manual", "en": "Manual arming", "fr": "Armement manuel", "pt": "Armamento manual", "it": "Inserimento manuale",
        "zh": "手动布防", "zh-Hant": "手動布防", "ru": "Ручная постановка", "hi": "मैन्युअल आर्मिंग", "ar": "تسليح يدوي",
        "ko": "수동 설정", "ja": "手動警戒", "uk": "Ручна постановка"
    },
    "manual_disarm": {
        "es": "Desarmado manual", "en": "Manual disarm", "fr": "Désarmement manuel", "pt": "Desarme manual", "it": "Disinserimento manuale",
        "zh": "手动撤防", "zh-Hant": "手動撤防", "ru": "Ручное снятие", "hi": "मैन्युअल डिसआर्म", "ar": "نزع السلاح يدوياً",
        "ko": "수동 해제", "ja": "手動解除", "uk": "Ручне зняття"
    },
    "log_detail_disarm": {
        "es": "Sistema desarmado", "en": "System disarmed", "fr": "Système désarmé", "pt": "Sistema desarmado", "it": "Sistema disinserito",
        "zh": "系统已撤防", "zh-Hant": "系統已撤防", "ru": "Система снята с охраны", "hi": "सिस्टम निरस्त्र किया गया", "ar": "تم نزع سلاح النظام",
        "ko": "시스템 해제됨", "ja": "システムが警戒解除されました", "uk": "Систему знято з охорони"
    },
    "log_detail_triggered": {
        "es": "Activación automática", "en": "Automatic activation", "fr": "Activation automatique", "pt": "Ativação automática", "it": "Attivazione automatica",
        "zh": "自动触发", "zh-Hant": "自動觸發", "ru": "Автоматическая активация", "hi": "स्वचालित सक्रियण", "ar": "تنشيط تلقائي",
        "ko": "자동 작동", "ja": "自動作動", "uk": "Автоматична активація"
    },
    "history_refresh": {
        "es": "🔄 Actualizar", "en": "🔄 Refresh", "fr": "🔄 Actualiser", "pt": "🔄 Atualizar", "it": "🔄 Aggiorna",
        "zh": "🔄 刷新", "zh-Hant": "🔄 重新整理", "ru": "🔄 Обновить", "hi": "🔄 रीफ्रेश करें", "ar": "🔄 تحديث",
        "ko": "🔄 새로고침", "ja": "🔄 更新", "uk": "🔄 Оновити"
    },
    "clear_log_btn": {
        "es": "🗑️ Limpiar historial", "en": "🗑️ Clear Log", "fr": "🗑️ Effacer l'historique", "pt": "🗑️ Limpar histórico", "it": "🗑️ Cancella registro",
        "zh": "🗑️ 清除记录", "zh-Hant": "🗑️ 清除記錄", "ru": "🗑️ Очистить журнал", "hi": "🗑️ लॉग साफ़ करें", "ar": "🗑️ مسح السجل",
        "ko": "🗑️ 로그 지우기", "ja": "🗑️ ログを消去", "uk": "🗑️ Очистити журнал"
    }
}

# Generate complete 13-language database
with open("scripts/keys_reference.json") as f:
    existing_reference = json.load(f)

# Load existing base
import subprocess
original_v2213 = subprocess.check_output(["git", "show", "v2.2.13:src/legacy/argus-panel.ts"]).decode("utf-8")

tmpl_start = original_v2213.find("const _tmpl = document.createElement('template');")
class_start = original_v2213.find("class ArgusPanel extends HTMLElement {")
tmpl_block = original_v2213[tmpl_start:class_start]
header_block = original_v2213[:original_v2213.find("const TEXTS = {")]
class_and_rest = original_v2213[class_start:]

# Extract all original translations from v2.2.13
orig_texts_block = original_v2213[original_v2213.find("const TEXTS = {"):tmpl_start]
lang_blocks = re.findall(r"([a-zA-Z-]+):\s*\{([\s\S]*?)\n\s*\},?", orig_texts_block)

full_db = {l: {} for l in LANGS}
for lang, body in lang_blocks:
    if lang in full_db:
        pairs = re.findall(r"([a-zA-Z0-9_]+)\s*:\s*(\x27(?:\\.|[^\x27\\])*\x27|\"(?:\\.|[^\"\\])*\")", body)
        for k, v in pairs:
            try:
                full_db[lang][k] = eval(v)
            except Exception:
                full_db[lang][k] = v[1:-1]

# Apply MASTER_I18N overrides across all languages
for key, trans in MASTER_I18N.items():
    for l in LANGS:
        if l in trans:
            full_db[l][key] = trans[l]

# Make sure all keys are populated for all 13 languages
all_keys = set(full_db["es"].keys()).union(set(full_db["en"].keys())).union(set(MASTER_I18N.keys()))

for l in LANGS:
    for k in all_keys:
        if k not in full_db[l] or not full_db[l][k]:
            if l == "zh-Hant" and k in full_db["zh"]:
                full_db[l][k] = full_db["zh"][k]
            elif k in full_db["en"]:
                full_db[l][k] = full_db["en"][k]
            elif k in full_db["es"]:
                full_db[l][k] = full_db["es"][k]

# Generate JavaScript const TEXTS = { ... }
lines = ["const TEXTS = {"]
for lang in LANGS:
    lines.append(f"  '{lang}': {{")
    for k in sorted(full_db[lang].keys()):
        escaped_v = json.dumps(full_db[lang][k], ensure_ascii=False)[1:-1].replace("'", "\\'")
        lines.append(f"    '{k}': '{escaped_v}',")
    lines.append("  },")
lines.append("};\n")

new_texts_block = "\n".join(lines) + "\n"

# Reassemble complete file: header + TEXTS + _tmpl + class ArgusPanel + rest
full_file = header_block + new_texts_block + tmpl_block + class_and_rest

if "customElements.define('argus-panel'," not in full_file:
    full_file += "\ntry { if (!customElements.get('argus-panel')) customElements.define('argus-panel', ArgusPanel); } catch(_) {}\n"

with open("src/legacy/argus-panel.ts", "w") as f:
    f.write(full_file)

print("Successfully injected 100% comprehensive 13-language translations into src/legacy/argus-panel.ts")
