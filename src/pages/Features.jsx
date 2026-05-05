import React from 'react';
import { motion } from 'framer-motion';
import { 
  QrCode, 
  MapPin, 
  Calendar, 
  FileText, 
  Bell, 
  Users, 
  Lock, 
  Cloud,
  Layers
} from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      icon: <QrCode />,
      title: 'Dinamik QR Kod',
      desc: 'Her giriş-çıkış için benzersiz, kopyalanamaz ve süreli QR kodlar oluşturun.'
    },
    {
      icon: <MapPin />,
      title: 'GPS Doğrulama',
      desc: 'Personelinizin belirlenen koordinatlar içerisinde olup olmadığını kontrol edin.'
    },
    {
      icon: <Calendar />,
      title: 'Vardiya Yönetimi',
      desc: 'Haftalık veya aylık vardiya planlarını kolayca oluşturun ve atayın.'
    },
    {
      icon: <FileText />,
      title: 'Gelişmiş Raporlama',
      desc: 'Excel, PDF formatlarında veya anlık dashboard üzerinden raporlar alın.'
    },
    {
      icon: <Bell />,
      title: 'Mobil Bildirimler',
      desc: 'Geç kalma, devamsızlık veya izin taleplerinde anlık bildirimler alın.'
    },
    {
      icon: <Users />,
      title: 'Personel Profili',
      desc: 'Personellerin özlük dosyalarını ve performans verilerini tek bir yerden yönetin.'
    },
    {
      icon: <Lock />,
      title: 'IP Kısıtlaması',
      desc: 'Sisteme erişimi sadece şirket Wi-Fi ağı veya belirli IP adresleri ile sınırlayın.'
    },
    {
      icon: <Cloud />,
      title: 'Bulut Yedekleme',
      desc: 'Verileriniz her zaman güvende ve dünyanın her yerinden erişilebilir.'
    },
    {
      icon: <Layers />,
      title: 'Kolay Entegrasyon',
      desc: 'Mevcut ERP veya muhasebe yazılımlarınızla API üzerinden konuşun.'
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
          <h1 className="section-title">Güçlü Özellikler</h1>
          <p className="section-subtitle">
            Shiftlap, bir PDKS sisteminden beklediğinizden çok daha fazlasını sunar.
          </p>
        </div>

        <div className="grid md:grid-cols-3">
          {featuresList.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                backgroundColor: 'rgba(99, 102, 241, 0.1)', 
                color: 'var(--primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '1.5rem' 
              }}>
                {React.cloneElement(f.icon, { size: 24 })}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
