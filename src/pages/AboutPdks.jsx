import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, TrendingUp, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useLanguage } from '../i18n';

const AboutPdks = () => {
  const { t, lang } = useLanguage();
  useSEO({
    title: `${t.about.badge} | Shiftlap`,
    description: t.about.subtitle.slice(0, 155),
    canonical: 'https://shiftlap.com/pdks-nedir',
  });

  const statColors = ['#ff6b00', '#10b981', '#3b82f6'];
  const stats = t.about.stats.map((s, i) => ({ ...s, color: statColors[i] }));

  const sideCards = lang === 'tr'
    ? [
        { icon: Zap, title: 'Anlık Veri', desc: 'Tüm giriş-çıkış kayıtlarına gerçek zamanlı erişim', color: '#ff6b00' },
        { icon: Shield, title: 'Güvenli Mimari', desc: 'Uçtan uca şifreleme ile verileriniz korunur', color: '#10b981' },
        { icon: Globe, title: 'Her Yerden Erişim', desc: 'Tarayıcı veya mobil uygulama ile her cihazdan', color: '#3b82f6' },
      ]
    : [
        { icon: Zap, title: 'Real-Time Data', desc: 'Access all check-in/out records in real-time', color: '#ff6b00' },
        { icon: Shield, title: 'Secure Architecture', desc: 'Your data is protected with end-to-end encryption', color: '#10b981' },
        { icon: Globe, title: 'Access Anywhere', desc: 'From any device via browser or mobile app', color: '#3b82f6' },
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
            {t.about.badge}
          </motion.div>
          <h1 className="section-title">{t.about.title}</h1>
          <p className="section-subtitle">
            {t.about.subtitle}
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
              {t.about.whyTitle}
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              {t.about.whyDesc}
            </p>
            <ul className="flex flex-col" style={{ gap: '1rem', marginBottom: '2.5rem' }}>
              {t.about.benefits.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span style={{ fontWeight: '600' }}>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={t.site.whatsapp}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', padding: '1rem 2.5rem' }}
            >
              {t.cta.button}
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
              {sideCards.map((item, i) => {
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
                {t.about.comparisonTitle}
              </h2>
              <p style={{ opacity: 0.85, lineHeight: 1.8 }}>
                {t.about.comparisonDesc}
              </p>
            </div>
            <div className="flex flex-col" style={{ gap: '1.25rem' }}>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}>
                  <AlertCircle size={18} /> {t.about.traditional.title}
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.65 }}>
                  {t.about.traditional.desc}
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.3)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} /> {t.about.shiftlap.title}
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  {t.about.shiftlap.desc}
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
