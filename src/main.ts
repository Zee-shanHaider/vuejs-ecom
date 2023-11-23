import './assets/main.css'
import './assets/css/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components' // Import components as named exports
import * as directives from 'vuetify/directives' // Import directives as named exports
import { createPinia } from 'pinia'
import router from './router'

const vuetify = createVuetify({
defaultTheme: 'dark',
  components,
  directives,
})

const app = createApp(App)

// app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
