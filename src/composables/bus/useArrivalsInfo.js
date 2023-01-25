import { reactive } from 'vue'
import { api, fetchEstimatedTimeOfArrival, fetchStopsOfRoute } from '../api'
import { state } from './state'
import { filterSubRoutes, filterDirection } from '../utilities'

/**
 * 使用可以取得公車預估到站資料的函式
 * @param  {string} routeName - 路線名稱
 * @param  {string} [city] - 室內公車須輸入縣市名稱，如果是客運就不傳入參數或是 null
 * @param  {string} [subRouteName] - 子路線名稱，如果要的是子路線
 */
export function useArrivalsInfo(routeName, city, subRouteName) {
  const arrivalsInfo = reactive({
    forwards: [],
    backwards: []
  })

  // 取得指定[路線名稱]與[縣市]的室內公車或公路客運預估到站資料
  async function fetchBusArrivalTime(routeName, city) {
    // 取得預估時間資料
    const arrivalsData = await fetchEstimatedTimeOfArrival(routeName, city)
    const [timeForward, timeBackward] = cleanUpArrivalsData(arrivalsData)
    // 取得站序資料
    const stopsData = await fetchStopsOfRoute(routeName, city)
    const stopsOfRoute = cleanUpStopsOfRoute(stopsData)
    // 對每一個站牌做排序
    timeForward.sort(generateSortingFn(stopsOfRoute, 'forward'))
    timeBackward.sort(generateSortingFn(stopsOfRoute, 'backward'))
    state.arrivalsInfo.forward = timeForward
    state.arrivalsInfo.backward = timeBackward
  }

  // 預估到站資料的過濾與排序
  function cleanUpArrivalsData(arrivalsData) {
    if (arrivalsData[0].SubRouteID) {
      const filterName = subRouteName || routeName
      arrivalsData = filterSubRoutes(filterName, arrivalsData)
    }
    const [forward, backward] = filterDirection(arrivalsData)
    if (forward.length === 0 && backward.length === 0) {
      throw new Error('找不到此公車路線')
    }
    state.routeName = routeName
    state.arrivalsInfo.forward = forward
    state.arrivalsInfo.backward = backward
    if (subRouteName) state.subRouteName = subRouteName
    return [forward, backward]
  }

  function cleanUpStopsOfRoute(stopsData) {
    const filterName = subRouteName || routeName
    // 過濾要的路線/子路線
    let filteredStopsData = filterSubRoutes(filterName, stopsData)
    // 如果沒有過濾出此路線，找出最多站牌的路線
    if (filteredStopsData.length === 0) {
      let maxStopsLength = 0
      let maxStopsRoute
      let anotherDirection = null
      stopsData.forEach((item) => {
        if (item.Stops.length > maxStopsLength) {
          maxStopsLength = item.Stops.length
          maxStopsRoute = item
        }
      })
      // 尋找另一方向的路線
      anotherDirection = stopsData.find((item) => {
        if (
          maxStopsRoute.SubRouteName.Zh_tw === item.SubRouteName.Zh_tw &&
          maxStopsRoute.Direction !== item.Direction
        ) {
          return true
        }
      })
      filteredStopsData = [maxStopsRoute, anotherDirection]
    }
    const [forward, backward] = filterDirection(filteredStopsData)
    filteredStopsData = {
      forward: forward[0],
      backward: backward[0]
    }
    state.routeName = routeName
    state.stopsOfRoute = filteredStopsData
    return filteredStopsData
  }

  // sorting callback for time array
  function generateSortingFn(stopsOfRoute, direction) {
    return (stopA, stopB) => {
      if (stopA.StopSequence && stopB.StopSequence) {
        return stopA.StopSequence - stopB.StopSequence
      }
      if (stopsOfRoute[direction]) {
        if (!stopA.StopSequence) {
          const stopAFound = stopsOfRoute[direction]?.Stops?.find(
            (item) => item.StopID === stopA.StopID
          )
          stopA.StopSequence = stopAFound?.StopSequence
        }
        if (!stopB.StopSequence) {
          const stopBFound = stopsOfRoute[direction]?.Stops?.find(
            (item) => item.StopID === stopB.StopID
          )
          stopB.StopSequence = stopBFound?.StopSequence
        }
        return stopA.StopSequence - stopB.StopSequence || 0
      }
      return 0
    }
  }

  // 取得指定[路線名稱]的公車動態最接近站牌資料
  async function fetchBusNearStop(routeName, city) {
    // 設定要 fetch 的網址
    let url = `RealTimeNearStop/City/${city}`
    if (!city) {
      url = `RealTimeNearStop/InterCity`
    }
    // 取得路線上的所有行駛中公車
    const res = await api.get(`${url}/${routeName}`)
    // 過濾路線名稱不一致的資料
    const busData = filterRouteName(routeName, stopsData)
    if (!busData && !busData[0]) {
      return
    }
    const { forwards, backwards } = filterDirection(busData)
    // console.log(busData)
    forwards.forEach((bus) => {
      addBusInfoToStop(bus, arrivalsInfo.forwards)
    })
    backwards.forEach((bus) => {
      addBusInfoToStop(bus, arrivalsInfo.backwards)
    })
  }

  async function addBusInfoToStop(bus, stopsList) {
    // console.log(bus, stopsList)
    const stop = stopsList.find((item) => item.StopUID === bus.StopUID)
    if (stop) {
      stop.HasBus = true
      stop.PlateNumb = bus.PlateNumb
      stop.Accessible = await fetchBusType(bus.PlateNumb, city)
    }
  }

  // 取得指定[縣市]的市區公車或公路客運車輛資料
  async function fetchBusType(plate, city) {
    let url = `Vehicle/City/${city}`
    if (!city) {
      url = 'Vehicle/InterCity'
    }
    const res = await api.get(url, {
      params: {
        $filter: `PlateNumb eq '${plate}'`
      }
    })
    const bus = stopsData[0]
    if (bus && bus.VehicleType > 0 && bus.VehicleType < 3) {
      return true
    }
    return false
  }

  const fetchNewArrivalsInfo = async () => {
    await fetchBusArrivalTime(routeName, city)
    // await fetchBusNearStop(routeName, city)
  }

  return { arrivalsInfo, fetchNewArrivalsInfo }
}
