import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CitySearch from '@/views/CitySearch.vue'
import InterCitySearch from '@/views/InterCitySearch.vue'
// import InterCitySearch2 from '@/views/InterCitySearch2.vue'
import NearByStations from '@/views/NearByStations.vue'
import RoutePage from '@/views/RoutePage.vue'
import InterCityRoutePage from '@/views/InterCityRoutePage.vue'
import StationPage from '@/views/StationPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/city', component: CitySearch, name: 'CitySearch' },
    { path: '/nearby', component: NearByStations, name: 'NearBy' },
    {
      path: '/intercity',
      component: InterCitySearch,
      name: 'InterCitySearch'
    },
    // {
    //   path: '/intercity-from-back',
    //   component: InterCitySearch2,
    //   name: 'InterCitySearch2'
    // },
    {
      path: '/routes/intercity/:routeName',
      component: InterCityRoutePage,
      name: 'InterCityRoutePage',
      props: true
    },
    {
      path: '/routes/:city/:routeName',
      component: RoutePage,
      name: 'RoutePage',
      props: true
    },
    {
      path: '/stations/:city/:stationId',
      component: StationPage,
      name: 'StationPage',
      props: true
    }
  ]
})
