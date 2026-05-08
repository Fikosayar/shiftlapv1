import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MessageCircle, Sun, Moon, X } from 'lucide-react';
import { t } from '../i18n/tr';

const navLinks = [
  { name: t.nav.home,       path: '/' },
  { name: t.nav.about,      path: '/pdks-nedir' },
  { name: t.nav.features,   path: '/ozellikler' },
  { name: t.nav.howItWorks, path: '/nasil-calisir' },
  { name: t.nav.contact,    path: '/iletisim' },
];

/* ─── Animated hamburger bars ─── */
function Hamburger({ open }) {
  const bar = (transform) => ({
    display: 'block',
    width: 20,
    height: 2,
    borderRadius: 2,
    background: 'currentColor',
    transition: 'transform 0.28s ease, opacity 0.28s ease',
    ...transform,
  });
  return (
    <span style={{ display: 'flex', flexDirection: 'column', gap: 5, pointerEvents: 'none' }}>
      <span style={bar({ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' })} />
      <span style={bar({ opacity: open ? 0 : 1 })} />
      <span style={bar({ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' })} />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark]       = useState(true);
  const location = useLocation();

  /* init theme + scroll listener */
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setDark(saved === 'dark');
    document.body.className = saved;

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close drawer on route change */
  useEffect(() => setOpen(false), [location.pathname]);

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const toggleTheme = useCallback(() => {
    const next = dark ? 'light' : 'dark';
    setDark(!dark);
    document.body.className = next;
    localStorage.setItem('theme', next);
  }, [dark]);

  /* ─── shared icon-button style ─── */
  const iconBtn = {
    width: 36, height: 36,
    borderRadius: 10,
    border: '1px solid var(--glass-border)',
    background: 'var(--card-bg)',
    color: 'var(--text-muted)',
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
    transition: 'border-color 0.2s, color 0.2s',
  };

  return (
    <>
      {/* ═══════════════ NAVBAR ═══════════════ */}
      <nav
        className={scrolled ? 'nav-scrolled' : 'nav-transparent'}
        style={{ zIndex: 100 }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
            <div style={{
              width: 36, height: 36,
              background: 'linear-gradient(135deg, #ff6b00, #f97316)',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 14px -2px rgba(255,107,0,0.45)',
            }}>
              <Clock size={19} strokeWidth={2.5} />
            </div>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1 }}>
              SHIFT<span style={{ color: 'var(--primary)' }}>LAP</span>
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navLinks.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} style={{
                  fontSize: '0.875rem',
                  fontWeight: active ? 700 : 500,
                  color: active ? 'var(--primary)' : 'var(--text-muted)',
                  transition: 'color 0.2s',
                  position: 'relative',
                  paddingBottom: 2,
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

            <button
              onClick={toggleTheme}
              style={iconBtn}
              title={dark ? 'Açık Tema' : 'Koyu Tema'}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,107,0,0.4)'; e.currentTarget.style.color = 'var(--text-main)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a href={t.site.whatsapp} className="btn-primary"
              style={{ padding: '0.6rem 1.3rem', fontSize: '0.85rem', gap: '0.4rem' }}
              target="_blank" rel="noopener noreferrer"
            >
              <MessageCircle size={14} strokeWidth={2.5} />
              {t.nav.cta}
            </a>
          </div>

          {/* ── Mobile controls ── */}
          <div className="mobile-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Tema toggle — pill */}
            <button onClick={toggleTheme} title={dark ? 'Açık Tema' : 'Koyu Tema'} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              height: 36, padding: '0 12px',
              borderRadius: 50,
              border: '1px solid var(--glass-border)',
              background: 'var(--card-bg)',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
            }}>
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={open}
              style={{
                ...iconBtn,
                width: 40, height: 40, borderRadius: 11,
                background: open ? 'rgba(255,107,0,0.1)' : 'var(--card-bg)',
                color: open ? 'var(--primary)' : 'var(--text-main)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Hamburger open={open} />
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════════════ MOBILE DRAWER ═══════════════ */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay — z=200, covers everything including nav (z=100) */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.65)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                zIndex: 200,
              }}
            />

            {/* Drawer — z=300, above overlay */}
            <motion.aside
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigasyon Menüsü"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              style={{
                /* Stacking */
                position: 'fixed', top: 0, right: 0, bottom: 0,
                zIndex: 300,
                /* Size */
                width: 'min(280px, 82vw)',
                /* Layout */
                display: 'flex',
                flexDirection: 'column',
                /* Visuals */
                background: 'var(--background)',
                borderLeft: '1px solid var(--glass-border)',
                boxShadow: '-12px 0 48px rgba(0,0,0,0.5)',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <div style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 1.25rem',
                height: 60,
                borderBottom: '1px solid var(--glass-border)',
              }}>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.12em',
                  color: 'var(--text-subtle)',
                }}>
                  Menü
                </span>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  {/* Tema */}
                  <button onClick={toggleTheme} title={dark ? 'Açık Tema' : 'Koyu Tema'} style={{
                    ...iconBtn,
                    width: 34, height: 34, borderRadius: 9,
                  }}>
                    {dark ? <Sun size={15} /> : <Moon size={15} />}
                  </button>
                  {/* Kapat */}
                  <button onClick={() => setOpen(false)} aria-label="Kapat" style={{
                    ...iconBtn,
                    width: 34, height: 34, borderRadius: 9,
                  }}>
                    <X size={17} />
                  </button>
                </div>
              </div>

              {/* Links — scrollable, fills remaining space */}
              <nav style={{ flex: 1, overflowY: 'auto', padding: '0.75rem 0.75rem 0' }}>
                {navLinks.map(link => {
                  const active = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.9rem 1rem',
                        marginBottom: 2,
                        borderRadius: 12,
                        fontWeight: active ? 700 : 500,
                        fontSize: '0.95rem',
                        color: active ? 'var(--primary)' : 'var(--text-main)',
                        background: active ? 'rgba(255,107,0,0.08)' : 'transparent',
                        transition: 'background 0.15s',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--surface)'; }}
                      onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                    >
                      {link.name}
                      {active && (
                        <span style={{
                          width: 6, height: 6, borderRadius: '50%',
                          background: 'var(--primary)', flexShrink: 0,
                        }} />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Footer — pinned to bottom */}
              <div style={{
                flexShrink: 0,
                padding: '1rem 1.25rem',
                borderTop: '1px solid var(--glass-border)',
              }}>
                <a
                  href={t.site.whatsapp}
                  className="btn-primary"
                  onClick={() => setOpen(false)}
                  target="_blank" rel="noopener noreferrer"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
                >
                  <MessageCircle size={16} />
                  {t.nav.cta}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Responsive breakpoints */}
      <style>{`
        @media (max-width: 960px)  { .desktop-nav    { display: none !important; } }
        @media (min-width: 961px)  { .mobile-controls { display: none !important; } }
      `}</style>
    </>
  );
}
