import { reactive } from 'vue'

const state = reactive({
  routeName: '',
  routeID: '',
  city: null,
  routes: [],
  stopsOfRoute: null
})

export default state
