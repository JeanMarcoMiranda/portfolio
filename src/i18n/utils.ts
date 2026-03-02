/**
 * @file utils.ts
 * @description Utility functions for internationalization.
 * Handles language detection and translation retrieval.
 */

import { translations, type Language } from './translations';

/**
 * Get current language from document or default to 'en'
 */
export function getCurrentLanguage(): Language {
  if (typeof document !== 'undefined') {
    const lang = document.documentElement.getAttribute('lang');
    return (lang === 'es' ? 'es' : 'en') as Language;
  }
  return 'en';
}

/**
 * Get translations for current language
 */
export function t(lang: Language = 'en') {
  return translations[lang] || translations.en;
}

/**
 * Get a specific translation path
 */
export function getTranslation(path: string, lang: Language = 'en'): string {
  const keys = path.split('.');
  let value: any = translations[lang];
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value || path;
}
