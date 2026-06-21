const UI = {
    navigate(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('page-' + pageId).classList.add('active');
    },

    renderChats(chats, onClick) {
        const list = document.getElementById('chat-list');
        list.innerHTML = chats.map(c => `
            <div class="chat-item" onclick="App.openChat(${c.id}, '${c.name}')">
                <div class="avatar">${c.name[0]}</div>
                <div><b>${c.name}</b><br><small>${c.last}</small></div>
            </div>
        `).join('');
    },

    renderMessages(msgs) {
        const list = document.getElementById('msg-list');
        list.innerHTML = msgs.map(m => `
            <div class="msg ${m.from}">${m.text}</div>
        `).join('');
        list.scrollTop = list.scrollHeight;
    }
};
