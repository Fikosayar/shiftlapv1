import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Smartphone, 
  Monitor, 
  Clock, 
  ArrowRight,
  Star,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

const HomePage = () => {
  const whatsappUrl = "https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim";

  return (
    <div className="relative">
      {/* Background Blobs */}
      <div className="blob" style={{ top: '10%', left: '-10%', background: 'var(--primary)' }}></div>
      <div className="blob" style={{ top: '30%', right: '-10%', background: 'var(--secondary)' }}></div>
      <div className="blob" style={{ bottom: '10%', left: '20%', background: 'var(--accent)' }}></div>

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ 
                padding: '0.5rem 1.5rem', 
                borderRadius: '50px', 
                backgroundColor: 'rgba(99, 102, 241, 0.1)', 
                border: '1px solid var(--primary)', 
                color: 'var(--primary)',
                fontWeight: '700',
                fontSize: '0.9rem',
                marginBottom: '2rem'
              }}
            >
              🚀 Shiftlap v1.0 Yayında
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-title"
              style={{ lineHeight: 1 }}
            >
              İş Gücünüzü <br />
              <span style={{ color: 'var(--primary)' }}>Akıllıca</span> Yönetin
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-subtitle"
            >
              Geleneksel, hantal ve pahalı PDKS cihazlarını unutun. Shiftlap ile 
              personel takibi artık sadece bir QR kod uzağınızda. 
              Bulut tabanlı, mobil uyumlu ve saniyeler içinde hazır.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex"
              style={{ gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <a href={whatsappUrl} className="btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                Ücretsiz Denemeyi Başlat
                <ChevronRight size={20} />
              </a>
              <button style={{ 
                background: 'transparent', 
                border: '1px solid var(--glass-border)', 
                padding: '1.2rem 2.5rem', 
                borderRadius: '14px', 
                fontWeight: '700',
                color: 'inherit',
                cursor: 'pointer'
              }}>
                Tanıtım Videosu
              </button>
            </motion.div>
          </div>

          {/* Feature Image / Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ marginTop: '6rem' }}
          >
            <div className="glass" style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)' }}>
               <div style={{ 
                 width: '100%', 
                 aspectRatio: '16/7', 
                 backgroundColor: '#000', 
                 borderRadius: '16px', 
                 display: 'flex', 
                 alignItems: 'center', 
                 justifyContent: 'center',
                 border: '1px solid var(--glass-border)',
                 position: 'relative',
                 overflow: 'hidden',
                 boxShadow: '0 0 40px rgba(255,107,0,0.15)'
               }}>
                  <img 
                    src="/src/assets/hero.png" 
                    alt="Shiftlap Dashboard" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      opacity: 0.9
                    }} 
                  />
                  <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0, 
                    background: 'linear-gradient(to top, rgba(2, 6, 23, 0.4), transparent)',
                    pointerEvents: 'none'
                  }}></div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Social Proof */}
      <section style={{ padding: '4rem 0', backgroundColor: 'rgba(99, 102, 241, 0.02)' }}>
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div style={{ maxWidth: '400px' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Sektör Liderlerinin Tercihi</h2>
              <p style={{ color: 'var(--text-muted)' }}>Türkiye genelinde 500'den fazla şirket Shiftlap ile operasyonlarını dijitalleştirdi.</p>
            </div>
            <div className="grid md:grid-cols-3" style={{ gap: '2rem', width: '100%' }}>
               {[1, 2, 3].map(i => (
                 <div key={i} style={{ opacity: 0.3, fontSize: '1.5rem', fontWeight: '900', textAlign: 'center' }}>LOGO {i}</div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Features Grid */}
      <section style={{ padding: '10rem 0' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Dijital Dönüşüm Başlıyor</h2>
            <p className="section-subtitle">Operasyonel mükemmellik için ihtiyacınız olan her şey tek bir platformda toplandı.</p>
          </div>

          <div className="grid md:grid-cols-3">
            {[
              {
                icon: <Smartphone size={32} />,
                title: 'Mobil QR Teknolojisi',
                desc: 'Donanım maliyetini sıfırlayın. Personelleriniz kendi telefonlarıyla güvenli giriş yapsın.',
                color: 'var(--primary)'
              },
              {
                icon: <ShieldCheck size={32} />,
                title: 'Konum Doğrulama',
                desc: 'GPS tabanlı doğrulama ile personelin gerçekten iş başında olduğundan emin olun.',
                color: '#10b981'
              },
              {
                icon: <BarChart3 size={32} />,
                title: 'Akıllı Raporlama',
                desc: 'Ay sonu puantaj karmaşasına son. Tek tıkla hatasız maaş hesaplama verileri alın.',
                color: '#f59e0b'
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass"
                style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '20px', 
                  backgroundColor: 'rgba(255,255,255,0.03)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  color: f.color,
                  border: `1px solid ${f.color}20`
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{f.desc}</p>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: `${f.color}05`, borderRadius: '0 0 0 100%' }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ paddingBottom: '10rem' }}>
        <div className="container">
          <div className="glass" style={{ padding: '4rem', maxWidth: '900px', margin: '0 auto' }}>
             <h2 className="text-center" style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '3rem' }}>Sıkça Sorulan Sorular</h2>
             <div className="grid md:grid-cols-2" style={{ gap: '3rem' }}>
                {[
                  { q: 'Ücretlendirme nasıl yapılıyor?', a: 'Personel sayısına göre esnek paketlerimiz mevcuttur.' },
                  { q: 'Donanım almam gerekiyor mu?', a: 'Hayır, Shiftlap tamamen yazılım tabanlı çalışır.' },
                  { q: 'Destek süreci nasıl işliyor?', a: '7/24 online teknik destek ekibimizle yanınızdayız.' },
                  { q: 'Verilerim güvende mi?', a: 'Tüm verileriniz uçtan uca şifreli sunucularda saklanır.' }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 style={{ fontWeight: '800', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       <HelpCircle size={18} style={{ color: 'var(--primary)' }} />
                       {item.q}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.a}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ paddingBottom: '10rem' }}>
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
            borderRadius: '40px', 
            padding: '5rem', 
            textAlign: 'center', 
            color: 'white',
            boxShadow: '0 30px 60px -12px rgba(255, 107, 0, 0.4)'
          }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1.5rem' }}>Hemen Ücretsiz Başlayın</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
              Kurulum gerektirmez, hemen şimdi hesap açın ve farkı hissedin.
            </p>
            <a href={whatsappUrl} className="btn-primary" style={{ background: 'white', color: 'var(--primary)', padding: '1.2rem 3rem' }}>
               WhatsApp Üzerinden Bilgi Al
               <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
