import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEng from './locales/eng/translation.json';
import translationGr from './locales/gr/translation.json';
//the translations
const resources = {
  en: {
    translation: translationEng
  },
  gr: {
    translation: translationGr
  }
};
const language = localStorage.getItem('I18N_LANGUAGE');
if (!language) {
  localStorage.setItem('I18N_LANGUAGE', 'en');
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('I18N_LANGUAGE') || 'en',
    fallbackLng: 'en',

    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;