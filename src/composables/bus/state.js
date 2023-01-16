import { reactive } from 'vue'

export const state = reactive({
  routeName: '',
  routeID: '',
  city: null,
  routes: [],
  arrivalsInfo: {
    forawrd: [],
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
  errorMsg: ''
})
