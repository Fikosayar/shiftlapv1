import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ShieldCheck,
  BarChart3,
  Smartphone,
  ArrowRight,
  HelpCircle,
  Users,
  Clock
} from 'lucide-react';
import dashboardImg from '../assets/dashboard.png';
import { useSEO } from '../hooks/useSEO';

const whatsappUrl = "https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
});

const features = [
  {
    icon: Smartphone,
    title: 'Mobil QR Teknolojisi',
    desc: 'Donanım maliyetini sıfırlayın. Personelleriniz kendi telefonlarıyla güvenli giriş yapsın.',
    color: '#ff6b00'
  },
  {
    icon: ShieldCheck,
    title: 'Konum Doğrulama',
    desc: 'GPS tabanlı doğrulama ile personelin gerçekten iş başında olduğundan emin olun.',
    color: '#10b981'
  },
  {
    icon: BarChart3,
    title: 'Akıllı Raporlama',
    desc: 'Ay sonu puantaj karmaşasına son. Tek tıkla hatasız maaş hesaplama verileri alın.',
    color: '#3b82f6'
  }
];

const faqs = [
  { q: 'Ücretlendirme nasıl yapılıyor?', a: 'Personel sayısına göre esnek paketlerimiz mevcuttur. Detaylı bilgi için bizimle iletişime geçin.' },
  { q: 'Donanım almam gerekiyor mu?', a: 'Hayır. Shiftlap tamamen yazılım tabanlı çalışır, ek ekipman gerekmez.' },
  { q: 'Destek süreci nasıl işliyor?', a: 'WhatsApp ve e-posta üzerinden Türkçe teknik destek ekibimizle yanınızdayız.' },
  { q: 'Verilerim güvende mi?', a: 'Tüm verileriniz uçtan uca şifreli, yedeklenmiş bulut sunucularında saklanır.' }
];

const stats = [
  { value: '500+', label: 'Aktif İşletme', icon: Users },
  { value: '%99.9', label: 'Uptime Garantisi', icon: Clock },
  { value: '<30s', label: 'Kurulum Süresi', icon: ChevronRight },
];

