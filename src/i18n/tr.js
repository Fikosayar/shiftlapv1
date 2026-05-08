/**
 * Shiftlap - Türkçe metin sabitleri
 * 
 * Bu dosya, ileride i18n (çoklu dil) desteği eklendiğinde
 * kolayca adapte edilebilmesi için tüm UI metinlerini merkezi
 * bir yerde tutar.
 * 
 * Kullanım:
 *   import { t } from '../i18n/tr';
 *   <h1>{t.hero.title}</h1>
 * 
 * İleride çoklu dil eklemek için:
 *   - src/i18n/en.js oluşturun (aynı yapıda)
 *   - src/i18n/index.js ile dil seçimi yapın
 *   - react-i18next veya benzer bir kütüphane entegre edin
 */

export const t = {
  site: {
    name: 'Shiftlap',
    tagline: 'Bulut Tabanlı PDKS ve Personel Takip Sistemi',
    phone: '0536 475 3784',
    email: 'info@shiftlab.com',
    whatsapp: 'https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim',
    address: 'Online Destek',
  },

  nav: {
    home: 'Ana Sayfa',
    about: 'PDKS Nedir?',
    features: 'Özellikler',
    howItWorks: 'Nasıl Çalışır?',
    contact: 'İletişim',
    cta: 'Hemen Başla',
  },

  hero: {
    badge: 'Shiftlap v1.0 — Yayında',
    titleLine1: 'İş Gücünüzü',
    titleHighlight: 'Akıllıca',
    titleLine2: 'Yönetin',
    subtitle: 'Geleneksel PDKS cihazlarını unutun. Shiftlap ile personel takibi artık sadece bir QR kod uzağınızda — bulut tabanlı, mobil uyumlu ve saniyeler içinde hazır.',
    ctaPrimary: 'Ücretsiz Denemeyi Başlat',
    ctaSecondary: 'Demo Talep Et',
  },

  stats: [
    { value: '500+', label: 'Aktif İşletme' },
    { value: '%99.9', label: 'Uptime Garantisi' },
    { value: '<30s', label: 'Kurulum Süresi' },
  ],

  features: {
    badge: 'Öne Çıkan Özellikler',
    title: 'Dijital Dönüşüm Başlıyor',
    subtitle: 'Operasyonel mükemmellik için ihtiyacınız olan her şey tek bir platformda.',
    items: [
      {
        title: 'Mobil QR Teknolojisi',
        desc: 'Donanım maliyetini sıfırlayın. Personelleriniz kendi telefonlarıyla güvenli giriş yapsın.',
      },
      {
        title: 'Konum Doğrulama',
        desc: 'GPS tabanlı doğrulama ile personelin gerçekten iş başında olduğundan emin olun.',
      },
      {
        title: 'Akıllı Raporlama',
        desc: 'Ay sonu puantaj karmaşasına son. Tek tıkla hatasız maaş hesaplama verileri alın.',
      },
    ],
  },

  allFeatures: {
    badge: 'Tüm Özellikler',
    title: 'Tek Platformda Her Şey',
    subtitle: 'Shiftlap, bir PDKS sisteminden beklediğinizden çok daha fazlasını sunar.',
    items: [
      { title: 'Dinamik QR Kod', desc: 'Her giriş-çıkış için benzersiz, kopyalanamaz ve süreli QR kodlar oluşturun.' },
      { title: 'GPS Doğrulama', desc: 'Personelinizin belirlenen koordinatlar içerisinde olup olmadığını kontrol edin.' },
      { title: 'Vardiya Yönetimi', desc: 'Haftalık veya aylık vardiya planlarını kolayca oluşturun ve atayın.' },
      { title: 'Gelişmiş Raporlama', desc: 'Excel, PDF formatlarında veya anlık dashboard üzerinden raporlar alın.' },
      { title: 'Mobil Bildirimler', desc: 'Geç kalma, devamsızlık veya izin taleplerinde anlık bildirimler alın.' },
      { title: 'Personel Profili', desc: 'Personellerin özlük dosyalarını ve performans verilerini tek bir yerden yönetin.' },
      { title: 'IP Kısıtlaması', desc: 'Sisteme erişimi sadece şirket Wi-Fi ağı veya belirli IP adresleri ile sınırlayın.' },
      { title: 'Bulut Yedekleme', desc: 'Verileriniz her zaman güvende ve dünyanın her yerinden erişilebilir.' },
      { title: 'Kolay Entegrasyon', desc: 'Mevcut ERP veya muhasebe yazılımlarınızla API üzerinden kolayca entegre edin.' },
    ],
  },

  howItWorks: {
    badge: 'Nasıl Çalışır?',
    title: '4 Adımda Hazırsınız',
    subtitle: "Shiftlap'ı kullanmaya başlamak sandığınızdan çok daha kolay.",
    steps: [
      { tag: 'Adım 1', title: 'Hızlı Kurulum', desc: 'Şirket profilinizi oluşturun ve personellerinizi saniyeler içinde sisteme ekleyin.' },
      { tag: 'Adım 2', title: 'Uygulama İndirme', desc: "Personelleriniz Shiftlap mobil uygulamasını App Store veya Play Store'dan indirir." },
      { tag: 'Adım 3', title: 'Okut ve Başla', desc: 'İş yerindeki QR kodu telefonla okutarak mesaiyi başlatın. Konum doğrulaması otomatik yapılır.' },
      { tag: 'Adım 4', title: 'Takip ve Rapor', desc: 'Yönetim panelinden tüm giriş-çıkışları anlık takip edin, ay sonunda tek tıkla puantaj hazırlayın.' },
    ],
    whyTitle: 'Neden Shiftlap?',
    whyDesc: 'Tek seferlik kurulum, sıfır bakım maliyeti, anlık raporlama. İşletmenizin büyüklüğü ne olursa olsun, Shiftlap sizinle ölçeklenir.',
    benefits: [
      '14 gün ücretsiz, kredi kartı gerekmez',
      'Dakikalar içinde kurulum tamamlanır',
      'Sınırsız personel ekleme imkânı',
      'Türkçe 7/24 teknik destek',
      'Bulut tabanlı, veriler her zaman güvende',
    ],
  },

  faq: {
    badge: 'SSS',
    title: 'Sıkça Sorulan Sorular',
    items: [
      { q: 'Ücretlendirme nasıl yapılıyor?', a: 'Personel sayısına göre esnek paketlerimiz mevcuttur. Detaylı bilgi için bizimle iletişime geçin.' },
      { q: 'Donanım almam gerekiyor mu?', a: 'Hayır. Shiftlap tamamen yazılım tabanlı çalışır, ek ekipman gerekmez.' },
      { q: 'Destek süreci nasıl işliyor?', a: 'WhatsApp ve e-posta üzerinden Türkçe teknik destek ekibimizle yanınızdayız.' },
      { q: 'Verilerim güvende mi?', a: 'Tüm verileriniz uçtan uca şifreli, yedeklenmiş bulut sunucularında saklanır.' },
    ],
  },

  cta: {
    title: 'Hemen Ücretsiz Başlayın',
    subtitle: 'Kurulum gerektirmez. 14 gün boyunca tüm özellikleri ücretsiz kullanın.',
    button: 'WhatsApp Üzerinden Bilgi Al',
  },

  contact: {
    badge: 'Bize Ulaşın',
    title: 'Sizinle Konuşmak İstiyoruz',
    subtitle: 'Ürün hakkında sorunuz mu var? Fiyat teklifi mi istiyorsunuz? Size en hızlı şekilde geri döneceğiz.',
    cards: [
      { label: 'Telefon', value: '0536 475 3784', sub: 'Haftaiçi 09:00–18:00' },
      { label: 'E-posta', value: 'info@shiftlab.com', sub: 'Ortalama 2 saat içinde yanıt' },
      { label: 'WhatsApp', value: 'Anlık Destek', sub: 'Mesai saatleri içinde' },
    ],
    whatsappTitle: 'Hızlı Yanıt İçin WhatsApp',
    whatsappDesc: 'Formu doldurmak yerine doğrudan WhatsApp\'tan yazabilirsiniz. Çok daha hızlı yanıt alırsınız.',
    whatsappBenefits: ['Ortalama 15 dk yanıt süresi', 'Türkçe destek', 'Mesai saatlerinde canlı'],
    whatsappBtn: 'WhatsApp\'ta Yaz',
    formTitle: 'Mesaj Gönderin',
    fields: { name: 'Ad Soyad', email: 'E-posta', subject: 'Konu', message: 'Mesaj' },
    placeholders: { name: 'Ahmet Yılmaz', email: 'ornek@firma.com', subject: 'Nasıl yardımcı olabiliriz?', message: 'Mesajınızı buraya yazın...' },
    submitBtn: 'Mesaj Gönder',
    successTitle: 'Mesajınız Alındı!',
    successDesc: 'En kısa sürede size geri döneceğiz.',
  },

  about: {
    badge: 'PDKS Nedir?',
    title: 'Personel Takibini Modernleştirin',
    subtitle: 'Personel Devam Kontrol Sistemi (PDKS), işletmelerin çalışanlarının çalışma saatlerini, devamsızlıklarını, izinlerini ve mesailerini takip etmek için kullandığı dijital bir altyapıdır.',
    stats: [
      { value: '%40', label: 'Verimlilik Artışı', sub: 'Ortalama iyileşme' },
      { value: '%95', label: 'Hata Azalması', sub: 'Maaş hesaplamalarında' },
      { value: '0₺', label: 'Donanım Maliyeti', sub: 'Ek ekipman gerekmez' },
    ],
    whyTitle: 'Neden Bir PDKS\'ye İhtiyacınız Var?',
    whyDesc: 'Manuel takip yöntemleri hatalara açıktır ve ciddi zaman kaybı yaratır.',
    benefits: [
      'Hatalı Maaş Hesaplamalarının Önüne Geçer',
      'İş Gücü Verimliliğini Artırır',
      'Yasal Mevzuata Uygunluk Sağlar',
      'Personel Disiplinini Optimize Eder',
      'İzin ve Mesai Takibini Kolaylaştırır',
      'Anlık Raporlama İmkânı Sunar',
    ],
    comparisonTitle: 'Geleneksel PDKS vs. Shiftlap',
    comparisonDesc: 'Eski nesil sistemler pahalı kart okuyucular, biyometrik cihazlar ve yerel sunucular gerektirir. Shiftlap ise tamamen bulut tabanlıdır.',
    traditional: { title: 'Geleneksel Sistemler', desc: 'Yüksek bakım maliyeti, donanım arızaları, tek noktaya bağlılık, güncelleme güçlüğü.' },
    shiftlap: { title: 'Shiftlap Yaklaşımı', desc: 'Her yerden erişim, sıfır donanım kurulumu, anlık mobil bildirimler, otomatik güncellemeler.' },
  },

  footer: {
    desc: 'Modern işletmeler için geliştirilmiş, bulut tabanlı personel yönetim çözümü.',
    platformLabel: 'Platform',
    contactLabel: 'İletişim',
    copyright: 'Shiftlap. Tüm hakları saklıdır.',
    legal: ['Gizlilik Politikası', 'Kullanım Şartları', 'KVKK'],
    cta: 'Ücretsiz Deneyin',
  },
};
