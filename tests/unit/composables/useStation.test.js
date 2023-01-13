import { describe, expect, it, vi } from 'vitest'
import { state, useStation } from '@/composables/bus'
import {
  mockCityStationData,
  mockCityPassThroughRoutes,
  mockIntercityStation,
  mockIntercityPassThroughRoutes
} from '@/composables/constants'
import { getCityCode } from '../../../src/composables/utilities'
import { api } from '../../../src/composables/api'

const cityStationId = '129575'
const city = 'HualienCounty'
const intercityStationId = '102582'

describe('useStations function', () => {
  it('市區公車的 station 可以運作', async () => {
    const getStationAndRoutes = useStation()

    api.get = vi
      .fn()
      .mockResolvedValueOnce({ data: mockCityStationData })
      .mockResolvedValueOnce({ data: mockCityPassThroughRoutes })
    await getStationAndRoutes(cityStationId, city)

    expect(state.station.LocationCityCode).toBe(getCityCode(city))
    expect(state.station.StationID).toBe(cityStationId)
    expect(Array.isArray(state.station.routes)).toBe(true)
    expect(state.station.routes.length).toBe(2)
  })

  it('公路客運的 station 可以運作', async () => {
    const getStationAndRoutes = useStation()

    api.get = vi
      .fn()
      .mockResolvedValueOnce({ data: mockIntercityStation })
      .mockResolvedValueOnce({ data: mockIntercityPassThroughRoutes })
    await getStationAndRoutes(intercityStationId)

    expect(state.station.StationID).toBe(intercityStationId)
    expect(Array.isArray(state.station.routes)).toBe(true)
    expect(state.station.routes.length).toBe(20)
  })

  it('先檢查是否已有此站位資料，若是無才會 call api', async () => {
    // 市區公車
    api.get = vi
      .fn()
      .mockResolvedValueOnce({ data: mockCityStationData })
      .mockResolvedValueOnce({ data: mockCityPassThroughRoutes })
    const getStationAndRoutes = useStation()

    await getStationAndRoutes(cityStationId, city)
    expect(api.get).toBeCalledTimes(2)
    api.get = vi.fn()
    await getStationAndRoutes(cityStationId, city)
    expect(api.get).not.toBeCalled()

    // 公路客運
    api.get = vi
      .fn()
      .mockResolvedValueOnce({ data: mockIntercityStation })
      .mockResolvedValueOnce({ data: mockIntercityPassThroughRoutes })

    await getStationAndRoutes(intercityStationId)
    expect(api.get).toBeCalledTimes(2)
    api.get = vi.fn()
    await getStationAndRoutes(intercityStationId)
    expect(api.get).not.toBeCalled()
  })
})
