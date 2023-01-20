import { describe, expect, it, vi } from 'vitest'
import { state, useArrivalsInfo } from '@/composables/bus'
import { mockCityArrivals } from '@/composables/constants'
import { getCityCode } from '../../../src/composables/utilities'
import { fetchEstimatedTimeOfArrival } from '../../../src/composables/api'

const cityRouteName = '綠1'
const city = 'Taipei'
const intercityRouteName = '0968'
const oneDirectionRouteName = '1123'

vi.mock('../../../src/composables/api', async () => {
  return {
    fetchEstimatedTimeOfArrival: vi.fn()
  }
})

describe('useArrivalsInfo function', () => {
  it('可以取得市區公車的預估到站時間資料', async () => {
    const { fetchNewArrivalsInfo } = useArrivalsInfo(cityRouteName, city)
    // console.log(fetchEstimatedTimeOfArrival)
    fetchEstimatedTimeOfArrival.mockResolvedValueOnce({
      data: mockCityArrivals
    })
    await fetchNewArrivalsInfo()

    state.arrivalsInfo.forward.forEach((item) => {
      expect(item.RouteName.Zh_tw).toBe(cityRouteName)
    })
  })

  it('可以取得公路客運的預估到站時間資料', async () => {})

  it('先檢查是否已有此路線資料，若是無才會 call api', async () => {
    // 市區公車
    // 公路客運
  })

  it('若是無此路線會顯示', () => {})

  it('若是此路線只有單向資料也可以運作', () => {})
})
