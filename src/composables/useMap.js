import { ref } from 'vue'
import L from 'leaflet'

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

const clearMarkersAndRoute = () => {
  routeLine = null
  markers.length = 0
  map.value.eachLayer((layer) => {
    if (layer instanceof L.Marker || layer instanceof L.Polyline) {
      map.value.removeLayer(layer)
    }
  })
}

const triggerPopup = (markerId) => {
  const marker = markers.find((d) => d.markerId === markerId)

  map.value.flyTo([marker.lat, marker.lng], 15)
  marker.openPopup()
}

const mapInit = (element) => {
  map.value = L.map(element, {
    center: [25.03, 121.55],
    zoom: 10
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '<a target="_blank" href="https://www.openstreetmap.org/">© OpenStreetMap 貢獻者</a>',
    maxZoom: 19
  }).addTo(map.value)
  // L.tileLayer(
  // 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  // {
  // maxZoom: 20,
  // attribution:
  // '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  // }
  // ).addTo(map.value)
}

const drawStopsPathAndMarkers = (stops) => {
  if (stops && stops.length > 0) {
    // setMapPosition(stops[0].StopPosition)
    const latlngs = stops.map((stop) => {
      const lng = stop.StopPosition.PositionLon
      const lat = stop.StopPosition.PositionLat
      return [lat, lng]
    })
    clearMarkersAndRoute()
    routeLine = L.polyline(latlngs, { color: 'blue' }).addTo(map.value)
    map.value.fitBounds(routeLine.getBounds())
    stops.forEach((el, i) => addMarker(el, i))
  }
}

export default {
  triggerPopup,
  mapInit,
  drawStopsPathAndMarkers
}
