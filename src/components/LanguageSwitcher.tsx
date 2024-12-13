import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded-md ${
          i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-4 py-2 rounded-md ${
          i18n.language === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        Español
      </button>
    </div>
  );
}
