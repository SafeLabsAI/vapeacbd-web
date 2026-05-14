import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import es from './es.js'
import fr from './fr.js'
import en from './en.js'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { es: { translation: es }, fr: { translation: fr }, en: { translation: en } },
    fallbackLng: 'es',
    supportedLngs: ['es', 'fr', 'en'],
    detection: { order: ['path', 'navigator', 'htmlTag'], lookupFromPathIndex: 0 },
    interpolation: { escapeValue: false },
  })

export default i18n
