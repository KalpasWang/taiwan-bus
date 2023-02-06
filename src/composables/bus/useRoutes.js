import { ref } from 'vue'
import { fetchTop20Routes, api } from '../api'
import { citys } from '../constants'
import { state } from './state'

/**
 * 回傳可以取得公車/客運路線資料的函式
 */
export function useRoutes(type = 'city') {
  const isEnd = ref(true)
  let remainingPromise = []
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
        await fetchRoutesByRouteName(...args)
        break
      case 'intercity-from-to':
        await fetchRoutesByCitys(...args)
        break
      default:
    }
  }

  // 取得有經過指定[縣市]的公車資料
  async function fetchRoutesByCitys(city1, city2) {
    if (
      state.city1 === city1 &&
      state.city2 === city2 &&
      state.routes.length > 0
    )
      return
    const cityObj1 = citys.find((c) => c.City === city1)
    const cityObj2 = citys.find((c) => c.City === city2)
    if (!cityObj1 || !cityObj2) return
    const url = 'StopOfRoute/InterCity'
    const res = await api.get(url, {
      params: {
        $filter: `Stops/any(d:d/LocationCityCode eq '${cityObj1.CityCode}')`
      }
    })

    const promiseArray = []
    remainingPromise = []
    // 找出經過city1與city2的路線
    res.data.forEach((route) => {
      const city1Idx = route.Stops.findIndex(
        (stop) => stop.LocationCityCode === cityObj1?.CityCode
      )
      const stop1 = route.Stops[city1Idx]
      const city2Idx = route.Stops.findIndex(
        (stop) =>
          stop.LocationCityCode === cityObj2?.CityCode &&
          stop.StopID !== stop1.StopID
      )
      if (city2Idx < 0 || city1Idx >= city2Idx) return
      if (promiseArray.length < 50) {
        promiseArray.push(fetchRouteInfo(route))
        return
      }
      remainingPromise.push(() => fetchRouteInfo(route))
    })
    let values = await Promise.all(promiseArray)
    state.routes = []
    const result = processRouteInfo(values)
    state.routes = result
    state.city1 = city1
    state.city2 = city2

    if (remainingPromise.length > 0) {
      isEnd.value = false
    }
  }

  // 找出路線並且查看是否已經加入 state.routes
  function processRouteInfo(routes) {
    const result = []
    routes = routes.filter(Boolean) // 清除 undefined
    routes.forEach((routeData) => {
      const isExist = state.routes.some(
        (savedRoute) =>
          savedRoute.SubRouteName.Zh_tw === routeData.SubRouteName.Zh_tw
      )
      if (!isExist) {
        result.push(routeData)
      }
    })
    return result
  }

  async function fetchRouteInfo(stopsOfRoute) {
    const routesData = await fetchTop20Routes(stopsOfRoute.RouteName.Zh_tw)
    const name = stopsOfRoute.RouteName.Zh_tw
    const subId = stopsOfRoute.SubRouteID
    const route = routesData.find((item) => item.RouteName.Zh_tw === name)
    return route.SubRoutes.find((sub) => {
      if (sub.SubRouteID === subId) {
        sub.IsSubRoute = true
        sub.RouteName = route.RouteName
        return sub
      }
    })
  }

  async function fetchRoutesByRouteName(routeName, city) {
    if (
      state.routeName === routeName &&
      state.city === city &&
      state.routes.length > 0
    )
      return
    const routesList = await fetchTop20Routes(routeName, city)
    skip = routesList.length
    isEnd.value = false
    if (skip < 20) {
      isEnd.value = true
    }
    if (!city) {
      addHeadSign(routesList)
    }
    const subroutes = addSubRoutes(routesList)
    state.routes = subroutes
    state.routeName = routeName
    state.city = city
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
            subroute.City = route.City
            if (!subroute.DepartureStopNameZh) {
              subroute.DepartureStopNameZh = route.DepartureStopNameZh
              subroute.DepartureStopNameEn = route.DepartureStopNameEn
              subroute.DestinationStopNameZh = route.DestinationStopNameZh
              subroute.DestinationStopNameEn = route.DestinationStopNameEn
            }
            accu.push(subroute)
          }
        })
      }
      return accu
    }, [])
    return newRoutes
  }

  async function fetchRemainingRoutes() {
    if (remainingPromise.length > 0) {
      const promiseArray = []
      for (let i = 0; i < 50; i++) {
        const fn = remainingPromise.shift()
        if (fn) {
          promiseArray.push(fn())
        }
      }
      const values = await Promise.all(promiseArray)
      const result = processRouteInfo(values)
      state.routes = state.routes.concat(result)
      if (remainingPromise.length === 0) {
        isEnd.value = true
      }
      return
    }
    const lastRoutes = await fetchTop20Routes(state.routeName, state.city, skip)
    if (lastRoutes.length < 20) isEnd.value = true
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
