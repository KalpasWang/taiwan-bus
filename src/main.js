import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import 'leaflet/dist/leaflet.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
