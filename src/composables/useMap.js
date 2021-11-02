import { ref, onMounted } from 'vue'
import L from 'leaflet'
// import { markerIcon } from './constant'

const markers = []
const map = ref({})

const addMarker = (item) => {
  const lon = item.StopPosition.PositionLon
  const lat = item.StopPosition.PositionLat
  const marker = L.marker([lat, lon])
    .addTo(map.value)
    .bindPopup(`<h3 class="popup-name">${item.StopName.Zh_tw}</h3>`)

  marker.markerId = item.StopUID
  marker.lng = lon
  marker.lat = lat
  markers.push(marker)
}

const clearMarkers = () => {
  markers.length = 0
  map.value.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.value.removeLayer(layer)
    }
  })
}

const triggerPopup = (markerId) => {
  const marker = markers.find((d) => d.markerId === markerId)

  map.value.flyTo([marker.lat, marker.lng], 15)
  marker.openPopup()
}

const setMapPosition = (pos) => {
  map.value.panTo([pos.PositionLat, pos.PositionLon])
}

const mapInit = (element) => {
  onMounted(() => {
    console.log('mounted')
    map.value = L.map(element, {
      center: [25.03, 121.55],
      zoom: 14
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '<a target="_blank" href="https://www.openstreetmap.org/">© OpenStreetMap 貢獻者</a>',
      maxZoom: 18
    }).addTo(map.value)
  })
}

const drawStopsPathAndMarkers = (stops) => {
  console.log('stops', stops)
  if (stops && stops.length > 0) {
    // setMapPosition(stops[0].StopPosition)
    const latlngs = stops.map((stop) => {
      const lng = stop.StopPosition.PositionLon
      const lat = stop.StopPosition.PositionLat
      return [lat, lng]
    })
    const polyline = L.polyline(latlngs, { color: 'blue' }).addTo(map.value)
    map.value.fitBounds(polyline.getBounds())
    clearMarkers()
    stops.forEach((el) => addMarker(el))
  }
}

export default {
  triggerPopup,
  mapInit,
  drawStopsPathAndMarkers
}
