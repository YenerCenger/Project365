-- DevJourney 2026: Smart AI Edition
-- Supabase Database Schema

-- Kullanıcı ilerleme verileri tablosu
CREATE TABLE IF NOT EXISTS user_progress (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    progress_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Kullanıcı ayarları tablosu
CREATE TABLE IF NOT EXISTS user_settings (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    gemini_api_key TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS (Row Level Security) Politikaları

-- user_progress tablosu için RLS
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kullanıcılar sadece kendi verilerini görebilir"
    ON user_progress FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar sadece kendi verilerini ekleyebilir"
    ON user_progress FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar sadece kendi verilerini güncelleyebilir"
    ON user_progress FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar sadece kendi verilerini silebilir"
    ON user_progress FOR DELETE
    USING (auth.uid() = user_id);

-- user_settings tablosu için RLS
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kullanıcılar sadece kendi ayarlarını görebilir"
    ON user_settings FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar sadece kendi ayarlarını ekleyebilir"
    ON user_settings FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar sadece kendi ayarlarını güncelleyebilir"
    ON user_settings FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar sadece kendi ayarlarını silebilir"
    ON user_settings FOR DELETE
    USING (auth.uid() = user_id);

-- updated_at otomatik güncelleme fonksiyonu
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- updated_at trigger'ları
CREATE TRIGGER update_user_progress_updated_at
    BEFORE UPDATE ON user_progress
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_settings_updated_at
    BEFORE UPDATE ON user_settings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- İndeksler (performans için)
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_settings_user_id ON user_settings(user_id);

