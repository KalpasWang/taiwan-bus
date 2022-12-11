import state from './state'
import { advancedBaseUrl, api } from '../api'

export default function useNearBy() {
  function watchNearBy(radius = 500) {
    checkGeolocation()
    watchUserGeolocation()
  }

  function checkGeolocation() {
    if (!navigator.geolocation) {
      throw new Error('瀏覽器不支援地理位置資訊，無法取得附近公車站位')
    }
  }

  function watchUserGeolocation(radius) {
    navigator.geolocation.watchPosition(async (position) => {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      await callApi(lat, lng, radius)
      const newStations = res.data.map((item) => {
        const d = haversine(
          { lat, lng },
          {
            lat: item.StationPosition.PositionLat,
            lng: item.StationPosition.PositionLon
          }
        )
        return { ...item, Distance: Math.round(d) }
      })
      newStations.sort((a, b) => a.Distance - b.Distance)
      state.nearByStations = newStations
    })
  }

  async function callApi(lat, lng, radius) {
    const res = await api.get('Station/NearBy', {
      baseUrl: advancedBaseUrl,
      params: {
        $top: 20,
        $spatialFilter: `nearby(${lat}, ${lng}, ${radius})`
      }
    })
    return res
  }

  return watchNearBy
}
