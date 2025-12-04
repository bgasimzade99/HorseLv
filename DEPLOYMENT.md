# Domain Bağlama Rehberi - asnatesjsk.lv (Netlify)

## Adım 1: Netlify'e Deploy Etme

### 1.1 Netlify Hesabı Oluştur
1. https://app.netlify.com adresine git
2. GitHub hesabınla giriş yap (veya email ile kayıt ol)
3. "Add new site" butonuna tıkla

### 1.2 GitHub Repository'yi Bağla
1. **"Import an existing project"** seçeneğini seç
2. **"Deploy with GitHub"** butonuna tıkla
3. GitHub hesabını bağla (izin ver)
4. Repository'yi seç: `bgasimzade99/HorseLv`
5. **"Deploy site"** butonuna tıkla

### 1.3 Build Ayarları (Otomatik Algılanır)
Netlify otomatik olarak şunları algılar:
- **Build command:** `npm run build` (otomatik)
- **Publish directory:** `dist` (otomatik)
- **Framework:** Vite (otomatik)

**Not:** `netlify.toml` dosyası zaten oluşturuldu, bu yüzden ayarlar otomatik gelecek.

### 1.4 İlk Deploy
- Netlify otomatik olarak build edecek ve bir URL verecek (örn: `random-name-12345.netlify.app`)
- Bu URL'yi not al, sonraki adımda kullanacağız
- Deploy tamamlandığında yeşil "Published" yazısını göreceksin

---

## Adım 2: Domain'i Netlify'e Bağlama

### 2.1 Netlify Dashboard'da Domain Ekle
1. Netlify dashboard'a git: https://app.netlify.com
2. Projeni seç (site adına tıkla)
3. **Site settings** > **Domain management** sekmesine git
4. **"Add custom domain"** butonuna tıkla
5. `asnatesjsk.lv` yaz ve **"Verify"** tıkla
6. **"Add domain"** butonuna tıkla

### 2.2 DNS Kayıtlarını Al
Netlify sana şu bilgileri verecek:
- **A Record** için IP adresleri (genellikle 2 adet, örn: `75.2.60.5` ve `99.83.190.102`)
- VEYA **CNAME Record** için hostname (örn: `asnatesjsk.lv.netlify.app`)

**Not:** Netlify genellikle A Record kullanır (root domain için). CNAME sadece subdomain'ler için.

### 2.3 Netlify DNS Kullanma (Önerilen - Kolay)
Eğer Netlify DNS kullanmak istersen (önerilir):
1. Netlify dashboard'da **"Use Netlify DNS"** butonuna tıkla
2. Netlify sana nameserver'ları verecek (örn: `dns1.p01.nsone.net`)
3. Bu nameserver'ları NIC.lv'de domain ayarlarına ekle
4. Netlify otomatik olarak DNS kayıtlarını yönetir

**VEYA**

### 2.4 Manuel DNS Ayarlama
Eğer mevcut DNS sağlayıcını (NIC.lv) kullanmak istersen:
- Aşağıdaki Adım 3'ü takip et

---

## Adım 3: NIC.lv Kontrol Panelinde DNS Ayarları

### 3.1 DNS Kayıtlarını Düzenle
1. NIC.lv kontrol paneline git: https://www.nic.lv
2. `ASNATESJSK.LV` domain'ini seç
3. **DNS RECORDS** bölümüne git

### 3.2 A Kaydı Ekle (Root Domain İçin)
Netlify genellikle 2 A kaydı verir. Her ikisini de ekle:

**İlk A Kaydı:**
1. "New record:" butonuna tıkla
2. **A** seçeneğini seç
3. Şu bilgileri gir:
   - **Name/Host:** `@` veya boş bırak (root domain için)
   - **Value/IP:** Netlify'in verdiği ilk IP adresi (örn: `75.2.60.5`)
   - **TTL:** `3600` (1 saat)

**İkinci A Kaydı:**
1. "New record:" butonuna tekrar tıkla
2. **A** seçeneğini seç
3. Şu bilgileri gir:
   - **Name/Host:** `@` veya boş bırak
   - **Value/IP:** Netlify'in verdiği ikinci IP adresi (örn: `99.83.190.102`)
   - **TTL:** `3600`

**Not:** Netlify'in verdiği IP adreslerini Netlify dashboard'dan kontrol et.

### 3.3 www Alt Domain'i İçin (Opsiyonel)
1. "New record:" butonuna tıkla
2. **CNAME** seçeneğini seç
3. Şu bilgileri gir:
   - **Name/Host:** `www`
   - **Value/Target:** Netlify'in verdiği CNAME (örn: `asnatesjsk.lv.netlify.app`)
   - **TTL:** `3600`

---

## Adım 4: DNS Yayılımını Bekleme

### 4.1 DNS Propagation
- DNS değişiklikleri **24-48 saat** içinde tüm dünyada yayılır
- Genellikle **5-30 dakika** içinde çalışmaya başlar
- DNS propagation kontrolü için: https://www.whatsmydns.net/#A/asnatesjsk.lv

### 4.2 Test Etme
1. Tarayıcıda `asnatesjsk.lv` adresini aç
2. Eğer çalışmıyorsa, birkaç dakika bekle ve tekrar dene
3. Farklı DNS sunucuları kullanarak test et (Google DNS: 8.8.8.8)
4. Netlify dashboard'da domain durumunu kontrol et (yeşil tik olmalı)

