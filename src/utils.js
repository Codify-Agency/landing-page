import { useSelector } from "react-redux"

import * as translations from './langs/translations.json'

export const translate = ( key ) => {
  const lang = useSelector((state) => state.lang.lang)
  return translations[lang][key]
}
