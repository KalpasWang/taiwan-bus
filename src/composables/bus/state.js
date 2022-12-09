import { reactive } from 'vue'

const state = reactive({
  routeName: '',
  routeID: '',
  city: null,
  routes: [],
  nearByStations: [],
  stopsOfRoute: null
})

export default state
