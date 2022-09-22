import { ref } from 'vue'
import { fetchTop30Routes, api } from '../api'
import { citys } from '../constants'
import state from './state'

/**
 * 回傳可以取得公車/客運路線資料的函式
 */
function useRoutes(type = 'city') {
  const isEnd = ref(true)
  let skip = 0

  function clearRoutes() {
    state.routeName = ''
    state.city = ''
    state.routes = []
    isEnd.value = true
    skip = 0
  }

  async function fetchNewRoutes(...args) {
    switch (type) {
      case 'city':
      case 'intercity':
        fetchRoutesByRouteName(...args)
        break
      case 'intercity-from-to':
        await fetchRoutesByCitys(...args)
        break
      default:
    }
  }

  // 取得有經過指定[縣市]的公車資料
  async function fetchRoutesByCitys(city1, city2) {
    const cityObj1 = citys.find((c) => c.City === city1)
    const cityObj2 = citys.find((c) => c.City === city2)
    if (!cityObj1 || !cityObj2) return
    const url = 'StopOfRoute/InterCity'
    const res = await api.get(url, {
      params: {
        $filter: `Stops/any(d:d/LocationCityCode eq '${cityObj1.CityCode}')`
      }
    })

    state.routes = []
    const tempRoutesList = []
    // 找出經過city1與city2的路線
    res.data.forEach((route) => {
      const hasCity2 = route.Stops.some(
        (stop) => stop.LocationCityCode === cityObj2.CityCode
      )
      if (hasCity2) {
        tempRoutesList.push(route)
      }
    })
    // 根據子路線整理routes list
    tempRoutesList.forEach((route) => {
      const routeName = route.RouteName.Zh_tw
      const subRouteName = route.SubRouteName.Zh_tw
      const subSlice = subRouteName.slice(routeName.length)
      // 如果subslice是0之外的都當成另一個route
      route.UseSubName = false
      if (subSlice !== '0') {
        route.UseSubName = true
      }
      // 如果沒有被push過才push到state.routesList
      const isPushed = state.routes.some(
        (savedRoute) =>
          savedRoute.SubRouteName.Zh_tw === route.SubRouteName.Zh_tw
      )
      if (!isPushed) {
        state.routes.push(route)
      }
    })
  }

  async function fetchRoutesByRouteName(routeName, city) {
    state.routeName = routeName
    state.city = city
    const routesList = await fetchTop30Routes(routeName, city)
    skip = routesList.length
    isEnd.value = false
    if (skip < 30) {
      isEnd.value = true
    }
    if (!city) {
      addHeadSign(routesList)
    }
    const subroutes = addSubRoutes(routesList)
    state.routes = subroutes
  }

  function addHeadSign(routes) {
    routes.forEach((route) => {
      if (route?.SubRoutes?.length) {
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
    if (!state.city) {
      addHeadSign(lastRoutes)
    }
    const subroutes = addSubRoutes(lastRoutes)
    subroutes.forEach((sub) => {
      state.routes.push(sub)
    })
  }

  return {
    fetchNewRoutes,
    fetchRemainingRoutes,
    fetchRoutesByCitys,
    clearRoutes,
    isEnd
  }
}

export default useRoutes
