import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useLanguage } from '../i18n';

const Contact = () => {
  const { t } = useLanguage();
  useSEO({
    title: `${t.contact.badge} | Shiftlap`,
    description: t.contact.subtitle.slice(0, 155),
    canonical: 'https://shiftlap.com/iletisim',
  });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const inputStyle = {
    padding: '0.9rem 1rem',
    borderRadius: '12px',
    border: '1px solid var(--glass-border)',
    backgroundColor: 'rgba(255,255,255,0.03)',
    color: 'var(--text-main)',
    fontSize: '1rem',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s',
    fontFamily: 'inherit'
  };

  const cardIcons = [Phone, Mail, MessageCircle];
  const cardColors = ['#ff6b00', '#3b82f6', '#10b981'];
  const cardHrefs = ['tel:+905364753784', 'mailto:info@shiftlap.com', t.site.whatsapp];
  const contactCards = t.contact.cards.map((c, i) => ({
    ...c, icon: cardIcons[i], color: cardColors[i], href: cardHrefs[i]
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '8rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}
    >
      <div className="blob" style={{ top: '-10%', right: '-15%', background: 'var(--primary)', opacity: 0.07 }}></div>
      <div className="blob" style={{ bottom: '-10%', left: '-10%', background: 'var(--secondary)', opacity: 0.07 }}></div>

      <div className="container">
        <div className="text-center" style={{ marginBottom: '5rem' }}>
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
            {t.contact.badge}
          </motion.div>
          <h1 className="section-title">{t.contact.title}</h1>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3" style={{ gap: '2rem', marginBottom: '5rem' }}>
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={i}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: `${card.color}15`,
                  border: `1px solid ${card.color}30`,
                  color: card.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                    {card.label}
                  </p>
                  <p style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.25rem' }}>{card.value}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={12} /> {card.sub}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Form + WhatsApp CTA */}
        <div className="grid md:grid-cols-3" style={{ gap: '3rem', alignItems: 'start' }}>
          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{
              padding: '2.5rem',
              background: 'linear-gradient(135deg, rgba(16,185,129,0.08), transparent)',
              borderColor: 'rgba(16,185,129,0.2)'
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '18px',
              background: '#10b98115',
              border: '1px solid #10b98130',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              color: '#10b981'
            }}>
              <MessageCircle size={28} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              {t.contact.whatsappTitle}
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
              {t.contact.whatsappDesc}
            </p>
            <ul className="flex flex-col" style={{ gap: '0.75rem', marginBottom: '2rem' }}>
              {t.contact.whatsappBenefits.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-muted)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={t.site.whatsapp}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '100%', justifyContent: 'center', background: '#10b981', boxShadow: '0 10px 25px -5px rgba(16,185,129,0.4)' }}
            >
              <MessageCircle size={18} />
              {t.contact.whatsappBtn}
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', gridColumn: 'span 2' }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
              {t.contact.formTitle}
            </h3>

            {sent ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                padding: '3rem',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={64} style={{ color: '#10b981' }} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: '800' }}>{t.contact.successTitle}</h4>
                <p style={{ color: 'var(--text-muted)' }}>{t.contact.successDesc}</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2" style={{ gap: '1.25rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>{t.contact.fields.name}</label>
                    <input
                      type="text"
                      placeholder={t.contact.placeholders.name}
                      required
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>{t.contact.fields.email}</label>
                    <input
                      type="email"
                      placeholder={t.contact.placeholders.email}
                      required
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>{t.contact.fields.subject}</label>
                  <input
                    type="text"
                    placeholder={t.contact.placeholders.subject}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>{t.contact.fields.message}</label>
                  <textarea
                    rows="5"
                    placeholder={t.contact.placeholders.message}
                    required
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '1rem' }}>
                  {t.contact.submitBtn}
                  <Send size={18} />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
