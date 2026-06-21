/**
 * Utils Layer v1.0.0
 * Вспомогательные функции для очистки кода
 */

const Utils = {
    // Красивый формат времени
    formatTime(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },

    // Защита от XSS (вставка вредоносного кода)
    sanitize(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    // Генерация уникальных ID
    generateUUID() {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    },

    // Дебаунс (защита от частых нажатий)
    debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }
};
