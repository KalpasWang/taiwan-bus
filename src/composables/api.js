import axios from 'axios'
import jsSHA from 'jssha'
import state from './bus/state'
import { filterRouteName, filterSubRoutes } from './utilities'

export const apiTop30 = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Bus/',
  headers: getAuthorizationHeader(),
  params: {
    $top: 30,
    $format: 'JSON'
  }
})

export const api = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Bus/',
  headers: getAuthorizationHeader(),
  params: {
    $format: 'JSON'
  }
})

// 取得指定[縣市],[路線名稱]的市區公車或公路客運路線站序資料
export const fetchStopsOfRoute = async (routeName, city) => {
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

function getAuthorizationHeader() {
  let AppID = 'd0a241f95bef45cb9ab5f5cb1ec1bdfb'
  let AppKey = 'PQaTMptO5MxMu1gtJpVhGwezMaI'
  let GMTString = new Date().toGMTString()
  let ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  let HMAC = ShaObj.getHMAC('B64')
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"'
  return {
    Authorization: Authorization,
    'X-Date': GMTString
  }
}
