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
const handleRoutesByCity = async (city) => {
  const cityItem = state.citysList.find((c) => c.City === city)
  const url = 'StopOfRoute/InterCity'
  const res = await apiTop30.get(url, {
    params: {
      $filter: `Stops/any(d:d/LocationCityCode eq '${cityItem.CityCode}')`,
      $format: 'JSON'
    }
  })
  state.routesList = []
  res.data.forEach((item, idx, arr) => {
    const i = arr.findIndex((el) => el.RouteUID === item.RouteUID)
    if (i === idx) {
      state.routesList.push(item)
    }
  })
}

// 取得有指定[路線名稱]的公車資料
const fetchRoutesByRouteName = async (routeName, useRoutesList) => {
  if (useRoutesList) {
    state.routesList = state.routesList.filter((r) =>
      r.RouteName.Zh_tw.includes(routeName)
    )
  } else {
    const url = `Route/InterCity/${routeName}?$format=JSON`
    const res = await api.get(url)
    state.routesList = res.data
  }
}

// 取得指定[縣市與路線名稱]的公車資料
const fetchRoutesByCityAndRouteName = async (city, routeName) => {
  try {
    state.error = null
    state.pending = true
    if (city && !routeName) {
      await fetchRoutesByCity(city)
    } else if (!city && routeName) {
      await fetchRoutesByRouteName(routeName)
    } else if (city && routeName) {
      await fetchRoutesByCity(city)
      await fetchRoutesByRouteName(routeName)
    }
    state.pending = false
  } catch (error) {
    state.error = error.message
    state.pending = false
  }
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

const fetchRoutesByCity = tryCatchFactory(handleRoutesByCity)
const fetchStation = tryCatchFactory(handleStation)

export default {
  state: readonly(state),
  fetchRoutesByCityAndRouteName,
  fetchStation
}
