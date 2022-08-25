import { reactive } from 'vue'
import { api } from '../api'
import {
  filterRouteName,
  filterStopsByDirection,
  filterDirection,
  parseShape
} from '../utilities'

/**
 * 取得路線地圖所需要的資料，包括 stops, buses, route shape
 * @param  {string} routeName - 路線名稱
 * @param  {string} city - 室內公車須輸入縣市名稱，如果是客運就不用傳入參數
 */
function useRouteMapInfo(routeName, city) {
  const mapInfo = reactive({
    forward: {
      stops: [],
      busList: [],
      shape: []
    },
    backward: {
      stops: [],
      busList: [],
      shape: []
    }
  })

  // 取得指定[縣市],[路線名稱]的市區公車或公路客運路線站序資料
  const fetchStopsOfRoute = async (routeName, city) => {
    // 設定要 fetch 的網址
    let url = `StopOfRoute/City/${city}`
    if (!city) {
      url = 'StopOfRoute/InterCity'
    }
    // 取得站序資料
    const res = await api.get(`${url}/${routeName}`)
    const stopsData = filterRouteName(routeName, res.data)
    if (!stopsData && !stopsData[0]) {
      return
    }
    const { stopsForward, stopsBackward } = filterStopsByDirection(stopsData)
    mapInfo.forward.stops = stopsForward
    mapInfo.backward.stops = stopsBackward
  }

  // 取得指定[縣市],[路線名稱]的公車或公路客運動態定點資料
  const fetchBusPosition = async (routeName, city) => {
    // 設定要 fetch 的網址
    let url = `RealTimeByFrequency/City/${city}/${routeName}`
    if (!city) {
      url = `RealTimeByFrequency/InterCity/${routeName}`
    }
    const res = await api.get(url)
    const realData = filterRouteName(routeName, res.data)
    if (!realData && !realData[0]) {
      return
    }
    const { forwards, backwards } = filterDirection(realData)
    mapInfo.forward.busList = forwards
    mapInfo.backward.busList = backwards
  }

  // 取得指定[縣市],[路線名稱]的市區公車路線或公路客運線型資料
  const fetchRouteShape = async (routeName, city) => {
    // 設定要 fetch 的網址
    let url = `Shape/City/${city}/${routeName}`
    if (!city) {
      url = `Shape/InterCity/${routeName}`
    }
    const res = await api.get(url)
    const realData = filterRouteName(routeName, res.data)
    if (!realData && !realData[0]) {
      return
    }
    // 是否提供去返程兩種線型資料
    if (realData[0].Direction <= 2) {
      const forward = realData.find((el) => el.Direction === 0)
      const backward = realData.find((el) => el.Direction === 1)
      if (forward) {
        mapInfo.forward.shape = parseShape(forward.Geometry)
      }
      if (backward) {
        mapInfo.backward.shape = parseShape(backward.Geometry)
      }
    } else {
      const shape = parseShape(realData[0].Geometry)
      mapInfo.forward.shape = shape
      mapInfo.backward.shape = shape
    }
  }

  const fetchNewMapInfo = async () => {
    await fetchStopsOfRoute(routeName, city)
    await fetchBusPosition(routeName, city)
    await fetchRouteShape(routeName, city)
  }

  return { mapInfo, fetchNewMapInfo }
}

export default useRouteMapInfo
