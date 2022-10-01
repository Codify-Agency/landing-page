import * as translations from './langs/translations.json'

export const translate = ( key ) => {
  const lang = 'en' // get from state or localStorage
  return translations[lang][key]
}
