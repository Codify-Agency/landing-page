import * as translations from './langs/translations.json'

export const getLang = () => {
  const langComplete = navigator.language
  const lang = langComplete.substring(0, langComplete.indexOf('-'))
  return lang
}

export const translate = ( key ) => {
  const lang = getLang();
  return translations[lang][key]
}