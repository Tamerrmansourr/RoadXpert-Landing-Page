import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../config/siteConfig';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  isRTL: false,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      if (langParam === 'ar' || langParam === 'en') {
        return langParam;
      }
    }
    return 'en'; // Default is English as requested
  });

  const setLang = (next: Language) => {
    setLangState(next);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (next === 'en') {
        url.searchParams.delete('lang');
      } else {
        url.searchParams.set('lang', next);
      }
      window.history.pushState({}, '', url.toString());
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        isRTL: lang === 'ar',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
