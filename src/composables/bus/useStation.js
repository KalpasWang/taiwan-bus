import { fetchStation } from '../api'

export function useStation() {
  async function getStationData(id, city) {
    await fetchStation(id, city)
    state.station.PassThrough = []
    const citys = getNearByCitys(city)
    citys.unshift(city)
    citys.forEach(async (thisCity) => {
      const url = `StopOfRoute/City/${thisCity}/PassThrough/Station/${stationId}`
      res = await api.get(url)
      // console.log(res.data)
      res.data.forEach((route) => {
        const stops = route.Stops
        route.finalStop = stops[stops.length - 1]
        if (
          !state.station.PassThrough.some(
            (el) => el.RouteName.Zh_tw === route.RouteName.Zh_tw
          )
        )
          state.station.PassThrough.push(route)
      })
    })
  }

  return getStationData
}
