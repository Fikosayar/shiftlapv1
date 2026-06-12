import React from 'react';
import { motion } from 'framer-motion';
import { 
  QrCode, 
  MapPin, 
  Calendar, 
  FileText, 
  Bell, 
  Users, 
  Lock, 
  Cloud,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useLanguage } from '../i18n';

const icons = [QrCode, MapPin, Calendar, FileText, Bell, Users, Lock, Cloud, Layers];
const colors = ['#ff6b00', '#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ec4899', '#ef4444', '#06b6d4', '#ff6b00'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Features = () => {
  const { t } = useLanguage();
  useSEO({
    title: `${t.allFeatures.title} | Shiftlap`,
    description: t.allFeatures.subtitle,
    canonical: 'https://shiftlap.com/ozellikler',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '8rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background Blob */}
      <div className="blob" style={{ top: '-10%', right: '-10%', background: 'var(--primary)', opacity: 0.08 }}></div>

      <div className="container">
        <div className="text-center" style={{ marginBottom: '6rem' }}>
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
            ⚡ {t.allFeatures.badge}
          </motion.div>
          <h1 className="section-title">{t.allFeatures.title}</h1>
          <p className="section-subtitle">
            {t.allFeatures.subtitle}
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {t.allFeatures.items.map((item, i) => {
            const Icon = icons[i];
            const color = colors[i];
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="glass"
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle corner glow */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '80px',
                  height: '80px',
                  background: `radial-gradient(circle at top right, ${color}20, transparent 70%)`,
                  pointerEvents: 'none'
                }} />

                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: `${color}15`,
                  border: `1px solid ${color}30`,
                  color: color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={24} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.7' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: '8rem',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            borderRadius: '32px',
            padding: '4rem 3rem',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 30px 60px -12px var(--primary-glow)'
          }}
        >
          <h2 style={{ fontSize: '2.25rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            {t.cta.title}
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, marginBottom: '2.5rem', maxWidth: '550px', margin: '0 auto 2.5rem auto' }}>
            {t.cta.subtitle}
          </p>
          <a
            href={t.site.whatsapp}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', fontSize: '1rem' }}
          >
            {t.cta.button}
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;
