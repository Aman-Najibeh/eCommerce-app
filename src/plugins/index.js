/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import {axios,VueAxios} from './axios.js'
import i18n from '../i18n/i18n'
import VueApexCharts from "vue3-apexcharts";
// import VuePwaInstallPlugin from "vue-pwa-install";
// import VueGoogleMaps from '@fawmi/vue-google-maps'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueAxios, axios) 
    .use(i18n)
    .use(VueApexCharts)
    .use(AOS.init())
}

