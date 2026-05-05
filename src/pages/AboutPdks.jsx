import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';

const AboutPdks = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '8rem', paddingBottom: '5rem' }}
    >
      <div className="container">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 5rem auto' }}>
          <h1 className="section-title">PDKS Nedir?</h1>
          <p className="section-subtitle">
            Personel Devam Kontrol Sistemi (PDKS), işletmelerin çalışanlarının çalışma saatlerini, devamsızlıklarını, 
            izinlerini ve mesailerini takip etmek için kullandığı dijital bir altyapıdır.
          </p>
        </div>

        <div className="grid md:grid-cols-2" style={{ alignItems: 'center', marginBottom: '8rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Neden Bir PDKS'ye İhtiyacınız Var?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Manuel takip yöntemleri (kağıt imza, Excel tabloları vb.) hatalara açıktır ve ciddi bir zaman kaybı yaratır. 
              PDKS kullanımı sadece zamanı ölçmekle kalmaz, aynı zamanda verimliliği artırır ve maliyetleri düşürür.
            </p>
            <ul className="flex flex-col" style={{ gap: '1rem' }}>
              {[
                'Hatalı Maaş Hesaplamalarının Önüne Geçer',
                'İş Gücü Verimliliğini Artırır',
                'Yasal Mevzuata Uygunluk Sağlar',
                'Personel Disiplinini Optimize Eder'
              ].map((item, i) => (
                <li key={i} className="flex items-center" style={{ gap: '0.75rem' }}>
                  <CheckCircle2 style={{ color: 'var(--primary)' }} size={20} />
                  <span style={{ fontWeight: '600' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass" style={{ padding: '3rem', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
             <TrendingUp size={200} style={{ position: 'absolute', bottom: '-20px', right: '-20px', color: 'var(--primary)', opacity: 0.05 }} />
             <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '1rem' }}>%40</div>
                <p style={{ fontSize: '1.5rem', fontWeight: '800' }}>Verimlilik Artışı</p>
                <p style={{ color: 'var(--text-muted)' }}>PDKS kullanan işletmelerde ortalama verimlilik artışı</p>
             </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--primary)', borderRadius: '32px', padding: '4rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <div className="grid md:grid-cols-2" style={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem' }}>Geleneksel PDKS vs. Shiftlap</h2>
              <p style={{ opacity: 0.9, marginBottom: '2rem' }}>
                Eski nesil sistemler pahalı kart okuyucular, biyometrik cihazlar ve yerel sunucular gerektirir. 
                Shiftlap ise tamamen bulut tabanlıdır ve donanım maliyetini sıfıra indirir.
              </p>
            </div>
            <div className="flex flex-col" style={{ gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertCircle size={18} /> Geleneksel Sistemler
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Yüksek bakım maliyeti, donanım arızaları, tek bir noktaya bağlılık.</p>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.3)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} /> Shiftlap Yaklaşımı
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Her yerden erişim, sıfır donanım kurulumu, anlık mobil bildirimler.</p>
              </div>
            </div>
          </div>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', blur: '100px', transform: 'translate(30%, -30%)' }}></div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPdks;
