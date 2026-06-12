/**
 * Blog yazıları veri kaynağı.
 * 
 * Şu an statik JSON. İleride PostgreSQL'e geçildiğinde
 * bu dosya yerine API çağrısı yapılacak. Bileşenler
 * sadece `getAllPosts()` ve `getPostBySlug()` fonksiyonlarını
 * kullanıyor — backend değişse bile arayüz değişmeyecek.
 * 
 * publishDate: ISO 8601 formatında. Bu tarih gelmeden yazı
 * listelenmez (zamanlı yayın desteği).
 */

const posts = [
  {
    id: 1,
    slug: 'pdks-nedir-kapsamli-rehber',
    title: 'PDKS Nedir? İşletmeler İçin Kapsamlı Rehber',
    excerpt: 'Personel Devam Kontrol Sistemi (PDKS) nedir, nasıl çalışır, işletmenize neden gereklidir? Bu rehberde PDKS hakkında bilmeniz gereken her şeyi bulacaksınız.',
    coverImage: null,
    category: 'Rehber',
    author: 'Shiftlap Ekibi',
    publishDate: '2025-06-12T00:00:00Z',
    readTime: 8,
    tags: ['pdks', 'personel takip', 'insan kaynakları'],
    content: `
## PDKS Nedir?

**PDKS (Personel Devam Kontrol Sistemi)**, işletmelerin çalışanlarının iş yerine giriş-çıkış saatlerini, devamsızlıklarını, izinlerini ve mesai sürelerini dijital ortamda takip etmesini sağlayan bir sistemdir.

Geleneksel olarak kart basma makineleri veya parmak izi okuyucularla yapılan bu takip, günümüzde **bulut tabanlı yazılımlar** ve **mobil uygulamalar** sayesinde çok daha pratik, güvenilir ve maliyet-etkin hale gelmiştir.

## PDKS Ne İşe Yarar?

Bir PDKS sistemi temel olarak şu fonksiyonları yerine getirir:

### 1. Giriş-Çıkış Takibi
Çalışanların mesaiye başlama ve bitiş saatlerini kayıt altına alır. Bu kayıtlar, maaş hesaplamalarının temelini oluşturur.

### 2. Devamsızlık Yönetimi
Mazeretsiz devamsızlıkları, geç kalmaları ve erken çıkışları otomatik olarak raporlar.

### 3. İzin ve Mesai Yönetimi
Yıllık izin, hastalık raporu, fazla mesai gibi süreçleri dijital ortamda yönetir.

### 4. Raporlama ve Analiz
Aylık puantaj cetvelleri, verimlilik raporları ve istatistiksel analizler sunar.

## Neden Bir PDKS Sistemine İhtiyacınız Var?

### Manuel Takibin Sorunları

Birçok işletme hâlâ Excel tabloları veya kâğıt formlarla personel takibi yapmaktadır. Bu yöntemlerin ciddi dezavantajları vardır:

- **Hata oranı yüksektir** — Elle veri girişinde %5-8 arası hata oranı görülür
- **Zaman kaybı** — Ay sonu puantaj hazırlığı günler sürebilir
- **Manipülasyona açıktır** — Arkadaşı için kart basan personel, imza taklit etme gibi durumlar yaşanır
- **Yasal risk** — İş Kanunu'nun 67. maddesi, işverenlerin çalışma sürelerini kayıt altına almasını zorunlu kılar

### PDKS ile Kazanımlar

| Alan | Manuel Takip | PDKS ile |
|------|-------------|----------|
| Hata oranı | %5-8 | <%0.1 |
| Puantaj hazırlama | 3-5 gün | Anlık |
| Donanım maliyeti | Yüksek | 0₺ (Shiftlap) |
| Erişim | Sadece ofisten | Her yerden |
| Manipülasyon riski | Yüksek | Yok (GPS + QR) |

## PDKS Türleri

### 1. Kart Basma Sistemleri
En eski PDKS yöntemidir. Manyetik kartlarla çalışır. **Dezavantaj:** Kart kayıpları, başkası için kart basma sorunu.

### 2. Biyometrik Sistemler
Parmak izi, yüz tanıma veya retina taraması kullanır. **Dezavantaj:** Yüksek donanım maliyeti, hijyen endişeleri.

### 3. Bulut Tabanlı Mobil Sistemler
Shiftlap gibi modern çözümler bu kategoridedir. QR kod + GPS doğrulama + mobil uygulama kombinasyonu kullanır. **Avantaj:** Sıfır donanım maliyeti, her yerden erişim, anlık raporlama.

## Shiftlap ile Modern PDKS

Shiftlap, geleneksel PDKS sistemlerinin tüm dezavantajlarını ortadan kaldıran yeni nesil bir çözümdür:

- **QR Kod Giriş/Çıkış** — Personelleriniz kendi telefonlarıyla QR kodu okutarak giriş yapar
- **GPS Doğrulama** — Personelin gerçekten iş yerinde olduğunu konum ile doğrular
- **Bulut Tabanlı** — Sunucu kurulumu gerektirmez, tüm veriler güvende
- **14 Gün Ücretsiz Deneme** — Kredi kartı gerekmez

## Sonuç

PDKS, modern iş dünyasında vazgeçilmez bir araçtır. Doğru seçilen bir PDKS sistemi, işletmenizin verimliliğini artırır, maliyetleri düşürür ve yasal uyumluluğu sağlar. Shiftlap ile bu dönüşümü dakikalar içinde başlatabilirsiniz.
    `.trim(),
  },
  {
    id: 2,
    slug: 'qr-kod-ile-personel-takibi',
    title: 'QR Kod ile Personel Takibi: Nasıl Çalışır?',
    excerpt: 'QR kod tabanlı personel giriş-çıkış sistemi nasıl çalışır? Geleneksel yöntemlerle karşılaştırması ve işletmenize sağlayacağı avantajlar.',
    coverImage: null,
    category: 'Teknoloji',
    author: 'Shiftlap Ekibi',
    publishDate: '2025-06-12T00:00:00Z',
    readTime: 6,
    tags: ['qr kod', 'mobil giriş', 'personel takip'],
    content: `
## QR Kod ile Personel Takibi Nedir?

QR kod tabanlı personel takip sistemi, çalışanların iş yerine giriş ve çıkışlarını akıllı telefonlarıyla QR kod okutarak kayıt altına almalarını sağlayan modern bir PDKS çözümüdür.

Bu sistem, geleneksel kart basma makineleri ve parmak izi okuyucularının yerini almakta, işletmelere **sıfır donanım maliyeti** ile profesyonel bir personel takip altyapısı sunmaktadır.

## Nasıl Çalışır?

### Adım 1: QR Kod Oluşturma
Sistem yöneticisi, iş yeri için benzersiz bir QR kod oluşturur. Bu QR kod, iş yerinin belirli bir noktasına (giriş kapısı, resepsiyon vb.) yerleştirilir.

### Adım 2: Personelin Uygulamayı İndirmesi
Çalışanlar, Shiftlap mobil uygulamasını telefonlarına indirir ve hesaplarını oluşturur.

### Adım 3: QR Kodu Okutma
Mesai başlangıcında ve bitiminde çalışan, telefonuyla QR kodu okutarak giriş/çıkış kaydını oluşturur.

### Adım 4: Doğrulama
Sistem, **GPS konumu** ve **zaman damgası** ile kaydı doğrular. Böylece çalışanın gerçekten iş yerinde olduğu garanti edilir.

## Geleneksel Yöntemlerle Karşılaştırma

| Özellik | Kart Basma | Parmak İzi | QR Kod (Shiftlap) |
|---------|-----------|------------|-------------------|
| Donanım maliyeti | 2.000-5.000₺ | 3.000-10.000₺ | **0₺** |
| Kurulum süresi | 1-2 hafta | 1-2 hafta | **Dakikalar** |
| Bakım maliyeti | Yüksek | Orta | **Yok** |
| Manipülasyon riski | Yüksek | Düşük | **Yok** (GPS ile) |
| Uzaktan erişim | Yok | Yok | **Var** |
| Hijyen | Sorunsuz | Endişeli | **Sorunsuz** |

## Güvenlik Nasıl Sağlanır?

QR kod sistemlerinde en çok sorulan soru güvenliktir. Shiftlap şu önlemleri alır:

### Dinamik QR Kodlar
QR kod belirli aralıklarla değişir. Bir kez fotoğrafını çekip sonra kullanmak mümkün değildir.

### GPS Doğrulama
QR kodu okuturken telefonun konumu kontrol edilir. İş yerinin belirli bir yarıçapı dışındaysanız giriş kabul edilmez.

### Cihaz Kilidi
Her personel hesabı belirli bir telefona bağlanır. Başka bir cihazdan giriş yapılamaz.

## Hangi İşletmeler İçin Uygundur?

QR kod tabanlı personel takibi her sektörde kullanılabilir:

- **Perakende** — Mağaza ve AVM'lerdeki personel takibi
- **Üretim** — Fabrika ve atölyelerde vardiya kontrolü
- **Hizmet sektörü** — Restoran, otel, temizlik şirketleri
- **İnşaat** — Şantiye personeli takibi
- **Ofis** — Beyaz yaka çalışan mesai takibi

## Sonuç

QR kod ile personel takibi, maliyet, güvenlik ve pratiklik açısından en üstün çözümdür. Shiftlap ile bu teknolojiyi 14 gün boyunca ücretsiz deneyebilirsiniz.
    `.trim(),
  },
  {
    id: 3,
    slug: 'excel-puantaj-takibi-neden-yetersiz',
    title: 'Excel ile Puantaj Takibi Neden Yetersiz Kalıyor?',
    excerpt: 'Hâlâ Excel ile puantaj mı tutuyorsunuz? Bu yazıda Excel tabanlı takibin gizli maliyetlerini ve modern alternatifleri inceliyoruz.',
    coverImage: null,
    category: 'İpuçları',
    author: 'Shiftlap Ekibi',
    publishDate: '2025-06-12T00:00:00Z',
    readTime: 5,
    tags: ['excel', 'puantaj', 'verimlilik'],
    content: `
## Excel ile Puantaj Takibinin Gerçeği

Türkiye'deki küçük ve orta ölçekli işletmelerin büyük çoğunluğu, personel devam takibini hâlâ Excel tabloları üzerinden yürütmektedir. İlk bakışta "bedava ve kolay" görünen bu yöntem, aslında işletmelere ciddi gizli maliyetler yüklemektedir.

## Excel'in 5 Büyük Sorunu

### 1. İnsan Hatası Kaçınılmaz

Elle veri girişi yapılan her sistemde hata oranı %5-8 arasında seyreder. 50 personelli bir işletmede bu, **ayda 3-4 personelin maaşının yanlış hesaplanması** demektir.

Sık yapılan hatalar:
- Yanlış tarih girişi
- Fazla mesai saatlerinin unutulması
- Formül bozulması
- Farklı versiyonlarla çalışma

### 2. Zaman Kaybı

İK departmanının ay sonu puantaj hazırlığı, Excel tabanlı sistemlerde ortalama **3-5 iş günü** sürer. Bu süre boyunca:
- Kâğıt formlardan veriler toplanır
- Tek tek tabloya girilir
- Kontrol edilir
- Düzeltmeler yapılır
- Muhasebe departmanına gönderilir

Modern bir PDKS sistemiyle bu süre **birkaç tıklamaya** iner.

### 3. Manipülasyona Açıklık

Excel dosyaları kolayca düzenlenebilir. Bu, hem çalışanların hem de yöneticilerin kayıtları sonradan değiştirebileceği anlamına gelir. İş mahkemesi süreçlerinde Excel tabloları **hukuki delil olarak kabul edilmez**.

### 4. Veri Güvenliği Riski

- Excel dosyaları şifrelenmez
- USB belleğe kopyalanabilir
- Bilgisayar arızasında veriler kaybolabilir
- Ransomware saldırılarına karşı savunmasızdır

### 5. Ölçeklenebilirlik Sorunu

10 personelle başlayan Excel tablosu, personel sayısı 50'yi geçtiğinde yönetilemez hale gelir. Birden fazla şube, vardiya veya proje takibi Excel ile neredeyse imkânsızdır.

## Gizli Maliyet Hesabı

"Excel bedava" düşüncesi büyük bir yanılgıdır. Gerçek maliyete bakalım:

| Kalem | Aylık Maliyet |
|-------|-------------|
| İK personelinin puantaj hazırlık süresi (3 gün × 8 saat × 150₺/saat) | 3.600₺ |
| Hatalı maaş hesaplamalarının düzeltme maliyeti | ~500₺ |
| Yasal risk (iş davası potansiyeli) | Belirsiz |
| **Toplam aylık gizli maliyet** | **~4.100₺+** |

Karşılaştırma: Shiftlap Profesyonel paket aylık **499₺**'dir.

## Modern Alternatif: Bulut Tabanlı PDKS

Excel'den bulut tabanlı bir PDKS sistemine geçiş yapmak:

- Puantaj hazırlama süresini **%95** azaltır
- Hata oranını **sıfıra** yaklaştırır
- Yasal uyumluluğu garanti eder
- Veri güvenliğini sağlar
- Her yerden, her cihazdan erişim imkânı sunar

## Geçiş Ne Kadar Kolay?

Shiftlap ile Excel'den modern PDKS'ye geçiş şu kadar basittir:

1. **Hesap oluşturun** — 2 dakika
2. **Personellerinizi ekleyin** — Excel'den toplu aktarım desteklenir
3. **QR kodunuzu yazdırın** — Tek tık
4. **Kullanmaya başlayın** — Aynı gün

## Sonuç

Excel ile puantaj takibi, kısa vadede kolay görünse de uzun vadede işletmenize zarar verir. Modern, bulut tabanlı bir PDKS çözümüne geçmek hem maliyetlerinizi düşürür hem de operasyonel verimliliğinizi artırır.

14 gün boyunca Shiftlap'ı ücretsiz deneyin ve farkı kendiniz görün.
    `.trim(),
  },
];

/* ─── Public API ─── */

/**
 * Yayınlanmış tüm yazıları döndürür.
 * publishDate geçmemiş yazılar listelenmez (zamanlı yayın).
 */
export function getAllPosts() {
  const now = new Date();
  return posts
    .filter(p => new Date(p.publishDate) <= now)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

/**
 * Slug'a göre tek bir yazı döndürür.
 * Yayın tarihi gelmemişse null döner.
 */
export function getPostBySlug(slug) {
  const post = posts.find(p => p.slug === slug);
  if (!post) return null;
  if (new Date(post.publishDate) > new Date()) return null;
  return post;
}

/**
 * Belirli bir kategorideki yazıları döndürür.
 */
export function getPostsByCategory(category) {
  return getAllPosts().filter(p => p.category === category);
}

/**
 * Tüm benzersiz kategorileri döndürür.
 */
export function getAllCategories() {
  return [...new Set(posts.map(p => p.category))];
}
