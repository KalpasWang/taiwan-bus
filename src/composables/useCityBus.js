import { reactive, readonly, watchEffect } from 'vue'
import api from './api'
import { citys } from './constant'
import { getTimeBadgeAndColor } from './useUtilities'
import haversine from 'haversine-distance'

const state = reactive({
  citysList: citys,
  city: '',
  routeUID: '',
  routeName: '',
  routesList: [],
  forwardStopsList: [],
  backwardStopsList: [],
  stationGroup: {},
  stationsList: [],
  pending: false,
  error: null
})

watchEffect(() => {
  // console.log(state.forwardStopsList)
  // console.log(state.routeName)
})

/**
 * fetch 函式
 */

// 取得指定[縣市與路線名稱]的公車資料
const fetchRoutesByCityAndRouteName = async (city, routeName) => {
  try {
    state.error = null
    state.pending = true
    let url
    if (city && !routeName) {
      url = `Route/City/${city}?$format=json`
    } else {
      url = `Route/City/${city}/${routeName}?$format=json`
    }
    const res = await api.get(url)
    console.log(res.data)
    state.routesList = res.data
    state.pending = false
  } catch (error) {
    state.error = error.message
    state.pending = false
  }
}

// 取得指定[縣市],[路線名稱]的市區公車路線站序資料與公車預估到站資料
const fetchStopsAndBusArrivalTime = async (city, routeName) => {
  try {
    state.error = null
    state.pending = true
    const url = `StopOfRoute/City/${city}/${routeName}?$format=json`
    const url2 = `EstimatedTimeOfArrival/City/${city}/${routeName}?$format=json`
    // 取得站序資料
    const res = await api.get(url)
    // 取得預估時間資料
    const res2 = await api.get(url2)
    // console.log(res.data)
    // console.log(res2.data)
    // console.log('ajax')

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

// 取得指定[位置,範圍]的全臺公車站位資料
const fetchNearByStations = (radius) => {
  if (!navigator.geolocation) {
    state.error = 'Geolocation is not supported by your browser'
    return
  }
  navigator.geolocation.watchPosition(async (position) => {
    try {
      state.error = null
      state.pending = true
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      const url = 'Station/NearBy'
      const res = await api.get(url, {
        params: {
          $spatialFilter: `nearby(${lat}, ${lng}, ${radius})`,
          $format: 'JSON'
        }
      })
      state.stationsList = []
      res.data.forEach((item) => {
        const d = haversine(
          { lat, lng },
          {
            lat: item.StationPosition.PositionLat,
            lng: item.StationPosition.PositionLon
          }
        )
        let bearing = ''
        switch (item.Bearing) {
          case 'N':
            bearing = '北向'
            break
          case 'S':
            bearing = '南向'
            break
          case 'E':
            bearing = '東向'
            break
          case 'W':
            bearing = '西向'
            break
        }
        state.stationsList.push({
          BearingZh_tw: bearing,
          Distance: Math.round(d),
          ...item
        })
      })
      state.stationsList.sort((a, b) => a.Distance - b.Distance)
      // console.log(res.data)
      state.pending = false
    } catch (error) {
      state.error = error.message
      // console.log(state.error)
      state.pending = false
    }
  })
}

// 取得指定[縣市]與站位ID的市區公車站位資料
const fetchStationGroup = async (city, groupId) => {
  try {
    state.error = null
    state.pending = true
    const url = `Station/City/${city}`
    const res = await api.get(url, {
      params: {
        $filter: `StationGroupID eq '${groupId}'`,
        $format: 'JSON'
      }
    })
    console.log(res.data)
    state.stationGroup = res.data
    state.pending = false
  } catch (error) {
    state.error = error.message
    state.pending = false
  }
}

export default {
  state: readonly(state),
  fetchRoutesByCityAndRouteName,
  fetchStopsAndBusArrivalTime,
  fetchNearByStations,
  fetchStationGroup
}
