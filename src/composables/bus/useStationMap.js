import { ref } from 'vue'
import L from 'leaflet'
import { getBearingLabel } from '@/composables/utilities'
import { state } from './state'

export const useStationMap = () => {
  const map = ref(null)
  const isMapReady = ref(false)

  const initMap = (element) => {
    isMapReady.value = false
    map.value = null
    return new Promise((resolve) => {
      map.value = L.map(element, {
        center: [23.7, 121],
        zoom: 7
      })
      // 把地圖圖資加到 map
      const layers = L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        {
          maxZoom: 20,
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }
      ).addTo(map.value)
      // 圖資讀取完成則 resolve
      layers.on('load', () => {
        isMapReady.value = true
        resolve()
      })
    })
  }

  const renderStationMap = () => {
    if (isMapReady.value && state.station?.StationPosition?.PositionLat) {
      const position = {
        lat: state.station.StationPosition.PositionLat,
        lng: state.station.StationPosition.PositionLon
      }
      map.value.flyTo(position, 15)
      clearMarkersAndRoute()
      addStationMarker(state.station)
    }
  }

  const clearMarkersAndRoute = () => {
    map.value.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.value.removeLayer(layer)
      }
    })
  }

  const addStationMarker = (station) => {
    const lng = station.StationPosition.PositionLon
    const lat = station.StationPosition.PositionLat
    const marker = L.marker([lat, lng], {
      icon: L.divIcon({
        className: 'map-marker',
        html: '<span class="marker-label">S</span>'
      })
    })
      .addTo(map.value)
      .bindPopup(
        `<h6 class="popup-name">
          ${station.StationName.Zh_tw}
          (${getBearingLabel(station.Bearing)})
        </h6>`
      )
  }

  return { map, isMapReady, initMap, renderStationMap }
}
