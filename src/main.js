import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'leaflet/dist/leaflet.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
