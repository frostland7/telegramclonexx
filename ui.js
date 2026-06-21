/**
 * UI Controller
 * Управление отображением и реакцией на клики
 */

const UI = {
    navigate(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const el = document.getElementById('p-' + pageId);
        if(el) el.classList.add('active');
    },

    renderChatList(chats, myId, onClickCallback) {
        const list = document.getElementById('chat-list');
        list.innerHTML = '';
        Object.keys(chats).forEach(id => {
            if(id.includes(myId)) {
                const div = document.createElement('div');
                div.className = 'chat-card';
                div.innerText = 'Чат: ' + id.replace(myId, '').replace('_', '');
                div.onclick = () => onClickCallback(id);
                list.appendChild(div);
            }
        });
    },

    renderMessages(msgs, myId) {
        const area = document.getElementById('msg-list');
        area.innerHTML = '';
        Object.keys(msgs).forEach(key => {
            const m = msgs[key];
            const div = document.createElement('div');
            div.className = `msg-bubble ${m.from === myId ? 'msg-out' : 'msg-in'}`;
            div.innerText = m.text;
            area.appendChild(div);
        });
        area.scrollTop = area.scrollHeight;
    }
};
