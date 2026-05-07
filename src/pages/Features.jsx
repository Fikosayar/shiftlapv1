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
  Layers,
  ArrowRight
} from 'lucide-react';

const featuresList = [
  {
    icon: QrCode,
    title: 'Dinamik QR Kod',
    desc: 'Her giriş-çıkış için benzersiz, kopyalanamaz ve süreli QR kodlar oluşturun.',
    color: '#ff6b00'
  },
  {
    icon: MapPin,
    title: 'GPS Doğrulama',
    desc: 'Personelinizin belirlenen koordinatlar içerisinde olup olmadığını kontrol edin.',
    color: '#10b981'
  },
  {
    icon: Calendar,
    title: 'Vardiya Yönetimi',
    desc: 'Haftalık veya aylık vardiya planlarını kolayca oluşturun ve atayın.',
    color: '#3b82f6'
  },
  {
    icon: FileText,
    title: 'Gelişmiş Raporlama',
    desc: 'Excel, PDF formatlarında veya anlık dashboard üzerinden raporlar alın.',
    color: '#8b5cf6'
  },
  {
    icon: Bell,
    title: 'Mobil Bildirimler',
    desc: 'Geç kalma, devamsızlık veya izin taleplerinde anlık bildirimler alın.',
    color: '#f59e0b'
  },
  {
    icon: Users,
    title: 'Personel Profili',
    desc: 'Personellerin özlük dosyalarını ve performans verilerini tek bir yerden yönetin.',
    color: '#ec4899'
  },
  {
    icon: Lock,
    title: 'IP Kısıtlaması',
    desc: 'Sisteme erişimi sadece şirket Wi-Fi ağı veya belirli IP adresleri ile sınırlayın.',
    color: '#ef4444'
  },
  {
    icon: Cloud,
    title: 'Bulut Yedekleme',
    desc: 'Verileriniz her zaman güvende ve dünyanın her yerinden erişilebilir.',
    color: '#06b6d4'
  },
  {
    icon: Layers,
    title: 'Kolay Entegrasyon',
    desc: 'Mevcut ERP veya muhasebe yazılımlarınızla API üzerinden kolayca entegre edin.',
    color: '#ff6b00'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Features = () => {
  const whatsappUrl = "https://wa.me/905364753784?text=Merhabalar,%20size%20web%20sitenizden%20ula%C5%9F%C4%B1yorum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20i%C3%A7in%20rahats%C4%B1z%20ettim";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '8rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background Blob */}
      <div className="blob" style={{ top: '-10%', right: '-10%', background: 'var(--primary)', opacity: 0.08 }}></div>

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
            ⚡ Tüm Özellikler
          </motion.div>
          <h1 className="section-title">Tek Platformda Her Şey</h1>
          <p className="section-subtitle">
            Shiftlap, bir PDKS sisteminden beklediğinizden çok daha fazlasını sunar. 
            İhtiyacınız olan her araç, tek bir çatı altında.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuresList.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="glass"
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle corner glow */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '80px',
                  height: '80px',
                  background: `radial-gradient(circle at top right, ${f.color}20, transparent 70%)`,
                  pointerEvents: 'none'
                }} />

                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: `${f.color}15`,
                  border: `1px solid ${f.color}30`,
                  color: f.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={24} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>
                    {f.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.7' }}>
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: '8rem',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            borderRadius: '32px',
            padding: '4rem 3rem',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 30px 60px -12px var(--primary-glow)'
          }}
        >
          <h2 style={{ fontSize: '2.25rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            Tüm Özellikleri Ücretsiz Deneyin
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, marginBottom: '2.5rem', maxWidth: '550px', margin: '0 auto 2.5rem auto' }}>
            Kredi kartı gerekmez. Hemen başlayın, farkı kendiniz görün.
          </p>
          <a
            href={whatsappUrl}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', fontSize: '1rem' }}
          >
            WhatsApp ile Başla
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;
