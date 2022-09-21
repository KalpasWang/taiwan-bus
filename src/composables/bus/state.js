import { reactive } from 'vue'

const state = reactive({
  routeName: '',
  routeID: '',
  city: null,
  routes: [],
  query: {
    routeName: ''
  },
  stopsOfRoute: null
})

export default state
