# Vercel Deployment Rehberi

Bu dosya, DevJourney 2026 uygulamasını Vercel'e deploy etmek için adım adım talimatlar içerir.

## Yöntem 1: Vercel CLI ile Deploy (Önerilen)

### 1. Vercel CLI Kurulumu

```bash
npm install -g vercel
```

veya

```bash
npm install vercel --save-dev
```

### 2. Projeyi Deploy Etme

Proje klasöründe terminal açın ve şu komutu çalıştırın:

```bash
vercel
```

İlk kez deploy ediyorsanız:
- Vercel hesabınıza giriş yapmanız istenecek
- Proje adını seçin (veya Enter'a basın)
- Ayarları onaylayın

### 3. Production Deploy

İlk deploy'tan sonra production'a deploy etmek için:

```bash
vercel --prod
```

## Yöntem 2: Vercel Dashboard ile Deploy

### 1. GitHub'a Push

Projenizi GitHub'a push edin:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/kullaniciadi/devjourney-2026.git
git push -u origin main
```

### 2. Vercel Dashboard'dan Deploy

1. [Vercel Dashboard](https://vercel.com/dashboard) adresine gidin
2. "Add New Project" butonuna tıklayın
3. GitHub repository'nizi seçin
4. Proje ayarlarını yapın:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (varsayılan)
   - **Build Command**: Boş bırakın (statik site)
   - **Output Directory**: `./` (varsayılan)
5. "Deploy" butonuna tıklayın

### 3. Environment Variables (Gerekirse)

Eğer Supabase URL ve Key'leri environment variable olarak kullanmak isterseniz:

1. Vercel Dashboard > Project Settings > Environment Variables
2. Şu değişkenleri ekleyin:
   - `VITE_SUPABASE_URL` (veya `SUPABASE_URL`)
   - `VITE_SUPABASE_ANON_KEY` (veya `SUPABASE_ANON_KEY`)

**Not:** Eğer environment variable kullanacaksanız, `js/app.js` dosyasını şu şekilde güncelleyin:

```javascript
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
```

## Yöntem 3: Vercel GitHub Integration

### Otomatik Deploy

1. GitHub repository'nizi Vercel'e bağlayın
2. Her `git push` işleminde otomatik deploy yapılacak
3. Pull Request'ler için preview deployment'lar oluşturulur

## Deployment Sonrası

### 1. Domain Ayarları

1. Vercel Dashboard > Project Settings > Domains
2. Özel domain ekleyebilirsiniz
3. Vercel otomatik olarak SSL sertifikası sağlar

### 2. Environment Variables

Production, Preview ve Development için ayrı environment variable'lar tanımlayabilirsiniz.

### 3. Analytics ve Monitoring

- Vercel Analytics'i etkinleştirin
- Web Vitals metriklerini takip edin

## Sorun Giderme

### Build Hatası

- `vercel.json` dosyasının doğru yapılandırıldığından emin olun
- Console'da hata mesajlarını kontrol edin

### 404 Hatası

- `vercel.json` dosyasındaki route ayarlarını kontrol edin
- Tüm dosyaların doğru konumda olduğundan emin olun

### Supabase Bağlantı Sorunları

- CORS ayarlarını Supabase Dashboard'da kontrol edin
- Environment variable'ların doğru tanımlandığından emin olun
- Supabase project URL'inin doğru olduğundan emin olun

## Önemli Notlar

1. **Supabase URL ve Key**: Production'da environment variable kullanmanız önerilir
2. **CORS**: Supabase Dashboard'da production domain'inizi CORS ayarlarına ekleyin
3. **HTTPS**: Vercel otomatik olarak HTTPS sağlar
4. **CDN**: Vercel global CDN kullanır, hızlı yükleme sağlar

## Hızlı Başlangıç Komutları

```bash
# Vercel CLI kurulumu
npm install -g vercel

# Deploy
vercel

# Production deploy
vercel --prod

# Logları görüntüle
vercel logs

# Proje bilgilerini görüntüle
vercel inspect
```

## Ek Kaynaklar

- [Vercel Dokümantasyonu](https://vercel.com/docs)
- [Vercel CLI Dokümantasyonu](https://vercel.com/docs/cli)
- [Static Site Deployment](https://vercel.com/docs/concepts/deployments/overview#static-files)

