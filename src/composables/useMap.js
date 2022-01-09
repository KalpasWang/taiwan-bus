import { ref } from 'vue'
import L from 'leaflet'
import { busIcon } from './constant'

let routeLine = null
const markers = []
const map = ref({})

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

const addStationMarker = (item) => {
  const lon = item.StationPosition.PositionLon
  const lat = item.StationPosition.PositionLat
  const marker = L.marker([lat, lon], {
    icon: L.divIcon({
      className: 'map-marker',
      html: '<span class="marker-label">S</span>'
    })
  })
    .addTo(map.value)
    .bindPopup(`<h6 class="popup-name">${item.StationName.Zh_tw}</h6>`)

  marker.markerId = item.StationID
  marker.lng = lon
  marker.lat = lat
  markers.push(marker)
}

const addBusMarker = (item) => {
  const lon = item.BusPosition.PositionLon
  const lat = item.BusPosition.PositionLat
  const marker = L.marker([lat, lon], {
    icon: busIcon
  }).addTo(map.value)

  marker.markerId = item.PlateNumb
  marker.lng = lon
  marker.lat = lat
  markers.push(marker)
}

const triggerPopup = (markerId) => {
  const marker = markers.find((d) => d.markerId === markerId)

  map.value.flyTo([marker.lat, marker.lng], 16)
  marker.openPopup()
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

const mapInit = (element) => {
  map.value = L.map(element, {
    center: [25.03, 121.55],
    zoom: 10
  })

  L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }
  ).addTo(map.value)
}

const drawStationMarker = (station) => {
  clearMarkersAndRoute()
  addStationMarker(station.value)
  triggerPopup(station.value.StationID)
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
  drawStationMarker
}
