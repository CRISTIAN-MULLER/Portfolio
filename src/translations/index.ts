import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import PTBR from './locales/ptBR/pt-br.json';
import ENUS from './locales/enUS/en-us.json';

const languages = {
  'pt-BR': PTBR,
  'en-US': ENUS,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    //debug: true,
    fallbackLng: 'pt-br',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: languages,
  });

export default i18n;
