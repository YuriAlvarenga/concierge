import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from '../translations/english-language.json'
import esTranslation from '../translations/spanish-language.json'
import ptTranslation from '../translations/portuguese-language.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
      'pt-BR': { translation: ptTranslation }
    },
    lng: 'pt-BR', // Idioma padrão
    interpolation: {
      escapeValue: false // Evita a necessidade de escapar strings
    }
  })

export default i18n
