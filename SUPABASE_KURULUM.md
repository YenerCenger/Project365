# Supabase Kurulum Rehberi

Bu dosya, DevJourney 2026 uygulamasını Supabase'e bağlamak için adım adım talimatlar içerir.

## 1. Supabase Projesi Oluşturma

1. [Supabase](https://supabase.com) sitesine gidin ve hesap oluşturun
2. "New Project" butonuna tıklayın
3. Proje adı, veritabanı şifresi ve bölge seçin
4. Proje oluşturulmasını bekleyin (1-2 dakika)

## 2. Database Schema Kurulumu

1. Supabase Dashboard'da "SQL Editor" sekmesine gidin
2. `supabase-schema.sql` dosyasının içeriğini kopyalayın
3. SQL Editor'e yapıştırın ve "Run" butonuna tıklayın
4. Tablolar ve politikalar başarıyla oluşturulmalı

## 3. API Anahtarlarını Alma

1. Supabase Dashboard'da "Settings" > "API" sekmesine gidin
2. Şu bilgileri kopyalayın:
   - **Project URL** (Project URL)
   - **anon public** key (anon/public key)

## 4. Uygulamaya Entegrasyon

1. `js/app.js` dosyasını açın
2. Şu satırları bulun:
   ```javascript
   const SUPABASE_URL = ''; // Supabase proje URL'inizi buraya ekleyin
   const SUPABASE_ANON_KEY = ''; // Supabase anon key'inizi buraya ekleyin
   ```
3. Kopyaladığınız değerleri buraya yapıştırın:
   ```javascript
   const SUPABASE_URL = 'https://xxxxx.supabase.co';
   const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
   ```

## 5. Authentication Ayarları

1. Supabase Dashboard'da "Authentication" > "Settings" sekmesine gidin
2. "Email" provider'ının aktif olduğundan emin olun
3. İsteğe bağlı: "Email Templates" bölümünden e-posta şablonlarını özelleştirebilirsiniz

## 6. Test Etme

1. Uygulamayı tarayıcıda açın
2. Sağ üstteki "Giriş Yap" butonuna tıklayın
3. Yeni bir hesap oluşturun veya mevcut hesapla giriş yapın
4. Verilerin Supabase'de saklandığını kontrol edin:
   - Supabase Dashboard > "Table Editor" > `user_progress` ve `user_settings` tabloları

## Güvenlik Notları

- **Anon Key** tarayıcıda görülebilir, bu normaldir
- RLS (Row Level Security) politikaları sayesinde kullanıcılar sadece kendi verilerine erişebilir
- API anahtarları gibi hassas veriler için `user_settings` tablosu kullanılır
- Production ortamında ek güvenlik önlemleri alınabilir

## Sorun Giderme

### "Supabase bağlantısı kurulmamış" hatası
- `SUPABASE_URL` ve `SUPABASE_ANON_KEY` değerlerinin doğru girildiğinden emin olun
- Tarayıcı konsolunda hata mesajlarını kontrol edin

### RLS politikası hatası
- SQL script'inin başarıyla çalıştırıldığından emin olun
- Supabase Dashboard > "Authentication" > "Policies" bölümünden politikaları kontrol edin

### Veri senkronizasyon sorunları
- Kullanıcının giriş yaptığından emin olun
- Network sekmesinde API isteklerini kontrol edin
- Supabase Dashboard > "Logs" bölümünden hata loglarını inceleyin

## Ek Kaynaklar

- [Supabase Dokümantasyonu](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

