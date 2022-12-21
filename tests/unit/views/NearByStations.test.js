import { render, screen } from '@testing-library/vue'
import { describe, it, beforeAll, vi, expect, afterEach } from 'vitest'
import { RouterLinkStub } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import NearByStations from '@/views/NearByStations.vue'
import StationPage from '@/views/StationPage.vue'
import { state } from '@/composables/bus'
import { mockNearbyResponse } from '@/composables/constants'

vi.mock('../../../src/composables/bus', async () => {
  const original = await vi.importActual('../../../src/composables/bus')
  return {
    ...original,
    useNearBy: vi.fn(() => {
      return vi.fn(() => {
        state.nearByStations = mockNearbyResponse
      })
    })
  }
})
vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    go: vi.fn()
  }))
}))

describe('NearByStations 頁面', () => {
  it('讀取資料發生錯誤會顯示訊息', () => {})

  describe('Happy Path', () => {
    it('顯示使用者附近公車站位', async () => {
      render(NearByStations, {
        global: {
          stubs: {
            RouterLink: RouterLinkStub
          }
        }
      })
      // console.log(state)
      const stations = await screen.findAllByRole('listitem')
      // screen.debug()
      stations.forEach((station, i) => {
        const stationName = state.nearByStations[i].StationName.Zh_tw
        expect(station.textContent).toMatch(stationName)
      })
    })

    it('選擇其中一個公車站位會連結到公車站位頁面', () => {
      const router = createRouter({
        history: createWebHistory(),
        routes: [
          { path: '/nearby', component: NearByStations },
          { path: '/stations/:city/:stationId', component: StationPage }
        ]
      })

      render(NearByStations, {
        global: {
          plugins: [router]
        }
      })

      expect(screen.getByTestId('NearByStations')).toBeInTheDocument()
    })

    it('點擊地圖圖示會顯示使用者附近的地圖', () => {})
  })
})
