import { beforeAll, describe, expect, it, vi } from 'vitest'
import { state, useStation } from '@/composables/bus'
import {
  mockCityStationData,
  mockCityPassThroughRoutes,
  mockIntercityStation,
  mockIntercityPassThroughRoutes
} from '@/composables/constants'
import { getCityCode } from '../../../src/composables/utilities'
import { api } from '../../../src/composables/api'

describe('useStations function', () => {
  beforeAll(() => {})

  it('市區公車的 station 可以運作', async () => {
    const getStationAndRoutes = useStation()
    const id = '129575'
    const city = 'HualienCounty'

    api.get = vi
      .fn()
      .mockResolvedValueOnce({ data: mockCityStationData })
      .mockResolvedValueOnce({ data: mockCityPassThroughRoutes })
    await getStationAndRoutes(id, city)

    expect(state.station.LocationCityCode).toBe(getCityCode(city))
    expect(state.station.StationID).toBe(id)
    expect(Array.isArray(state.station.routes)).toBe(true)
    expect(state.station.routes.length).toBe(2)
  })

  it('公路客運的 station 可以運作', async () => {
    const getStationAndRoutes = useStation()
    const id = '102582'

    api.get = vi
      .fn()
      .mockResolvedValueOnce({ data: mockIntercityStation })
      .mockResolvedValueOnce({ data: mockIntercityPassThroughRoutes })
    await getStationAndRoutes(id)

    expect(state.station.StationID).toBe(id)
    expect(Array.isArray(state.station.routes)).toBe(true)
    expect(state.station.routes.length).toBe(20)
  })
})
