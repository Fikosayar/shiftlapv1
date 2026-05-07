import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Clock, MessageCircle, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'PDKS Nedir?', path: '/pdks-nedir' },
  { name: 'Özellikler', path: '/ozellikler' },
  { name: 'Nasıl Çalışır?', path: '/nasil-calisir' },
  { name: 'İletişim', path: '/iletisim' },
];

const whatsappUrl = "https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setIsDark(saved === 'dark');
    document.body.className = saved;

    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.body.className = next;
    localStorage.setItem('theme', next);
  };

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : 'nav-transparent'}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: 38, height: 38,
              background: 'linear-gradient(135deg, #ff6b00, #f97316)',
              borderRadius: 11,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 6px 16px -4px rgba(255,107,0,0.55)',
              flexShrink: 0
            }}>
              <Clock size={20} strokeWidth={2.5} />
            </div>
            <span style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              letterSpacing: '-0.045em',
              lineHeight: 1
            }}>
              SHIFT<span style={{ color: 'var(--primary)' }}>LAP</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: active ? 700 : 500,
                    color: active ? 'var(--primary)' : 'var(--text-muted)',
                    transition: 'color 0.2s',
                    position: 'relative'
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'var(--text-main)'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  {link.name}
                  {active && (
                    <span style={{
                      position: 'absolute',
                      bottom: -4, left: 0, right: 0,
                      height: 2,
                      background: 'var(--primary)',
                      borderRadius: 2
                    }} />
                  )}
                </Link>
              );
            })}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: 10,
                width: 36, height: 36,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                transition: 'all 0.2s',
                flexShrink: 0
              }}
              title={isDark ? 'Açık Tema' : 'Koyu Tema'}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href={whatsappUrl}
              className="btn-primary"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem', gap: '0.4rem' }}
              target="_blank" rel="noopener noreferrer"
            >
              <MessageCircle size={15} />
              Hemen Başla
            </a>
          </div>

          {/* Mobile controls */}
          <div className="mobile-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={toggleTheme} style={{ background: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(v => !v)} style={{ background: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                zIndex: 998, backdropFilter: 'blur(4px)'
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: 280,
                background: 'var(--background)',
                borderLeft: '1px solid var(--glass-border)',
                zIndex: 999,
                display: 'flex', flexDirection: 'column',
                padding: '5rem 2rem 2rem'
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute', top: 16, right: 16,
                  background: 'none', color: 'var(--text-muted)', cursor: 'pointer'
                }}
              >
                <X size={28} />
              </button>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{
                      padding: '0.9rem 1rem',
                      borderRadius: 12,
                      fontWeight: 600,
                      fontSize: '1rem',
                      background: location.pathname === link.path ? 'rgba(255,107,0,0.08)' : 'transparent',
                      color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)'
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div style={{ marginTop: 'auto' }}>
                <a
                  href={whatsappUrl}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                  target="_blank" rel="noopener noreferrer"
                >
                  <MessageCircle size={17} />
                  Hemen Başla
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) { .desktop-nav { display: none !important; } }
        @media (min-width: 901px) { .mobile-controls { display: none !important; } }
      `}</style>
    </>
  );
}
