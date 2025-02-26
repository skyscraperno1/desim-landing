import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationJP from './jp.json';
import translationEN from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      jp: { translation: translationJP },
      en: { translation: translationEN },
    },
    lng: 'jp', 
    fallbackLng: 'jp', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
