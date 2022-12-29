import { getByText, render, screen, waitFor } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import {
  describe,
  it,
  beforeAll,
  vi,
  expect,
  beforeEach,
  afterEach
} from 'vitest'
import { router } from '@/router'
import NearByStations from '@/views/NearByStations.vue'
import { state } from '@/composables/bus'
import { api } from '@/composables/api'
import { getCityByCityCode } from '@/composables/utilities'
import {
  mockUserPosition,
  mockNearbyResponse
} from '../../../src/composables/constants'

const mockGeolocation = {
  watchPosition: vi.fn((success) => success(mockUserPosition))
}
vi.stubGlobal('navigator', { geolocation: mockGeolocation })
vi.mock('../../../src/composables/api.js')

let user

describe('NearByStations 頁面', () => {
  beforeAll(() => {
    user = userEvent.setup()
  })

  beforeEach(() => {
    api.get.mockResolvedValue({ data: mockNearbyResponse })
  })

  afterEach(() => {
    api.get.mockReset()
  })

  it('讀取資料發生錯誤會顯示訊息', async () => {
    api.get.mockReset()
    api.get.mockRejectedValue(new Error('Data error'))
    render(NearByStations, {
      global: {
        plugins: [router]
      }
    })
    await waitFor(() => {
      // screen.debug()
      expect(screen.getByText(/錯誤/)).toBeInTheDocument()
    })
  })

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

    it('點擊地圖圖示會切換到使用者附近的地圖', async () => {
      render(NearByStations, {
        global: {
          plugins: [router]
        }
      })
      expect(screen.getByTestId('nearby')).toBeInTheDocument()
      expect(await screen.findByTestId('nearby-list')).toBeInTheDocument()
      // expect(lmap).not.toHaveBeenCalled()
      const mapBtn = await screen.findByTitle('地圖')
      await user.click(mapBtn)
      await waitFor(() => {
        expect(screen.getByTestId('nearby-map')).toBeInTheDocument()
        // expect(lmap).toHaveBeenCalledOnce()
      })
    })

    it('公車站位包含公車站位頁面的link', async () => {
      render(NearByStations, {
        global: {
          plugins: [router]
        }
      })

      expect(screen.getByTestId('nearby')).toBeInTheDocument()
      expect(await screen.findByTestId('nearby-list')).toBeInTheDocument()
      state.nearByStations.forEach((station, i) => {
        const link = screen.getByTestId('station-link' + (i + 1))
        const stationId = station.StationID
        const city = getCityByCityCode(station.StationUID.slice(0, 3))
        expect(link).toBeInTheDocument()
        expect(link.getAttribute('href')).toBe(`/stations/${city}/${stationId}`)
      })
    })
  })
})
