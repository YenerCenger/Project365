/**
 * DevJourney 2026: Smart AI Edition
 * AI Servisi (Gemini API)
 */

export const AI_ACTIONS = {
    EXPLAIN: 'explain',
    CODE: 'code',
    QUIZ: 'quiz'
};

export class AIService {
    /**
     * Cache key'i oluşturur
     * @param {string} action - Eylem tipi
     * @returns {string} Cache key
     */
    static getCacheKey(action) {
        const keyMap = {
            [AI_ACTIONS.EXPLAIN]: 'ai_explain',
            [AI_ACTIONS.CODE]: 'ai_code',
            [AI_ACTIONS.QUIZ]: 'ai_quiz'
        };
        return keyMap[action] || 'ai_unknown';
    }

    /**
     * Eylem etiketini getirir
     * @param {string} action - Eylem tipi
     * @returns {string} Etiket
     */
    static getActionLabel(action) {
        const labelMap = {
            [AI_ACTIONS.EXPLAIN]: '📚 Konu Açıklaması',
            [AI_ACTIONS.CODE]: '💻 Örnek Kod',
            [AI_ACTIONS.QUIZ]: '🧠 Quiz'
        };
        return labelMap[action] || 'AI Çıktısı';
    }

    /**
     * Prompt oluşturur
     * @param {string} action - Eylem tipi
     * @param {Object} dayInfo - Gün bilgileri
     * @returns {string} Prompt
     */
    static buildPrompt(action, dayInfo) {
        const { title, desc, ref } = dayInfo;

        const prompts = {
            [AI_ACTIONS.EXPLAIN]: `Aşağıdaki yazılım mühendisliği konusunu detaylıca açıkla. Türkçe yanıt ver. Markdown formatında yaz.

Konu: ${title}
Açıklama: ${desc}
Kaynak: ${ref}

Konuyu şu başlıklar altında açıkla:
- Kavramın tanımı ve önemi
- Temel prensipler
- Pratik kullanım örnekleri
- Yaygın hatalar ve kaçınılması gerekenler
- İlgili teknolojiler veya araçlar`,

            [AI_ACTIONS.CODE]: `Aşağıdaki yazılım mühendisliği konusu için pratik kod örnekleri oluştur. Türkçe açıklamalar ekle. Markdown formatında yaz.

Konu: ${title}
Açıklama: ${desc}
Kaynak: ${ref}

Kod örneklerini şu şekilde sun:
- Basit bir örnek
- Orta seviye bir örnek
- İleri seviye bir örnek (varsa)
- Her örnek için açıklama`,

            [AI_ACTIONS.QUIZ]: `Aşağıdaki yazılım mühendisliği konusu için eğitici bir quiz oluştur. Türkçe sorular. Markdown formatında yaz.

Konu: ${title}
Açıklama: ${desc}
Kaynak: ${ref}

Quiz formatı:
- 5-7 soru (çoktan seçmeli veya kısa cevaplı)
- Her soru için doğru cevap ve açıklama
- Zorluk seviyesi: Orta-İleri`
        };

        return prompts[action] || `Konu hakkında bilgi ver: ${title}`;
    }

    /**
     * Gemini API'yi çağırır
     * @param {string} apiKey - API anahtarı
     * @param {string} prompt - Prompt
     * @returns {Promise<string>} AI yanıtı
     */
    static async callGeminiAPI(apiKey, prompt) {
        if (!apiKey) {
            throw new Error('API anahtarı gerekli');
        }

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: prompt
                            }]
                        }]
                    })
                }
            );

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error?.message || `API hatası: ${response.status}`);
            }

            const data = await response.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!text) {
                throw new Error('AI yanıtı alınamadı');
            }

            return text;
        } catch (error) {
            console.error('Gemini API hatası:', error);
            throw error;
        }
    }
}


