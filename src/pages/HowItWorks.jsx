import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Smartphone, QrCode, LineChart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus />,
      title: 'Hızlı Kurulum',
      desc: 'Şirket profilinizi oluşturun ve personellerinizi saniyeler içinde sisteme ekleyin.'
    },
    {
      icon: <Smartphone />,
      title: 'Uygulama İndirme',
      desc: 'Personelleriniz Shiftlap mobil uygulamasını App Store veya Play Store\'dan indirir.'
    },
    {
      icon: <QrCode />,
      title: 'Okut ve Başla',
      desc: 'İş yerindeki QR kodu telefonla okutarak mesaiyi başlatın. Konum doğrulaması otomatik yapılır.'
    },
    {
      icon: <LineChart />,
      title: 'Takip ve Rapor',
      desc: 'Yönetim panelinden tüm giriş-çıkışları anlık takip edin, ay sonunda tek tıkla puantaj hazırlayın.'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '8rem', paddingBottom: '5rem' }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <h1 className="section-title">Nasıl Çalışır?</h1>
          <p className="section-subtitle">
            Shiftlap'ı kullanmaya başlamak sandığınızdan çok daha kolay. 
            Sadece 4 adımda işletmenizi dijitalleştirin.
          </p>
        </div>

        <div className="grid md:grid-cols-4" style={{ gap: '3rem' }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--background)', 
                border: '4px solid var(--primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--primary)', 
                marginBottom: '1.5rem',
                position: 'relative',
                boxShadow: 'var(--shadow)'
              }}>
                 <div style={{ 
                   position: 'absolute', 
                   top: '-10px', 
                   right: '-10px', 
                   width: '32px', 
                   height: '32px', 
                   borderRadius: '50%', 
                   backgroundColor: 'var(--primary)', 
                   color: 'white', 
                   fontSize: '0.85rem', 
                   fontWeight: '800', 
                   display: 'flex', 
                   alignItems: 'center', 
                   justifyContent: 'center',
                   border: '3px solid var(--background)'
                 }}>
                   {i + 1}
                 </div>
                 {React.cloneElement(step.icon, { size: 32 })}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="glass" style={{ marginTop: '8rem', padding: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), transparent)' }}>
           <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1rem' }}>Denemeye Hazır mısınız?</h2>
           <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
             Hiçbir kredi kartı bilgisi gerekmeden 14 gün boyunca tüm özellikleri test edin.
           </p>
           <a 
            href="https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim" 
            className="btn-primary" 
            style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
            target="_blank"
            rel="noopener noreferrer"
          >
             Ücretsiz Hesabınızı Oluşturun
           </a>
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
