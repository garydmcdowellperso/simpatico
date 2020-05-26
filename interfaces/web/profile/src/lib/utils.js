import nextI18NextInstance from '../../i18n';

export const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';
