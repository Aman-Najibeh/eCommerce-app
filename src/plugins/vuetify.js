/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import  {VDataTable} from 'vuetify/labs/VDataTable'

export default createVuetify({
   components: {VDataTable},
  theme: {
    // defaultTheme:'dark', 
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#F1F6F5',
          background: '#f1f6f5',
          info: '#ECECEC',
          success: '#798a9c',
        },
      },
      dark:{
        colors: {
          background: '#0A2647',
          surface: '#FFFFFF',
          primary: '#144272',
          'primary-darken-1': '#3700B3',
          secondary: '#03DAC6',
          'secondary-darken-1': '#018786',
          error: '#B00020',
          info: '#205295',
          success: '#205295',
          warning: '#FB8C00',
        }
      }
    },
    
  },
})
