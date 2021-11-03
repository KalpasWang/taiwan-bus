import { reactive, readonly, watchEffect } from 'vue'
import api from './api'
import { citys } from './constant'

const state = reactive({
  citysList: citys,
  city: '',
  routeUID: '',
  routeName: '',
  cityRoutesList: [],
  forwardStopsList: [],
  backwardStopsList: [],
  station: {},
  stationsList: [],
  error: null
})

watchEffect(() => {
  // console.log(state.forwardStopsList)
  // console.log(state.routeName)
})

// 工具函式
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

// fetch 函式
// 取得指定[縣市]的公車動態定時資料
const fetchCityRoutes = async (city) => {
  try {
    state.error = null
    const url = `Route/City/${city}?format=json`
    const res = await api.get(url)
    // console.log(res.data)
    state.cityRoutesList = res.data
  } catch (error) {
    state.error = error.message
  }
}

// 取得指定[縣市],[路線名稱]的市區公車路線站序資料與公車預估到站資料
const fetchStopsAndBusArrivalTime = async (city, routeName) => {
  try {
    state.error = null
    const url = `StopOfRoute/City/${city}/${routeName}?format=json`
    const url2 = `EstimatedTimeOfArrival/City/${city}/${routeName}?format=json`
    // 取得站序資料
    const res = await api.get(url)
    // 取得預估時間資料
    const res2 = await api.get(url2)
    // console.log(res.data)
    // console.log(res2.data)
    console.log('ajax')

    // 清理 state
    state.city = city
    state.routeName = res.data[0].RouteName.Zh_tw
    state.routeUID = res.data[0].RouteUID
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
      const newStop = Object.assign(stop, {
        EstimateTime: time.EstimateTime,
        StopStatus: time.StopStatus
      })
      state.backwardStopsList.push(newStop)
    })
  } catch (error) {
    state.error = error.message
  }
}

// 取得指定[位置,範圍]的全臺公車站位資料
const fetchNearByStations = (radius) => {
  if (!navigator.geolocation) {
    state.error = 'Geolocation is not supported by your browser'
    return
  }
  state.error = null
  navigator.geolocation.watchPosition(async (position) => {
    try {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      const url = 'Station/NearBy'
      const res = await api.get(url, {
        params: { $spatialFilter: `nearby(${lat}, ${lng}, ${radius})` }
      })
      state.stationsList = res.data
    } catch (error) {
      state.error = error.message
    }
  })
}

const getLocationAndFetchStations = () => {}

export default {
  busState: readonly(state),
  fetchCityRoutes,
  fetchStopsAndBusArrivalTime,
  fetchCityStations
}
