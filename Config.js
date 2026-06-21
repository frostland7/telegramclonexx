/**
 * Application Configuration Module
 * Управляет всеми API ключами и параметрами системы
 */

const APP_CONFIG = {
    VERSION: "1.0.0",
    DEBUG: true,
    
    FIREBASE: {
        API_KEY: "AIzaSyAUFvEAHdIbYvflB7n-DMQXM_ydZcuT35o",
        PROJECT_ID: "jwbsjadh",
        DB_URL: "https://jwbsjadh-default-rtdb.firebaseio.com/"
    },

    SYSTEM: {
        STORAGE_KEY: "x_uid",
        DEFAULT_LANG: "ru",
        SESSION_TIMEOUT: 3600000 // 1 hour
    }
};

// Экспорт для доступа в других модулях (если используется ES Modules)
window.APP_CONFIG = APP_CONFIG;
