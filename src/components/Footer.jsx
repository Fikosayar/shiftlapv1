import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Code, Send, Briefcase, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'rgba(0,0,0,0.2)', 
      padding: '8rem 0 3rem 0', 
      borderTop: '1px solid var(--glass-border)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="grid md:grid-cols-4" style={{ gap: '4rem' }}>
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" className="flex items-center gap-2" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
                borderRadius: '10px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white' 
              }}>
                <Clock size={20} />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: '900' }}>
                SHIFT<span style={{ color: 'var(--primary)' }}>LAP</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.8 }}>
              Modern işletmeler için geliştirilmiş, bulut tabanlı ve yapay zeka destekli personel yönetim çözümü.
            </p>
            <div className="flex" style={{ gap: '1.25rem' }}>
              {[Code, Send, Briefcase].map((Icon, i) => (
                <div key={i} style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '12px', 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--glass-border)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: '0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-main)' }}>Platform</h4>
            <ul className="flex flex-col" style={{ gap: '1rem' }}>
              <li><Link to="/" style={{ color: 'var(--text-muted)', transition: '0.3s' }}>Ana Sayfa</Link></li>
              <li><Link to="/pdks-nedir" style={{ color: 'var(--text-muted)' }}>PDKS Nedir?</Link></li>
              <li><Link to="/ozellikler" style={{ color: 'var(--text-muted)' }}>Özellikler</Link></li>
              <li><Link to="/nasil-calisir" style={{ color: 'var(--text-muted)' }}>Nasıl Çalışır?</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '2rem' }}>İletişim</h4>
            <ul className="flex flex-col" style={{ gap: '1.25rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Phone size={16} style={{ color: 'var(--primary)' }} /> 0536 475 3784
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Mail size={16} style={{ color: 'var(--primary)' }} /> info@shiftlab.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <MapPin size={16} style={{ color: 'var(--primary)' }} /> Online Destek
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '2rem' }}>Bülten</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>En yeni özelliklerden ve güncellemelerden haberdar olun.</p>
            <div style={{ position: 'relative' }}>
              <input 
                type="email" 
                placeholder="E-posta adresiniz"
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  paddingRight: '3rem',
                  borderRadius: '14px', 
                  border: '1px solid var(--glass-border)', 
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  color: 'white',
                  outline: 'none'
                }}
              />
              <button style={{ 
                position: 'absolute', 
                right: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                background: 'none', 
                color: 'var(--primary)',
                cursor: 'pointer'
              }}>
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: '6rem', 
          paddingTop: '2rem', 
          borderTop: '1px solid var(--glass-border)', 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'space-between', 
          alignItems: 'center',
          fontSize: '0.85rem', 
          color: 'var(--text-muted)',
          gap: '1.5rem'
        }}>
          <p>© 2024 Shiftlap. Tüm hakları saklıdır. Geleceğin iş gücü yönetimi.</p>
          <div className="flex" style={{ gap: '2.5rem' }}>
            <a href="#" style={{ transition: '0.3s' }}>Gizlilik Politikası</a>
            <a href="#" style={{ transition: '0.3s' }}>Kullanım Şartları</a>
            <a href="#" style={{ transition: '0.3s' }}>KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
