/**
 * XGram Main Application Entry Point
 * Главный файл, запускающий жизненный цикл приложения
 */

const App = {
    user: { id: localStorage.getItem(APP_CONFIG.SYSTEM.STORAGE_KEY) },
    activeChat: null,

    init() {
        API.init();
        
        // Telegram WebApp Setup
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand();

        this.bindEvents();

        if (this.user.id) {
            UI.navigate('chats');
            this.loadChats();
        }
    },

    bindEvents() {
        document.getElementById('btn-login').onclick = () => {
            const id = document.getElementById('inp-login').value;
            if(!id) return;
            localStorage.setItem(APP_CONFIG.SYSTEM.STORAGE_KEY, id);
            this.user.id = id;
            UI.navigate('chats');
            this.loadChats();
        };

        document.getElementById('btn-send').onclick = () => {
            const txt = document.getElementById('inp-msg').value;
            if(!txt || !this.activeChat) return;
            API.push(`chats/${this.activeChat}/msgs`, { from: this.user.id, text: txt });
            document.getElementById('inp-msg').value = '';
        };
    },

    loadChats() {
        API.subscribe('chats', (data) => {
            UI.renderChatList(data, this.user.id, (chatId) => {
                this.activeChat = chatId;
                UI.navigate('dialog');
                this.loadMessages();
            });
        });
    },

    loadMessages() {
        API.subscribe(`chats/${this.activeChat}/msgs`, (msgs) => {
            UI.renderMessages(msgs, this.user.id);
        });
    }
};

// Запуск системы
document.addEventListener('DOMContentLoaded', () => App.init());
