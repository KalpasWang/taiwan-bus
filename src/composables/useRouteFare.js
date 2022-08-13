import { ref } from 'vue'
import { api } from './api'
import { filterRouteName, filterDirection } from './useUtilities'

function useRouteFare(routeName, city) {
  const fareMap = ref(null)

  // 取得指定[路線名稱]的公車/客運路線票價資料
  const fetchRouteFare = async () => {
    // 設定要 fetch 的網址
    let url = `RouteFare/City/${city}`
    if (!city) {
      url = 'RouteFare/InterCity'
    }
    const res = await api.get(`${url}/${routeName}`)
    fareMap.value = filterRouteName(routeName, res.data)
  }

  return { fareMap, fetchRouteFare }
}

export default useRouteFare
