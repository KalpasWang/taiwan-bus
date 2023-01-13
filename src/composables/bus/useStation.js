import { state } from './state'
import { fetchRoutesPassGivenStation, fetchStation } from '../api'
import { getCityCode } from '../utilities'

export function useStation() {
  async function getStationAndRoutes(id, cityName) {
    if (
      state?.station?.StationID === id &&
      getCityCode(cityName) === state?.station?.LocationCityCode
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
      state.station = station
      state.station.routes = routes
    } catch (error) {
      state.hasError = true
      state.errorMsg = error.message
    } finally {
      state.isLoading = false
    }
  }

  return getStationAndRoutes
}
