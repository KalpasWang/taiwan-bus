import { ref } from 'vue'
import { fetchRouteFare, fetchStopsOfRoute } from '../api'
import { state } from './state'

export function useRouteFare(routeName, city) {
  let fareData = null
  const stages = ref([])
  const fareMap = ref([])

  // init
  async function init() {
    try {
      state.hasError = false
      fareData = await fetchRouteFare(routeName, city)
      await getStopsOrder()
      getAllStages()
      sortStages()
      setFareMap()
      sortFares()
    } catch (e) {
      state.hasError = true
      state.errorMsg = e.message || '對不起，發生錯誤'
    }
  }

  async function getStopsOrder() {
    if (!state.stopsOfRoute) {
      await fetchStopsOfRoute(routeName, city)
    }
  }

  // 取得所有此路線的計費站
  function getAllStages() {
    fareData.forEach((fare) => {
      if (!fare.StageFares) return
      fare.StageFares.forEach((stage) => {
        const origin = stage.OriginStage
        const destination = stage.DestinationStage
        if (stage.Fares.every((f) => f.Price === -1)) return
        if (getStageIndex(origin) < 0) {
          stages.value.push(origin)
        }
        if (getStageIndex(destination) < 0) {
          stages.value.push(destination)
        }
      })
    })
  }

  // 取得計費站在所有計費站中的索引
  function getStageIndex(stage) {
    return stages.value.findIndex((s) => s.StopID === stage.StopID)
  }

  // 計費站排序
  function sortStages() {
    stages.value.sort((a, b) => {
      const indexA = state.stopsOfRoute.forward.Stops.findIndex(
        (s) => s.StopName.Zh_tw === a.StopName
      )
      const indexB = state.stopsOfRoute.forward.Stops.findIndex(
        (s) => s.StopName.Zh_tw === b.StopName
      )
      return indexA - indexB
    })
  }

  // 設定好 fareMap 中的所有計費站票價資訊
  function setFareMap() {
    // 初始化 fareMap
    const len = stages.value.length
    fareMap.value = Array.from(Array(len), () => Array(len))
    // 將所有區段的票價放入對應的票價表位置
    fareData.forEach((routeFare) => {
      if (!routeFare.StageFares) return
      routeFare.StageFares.forEach((stage) => {
        stage.Fares.forEach((fare) => {
          if (fare.Price === -1) return
          saveFare(stage.OriginStage, stage.DestinationStage, fare)
        })
      })
    })
  }

  // 票種排序
  function sortFares() {
    fareMap.value.forEach((row) => {
      row.forEach((fares) => {
        if (!fares) return
        fares.forEach((seat) => {
          seat.tickets.sort((a, b) => {
            return a.name.localeCompare(b.name)
          })
        })
      })
    })
  }

  // 儲存票價資訊到 fareMap
  function saveFare(stage1, stage2, newFare) {
    // fareName 範例：全票_不分時段_四排座
    const [ticketType, time, seat] = newFare.FareName.split('_')
    let x = getStageIndex(stage1)
    let y = getStageIndex(stage2)
    if (x > y) {
      ;[x, y] = [y, x]
    }
    if (!fareMap.value[x][y]) fareMap.value[x][y] = []
    const savedFares = fareMap.value[x][y]
    const ticketObj = {
      name: ticketType,
      price: newFare.Price
    }
    // 檢查是否已存在此座位類型與票價
    const found = savedFares.find((f) => f.seat === seat)
    const isSameTicket = found?.tickets.some(
      (t) => t.name === ticketType && t.price === newFare.Price
    )
    if (found && !isSameTicket) {
      found.tickets.push(ticketObj)
    } else if (!found) {
      savedFares.push({
        seat,
        tickets: [ticketObj]
      })
    }
  }

  // 取得指定區間的票價資訊
  function getStageFare(stage1, stage2) {
    try {
      let x = getStageIndex(stage1)
      let y = getStageIndex(stage2)
      if (x > y) {
        ;[x, y] = [y, x]
      }
      if (fareMap.value.length === 0) {
        throw new Error('對不起，沒有此路線的票價資訊')
      }
      if (!fareMap.value[x][y]) return
      return JSON.parse(JSON.stringify(fareMap.value[x][y]))
    } catch (e) {
      state.hasError = true
      state.errorMsg = e.message || '對不起，發生錯誤'
    }
  }

  return { fareMap, stages, init, getStageFare }
}
