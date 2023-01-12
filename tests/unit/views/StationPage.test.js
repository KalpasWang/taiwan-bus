import { render, screen, waitFor } from '@testing-library/vue'
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
import StationPage from '@/views/StationPage.vue'
import { state } from '@/composables/bus'
import {
  mockCityStationData,
  mockCityPassThroughRoutes
} from '@/composables/constants'
import { api } from '../../../src/composables/api'

const options = {
  props: {
    city: 'HualienCounty',
    stationId: '129575'
  },
  global: {
    plugins: [router]
  }
}

describe('Station Page', () => {
  beforeEach(() => {
    api.get = vi
      .fn()
      .mockResolvedValueOnce({ data: mockCityStationData })
      .mockResolvedValueOnce({ data: mockCityPassThroughRoutes })
  })

  it('讀取資料會顯示 loader', () => {
    render(StationPage, options)
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('顯示站位名稱', () => {
    render(StationPage, options)
    waitFor(() => {
      expect(
        screen.getByText(state.station.StationName.Zh_tw)
      ).toBeInTheDocument()
    })
  })

  it('路線列表包含前往的終點站與 route page 的連結', () => {
    render(StationPage, options)
    waitFor(() => {
      const routesList = screen.getAllByRole('listitem')
      expect(routesList.length).toBe(state.station.routes.length)
      routesList.forEach((route, i) => {
        const routeData = state.station.routes[i]
        expect(route.textContent).toMatch(routeData.RouteName.Zh_tw)
        expect(route.textContent).toMatch(routeData.DestinationStopNameZh)
        const link = route.find('a')
        const routeName = routeData.RouteName.Zh_tw
        const routeCity = routeData.City
        expect(link.getAttribute('href')).toBe(
          `/routes/${routeCity}/${routeName}`
        )
      })
    })
  })
  it('先檢查是否已有此站位資料，若是無才會 call api', () => {})
})
