import { describe, expect, it, vi } from 'vitest'
import { state, useArrivalsInfo } from '@/composables/bus'
import {
  mockG1Arrivals,
  mockG1StopsOfRoute,
  mock0968Arrivals,
  mock0968StopsOfRoute,
  mock1123Arrivals,
  mock1123StopsOfRoute
} from '@/composables/constants'
import {
  fetchEstimatedTimeOfArrival,
  fetchStopsOfRoute
} from '../../../src/composables/api'

vi.mock('../../../src/composables/api', async () => {
  const mod = await vi.importActual('../../../src/composables/api')
  return {
    ...mod,
    fetchEstimatedTimeOfArrival: vi.fn(),
    fetchStopsOfRoute: vi.fn()
  }
})

const cityRouteName = '綠1'
const city = 'Taipei'
const intercityRouteName = '0968'
const oneDirectionIntercityRouteName = '1123'

describe('useArrivalsInfo function', () => {
  it('可以取得市區公車(台北市 綠1 無 StopSequence)的預估到站時間資料', async () => {
    const { fetchNewArrivalsInfo } = useArrivalsInfo(cityRouteName, city)
    fetchEstimatedTimeOfArrival.mockResolvedValueOnce(mockG1Arrivals)
    fetchStopsOfRoute.mockResolvedValueOnce(mockG1StopsOfRoute)
    await fetchNewArrivalsInfo()

    state.arrivalsInfo.forward.forEach((item, i) => {
      expect(item.Direction).toBe(0)
      expect(item.RouteName.Zh_tw).toBe(cityRouteName)
      expect(item.StopSequence).toBe(i + 1)
    })
    state.arrivalsInfo.backward.forEach((item, i) => {
      expect(item.Direction).toBe(1)
      expect(item.RouteName.Zh_tw).toBe(cityRouteName)
      expect(item.StopSequence).toBe(i + 1)
    })
  })

  it('可以取得公路客運(0968 有 StopSequence)的預估到站時間資料', async () => {
    const { fetchNewArrivalsInfo } = useArrivalsInfo(intercityRouteName)
    fetchEstimatedTimeOfArrival.mockReturnValueOnce(mock0968Arrivals)
    fetchStopsOfRoute.mockReturnValueOnce(mock0968StopsOfRoute)
    await fetchNewArrivalsInfo()

    state.arrivalsInfo.forward.forEach((item, i) => {
      expect(item.Direction).toBe(0)
      expect(item.RouteName.Zh_tw).toBe(intercityRouteName)
      expect(item.StopSequence).toBe(i + 1)
    })
    state.arrivalsInfo.backward.forEach((item, i) => {
      expect(item.Direction).toBe(1)
      expect(item.RouteName.Zh_tw).toBe(intercityRouteName)
      expect(item.StopSequence).toBe(i + 1)
    })
  })

  it('若是無此路線會顯示', () => {})

  it('若是此路線只有單向資料(1123)也可以運作', async () => {
    const { fetchNewArrivalsInfo } = useArrivalsInfo(
      oneDirectionIntercityRouteName
    )
    fetchEstimatedTimeOfArrival.mockReturnValueOnce(mock1123Arrivals)
    fetchStopsOfRoute.mockReturnValueOnce(mock1123StopsOfRoute)
    await fetchNewArrivalsInfo()

    expect(state.arrivalsInfo.forward.length).toBe(mock1123Arrivals.length)
    state.arrivalsInfo.forward.forEach((item, i) => {
      expect(item.Direction).toBe(0)
      expect(item.RouteName.Zh_tw).toBe(oneDirectionIntercityRouteName)
    })
    expect(state.arrivalsInfo.backward.length).toBe(0)
  })

  it('可以取得市區公車路線上的公車資料', async () => {})
})