import { fetchTop30Routes } from '../api'
import state from './state'

/**
 * 回傳可以取得公車/客運路線資料的函式
 */
function useRoutes() {
  let skip = 0

  async function fetchNewRoutes(routeName, city) {
    state.routeName = routeName
    state.city = city
    const routes = await fetchTop30Routes(routeName, city)
    skip = routes.length
    if (!city) {
      addHeadSign(routes)
    }
    const subroutes = addSubRoutes(routes)
    return subroutes
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
            subroute.RouteName = subroute.SubRouteName
            accu.push(subroute)
          }
        })
      }
      return accu
    }, [])
    return newRoutes
  }

  async function fetchRemainingRoutes() {
    const routes = await fetchTop30Routes(state.routeName, state.city, skip)
    if (routes.length === 0) return routes
    skip += routes.length
    if (!city) {
      addHeadSign(routes)
    }
    const subroutes = addSubRoutes(routes)
    return subroutes
  }

  return { fetchNewRoutes, fetchRemainingRoutes }
}

export default useRoutes
