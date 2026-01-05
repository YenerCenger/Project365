# DevJourney 2026: Smart AI Edition

365 günlük yazılım mühendisliği eğitim platformu. Akıllı AI asistanı ile interaktif öğrenme deneyimi.

## 🚀 Özellikler

- 📚 365 günlük kapsamlı müfredat
- 🤖 Gemini AI entegrasyonu (konu açıklama, kod örnekleri, quiz)
- 💾 Supabase ile bulut veri saklama
- 📊 İlerleme takibi ve istatistikler
- 🎨 Modern ve responsive tasarım
- 🔐 Kullanıcı kimlik doğrulama

## 📦 Kurulum

### Yerel Geliştirme

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd Project365
```

2. HTTP sunucusu başlatın:
```bash
python -m http.server 8000
```

3. Tarayıcıda açın:
```
http://localhost:8000
```

## 🔧 Yapılandırma

### Supabase Kurulumu

1. `SUPABASE_KURULUM.md` dosyasını inceleyin
2. Supabase projesi oluşturun
3. `supabase-schema.sql` dosyasını çalıştırın
4. `js/app.js` dosyasında Supabase URL ve Key'leri güncelleyin:

```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
```

## 🌐 Vercel'e Deploy

Detaylı deployment rehberi için `VERCEL_DEPLOY.md` dosyasına bakın.

### Hızlı Deploy

1. Vercel CLI kurulumu:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Production deploy:
```bash
vercel --prod
```

### GitHub ile Otomatik Deploy

1. Projeyi GitHub'a push edin
2. [Vercel Dashboard](https://vercel.com/dashboard) üzerinden repository'yi bağlayın
3. Her push'ta otomatik deploy yapılacak

## 📁 Proje Yapısı

```
Project365/
├── css/
│   └── styles.css          # Özel stiller
├── js/
│   ├── app.js              # Ana uygulama dosyası
│   ├── components/         # UI bileşenleri
│   ├── data/               # Müfredat verileri
│   ├── services/          # Servisler (Supabase, AI, Storage)
│   └── utils/              # Yardımcı fonksiyonlar
├── index.html              # Ana HTML dosyası
├── vercel.json             # Vercel yapılandırması
├── package.json            # NPM yapılandırması
└── README.md               # Bu dosya
```

## 🛠️ Teknolojiler

- **Frontend**: Vanilla JavaScript (ES6 Modules)
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **AI**: Google Gemini API
- **Deployment**: Vercel

## 📝 Lisans

MIT License

## 🤝 Katkıda Bulunma

Pull request'ler memnuniyetle karşılanır. Büyük değişiklikler için önce bir issue açarak neyi değiştirmek istediğinizi tartışın.

## 📧 İletişim

Sorularınız için issue açabilirsiniz.
