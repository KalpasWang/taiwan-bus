import { reactive, readonly } from 'vue'
import { api, apiTop30 } from './api'
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
      url = `Route/City/${city}`
    } else {
      url = `Route/City/${city}/${routeName}`
    }
    const res = await apiTop30.get(url)
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
    const url = `StopOfRoute/City/${city}/${routeName}`
    const url2 = `EstimatedTimeOfArrival/City/${city}/${routeName}`
    // 取得站序資料
    const res = await api.get(url)
    // 取得預估時間資料
    const res2 = await api.get(url2)
    // console.log(res.data)
    // console.log(res2.data)

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
    console.log('timeForward', timeForward)
    console.log('timeBackward', timeBackward)

    const processStop = (timeArr, stop) => {
      const time = timeArr.find((item) => item.StopUID === stop.StopUID)
      let newStop
      if (time) {
        const badge = getTimeBadgeAndColor(time)
        newStop = Object.assign(stop, {
          EstimateTime: time.EstimateTime,
          TimeLabel: badge.text,
          Color: badge.color,
          BgColor: badge.bgColor,
          StopStatus: time.StopStatus,
          Border: badge.border
        })
      } else {
        newStop = Object.assign(stop, {
          TimeLabel: '--',
          Color: 'text-warning',
          BgColor: 'bg-dark',
          StopStatus: 1,
          Border: false
        })
      }
      return newStop
    }

    // 去程
    stopsForward.forEach((stop) => {
      const newStop = processStop(timeForward, stop)
      state.forwardStopsList.push(newStop)
    })

    // 返程
    stopsBackward.forEach((stop) => {
      const newStop = processStop(timeBackward, stop)
      state.backwardStopsList.push(newStop)
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
      const res = await apiTop30.get(url, {
        params: {
          $spatialFilter: `nearby(${lat}, ${lng}, ${radius})`
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
        state.stationsList.push({
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
    let res = await api.get(url, {
      params: {
        $filter: `StationGroupID eq '${groupId}'`
      }
    })
    console.log(res.data)
    state.stationGroup = res.data
    const stationId = res.data[0].StationID
    res = await fetchEstimatedTimeOfArrivalByStaionId(city, stationId)
    res.data.forEach((item) => {
      const badge = getTimeBadgeAndColor(item)
      item.TimeLabel = badge.text
      item.BgColor = badge.color
    })
    state.stationGroup[0].Stops = res.data
    state.pending = false
  } catch (error) {
    state.error = error.message
    state.pending = false
  }
}

const fetchEstimatedTimeOfArrivalByStaionId = async (city, stationId) => {
  state.error = null
  state.pending = true
  const url = `EstimatedTimeOfArrival/City/${city}/PassThrough/Station/${stationId}`
  const res = await api.get(url)
  console.log(res.data)
  state.pending = false
  return res
}

export default {
  state: readonly(state),
  fetchRoutesByCityAndRouteName,
  fetchStopsAndBusArrivalTime,
  fetchNearByStations,
  fetchStationGroup,
  fetchEstimatedTimeOfArrivalByStaionId
}
