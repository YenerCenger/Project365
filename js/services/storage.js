/**
 * DevJourney 2026: Smart AI Edition
 * LocalStorage Servisi
 */

const STORAGE_KEYS = {
    PROGRESS_DATA: 'devJourneyPro_Data',
    API_KEY: 'devJourneyPro_ApiKey'
};

/**
 * Storage servisi - LocalStorage işlemlerini yönetir
 */
export const StorageService = {
    /**
     * İlerleme verisini yükler
     * @returns {Object} Progress verisi
     */
    loadProgressData() {
        const savedData = localStorage.getItem(STORAGE_KEYS.PROGRESS_DATA);
        return savedData ? JSON.parse(savedData) : {};
    },

    /**
     * İlerleme verisini kaydeder
     * @param {Object} data - Kaydedilecek veri
     */
    saveProgressData(data) {
        localStorage.setItem(STORAGE_KEYS.PROGRESS_DATA, JSON.stringify(data));
    },

    /**
     * API anahtarını yükler
     * @returns {string} API anahtarı
     */
    loadApiKey() {
        return localStorage.getItem(STORAGE_KEYS.API_KEY) || '';
    },

    /**
     * API anahtarını kaydeder
     * @param {string} key - API anahtarı
     */
    saveApiKey(key) {
        localStorage.setItem(STORAGE_KEYS.API_KEY, key);
    },

    /**
     * Tüm veriyi yedek olarak indirir
     * @param {Object} progressData - İlerleme verisi
     * @param {string} apiKey - API anahtarı
     */
    downloadBackup(progressData, apiKey) {
        const dataToSave = {
            progress: progressData,
            settings: { hasKey: !!apiKey },
            exportDate: new Date().toISOString()
        };
        
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToSave, null, 2));
        const downloadLink = document.createElement('a');
        downloadLink.setAttribute("href", dataStr);
        downloadLink.setAttribute("download", `DevJourney_Smart_Yedek_${new Date().toISOString().slice(0, 10)}.json`);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();
    },

    /**
     * Yedek dosyasını parse eder
     * @param {string} fileContent - Dosya içeriği
     * @returns {Object} Parse edilmiş veri
     */
    parseBackupFile(fileContent) {
        const content = JSON.parse(fileContent);
        
        // Eski format uyumluluğu
        if (content.progress) {
            return content.progress;
        }
        
        return content;
    }
};

