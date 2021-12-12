import axios from 'axios'
import jsSHA from 'jssha'

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
