import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Footer() {
  const { t, lang } = useLanguage();

  const footerLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.about, to: '/pdks-nedir' },
    { label: t.nav.features, to: '/ozellikler' },
    { label: t.nav.howItWorks, to: '/nasil-calisir' },
    { label: lang === 'tr' ? 'Fiyatlandırma' : 'Pricing', to: '/fiyatlandirma' },
    { label: 'Blog', to: '/blog' },
    { label: t.nav.contact, to: '/iletisim' },
  ];


  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      padding: '6rem 0 2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* subtle top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.4), transparent)'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '3rem',
          marginBottom: '5rem'
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 2', maxWidth: 340 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: 34, height: 34,
                background: 'linear-gradient(135deg, #ff6b00, #f97316)',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', flexShrink: 0
              }}>
                <Clock size={18} strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.04em' }}>
                SHIFT<span style={{ color: 'var(--primary)' }}>LAP</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.75rem' }}>
              {t.footer.desc}
            </p>
            <a
              href={t.site.whatsapp}
              className="btn-primary"
              style={{ padding: '0.7rem 1.5rem', fontSize: '0.88rem' }}
              target="_blank" rel="noopener noreferrer"
            >
              {t.footer.cta}
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-subtle)', marginBottom: '1.25rem' }}>
              {t.footer.platformLabel}
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-main)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-subtle)', marginBottom: '1.25rem' }}>
              {t.footer.contactLabel}
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: Phone, text: t.site.phone, href: 'tel:+905364753784' },
                { icon: Mail, text: t.site.email, href: 'mailto:info@shiftlap.com' },
                { icon: MapPin, text: t.site.address, href: null },
              ].map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    <Icon size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                    {item.text}
                  </span>
                );
                return (
                  <li key={i}>
                    {item.href
                      ? <a href={item.href} style={{ transition: 'opacity 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >{inner}</a>
                      : inner
                    }
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--glass-border)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <p style={{ color: 'var(--text-subtle)', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {t.footer.legal.map(item => (
              <a
                key={item}
                href="#"
                style={{ color: 'var(--text-subtle)', fontSize: '0.82rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-muted)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-subtle)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
