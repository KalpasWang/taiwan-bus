import { state } from './state'
import { fetchRoutesPassGivenStation, fetchStation } from '../api'

export function useStation() {
  async function getStationAndRoutes(id, cityName) {
    const station = await fetchStation(id, cityName)
    state.station = station
    const routes = await fetchRoutesPassGivenStation(id, cityName)
    state.station.routes = routes
  }

  return getStationAndRoutes
}
