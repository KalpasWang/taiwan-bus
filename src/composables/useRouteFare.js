import { ref } from 'vue'
import { api } from './api'
import { filterRouteName } from './useUtilities'

function useRouteFare(routeName, city) {
  let fareData = null
  let operators = []
  const stages = ref([])
  const fareMap = ref([])

  // 取得所有客運營運業者資料
  const fetchOperators = async () => {
    const res = await api.get('Operator/InterCity')
    operators = res.data
  }

  // 查詢業者名稱
  const findOperator = (id) => {
    const operator = operators.find((operator) => operator.OperatorID === id)
    return operator.OperatorName.Zh_tw
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
  }

  // 取得所有計費站
  const mapStagesAndFare = () => {
    fareData.forEach((fare) => {
      if (fare.StageFares) {
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
      }
    })
    stages.value.sort((a, b) => {
      return a.StopID - b.StopID
    })
  }

  // init
  const fetchData = async () => {
    await Promise.all([fetchOperators(), fetchRouteFare()])
    mapStagesAndFare()
  }

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
