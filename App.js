/**
 * Main Application Controller
 */

const App = {
    activeChatId: null,
    currentUser: "user_123", // В реальности берется из Telegram WebApp initData

    async init() {
        API.init();
        console.log("System Initialized");
        
        // Загружаем чаты через API
        const chats = await API.getChats(this.currentUser);
        UI.renderChats(chats);
    },

    openChat(id, title) {
        this.activeChatId = id;
        document.getElementById('chat-title').innerText = title;
        
        // Подписываемся на поток сообщений
        API.subscribeToMessages(id, (msgs) => {
            UI.renderMessages(msgs, this.currentUser);
        });
        
        UI.navigate('chat');
    },

    async sendMessage() {
        const input = document.getElementById('msg-input');
        if (!input.value.trim()) return;

        const msgPayload = {
            text: Utils.sanitize(input.value),
            from: this.currentUser,
            time: Utils.formatTime(Date.now())
        };

        await API.sendMessage(this.activeChatId, msgPayload);
        input.value = '';
    }
};

// Запуск
document.addEventListener('DOMContentLoaded', () => App.init());
