import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import 'leaflet/dist/leaflet.css'

const app = createApp(App)
app.use(router)
app.use(PerfectScrollbar)
app.mount('#app')
