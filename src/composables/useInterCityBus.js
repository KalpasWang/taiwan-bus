import { reactive, readonly } from 'vue'
import { api, apiTop30 } from './api'
import { citys } from './constant'
import { getTimeBadgeAndColor } from './useUtilities'

const state = reactive({
  citysList: citys,
  routesList: [],
  routeUID: '',
  routeName: '',
  routesList: [],
  forwardRouteShape: [],
  backwardRouteShape: [],
  forwardStopsList: [],
  backwardStopsList: [],
  station: {},
  pending: false,
  error: null
})

/**
 * fetch 函式
 */

// 取得有經過指定[縣市]的公車資料
const handleRoutesByCitys = async (city1, city2) => {
  const cityObj1 = state.citysList.find((c) => c.City === city1)
  const cityObj2 = state.citysList.find((c) => c.City === city2)
  const url = 'StopOfRoute/InterCity'
  const res = await api.get(url, {
    params: {
      $filter: `Stops/any(d:d/LocationCityCode eq '${cityObj1.CityCode}')`
    }
  })

  if (cityObj2) {
    state.routesList = []
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
    // console.log(tempRoutesList)
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
      const isPushed = state.routesList.some(
        (savedRoute) =>
          savedRoute.SubRouteName.Zh_tw === route.SubRouteName.Zh_tw
      )
      if (!isPushed) {
        state.routesList.push(route)
      }
    })
  }
  console.log(state.routesList)
}

// 取得有指定[路線名稱]的公車資料
const handleRoutesByRouteName = async (routeName) => {
  const url = `Route/InterCity/${routeName}?$format=JSON`
  const res = await apiTop30.get(url)
  state.routesList = res.data
}

// 取得指定[路線名稱]的客運路線站序資料與客運預估到站資料
const fetchStopsAndBusArrivalTime = async (routeName) => {
  try {
    state.error = null
    state.pending = true
    const url = `StopOfRoute/InterCity/${routeName}?$format=json`
    const url2 = `EstimatedTimeOfArrival/InterCity/${routeName}?$format=json`
    // 取得站序資料
    const res = await api.get(url)
    // 取得預估時間資料
    const res2 = await api.get(url2)
    // console.log(res.data)
    // console.log(res2.data)

    // 清理 state
    state.routeName = res.data[0].RouteName.Zh_tw
    state.routeID = res.data[0].RouteID
    state.forwardStopsList = []
    state.backwardStopsList = []

    // cache 所需的資料
    const stopsForward = res.data.find((r) => !r.Direction).Stops
    const stopsBackward = res.data.find((r) => r.Direction).Stops
    const timeForward = res2.data.filter((item) => !item.Direction)
    const timeBackward = res2.data.filter((item) => item.Direction)
    // console.log(stopsForward)
    // console.log(stopsBackward)

    // 去程
    stopsForward.forEach((stop) => {
      const time = timeForward.find((item) => item.StopUID === stop.StopUID)
      if (time) {
        const badge = getTimeBadgeAndColor(time)
        const newStop = Object.assign(stop, {
          EstimateTime: time.EstimateTime,
          TimeLabel: badge.text,
          Color: badge.color,
          StopStatus: time.StopStatus
        })
        state.forwardStopsList.push(newStop)
      } else {
        const newStop = Object.assign(stop, {
          TimeLabel: '--',
          Color: 'bg-secondary',
          StopStatus: 4
        })
        state.forwardStopsList.push(newStop)
      }
    })

    // 返程
    stopsBackward.forEach((stop) => {
      const time = timeBackward.find((item) => item.StopUID === stop.StopUID)
      if (time) {
        const badge = getTimeBadgeAndColor(time)
        const newStop = Object.assign(stop, {
          EstimateTime: time.EstimateTime,
          TimeLabel: badge.text,
          Color: badge.color,
          StopStatus: time.StopStatus
        })
        state.backwardStopsList.push(newStop)
      } else {
        const newStop = Object.assign(stop, {
          TimeLabel: '--',
          Color: 'bg-secondary',
          StopStatus: 4
        })
        state.backwardStopsList.push(newStop)
      }
    })

    state.pending = false
  } catch (error) {
    console.log(error)
    state.error = error.message
    state.pending = false
  }
}

// 取得指定[縣市]與站位ID的市區公車站位資料
const handleStation = async (stationId) => {
  const url = 'Station/InterCity'
  let res = await api.get(url, {
    params: {
      $filter: `StationID eq '${stationId}'`
    }
  })
  state.station = res.data[0]
  state.station.PassThrough = []
  const url2 = `StopOfRoute/InterCity/PassThrough/Station/${stationId}`
  res = await api.get(url2)
  // console.log(res.data)
  res.data.forEach((route) => {
    const stops = route.Stops
    route.finalStop = stops[stops.length - 1]
    state.station.PassThrough.push(route)
  })
}

const tryCatchFactory = (handler) => {
  return async (a, b) => {
    try {
      state.error = null
      state.pending = true
      await handler(a, b)
      state.pending = false
    } catch (error) {
      state.error = error.message
      state.pending = false
    }
  }
}

const fetchRoutesByCitys = tryCatchFactory(handleRoutesByCitys)
const fetchRoutesByRouteName = tryCatchFactory(handleRoutesByRouteName)
const fetchStation = tryCatchFactory(handleStation)

export default {
  state: readonly(state),
  fetchRoutesByCitys,
  fetchRoutesByRouteName,
  fetchStation
}
