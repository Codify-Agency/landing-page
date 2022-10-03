import * as translations from './langs/translations.json'

export const loadLang = () => {
  const langStoraged = localStorage.getItem('lang');
  if ( !langStoraged ) localStorage.setItem('lang', 'es');
}

export const translate = ( key ) => {
  const lang = localStorage.getItem('lang');
  return translations[lang][key]
}

export const changeLang = ( lang ) => {
  localStorage.setItem('lang', lang);
}

export const getLang = () => {
  return localStorage.getItem('lang');
}