---

## Adım 5: Arama Motoru Indexing'i Kapatma (ÖNEMLİ!)

Website şu anda **arama motorlarında görünmeyecek** şekilde yapılandırıldı:

### 5.1 Otomatik Ayarlar (Zaten Yapıldı)
✅ `robots.txt` dosyası oluşturuldu: `User-agent: *` ve `Disallow: /`
✅ `index.html` içinde meta tag eklendi: `<meta name="robots" content="noindex,nofollow" />`
✅ Sitemap.xml oluşturulmadı

### 5.2 Netlify'de Indexing'i Kapatma
1. Netlify dashboard'a git
2. Projeni seç
3. **Site settings** > **Build & deploy** > **Post processing** sekmesine git
4. **"Search engine indexing"** bölümünü bul
5. **"Disable"** veya **"No Index"** seçeneğini aktif et
6. Değişiklikleri kaydet

**Not:** Netlify'de bu ayar yoksa sorun değil, `robots.txt` ve meta tag yeterli.

### 5.3 Test Etme
Website'yi arama motorlarında test et:
- Google: `site:asnatesjsk.lv` araması yap → Sonuç çıkmamalı
- Website direkt URL ile erişilebilir olmalı (preview gibi)

---

## Adım 6: SSL Sertifikası (Otomatik)

Netlify otomatik olarak **Let's Encrypt SSL sertifikası** verir:
- HTTPS aktif olur
- Güvenli bağlantı sağlanır
- Sertifika otomatik yenilenir
- **HTTP'den HTTPS'e otomatik yönlendirme** yapılır

**Not:** SSL sertifikası domain bağlandıktan sonra birkaç dakika içinde aktif olur.

---

## Sorun Giderme

### DNS Çalışmıyor
1. DNS kayıtlarını kontrol et (NIC.lv panelinde)
2. TTL değerini düşür (300-600 saniye)
3. DNS cache'i temizle: `ipconfig /flushdns` (Windows)
4. Netlify dashboard'da domain durumunu kontrol et

### Netlify'de Domain Hatası
1. Netlify dashboard'da domain ayarlarını kontrol et
2. DNS kayıtlarının doğru olduğundan emin ol
3. Netlify'in verdiği IP adreslerini doğrula
4. Netlify support'a başvur: https://www.netlify.com/support

### Website Açılmıyor
1. Netlify deployment'ın başarılı olduğundan emin ol (yeşil "Published")
2. Browser console'da hataları kontrol et
3. Netlify logs'ları kontrol et (Deploys sekmesi > Deploy'a tıkla > Logs)
4. `netlify.toml` dosyasının doğru olduğundan emin ol

### Build Hatası
1. Netlify dashboard'da **Deploys** sekmesine git
2. Başarısız deploy'a tıkla
3. **"Trigger deploy"** > **"Clear cache and deploy site"** yap
4. Build logs'ları kontrol et

---

## Önemli Notlar

- **DNS değişiklikleri geri alınamaz** - Dikkatli ol!
- Mevcut DNS kayıtlarını silmeden önce yedek al
- Netlify ücretsiz planında:
  - 100 GB bandwidth/ay
  - 300 build dakikası/ay
  - Custom domain için ek ücret yok
- **Website şu anda arama motorlarında görünmüyor** (robots.txt ve noindex meta tag ile)
- Netlify otomatik olarak HTTPS sağlar (ücretsiz)

---

## Gelecekte Indexing'i Aktif Etme

Website'yi arama motorlarında görünür yapmak için:

### 1. robots.txt Güncelle
`public/robots.txt` dosyasını şu şekilde değiştir:
```
User-agent: *
Allow: /

Sitemap: https://asnatesjsk.lv/sitemap.xml
```

### 2. Meta Tag Güncelle
`index.html` dosyasında şu satırı:
```html
<meta name="robots" content="noindex,nofollow" />
```
Şu şekilde değiştir:
```html
<meta name="robots" content="index, follow" />
```

### 3. Netlify'de Indexing'i Aktif Et
1. Netlify dashboard > Site settings > Build & deploy > Post processing
2. **"Search engine indexing"** bölümünü bul
3. **"Enable"** seçeneğini aktif et

### 4. Sitemap.xml Oluştur
Sitemap.xml dosyası oluştur ve Google Search Console'a gönder.

### 5. Google Search Console'a Ekle
1. https://search.google.com/search-console adresine git
2. `asnatesjsk.lv` domain'ini ekle
3. Sitemap'i gönder
4. Indexing'i aktif et

Detaylı rehber için `INDEXING_GUIDE.md` dosyasına bak.

---

## Destek

Sorun yaşarsan:
- Netlify Support: https://www.netlify.com/support
- Netlify Docs: https://docs.netlify.com
- NIC.lv Support: dns@nic.lv veya +371 67085858

---

## Netlify Dashboard Hızlı Erişim

- Site Overview: https://app.netlify.com
- Domain Management: Site settings > Domain management
- Deploy Logs: Deploys sekmesi
- Build Settings: Site settings > Build & deploy
- Analytics: Site settings > Analytics (ücretli plan gerekir)
