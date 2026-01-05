/**
 * DevJourney 2026: Smart AI Edition
 * LocalStorage Servisi (Fallback)
 */

export class StorageService {
    /**
     * İlerleme verilerini LocalStorage'dan yükler
     * @returns {Object} İlerleme verileri
     */
    static loadProgressData() {
        try {
            const data = localStorage.getItem('devjourney_progress');
            return data ? JSON.parse(data) : {};
        } catch (error) {
            console.error('LocalStorage okuma hatası:', error);
            return {};
        }
    }

    /**
     * İlerleme verilerini LocalStorage'a kaydeder
     * @param {Object} data - İlerleme verileri
     */
    static saveProgressData(data) {
        try {
            localStorage.setItem('devjourney_progress', JSON.stringify(data));
        } catch (error) {
            console.error('LocalStorage yazma hatası:', error);
        }
    }

    /**
     * API anahtarını LocalStorage'dan yükler
     * @returns {string} API anahtarı
     */
    static loadApiKey() {
        try {
            return localStorage.getItem('devjourney_api_key') || '';
        } catch (error) {
            console.error('API anahtarı okuma hatası:', error);
            return '';
        }
    }

    /**
     * API anahtarını LocalStorage'a kaydeder
     * @param {string} key - API anahtarı
     */
    static saveApiKey(key) {
        try {
            localStorage.setItem('devjourney_api_key', key);
        } catch (error) {
            console.error('API anahtarı kaydetme hatası:', error);
        }
    }

    /**
     * Yedek dosyası indirir
     * @param {Object} progressData - İlerleme verileri
     * @param {string} apiKey - API anahtarı
     */
    static downloadBackup(progressData, apiKey) {
        const backup = {
            progress: progressData,
            apiKey: apiKey,
            timestamp: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `devjourney-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    /**
     * Yedek dosyasını parse eder
     * @param {string} fileContent - Dosya içeriği
     * @returns {Object} İlerleme verileri
     */
    static parseBackupFile(fileContent) {
        try {
            const backup = JSON.parse(fileContent);
            return backup.progress || {};
        } catch (error) {
            throw new Error('Geçersiz yedek dosyası formatı');
        }
    }
}

