/**
 * DevJourney 2026: Smart AI Edition
 * Toast Bildirim Bileşeni
 */

/**
 * Toast bildirimini gösterir
 * @param {string} message - Gösterilecek mesaj
 * @param {number} duration - Görünme süresi (ms)
 */
export function showToast(message, duration = 3000) {
    const toastElement = document.getElementById('toast');
    const toastMsgElement = document.getElementById('toastMsg');

    if (!toastElement || !toastMsgElement) {
        console.warn('Toast elemanları bulunamadı');
        return;
    }

    toastMsgElement.innerText = message;
    toastElement.classList.remove('translate-y-24', 'opacity-0');

    setTimeout(() => {
        toastElement.classList.add('translate-y-24', 'opacity-0');
    }, duration);
}

