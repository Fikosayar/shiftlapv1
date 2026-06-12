import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap, ArrowRight, MessageCircle, HelpCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useLanguage } from '../i18n';

const planPrices = [
  { monthly: 299, yearly: 249 },
  { monthly: 599, yearly: 499 },
  { monthly: null, yearly: null },
];

const planColors = [
  { color: 'var(--text-muted)', borderColor: 'var(--glass-border)' },
  { color: '#ff6b00', borderColor: 'rgba(255, 107, 0, 0.5)' },
  { color: 'var(--text-muted)', borderColor: 'var(--glass-border)' },
];

// Feature include matrix: [plan0, plan1, plan2] for each feature index
const featureIncludes = [
  [true, true, true],     // QR
  [true, true, true],     // GPS
  [true, true, true],     // Basic Reporting
  [true, true, true],     // Mobile App
  [true, true, true],     // Email Support
  [false, true, true],    // Shift Mgmt
  [false, true, true],    // Advanced Reporting
  [false, false, true],   // API
  [false, false, true],   // Priority Support
];

const Pricing = () => {
  const { t } = useLanguage();
  useSEO({
    title: `${t.pricing.badge} | Shiftlap`,
    description: t.pricing.subtitle.slice(0, 155),
    canonical: 'https://shiftlap.com/fiyatlandirma',
  });

  const [isYearly, setIsYearly] = useState(true);

  const plans = t.pricing.plans.map((p, i) => ({
    ...p,
    price: planPrices[i],
    ...planColors[i],
    features: t.pricing.features.map((text, j) => ({
      text, included: featureIncludes[j][i]
    })),
  }));

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
          <div className="badge" style={{ display: 'inline-flex' }}>{t.pricing.badge}</div>
          <h1 className="section-title">{t.pricing.title}</h1>
          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            {t.pricing.subtitle}
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
              {t.pricing.monthly}
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
              {t.pricing.yearly}
              <span style={{
                marginLeft: 6,
                padding: '2px 8px',
                borderRadius: 50,
                background: isYearly ? 'rgba(255,255,255,0.2)' : 'rgba(255,107,0,0.1)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: isYearly ? 'white' : 'var(--primary)',
              }}>
                {t.pricing.discount}
              </span>
            </button>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3" style={{ gap: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
            {plans.map((plan, i) => {
              const price = isYearly ? plan.price.yearly : plan.price.monthly;
              const isPro = i === 1;
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
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginLeft: 4 }}>{t.pricing.perMonth}</span>
                      </>
                    ) : (
                      <span style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
                        {t.pricing.getQuote}
                      </span>
                    )}
                  </div>
                  <p style={{ color: 'var(--text-subtle)', fontSize: '0.8rem', marginBottom: '2rem' }}>
                    {plan.personel}
                  </p>

                  {/* CTA */}
                  <a
                    href={t.site.whatsapp}
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
                    {price ? t.pricing.tryFree : t.pricing.talkSales}
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
                {t.pricing.faqBadge}
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, letterSpacing: '-0.025em' }}>
                {t.pricing.faqTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-2" style={{ gap: '2rem' }}>
              {t.pricing.faqs.map((item, i) => (
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
                {t.pricing.ctaTitle}
              </h2>
              <p style={{ fontSize: '1rem', opacity: 0.85, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
                {t.pricing.ctaDesc}
              </p>
              <a
                href={t.site.whatsapp}
                className="btn-primary"
                style={{ background: 'white', color: '#ff6b00', padding: '0.9rem 2.25rem', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                target="_blank" rel="noopener noreferrer"
              >
                <MessageCircle size={17} />
                {t.pricing.ctaBtn}
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
