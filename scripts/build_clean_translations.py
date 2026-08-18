# Complete, unified, multi-language translation generator for Argus Home Hub
import json, re

# All reference keys with proper base English and Spanish meanings
TRANSLATION_MAP = {
    "hero_desc": {
        "es": "Sistema integral de seguridad, control de acceso, automatizaciones y HomeKit.",
        "en": "Comprehensive security system, access control, automations, and HomeKit.",
        "fr": "Système de sécurité complet, contrôle d'accès, automatisations et HomeKit.",
        "pt": "Sistema de segurança abrangente, controle de acesso, automações e HomeKit.",
        "it": "Sistema di sicurezza completo, controllo accessi, automazioni e HomeKit.",
        "zh": "综合安全系统、门禁控制、自动化与 HomeKit。",
        "zh-Hant": "綜合安全系統、門禁控制、自動化與 HomeKit。",
        "ru": "Комплексная система безопасности, контроль доступа, автоматизации и HomeKit.",
        "hi": "व्यापक सुरक्षा प्रणाली, अभिगम नियंत्रण, स्वचालन और HomeKit।",
        "ar": "نظام أمان شامل، والتحكم في الوصول، والأتمتة، وHomeKit.",
        "ko": "종합 보안 시스템, 출입 제어, 자동화 및 HomeKit.",
        "ja": "総合セキュリティシステム、アクセス制御、自動化、HomeKit。",
        "uk": "Комплексна система безпеки, контроль доступу, автоматизація та HomeKit."
    },
    "instances": {
        "es": "Instancias activas", "en": "Active Instances", "fr": "Instances actives",
        "pt": "Instâncias ativas", "it": "Istanze attive", "zh": "活动实例",
        "zh-Hant": "活動實例", "ru": "Активные экземпляры", "hi": "सक्रिय उदाहरण",
        "ar": "المثيلات النشطة", "ko": "활성 인스턴스", "ja": "アクティブなインスタンス", "uk": "Активні екземпляри"
    },
    "modes": {
        "es": "Modos", "en": "Modes", "fr": "Modes", "pt": "Modos", "it": "Modalità",
        "zh": "模式", "zh-Hant": "模式", "ru": "Режимы", "hi": "मोड", "ar": "الأوضاع",
        "ko": "모드", "ja": "モード", "uk": "Режими"
    },
    "automations": {
        "es": "⚡ Automatizaciones", "en": "⚡ Automations", "fr": "⚡ Automatisations",
        "pt": "⚡ Automações", "it": "⚡ Automazioni", "zh": "⚡ 自动化",
        "zh-Hant": "⚡ 自動化", "ru": "⚡ Автоматизации", "hi": "⚡ स्वचालन",
        "ar": "⚡ الأتمتة", "ko": "⚡ 자동화", "ja": "⚡ 自動化", "uk": "⚡ Автоматизація"
    },
    "linked_rules": {
        "es": "Reglas vinculadas a Argus", "en": "Rules linked to Argus", "fr": "Règles liées à Argus",
        "pt": "Regras vinculadas ao Argus", "it": "Regole collegate ad Argus", "zh": "与 Argus 关联的规则",
        "zh-Hant": "與 Argus 關聯的規則", "ru": "Правила, связанные с Argus", "hi": "Argus से जुड़े नियम",
        "ar": "القواعد المرتبطة بـ Argus", "ko": "Argus 연결 규칙", "ja": "Argus にリンクされたルール", "uk": "Правила, пов'язані з Argus"
    },
    "create_ha": {
        "es": "+ Crear en HA", "en": "+ Create in HA", "fr": "+ Créer dans HA",
        "pt": "+ Criar no HA", "it": "+ Crea in HA", "zh": "+ 在 HA 中创建",
        "zh-Hant": "+ 在 HA 中建立", "ru": "+ Создать в HA", "hi": "+ HA में बनाएँ",
        "ar": "+ إنشاء في HA", "ko": "+ HA에서 생성", "ja": "+ HA で作成", "uk": "+ Створити в HA"
    },
    "settings": {
        "es": "⚙️ Ajustes", "en": "⚙️ Settings", "fr": "⚙️ Paramètres",
        "pt": "⚙️ Configurações", "it": "⚙️ Impostazioni", "zh": "⚙️ 设置",
        "zh-Hant": "⚙️ 設定", "ru": "⚙️ Настройки", "hi": "⚙️ सेटिंग्स",
        "ar": "⚙️ الإعدادات", "ko": "⚙️ 설정", "ja": "⚙️ 設定", "uk": "⚙️ Налаштування"
    },
    "change_pin": {
        "es": "PIN Maestro", "en": "Master PIN", "fr": "Code PIN Maître",
        "pt": "PIN Mestre", "it": "PIN Principale", "zh": "主 PIN 码",
        "zh-Hant": "主 PIN 碼", "ru": "Мастер PIN", "hi": "मास्टर पिन",
        "ar": "رمز PIN الرئيسي", "ko": "마스터 PIN", "ja": "マスター PIN", "uk": "Головний PIN"
    },
    "pin_desc": {
        "es": "Código numérico para armar y desarmar.", "en": "Numeric code to arm and disarm.",
        "fr": "Code numérique pour armer et désarmer.", "pt": "Código numérico para armar e desarmar.",
        "it": "Codice numerico per inserire e disinserire.", "zh": "用于布防和撤防的数字代码。",
        "zh-Hant": "用於布防和撤防的數字代碼。", "ru": "Цифровой код для постановки и снятия с охраны.",
        "hi": "आर्म और निरस्त्र करने के लिए संख्यात्मक कोड।", "ar": "رمز رقمي للتسليح ونزع السلاح.",
        "ko": "설정 및 해제를 위한 숫자 코드입니다.", "ja": "警戒および解除用の数字コード。", "uk": "Числовий код для встановлення та зняття з охорони."
    },
    "new_pin": {
        "es": "Nuevo PIN", "en": "New PIN", "fr": "Nouveau PIN", "pt": "Novo PIN",
        "it": "Nuovo PIN", "zh": "新 PIN 码", "zh-Hant": "新 PIN 碼",
        "ru": "Новый PIN", "hi": "नया पिन", "ar": "رمز PIN جديد",
        "ko": "새 PIN", "ja": "新しい PIN", "uk": "Новий PIN"
    },
    "confirm_pin": {
        "es": "Confirmar PIN", "en": "Confirm PIN", "fr": "Confirmer le PIN",
        "pt": "Confirmar PIN", "it": "Conferma PIN", "zh": "确认 PIN 码",
        "zh-Hant": "確認 PIN 碼", "ru": "Подтвердите PIN", "hi": "पिन की पुष्टि करें",
        "ar": "تأكيد رمز PIN", "ko": "PIN 확인", "ja": "PIN を確認", "uk": "Підтвердіть PIN"
    },
    "update_pin": {
        "es": "Actualizar PIN", "en": "Update PIN", "fr": "Mettre à jour le PIN",
        "pt": "Atualizar PIN", "it": "Aggiorna PIN", "zh": "更新 PIN 码",
        "zh-Hant": "更新 PIN 碼", "ru": "Обновить PIN", "hi": "पिन अपडेट करें",
        "ar": "تحديث رمز PIN", "ko": "PIN 업데이트", "ja": "PIN を更新", "uk": "Оновити PIN"
    },
    "current_pin": {
        "es": "PIN actual", "en": "Current PIN", "fr": "PIN actuel",
        "pt": "PIN atual", "it": "PIN attuale", "zh": "当前 PIN 码",
        "zh-Hant": "目前 PIN 碼", "ru": "Текущий PIN", "hi": "वर्तमान पिन",
        "ar": "رمز PIN الحالي", "ko": "현재 PIN", "ja": "現在の PIN", "uk": "Поточний PIN"
    },
    "notifications_title": {
        "es": "🔔 Notificaciones", "en": "🔔 Notifications", "fr": "🔔 Notifications",
        "pt": "🔔 Notificações", "it": "🔔 Notifiche", "zh": "🔔 通知",
        "zh-Hant": "🔔 通知", "ru": "🔔 Уведомления", "hi": "🔔 सूचनाएं",
        "ar": "🔔 الإشعارات", "ko": "🔔 알림", "ja": "🔔 通知", "uk": "🔔 Сповіщення"
    },
    "notif_desc": {
        "es": "Selecciona los dispositivos móviles registrados en HA que recibirán alertas de Argus.",
        "en": "Select mobile devices registered in HA that will receive Argus alerts.",
        "fr": "Sélectionnez les appareils mobiles enregistrés dans HA qui recevront les alertes Argus.",
        "pt": "Selecione os dispositivos móveis registrados no HA que receberão alertas do Argus.",
        "it": "Seleziona i dispositivi mobili registrati in HA che riceveranno gli avvisi di Argus.",
        "zh": "选择在 HA 中注册以接收 Argus 警报的移动设备。",
        "zh-Hant": "選擇在 HA 中註冊以接收 Argus 警報的行動裝置。",
        "ru": "Выберите мобильные устройства, зарегистрированные в HA, которые будут получать оповещения Argus.",
        "hi": "HA में पंजीकृत उन मोबाइल उपकरणों का चयन करें जो Argus अलर्ट प्राप्त करेंगे।",
        "ar": "حدد الأجهزة المحمولة المسجلة في HA والتي ستتلقى تنبيهات Argus.",
        "ko": "Argus 알림을 수신할 HA 등록 모바일 기기를 선택하세요.",
        "ja": "Argus アラートを受信する HA 登録モバイル デバイスを選択します。",
        "uk": "Виберіть мобільні пристрої, зареєстровані в HA, які отримуватимуть сповіщення Argus."
    },
    "save_notif": {
        "es": "Guardar", "en": "Save", "fr": "Enregistrer", "pt": "Salvar",
        "it": "Salva", "zh": "保存", "zh-Hant": "儲存", "ru": "Сохранить",
        "hi": "सहेजें", "ar": "حفظ", "ko": "저장", "ja": "保存", "uk": "Зберегти"
    },
    "users_title": {
        "es": "👥 Usuarios y Control de Acceso", "en": "👥 Users & Access Control", "fr": "👥 Utilisateurs et Contrôle d'accès",
        "pt": "👥 Usuários e Controle de Acesso", "it": "👥 Utenti e Controllo Accessi", "zh": "👥 用户与门禁控制",
        "zh-Hant": "👥 使用者與門禁控制", "ru": "👥 Пользователи и контроль доступа", "hi": "👥 उपयोगकर्ता और अभिगम नियंत्रण",
        "ar": "👥 المستخدمون والتحكم في الوصول", "ko": "👥 사용자 및 출입 제어", "ja": "👥 ユーザーとアクセス制御", "uk": "👥 Користувачі та контроль доступу"
    },
    "admin_only": {
        "es": "Solo administradores pueden modificar esta sección.",
        "en": "Only administrators can modify this section.",
        "fr": "Seuls les administrateurs peuvent modifier cette section.",
        "pt": "Apenas administradores podem modificar esta seção.",
        "it": "Solo gli amministratori possono modificare questa sezione.",
        "zh": "仅管理员可修改此部分。",
        "zh-Hant": "僅管理員可修改此部分。",
        "ru": "Только администраторы могут изменять этот раздел.",
        "hi": "केवल व्यवस्थापक ही इस अनुभाग को संशोधित कर सकते हैं।",
        "ar": "يمكن للمسؤولين فقط تعديل هذا القسم.",
        "ko": "관리자만 이 섹션을 수정할 수 있습니다.",
        "ja": "管理者のみがこのセクションを変更できます。",
        "uk": "Лише адміністратори можуть змінювати цей розділ."
    },
    "add_user": {
        "es": "Agregar usuario", "en": "Add User", "fr": "Ajouter un utilisateur",
        "pt": "Adicionar usuário", "it": "Aggiungi utente", "zh": "添加用户",
        "zh-Hant": "新增使用者", "ru": "Добавить пользователя", "hi": "उपयोगकर्ता जोड़ें",
        "ar": "إضافة مستخدم", "ko": "사용자 추가", "ja": "ユーザーを追加", "uk": "Додати користувача"
    },
    "username": {
        "es": "Nombre de Usuario", "en": "Username", "fr": "Nom d'utilisateur",
        "pt": "Nome de usuário", "it": "Nome utente", "zh": "用户名",
        "zh-Hant": "使用者名稱", "ru": "Имя пользователя", "hi": "उपयोगकर्ता नाम",
        "ar": "اسم المستخدم", "ko": "사용자 이름", "ja": "ユーザー名", "uk": "Ім'я користувача"
    },
    "user_pin": {
        "es": "PIN de usuario", "en": "User PIN", "fr": "PIN utilisateur",
        "pt": "PIN do usuário", "it": "PIN utente", "zh": "用户 PIN",
        "zh-Hant": "使用者 PIN", "ru": "PIN пользователя", "hi": "उपयोगकर्ता पिन",
        "ar": "رمز PIN للمستخدم", "ko": "사용자 PIN", "ja": "ユーザー PIN", "uk": "PIN користувача"
    },
    "is_admin": {
        "es": "Administrador", "en": "Administrator", "fr": "Administrateur",
        "pt": "Administrador", "it": "Amministratore", "zh": "管理员",
        "zh-Hant": "管理員", "ru": "Администратор", "hi": "व्यवस्थापक",
        "ar": "مسؤول", "ko": "관리자", "ja": "管理者", "uk": "Адміністратор"
    },
    "save_user": {
        "es": "Guardar", "en": "Save", "fr": "Enregistrer", "pt": "Salvar",
        "it": "Salva", "zh": "保存", "zh-Hant": "儲存", "ru": "Сохранить",
        "hi": "सहेजें", "ar": "حفظ", "ko": "저장", "ja": "保存", "uk": "Зберегти"
    },
    "no_users": {
        "es": "Sin usuarios adicionales configurados.", "en": "No additional users configured.",
        "fr": "Aucun utilisateur supplémentaire configuré.", "pt": "Nenhum usuário adicional configurado.",
        "it": "Nessun utente aggiuntivo configurato.", "zh": "未配置其他用户。",
        "zh-Hant": "未設定其他使用者。", "ru": "Дополнительные пользователи не настроены.",
        "hi": "कोई अतिरिक्त उपयोगकर्ता कॉन्फ़िगर नहीं किया गया।", "ar": "لم يتم تكوين مستخدمين إضافيين.",
        "ko": "구성된 추가 사용자가 없습니다.", "ja": "追加のユーザーは構成されていません。", "uk": "Додаткових користувачів не налаштовано."
    },
    "close": {
        "es": "Cerrar", "en": "Close", "fr": "Fermer", "pt": "Fechar",
        "it": "Chiudi", "zh": "关闭", "zh-Hant": "關閉", "ru": "Закрыть",
        "hi": "बंद करें", "ar": "إغلاق", "ko": "닫기", "ja": "閉じる", "uk": "Закрити"
    },
    "search_placeholder": {
        "es": "Buscar por nombre, área o entity_id", "en": "Search by name, area or entity_id",
        "fr": "Rechercher par nom, zone ou entity_id", "pt": "Pesquisar por nome, área ou entity_id",
        "it": "Cerca per nome, area o entity_id", "zh": "按名称、区域或 entity_id 搜索",
        "zh-Hant": "按名稱、區域或 entity_id 搜尋", "ru": "Поиск по имени, области или entity_id",
        "hi": "नाम, क्षेत्र या entity_id से खोजें", "ar": "البحث بالاسم أو المنطقة أو entity_id",
        "ko": "이름, 영역 또는 entity_id로 검색", "ja": "名前、エリア、または entity_id で検索", "uk": "Шукати за назвою, областю або entity_id"
    },
    "available": {
        "es": "Disponibles", "en": "Available", "fr": "Disponibles", "pt": "Disponíveis",
        "it": "Disponibili", "zh": "可用", "zh-Hant": "可用", "ru": "Доступно",
        "hi": "उपलब्ध", "ar": "متاح", "ko": "사용 가능", "ja": "利用可能", "uk": "Доступні"
    },
    "selected_lbl": {
        "es": "Seleccionadas", "en": "Selected", "fr": "Sélectionnés", "pt": "Selecionados",
        "it": "Selezionati", "zh": "已选择", "zh-Hant": "已選擇", "ru": "Выбрано",
        "hi": "चयनित", "ar": "محدد", "ko": "선택됨", "ja": "選択済み", "uk": "Вибрано"
    },
    "clear": {
        "es": "Limpiar", "en": "Clear", "fr": "Effacer", "pt": "Limpar",
        "it": "Cancella", "zh": "清除", "zh-Hant": "清除", "ru": "Очистить",
        "hi": "साफ़ करें", "ar": "مسح", "ko": "지우기", "ja": "クリア", "uk": "Очистити"
    },
    "accept": {
        "es": "Aceptar", "en": "Accept", "fr": "Accepter", "pt": "Aceitar",
        "it": "Accetta", "zh": "接受", "zh-Hant": "接受", "ru": "Принять",
        "hi": "स्वीकार करें", "ar": "قبول", "ko": "수락", "ja": "適用", "uk": "Прийняти"
    },
    "introduce_pin": {
        "es": "Introduce tu PIN", "en": "Enter your PIN", "fr": "Entrez votre PIN",
        "pt": "Digite seu PIN", "it": "Inserisci il tuo PIN", "zh": "输入您的 PIN 码",
        "zh-Hant": "輸入您的 PIN 碼", "ru": "Введите ваш PIN", "hi": "अपना पिन दर्ज करें",
        "ar": "أدخل رمز PIN الخاص بك", "ko": "PIN을 입력하세요", "ja": "PIN を入力", "uk": "Введіть свій PIN"
    },
    "pin_modal_desc": {
        "es": "PIN numérico para desarmar Argus", "en": "Numeric PIN to disarm Argus",
        "fr": "PIN numérique pour désarmer Argus", "pt": "PIN numérico para desarmar o Argus",
        "it": "PIN numerico per disinserire Argus", "zh": "用于撤防 Argus 的数字 PIN 码",
        "zh-Hant": "用於撤防 Argus 的數字 PIN 碼", "ru": "Цифровой PIN для снятия Argus с охраны",
        "hi": "Argus को निरस्त्र करने के लिए संख्यात्मक पिन", "ar": "رمز PIN رقمي لنزع سلاح Argus",
        "ko": "Argus 해제를 위한 숫자 PIN", "ja": "Argus を解除するための数字 PIN", "uk": "Числовий PIN для зняття Argus з охорони"
    },
    "confirm": {
        "es": "✓ Confirmar", "en": "✓ Confirm", "fr": "✓ Confirmer", "pt": "✓ Confirmar",
        "it": "✓ Conferma", "zh": "✓ 确认", "zh-Hant": "✓ 確認", "ru": "✓ Подтвердить",
        "hi": "✓ पुष्टि करें", "ar": "✓ تأكيد", "ko": "✓ 확인", "ja": "✓ 確認", "uk": "✓ Підтвердити"
    },
    "cancel": {
        "es": "Cancelar", "en": "Cancel", "fr": "Annuler", "pt": "Cancelar",
        "it": "Annulla", "zh": "取消", "zh-Hant": "取消", "ru": "Отмена",
        "hi": "रद्द करें", "ar": "إلغاء", "ko": "취소", "ja": "キャンセル", "uk": "Скасувати"
    },
    "disarmed": {
        "es": "Desarmado", "en": "Disarmed", "fr": "Désarmé", "pt": "Desarmado",
        "it": "Disinserito", "zh": "已撤防", "zh-Hant": "已撤防", "ru": "Снято с охраны",
        "hi": "निरस्त्र", "ar": "تم نزع السلاح", "ko": "해제됨", "ja": "警戒解除", "uk": "Знято з охорони"
    },
    "armed_home": {
        "es": "En Casa", "en": "Home", "fr": "Maison", "pt": "Em Casa",
        "it": "In Casa", "zh": "在家", "zh-Hant": "在家", "ru": "Дома",
        "hi": "घर पर", "ar": "في المنزل", "ko": "재택", "ja": "在宅", "uk": "Вдома"
    },
    "armed_away": {
        "es": "Ausente", "en": "Away", "fr": "Absent", "pt": "Ausente",
        "it": "Fuori Casa", "zh": "离家", "zh-Hant": "離家", "ru": "Вне дома",
        "hi": "बाहर", "ar": "بالخارج", "ko": "외출", "ja": "外出", "uk": "Не вдома"
    },
    "armed_night": {
        "es": "Noche", "en": "Night", "fr": "Nuit", "pt": "Noite",
        "it": "Notte", "zh": "夜间", "zh-Hant": "夜間", "ru": "Ночь",
        "hi": "रात", "ar": "ليلاً", "ko": "야간", "ja": "夜間", "uk": "Ніч"
    },
    "armed_vacation": {
        "es": "Vacaciones", "en": "Vacation", "fr": "Vacances", "pt": "Férias",
        "it": "Vacanza", "zh": "度假", "zh-Hant": "度假", "ru": "Отпуск",
        "hi": "छुट्टियाँ", "ar": "إجازة", "ko": "휴가", "ja": "休暇", "uk": "Відпустка"
    },
    "triggered": {
        "es": "¡ALARMA!", "en": "ALARM!", "fr": "ALARME !", "pt": "ALARME!",
        "it": "ALLARME!", "zh": "警报触发！", "zh-Hant": "警報觸發！", "ru": "ТРЕВОГА!",
        "hi": "अलार्म!", "ar": "إنذار!", "ko": "경보!", "ja": "アラーム！", "uk": "ТРИВОГА!"
    },
    "pending": {
        "es": "Cuenta regresiva", "en": "Pending", "fr": "En attente", "pt": "Pendente",
        "it": "In attesa", "zh": "等待中", "zh-Hant": "等待中", "ru": "Ожидание",
        "hi": "लंबित", "ar": "قيد الانتظار", "ko": "대기 중", "ja": "保留中", "uk": "Очікування"
    },
    "arming": {
        "es": "Armando", "en": "Arming", "fr": "Armement", "pt": "Armando",
        "it": "Inserimento", "zh": "正在布防", "zh-Hant": "正在布防", "ru": "Постановка на охрану",
        "hi": "सशस्त्र किया जा रहा है", "ar": "جاري التسليح", "ko": "설정 중", "ja": "警戒設定中", "uk": "Встановлення на охорону"
    },
    "sensor_section": {
        "es": "Sensores de Intrusión", "en": "Intrusion Sensors", "fr": "Capteurs d'intrusion",
        "pt": "Sensores de Intrusão", "it": "Sensori di Intrusione", "zh": "入侵传感器",
        "zh-Hant": "入侵感測器", "ru": "Датчики вторжения", "hi": "घुसपैठ सेंसर",
        "ar": "أجهزة استشعار التسلل", "ko": "침입 센서", "ja": "侵入センサー", "uk": "Датчики проникнення"
    },
    "siren_section": {
        "es": "Sirenas", "en": "Sirens", "fr": "Sirènes", "pt": "Sirenes",
        "it": "Sirene", "zh": "警报器", "zh-Hant": "警報器", "ru": "Сирены",
        "hi": "सायरन", "ar": "صافرات الإنذار", "ko": "사이렌", "ja": "サイレン", "uk": "Сирени"
    },
    "none_selected": {
        "es": "Ninguno seleccionado", "en": "None selected", "fr": "Aucun sélectionné",
        "pt": "Nenhum selecionado", "it": "Nessuno selezionato", "zh": "未选择任何项",
        "zh-Hant": "未選擇任何項目", "ru": "Ничего не выбрано", "hi": "कोई चयनित नहीं",
        "ar": "لم يتم تحديد أي منها", "ko": "선택된 항목 없음", "ja": "未選択", "uk": "Нічого не вибрано"
    },
    "save_mode": {
        "es": "💾 Guardar modo", "en": "💾 Save Mode", "fr": "💾 Enregistrer le mode",
        "pt": "💾 Salvar modo", "it": "💾 Salva modalità", "zh": "💾 保存模式",
        "zh-Hant": "💾 儲存模式", "ru": "💾 Сохранить режим", "hi": "💾 मोड सहेजें",
        "ar": "💾 حفظ الوضع", "ko": "💾 모드 저장", "ja": "💾 モードを保存", "uk": "💾 Зберегти режим"
    },
    "activity_log": {
        "es": "📋 Historial de Actividad", "en": "📋 Activity Log", "fr": "📋 Journal d'activité",
        "pt": "📋 Histórico de Atividades", "it": "📋 Registro Attività", "zh": "📋 活动记录",
        "zh-Hant": "📋 活動記錄", "ru": "📋 Журнал активности", "hi": "📋 गतिविधि लॉग",
        "ar": "📋 سجل الأنشطة", "ko": "📋 활동 로그", "ja": "📋 アクティビティ ログ", "uk": "📋 Журнал активності"
    },
    "history_refresh": {
        "es": "🔄 Actualizar", "en": "🔄 Refresh", "fr": "🔄 Actualiser",
        "pt": "🔄 Atualizar", "it": "🔄 Aggiorna", "zh": "🔄 刷新",
        "zh-Hant": "🔄 重新整理", "ru": "🔄 Обновить", "hi": "🔄 रीफ्रेश करें",
        "ar": "🔄 تحديث", "ko": "🔄 새로고침", "ja": "🔄 更新", "uk": "🔄 Оновити"
    },
    "btn_home": {
        "es": "🏠 EN CASA", "en": "🏠 HOME", "fr": "🏠 MAISON", "pt": "🏠 EM CASA",
        "it": "🏠 IN CASA", "zh": "🏠 在家", "zh-Hant": "🏠 在家", "ru": "🏠 ДОМА",
        "hi": "🏠 घर पर", "ar": "🏠 في المنزل", "ko": "🏠 재택", "ja": "🏠 在宅", "uk": "🏠 ВДОМА"
    },
    "btn_away": {
        "es": "🔒 AUSENTE", "en": "🔒 AWAY", "fr": "🔒 ABSENT", "pt": "🔒 AUSENTE",
        "it": "🔒 FUORI CASA", "zh": "🔒 离家", "zh-Hant": "🔒 離家", "ru": "🔒 ВНЕ ДОМА",
        "hi": "🔒 बाहर", "ar": "🔒 بالخارج", "ko": "🔒 외출", "ja": "🔒 外出", "uk": "🔒 НЕ ВДОМА"
    },
    "btn_night": {
        "es": "🌙 NOCHE", "en": "🌙 NIGHT", "fr": "🌙 NUIT", "pt": "🌙 NOITE",
        "it": "🌙 NOTTE", "zh": "🌙 夜间", "zh-Hant": "🌙 夜間", "ru": "🌙 НОЧЬ",
        "hi": "🌙 रात", "ar": "🌙 ليلاً", "ko": "🌙 야간", "ja": "🌙 夜間", "uk": "🌙 НІЧ"
    },
    "btn_vacation": {
        "es": "✈️ VACACIONES", "en": "✈️ VACATION", "fr": "✈️ VACANCES", "pt": "✈️ FÉRIAS",
        "it": "✈️ VACANZA", "zh": "✈️ 度假", "zh-Hant": "✈️ 度假", "ru": "✈️ ОТПУСК",
        "hi": "✈️ छुट्टियाँ", "ar": "✈️ إجازة", "ko": "✈️ 휴가", "ja": "✈️ 休暇", "uk": "✈️ ВІДПУСТКА"
    },
    "btn_disarmed": {
        "es": "DESARMADO", "en": "DISARMED", "fr": "DÉSARMÉ", "pt": "DESARMADO",
        "it": "DISINSERITO", "zh": "已撤防", "zh-Hant": "已撤防", "ru": "СНЯТО С ОХРАНЫ",
        "hi": "निरस्त्र", "ar": "تم نزع السلاح", "ko": "해제됨", "ja": "警戒解除", "uk": "ЗНЯТО З ОХОРОНИ"
    },
    "btn_sos": {
        "es": "🚨 SOS / PÁNICO", "en": "🚨 SOS / PANIC", "fr": "🚨 SOS / PANIQUE", "pt": "🚨 SOS / PÂNICO",
        "it": "🚨 SOS / PANICO", "zh": "🚨 紧急求助 / 恐慌", "zh-Hant": "🚨 緊急求助 / 恐慌", "ru": "🚨 SOS / ПАНИКА",
        "hi": "🚨 आपातकालीन / पैनिक", "ar": "🚨 استغاثة / ذعر", "ko": "🚨 SOS / 패닉", "ja": "🚨 SOS / パニック", "uk": "🚨 SOS / ПАНІКА"
    },
    "system_armed": {
        "es": "SISTEMA ARMADO", "en": "SYSTEM ARMED", "fr": "SYSTÈME ARMÉ", "pt": "SISTEMA ARMADO",
        "it": "SISTEMA INSERITO", "zh": "系统已布防", "zh-Hant": "系統已布防", "ru": "СИСТЕМА НА ОХРАНЕ",
        "hi": "सिस्टम सशस्त्र है", "ar": "النظام مسلح", "ko": "시스템 설정됨", "ja": "システム警戒中", "uk": "СИСТЕМА НА ОХОРОНІ"
    },
    "system_disarmed": {
        "es": "SISTEMA DESARMADO", "en": "SYSTEM DISARMED", "fr": "SYSTÈME DÉSARMÉ", "pt": "SISTEMA DESARMADO",
        "it": "SISTEMA DISINSERITO", "zh": "系统已撤防", "zh-Hant": "系統已撤防", "ru": "СИСТЕМА СНЯТА С ОХРАНЫ",
        "hi": "सिस्टम निरस्त्र है", "ar": "النظام منزوع السلاح", "ko": "시스템 해제됨", "ja": "システム警戒解除", "uk": "СИСТЕМА ЗНЯТА З ОХОРОНИ"
    },
    "connected": {
        "es": "CONECTADO", "en": "CONNECTED", "fr": "CONNECTÉ", "pt": "CONECTADO",
        "it": "CONNESSO", "zh": "已连接", "zh-Hant": "已連線", "ru": "ПОДКЛЮЧЕНО",
        "hi": "जुड़ा हुआ", "ar": "متصل", "ko": "연결됨", "ja": "接続済み", "uk": "ПІДКЛЮЧЕНО"
    },
    "bypass_lbl": {
        "es": "🚫 Omitir", "en": "🚫 Bypass", "fr": "🚫 Ignorer", "pt": "🚫 Ignorar",
        "it": "🚫 Escludi", "zh": "🚫 旁路", "zh-Hant": "🚫 旁路", "ru": "🚫 Обход",
        "hi": "🚫 बायपास", "ar": "🚫 تجاوز", "ko": "🚫 바이패스", "ja": "🚫 バイパス", "uk": "🚫 Обхід"
    },
    "lock_if_open": {
        "es": "Bloquear si abiertos", "en": "Lock if open", "fr": "Bloquer si ouvert", "pt": "Bloquear se aberto",
        "it": "Blocca se aperto", "zh": "打开时锁定", "zh-Hant": "開啟時鎖定", "ru": "Блокировать при открытии",
        "hi": "खुला होने पर लॉक करें", "ar": "قفل إذا كان مفتوحًا", "ko": "열려 있으면 잠금", "ja": "開いている場合はロック", "uk": "Блокувати, якщо відкрито"
    },
    "wait_if_open": {
        "es": "Esperar armado en espera", "en": "Wait for sensors to close", "fr": "Attendre la fermeture", "pt": "Aguardar fechamento",
        "it": "Attendi chiusura sensori", "zh": "等待传感器关闭", "zh-Hant": "等待感測器關閉", "ru": "Ожидать закрытия датчиков",
        "hi": "सेंसर बंद होने की प्रतीक्षा करें", "ar": "انتظر حتى تغلق أجهزة الاستشعار", "ko": "센서가 닫힐 때까지 대기", "ja": "センサーが閉じるのを待つ", "uk": "Очікувати закриття датчиків"
    },
    "select_btn": {
        "es": "+ Seleccionar", "en": "+ Select", "fr": "+ Sélectionner", "pt": "+ Selecionar",
        "it": "+ Seleziona", "zh": "+ 选择", "zh-Hant": "+ 選擇", "ru": "+ Выбрать",
        "hi": "+ चुनें", "ar": "+ تحديد", "ko": "+ 선택", "ja": "+ 選択", "uk": "+ Вибрати"
    },
    "add_btn": {
        "es": "+ Añadir", "en": "+ Add", "fr": "+ Ajouter", "pt": "+ Adicionar",
        "it": "+ Aggiungi", "zh": "+ 添加", "zh-Hant": "+ 新增", "ru": "+ Добавить",
        "hi": "+ जोड़ें", "ar": "+ إضافة", "ko": "+ 추가", "ja": "+ 追加", "uk": "+ Додати"
    },
    "sos_slide": {
        "es": "Desliza para activar SOS", "en": "Slide to activate SOS", "fr": "Glisser pour activer le SOS", "pt": "Deslize para ativar SOS",
        "it": "Scorri per attivare SOS", "zh": "滑动以激活 SOS", "zh-Hant": "滑動以啟動 SOS", "ru": "Проведите для активации SOS",
        "hi": "SOS सक्रिय करने के लिए स्लाइड करें", "ar": "مرر لتفعيل SOS", "ko": "SOS 활성화를 위해 슬라이드", "ja": "スライドして SOS を起動", "uk": "Проведіть для активації SOS"
    },
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
    "times_section": {
        "es": "⏱️ Tiempos", "en": "⏱️ Timers", "fr": "⏱️ Minuteries", "pt": "⏱️ Temporizadores",
        "it": "⏱️ Timer", "zh": "⏱️ 计时器", "zh-Hant": "⏱️ 計時器", "ru": "⏱️ Таймеры",
        "hi": "⏱️ टाइमर", "ar": "⏱️ المؤقتات", "ko": "⏱️ 타이머", "ja": "⏱️ タイマー", "uk": "⏱️ Таймери"
    },
    "arm_time": {
        "es": "Armado (s)", "en": "Arming delay (s)", "fr": "Délai d'armement (s)", "pt": "Atraso de armação (s)",
        "it": "Ritardo inserimento (s)", "zh": "布防延迟 (秒)", "zh-Hant": "布防延遲 (秒)", "ru": "Задержка постановки (с)",
        "hi": "आर्मिंग विलंब (सेकंड)", "ar": "تأخير التسليح (ثانية)", "ko": "설정 지연 (초)", "ja": "警戒設定遅延 (秒)", "uk": "Затримка встановлення (с)"
    },
    "disarm_time": {
        "es": "Retraso de entrada (s)", "en": "Entry delay (s)", "fr": "Délai d'entrée (s)", "pt": "Atraso de entrada (s)",
        "it": "Ritardo ingresso (s)", "zh": "进入延迟 (秒)", "zh-Hant": "進入延遲 (秒)", "ru": "Задержка входа (с)",
        "hi": "प्रवेश विलंब (सेकंड)", "ar": "تأخير الدخول (ثانية)", "ko": "진입 지연 (초)", "ja": "進入遅延 (秒)", "uk": "Затримка входу (с)"
    },
    "mqtt_label": {
        "es": "MQTT", "en": "MQTT", "fr": "MQTT", "pt": "MQTT", "it": "MQTT",
        "zh": "MQTT", "zh-Hant": "MQTT", "ru": "MQTT", "hi": "MQTT", "ar": "MQTT",
        "ko": "MQTT", "ja": "MQTT", "uk": "MQTT"
    },
    "save_config": {
        "es": "GUARDAR CONFIGURACIÓN", "en": "SAVE CONFIGURATION", "fr": "ENREGISTRER LA CONFIGURATION",
        "pt": "SALVAR CONFIGURAÇÃO", "it": "SALVA CONFIGURAZIONE", "zh": "保存配置", "zh-Hant": "儲存設定",
        "ru": "СОХРАНИТЬ КОНФИГУРАЦИЮ", "hi": "कॉन्फ़िगरेशन सहेजें", "ar": "حفظ التكوين",
        "ko": "구성 저장", "ja": "構成を保存", "uk": "ЗБЕРЕГТИ КОНФІГУРАЦІЮ"
    },
    "use_ha_language": {
        "es": "Usar idioma de Home Assistant", "en": "Use Home Assistant language", "fr": "Utiliser la langue de Home Assistant",
        "pt": "Usar idioma do Home Assistant", "it": "Usa la lingua di Home Assistant", "zh": "使用 Home Assistant 语言",
        "zh-Hant": "使用 Home Assistant 語言", "ru": "Использовать язык Home Assistant", "hi": "Home Assistant भाषा का उपयोग करें",
        "ar": "استخدام لغة Home Assistant", "ko": "Home Assistant 언어 사용", "ja": "Home Assistant の言語を使用", "uk": "Використовувати мову Home Assistant"
    },
    "lang_selector_lbl": {
        "es": "⚙️ Idioma / Language", "en": "⚙️ Language", "fr": "⚙️ Langue", "pt": "⚙️ Idioma",
        "it": "⚙️ Lingua", "zh": "⚙️ 语言", "zh-Hant": "⚙️ 語言", "ru": "⚙️ Язык",
        "hi": "⚙️ भाषा", "ar": "⚙️ اللغة", "ko": "⚙️ 언어", "ja": "⚙️ 言語", "uk": "⚙️ Мова"
    },
    "role_argus_admin": {
        "es": "Administrador de Argus", "en": "Argus Administrator", "fr": "Administrateur Argus",
        "pt": "Administrador do Argus", "it": "Amministratore Argus", "zh": "Argus 管理员",
        "zh-Hant": "Argus 管理員", "ru": "Администратор Argus", "hi": "Argus व्यवस्थापक",
        "ar": "مسؤول Argus", "ko": "Argus 관리자", "ja": "Argus 管理者", "uk": "Адміністратор Argus"
    },
    "role_argus_standard": {
        "es": "Usuario estándar", "en": "Standard User", "fr": "Utilisateur standard",
        "pt": "Usuário padrão", "it": "Utente standard", "zh": "标准用户",
        "zh-Hant": "標準使用者", "ru": "Обычный пользователь", "hi": "मानक उपयोगकर्ता",
        "ar": "مستخدم قياسي", "ko": "표준 사용자", "ja": "標準ユーザー", "uk": "Звичайний користувач"
    },
    "switch_profile_btn": {
        "es": "👤 Cambiar de Perfil", "en": "👤 Switch Profile", "fr": "👤 Changer de profil",
        "pt": "👤 Alternar perfil", "it": "👤 Cambia profilo", "zh": "👤 切换个人资料",
        "zh-Hant": "👤 切換設定檔", "ru": "👤 Сменить профиль", "hi": "👤 प्रोफ़ाइल बदलें",
        "ar": "👤 تبديل الملف الشخصي", "ko": "👤 프로필 전환", "ja": "👤 プロファイルを切り替え", "uk": "👤 Змінити профіль"
    },
    "clear_log_btn": {
        "es": "BORRAR", "en": "CLEAR", "fr": "EFFACER", "pt": "LIMPAR", "it": "CANCELLA",
        "zh": "清除", "zh-Hant": "清除", "ru": "ОЧИСТИТЬ", "hi": "साफ़ करें", "ar": "مسح",
        "ko": "지우기", "ja": "クリア", "uk": "ОЧИСТИТИ"
    },
    "edit_dashboard": {
        "es": "Editar tablero", "en": "Edit Dashboard", "fr": "Modifier le tableau", "pt": "Editar painel",
        "it": "Modifica dashboard", "zh": "编辑仪表板", "zh-Hant": "編輯儀表板", "ru": "Редактировать панель",
        "hi": "डैशबोर्ड संपादित करें", "ar": "تعديل لوحة المعلومات", "ko": "대시보드 편집", "ja": "ダッシュボードを編集", "uk": "Редагувати панель"
    },
    "edit_dashboard_done": {
        "es": "✓ Listo", "en": "✓ Done", "fr": "✓ Terminé", "pt": "✓ Concluído", "it": "✓ Fatto",
        "zh": "✓ 完成", "zh-Hant": "✓ 完成", "ru": "✓ Готово", "hi": "✓ संपन्न", "ar": "✓ تم",
        "ko": "✓ 완료", "ja": "✓ 完了", "uk": "✓ Готово"
    },
    "reset_dashboard": {
        "es": "Restablecer diseño", "en": "Reset Layout", "fr": "Réinitialiser la disposition", "pt": "Redefinir layout",
        "it": "Ripristina layout", "zh": "重置布局", "zh-Hant": "重設版面配置", "ru": "Сбросить макет",
        "hi": "लेआउट रीसेट करें", "ar": "إعادة تعيين التخطيط", "ko": "레이아웃 재설정", "ja": "レイアウトをリセット", "uk": "Скинути макет"
    },
    "exp_indefinite": {
        "es": "Indefinido", "en": "Indefinite", "fr": "Indéfini", "pt": "Indefinido", "it": "Indefinito",
        "zh": "无限期", "zh-Hant": "無期限", "ru": "Бессрочно", "hi": "अनिश्चित", "ar": "غير محدد",
        "ko": "무기한", "ja": "無期限", "uk": "Безстроково"
    },
    "exp_temporary": {
        "es": "Temporal (Fecha/Hora)", "en": "Temporary (Date/Time)", "fr": "Temporaire (Date/Heure)", "pt": "Temporário (Data/Hora)",
        "it": "Temporaneo (Data/Ora)", "zh": "临时 (日期/时间)", "zh-Hant": "暫時 (日期/時間)", "ru": "Временно (Дата/Время)",
        "hi": "अस्थायी (दिनांक/समय)", "ar": "مؤقت (التاريخ/الوقت)", "ko": "임시 (날짜/시간)", "ja": "一時的 (日時)", "uk": "Тимчасово (Дата/Час)"
    },
    "active_until": {
        "es": "Vence", "en": "Expires", "fr": "Expire le", "pt": "Expira em", "it": "Scade il",
        "zh": "有效期至", "zh-Hant": "有效期限至", "ru": "Истекает", "hi": "समाप्त होता है", "ar": "ينتهي في",
        "ko": "만료일", "ja": "有効期限", "uk": "Діє до"
    },
    "expired": {
        "es": "Expirado", "en": "Expired", "fr": "Expiré", "pt": "Expirado", "it": "Scaduto",
        "zh": "已过期", "zh-Hant": "已過期", "ru": "Истек", "hi": "समाप्त हो गया", "ar": "منتهي الصلاحية",
        "ko": "만료됨", "ja": "期限切れ", "uk": "Вичерпано"
    }
}
print("Loaded base map with", len(TRANSLATION_MAP), "core keys")
