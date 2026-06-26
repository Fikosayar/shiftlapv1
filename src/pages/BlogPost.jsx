import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, ArrowLeft, Tag, Share2,
  MessageCircle, Link2, Check, ChevronRight,
} from 'lucide-react';

/* Inline SVG icons for social platforms not in lucide-react */
const TwitterXIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import { getPostBySlug, getAllPosts } from '../data/blogPosts';
import { useSEO } from '../hooks/useSEO';
import { useLanguage } from '../i18n';

const categoryColors = {
  'Rehber': '#3b82f6',
  'Teknoloji': '#10b981',
  'İpuçları': '#f59e0b',
  'Haberler': '#8b5cf6',
};

/* ─── Reading progress hook ─── */
function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      if (scrollHeight > 0) setProgress((scrollTop / scrollHeight) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

/* ─── Extract TOC from markdown ─── */
function extractTOC(content) {
  const lines = content.split('\n');
  const toc = [];
  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('## ')) {
      const text = trimmed.slice(3);
      const id = text.toLowerCase().replace(/[^a-z0-9ğüşıöçğüşıöç\s]/g, '').replace(/\s+/g, '-');
      toc.push({ level: 2, text, id });
    } else if (trimmed.startsWith('### ')) {
      const text = trimmed.slice(4);
      const id = text.toLowerCase().replace(/[^a-z0-9ğüşıöçğüşıöç\s]/g, '').replace(/\s+/g, '-');
      toc.push({ level: 3, text, id });
    }
  });
  return toc;
}

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
      const text = trimmed.slice(4);
      const id = text.toLowerCase().replace(/[^a-z0-9ğüşıöçğüşıöç\s]/g, '').replace(/\s+/g, '-');
      elements.push(
        <h4 key={`h4-${i}`} id={id} style={{
          fontSize: '1.1rem', fontWeight: 700,
          marginTop: '2rem', marginBottom: '0.75rem',
          color: 'var(--text-main)',
        }}>
          {renderInline(text)}
        </h4>
      );
      continue;
    }
    if (trimmed.startsWith('## ')) {
      flushList();
      const text = trimmed.slice(3);
      const id = text.toLowerCase().replace(/[^a-z0-9ğüşıöçğüşıöç\s]/g, '').replace(/\s+/g, '-');
      elements.push(
        <h3 key={`h3-${i}`} id={id} style={{
          fontSize: '1.35rem', fontWeight: 800,
          marginTop: '2.5rem', marginBottom: '1rem',
          letterSpacing: '-0.02em',
          color: 'var(--text-main)',
        }}>
          {renderInline(text)}
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

    // Numbered list
    if (/^\d+\.\s/.test(trimmed)) {
      inList = true;
      listItems.push(trimmed.replace(/^\d+\.\s/, ''));
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
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: 'var(--text-main)', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

/* ─── Share Buttons ─── */
function ShareButtons({ title, url, lang }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-subtle)', marginRight: '0.25rem' }}>
        {lang === 'tr' ? 'Paylaş:' : 'Share:'}
      </span>

      {/* Twitter/X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        title="X'te Paylaş"
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 36, height: 36, borderRadius: 8,
          background: 'rgba(0,0,0,0.3)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#fff', transition: 'background 0.2s',
          textDecoration: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.3)'}
      >
        <TwitterXIcon size={15} />
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn'de Paylaş"
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 36, height: 36, borderRadius: 8,
          background: 'rgba(10,102,194,0.2)',
          border: '1px solid rgba(10,102,194,0.3)',
          color: '#0a66c2', transition: 'background 0.2s',
          textDecoration: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(10,102,194,0.35)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(10,102,194,0.2)'}
      >
        <LinkedinIcon size={15} />
      </a>

      {/* Copy Link */}
      <button
        onClick={copyLink}
        title={lang === 'tr' ? 'Bağlantıyı Kopyala' : 'Copy Link'}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 36, height: 36, borderRadius: 8,
          background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)',
          border: `1px solid ${copied ? 'rgba(16,185,129,0.4)' : 'var(--glass-border)'}`,
          color: copied ? '#10b981' : 'var(--text-subtle)',
          cursor: 'pointer', transition: 'all 0.2s',
        }}
      >
        {copied ? <Check size={15} /> : <Link2 size={15} />}
      </button>
    </div>
  );
}

