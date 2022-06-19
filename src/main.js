import { createApp } from 'vue'
import BMcode from './BMcode.vue'
import $ from 'jquery'
import './index.css'

import en from './src/locales/en.json'
import sk from './src/locales/sk.json'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'sk',
    messages: {
        en,
        sk
    }
})

createApp(BMcode).use(i18n).mount('#BMcode')

