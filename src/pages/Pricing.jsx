import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap, ArrowRight, MessageCircle, HelpCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const whatsappUrl = "https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20fiyatland%C4%B1rma%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum";

const plans = [
  {
    name: 'Başlangıç',
    desc: 'Küçük işletmeler için ideal',
    price: { monthly: 299, yearly: 249 },
    personel: '1–15 personel',
    badge: null,
    features: [
      { text: 'QR Kod Giriş/Çıkış', included: true },
      { text: 'GPS Konum Doğrulama', included: true },
      { text: 'Temel Raporlama', included: true },
      { text: 'Mobil Uygulama Erişimi', included: true },
      { text: 'E-posta Destek', included: true },
      { text: 'Vardiya Yönetimi', included: false },
      { text: 'Gelişmiş Raporlama (Excel/PDF)', included: false },
      { text: 'API Entegrasyonu', included: false },
      { text: 'Öncelikli Destek', included: false },
    ],
    color: 'var(--text-muted)',
    borderColor: 'var(--glass-border)',
  },
  {
    name: 'Profesyonel',
    desc: 'Büyüyen ekipler için en popüler',
    price: { monthly: 599, yearly: 499 },
    personel: '16–50 personel',
    badge: 'En Popüler',
    features: [
      { text: 'QR Kod Giriş/Çıkış', included: true },
      { text: 'GPS Konum Doğrulama', included: true },
      { text: 'Temel Raporlama', included: true },
      { text: 'Mobil Uygulama Erişimi', included: true },
      { text: 'E-posta + WhatsApp Destek', included: true },
      { text: 'Vardiya Yönetimi', included: true },
      { text: 'Gelişmiş Raporlama (Excel/PDF)', included: true },
      { text: 'API Entegrasyonu', included: false },
      { text: 'Öncelikli Destek', included: false },
    ],
    color: '#ff6b00',
    borderColor: 'rgba(255, 107, 0, 0.5)',
  },
  {
    name: 'Kurumsal',
    desc: 'Büyük ölçekli organizasyonlar için',
    price: { monthly: null, yearly: null },
    personel: '50+ personel',
    badge: null,
    features: [
      { text: 'QR Kod Giriş/Çıkış', included: true },
      { text: 'GPS Konum Doğrulama', included: true },
      { text: 'Temel Raporlama', included: true },
      { text: 'Mobil Uygulama Erişimi', included: true },
      { text: 'Öncelikli Destek (Telefon + WhatsApp)', included: true },
      { text: 'Vardiya Yönetimi', included: true },
      { text: 'Gelişmiş Raporlama (Excel/PDF)', included: true },
      { text: 'API Entegrasyonu', included: true },
      { text: 'Özel Eğitim & Kurulum Desteği', included: true },
    ],
    color: 'var(--text-muted)',
    borderColor: 'var(--glass-border)',
  },
];

const faqs = [
  { q: 'Ödeme yöntemleri nelerdir?', a: 'Kredi kartı, banka havalesi ve EFT ile ödeme yapabilirsiniz.' },
  { q: 'Sözleşme zorunluluğu var mı?', a: 'Hayır. Aylık planlarda istediğiniz zaman iptal edebilirsiniz. Yıllık planlarda yıl sonuna kadar taahhüt vardır.' },
  { q: 'Fatura kesiliyor mu?', a: 'Evet. Her ödeme döneminde e-Fatura kesilir ve e-posta adresinize gönderilir.' },
  { q: 'Paket yükseltme/düşürme yapabilir miyim?', a: 'Evet. Paketinizi istediğiniz zaman değiştirebilirsiniz, fark iade veya ek ücret olarak yansıtılır.' },
];

