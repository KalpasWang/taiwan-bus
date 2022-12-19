import { render, screen } from '@testing-library/vue'
import { describe, it, beforeAll, vi, expect, afterEach } from 'vitest'
import { RouterLinkStub } from '@vue/test-utils'
import NearByStations from '@/views/NearByStations.vue'
import { state } from '@/composables/bus'
import { mockNearbyResponse } from '@/composables/constants'

describe('NearByStations 頁面', () => {
  it('讀取資料發生錯誤會顯示訊息', () => {})

  describe('Happy Path', () => {
    beforeAll(() => {
      vi.mock('../../../src/composables/bus/useNearBy.js', () => {
        return {
          default: {
            useNearBy: vi.fn()
          }
        }
      })
      vi.mock('vue-router', () => ({
        useRouter: vi.fn(() => ({
          go: vi.fn()
        }))
      }))
      // const watchNearBy = useNearBy()
      // watchNearBy.mockImplementation(() => {
      //   state.nearByStations = mockNearbyResponse
      //   console.log(state.nearByStations)
      // })
      //
    })

    it('顯示使用者附近公車站位', async () => {
      render(NearByStations, {
        global: {
          stubs: {
            RouterLink: RouterLinkStub
          }
        }
      })
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
