import NextI18Next from 'next-i18next';
import path from 'path';

import config from './config';

const {
  i18n: { languages, defaultLanguage },
} = config;

const fallbackLanguage = defaultLanguage;

const detectorOptions = {
  order: ['navigator'],
  caches: []
};

export default new NextI18Next({
  otherLanguages: languages,
  fallbackLng: fallbackLanguage,
  defaultNS: 'home',
  detection: detectorOptions,
  debug: false,
  useSuspense: false,
  preload: ['en', 'fr'],
  serverLanguageDetection: false,
  localePath: path.resolve('./static/locales')
});
