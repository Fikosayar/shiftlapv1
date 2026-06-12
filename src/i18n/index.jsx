import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { t as tr } from './tr';
import { t as en } from './en';

const languages = { tr, en };
const STORAGE_KEY = 'shiftlap-lang';

const LanguageContext = createContext(null);

/**
 * LanguageProvider — wraps the app and provides language state.
 * 
 * Persists language choice in localStorage.
 * Defaults to 'tr' (Turkish).
 * Updates <html lang=""> attribute on change.
 */
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) || 'tr';
    }
    return 'tr';
  });

  const t = languages[lang] || languages.tr;

  const setLang = useCallback((newLang) => {
    if (languages[newLang]) {
      setLangState(newLang);
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'tr' ? 'en' : 'tr');
  }, [lang, setLang]);

  // Set html lang attribute on mount/change
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * useLanguage — hook to access current language and translations.
 * 
 * Returns: { lang, setLang, toggleLang, t }
 *   - lang: current language code ('tr' | 'en')
 *   - setLang(code): set language explicitly
 *   - toggleLang(): toggle between tr/en
 *   - t: translation object for current language
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback for components outside provider (shouldn't happen)
    return { lang: 'tr', setLang: () => {}, toggleLang: () => {}, t: tr };
  }
  return ctx;
}
