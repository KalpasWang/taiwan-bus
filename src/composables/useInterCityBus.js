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

// 取得有經過指定[縣市]的公車資料
const fetchRoutesByCity = async (city) => {
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
}

// 取得有指定[路線名稱]的公車資料
const fetchRoutesByRouteName = async (routeName, useRoutesList) => {
  if (useRoutesList) {
    state.routesList = state.routesList.filter((r) =>
      r.RouteName.Zh_tw.includes(routeName)
    )
  } else {
    const url = `Route/InterCity/${routeName}?$format=JSON`
    const res = await api.get(url)
    state.routesList = res.data
  }
}

// 取得指定[縣市與路線名稱]的公車資料
const fetchRoutesByCityAndRouteName = async (city, routeName) => {
  try {
    state.error = null
    state.pending = true
    if (city && !routeName) {
      await fetchRoutesByCity(city)
    } else if (!city && routeName) {
      await fetchRoutesByRouteName(routeName)
    } else if (city && routeName) {
      await fetchRoutesByCity(city)
      fetchRoutesByRouteName(routeName)
    }
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
