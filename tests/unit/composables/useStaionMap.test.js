import { describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/vue'
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import bus from '../../../src/composables/bus'
import {
  mockCityStationData,
  mockCityPassThroughRoutes
} from '../../../src/composables/constants'

let hasErrors = false

const testComponent = {
  template: '<div id="map" ref="mapRef" data-testid="map"></div>',
  setup() {
    const mapRef = ref(null)
    const { map, isMapReady, initMap, renderStationMap } = bus.useStationMap()
    onMounted(async () => {
      try {
        await initMap(mapRef.value)
        renderStationMap()
      } catch (error) {
        hasErrors = true
      }
    })
    return {
      mapRef
    }
  }
}

describe('useStationMap function', () => {
  it('init map', async () => {
    bus.state.station = mockCityStationData
    bus.state.station.routes = mockCityPassThroughRoutes
    render(testComponent)
    await waitFor(() => {
      expect(hasErrors).toBeFalsy()
      expect(screen.getByTestId('map')).not.toBeEmptyDOMElement()
    })
  })

  it('當 initMap 發生錯誤會 reject', async () => {
    L.map = vi.fn()
    render(testComponent)
    await waitFor(() => {
      expect(hasErrors).toBeTruthy()
    })
  })
})