const Pricing = () => {
  useSEO({
    title: 'Fiyatlandırma | Shiftlap PDKS Paketleri',
    description: 'Shiftlap PDKS fiyatları: Başlangıç, Profesyonel ve Kurumsal paketler. 14 gün ücretsiz deneyin, donanım gerektirmez.',
    canonical: 'https://shiftlap.com/fiyatlandirma',
  });

  const [isYearly, setIsYearly] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Blobs */}
      <div className="blob" style={{ width: 500, height: 500, top: '-10%', right: '-15%', background: '#ff6b00' }} />
      <div className="blob" style={{ width: 400, height: 400, bottom: '10%', left: '-12%', background: '#fbbf24', opacity: 0.08 }} />

      {/* Hero */}
      <section style={{ paddingTop: '10rem', paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>
        <div className="container text-center">
          <div className="badge" style={{ display: 'inline-flex' }}>Şeffaf Fiyatlandırma</div>
          <h1 className="section-title">İşletmenize Uygun Plan Seçin</h1>
          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            14 gün boyunca tüm özellikleri ücretsiz deneyin. Kredi kartı gerekmez.
          </p>

          {/* Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: 50,
            padding: '0.35rem',
            marginBottom: '4rem',
          }}>
            <button
              onClick={() => setIsYearly(false)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: 50,
                border: 'none',
                background: !isYearly ? 'var(--primary)' : 'transparent',
                color: !isYearly ? 'white' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'var(--font-family)',
              }}
            >
              Aylık
            </button>
            <button
              onClick={() => setIsYearly(true)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: 50,
                border: 'none',
                background: isYearly ? 'var(--primary)' : 'transparent',
                color: isYearly ? 'white' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'var(--font-family)',
              }}
            >
              Yıllık
              <span style={{
                marginLeft: 6,
                padding: '2px 8px',
                borderRadius: 50,
                background: isYearly ? 'rgba(255,255,255,0.2)' : 'rgba(255,107,0,0.1)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: isYearly ? 'white' : 'var(--primary)',
              }}>
                %20 İndirim
              </span>
            </button>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3" style={{ gap: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
            {plans.map((plan, i) => {
              const price = isYearly ? plan.price.yearly : plan.price.monthly;
              const isPro = plan.badge === 'En Popüler';
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass"
                  style={{
                    padding: '2.5rem 2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    borderColor: plan.borderColor,
                    transform: isPro ? 'scale(1.03)' : 'none',
                  }}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div style={{
                      position: 'absolute', top: 16, right: 16,
                      padding: '4px 12px',
                      borderRadius: 50,
                      background: 'linear-gradient(135deg, #ff6b00, #f97316)',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                    }}>
                      {plan.badge}
                    </div>
                  )}

                  {/* Corner glow */}
                  {isPro && (
                    <div style={{
                      position: 'absolute', top: 0, right: 0,
                      width: 200, height: 200,
                      background: 'radial-gradient(circle at top right, rgba(255,107,0,0.12), transparent 70%)',
                      pointerEvents: 'none',
                    }} />
                  )}

                  {/* Plan name */}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.3rem' }}>{plan.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{plan.desc}</p>

                  {/* Price */}
                  <div style={{ marginBottom: '0.5rem' }}>
                    {price ? (
                      <>
                        <span style={{ fontSize: '2.75rem', fontWeight: 800, letterSpacing: '-0.04em', color: plan.color === 'var(--text-muted)' ? 'var(--text-main)' : plan.color }}>
                          {price}₺
                        </span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginLeft: 4 }}>/ay</span>
                      </>
                    ) : (
                      <span style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
                        Teklif Alın
                      </span>
                    )}
                  </div>
                  <p style={{ color: 'var(--text-subtle)', fontSize: '0.8rem', marginBottom: '2rem' }}>
                    {plan.personel}
                  </p>

                  {/* CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank" rel="noopener noreferrer"
                    className={isPro ? 'btn-primary' : ''}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      width: '100%',
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-md)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      marginBottom: '2rem',
                      transition: 'all 0.2s',
                      ...(!isPro ? {
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-main)',
                        background: 'transparent',
                      } : {}),
                    }}
                  >
                    {price ? '14 Gün Ücretsiz Deneyin' : 'Satış Ekibiyle Görüşün'}
                    <ArrowRight size={16} />
                  </a>

                  {/* Features */}
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {plan.features.map((f, j) => (
                      <li key={j} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '0.85rem',
                        color: f.included ? 'var(--text-main)' : 'var(--text-subtle)',
                      }}>
                        {f.included ? (
                          <Check size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                        ) : (
                          <X size={16} style={{ opacity: 0.3, flexShrink: 0 }} />
                        )}
                        <span style={{ textDecoration: f.included ? 'none' : 'line-through', opacity: f.included ? 1 : 0.5 }}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 0 8rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="glass" style={{ padding: '3.5rem 3rem', maxWidth: 800, margin: '0 auto' }}>
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <div className="badge" style={{ display: 'inline-flex' }}>
                <HelpCircle size={14} />
                Fiyatlandırma SSS
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, letterSpacing: '-0.025em' }}>
                Sıkça Sorulan Sorular
              </h2>
            </div>
            <div className="grid md:grid-cols-2" style={{ gap: '2rem' }}>
              {faqs.map((item, i) => (
                <div key={i} style={{ borderLeft: '2px solid rgba(255,107,0,0.25)', paddingLeft: '1.15rem' }}>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem' }}>{item.q}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.75 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ paddingBottom: '8rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #ff6b00, #f97316, #fbbf24)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 30px 60px -15px rgba(255,107,0,0.4)',
          }}>
            <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: 350, height: 350, background: 'rgba(255,255,255,0.08)', borderRadius: '50%', filter: 'blur(40px)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.025em' }}>
                Hangi Paket Size Uygun?
              </h2>
              <p style={{ fontSize: '1rem', opacity: 0.85, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
                Kararsız mısınız? Ekibimize yazın, işletmenize en uygun çözümü birlikte belirleyelim.
              </p>
              <a
                href={whatsappUrl}
                className="btn-primary"
                style={{ background: 'white', color: '#ff6b00', padding: '0.9rem 2.25rem', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                target="_blank" rel="noopener noreferrer"
              >
                <MessageCircle size={17} />
                Ücretsiz Danışmanlık Alın
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
