const App = {
    activeChatId: null,

    init() {
        UI.renderChats(DB.chats);
        if(window.Telegram?.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
        }
    },

    openChat(id, name) {
        this.activeChatId = id;
        document.getElementById('chat-title').innerText = name;
        UI.renderMessages(DB.msgs[id] || []);
        UI.navigate('chat');
    },

    sendMessage() {
        const input = document.getElementById('msg-input');
        if(!input.value) return;
        
        if(!DB.msgs[this.activeChatId]) DB.msgs[this.activeChatId] = [];
        
        DB.msgs[this.activeChatId].push({
            text: input.value,
            from: 'me',
            time: new Date().toLocaleTimeString()
        });
        
        input.value = '';
        UI.renderMessages(DB.msgs[this.activeChatId]);
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
