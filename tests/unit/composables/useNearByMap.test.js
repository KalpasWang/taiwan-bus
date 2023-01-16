import { describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/vue'
import L from 'leaflet'
import { state, useNearByMap } from '../../../src/composables/bus'
import {
  mockUserPosition,
  mockNearbyResponse,
  mockUserPosition2,
  mockNearbyResponse2
} from '../../../src/composables/constants'
import { onMounted, ref, watch } from 'vue'
import { delay } from '../../../src/composables/utilities'

let rerender = 0
let hasErrors = false

const testComponent = {
  template: '<div id="map" ref="mapRef" data-testid="map"></div>',
  setup() {
    const mapRef = ref(null)
    const { map, isMapReady, initMap, renderNearByMap } = useNearByMap()
    onMounted(async () => {
      try {
        await initMap(mapRef.value)
        renderNearByMap()
      } catch (error) {
        hasErrors = true
      }
    })
    watch(
      () => state.userPosition,
      () => {
        rerender++
        renderNearByMap()
      }
    )
    return {
      mapRef
    }
  }
}

describe('useNearByMap function', () => {
  it('init map', async () => {
    state.userPosition = mockUserPosition
    state.nearByStations = mockNearbyResponse
    render(testComponent)
    await waitFor(() => {
      expect(screen.getByTestId('map')).not.toBeEmptyDOMElement()
    })
  })

  it('當 user 位置改變 map 會 rerender', async () => {
    state.userPosition = mockUserPosition
    state.nearByStations = mockNearbyResponse
    render(testComponent)
    expect(rerender).toBe(0)
    await delay(500)
    state.userPosition = mockUserPosition2
    state.nearByStations = mockNearbyResponse2
    await waitFor(() => {
      expect(rerender).toBe(1)
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
