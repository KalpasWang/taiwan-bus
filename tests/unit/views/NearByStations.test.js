import { render, screen, within } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { describe, it, beforeAll, vi, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
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

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/nearby', component: NearByStations, name: 'NearBy' },
    {
      path: '/stations/:city/:stationId',
      component: StationPage,
      name: 'StationPage'
    }
  ]
})

let user

describe('NearByStations 頁面', () => {
  beforeAll(() => {
    user = userEvent.setup()
  })

  it('讀取資料發生錯誤會顯示訊息', () => {})

  describe('Happy Path', () => {
    it('顯示使用者附近公車站位', async () => {
      render(NearByStations, {
        global: {
          plugins: [router]
        }
      })

      const stations = await screen.findAllByRole('listitem')
      stations.forEach((station, i) => {
        const stationName = state.nearByStations[i].StationName.Zh_tw
        expect(station.textContent).toMatch(stationName)
      })
    })

    it('選擇其中一個公車站位會連結到公車站位頁面', async () => {
      render(NearByStations, {
        global: {
          plugins: [router]
        }
      })

      expect(screen.getByTestId('nearby')).toBeInTheDocument()

      // const stationName = state.nearByStations[0].StationName.Zh_tw
      const listitems = await screen.findAllByRole('listitem')
      const firstLink = within(listitems[0]).getByRole('link')
      screen.debug(firstLink)
      await user.click(firstLink)
      const page = await screen.findByTestId('station-page', null, {
        timeout: 2000
      })
      expect(page).toBeInTheDocument()
    })

    it('點擊地圖圖示會顯示使用者附近的地圖', () => {})
  })
})
