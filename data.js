/**
 * Data Layer (Store/Schema)
 * Здесь хранятся начальные структуры данных и "фейковые" данные для разработки.
 * В будущем можно добавить сюда логику кеширования (LocalStorage/IndexedDB).
 */

const DB = {
    // Начальное состояние приложения (состояние "по умолчанию")
    initialState: {
        user: {
            id: null,
            name: "Гость",
            avatar: "assets/default-avatar.png",
            settings: {
                theme: "light",
                notifications: true
            }
        },
        chats: [
            { 
                id: "chat_001", 
                name: "Telegram Support", 
                lastMessage: "Добро пожаловать в XGram!", 
                unread: 0,
                timestamp: Date.now() 
            },
            { 
                id: "chat_002", 
                name: "Разработчики", 
                lastMessage: "Код структуры готов?", 
                unread: 3,
                timestamp: Date.now() - 3600000 
            }
        ]
    },

    // Структура сообщения (чтобы везде была одинаковой)
    createMessage(text, from, chatId) {
        return {
            id: Date.now().toString(),
            chatId: chatId,
            text: text,
            from: from, // 'me' или 'other'
            timestamp: Date.now(),
            status: 'sent' // sent, delivered, read
        };
    },

    // Метод для получения чата по ID (удобно для фильтрации)
    getChatById(chats, id) {
        return chats.find(chat => chat.id === id);
    },

    // Локальный кэш для быстрой работы
    cache: {
        messages: {}
    }
};

// Экспорт для других модулей
window.DB = DB;
