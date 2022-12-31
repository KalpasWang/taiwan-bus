import { ref, watchEffect } from 'vue'
import L from 'leaflet'
import { state } from './state'
import { getBearingLabel } from '../utilities'

export const useNearByMap = (element) => {
  const map = ref(null)
  const isMapReady = ref(false)

  const initMap = () => {
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
        console.log('map is ready')
        resolve()
      })
    })
  }

  const renderNearByMap = () => {
    watchEffect(() => {
      if (isMapReady.value && state.userPosition.lat) {
        map.value.flyTo(state.userPosition, 15)
        clearMarkersAndRoute()
        addStationsMarker(state.nearByStations)
        addUserMarker(state.userPosition)
      }
    })
  }

  const clearMarkersAndRoute = () => {
    map.value.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.value.removeLayer(layer)
      }
    })
  }

  const addUserMarker = (user) => {
    const lng = user.lng
    const lat = user.lat
    L.marker([lat, lng], {
      icon: L.divIcon({
        className: 'user-marker'
      })
    }).addTo(map.value)
  }

  const addStationsMarker = (list) => {
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      const lng = item.StationPosition.PositionLon
      const lat = item.StationPosition.PositionLat
      const marker = L.marker([lat, lng], {
        icon: L.divIcon({
          className: 'map-marker',
          html: '<span class="marker-label">S</span>'
        })
      })
        .addTo(map.value)
        .bindPopup(
          `<h6 class="popup-name">
            ${item.StationName.Zh_tw}(${getBearingLabel(item.Bearing)})
          </h6>`
        )
    }
  }

  return { map, isMapReady, initMap, renderNearByMap }
}
