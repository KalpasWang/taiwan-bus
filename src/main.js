import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import { vfmPlugin } from 'vue-final-modal'

import 'leaflet/dist/leaflet.css'

const app = createApp(App)
app.use(router)
app.use(vfmPlugin)
app.mount('#app')
