import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { getAllPosts, getAllCategories } from '../data/blogPosts';
import { useSEO } from '../hooks/useSEO';
import { useLanguage } from '../i18n';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
});

const categoryColors = {
  'Rehber': '#3b82f6',
  'Teknoloji': '#10b981',
  'İpuçları': '#f59e0b',
  'Haberler': '#8b5cf6',
};

export default function Blog() {
  const { t, lang } = useLanguage();
  useSEO({
    title: t.blog.seoTitle,
    description: t.blog.seoDesc,
    canonical: 'https://shiftlap.com/blog',
  });

  const posts = getAllPosts();
  const categories = getAllCategories();

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Blobs */}
      <div className="blob" style={{ width: 500, height: 500, top: '-10%', right: '-15%', background: '#ff6b00' }} />
      <div className="blob" style={{ width: 400, height: 400, bottom: '20%', left: '-12%', background: '#3b82f6', opacity: 0.06 }} />

      {/* Hero */}
      <section style={{ paddingTop: '10rem', paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>
        <div className="container text-center">
          <motion.div {...fadeUp(0)}>
            <div className="badge" style={{ display: 'inline-flex' }}>
              <BookOpen size={14} />
              {t.blog.badge}
            </div>
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} className="section-title">
            {t.blog.title}
          </motion.h1>
          <motion.p {...fadeUp(0.15)} className="section-subtitle">
            {t.blog.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Category pills */}
      <section style={{ paddingBottom: '2rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <span key={cat} style={{
                padding: '0.4rem 1rem',
                borderRadius: 50,
                fontSize: '0.8rem',
                fontWeight: 600,
                background: `${categoryColors[cat] || '#888'}15`,
                color: categoryColors[cat] || '#888',
                border: `1px solid ${categoryColors[cat] || '#888'}30`,
              }}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ padding: '2rem 0 8rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.5rem',
          }}>
            {posts.map((post, i) => {
              const catColor = categoryColors[post.category] || '#888';
              return (
                <motion.article key={post.slug} {...fadeUp(i * 0.08)}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="glass"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      padding: '2rem 1.75rem',
                      transition: 'border-color 0.25s, transform 0.25s',
                      textDecoration: 'none',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${catColor}60`;
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--glass-border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Corner glow */}
                    <div style={{
                      position: 'absolute', top: 0, right: 0,
                      width: 150, height: 150,
                      background: `radial-gradient(circle at top right, ${catColor}12, transparent 70%)`,
                      pointerEvents: 'none',
                    }} />

                    {/* Category + read time */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: 50,
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        background: `${catColor}18`,
                        color: catColor,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}>
                        {post.category}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                        <Clock size={12} />
                        {post.readTime} {t.blog.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.4,
                      marginBottom: '0.75rem',
                      color: 'var(--text-main)',
                    }}>
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.88rem',
                      lineHeight: 1.75,
                      flex: 1,
                      marginBottom: '1.25rem',
                    }}>
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--glass-border)',
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
                        <Calendar size={13} />
                        {formatDate(post.publishDate)}
                      </span>
                      <span style={{
                        display: 'flex', alignItems: 'center', gap: 4,
                        fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)',
                      }}>
                        {t.blog.readMore}
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>

          {/* Empty state */}
          {posts.length === 0 && (
            <div className="text-center" style={{ padding: '4rem 0' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                {t.blog.emptyState}
              </p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
