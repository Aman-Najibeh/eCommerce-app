
import { createI18n } from 'vue-i18n'
import ar from './locales/ar.json'
import en from './locales/en.json'
const messages = {
    en,
    ar
  }
const i18n = createI18n({
  // something vue-i18n options here ...
  locale:'en',
  fallbackLocale:'en',
  messages
})

export default i18n
