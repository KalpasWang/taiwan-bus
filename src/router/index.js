import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CitySearch from '@/views/CitySearch.vue'
import InterCitySearch from '@/views/InterCitySearch.vue'
import InterCitySearch2 from '@/views/InterCitySearch2.vue'
import NearByStations from '@/views/NearByStations.vue'
import RoutePage from '@/views/RoutePage.vue'
import InterCityRoutePage from '@/views/InterCityRoutePage.vue'
import StationPage from '@/views/StationPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

export const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/city', component: CitySearch, name: 'CitySearch' },
  { path: '/nearby', component: NearByStations, name: 'NearBy' },
  {
    path: '/intercity',
    component: InterCitySearch,
    name: 'InterCitySearch'
  },
  {
    path: '/intercity/from-to',
    component: InterCitySearch2,
    name: 'InterCitySearch2'
  },
  {
    path: '/routes/intercity/:routeName/:subRouteName?',
    component: InterCityRoutePage,
    name: 'InterCityRoutePage',
    props: true
  },
  {
    path: '/routes/:city/:routeName/:subRouteName?',
    component: RoutePage,
    name: 'RoutePage',
    props: true
  },
  {
    path: '/stations/:city/:stationId',
    component: StationPage,
    name: 'StationPage',
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    name: '404Page'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
