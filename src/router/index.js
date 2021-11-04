import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import RouteSearch from '@/views/RouteSearch.vue'
import NearByStations from '@/views/NearByStations.vue'
import RoutePage from '@/views/RoutePage.vue'
import StationPage from '@/views/StationPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/search', component: RouteSearch, name: 'BusSearch' },
    { path: '/nearby', component: NearByStations, name: 'NearBy' },
    {
      path: '/routes/:city/:routeName',
      component: RoutePage,
      name: 'RoutePage',
      props: true
    },
    {
      path: '/stops/:city/:stationName',
      component: StationPage,
      name: 'StationPage',
      props: true
    }
  ]
})
