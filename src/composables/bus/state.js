import { reactive } from 'vue'

export const state = reactive({
  routeName: '',
  routeID: '',
  city: null,
  routes: [],
  userPosition: {},
  nearByStations: [],
  stopsOfRoute: null
})
