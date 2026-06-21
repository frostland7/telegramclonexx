/**
 * API Layer v1.0.0
 * Отвечает за прямое взаимодействие с Firebase Realtime Database
 */

const API = {
    // Инициализация подключения
    init() {
        const firebaseConfig = {
            apiKey: "AIzaSyAUFvEAHdIbYvflB7n-DMQXM_ydZcuT35o", // Твой ключ
            databaseURL: "https://jwbsjadh-default-rtdb.firebaseio.com/",
            projectId: "jwbsjadh"
        };
        
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.database();
        console.log("API Layer: Connected to Firebase");
    },

    // Чтение списка чатов
    async getChats(userId) {
        return new Promise((resolve) => {
            this.db.ref('chats').orderByChild('member').equalTo(userId)
                .once('value', snap => resolve(snap.val() || {}));
        });
    },

    // Подписка на сообщения в реальном времени (самое важное для мессенджера)
    subscribeToMessages(chatId, callback) {
        this.db.ref(`messages/${chatId}`).on('value', (snap) => {
            const data = snap.val() || {};
            callback(Object.values(data));
        });
    },

    // Отправка сообщения
    async sendMessage(chatId, messageData) {
        const newMessageRef = this.db.ref(`messages/${chatId}`).push();
        return await newMessageRef.set({
            ...messageData,
            timestamp: Date.now()
        });
    },

    // Очистка памяти (отписка)
    unsubscribe(chatId) {
        this.db.ref(`messages/${chatId}`).off();
    }
};
