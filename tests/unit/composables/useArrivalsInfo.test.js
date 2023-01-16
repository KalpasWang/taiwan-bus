import { describe, expect, it, vi } from 'vitest'
import { state, useArrivalsInfo } from '@/composables/bus'
import {
  mockCityStationData,
  mockCityPassThroughRoutes,
  mockIntercityStation,
  mockIntercityPassThroughRoutes
} from '@/composables/constants'
import { getCityCode } from '../../../src/composables/utilities'
import { api } from '../../../src/composables/api'

const cityRouteName = '綠1'
const city = 'Taipei'
const intercityRouteName = '0968'
const oneDirectionRouteName = '1123'

describe('useStations function', () => {
  it('可以取得市區公車的預估到站時間資料', async () => {
    const fetchNewArrivalsInfo = useArrivalsInfo()

    api.get = vi
      .fn()
      .mockResolvedValueOnce({ data: mockCityStationData })
      .mockResolvedValueOnce({ data: mockCityPassThroughRoutes })
    await fetchNewArrivalsInfo(cityRouteName, city)

    state.arrivalsInfo.forward.forEach((item) => {
      expect(item.RouteName.Zh_tw).toBe(cityRouteName)
    })
  })

  it('可以取得公路客運的預估到站時間資料', async () => {
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

  it('先檢查是否已有此路線資料，若是無才會 call api', async () => {
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

  it('若是無此路線會顯示', () => {})

  it('若是此路線只有單向資料也可以運作', () => {})
})
