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
  city1: '',
  city2: '',
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
  fareMap: null,
  isLoading: false,
  hasError: false,
  errorMsg: '',
  displayMsg: ''
})
