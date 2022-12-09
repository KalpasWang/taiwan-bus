import axios from 'axios'
import qs from 'qs'
import state from './bus/state'
import { filterRouteName, filterSubRoutes } from './utilities'

let token
const params = qs.stringify({
  grant_type: 'client_credentials',
  client_id: 'wf6212-8e3fc5d4-bd75-4367',
  client_secret: 'dd7d34c9-b960-4126-9db6-3ec1311d354b'
})

export const api = axios.create({
  baseURL: 'https://tdx.transportdata.tw/api/basic/v2/Bus',
  params: {
    $format: 'JSON'
  }
})

export const top20 = { params: { $top: 20 } }
export const advancedBaseUrl =
  'https://tdx.transportdata.tw/api/advanced/v2/Bus'

// request 攔截器，設定帶入token
api.interceptors.request.use(
  async (config) => {
    if (!token) {
      token = await setToken()
    }
    config.headers = {
      authorization: 'Bearer ' + token?.access_token
    }
    return config
  },
  (error) => Promise.reject(error)
)

// response 攔截器，api call 403 fail 時 重新取得 token
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    console.log(error.config)
    const originalRequest = error.config
    if (error?.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true
      token = await setToken()
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + token?.access_token
      return api(originalRequest)
    }
    return Promise.reject(error)
  }
)

async function setToken() {
  try {
    const res = await axios({
      method: 'POST',
      url: 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: params
    })
    return res.data
  } catch (error) {
    throw new Error(error.message)
  }
}

/**
 * 取得指定[縣市],[路線名稱]的市區公車或公路客運路線站序資料
 * @param  {string} routeName
 * @param  {string} [city] - 若沒有 city 表示位客運路線
 */
export async function fetchStopsOfRoute(routeName, city) {
  // 設定要 fetch 的網址
  let url = `StopOfRoute/City/${city}`
  if (!city) {
    url = 'StopOfRoute/InterCity'
  }
  // 取得站序資料
  const res = await api.get(`${url}/${routeName}`)
  let stopsData = filterRouteName(routeName, res.data)
  if (!city) {
    stopsData = filterSubRoutes(routeName, stopsData)
  }
  state.routeName = routeName
  state.stopsOfRoute = stopsData
}

/**
 * 取得指定[縣市],[路線名稱]的市區公車或公路客運路線資料
 * @param  {string} routeName
 * @param  {string} [city] - 若沒有 city 表示位客運路線
 */
export async function fetchTop20Routes(routeName, city, skip) {
  // 設定要 fetch 的網址
  let url = `Route/City/${city}`
  if (!city) {
    url = 'Route/InterCity'
  }
  const res = await api.get(`${url}/${routeName}`, {
    params: {
      $top: 20,
      $skip: `${skip || 0}`
    }
  })
  // console.log(res.data)
  return res.data
}
