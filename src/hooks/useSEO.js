import { useEffect } from 'react';

/**
 * Per-page SEO hook using vanilla DOM manipulation.
 * When react-helmet-async is available this can be swapped in.
 * 
 * @param {Object} opts
 * @param {string} opts.title       - Page title
 * @param {string} opts.description - Meta description
 * @param {string} [opts.canonical] - Canonical URL
 */
export function useSEO({ title, description, canonical }) {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', description);

    // OG title / description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Twitter
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (link) link.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);
}
