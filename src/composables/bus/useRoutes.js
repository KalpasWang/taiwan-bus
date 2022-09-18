import { ref } from 'vue'
import { fetchTop30Routes } from '../api'
import state from './state'

/**
 * 回傳可以取得公車/客運路線資料的函式
 */
function useRoutes() {
  const routes = ref(null)
  const isEnd = ref(false)
  let skip = 0

  function clearRoutes() {
    state.routeName = ''
    state.city = ''
    routes.value = []
    isEnd.value = false
    skip = 0
  }

  async function fetchNewRoutes(routeName, city) {
    state.routeName = routeName
    state.city = city
    const routesList = await fetchTop30Routes(routeName, city)
    skip = routesList.length
    isEnd.value = false
    if (!city) {
      addHeadSign(routesList)
    }
    const subroutes = addSubRoutes(routesList)
    routes.value = subroutes
  }

  function addHeadSign(routes) {
    routes.forEach((route) => {
      if (route.HasSubRoutes) {
        const found = route.SubRoutes.find(
          (sub) =>
            sub.SubRouteName.Zh_tw === route.RouteName.Zh_tw &&
            sub.Direction === 0
        )
        route.Headsign = found?.Headsign
        route.HeadsignEn = found?.HeadsignEn
      }
    })
  }

  function addSubRoutes(routes) {
    const newRoutes = routes.reduce((accu, route) => {
      accu.push(route)
      if (route.HasSubRoutes) {
        route.SubRoutes.forEach((subroute) => {
          if (
            subroute.SubRouteName.Zh_tw !== route.RouteName.Zh_tw &&
            subroute.Direction === 0
          ) {
            subroute.IsSubRoute = true
            subroute.RouteName = route.RouteName
            accu.push(subroute)
          }
        })
      }
      return accu
    }, [])
    return newRoutes
  }

  async function fetchRemainingRoutes() {
    const lastRoutes = await fetchTop30Routes(state.routeName, state.city, skip)
    if (lastRoutes.length < 30) isEnd.value = true
    if (lastRoutes.length === 0) return
    skip += lastRoutes.length
    if (!city) {
      addHeadSign(lastRoutes)
    }
    const subroutes = addSubRoutes(lastRoutes)
    routes.value.concat(subroutes)
  }

  return { fetchNewRoutes, fetchRemainingRoutes, clearRoutes, routes, isEnd }
}

export default useRoutes
