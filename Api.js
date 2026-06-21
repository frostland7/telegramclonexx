/**
 * Data Access Layer (DAL)
 * Управление всеми запросами к базе данных
 */

const API = {
    db: null,

    init() {
        firebase.initializeApp({
            apiKey: APP_CONFIG.FIREBASE.API_KEY,
            databaseURL: APP_CONFIG.FIREBASE.DB_URL,
            projectId: APP_CONFIG.FIREBASE.PROJECT_ID
        });
        this.db = firebase.database();
        console.log("API Layer Initialized");
    },

    /**
     * @param {string} path - Путь в БД
     * @param {function} callback - Функция обработки данных
     */
    subscribe(path, callback) {
        this.db.ref(path).on('value', snap => callback(snap.val() || {}));
    },

    /**
     * @param {string} path 
     * @param {object} data 
     */
    push(path, data) {
        return this.db.ref(path).push({
            ...data,
            timestamp: Date.now()
        });
    },

    /**
     * @param {string} path 
     */
    remove(path) {
        return this.db.ref(path).remove();
    }
};
