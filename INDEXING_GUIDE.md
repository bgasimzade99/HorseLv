# Arama Motoru Indexing Rehberi

## Mevcut Durum: Indexing KAPALI 🔒

Website şu anda arama motorlarında **görünmüyor**. Sadece direkt URL ile erişilebilir.

### Aktif Olan Ayarlar:
- ✅ `robots.txt`: `User-agent: *` ve `Disallow: /`
- ✅ Meta tag: `<meta name="robots" content="noindex,nofollow" />`
- ✅ Sitemap.xml yok

---

## Indexing'i Aktif Etme (Gelecekte)

### Adım 1: robots.txt Güncelle

`public/robots.txt` dosyasını aç ve şu şekilde değiştir:

```
User-agent: *
Allow: /

Sitemap: https://asnatesjsk.lv/sitemap.xml
```

### Adım 2: Meta Tag Güncelle

`index.html` dosyasında şu satırı bul:
```html
<meta name="robots" content="noindex,nofollow" />
```

Şu şekilde değiştir:
```html
<meta name="robots" content="index, follow" />
```

### Adım 3: Sitemap.xml Oluştur

`public/sitemap.xml` dosyası oluştur:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://asnatesjsk.lv/</loc>
    <lastmod>2025-01-XX</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Not:** `lastmod` tarihini güncel tarihle değiştir.

### Adım 4: Netlify'de Indexing'i Aktif Et

1. Netlify dashboard'a git: https://app.netlify.com
2. Projeni seç
3. **Site settings** > **Build & deploy** > **Post processing** sekmesine git
4. **"Search engine indexing"** bölümünü bul
5. **"Enable"** seçeneğini aktif et

**Not:** Eğer bu ayar görünmüyorsa, `robots.txt` ve meta tag yeterli.

### Adım 5: Google Search Console'a Ekle

1. https://search.google.com/search-console adresine git
2. Google hesabınla giriş yap
3. **"Add Property"** butonuna tıkla
4. **"Domain"** seçeneğini seç
5. `asnatesjsk.lv` yaz ve devam et
6. DNS doğrulaması yap (Vercel veya NIC.lv üzerinden)
7. Doğrulama tamamlandıktan sonra **"Sitemaps"** sekmesine git
8. `https://asnatesjsk.lv/sitemap.xml` adresini ekle ve gönder

### Adım 6: Bing Webmaster Tools (Opsiyonel)

1. https://www.bing.com/webmasters adresine git
2. Microsoft hesabınla giriş yap
3. Site ekle ve doğrula
4. Sitemap'i gönder

---

## Indexing Kontrolü

### Google'da Kontrol
- `site:asnatesjsk.lv` araması yap
- Sonuçlar görünmeli

### Google Search Console'da Kontrol
- **Coverage** sekmesinde indexlenmiş sayfaları gör
- **Sitemaps** sekmesinde sitemap durumunu kontrol et

### robots.txt Kontrolü
- `https://asnatesjsk.lv/robots.txt` adresini aç
- İçeriğin doğru olduğundan emin ol

---

## Önemli Notlar

⚠️ **Indexing'i açmadan önce:**
- Website'nin tamamen hazır olduğundan emin ol
- Tüm içeriklerin doğru olduğunu kontrol et
- Test sayfalarını kaldır
- Production URL'lerin doğru olduğunu doğrula

✅ **Indexing açıldıktan sonra:**
- Google Search Console'u düzenli kontrol et
- Sitemap'i güncel tut
- Hata mesajlarını takip et
- Performans metriklerini izle

---

## Geri Alma (Indexing'i Tekrar Kapatma)

Eğer indexing'i tekrar kapatmak istersen:

1. `robots.txt` dosyasını `Disallow: /` yap
2. Meta tag'ı `noindex,nofollow` yap
3. Google Search Console'dan sitemap'i kaldır
4. Google'a "URL Removal" isteği gönder (gerekirse)

