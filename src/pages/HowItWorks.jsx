import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Smartphone, QrCode, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const steps = [
  {
    icon: UserPlus,
    title: 'Hızlı Kurulum',
    desc: 'Şirket profilinizi oluşturun ve personellerinizi saniyeler içinde sisteme ekleyin.',
    tag: 'Adım 1'
  },
  {
    icon: Smartphone,
    title: 'Uygulama İndirme',
    desc: "Personelleriniz Shiftlap mobil uygulamasını App Store veya Play Store'dan indirir.",
    tag: 'Adım 2'
  },
  {
    icon: QrCode,
    title: 'Okut ve Başla',
    desc: 'İş yerindeki QR kodu telefonla okutarak mesaiyi başlatın. Konum doğrulaması otomatik yapılır.',
    tag: 'Adım 3'
  },
  {
    icon: LineChart,
    title: 'Takip ve Rapor',
    desc: 'Yönetim panelinden tüm giriş-çıkışları anlık takip edin, ay sonunda tek tıkla puantaj hazırlayın.',
    tag: 'Adım 4'
  }
];

const HowItWorks = () => {
  useSEO({
    title: "Shiftlap Nasil Calisir? | 4 Adimda PDKS Kurulumu",
    description: "Shiftlap ile baslamak cok kolay. Hesap acin, personeli ekleyin, QR kodu okutun ve raporlarinizi aninda alin.",
    canonical: 'https://shiftlap.com/nasil-calisir',
  });
  const whatsappUrl = "https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim";


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '8rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}
    >
      <div className="blob" style={{ top: '20%', left: '-15%', background: 'var(--secondary)', opacity: 0.08 }}></div>

      <div className="container">
        <div className="text-center" style={{ marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              display: 'inline-block',
              padding: '0.4rem 1.25rem',
              borderRadius: '50px',
              backgroundColor: 'rgba(255, 107, 0, 0.1)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              fontWeight: '700',
              fontSize: '0.85rem',
              marginBottom: '1.5rem'
            }}
          >
            🛠 Nasıl Çalışır?
          </motion.div>
          <h1 className="section-title">4 Adımda Hazırsınız</h1>
          <p className="section-subtitle">
            Shiftlap'ı kullanmaya başlamak sandığınızdan çok daha kolay. 
            Sadece 4 adımda işletmenizi dijitalleştirin.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connector line (desktop only) */}
          <div style={{
            position: 'absolute',
            top: '60px',
            left: 'calc(12.5% + 40px)',
            right: 'calc(12.5% + 40px)',
            height: '2px',
            background: 'linear-gradient(to right, var(--primary), var(--secondary))',
            opacity: 0.3,
            display: 'none'
          }} className="connector-line" />

          <div className="grid md:grid-cols-4" style={{ gap: '2rem' }}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
                  className="glass"
                  style={{
                    padding: '2.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '1.25rem',
                    position: 'relative'
                  }}
                >
                  {/* Step number badge */}
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '0.25rem 1rem',
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    letterSpacing: '0.05em'
                  }}>
                    {step.tag}
                  </div>

                  <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '20px',
                    background: 'rgba(255,107,0,0.1)',
                    border: '1px solid rgba(255,107,0,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    marginTop: '0.5rem'
                  }}>
                    <Icon size={32} />
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                      {step.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Benefits checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass"
          style={{
            marginTop: '6rem',
            padding: '4rem',
            background: 'linear-gradient(135deg, rgba(255,107,0,0.04), transparent)'
          }}
        >
          <div className="grid md:grid-cols-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                Neden Shiftlap?
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Tek seferlik kurulum, sıfır bakım maliyeti, anlık raporlama. 
                İşletmenizin büyüklüğü ne olursa olsun, Shiftlap sizinle ölçeklenir.
              </p>
              <a
                href={whatsappUrl}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '1rem 2.5rem', display: 'inline-flex' }}
              >
                Ücretsiz Başlayın
                <ArrowRight size={18} />
              </a>
            </div>
            <ul className="flex flex-col" style={{ gap: '1.25rem' }}>
              {[
                '14 gün ücretsiz, kredi kartı gerekmez',
                'Dakikalar içinde kurulum tamamlanır',
                'Sınırsız personel ekleme imkânı',
                'Türkçe 7/24 teknik destek',
                'Bulut tabanlı, veriler her zaman güvende'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span style={{ fontWeight: '600' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .connector-line { display: block !important; }
        }
      `}} />
    </motion.div>
  );
};

export default HowItWorks;
