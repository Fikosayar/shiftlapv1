import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '8rem', paddingBottom: '5rem' }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <h1 className="section-title">Bize Ulaşın</h1>
          <p className="section-subtitle">
            Sorularınız mı var? Ekibimiz size yardımcı olmaktan mutluluk duyar.
          </p>
        </div>

        <div className="grid md:grid-cols-3" style={{ gap: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '2rem' }}>İletişim Bilgileri</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p style={{ fontWeight: '700' }}>E-posta</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>info@shiftlab.com</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p style={{ fontWeight: '700' }}>Telefon</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>0536 475 3784</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p style={{ fontWeight: '700' }}>Lokasyon</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Online / Uzaktan Destek</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: 'span 2' }}>
            <form className="glass" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="grid md:grid-cols-2" style={{ gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700' }}>Ad Soyad</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    style={{ padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--background)' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700' }}>E-posta</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    style={{ padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--background)' }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '700' }}>Konu</label>
                <input 
                  type="text" 
                  placeholder="Nasıl yardımcı olabiliriz?"
                  style={{ padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--background)' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '700' }}>Mesaj</label>
                <textarea 
                  rows="5"
                  placeholder="Mesajınız..."
                  style={{ padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--background)', resize: 'none' }}
                ></textarea>
              </div>
              <button className="btn-primary" style={{ justifyContent: 'center', padding: '1rem' }}>
                Mesaj Gönder
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr !important; }
          div[style*="gridColumn: span 2"] { grid-column: auto !important; }
        }
      `}} />
    </motion.div>
  );
};

export default Contact;
