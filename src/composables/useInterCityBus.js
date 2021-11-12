import { reactive, readonly, watchEffect } from 'vue'
import api from './api'
import { citys } from './constant'

const state = reactive({
  citysList: citys,
  routesList: [],
  routeID: '',
  routeName: '',
  forwardStopsList: [],
  backwardStopsList: [],
  pending: false,
  error: null
})

/**
 * 工具函式
 */

const getTimeBadgeAndColor = (timeObj) => {
  let badge = {
    text: '',
    color: 'bg-primary'
  }
  // console.log(timeObj)
  const time = timeObj.EstimateTime
  if (time === 0) {
    badge.text = '進站中'
    badge.color = 'bg-danger'
  } else if (time <= 60) {
    badge.text = '即將到站'
    badge.color = 'bg-warning'
  } else if (!time) {
    badge.text = '--'
    badge.color = 'bg-secondary'
  } else {
    const min = Math.floor(time / 60)
    badge.text = `約${min}分`
  }
  return badge
}

/**
 * fetch 函式
 */

// 取得有經過指定[縣市]的公車資料
const fetchRoutesByCity = async (city) => {
  const cityItem = state.citysList.find((c) => c.City === city)
  const url = 'StopOfRoute/InterCity'
  const res = await api.get(url, {
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
    const isFirstForward = !res.data[0].Direction
    const stopsForward = isFirstForward ? res.data[0].Stops : res.data[1].Stops
    const stopsBackward = isFirstForward ? res.data[1].Stops : res.data[0].Stops
    const timeForward = res2.data.filter((item) => !item.Direction)
    const timeBackward = res2.data.filter((item) => item.Direction)

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
    state.error = error.message
    state.pending = false
  }
}

export default {
  state: readonly(state),
  fetchRoutesByCityAndRouteName,
  fetchStopsAndBusArrivalTime
}
