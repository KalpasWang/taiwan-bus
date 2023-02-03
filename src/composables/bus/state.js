import { reactive } from 'vue'

export const state = reactive({
  routeName: '',
  routeID: '',
  subRouteName: '',
  subRouteID: '',
  city: '',
  inputRouteName: '',
  inputRouteName2: '',
  inputCity: '',
  from: '',
  to: '',
  routes: [],
  arrivalsInfo: {
    forward: [],
    backward: []
  },
  userPosition: {
    lat: null,
    lng: null
  },
  nearByStations: [],
  station: null,
  stopsOfRoute: null,
  isLoading: false,
  hasError: false,
  errorMsg: '',
  displayMsg: ''
})
