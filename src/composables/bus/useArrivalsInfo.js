import { reactive } from 'vue'
import { api, fetchEstimatedTimeOfArrival, fetchStopsOfRoute } from '../api'
import { state } from './state'
// import { filterRouteName } from './utilities'

/**
 * 使用可以取得公車預估到站資料的函式
 * @param  {string} routeName - 路線名稱
 * @param  {string} city - 室內公車須輸入縣市名稱，如果是客運就不用傳入參數
 */
export function useArrivalsInfo(routeName, city) {
  const arrivalsInfo = reactive({
    forwards: [],
    backwards: []
  })

  // 取得指定[路線名稱]與[縣市]的室內公車或公路客運預估到站資料
  async function fetchBusArrivalTime(routeName, city) {
    // 取得預估時間資料
    const [timeForward, timeBackward] = await fetchEstimatedTimeOfArrival(
      routeName,
      city
    )
    // 取得站序資料
    const stopsOfRoute = await fetchStopsOfRoute(routeName, city)
    // console.log(timeForward.length)
    // console.log(timeBackward.length)
    // console.log(stopsOfRoute.forward.Stops.length)
    // console.log(stopsOfRoute.backward.Stops.length)
    // 對每一個站牌做排序
    timeForward.sort(generateSortingFn(stopsOfRoute, 'forward'))
    timeBackward.sort(generateSortingFn(stopsOfRoute, 'backward'))
    // timeForward.forEach((item) => console.log(item.StopSequence))
    // console.log(timeForward[24])
    // console.log(timeForward[25])
    // set state
    state.arrivalsInfo.forward = timeForward
    state.arrivalsInfo.backward = timeBackward
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
    const busData = filterRouteName(routeName, res.data)
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
    const bus = res.data[0]
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
