import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Clock, Zap, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  const whatsappUrl = "https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.body.className = savedTheme;
    } else {
      document.body.className = 'dark';
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'PDKS Nedir?', path: '/pdks-nedir' },
    { name: 'Özellikler', path: '/ozellikler' },
    { name: 'Nasıl Çalışır?', path: '/nasil-calisir' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <nav className={scrolled ? 'nav-scrolled' : 'nav-transparent'}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            width: '42px', 
            height: '42px', 
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'white',
            boxShadow: '0 8px 16px -4px var(--primary-glow)'
          }}>
            <Clock size={22} />
          </div>
          <span style={{ fontSize: '1.6rem', fontWeight: '900', letterSpacing: '-0.05em' }}>
            SHIFT<span style={{ color: 'var(--primary)' }}>LAP</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              style={{ 
                fontWeight: '600', 
                fontSize: '0.95rem',
                color: location.pathname === link.path ? 'var(--primary)' : 'inherit',
                opacity: location.pathname === link.path ? 1 : 0.7,
                transition: 'all 0.3s'
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <button 
            onClick={toggleTheme}
            style={{ 
              background: 'none', 
              color: 'inherit', 
              cursor: 'pointer', 
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href={whatsappUrl} 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}
          >
            <Zap size={16} />
            Hemen Başla
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-only flex" style={{ gap: '1rem', alignItems: 'center' }}>
          <button onClick={toggleTheme} style={{ background: 'none', color: 'inherit' }}>
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', color: 'inherit' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ 
            position: 'fixed', 
            top: 0, 
            right: 0, 
            width: '280px', 
            height: '100vh',
            backgroundColor: 'var(--background)', 
            padding: '4rem 2rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem',
            borderLeft: '1px solid var(--glass-border)',
            boxShadow: 'var(--shadow)',
            zIndex: 2000
          }}
        >
          <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', color: 'inherit' }}>
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '1.4rem', fontWeight: '800' }}
            >
              {link.name}
            </Link>
          ))}
          <a href={whatsappUrl} className="btn-primary" style={{ justifyContent: 'center', marginTop: 'auto' }}>Hemen Başla</a>
        </motion.div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 1025px) {
          .mobile-only { display: none !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
