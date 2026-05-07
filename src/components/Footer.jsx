import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'PDKS Nedir?', to: '/pdks-nedir' },
  { label: 'Özellikler', to: '/ozellikler' },
  { label: 'Nasıl Çalışır?', to: '/nasil-calisir' },
  { label: 'İletişim', to: '/iletisim' },
];

const whatsappUrl = "https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim";

export default function Footer() {
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
              Modern işletmeler için geliştirilmiş, bulut tabanlı personel yönetim çözümü. 
              Donanımsız, hızlı ve güvenilir.
            </p>
            <a
              href={whatsappUrl}
              className="btn-primary"
              style={{ padding: '0.7rem 1.5rem', fontSize: '0.88rem' }}
              target="_blank" rel="noopener noreferrer"
            >
              Ücretsiz Deneyin
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-subtle)', marginBottom: '1.25rem' }}>
              Platform
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
              İletişim
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: Phone, text: '0536 475 3784', href: 'tel:+905364753784' },
                { icon: Mail, text: 'info@shiftlab.com', href: 'mailto:info@shiftlab.com' },
                { icon: MapPin, text: 'Online Destek', href: null },
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
            © {new Date().getFullYear()} Shiftlap. Tüm hakları saklıdır.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Gizlilik Politikası', 'Kullanım Şartları', 'KVKK'].map(item => (
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
