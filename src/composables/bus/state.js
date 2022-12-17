import { reactive } from 'vue'

const state = reactive({
  routeName: '',
  routeID: '',
  city: null,
  routes: [],
  userPosition: {},
  nearByStations: [],
  stopsOfRoute: null
})

export default state
