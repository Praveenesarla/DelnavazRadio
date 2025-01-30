import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en';
import fa from './locales/fa';

const resources = {
  en: {translation: en.translation},
  fa: {translation: fa.translation},
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
