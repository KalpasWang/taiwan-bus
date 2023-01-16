import { useNearBy, state } from '@/composables/bus'
import { describe, it, beforeAll, vi, expect, afterEach } from 'vitest'
import { api } from '../../../src/composables/api'
import { delay } from '../../../src/composables/utilities'
import {
  mockUserPosition,
  mockNearbyResponse,
  mockUserPosition2,
  mockNearbyResponse2
} from '../../../src/composables/constants'

describe('useNearBy 函式', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('沒有 geolocation 資料', () => {
    const watchNearBy = useNearBy()
    vi.stubGlobal('navigator', { geolocation: null })
    expect(() => watchNearBy()).toThrowError()
  })

  describe('Happy Path', () => {
    let watchNearBy

    beforeAll(() => {
      watchNearBy = useNearBy()
      const mockGeolocation = {
        watchPosition: vi.fn((success) => success(mockUserPosition))
      }
      vi.stubGlobal('navigator', { geolocation: mockGeolocation })
      vi.mock('../../../src/composables/api.js')
      api.get.mockResolvedValue({ data: mockNearbyResponse })
    })

    it('radius 150，傳回包含九個公車站位、距離的陣列', async () => {
      watchNearBy(150)
      await delay(10)
      // console.log(state.nearByStations)
      expect(state.nearByStations).toHaveLength(9)
      state.nearByStations.forEach((station) => {
        expect(station).toHaveProperty('Distance')
        expect(station.Distance).toBeGreaterThan(0)
        expect(station.Distance).toBeLessThanOrEqual(150)
      })
    })

    it('站位資料依照距離遠近排序，距離近的在前面', async () => {
      watchNearBy(150)
      await delay(10)
      let prevDistance = 0
      state.nearByStations.forEach((station) => {
        expect(station.Distance).toBeGreaterThanOrEqual(prevDistance)
        prevDistance = station.Distance
      })
    })

    it('當 uer 位置改變，公車站位資料也會更新', async () => {
      const mockGeolocation2 = {
        watchPosition: vi.fn(async (success) => {
          success(mockUserPosition)
          await delay(10)
          success(mockUserPosition2)
        })
      }
      vi.stubGlobal('navigator', { geolocation: mockGeolocation2 })
      api.get
        .mockResolvedValueOnce({ data: mockNearbyResponse })
        .mockResolvedValueOnce({ data: mockNearbyResponse2 })

      watchNearBy(150)
      await delay(5)
      expect(state.nearByStations).toHaveLength(9)
      await delay(20)
      expect(state.nearByStations).toHaveLength(2)
    })
  })
})
