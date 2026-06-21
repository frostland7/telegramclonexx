/**
 * XGram Enterprise Configuration Module
 * Центральное хранилище настроек приложения. 
 * Изменяй этот файл, чтобы управлять поведением всей системы.
 */

const APP_CONFIG = {
    // Версия системы (для кэширования и обновлений)
    VERSION: "1.0.0",
    
    // Режим разработки (отключает логгирование в продакшене)
    DEBUG: true,

    // Конфигурация Firebase (замени на свои ключи из консоли Firebase)
    FIREBASE: {
        apiKey: "AIzaSyAUFvEAHdIbYvflB7n-DMQXM_ydZcuT35o",
        authDomain: "jwbsjadh.firebaseapp.com",
        databaseURL: "https://jwbsjadh-default-rtdb.firebaseio.com/",
        projectId: "jwbsjadh",
        storageBucket: "jwbsjadh.appspot.com",
        messagingSenderId: "1234567890",
        appId: "1:1234567890:web:abc123def456"
    },

    // Константы интерфейса
    UI: {
        ANIMATION_DURATION: 300,
        DEFAULT_AVATAR: "assets/images/default-avatar.png",
        THEMES: {
            LIGHT: 'light',
            DARK: 'dark'
        }
    },

    // Ключи для localStorage (чтобы не дублировать строки по всему коду)
    STORAGE_KEYS: {
        USER_ID: "xgram_uid",
        THEME: "xgram_theme",
        SESSION: "xgram_session"
    },

    // Лимиты системы
    LIMITS: {
        MAX_MESSAGE_LENGTH: 4096,
        CHAT_LIST_LIMIT: 50
    }
};

// Делаем конфиг глобально доступным для всех модулей
window.APP_CONFIG = APP_CONFIG;

// Лог инициализации конфигурации
if (APP_CONFIG.DEBUG) {
    console.log(`%c [XGram] Config v${APP_CONFIG.VERSION} loaded successfully`, "color: #2481cc; font-weight: bold;");
}
