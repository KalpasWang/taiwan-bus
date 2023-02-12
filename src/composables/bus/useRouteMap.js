import { ref } from 'vue'
import L from 'leaflet'
import { busIcon } from '../constants'
import { mapUrl } from '../api'

export const useRouteMap = (element) => {
  const map = ref(null)
  const isMapReady = ref(false)
  const markers = []
  let routeLine = null

  const initMap = () => {
    return new Promise((resolve) => {
      map.value = L.map(element, {
        center: [23.7, 121],
        zoom: 7
      })
      // 把地圖圖資加到 map
      const layers = L.tileLayer(mapUrl, {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      }).addTo(map.value)
      // 圖資讀取完成則 resolve
      layers.on('load', () => {
        resolve()
      })
    })
  }

  const renderRouteMap = (state) => {
    let latlngList
    const { stops, busList, shape } = state
    if (!shape) {
      latlngList = stops.map((stop) => {
        const lng = stop.StopPosition.PositionLon
        const lat = stop.StopPosition.PositionLat
        return [lat, lng]
      })
    } else {
      latlngList = shape
    }
    // console.log('update')
    clearMarkersAndRoute()
    stops.forEach((el, i) => addStopMarker(el, i))
    busList.forEach((el) => addBusMarker(el))
    routeLine = L.polyline(latlngList, { color: '#fcd42c' }).addTo(map.value)
    if (!isMapReady.value) {
      isMapReady.value = true
      map.value.flyToBounds(routeLine.getBounds())
    }
  }

  const clearMarkersAndRoute = () => {
    routeLine = null
    markers.length = 0
    map.value.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.value.removeLayer(layer)
      }
    })
  }

  const addBusMarker = (item) => {
    const lon = item.BusPosition.PositionLon
    const lat = item.BusPosition.PositionLat
    const marker = L.marker([lat, lon], {
      icon: busIcon
    })
      .addTo(map.value)
      .bindPopup(`<h6 class="popup-name">${item.PlateNumb}</h6>`)
    marker.markerId = item.PlateNumb
    marker.lng = lon
    marker.lat = lat
    markers.push(marker)
  }

  const addStopMarker = (item, idx) => {
    const lon = item.StopPosition.PositionLon
    const lat = item.StopPosition.PositionLat
    const marker = L.marker([lat, lon], {
      icon: L.divIcon({
        className: 'map-marker',
        html: `<span class="marker-label">${idx + 1}</span>`
      })
    })
      .addTo(map.value)
      .bindPopup(`<h6 class="popup-name">${item.StopName.Zh_tw}</h6>`)
    marker.markerId = item.StopUID
    marker.lng = lon
    marker.lat = lat
    markers.push(marker)
  }

  return { map, isMapReady, initMap, isMapReady, renderRouteMap }
}
