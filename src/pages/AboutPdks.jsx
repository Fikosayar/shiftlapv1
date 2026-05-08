import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, TrendingUp, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const AboutPdks = () => {
  useSEO({
    title: 'PDKS Nedir? | Shiftlap',
    description: 'Personel Devam Kontrol Sistemi nedir, nasıl çalışır? Shiftlap ile geleneksel PDKS farkını keşfedin.',
    canonical: 'https://shiftlap.com/pdks-nedir',
  });
  const whatsappUrl = "https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim";

  const stats = [
    { value: '%40', label: 'Verimlilik Artışı', sub: 'Ortalama iyileşme', color: '#ff6b00' },
    { value: '%95', label: 'Hata Azalması', sub: 'Maaş hesaplamalarında', color: '#10b981' },
    { value: '0₺', label: 'Donanım Maliyeti', sub: 'Ek ekipman gerekmez', color: '#3b82f6' },
  ];

  const benefits = [
    'Hatalı Maaş Hesaplamalarının Önüne Geçer',
    'İş Gücü Verimliliğini Artırır',
    'Yasal Mevzuata Uygunluk Sağlar',
    'Personel Disiplinini Optimize Eder',
    'İzin ve Mesai Takibini Kolaylaştırır',
    'Anlık Raporlama İmkânı Sunar'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '8rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}
    >
      <div className="blob" style={{ top: '5%', right: '-15%', background: 'var(--primary)', opacity: 0.08 }}></div>

      <div className="container">
        {/* Header */}
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 6rem auto' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              display: 'inline-block',
              padding: '0.4rem 1.25rem',
              borderRadius: '50px',
              backgroundColor: 'rgba(255, 107, 0, 0.1)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              fontWeight: '700',
              fontSize: '0.85rem',
              marginBottom: '1.5rem'
            }}
          >
            📖 PDKS Nedir?
          </motion.div>
          <h1 className="section-title">Personel Takibini Modernleştirin</h1>
          <p className="section-subtitle">
            Personel Devam Kontrol Sistemi (PDKS), işletmelerin çalışanlarının 
            çalışma saatlerini, devamsızlıklarını, izinlerini ve mesailerini 
            takip etmek için kullandığı dijital bir altyapıdır.
          </p>
        </div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ gap: '2rem', marginBottom: '8rem' }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: '900', color: stat.color, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
                {stat.value}
              </div>
              <p style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.4rem' }}>{stat.label}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{stat.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Benefits section */}
        <div className="grid md:grid-cols-2" style={{ gap: '4rem', alignItems: 'center', marginBottom: '8rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.25rem', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Neden Bir PDKS'ye İhtiyacınız Var?
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Manuel takip yöntemleri (kağıt imza, Excel tabloları vb.) hatalara açıktır 
              ve ciddi bir zaman kaybı yaratır. PDKS kullanımı sadece zamanı ölçmekle 
              kalmaz, aynı zamanda verimliliği artırır ve maliyetleri düşürür.
            </p>
            <ul className="flex flex-col" style={{ gap: '1rem', marginBottom: '2.5rem' }}>
              {benefits.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span style={{ fontWeight: '600' }}>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', padding: '1rem 2.5rem' }}
            >
              Hemen Deneyin
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden' }}
          >
            <TrendingUp size={220} style={{ position: 'absolute', bottom: '-30px', right: '-30px', color: 'var(--primary)', opacity: 0.04 }} />
            <div className="flex flex-col" style={{ gap: '2.5rem', position: 'relative', zIndex: 1 }}>
              {[
                { icon: Zap, title: 'Anlık Veri', desc: 'Tüm giriş-çıkış kayıtlarına gerçek zamanlı erişim', color: '#ff6b00' },
                { icon: Shield, title: 'Güvenli Mimari', desc: 'Uçtan uca şifreleme ile verileriniz korunur', color: '#10b981' },
                { icon: Globe, title: 'Her Yerden Erişim', desc: 'Tarayıcı veya mobil uygulama ile her cihazdan', color: '#3b82f6' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '800', marginBottom: '0.3rem' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            borderRadius: '32px',
            padding: '4rem',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 30px 60px -12px var(--primary-glow)'
          }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'rgba(255,255,255,0.08)', borderRadius: '50%', transform: 'translate(30%, -30%)' }} />
          <div className="grid md:grid-cols-2" style={{ gap: '3rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
                Geleneksel PDKS vs. Shiftlap
              </h2>
              <p style={{ opacity: 0.85, lineHeight: 1.8 }}>
                Eski nesil sistemler pahalı kart okuyucular, biyometrik cihazlar 
                ve yerel sunucular gerektirir. Shiftlap ise tamamen bulut tabanlıdır 
                ve donanım maliyetini sıfıra indirir.
              </p>
            </div>
            <div className="flex flex-col" style={{ gap: '1.25rem' }}>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}>
                  <AlertCircle size={18} /> Geleneksel Sistemler
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.65 }}>
                  Yüksek bakım maliyeti, donanım arızaları, tek noktaya bağlılık, güncelleme güçlüğü.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.3)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} /> Shiftlap Yaklaşımı
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  Her yerden erişim, sıfır donanım kurulumu, anlık mobil bildirimler, otomatik güncellemeler.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPdks;
