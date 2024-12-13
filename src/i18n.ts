import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation resources
import enTranslations from './locales/en/translation.json';
import esTranslations from './locales/es/translation.json';

// Initialize i18next
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if the current language is not available
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;
