import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Clock } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <Link to="/" className="flex items-center gap-2 group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: 'var(--primary)', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'white' 
          }}>
            <Clock size={24} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeights: '900', letterSpacing: '-0.05em' }}>
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
                color: location.pathname === link.path ? 'var(--primary)' : 'inherit',
                transition: 'color 0.2s'
              }}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim" 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hemen Başla
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-only" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', color: 'inherit' }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            position: 'absolute', 
            top: '100%', 
            left: 0, 
            width: '100%', 
            backgroundColor: 'var(--background)', 
            padding: '2rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem',
            borderBottom: '1px solid var(--glass-border)',
            boxShadow: 'var(--shadow)'
          }}
        >
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '1.2rem', fontWeight: '600' }}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim" 
            className="btn-primary"
            style={{ justifyContent: 'center' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hemen Başla
          </a>
        </motion.div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
