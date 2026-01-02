/**
 * DevJourney 2026: Smart AI Edition
 * Modal Bileşenleri
 */

/**
 * Ayarlar modalını açar
 * @param {string} currentApiKey - Mevcut API anahtarı
 */
export function openSettingsModal(currentApiKey) {
    const apiKeyInput = document.getElementById('apiKeyInput');
    if (apiKeyInput) {
        apiKeyInput.value = currentApiKey;
    }
    document.getElementById('settingsModal').classList.remove('hidden');
}

/**
 * Ayarlar modalını kapatır
 */
export function closeSettingsModal() {
    document.getElementById('settingsModal').classList.add('hidden');
}

/**
 * Detay modalını açar ve içeriği doldurur
 * @param {Object} day - Gün bilgileri
 * @param {number} quarter - Çeyrek bilgisi
 * @param {Object} progressData - İlerleme verisi
 */
export function openDetailModal(day, quarter, progressData) {
    const p = progressData[day.d] || { completed: false, time: "", notes: "" };

    // Modal başlık bilgilerini doldur
    document.getElementById('modalMeta').innerText = `GÜN ${day.d}`;
    document.getElementById('modalQuarter').innerText = `ÇEYREK ${quarter}`;
    document.getElementById('modalTitle').innerText = day.t;
    document.getElementById('modalRef').innerText = day.ref;
    document.getElementById('modalDesc').innerText = day.desc;

    // Form alanlarını doldur
    document.getElementById('inputDuration').value = p.time || "";
    document.getElementById('inputCompleted').checked = p.completed || false;
    document.getElementById('inputNotes').value = p.notes || "";

    // AI görünümünü sıfırla
    resetAIView();

    // Modalı göster
    document.getElementById('detailModal').classList.remove('hidden');
}

/**
 * Detay modalını kapatır
 */
export function closeDetailModal() {
    document.getElementById('detailModal').classList.add('hidden');
}

/**
 * AI görünümünü sıfırlar
 */
export function resetAIView() {
    document.getElementById('aiContentWrapper').classList.add('hidden');
    document.getElementById('aiOutput').innerHTML = "";
    document.getElementById('aiPlaceholder').classList.remove('hidden');
}

/**
 * AI yükleme durumunu gösterir
 */
export function showAILoading() {
    document.getElementById('aiContentWrapper').classList.add('hidden');
    document.getElementById('aiPlaceholder').classList.add('hidden');
    document.getElementById('aiLoading').classList.remove('hidden');
}

/**
 * AI yükleme durumunu gizler
 */
export function hideAILoading() {
    document.getElementById('aiLoading').classList.add('hidden');
}

/**
 * AI içeriğini render eder
 * @param {string} markdownText - Markdown formatında AI yanıtı
 * @param {string} label - İçerik etiketi
 * @param {Function} onRegenerate - Yeniden oluştur callback'i
 */
export function renderAIContent(markdownText, label, onRegenerate) {
    const outputWrapper = document.getElementById('aiContentWrapper');
    const outputDiv = document.getElementById('aiOutput');
    const labelElement = document.getElementById('aiContentTypeLabel');
    const regenBtn = document.getElementById('regenerateBtn');

    // Etiketi ayarla
    labelElement.innerText = label;

    // Yeniden oluştur butonunu ayarla
    regenBtn.onclick = onRegenerate;

    // Markdown'ı render et
    outputDiv.innerHTML = marked.parse(markdownText);

    // Kod bloklarını stillendir
    outputDiv.querySelectorAll('pre code').forEach((block) => {
        block.style.backgroundColor = "transparent";
    });

    outputWrapper.classList.remove('hidden');
}

/**
 * AI hata mesajını gösterir
 * @param {string} errorMessage - Hata mesajı
 */
export function showAIError(errorMessage) {
    const outputWrapper = document.getElementById('aiContentWrapper');
    const outputDiv = document.getElementById('aiOutput');

    outputDiv.innerHTML = `
        <div class="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200">
            <i class="fa-solid fa-triangle-exclamation"></i> Hata: ${errorMessage}
        </div>
    `;

    outputWrapper.classList.remove('hidden');
}

