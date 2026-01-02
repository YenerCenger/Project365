/**
 * DevJourney 2026: Smart AI Edition
 * Gemini AI Servisi
 */

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

/**
 * AI prompt türleri
 */
export const AI_ACTIONS = {
    EXPLAIN: 'explain',
    CODE: 'code',
    QUIZ: 'quiz'
};

/**
 * Sistem promptu - AI'nin rolünü ve davranışını tanımlar
 */
const SYSTEM_PROMPT = `
Rol ve Görev:
Sen, hem akademik derinliğe sahip seçkin bir Bilgisayar Bilimleri Profesörü hem de sektörde yıllarını harcamış bir Kıdemli Yazılım Mimarisin. Görevin, bilgisayar mühendisliği öğrencilerine mentörlük yapmak. Üslubun profesyonel, cesaretlendirici, teknik açıdan kusursuz ve pedagojik olarak zengindir. Cevapların her zaman **Türkçe** olmalıdır. Markdown formatını etkin kullan.

Eğer kullanıcı "Konuyu Anlat" derse:
- Format: 1000-1500 kelimelik, 15-20 dakikada okunacak derinlemesine makale.
- Yapı: Giriş/Analoji > Teknik Derinlik (Algoritma/Veri Yapısı) > Tarihçe > Sektörde Kullanımı > Avantaj/Dezavantaj.

Eğer kullanıcı "Örnek Kod" derse:
- Format: Production-Grade (Canlı ortam kalitesinde) kod.
- Yapı: Kod (Hata yönetimi, tip güvenliği dahil) > Detaylı Yorumlar > Adım Adım Analiz.

Eğer kullanıcı "Mini Quiz" derse:
- Format: NotebookLM tarzı interaktif.
- Yapı: 3 adet zorlayıcı senaryo sorusu > Düşünmeye teşvik > Detaylı cevap anahtarı ve nedenleri.
`;

/**
 * AI Servisi - Gemini API ile iletişimi yönetir
 */
export const AIService = {
    /**
     * Gemini API'ye istek gönderir
     * @param {string} apiKey - Gemini API anahtarı
     * @param {string} userPrompt - Kullanıcı promptu
     * @returns {Promise<string>} AI yanıtı
     */
    async callGeminiAPI(apiKey, userPrompt) {
        const url = `${GEMINI_API_URL}?key=${apiKey}`;
        
        const payload = {
            contents: [
                {
                    role: "user",
                    parts: [{ text: userPrompt }]
                }
            ],
            systemInstruction: {
                parts: [{ text: SYSTEM_PROMPT }]
            },
            generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 8192
            }
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'API Hatası');
        }

        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "Yanıt yok.";
    },

    /**
     * Eyleme göre prompt oluşturur
     * @param {string} action - Eylem tipi (explain, code, quiz)
     * @param {Object} dayInfo - Gün bilgileri
     * @returns {string} Oluşturulan prompt
     */
    buildPrompt(action, dayInfo) {
        const { title, desc, ref } = dayInfo;

        switch (action) {
            case AI_ACTIONS.EXPLAIN:
                return `Öğrenciye şu konuyu "Masterclass" seviyesinde anlat: "${title}". \nBağlam: ${desc}. \nReferans: ${ref}. \nYukarıdaki 'Konuyu Anlat' formatına birebir uy.`;
            
            case AI_ACTIONS.CODE:
                return `"${title}" konusu için production-grade, güvenli bir kod örneği yaz. Satır satır yorumla.`;
            
            case AI_ACTIONS.QUIZ:
                return `"${title}" konusu hakkında mülakat seviyesinde 3 adet senaryo bazlı soru ve detaylı cevap anahtarı hazırla.`;
            
            default:
                throw new Error(`Bilinmeyen eylem: ${action}`);
        }
    },

    /**
     * Eylem için cache key oluşturur
     * @param {string} action - Eylem tipi
     * @returns {string} Cache key
     */
    getCacheKey(action) {
        return `ai_${action}`;
    },

    /**
     * Eylem için etiket metni döndürür
     * @param {string} action - Eylem tipi
     * @returns {string} Etiket metni
     */
    getActionLabel(action) {
        switch (action) {
            case AI_ACTIONS.EXPLAIN:
                return "KONU ANLATIMI (ARŞİVLENDİ)";
            case AI_ACTIONS.CODE:
                return "ÖRNEK KOD (ARŞİVLENDİ)";
            case AI_ACTIONS.QUIZ:
                return "QUİZ (ARŞİVLENDİ)";
            default:
                return "AI ÇIKTISI";
        }
    }
};