export default function HomePage() {
  useSEO({
    title: 'Shiftlap | Bulut Tabanlı PDKS ve Personel Takip Sistemi',
    description: 'QR kod ve GPS ile personel devam takibini modernleştirin. Donanım gerektirmez, 14 gün ücretsiz deneyin.',
    canonical: 'https://shiftlap.com/',
  });

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* ambient blobs */}
      <div className="blob" style={{ width: 600, height: 600, top: '-8%', left: '-18%', background: '#ff6b00' }} />
      <div className="blob" style={{ width: 500, height: 500, top: '28%', right: '-16%', background: '#f97316' }} />
      <div className="blob" style={{ width: 400, height: 400, bottom: '8%', left: '12%', background: '#fbbf24', opacity: 0.08 }} />

      {/* ── Hero ── */}
      <section style={{ paddingTop: '11rem', paddingBottom: '7rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="flex flex-col items-center text-center">

            <motion.div {...fadeUp(0)} className="badge">
              Shiftlap v1.0 — Yayında
            </motion.div>

            <motion.h1
              {...fadeUp(0.07)}
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
                marginBottom: '1.5rem',
                maxWidth: 820
              }}
            >
              İş Gücünüzü{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff6b00, #fbbf24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Akıllıca
              </span>{' '}
              Yönetin
            </motion.h1>

            <motion.p
              {...fadeUp(0.14)}
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.15rem',
                maxWidth: 580,
                lineHeight: 1.8,
                marginBottom: '2.75rem',
                fontWeight: 400
              }}
            >
              Geleneksel PDKS cihazlarını unutun. Shiftlap ile personel takibi 
              artık sadece bir QR kod uzağınızda — bulut tabanlı, mobil uyumlu 
              ve saniyeler içinde hazır.
            </motion.p>

            <motion.div
              {...fadeUp(0.21)}
              className="flex"
              style={{ gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <a
                href={whatsappUrl}
                className="btn-primary"
                style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
                target="_blank" rel="noopener noreferrer"
              >
                Ücretsiz Denemeyi Başlat
                <ChevronRight size={18} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--glass-border)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: 'var(--text-muted)',
                  transition: 'all 0.25s',
                  backdropFilter: 'blur(8px)'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,107,0,0.35)'; e.currentTarget.style.color = 'var(--text-main)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                Demo Talep Et
              </a>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.55 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem',
              flexWrap: 'wrap',
              marginTop: '4rem',
              marginBottom: '5rem',
              padding: '2rem 3rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-lg)',
              backdropFilter: 'blur(16px)'
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--primary)', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.35rem', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              borderRadius: 'var(--radius-xl)',
              padding: '6px',
              background: 'linear-gradient(135deg, rgba(255,107,0,0.3), rgba(249,115,22,0.1), rgba(255,255,255,0.05))',
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6), 0 0 60px rgba(255,107,0,0.1)'
            }}>
              <div style={{
                borderRadius: 'calc(var(--radius-xl) - 6px)',
                overflow: 'hidden',
                background: '#000',
                aspectRatio: '16/8.5',
                position: 'relative'
              }}>
                <img
                  src={dashboardImg}
                  alt="Shiftlap Dashboard Önizlemesi"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(8,9,15,0.5) 0%, transparent 50%)',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section style={{ padding: '8rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="text-center">
            <div className="badge" style={{ display: 'inline-flex' }}>Öne Çıkan Özellikler</div>
            <h2 className="section-title">Dijital Dönüşüm Başlıyor</h2>
            <p className="section-subtitle">
              Operasyonel mükemmellik için ihtiyacınız olan her şey tek bir platformda.
            </p>
          </div>

          <div className="grid md:grid-cols-3" style={{ gap: '1.5rem' }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="glass"
                  style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
                >
                  <div style={{
                    position: 'absolute', top: 0, right: 0,
                    width: 120, height: 120,
                    background: `radial-gradient(circle at top right, ${f.color}18, transparent 70%)`,
                    pointerEvents: 'none'
                  }} />
                  <div style={{
                    width: 48, height: 48,
                    borderRadius: 14,
                    background: `${f.color}14`,
                    border: `1px solid ${f.color}28`,
                    color: f.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem' }}>{f.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.75 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ paddingBottom: '8rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="glass" style={{ padding: '4rem 3.5rem', maxWidth: 860, margin: '0 auto' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <div className="badge" style={{ display: 'inline-flex' }}>SSS</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.025em' }}>
                Sıkça Sorulan Sorular
              </h2>
            </div>
            <div className="grid md:grid-cols-2" style={{ gap: '2.5rem' }}>
              {faqs.map((item, i) => (
                <div key={i} style={{ borderLeft: '2px solid rgba(255,107,0,0.25)', paddingLeft: '1.25rem' }}>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.6rem', fontSize: '0.95rem' }}>
                    {item.q}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.75 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ paddingBottom: '10rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #ff6b00 0%, #f97316 60%, #fbbf24 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(3rem, 6vw, 5rem)',
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 40px 80px -20px rgba(255,107,0,0.45)'
            }}
          >
            <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: 400, height: 400, background: 'rgba(255,255,255,0.08)', borderRadius: '50%', filter: 'blur(40px)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                Hemen Ücretsiz Başlayın
              </h2>
              <p style={{ fontSize: '1.05rem', opacity: 0.85, marginBottom: '2.5rem', maxWidth: 520, margin: '0 auto 2.5rem' }}>
                Kurulum gerektirmez. 14 gün boyunca tüm özellikleri ücretsiz kullanın.
              </p>
              <a
                href={whatsappUrl}
                className="btn-primary"
                style={{ background: 'white', color: '#ff6b00', padding: '1rem 2.5rem', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
                target="_blank" rel="noopener noreferrer"
              >
                WhatsApp Üzerinden Bilgi Al
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
