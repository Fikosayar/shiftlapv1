import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Code, Send, Briefcase, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgba(0,0,0,0.02)', padding: '5rem 0 2rem 0', borderTop: '1px solid var(--glass-border)', marginTop: '5rem' }}>
      <div className="container">
        <div className="grid md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyItems: 'center', color: 'white', justifyContent: 'center' }}>
                <Clock size={18} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: '900' }}>
                SHIFT<span style={{ color: 'var(--primary)' }}>LAP</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Shiftlap, modern işletmeler için geliştirilmiş, bulut tabanlı personel devam kontrol sistemidir.
            </p>
            <div className="flex" style={{ gap: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Code size={18} /></div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Send size={18} /></div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Briefcase size={18} /></div>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '1.5rem' }}>Hızlı Linkler</h4>
            <ul className="flex flex-col" style={{ gap: '0.75rem' }}>
              <li><Link to="/" style={{ color: 'var(--text-muted)' }}>Ana Sayfa</Link></li>
              <li><Link to="/pdks-nedir" style={{ color: 'var(--text-muted)' }}>PDKS Nedir?</Link></li>
              <li><Link to="/ozellikler" style={{ color: 'var(--text-muted)' }}>Özellikler</Link></li>
              <li><Link to="/nasil-calisir" style={{ color: 'var(--text-muted)' }}>Nasıl Çalışır?</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '1.5rem' }}>İletişim</h4>
            <ul className="flex flex-col" style={{ gap: '0.75rem' }}>
              <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>0536 475 3784</li>
              <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>info@shiftlab.com</li>
              <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Online Destek</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '1.5rem' }}>Bülten</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>En yeni özelliklerden haberdar olun.</p>
            <div style={{ position: 'relative' }}>
              <input 
                type="email" 
                placeholder="E-posta"
                style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--background)' }}
              />
              <button style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', color: 'var(--primary)' }}>
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <p>© 2024 Shiftlap. Tüm hakları saklıdır.</p>
          <div className="flex" style={{ gap: '2rem' }}>
            <a href="#">Gizlilik</a>
            <a href="#">Koşullar</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
