import NextI18Next from 'next-i18next';

import config from './config';

const {
  i18n: { languages, defaultLanguage },
} = config;

const fallbackLanguage = defaultLanguage;

// Options list: https://github.com/i18next/i18next-browser-languageDetector#detector-options
const detectorOptions = {
  order: ['navigator'],
  caches: []
};

export default new NextI18Next({
  otherLanguages: languages,
  fallbackLng: fallbackLanguage,
  defaultNS: 'home',
  detection: detectorOptions
});

// known bug showing 'react-i18next:: i18n.languages were undefined or empty undefined'
// https://github.com/isaachinman/next-i18next/issues/374
