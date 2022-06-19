import { ref } from 'vue'
import L from 'leaflet'
import { busIcon } from './constant'
import { getBearingLabel, delay } from '@/composables/useUtilities'

let routeLine = null
const markers = []
const map = ref(null)

const addMarker = (item, idx) => {
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

const addStationMarker = (station) => {
  const lng = station.value.StationPosition.PositionLon
  const lat = station.value.StationPosition.PositionLat
  const marker = L.marker([lat, lng], {
    icon: L.divIcon({
      className: 'map-marker',
      html: '<span class="marker-label">S</span>'
    })
  })
    .addTo(map.value)
    .bindPopup(
      `<h6 class="popup-name">${
        station.value.StationName.Zh_tw
      }(${getBearingLabel(station.value.Bearing)})</h6>`
    )

  marker.markerId = station.value.StationID
  marker.lng = lng
  marker.lat = lat
  markers.push(marker)
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
        `<h6 class="popup-name">${item.StationName.Zh_tw}(${getBearingLabel(
          item.Bearing
        )})</h6>`
      )

    marker.markerId = item.StationID
    marker.lng = lng
    marker.lat = lat
    markers.push(marker)
  }
}

const addUserMarker = (user) => {
  const lng = user.lng
  const lat = user.lat
  const marker = L.marker([lat, lng], {
    icon: L.divIcon({
      className: 'user-marker'
    })
  }).addTo(map.value)
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

// const triggerPopup = (markerId) => {
// const marker = markers.find((d) => d.markerId === markerId)

// map.value.flyTo([marker.lat, marker.lng], 16)
// marker.openPopup()
// }

const clearMarkersAndRoute = () => {
  routeLine = null
  markers.length = 0
  map.value.eachLayer((layer) => {
    if (layer instanceof L.Marker || layer instanceof L.Polyline) {
      // console.log(layer)
      map.value.removeLayer(layer)
    }
  })
}

const mapInit = (element) => {
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
      resolve()
    })
  })
}

const flyEnd = () => {
  return new Promise((resolve) => {
    map.value.on('zoomend', () => {
      resolve()
    })
  })
}

const drawStationMarker = (station) => {
  clearMarkersAndRoute()
  delay()
    .then(() => {
      map.value.flyTo(
        [
          station.value.StationPosition.PositionLat,
          station.value.StationPosition.PositionLon
        ],
        16
      )
      return flyEnd()
    })
    .then(() => {
      addStationMarker(station)
    })
}

const drawNearByMarkers = (user, stations) => {
  clearMarkersAndRoute()
  delay()
    .then(() => {
      map.value.flyTo([user.lat, user.lng], 16)
      return flyEnd()
    })
    .then(() => {
      addUserMarker(user)
      addStationsMarker(stations)
    })
}

const redrawNearByMarkers = (user, stations) => {
  clearMarkersAndRoute()
  addUserMarker(user)
  addStationsMarker(stations)
}

const drawStopsPathAndMarkers = (stops, busList, shape) => {
  let latlngList
  if (!shape) {
    latlngList = stops.map((stop) => {
      const lng = stop.StopPosition.PositionLon
      const lat = stop.StopPosition.PositionLat
      return [lat, lng]
    })
  } else {
    latlngList = shape
  }
  clearMarkersAndRoute()
  routeLine = L.polyline(latlngList, { color: '#fcd42c' }).addTo(map.value)
  map.value.flyToBounds(routeLine.getBounds())

  stops.forEach((el, i) => addMarker(el, i))
  busList.forEach((el) => addBusMarker(el))
}

export default {
  mapInit,
  drawStopsPathAndMarkers,
  addUserMarker,
  drawStationMarker,
  drawNearByMarkers,
  redrawNearByMarkers
}
