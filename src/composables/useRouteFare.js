import { ref } from 'vue'
import { api } from './api'
import { filterRouteName } from './useUtilities'

function useRouteFare(routeName, city) {
  let fareData = null
  const stages = ref([])
  const fareMap = ref([])

  // 取得計費站在所有計費站中的索引
  const getStageIndex = (stage) => {
    return stages.value.findIndex((s) => s.StopID === stage.StopID)
  }

  // 取得指定[路線名稱]的公車/客運路線票價資料
  const fetchRouteFare = async () => {
    // 設定要 fetch 的網址
    let url = `RouteFare/City/${city}`
    if (!city) {
      url = 'RouteFare/InterCity'
    }
    const res = await api.get(`${url}/${routeName}`)
    fareData = filterRouteName(routeName, res.data).filter(
      (route) => route.RouteName === route.SubRouteName
    )
    console.log(fareData)
  }

  // 取得所有此路線的計費站
  const getAllStages = () => {
    fareData.forEach((fare) => {
      if (!fare.StageFares) return
      fare.StageFares.forEach((stage) => {
        const origin = stage.OriginStage
        const destination = stage.DestinationStage
        if (getStageIndex(origin) < 0) {
          stages.value.push(origin)
        }
        if (getStageIndex(destination) < 0) {
          stages.value.push(destination)
        }
      })
    })
    stages.value.sort((a, b) => {
      return a.StopID - b.StopID
    })
  }

  // 設定好 fareMap 中的所有計費站票價資訊
  const setFareMap = () => {
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
    sortFares()
  }

  // 整理票種
  const sortFares = () => {
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

  // init
  const init = async () => {
    await fetchRouteFare()
    getAllStages()
    setFareMap()
  }

  // 儲存票價資訊到 fareMap
  const saveFare = (stage1, stage2, newFare) => {
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
  const getStageFare = (stage1, stage2) => {
    let x = getStageIndex(stage1)
    let y = getStageIndex(stage2)
    if (x > y) {
      ;[x, y] = [y, x]
    }
    if (!fareMap.value[x][y]) return
    return JSON.parse(JSON.stringify(fareMap.value[x][y]))
  }

  return { fareMap, stages, init, getStageFare }
}

export default useRouteFare
