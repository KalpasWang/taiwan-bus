import { describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/vue'
import L from 'leaflet'
import NearByStations from '@/views/NearByStations.vue'
import { router } from '@/router'
import { state, useNearByMap } from '../../../src/composables/bus'
import {
  mockUserPosition,
  mockNearbyResponse,
  mockUserPosition2,
  mockNearbyResponse2
} from '../../../src/composables/constants'
import { onMounted, ref } from 'vue'

const testComponent = {
  template: '<div id="map" ref="mapRef" data-testid="map"></div>',
  setup() {
    const mapRef = ref(null)
    onMounted(async () => {
      console.log('mapRef', mapRef.value)
      const { map, isMapReady, initMap, renderNearByMap } = useNearByMap(
        mapRef.value
      )
      await initMap()
      renderNearByMap()
    })
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
  it('當 user 位置改變會 rerender', () => {})
})
