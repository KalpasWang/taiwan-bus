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
import { getCityCode } from '../../../src/composables/utilities'
import { api } from '../../../src/composables/api'

const cityRouteName = '綠1'
const city = 'Taipei'
const intercityRouteName = '0968'
const oneDirectionIntercityRouteName = '1123'

describe('useArrivalsInfo function', () => {
  it('可以取得市區公車(台北市 綠1 無 StopSequence)的預估到站時間資料', async () => {
    const { fetchNewArrivalsInfo } = useArrivalsInfo(cityRouteName, city)
    api.get = vi
      .fn()
      .mockResolvedValueOnce({
        data: mockG1Arrivals
      })
      .mockResolvedValueOnce({
        data: mockG1StopsOfRoute
      })
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
    api.get = vi
      .fn()
      .mockResolvedValueOnce({
        data: mock0968Arrivals
      })
      .mockResolvedValueOnce({
        data: mock0968StopsOfRoute
      })
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
    api.get = vi
      .fn()
      .mockResolvedValueOnce({
        data: mock1123Arrivals
      })
      .mockResolvedValueOnce({
        data: mock1123StopsOfRoute
      })
    await fetchNewArrivalsInfo()

    expect(state.arrivalsInfo.forward.length).toBe(mock1123Arrivals.length)
    state.arrivalsInfo.forward.forEach((item, i) => {
      expect(item.Direction).toBe(0)
      expect(item.RouteName.Zh_tw).toBe(oneDirectionIntercityRouteName)
    })
    expect(state.arrivalsInfo.backward.length).toBe(0)
  })
})
