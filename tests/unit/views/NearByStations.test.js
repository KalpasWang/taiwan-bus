import { render, screen, waitFor, within } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { describe, it, beforeAll, vi, expect, beforeEach } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NearByStations from '@/views/NearByStations.vue'
import StationPage from '@/views/StationPage.vue'
import { state } from '@/composables/bus'
import { api } from '@/composables/api'
import {
  mockUserPosition,
  mockNearbyResponse
} from '../../../src/composables/constants'

// vi.mock('../../../src/composables/bus', async () => {
//   const original = await vi.importActual('../../../src/composables/bus')
//   return {
//     ...original,
//     useNearBy: vi.fn(() => {
//       return vi.fn(() => {
//         state.nearByStations = mockNearbyResponse
//       })
//     })
//   }
// })

const mockGeolocation = {
  watchPosition: vi.fn((success) => success(mockUserPosition))
}
vi.stubGlobal('navigator', { geolocation: mockGeolocation })
vi.mock('../../../src/composables/api.js')
api.get.mockResolvedValue({ data: mockNearbyResponse })

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/nearby', component: NearByStations, name: 'NearBy' },
  {
    path: '/stations/:city/:stationId',
    component: StationPage,
    name: 'StationPage'
  }
]

let user
let router

describe('NearByStations 頁面', () => {
  beforeAll(() => {
    user = userEvent.setup()
  })

  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes
    })
  })

  it('讀取資料發生錯誤會顯示訊息', () => {})

  describe('Happy Path', () => {
    it('顯示使用者附近公車站位與距離', async () => {
      render(NearByStations, {
        global: {
          plugins: [router]
        }
      })

      const stations = await screen.findAllByRole('listitem')
      stations.forEach((station, i) => {
        const stationName = state.nearByStations[i].StationName.Zh_tw
        const distance = state.nearByStations[i].Distance
        expect(station.textContent).toMatch(stationName)
        expect(station.textContent).toMatch(distance.toString())
      })
    })

    it('選擇其中一個公車站位會連結到公車站位頁面', async () => {
      render(NearByStations, {
        global: {
          plugins: [router]
        }
      })

      expect(screen.getByTestId('nearby')).toBeInTheDocument()

      const listitems = await screen.findAllByRole('listitem')
      const firstLink = within(listitems[0]).getByRole('link')
      await user.click(firstLink)
      waitFor(() => {
        const newPage = screen.getByTestId('station-page')
        expect(newPage).toBeInTheDocument()
      })
    })

    it('點擊地圖圖示會切換到使用者附近的地圖', async () => {
      render(NearByStations, {
        global: {
          plugins: [router]
        }
      })
      expect(screen.getByTestId('nearby')).toBeInTheDocument()
      const mapBtn = await screen.findByTitle('地圖')
      await user.click(mapBtn)
      waitFor(() => {
        expect(screen.getByTestId('nearby-map')).toBeInTheDocument()
      })
    })
  })
})
