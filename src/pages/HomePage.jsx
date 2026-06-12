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
import { useLanguage } from '../i18n';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
});

const featureIcons = [Smartphone, ShieldCheck, BarChart3];
const featureColors = ['#ff6b00', '#10b981', '#3b82f6'];
const testimonialColors = ['#ff6b00', '#10b981', '#3b82f6'];

export default function HomePage() {
  const { t } = useLanguage();

  useSEO({
    title: `Shiftlap | ${t.site.tagline}`,
    description: t.hero.subtitle.slice(0, 155),
    canonical: 'https://shiftlap.com/',
  });

  const features = t.features.items.map((item, i) => ({
    ...item, icon: featureIcons[i], color: featureColors[i]
  }));

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
              {t.hero.badge}
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
              {t.hero.titleLine1}{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff6b00, #fbbf24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleLine2}
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
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              {...fadeUp(0.21)}
              className="flex"
              style={{ gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <a
                href={t.site.whatsapp}
                className="btn-primary"
                style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
                target="_blank" rel="noopener noreferrer"
              >
                {t.hero.ctaPrimary}
                <ChevronRight size={18} />
              </a>
              <a
                href={t.site.whatsapp}
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
                {t.hero.ctaSecondary}
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
            {t.stats.map((s, i) => (
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
                  alt="Shiftlap Dashboard"
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
            <div className="badge" style={{ display: 'inline-flex' }}>{t.features.badge}</div>
            <h2 className="section-title">{t.features.title}</h2>
            <p className="section-subtitle">
              {t.features.subtitle}
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

      {/* ── Testimonials ── */}
      <section style={{ padding: '4rem 0 8rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <motion.div {...fadeUp(0)}>
              <div className="badge" style={{ display: 'inline-flex' }}>{t.testimonials.badge}</div>
            </motion.div>
            <motion.h2 {...fadeUp(0.1)} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.025em' }}>
              {t.testimonials.title}
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3" style={{ gap: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
            {t.testimonials.items.map((ti, i) => {
              const tColor = testimonialColors[i];
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass"
                style={{
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Corner glow */}
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  width: 100, height: 100,
                  background: `radial-gradient(circle at top left, ${tColor}10, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                {/* Stars */}
                <div style={{ display: 'flex', gap: 2, marginBottom: '1rem' }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.92rem',
                  lineHeight: 1.8,
                  flex: 1,
                  marginBottom: '1.5rem',
                  fontStyle: 'italic',
                }}>
                  "{ti.quote}"
                </p>

                {/* Author */}
                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <div style={{
                    width: 38, height: 38,
                    borderRadius: 10,
                    background: `${tColor}14`,
                    border: `1px solid ${tColor}28`,
                    color: tColor,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                  }}>
                    {ti.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.3 }}>{ti.name}</p>
                    <p style={{ color: 'var(--text-subtle)', fontSize: '0.78rem' }}>
                      {ti.role} · {ti.company}
                    </p>
                  </div>
                </div>
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
              <div className="badge" style={{ display: 'inline-flex' }}>{t.faq.badge}</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.025em' }}>
                {t.faq.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2" style={{ gap: '2.5rem' }}>
              {t.faq.items.map((item, i) => (
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
                {t.cta.title}
              </h2>
              <p style={{ fontSize: '1.05rem', opacity: 0.85, marginBottom: '2.5rem', maxWidth: 520, margin: '0 auto 2.5rem' }}>
                {t.cta.subtitle}
              </p>
              <a
                href={t.site.whatsapp}
                className="btn-primary"
                style={{ background: 'white', color: '#ff6b00', padding: '1rem 2.5rem', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
                target="_blank" rel="noopener noreferrer"
              >
                {t.cta.button}
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
