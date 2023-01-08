import { fetchStation } from '../api'

export function useStation() {
  async function getStationData(id, cityName) {
    await fetchStation(id, cityName)

    // state.station.PassThrough = []
    // const citys = getNearByCitys(cityName)
    // citys.unshift(cityName)
    // citys.forEach(async (city) => {
    //   const url = `StopOfRoute/City/${city}/PassThrough/Station/${stationId}`
    //   res = await api.get(url)
    //   // console.log(res.data)
    //   res.data.forEach((route) => {
    //     const stops = route.Stops
    //     route.finalStop = stops[stops.length - 1]
    //     if (
    //       !state.station.PassThrough.some(
    //         (el) => el.RouteName.Zh_tw === route.RouteName.Zh_tw
    //       )
    //     )
    //       state.station.PassThrough.push(route)
    //   })
    // })
  }

  return getStationData
}
