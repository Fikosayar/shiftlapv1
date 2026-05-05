import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Zap, BarChart3, Smartphone, Monitor } from 'lucide-react';

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                padding: '0.25rem 1rem', 
                borderRadius: '50px', 
                backgroundColor: 'rgba(99, 102, 241, 0.1)', 
                color: 'var(--primary)', 
                fontSize: '0.85rem', 
                fontWeight: '700', 
                marginBottom: '2rem',
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}
            >
              <Zap size={14} />
              <span>Yeni Nesil PDKS Çözümü</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Personel Yönetimini <br />
              <span style={{ color: 'var(--primary)' }}>Özgürleştirin</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-subtitle"
            >
              Shiftlap ile giriş-çıkış takibi, vardiya yönetimi ve raporlama artık çok daha kolay. 
              Karmaşık donanımlara veda edin, bulut tabanlı özgürlüğe merhaba deyin.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex"
              style={{ gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <a 
                href="https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim" 
                className="btn-primary" 
                style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hemen Ücretsiz Deneyin
                <ChevronRight size={20} />
              </a>
              <button style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid var(--glass-border)', 
                padding: '1rem 2rem', 
                borderRadius: '12px', 
                fontWeight: '700' 
              }}>
                Demo Talebi
              </button>
            </motion.div>
          </div>

          {/* Preview Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ marginTop: '5rem' }}
          >
            <div className="glass" style={{ padding: '2rem', boxShadow: 'var(--shadow)' }}>
               <div style={{ 
                 width: '100%', 
                 aspectRatio: '16/9', 
                 backgroundColor: 'rgba(0,0,0,0.05)', 
                 borderRadius: '16px', 
                 display: 'flex', 
                 alignItems: 'center', 
                 justifyContent: 'center',
                 flexDirection: 'column'
               }}>
                  <Monitor size={64} style={{ color: 'var(--primary)', opacity: 0.3, marginBottom: '1rem' }} />
                  <p style={{ color: 'var(--text-muted)' }}>Shiftlap Dashboard Önizlemesi</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', backgroundColor: 'rgba(0,0,0,0.01)' }}>
        <div className="container">
          <div className="grid md:grid-cols-4">
            {[
              { label: 'Aktif Kullanıcı', value: '10,000+' },
              { label: 'Kayıtlı Şirket', value: '500+' },
              { label: 'Doğruluk Oranı', value: '%99.9' },
              { label: 'Ülke', value: '10+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>{stat.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Summary */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Neden Shiftlap?</h2>
            <p className="section-subtitle">Geleneksel PDKS sistemlerinin getirdiği maliyetli donanımları ve karmaşık yazılımları bir kenara bırakın.</p>
          </div>

          <div className="grid md:grid-cols-3">
            {[
              {
                icon: <Smartphone style={{ color: '#3b82f6' }} />,
                title: 'Mobil QR Okutma',
                desc: 'Personelleriniz kendi telefonlarından QR kod okutarak kolayca giriş-çıkış yapabilir.'
              },
              {
                icon: <ShieldCheck style={{ color: '#10b981' }} />,
                title: 'Yüksek Güvenlik',
                desc: 'Konum bazlı doğrulama ve IP kısıtlaması ile güvenli veri takibi sağlar.'
              },
              {
                icon: <BarChart3 style={{ color: '#8b5cf6' }} />,
                title: 'Anlık Raporlama',
                desc: 'Gecikmeler, fazla mesailer ve devamsızlıklar anında panelinizde.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ translateY: -10 }}
                className="glass"
                style={{ padding: '2.5rem', border: '1px solid var(--glass-border)' }}
              >
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  backgroundColor: 'var(--background)', 
                  boxShadow: 'var(--shadow)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '1.5rem' 
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
