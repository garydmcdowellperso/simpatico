import nextI18NextInstance from '../../i18n';

export const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

export function isSubdomain(url) {
    var regex = new RegExp(/^([a-z]+\:\/{2})?([\w-]+\.[\w-]+\.\w+)$/);
  
    return !!url.match(regex); // make sure it returns boolean
  }