/* ─── Author Box ─── */
function AuthorBox({ author, lang }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '1rem',
      padding: '1.5rem', borderRadius: 'var(--radius-lg)',
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      marginTop: '3rem',
    }}>
      {/* Avatar */}
      <div style={{
        width: 52, height: 52, borderRadius: '50%',
        background: 'linear-gradient(135deg, #ff6b00, #f97316)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, fontSize: '1.3rem', fontWeight: 800, color: '#fff',
      }}>
        S
      </div>
      <div>
        <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{author}</p>
        <p style={{ color: 'var(--text-subtle)', fontSize: '0.82rem', lineHeight: 1.5 }}>
          {lang === 'tr'
            ? 'Shiftlap, Türkiye\'nin önde gelen bulut tabanlı PDKS çözümüdür. Ekibimiz, işletmelerin personel yönetimini kolaylaştırmak için içerikler üretmektedir.'
            : 'Shiftlap is Turkey\'s leading cloud-based attendance management solution. Our team produces content to help businesses streamline workforce management.'}
        </p>
      </div>
    </div>
  );
}

/* ─── Table of Contents ─── */
function TableOfContents({ toc, lang }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0% -60% 0%' }
    );
    toc.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  if (toc.length < 3) return null;

  return (
    <div style={{
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.25rem 1.5rem',
      marginBottom: '3rem',
    }}>
      <p style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {lang === 'tr' ? 'İçindekiler' : 'Table of Contents'}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        {toc.map(item => (
          <li key={item.id} style={{ paddingLeft: item.level === 3 ? '1rem' : 0 }}>
            <a
              href={`#${item.id}`}
              onClick={e => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.35rem',
                fontSize: item.level === 3 ? '0.8rem' : '0.87rem',
                color: activeId === item.id ? 'var(--primary)' : 'var(--text-muted)',
                fontWeight: activeId === item.id ? 700 : 400,
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '0.1rem 0',
              }}
            >
              <ChevronRight size={12} style={{ flexShrink: 0, opacity: activeId === item.id ? 1 : 0.4 }} />
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);
  const progress = useReadingProgress();

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
  const postUrl = `https://shiftlap.com/blog/${post.slug}`;
  const toc = extractTOC(post.content);

  // Related posts (same category, excluding current)
  const related = getAllPosts()
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ─── Reading Progress Bar ─── */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 3,
        zIndex: 9999, background: 'rgba(255,255,255,0.05)',
      }}>
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--primary), #f97316)',
            width: `${progress}%`,
            transition: 'width 0.1s linear',
            boxShadow: '0 0 8px rgba(255,107,0,0.6)',
          }}
        />
      </div>

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
            "keywords": post.tags.join(', '),
            "author": {
              "@type": "Organization",
              "name": post.author,
              "url": "https://shiftlap.com",
            },
            "publisher": {
              "@type": "Organization",
              "name": "Shiftlap",
              "url": "https://shiftlap.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://shiftlap.com/favicon.svg",
              },
            },
            "datePublished": post.publishDate,
            "dateModified": post.publishDate,
            "url": postUrl,
            "mainEntityOfPage": postUrl,
            "inLanguage": "tr-TR",
            "timeRequired": `PT${post.readTime}M`,
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
            marginBottom: '1.25rem',
          }}>
            {post.title}
          </h1>

          {/* Excerpt lead */}
          <p style={{
            fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7,
            marginBottom: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--glass-border)',
          }}>
            {post.excerpt}
          </p>

          {/* Tags + Share row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
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
            <ShareButtons title={post.title} url={postUrl} lang={lang} />
          </div>

          {/* Table of Contents */}
          <TableOfContents toc={toc} lang={lang} />

          {/* Content */}
          <div className="blog-content">
            {renderMarkdown(post.content)}
          </div>

          {/* Author Box */}
          <AuthorBox author={post.author} lang={lang} />

          {/* Share again (bottom) */}
          <div style={{
            marginTop: '2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--glass-border)',
          }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
              {lang === 'tr' ? 'Bu yazı yardımcı olduysa paylaşın 👇' : 'Found this helpful? Share it 👇'}
            </p>
            <ShareButtons title={post.title} url={postUrl} lang={lang} />
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
              {related.map(p => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="glass"
                  style={{
                    padding: '1.25rem', transition: 'border-color 0.2s, transform 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{
                    fontSize: '0.7rem', fontWeight: 700,
                    color: categoryColors[p.category] || '#888',
                    textTransform: 'uppercase',
                  }}>
                    {p.category}
                  </span>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, marginTop: '0.4rem', lineHeight: 1.4 }}>
                    {p.title}
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={11} />
                    {p.readTime} {t.blog.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
}
