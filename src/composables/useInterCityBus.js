import { reactive, readonly, watchEffect } from 'vue'
import api from './api'
import { citys } from './constant'

const state = reactive({
  citysList: citys,
  selectedCity: '',
  selectedRouteID: '',
  selectedRouteName: '',
  routesList: [],
  pending: false,
  error: null
})

/**
 * fetch 函式
 */

// 取得指定[縣市]的公車動態定時資料
const fetchRoutesByCityAndRouteName = async (city, routeName) => {
  try {
    state.error = null
    state.pending = true
    const cityItem = state.citysList.find((c) => c.City === city)
    const url = 'StopOfRoute/InterCity'
    const res = await api.get(url, {
      params: {
        $filter: `Stops/any(d:d/LocationCityCode eq '${cityItem.CityCode}')`,
        $format: 'JSON'
      }
    })
    state.routesList = []
    res.data.forEach((item, idx, arr) => {
      const i = arr.findIndex((el) => el.RouteUID === item.RouteUID)
      if (i === idx) {
        state.routesList.push(item)
      }
    })
    state.pending = false
  } catch (error) {
    state.error = error.message
    state.pending = false
  }
}

export default {
  state: readonly(state),
  fetchRoutesByCityAndRouteName
}
