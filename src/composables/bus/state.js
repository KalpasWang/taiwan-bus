import { reactive } from 'vue'

export const state = reactive({
  routeName: '',
  routeID: '',
  city: null,
  routes: [],
  userPosition: {
    lat: null,
    lng: null
  },
  nearByStations: [],
  stopsOfRoute: null,
  isLoading: false,
  hasError: false,
  errorMsg: ''
})
