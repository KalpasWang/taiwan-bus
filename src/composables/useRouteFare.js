import { ref } from 'vue'
import { api } from './api'
import { filterRouteName } from './useUtilities'

function useRouteFare(routeName, city) {
  let fareData = null
  const stages = ref([])
  const fareMap = ref([])

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

  // 取得所有計費站
  const mapStagesAndFare = () => {
    // 取得所有此路線的計費站
    fareData.forEach((fare) => {
      if (!fare.StageFares) return
      fare.StageFares.forEach((stage) => {
        const originID = stage.OriginStage.StopID
        const destinationID = stage.DestinationStage.StopID
        if (!stages.value.some((s) => s.StopID === originID)) {
          stages.value.push(stage.OriginStage)
        }
        if (!stages.value.some((s) => s.StopID === destinationID)) {
          stages.value.push(stage.DestinationStage)
        }
      })
    })
    stages.value.sort((a, b) => {
      return a.StopID - b.StopID
    })
    // 初始化 fareMap
    fareMap.value = Array.from(Array(stages.value.length), () =>
      Array(stages.value.length)
    )
    // 將所有區段的票價放入對應的票價表位置
    fareData.forEach((routeFare) => {
      if (!routeFare.StageFares) return
      routeFare.StageFares.forEach((stage) => {
        stage.Fares.forEach((fare) => {
          if (fare.Price === -1) return
          // FareName 範例：全票_不分時段_四排座
          const [ticket, time, seat] = fare.FareName.split('_')
          setFareMap(stage.OriginStage, stage.DesinationStage, {
            [seat]: { [ticket]: fare.Price }
          })
        })
      })
    })
  }

  // init
  const fetchData = async () => {
    await fetchRouteFare()
    mapStagesAndFare()
  }

  // 設定票價資訊到 fareMap 以便方便查詢
  const setFareMap = (origin, dest, fareInfo) => {}

  // 取得指定區間的票價資訊
  const getStageFare = (origin, destination) => {
    const stageFares = []
    fareData.forEach((fare) => {
      if (fare.StageFares) {
        fare.StageFares.forEach((stage) => {
          if (stage.OriginStage.StopName !== origin) return
          if (stage.DesinationStage.StopName !== destination) return
          if (stage.Fares.every((e) => e.Price === -1)) return
          stageFares.push({
            operator: findOperator(fare.OperatorID),
            fares: stage.Fares
          })
        })
      }
    })
    return stageFares
  }

  return { fareMap, stages, fetchData, getStageFare }
}

export default useRouteFare
