import { render, screen } from '@testing-library/vue'
import { describe, it, beforeAll, vi, expect, afterEach } from 'vitest'
import NearByStations from '@/views/NearByStations.vue'
import { state } from '@/composables/bus'
import { mockNearbyResponse } from '@/composables/constants'

describe('NearByStations 頁面', () => {
  it('讀取資料發生錯誤會顯示訊息', () => {})

  describe('Happy Path', () => {
    beforeAll(() => {
      // console.log(state.nearByStations)
      vi.mock('@/composables/bus/useNearBy', () => {
        return {
          default: { myDefaultKey: vi.fn() },
          useNearBy: () => {
            return () => {
              state.nearByStations = mockNearbyResponse
              console.log(state.nearByStations)
            }
          }
        }
      })
    })

    it('顯示使用者附近公車站位', async () => {
      render(NearByStations)
      const stations = await screen.findAllByRole('listitem')
      screen.debug()
      stations.forEach((station, i) => {
        const stationName = state.NearByStations[i].StationName.Zh_tw
        expect(station.textContent).toMatch(stationName)
      })
    })

    it('選擇其中一個公車站位會連結到公車站位頁面', () => {})

    it('點擊地圖圖示會顯示使用者附近的地圖', () => {})
  })
})
