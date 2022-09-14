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
    const subroutes = addSubRoutesAndHeadSign(routes)
    console.warn(routes)
    console.warn(subroutes)
    return subroutes
  }

  // TODO: add head sign
  function addSubRoutesAndHeadSign(routes) {
    const newRoutes = routes.reduce((accu, route) => {
      accu.push(route)
      if (route.HasSubRoutes) {
        route.SubRoutes.forEach((subroute) => {
          if (
            subroute.SubRouteName.Zh_tw !== route.RouteName.Zh_tw &&
            subroute.Direction === 0
          ) {
            accu.push(subroute)
          }
        })
      }
      return accu
    }, [])
    return newRoutes
  }

  async function fetchRemainingRoutes() {}

  return { fetchNewRoutes, fetchRemainingRoutes }
}

export default useRoutes
