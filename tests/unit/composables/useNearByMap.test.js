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

let mapTest, isMapReadyTest

const testComponent = {
  template: '<div id="map" data-testid="map">test</div>',
  setup() {
    const { map, isMapReady, initMap, renderNearByMap } = useNearByMap('map')
    mapTest = map
    isMapReadyTest = isMapReady
    initMap()
    renderNearByMap()
  }
}

// vi.mock('leaflet')

describe('useNearByMap function', () => {
  it('init map', async () => {
    document.body.innerHTML = '<div id="map" data-testid="map"></div>'
    const { map, isMapReady, initMap, renderNearByMap } = useNearByMap('map')
    await initMap()
    renderNearByMap()
    state.userPosition = mockUserPosition
    state.nearByStations = mockNearbyResponse
    expect(isMapReady.value).toBeFalsy()
    await waitFor(() => {
      // console.log(isMapReady.value)
      expect(isMapReady.value).toBeTruthy()
      expect(screen.getByTestId('map')).not.toBeEmptyDOMElement()
    })
  })
  it('當 user 位置改變會 rerender', () => {})
})
