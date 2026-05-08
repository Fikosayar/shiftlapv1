import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MessageCircle } from 'lucide-react';
import { t } from '../i18n/tr';

const navLinks = [
  { name: t.nav.home,       path: '/' },
  { name: t.nav.about,      path: '/pdks-nedir' },
  { name: t.nav.features,   path: '/ozellikler' },
  { name: t.nav.howItWorks, path: '/nasil-calisir' },
  { name: t.nav.contact,    path: '/iletisim' },
];

/* ── Theme toggle icon ── */
function ThemeIcon({ isDark }) {
  return isDark ? (
    /* Sun */
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  ) : (
    /* Moon */
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
    </svg>
  );
}

/* ── Animated Hamburger ── */
function HamburgerIcon({ isOpen }) {
  const barStyle = {
    display: 'block',
    width: '22px',
    height: '2px',
    borderRadius: '2px',
    background: 'currentColor',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transformOrigin: 'center',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{
        ...barStyle,
        transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
      }} />
      <span style={{
        ...barStyle,
        opacity: isOpen ? 0 : 1,
        transform: isOpen ? 'scaleX(0)' : 'none',
      }} />
      <span style={{
        ...barStyle,
        transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
      }} />
    </div>
  );
}

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
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const toggleTheme = useCallback(() => {
    const next = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.body.className = next;
    localStorage.setItem('theme', next);
  }, [isDark]);

  const iconBtnStyle = {
    width: 36,
    height: 36,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid var(--glass-border)',
    background: 'var(--card-bg)',
    color: 'var(--text-muted)',
    transition: 'all 0.2s ease',
    flexShrink: 0,
  };

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : 'nav-transparent'}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
            <div style={{
              width: 36, height: 36,
              background: 'linear-gradient(135deg, #ff6b00, #f97316)',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 14px -2px rgba(255,107,0,0.5)',
            }}>
              <Clock size={19} strokeWidth={2.5} />
            </div>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1 }}>
              SHIFT<span style={{ color: 'var(--primary)' }}>LAP</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navLinks.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: active ? 700 : 500,
                    color: active ? 'var(--primary)' : 'var(--text-muted)',
                    transition: 'color 0.2s',
                    position: 'relative',
                    paddingBottom: '2px',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'var(--text-main)'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  {link.name}
                  {active && (
                    <span style={{
                      position: 'absolute', bottom: -2, left: 0, right: 0,
                      height: 2, background: 'var(--primary)', borderRadius: 2,
                    }} />
                  )}
                </Link>
              );
            })}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              style={iconBtnStyle}
              title={isDark ? 'Açık Temaya Geç' : 'Koyu Temaya Geç'}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,107,0,0.35)'; e.currentTarget.style.color = 'var(--text-main)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              <ThemeIcon isDark={isDark} />
            </button>

            {/* CTA */}
            <a
              href={t.site.whatsapp}
              className="btn-primary"
              style={{ padding: '0.6rem 1.3rem', fontSize: '0.85rem', gap: '0.4rem' }}
              target="_blank" rel="noopener noreferrer"
            >
              <MessageCircle size={14} strokeWidth={2.5} />
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile controls */}
          <div className="mobile-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {/* Theme toggle — pill style */}
            <button
              onClick={toggleTheme}
              title={isDark ? 'Açık Tema' : 'Koyu Tema'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0 12px',
                height: 36,
                borderRadius: 50,
                border: '1px solid var(--glass-border)',
                background: 'var(--card-bg)',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600,
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
            >
              <ThemeIcon isDark={isDark} />
              <span style={{ display: 'none' /* shown via CSS on wider mobile */ }}>
                {isDark ? 'Aydınlık' : 'Karanlık'}
              </span>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(v => !v)}
              aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={isOpen}
              style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                border: '1px solid var(--glass-border)',
                background: isOpen
                  ? 'rgba(255,107,0,0.1)'
                  : 'var(--card-bg)',
                color: isOpen ? 'var(--primary)' : 'var(--text-main)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s',
                backdropFilter: 'blur(8px)',
                flexShrink: 0,
              }}
            >
              <HamburgerIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(6px)',
                zIndex: 998,
              }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: 'min(300px, 85vw)',
                background: 'var(--background)',
                borderLeft: '1px solid var(--glass-border)',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Drawer header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid var(--glass-border)',
              }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => setIsOpen(false)}>
                  <div style={{
                    width: 30, height: 30,
                    background: 'linear-gradient(135deg, #ff6b00, #f97316)',
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff',
                  }}>
                    <Clock size={16} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.04em' }}>
                    SHIFT<span style={{ color: 'var(--primary)' }}>LAP</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    width: 34, height: 34, borderRadius: 9,
                    border: '1px solid var(--glass-border)',
                    background: 'transparent',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <HamburgerIcon isOpen={true} />
                </button>
              </div>

              {/* Links */}
              <nav style={{ padding: '1rem 1rem', flex: 1, overflow: 'auto' }}>
                {navLinks.map((link, i) => {
                  const active = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1rem',
                          borderRadius: 12,
                          fontWeight: active ? 700 : 500,
                          fontSize: '0.95rem',
                          color: active ? 'var(--primary)' : 'var(--text-main)',
                          background: active ? 'rgba(255,107,0,0.08)' : 'transparent',
                          marginBottom: '2px',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--surface)'; }}
                        onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                      >
                        {link.name}
                        {active && (
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', display: 'inline-block' }} />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={t.site.whatsapp}
                  className="btn-primary"
                  style={{ justifyContent: 'center', padding: '0.9rem' }}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle size={16} />
                  {t.nav.cta}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 960px)  { .desktop-nav { display: none !important; } }
        @media (min-width: 961px)  { .mobile-controls { display: none !important; } }
      `}</style>
    </>
  );
}
