import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag, Share2, MessageCircle } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '../data/blogPosts';
import { useSEO } from '../hooks/useSEO';
import { useLanguage } from '../i18n';

const categoryColors = {
  'Rehber': '#3b82f6',
  'Teknoloji': '#10b981',
  'İpuçları': '#f59e0b',
  'Haberler': '#8b5cf6',
};

/* ─── Simple markdown-to-JSX renderer ─── */
function renderMarkdown(content) {
  const lines = content.split('\n');
  const elements = [];
  let inTable = false;
  let tableRows = [];
  let inList = false;
  let listItems = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} style={{
          paddingLeft: '1.5rem', marginBottom: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '0.5rem',
        }}>
          {listItems.map((item, i) => (
            <li key={i} style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushTable = () => {
    if (tableRows.length >= 2) {
      const headers = tableRows[0].split('|').filter(c => c.trim());
      const dataRows = tableRows.slice(2); // skip header + separator
      elements.push(
        <div key={`table-${elements.length}`} style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table style={{
            width: '100%', borderCollapse: 'collapse',
            fontSize: '0.9rem',
          }}>
            <thead>
              <tr>
                {headers.map((h, i) => (
                  <th key={i} style={{
                    padding: '0.75rem 1rem', textAlign: 'left',
                    borderBottom: '2px solid var(--glass-border)',
                    fontWeight: 700, fontSize: '0.82rem',
                    textTransform: 'uppercase', letterSpacing: '0.04em',
                    color: 'var(--text-subtle)',
                  }}>
                    {h.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, ri) => {
                const cells = row.split('|').filter(c => c.trim());
                return (
                  <tr key={ri}>
                    {cells.map((c, ci) => (
                      <td key={ci} style={{
                        padding: '0.65rem 1rem',
                        borderBottom: '1px solid var(--glass-border)',
                        color: 'var(--text-muted)',
                      }}>
                        {renderInline(c.trim())}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    tableRows = [];
    inTable = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Table detection
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (!inTable) { flushList(); inTable = true; }
      tableRows.push(trimmed);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Empty line
    if (!trimmed) {
      flushList();
      continue;
    }

    // Headers
    if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h4 key={`h4-${i}`} style={{
          fontSize: '1.1rem', fontWeight: 700,
          marginTop: '2rem', marginBottom: '0.75rem',
          color: 'var(--text-main)',
        }}>
          {renderInline(trimmed.slice(4))}
        </h4>
      );
      continue;
    }
    if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h3 key={`h3-${i}`} style={{
          fontSize: '1.35rem', fontWeight: 800,
          marginTop: '2.5rem', marginBottom: '1rem',
          letterSpacing: '-0.02em',
          color: 'var(--text-main)',
        }}>
          {renderInline(trimmed.slice(3))}
        </h3>
      );
      continue;
    }

    // List items
    if (trimmed.startsWith('- ')) {
      inList = true;
      listItems.push(trimmed.slice(2));
      continue;
    }

    // Regular paragraph
    flushList();
    elements.push(
      <p key={`p-${i}`} style={{
        color: 'var(--text-muted)',
        fontSize: '1rem',
        lineHeight: 1.85,
        marginBottom: '1.25rem',
      }}>
        {renderInline(trimmed)}
      </p>
    );
  }

  flushList();
  if (inTable) flushTable();
  return elements;
}

function renderInline(text) {
  // Bold
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: 'var(--text-main)', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  useSEO(post ? {
    title: `${post.title} | Shiftlap Blog`,
    description: post.excerpt,
    canonical: `https://shiftlap.com/blog/${post.slug}`,
  } : {
    title: 'Yazı Bulunamadı | Shiftlap Blog',
    description: 'Aradığınız blog yazısı bulunamadı.',
  });

  const { t, lang } = useLanguage();

  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) {
    return (
      <div style={{ paddingTop: '12rem', paddingBottom: '8rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>{t.blog.notFound}</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            {t.blog.notFoundDesc}
          </p>
          <Link to="/blog" className="btn-primary" style={{ display: 'inline-flex' }}>
            <ArrowLeft size={16} />
            {t.blog.backToBlog}
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  const catColor = categoryColors[post.category] || '#888';

  // Related posts (same category, excluding current)
  const related = getAllPosts()
    .filter(p => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Blobs */}
      <div className="blob" style={{ width: 500, height: 500, top: '-5%', right: '-15%', background: catColor, opacity: 0.07 }} />

      {/* JSON-LD Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": { "@type": "Organization", "name": post.author },
            "publisher": {
              "@type": "Organization",
              "name": "Shiftlap",
              "url": "https://shiftlap.com",
            },
            "datePublished": post.publishDate,
            "url": `https://shiftlap.com/blog/${post.slug}`,
            "mainEntityOfPage": `https://shiftlap.com/blog/${post.slug}`,
          }),
        }}
      />

      {/* Article */}
      <article style={{ paddingTop: '9rem', paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ maxWidth: 780, margin: '0 auto' }}>

          {/* Back link */}
          <Link
            to="/blog"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)',
              marginBottom: '2.5rem', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <ArrowLeft size={15} />
            {t.blog.allPosts}
          </Link>

          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{
              padding: '0.25rem 0.75rem', borderRadius: 50,
              fontSize: '0.72rem', fontWeight: 700,
              background: `${catColor}18`, color: catColor,
              textTransform: 'uppercase', letterSpacing: '0.04em',
            }}>
              {post.category}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
              <Calendar size={13} />
              {formatDate(post.publishDate)}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
              <Clock size={13} />
              {post.readTime} {t.blog.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.25,
            marginBottom: '2rem',
          }}>
            {post.title}
          </h1>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {post.tags.map(tag => (
              <span key={tag} style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                padding: '0.2rem 0.7rem', borderRadius: 50,
                fontSize: '0.75rem', fontWeight: 500,
                border: '1px solid var(--glass-border)',
                color: 'var(--text-subtle)',
              }}>
                <Tag size={11} />
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="blog-content">
            {renderMarkdown(post.content)}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: '4rem',
            background: 'linear-gradient(135deg, rgba(255,107,0,0.08), rgba(249,115,22,0.04))',
            border: '1px solid rgba(255,107,0,0.2)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            textAlign: 'center',
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
              {t.blog.tryFree}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {t.blog.tryFreeDesc}
            </p>
            <a
              href={t.site.whatsapp}
              className="btn-primary"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex' }}
            >
              <MessageCircle size={16} />
              {t.blog.startNow}
            </a>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section style={{ padding: '0 0 8rem', position: 'relative', zIndex: 1 }}>
          <div className="container" style={{ maxWidth: 780, margin: '0 auto' }}>
            <h3 style={{
              fontSize: '1.15rem', fontWeight: 700,
              marginBottom: '1.5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid var(--glass-border)',
            }}>
              {t.blog.relatedPosts}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {related.map(p => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="glass"
                  style={{
                    padding: '1.5rem', transition: 'border-color 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
                >
                  <span style={{
                    fontSize: '0.7rem', fontWeight: 700,
                    color: categoryColors[p.category] || '#888',
                    textTransform: 'uppercase',
                  }}>
                    {p.category}
                  </span>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '0.4rem', lineHeight: 1.4 }}>
                    {p.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
}
