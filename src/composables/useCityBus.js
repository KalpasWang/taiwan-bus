import { reactive, readonly } from 'vue'
import { api, apiTop30 } from './api'
import { citys } from './constant'
import {
  getTimeBadgeAndColor,
  parseShape,
  filterRouteName
} from './useUtilities'
import haversine from 'haversine-distance'

const state = reactive({
  citysList: citys,
  city: '',
  routeUID: '',
  routeName: '',
  routesList: [],
  forwardRouteShape: [],
  backwardRouteShape: [],
  forwardStopsList: [],
  backwardStopsList: [],
  forwardBusList: [],
  backwardBusList: [],
  station: {},
  nearByStations: [],
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
    // console.log(res.data)
    state.routesList = res.data
    state.pending = false
  } catch (error) {
    state.error = error.message
    state.pending = false
  }
}

const fetchBusPosition = async (city, routeName) => {
  const url = `RealTimeByFrequency/City/${city}/${routeName}`
  const res = await api.get(url)
  const realData = filterRouteName(routeName, res.data)
  if (!realData && !realData[0]) {
    return
  }
  const busForward = realData.filter((item) => item.Direction === 0)
  const busBackward = realData.filter((item) => item.Direction === 1)
  state.forwardBusList = busForward
  state.backwardBusList = busBackward
}

const fetchBusType = async (city, plate) => {
  const url = `Vehicle/City/${city}`
  const res = await api.get(url, {
    params: {
      $filter: `PlateNumb eq '${plate}'`
    }
  })
  const bus = res.data[0]
  if (bus && bus.VehicleType > 0 && bus.VehicleType < 3) {
    return true
  }
  return false
}

const fetchRouteShape = async (city, routeName) => {
  const url = `Shape/City/${city}/${routeName}`
  const res = await api.get(url)
  const realData = filterRouteName(routeName, res.data)
  state.forwardRouteShape = null
  state.backwardRouteShape = null
  if (!realData && !realData[0]) {
    return
  }
  if (realData[0].Direction >= 0) {
    const forward = realData.find((el) => el.Direction === 0)
    const backward = realData.find((el) => el.Direction === 1)
    if (forward) {
      state.forwardRouteShape = parseShape(forward.Geometry)
    }
    if (backward) {
      state.backwardRouteShape = parseShape(backward.Geometry)
    }
  } else {
    const shape = parseShape(realData[0].Geometry)
    state.forwardRouteShape = shape
    state.backwardRouteShape = shape
  }
}

const fetchBusNearStop = async (city, routeName) => {
  const url = `RealTimeNearStop/City/${city}/${routeName}`
  const res = await api.get(url)
  const realData = filterRouteName(routeName, res.data)
  if (!realData && !realData[0]) {
    return
  }
  const busForward = realData.filter((item) => item.Direction === 0)
  const busBackward = realData.filter((item) => item.Direction === 1)

  const fn = async (stop, busList) => {
    const bus = busList.find((item) => item.StopUID === stop.StopUID)
    if (bus) {
      const accessible = await fetchBusType(city, bus.PlateNumb)
      stop.hasBus = true
      stop.plate = bus.PlateNumb
      stop.accessible = accessible
    }
  }
  state.forwardStopsList.forEach((stop) => {
    fn(stop, busForward)
  })
  state.backwardStopsList.forEach((stop) => {
    fn(stop, busBackward)
  })
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

    const realData = filterRouteName(routeName, res.data)
    if (!realData && !realData[0]) {
      return
    }
    const realData2 = filterRouteName(routeName, res2.data)
    if (!realData2 && !realData2[0]) {
      return
    }
    // 清理 state
    state.city = city
    state.routeName = realData[0].RouteName.Zh_tw
    state.routeUID = realData[0].RouteUID
    state.forwardStopsList.length = 0
    state.backwardStopsList.length = 0

    // cache 所需的資料
    const stopsForward = realData.find((item) => item.Direction === 0).Stops
    const stopsBackward = realData.find((item) => item.Direction === 1).Stops
    const timeForward = realData2.filter((item) => item.Direction === 0)
    const timeBackward = realData2.filter((item) => item.Direction === 1)

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
          Border: badge.border,
          LinkColor: badge.linkColor
        })
      } else {
        newStop = Object.assign(stop, {
          TimeLabel: '--',
          Color: 'text-warning',
          BgColor: 'bg-dark',
          StopStatus: 1,
          Border: false,
          LinkColor: 'link-light'
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

    await fetchBusNearStop(city, routeName)
    await fetchBusPosition(city, routeName)
    await fetchRouteShape(city, routeName)

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
const fetchStation = async (city, stationId) => {
  try {
    state.error = null
    state.pending = true
    const url = `Station/City/${city}`
    let res = await api.get(url, {
      params: {
        $filter: `StationID eq '${stationId}'`
      }
    })
    state.station = res.data[0]
    // res = await fetchEstimatedTimeOfArrivalByStaionId(city, stationId)
    // res.data.forEach((item) => {
    // const badge = getTimeBadgeAndColor(item)
    // item.TimeLabel = badge.text
    // item.BgColor = badge.color
    // })
    state.pending = false
  } catch (error) {
    state.error = error.message
    state.pending = false
  }
}

const fetchEstimatedTimeOfArrivalByStaionId = async (city, stationId) => {
  const url = `EstimatedTimeOfArrival/City/${city}/PassThrough/Station/${stationId}`
  const res = await api.get(url)
  return res
}

export default {
  state: readonly(state),
  fetchRoutesByCityAndRouteName,
  fetchStopsAndBusArrivalTime,
  fetchNearByStations,
  fetchStation
}
