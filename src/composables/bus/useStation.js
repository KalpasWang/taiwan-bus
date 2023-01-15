import { state } from './state'
import { fetchRoutesPassGivenStation, fetchStation } from '../api'
import { getCityCode } from '../utilities'

export function useStation() {
  async function getStationAndRoutes(id, cityName) {
    if (
      state?.station?.StationID === id &&
      getCityCode(cityName) === state?.station?.StationUID.slice(0, 3)
    ) {
      return
    }

    try {
      state.isLoading = true
      state.hasError = false
      const [station, routes] = await Promise.all([
        fetchStation(id, cityName),
        fetchRoutesPassGivenStation(id, cityName)
      ])
      if (!station) {
        throw new Error('對不起，沒有這個站位')
      }
      state.station = station
      state.station.routes = routes
      state.city = cityName
    } catch (error) {
      state.hasError = true
      state.errorMsg = error.message
    } finally {
      state.isLoading = false
    }
  }

  return getStationAndRoutes
}
