import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, BookOpen, Search, X } from 'lucide-react';
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

  const allPosts = getAllPosts();
  const categories = getAllCategories();

  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    let result = allPosts;
    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }
    return result;
  }, [allPosts, activeCategory, searchQuery]);

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

          {/* Search Bar */}
          <motion.div {...fadeUp(0.2)} style={{ maxWidth: 480, margin: '2rem auto 0', position: 'relative' }}>
            <Search size={17} style={{
              position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
              color: 'var(--text-subtle)', pointerEvents: 'none',
            }} />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={lang === 'tr' ? 'Yazılarda ara...' : 'Search posts...'}
              style={{
                width: '100%',
                padding: '0.85rem 2.75rem 0.85rem 2.75rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-subtle)',
                  display: 'flex', alignItems: 'center',
                }}
              >
                <X size={16} />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Category pills */}
      <section style={{ paddingBottom: '2rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* All button */}
            <button
              onClick={() => setActiveCategory(null)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: 50,
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: `1px solid ${activeCategory === null ? 'var(--primary)' : 'var(--glass-border)'}`,
                background: activeCategory === null ? 'rgba(255,107,0,0.12)' : 'transparent',
                color: activeCategory === null ? 'var(--primary)' : 'var(--text-subtle)',
              }}
            >
              {lang === 'tr' ? 'Tümü' : 'All'} ({allPosts.length})
            </button>

            {categories.map(cat => {
              const isActive = activeCategory === cat;
              const color = categoryColors[cat] || '#888';
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(isActive ? null : cat)}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: 50,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    border: `1px solid ${isActive ? color : `${color}30`}`,
                    background: isActive ? `${color}20` : `${color}08`,
                    color: isActive ? color : `${color}cc`,
                  }}
                >
                  {cat} ({allPosts.filter(p => p.category === cat).length})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ padding: '2rem 0 8rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          {/* Results count */}
          {(activeCategory || searchQuery) && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', color: 'var(--text-subtle)', fontSize: '0.85rem', marginBottom: '1.5rem' }}
            >
              {filteredPosts.length} {lang === 'tr' ? 'yazı bulundu' : 'posts found'}
              {searchQuery && <> — "<strong style={{ color: 'var(--text-muted)' }}>{searchQuery}</strong>"</>}
            </motion.p>
          )}

          <AnimatePresence mode="popLayout">
            {filteredPosts.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '1.5rem',
              }}>
                {filteredPosts.map((post, i) => {
                  const catColor = categoryColors[post.category] || '#888';
                  return (
                    <motion.article
                      key={post.slug}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: i * 0.05, duration: 0.35 }}
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="glass"
                        style={{
                          display: 'flex', flexDirection: 'column', gap: '1rem',
                          padding: '1.75rem', textDecoration: 'none',
                          transition: 'border-color 0.2s, transform 0.2s',
                          height: '100%',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = `${catColor}40`;
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = 'var(--glass-border)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        {/* Top: category + readtime */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{
                            padding: '0.2rem 0.65rem', borderRadius: 50,
                            fontSize: '0.7rem', fontWeight: 700,
                            background: `${catColor}15`, color: catColor,
                            textTransform: 'uppercase', letterSpacing: '0.04em',
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
                          fontSize: '1.1rem', fontWeight: 700,
                          lineHeight: 1.45, color: 'var(--text-main)',
                          flex: 1,
                        }}>
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p style={{
                          color: 'var(--text-muted)', fontSize: '0.875rem',
                          lineHeight: 1.7,
                          display: '-webkit-box', WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical', overflow: 'hidden',
                        }}>
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                          {post.tags.slice(0, 3).map(tag => (
                            <span key={tag} style={{
                              display: 'inline-flex', alignItems: 'center', gap: 3,
                              padding: '0.15rem 0.55rem', borderRadius: 50,
                              fontSize: '0.7rem',
                              border: '1px solid var(--glass-border)',
                              color: 'var(--text-subtle)',
                            }}>
                              <Tag size={10} />
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Footer: date + cta */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid var(--glass-border)' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                            <Calendar size={12} />
                            {formatDate(post.publishDate)}
                          </span>
                          <span style={{
                            display: 'flex', alignItems: 'center', gap: 4,
                            fontSize: '0.8rem', fontWeight: 600, color: catColor,
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
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-subtle)' }}
              >
                <Search size={40} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                <p style={{ fontSize: '1.05rem' }}>
                  {lang === 'tr' ? 'Arama kriterlerine uygun yazı bulunamadı.' : 'No posts found matching your search.'}
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory(null); }}
                  style={{
                    marginTop: '1rem', background: 'none', border: 'none',
                    color: 'var(--primary)', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem',
                  }}
                >
                  {lang === 'tr' ? 'Filtreleri temizle' : 'Clear filters'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
}
