/**
 * DevJourney 2026: Smart AI Edition
 * Supabase Servisi
 */

export class SupabaseService {
    constructor(supabaseUrl, supabaseKey) {
        if (!supabaseUrl || !supabaseKey) {
            console.warn('Supabase URL veya Key tanımlı değil. LocalStorage kullanılacak.');
            this.client = null;
            return;
        }

        this.client = window.supabase.createClient(supabaseUrl, supabaseKey);
        this.setupAuthListener();
    }

    /**
     * Auth state değişikliklerini dinler
     */
    setupAuthListener() {
        if (!this.client) return;

        this.client.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session) {
                console.log('Kullanıcı giriş yaptı:', session.user.email);
                // Otomatik veri senkronizasyonu
                this.syncDataFromSupabase();
            } else if (event === 'SIGNED_OUT') {
                console.log('Kullanıcı çıkış yaptı');
            }
        });
    }

    /**
     * Kullanıcı girişi yapar
     * @param {string} email - E-posta
     * @param {string} password - Şifre
     * @returns {Promise<Object>} Sonuç
     */
    async signIn(email, password) {
        if (!this.client) {
            throw new Error('Supabase bağlantısı kurulmamış');
        }

        try {
            const { data, error } = await this.client.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;
            return { success: true, user: data.user };
        } catch (error) {
            console.error('Giriş hatası:', error);
            throw error;
        }
    }

    /**
     * Kullanıcı kaydı yapar
     * @param {string} email - E-posta
     * @param {string} password - Şifre
     * @returns {Promise<Object>} Sonuç
     */
    async signUp(email, password) {
        if (!this.client) {
            throw new Error('Supabase bağlantısı kurulmamış');
        }

        try {
            const { data, error } = await this.client.auth.signUp({
                email,
                password
            });

            if (error) throw error;
            return { success: true, user: data.user };
        } catch (error) {
            console.error('Kayıt hatası:', error);
            throw error;
        }
    }

    /**
     * Kullanıcı çıkışı yapar
     * @returns {Promise<void>}
     */
    async signOut() {
        if (!this.client) return;

        try {
            const { error } = await this.client.auth.signOut();
            if (error) throw error;
        } catch (error) {
            console.error('Çıkış hatası:', error);
            throw error;
        }
    }

    /**
     * Mevcut kullanıcıyı getirir
     * @returns {Promise<Object|null>} Kullanıcı bilgisi
     */
    async getCurrentUser() {
        if (!this.client) return null;

        try {
            const { data: { user } } = await this.client.auth.getUser();
            return user;
        } catch (error) {
            console.error('Kullanıcı bilgisi alınamadı:', error);
            return null;
        }
    }

    /**
     * İlerleme verilerini Supabase'den yükler
     * @returns {Promise<Object>} İlerleme verileri
     */
    async loadProgressData() {
        if (!this.client) {
            return {};
        }

        try {
            const user = await this.getCurrentUser();
            if (!user) return {};

            const { data, error } = await this.client
                .from('user_progress')
                .select('progress_data')
                .eq('user_id', user.id)
                .single();

            if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
                throw error;
            }

            return data?.progress_data || {};
        } catch (error) {
            console.error('İlerleme verisi yükleme hatası:', error);
            return {};
        }
    }

    /**
     * İlerleme verilerini Supabase'e kaydeder
     * @param {Object} progressData - İlerleme verileri
     * @returns {Promise<void>}
     */
    async saveProgressData(progressData) {
        if (!this.client) return;

        try {
            const user = await this.getCurrentUser();
            if (!user) return;

            const { error } = await this.client
                .from('user_progress')
                .upsert({
                    user_id: user.id,
                    progress_data: progressData,
                    updated_at: new Date().toISOString()
                }, {
                    onConflict: 'user_id'
                });

            if (error) throw error;
        } catch (error) {
            console.error('İlerleme verisi kaydetme hatası:', error);
            throw error;
        }
    }

    /**
     * API anahtarını Supabase'den yükler
     * @returns {Promise<string>} API anahtarı
     */
    async loadApiKey() {
        if (!this.client) {
            return '';
        }

        try {
            const user = await this.getCurrentUser();
            if (!user) return '';

            const { data, error } = await this.client
                .from('user_settings')
                .select('gemini_api_key')
                .eq('user_id', user.id)
                .single();

            if (error && error.code !== 'PGRST116') {
                throw error;
            }

            return data?.gemini_api_key || '';
        } catch (error) {
            console.error('API anahtarı yükleme hatası:', error);
            return '';
        }
    }

    /**
     * API anahtarını Supabase'e kaydeder
     * @param {string} apiKey - API anahtarı
     * @returns {Promise<void>}
     */
    async saveApiKey(apiKey) {
        if (!this.client) return;

        try {
            const user = await this.getCurrentUser();
            if (!user) return;

            const { error } = await this.client
                .from('user_settings')
                .upsert({
                    user_id: user.id,
                    gemini_api_key: apiKey,
                    updated_at: new Date().toISOString()
                }, {
                    onConflict: 'user_id'
                });

            if (error) throw error;
        } catch (error) {
            console.error('API anahtarı kaydetme hatası:', error);
            throw error;
        }
    }

    /**
     * Supabase'den verileri senkronize eder
     * @returns {Promise<void>}
     */
    async syncDataFromSupabase() {
        if (!this.client) return;

        try {
            const progressData = await this.loadProgressData();
            const apiKey = await this.loadApiKey();

            // Event ile uygulamaya bildir
            window.dispatchEvent(new CustomEvent('supabase-sync', {
                detail: { progressData, apiKey }
            }));
        } catch (error) {
            console.error('Senkronizasyon hatası:', error);
        }
    }

    /**
     * Supabase bağlantısını kontrol eder
     * @returns {boolean} Bağlantı durumu
     */
    isConnected() {
        return this.client !== null;
    }
}

